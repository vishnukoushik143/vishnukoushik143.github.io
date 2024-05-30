 let pauseIcon = `<div><svg width="50" height="50" viewBox="0 0 100 100" style="border-radius: 50%; background: #5a4c00;">
                    <rect x="35" y="30" width="10" height="40" fill="#ecf0f1"/>
                    <rect x="55" y="30" width="10" height="40" fill="#ecf0f1"/>
                    </svg>`;
 let playIcon =`<div><svg width="50" height="50" viewBox="0 0 100 100" style="border-radius: 50%; background: #5a4c00;">
                    <polygon points="40,30 70,50 40,70" fill="#ecf0f1"/>
                    </svg>`;
let resetIcon = `<svg width="50" height="50" viewBox="0 0 100 100" style="border-radius: 50%; background: #5a4c00;">
                    <path d="M50 10a40 40 0 1 0 40 40h-8a32 32 0 1 1 -32 -32V30l12-12-12-12v10a40 40 0 0 0 -0.5 2z" fill="#fff"/>
                    </svg>`;

let undoIcon = `<svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.7141 22 12C22 7.28598 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM9.25871 7.97395C9.56308 7.693 9.58205 7.21851 9.3011 6.91414C9.02015 6.60978 8.54565 6.5908 8.24129 6.87175L5.99129 8.94867C5.83748 9.09065 5.75 9.29045 5.75 9.49977C5.75 9.7091 5.83748 9.9089 5.99129 10.0509L8.24129 12.1278C8.54565 12.4088 9.02015 12.3898 9.3011 12.0854C9.58205 11.781 9.56308 11.3065 9.25871 11.0256L8.41824 10.2498H14.0385C14.7376 10.2498 15.2069 10.2506 15.5652 10.2862C15.9116 10.3205 16.0724 10.3813 16.1787 10.4501C16.3272 10.5461 16.4537 10.6726 16.5497 10.8211C16.6184 10.9274 16.6793 11.0882 16.7136 11.4345C16.7491 11.7929 16.75 12.2622 16.75 12.9613C16.75 13.6604 16.7491 14.1298 16.7136 14.4881C16.6793 14.8344 16.6185 14.9952 16.5497 15.1015C16.4537 15.2501 16.3272 15.3765 16.1787 15.4726C16.0724 15.5413 15.9116 15.6021 15.5652 15.6365C15.2069 15.672 14.7376 15.6729 14.0385 15.6729H9.5C9.08579 15.6729 8.75 16.0086 8.75 16.4229C8.75 16.8371 9.08579 17.1729 9.5 17.1729H14.0758C14.7279 17.1729 15.2721 17.1729 15.7133 17.1291C16.1748 17.0834 16.6038 16.9839 16.9931 16.7322C17.3199 16.5209 17.5981 16.2427 17.8094 15.916C18.0611 15.5266 18.1605 15.0976 18.2063 14.6361C18.25 14.195 18.25 13.6508 18.25 12.9987V12.924C18.25 12.2718 18.25 11.7276 18.2063 11.2865C18.1605 10.825 18.0611 10.396 17.8093 10.0067C17.5981 9.6799 17.3199 9.40169 16.9931 9.19042C16.6038 8.9387 16.1748 8.83927 15.7133 8.7935C15.2721 8.74975 14.7279 8.74976 14.0758 8.74977L8.41824 8.74977L9.25871 7.97395Z" fill="#5a4c00"></path> 
                </g></svg>`;

let redoIcon = `<svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.7141 22 12C22 7.28598 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM15.7587 6.87273C15.4543 6.59177 14.9799 6.61075 14.6989 6.91512C14.4179 7.21948 14.4369 7.69398 14.7413 7.97493L15.5818 8.75075H9.96155C7.63558 8.75075 5.75 10.6363 5.75 12.9623C5.75 15.2883 7.63557 17.1738 9.96154 17.1738H14.5C14.9142 17.1738 15.25 16.838 15.25 16.4238C15.25 16.0096 14.9142 15.6738 14.5 15.6738H9.96154C8.464 15.6738 7.25 14.4598 7.25 12.9623C7.25 11.4647 8.464 10.2508 9.96155 10.2508H15.5818L14.7413 11.0266C14.4369 11.3075 14.4179 11.782 14.6989 12.0864C14.9799 12.3908 15.4543 12.4097 15.7587 12.1288L18.0087 10.0519C18.1625 9.90987 18.25 9.71007 18.25 9.50075C18.25 9.29143 18.1625 9.09163 18.0087 8.94965L15.7587 6.87273Z" fill="#5a4c00"></path>
                 </g></svg>`

