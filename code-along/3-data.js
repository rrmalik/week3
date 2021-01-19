function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  let profile = {
    name: { first: 'Raman', last: 'Malik'},
    location: { city: 'Chicago', state: 'Illinois' },
    timeline: [
      { icon: '🧠', when: '2020-10-26 17:00:00', what: 'Teaching MBA students how to code in JavaScript!' },
      { icon: '🌮', when: '2020-10-26 12:00:00', what: 'Eating tacos' },
      { icon: '🦄', when: '2020-10-26 08:00:00', what: 'Riding a unicorn' }
    ]
  }

  // template literals support HTML too!
  output = `
    <div class="text-5xl border rounded-full border-white text-center">${profile.name.first} ${profile.name.last} from ${profile.location.city}, ${profile.location.state}</div>
  `
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
  
  // let profile = {
  //   name: 'Raman',
  //   location: 'Chicago',
  //   status: 'Student'
  // }

  // let burger = ['buns', 'ground beef', 'american cheese']
  // burger.push('ketchup')

  // console.log(profile.name)
  // console.log(profile.location)
  // console.log(profile.status)
  // console.log(burger[2])
  // console.log(burger[3])
  // console.log(burger)


  /*
    this code does the work of writing the output to screen...
    so leave it alone :) this code expects a variable named
    'output' to be declared
  */
  document.querySelector('.output').innerHTML = output
}
