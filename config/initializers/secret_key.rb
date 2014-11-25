secret = Rails.env.production? ? ENV['SECRET_KEY_BASE'] : "top_secret_token"
FinalProject::Application.config.secret_key_base = secret