class Court < ApplicationRecord
  belongs_to :club
  has_many :users, through: :reservations
  has_many :reservations
end
