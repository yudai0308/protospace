//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .

$(function() {
  $("form").on("change", "input[type='file']", function() {
    alert("Hallo");
  });
});
