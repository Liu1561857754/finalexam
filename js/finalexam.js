//    localStorage.tasks="";
document.getElementById("list").innerHTML=localStorage.tasks;
function addtask(){
		 var taskcontent=document.getElementById("taskcontent").value;
		 var taskbox=document.createElement("div");
		 taskbox.className="task";
		 console.log("a");
		 document.getElementById("list").appendChild(taskbox);
		// var inputtext=document.createElement("label");
		 //inputtext.innerHTML=taskcontent;
		 //taskbox.appendChild(inputtext);
		 taskbox.innerHTML = taskcontent;
		 var inputcheckbox=document.createElement("input");
		 inputcheckbox.type="checkbox";
		 taskbox.appendChild(inputcheckbox);
		 if (window.localStorage) {
	     	localStorage.setItem("tasks",document.getElementById("list").innerHTML);
			}
		}

var list = document.getElementsByClassName("task");
function cbtn(){
		 for(i=1;i<list.length;i++){
		 if(list[i].lastChild.checked == true){
			 var changecontent=document.getElementById("changecontent").value;
			list[i].innerHTML = changecontent+'<input type="checkbox">';
		}
		
		}
}
function delet(){
		var list = document.getElementsByClassName("task");
		//console.log(list);
		console.log(list[1].lastChild.checked);
		//console.log(list[2].lastChild.checked);
		for(i=1;i<list.length;i++){
		if(list[i].lastChild.checked == true){
				list[i].innerHTML= " ";
			}
		}
	}
	function show(){
		var list = document.getElementsByClassName("task");	
		for(i=1;i<list.length;i++){
		if(list[i].lastChild.checked == true){
			console.log(list);
			list[i].style.display = "none";
 	 	}}
}

function show_c(){
		var list = document.getElementsByClassName("task");	
		for(i=1;i<list.length;i++){
		if(list[i].lastChild.checked != true){
			console.log(list);
			list[i].style.display = "none";
 	 	}}
}
function show_all(){
		var list = document.getElementsByClassName("task");	
		console.log(list);
		for(i=1;i<list.length;i++){
			list[i].style.display = "block";
		}
}
function _top(){
		for(i=1;i<list.length;i++){
			if(list[i].lastChild.checked == true){
				if(i==1){
				alert("已经是最顶部了");
				break;
			}else
			var temp;
			temp=list[i].innerHTML;
			list[i].innerHTML=list[i-1].innerHTML;
			list[i-1].innerHTML=temp;
			list[i-1].lastChild.checked = true;
			if (window.localStorage) {
			//localStorage.setItem("list[i-1].lastChild.checked",true);
	     	localStorage.setItem("tasks",document.getElementById("list").innerHTML);
			}
			//var list = 
			//console.log(i);
			//localStorage.setItem("list[i]",document.getElementById("list").innerHTML);
		}
	}
}
function _down(){
		for(i=1;i<list.length;i++){
			if(list[i].lastChild.checked == true){
				if(i==list.length-1){
				alert("已经是最底部了");
				break;
			}else
			var temp;
			temp=list[i].innerHTML;
			list[i].innerHTML=list[i+1].innerHTML;
			list[i+1].innerHTML=temp;
			console.log(i);
			if (window.localStorage) {
	     	localStorage.setItem("tasks",document.getElementById("list").innerHTML);
			}
			list[i+1].lastChild.checked = true;
			break;
		}
		}
}
function all_choose(){
	for(i=1;i<list.length;i++)
	{
		list[i].lastChild.checked = true;
	}
}
