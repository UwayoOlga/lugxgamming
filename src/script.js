const navbar = document.getElementById('myNavbar');
  
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-blue-500'); // Or your desired color
  } else {
    navbar.classList.remove('bg-blue-500');
    navbar.classList.add('bg-transparent');
  }
});