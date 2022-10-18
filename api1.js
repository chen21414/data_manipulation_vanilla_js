//https://jsmanifest.com/designing-api-methods-in-javascript/
function createAccount({
    password = '',
    nickname = '',
    email = '',
    gender = 'Male',
    bio = '',
    subscription = 'Basic',
    callback,
  }) {
    if (!password || !email) {
      throw new Error(
        'You are missing one or all of the following fields: "email", "password"',
      )
    }
    return api
      .createAccount({
        password,
        nickname,
        email,
        gender,
        bio,
        subscription,
      })
      .then((result) => {
        if (callback) callback(null, result)
      })
      .catch((error) => {
        console.error(error)
        if (callback) callback(error)
      })
  }

//Making the call also becomes more terse and readable:

createAccount({
  password: 'applebee123x123',
  email: 'applebee1233@gmail.com',
  bio: 'My bio',
  callback: function cb(err, data) {
    if (err) {
      console.error(err)
    }
    // do something with data
  },
})