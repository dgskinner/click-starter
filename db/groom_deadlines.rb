# Run the following to ensure that deadline dates stay in the future

projects = Project.all
projects.each do |project|
	if project.deadline < 14.days.from_now 
    old_deadline = project.deadline
    new_deadline = old_deadline + 30.days
    project.update({deadline: new_deadline})
  end
end