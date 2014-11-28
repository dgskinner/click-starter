FinalProject.Views.DonationForm = Backbone.View.extend({
	template: JST['donations/form'],
	
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},
	
	events: {
		'submit form': 'submitDonation',
		'click button#cancel': 'cancelDonation'
	},

	submitDonation: function (event) {
		event.preventDefault();
		var amount = $(event.target).find('#amount').val();
		var projectId = this.model.id;
		var donation = new FinalProject.Models.Donation({
			amount: amount,
			project_id: projectId
		});
		donation.save();
		
		// var attrs = $(event.target).serializeJSON();
		// var donation = new FinalProject.Models.Donation(attrs);
		// var donations = new FinalProject.Collections.Donations();
		// donations.fetch();
		// donations.create(donation, {
		// 	success: function () {
		// 		console.log('SUCCESS');
		// 	},
		// 	error: function () {
		// 		console.log('DONATIONS COLLECTION: ' + donations.length);
		// 		console.log('PROJECT_ID: ' + projectId);
		// 		debugger
		// 	}
		// });
	},

	cancelDonation: function () {
		this.$el.remove();
	}
});
