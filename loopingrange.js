function range(start, end, step){
  var some_array = [];
  var some_value = start;
  var i;

  if(start == undefined)
  {
    return[];
  }
  else if(end == undefined)
  {
    return[];
  }
  else if(step == undefined)
  {
    return[];
  }
  else if(start > end)
  {
    return[];
  }
  else if(step < 0)
  {
    return[];
  }
  else
  {
    some_array.push(start);
    for(i = 1; i < 10 ;i++)
    {
      some_array.push(some_value + step);
      some_value = some_value + step;
      if (some_value > end)
      {
        some_array.pop();
        break;
      }
    }
    return some_array;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
