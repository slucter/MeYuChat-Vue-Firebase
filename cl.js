/* eslint-disable no-console */
function discount(items, price) {
  const priceTotal = price * items;
  const discounts = 0.35 * priceTotal;

  if (discounts >= 50000) {
    const pay = priceTotal - 50000;
    console.log(`
    potongan : ${50000}
    total Harga : ${pay}
    `);
  } else {
    const pay2 = priceTotal - discounts;
    console.log(`
    potongan : ${discounts}
    total Harga : ${pay2}
    `);

    if (priceTotal <= 60000) {
      console.log(`
    potongan : 0
    total Harga : ${pay2}
    `);
    }
  }
}

discount(3, 25000);
