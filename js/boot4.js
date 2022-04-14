$(document).ready(function(){
var a =$(window).innerHeight();
console.log(a)
var  b=$("main").innerHeight();
console.log(b)
var c=$(".navbar").innerHeight();
console.log(c)
$(".carousel,.carousel-inner").height(a-(b+c));



// run shuffle

$(".shuffle_list li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
 var t =$(this).data("value");

 if(t == "all1"){
     $(".col-md-4").fadeIn(1000);
 }else{
     $(".col-md-4").fadeOut(1000,function(){
         $("."+t).fadeIn(1000);
     })
 }


})


// run slick carsouel
$(".ooo").slick({
dots:true,
nextArrow:false,
prevArrow:false
})
$(window).scroll(function(){
    var x =$(this).scrollTop();
    console.log(x);
    if(x>4570){
        $(".timer").countTo({

        })
    }
})

});