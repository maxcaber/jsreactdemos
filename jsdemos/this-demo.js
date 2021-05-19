//https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/

const user = {
  name: 'Tyler',
  age: 28,
  greet() {
    alert(`Hello, my name is ${this.name}`)
  },
  mother: {
    name: 'Stacey',
    greet() {
      alert(`Hello, my name is ${this.name}`)
    }
  }
}

// user.greet()
// user.mother.greet()

// greet2.call(user);

function greet2() {
  alert(`Hello, my name is ${this.name}`)
}


function greet3(l1, l2, l3) {
  alert(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  )
}


//   const languages = ['JavaScript', 'Ruby', 'Python']

//   greet3.call(user, languages[0], languages[1], languages[2])

//   greet3.apply(user, languages);//apply will spread the array

//   const newFn = greet3.bind(user, languages[0], languages[1], languages[2])//reurns a new function to be called later
// newFn();

// greet3.bind(user, languages[0], languages[1], languages[2])();


const user1 = {
  name: 'Tyler',
  age: 27,
  languages: ['JavaScript', 'Ruby', 'Python'],
  greet() {
    const hello = `Hello, my name is ${this.name} and I know`

    const langs = this.languages.reduce(function (str, lang, i) {
      if (i === this.languages.length - 1) {
        return `${str} and ${lang}.`
      }

      return `${str} ${lang},`
    }, "")

    alert(hello + langs)
  }
}

//user1.greet();//error since if (i === this.language.length - 1) is part of anynomous function passed to reduce and 'this' != user1

const user2 = {
  name: 'Tyler',
  age: 27,
  languages: ['JavaScript', 'Ruby', 'Python'],
  greet() {
    const hello = `Hello, my name is ${this.name} and I know`;

    const langs = this.languages.reduce(function (str, lang, i) {
      if (i === this.languages.length - 1) {
        return `${str} and ${lang}.`
      }

      return `${str} ${lang},`
    }.bind(this), "")//bind(this) is required to make user the 'this' of the anonymous function.

    alert(hello + langs)
  }
}

//user2.greet();

const user3 = {
  name: 'Tyler',
  age: 27,
  languages: ['JavaScript', 'Ruby', 'Python'],
  greet() {
    const hello = `Hello, my name is ${this.name} and I know`

    const langs = this.languages.reduce((str, lang, i) => {
      if (i === this.languages.length - 1) {
        return `${str} and ${lang}.`
      }

      return `${str} ${lang},`
    }, "")//no need to bind 'this' is determined 'lexically' or as we would expect.

    alert(hello + langs)
  }
}

//user3.greet();

//window binding age or window.age 
window.age = 27

function sayAge() {
  console.log(`My age is ${this.age}`)
}

sayAge();

var myObj = { age: 33 };
sayAge.bind(myObj)();
const myObj2 = { age: 44 };
sayAge.call(myObj2);
