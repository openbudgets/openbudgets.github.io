jQuery(document).ready(function($){
	// init Isotope
	var $grid = $('.tool-list').isotope({
	  // options
		itemSelector: '.tool',
	  layoutMode: 'fitRows'
	});

	// store filter for each group
	var filters = {};

	// filter items on click
	$('.filter-buttons').on( 'click', 'li', function() {
	  var $this = $(this);
	  // get group key
	  var $buttonGroup = $this.parents('.filter-buttons');
	  var filterGroup = $buttonGroup.attr('data-filter-group');
	  // set filter for group
	  filters[ filterGroup ] = $this.attr('data-filter');
	  // combine filters
	  var filterValue = concatValues( filters );
	  $grid.isotope({ filter: filterValue });

		// add/remove active classes
		$(this).parent(".filter-buttons").children("li").removeClass("active");
		$(this).addClass("active");

	});

	// flatten object by concatting values
	function concatValues( obj ) {
	  var value = '';
	  for ( var prop in obj ) {
	    value += obj[ prop ];
	  }
	  return value;
	}

	// update currently showing text
	$('.audience.filter-buttons').on( 'click', 'li', function() {
		var currentAudience = $( ".audience.filter-buttons li.active" ).text();
		$( "p.current.audience strong" ).html( currentAudience );
	});
	$('.type.filter-buttons').on( 'click', 'li', function() {
		var currentType = $( ".type.filter-buttons li.active" ).text();
		$( "p.current.type strong" ).html( currentType );
	});

	// toggle open class
	$('.filter-select').on( 'click', '.current', function() {
		$(this).parent(".filter-select").toggleClass("open");
	});

});
