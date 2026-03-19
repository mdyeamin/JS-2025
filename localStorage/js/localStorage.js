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


const addProduct=()=>{
const product = document.getElementById("product").value;
const quantity = document.getElementById("quantity").value;

ShowProduct(product,quantity);
document.getElementById("product").value = '';
document.getElementById("quantity").value = '';
}

const ShowProduct=(product,quantity)=>{
const li = document.createElement("li");
li.innerHTML = `
                <li class="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-[#6610f2] transition-colors">
                    <span class="font-bold text-slate-700">${product}</span>
                    <span class="bg-indigo-100 text-[#6610f2] px-3 py-1 rounded-lg font-bold text-sm">${quantity} Unit</span>
                </li>
`
const ul = document.getElementById("ShowProduct");
ul.append(li)
}