class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.integer :min_pledge, null: false
      t.text :description, null: false
      t.timestamps
    end
  end
end
