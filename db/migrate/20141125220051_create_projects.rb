class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :goal, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
