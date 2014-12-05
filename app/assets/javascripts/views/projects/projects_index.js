FinalProject.Views.ProjectsIndex = Backbone.View.extend({
	template: JST['projects/index'],
	
	initialize: function () {
		this.listenTo(this.collection,
			'add sync', this.render);
	},
	
	render: function () {
		var content = this.template();
		this.$el.html(content);
		var that = this;
		// first 7 are the staff picks
		this.collection.first(7).forEach(function (project) {
			var itemView = new FinalProject.Views.ProjectsIndexItem({
				model: project
			});
			that.$el.append(itemView.render().$el);
		});
		window.moveProgressBar();
		return this;
	},
	
	events: {
		'click .project-item': 'showProject' 
	},
	
	showProject: function (event) {
		var projectId = $(event.currentTarget).data('project-id');
		Backbone.history.navigate('#/projects/' + projectId);
	}
});


