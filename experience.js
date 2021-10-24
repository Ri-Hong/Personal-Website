const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const body = document.querySelector('body');

  var active = false;

  //Toggle Nav
  burger.addEventListener('click', () => {
    //Slide the nav in
    nav.classList.toggle('nav-active');
    active = !active;

    //Disable scrolling when navbar is active
    if(active){
      body.style.overflowY = "hidden";
    }
    else{
      body.style.overflowY = "visible";
    }

    //Animate Links In
    navLinks.forEach((link, index)=>{
      if(link.style.animation){
        link.style.animation = '';
      }
      else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`;
      }
    });

    //Burger Animation
    burger.classList.toggle('toggle');
  });
}

navSlide();