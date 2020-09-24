
//********event on add-btn

var add_btn=document.getElementById("add-btn");
var ul_list=document.getElementById("list");

add_btn.onclick=function(e){
	e.preventDefault();
	
	var add_inp=document.getElementById("add-input");
	if(add_inp.value !==""){
		
		var li=document.createElement("li"),
		 f_p=document.createElement("p"),
		 s_b=document.createElement("p"),
		 f_icon=document.createElement("i"),
		 s_icon=document.createElement("i"),
		 input=document.createElement("input");

		// add class name
		f_icon.className = "fa fa-pencil-square-o";
		s_icon.className = "fa fa-times";
		input.className = "edit-note";
		
		
		//add attributes
		input.setAttribute("type","text");
		f_p.textContent=add_inp.value;

		//add list items
		li.appendChild(f_p);
		li.appendChild(s_b);
		s_b.appendChild(f_icon);
		s_b.appendChild(s_icon);
		li.appendChild(input);

		//insert it in
		ul_list.appendChild(li);

		add_inp.value="";
	}
	 
}

//*******event on edit and delet icons


ul_list.addEventListener("click",function(e){

	//on x delet notes
	if(e.target.classList[1]==="fa-times"){
		
		var child=e.target.parentNode.parentNode;
		ul_list.removeChild(child);
		
	}
	//on edit text notes
	else if(e.target.classList[1]==="fa-pencil-square-o"){
		
		
		var p=e.target.parentNode;
		p.style.display="none";
		
		var p1=p.previousElementSibling;
		var input=p.nextElementSibling;
		
		input.style.display="block";
		input.setAttribute("value",p1.textContent);
		
//		input.addEventListener("click",function(){
//			console.log("clicked")
			//---->>>>will complete later
		
		//event input enter
		input.addEventListener("keypress",function(e){

			if(e.key==="Enter"){
				if(input.value !== ""){
					p1.textContent=input.value;
					input.style.display="none";
					p.style.display="block";
				}
				else{
					var root=p.parentNode.parentNode;
					root.removeChild(p.parentNode);
				}
			}

		});
//		});
		
		
	}
	
});

//*********event on hide and unhide notes 


var checkbox=document.getElementById("hide");

checkbox.addEventListener("click",function(e){
	
	if(checkbox.checked === true){
		ul_list.style.display="none";
		document.querySelector("#hide-list label").textContent="Unhide notes"
	}
	else{
		ul_list.style.display="block";
		document.querySelector("#hide-list label").textContent="Hide notes"
	}
	
});


//*************searchfilter

var search_inp=document.querySelector("#search-note input");
search_inp.addEventListener("keyup",function(e){
    var search_key=e.target.value.toUpperCase();
    var notes=ul_list.getElementsByTagName("li");
    
    Array.from(notes).forEach(function(notes){
        var partext=notes.firstElementChild.textContent;
        if(partext.toUpperCase().indexOf(search_key)!==-1){
            notes.style.display="block";
        }
        else{
            notes.style.display="none"
        }
    });
    
})












