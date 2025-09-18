// Lista de perritos con imágenes estables (Unsplash)
const dogs = [
  {
    nombre: "Luna",
    edad: "2 años",
    img: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=500&h=300&fit=crop"
  },
  {
    nombre: "Max",
    edad: "1 año",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&h=300&fit=crop"
  },
  {
    nombre: "Rocky",
    edad: "3 años",
    img: "https://images.unsplash.com/photo-1619983081633-6b4fffa1e1c8?w=500&h=300&fit=crop"
  },
  {
    nombre: "Bella",
    edad: "4 años",
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=300&fit=crop"
  }
];

// Contenedor
const dogList = document.getElementById("dog-list");

// Renderizar perritos
dogs.forEach(dog => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${dog.img}" alt="${dog.nombre}">
    <h3>${dog.nombre}</h3>
    <p>Edad: ${dog.edad}</p>
    <button>Adoptar</button>
  `;

  const btn = card.querySelector("button");
  btn.addEventListener("click", () => {
    alert(`¡Felicidades! Has adoptado a ${dog.nombre} 🐾`);
  });

  dogList.appendChild(card);
});
