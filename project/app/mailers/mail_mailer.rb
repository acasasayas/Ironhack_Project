class MailMailer < ApplicationMailer
  default from: "ironhack.project@gmail.com"


  def send_email(current_user)
    @current_user = current_user
    mail(to: @current_user.email, subject: "Reserva de pista en Mr.Court!")
  end
end
