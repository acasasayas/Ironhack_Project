class ReservationsController < ApplicationController
  def user_reservations
    @reservations = Reservation.where(user_id: 1).includes(:user, :court)

    if @reservations.empty?
      @reservations = "No tienes ninguna reserva aún"
    end
    render json: @reservations

  end

  def create
    reservation = Reservation.new(safe_params)
    if reservation.save
      render json: reservation.court.club
    end
  end

  private

  def safe_params
    params.require(:reservation).permit(:court_id, :user_id, :time_start, :time_end)
  end
end
