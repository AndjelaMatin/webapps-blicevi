var str="Javascript i nije toliko los";
function vrati(str){
    var str2="";
    for(var i=1;i<str.length;i++)
    if(i>=str.length/2)
    str2+=str[i];
    return str2;
}
console.log(vrati(str));