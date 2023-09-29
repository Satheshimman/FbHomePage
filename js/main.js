

var form=document.getElementById("form");
var input=document.getElementById("input");
var post=document.getElementById("post");
var content=document.getElementById("content");



var imag=document.getElementById("image");


let data={};


form.addEventListener("submit",function(e){
	
	e.preventDefault();
	store();
		
})


function  store(){
	
	
	data["text"]=input.value;
	read()
	
}



function read(){
	
	post.innerHTML+=`<div class="none" id="inone">
	<p >${data.text}</p>
	<span class="" ><i class="bi bi-pencil-square" onclick="editable(this)"></i> <i class="bi bi-trash" onclick="del(this)"></i></span>
	</div>`
	
	imag.classList.remove("none");
	inone.classList.remove("none");
	
	 var timee=document.getElementById("time")
 let time=new Date();
 console.log(time);
var timeee= time.toLocaleTimeString();
 console.log(timeee);
 timee.innerHTML=("time",timeee);

	
	input.value=""
	
}

function editable(i){
	
	input.value=i.parentElement.previousElementSibling.innerHTML;
	i.parentElement.parentElement.remove();
	
}

function del(i){
	
	
	
	
	i.parentElement.parentElement.remove();
	
}



 

// time.innerHTML=("snjfskl")


// var deling=document.getElementById("delimg");


function delimg(){
	
	
	imag.classList.add("none");
	heart.innerHTML="like";
		heart.style.color="black";
	
	
}


var heart=document.getElementById("heart");
var likee=document.getElementById("likee");

let a=0

function like(){
	
	a++;
	if(a==1){
		
		heart.innerHTML=(a+"like")
		heart.style.color="blue";
		
		console.log(a)
		
	}
	else if(a<=5){
		
		
		heart.innerHTML=(a+"like")
		heart.style.color="blue";
		
	}
	
	else if(a>5){
		
		a=0;
		heart.innerHTML=("like")
		heart.style.color="black";
	}
	
	
}


var comment=document.getElementById("comment");
var chatbox=document.getElementById("chatbox");
var ycomment=document.getElementById("ycomment");


function command(){
	
	comment.classList.toggle("d-none");
	chatbox.classList.toggle("text-danger");
		
}

var modal=document.getElementById("modal");


var sharee=document.getElementById("sharee")


function share(){
	
	modal.classList.toggle("modals");
	modal.setAttribute("class","position-fixed bottom-0 end-0 w-100")
	
		
}


var closee=document.getElementById("closee")


function closer(){
	
	modal.classList.toggle("modals");
	
		
}


var commentbox=document.getElementById("commentbox");
// var ul=document.getElementById("ul");
var ccom=document.getElementById("ccom");
var cpost=document.getElementById("cpost");
// function postcomment(){
	
	
	
	// let cdata={};
	
	// cdata=commentbox.value;
	// console.log(cdata);
	// ccom.innerHTML=(cdata)
	
	
	
// }



let cdata={};


function postcomment(){
	
	
	cstore();
		
}


function  cstore(){
	
	
	cdata["text"]=commentbox.value;
	cread()
	
}



function cread(){
console.log(cdata.text);
	ccom.innerHTML+=`<div class="" id="">
	<p >${cdata.text}</p>
	
	</div>`
	
	commentbox.value=""
}