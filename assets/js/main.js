/**
 * Template Name: Company
 * Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", (e) => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  // Highlight current page link based on URL
  const links = document.querySelectorAll(".navmenu a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Auto generate the carousel indicators
   */
  document
    .querySelectorAll(".carousel-indicators")
    .forEach((carouselIndicator) => {
      carouselIndicator
        .closest(".carousel")
        .querySelectorAll(".carousel-item")
        .forEach((carouselItem, index) => {
          if (index === 0) {
            carouselIndicator.innerHTML += `<li data-bs-target="#${
              carouselIndicator.closest(".carousel").id
            }" data-bs-slide-to="${index}" class="active"></li>`;
          } else {
            carouselIndicator.innerHTML += `<li data-bs-target="#${
              carouselIndicator.closest(".carousel").id
            }" data-bs-slide-to="${index}"></li>`;
          }
        });
    });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
      initIsotope = new Isotope(
        isotopeItem.querySelector(".isotope-container"),
        {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        }
      );
    });

    isotopeItem
      .querySelectorAll(".isotope-filters li")
      .forEach(function (filters) {
        filters.addEventListener(
          "click",
          function () {
            isotopeItem
              .querySelector(".isotope-filters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            initIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aosInit === "function") {
              aosInit();
            }
          },
          false
        );
      });
  });

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll(".skills-animation");
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: "80%",
      handler: function (direction) {
        let progress = item.querySelectorAll(".progress .progress-bar");
        progress.forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);
}



)();
// function mobileView(){
  
// }


// const responsive = document.getElementById("deliveryservice");

// const screenWith = window.innerWidth;

// if (screenWith < 768) {
//   responsive.innerHTML = `   <div class="track">
//           <div class="track-content">
//             <h3 class="">Tracked from Pickup to  Drop-off</h3>
//             <p class="">
//              On your behalf, we monitor your <br> delivery and provide real-time status updates.
//               <br>
//               <!-- We’ll let customers know when their food is on its way and <br> handle all customer service on your behalf. -->
//             </p>
//              <img src="assets/img/GIGO track.jpg" alt="">
//           </div>
//              </div>
             
//                <div class="track">
         
//           <div class="track-content">
//             <h3 class="" " >Securing Every Shipment</h3>
//             <p class="">
//              We treat your orders like  <br> our own—safe, tracked, and timely.
//               <br>
//              <!-- You get an exact pick up time so you know when a rider will<br> collect the order. All you need is to have it ready for the pick up time. -->
//             </p>
//           </div>
//            <img src="assets/img/GIGO Secure.jpg" alt="">

//         </div>

//           <div class="track">
             
