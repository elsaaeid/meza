function Assignment() {
    document.getElementById("arabic").style.cssFloat = "left";
   document.getElementById("english").style.cssFloat = "left";
   document.getElementById("arabic").innerHTML = "Arabic";
   document.getElementById("english").innerHTML = "English";
   document.getElementById("logo").innerHTML = "Meza";
   document.getElementById("home").innerHTML = "Home";
   document.getElementById("account").innerHTML = "personal account";
   document.getElementById("search").innerHTML = "search";
   document.getElementById("sections").innerHTML = "sections";
   document.getElementById("super").innerHTML = "Super Market";
   document.getElementById("superOne").innerHTML = "Detergents";
   document.getElementById("superTwo").innerHTML = "oil, ghee";
   document.getElementById("superThree").innerHTML = "tea, sugar";
   document.getElementById("clothing").innerHTML = "Clothing";
   document.getElementById("clothingOne").innerHTML = "men clothing";
   document.getElementById("clothingTwo").innerHTML = "weman clothing";
   document.getElementById("clothingThree").innerHTML = "kids clothing";
   document.getElementById("smart").innerHTML = "Smart Devices";
   document.getElementById("smartOne").innerHTML = "smart watches";
   document.getElementById("smartTwo").innerHTML = "smart mobiles";
   document.getElementById("smartThree").innerHTML = "smart labtop";
   document.getElementById("accessories").innerHTML = "Accessories";
   document.getElementById("signUp").innerHTML = "Sign Up";
   document.getElementById("logIn").innerHTML = "Log In";
   document.getElementById("list").innerHTML = "List";
   document.getElementById("mySearch").placeholder = "Search..";
   document.getElementById("item1").innerHTML = "men clothing";
   document.getElementById("item2").innerHTML = "weman clothing";
   document.getElementById("item3").innerHTML = "accessories";
   document.getElementById("item4").innerHTML = "smart mobiles";
   document.getElementById("item5").innerHTML = "smart watches";
   document.getElementById("item6").innerHTML = "oil and ghee";
   document.getElementById("item7").innerHTML = "rice";
   document.getElementById("item8").innerHTML = "detergents";
   document.getElementById("btn-buy").innerHTML = "Buy Now";
   document.getElementById("total-title").innerHTML = "Total";
    document.getElementById("arabic").style.cssFloat = "left";
   document.getElementById("english").style.cssFloat = "left";
   document.getElementById("arabic").innerHTML = "Arabic";
   document.getElementById("english").innerHTML = "English";
   document.getElementById("logo").innerHTML = "Meza";
   document.getElementById("home").innerHTML = "Home";
   document.getElementById("account").innerHTML = "personal account";
   document.getElementById("search").innerHTML = "search";
   document.getElementById("sections").innerHTML = "sections";
   document.getElementById("super").innerHTML = "Super Market";
   document.getElementById("superOne").innerHTML = "Detergents";
   document.getElementById("superTwo").innerHTML = "oil, ghee";
   document.getElementById("superThree").innerHTML = "tea, sugar";
   document.getElementById("clothing").innerHTML = "Clothing";
   document.getElementById("clothingOne").innerHTML = "men clothing";
   document.getElementById("clothingTwo").innerHTML = "weman clothing";
   document.getElementById("clothingThree").innerHTML = "kids clothing";
   document.getElementById("smart").innerHTML = "Smart Devices";
   document.getElementById("smartOne").innerHTML = "smart watches";
   document.getElementById("smartTwo").innerHTML = "smart mobiles";
   document.getElementById("smartThree").innerHTML = "smart labtop";
   document.getElementById("accessories").innerHTML = "Accessories";
   document.getElementById("signUp").innerHTML = "Sign Up";
   document.getElementById("logIn").innerHTML = "Log In";
   document.getElementById("list").innerHTML = "List";
   document.getElementById("mySearch").placeholder = "Search..";
   document.getElementById("item1").innerHTML = "men clothing";
   document.getElementById("item2").innerHTML = "weman clothing";
   document.getElementById("item3").innerHTML = "accessories";
   document.getElementById("item4").innerHTML = "smart mobiles";
   document.getElementById("item5").innerHTML = "smart watches";
   document.getElementById("item6").innerHTML = "oil and ghee";
   document.getElementById("item7").innerHTML = "rice";
   document.getElementById("item8").innerHTML = "detergents";
   document.getElementById("btn-buy").innerHTML = "Buy Now";
   document.getElementById("total-title").innerHTML = "Total";
   document.getElementById("cart-title").innerHTML = "Cart";

};
   Assignment();
   
