// scroll smooth to #shop
const goToShopBtns = document.querySelectorAll('.goToShop');
const shopSection = document.getElementById('shop');

// es6 approach via http://stackoverflow.com/a/41018900/2145103
// Array
//   .from(goToShopBtns)
//   .forEach((btn) => btn.addEventListener('click', smoothScroll));
//
// CHOOSING AGAINST THE ABOVE es6 APPROACH BECAUSE ie11

// es5 approach because ie11 via http://stackoverflow.com/a/14626297/2145103
[]
  .forEach
  .call(goToShopBtns,function(btn) {
    btn.addEventListener('click', smoothScroll, false)
  });


// via http://thenewcode.com/507/Smooth-Page-Scroll-in-5-Lines-of-JavaScript
function smoothScroll(e) {
  console.log('goToShopBtns clicked!');
  if (window.scrollTo) {
    e.preventDefault();
    window.scrollTo({
      'behavior': 'smooth',
      'top': shopSection.offsetTop
    });
  };
}


// // WAY OF ISOTOPE + imagesLoaded after all images have loaded
// var grid = document.querySelector('.iso-grid');
// var iso;
//
// imagesLoaded( grid, function() {
//   // init Isotope after all images have loaded
//   iso = new Isotope( grid, {
//     itemSelector: '.iso-item',
//     layoutMode: 'fitRows'
//   });
// });


// WAY OF ISOTPE + imagesLoaded after each image loads
// init Isotope
var iso = new Isotope( '.iso-grid', {
  itemSelector: '.iso-item',
  layoutMode: 'fitRows',
  percentPosition: true
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
