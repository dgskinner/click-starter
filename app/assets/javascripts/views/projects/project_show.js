FinalProject.Views.ProjectShow = Backbone.View.extend({
	template: JST['projects/show'],
	
	initialize: function () {		
		this.rewards = this.model.rewards();
		this.$rewardsIndex = this.$el.find('#rewards-index');
		
		// would think this would render new reward right after creation:
		// this.listenTo(this.rewards, 'add', this.renderRewards);
		this.listenTo(this.model, 'sync', this.render);
	},
	
	events: {
		'click button#donate': 'showDonationForm',
		'click button#reward': 'showDonationForm',
		'click button#add-reward': 'showRewardForm'
	},	
	
	render: function () {
		var content = this.template({
			project: this.model,
			daysLeft: this.daysLeft()
		});
		this.$el.html(content);
		
		if (this.model.ownedByCurrentUser) {
			this.renderEditButtons();
		}
		this.renderRewards();
		return this;
	},
	
	renderEditButtons: function () {
		var addRewardButton = new FinalProject.Views.AddRewardButton();
		var editProjectLink = new FinalProject.Views.EditProjectLink();
		
		var $leftColumn = this.$el.find('.project-info.left');
		$leftColumn.prepend(addRewardButton.render().$el);
		$leftColumn.children().first().addClass('edit');
		$leftColumn.prepend(editProjectLink.render().$el);
		$leftColumn.children().first().addClass('edit');
	},
	
	showRewardForm: function () {
		if (this.$el.find('#reward-form').length === 0) {
			var rewardForm = new FinalProject.Views.RewardForm({
				model: this.model
			});
			this.$el.append(rewardForm.render().$el);
		}
	},
	
	renderRewards: function () {
		var rewardsIndex = new FinalProject.Views.RewardsIndex({
			collection: this.rewards
		});
		var $rewardsIndex = this.$el.find('#rewards-index');
		$rewardsIndex.append(rewardsIndex.render().$el);
	},
	
	showDonationForm: function (event) {
		if (this.model.ownedByCurrentUser) {
			// tell user why nothing happened
		} else {
			var amount = $(event.currentTarget).find('h2').text();
			if (this.$el.find('#donation-form').length === 0) {
				var donateForm = new FinalProject.Views.DonationForm({
					model: this.model,
					amount: amount
				});
				this.$el.append(donateForm.render().$el);
			}
		}	
	},
	
	daysLeft: function () {
		today = new Date().toJSON().slice(0, 10);
		deadline = this.model.get('deadline');
		milliSec = new Date(deadline) - new Date(today);
		return milliSec / 86400000;
	},
});
