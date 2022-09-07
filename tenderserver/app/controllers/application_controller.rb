class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/tender" do
    t= Tender.all
    t.to_json(include: {
      users: { only: [:name, :email]
      } 
    })
  end

  # get "/user" do
  #   t= User.all
  #   t.to_json
  # end
  # get "/apply" do
  #   t= Apply.all
  #   t.to_json
  # end



end
