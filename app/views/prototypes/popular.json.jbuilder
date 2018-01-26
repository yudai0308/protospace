json.array! @prototypes do |prototype|
  json.id                 prototype.id
  json.image              prototype.set_main_thumbnail
  json.user_name          prototype.user.name
  json.user_id            prototype.user.id
  json.posted_date        prototype.posted_date
  json.title              prototype.title
  json.prototype_path     prototype_path(prototype.id)
  json.user_path          user_path(prototype.user.id)
  json.tags               prototype.tags
end
