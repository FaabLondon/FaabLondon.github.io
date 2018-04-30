$(window).on('load', () => {
  //changed to window on load to make sure all images ar loaded before animating them

  console.log('JS loaded');

  //pre-load animated gif
  $('.se-pre-con').fadeOut('slow');

  //*****************************************************************************

  //Variables
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

  const imgUrls = pictArray.map(elt => elt.link);

  const sections = ['homePage', 'about', 'skills', 'experience', 'education', 'portfolio', 'interests', 'contacts' ];

  // DOM ELEMENTS
  //select the divs to set their backgroundImage and change text
  const $destructuredPic = $('.destructuredPic');
  const caption = $('.caption').get(0);
  // Get "navbar-burger" element
  const navbarBurger = $('.navbar-burger').get(0);
  const $navLink = $('.navLink');

  ////Smooth TRANSITION when clicking on the different sections in the Navbar
  sections.forEach( elt => {
    $(`a[href="#${elt}"]`).click( e => {

      const offset = $($(e.target.attributes[1].value).get(0)).offset();
      //Subtract 20 from top
      offset.top -= 20;

      // Now animate the scroll-top CSS properties of <body> and <html>:
      $('html, body').animate({
        scrollTop: offset.top
      }, 2000);
    });
  });


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
  function toggle() {
    // Get the target from the "data-target" attribute
    const target = navbarBurger.dataset.target; //should be navMenu
    const targetElt = $(`#${target}`).get(0);

    // Toggle the class on both the "navbar-burger" and the "navbar-menu"
    $(navbarBurger).toggleClass('is-active');
    $(targetElt).toggleClass('is-active');
  }

  // Add  a click event ot NavBar Burger and on each navLink - each did not work
  $(navbarBurger).on('click', toggle);
  for ( let i = 0; i < $navLink.length - 1 ; i++) {
    $($navLink[i]).on('click', toggle);
  }

  //***************************************************************************
  //INTRO page
  //pre-load images for animation
  function preloadCssImages(){
    const allImgs = [];//new array for all the image urls
    let k = 0; //iterator for adding images

    const arr = $.makeArray(imgUrls);//create array from obj
    $(arr).each(function(){
      allImgs[k] = new Image(); //new img obj
      allImgs[k].src = this;
      k++;
    });
    console.log('images pre-loaded');
  }

  //call function
  preloadCssImages();

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

    // change caption text and then fadeIn fadeOut with next text
    $(caption).fadeOut(0, () => {
      $(caption).text(pictArray[picCaption].caption);
      $(caption).fadeIn(1000);
    });

    picCaption < pictArray.length - 1 ? picCaption++ : picCaption = 0;
  }, 8000);


  //***************************************************************************
  //PROJECT page
  //set click event to display more info on all projects
  const nbProject = 4;
  for (let i = 1 ; i <= nbProject; i++){
    const clickInfo = $(`#clickforInfo${i}`).get(0);
    const info = $(`#info${i}`).get(0);
    const deleteCheckbox = $(`#deleteCheckbox${i}`).get(0);
    //add click even to 'Click for more details'
    $(clickInfo).on('click', () => {
      $(info).toggleClass('animation');
    });
    //add click even to close checkmark
    $(deleteCheckbox).on('click', () => {
      $(info).toggleClass('animation');
    });
  }

});
