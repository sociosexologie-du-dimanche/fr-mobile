// contacts
(function(){
    var contact = document.getElementById('contact'),
        texte = "<p>Ce site a été réalisé dans le cadre du cours de visualisation de données de l'<a href='http://www.ensae.fr' target='_blank' style='margin-left:0px'>Ensae ParisTech</a>. Vous pouvez nous contacter en utilisant les liens suivants :</p>",
        contacts = [ {
                nom : 'Celle qui a les bonnes idées',
                lien : 'https://www.linkedin.com/in/marie-beigelman-955a8397'
            },{
                nom : 'Celui qui était ultramotivé depuis le début',
                lien : 'https://www.linkedin.com/in/ptanneau' ,
            },{
                nom : "Celle dont la maman parle très bien anglais",
                lien : 'https://fr.linkedin.com/in/kim-montalibet-1a01a265' ,
            },{
                nom : 'Celui qui aime bien coder la nuit',
                lien : 'https://fr.linkedin.com/in/romaindamian' ,
            }
        ];

    for (i = 0,n=contacts.length;i<n;i++){
        texte = texte + "<p><a href=" + contacts[i].lien + " target='_blank'>"+contacts[i].nom+"</a></p>"
    }

    contact.innerHTML = texte ;
})();

// ScrollTo
$(document).ready(function() {
				$('.scrollTo').click( function() { // Au clic sur un élément
					var page = $(this).attr('href'); // Page cible
					var speed = 900; // Durée de l'animation (en ms)
					$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
					return false;
				});
			});
