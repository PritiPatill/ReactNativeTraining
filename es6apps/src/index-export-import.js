// import { firstName,lastName,isActive,isEnabled,skills } from "./lib.js";


// function main(){
//   console.log(firstName,lastName)
//   console.log(isActive)
//   console.log(isEnabled())
//   console.log(skills)

// }
// main()

// import TodoService from "./todo-service.js";

// function main() {
//     let todoService = new TodoService()
//     console.log(todoService.findAll())
// }
// main()

import Greeter, { name, message } from "./utils.js";

function main(){
  let greet = new Greeter();
  console.log(greet.sayGreet())
  console.log(name,message)
}
main()