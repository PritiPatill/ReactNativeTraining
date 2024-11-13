const login = (userName, password, resolve, reject) => {
    if(userName === 'admin' && password === 'admin'){
        setTimeout(resolve, 5000, 'login success')
    }else{
        setTimeout(reject, 5000, 'login failed')
    }
}

function main(){
    login('admin', 'admin', (success) => console.log(success), (failed) => console.log(failed))

    login('xy', 'xy', (success) => console.log(success), (failed) => console.log(failed))
}

main()
