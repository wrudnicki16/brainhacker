class CreateDecks < ActiveRecord::Migration[5.1]
  def change
    create_table :decks do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false

      t.timestamps
    end
    add_index :decks, :creator_id, unique: true
  end
end
