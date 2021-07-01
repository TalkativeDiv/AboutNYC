/* consts*/
const btnMenu = document.getElementById("btnMain");
const btnDoc = document.getElementById("btnDoc");
const btnGoBack = document.getElementById("btnGoBack");
/*Menu*/
/*
  btnMenu.click = () =>{
window.location.href = 'main.html';
}
*/
btnMenu.addEventListener("click", function(){
     window.location.href = 'main.html';
   });
btnDoc.addEventListener("click", function(){
     window.location.href = 'https://abhipieznomnomnom.gitbook.io/abtnyc/';
   });

/*main app*/

btnGoBack.addEventListener("click", function(){
     window.location.href = 'index.html';
});

