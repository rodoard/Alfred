define(function() {
  var stickit;
  stickit = {
    checkboxOptions: function(target) {
      return {
        observe: target,
        onGet: function(val) {
          if (val === "true" || val === true) {
            return true;
          } else {
            return false;
          }
        }
      };
    },
    selectOptions: function(target, collection, defaultLabel) {
      return {
        observe: target,
        selectOptions: {
          collection: function() {
            return collection;
          },
          defaultOption: {
            label: defaultLabel || "Choose one...",
            value: null
          }
        }
      };
    }
  };
  return stickit;
});
