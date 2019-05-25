/*
La conjecture de Syracuse ou le problème 3x + 1 peut être résumé comme ceci :

Prenez un nombre entier positif `n`. Si `n` est pair, divisez les par 2 pour obtenir `n / 2`. Si `n` est impair, multipliez-le par 3 et ajoutez 1 pour obtenir `(3 * n) + 1`.

Répétez ce processus indéfiniment. La conjecture établit que peu importe le nombre avec lequel vous commencez, vous finirez toujours par atteindre 1.

Étant donné un nombre `n`, retournez le nombre d'étapes nécessaires pour atteindre 1.

Exemples: 

On commence avec `n = 12`, les étapes seraient les suivantes :

0. 12
1. 6
2. 3
3. 10
4. 5
5. 16
6. 8
7. 4
8. 2
9. 1

On atteint 1 en 9 étapes. Donc pour `n = 12`, la fonction doit retourner `9`.
 
*/

executionsNumbers = (n) => {
  
    let c = 0;
  
    while (n > 1) {
     n % 2 === 0 ? n = n / 2 : n = (3 * n + 1) ;
     c++;
    }
    return c;
     
  }

/*
           TESTS
------------------------------           
  ✓ Zéro étape pour n = 1 (3ms)
  ✓ 4 étapes pour n = 16 (1ms)
  ✓ 9 étapes pour n = 12
  ✓ 152 étapes pour n = 1000000
*/

console.log(executionsNumbers(1));
console.log(executionsNumbers(16));
console.log(executionsNumbers(12));
console.log(executionsNumbers(1000000));
