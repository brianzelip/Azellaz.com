// scroll smooth to #shop
const shopButton = document.getElementById('goToShop');
const shopSection = document.getElementById('shop');

// via http://thenewcode.com/507/Smooth-Page-Scroll-in-5-Lines-of-JavaScript
shopButton.addEventListener('click', function(e){
  console.log('shopButton clicked!');
  if (window.scrollTo) {
    e.preventDefault();
    window.scrollTo({
      'behavior': 'smooth',
      'top': shopSection.offsetTop
    });
  };
});

// init Isotope
var iso = new Isotope( '.iso-grid', {
  itemSelector: '.iso-item',
  layoutMode: 'fitRows'
});

// this via http://codepen.io/desandro/pen/PqNBzj
imagesLoaded( '.iso-grid' ).on( 'progress', function() {
  // layout Isotope after each image loads
  iso.layout();
});

// bind filter button click
var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, '.btn' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.filters-button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, '.btn' ) ) {
      return;
    }
    var button = event.target;
    console.log(button.parentNode.querySelector('.is-active'));
    if (button.parentNode.querySelector('.is-active')) {
      button.parentNode.querySelector('.is-active').classList.remove('is-active');
    }
    button.classList.add('is-active');
  });
}