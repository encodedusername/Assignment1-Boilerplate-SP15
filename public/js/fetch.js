
$(document).ready(function() {
  $("#results").hide();

  $('#fetch').click(function() {
    $(this).fadeOut(300, function() {
      $.get('/fetch-calc').then(function(data) {
              // Show the div in 5s
          //$this.toggleClass('button--loading');
          $("#l_pct").text(data.l_pct + "%");
          $("#p_pct").text(data.p_pct + "%");
          $("#overall").text(data.overall + "%");
          //$("#message").text(data.message);
          $("#results").fadeIn(300);
      });
    });
  });
});