class TxtRotate {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 100) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  }
  tick() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 100 - Math.random() * 10;

    if (this.isDeleting) {
      delta /= 2000;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  }
}

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};

// sidebar toggler
var sidebar = document.querySelector(".sidebar");
if (sidebar) {
  var sidebarToggler = document.querySelector(".sidebar-toggler");
  var sidebarOverlay = document.querySelector(".sidebar-overlay");
  var sidebarTogglerIcon = document.querySelector(".sidebar-toggle-icon");
  var body = document.querySelector("body");
  sidebarToggler.addEventListener("click", function () {
    sidebarOverlay.classList.toggle("show");
    sidebar.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
  });
  sidebarOverlay.addEventListener("click", function () {
    this.classList.remove("show");
    sidebarTogglerIcon.classList.remove("active");
    sidebar.classList.remove("show");
    body.classList.remove("overflow-hidden");
  });
}

// tooltip init
var tooltipEl = document.querySelectorAll(".has-tooltip");
if (tooltipEl) {
  var length = tooltipEl.length;
  for (var i = 0; i < length; i++) {
    var attr = tooltipEl[i].getAttribute("title");
    var x = document.createElement("SPAN");
    var t = document.createTextNode(attr);
    x.appendChild(t);
    x.className = "tooltip-label";
    tooltipEl[i].appendChild(x);
  }
}

// browser preview device toggle
var bwsBlock = document.querySelector(".bws-block");
if (bwsBlock) {
  var toogleDesktop = document.querySelector(".bws-device-toggle-desktop");
  var toogleMobile = document.querySelector(".bws-device-toggle-mobile");

  toogleMobile.addEventListener("click", function () {
    bwsBlock.classList.add("bws-mobile");
  });
  toogleDesktop.addEventListener("click", function () {
    bwsBlock.classList.remove("bws-mobile");
  });
}

// scroll to top and bottom of the page
scrollingElement = document.scrollingElement || document.body;
// function scrollToBottom() {
//   window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
//   document.querySelector(".scroll-to-top").classList.add("show");
//   document.querySelector(".scroll-to-bottom").classList.remove("show");
// }
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// show hide scroll direction button
window.addEventListener(
  "scroll",
  function () {
    var target = document.querySelector(".scroll-to-position");
    if (window.pageYOffset > 150) {
      target.classList.add("visible");
    } else if (window.pageYOffset < 150) {
      target.classList.remove("visible");
    }
  },
  false
);

// scroll direction
var scrollableElement = document.body; //document.getElementById('scrollableElement');
scrollableElement.addEventListener("wheel", checkScrollDirection);
function checkScrollDirection(e) {
  document.querySelector(".scroll-to-top").classList.add("show");
  document.querySelector(".scroll-to-bottom").classList.remove("show");
}
function checkScrollDirectionIsUp(e) {
  if (e.wheelDelta) {
    return e.wheelDelta > 0;
  }
  return e.deltaY < 0;
}
