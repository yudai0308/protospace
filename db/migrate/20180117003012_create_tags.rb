class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :name, index: true
      t.references :prototype, foreign_key: true
      t.timestamps
    end
  end
end
