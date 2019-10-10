const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', "./img/logo.png")

// NAV
const nav = document.getElementsByTagName("a");
nav[0].textContent = siteContent ["nav"]["nav-item-1"]
nav[0].style.color = "green";
nav[1].textContent = siteContent ["nav"]["nav-item-2"]
nav[1].style.color = "green";
nav[2].textContent = siteContent ["nav"] ["nav-item-3"]
nav[2].style.color = "green";
nav[3].textContent = siteContent ["nav"]["nav-item-4"]
nav[3].style.color = "green";
nav[4].textContent = siteContent ["nav"]["nav-item-5"]
nav[4].style.color = "green";
nav[5].textContent = siteContent ["nav"]["nav-item-6"]
nav[5].style.color = "green";


//CTA
const hOne = document.querySelector(".cta h1");
hOne.textContent = siteContent ["cta"]["h1"]

const newHead = document.createElement("h1");
newHead.textContent = "SAUCE!";
hOne.append(newHead);

const newWord = document.createElement("h1");
newWord.textContent = "THIS";
hOne.prepend(newWord);

const button = document.querySelector(".cta button");
button.textContent = siteContent ["cta"]["button"]

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src","./img/header-img.png" );

//Main-Content

const headers = document.getElementsByTagName("h4");
headers[0].textContent = siteContent["main-content"]["features-h4"]
headers[1].textContent = siteContent ["main-content"]["about-h4"]

const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", "./img/mid-page-accent.jpg");

headers[2].textContent = siteContent ["main-content"]["services-h4"]
headers[3].textContent = siteContent["main-content"]["product-h4"]
headers[4].textContent = siteContent ["main-content"]["vision-h4"]



const content = document.getElementsByTagName("p");

content[0].textContent = siteContent ["main-content"]["features-content"]
content[1].textContent = siteContent ["main-content"]["about-content"]
content[2].textContent = siteContent ["main-content"]["services-content"]
content[3].textContent = siteContent ["main-content"]["product-content"]
content[4].textContent = siteContent ["main-content"]["vision-content"]

//Contact

headers[5].textContent = siteContent ["contact"]["contact-h4"]
content[5].textContent = siteContent ["contact"]["address"]
content[6].textContent = siteContent ["contact"]["phone"]
content[7].textContent = siteContent ["contact"]["email"]

//Footer

content[8].textContent = siteContent ["footer"]["copyright"]
