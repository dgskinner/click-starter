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
		var that = this;
		$('.spinner').removeClass('hidden');
		window.setTimeout( function () {
			donation.save();
			$('.spinner').addClass('hidden');
			$('#thank-you').removeClass('hidden');
		}, 2000);
		window.setTimeout( function () {
			that.$el.remove();
			Backbone.history.navigate('#/projects/' + projectId, { trigger: true });
		}, 3000);
	},

	cancelDonation: function (event) {
		event.preventDefault();
		this.$el.remove();
	}
});
