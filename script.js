(function($){
$(document).ready(function(){

//znaleźć elementy div z klasami grid oraz grid-12
var div = $("div .grid.grid-12");

//wszystkie elementy <a>, których atrybut “href" zaczyna się na “http”, znajdujące się w elemencie o klasie “nav
var link = $("nav a[href^='http']");

//wszystkie elementy <input>, których typ to “radio” lub “checkbox” oraz dodatkowo nie są aktualnie zaznaczone (checked).
var input = $(":radio:not(:checked),:checkbox:not(:checked)");

//wyłącznie pierwszy element <p>, który jest pusty (nie zawiera dzieci) oraz znajduje się w elemencie <div> z identyfikatorem “text”
var akapit= $("div[type='text'] p:empty:first");

//wszystkie elementy z klasą “pagination-item”, które nie są elementem <span>
var spanF= $(".pagination-item:not(span)");


});
})(jQuery);