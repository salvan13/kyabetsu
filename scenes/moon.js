import { common, commonEntities } from "./common.js";

export const moon = {
  id: "moon",
  bg: "radial-gradient(circle at 50% 100%, var(--c2) 78%, var(--c2) 75%, var(--c3) 80%)",
  ...common,
  entities: [
    ...commonEntities,
    {
      id: "c",
      sprite: "c",
      props: {
        x: 42,
        y: 50,
        w: 6 * 2,
        h: 8 * 2
      }
    },
    {
      id: "area",
      sprite: "area",
      props: {
        x: 50,
        y: 53,
        w: 50,
        h: 15,
        c: "rgba(0,0,0,.2)",
      },
      onpress(...args) {
        this.exec("look", ...args);
        this.exec("move", ...args);
      }
    },
    {
      id: "coso",
      sprite: "coso",
      props: {
        x: 58,
        y: 49,
        w: 6 * 2,
        h: 8 * 2,
        scale: "-1 1"
      },
      actions: {
        use() {
          if (this.object === "duck") {
            this.exec("say", "coso", "Thanks for saving her ❤️");
          } else {
            this.exec("say", "coso", "We don't need that here");
          }
        },
        "talk-to"() {
          if (this.state.end) {
            this.exec("talk", [
              ["coso", "That's all, my friend"],
              ["coso", "Thanks for playing ❤️"]
            ]);
            setTimeout(() => {
              this.setScene("end");
            }, 5000);
          } else {
            this.exec("talk", [
              ["c", "Woah we are on the Moon!"],
              ["coso", "Tomorrow 13th September"],
              ["coso", "The world is over"],
              ["coso", "But we are safe here"],
              ["c", "Where are we going?"],
              ["coso", "Where the future is not written yet"]
            ]);
            this.state.end = 1;
          }
        }
      }
    }
  ]
};
