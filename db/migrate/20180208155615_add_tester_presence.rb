class AddTesterPresence < ActiveRecord::Migration[5.1]
  def change
    remove_index :confs, :tester_id
    remove_column :confs, :tester_id
    add_column :confs, :tester_id, :integer, null: false
    add_index :confs, :tester_id
  end
end
