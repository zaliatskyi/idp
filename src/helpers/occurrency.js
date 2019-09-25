const occurrencesOf = (n, array) => {
  var count = 0;
  var index = 0;
  do{
       index = array.indexOf(n, index) + 1;

       if(index === 0){
            break;
       }
       else{
            count++;
       }
  } while(index < array.length);
  return count;
}

export default occurrencesOf;