$(function() {
  // on init
  $(".table-hideable .hide-col").each(HideColumnIndex);

  // on click
  $('.hide-column').click(HideColumnIndex)

  function HideColumnIndex() {
    var $el = $(this);
    var $cell = $el.closest('th,td')
    var $table = $cell.closest('table')

    // get cell location - https://stackoverflow.com/a/4999018/1366033
    var colIndex = $cell[0].cellIndex + 1;

    // find and hide col index
    $table.find("tbody tr, thead tr")
      .children(":nth-child(" + colIndex + ")")
      .addClass('hide-col');
      
    // show restore footer
    $table.find(".footer-restore-columns").show()
  }

  // restore columns footer
  $(".restore-columns").click(function(e) {
    var $table = $(this).closest('table')
    $table.find(".footer-restore-columns").hide()
    $table.find("th, td")
      .removeClass('hide-col');

  })

  $('[data-toggle="tooltip"]').tooltip({
    trigger: 'hover'
  })

})