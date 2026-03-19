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
  const product = document.getElementById("product").value;
  const quantity = parseInt(document.getElementById("quantity").value);

  // ShowProduct(product, quantity);
  storedFromCart(product, quantity);

  document.getElementById("product").value = "";
  document.getElementById("quantity").value = "";
};

const createCart = () => {
  const cart = {};
  // return JSON.parse(localStorage.getItem("cart")) || {}; // evabew kora jay
  const data = localStorage.getItem("cart"); // evabew kora jay
  return data ? JSON.parse(data) : cart;
};

const storedFromCart = (product, quantity) => {
  const cart = createCart();
  if (cart[product]) {
    cart[product] += quantity;
  } else {
    cart[product] = quantity;
  }


  localStorage.setItem("cart", JSON.stringify(cart));
  ShowProduct(cart);
};

const ShowProduct = (cart) => {
  const div = document.getElementById("ShowProduct");
  div.innerHTML = "";
  for (const item in cart) {
    const quantity = cart[item];

    const ul = document.createElement("ul");
    ul.innerHTML = `
                <li class="${item || quantity ? "flex" : "hidden"} items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-[#6610f2] transition-colors">
                    <span class="font-bold text-slate-700">${item}</span>
                    <span class="bg-indigo-100 text-[#6610f2] px-3 py-1 rounded-lg font-bold text-sm">${quantity} ${quantity ? "Unit" : ""}</span>
                </li>
`;

    div.append(ul);
  }
};
addProduct();
