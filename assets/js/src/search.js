"use strict";

$(function() {
    var $searchField = $("#search-field"),
        $popularTags = $("#popular-tags"),
        showTags,
        hideTags;

    showTags = function() {
        return $popularTags.show();
    };

    hideTags = function() {
        return $popularTags.hide();
    };

    return $searchField.ghostHunter({
        results: "#search-results",
        zeroResultsInfo: false,
        onKeyUp: true,
        displaySearchInfo: true,
        info_template: "<p>Resultados: {{amount}}</p>",
        result_template: "<a class=\"result\" href='{{link}}'>\n  <h2>{{title}}</h2></a>",
        onComplete: function(query) {
            if (query.length > 0) {
                return hideTags();
            } else {
                return showTags();
            }

        }
    });
});
