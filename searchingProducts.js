// give me 20 js array of object random products laptops mobiles watches keyboard mouse //
const products = [
  { id: 1, name: "Apple MacBook Pro", category: "laptop", price: 1299 },
  { id: 2, name: "Dell XPS 13", category: "laptop", price: 999 },
  { id: 3, name: "HP Spectre x360", category: "laptop", price: 1099 },
  { id: 4, name: "Lenovo ThinkPad X1 Carbon", category: "laptop", price: 1399 },
  { id: 5, name: "Microsoft Surface Laptop 4", category: "laptop", price: 899 },
  { id: 6, name: "ASUS ROG Zephyrus G14", category: "laptop", price: 1299 },
  { id: 7, name: "iPhone 15 Pro Max", category: "mobile", price: 1199 },
  { id: 8, name: "Samsung Galaxy S24 Ultra", category: "mobile", price: 1299 },
  { id: 9, name: "Google Pixel Fold", category: "mobile", price: 899 },
  { id: 10, name: "OnePlus Nord CE3", category: "mobile", price: 349 },
  { id: 11, name: "Apple Watch Series 8", category: "watch", price: 399 },
  { id: 12, name: "Samsung Galaxy Watch5", category: "watch", price: 249 },
  {
    id: 13,
    name: "Logitech MX Master Keyboard",
    category: "keyboard",
    price: 79,
  },
  {
    id: 14,
    name: "Razer BlackWidow Keyboard",
    category: "keyboard",
    price: 80,
  },
  { id: 15, name: "Microsoft Wireless Mouse", category: "mouse", price: 25 },
  { id: 16, name: "Logitech MX Master Mouse", category: "mouse", price: 70 },
  {
    id: 17,
    name: "Sony WH-1000XM5 Headphones",
    category: "headphone",
    price: 349,
  },
  {
    id: 18,
    name: "Bose QuietComfort Earbuds",
    category: "headphone",
    price: 275,
  },
  {
    id: 19,
    name: "Apple AirPods Pro (2nd Gen)",
    category: "headphone",
    price: 249,
  },
  {
    id: 20,
    name: "JBL Charge Portable Speaker",
    category: "speaker",
    price: 75,
  },
];

function searchProductsByCategoryName(products, category) {
    const matched = [];
    
    for (let i = 0; i < products.length; i++) {
    
    
    if(products[i].category.toLowerCase().match(category.toLowerCase())){
        
        
        matched.push(products[i])
        
        
      }
    }
    console.log("total mached product : ", matched.length);
    
  return matched
}

const test = searchProductsByCategoryName(products, "Head");
console.log(test);
