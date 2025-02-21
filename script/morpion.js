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
 * Fonction qui initialise le jeu du morpion avec pour Jouer un coup
 * Jouer un coup
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
    let dom_all_p = document.getElementsByTagName("p");
    let dom_all_cells = document.getElementsByClassName("cell");

    let newP = document.createElement("p");
    

    // do{
        // quand c'est au joueur  de jouer
        if(isPlayer1 === true){
            console.log("Joueur 1 joue");
            
            // Mettre à jour le texteArea
            for(let i = dom_all_p.length - 1; i >= 0; i--){
                    dom_all_p[i].remove();               
            }
            newP.innerText = "Joueur 1, A toi de jouer !";
            dom_textArea.appendChild(newP);
            console.log(dom_all_p);
            dom_textArea.setAttribute("class", "playeur1");
            
            // Rendre le plateau cliquable
            for (let i = 0; i < dom_all_cells.length; i++){
                dom_all_cells[i].setAttribute("onclick", "detectCell(this)");
                console.log(dom_all_cells[i]);

               
            }
            console.log(dom_all_cells);
            
            
        }
        // Si c'est au joueur 2 de jouer
        else{

        }
        // isPlayer1 = !isPlayer1;

    // } while(hasWon === false);

    console.log(plateauDeJeu);
    
}

/****
 * Fonction qui initialise le plateau de jeu du morpion avec ses valeurs
 * de départ
 * @param {Array} plateauDeJeu
 */
function detectCell(himSelf){
    console.log("Houra !");
    
}


// Vériffier une victoire (qui tourne un booléen)

// Changer le texte du bouton jouer (pour mettre restart)

// En cas de victoire se faire plaisir en CSS

//  Alterner entre un thème bleu ou rouge selon le joueur qui joue
