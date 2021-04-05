import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import "./Expense.css";

class Expense extends Component {
    state = {
        title: "",
        price: "",
        id: null,
        editMode : false
    }
    expenseTitleHandler = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    expenseAmountHandler = (event) => {
        this.setState({
            price: event.target.value
        })
    }
    resetInput = () =>{
        this.setState({
            title:"",
            price: "",
            id: null,
            editMode : false
        })
    }
    static getDerivedStateFromProps(props, state) {
        if(props.editData !== null && props.editMode){
            if (props.editData.id !== state.id) {
              return {
                title : props.editData.title,  
                id : props.editData.id,
                price : props.editData.price,
                editMode : props.editMode
              };
            }
        }
        return null;
      }
    render() {
        return (
            <div className="Expense">
                    <input
                    type="text"
                    placeholder="Expense"
                    onChange={this.expenseTitleHandler}
                    value={this.state.title}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    onChange={this.expenseAmountHandler}
                    value={this.state.price}
                />
                <Button variant="outlined" color="primary"
                    onClick={() => {this.props.expenseClicked(this.state.title, this.state.price, this.state.id,this.state.editMode);this.resetInput()}}>
                    Add Expense
                </Button>
            </div>
        )
    }
}
export default Expense;