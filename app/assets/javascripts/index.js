$(function(){
  var search_list = $('#proto-list');
  function appendProduct(prototype){

    var html = `<div class='col-sm-4 col-md-3 proto-content'>
                  <div class='thumbnail'>
                    <a href= ${ prototype.prototype_path })>
                      <img src="${ prototype.image.url }">
                    </a>
                    <div class="caption">
                      <h3>${ prototype.title }</h3>
                      <div class="proto-meta">
                        <div class="proto-user">
                          <a href= user_path(${ prototype.user_id })>
                            ${ prototype.user_name }
                          </a>
                        </div>
                        <div class='proto-posted'>
                          ${ prototype.posted_date }
                        </div>
                      </div>
                      <ul class='proto-tag-list list-inline', id='tag${prototype.id}'>
                      </ul>
                    </div>
                  </div>
                </div>`
    search_list.append(html);

    var tags_list= $(`#tag${prototype.id}`);
    var id = `#tag${prototype.id}`
    if (prototype.tags.length !== 0){
      prototype.tags.forEach(function(tag){
        var tag_list = `<li><a href= "/tags/${tag.id}", class="btn btn-default">${tag.name}</a></li>`;
        tags_list.append(tag_list);
      });
    }
  }

  $('#popular_index').on('click',function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(prototypes){
      $("#proto-list").empty();
      prototypes.forEach(function(prototype){
        appendProduct(prototype);
      });
    })

    .fail(function() {
      alert('失敗しました');
    });
  });

  $('#newest_index').on('click',function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(prototypes){
      $("#proto-list").empty();
      prototypes.forEach(function(prototype){
        appendProduct(prototype);
      });
    })

    .fail(function() {
      alert('失敗しました');
    });
  });
});
