FinalProject.Collections.Rewards = Backbone.Collection.extend({
	url: '/api/rewards',

	model: FinalProject.Models.Reward,
	
    comparator: function(reward) {
      return reward.get('min_pledge');
    },
	
	initialize: function (models, options) {
		this.project = options.project;
	}
});