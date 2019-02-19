
// // switch
// switch (7) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;
//       default:
//       day = "nije pronasao dan";
//   } 
//   console.log(day);

//   for petlja
// for(i=1;i<=10;i++) {
//     console.log(i);
// }

// var j=0;
// while(j < 10) {
//     console.log(j);
//     j++;
// }
// //zadatak  prvi nacin
// for(i=0;i<=10;i++) {
//     if (i % 2 == 0){
//         console.log(i + ' je paran broj');
//     }
//     else{
//         console.log(i + ' je neparan broj');
//     }
// }

// zadatak drugi nacin
// var i = 0;
// while (i <= 10) {
//     if (i % 2 == 0){
//         console.log(i + ' je paran broj');
//     }else{
//         console.log(i + ' je neparan broj');
//     }
//     i++;
// }

// II zadatak

// var maxVrednost=parseInt(prompt('unesite vas maksimalni broj'));
// var rezultat=0;
// // console.log(maxVrednost);
// for(i=0; i<=maxVrednost; i+=5) {
//     rezultat = i + rezultat;
//     }
//    console.log(rezultat);

// III zadatak

// var maxVrednost = parseInt(prompt('unesite vas maksimalni broj'));
// var rezultat = 0;
// var t0 = performance.now();
// // console.log(maxVrednost);
// for (var i = 1; i <= maxVrednost; i++) {
//     if (i % 2 == 0) {
//         rezultat = i + rezultat;
//     }
// }
// var t1 = performance.now();
// console.log(rezultat);
// console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

// rezultat = 2;
// t0 = performance.now();
// if ((maxVrednost <2) || isNaN(maxVrednost)) {
//     rezultat=null;
// } else if (maxVrednost>3) {
//     for (i = 4; i <=maxVrednost; i+=2) {
//         rezultat += i;        
//     }
// }
// t1 = performance.now();


// console.log(rezultat);
// console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

// t0 = performance.now();
// if ((maxVrednost <2) || isNaN(maxVrednost)) {
//     rezultat=null;
// } else if (maxVrednost>3) {
//     var n;
//     if (maxVrednost % 2 ==0) {
//         n = (2+maxVrednost)/2 - 1;
//     } else {
//         n = (2+(maxVrednost-1))/2 - 1;
//     }
//     rezultat=n*(n+1);
// }
// t1 = performance.now();


// console.log(rezultat);
// console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");

// I zadatak
// var i = 7;
// var n = 0;
// while (i <= 48) {
//     if (i % 5 == 0){
//      n++;
//     }  
//     i++;
// }
//  console.log(n);

//  II zadatak
// var lice=(prompt('Da li ste pravno lice (da ili ne)'));
// var stanjeRacuna=parseInt(prompt('unesite stanje racuna'));
// var cenaTelefona=parseInt(prompt('unesite cenu telefona'));
// var x;
// var PDV = 1.2;
//     if (lice="da"){
//         x = stanjeRacuna/cenaTelefona;
//     document.getElementById('demo').innerHTML='Mozete kupiti ' + x + ' telefona';
// }else if (lice="ne"){
//     x= stanjeRacuna/(cenaTelefona*PDV);
//     document.getElementById('demo').innerHTML='Mozete kupiti ' + x + ' telefona';
// }
    
// var pdv;
// var lice=(prompt('Da li ste fizicko lice (da ili ne)',"da"));
// var stanje=parseInt(prompt('unesite stanje racuna'));
// var cena=parseInt(prompt('unesite cenu telefona'));
// var rezultat=0;
// if (lice=="da") {
//     pdv = 1.2;
// }else{
//     pdv = 1;
// }
    
// while(cena*pdv<=stanje){
//         rezultat++;
//         stanje-=cena*pdv;
//         console.log(stanje);
//         document.write('Kupljen je: ' + rezultat + "<br>");
//     }

// document.getElementById("racun").addEventListener("click", function () {
//     var kredit = parseInt(document.getElementById("kredit").value);
//     var ucesce = parseInt(document.getElementById("ucesce").value);
//     var rok = parseInt(document.getElementById("rok").value);
//     var kamata = parseInt(document.getElementById("kamata").value);
//     kamata = 1 + kamata / 100;
//     var rata = ((kredit - ucesce) / rok) * kamata;
//     document.getElementById("rata").value = rata;
   
// }); 
