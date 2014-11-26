FinalProject.Routers.Router = Backbone.Router.extend({
	initialize: function () {
		this.$rootEl = $('#main');
		this.projects = new FinalProject.Collections.Projects();
		// new FinalProject.Views.Layout();
	},
	
	routes: {
		'': 'projectsIndex',
		'projects/new': 'projectNew',
		'projects/:id': 'projectShow',
	},
	
	projectsIndex: function () {
		this.projects.fetch();
		var indexView = new FinalProject.Views.ProjectsIndex({
			collection: this.projects
		});
		this._swapView(indexView);
	},
	
	projectShow: function (id) {
		var project = this.projects.getOrFetch(id);
		var showView = new FinalProject.Views.ProjectShow({
			model: project
		});
		this._swapView(showView);
	},
	
	projectNew: function () {
		debugger
		var project = new FinalProject.Models.Project();
		var formView = new FinalProject.Views.ProjectForm({
			model: project
		});
		this._swapView(formView);
	},
	
	_swapView: function (view) {
		if (this._currentView) {
			this._currentView.remove();
		}
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}

});
