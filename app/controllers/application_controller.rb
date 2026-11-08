class ApplicationController < ActionController::Base
  include Authentication
  before_action :resume_session

  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  # Changes to the importmap will invalidate the etag for HTML responses
  stale_when_importmap_changes

  inertia_share auth: -> {
    user = Current.user
    { user: user && { id: user.id, emailAddress: user.email_address, admin: user.admin? } }
  }
  # inertia_share flash: -> { flash.to_hash }

  private

    def require_admin
      redirect_to root_path, alert: "Not authorized." unless Current.user&.admin?
    end
end
