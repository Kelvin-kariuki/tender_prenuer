class Apply < ActiveRecord::Base
    belongs_to :tender
    belongs_to :user
end