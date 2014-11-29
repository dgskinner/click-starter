FinalProject.Views.ProjectShow = Backbone.View.extend({
	template: JST['projects/show'],
	
	initialize: function () {		
		this.rewards = this.model.rewards();
		var that = this;
		this.rewards.fetch({
			success: function () {
				var coll = that.rewards.where({
					project_id: that.model.id
				});
				that.rewards = that.model.rewards(coll);
			}
		});
		
		this.listenTo(this.rewards, 'sync', this.renderRewards);
		this.listenTo(this.model, 'sync', this.render);

	},
	
	render: function () {
		var content = this.template({
			project: this.model,
			daysLeft: this.daysLeft()
		});
		this.$el.html(content);
		this.renderAddRewardButton();
		return this;
	},
	
	events: {
		'click button#donate': 'showDonationForm',
		'click button#add-reward': 'showRewardForm'
	},
	
	
	renderAddRewardButton: function () {
		// if user is the owner of the project...
		var addRewardButton = new FinalProject.Views.AddRewardButton();
		this.$el.append(addRewardButton.render().$el);
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
		this.$el.append(rewardsIndex.render().$el);
	},
	
	showDonationForm: function () {
		// if not the owner of this project...
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
	},
	
	
});
