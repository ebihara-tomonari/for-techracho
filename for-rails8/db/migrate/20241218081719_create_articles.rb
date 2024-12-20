class CreateArticles < ActiveRecord::Migration[8.0]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.text :body, null: false, default: ""
      t.integer :status, null: false, default: 0
      t.jsonb :custom_fields, null: false, default: {}

      t.timestamps
    end
  end
end
