function controlMobileMenu() {
  const open = document.getElementById('mobile-nav');
  const close = document.getElementById('close-menu');
  const portfolio = document.getElementById('mobile-portfolio');
  const about = document.getElementById('mobile-about');
  const contact = document.getElementById('mobile-contact');
  function openMenu() {
    const menu = document.querySelector('#mobile-menu');
    menu.classList.remove('invisible');
    menu.classList.add('visible');
  }
  function closeMenu() {
    const menu = document.querySelector('#mobile-menu');
    menu.classList.remove('visible');
    menu.classList.add('invisible');
  }
  open.addEventListener('click', () => {
    openMenu();
  });
  close.addEventListener('click', () => {
    closeMenu();
  });
  portfolio.addEventListener('click', () => {
    closeMenu();
  });
  about.addEventListener('click', () => {
    closeMenu();
  });
  contact.addEventListener('click', () => {
    closeMenu();
  });
  const details = [
    {
      name: 'Professional Art Printing Data-1',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      technologies: [
        {
          name: 'html-1',
        },
        {
          name: 'bootstrap',
        },
        {
          name: 'Ruby',
        },
      ],
    },
    {
      name: 'Professional Art Printing Data-2',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      technologies: [
        {
          name: 'html-2',
        },
        {
          name: 'bootstrap',
        },
        {
          name: 'Ruby',
        },
      ],
    },
    {
      name: 'Professional Art Printing Data-3',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      technologies: [
        {
          name: 'html-3',
        },
        {
          name: 'bootstrap',
        },
        {
          name: 'Ruby',
        },
      ],
    },
    {
      name: 'Professional Art Printing Data-4',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      technologies: [
        {
          name: 'html-4',
        },
        {
          name: 'bootstrap',
        },
        {
          name: 'Ruby',
        },
      ],
    },
    {
      name: 'Professional Art Printing Data-5',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      technologies: [
        {
          name: 'html-5',
        },
        {
          name: 'bootstrap',
        },
        {
          name: 'Ruby',
        },
      ],
    },
    {
      name: 'Professional Art Printing Data-6',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      technologies: [
        {
          name: 'html-6',
        },
        {
          name: 'bootstrap',
        },
        {
          name: 'Ruby',
        },
      ],
    },
  ];
  // create project details cards dynamically on page load
  details.forEach((detail) => {
    // create project sections (cards)
    const cardMaster = document.querySelector('#card-master');
    const cardDetails = document.createElement('div');
    cardDetails.classList.add('cards-details');
    cardMaster.appendChild(cardDetails);
    const cardContainer = document.createElement('div');
    cardDetails.appendChild(cardContainer);
    cardContainer.classList.add('card-container');
    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardContainer.appendChild(cardTitle);
    const cardTitleh1 = document.createElement('h1');
    cardTitle.appendChild(cardTitleh1);
    cardTitleh1.innerText = detail.name;
    // for the subcard
    const cardSubText = document.createElement('div');
    cardSubText.classList.add('card-sup-txt');
    cardContainer.appendChild(cardSubText);
    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardSubText.appendChild(cardDescription);
    cardDescription.textContent = detail.description;
    // create the technologies section
    const technologies = document.createElement('div');
    technologies.classList.add('technologies');
    const technologiesUl = document.createElement('ul');
    // create technologies lists in the card
    detail.technologies.forEach((technology) => {
      const techLi = document.createElement('li');
      technologiesUl.appendChild(techLi);
      techLi.classList.add('card-box');
      techLi.textContent = technology.name;
    });
    technologiesUl.classList.add('mrw-wrapper');
    cardContainer.appendChild(technologiesUl);
    // create the see project button
    const cardProjectButton = document.createElement('div');
    cardProjectButton.classList.add('card-project-btn');
    cardContainer.appendChild(cardProjectButton);
    const detailButton = document.createElement('button');
    detailButton.classList.add('card-button-see-project');
    cardProjectButton.appendChild(detailButton);
    detailButton.textContent = 'See Project';
    // handle remove technologies lists from popup
    function removeTechnologiesList() {
      const technologiesList = document.querySelector('#technologiesList');
      const removeElement = document.querySelector('#technologiesList li');
      if (removeElement !== null) technologiesList.removeChild(removeElement);
    }
    removeTechnologiesList();
    // click event for 'See Project'
    const detailsPopup = document.querySelector('#popup');
    cardProjectButton.addEventListener('click', () => {
      detailsPopup.classList.remove('hide');
      detailsPopup.classList.add('show');
      // update content of popup based on clicked project card
      const popupTitle = document.querySelector('#popupTitle');
      popupTitle.textContent = detail.name;
      // update technologies lists based on the content on the selected card
      const technologiesList = document.querySelector('#technologiesList');
      detail.technologies.forEach((technology) => {
        const techLi = document.createElement('li');
        technologiesList.appendChild(techLi);
        techLi.classList.add('popup-box');
        techLi.textContent = technology.name;
      });
      // update the popup description text based on the projects card text
      const popupText = document.querySelector('#popup-text p');
      popupText.textContent = '';
      popupText.textContent = detail.description;
    });
    // handle closing details popup
    const closePopups = document.querySelector('#close-cross');
    closePopups.addEventListener('click', () => {
      detailsPopup.classList.remove('show');
      detailsPopup.classList.add('hide');
      // remove technologies list items up on closing the popup
      removeTechnologiesList();
    });
  });
}

controlMobileMenu();

// Form Validation and Local Storage
function ReadElement(selected) {
  return document.querySelector(selected);
}

const uname = ReadElement('#name-input');
const uemail = ReadElement('#user-email');
const umessage = ReadElement('#textarea-input');
const validator = ReadElement('.validator-input');
const submitbtn = ReadElement('#submit-form');

let visitorName;
let visitorEmail;
let visitorMessage;
let visitorData = [];

function getUpdatedInput(selected) {
  function alphaFunction() {
    visitorName = uname.value;
    visitorEmail = uemail.value;
    visitorMessage = umessage.value;
    visitorData = [visitorName, visitorEmail, visitorMessage];
    localStorage.setItem('visitorData', visitorData);
  }
  selected.addEventListener('change', alphaFunction);
}


visitorName = getUpdatedInput(uname);
visitorEmail = getUpdatedInput(uemail);
visitorMessage = getUpdatedInput(umessage);

const alphaFormData = localStorage.getItem('visitorData');
const alphaFormDataArray = alphaFormData.split(',');

if (alphaFormDataArray.length > 0) {
  [uname.value, uemail.value, umessage.value] = alphaFormDataArray;
}

function EmailValidation(e) {
  const visitorEmail = uemail.value;
  let text;
  if (visitorEmail !== visitorEmail.toLowerCase() || visitorEmail === '') {
    text = 'Email is required and email has to be in lowercase';
    validator.innerHTML = text;
    validator.classList.remove('validator-green');
    validator.classList.add('validator-red');
    submitbtn.style.marginTop = '20px';
    e.preventDefault();
  } 
  else {
    text = 'Email has been inserted in lowercase as required';
    validator.innerHTML = text;
    validator.classList.remove('validator-red');
    validator.classList.add('validator-green');
    submitbtn.style.marginTop = '20px';
  }
}