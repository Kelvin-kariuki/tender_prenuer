class CreateTender < ActiveRecord::Migration[6.1]
  def change
    create_table :tenders do |t|
      t.string :name
      t.string :serial
      t.string :description
      t.integer :cost
    end
    end
  end
