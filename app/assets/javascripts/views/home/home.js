FinalProject.Views.Home = Backbone.View.extend({
	template: JST['home/home'],
	
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},
	
	events: {
		'click .carousel-control.left': 'prev',
		'click .carousel-control.right': 'next',
	},
	
	prev: function () {
		$('#carousel').carousel('prev');
	},
	
	next: function () {
		$('#carousel').carousel('next');
	}
});
