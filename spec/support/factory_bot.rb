RSpec.configure do |config|
  config.include Rails.application.routes.url_helpers
end

RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods
end
