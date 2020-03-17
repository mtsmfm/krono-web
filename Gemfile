source "https://rubygems.org"
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

gem 'rails', github: 'rails/rails'
