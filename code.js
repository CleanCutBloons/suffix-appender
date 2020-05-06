var idleSuffixes = ["","K","M","B","T","AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ","AAA","ABB","ACC","ADD","AEE","AFF","AGG"];
var stdSuffixes = ["","K","M","B","Tr","qa","Qi","sx","Sp","Oc","No","De","UD","DD","TD","qD","QD","sD","SD","OD","ND","Vg","UV","DV","TV","qV","QV","sV","SV","OV","NV","Tg","UT","DT","TT","qT","QT","sT"];
var ogTTRSuffixes= ["","K","Million","Billion","Trillion","Jillion","Villion","Zillion","BaMillion","BaBillion","BaTrillion","BaJillion","BaVillion","BaZillion","CaMillion","CaBillion","CaTrillion","CaJillion","CaVillion","CaZillion","DaMillion","DaBillion","DaTrillion","DaJillion","DaVillion","DaZillion","FaMillion","FaBillion","FaTrillion","FaJillion","FaVillion","FaZillion","GaMillion","GaBillion","GaTrillion","GaJillion","GaVillion","GaZillion"];
var stdWords = ["","Thousand","Million","Billion","Trillion","Quadrillion","Quintillion","Sextillion","Septillion","Octillion","Nonillion","Decillion","Undecillion","Duodecillion","Tredecillion","Quattourdecillion","Quindecillion","Sedecillion","Septendecillion","Octodecillion","Novemdecillion","Vigillion","Unvigillion","Duovigillion","Tresvigillion","Quattuorvigillion","Quinquavigillion","Sesvigillion","Septemvigillion","Octovigillion","Novemvigillion","Trigintillion","Untrigintillion","Duotrigintillion","Trestrigintillion","Quattourtrigintillion","Quintrigintillion","Sextrigintillion"];
var arrayicize = function(number){
    var a = [];
    var digits = floor(log(number)/log(10));
    for(var i = 0; i < digits; i++){
        a[i] = 0;
    }
    for(var i = digits; i > -1; i--){
        var b = floor(number/pow(10, i));
        a[digits-i]=b;
        number = number-b*pow(10, i);
    }
    return a;
};
var convToSuffixForm = function(number, suff){
    var sign = number<0?-1:1;
    var arr = arrayicize(abs(number));
    var num = [arr[0], arr[1], arr[2], arr[3], arr[4]];
    var num2 = 0;
    if(abs(number)<1000){
        num[3]=0;
    }
    if(abs(number)<10000){
        num[4]=0;
        num2 = number;
        return num2;
    }
    if(abs(number)===pow(10,100)){
        return "A Googol"
    var p = pow(1000, round(log(abs(number))/log(1000)));
    if(abs(number / pow(1000, floor(log(abs(number))/log(1000)))) < 10){
        num.splice(3, 4);
        var numx = arr[0]+0.1*arr[1]+0.01*arr[2];
        num2 = floor(numx*100)/100;
    } else if(abs(number / pow(1000, floor(log(abs(number))/log(1000)))) < 100){
        num.splice(4, 4);
        var numx = 10*arr[0]+arr[1]+0.1*arr[2]+0.01*arr[3];
        num2 = floor(numx*100)/100;
    } else {
        var numx = 100*arr[0]+10*arr[1]+arr[2]+0.1*arr[3]+0.01*arr[4];
        num2 = floor(numx*100)/100;
    }
    var numtext = "";
    var suffindex = floor(log(abs(number))/log(1000));
    numtext = num2*sign + " " + suff[suffindex];
    return numtext;
};
