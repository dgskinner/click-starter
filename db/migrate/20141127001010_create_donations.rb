class CreateDonations < ActiveRecord::Migration
  def change
    create_table :donations do |t|
      t.integer :amount, null: false
      t.integer :user_id, null: false
      t.integer :project_id, null: false
      t.timestamps
    end
  end
end
