const addNumberToLS = () => {
  const number = Math.ceil(Math.random() * 1000);
  console.log(number);
  localStorage.setItem("number", number);
  return number;
};

const gerNumberFromLS = () => {
  const number = localStorage.getItem("number");
  console.log(number);
};

const addProduct = () => {
  const quantity = document.getElementById("quantity").value;
  const product = document.getElementById("product").value;
  const disabled = document.getElementById("addProduct");
  const div = document.getElementById("ShowProduct");
  div.innerHTML = "";
  // ShowProduct(product, quantity);
  storedFromCart(product, quantity);

  document.getElementById("product").value = "";
  document.getElementById("quantity").value = "";
};

const cart = {};

const createCart = () => {
  // return JSON.parse(localStorage.getItem("cart")) || {};
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : {};
};

const storedFromCart = (product, quantity) => {
  const cart = createCart();
  cart[product] = quantity;
  localStorage.setItem("cart", JSON.stringify(cart));
  ShowProduct(cart);
};

const ShowProduct = (cart) => {
  for (const item in cart) {
    const quantity = cart[item];
    console.log(item, quantity);

    const ul = document.createElement("ul");

    ul.innerHTML = `
                <li class="${item || quantity ? "flex" : "hidden"} items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-[#6610f2] transition-colors">
                    <span class="font-bold text-slate-700">${item}</span>
                    <span class="bg-indigo-100 text-[#6610f2] px-3 py-1 rounded-lg font-bold text-sm">${quantity} ${quantity ? "Unit" : ""}</span>
                </li>
`;
    const div = document.getElementById("ShowProduct");
    div.append(ul);
  }
};
addProduct();
