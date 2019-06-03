Rails.application.routes.draw do
  get 'search/home'
  root 'search#home'
end
