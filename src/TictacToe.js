import './App.css';
import React, { Component } from 'react';

class Square extends React.Component {
    render() {
        const number = this.props.value
        return (
            <button className="square" onClick={function (){
                console.log('you clicked',{number})
            }}>
                {number}
            </button>
        );
    }
}

class Board extends React.Component{
    renderSquare(i) {
        return <Square value={i}/>
    }

    render() {
        const status = 'you clicked on:';
        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}


export default Board
