/*global window*/
/*global $*/
(function(window, $) {
    "use strict";

    var gcal_mode = "WEEK";

    $(document).ready(function() {

        $("div.footer span.gotobar").remove();

        var s = window.location.search.split("&")[0].slice(1);

        if(s == "" || typeof s === "undefined") {
            s = "Home";
        } else if(s == "Activities") {

            $(window).resize(function() {
                if($(window).width() < 480 && gcal_mode === "WEEK") {
                    var iframe = $(".iframe-wrapper iframe");
                    var address = iframe.attr("src");
                    gcal_mode = "AGENDA";
                    iframe.attr("src", address.replace("mode=WEEK", "mode=AGENDA"));
                } else if($(window).width() >= 480 && gcal_mode === "AGENDA") {
                    var iframe = $(".iframe-wrapper iframe");
                    var address = iframe.attr("src");
                    gcal_mode = "WEEK";
                    iframe.attr("src", address.replace("mode=AGENDA", "mode=WEEK"));
                }
            });
        }
        var links = $("div.header .gotobar a");

        links.removeClass("selected");
        links.each(function() {

            if($(this).text() === s) {
                 $(this).addClass("selected");
                 return;
            }
        });




    });

})(window, $);