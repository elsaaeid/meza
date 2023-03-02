//home language 

class Translate{
 constructor(){
 document.getElementById("arabic").addEventListener("click",()=>{
 this.translate("arabic");
});
 document.getElementById("english").addEventListener("click",()=>{
 this.translate("english");
});
this.translate();
}
translate(language){
  if(language == "arabic"){
   document.getElementById("title").innerHTML = "الرائسية";

  }
  else if(language == "english"){
   document.getElementById("title").innerHTML = "Home";
 }
}
}
onlaod = new Translate();
