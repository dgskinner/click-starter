FinalProject.Views.RewardForm = Backbone.View.extend({
	template: JST['rewards/form'],
	
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},
	
	events: {
		'submit form': 'submitReward',
		'click button.cancel': 'cancelReward'
	},

	submitReward: function (event) {
		event.preventDefault();
	    var attrs = $(event.target).serializeJSON();
		var projectId = this.model.id;
		var reward = new FinalProject.Models.Reward(attrs);
		reward.set({project_id: projectId});
		reward.save();
		this.$el.remove();
		// want to re-render the show page to see updated rewards list
		// couldn't make this work using Backbone.history.navigate
	},

	cancelReward: function () {
		this.$el.remove();
	}
});