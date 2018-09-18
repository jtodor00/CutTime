import React, { Component } from 'react';
import '../../styles/datePicker/DatePicker.css';
export class Day extends Component {
    constructor(props)
    {
        super(props);
        this.handleDateSelection = this.handleDateSelection.bind(this);
    }
    handleDateSelection()
    {
        if(this.props.isDisabled === '')
        this.props.handleDateSelection(this.props.date);
    }
    render() {
        let isSelected = false;
        if(this.props.selected !== null)
            if(this.props.date.getFullYear() === this.props.selected.getFullYear() && this.props.date.getMonth() === this.props.selected.getMonth() && this.props.date.getDate() === this.props.selected.getDate())
                isSelected = true;
            return (
            <div onClick ={this.handleDateSelection} className={ isSelected ? this.props.isDisabled +' '+ this.props.isToday+" date-selected day calendar-day" : this.props.isDisabled +' ' + this.props.isToday+" day calendar-day"}>
            {this.props.date.getDate()}
            </div>
        );
    }
}