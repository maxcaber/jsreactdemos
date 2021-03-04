//https://medium.com/launch-school/javascript-weekly-making-sense-of-closures-daa2e0b56f88

function makeCalendar(name) {

    var calendar = {
      owner: name,
      events: [],
    };
    
    return {
      addEvent: function(event, dateString) {
        var eventInfo = {
          event: event,
          date: new Date(dateString),
        };
        calendar.events.push(eventInfo);
        calendar.events.sort(function(a, b) {
          return a.date - b.date;
        });
      },
      listEvents: function() {
        if (calendar.events.length > 0) {
          console.log(calendar.owner + "'s events are: ");
          calendar.events.forEach(function(eventInfo) {
            var dateStr = eventInfo.date.toLocaleDateString();
            var description = dateStr + ": " + eventInfo.event;
            console.log(description);
          });
        } else {
          console.log(calendar.owner + " has no events.");
        }
      },
    };
  }
  
  var babbageCalendar = makeCalendar("Charles Babbage");
  babbageCalendar.addEvent("Coffee with Ada.", "8/7/2018");
  babbageCalendar.addEvent("Difference Engine presentation.", "8/2/2018");
  babbageCalendar.listEvents();

  //fat arrow hoc
  function makeGreeter (greeting) {
    return function greet (name) {
      return `${greeting}, ${name}!`
    }
  }
  
  // or, using the ES6 syntax:
  //https://medium.com/dailyjs/functional-js-2-functions-duh-70bf22f87bb8
  
  const makeGreeter2 = greeting => name => `${greeting}, ${name}!`
  
  const greet = makeGreeter2('Hello There! ')
  console.log(greet('mary joe'))

  //mutible state

  const getCurrentUser = () => ({name:'joe',balance:100})

  const getUserBalance = user => {
    return user.balance
  }
  
  const rewardUser_bad = user => {
    user.balance = user.balance * 2
    return user
  }

  const rewardUser_good = user => {
    return {
      ...user,
      balance: user.balance * 2
    }
  }
  
  const currentUser = getCurrentUser();//returns user with balance of 100
  console.log(getUserBalance(currentUser))
  
  // const rewardedUser = rewardUser_bad(currentUser);//mutates user's balance not a pure function since param passed by ref. It produces side effects!
  const rewardedUser = rewardUser_good(currentUser);//mutates a COPY of user and returns copy.  Param passed in is not changed.
  console.log('mutable state',getUserBalance(currentUser), getUserBalance(rewardedUser))