/*things for nav menu*/

/* first select classes to update in nav menu*/
const navCloseEl = document.querySelector('.nav_close');
const navList = document.querySelector('.nav_list');
const navIconEl = document.querySelector('.nav_icon');
const navBgOverlayEl = document.querySelector('.nav_bgoverlay'); /*navbgOverlay.. is the dark body area when 3 line is open*/

/*then open the three lines*/
const navOpen = () => {
   navList.classList.add('show');   /*show is linked with css*/
   navBgOverlayEl.classList.add('active');  
   document.body.style= 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
   /*if open then rest part is visible or not,height and weight is full no scroll menu*/
 }
 
 /*close the three line*/
 const navClose = () => {
   navList.classList.remove('show');
   navBgOverlayEl.classList.remove('active');
   document.body.style= 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
 }
 
 /*call the navopen function when we click the line*/
 navIconEl.addEventListener('click', navOpen);
 navCloseEl.addEventListener('click', navClose);
 navBgOverlayEl.addEventListener('click', navClose);

 // AOS
// AOS.refreshHard();
AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});