let cwIcon = `<svg width="40" height="40" viewBox="0 0 512 512" fill="#000" stroke="#000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                <path fill="#342c01" d="M263.09 50c-11.882-.007-23.875 1.018-35.857 3.13C142.026 68.156 75.156 135.026 60.13 220.233 45.108 305.44 85.075 391.15 160.005 434.41c32.782 18.927 69.254 27.996 105.463 27.553 46.555-.57 92.675-16.865 129.957-48.15l-30.855-36.768c-50.95 42.75-122.968 49.05-180.566 15.797-57.597-33.254-88.152-98.777-76.603-164.274 11.55-65.497 62.672-116.62 128.17-128.168 51.656-9.108 103.323 7.98 139.17 43.862L327 192h128V64l-46.34 46.342C370.242 71.962 317.83 50.03 263.09 50z"></path>
                </g></svg>`;

let acwIcon = `<svg width="40" height="40" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"><path fill="#342c01" d="M248.91 50c11.882-.006 23.875 1.018 35.857 3.13 85.207 15.025 152.077 81.895 167.102 167.102 15.023 85.208-24.944 170.917-99.874 214.178-32.782 18.927-69.254 27.996-105.463 27.553-46.555-.57-92.675-16.865-129.957-48.15l30.855-36.768c50.95 42.75 122.968 49.05 180.566 15.797 57.597-33.254 88.152-98.777 76.603-164.274-11.55-65.497-62.672-116.62-128.17-128.168-51.656-9.108-103.323 7.98-139.17 43.862L185 192H57V64l46.34 46.342C141.758 71.962 194.17 50.03 248.91 50z"></path>
                </g></svg>`;


 let initial_code = `<header>
                        <div><img src="images/title.png" alt=""></div>
                        <div class="menu">
                            <button id="undo">${undoIcon}</button>
                            <button id="redo">${redoIcon}</button>
                            <button id="pausePlay">${playIcon}</button>
                            <button id="resetButton">${resetIcon}</button>
                        </div> 
                    </header>
                    <main>
                        <section class="game">
                            <div class="timer" id="whiteTimer"></div>
                                <table class="board"></table>
                            <div class="timer" id="blackTimer"></div>
                        </section>
                        <section class="rotateButtons">
                            <button id="acw">${acwIcon}</button>
                            <button id="cw">${cwIcon}</button>
                        </section>
                    </main>
                    `;

let icons = {

    w_titan : `<div class="icon"><img src="pawns/w_titan.png"></div>`,
    b_titan : `<div class="icon"><img src="pawns/b_titan.png"></div>`,

    w_tank : `<div class="icon"><img src="pawns/w_tank.png"></div>`,
    b_tank : `<div class="icon"><img src="pawns/b_tank.png"></div>`,

    w_rico : `<div class="icon"><img src="pawns/w_rico.png"></div>`,
    b_rico : `<div class="icon"><img src="pawns/b_rico.png"></div>`,

    w_canon : `<div class="icon"><img src="pawns/w_canon.png"></div>`,
    b_canon : `<div class="icon"><img src="pawns/b_canon.png"></div>`,

    b_semiRico : `<div class="icon"><svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="none" stroke="none"/>
                    <polygon points="10,90 90,90 90,10" fill="black" stroke="black" />
                </svg></div>`,
    
    w_semiRico : `<div class="icon"><svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="none" stroke="none"/>
                    <polygon points="10,90 90,90 90,10" fill="white" stroke="white" />
                </svg></div>`
    
}


