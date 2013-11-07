$(document).ready(function () {
	init();
});

function init(){
	$("#create-menu li a").bind("click", function () {step($(this))});
	$(".btn.btn-default.next").bind("click", function () {triggerClick($(this))});
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
	var current_step_content = $("#profile-content-step.active");
	current_step_content.removeClass("active");
	current_step_content.addClass("hidden");
	var next_step_content = $("#profile-content-step."+next_step_number);
	next_step_content.removeClass("hidden");
	next_step_content.addClass("active");
}