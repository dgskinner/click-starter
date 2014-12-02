json.extract!( @project, 
	:id, 
	:name, 
	:description, 
	:goal, 
	:user_id, 
	:deadline, 
)

json.is_owner is_owner?(@project)

json.rewards @project.rewards do |reward|
  json.min_pledge reward.min_pledge
  json.description reward.description
end

