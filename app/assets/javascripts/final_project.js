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

// FinalProject.initialize in root.html.erb


// Progress bar:

// on browser resize...
$(window).resize(function() {
    moveProgressBar();
});

function moveProgressBar() {
	var $progressWrap = $('.progress-wrap').last();
    var getPercent = $progressWrap.data('progress-fraction');
    var getProgressWrapWidth = $progressWrap.width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 1000;

    // .stop() used to prevent animation queueing
    $progressWrap.find('.progress-bar').stop().animate({
        left: progressTotal
    }, animationLength);
}
