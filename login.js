// Get the contact link element
const contactLink = document.getElementById('contact-link');

// Get the contact details element
const contactDetails = document.getElementById('contact-details');

// Function to close the contact details
function closeContactDetails() {
    contactDetails.classList.remove('show');
}

// Add a click event listener to the contact link
contactLink.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior
    
    // Toggle the "show" class on the contact details to show/hide it
    contactDetails.classList.toggle('show');
    
    // Prevent the click event from propagating to the document
    e.stopPropagation();
});

// Add a click event listener to the entire document
document.addEventListener('click', closeContactDetails);

// Add a scroll event listener to the window
window.addEventListener('scroll', closeContactDetails);



document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
  
    function setActiveNavLink() {
      const scrollPosition = window.scrollY;
  
      navLinks.forEach((link) => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
  
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          navLinks.forEach((navLink) => {
            navLink.classList.remove('active');
          });
          link.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', setActiveNavLink);
  
    navLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
      
  document.getElementById("loginform").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password match your criteria
    if (username === "Admin@Gmail.com" && password === "Admin@123") {
        // Redirect to the home page
        window.location.href = "homepage_signin.html";
    } else {
        // Display an error message (you can customize this part)
        alert("Invalid username or password. Please try again.");
    }
});
