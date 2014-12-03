FinalProject.Views.ProjectsIndexItem = Backbone.View.extend({
	template: JST['projects/item'],
	
	initialize: function () {
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function () {
		var content = this.template({project: this.model});
		this.$el.html(content).addClass('project-item');
		window.moveProgressBar();
		return this;
	},
});

// SHOULD NOT HAVE TO DO THIS!
setTimeout(function(){ 
	window.moveProgressBar(); 
}, 1000);
