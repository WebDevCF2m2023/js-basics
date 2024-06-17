console.log("Pourquoi les fonctions JavaScript n’ont-elles pas de secrets ?")
setTimeout(function(){
    console.log('.');
}, 1000);
setTimeout(function(){
    console.log('.');
}, 1200);
setTimeout(function(){
    console.log('.');
}, 1400);
setTimeout(function(){
    console.log('Parce qu\'elles ne cachent rien, elles "return" tout !');
}, 1600);