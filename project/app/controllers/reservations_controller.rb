class ReservationsController < ApplicationController
  def user_reservations
    @reservations = Reservation.where(user_id: 1).includes(:user, :court)

    if @reservations.empty?
      @reservations = "No tienes ninguna reserva aún"
    end
    render json: @reservations

  end

  def create
    reservation = Reservation.new(user_id: current_user.id,court_id: params[:court_id],time_start: params[:time_start].to_datetime, time_end: (params[:time_start].to_datetime + 1.hour))
    if reservation.save
      render json: reservation.court.club
    end
  end

end
