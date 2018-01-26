$(function(){
  // $('#like-button__delete').on('click',function(e){
  $(document).on("click", "#like-button__delete", function(e){
    e.preventDefault();
    // console.log(this)
    var url = $(this).attr('data');
    console.log(this);
    $.ajax({
      type: 'DELETE',
      url: url,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data)
      $('#like_count').text(data.likes_count)
      $('#like-button__delete').attr('id', "like-button__add")
      $('#like-button__add').attr("data", data.path)
      $('#heart_image').attr("src", "/assets/icon_heart.png")
    })
    .fail(function() {
      alert('失敗しました');
    });
  });
$(document).on("click", "#like-button__add", function(e){
  // $('#like-button__add').on('click',function(e){
    e.preventDefault();
    var url = $(this).attr('data');

    $.ajax({
      type: 'POST',
      url: url,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data)
      $('#like_count').text(data.likes_count)
      $('#like-button__add').attr('id', "like-button__delete")
      $('#like-button__delete').attr("data", data.path)
      $('#heart_image').attr("src", "/assets/icon_red_heart.png")
    })
    .fail(function() {
      alert('失敗しました');
    });
  });
});
