// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

// เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า
if (
  inventory[0].quantity < inventory[1].quantity &&
  inventory[0].quantity < inventory[2].quantity
) {
  console.log(
    `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Apple ซึ่งมี ${inventory[0].quantity} ชิ้น`
  );
} else if (
  inventory[1].quantity < inventory[0].quantity &&
  inventory[1].quantity < inventory[2].quantity
) {
  console.log(
    `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี ${inventory[1].quantity} ชิ้น`
  );
} else {
  console.log(
    `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Orange ซึ่งมี ${inventory[2].quantity} ชิ้น`
  );
}