// Sounds
const sounds = {
    absorb : new Audio('./sounds/absorb.mp3'),
    bounce : new Audio('./sounds/bounce.mp3'),
    canonShot : new Audio('./sounds/canonShot.mp3'),
    gameOver : new Audio('./sounds/gameOver.mp3'),
    pawnDead : new Audio('./sounds/pawnDead.mp3'),
}

document.body.insertAdjacentHTML("afterbegin", initial_code)

let board = document.querySelector(".board");

let acw = document.getElementById("acw");
let cw = document.getElementById("cw");
let undoButton = document.getElementById("undo");
let redoButton = document.getElementById("redo");
let pausePlay = document.getElementById("pausePlay");
let resetButton = document.getElementById("resetButton");


// Creating a single Table Row
let boardCode = `<td></td>`;
for (let index = 0; index < 3; index++)
    boardCode += boardCode;

boardCode = "<tr>" + boardCode + "</tr>";

// Creating the 8x8 board
for (let index = 0; index < 3; index++)
    boardCode += boardCode;

board.innerHTML = boardCode;


// Getting an array of Table rows
let tableRows = board.getElementsByTagName("tr");


// Making a Matrix that represents the board using indices
let grid = []; // grid represents the board as a matrix
for (let i = 0; i < 8; i++) {
    grid[i] = tableRows[i].getElementsByTagName("td");
}


// defaultCellCode -> default code in the cell when no pawn is there
const defaultCellCode = ``; 

for (let i = 0; i < 8; i++)
    for(let j = 0; j<8; j++)
        grid[i][j].innerHTML = defaultCellCode;


// Creating the Pawns 
class pawn{
    constructor(type, color, flip, id){
        this.type = type;
        this.color = color;
        this.flip = flip; // This will determine the orientation of the pawn
        this.id = id;
    }
}

let rico =  "rico", semiRico = "semiRico", titan = "titan", tank = "tank", canon = "canon";
let black = "black", white = "white";

let pawns = {
    // Black Pawns
    b_rico : new pawn(rico, black, 0, "b_rico"),
    b_semiRico1 : new pawn(semiRico, black, 0, "b_semiRico1"),
    b_semiRico2 : new pawn(semiRico, black, 90, "b_semiRico2"),
    b_titan : new pawn(titan, black, 0, "b_titan"),
    b_tank : new pawn(tank, black, 0, "b_tank"),
    b_canon : new pawn(canon, black, 0, "b_canon"),
    // White Pawns
    w_rico : new pawn(rico, white, 180, "w_rico"),
    w_semiRico1 : new pawn(semiRico, white, 180, "w_semiRico1"),
    w_semiRico2 : new pawn(semiRico, white, 270, "w_semiRico2"),
    w_titan : new pawn(titan, white, 180, "w_titan"),
    w_tank : new pawn(tank, white, 180, "w_tank"),
    w_canon : new pawn(canon, white, 180, "w_canon")
}

const applyRotation = (i, j) => {
    grid[i][j].querySelector(".icon").style.transform = `rotate(${pawns[grid[i][j].id].flip}deg)`;
}

// Initial Positions
const initialPositions = ()=>{
    
    
    grid[0][2].innerHTML = icons.w_canon;
    grid[0][3].innerHTML = icons.w_tank;
    grid[0][4].innerHTML = icons.w_titan;
    grid[0][5].innerHTML = icons.w_rico;
    grid[1][3].innerHTML = icons.w_semiRico;
    grid[1][4].innerHTML = icons.w_semiRico;
    
    grid[7][2].innerHTML = icons.b_rico;
    grid[7][3].innerHTML = icons.b_titan;
    grid[7][4].innerHTML = icons.b_tank;
    grid[7][5].innerHTML = icons.b_canon;
    grid[6][3].innerHTML = icons.b_semiRico;
    grid[6][4].innerHTML = icons.b_semiRico;
    
    
    grid[0][2].id = pawns["w_canon"].id;
    grid[0][3].id = pawns["w_tank"].id;
    grid[0][4].id = pawns["w_titan"].id;
    grid[0][5].id = pawns["w_rico"].id;
    grid[1][3].id = pawns["w_semiRico2"].id;
    grid[1][4].id = pawns["w_semiRico1"].id;

    grid[7][2].id = pawns["b_rico"].id;
    grid[7][3].id = pawns["b_titan"].id;
    grid[7][4].id = pawns["b_tank"].id;
    grid[7][5].id = pawns["b_canon"].id;
    grid[6][3].id = pawns["b_semiRico1"].id;
    grid[6][4].id = pawns["b_semiRico2"].id;


    // Initial Oriantations
    applyRotation(0,2);
    applyRotation(0,3);
    applyRotation(0,4);
    applyRotation(0,5);
    applyRotation(1,3);
    applyRotation(1,4);

    applyRotation(7,2);
    applyRotation(7,3);
    applyRotation(7,4);
    applyRotation(7,5);
    applyRotation(6,3);
    applyRotation(6,4);

}
initialPositions();

