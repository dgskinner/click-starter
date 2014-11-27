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
		// PASS IN PROJECT! 
		
		event.preventDefault();
		debugger
		var amount = $(event.target).find('#amount').val();
		var projectId = this.model.id;
		var donation = new FinalProject.Models.Donation({
			amount: amount,
			project_id: String(projectId)
		});
		console.log(String(projectId));
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
		
		donation.save({}, {
			success: function () {
				console.log('SUCCESS');
			},
			error: function () {
				// console.log('DONATION: ' + donation);
				console.log('PROJECT_ID: ' + projectId);
				debugger
			}
		});

	},

	cancelDonation: function () {

	}
});
