define(['jquery', 'knockout'], function($, ko) {
    ko.bindingHandlers.scrollSlide = {
        init: function(element, valueAccessor) {
            console.log("init")
            var options = valueAccessor();
            var newValueAccessor = function() {
                return function() {
                    options.action.apply(context, options.params);
                };
            };
            ko.bindingHandlers.click.init(element, newValueAccessor, allBindingsAccessor, context);
        },
        update: function(element, valueAccessor) {
            console.log("update")
            console.log($(element))
        }
    };
});
