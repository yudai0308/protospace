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

$(function() {
  $("#prototype_captured_images_attributes_1_content").change(function() {
    var selectedFile = this.files[0];
    console.log(selectedFile);
    var fileReader = new FileReader();
    console.log(fileReader);
    fileReader.onload = function(event) {
      var imageUri = event.target.result;
      $(".selected-img-1").replaceWith( '<img class="selected-img-1 img-preview-sub" src="' + imageUri + '">' );
    };
    fileReader.readAsDataURL(selectedFile);
  });
});

$(function() {
  $("#prototype_captured_images_attributes_2_content").change(function() {
    var selectedFile = this.files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(event) {
      var imageUri = event.target.result;
      $(".selected-img-2").replaceWith( '<img class="selected-img-2 img-preview-sub" src="' + imageUri + '">' );
    };
    fileReader.readAsDataURL(selectedFile);
  });
});

$(function() {
  $("#prototype_captured_images_attributes_3_content").change(function() {
    var selectedFile = this.files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(event) {
      var imageUri = event.target.result;
      $(".selected-img-3").replaceWith( '<img class="selected-img-3 img-preview-sub" src="' + imageUri + '">' );
    };
    fileReader.readAsDataURL(selectedFile);
  });
});
