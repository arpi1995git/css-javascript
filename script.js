$(".resp-btn").click(function(){
	$(".resp-menu").toggle()
});

let arr = ["slide-1-1920x776.jpg","slide2.jpg", "slide3.jpg"];
$(".content").css("background-image","url(" + arr[0] + ")");
let i = 0;
setInterval(function(){
	if(i==arr.length-1){
		i=0
	}else{
		i++
	}
	$(".content").css("background-image","url(" + arr[i] + ")")
},3000)