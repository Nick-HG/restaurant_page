
 function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  home.appendChild(createParagraph('For those foods that take you back to simpler times'));
  home.appendChild(createParagraph(`From the winter warmers to the summer coolers, 
  ome try our range of dishes from around the world`));

  return home;
}

function createParagraph(text) {
  const para = document.createElement('p');
  para.textContent = text;
  return para;
}

export default function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}