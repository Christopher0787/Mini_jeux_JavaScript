console.log("Entrée dans morpion.js");
/*******************************************************************************************************************************************
 *                          Déclaration des fonction
 ******************************************************************************************************************************************/


/*******************************************************************************************************************************************
 * Fonction init () qui initialise le début de la partie
 ******************************************************************************************************************************************/function init(){
    console.log("Entrée dans la fonction init()");
    //  Déclaration des variable / Constantes
    let gameBoard = new Array();
    
    
    // Initialiser le plateau de jeu avec les valeur de départ
    initGameBoard(gameBoard);
    console.log(gameBoard);
    // Demender aux joueur de jouer
    playOnce(gameBoard);
}

/****
 * Fonction qui initialise le plateau de jeu du morpion avec ses valeurs
 * de départ
 * @param {Array} plateauDeJeu
 */
function initGameBoard(plateauDeJeu){
    const VIDE = " ";
    const TAILLE = 9;

    for(let i = 0; i < TAILLE; i++){
        plateauDeJeu[i] = VIDE;
    }


}
/****
 * Fonction qui initialise le plateau de jeu du morpion avec ses valeurs
 * de départ
 * @param {Array} plateauDeJeu
 */
function playOnce(plateauDeJeu){
    console.log("Entrée dans la fonction playOnce()");
    // Déclaration des variable
    let hasWon = false;
    let isPlayer1 = true;
    // Déclaration des variable pour le DOM
    let dom_textArea = document.getElementById("textArea");

    do{
        // quand c'est au joueur  de jouer
        if(isPlayer1 === true){

        }
        // Si c'est au joueur 2 de jouer
        else{

        }
        isPlayer1 = !isPlayer1;

    } while(hasWon === false);


    console.log(plateauDeJeu);
    
}

// Jouer un coup


// Vériffier une victoire (qui tourne un booléen)


// Changer le texte du bouton jouer (pour mettre restart)


// En cas de victoire se faire plaisir en CSS


//  Alterner entre un thème bleu ou rouge selon le joueur qui joue
