class CourtsController < ApplicationController
  before_action :find_court

  def index
    courts = Court.all
    render json: courts
  end

  def create
    @club = Club.all
    debugger
    court = Court.create(court_params)
    render json: court
  end

  def show
    unless @court
      court_not_found
      return
    end

    render json: @court
  end

  def update
    unless @court
      court_not_found
      return
    end

    @court.update(court_params)
    render json: @court
  end

  def show_all
    render
  end

  def destroy
    unless @court
      court_not_found
      return
    end

    @court.destroy
    render json: @court
  end

  def reservation
    #
    @new_reservation = Reservation.new()
    @reservations = Reservation.all
  end

  def create_reservation
    @pista1 = Court.find(1)
    user = User.find(params[:reservation][:user_id])

    find_open_club(params[:reservation][:time_start],params[:reservation][:time_end])
    debugger
    # @pista1.reservations << params[:reservation][:user]
    # Reservation.create({court: @pista1, user: user, time_start: params[:reservation][:time_start],time_end: params[:reservation][:time_start] + 1.hour })


  end

  private

  def court_params
    params.permit(:name, :ubication)
  end



  def find_court
    @court = Court.find_by(id: params[:id])
  end

  def court_not_found
    render json: {error: "court not found"}, status: 404
  end

  def safe_params(params)
    params.permit(:time_start, :time_end)
  end

end
