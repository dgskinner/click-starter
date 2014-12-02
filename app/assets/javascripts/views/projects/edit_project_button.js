FinalProject.Views.EditProjectLink = Backbone.View.extend({
	template: JST['projects/edit_link'],
	
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},
});