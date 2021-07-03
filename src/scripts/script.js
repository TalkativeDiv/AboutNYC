/* consts*/
const btnMenu = document.getElementById("btnMain");
const btnDoc = document.getElementById("btnDoc");
const btnRepo = document.getElementById("btnRepo");
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
btnRepo.addEventListener("click", function(){
    window.location.href = 'https://github.com/TalkitiveDiv/AboutNYC';
  });
