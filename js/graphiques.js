// Cathos
(function(){
    // test 

var imagesCathos = document.getElementById('imagesCathos'),     // Récupération des div contenant les iamges
    imagesAthees = document.getElementById('imagesAthees'),
    chiffre = document.getElementById('chiffreInfoCathos'),     // Récupération de la div contenant les chiffres
    // Remplissage variables de texte contenant les chiffres
    texteDepart = "Combien de catholiques ont déjà eu une relation homosexuelle ? Combien de non-religieux ?",

    // HTML à insérer dans les div span pour avoir l'image
    cathoOui = "<img src='Images/cathoOui.png' width='15p' height='30'/>" ,
    cathoNon = "<img src='Images/cathoNon.png' width='15p' height='30'/>",
    atheeOui = "<img src='Images/atheeOui.png' width='15p' height='30'/>" ,
    atheeNon = "<img src='Images/atheeNon.png' width='15p' height='30'/>";
    
var petitBloc , autreReligion ; // Variables utilisées dans la boucle initialisées ici

// On va faire la même chose pour les deux lignes de bonhommes, donc on fait une fonction
var alignerImages = function (religion,imageOui,imageNon,nombreOui) {
    
    // Les deux boucles for ajoutent en ligne les images en utilisant des span
    for (i=0;i<nombreOui;i++) {
        petitBloc = document.createElement('span') ;
        petitBloc.setAttribute('id','span'+i) ;
        petitBloc.setAttribute('class','oui') ;
        religion.appendChild(petitBloc) ;
        petitBloc.innerHTML = imageOui ;
    }

    for (i=0;i<20-nombreOui;i++) {
        petitBloc = document.createElement('span') ;
        petitBloc.setAttribute('id','span'+i) ;
        petitBloc.setAttribute('class','non') ;
        religion.appendChild(petitBloc) ;
        petitBloc.innerHTML = imageNon ;
    }
}

chiffre.innerHTML = texteDepart ; // remplissage par le texte de départ à l'ouverture de la page

alignerImages(imagesCathos,cathoOui,cathoNon,3) ;
alignerImages(imagesAthees,atheeOui,atheeNon,4) ;

})();

// Couple
    $(function() {
  $('#couple').highcharts({
    chart: {
      type: 'bar',
    backgroundColor : null
    },
    colors: ['#CBA148', '#107671', '#004C59'],
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: ['En couple cohabitant', 'En couple non cohabitant', 'Célibataire ayant déjà été en couple', 'Célibataire n\'ayant jamais été en couple']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Pourcentage (%)'
      }
    },
    tooltip: {
      valueSuffix: '%'
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Pas du tout satisfait',
      data: [5, 3, 19, 16]

    }, {
      name: 'Peu satisfait',
      data: [16, 11, 29, 29]
    }]
  });
});


// Highcharts1
    $(function () {
    $('#highchart1').highcharts({
        data: {
            columns: [
                [null, 'Non-religieux', 'Cathloiques non pratiquants', 'Autres religions','Catholiques pratiquants'], // categories
                ["N'ont jamais sucé ou léché le sexe de leur partenaire", 11, 12, 21,23], // first series
                ["N'ont jamais sodomisé leur partenaire", 45, 47, 45,63] // second series
            ]
        },
        colors : ['#0092B9','#004C59'],
        chart: {
            type: 'column',
            backgroundColor : null
        },
        title: {
            text: ''
        },
        yAxis: {
            allowDecimals: false,
            title :'',
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ' :</b><br/>' +
                    this.point.y + '% parmi les ' + this.point.name.toLowerCase();
            }
        },

    });
});

// Nombre
    $(function () {
    $('#nombre').highcharts({
        chart: {
            type: 'bar',
            backgroundColor : null
        },
             		colors: ['#004C59','#107671'],

        title: {
            text: ''
        },
        xAxis: {
            categories: ['1','Entre 2 et 3','Entre 4 et 5','Entre 6 et10','Plus de 10']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Pourcentage (%)'
            }
        },
        tooltip: {
            valueSuffix: '%'
            },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [ {
            name: 'Pas du tout satisfait',
            data: [7,10,9,9,9]
     
        },
        {
            name: 'Peu satisfait',
            data: [18,18,21,20,20]
        }]
    });
});

