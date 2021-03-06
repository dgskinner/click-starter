FinalProject.Collections.Projects = Backbone.Collection.extend({
	url: '/api/projects',

	model: FinalProject.Models.Project,
	
	getOrFetch: function (id) {
		var project = this.get(id);
		var projects = this;
		if (project) {
			project.fetch();
		} else {
			project = new FinalProject.Models.Project({id: id});
			project.fetch({
				success: function () {
					projects.add(project);
				}
			});
		}
		return project;
	}
});
