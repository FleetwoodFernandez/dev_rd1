define(['jquery', 'knockout'], function($, ko) {
    ko.bindingHandlers.slide = {
        init: function(element, valueAccessor) {
            var value = valueAccessor();
            //console.log($(element))
        },
        update: function(element, valueAccessor) {
            var value = valueAccessor();
            //console.log($(element))
        }
    };
});
