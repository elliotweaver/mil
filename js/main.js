(function($) {


  $(document).ready(function(){
    $.localScroll();
  });

  $(".page-what .what").on('click', function(){

    var $pop = $(".pop", this);

    if($pop.hasClass('active')){

    }

    // Make Active
    else {
      $pop.addClass('active');
      $pop.animate({
        top: '0px'
      },500, function(){
        // empty
      });
    }

  });

  var $close = $(".close");
  $close.on('click', function(){
    $parent = $(this).parent();
    $parent.animate({
      top: '-1000px'
    },500, function(){
      $parent.removeClass('active');
    });
  })

}(jQuery));
