/*
Étant donné les longueurs des 3 côtés d'un triangle, votre fonction devra renvoyer si celui-ci est `équilatéral`, `isocèle`, `scalène` ou `impossible`.

- Un triangle est `équilatéral` lorsque ses 3 côtés sont égaux
- Un triangle est `isocèle` lorsque 2 de ses côtés sont égaux
- Un triangle est `scalène` lorsqu'aucun de ses côtés n'est égal à un autre côté
- Un triangle est `impossible` lorsque la somme de deux de ses côtés est strictement inférieure au troisième côté

Exemples:
- (2, 3, 2) est un triangle `isocèle`
- (7, 7, 7) est un triangle `équilatéral`
- (3, 5, 6) est un triangle `scalène`
- (2, 8, 5) est un triangle `impossible` car 2 + 5 < 8 !
*/

 
triangleType = (cote1, cote2, cote3) => {

    if (cote1 + cote2 < cote3 || cote2 + cote3 < cote1 || cote1 + cote3 < cote2)   {
      return "impossible";
  
    }else if ( cote1 === cote2 && cote2 === cote3 )  {
      return "équilatéral";
    }
    else if (cote1 === cote2 || cote1 === cote3 || cote2 === cote3 ) {
        return "isocèle";
        
    }else if (cote1 != cote2 && cote2 != cote3 && cote1 != cote3 ){ 
        return "scalène";
    } 
  }

  /*
             TESTS
    ------------------------------ 
  ✓ (2, 2, 2) est un triangle équilatéral (5ms)
  ✓ (10, 10, 10) est un triangle équilatéral
  ✓ (3, 4, 4) est un triangle isocèle
  ✓ (4, 3, 4) est un triangle isocèle
  ✓ (4, 4, 3) est un triangle isocèle
  ✓ (10, 10, 2) est un triangle isocèle (1ms)
  ✓ (3, 4, 5) est un triangle scalène
  ✓ (10, 11, 12) est un triangle scalène
  ✓ (5, 4, 2) est un triangle scalène (1ms)
  ✓ (1, 1, 3) n'est pas un triangle, c'est impossible !
  ✓ (7, 3, 2) n'est pas un triangle, c'est impossible !
  ✓ (10, 1, 3) n'est pas un triangle, c'est impossible ! (1ms)
  */

  console.log(triangleType(2, 2, 2));
  console.log(triangleType(10, 10, 10));
  console.log(triangleType(3, 4, 4));
  console.log(triangleType(4, 3, 4));
  console.log(triangleType(4, 4, 3));
  console.log(triangleType(10, 10, 2));
  console.log(triangleType(3, 4, 5));
  console.log(triangleType(10, 11, 12));
  console.log(triangleType(5, 4, 2));
  console.log(triangleType(1, 1, 3));
  console.log(triangleType(7, 3, 2));
  console.log(triangleType(10, 1, 3));
  