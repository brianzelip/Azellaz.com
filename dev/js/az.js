var iso = new Isotope( '.iso-grid', {
  itemSelector: '.iso-item',
  layoutMode: 'fitRows'
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
