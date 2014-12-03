FinalProject.Views.ProjectsIndex = Backbone.View.extend({
	template: JST['projects/index'],
	
	initialize: function () {
		this.listenTo(this.collection, 
			'add change:title change:description remove reset', this.render);
	},
	
	render: function () {
		// var content = this.template({projects: this.collection});
		// this.$el.html(content);
		// return this;
		var content = this.template();
		this.$el.html(content);
		var that = this;
		this.collection.each(function (project) {
			var itemView = new FinalProject.Views.ProjectsIndexItem({
				model: project
			});
			that.$el.append(itemView.render().$el);
		});
		return this;
	},
});

// on browser resize...
$(window).resize(function() {
    moveProgressBar();
});

// SIGNATURE PROGRESS
function moveProgressBar() {
    var getPercent = ($('.progress-wrap').data('progress-fraction'));
    var getProgressWrapWidth = $('.progress-wrap').width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 1500;
    
    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    $('.progress-bar').stop().animate({
        left: progressTotal
    }, animationLength);
}
