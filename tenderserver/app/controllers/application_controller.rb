class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/tender" do
    t= Tender.all
    t.to_json(include: {
      companies: { only: [:name, :email]
      } 
    })
  end

  post '/company' do
    co = Company.create(
      name: params[:name],
      email: params[:email],
      tender_id: params[:tender_id],
      
    )
    co.to_json
  end
    
  post '/tenders' do
    t= Tender.create(
      name: params[:name],
      serial: params[:serial],
      description: params[:description],
      cost: params[:cost]
    )
    t.to_json
  end
  # Setting up delete API
  delete '/tenders/:id' do
    t = Tender.find(params[:id])
    t.destroy
    t.to_json
  end
  patch '/tender/:id' do
    t= Tender.find(params[:id]);
    t.update(
      name: params[:name]
      # serial: params[:serial],
      # description: params[:description],
      # cost: params[:cost]
    )
    t.destroy
    t.to_json
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
