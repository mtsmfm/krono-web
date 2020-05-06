Rails.application.routes.draw do
  root to: "root#show"
  post "/graphql", to: "graphql#execute"
  get "/graphql-playground", to: "root#show"
end
