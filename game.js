let rotated = false;
let rotatedRobot = false;
const emojis = ["👊", "🖐️", "✌️", "👊", "🖐️", "✌️", "👊", "🖐️", "✌️"];
let robotRandomChoice;

function getChoice(choice) {
    var option = choice.value;
    
    // HUMAN SIDE
    if (option === 'Rock') {
        document.getElementById('human_hand').innerHTML = "👊";
        if (rotated == true) {
            document.getElementById('human').style.transform = 'rotate(0deg)';
            rotated = false;
        }
    }
    else if (option === 'Paper') {
        document.getElementById('human_hand').innerHTML = "🖐️";
        if (rotated == true) {
            document.getElementById('human').style.transform = 'rotate(0deg)';
            rotated = false;
        }
    }
    else if (option === 'Scissors') {
        rotated = true;
        document.getElementById('human_hand').innerHTML = "✌️";
        document.getElementById('human').style.transform = 'scaleX(-1) rotate(-90deg)';
        
    }


    // ROBOT SIDE
    

    robotRandomChoice = Math.floor(Math.random() * 9);
    // console.log(robotRandomChoice);

    document.getElementById('robot_hand').innerHTML = emojis[robotRandomChoice];
    if (document.getElementById('robot_hand').innerHTML === '✌️') {
        
        if(rotatedRobot == false){
            document.getElementById('robot').style.transform = 'rotate(-90deg)';
        }
        rotatedRobot = true;
    }
    else {
        
        if (rotatedRobot == true){
            document.getElementById('robot').style.transform = 'scaleX(-1)';
        }
        rotatedRobot = false;
    }
        

    // Scoreboard
    if(option === 'Rock') {
        if (robotRandomChoice == 1 || robotRandomChoice == 4 || robotRandomChoice == 7) {
            document.getElementById('robot_score').innerHTML = parseInt(document.getElementById('robot_score').innerHTML) + 1;
        }
        else if(robotRandomChoice == 2 || robotRandomChoice == 5 || robotRandomChoice == 8){
            document.getElementById('human_score').innerHTML = parseInt(document.getElementById('human_score').innerHTML) + 1;
        }
    }
    else if(option === 'Paper') {
        if (robotRandomChoice == 2 || robotRandomChoice == 5 || robotRandomChoice == 8) {
            document.getElementById('robot_score').innerHTML = parseInt(document.getElementById('robot_score').innerHTML) + 1;
        }
        else if(robotRandomChoice == 0 || robotRandomChoice == 3 || robotRandomChoice == 6){
            document.getElementById('human_score').innerHTML = parseInt(document.getElementById('human_score').innerHTML) + 1;
        }
    }
    else if(option === 'Scissors') {
        if (robotRandomChoice == 0 || robotRandomChoice == 3 || robotRandomChoice == 6) {
            document.getElementById('robot_score').innerHTML = parseInt(document.getElementById('robot_score').innerHTML) + 1;
        }
        else if(robotRandomChoice == 1 || robotRandomChoice == 4 || robotRandomChoice == 7){
            document.getElementById('human_score').innerHTML = parseInt(document.getElementById('human_score').innerHTML) + 1;
        }
    }

    // Determine Winner
    if(document.getElementById('human_score').innerText==='5'){
        document.getElementById('buttons').style.display = 'none';
        document.getElementById('displayMessage').innerText = "You Won 🥳";
        document.getElementById('displayMessage').style.display = 'block';
        document.getElementById('replay').style.display = 'block';   
    } 
    if(document.getElementById('robot_score').innerText==='5'){
        document.getElementById('buttons').style.display = 'none';
        document.getElementById('displayMessage').innerText = "You Lost 😔";
        document.getElementById('displayMessage').style.display = 'block'; 
        document.getElementById('replay').style.display = 'block';    
    } 

    
    
}

