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
	
	donations: function () {
		if (!this._donations) { 	// Why do we need this if statement?
			this.donations = new FinalProject.Collections.Donations([], {
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
		// why do we return this?
		return response;
	}
});
