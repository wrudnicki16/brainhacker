require_relative 'boot'

require 'rails/all'
require 'logger'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module BrainHacker
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.logger = Logger.new($stdout) # Sends logs to the terminal
    config.logger.level = Logger::DEBUG # Adjust the log level as needed (DEBUG, INFO, WARN, ERROR)
    config.active_support.logger = config.logger
  end
end
