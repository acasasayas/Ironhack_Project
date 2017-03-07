class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def index
    render 'index'
  end

  def search
    
    @clubs = Club.all
    render 'search'
  end


end
