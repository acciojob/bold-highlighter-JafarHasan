function highlight() {
    //Write your code here
	const all=document.querySelectorAll('strong');
	all.forEach((element)=>{
		element.style.color="Green";
	})


}


function return_normal() {
	const all=document.querySelectorAll('strong');
    //Write your code here
	all.forEach((element)=>{
		element.style.color="black";
	})

    
}
