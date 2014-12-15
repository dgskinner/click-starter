FinalProject.Models.Project = Backbone.Model.extend({
	urlRoot: '/api/projects',
	
	rewards: function () {
		if (!this._rewards) { 
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
	    if (response.donaitons) {
	      this.rewards().set(response.donations, { parse: true });
	      delete response.donations;
	    }
		this.ownedByCurrentUser = response.is_owner;
		this.donationTotal = response.donation_total;
		return response;
	}
});
