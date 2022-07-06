

/**
 * Liste de méthode afin d'utiliser la liste de logins et votes
 *
 * @author Dylan GIRAULT && Shana LEFEVRE
 * @date 22 mars 2022
 * @version 1.0 
 * 
 */


/**
 * 
 * 
 * 
 **/
function add_element_to_select() {
  var select = document.getElementById("logins");

  for(var login in logins) {
    var el = document.createElement("option");
    el.textContent = logins[login];
    el.value = login;
    select.appendChild(el);
  }
}

/**
 * 
 * 
 * 
 **/
function moyenne(p_individu) {

}


/**
 *Récupère toutes les personnes (votant et non votant) avec leur nom et prénom dans un même string
 *@return renvoi un String[]
 *
 **/
function list_votant() {
	var nomVotant = new Array();
	
	for( var votant in votes) {
		nomVotant.push(logins[votant]);
	}
	
	return nomVotant;
};

/**
 *
 *
 *@return renvoi un String["matiere"] avec une liste de matiere 
 *
 **/
function recupGET() {
	var variable_to_value = new Array();
  variable_to_value["matiere"] = new Array();

  var table = new Array();
	
	var vf = location.search.substring(1).split("&");
	
	for(var i=0; i<vf.length; i++) {
		table[vf[i].substring(0, vf[i].indexOf("="))] = vf[i].substring(vf[i].indexOf("=")+1, vf[i].length);
	}

  for(var v in table) {
    if(v == "login") {
        variable_to_value["nom"] = table[v];
    }
    else if( matieres.includes(v)) {
        variable_to_value["matiere"].push(v);
    }
  }
	
	return variable_to_value;
	
}



/**
 *Récupère le nombre de vote pour chaque matière de la personne donné en argument
 *@param p_name : Nom de la personne
 *@return renvoi un Integer[] avec comme index les matières 
 *
 *@example :
 * var personne = numberVotePerSubject("amrim");
 * personne["ACDA"] == 4;
 * personne["ANG"] == 2;
 **/
function numberVotePerSubject(p_name) {
	var individu = new Array(matieres.length);
	
		
	matieres.forEach(matiere => individu[matiere] = 0);
	
	for(var nom_votes in votes) {
		for(var matiere_votes in votes[nom_votes]) {
			if(votes[nom_votes][matiere_votes].includes(p_name)) {
				individu[matiere_votes]++;
			}
		}
	}
	
	return individu;
};


/**
 *Récupère le nombre de vote une matière donné de la personne donné en argument
 *@param p_name : Nom de la personne
 *@param p_subject : Nom de la matière
 *@return renvoi un Integer
 *
 *@example :
 * var personne = numberVote("amrim", "ACDA");
 * personne == 4;
 **/
function numberVote(p_name, p_subject) {
	return numberVotePerSubject(p_name)[p_subject];
};

/**
 *Récupère les noms des personnes votées par une personne donnée en argument pour une matière donné
 *@param p_name : Nom de la personne
 *@param p_subject_list : Liste de nom de matières
 *@return renvoi un String[]
 *
 *@example :
 * var personne = voteOf("benrejed", "ACDA");
 * personne.includes("ahres");
 * personne.includes("birck");
 **/
function numberVotes(p_name, p_subject_list) {
	var somme = 0;
	
	p_subject_list.forEach(matiere => somme += numberVote(p_name, matiere));
	return somme;
};


/**
 *Récupère la liste des personnes votées pour chaque matière par une personne donnée en argument
 *@param p_name : Nom de la personne
 *@param p_subject : Nom de la matière
 *@return renvoi un String[][] avec comme premier index les matières 
 *
 *@example :
 * var personne = voteOfPerSubject("benrejed");
 * personne["ACDA"].includes("ahres");
 * personne["ACDA"].includes("birck");
 * personne["ANG"].includes("ahres");
 **/
function voteOfPerSubject(p_name) {
	return votes[p_name];
};

/**
 *Récupère les noms des personnes votées par une personne donnée en argument pour une matière donné
 *@param p_name : Nom de la personne
 *@param p_subject : Nom de la matière
 *@return renvoi un String[]
 *
 *@example :
 * var personne = voteOf("benrejed", "ACDA");
 * personne.includes("ahres");
 * personne.includes("birck");
 **/
function voteOf(p_name, p_matiere) {
	return voteOfPerSubject(p_name)[p_matiere];
};




