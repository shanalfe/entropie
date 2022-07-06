/** 
 * Fichier permettant de créer le graph
 * @author Dylan GIRAULT & Shana LEFEVRE
 */

var ctx = document.getElementById('graph1').getContext('2d')
var data = {
    labels: ['label 1', 'label 2', 'label 3', 'label 4'], //Légende axe abscisses
    datasets: [ 
        {
            label: 'Nombre animaux',
            //borderColor: '#000000',
            backgroundColor: '#000000',
            data: [10, 30, 20, -1]

        },

        {
            label: 'Nombre de personnes',
            //borderColor: '#FF0000',
            backgroundColor: '#FF0000',
            data: [45, 10, 21 -15]

        }
    ]
}

var options 

var config = {
    type: 'bar',
    //type: 'line',
    data: data,
    options: options
}

/*Création graph*/
var graph1 = new Chart(ctx, config)
