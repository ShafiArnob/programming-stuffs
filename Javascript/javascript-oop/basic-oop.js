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

class Admin extends User{
  deleteUser(user){
    users = users.filter(u=>{
      return u.email !== user.email
    })   
  }
}

let userOne = new User("shafi@dev.com", "Shafi")
let userTwo = new User("arnob@dev.com", "Arnob")
let admin = new Admin("admin@dev.com", "Admin")

var users = [userOne, userTwo]

print(users)
admin.deleteUser(userOne)
print(users)