$(function() {

  // コメント新規投稿機能
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

  // コメント編集機能
$(function() {
  // 「編集」を押したときの処理
  $(document).on("click", ".comment-list__modify", function() {
    // 変数の定義
    var originalComment = $(this).siblings(".comment-list__content").text();
    var commentId = $(this).parent().attr("data-comment-id");
    var editCommentURL = window.location.href + "/comments/" + commentId
    var createCommentURL = window.location.href + "/comments"
    // console.log(originalComment);
    // console.log(commentId);
    // console.log(editCommentURL);
    // console.log(createCommentURL);
    var editCommentForm =
     `<div class="comment-form">
        <textarea class="input-comment" placeholder="type a comment" name="comment[content]" id="comment_content"> ${originalComment} </textarea>
        <input type="submit" name="commit" value="更新" class="send-button"></input>
        <button class="cansell-button"> キャンセル </button>
      </div>`
    var newCommentForm =
     `<div class="comment-form">
        <textarea class="input-comment" placeholder="type a comment" name="comment[content]" id="comment_content"></textarea>
        <input type="submit" name="commit" value="送信" class="send-button"></input>
      </div>`
    function changeButton() {
      $(".comment-form").replaceWith(newCommentForm);
      $("#edit_comment").attr("action", createCommentURL);
      $("#edit_comment").attr("method", "post")
      $("#edit_comment").attr("id", "new_comment")
    };

    // 「更新」「キャンセル」ボタンを出現
    $(".comment-form").replaceWith(editCommentForm);
    $("#new_comment").attr("action", editCommentURL);
    $("#new_comment").attr("method", "patch")
    $("#new_comment").attr("id", "edit_comment");
    // 更新を押したときの処理
    $(document).on("submit", "#new_comment", function(e) {
      e.preventDefault();
      var formData = new FormData($(this).get(0));
      console.log(formData);

      $.ajax({
        url: editCommentURL,
        type: "PATCH",
        data: formData,
        dataType: "json",
        processData: false,
        contentType: false
      })
      .done(function(data) {
        $(this).children("comment-list__content").text(data.text)
        changeButton;
      })
      .fail(function() {
        alert("コメントを入力してください");
      });
    })

    // 「キャンセル」を押したときの処理
    $(document).on("click", ".cansell-button", function(e) {
      e.preventDefault();
      changeButton();
    })
  });
});

