let timeLimit = 270; // Time alloted for each player for a game
let pause = true;
let moveBlack = true;
let blackCanon = {x: 7, y: 5}, whiteCanon = {x: 0, y: 2};

let prev = { // This will store the position of pawn for which the possible moves are highlighted
    x: 4,
    y: 4
}

const playSound = (audio)=>{
    audio.currentTime = 0.15;
    audio.play();
    // if(audio != sounds.gameOver) setTimeout(() => {
    //     audio.pause();
    // }, 200);
}

// The code till here is only for the initial setup of the board

// When Clicked on a cell for Highlighting the possible Moves/ moving the pawn to a new cell
for (let i = 0; i < 8; i++)
    for(let j = 0; j<8; j++)
        grid[i][j].addEventListener("click", ()=>{
            pause = false;
            pausePlay.innerHTML = pauseIcon;
            if(grid[i][j].classList.contains("highlight")){

                // moving the pawn
                let temp = grid[prev.x][prev.y].innerHTML;
                grid[prev.x][prev.y].innerHTML = grid[i][j].innerHTML;
                grid[i][j].innerHTML = temp;

                // changing the id for the grids
                temp = grid[prev.x][prev.y].id;
                grid[prev.x][prev.y].id = grid[i][j].id;
                grid[i][j].id = temp;

                let flip = pawns[grid[i][j].id].flip;
                
                undoStack.push(new move(grid[i][j].id, prev.x, prev.y, i, j, flip, flip, false));
                redoStack = []; // Deleting the contents of RedoStack

                removeHighlights();
                applyRotation(i, j);

                if(pawns[grid[i][j].id].type == "canon"){ // Updating the positions of Canons
                    if(moveBlack)
                        blackCanon.x = i, blackCanon.y = j;
                    else
                        whiteCanon.x = i, whiteCanon.y = j;
                }else if(!available(prev.x, prev.y) && pawns[grid[prev.x][prev.y].id].type == "canon" && pawns[grid[i][j].id].type == "rico"){
                    if(moveBlack)
                        blackCanon.x = prev.x, blackCanon.y = prev.y;
                    else
                        whiteCanon.x = prev.x, whiteCanon.y = prev.y;
                }

                fireCanon(moveBlack);
                moveBlack = !moveBlack;
                return;
            }else if(available(i,j) != true){
                removeHighlights();
                giveHighlights(i,j);  
            }else 
                removeHighlights();
        })

//Firing the Canon
const fireCanon = (moveBlack)=>{
    playSound(sounds.canonShot);
    let dir = ["up", "right", "down", "left"];
    if(moveBlack)
        moveBullet(blackCanon.x, blackCanon.y, dir[((pawns["b_canon"].flip + 360)%360)/90], moveBlack);
    else
        moveBullet(whiteCanon.x, whiteCanon.y, dir[((pawns["w_canon"].flip + 360)%360)/90], moveBlack);
}


