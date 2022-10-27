function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Contact Us';

  const contactNumber = document.createElement('p');
  contactNumber.textContent = '01234 567 899';

  const address = document.createElement('p');
  address.textContent = 'Dependent on the dish';

  contact.appendChild(title);
  contact.appendChild(contactNumber);
  contact.appendChild(address);

  return contact;
}

export default function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());  
}