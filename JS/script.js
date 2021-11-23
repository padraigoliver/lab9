// 99 Bottles funcion

function sing(){
    for(i=99;i>=0;i--){
        if(i>1){
            document.getElementById("main").innerHTML+="<br>"+i+" bottles of beer on the wall, "+i+" bottles of beer.<br>Take one down and pass it around, "+(i-1)+" bottles of beer on the wall.<br>";
        }
        else if(i==1){
            document.getElementById("main").innerHTML+="<br>"+i+" bottle of beer on the wall, "+i+" bottle of beer.<br>Take one down and pass it around, no more bottles of beer on the wall.<br>";
        }
        else{
            document.getElementById("main").innerHTML+="<br>No more bottles of beer on the wall, no more bottles of beer.<br>Go to the store and buy some more, 99 bottles of beer on the wall.<br>";
        }
    }
    hide();
}

function hide(){
    document.getElementById("button").style.visibility="hidden";
}

// Rock Paper Scissors functions

let attempt = 0;
let win = false;
let previousCompPick="none";

function play(clicked_id){
    attempt+=1;
    var userPick = clicked_id;	
    var compPick = pick();
    // After the computer's pick has been chosen (compPick), overwrite previousCompPick with the computer's latest pick. Later, compare their old & new pick & if the same, pick again. See comment below
    previousCompPick = compPick;
    var result = compare(userPick,compPick);
    if(attempt<3){
        if(win==false){
            document.getElementById("demo").innerHTML+="<br>Attempt "+attempt+": You chose "+userPick+". The computer chose "+compPick+". "+result;
        }
        else if(win==true){
            document.getElementById("demo").innerHTML+="<br>Attempt "+attempt+": You chose "+userPick+". The computer chose "+compPick+". "+result;
            attempt=3;
        }
        
    }
    else if(attempt==3){
        if(win==false){
            document.getElementById("demo").innerHTML+="<br>Attempt "+attempt+": You chose "+userPick+". The computer chose "+compPick+". "+result+" ... & are out of lives!";
        }
        else if(win==true){
            document.getElementById("demo").innerHTML+="<br>Attempt "+attempt+": You chose "+userPick+". The computer chose "+compPick+". "+result+" ... on your last attempt!";
        }     
    }
}

function pick(){
	var compPick = Math.random();
	if(compPick<0.34){
		compPick="rock";
	}
	else if(compPick<0.67){ 
		compPick="paper";
	}
	else{
		compPick="scissors";
	}
    console.log("Comp Pick = "+compPick + ", Previous Comp Pick = "+previousCompPick);
    // If the computer's pick is not equal to their previous pick, return compPick. Else, repeat method until a different answer is returned
    if(compPick != previousCompPick){
        return compPick;
    }
    else{
        return pick();
    }
}

function compare(userPick,compPick){
	var result="You lose!";
	if(userPick==compPick){
		result="You draw!";
	}
	else if((userPick=="rock" && compPick=="scissors") || (userPick=="paper" && compPick=="rock") || (userPick=="scissors" && compPick=="paper")){
		result="You win!";
        win=true;
	}
	return result;
}