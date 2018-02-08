class CreateConfs < ActiveRecord::Migration[5.1]
  def change
    create_table :confs do |t|
      t.integer :user_id, null: false
      t.integer :card_id, null: false
      t.integer :score, null: false
      t.timestamps
    end
    add_index :confs, :user_id
    add_index :confs, :card_id
  end
end
