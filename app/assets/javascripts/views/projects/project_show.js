FinalProject.Views.ProjectShow = Backbone.View.extend({
	template: JST['projects/show'],
	
	initialize: function () {
		this.listenTo(this.model, 'sync', this.render);
	},
	
	render: function () {
		var content = this.template({project: this.model});
		this.$el.html(content);
		return this;
	},
	
	events: {
		'click button#donate': 'showDonationForm'
	},
	
	showDonationForm: function () {
		var donateForm = new FinalProject.Views.DonationForm();
		this.$el.append(donateForm.render().$el);
	}
});
