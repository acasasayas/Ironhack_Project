class CreateReservations < ActiveRecord::Migration[5.0]
  def change
    create_table :reservations do |t|
      t.references :user, foreign_key: true
      t.references :court, foreign_key: true
      t.datetime :time_start
      t.datetime :time_end

      t.timestamps
    end
  end
end
