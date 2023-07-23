const calculateConstructorPrice = (width, height, type, units, itemTable, id) => {
  const initialWidth = width / 1000;
  let initialPrice;
  let row;
  let col;

  if (type === 1) {
    initialPrice = 71 * initialWidth;
  }

  if (type === 2) {
    initialPrice = 105 * initialWidth;
  }


  if (units) {
    units.filter(item => item.quantity > 0).forEach(unit => {
      let { width, quantity } = unit;


      if (id === 1) {

        if (height === 1750) {
          if (width === 500) {
            row = 1;
            col = 1;
          }

          if (width === 600) {
            row = 2;
            col = 1;
          }

        }

        if (height === 2050) {
          if (width === 500) {
            row = 2;
            col = 1;
          }

          if (width === 600) {
            row = 2;
            col = 2;
          }
        }
      }

      if (id === 2) {
        if (height === 1750) {
          if (width === 500) {
            row = 1;
            col = 1;
          }

          if (width === 600) {
            row = 1;
            col = 2;
          }
        }

        if (height === 2050) {
          if (width === 500) {
            row = 2;
            col = 1;
          }

          if (width === 600) {
            row = 2;
            col = 2;
          }
        }
      }

      if (id === 3) {

        if (height === 1750) {
          if (width === 500) {
            row = 1;
            col = 1;
          }

          if (width === 600) {
            row = 1;
            col = 2;
          }
        }

        if (height === 2050) {
          if (width === 500) {
            row = 2;
            col = 1;
          }

          if (width === 600) {
            row = 2;
            col = 2;
          }
        }
      }

      if (id === 4) {
        console.log('id is 4')
        if (height === 1750) {
          row = 1;
          if (width === 800) {
            col = 1;
          }

          if (width === 1000) {
            col = 2;
          }

          if (width === 1200) {
            col = 3;
          }

          if (width === 1500) {
            col = 4;
          }

          if (width === 1800) {
            col = 5;
          }

          if (width === 2100) {
            col = 6;
          }

          if (width === 2400) {
            col = 7;
          }

          if (width === 2700) {
            col = 8;
          }

          if (width === 3000) {
            col = 9;
          }
          if (width === 3300) {
            col = 10;
          }
          if (width === 3600) {
            col = 11;
          }

          console.log(col);
        }
      }



      if (units && units.length) {
        console.log(`Initial Price: ${initialPrice} + ${itemTable[row - 1][col - 1] * quantity}`)
        initialPrice += itemTable[row - 1][col - 1] * quantity;
      }

    })
  }



  return Math.round(initialPrice);
}



export default calculateConstructorPrice;
