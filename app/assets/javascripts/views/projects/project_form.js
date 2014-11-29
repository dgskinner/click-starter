FinalProject.Views.ProjectForm = Backbone.View.extend({
	template: JST['projects/form'],
	
	render: function () {
		var content = this.template({
			project: this.model,
			today: this.todaysDate()
		});
		this.$el.html(content);
		return this;
	},
	
	events: {
		'submit form': 'createProject'
	},
	
	createProject: function (event) {
		event.preventDefault();
	    var attrs = $(event.target).serializeJSON();
		
		var that = this;
	    function success (project) {
			var id = project.id
	    	Backbone.history.navigate("projects/" + id, { trigger: true });
			
	    }

	    this.model.set(attrs);
	    if (this.model.isNew()) {
	      	this.collection.create(this.model, {
	        	success: success
	      	});
	    } else {
	      	this.model.save({}, {
	        	success: success
	      	});
	    }
	},
	
	todaysDate: function () {
		return (new Date()).toJSON().slice(0, 10);
	}
});