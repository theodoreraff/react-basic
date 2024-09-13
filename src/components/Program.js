import React, { Component } from 'react';
import logo from '../image/logo_pens.png';

class Program extends Component {
    state = {
        todos: [
            { id: 1, title: "Buku Satu" },
            { id: 2, title: "Buku Dua" },
            { id: 3, title: "Buku Tiga" }
        ],
    };

    render() {
        const { todos } = this.state;
        return (
            <>
                <img src={logo} alt="PENS logo" />
                <div>
                    {
                        todos.map((item) => (
                            <div key={item.id} style={todoItem}>
                                <p>{item.title}</p>
                                <div style={buttonItem}>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <form style={inputForm}>
                    <input type="text" />
                    <button>Add</button>
                </form>
            </>
        );
    }
}

export default Program;

const buttonItem = {
    display: "flex",
    }
    const todoItem ={
        background : "#2da4f8",
        color : "#fff",
        display: "flex",
        alignItems : "center",
        height : "1 rem",
        padding : "0 1rem",
        justifyContent : "space-between",
        margin : "0.5rem 0",
        }
    const inputForm ={
        background : "#fff",
        color : "#fff",
        display: "flex",
        alignItems : "center" 
    }