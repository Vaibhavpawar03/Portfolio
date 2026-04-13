const navLinks = document.querySelectorAll(".nav-link");
const mainContent = document.getElementById("mainContent");
const sections = document.querySelectorAll(".section");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    mainContent.scrollTo({
      top: targetSection.offsetTop - 20,
      behavior: "smooth",
    });

    navLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

mainContent.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (mainContent.scrollTop >= sectionTop && mainContent.scrollTop < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});