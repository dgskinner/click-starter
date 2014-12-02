FinalProject.Models.Project = Backbone.Model.extend({
	urlRoot: '/api/projects',
	
	rewards: function (rewardsArray) {
		// if (!this._rewards) { 	WILL NOT WORK WITH IF STATEMENT
			this._rewards = new FinalProject.Collections.Rewards(rewardsArray, {
				project: this
			});
		// }
		return this._rewards;
	},
	
	is_owner: function () {
		// if (this.user_id)
	}
});
