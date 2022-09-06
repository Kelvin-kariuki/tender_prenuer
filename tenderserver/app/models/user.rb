class User < ActiveRecord::Base
    has_many :applies
    has_many :tenders, through: :applies
end