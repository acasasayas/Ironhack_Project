class PasswordsController < Devise::PasswordsController
  protected
  def after_sending_reset_password_instructions_path_for(resource_name)
    # redirect_to :controller => 'site', :action => 'index'
    '/'
  end
end
