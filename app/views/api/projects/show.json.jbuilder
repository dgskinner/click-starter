json.extract!( @project, 
	:id, 
	:name, 
	:description, 
	:goal, 
	:user_id, 
	:deadline, 
	:image_url,
	:category
)

json.is_owner is_owner?(@project)

json.donation_total donation_total(@project)

json.rewards @project.rewards do |reward|
  json.min_pledge reward.min_pledge
  json.description reward.description
end



