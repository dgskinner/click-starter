FinalProject.Routers.Router = Backbone.Router.extend({
	initialize: function () {
		this.$rootEl = $('#main');
		this.projects = new FinalProject.Collections.Projects();
	},
	
	routes: {
		'': 'home',
		'projects': 'projectsIndex',
		'projects/form': 'projectNew',
		'projects/:id': 'projectShow',
		'projects/:id/edit': 'projectEdit',
		'projects/categories/:cat': 'projectCat'
	},
	
	home: function () {
		var homeView = new FinalProject.Views.Home();
		// same idea as: this._swapView(homeView); 
		if (this._currentView) {
			this._currentView.remove();
		}
		this._currentView = homeView;
		(homeView.render().$el).insertBefore($('#footer'));
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
		var project = new FinalProject.Models.Project();
		var formView = new FinalProject.Views.ProjectForm({
			model: project,
			collection: this.projects
		});
		this._swapView(formView);
	},
	
	projectEdit: function (id) {
		var project = this.projects.getOrFetch(id);
		var editView = new FinalProject.Views.ProjectForm({
			model: project
		});
		this._swapView(editView);
	},
	
	projectCat: function (cat) {
		this.projects.fetch();
		var categoryView = new FinalProject.Views.ProjectsCategory({
			collection: this.projects,
			category: cat
		});
		this._swapView(categoryView);
	},
	
	_swapView: function (view, $el) {
		if (this._currentView) {
			this._currentView.remove();
		}
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}

});
