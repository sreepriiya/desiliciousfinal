//........................... navbar..................//

let navbar = document.querySelector('.navbar');

menubar.onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}


//........................... contact..................//

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


//........................... navlink..................//

// Add a click event listener to the entire document
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset - 50 && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};




  //........................... for navbar mobile approch..................//



  // Add an event listener to toggle the navigation menu
document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});

// Close the navigation menu when a menu item is clicked
document.querySelectorAll('.navbar a').forEach(function (item) {
    item.addEventListener('click', function () {
        document.querySelector('.navbar').classList.remove('active');
    });
});


//..................

document.addEventListener('DOMContentLoaded', function() {
    // Your Swiper initialization code here

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay:3000,
        disableOnInteraction: false,

    },
   
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

});


//........

document.addEventListener("DOMContentLoaded", function () {

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  },
});
});

/// hovering effect

// cart

let cartIcon = document.querySelector('#cart-icon')
let cart1 = document.querySelector('.cart1')
let closecart = document.querySelector('#close-cart')
//open cart

cartIcon.onclick = () =>{
  cart1.classList.add("active");

}
//cose cart
closecart.onclick = () =>{
  cart1.classList.remove("active");
  
}


//cart working

if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready);
}else{
  ready();
  updatetotal();

}

//making function

function ready()
{

  window.onload = function () {
    updatetotal();
  };
  var removeCartButtons = document.getElementsByClassName('cart-remove')
  console.log(removeCartButtons)
  for (var i=0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
  }
  // quantity changes

  var quantityInputs = document.getElementsByClassName('cart-quantity');
  for (var i=0; i < quantityInputs.length; i++){
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // Add to cart

  var addCart = document.getElementsByClassName('add-cart');
  for (var i=0; i < addCart.length; i++){
    var button = addCart[i];
    button.addEventListener('click', addCartClicked);

  }
}

function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }

  updatetotal();
}
function updatetotal() {
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box');
  var total = 0;

  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];

    if (!priceElement || !quantityElement) {
      console.error("Could not find price or quantity element for cart box:", cartBox);
      continue; // Skip to the next iteration if elements are not found
    }

    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = parseInt(quantityElement.value);

    if (isNaN(price) || isNaN(quantity)) {
      console.error("Invalid price or quantity for cart box:", cartBox);
      continue; // Skip to the next iteration if price or quantity is not a valid number
    }

    total = total + price * quantity;
  }

  // if price contains some cents value
  total = Math.round(total * 100) / 100;

  document.getElementsByClassName('total-price')[0].innerText = "$" + total;
}



// login.js
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
