Le projet des étudiants de IS3 consistait à créer un moteur de recherche des compétences dans leur promotion. Les étudiants ont choisi, dans une dizaine de matières, ceux de leurs camarades qui leur semblent compétents dans ce domaine. Vous pouvez récupérer le résultat des votes au format JSON grâce à ce lien ou l’importer en Javascript :

<script src="http://www.iut-fbleau.fr/projet/maths/?f=votes.js"></script>
Une liste de tous les étudiants concernés est disponible ici, ou bien par

<script src="http://www.iut-fbleau.fr/projet/maths/?f=logins.js"></script>
Votre travail consiste à évaluer l’adéquation de votes individuels au vote général. Votre programme (site web) devra calculer et afficher un score de «proximité » du vote de chaque étudiant avec le vote global, dans une ou plusieurs matières choisies par l’utilisateur. Par exemple, un étudiant qui a voté pour tout le monde devrait avoir un score de proximité assez faible, sauf si toute la promotion a voté comme lui.

Une candidate naturelle au rôle du score est l’entropie relative, mais vous êtes encouragé à proposer votre propre méthode.

Pour évaluer visuellement la pertinence de ce score, vous devrez afficher, sur la page de chaque étudiant, les distributions des votes, général et individuel.

Le travail peut se faire en binôme. Chaque binôme devra fournir un fichier archive avec les sources commentées et les exécutables. Pour simplifier l’évaluation, seuls HTML/Javascript/PHP sont admis comme langages de programmation.
