class ReservationsController < ApplicationController

  def user_reservations

    if current_user
      reservations = Reservation.where(user_id: current_user.id).includes(:court)
      if reservations.empty?
        reservations = "No tienes ninguna reserva aún"
      end
    else
      reservations = "No user Logged In"
    end
    render json: reservations

  end

  def create
    debugger
    reservation = Reservation.new(user_id: current_user.id,court_id: params[:court_id],time_start: params[:time_start].to_datetime, time_end: (params[:time_start].to_datetime + 1.hour))
    if reservation.save
      render json: {club: reservation.court.club}
    else
      render json: {error: "No funciona"}
    end
  end

end
