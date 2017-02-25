class AddScheduleToCourts < ActiveRecord::Migration[5.0]
  def change
    add_column :courts, :schedule, :text
  end
end