//Polsodo
    $(function () {
    $('#polsodo').highcharts({ 
        chart : {
            backgroundColor : null
        },
        colors: ['#CBA148', '#107671', '#004C59'],
        title: {
            text: '',
            x: -20 //center
        },
       
        xAxis: {
            categories: ['Front de Gauche', 'PS','Europe Ecologie les Verts','Modem-UDI','UMP','Front National']
        },
        yAxis: {
            title: {
                text: 'Pourcentage (%)'
            },
             tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ' :</b><br/>' +
                    this.point.y + '% parmi les ' + this.point.name.toLowerCase();
            }
        },
        
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0,
            width : 300 
        },
        series: [{
            name: 'Ont déjà eu une relation sexuelle avec <br/>plus de deux personnes en même temps',
            data: [22, 17, 16, 13, 14, 21],
        }, {
            name: 'Ont déjà eu une relation homosexuelle',
            data: [16, 15, 18, 11, 10, 15],
        }, {
            name: 'Ont déjà pratiqué la pénétration anale',
            data: [55, 53, 51, 49, 50, 57]
            
        }]
        
        
    });
});

// Treemap
    $(function () {
    $('#treemap').highcharts({
    		chart : {
        	   type : 'treemap',
                backgroundColor : null
            },
    		plotOptions : {
        	treemap : {
                allowDrillToNode : false,
                layoutAlgorithm : 'stripes',
                tooltip : {
                    pointFormat : '<b>{point.name}</b>'
                }
            }
        },
        series: [{
        	levels: [{
                level: 1,
                layoutAlgorithm : 'stripes',
                layoutStartingDirection : 'horizontal',
                borderWidth : 5,
                dataLabels: {
                align : 'left',
                    enabled: true,
                    style: {
                        fontSize: '15px',
                        fontWeight: 'bold',
                        color : '#FFFFFF'
                    }
                }
            },{
            		level : 2,
                layoutStartingDirection : 'horizontal',
                dataLabels :{
                align : 'left',
                	enabled : true,
                  style : {
                  	fontSize : '13px'
                   },
                  color : '#FFFFFF'
                }
            },{
            		level : 3,
                layoutStartingDirection : "vertical",
                dataLabels : {
                	enabled : true,
									color : 'rgb(230,230,230)',
                  verticalAlign : 'bottom',
                  align : 'right'
                }
            }],
            data: [{
                id: 'D',
                name: 'Supérieur au bac',
            }, {
                id: 'R',
                name: 'Inférieur au bac',
            },{
            		id: 'DH',
                name: 'Hommes',
                parent : 'D'
            }, {
            		id: 'DF',
                name: 'Femmes',
                parent : 'D'
            },{
                name: 'Souvent : 48%',
                parent: 'DH',
                color : '#107671',
                value: 78.7,
                  dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 13%',
                parent: 'DH',
                color : '#004C59',
                value : 21.3,
                dataLabels : {
                format : "Jamais"
                }
            },{
            		name : 'Souvent : 36%',
                parent: 'DF',
                color : '#CBA148',
                value : 72,
                  dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 14%',
                parent : 'DF',
                color : '#B67823',
                value : 28,
                dataLabels : {
                format : "Jamais"
                }
            },{
            		id: 'RH',
                name: 'Hommes',
                parent : 'R',
            }, {
                id: 'RF',
                name: 'Femmes',
                parent : 'R',
            },{
                name: 'Souvent : 50%',
                parent: 'RH',
  							color: '#107671',
                value: 84.7,
                  dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 9%',
                parent: 'RH',   
                color : '#004C59',
                value : 15.3,
                dataLabels : {
                format : "Jamais"
                }
            },{
            		name : 'Souvent : 29%',
                parent: 'RF',
                value : 61.7,
                color : '#CBA148',
                dataLabels :{
                format : "Souvent"
                }
            },{
            		name : 'Jamais : 18%',
                parent : 'RF',
                value : 38.3,
                color : '#B67823',
                dataLabels : {
                format : "Jamais"
                }
            }],

        }],
        title: {
            text: ''
        }
    });
});

// vieillir
    $(function () {
    $('#vieillir').highcharts({
        chart: {
            type: 'area',
            backgroundColor : null
        },
        colors:['rgba(248,215,201,1)','rgba(0,146,185,0.3)','rgba(203,161,72,0.5)'],
        legend : {
        	width : 50,
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Moins de 35 ans','Entre 35 et 50 ans','Plus de 50 ans']
        },
        yAxis: {
            title: {
                text: "Part de la génération d'âge"
            },
            floor : 20
        },
        tooltip: {
            pointFormat: '{series.name} : <b>{point.y}%</b><br/>'
        },
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Au moins deux fois <br/>par semaine',
            data: [33,31,21]
        },{
            name: 'Environ une fois <br/>par semaine',
            data: [46,46,46],
        },{
            name: 'Jamais',
            data: [21,23,33]
        }]
    });
});