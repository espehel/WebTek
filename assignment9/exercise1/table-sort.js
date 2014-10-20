var table;
var rows;

window.addEventListener("load", function(event){
	var sortBtn1 = document.getElementById('sort-button-1');
	sortBtn1.addEventListener('click', function (e) {
		sort(0);		
	});
	var sortBtn2 = document.getElementById('sort-button-2');
	sortBtn2.addEventListener('click', function (e) {
		sort(1);
	});
	var sortBtn3 = document.getElementById('sort-button-3');
	sortBtn3.addEventListener('click', function (e) {
		sort(2);		
	});
});

function sort(column){
		table = document.getElementById("the-table-body");
		rows = Array.prototype.slice.call(table.children,0);
		
		rows.sort(function(o1,o2){
			x = o1.cells[column].innerHTML
			y = o2.cells[column].innerHTML
			return x > y ? 1 : (x < y ? -1 : 0);
		});
		for (var i = 0; i < rows.length; i++) {
			table.appendChild(rows[i]);
		};
}

