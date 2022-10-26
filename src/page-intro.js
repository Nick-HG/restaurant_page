
export default function pageIntro() {
  const content = document.getElementById('content');
  const title = document.createElement('h1');
  const img = document.createElement('img');
  const pageIntro = document.createElement('p');
  
  title.textContent = `Nick's bakery`;
  setAttributes(img, {'src': '../src/images/bakery.jpg', 'height': '500px'});
  pageIntro.textContent = `Welcome to Nick's bakery. Come get your carb fix and try some of our
  delicious baked goods.`

  content.append(title, img, pageIntro);
}


function setAttributes(el, attrs) {
  for(let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}