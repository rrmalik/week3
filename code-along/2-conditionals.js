function pageLoad() {

  document.querySelector('.nom-nom-nom').addEventListener('click', (event) => {
    const dinner = document.querySelector('.dinner').value
    // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

    // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
    // The variable 'dinner' is already set to the value in the text input
    console.log(dinner)
    
    let output
    if (dinner == 'tacos') { //== creates a bool
      output = '🌮'
    } else if (dinner == 'pizza') {
      output = '🍕'
    } else if (dinner == 'hot dog' || dinner == 'hawdawg') {
      output = '🌭'
    } else {
      output = 'I dont want it'
    }

  

    //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
    /*
      this code does the work of writing the output to screen...
      so leave it alone :) this code expects a variable named
      'output' to be declared
    */
    document.querySelector('.output').innerHTML = output
  })

}