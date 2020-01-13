var data = [3,4,5];
console.log(data.push(1,"Winston"));
console.log(data);



console.log(data.pop());
console.log(data.pop());
console.log(data.pop());


console.log(data);


var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo2").innerHTML = t;
}

function myStopFunction() {
  clearInterval(myVar);
}




var ary = [10,"eu",32320,0,"tu"];

	function DisplayAryResults(){
		
		var n = ary.length;
		
		document.getElementById("AryCount").innerHTML = "Number of items: " + n.toString();
		
		var AryItems = document.getElementById("AryItems");
		
		while(AryItems.hasChildNodes()) {
			AryItems.removeChild(AryItems.lastChild);
			
		}
		
		for(var i = 0; i < n ; i++) {
			
			var newDiv = document.createElement("div");
			newDiv.innerHTML ="Index " + i.toString()+ " ,Item "+
				(i+1).toString()+ " of " +n.toString() + " is " +
				ary[i];
			
			
			AryItems.appendChild(newDiv);
			
		}
		
	}
	
	function Push(){
		
		var v =document.getElementById("txtAryValue").value;
		ary.push(v);
		DisplayAryResults();
			
	}

	function Pop(){
		ary.pop();
		DisplayAryResults();
		
	}

	function DoAryUnshift(){
		
		var v =document.getElementById("txtAryValue").value;
		ary.unshift(v);
		DisplayAryResults();
		
		
	}
	
	function DoAryShift(){
		
		ary.shift();
		DisplayAryResults();
		
	}
	
	window.onload = DisplayAryResults;
	
	