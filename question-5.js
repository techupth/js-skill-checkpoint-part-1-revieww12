// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

// มูลค่ารวมของสินค้าในตะกร้า
let totalProduct1 = products[0].quantity * products[0].price;
let totalProduct2 = products[1].quantity * products[1].price;
let totalProduct3 = products[2].quantity * products[2].price;
let totalAll = totalProduct1 + totalProduct2 + totalProduct3;
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในตะกร้า ${totalAll} บาท`);

//เขียนฟังก์ชันชื่อ calculateTotalPrice ที่รับ products และ promotionCode เป็น Argument
function calculateTotalPrice(products, promotionCode) {
  console.log(products);
  console.log(promotionCode);
  if (promotionCode === "SALE20") {
    const totalPrice = (20 / 100) * totalAll;
    return totalPrice;
  } else if (promotionCode === "SALE50") {
    const totalPrice = (50 / 100) * totalAll;
    return totalPrice;
  } else {
    return "ไม่ได้รับส่วนลด";
  }
}
console.log(calculateTotalPrice(totalAll, ""));
console.log(calculateTotalPrice(totalAll, "SALE20"));
console.log(calculateTotalPrice(totalAll, "SALE50"));
