const constructorSteps = [
  {
    id: 1,
    title: "DESIGN YOUR WARDROBE INSERTS:",
    img: "img/svg/top-shelf.svg",
    label: {
      text: "Total width, wall to wall, mm",
    },
    input: {
      value: null,
    },
    checkboxes: [
      {
        value: 1750,
        checked: false,
        showUnits: true
      },
      {
        value: 2050,
        checked: false,
        showUnits: true,
      },
    ],
    hangingRail: [
      {
        value: 2,
        name: "Double Hanging Rail",
        checked: false,
        showUnits: false
      },
      {
        value: 1,
        name: "Single Hanging Rail",
        checked: false,
        showUnits: false
      },
    ],
    notice: "Whole system suspended 250 mm above the floor",
    type: "start",
  },
  {
    id: 2,
    title: "ADD YOUR SHELVING UNITS:",
    type: "select",
    items: [
      {
        id: 1,
        name: "4 Drawers & 3 shelving unit",
        img: "img/svg/4-drawers-3-shelving-units.svg",
        resultImg: 'img/svg/4-drawers-3-shelving-units-final.svg',
        itemTable: [[375, 420],[420, 495]],
        checkboxes: [
          {
            value: 500,
            checked: false,
          },
          {
            value: 600,
            checked: false
          }
        ],
        counters: [
          {
            value: 500,
          },
          {
            value: 600,
          }
        ]
      },
      {

        id: 2,
        name: "2 Drawers & 3 shelving unit",
        img: "img/svg/2-drawers-3-shelving-unit.svg",
        resultImg: 'img/svg/2-drawers-3-shelving-unit-final.svg',
        itemTable: [[295, 375], [350, 420]],
        checkboxes: [
          {
            value: 500,
            checked: false

          },
          {
            value: 600,
            checked: false
          }
        ],
        counters: [
          {
            value: 500,

          },
          {
            value: 600,
          }
        ]
      },
      {
        id: 3,
        name: "4 Shelving unit",
        img: "img/svg/4-shelving-unit.svg",
        resultImg: 'img/svg/4-shelving-unit-final.svg',
        itemTable: [[190, 210], [240, 250]],
        checkboxes: [
          {
            value: 500
          },
          {
            value: 600
          }
        ],
        counters: [
          {
            value: 500,
          },
          {
            value: 600,
          }
        ]
      },
      {
        id: 4,
        name: "Shelves unit",
        img: "img/svg/shelving-unit.svg",
        resultImg: 'img/svg/shelving-unit-final.svg',
        type: "big",
        itemTable: [[180, 205, 245, 308, 370, 430, 495,  560, 620, 680, 745]],
        checkboxes: [
          {
            value: 800
          },
          {
            value: 1000
          },
          {
            value: 1200
          },
          {
            value: 1500
          },
          {
            value: 1800
          },
          {
            value: 2100
          },
          {
            value: 2400
          },
          {
            value: 2700
          },
          {
            value: 3000
          },
          {
            value: 3300
          },
          {
            value: 3600
          },
        ],
        counters: [
          {
            value: 800
          },
          {
            value: 1000
          },
          {
            value: 1200
          },
          {
            value: 1500
          },
          {
            value: 1800
          },
          {
            value: 2100
          },
          {
            value: 2400
          },
          {
            value: 2700
          },
          {
            value: 3000
          },
          {
            value: 3300
          },
          {
            value: 3600
          },
        ]
      },
    ]
  },
  {
    id: 3,
    img: "img/svg/result-test.svg",
    title: "Your selected wardrobe",
    notice: "You can customise units location by Clicking on the unit and moving it to the needed position of the wardrobe",
    type: "final"
  }
];

export default constructorSteps;
