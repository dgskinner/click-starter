FinalProject.Views.Layout = Backbone.View.extend({
    initialize: function () {
    	this.$header = $('#header');
		this.$main = $('#main');
    },
	
	events: {
		'click #start': 'newProject'
	},
	
	newProject: function () {
		alert("CREATE NEW PROJECT");
		var project = new FinalProject.Models.Project();
		var formView = new FinalProject.Views.ProjectForm({
			model: project
			
		});
	},
});