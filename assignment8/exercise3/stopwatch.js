
var display;
var c = 1000
var intVal;
var startTime;
var running = false;
var reset = true;
var pauseTime = 0;


window.addEventListener("load", function(event){
	display = document.getElementById("display-area");

	var toggleBtn = document.getElementById('toggle-button');
	toggleBtn.addEventListener('click', function (e) {

		//start
		if(!running){
			//if starting from 0
			if(reset){
				startTime = new Date();
				reset = false;
			}
			//if starting after a pause
			else{
				//sets new starttime to starttime + length of pause
				startTime = new Date(startTime.getTime() + (new Date().getTime() - pauseTime));
			}		
		intVal = window.setInterval(start, 100);
		running = true;
		}
		//pause
		else{
			window.clearInterval(intVal);
			running = false;
			pauseTime = new Date().getTime();
		}
	});
	var resetBtn = document.getElementById('reset-button');
	resetBtn.addEventListener('click', function (e) {
	  window.clearInterval(intVal);
	  running = false;
	  reset = true;
	  display.innerHTML = "00:00:00.000";
	});
});

var start = function() {
	var elapsedTime = new Date(new Date().getTime() - startTime.getTime());
	var hours = elapsedTime.getHours() - 1;
	var minutes = elapsedTime.getMinutes();
	var seconds = elapsedTime.getSeconds();
	var millies = elapsedTime.getMilliseconds();
   	display.innerHTML = asTwoDigits(hours) +":"+ asTwoDigits(minutes) +":"+ asTwoDigits(seconds) +"."+ millies;
}
	
function asTwoDigits(time){
	if(time < 10)
		return "0"+time;
	else
		return time;
}