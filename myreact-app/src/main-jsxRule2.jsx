import { createRoot } from "react-dom/client"

const Heading = () => {
    return <div><h1>Hello</h1>
        <p>This is element</p>
        
    </div>
}


createRoot(document.getElementById('root')).render(<Heading />)

