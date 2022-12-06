import { Component } from "react";
import Check from "./check.png";

export class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: []

    }


    onChangeEvent(event) {
        this.setState({userInput: event})
    }

    addItem(input) {
        if (input === '') {
            alert ("Please, enter an Item!")
        } else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ""})
    }
}

deleteItem() {
    let listArray = this.state.groceryList;
    listArray = [];
    this.setState({groceryList: listArray})
}

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" 
                placeholder="What do you want to buy today?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={ () => this.addItem(this.state.userInput)} className="addBtn">Add</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={Check} width="40px" alt="img"/>
                        {item}</li>
                ))}
                
            </ul>
            <div className="container">
                <button onClick={ () => this.deleteItem(this.state.userInput)} className="deleteBtn">Delete</button>
            </div>
            </form>
            </div>
        )
    }
}