
 //https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/

function first () {
  console.log('inside first a',window.name)
      window.name = 'Jordyn'
  
     console.log('inside first b',window.name)
  }
  
  function second () {
    console.log('inside second a',window.name)
    window.name = 'jake'

   console.log('inside second b',window.name)
  }
  
  console.log('outside 1',name)
  
  first()
  var name ;
  //name = 'Tyler'
  second()
  console.log('outside final',name)