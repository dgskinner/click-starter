FinalProject.Models.Project = Backbone.Model.extend({
	urlRoot: '/api/projects',
	
	rewards: function () {
		if (!this._rewards) { 	// Why do we need this if statement?
			this._rewards = new FinalProject.Collections.Rewards([], {
				project: this
			});
		}
		return this._rewards;
	},
	
	parse: function (response) {
	    if (response.rewards) {
	      this.rewards().set(response.rewards, { parse: true });
	      delete response.rewards;
	    }
		this.ownedByCurrentUser = response.is_owner;
		
		// why do we return this?
		return response;
	}
});