const bulletAnimation = (i, j, direction)=>{
    return new Promise ((resolve) =>{
        // resolve();
        let bulletIcon = `<div id="bullet"><div></div></div>`;
        grid[i][j].insertAdjacentHTML("afterbegin",bulletIcon);
        let bullet = grid[i][j].querySelector("#bullet");

        if(direction == "up"){
            bullet.style.top = "50%"
            bullet.style.animation = "moveUp 0.1s forwards linear";
            // bullet.style.top = "0%";
        } else if(direction == "left"){
            bullet.style.left = "50%"
            bullet.style.animation = "moveLeft 0.1s forwards linear";
            // bullet.style.left = "0%";

        } else if(direction == "down"){
            bullet.style.top = "-50%"
            bullet.style.animation = "moveDown 0.1s forwards linear";
            // bullet.style.bottom = "0%";

        }else{
            bullet.style.left = "-50%"
            bullet.style.animation = "moveRight 0.1s forwards linear";
            // bullet.style.right = "0%";

        }
        
        bullet.addEventListener('animationend', ()=>{
            bullet.parentNode.removeChild(bullet);
            resolve();
        });
    });
}


// Traversal of the Bullet
const moveBullet = async (i, j, direction, moveBlack)=>{

    if(direction == "up"){
        while(i >0 && available(i-1, j)){ i--; await bulletAnimation(i, j, direction); }
        if(i == 0 && available(i, j)) return;
        if(i!=0) {i--; await bulletAnimation(i, j, direction);}
        
    }else if(direction == "down"){
        while(i < 7 && available(i+1, j)) {i++; await bulletAnimation(i, j, direction);}
        if(i == 7 && available(i, j)) return;
        if(i != 7) {i++; await bulletAnimation(i, j, direction);}
        
    }else if(direction == "left"){
        while(j >0 && available(i, j-1)) {j--; await bulletAnimation(i, j, direction);}
        if(j == 0 && available(i, j)) return;
        if(j != 0) {j--; await bulletAnimation(i, j, direction);}
        
    }else{
        while(j < 7 && available(i, j+1)) {j++; await bulletAnimation(i, j, direction);}
        if(j == 7 && available(i, j)) return;
        if(j != 7) {j++; await bulletAnimation(i, j, direction);}
        
    }

    // The below function is to break out of the function if the bullet reaches a wall
    // Bullet Reached a wall if the curred grid has no icon
    if(grid[i][j].id == '') return;

    let obstacle = pawns[grid[i][j].id];

    if((obstacle.color == black && moveBlack) || (obstacle.color == white && !moveBlack)) 
        if(obstacle.type == "canon" || obstacle.type == "titan"){
            playSound(sounds.absorb);
            return;
        }
    
    if(obstacle.type == "rico"){
        let flip = (obstacle.flip+360)%180;
        if(flip == 0){

            if(direction == "up"){
                playSound(sounds.bounce);
                moveBullet(i, j, "right", moveBlack);
            }else if(direction == "down"){
                playSound(sounds.bounce);
                moveBullet(i, j, "left", moveBlack);
            } else if(direction == "left"){
                playSound(sounds.bounce);
                moveBullet(i, j, "down", moveBlack);
            }else{
                playSound(sounds.bounce);
                moveBullet(i, j, "up", moveBlack);
            }

        }else{
            if(direction == "up"){
                playSound(sounds.bounce);
                moveBullet(i, j, "left", moveBlack);
            }else if(direction == "down"){
                playSound(sounds.bounce);
                moveBullet(i, j, "right", moveBlack);
            } else if(direction == "left"){
                playSound(sounds.bounce);
                moveBullet(i, j, "up", moveBlack);
            }else{
                playSound(sounds.bounce);
                moveBullet(i, j, "down", moveBlack);
            }
        }
    }else if(obstacle.type == "titan"){
        console.log("reached titan");
        let flip = (obstacle.flip + 360)%360;
        if(flip == 0 && direction == "up" || flip == 90 && direction == "right" || flip == 180 && direction == "down" || flip == 270 && direction == "left"){
            playSound(sounds.absorb);
            return;
        }

        // Game Over Alert 
        playSound(sounds.gameOver);
        if(obstacle.color == "black") alert("White Wins !");
        else alert("Black Wins !");
        location.reload(true);

    }else if(obstacle.type == "tank"){
        let flip = (obstacle.flip + 360)%360;
        if(flip == 0 && direction == "up" || flip == 90 && direction == "right" || flip == 180 && direction == "down" || flip == 270 && direction == "left") moveBullet(i, j, direction, moveBlack);
        else {
            playSound(sounds.absorb);
            return;
        }
    }else if (obstacle.type == "canon"){
        playSound(sounds.absorb);
        return;
    }else if(obstacle.type == "semiRico"){
        let flip = (obstacle.flip + 360)%360;

        if(flip == 0){
            if(direction == "right"){
                playSound(sounds.bounce);
                moveBullet(i, j, "up", moveBlack);
            }else if(direction == "down"){
                playSound(sounds.bounce);
                moveBullet(i, j, "left", moveBlack);
            }else
                removePawn(i, j, obstacle, moveBlack); 
        }else if(flip == 90){
            if(direction == "left"){
                playSound(sounds.bounce);
                moveBullet(i, j, "up", moveBlack);
            }else if(direction == "down"){
                playSound(sounds.bounce);
                moveBullet(i, j, "right", moveBlack);
            }else 
                removePawn(i, j, obstacle, moveBlack); 
        }else if(flip == 180){
            if(direction == "left"){
                playSound(sounds.bounce);
                moveBullet(i, j, "down", moveBlack);
            }else if(direction == "up"){
                playSound(sounds.bounce);
                moveBullet(i, j, "right", moveBlack);
            }else 
                removePawn(i, j, obstacle, moveBlack); 
        }else if(flip == 270){
            if(direction == "right"){
                playSound(sounds.bounce);
                moveBullet(i, j, "down", moveBlack);
            }else if(direction == "up"){
                playSound(sounds.bounce);
                moveBullet(i, j, "left", moveBlack);
            }else 
                removePawn(i, j, obstacle, moveBlack); 
        }
    }

}