class TranslateIndex{
 constructor(){

 document.getElementById("arabic").addEventListener("click",()=>{
 this.translateIndex("arabic");
});
 document.getElementById("english").addEventListener("click",()=>{
 this.translateIndex("english");
});
this.translateIndex();
}
translateIndex(language){
  if(language == "arabic"){
   document.getElementById("arabic").style.cssFloat = "right";
   document.getElementById("english").style.cssFloat = "right";
   document.getElementById("arabic").innerHTML = "????????";
   document.getElementById("english").innerHTML = "??????????????";
   document.getElementById("logo").innerHTML = "????????";
   document.getElementById("home").innerHTML = "????????????????";
   document.getElementById("account").innerHTML = "???????????? ????????????";
   document.getElementById("search").innerHTML = "??????";
   document.getElementById("sections").innerHTML = "??????????";
   document.getElementById("super").innerHTML = "???????? ??????????";
   document.getElementById("superOne").innerHTML = "????????????";
   document.getElementById("superTwo").innerHTML = "?????? ,??????";
   document.getElementById("superThree").innerHTML = "??????,??????";
   document.getElementById("clothing").innerHTML = "??????????????";
   document.getElementById("clothingOne").innerHTML = "?????????? ??????????";
   document.getElementById("clothingTwo").innerHTML = "?????????? ??????????";
   document.getElementById("clothingThree").innerHTML = "?????????? ??????????";
   document.getElementById("smart").innerHTML = "?????????????? ??????????????";
   document.getElementById("smartOne").innerHTML = "?????????? ??????????";
   document.getElementById("smartTwo").innerHTML = "?????????????? ????????";
   document.getElementById("smartThree").innerHTML = "???????????? ????????";
   document.getElementById("accessories").innerHTML = "????????????????";
   document.getElementById("signUp").innerHTML = "????????????????";
   document.getElementById("logIn").innerHTML = "?????????? ????????????";
   document.getElementById("list").innerHTML = "??????????";
   document.getElementById("mySearch").placeholder = "..??????";
   document.getElementById("item1").innerHTML = "?????????? ??????????";
   document.getElementById("item2").innerHTML = "?????????? ??????????";
   document.getElementById("item3").innerHTML = "????????????????";
   document.getElementById("item4").innerHTML = "?????????????? ????????";
   document.getElementById("item5").innerHTML = "?????????? ??????????";
   document.getElementById("item6").innerHTML = "?????? ????????";
   document.getElementById("item7").innerHTML = "??????";
   document.getElementById("item8").innerHTML = "????????????";
   document.getElementById("btn-buy").innerHTML = "?????????? ????????";
   document.getElementById("total-title").innerHTML = "????????????????";
   document.getElementById("cart-title").innerHTML = "?????? ??????????????????";

  }
  else if(language == "english"){
   document.getElementById("arabic").style.cssFloat = "left";
   document.getElementById("english").style.cssFloat = "left";
   document.getElementById("arabic").innerHTML = "Arabic";
   document.getElementById("english").innerHTML = "English";
   document.getElementById("logo").innerHTML = "Meza";
   document.getElementById("home").innerHTML = "Home";
   document.getElementById("account").innerHTML = "personal account";
   document.getElementById("search").innerHTML = "search";
   document.getElementById("sections").innerHTML = "sections";
   document.getElementById("super").innerHTML = "Super Market";
   document.getElementById("superOne").innerHTML = "Detergents";
   document.getElementById("superTwo").innerHTML = "oil, ghee";
   document.getElementById("superThree").innerHTML = "tea, sugar";
   document.getElementById("clothing").innerHTML = "Clothing";
   document.getElementById("clothingOne").innerHTML = "men clothing";
   document.getElementById("clothingTwo").innerHTML = "weman clothing";
   document.getElementById("clothingThree").innerHTML = "kids clothing";
   document.getElementById("smart").innerHTML = "Smart Devices";
   document.getElementById("smartOne").innerHTML = "smart watches";
   document.getElementById("smartTwo").innerHTML = "smart mobiles";
   document.getElementById("smartThree").innerHTML = "smart labtop";
   document.getElementById("accessories").innerHTML = "Accessories";
   document.getElementById("signUp").innerHTML = "Sign Up";
   document.getElementById("logIn").innerHTML = "Log In";
   document.getElementById("list").innerHTML = "List";
   document.getElementById("mySearch").placeholder = "Search..";
   document.getElementById("item1").innerHTML = "men clothing";
   document.getElementById("item2").innerHTML = "weman clothing";
   document.getElementById("item3").innerHTML = "accessories";
   document.getElementById("item4").innerHTML = "smart mobiles";
   document.getElementById("item5").innerHTML = "smart watches";
   document.getElementById("item6").innerHTML = "oil and ghee";
   document.getElementById("item7").innerHTML = "rice";
   document.getElementById("item8").innerHTML = "detergents";
   document.getElementById("btn-buy").innerHTML = "Buy Now";
   document.getElementById("total-title").innerHTML = "Total";
   document.getElementById("cart-title").innerHTML = "Cart";
 }
}
}
onlaod = new TranslateIndex();
