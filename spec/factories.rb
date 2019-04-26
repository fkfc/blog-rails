FactoryBot.define do
  factory :user do
    
  end
  factory :post do
    sequence(:title) { |n| "Title#{n}" }
    sequence(:content) { |n| "Content#{n}" }
  end
end
