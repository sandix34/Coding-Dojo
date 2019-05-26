/*
Convertissez une phrase donnée en son acronyme.

 Exemples
- Pour la phrase `JavaScript est vraiment top`, ça doit renvoyer `JEVT`
- Pour la phrase `toute une phrase en minuscule`, ça doit renvoyer `TUPEM`
- Pour la phrase `TU PEUX AUSSI TOUT ECRIRE EN MAJUSCULE`, ça doit renvoyer `TPATEEM`
- Pour la phrase `On PeUT AusSi MixEr LeS DEUx`, ça doit renvoyer `OPAMLD`
- Pour la phrase `Dépêche toi j'ai rendez-vous`, ça doit renvoyer `DTJR`
- Pour la phrase `Les "guillemets" vont faire planter ton code`, ça doit renvoyer `LGVFPTC`
*/

acronyme = (phrase) => {

    // Nettoyer la chaîne de carractère en enlevant les guillemets
    let phraseNet = phrase.replace(/\"/g,'');  

    // diviser la chaîne de caractères et obtenir un tableau de sous-chaîne
   let phraseSplit = phraseNet.split(" ");

   // récupérer la première lettre de chaque sous-chaîne
   let firstLetters =  phraseSplit.map( el => (el.charAt(0)));

   // joindre les lettres et les transformer en majuscule
   let acronyme = firstLetters.join('').toUpperCase();

   return acronyme;
 
}

/*
           TESTS
------------------------------           
  ✓ retourne JEVT pour "JavaScript est vraiment top" (5ms)
  ✓ retourne TUPEM pour "toute une phrase en minuscule" (1ms)
  ✓ retourne TPATEEM pour "TU PEUX AUSSI TOUT ECRIRE EN MAJUSCULE"
  ✓ retourne OPAMLD pour "On PeUT AusSi MixEr LeS DEUx" (4ms)
  ✓ retourne DTJR pour "Dépêche toi j'ai rendez-vous"
  ✓ retourne LGVFPTC pour "Les "guillemets" vont faire planter ton code" (1ms)
*/
console.log(acronyme("JavaScript est vraiment top"));
console.log(acronyme("toute une phrase en minuscule"));
console.log(acronyme("TU PEUX AUSSI TOUT ECRIRE EN MAJUSCULE"));
console.log(acronyme("On PeUT AusSi MixEr LeS DEUx"));
console.log(acronyme("Dépêche toi j'ai rendez-vous"));
console.log(acronyme('Les "guillemets" vont faire planter ton code'));
