
import DevPic from "../../public/assets/imgs/dev-1.jpg"
import EngineerPic from "../../public/assets/imgs/levels/engineer-2.png"
import TechBrainPic from "../../public/assets/imgs/levels/tech-brain-1.png"
import RepairPic from "../../public/assets/imgs/levels/repair-2.png"
import AbsPic from "../../public/assets/imgs/spark-2.png"


// https://www.electronicshub.org/symbols/


export const DUMMY_FEEDS = {
  "123": {
    title: "The Delevoper",
    text: "Sparkplay is developed by yours truly, 👨🏿‍💻Precious Nwoaha aka Pinqode, He likes to do stuff that's worth it.",
    date: "Day 01",
    image: DevPic,
    link: {
      text: "Github",
      url: "https://github.com/preciousnwaoha",
    },
  },
  "124": {
    title: "About SparkPlay 🎇",
    text: "Sparkplay is a trivia Ed-Game design to teach electrical engineering concepts in a fun way!",
    date: "9 Feb",
    image: "/assets/imgs/bulb-in-dark.jpg",
    link: {
      text: "Github Link",
      url: "https://github.com/preciousnwaoha/sparkplay",
    },
  }
}


/**
 * GAME
 */

// unit => game => level
export const DUMMY_GAMES = {
  "1": {
      name: "Cicuitry 1",
      color: "color3",
      image: "/assets/imgs/levels/engineer-2.png",
      subLevels: 1
  },
  "2": {
      name: "Cicuitry 2",
      color: "secondary",
      image: "/assets/imgs/levels/tech-brain-1.png",
      subLevels: 1
  },
  "3": {
      name: "Cicuitry 3",
      color: "color2",
      image: "/assets/imgs/levels/repair-2.png",
      subLevels: 1
  }
}

