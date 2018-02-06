class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.integer :deck_id, null: false
      t.text :front, null: false
      t.text :back, null: false

      t.timestamps
    end
    add_index :cards, :deck_id
  end
end
