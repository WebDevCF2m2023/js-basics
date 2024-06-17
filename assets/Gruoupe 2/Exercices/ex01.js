// 0
console.log("Quelle est la coiffure d’un footballeur. La coupe du monde.");


// 1
let i=0;
for (let i = 0; i < 11; i++) {
 console.log(i);
}

let i=0;
while (i<11){
  console.log(i);
  i++
}

// 2
for (var number = 1; number <= 100; number++){     		
    if(number % 3 === 0 && number %  5 === 0){		 
      console.log("foobar") ;					 
    }							
  else if(number % 3 === 0){				
    console.log("foo");
  }
  else if (number % 5 === 0){
    console.log("bar");
  }
  else {
    console.log(number);
  }
  }

  
// 3
let alphabet;

for(i=9,alphabet='';++i<36;){
    alphabet += i.toString(36);
}

console.log(alphabet);

// 4
function verif (num){
    if(num > 0){
      console.log("positif");
    }
    else{
      console.log("negatif");
    }
  }
  verif(-1);

// 5
function calcul(a,b){
  console.log(a * b);
}
calcul(5,5);

