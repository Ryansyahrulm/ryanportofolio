// active navbar
let navToggle = document.querySelector('.nav-toggle')
let bars = document.querySelectorAll('.bar')

let navbar = document.querySelector('.navbar');

navToggle.onclick = () => {
  bars.forEach(bar => bar.classList.toggle('x'))
  navbar.classList.toggle('active');
}

// active navbar
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        };
    });
    myFunction();
    
    // remove navbar when click
    bars.forEach(bar => bar.classList.remove('x'))
    navbar.classList.remove('active');
};

//sticky navbar
let header = document.querySelector('header');

// header.classList.toggle('sticky', window.scrollY > 101)
myFunction = () => {
    if(document.documentElement.scrollTop > 20){
      header.classList.add("sticky");
    }
    else{
      header.classList.remove("sticky");
    }
  }

// scroll reveal
ScrollReveal({
  //  reset: true ,
   distance: '80px',
   duration: 2000,
   delay: 200,
});

ScrollReveal().reveal('.home-content, .about-content, .heading, .resume-content .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img, .skills-box, .certificate-content, .contact form, .resume-content p, .resume-content .button', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .resume-img', { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
