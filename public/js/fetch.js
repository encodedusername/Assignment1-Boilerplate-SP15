(function() {
  var $;

  $ = jQuery;

  $(document).ready(function() {
    $("#results").hide();
    
    return $('#fetch').on('click', function() {
      $("#fetch").delay(3200).fadeOut(300);
    // Show the div in 5s
    $("#results").delay(3200).fadeIn(300);
    
      
      return $(this).toggleClass('button--loading');
      
    });
  });

}).call(this);