// Remove Pawn function (Deletes the pawn if it is hit by a bullet from opponent)
const removePawn = (i, j, obstacle, moveBlack)=>{
    if((obstacle.color == black && moveBlack) || (obstacle.color == white && !moveBlack)){
        playSound(sounds.absorb);
        return;
    }
    
    let flip = pawns[grid[i][j].id].flip;

    // Updating the undoStack
    undoStack.push(new move(grid[i][j].id, i, j, i, j,flip, flip, true));

    // Removing the Pawn
    setTimeout(() => {
        playSound(sounds.pawnDead);
        grid[i][j].id = '';
        grid[i][j].innerHTML = '';
    }, 100);
}

// Undo And Redo Features ( move Class is being used to store the moves in undoStack and redoStack as instances)
class move {
    constructor(id, prevX, prevY, currX, currY, prevFlip, currFlip, dead){
        this.id = id;
        this.prevX = prevX;
        this.prevY = prevY;
        this.currX = currX;
        this.currY = currY;
        this.prevFlip = prevFlip;
        this.currFlip = currFlip;
        this.dead = dead;
    }
};

let undoStack = [], redoStack = [];


// Undo Function
const undoMove = ()=>{
    removeHighlights();
    if(undoStack.length == 0){
        alert("No more Previous Moves");

        return;
    }

    let ele = undoStack.pop();
    redoStack.push(ele);

    let iconName = pawns[ele.id].type;
        if(pawns[ele.id].color == "black")
            iconName = "b_" + iconName;
        else 
            iconName = "w_" + iconName;
    
    if(ele.dead){
        // Make the element reappear;
        let cell = grid[ele.prevX][ele.prevY];
        cell.id = ele.id;

        cell.innerHTML = icons[iconName];
        applyRotation(ele.prevX, ele.prevY);
        // Call undoMove() again
        undoMove();
        return;
    }else if(ele.prevFlip != ele.currFlip){
        // change to prev flip
        pawns[ele.id].flip = ele.prevFlip;
        applyRotation(ele.prevX, ele.prevY);
    }else{
        // swap the cells

        // moving the pawn
        let temp = grid[ele.prevX][ele.prevY].innerHTML;
        grid[ele.prevX][ele.prevY].innerHTML = grid[ele.currX][ele.currY].innerHTML;
        grid[ele.currX][ele.currY].innerHTML = temp;

        // changing the id for the grids
        temp = grid[ele.prevX][ele.prevY].id;
        grid[ele.prevX][ele.prevY].id = grid[ele.currX][ele.currY].id;
        grid[ele.currX][ele.currY].id = temp;
        applyRotation(ele.prevX, ele.prevY);
    }

    moveBlack = !moveBlack;

}

