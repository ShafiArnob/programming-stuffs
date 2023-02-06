var print = console.log
class User{
  constructor(email, name){
    this.email = email
    this.name = name
    this.score = 0
  }
  login(){
    print(this.email, " just logged in")
    return this
  }
  logout(){
    print(this.email, " just logged out")
    return this
  }
  updateScore(){
    this.score++
    print(this.email," score is now ", this.score)
    return this
  }
}

let userOne = new User("shafi@dev.com", "Shafi")
let userTwo = new User("arnob@dev.com", "Arnob")

userOne.login().updateScore().updateScore().logout()