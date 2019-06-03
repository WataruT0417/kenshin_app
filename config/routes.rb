Rails.application.routes.draw do
  get 'result/home'
  get 'result', to: 'result#home'

  get 'add/home'
  get 'add', to: 'add#home' 
  
  get 'search/home'
  get 'search', to: 'search#home' 
  
  root 'search#home'
end
