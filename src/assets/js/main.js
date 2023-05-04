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
    this.backdrop.style.maxHeight = "6.5rem";
    this.backdrop.style.opacity = "1";
  },
};

window.onscroll = function (e) {
  if (
    (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) &&
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
