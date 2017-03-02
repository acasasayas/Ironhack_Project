class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  def index
    render 'index'
  end
  def search
    render 'search'
  end
end
