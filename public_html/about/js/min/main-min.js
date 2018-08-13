jQuery(document).ready(function ($) {
  $(".level-bar-inner").css("width", "0"), $(window).on("load", function () {
    $(".level-bar-inner").each(function () {
      var e = $(this).data("level");
      $(this).animate({
        width: e
      }, 800)
    })
  }), $(".level-label").tooltip(), {
    limit: 3,
    effect: "slideFastSynced",
    layoutTemplate: "<div class='item'>{entries}</div>",
    entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
  })
});