class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :clubs, :ubication, :full_street_address
  end
end
