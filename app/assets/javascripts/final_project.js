window.ClickStarter = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		new ClickStarter.Routers.Router;
		Backbone.history.start();
	}
};

$(document).ready(function(){
	ClickStarter.initialize();
});
