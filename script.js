const main = document.getElementById("main");

const h2 = document.createElement("H2");
h2.innerHTML = "Goodbye World";

h2.style.color = "green";
// h2.classList.add("greenbg");

const lis = [...document.getElementsByTagName("li")];
lis.forEach(li => {
  li.classList.add("greenbg")
})

main.appendChild(h2);

