class CourtsController < ApplicationController
  before_action :find_court

  def index
    courts = Court.all
    render json: courts
  end

  def create
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

  def destroy
    unless @court
      court_not_found
      return
    end

    @court.destroy
    render json: @court
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
end
