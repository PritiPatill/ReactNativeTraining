import { createRoot } from 'react-dom/client'
import { Component } from 'react'

class Heading extends Component {
    render(){
        return <h1> Hello there!</h1>
    }
}

createRoot(document.getElementById('root')).render(<Heading/>)