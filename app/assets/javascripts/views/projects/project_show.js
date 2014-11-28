FinalProject.Views.ProjectShow = Backbone.View.extend({
	template: JST['projects/show'],
	
	initialize: function () {
		this.listenTo(this.model, 'sync', this.render);
	},
	
	render: function () {
		var content = this.template({
			project: this.model,
			daysLeft: this.daysLeft()
		});
		this.$el.html(content);
		return this;
	},
	
	events: {
		'click button#donate': 'showDonationForm'
	},
	
	showDonationForm: function () {
		if (this.$el.find('#donation-form').length === 0) {
			var donateForm = new FinalProject.Views.DonationForm({
				model: this.model
			});
			this.$el.append(donateForm.render().$el);
		}
	},
	
	daysLeft: function () {
		today = new Date().toJSON().slice(0, 10);
		deadline = this.model.get('deadline');
		milliSec = new Date(deadline) - new Date(today);
		return milliSec / 86400000;
	}
});
