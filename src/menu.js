function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    createDish(
      "Ramen",
      "Pork slices, bone broth, half-boiled egg, spring onion, udon noodles, bean sprouts"
     )
    );


  return menu;
}


function createDish(name, description) {
  const dish = document.createElement('div');
  dish.classList.add('dish');

  const dishName = document.createElement('h3');
  dishName.textContent = name;

  const dishInfo = document.createElement('p');
  dishInfo.textContent = description;

  const dishImg = document.createElement('img');
  dishImg.src = `../src/images/${name.toLowerCase()}.jpg`;

  dish.appendChild(dishName);
  dish.appendChild(dishInfo);
  dish.appendChild(dishImg);
  // dish.append(dishName, dishInfo, dishImg);
  return dish;
}


export default function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}