// redo Function
const redoMove = ()=>{
    removeHighlights();
    if(redoStack.length == 0){
        alert("No more moves further");
        return;
    }

    let ele = redoStack.pop();
    undoStack.push(ele);

    let iconName = pawns[ele.id].type;
        if(pawns[ele.id].color == "black")
            iconName = "b_" + iconName;
        else 
            iconName = "w_" + iconName;
    
    if(ele.dead){// Make the element disappear;
        let cell = grid[ele.currX][ele.currY];
        cell.id = "";
        cell.innerHTML = "";
        return;
    }else if(ele.prevFlip != ele.currFlip){// change to currFlip
        pawns[ele.id].flip = ele.currFlip;
        applyRotation(ele.currX, ele.currY);
    }else{ // swap the cells

        // moving the pawn
        let temp = grid[ele.prevX][ele.prevY].innerHTML;
        grid[ele.prevX][ele.prevY].innerHTML = grid[ele.currX][ele.currY].innerHTML;
        grid[ele.currX][ele.currY].innerHTML = temp;

        // changing the id for the grids
        temp = grid[ele.prevX][ele.prevY].id;
        grid[ele.prevX][ele.prevY].id = grid[ele.currX][ele.currY].id;
        grid[ele.currX][ele.currY].id = temp;

        // apply Rotation to curr grid 
        applyRotation(ele.currX, ele.currY);
    }

    moveBlack = !moveBlack;
    
    if(redoStack.length !=0 && redoStack[redoStack.length-1].dead) redoMove();
}


// Functionality for buttons

// Undo Button
undoButton.addEventListener("click", ()=>{
    undoMove();
});

// redo Button
redoButton.addEventListener("click", ()=>{
    redoMove();
});


// For Anti-Clockwise Button
acw.addEventListener("click", ()=>{
    if(available(prev.x,prev.y)) return;
    if((pawns[grid[prev.x][prev.y].id].color == "black" && !moveBlack) || (pawns[grid[prev.x][prev.y].id].color == "white" && moveBlack)) return;

    let flip = pawns[grid[prev.x][prev.y].id].flip;

    let prevFlip = flip;

    flip -= 90;
    pawns[grid[prev.x][prev.y].id].flip = flip % 360;
    applyRotation(prev.x, prev.y);
    

    // Updating the UndoStack
    undoStack.push(new move(grid[prev.x][prev.y].id, prev.x, prev.y, prev.x, prev.y, prevFlip, flip, false));
    redoStack = []; // Deleting the contents of RedoStack


    removeHighlights();
    fireCanon(moveBlack);
    moveBlack = !moveBlack;
});

//For Clockwise Button
cw.addEventListener("click", ()=>{
    if(available(prev.x,prev.y)) return;
    if((pawns[grid[prev.x][prev.y].id].color == "black" && !moveBlack) || (pawns[grid[prev.x][prev.y].id].color == "white" && moveBlack)) return;

    let flip = pawns[grid[prev.x][prev.y].id].flip;
    let prevFlip = flip;


    flip += 90;
    pawns[grid[prev.x][prev.y].id].flip = flip % 360;
    applyRotation(prev.x, prev.y);

    // Updating the undoStack
    undoStack.push(new move(grid[prev.x][prev.y].id, prev.x, prev.y, prev.x, prev.y, prevFlip, flip, false));
    redoStack = []; // Deleting the contents of RedoStack

    
    removeHighlights();
    fireCanon(moveBlack);
    moveBlack = !moveBlack;
});


// Pause/play Button
pausePlay.addEventListener("click", ()=>{
    pause = !pause;
    if(pause) pausePlay.innerHTML = playIcon;
    else pausePlay.innerHTML = pauseIcon;
});

