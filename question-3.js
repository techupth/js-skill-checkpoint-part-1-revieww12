// Question #3
let userPassword = "";

// เริ่มเขียนโค้ดตรงนี้
// test ผลลัพธ์ทุกเงื่อนไข
let userPassword1 = "0000000000";
let userPassword2 = "0000000000000";

//เขียนฟังก์ชัน checkPasswordStrength ซึ่งรับ userPassword เป็น Argument และ Return ผลลัพธ์ออกมาเป็น String
function checkPasswordStrength(userPassword) {
  // ถ้า userPassword มีความยาวน้อยกว่า 6 ตัวอักษร ฟังก์ชันจะ Return ค่า "Weak"
  if (userPassword.length < 6) {
    return "Weak";
  }
  // ถ้า userPassword มีความยาวมากกว่าหรือเท่ากับ 6 ตัวอักษร และน้อยกว่าเท่ากับ 10 ฟังก์ชันจะ Return ค่า "Medium"
  else if (userPassword.length >= 6 && userPassword.length <= 10) {
    return "Medium";
  }
  // ถ้า userPassword ไม่เข้าเงื่อนไขด้านบน ฟังก์ชันจะ Return ค่า "Strong"
  else {
    return "Strong";
  }
}
console.log(checkPasswordStrength(userPassword));
console.log(checkPasswordStrength(userPassword1));
console.log(checkPasswordStrength(userPassword2));
