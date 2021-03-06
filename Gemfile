source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

Bundler::Source::Git::GitProxy.prepend(Module.new do
  def git(command, *args)
    if command.start_with?('clone')
      super(command.sub('--no-hardlinks', '') + ' --depth=1', *args)
    elsif command.start_with?('fetch')
      super(command + ' --depth=1', *args)
    else
      super
    end
  end
end)

ruby '2.7.1'

gem 'rails', github: 'rails/rails', branch: 'master'
gem 'puma'
gem 'webpacker', github: 'rails/webpacker'
gem 'bootsnap'
gem 'pry', github: 'pry/pry' # https://github.com/pry/pry/pull/2110
gem 'pry-byebug', github: 'deivid-rodriguez/pry-byebug'
gem 'pry-rails'
gem 'graphql'
gem 'redis'
gem 'jwt'
gem 'google-cloud-firestore', require: 'google/cloud/firestore'
gem 'google-protobuf', '3.12.0.rc.1'
gem 'google-api-client', require: 'google/apis/identitytoolkit_v3'
gem 'googleauth'

group :development do
  gem 'web-console', github: 'rails/web-console'
  gem 'rack-mini-profiler'
  gem 'listen'
  gem 'spring'
end

group :test do
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end
gem 'graphql-batch'
