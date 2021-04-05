import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class Budget extends Component {
   
    state ={
        budgetAllocate : 0
    }
    inputChangeHandler=(event)=>{
        this.setState({
            budgetAllocate : event.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="number" 
                placeholder="Budget" 
                onChange={this.inputChangeHandler} 
                value={this.state.budgetAllocate}/>
                <Button variant="outlined" color="primary"
                 onClick={()=>this.props.budgetClicked(this.state.budgetAllocate)}>
                 Add Budget
                </Button>
            </div>
        )
    }
}