// Reset Game Button
resetButton.addEventListener("click", ()=>{
    location.reload(true);
});



// Returns true if the cell is empty
const available = (i, j)=>{
    if(grid[i][j].innerHTML == defaultCellCode) return true;
    return false;
}

// For removing the Highlighted cells
const removeHighlights = ()=>{
    for (let i = 0; i < 8; i++)
        for(let j = 0; j<8; j++){
            grid[i][j].style.backgroundColor = "#a89a46";
            grid[i][j].classList.remove("highlight");
        }
    
    
}

// For highlighting possible moves and rotations
const giveHighlights = (i, j)=>{

    if((pawns[grid[i][j].id].color == black && !moveBlack) || (pawns[grid[i][j].id].color == white && moveBlack)) 
        return;

    if(pause) return;
    
    grid[i][j].style.backgroundColor = "brown";

    let highlightCell = (x, y, oldX = 7) => {
        if(!available(x,y) && pawns[grid[x][y].id].type == "canon" && oldX != x) return;
        if(!available(x,y) && pawns[grid[x][y].id].type == "titan") return;
        grid[x][y].classList.add("highlight");
        grid[x][y].style.backgroundColor = "yellow";
    };

    if(pawns[grid[i][j].id].type != "canon"){
        if (j > 0 && (available(i, j - 1) || pawns[grid[i][j].id].type == "rico")) highlightCell(i, j - 1, i);
        if (j < 7 && (available(i, j + 1) || pawns[grid[i][j].id].type == "rico")) highlightCell(i, j + 1, i);
        if (i > 0 && (available(i - 1, j) || pawns[grid[i][j].id].type == "rico")) highlightCell(i - 1, j, i);
        if (i < 7 && (available(i + 1, j) || pawns[grid[i][j].id].type == "rico")) highlightCell(i + 1, j, i);
        if (i > 0 && j < 7 && (available(i - 1, j + 1) || pawns[grid[i][j].id].type == "rico")) highlightCell(i - 1, j + 1, i);
        if (i > 0 && j > 0 && (available(i - 1, j - 1) || pawns[grid[i][j].id].type == "rico")) highlightCell(i - 1, j - 1, i);
        if (i < 7 && j < 7 && (available(i + 1, j + 1) || pawns[grid[i][j].id].type == "rico")) highlightCell(i + 1, j + 1, i);
        if (i < 7 && j > 0 && (available(i + 1, j - 1) || pawns[grid[i][j].id].type == "rico")) highlightCell(i + 1, j - 1, i);
    }else{
        if (j > 0 && available(i, j - 1)) highlightCell(i, j - 1);
        if (j < 7 && available(i, j + 1)) highlightCell(i, j + 1);
    }

    prev.x = i, prev.y = j;
}


// Timers (Black will lose if blackTimer reaches to 0)
// Black Timer
let blackTime = timeLimit;
let blackTimer = document.getElementById("blackTimer");

setInterval(() => {
    if(moveBlack && !pause) blackTime--;

    let sec = blackTime%60;
    if(sec < 10)
        blackTimer.innerHTML = `${Math.floor(blackTime/60)}:0${blackTime%60}`;
    else
        blackTimer.innerHTML = `${Math.floor(blackTime/60)}:${blackTime%60}`;

    if(blackTime < 0){
        alert("White Wins!");
        blackTime = timeLimit;
        location.reload(true);
    }
}, 1000);


// White Timer
let whiteTime = timeLimit;
let whiteTimer = document.getElementById("whiteTimer");

setInterval(() => {
    if(!moveBlack && !pause) whiteTime--;

    let sec = whiteTime%60;

    if(sec < 10)
        whiteTimer.innerHTML = `${Math.floor(whiteTime/60)}:0${sec}`;
    else
        whiteTimer.innerHTML = `${Math.floor(whiteTime/60)}:${sec}`;
    
    if(whiteTime < 0){
        alert("Black Wins!");
        whiteTime = timeLimit;
        location.reload(true);
    }
}, 1000);

