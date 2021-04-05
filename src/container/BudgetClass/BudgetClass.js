import React, { Component } from "react";
import "./BudgetClass.css";
import Budget from "../../component/Budget/Budget";
import BudgetStatment from "../../component/BudgetStatment/BudgetStatment";
import Expense from "../../component/Expense/Expense";
import ExpenseStatment from "../../component/ExpenseStatment/ExpenseStatment";
import {connect} from "react-redux";
import * as budgetAction from "../../store/reducer/reducer";

class BudgetClass extends Component {
    componentDidMount(){
        this.props.onInitilizing();
    }
    render() {
        return (
            <div className="BudgetClass">
                <Budget budgetClicked={this.props.onBudgetInputHandler}/>
                <BudgetStatment budget={this.props.budget} expenditure={this.props.expenditure}/>
                <Expense expenseClicked = {this.props.onExpenseInputHandler} editData = {this.props.editData} editMode = {this.props.editMode}/>
                <ExpenseStatment expense = {this.props.expense}/>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    console.log(state);
    return{
        budget : state.reducer.budget,
        expense : state.reducer.expense,
        expenditure : state.reducer.expenditure,
        editData : state.reducer.editData,
        editMode : state.reducer.editMode
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onInitilizing : () => dispatch(budgetAction.initilizerHandler()),
        onBudgetInputHandler : (budget) => dispatch(budgetAction.budgetHandler(budget)),
        onExpenseInputHandler : (title,price,id,editMode) => dispatch(budgetAction.expenseHandler(title,price,id,editMode))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BudgetClass);

