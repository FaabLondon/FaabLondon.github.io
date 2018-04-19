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