//               <div class="track-content">
//                 <h3 class="">Safe Hands, Secure Delivery</h3>
//                 <p class="">
//                   Your valuable order is tracked and
//                   <br />
//                   protected—every step of the way.
//                   <!-- <br>should, with order safety training and free insulated bags for riders. -->
//                 </p>
//                  <img src="assets/img/GIGO safety.jpg" alt="" />
//               </div>
//             </div>
// `;
// }
var _waEmbed=(i,o)=>{var e,t,d=()=>{var e,t,d=document.createElement("div");d.setAttribute("id","wa-btn-wrapper"),t=i,(e=(e=d)||document.getElementById("wa-btn-wrapper")).style.position="fixed",e.style.zIndex=t.zIndex,e.style.bottom=t.marginBottom+"px",e.style.left="left"==t.btnPosition?t.marginLeft+"px":"",e.style.right="right"==t.btnPosition?t.marginRight+"px":"",e.innerHTML=`
      <div id="wa_btn-content" style="background: ${t.btnColor||"#F60C86"}; padding:  ${""==t.ctaText?"12px":""}; border-radius: ${""==t.ctaText?"100%":t.cornerRadius+"px"}">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.1225 14.9458C17.8183 14.7895 16.3033 14.0473 16.0215 13.9469C15.7397 13.8409 15.5332 13.7907 15.3295 14.1032C15.123 14.4129 14.5371 15.102 14.3529 15.3113C14.1744 15.5178 13.993 15.5429 13.6889 15.3894C11.8808 14.4854 10.695 13.7767 9.50361 11.7315C9.18832 11.1874 9.8189 11.2265 10.4076 10.0518C10.5081 9.84534 10.4578 9.66956 10.3797 9.51331C10.3016 9.35706 9.68776 7.84478 9.43106 7.22815C9.18274 6.62826 8.92604 6.71197 8.7391 6.70081C8.56053 6.68965 8.35684 6.68965 8.15037 6.68965C7.9439 6.68965 7.61187 6.76777 7.33006 7.0719C7.04825 7.38161 6.25305 8.12659 6.25305 9.63887C6.25305 11.1511 7.35517 12.616 7.50584 12.8225C7.66209 13.0289 9.67381 16.1316 12.7625 17.4681C14.7157 18.3107 15.4802 18.3833 16.4567 18.2382C17.051 18.1489 18.2759 17.496 18.5298 16.7734C18.7837 16.0535 18.7837 15.4369 18.7084 15.3085C18.6331 15.1718 18.4266 15.0937 18.1225 14.9458Z" fill="${"dark"==t.btnColorScheme?"#333333":"white"}"/>
        <path d="M24.0292 7.65625C23.3986 6.15792 22.4946 4.81306 21.3422 3.65792C20.198 2.50948 18.8395 1.5966 17.3439 0.970982C15.8093 0.326451 14.1798 0 12.5002 0H12.4444C10.7535 0.00837054 9.11567 0.343192 7.57549 1.00167C6.09267 1.63371 4.74699 2.54821 3.61344 3.6942C2.47226 4.84654 1.57661 6.18583 0.95719 7.67857C0.315449 9.22433 -0.00821224 10.8677 0.000158294 12.5586C0.00962607 14.4963 0.468048 16.4054 1.33944 18.1362V22.3772C1.33944 22.7176 1.47467 23.0441 1.71537 23.2848C1.95607 23.5255 2.28253 23.6607 2.62293 23.6607H6.86679C8.59752 24.5321 10.5067 24.9905 12.4444 25H12.5029C14.1743 25 15.7954 24.6763 17.3216 24.043C18.8097 23.4248 20.163 22.5226 21.306 21.3867C22.4583 20.2455 23.3651 18.9118 23.9985 17.4247C24.657 15.8845 24.9918 14.2467 25.0002 12.5558C25.0085 10.8566 24.6793 9.20759 24.0292 7.65625ZM19.8132 19.8772C17.8573 21.8136 15.2624 22.8795 12.5002 22.8795H12.4527C10.7702 22.8711 9.09893 22.4526 7.62293 21.6657L7.38855 21.5402H3.45998V17.6116L3.33442 17.3772C2.54759 15.9012 2.12906 14.2299 2.12069 12.5474C2.10953 9.76562 3.17259 7.15402 5.12293 5.18694C7.07047 3.21987 9.67371 2.1317 12.4555 2.12054H12.5029C13.898 2.12054 15.2513 2.39118 16.5264 2.9269C17.7708 3.44866 18.8869 4.19922 19.8467 5.15904C20.8037 6.11607 21.5571 7.23493 22.0788 8.47935C22.6201 9.76841 22.8908 11.1356 22.8852 12.5474C22.8685 15.3265 21.7775 17.9297 19.8132 19.8772Z" fill="${"dark"==t.btnColorScheme?"#333333":"white"}"/>
        </svg>
        <p style="color: ${"dark"==t.btnColorScheme?"#333333":"white"}; margin-left: ${""==t.ctaText?"0 !important":"inherit"}">
          ${t.ctaText||""}
        </p>
      </div>
    `,(d=e).addEventListener("click",()=>{return o?document.getElementById("wa_widget-content")?void(document.getElementById("wa_widget-content").style.display="block"):(e=d,t=i,(e=document.createElement("div")).setAttribute("id","wa-widget-wrapper"),e=n(e,t),document.body.appendChild(e),document.getElementById("wa-widget-button").addEventListener("click",e=>window.open(`https://wa.me/${t.whatsAppNumber}?text=`+encodeURIComponent(t.welcomeMessage||""),"_blank")),void document.getElementById("wa-widget-close-btn").addEventListener("click",e=>{document.getElementById("wa_widget-content").style.display="none"})):window.open(`https://wa.me/${i.whatsAppNumber}?text=`+encodeURIComponent(i.welcomeMessage||""),"_blank");var e,t}),document.body.appendChild(d)},n=e=>((e=e||document.getElementById("wa-widget-wrapper")).style.position="fixed",e.style.zIndex=i.zIndex,e.style.bottom=Number(i.marginBottom+55)+"px",e.style.left="left"==i.btnPosition?i.marginLeft+"px":"",e.style.right="right"==i.btnPosition?i.marginRight+"px":"",e.innerHTML=`
      <div id="wa_widget-content">
        <div class="wa_widget-brand-container" style="background: ${o.headerBackgroundColor}">
          <div><img class="wa_widget-brand-image" src="${o.brandImage||"https://uploads-ssl.webflow.com/5f68a65cd5188c058e27c898/6204c4267b92625c9770f687_whatsapp-chat-widget-dummy-logo.png"}"></div>
          <div class="wa_widget-brand-info">
            <h4 style="color: ${"dark"==o.headerColorScheme?o.darkHeaderColorScheme.title:"white"}">${o.title||""}</h4>
            <p style="color: ${"dark"==o.headerColorScheme?o.darkHeaderColorScheme.subTitle:"white"}">${o.subTitle||""}</p>
          </div>
          <div class="wa_widget-close-btn" id="wa-widget-close-btn">
            <svg height="12" width="12" viewPort="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="11" x2="11" y2="1" stroke="${"dark"==o.headerColorScheme?"black":"white"}" stroke-width="2"/>
              <line x1="1" y1="1" x2="11" y2="11" stroke="${"dark"==o.headerColorScheme?"black":"white"}"stroke-width="2"/>
            </svg>
          </div>
        </div>
        <div class="wa_widget-message-container">
          <div class="wa_widget-message">
            <h4>${o.title||""}</h4>
            <p>${o.greetingText||""}</p>
          </div>
        </div>
        <div class="wa_widget-button-container">
          <div class="wa_widget-button" id="wa-widget-button" style="background: ${o.btnColor};  border-radius: ${""==o.ctaText?"100%":o.cornerRadius+"px"}" >
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.1225 14.9458C17.8183 14.7895 16.3033 14.0473 16.0215 13.9469C15.7397 13.8409 15.5332 13.7907 15.3295 14.1032C15.123 14.4129 14.5371 15.102 14.3529 15.3113C14.1744 15.5178 13.993 15.5429 13.6889 15.3894C11.8808 14.4854 10.695 13.7767 9.50361 11.7315C9.18832 11.1874 9.8189 11.2265 10.4076 10.0518C10.5081 9.84534 10.4578 9.66956 10.3797 9.51331C10.3016 9.35706 9.68776 7.84478 9.43106 7.22815C9.18274 6.62826 8.92604 6.71197 8.7391 6.70081C8.56053 6.68965 8.35684 6.68965 8.15037 6.68965C7.9439 6.68965 7.61187 6.76777 7.33006 7.0719C7.04825 7.38161 6.25305 8.12659 6.25305 9.63887C6.25305 11.1511 7.35517 12.616 7.50584 12.8225C7.66209 13.0289 9.67381 16.1316 12.7625 17.4681C14.7157 18.3107 15.4802 18.3833 16.4567 18.2382C17.051 18.1489 18.2759 17.496 18.5298 16.7734C18.7837 16.0535 18.7837 15.4369 18.7084 15.3085C18.6331 15.1718 18.4266 15.0937 18.1225 14.9458Z" fill="${"dark"==o.btnColorScheme?o.darkHeaderColorScheme.title:"white"}"/>
            <path d="M24.0292 7.65625C23.3986 6.15792 22.4946 4.81306 21.3422 3.65792C20.198 2.50948 18.8395 1.5966 17.3439 0.970982C15.8093 0.326451 14.1798 0 12.5002 0H12.4444C10.7535 0.00837054 9.11567 0.343192 7.57549 1.00167C6.09267 1.63371 4.74699 2.54821 3.61344 3.6942C2.47226 4.84654 1.57661 6.18583 0.95719 7.67857C0.315449 9.22433 -0.00821224 10.8677 0.000158294 12.5586C0.00962607 14.4963 0.468048 16.4054 1.33944 18.1362V22.3772C1.33944 22.7176 1.47467 23.0441 1.71537 23.2848C1.95607 23.5255 2.28253 23.6607 2.62293 23.6607H6.86679C8.59752 24.5321 10.5067 24.9905 12.4444 25H12.5029C14.1743 25 15.7954 24.6763 17.3216 24.043C18.8097 23.4248 20.163 22.5226 21.306 21.3867C22.4583 20.2455 23.3651 18.9118 23.9985 17.4247C24.657 15.8845 24.9918 14.2467 25.0002 12.5558C25.0085 10.8566 24.6793 9.20759 24.0292 7.65625ZM19.8132 19.8772C17.8573 21.8136 15.2624 22.8795 12.5002 22.8795H12.4527C10.7702 22.8711 9.09893 22.4526 7.62293 21.6657L7.38855 21.5402H3.45998V17.6116L3.33442 17.3772C2.54759 15.9012 2.12906 14.2299 2.12069 12.5474C2.10953 9.76562 3.17259 7.15402 5.12293 5.18694C7.07047 3.21987 9.67371 2.1317 12.4555 2.12054H12.5029C13.898 2.12054 15.2513 2.39118 16.5264 2.9269C17.7708 3.44866 18.8869 4.19922 19.8467 5.15904C20.8037 6.11607 21.5571 7.23493 22.0788 8.47935C22.6201 9.76841 22.8908 11.1356 22.8852 12.5474C22.8685 15.3265 21.7775 17.9297 19.8132 19.8772Z" fill="${"dark"==o.btnColorScheme?o.darkHeaderColorScheme.title:"white"}"/>
            </svg>
            <p style="color: ${"dark"==o.btnColorScheme?o.darkHeaderColorScheme.title:"white"}; margin-left: ${""==o.ctaText?"0px !important":""}">${o.ctaText||""}</p>
          </div>
        </div>
      </div>`,e);e=function(){d()},(t=document.createElement("link")).setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.onload=e,t.setAttribute("href","https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.css"),document.head.appendChild(t)};

     // Wait until DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const loglist = [
    { title: "Supply Chain", icon: "assets/supplychain.png" },
    { title: "Inventory Management", icon: "assets/inventory.png" },
    { title: "Order Fulfillment", icon: "assets/order.png" },
    { title: "Warehousing", icon: "assets/warehouse.png" },
  ];

  const list = [
    { text: "Fast Delivery", icon: "assets/tick.png" },
    { text: "Safety", icon: "assets/tick.png" },
    { text: "Good Packaging", icon: "assets/tick.png" },
    { text: "Privacy", icon: "assets/tick.png" },
  ];

  // Inject logistics list items
  const loglistUl = document.getElementById('loglist');
  loglist.forEach((item, idx) => {
    const li = document.createElement('li');
    li.setAttribute('data-aos', 'fade-right');
    li.setAttribute('data-aos-delay', idx * 100);
    li.className = 'loglist-item';

    li.innerHTML = `
      <img src="${item.icon}" alt="${item.title}" />
      <span>${item.title}</span>
    `;
    loglistUl.appendChild(li);
  });

  // Inject overlay list on right side image
  const overlayBox = document.querySelector('.overlay-box');
  list.forEach((item, idx) => {
    const div = document.createElement('div');
    div.setAttribute('data-aos', 'fade-up');
    div.setAttribute('data-aos-delay', idx * 100);

    div.innerHTML = `
      <img src="${item.icon}" alt="" />
      <span>${item.text}</span>
    `;

    overlayBox.appendChild(div);
  });

});

