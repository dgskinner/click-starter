window.FinalProject = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		new FinalProject.Routers.Router;
		Backbone.history.start();
	}
};


// $(document).ready(function(){
// 	FinalProject.initialize();
// });
// instead, called FinalProject.initialize in root.html.erb


// Progress bar:
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