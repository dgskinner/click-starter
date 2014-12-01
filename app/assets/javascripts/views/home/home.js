FinalProject.Views.Home = Backbone.View.extend({
	template: JST['home/home'],
	
	render: function () {
		debugger
		var content = this.template();
		this.$el.html(content);
		return this;
	},
});
