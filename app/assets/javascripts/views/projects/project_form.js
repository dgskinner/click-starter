FinalProject.Views.ProjectForm = Backbone.View.extend({
	template: JST['projects/new'],
	
	render: function () {
		var content = this.template({project: this.model});
		this.$el.html(content);
		return this;
	},
});