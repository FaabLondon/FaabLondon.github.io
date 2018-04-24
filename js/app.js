

//NAVBAR
// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('nav').style.top = '0';
  } else {
    document.querySelector('nav').style.top = '-50px';
  }
}

//Introduction Page
//Change background picture and caption every 5 seconds.
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
}
];

//select the divs to set their backgroundImage and change text
const destructuredPic = document.querySelectorAll('.destructuredPic');
const caption = document.querySelector('.caption');

//initialise backgroundImage and caption
for (let i = 0; i < destructuredPic.length; i++) {
  destructuredPic[i].style.backgroundImage = `url(${pictArray[0].link})`;
}
caption.innerText = pictArray[0].caption;
caption.style.opacity = 1;

//every 3 second update image and caption
let picCaption = 0;
setInterval(() => {
  // change the background image for all divs
  for (let i = 0; i < destructuredPic.length; i++) {
    destructuredPic[i].style.backgroundImage = `url(${pictArray[picCaption].link})`;
  }
  // change caption text and opacity
  caption.innerText = pictArray[picCaption].caption;
  caption.style.opacity = 1;

  picCaption < pictArray.length - 1 ? picCaption++ : picCaption = 0;
}, 3000);





//Project page
//set click event to display more info on all projects
const nbProject = 4;
for (let i = 1 ; i <= nbProject; i++){
  const clickInfo = document.querySelector(`#clickforInfo${i}`);
  const info = document.querySelector(`#info${i}`);
  const deleteCheckbox = document.querySelector(`#deleteCheckbox${i}`);
  //add click even to 'Click for more details'
  clickInfo.addEventListener('click', () => {
    info.classList.toggle('animation');
    console.log('click');
  });
  //add click even to close checkmark
  deleteCheckbox.addEventListener('click', () => {
    info.classList.toggle('animation');
  });
}
