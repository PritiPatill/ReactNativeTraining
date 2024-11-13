function blockMe(message){
    console.log(message)
}

function sayHello(callback){
    setTimeout(callback, 5000)
}

function main(){
    blockMe('start')
    sayHello(function(){
        console.log('hello')
    })
    blockMe('end')
}

main()