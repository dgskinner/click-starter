FinalProject.Routers.Router = Backbone.Router.extend({
	initialize: function () {
		this.$rootEl = $('#main');
		this.projects = new FinalProject.Collections.Projects();
		// this.rewards = new FinalProject.Collections.Rewards();
	},
	
	routes: {
		'': 'home',
		'projects': 'projectsIndex',
		'projects/new': 'projectNew',
		'projects/:id': 'projectShow',
	},
	
	home: function () {
		debugger
		var homeView = new FinalProject.Views.Home();
		// this._swapView(homeView);
		if (this._currentView) {
			this._currentView.remove();
		}
		this._currentView = homeView;
		$('body').append(homeView.render().$el);
	},
	
	projectsIndex: function () {
		this.projects.fetch();
		var indexView = new FinalProject.Views.ProjectsIndex({
			collection: this.projects
		});
		this._swapView(indexView);
	},
	
	projectShow: function (id) {
		// this.rewards.fetch();
		var project = this.projects.getOrFetch(id);
		var showView = new FinalProject.Views.ProjectShow({
			model: project,
			// collection: this.rewards.where({project_id: id})
		});
		this._swapView(showView);
	},
	
	projectNew: function () {
		var project = new FinalProject.Models.Project();
		var formView = new FinalProject.Views.ProjectForm({
			model: project,
			collection: this.projects
		});
		this._swapView(formView);
	},
	
	_swapView: function (view, $el) {
		if (this._currentView) {
			this._currentView.remove();
		}
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}

});
