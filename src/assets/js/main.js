window.onload = () => {
  const header = {
    element: document.getElementById("header"),
    backdrop: document.getElementById("header-backdrop"),
    hide: function () {
      this.element.style.visibility = "hidden";
    },
    show: function () {
      this.element.style.visibility = "visible";
    },
    hideBackDrop: function () {
      this.backdrop.style.maxHeight = "0";
      this.backdrop.style.opacity = "0";
    },
    showBackDrop: function () {
      this.backdrop.style.maxHeight = "20rem";
      this.backdrop.style.opacity = "1";
    },
  };

  window.onscroll = function (e) {
    if (
      (document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50) &&
      this.oldScroll < this.scrollY
    ) {
      header.hide();
      header.hideBackDrop();
    } else if (
      document.body.scrollTop < 100 ||
      document.documentElement.scrollTop < 100 ||
      this.oldScroll > this.scrollY
    ) {
      header.show();
    }

    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      header.showBackDrop();
    } else {
      header.hideBackDrop();
    }

    //   if (this.oldScroll > this.scrollY) {
    //     header.show();
    //     header.element.style.backgroundColor = "black";
    //   } else {
    //     header.hide();
    //   }
    this.oldScroll = this.scrollY;
  };

  const modal = {
    modalTogglerEls: document.getElementsByClassName("modal-toggler"),
    modalEl: document.getElementById("modal"),
    modalContentEl: document.getElementById("modal-content"),
    wrapper: document.getElementById("data-wrapper"),
    player: document.getElementById("modal-player"),
    show: function (e) {
      this.modalContentEl.classList.toggle("opacity-100");
      this.wrapper.classList.toggle("move-up");
      this.modalEl.classList.toggle("modal-shown");

      this.player.pause();
      this.player.currentTime = 0;
    },
  };

  [...modal.modalTogglerEls].forEach((el) => {
    el.addEventListener("click", (e) => {
      modal.show(e);
    });
  });

  const tiles = {
    tileEls: document.getElementsByClassName("tile"),
    setBackground: () => {
      [...tiles.tileEls].forEach((el) => {
        if (window.innerWidth < 1024) {
          el.style.backgroundImage = `url(${el.dataset.imgSrc})`;
        } else {
          el.style.backgroundImage = `url(${el.dataset.imgLgsrc})`;
        }
      });
    },
  };

  tiles.setBackground();

  window.addEventListener("resize", () => {
    tiles.setBackground();
  });
};
