FinalProject.Collections.Donations = Backbone.Collection.extend({
	url: 'api/donations',
	
	model: FinalProject.Models.Donation,
	
	initialize: function (models, options) {
		this.project = options.project;
	}
});