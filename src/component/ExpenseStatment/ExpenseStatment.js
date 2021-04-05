import React, { Component } from 'react';
import {connect} from "react-redux";
import * as budgetAction from "../../store/reducer/reducer";
import ExpenseCreator from "./ExpenseCreator/ExpenseCreator";

class ExpenseStatment extends Component {
   
    render() {
        let expenses = this.props.expense.map(expense => {
        return(<ExpenseCreator 
                key={expense.id}
                id={expense.id}
                title = {expense.title}
                price = {expense.price}
                editHandler = {this.props.onEdit}
                deleteHandler = {this.props.onDelete}
            /> )
        })
        return (
            <div className="ExpenseStatment">
                {expenses}
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        onEdit : (id) => dispatch (budgetAction.editHandler(id)),
        onDelete : (id) => dispatch (budgetAction.deleteHandler(id))
    }
}
export default connect(null,mapDispatchToProps)(ExpenseStatment)