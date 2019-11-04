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