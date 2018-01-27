$(function() {
  $("textarea").change( function() {
    var txtVal = $(this).val();
    txtVal = txtVal.replace(/\r\n/g, "&lt;br /&gt;<br />");
    txtVal = txtVal.replace(/(\n|\r)/g, "&lt;br /&gt;<br />");
    $('#testpre').html('<p>'+ txtVal +'</p>');
  });
});
