const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

allEventListners();


function allEventListners() {

    navToggler.addEventListener('click', togglerClick);

    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}


function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}


function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}


//
// 
var accordions = document.getElementsByClassName("accordion-heading");
for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent event from bubbling up
        var isActive = this.classList.contains('active');

        // Close all accordion items
        var activeItems = document.querySelectorAll('.accordion-heading.active');
        for (var j = 0; j < activeItems.length; j++) {
            activeItems[j].classList.remove('active');
            activeItems[j].nextElementSibling.classList.remove('show'); // Remove 'show' class
        }

        // Toggle current accordion item
        if (!isActive) {
            this.classList.add('active');
            var content = this.nextElementSibling;
            content.classList.add('show'); // Add 'show' class
        }
    });
}

