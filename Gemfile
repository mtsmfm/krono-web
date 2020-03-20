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

ruby '2.7.0'

gem 'rails', github: 'rails/rails', branch: 'master'
gem 'sqlite3'
gem 'puma'
gem 'webpacker', github: 'rails/webpacker'
gem 'bootsnap'

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
