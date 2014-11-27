FinalProject.Views.DonationForm = Backbone.View.extend({
	template: JST['donations/form'],
	
	render: function () {
		debugger
		var content = this.template();
		this.$el.html(content);
		return this;
	},
});