FinalProject.Views.RewardsIndex = Backbone.View.extend({
	template: JST['rewards/index'],
	
	// initialize: function () {
	// 	this.listenTo(this.collection, 'sync', this.render)
	// },
	
	render: function () {
		var content = this.template({rewards: this.collection});
		this.$el.html(content);
		return this;
	},
});