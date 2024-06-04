import React, { useState } from 'react';

function ImprovedCounter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 2);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Improved Counter</h1>
            <h1 style={styles.count}>{count}</h1>
            <button style={styles.button} onClick={handleIncrement}>
                Increment
            </button>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        margin: '45px auto',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '50px',
        marginBottom: '20px',
        color: '#333',
    },
    count: {
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#007bff',
    },
    button: {
        padding: '10px 20px',
        fontSize: '18px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        outline: 'none',
        transition: 'background-color 0.3s ease',
    },
};

export default ImprovedCounter;
