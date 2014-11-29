FinalProject.Views.AddRewardButton = Backbone.View.extend({
	template: JST['rewards/add_button'],
	
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},
});