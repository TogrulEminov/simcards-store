document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll(".modalBtn");
  const closeButtons = document.querySelectorAll(".closeBtn");
  const modals = document.querySelectorAll(".customModalContainer");

  // new modal
  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-btn");
      const modal = document.querySelector(
        `.customModalContainer[data-modalId="${modalId}"]`
      );
      modal.classList.add("show");
      document.body.classList.add("overflow-hidden");
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modalCloseId");
      const modal = document.querySelector(
        `.customModalContainer[data-modalId="${modalId}"]`
      );
      modal.classList.remove("show");
      document.body.classList.remove("overflow-hidden");
    });
  });
  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
        document.body.classList.remove("overflow-hidden");
      }
    });
  });
});
