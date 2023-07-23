const framelessSteps = [{
  id: 1,
  title: "Select the finish",
  itemsType: "default",
  showSelected: false,
  items: [{
    title: "Silver Mirror",
    img: "silver-mirror.jpg",
    table: [
      [635, 680, 816],
      [720, 760, 912],
      [780, 830, 996],
      [855, 970, 1164],
      [925, 995, 1194],
      [1140, 1220, 1464],
      [1220, 1335, 1602],
      [1330, 1440, 1728],
      [1360, 1470, 1764],
      [1680, 1900, 2280],
      [1710, 1940, 2328],
      [1800, 1960, 2352],
      [1850, 1980, 2376],
      [2100, 2425, 2890]
    ]
  },
  {
    title: "Grey Mirror",
    img: "grey-mirror.jpg",
    table: [
      [750, 810, 970],
      [860, 910, 1090],
      [930, 990, 1190],
      [1020, 1160, 1390],
      [1110, 1190, 1430],
      [1360, 1460, 1750],
      [1460, 1600, 1920],
      [1590, 1720, 2070],
      [1630, 1760, 2110],
      [2010, 2280, 2730],
      [2050, 2320, 2790],
      [2160, 2350, 2820],
      [2220, 2370, 2850],
      [2520, 2910, 3460],
    ]
  },
  {
    title: "Super White glass",
    img: "super-white-glass.jpg",
    table: [
      [780, 810, 970],
      [925, 950, 1140],
      [950, 980, 1176],
      [1080, 1125, 1350],
      [1115, 1150, 1380],
      [1380, 1420, 1704],
      [1570, 1610, 1932],
      [1620, 1665, 1962],
      [2130, 2220, 2664],
      [2160, 2250, 2700],
      [2200, 2270, 2724],
      [2230, 2300, 2760],
      [2670, 2783, 2890],
    ]
  },
  {
    title: "Black glass",
    img: "black-glass.jpg",
    table: [
      [730, 765, 918],
      [855, 890, 1065],
      [880, 915, 1095],
      [995, 1040, 1245],
      [1030, 1065, 1275],
      [1270, 1325, 1590],
      [1445, 1495, 1795],
      [1480, 1515, 1815],
      [1495, 1550, 1860],
      [1930, 2030, 2435],
      [2030, 2080, 2495],
      [2060, 2130, 2555],
      [2390, 2570, 2890]
    ]
  },
  ]
},
{
  id: 2,
  title: "Select the Frames and tracks color",
  itemsType: "preview",
  showSelected: true,
  items: [{
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
  id: 3,
  title: "Select the Tracks",
  itemsType: "default",
  showSelected: true,
  items: [{
    title: "Double 82 mm",
    img: "framed-silver-doors.jpg",
    trackValue: 'double'
  },
  {
    title: "Triple 122 mm",
    img: "framed-silver-doors.jpg",
    trackValue: 'triple'
  },
  ]
},
{
  id: 4,
  title: "Select the door type",
  itemsType: "final",
  showSelected: true,
},
];

export default framelessSteps
