document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("menu-close");
    const sidebar = document.getElementById("sidebar");

    openBtn.addEventListener("click", () => {
      sidebar.classList.remove("translate-x-full");
    });

    closeBtn.addEventListener("click", () => {
      sidebar.classList.add("translate-x-full");
    });
  });