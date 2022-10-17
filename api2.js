const createWarrior = function createWarrior(name) {
    let hp = 100
    let battleCryInterval = 0
  
    return {
      bash: function(target) {
        target -= 10
        return this
      },
      // Increase the wrarior's health by 60, decrementing it by 1 every second for 60 seconds
      battleCry: function battleCry() {
        hp += 60
        battleCryInterval = setInterval(() => {
          hp -= 1
        }, 1000)
        setTimeout(() => {
          if (battleCryInterval) {
            clearInterval(battleCryInterval)
          }
        }, 60000)
        return this
      },
      getHp: function getHp() {
        return hp
      },
    }
  }
  
  const warrior = createWarrior('chris')
  const otherWarrior = createWarrior('bob')
  
  warrior
    .battleCry()
    .bash(otherWarrior)
    .bash(otherWarrior)
    .bash(otherWarrior)
    .bash(otherWarrior)
    .bash(otherWarrior)
  
  const otherWarriorsHp = otherWarrior.getHp()
  
  console.log(otherWarriorsHp) // result: 100