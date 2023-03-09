function controlMobileMenu() {
  const open = document.getElementById("mobile-nav");
  const close = document.getElementById("close-menu");
  const portfolio = document.getElementById("mobile-portfolio");
  const about = document.getElementById("mobile-about");
  const contact = document.getElementById("mobile-contact");
  function openMenu() {
    const menu = document.querySelector("#mobile-menu");
    menu.classList.remove("invisible");
    menu.classList.add("visible");
  }
  function closeMenu() {
    const menu = document.querySelector("#mobile-menu");
    menu.classList.remove("visible");
    menu.classList.add("invisible");
  }
  open.addEventListener("click", () => {
    openMenu();
  });
  close.addEventListener("click", () => {
    closeMenu();
  });
  portfolio.addEventListener("click", () => {
    closeMenu();
  });
  about.addEventListener("click", () => {
    closeMenu();
  });
  contact.addEventListener("click", () => {
    closeMenu();
  });
  const details = [
    {
      name: "Multi-Post Stories Gain+Glory-1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "Ruby on rails-1",
        },
        {
          name: "css",
        },
        {
          name: "JavaScript",
        },
        {
          name: "html",
        },
      ],
    },
    {
      name: "Multi-Post Stories Gain+Glory-2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "Ruby on rails-2",
        },
        {
          name: "css",
        },
        {
          name: "JavaScript",
        },
        {
          name: "html",
        },
      ],
    },
    {
      name: "Multi-Post Stories Gain+Glory-3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "Ruby on rails-3",
        },
        {
          name: "css",
        },
        {
          name: "JavaScript",
        },
        {
          name: "html",
        },
      ],
    },
    {
      name: "Multi-Post Stories Gain+Glory-4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "Ruby on rails-4",
        },
        {
          name: "css",
        },
        {
          name: "JavaScript",
        },
        {
          name: "html",
        },
      ],
    },
    {
      name: "Multi-Post Stories Gain+Glory-5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "Ruby on rails-5",
        },
        {
          name: "css",
        },
        {
          name: "JavaScript",
        },
        {
          name: "html",
        },
      ],
    },
    {
      name: "Multi-Post Stories Gain+Glory-6",
      description: "Lorem",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "Ruby on rails-6",
        },
        {
          name: "css",
        },
        {
          name: "JavaScript",
        },
        {
          name: "html",
        },
      ],
    },
  ];

  // create project details cards dynamically on page load

  details.forEach((detail) => {
    const cardMaster = document.querySelector("#card-master");
    const cardDetails = document.createElement("div");
    cardDetails.classList.add("cards-details");
    cardMaster.appendChild(cardDetails);
    const cardContainer = document.createElement("div");
    cardDetails.appendChild(cardContainer);
    cardContainer.classList.add("card-container");
    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardContainer.appendChild(cardTitle);
    const cardTitleh1 = document.createElement("h1");
    cardTitle.appendChild(cardTitleh1);
    cardTitleh1.innerText = detail.name;

    const cardSubText = document.createElement("div");
    cardSubText.classList.add("card-sup-txt");
    cardContainer.appendChild(cardSubText);
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description");
    cardSubText.appendChild(cardDescription);
    cardDescription.textContent = detail.description;

    const technologies = document.createElement("div");
    technologies.classList.add("technologies");
    const technologiesUl = document.createElement("ul");
    // technologies.appendChild(technologiesUl)
    technologiesUl.classList.add("mrw-wrapper");
    cardContainer.appendChild(technologiesUl);

    detail.technologies.forEach((technology) => {
      const techLi = document.createElement("li");
      technologiesUl.appendChild(techLi);
      techLi.classList.add("card-box");
      techLi.textContent = technology.name;
    });

    const cardProjectButton = document.createElement("div")
    cardProjectButton.classList.add('card-project-btn')
    cardContainer.appendChild(cardProjectButton)

    const detailButton = document.createElement('button')
    detailButton.classList.add('card-button-see-project')
    cardProjectButton.appendChild(detailButton)
    detailButton.textContent = "See Project"


    // cardContainer.textContent = 'check me'
  });
}
controlMobileMenu();
