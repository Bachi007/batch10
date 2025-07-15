
const products = [
  {
    productName: "Wireless Mouse",
    productDescription: "Ergonomic wireless mouse with USB receiver.",
    productCompany: "LogiTech",
    productPrice: 599
  },
  {
    productName: "Mechanical Keyboard",
    productDescription: "RGB backlit mechanical keyboard for gaming.",
    productCompany: "Redragon",
    productPrice: 2499
  },
  {
    productName: "Smartphone Stand",
    productDescription: "Adjustable stand compatible with all smartphones.",
    productCompany: "Portronics",
    productPrice: 299
  },
  {
    productName: "Bluetooth Speaker",
    productDescription: "Portable Bluetooth speaker with deep bass.",
    productCompany: "boAt",
    productPrice: 1099
  },
  {
    productName: "Fitness Band",
    productDescription: "Water-resistant fitness band with heart rate monitor.",
    productCompany: "Mi",
    productPrice: 1899
  },
  {
    productName: "Webcam",
    productDescription: "HD webcam with built-in microphone.",
    productCompany: "HP",
    productPrice: 799
  },
  {
    productName: "USB Hub",
    productDescription: "4-port USB 3.0 hub for laptops and desktops.",
    productCompany: "Anker",
    productPrice: 499
  },
  {
    productName: "Noise Cancelling Headphones",
    productDescription: "Over-ear headphones with active noise cancellation.",
    productCompany: "Sony",
    productPrice: 3999
  },
  {
    productName: "Laptop Sleeve",
    productDescription: "Padded laptop sleeve for 15-inch laptops.",
    productCompany: "AmazonBasics",
    productPrice: 399
  },
  {
    productName: "Portable SSD",
    productDescription: "500GB high-speed portable solid state drive.",
    productCompany: "Samsung",
    productPrice: 5999
  }
];


var smallproducts = products.sort((a,b)=>a.productPrice-b.productPrice)



for(let p of smallproducts){
    console.log("*********")
    for(key in p){
        console.log(key+" : "+p[key]);
    }
}