export const DUMMY_GAME_DATA = {
  "unit-1": {
    "game-1": {
      "level-1": {
          answerOptions: ["wire", "connected wires", "unconnected wires", "switch", "ac supply", "input bus line", "output bus line", "terminal", "bus line", "Push Button (Normally Open)", "Push Button (Normally Closed)", "SPST Switch", "SPDT Switch", "DPST Switch", "DPDT Switch", "relay switch", "ac supply", "dc supply", "Constant Current Source", "Single Cell Battery", "multi Cell Battery", "Sinusoidal Generator", "pulse Generator", "triangular Generator"],
          pointsPerGame: 2,
          games: [
            {
              id: "123-1",
              component: "wire",
              image: "wire",
              function: "Represents a conductor that conducts electrical current. Also called a power line or electric line or wire",
              question: "What does this represent?",
          
            },
            {
              id: "123-2",
              component: "connected wires",
              image: "connected-wires",
              function: "Represents the connection of two conductors. Dot shows the junction point.",
              question: "What does this represent?",
            },
            {
              id: "123-3",
              component: "unconnected wires",
              image: "unconnected-wires",
              function: "Represents two unconnected wires/conductors.",
              question: "What does this represent?",
            },
            {
              id: "123-4",
              component: "input bus line",
              image: "input-bus-line",
              function: "Represents a bus for input or incoming data..",
              question: "What does this represent?",
            },
            {
              id: "123-5",
              component: "output bus line",
              image: "output-bus-line",
              function: "Represents a bus for output or outgoing data.",
              question: "What does this represent?",
            },
            {
              id: "123-6",
              component: "terminal",
              image: "terminal",
              function: "Represents start or end point.",
              question: "What does this represent?",
            },
          ]
      }
    },

    "game-2": {
      "level-1": {
        answerOptions: ["wire", "connected wires", "unconnected wires", "switch", "ac supply", "input bus line", "output bus line", "terminal", "bus line", "Push Button (Normally Open)", "Push Button (Normally Closed)", "SPST Switch", "SPDT Switch", "DPST Switch", "DPDT Switch", "relay switch", "ac supply", "dc supply", "Constant Current Source", "Single Cell Battery", "multi Cell Battery", "Sinusoidal Generator", "pulse Generator", "triangular Generator"],
          pointsPerGame: 2,
          games: [
            {
              id: "123-7",
              component: "bus line",
              image: "bus-line",
              function: "Represents a number of conductors joined together to form a bus wire.",
              question: "What does this represent?",
            },
            {
              id: "123-8",
              component: "Push Button (Normally Open)",
              image: "push-button-normally-open",
              function: "This switch is in ON state when the button is pressed otherwise it is in OFF state.",
              question: "What does this represent?",
            },
            {
              id: "123-9",
              component: "Push Button (Normally Closed)",
              image: "push-button-normally-closed",
              function: "This switch is initially in ON state. This goes to OFF state when it is released..",
              question: "What does this represent?",
            },
            {
              id: "123-10",
              component: "SPST Switch",
              image: "spst-switch",
              function: "ingle pole single throw is abbreviated as SPST. This acts as ON/OFF switch. Poles define the number of circuits it can be connected to and throws defines the number of positions that a pole connects.",
              question: "What does this represent?",
            },
            {
              id: "123-11",
              component: "SPDT Switch",
              image: "spdt-switch",
              function: "Single pole double throw is abbreviated as SPDT. This switch allows the current to flow in any one of the two directions by adjusting its position.",
              question: "What does this represent?",
            },
            {
              id: "123-12",
              component: "DPST Switch",
              image: "dpst-switch",
              function: "Double pole single throw is abbreviated as DPST. This switch can drive two circuits at a time.",
              question: "What does this represent?",
            },
            {
              id: "123-13",
              component: "DPDT Switch",
              image: "dpdt-switch",
              function: "Double pole double throw is the full form of DPDT. This can connect the four circuits by changing the position.",
              question: "What does this represent?",
            },
          ]
      }
    },

    "game-3": {
      "level-1": {
        answerOptions: ["wire", "connected wires", "unconnected wires", "switch", "ac supply", "input bus line", "output bus line", "terminal", "bus line", "Push Button (Normally Open)", "Push Button (Normally Closed)", "SPST Switch", "SPDT Switch", "DPST Switch", "DPDT Switch", "relay switch", "ac supply", "dc supply", "Constant Current Source", "Single Cell Battery", "multi Cell Battery", "Sinusoidal Generator", "pulse Generator", "triangular Generator"],
        pointsPerGame: 7,
        games: [
          {
            id: "123-14",
            component: "Relay Switch",
            image: "relay-switch-1",
            function: "This represents the relay switch. This can control the AC Loads using the DC voltage applied to the coil.",
            question: "What does this represent?",
          },
          {
            id: "123-15",
            component: "AC Supply",
            image: "ac-supply",
            function: "This represents AC supply in the circuit.",
            question: "What does this represent?",
          },
          {
            id: "123-16",
            component: "DC Supply",
            image: "dc-supply",
            function: "This represents the DC power supply. It applies DC supply to the circuit.",
            question: "What does this represent?",
          },
          {
            id: "123-17",
            component: "Constant Current Source",
            image: "constant-current-source",
            function: "The symbol represents an independent current source which delivers constant current.",
            question: "What does this represent?",
          },
          {
            id: "123-18",
            component: "Controlled current Source",
            image: "controlled-current-source",
            function: "It is a dependent current source. Usually depends on other sources (voltage or current).",
            question: "What does this represent?",
          },
          {
            id: "123-19",
            component: "Controlled Voltage Source",
            image: "controlled-voltage-source",
            function: "It is a dependent voltage source. Usually depends on other sources (voltage or current).",
            question: "What does this represent?",
          },
          {
            id: "123-20",
            component: "Single Cell Battery",
            image: "single-cell-battery",
            function: "This provides supply to the circuit.",
            question: "What does this represent?",
          },
          {
            id: "123-21",
            component: "Multi Cell Battery",
            image: "multi-cell-battery",
            function: "Combination of multiple single cell batteries or a single large cell battery. The voltage is usually higher.",
            question: "What does this represent?",
          },
          {
            id: "123-22",
            component: "Sinusoidal Generator",
            image: "sinusoidal-generator",
            function: "Represents sine wave generator.",
            question: "What does this represent?",
          },
          {
            id: "123-23",
            component: "Pulse Generator",
            image: "pulse-generator",
            function: "Represents pulse or square wave generator.",
            question: "What does this represent?",
          },
          {
            id: "123-24",
            component: "Triangular Generator",
            image: "triangular-generator",
            function: "Represents triangular wave generator.",
            question: "What does this represent?",
          },
        ]
      }
    }
  }
} 