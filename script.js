// ============================
// MOBILE MENU
// ============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// Close mobile menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach((link) => {

  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });

});


// ============================
// DARK MODE
// ============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  const icon = themeBtn.querySelector("i");

  if (document.body.classList.contains("dark-mode")) {

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

    localStorage.setItem("sportZoneTheme", "dark");

  } else {

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

    localStorage.setItem("sportZoneTheme", "light");

  }

});


// Remember dark mode choice

const savedTheme = localStorage.getItem("sportZoneTheme");

if (savedTheme === "dark") {

  document.body.classList.add("dark-mode");

  themeBtn
    .querySelector("i")
    .classList.replace("fa-moon", "fa-sun");

}


// ============================
// NEWS FILTER
// ============================

const filterButtons =
  document.querySelectorAll(".filter-btn");

const newsCards =
  document.querySelectorAll(".news-card");

filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const category =
      button.getAttribute("data-category");

    newsCards.forEach((card) => {

      const cardCategory =
        card.getAttribute("data-category");

      if (
        category === "all" ||
        category === cardCategory
      ) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

});


// ============================
// SEARCH NEWS
// ============================

const searchInput =
  document.getElementById("searchInput");

const noResults =
  document.getElementById("noResults");

searchInput.addEventListener("input", () => {

  const searchTerm =
    searchInput.value.toLowerCase();

  let visibleArticles = 0;

  newsCards.forEach((card) => {

    const articleText =
      card.innerText.toLowerCase();

    if (articleText.includes(searchTerm)) {

      card.style.display = "block";
      visibleArticles++;

    } else {

      card.style.display = "none";

    }

  });


  if (visibleArticles === 0) {

    noResults.style.display = "block";

  } else {

    noResults.style.display = "none";

  }

});


// ============================
// ARTICLE MODAL
// ============================

const modal =
  document.getElementById("articleModal");

const modalTitle =
  document.getElementById("modalTitle");

const closeModal =
  document.getElementById("closeModal");

const readButtons =
  document.querySelectorAll(".read-btn");

readButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const card =
      button.closest(".news-card");

    const title =
      card.querySelector("h3").innerText;

    modalTitle.innerText = title;

    modal.classList.add("show");

  });

});


closeModal.addEventListener("click", () => {

  modal.classList.remove("show");

});


window.addEventListener("click", (event) => {

  if (event.target === modal) {

    modal.classList.remove("show");

  }

});


// ============================
// NEWSLETTER
// ============================

const newsletterForm =
  document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const email =
    document.getElementById("emailInput").value;

  alert(
    `Thank you! ${email} has been subscribed to SportZone.`
  );

  newsletterForm.reset();

});


// ============================
// CONTACT FORM
// ============================

const contactForm =
  document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

  event.preventDefault();

  alert(
    "Thank you for contacting SportZone! Your message has been received."
  );

  contactForm.reset();

});


// ============================
// SCROLL TO TOP
// ============================

const scrollTopBtn =
  document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {

    scrollTopBtn.classList.add("show");

  } else {

    scrollTopBtn.classList.remove("show");

  }

});


scrollTopBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// ============================
// CURRENT YEAR
// ============================

document.getElementById("currentYear")
  .textContent = new Date().getFullYear();