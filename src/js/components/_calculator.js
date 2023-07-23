
function calculatePrice(width, height, doorsType, track, table) {
  // determine the column of the table to use based on the height
  let col;
  let doorsAmount;
  if (height < 2100) {
    return 'Invalid height';
  } else if (height >= 2100 && height < 2400) {
    col = 1;
  } else if (height >= 2400 && height < 2700) {
    col = 2;
  } else if (height === 2700) {
    col = 3;
  } else {
    // return 'Invalid height or number of doors';
    return {notice: 'Invalid height or number of doors'}

  }


  // determine the row of the table to use based on the width and track type
  let row;
    if (width >= 1200 && width < 1500) {
      row = 1;
      doorsAmount = 2;
    } else if (width >= 1500 && width < 1800) {
      row = 2;
      doorsAmount = 2;
    } else if (width >= 1800 && width < 2100) {
      row = 3;
      doorsAmount = 2;
    } else if (width >= 2100 && width < 2400) {
      row = 4;
      doorsAmount = 2;
    } else if (width >= 2400 && width < 2700) {
      row = 5;
      doorsAmount = 3;
    } else if (width >= 2700 && width < 3000) {
      row = 6;
      doorsAmount = 3;
    } else if (width >= 3000 && width < 3300) {
      row = 7;
      doorsAmount = 3;
    } else if (width >= 3300 && width < 3600) {
      row = 8;
      doorsAmount = 3;
    } else if (width >= 3600 && width < 3900) {
      row = 9;
      doorsAmount = 4;
    } else if (width >= 3900 && width < 4200) {
      row = 10;
      doorsAmount = 4;
    }else if (width >= 4200 && width < 4500) {
      row = 11;
      doorsAmount = 4;
    }else if (width >= 4500 && width < 4800) {
      row = 12;
      doorsAmount = 4;
    }else if (width >= 4800 && width < 5100) {
      row = 13;
      doorsAmount = 4;
    } else if (width === 5100) {
      row = 14;
      doorsAmount = 5;
    }
     else {
      // return 'Invalid width';
      return {notice: 'Invalid width'}
    }




  // retrieve the price from the table based on the row and column

    let price = table[row - 1][col-1];

    if (track === "triple") {
      price += 60;
    }

    if (doorsType === "Slimline") {
      price *= 1.15;
    }


    return {
      price: `Total ${Math.floor(price)}$ Inc GST`,
      doorsAmount
    }

  }

  export default calculatePrice;