const items = [
  {
    title: "Supply Chain",
    description: "Sed ut perspiciatis unde is voluptatem accusant",
    image: "assets/container.png",
    effect: "fade-up"
  },
  {
    title: "Inventory Management",
    description: "Sed ut perspiciatis unde is voluptatem accusant",
    image: "assets/storage.png",
    effect: "zoom-in"
  },
  {
    title: "Order Fulfillment",
    description: "Sed ut perspiciatis unde is voluptatem accusant",
    image: "assets/container.png",
    effect: "flip-left"
  },
  {
    title: "Warehousing",
    description: "Sed ut perspiciatis unde is voluptatem accusant",
    image: "assets/container.png",
    effect: "fade-left"
  },
];

const cardsWrapper = document.querySelector(".cards-wrapper");

items.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-aos", item.effect);

  card.innerHTML = `
    <div class="card-content">
      <h2>${item.title}</h2>
      <p>${item.description}</p>
      <ul>
        <li><img src="assets/tick.png" alt="tick" width="16" />Fast Delivery & Secure Package</li>
        <li><img src="assets/tick.png" alt="tick" width="16" />Safety & Privacy Security</li>
      </ul>
    </div>
    <img src="${item.image}" alt="${item.title}" class="card-image" />
  `;

  cardsWrapper.appendChild(card);
});
