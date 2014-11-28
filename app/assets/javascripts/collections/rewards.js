FinalProject.Collections.Rewards = Backbone.Collection.extend({
	url: '/api/rewards',

	model: FinalProject.Models.Reward,
	
	initialize: function (models, options) {
		this.project = options.project;
	}
});