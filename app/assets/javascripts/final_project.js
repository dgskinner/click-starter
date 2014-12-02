window.FinalProject = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		new FinalProject.Routers.Router;
		Backbone.history.start();
	}
};

// $(document).ready(function(){
// 	FinalProject.initialize();
// });
