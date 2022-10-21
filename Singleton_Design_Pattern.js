//https://jsmanifest.com/singleton-design-pattern-in-javascript/

//factory function
function LocalStorage(options) {
    let _data = {}
    let _options = options || {}
  
    return {
      get(key) {
        return _data[key]
      },
      set(key, value) {
        _data[key] = value
      },
      remove(key) {
        delete _data[key]
      },
      clear() {
        _data = {}
      },
    }
  }
  
  const createLocalStorage = (function () {
    return function createLocalStorage(options) {
      if (!ls) {
        ls = LocalStorage(options)
      }
      return ls
    }
  })()


// Class static method
// This implementation uses a class object and implements two static properties (technically it's one property and one method). Notice how it's equivalent to a global variable:

// Name	Description
// _instance	Holds the global instance of LocalStorage. This is where it will be stored by instantiators
// getInstance	Performs a check on LocalStorage._instance. If an instance was created previously, that will be returned every time. If it is empty, a new instance will be created and attached

class LocalStorage {
    #data = {}
  
    static _instance = null
  
    static getInstance(options) {
      if (!LocalStorage._instance) {
        LocalStorage._instance = new LocalStorage(options)
      }
  
      return LocalStorage._instance
    }
  
    constructor(options) {
      this.options = options || {}
    }
  
    get(key) {
      return this.#data[key]
    }
  
    set(key, value) {
      this.#data[key] = value
    }
  
    remove(key) {
      delete this.#data[key]
    }
  
    clear() {
      this.#data = {}
    }
  }