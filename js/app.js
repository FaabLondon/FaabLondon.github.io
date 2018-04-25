$(document).ready(() => {

  console.log('JS loaded');

  //*****************************************************************************
  //Variables and DOM elements
  const pictArray = [{
    link: '../assets/picture/coding.png',
    caption: 'Web developer'
  },
  {
    link: '../assets/picture/paris.jpg',
    caption: 'Half-French'
  },
  {
    link: '../assets/picture/amsterdam.jpg',
    caption: 'Half-Dutch'
  },
  {
    link: '../assets/picture/london.jpg',
    caption: 'Londoner at heart'
  },
  {
    link: '../assets/picture/animalLover.jpg',
    caption: 'Nature & wildlife lover'
  },
  {
    link: '../assets/picture/cuisine.jpg',
    caption: 'Foodie'
  },
  {
    link: '../assets/picture/avidTraveller.jpg',
    caption: 'Avid Traveller'
  },
  {
    link: '../assets/picture/skiing.png ',
    caption: 'Keen skier'
  }
  ];

  //select the divs to set their backgroundImage and change text
  const $destructuredPic = $('.destructuredPic');
  const caption = $('.caption').get(0);
  // Get "navbar-burger" element
  const navbarBurger = $('.navbar-burger').get(0);

  //NAVBAR
  // When the user scrolls down 20px from the top of the document, slide down the navbar
  // When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)

  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $('nav').css({ top: '0' });
    } else {
      $('nav').css({ top: '-50px' });
    }
  }

  //Burger menu toggling on device
  // Add  a click event ot NavBar Burger
  $(navbarBurger).on('click', function () {
    // Get the target from the "data-target" attribute
    const target = navbarBurger.dataset.target; //should be navMenu
    const targetElt = $(`#${target}`).get(0);

    // Toggle the class on both the "navbar-burger" and the "navbar-menu"
    $(navbarBurger).toggleClass('is-active');
    $(targetElt).toggleClass('is-active');
  });

  //***************************************************************************
  //INTRO page
  //initialise backgroundImage and caption
  let picCaption = 0;
  $($destructuredPic).each((i, elt) => {
    $(elt).css({ backgroundImage: `url(${pictArray[0].link})` });
  });
  $(caption).text(pictArray[0].caption);

  //every 3 second update image and caption
  picCaption++;
  setInterval(() => {
    // change the background image for all divs
    $($destructuredPic).each((i, elt) => {
      $(elt).css({ backgroundImage: `url(${pictArray[picCaption].link})` });
    });

    // change caption text and then fadeIn fadeOut with next one
    $(caption).fadeOut(0, () => {
      $(caption).text(pictArray[picCaption].caption);
      $(caption).fadeIn(1000);
    });

    picCaption < pictArray.length - 1 ? picCaption++ : picCaption = 0;
  }, 3000);


  //***************************************************************************
  //PROJECT page
  //set click event to display more info on all projects
  const nbProject = 4;
  for (let i = 1 ; i <= nbProject; i++){
    const clickInfo = document.querySelector(`#clickforInfo${i}`);
    const info = document.querySelector(`#info${i}`);
    const deleteCheckbox = document.querySelector(`#deleteCheckbox${i}`);
    //add click even to 'Click for more details'
    clickInfo.addEventListener('click', () => {
      info.classList.toggle('animation');
    });
    //add click even to close checkmark
    deleteCheckbox.addEventListener('click', () => {
      info.classList.toggle('animation');
    });
  }

});
