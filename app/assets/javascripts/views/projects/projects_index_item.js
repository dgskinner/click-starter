FinalProject.Views.ProjectsIndexItem = Backbone.View.extend({
	template: JST['projects/item'],
	
	initialize: function () {
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function () {
		var content = this.template({
			project: this.model,
			daysLeft: this.daysLeft()
		});
		this.$el.html(content).addClass('project-item');
		window.moveProgressBar();
		return this;
	},
	
	daysLeft: function () {
		today = new Date().toJSON().slice(0, 10);
		deadline = this.model.get('deadline');
		milliSec = new Date(deadline) - new Date(today);
		return milliSec / 86400000;
	},
});

// SHOULD NOT HAVE TO DO THIS!
setTimeout(function(){ 
	window.moveProgressBar(); 
}, 1000);
