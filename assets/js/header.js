document.addEventListener("DOMContentLoaded", () => {
  let hamburger = document.querySelector("#hamburger");
  let hamburgerIcon = document.querySelector("#hamburger i");
  let sidebar = document.querySelector("#mobile_navbar");
  let overlay = document.querySelector(".overlay");

  function slideToggle(element) {
    if (element.style.maxHeight && element.style.maxHeight !== "0px") {
      element.style.maxHeight = "0px";
      element.addEventListener(
        "transitionend",
        () => {
          if (element.style.maxHeight === "0px") {
            element.style.display = "none";
          }
        },
        { once: true }
      );
    } else {
      element.style.display = "block"; // Önə çıxart
      setTimeout(() => {
        let newHeight = element.scrollHeight - 150; // 150px çıx
        element.style.maxHeight = (newHeight > 0 ? newHeight : 0) + "px";
      }, 10);
    }
  }

  function toggleSidebar() {
    slideToggle(sidebar);
    sidebar.classList.toggle("active_navbar");
    if (hamburgerIcon.classList.contains("fa-bars")) {
      hamburgerIcon.classList.remove("fa-bars");
      hamburgerIcon.classList.add("fa-times");
    } else {
      hamburgerIcon.classList.remove("fa-times");
      hamburgerIcon.classList.add("fa-bars");
    }
    overlay.style.display = sidebar.classList.contains("active_navbar") ? "block" : "none";
    document.body.classList.toggle("overflow-hidden", sidebar.classList.contains("active_navbar"));
  }

  hamburger.addEventListener("click", toggleSidebar);
  overlay.addEventListener("click", toggleSidebar);

  // Ekran ölçüsü 992 pikseldən böyükdürsə, sidebarı bağla
  function checkWindowWidth() {
    if (window.innerWidth > 991.99) {
      sidebar.style.maxHeight = "0px";
      sidebar.style.display = "none";
      sidebar.classList.remove("active_navbar");
      overlay.style.display = "none";
      hamburgerIcon.classList.remove("fa-times");
      hamburgerIcon.classList.add("fa-bars");
      document.body.classList.remove("overflow-hidden");
    }
  }

  window.addEventListener("resize", checkWindowWidth);
  checkWindowWidth();

  function closeSidebar() {
    sidebar.style.maxHeight = "0px";
    sidebar.addEventListener(
      "transitionend",
      () => {
        if (sidebar.style.maxHeight === "0px") {
          sidebar.style.display = "none";
        }
      },
      { once: true }
    );
    sidebar.classList.remove("active_navbar");
    overlay.style.display = "none";
    hamburgerIcon.classList.remove("fa-times");
    hamburgerIcon.classList.add("fa-bars");
    document.body.classList.remove("overflow-hidden");
  }

  window.addEventListener("hashchange", closeSidebar);

  if (window.location.hash) {
    closeSidebar();
  }
});
