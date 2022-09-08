class CreateCompany < ActiveRecord::Migration[6.1]
  def change
  create_table :companies do |t|
    t.string :name
    t.string :email
    t.integer :tender_id
  end
  end
end
