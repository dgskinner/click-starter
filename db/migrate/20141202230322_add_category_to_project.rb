class AddCategoryToProject < ActiveRecord::Migration
  def change
    add_column :projects, :category, :string
  end
end
