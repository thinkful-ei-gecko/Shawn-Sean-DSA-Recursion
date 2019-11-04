function countingSheep(num){
  if (num === 0){
    console.log('All sheep have jumped over the fence. ');
    return;
  }
  console.log(num + ': sheep have jumped over the fence. ');
  return countingSheep(num-1);
}

countingSheep(5);


function powerCalculator(base, exp){
  if (exp <= 0){
    return 1;
  }

  return base * powerCalculator(base, exp-1);
}

powerCalculator(2, 5);



function factorial(n){
  if (n===0){
    return 1
  }
  return n*factorial(n-1)
  }
  
  factorial(5)


  function fibonacci(n){
    if(n===0){
     return 0 
    }
    if(n===1){
     return 1
    }
     return fibonacci(n-1) + fibonacci(n-2)
  }
   
fibonacci(7)





