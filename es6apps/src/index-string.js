let firstName = "Priti"
let lastName = 'Patil'
let fullName = firstName + lastName

console.log("Your Name is : " + firstName)
console.log('Your Name is : ' + lastName)
console.log("Your Name is : ", fullName)

fullName = `${firstName} ${lastName}`
console.log(`Your Name is ${fullName}`)

//multi line strings
let doc = `
   <html>
      <head>
          <title></title>
      </head>
    <body>
    </body>
 </html>
`
console.log(doc)