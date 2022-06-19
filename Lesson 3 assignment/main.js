// Rewrite JS callbacks to promise

// callback

/*const callMe = (firstName, callback) => {
    setTimeout(() => {
      if (!firstName) return callback(new Error('no first name passed in!'));

      const fullName = `${firstName} Smith`;

      return callback(fullName);
    }, 1000);
  };
callMe('Ben', console.log);
callMe(null, console.log);*/

// convert to promise

const c2promise = firstName => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!firstName) reject(new Error('no firstname passed in!'))
  
        const fullName = `${firstName} Smith`  
  
        resolve(fullName)
      }, 1000)
    }).then(console.log).catch(console.log)
}
  
c2promise('Ben')
c2promise()