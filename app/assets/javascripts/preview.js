// 参考サイト
// http://hennayagyu.com/webhack/javascript/file-api%E3%81%AE%E7%94%BB%E5%83%8F%E3%83%97%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E3%82%92%E3%81%A1%E3%82%83%E3%82%93%E3%81%A8%E7%90%86%E8%A7%A3%E3%81%99%E3%82%8B-2579

$(function() {
  $("form").on("change", "input[type='file']", function() {
    var selectedFile = this.files[0];
    // console.log(selectedFile);
    var fileReader = new FileReader();
    fileReader.onload = function(event) {
      var imageUri = event.target.result;
      $("#main_image_uploader").html( '<img class="selected-img" src="' + imageUri + '">' );
    };
    fileReader.readAsDataURL(selectedFile);
  });
});

// ✔︎ 画像サイズを親要素内に収める
//   一度画像を選択したのち、別の画像もクリックできるようにする
//   画像以外のファイルを選択できないようにして、選択されたらエラーメッセージを表示させる

// ファイルが選択された時にアラートが出現
// $(function() {
//   $("form").on("change", "input[type='file']", function() {
//     alert("hello");
// })});