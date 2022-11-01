const applyFilterToImage = (image) => {
    return function applyFilter(...args) {
    // we can also grab args with [].prototype.slice.call(arguments, 0)
  
      let options
      let filters = {}
      let callback
  
      const arg1 = args[0]
      // The caller wants to apply multiple filters
      if (args.length === 1) {
        if (arg1 && typeof arg1 === 'object') {
          filters = { ...arg1 }
          // Find out of the caller wants the new image with applied filters back by checking if a callback was passed in
          const arg2 = args[1]
          if (arg2 && typeof arg2 === 'function') {
            callback = arg2
          }
        } else {
          throw new Error(
            'You must supply an object if you are only providing the first argument',
          )
        }
      } else {
        if (args.length > 2) {
          // The caller passed in options as the third argument
          if (typeof args[3] === 'object') {
            options = args[3]
          }
            // The caller provided a callback function and wants the image with applied filters passed back
          else if (typeof args[3] === 'function') {
            callback = args[3]
          }
        }
        // The caller wants to apply one filter
        if (typeof arg1 === 'string') {
          const filter = arg1
          const value = args[1]
          filters[filter] = value // or filters = { [filter]: value }
        } else {
          if (callback) {
            callback(new Error('Filter is not a string'))
          }
        }
      }
        //calling API
        const newImg = api.filterImage(image, filters, options)
        if (callback) {
          return callback(null, newImg)
        }
    }
  }
  
  const img = '../bob_the_builder.jpg'
  const applyFilter = applyFilterToImage(img)
  const callback = (newImg) => {
    console.log(newImg)
  }
  
  applyFilter({
    grayscale: '100%',
    rotate: 100,
    scale: 1.5,
  }, callback)