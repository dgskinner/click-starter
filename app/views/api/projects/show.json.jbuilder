json.extract! @project, :id, :name, :description, :goal, :user_id, :deadline

json.rewards @project.rewards do |reward|
  json.min_pledge reward.min_pledge
  json.description member.description
end