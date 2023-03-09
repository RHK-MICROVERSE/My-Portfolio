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
      name: "Professional Art Printing Data",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "html",
        },
        {
          name: "bootstrap",
        },
        {
          name: "Ruby",
        },
      ],
    },
    {
      name: "Professional Art Printing Data",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "html",
        },
        {
          name: "bootstrap",
        },
        {
          name: "Ruby",
        },
      ],
    },
    {
      name: "Professional Art Printing Data",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "html",
        },
        {
          name: "bootstrap",
        },
        {
          name: "Ruby",
        },
      ],
    },
    {
      name: "Professional Art Printing Data",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "html",
        },
        {
          name: "bootstrap",
        },
        {
          name: "Ruby",
        },
      ],
    },
    {
      name: "Professional Art Printing Data",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "html",
        },
        {
          name: "bootstrap",
        },
        {
          name: "Ruby",
        },
      ],
    },
    {
      name: "Professional Art Printing Data",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      img: "./Assets/images/mobile-snapshot-image.svg",
      technologies: [
        {
          name: "html",
        },
        {
          name: "bootstrap",
        },
        {
          name: "Ruby",
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
    // create technologies lists in the card
    detail.technologies.forEach((technology) => {
      const techLi = document.createElement("li");
      technologiesUl.appendChild(techLi);
      techLi.classList.add("card-box");
      techLi.textContent = technology.name;
    });
    technologiesUl.classList.add("mrw-wrapper");
    cardContainer.appendChild(technologiesUl);

    const cardProjectButton = document.createElement("div");
    cardProjectButton.classList.add("card-project-btn");
    cardContainer.appendChild(cardProjectButton);

    const detailButton = document.createElement("button");
    detailButton.classList.add("card-button-see-project");
    cardProjectButton.appendChild(detailButton);
    detailButton.textContent = "See Project";

    // handle remove technologies lists from popup
    function removeTechnologiesList() {
      const technologiesList = document.querySelector("#technologiesList");
      const removeElement = document.querySelector("#technologiesList li");
      if (removeElement !== null) technologiesList.removeChild(removeElement);
    }
    removeTechnologiesList();
    // click event for 'See Project'
    const detailsPopup = document.querySelector("#popup");
    cardProjectButton.addEventListener("click", () => {
      detailsPopup.classList.remove("hide");
      detailsPopup.classList.add("show");
      // update content of popup based on clicked project card
      const popupTitle = document.querySelector("#popupTitle");
      popupTitle.textContent = detail.name;
      // update technologies lists based on the content on the selected card
      const technologiesList = document.querySelector("#technologiesList");
      detail.technologies.forEach((technology) => {
        const techLi = document.createElement("li");
        technologiesList.appendChild(techLi);
        techLi.classList.add("popup-box");
        techLi.textContent = technology.name;
      });
      // update the popup description text based on the projects card text
      const popupText = document.querySelector("#popup-text p") 
      popupText.textContent = ""
      popupText.textContent = detail.description
    });
    // handle closing details popup
    const closePopups = document.querySelector("#close-cross");
    closePopups.addEventListener("click", () => {
      detailsPopup.classList.remove("show");
      detailsPopup.classList.add("hide");
      // remove technologies list items up on closing the popup
      removeTechnologiesList();
    });
  });
}
controlMobileMenu();
