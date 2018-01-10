//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .

// $(function() {
//   $("form").on("change", "input[type='file']", function() {
//     var value = this.value;
//     console.log(value);
//   });
// });

$("form").on("change", "input[type='file']", function(){
  if (this.files.length > 0) {
    // 選択されたファイル情報を取得
    var file = this.files[0];

    // readerのresultプロパティに、データURLとしてエンコードされたファイルデータを格納
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function() {
      $('#main_image_uploader').attr('src', reader.result );
    }
  }
});
