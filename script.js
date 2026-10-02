// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
 a.addEventListener('click',function(e){
  e.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  if(target){
    target.scrollIntoView({behavior:'smooth'});
  }
 });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
  } else {
    nav.style.boxShadow = '0 2px 15px rgba(0,0,0,0.05)';
  }
});

console.log("Portfolio loaded - Kaviya Govindraj");