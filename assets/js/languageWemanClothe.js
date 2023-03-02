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
   document.getElementById("title").innerHTML = "ملابس حريمى";
  }
  else if(language == "english"){
   document.getElementById("title").innerHTML = "Weman Clothing";
 }
}
}
onlaod = new Translate();
