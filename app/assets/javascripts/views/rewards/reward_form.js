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
		Backbone.history.navigate('#/projects/' + projectId, { trigger: true });
	},

	cancelReward: function () {
		this.$el.remove();
	}
});