function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    createDish(
      "Ramen",
      "A hearty broth from Japan which is sure to satisfy",
     )
  );
  menu.appendChild(
    createDish(
      "Roast-Dinner",
      "A British classic, roast beef, roast potatoes, vegetables and a good helpful of gravy"
    )
  );
  menu.appendChild(
    createDish(
      "Borscht",
      "Beet and cabbage borscht, a staple soup in many Eastern European homes"
    )
  );
  menu.appendChild(
    createDish(
      "Congee",
      "A creamy rice porridge from China that is eaten across Asia for breakfast"
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
  return dish;
}


export default function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}