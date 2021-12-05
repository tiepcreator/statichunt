var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 100) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 100 - Math.random() * 10;

  if (this.isDeleting) { delta /= 2000; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};

// sidebar toggler
var sidebarToggler = document.querySelector('.sidebar-toggler');
var sidebarOverlay = document.querySelector('.sidebar-overlay');
var sidebarTogglerIcon = document.querySelector('.sidebar-toggle-icon');
var sidebar = document.querySelector('.sidebar');
var body = document.querySelector('body');
sidebarToggler.addEventListener('click', function() {
  sidebarOverlay.classList.toggle('show');
  sidebar.classList.toggle('show');
  body.classList.toggle('overflow-hidden');
});
sidebarOverlay.addEventListener('click', function() {
  this.classList.remove('show');
  sidebarTogglerIcon.classList.remove('active');
  sidebar.classList.remove('show');
  body.classList.remove('overflow-hidden');
});