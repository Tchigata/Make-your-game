
const world = document.querySelector('#gameBoard');
const c = world.getContext('2d');

world.width = world.clientWidth;
world.height = world.clientHeight;

let frames=0;

const keys = {
    ArrowLeft: { pressed: false },
    ArrowRight: { pressed: false },
}


class Player{
    constructor(){
        this.width=32; // largeur du player
        this.height=32; // hauteur du player
        this.velocity={
            x:0, // vitesse de déplacement axe des X
            y:0 // vitesse de déplacement axe des y
        }
        this.position={
            x:(world.width-this.width)/2, // position du joueur par défaut centre
            y:world.height - this.height  // position du joueur par défaut centre

        }
    }
    draw(){
        // le joueur sera un carré blanc
        c.fillStyle = 'white';
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
    }


    update(){
        // A chaque mise à jour on dessine le joueur
        if(keys.ArrowLeft.pressed && this.position.x >= 0 ){
            this.velocity.x = -5;
        }
        else if(keys.ArrowRight.pressed && this.position.x <= world.width - this.width){
            this.velocity.x = 5;
        }
        else{ this.velocity.x=0;
        }
        this.position.x += this.velocity.x;
        this.draw(); 
    }


}

const player = new Player();


//boucle d'animation

const animationLoop = () => {
    requestAnimationFrame(animationLoop);
    c.clearRect(0,0,world.width, world.height);
    player.update();
    frames++;
}

animationLoop();

//pour utilser le clavier en js on fait appel aux evenments

addEventListener('keydown', ({key}) =>{

    switch(key){
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            console.log('gauche');
            break;
            case 'ArrowRight':
                keys.ArrowRight.pressed = true;
                console.log('droite');
                break;
    }
})


//Pour gérer le relachement de la touche

addEventListener('keyup', ({key}) => {
    switch(key) {
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            console.log('gauche');
            break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            console.log('droite');
            break;
       /* case ' ':
            player.shoot();
            console.log(missiles)*/
    }
})
