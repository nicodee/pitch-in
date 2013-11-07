$(document).ready(function () {
	init();
});

function init(){
	$("#create-menu li a").bind("click", function () {step($(this))});
	$(".btn.btn-default.next").bind("click", function () {triggerClick($(this))});
	$(".add-new-reward").bind("click", function () {addNewReward($(this))});
	$(".remove-reward-item").bind("click", function () { removeReward($(this))});
}

function triggerClick (next) {
	var next_item_class = next.attr("data-link-id");
	var next_item       = $(next_item_class);  
	console.log(next_item_class);
	next_item.click();
}

function step (menu_item) {
	next_step_number = menu_item.attr("data-create-step");	
	progress(menu_item, next_step_number);
}

function progress (menu_item, next_step_number) {
	var menu_item = menu_item;
	$("#create-menu li a").removeClass("active");
	menu_item.addClass("active");
	var container = $("#create-main-container");
	showContent(container, next_step_number);
}

function showContent (container, next_step_number) {
	var current_step_content = $("#project-content-step.active");
	current_step_content.removeClass("active");
	current_step_content.addClass("hidden");
	var next_step_content = $("#project-content-step."+next_step_number);
	next_step_content.removeClass("hidden");
	next_step_content.addClass("active");
}

function addNewReward (addNew) {
	var reward_template = $(".reward-item-template.hidden").html();
	var new_reward_item = reward_template;
	var reward_container= $(".rewards-container");
	reward_container.append(new_reward_item);	
	$(".remove-reward-item").unbind("click");	
	$(".remove-reward-item").bind("click", function () { removeReward($(this))});
}

function removeReward (close) {
	var deleted_reward = close.parent();
	var answer         = confirm("This item will be deleted. Do you want to continue?");
	if (answer==true)	{
		deleted_reward.remove();
	}
}