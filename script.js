document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("#menu a");
    const contentDiv = document.getElementById("content");

    const content = {
        home: {
            title: "Welcome to the Home Page",
            text: "This is the home page content."
        },
        services: {
            title: "Our Services",
            text: "Here are the services we offer."
        },
        "web-design": {
            title: "Web Design",
            text: "We offer cutting-edge web design services."
        },
        seo: {
            title: "SEO",
            text: "Our SEO services will boost your online presence."
        },
        marketing: {
            title: "Marketing",
            text: "We provide comprehensive marketing solutions."
        },
        about: {
            title: "About Us",
            text: "Learn more about our company."
        },
        contact: {
            title: "Contact Us",
            text: "Get in touch with us."
        }
    };

    menuItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            const contentKey = this.getAttribute("data-content");
            if (content[contentKey]) {
                contentDiv.innerHTML = `<h2>${content[contentKey].title}</h2><p>${content[contentKey].text}</p>`;
            }
        });

        item.parentElement.addEventListener("mouseenter", function() {
            const submenu = this.querySelector(".submenu");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        item.parentElement.addEventListener("mouseleave", function() {
            const submenu = this.querySelector(".submenu");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });
});
