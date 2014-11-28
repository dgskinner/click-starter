FinalProject.Models.Project = Backbone.Model.extend({
	urlRoot: '/api/projects',
	
	rewards: function (rewardsArray) {
		// if (!this._rewards) {
			this._rewards = new FinalProject.Collections.Rewards(rewardsArray, {
				project: this
			});
		// }
		debugger
		return this._rewards;
	},
});
