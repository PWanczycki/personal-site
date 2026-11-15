class HomeController < ApplicationController
  allow_unauthenticated_access

  def index
    render inertia: "Home/Home", props: { name: params[:name] }
  end
end
