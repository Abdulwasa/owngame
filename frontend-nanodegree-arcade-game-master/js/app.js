// Enemies our player must avoid
var Enemy = function( feinde1, feinde) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = feinde1;
	this.y = feinde;
   this.speed = Math.floor(Math.random() *60); // speed variable for the Eney
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt){
    this.x = this.x + 6 * dt * this.speed; // speed for the Enemy
        
        if (this.x >= 450){ // controle of the Enemy and to repeat it 
                this.x = -30;
                }
    // controle of the player and the Enemy 
    if (((player.x >= (this.x -20)) && (player.x <= (this.x +20)))
        && ((player.y >= (this.y -20)) && (player.y <= (this.y +20)))){
                player.x = 100;
                player.y = 405;
                            }
    // alert for the player if win 
    if (player.y < -45){
        alert('gratulations you won !');
         player.y = 400;
    }
    };

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){ // player function with the image 
    this.sprite = 'images/char-boy.png';
    this.x = 100;
    this.y = 400;
};



Player.prototype.update = function(dt){};
    var first = new Enemy(0, 10); //  first enemy 
    var first2 = new Enemy(0, 10); //  first enemy 
    var seconde = new Enemy(0, 120); //  secode enemy 
    var secondes = new Enemy(0, 120); // secode enemy
    var third = new Enemy(0, 220); // secode enemy
    var allEnemies = [first, first2, seconde, third, secondes]; // all eniemys are here forEach function 
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
Player.prototype.handleInput = function(s){
    switch (s){
        case 'left': // controle of the left side
             if(this.x > 0){
               this.x = this.x -100;
            } else {
                return;
                }
            break;
            
        case 'up':
            if(this.y > -50){
               this.y = this.y -100; // controle of the up side
            } else {
                return;
                }
            break;
            
        case 'right':
            if(this.x < 350){ // controle of the right side
               this.x = this.x +100; 
            } else {
                return;
                }
            break;
            
       case 'down':
            if(this.y < 400){ // controle of the down side
                this.y = this.y +100;
            } else {
                return;
                }
       
            }
};

Player.prototype.render = function(){
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
    
var player = new Player(); 

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'};

    player.handleInput(allowedKeys[e.keyCode]);
});
