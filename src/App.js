import './App.css'
import Table from './Table'

const App = () => {
    return (
        <div>            
            <h1 style={{ cursor: "pointer" }}onClick={() => window.location.reload()} className="deque-logo"> deque </h1>        
            <Table />                    
        </div>
    )
}

export default App;