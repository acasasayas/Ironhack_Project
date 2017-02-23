class AddCourtToClubs < ActiveRecord::Migration[5.0]
  def change
    add_reference :clubs, :court, foreign_key: true
  end
end
