// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

// 1) ให้แก้ไขจำนวนสินค้า “Apple” จาก 100 เป็น 200
inventory[0].quantity = 200;
let appleQuantity = inventory[0].quantity;
console.log(appleQuantity);

// 2) เพิ่มสินค้าใหม่ที่ชื่อ “Orange” ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก
inventory.push({ name: "Orange", price: 20, quantity: 300 });
console.log(inventory);

// 3) ให้คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
let totalApple = inventory[0].quantity * inventory[0].price;
let totalBanana = inventory[1].quantity * inventory[1].price;
let totalOrange = inventory[2].quantity * inventory[2].price;
let totalAll = totalApple + totalBanana + totalOrange;
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalAll} บาท`);
