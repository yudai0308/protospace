// -----コメント新規投稿機能-----
$(function() {
  function buildHTML(comment) {
    var html = `<div class="comment-list" data-comment-id="${comment.id}">
                  <div class="comment-list__content">${comment.content}</div>
                  <div class="comment-list__name">${comment.name}</div>
                  <div class="comment-list__date">${comment.date}</div>
                  <a class="comment-list__modify"> 編集 </a>
                  <a class="comment-list__delete"> 削除 </a>
                </div>`
    return html;
  };

  $(document).on("submit", "#new_comment", function(e) {
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
      $(".comment-index").prepend(html);
      $(".input-comment").val("");
    })

    .fail(function() {
      alert("コメントを入力してください");
    });
    $(".comment-index").animate({scrollTop: 0}, 1000, "swing");
  });
});


// -----コメント編集機能-----
$(function() {
  var newCommentForm =
   `<div class="comment-form">
      <textarea class="input-comment" placeholder="type a comment" name="comment[content]" id="comment_content"></textarea>
      <input type="submit" name="commit" value="送信" class="send-button"></input>
    </div>`
  var createCommentURL = window.location.href + "/comments"
  function changeButton() {
    $(".comment-form").replaceWith(newCommentForm);
    $("#edit_comment").attr("action", createCommentURL);
    $("#edit_comment").attr("method", "post")
    $("#edit_comment").attr("id", "new_comment")
  };

  // 「編集」を押したときの処理
  $(document).on("click", ".comment-list__modify", function() {
    // 変数の定義
    var originalComment = $(this).siblings(".comment-list__content").text();
    var commentId = $(this).parent().attr("data-comment-id");
    var editCommentURL = window.location.href + "/comments/" + commentId
    // console.log(originalComment);
    // console.log(commentId);
    // console.log(editCommentURL);
    // console.log(createCommentURL);
    var editCommentForm =
     `<div class="comment-form" data-comment-id="${commentId}">
        <textarea class="input-comment" placeholder="type a comment" name="comment[content]" id="comment_content"> ${originalComment} </textarea>
        <input type="submit" name="commit" value="更新" class="send-button"></input>
        <button class="cansell-button"> キャンセル </button>
      </div>`

    // 「更新」「キャンセル」ボタンを出現
    $(".comment-form").replaceWith(editCommentForm);
    $("#new_comment").attr("action", editCommentURL);
    $("#new_comment").attr("method", "patch");
    $("#new_comment").attr("id", "edit_comment");
  });

    // 更新を押したときの処理
  $(document).on("submit", "#edit_comment", function(e) {
    e.preventDefault();
    var formData = new FormData($(this).get(0));
    var commentId = $(".comment-form").attr("data-comment-id");
    var editCommentURL = window.location.href + "/comments/" + commentId

    $.ajax({
      url: editCommentURL,
      type: "PATCH",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data) {
      $(`[data-comment-id="${commentId}"]`).children(".comment-list__content").text(data.content)
      changeButton();
    })
    .fail(function() {
      alert("エラーだっちゃ");
    });

    // 「キャンセル」を押したときの処理
    $(document).on("click", ".cansell-button", function(e) {
      e.preventDefault();
      changeButton();
    });
  });
});

// -----コメント削除機能-----

// $(function() {
//   $(document).on("click", ".comment-list__delete", function(e) {
//     e.preventDefault();
//     var commentId = $(this).parent().attr("data-comment-id");
//     var deleteCommentURL = window.location.href + "/comments/" + commentId
//   })
// })





















