class ReservationsController < ApplicationController
  def user_reservations
    @reservations = Reservation.where(user_id: 1).includes(:user, :court)

    if @reservations.empty?
      @reservations = "No tienes ninguna reserva aún"
    end
    render json: @reservations

  end
end
