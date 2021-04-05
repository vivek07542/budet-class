import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default class ExpenseCreator extends Component {
   
    render() {
        return (
            <div className = "ExpenseCreator" >
                <p>{this.props.title}</p>
                <p>{this.props.price}</p>
                <Button onClick={()=>this.props.editHandler(this.props.id)}><EditIcon/></Button>
                <Button onClick={()=>this.props.deleteHandler(this.props.id)}><DeleteIcon/></Button>
            </div>
        )
    }
}
