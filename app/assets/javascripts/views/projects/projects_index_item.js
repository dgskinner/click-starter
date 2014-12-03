FinalProject.Views.ProjectsIndexItem = Backbone.View.extend({
	template: JST['projects/item'],
	
	initialize: function () {
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function () {
		var content = this.template({project: this.model});
		this.$el.html(content).addClass('project-item');
		this.$el.addClass('project-id-' + this.model.id);
		window.moveProgressBar(this.model.id);
		return this;
	},
});

// // on browser resize...
// $(window).resize(function() {
//     moveProgressBar();
// });
//
// // SIGNATURE PROGRESS
// function moveProgressBar(projectId) {
// 	debugger
// 	var $element = $('.project-id-' + projectId);
//     var getPercent = $element.find('.progress-wrap').data('progress-fraction');
//     var getProgressWrapWidth = $('.progress-wrap').width();
//     var progressTotal = getPercent * getProgressWrapWidth;
//     var animationLength = 1500;
//
//     // on page load, animate percentage bar to data percentage length
//     // .stop() used to prevent animation queueing
//     $element.find('.progress-bar').stop().animate({
//         left: progressTotal
//     }, animationLength);
// }