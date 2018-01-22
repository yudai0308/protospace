$(function() {
  function buildHTML(comment) {
    var html = `<li class="comment-list__content">${comment.content}</li>
                <li class="comment-list__name">${comment.name}</li>
                <li class="comment-list__date">${comment.date}</li>`
  return html;
  };

  $("#new_comment").on("submit", function(e) {
    e.preventDefault();
    var formData = new FormData($(this).get(0));
    var href = window.location.href + "/comments"

    $(".send-button").removeAttr("data-disable-with");

    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data) {
      var html = buildHTML(data);
      $(".comment-list").prepend(html);
      $(".input-comment").val("");
    })

    .fail(function() {
      alert("error");
    });
  });
});
