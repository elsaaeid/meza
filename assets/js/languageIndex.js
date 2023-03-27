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
   document.getElementById("arabic").innerHTML = "عربى";
   document.getElementById("english").innerHTML = "انجليزى";
   document.getElementById("logo").innerHTML = "ميزة";
   document.getElementById("home").innerHTML = "الرائسية";
   document.getElementById("account").innerHTML = "الخساب الشخصى";
   document.getElementById("search").innerHTML = "بخث";
   document.getElementById("sections").innerHTML = "اقسام";
   document.getElementById("super").innerHTML = "سوبر ماركت";
   document.getElementById("superOne").innerHTML = "منظفات";
   document.getElementById("superTwo").innerHTML = "زيت ,سمن";
   document.getElementById("superThree").innerHTML = "شاى,سكر";
   document.getElementById("clothing").innerHTML = "الملابس";
   document.getElementById("clothingOne").innerHTML = "ملابس رجالى";
   document.getElementById("clothingTwo").innerHTML = "ملابس حريمى";
   document.getElementById("clothingThree").innerHTML = "ملابس اطفال";
   document.getElementById("smart").innerHTML = "الاجهزة الانيقة";
   document.getElementById("smartOne").innerHTML = "ساعات انيقة";
   document.getElementById("smartTwo").innerHTML = "موبيلات ذكية";
   document.getElementById("smartThree").innerHTML = "لابتوب انيق";
   document.getElementById("accessories").innerHTML = "أكسسورات";
   document.getElementById("signUp").innerHTML = "الأشتراك";
   document.getElementById("logIn").innerHTML = "تسجيل الدخول";
   document.getElementById("list").innerHTML = "قائمة";
   document.getElementById("mySearch").placeholder = "..بحث";
   document.getElementById("item1").innerHTML = "ملابس رجالى";
   document.getElementById("item2").innerHTML = "ملابس حريمى";
   document.getElementById("item3").innerHTML = "اكسسورات";
   document.getElementById("item4").innerHTML = "موبيلات ذكية";
   document.getElementById("item5").innerHTML = "ساعات انيقة";
   document.getElementById("item6").innerHTML = "زيت وسمن";
   document.getElementById("item7").innerHTML = "ارز";
   document.getElementById("item8").innerHTML = "منظفات";
   document.getElementById("btn-buy").innerHTML = "أشترى الأن";
   document.getElementById("total-title").innerHTML = "الأجمالى";
   document.getElementById("cart-title").innerHTML = "سلة المشتريات";

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
