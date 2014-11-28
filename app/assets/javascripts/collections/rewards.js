FinalProject.Collections.Rewards = Backbone.Collection.extend({
	url: '/api/projects/:project_id/rewards',

	model: FinalProject.Models.Reward,
});