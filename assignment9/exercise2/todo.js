
window.addEventListener("load", function(event){

	var newTaskBtn = document.getElementById('newTaskBtn');
	newTaskBtn.addEventListener('click', function (e) {
		
		var todoList = document.getElementById("todoList");
		var taskText = document.getElementById("newTask");
		todoList.appendChild(createTask(taskText.value));
		taskText.value = "";
	});

	var clearTaskBtn = document.getElementById('clearTaskBtn');
	clearTaskBtn.addEventListener('click', function (e) {

		var todoList = document.querySelectorAll('#todoList li');
		
		for (var i = 0; i < todoList.length; i++) {
			var li = todoList[i];
			var checkbox = li.getElementsByTagName("input")[0];
			if(checkbox.checked){
				li.parentNode.removeChild(li);
			}
		};

	});
});

function createTask(taskText){
	var checkbox = document.createElement("input");
	var attr = document.createAttribute("type");
	attr.value = "checkbox";
	checkbox.setAttributeNode(attr);

	var li = document.createElement("li");
	li.appendChild(checkbox);
	li.appendChild(document.createTextNode(taskText));
	return li;
}