function checkbmi(){

    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var result = weight/(height/100*height/100);
    document.getElementById("bmi").innerHTML = Math.floor(result);

    if(result <= 18.5){
        document.getElementById("desc").innerHTML = "You are underweight!!";
        document.querySelector(".emoji").style.background = "url('./asset/sad.jpg')";
        document.querySelector(".anime").style.background = "url('./asset/thin.png')";
    }
    else if(result >18.5 && result <24.9){
        document.getElementById("desc").innerHTML = "You are normal!!"
        document.querySelector(".emoji").style.background = "url('./asset/happy.jpg')";
        document.querySelector(".anime").style.background = "url('./asset/normal1.jpg')";
    }
    else{
        document.getElementById("desc").innerHTML = "You are overweight!!"
        document.querySelector(".emoji").style.background = "url('./asset/sad.jpg')";
        document.querySelector(".anime").style.background = "url('./asset/fat.png')";
        document.querySelector(".emoji").classList.add("animate")
    }
}