const string1 = "jamaludeen"
const string2 = "sakthi"

var count1=0,
    count2=0;

var vowels = "aeiou"

for(var i=0;i<string1.length;i++){
    if(vowels.indexOf(string1[i])>-1){
        count1++;
    }
}
for(var i=0;i<string2.length;i++){
    if(vowels.indexOf(string2[i])>-1){
        count2++;
    }
}
if(count1>count2){
    console.log(string1,"has higher vowels")
}else if(count2>count1){
    console.log(string2,"has higher vowels")
}else {
   Console.log(string1,string2,"has equal vowels);