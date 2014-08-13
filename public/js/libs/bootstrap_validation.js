define(["underscore"], function(U) {
    //based off of: https://gist.github.com/driehle/2909552
    //customized greatly
    return function() {
        var element;
        element = function(view, attr) {
            var bindings, selector;
            bindings = _.invert(view.bindings);
            selector = bindings[attr];
            if (selector === undefined) {

                selector = _(_(view.bindings).keys()).find(function(value) {

                    return value.match(attr);
                });

            }
            return view.$(selector);
        };
        clearValidation = function(view, attr) {
            var control, group;
            control = element(view, attr);

            if (!control) return ;

            group = control.parents(".form-group");
            group.removeClass("has-error");
            if (control.data("error-style") === "tooltip") {
                if (control.data("tooltip")) {
                    return control.tooltip("hide");
                }
            } else if (control.data("error-style") === "inline") {
                return group.find(".help-inline.error-message").remove();
            } else {
                group.find(".help-block.error-message, .help-block .error-message").remove();
            }
        }
        return {
            valid: function(view, attr, _) {
              clearValidation(view, attr)
            },
            invalid: function(view, attr, error, _) {
                var control, group, position, target;
                clearValidation(view, attr)
                control = void 0;
                group = void 0;
                position = void 0;
                target = void 0;
                control = element(view, attr);
                group = control.parents(".form-group");
                group.addClass("has-error");
                if (control.data("error-style") === "tooltip") {
                    position = control.data("tooltip-position") || "right";
                    control.tooltip({
                        placement: position,
                        trigger: "manual",
                        title: error
                    });
                    return control.tooltip("show");
                } else if (control.data("error-style") === "inline") {
                    if (group.find(".help-inline").length === 0) {
                        group.find(".form-control").after("<span class='help-inline error-message'></span>");
                    }
                    target = group.find(".help-inline");
                    return target.text(error);
                } else {
                    if (group.find(".help-block").length === 0) {
                        group.find(".form-control").after("<p class='help-block error-message'></p>");
                    }
                    target = group.find(".help-block");
                    $(target).prepend("<p class='error-message'>" + error+ "</p>");
                }
            }
        };
    };
});
