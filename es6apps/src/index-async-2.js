function blockMe(message){
    console.log(message)
}

function sayHello(callback){
    setTimeout(callback, 5000, "Hey there")
}

function main(){
    blockMe('start')
    sayHello((message) => {
        console.log(message)
    })
    blockMe('end')
}

main()