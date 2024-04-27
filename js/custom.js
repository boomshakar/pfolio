//
$(document).ready(function () {
	$("#fullpage").fullpage({
		verticalCentered: false,
		scrollingSpeed: 600,
		autoScrolling: false,
		css3: true,
		navigation: true,
		navigationPosition: "right",
	});
	const yrStart = 2019;
	const currentYr = new Date().getFullYear();
	const yearExp = currentYr - yrStart;
	$("#yrExp").html(yearExp);

	// CHange theme mode
	$(".color-mode").click(function () {
		$(".color-mode-icon").toggleClass("active");
		$("body").toggleClass("dark-mode");
	});
});

// wow
$(function () {
	new WOW().init();
	$(".rotate").textrotator();
});
