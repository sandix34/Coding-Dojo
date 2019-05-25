/*
L'objectif de cet exercice est de créer une fonction qui traduit un nombre en chiffres Romains.

Par exemple pour `nombre = 12`, la fonction doit renvoyer `XII`.

> On utilisera les lettres `i`, `v`, `x`, `l`, `c`, `d`, `m` en majuscule pour construire les chiffres Romains.

Voici les règles de construction d'un chiffre Romain :
- Les nombres `1`, `2` et `3` s'écrivent respectivement `I`, `II` et `III`
- Le nombre `5` s'écrit `V`
- Le nombre `10` s'écrit `X`
- Le nombre `50` s'écrit `L`
- Le nombre `100` s'écrit `C`
- Le nombre `500` s'écrit `D`
- Le nombre `1000` s'écrit `M`
- Lorsqu'on écrit un nombre inférieur après un nombre supérieur, cela indique une addition. Par exemple le nombre `6` s'écrit `VI`. On fait l'addition `V` (5) + `I` (1) = 6.
- Lorsqu'on écrit un nombre inférieur juste avant un nombre supérieur, cela indique une soustraction. Par exemple le nombre `4` s'écrit `IV`. On fait la soustraction `V` (5) - `I` (1) = 4.
- Par conséquent, les dix premiers nombres s'écrivent `I`, `II`, `III`, `IV`, `V`, `VI`, `VII`, `VIII`, `IX`, `X`
- On peut associer autant de symboles qu'on veut pour écrire de plus grands nombres, par exemple :
  - `36` s'écrit `XXXVI`
  - `42` s'écrit `XLII`
  - `2448` s'écrit `MMCDXLVIII`.

 Exemples: 
- `1` => `I` 
- `2` => `II` 
- `3` => `III` 
- `4` => `IV` 
- `5` => `V` 
- `6` => `VI` 
- `9` => `IX` 
- `27` => `XXVII` 
- `48` => `XLVIII` 
- `59` => `LIX` 
- `93` => `XCIII` 
- `141` => `CXLI` 
- `163` => `CLXIII` 
- `163` => `CCCLXIX` 
- `402` => `CDII` 
- `575` => `DLXXV` 
- `911` => `CMXI` 
- `1024` => `MXXIV` 
- `2751` => `MMDCCLI` 
- `3000` => `MMM` 
*/

nombreRomain = (num) => {
        
    const roman = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
      }

    let result = ''
  
    for (let i in roman) {
        
      while (num >= roman[i]) {
         
        result = result + i;
        num = num - roman[i];
      }
    }
    return result
  }

/*
           TESTS
------------------------------ 
  ✓ 1 doit retourner I (7ms)
  ✓ 2 doit retourner II (3ms)
  ✓ 3 doit retourner III (3ms)
  ✓ 4 doit retourner IV (3ms)
  ✓ 5 doit retourner V (1ms)
  ✓ 6 doit retourner VI (2ms)
  ✓ 9 doit retourner IX (1ms)
  ✓ 27 doit retourner XXVII (2ms)
  ✓ 48 doit retourner XLVIII (2ms)
  ✓ 59 doit retourner LIX (1ms)
  ✓ 93 doit retourner XCIII (2ms)
  ✓ 141 doit retourner CXLI (3ms)
  ✓ 163 doit retourner CLXIII (2ms)
  ✓ 402 doit retourner CDII (1ms)
  ✓ 575 doit retourner DLXXV (1ms)
  ✓ 911 doit retourner CMXI (1ms)
  ✓ 1024 doit retourner MXXIV (2ms)
  ✓ 2751 doit retourner MMDCCLI (1ms)
  ✓ 3000 doit retourner MMM (1ms) 
*/ 
console.log(nombreRomain(1));
console.log(nombreRomain(2));
console.log(nombreRomain(3));
console.log(nombreRomain(4));
console.log(nombreRomain(5));
console.log(nombreRomain(6));
console.log(nombreRomain(9));
console.log(nombreRomain(27));
console.log(nombreRomain(48));
console.log(nombreRomain(59));
console.log(nombreRomain(93));
console.log(nombreRomain(141));
console.log(nombreRomain(163));
console.log(nombreRomain(402));
console.log(nombreRomain(575));
console.log(nombreRomain(911));
console.log(nombreRomain(1024));
console.log(nombreRomain(2751));
console.log(nombreRomain(3000));

