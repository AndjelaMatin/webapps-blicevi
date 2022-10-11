a=[321,63,"Marmelada",4,"Kruh",1,1234,"Tanjur",50];
function sortiraj(a){
    a.sort(function(a, b){return a - b});
return a;
}
console.log(sortiraj(a));