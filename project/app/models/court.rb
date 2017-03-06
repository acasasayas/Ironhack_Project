class Court < ApplicationRecord
  belongs_to :club
  has_many :users, through: :reservations
  has_many :reservations

  def create_reservation(safe_params)
    self.reservations.create!(safe_params)
  end
end
