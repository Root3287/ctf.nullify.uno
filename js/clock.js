		var timer;

		var compareDate = new Date();

		compareDate.setFullYear(2016);
		compareDate.setMonth(10)
		compareDate.setDate(19);
		compareDate.setHours(8);
		compareDate.setMinutes(30);
		compareDate.setSeconds(00);

		timer = setInterval(function() {
			timeBetweenDates(compareDate);
		}, 1000);

		function timeBetweenDates(toDate) {
			var dateEntered = toDate;
			var now = new Date();
			var difference = dateEntered.getTime() - now.getTime();

			if (difference <= 0) {

	clearInterval(timer);
} else {

	var seconds = Math.floor(difference / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);

	hours %= 24;
	minutes %= 60;
	seconds %= 60;

	$("#days").text(days);
	$("#hours").text(hours);
	$("#minutes").text(minutes);
	$("#seconds").text(seconds);
}
}

$( ".shell" ).click(function() {
  		window.location.replace("http://0.0.0.0:8000/img/shell.png");
	});