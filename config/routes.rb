Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  root to: 'root#show'
end
