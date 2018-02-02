class RemoveUniqueCreator < ActiveRecord::Migration[5.1]
  def change
    remove_index :decks, :creator_id
    add_index :decks, :creator_id
  end
end
