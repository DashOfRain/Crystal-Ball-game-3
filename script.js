let no=no;
let No=No;
let NO=NO;

let yes=yes;
let Yes=Yes;
let YES=YES;


let Qone=$(".question1").val();
let Qtwo=$(".question2").val();
let Qthree=$(".question3").val();

//for question one..
if(Qone===no || Qone===No || Qone===NO){
    let Qone=1;
}else if(Qone===yes || Qone===Yes || Qone===YES){
let Qone=0;
}
//question two
else if(Qtwo===no || Qtwo===No || Qtwo===NO){
    let Qtwo=1;
}else if(Qtwo===yes || Qtwo===Yes || Qtwo===YES){
let Qtwo=0;
}
//question three
else if(Qtwo===no || Qtwo===No || Qthree===NO){
    let Qthree=1;
}else if(Qthree===yes || Qthree===Yes || Qthree===YES){
let Qthree=0;
}
else{
$("wrong-ans").text("Please answer yes or no!");
}

$(".sub").click(function(){
    let result = (Qone + Qtwo+ Qthree);
    console.log(result);
    if(result===3){
    $("the-answer").text("You are not! Oh No!");
    }else if(result===2){
    $("the-answer").text("Nor happy, nor sad. Just right!");
    }else if(result<=1){
    $("the-answer").text("BUH BUH BUUUHH! Your happy!");
    }
});
            
            