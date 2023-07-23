const FramedSteps = [
  {
    id: 1,
    title: "Select the finish",
    itemsType: "default",
    showSelected: false,
    items: [
      {
        title: "Silver Mirror",
        img: "silver-mirror.jpg",
        table: [
          [405, 445, 535],
          [464, 515, 615],
          [510, 560, 670],
          [565, 625, 750],
          [615, 695, 835],
          [760, 810, 970],
          [830, 895, 1075],
          [880, 975, 1170],
          [920, 995, 1195],
          [1100, 1220, 1465],
          [1130, 1250, 1500],
          [1210, 1370, 1645],
          [1230, 1390, 1665],
          [1385, 1535, 1835]
        ]
      },
      {
        title: "Grey Mirror",
        img: "grey-mirror.jpg",
        table: [
          [480, 535, 640],
          [560, 620, 740],
          [610, 670, 805],
          [680, 750, 900],
          [740, 835, 1000],
          [910, 970, 1165],
          [990, 1075, 1290],
          [1055, 1170, 1405],
          [1105, 1195, 1435],
          [1320, 1465, 1760],
          [1355, 1500, 1800],
          [1450, 1645, 1975],
          [1475, 1670, 1995],
          [1660, 1840, 2200]
        ]
      },
      {
        title: "White Vinyl",
        img: "framed-silver-doors.jpg",
        table: [
          [345, 370, 445],
          [425, 460, 550],
          [445, 485, 580],
          [480, 515, 615],
          [500, 540, 645],
          [645, 695, 835],
          [690, 745, 895],
          [710, 760, 910],
          [730, 835, 1000],
          [930, 1000, 1200],
          [960, 1060, 1270],
          [980, 1060, 1295],
          [1170, 1258, 1505],
        ]
      },
      {
        title: "MDF",
        img: "white-mdf.jpg",
        table: [
          [540, 590, 690],
          [690, 725, 770],
          [710, 745, 830],
          [840, 870, 890],
          [865, 970, 960],
          [1020, 1080, 1190],
          [1210, 1270, 1300],
          [1250, 1290, 1400],
          [1290, 1310, 1490],
          [1680, 1740, 1810],
          [1740, 1800, 1870],
          [1780, 1920, 1950],
          [1820, 1980, 2010],
          [2090, 2150, 2230]
        ]

      },
      {
        title: "Super White glass",
        img: "super-white-glass.jpg",
        table: [
            [540, 590, 690],
            [690, 725, 770],
            [710, 745, 830],
            [840, 870, 890],
            [865, 970, 960],
            [1020, 1080, 1190],
            [1210, 1270, 1300],
            [1250, 1290, 1400],
            [1290, 1310, 1490],
            [1680, 1740, 1810],
            [1740, 1800, 1870],
            [1780, 1920, 1950],
            [1820, 1980, 2010],
            [2090, 2150, 2230]
        ]
      },
      {
        title: "Black glass",
        img: "black-glass.jpg",
        table: [
          [520, 570, 684],
          [615, 680, 816],
          [670, 700, 840],
          [780, 800, 960],
          [795, 830, 996],
          [970, 1015, 1218],
          [1110, 1170, 1404],
          [1130, 1190, 1428],
          [1150, 1200, 1440],
          [1530, 1570, 1884],
          [1560, 1600, 1920],
          [1570, 1640, 1968],
          [1590, 1660, 1992],
          [1920, 1970, 2364]
        ]
      },
    ]
  },
  {
    id: 2,
    title: "Select the door type",
    itemsType: "default",
    showSelected: true,
    items: [
      {
        title: "Slimline",
        img: "framed-silver-doors.jpg",
        doorType: "Slimline"
      },
      {
        title: "Standart",
        img: "framed-silver-doors.jpg",
        doorType: "Standart"
      },
    ]
  },
  {
    id: 3,
    title: "Select the Frames and tracks color",
    itemsType: "preview",
    showSelected: true,
    items: [
      {
        title: "White",
        img: "framed-super-white-glass.jpg",
        color: "#FFFFFF"
      },
      {
        title: "Matt Black",
        img: "framed-silver-doors-matt-black.jpg",
        color: "#14100F"
      },
      {
        title: "Chrome",
        img: "framed-super-white-chrome.jpg",
        color: "#A49F9B"
      },
      {
        title: "Matt Silver",
        img: "framed-silver-doors.jpg",
        color: "#D9D8D7"
      },
    ]
  },
  {
    id: 4,
    title: "Select the Tracks",
    itemsType: "default",
    showSelected: true,
    items: [
      {
        title: "Double 55mm",
        img: "framed-silver-doors.jpg",
        trackValue: "double"
      },
      {
        title: "Triple 82mm",
        img: "framed-silver-doors.jpg",
        trackValue: "triple"
      },
    ]
  },
  {
    id: 5,
    title: "Select the door type",
    itemsType: "final",
    showSelected: true,
  },
];

export default FramedSteps;
