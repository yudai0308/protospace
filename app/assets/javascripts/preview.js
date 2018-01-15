// 参考サイト
// http://hennayagyu.com/webhack/javascript/file-api%E3%81%AE%E7%94%BB%E5%83%8F%E3%83%97%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC%E3%82%92%E3%81%A1%E3%82%83%E3%82%93%E3%81%A8%E7%90%86%E8%A7%A3%E3%81%99%E3%82%8B-2579

$(function() {
  $("#prototype_captured_images_attributes_0_content").change(function() {
    var selectedFile = this.files[0];
    var fileReader = new FileReader();

    if (!selectedFile.type.match('image.*')) {
        alert("画像ファイルを選択してください。");
        return true;
      };

    fileReader.onload = function(event) {
      var imageUri = event.target.result;
      $(".selected-img-0").replaceWith( '<img class="selected-img-0 img-preview" src="' + imageUri + '">' );
    };
    fileReader.readAsDataURL(selectedFile);
  });
});

// $(function() {
//   $("#prototype_captured_images_attributes_1_content").change(function() {
//     var selectedFile = this.files[0];
//     console.log(selectedFile);
//     var fileReader = new FileReader();
//     console.log(fileReader);
//     fileReader.onload = function(event) {
//       var imageUri = event.target.result;
//       $(".selected-img-1").replaceWith( '<img class="selected-img-1 img-preview-sub" src="' + imageUri + '">' );
//     };
//     fileReader.readAsDataURL(selectedFile);
//   });
// });

// $(function() {
//   $("#prototype_captured_images_attributes_2_content").change(function() {
//     var selectedFile = this.files[0];
//     var fileReader = new FileReader();
//     fileReader.onload = function(event) {
//       var imageUri = event.target.result;
//       $(".selected-img-2").replaceWith( '<img class="selected-img-2 img-preview-sub" src="' + imageUri + '">' );
//     };
//     fileReader.readAsDataURL(selectedFile);
//   });
// });

// $(function() {
//   $("#prototype_captured_images_attributes_3_content").change(function() {
//     var selectedFile = this.files[0];
//     var fileReader = new FileReader();
//     fileReader.onload = function(event) {
//       var imageUri = event.target.result;
//       $(".selected-img-3").replaceWith( '<img class="selected-img-3 img-preview-sub" src="' + imageUri + '">' );
//     };
//     fileReader.readAsDataURL(selectedFile);
//   });
// });

// ✔︎ 画像サイズを親要素内に収める
// ✔︎ 一度画像を選択したのち、別の画像もクリックできるようにする
//   画像以外のファイルを選択できないようにして、選択されたらエラーメッセージを表示させる
// サブサムネイルについてもプレビューを表示させる
// 画像データに容量や大きさの制限をかける（エラーメッセージ）
