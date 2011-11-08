function validerPseudo(){
    $.get("pseudo.jsp",{
        pseudo: $("#inputPseudo").val()
    },function(XMLDoc) {
        if ( $(XMLDoc).find("statut").text() == "ERREUR" ) {
            // code d'erreur recu, message d'erreur
            $("#ErreurPseudo").hide();
            $("#ErreurPseudo").text("Le pseudo est déja utilisé ou est invalide.");
            $("#ErreurPseudo").slideDown(1200);
        }
        else if ($(XMLDoc).find("statut").text() == "OK"){
            //Code ok recu, on passe a la suite
            $("div.login").hide( 'highlight', null, 'fast', function() {
                $("div#listeJoueurs").show('highlight', null, 'fast', listeJoueurs);
            });
        }
        else {
            //code inconnu recu
            window.alert("Code inconnu reçu.");
        }
    });
}

function listeJoueurs() {
    $.get("liste-utilisateurs.jsp",null,function(XMLDoc) {
        var chaine = "";
        
        $(XMLDoc).find("liste").find("joueur").each(function(id){
            chaine+='<div class="elemListe"><span>'+$(this).find("pseudo").text()+"</span></div>"
        });
        $("div#listeJoueurs div").html(chaine);
    });
}

$(document).ready(function() {
    //Génération du plateau qui resté caché
    afficherPlateau ();
    //Placement des pions
    ajouterPions();
  
    //Affichage du formulaire pseudo
    $("div.login").delay(1000).slideDown(1200);
    $("#validPseudo").click(validerPseudo);
});



function dragstop (event, ui) {
    var posPlateau = $("#plateau").position();
    x = Math.round(((event.clientX - posPlateau.left)+25)/50)-1;
    y = Math.round(((event.clientY - posPlateau.top)+25)/50)-1;
    $("#case"+x+"-"+y).append(this);
    this.offsetLeft = 0;
    this.offsetTop = 0;
}

function dragged(event, ui) {
    var posPlateau = $("#plateau").position();
    x = Math.round(((event.pageX - posPlateau.left)+25)/50)-1;
    y = Math.round(((event.pageY - posPlateau.top)+25)/50)-1;
    //$("#case"+x+"-"+y).append(this);
    //this.offsetLeft = 0;
    //this.offsetTop = 0;
    /* $(".case").each(function () {
        $("#case"+x+"-"+y).delClass("hover")
    });*/
    
    $("#case"+x+"-"+y).addClass("hover");
}

function ajouterImage (caseX, caseY, image) {
    caseID = "#case"+caseX+"-"+caseY;
    $(caseID).append('<img src="'+image+'">');
    $(caseID).find("img").draggable({
        stop: dragstop, 
        drag: dragged, 
        revert: true, 
        revertDuration: 0
    });
}

function afficherPlateau () {
    plateau = document.getElementById('plateau');

    for ( y = 0 ; y < 8 ; y++ ) {
        for ( x = 0 ; x < 8 ; x++ ) {
            somme = x+y;
            if ( (somme-1)%2 ) {
                nouvelleCase = $('<div id="case'+x+'-'+y+'" class="case blanc"/>');
            } else {
                nouvelleCase = $('<div id="case'+x+'-'+y+'" class="case noir"/>');
            }

            $("#plateau").append(nouvelleCase);
        }
    }

}

function ajouterPions () {
    ajouterImage (0, 0, "img/Tour_noir.png");
    ajouterImage (1, 0, "img/Canasson_noir.png");
    ajouterImage (2, 0, "img/Fou_noir.png");
    ajouterImage (3, 0, "img/Dame_noir.png");
    ajouterImage (4, 0, "img/Roi_noir.png");
    ajouterImage (5, 0, "img/Fou_noir.png");
    ajouterImage (6, 0, "img/Canasson_noir.png");
    ajouterImage (7, 0, "img/Tour_noir.png");

    ajouterImage (0, 1, "img/Pion_noir.png");
    ajouterImage (1, 1, "img/Pion_noir.png");
    ajouterImage (2, 1, "img/Pion_noir.png");
    ajouterImage (3, 1, "img/Pion_noir.png");
    ajouterImage (4, 1, "img/Pion_noir.png");
    ajouterImage (5, 1, "img/Pion_noir.png");
    ajouterImage (6, 1, "img/Pion_noir.png");
    ajouterImage (7, 1, "img/Pion_noir.png");

    ajouterImage (0, 7, "img/Tour_blanc.png");
    ajouterImage (1, 7, "img/Canasson_blanc.png");
    ajouterImage (2, 7, "img/Fou_blanc.png");
    ajouterImage (4, 7, "img/Dame_blanc.png");
    ajouterImage (3, 7, "img/Roi_blanc.png");
    ajouterImage (5, 7, "img/Fou_blanc.png");
    ajouterImage (6, 7, "img/Canasson_blanc.png");
    ajouterImage (7, 7, "img/Tour_blanc.png");

    ajouterImage (0, 6, "img/Pion_blanc.png");
    ajouterImage (1, 6, "img/Pion_blanc.png");
    ajouterImage (2, 6, "img/Pion_blanc.png");
    ajouterImage (3, 6, "img/Pion_blanc.png");
    ajouterImage (4, 6, "img/Pion_blanc.png");
    ajouterImage (5, 6, "img/Pion_blanc.png");
    ajouterImage (6, 6, "img/Pion_blanc.png");
    ajouterImage (7, 6, "img/Pion_blanc.png");

}



