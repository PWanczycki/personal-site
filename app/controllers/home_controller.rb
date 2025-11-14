class HomeController < ApplicationController
  def index
    render inertia: "Home/Home", props: {name: params[:name]}
  end
end
