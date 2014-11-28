FinalProject.Views.RewardsIndex = Backbone.View.extend({
	template: JST['rewards/index'],
	
	render: function () {
		debugger
		var content = this.template();
		this.$el.html(content);
		return this;
	},
});