import React, { useState } from 'react';

function PersonInfo() {
    const [person, setPerson] = useState({
        name: "Betsabe",
        age: 24,
        color: "Negro"
    });

    function handleNameChange() {
        setPerson(prevPerson => ({
            ...prevPerson,
            name: "Hayley",
        }));
    }

    return(
        <div style={styles.container}>
            <h1 style={styles.title}>Información de la Persona</h1>
            <div style={styles.infoContainer}>
                <h2>Nombre: {person.name}</h2>
                <h2>Edad: {person.age}</h2>
                <h2>Color favorito: {person.color}</h2>
            </div>
            <button style={styles.button} onClick={handleNameChange}>
                Cambiar Nombre
            </button>
        </div>
    );
}

const styles = {
    container: {
        margin: '20px',
        padding: '20px',
        border: '2px solid #ccc',
        borderRadius: '5px',
        maxWidth: '400px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#333',
    },
    infoContainer: {
        marginBottom: '20px',
    },
    
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default PersonInfo;
