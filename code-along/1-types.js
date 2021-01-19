function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇
    
  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  let x
  x = 5
  console.log(x)

  let y = 14
  console.log(y)
  y = y + 1 // now y is 14 + 1 = 15
  console.log(y)

  let z = x + y

  let output = z

  let quantity = 5     //Number
  let food = 'tacos'   //String
  let withSalsa = true //Boolean

  console.log(food)
  console.log(quantity)
  console.log(withSalsa)

  // output = 'i love ' + food 
  // output = 'i would like ' + quantity + ' ' + food
  output = `i would like ${quantity} ${food}`
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

  /*
    this code does the work of writing the output to screen...
    so leave it alone :) this code expects a variable named
    'output' to be declared
  */
  document.querySelector('.output').innerHTML = output
}