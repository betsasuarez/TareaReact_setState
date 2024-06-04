import { useState } from 'react';


function EnhancedCounter() {
  
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif'
    };

    const buttonStyle = {
        padding: '20px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px'
    };

    return (
        <div style={containerStyle}>
            <h1>Contador </h1>
            <h2>{count}</h2>
            <button onClick={handleIncrement} style={buttonStyle}>
                Incrementar
            </button>
        </div>
    );
}

export default EnhancedCounter;
