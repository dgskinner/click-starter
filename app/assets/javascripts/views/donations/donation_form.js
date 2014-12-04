FinalProject.Views.DonationForm = Backbone.View.extend({
	initialize: function (options) {
		this.defaultAmount = options.amount;
	},
	
	template: JST['donations/form'],
	
	render: function () {
		var content = this.template({
			defaultAmount: this.defaultAmount
		});
		this.$el.html(content);
		return this;
	},
	
	events: {
		'submit form': 'submitDonation',
		'click button.cancel': 'cancelDonation'
	},

	submitDonation: function (event) {
		event.preventDefault();
		var amount = $(event.target).find('#amount').val();
		var projectId = this.model.id;
		var donation = new FinalProject.Models.Donation({
			amount: amount,
			project_id: projectId
		});
		debugger
		this.model.donations().create(donation);
		// donation.save();
		this.$el.remove();
	},

	cancelDonation: function (event) {
		event.preventDefault();
		this.$el.remove();
	}
});
