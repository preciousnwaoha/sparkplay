
import DevPic from "../../public/assets/imgs/dev-1.jpg"
import WallPic from "../../public/assets/imgs/wall2.png"
import AbsPic from "../../public/assets/imgs/abs.jpg"


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
    image: AbsPic,
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
  "123": {
      name: "Cicuitry 1",
      color: "color3",
      image: "x",
      subLevels: 3
  },
  "124": {
      name: "Cicuitry 2",
      color: "secondary",
      image: "x",
      subLevels: 3
  },
  "125": {
      name: "Cicuitry 3",
      color: "color2",
      image: "x",
      subLevels: 3
  }
}

export const DUMMY_GAME_DATA = {
  pointsPerGame: 2,
  games: [
  {
    id: "123-1",
    component: "wire",
    image: "wire",
    function: "Represents a conductor that conducts electrical current. Also called a power line or electric line or wire",
    options: ["wire", "resistor",  "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",

  },
  {
    id: "123-2",
    component: "Connected Wires",
    image: "connected-wires",
    function: "Represents the connection of two conductors. Dot shows the junction point.",
    options: ["Connected Wires", "diode", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-3",
    component: "unconnected wires",
    image: "unconnected-wires",
    function: "Represents two unconnected wires/conductors.",
    options: ["unconnected wires","diode", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-4",
    component: "input bus line",
    image: "input-bus-line",
    function: "Represents a bus for input or incoming data..",
    options: ["input bus line", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-5",
    component: "Output Bus Line",
    image: "output-bus-line",
    function: "Represents a bus for output or outgoing data.",
    options: ["Output Bus Line", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-6",
    component: "terminal",
    image: "terminal",
    function: "Represents start or end point.",
    options: ["terminal", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  
  {
    id: "123-7",
    component: "Bus Line",
    image: "bus-line",
    function: "Represents a number of conductors joined together to form a bus wire.",
    options: ["Bus Line", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-8",
    component: "Push Button (Normally Open)",
    image: "push-button-normally-open",
    function: "This switch is in ON state when the button is pressed otherwise it is in OFF state.",
    options: ["Push Button (Normally Open)", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-9",
    component: "Push Button (Normally Closed)",
    image: "push-button-normally-closed",
    function: "This switch is initially in ON state. This goes to OFF state when it is released..",
    options: ["Push Button (Normally Closed)", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-10",
    component: "SPST Switch",
    image: "spst-switch",
    function: "ingle pole single throw is abbreviated as SPST. This acts as ON/OFF switch. Poles define the number of circuits it can be connected to and throws defines the number of positions that a pole connects.",
    options: ["SPST Switch", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-11",
    component: "SPDT Switch",
    image: "spdt-switch",
    function: "Single pole double throw is abbreviated as SPDT. This switch allows the current to flow in any one of the two directions by adjusting its position.",
    options: ["SPDT Switch", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-12",
    component: "DPST Switch",
    image: "dpst-switch",
    function: "Double pole single throw is abbreviated as DPST. This switch can drive two circuits at a time.",
    options: ["DPST Switch", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-13",
    component: "DPDT Switch",
    image: "dpdt-switch",
    function: "Double pole double throw is the full form of DPDT. This can connect the four circuits by changing the position.",
    options: ["DPDT Switch", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-14",
    component: "Relay Switch",
    image: "relay-switch-1",
    function: "This represents the relay switch. This can control the AC Loads using the DC voltage applied to the coil.",
    options: ["diode", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-15",
    component: "Relay Switch",
    image: "ac-supply",
    function: "This represents AC supply in the circuit.",
    options: ["AC Supply", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-16",
    component: "DC Supply",
    image: "dc-supply",
    function: "This represents the DC power supply. It applies DC supply to the circuit.",
    options: ["DC Supply", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-17",
    component: "Constant Current Source",
    image: "constant-current-source",
    function: "The symbol represents an independent current source which delivers constant current.",
    options: ["Constant Current Source", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-18",
    component: "Controlled current Source",
    image: "controlled-current-source",
    function: "It is a dependent current source. Usually depends on other sources (voltage or current).",
    options: ["Controlled current Source", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-19",
    component: "Controlled Voltage Source",
    image: "controlled-voltage-source",
    function: "It is a dependent voltage source. Usually depends on other sources (voltage or current).",
    options: ["Controlled Voltage Source", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-20",
    component: "Single Cell Battery",
    image: "single-cell-battery",
    function: "This provides supply to the circuit.",
    options: ["Single Cell Battery", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-21",
    component: "Multi Cell Battery",
    image: "multi-cell-battery",
    function: "Combination of multiple single cell batteries or a single large cell battery. The voltage is usually higher.",
    options: ["Multi Cell Battery", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-22",
    component: "Sinusoidal Generator",
    image: "sinusoidal-generator",
    function: "Represents sine wave generator.",
    options: ["Sinusoidal Generator", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-23",
    component: "Pulse Generator",
    image: "pulse-generator",
    function: "Represents pulse or square wave generator.",
    options: ["Pulse Generator", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  {
    id: "123-24",
    component: "Triangular Generator",
    image: "triangular-generator",
    function: "Represents triangular wave generator.",
    options: ["Triangular Generator", "resistor", "inductor", "capacitor"],
    answer: 0,
    question: "What does this represent?",
  },
  ]
}

