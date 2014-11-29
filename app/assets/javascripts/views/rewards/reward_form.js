FinalProject.Views.RewardForm = Backbone.View.extend({
	template: JST['rewards/form'],
	
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},
});