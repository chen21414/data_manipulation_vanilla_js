//https://jsmanifest.com/power-of-interpreter-design-pattern/


// When do we need to apply the Interpreter Pattern?
// Sometimes we might come across situations where we need some interface to tell an interpreter how to interpret based on a particular context. 
// This pattern is also used extensively in SQL parsing, symbol processing engines, etc.

class VariableDeclaration {
    constructor() {
      this.kind = null
      this.declarations = []
    }
    toString() {
      let output = ''
  
      output += `${this.kind} `
  
      this.declarations.forEach((declaration) => {
        output += declaration.toString()
      })
  
      return output
    }
  }

  let newCon = new VariableDeclaration()
    newCon.kind = 'new'
    newCon.declarations = [1,2,3]

    console.log(newCon.toString()) //new 123



  
  class VariableDeclarator {
    constructor() {
      this.id = null
      this.init = null
    }
    interpret() {
      return this.init.interpret()
    }
    toString() {
      let output = ''
      output += this.id.toString()
      output += ' = '
      output += this.init.toString()
      return output
    }
  }
  
  class ArrayExpression {
    constructor() {
      this.elements = []
    }
    toString() {
      let output = ''
  
      output += '['
  
      this.elements.forEach((elem) => {
        output += elem.toString()
      })
  
      output += ']'
  
      return output
    }
  }
  
  class Identifier {
    constructor(name) {
      this.name = name
    }
    toString() {
      return this.name
    }
  }