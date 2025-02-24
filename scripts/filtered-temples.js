
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".temple-gallery"); 

    function displayTemples() {
        gallery.innerHTML = ""; 

        temples.forEach(temple => {
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            const figcaption = document.createElement("figcaption");

            img.src = temple.imageUrl;
            img.alt = `Image of ${temple.templeName}`;
            figcaption.textContent = temple.templeName;

            figure.appendChild(img);
            figure.appendChild(figcaption);
            gallery.appendChild(figure);
        });
    }

    displayTemples(); 
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Austin Texas",
        location: "Austin, Texas",
        dedicated: "2024, August, 17",
        area: 30000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/austin-texas-temple/austin-texas-temple-40361.jpg"
      },
      {
        templeName: "Asuncion Paraguay",
        location: "Asuncion, Paraguay",
        dedicated: "2000, April, 2",
        area: 11600,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-6948.jpg"
      },
      {
        templeName: "Belem Brasil",
        location: "Belem, Brasil",
        dedicated: "2019, August, 17",
        area: 28675,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310.jpg"
      },
    
  ];

  document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".temple-gallery"); 

    function displayTemples() {
        gallery.innerHTML = ""; 

        temples.forEach(temple => {
            const card = document.createElement("div");
            card.classList.add("temple-card"); 

            const name = document.createElement("h3");
            name.textContent = temple.templeName;

            const location = document.createElement("p");
            location.textContent = `Location: ${temple.location}`;

            const dedicated = document.createElement("p");
            dedicated.textContent = `Dedicated: ${temple.dedicated}`;

            const area = document.createElement("p");
            area.textContent = `Area: ${temple.area} sq. ft.`;

            const img = document.createElement("img");
            img.src = temple.imageUrl;
            img.alt = `Image of ${temple.templeName}`;
            img.loading = "lazy"; 

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedicated);
            card.appendChild(area);
            card.appendChild(img);
            
            gallery.appendChild(card);
        });
    }

    displayTemples(); 
});

document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".temple-gallery"); 
    const navLinks = document.querySelectorAll("#nav-menu li a"); 

    function displayTemples(filteredTemples) {
        gallery.innerHTML = ""; 

        filteredTemples.forEach(temple => {
            const card = document.createElement("div");
            card.classList.add("temple-card");

            const name = document.createElement("h3");
            name.textContent = temple.templeName;

            const location = document.createElement("p");
            location.textContent = `Location: ${temple.location}`;

            const dedicated = document.createElement("p");
            dedicated.textContent = `Dedicated: ${temple.dedicated}`;

            const area = document.createElement("p");
            area.textContent = `Area: ${temple.area} sq. ft.`;

            const img = document.createElement("img");
            img.src = temple.imageUrl;
            img.alt = `Image of ${temple.templeName}`;
            img.loading = "lazy"; // Chargement différé

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedicated);
            card.appendChild(area);
            card.appendChild(img);

            gallery.appendChild(card);
        });
    }

    function filterTemples(category) {
        let filteredTemples;

        switch (category) {
            case "Old":
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(",")[0]); 
                    return year < 1900;
                });
                break;
            case "New":
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(",")[0]);
                    return year > 2000;
                });
                break;
            case "Large":
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case "Small":
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples; 
                break;
        }

        displayTemples(filteredTemples);
    }

    
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); 
            const category = event.target.textContent; 
            filterTemples(category);
        });
    });

    displayTemples(temples); 
});


document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;