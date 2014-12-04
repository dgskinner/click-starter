FinalProject.Views.ProjectsCategory = Backbone.View.extend({
	template: JST['projects/category'],

	initialize: function (options) {
		this.category = options.category;
		this.listenTo(this.collection,
			'add change:title change:description remove reset', this.render);
	},

	render: function () {
		var content = this.template({category: this.category});
		this.$el.html(content);
		
		var projectsInCategory = this.collection.where({category: this.category})
		var that = this;
		projectsInCategory.forEach(function (project) {
			var itemView = new FinalProject.Views.ProjectsIndexItem({
				model: project
			});
			that.$el.append(itemView.render().$el);
		});
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