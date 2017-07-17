Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function(){
  this.render('home')
  this.layout('layout')
});
