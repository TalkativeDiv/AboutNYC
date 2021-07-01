/* consts*/
const btnMenu = document.getElementById("btnMain");
const btnDoc = document.getElementById("btnDoc");
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

/*wished i chould add onclick in js for the go back button*/
