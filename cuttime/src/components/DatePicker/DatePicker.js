import React, { Component } from 'react';
import '../../styles/datePicker/DatePicker.css';
import {Day} from './Day.js';
//var days = ['Nedjelja','Ponedjeljak','Utorak','Srijeda','Četvrtak','Petak','Subota'];
var months = ['Siječanj','Veljača','Ožujak','TRAVANJ','Svibanj','Lipanj','Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'];

export class DatePicker extends Component {
    constructor(props)
    {
        super(props);
        let date = new Date();
        date.setHours(0,0,0,0);
        this.state = { today : date, month : date.getMonth(), selectedDate : this.props.haveDate};
        this.getDates = this.getDates.bind(this);
        this.mapDates = this.mapDates.bind(this);
        this.monthDown = this.monthDown.bind(this);
        this.monthUp = this.monthUp.bind(this);
        this.handleDateSelection = this.handleDateSelection.bind(this);
        this.dateSelected = this.dateSelected.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal()
    {
        this.props.dateSelectedCloseModal();
    }
    monthUp()
    {
        if(this.state.month === this.state.today.getMonth())
        this.setState({month : this.state.month + 1});
    }
    monthDown()
    {
        if(this.state.month > this.state.today.getMonth())
        this.setState({month : this.state.month - 1});
    }
    handleDateSelection(selectedDate)
    {
        this.setState({selectedDate : selectedDate});
    }
    dateSelected()
    {
        this.props.dateSelected(this.state.selectedDate);
        this.props.dateSelectedCloseModal();
    }
    getDates(year, month) 
    {
        //GET NUMBER OF DAYS IN MONTH
        //let FirstDay = new Date(year, month, 1); console.log(FirstDay);
        let LastDay = new Date(year, month + 1, 0);  
        let dates = [];
        let blank_before = 0;
        let blank_after = 0;
        let blank_b = [];
        let blank_a = [];

        for(let i=0 ; i<LastDay.getDate() ; i++)
        {
            dates.push({ date : new Date(year,month,i+1)});
        }

        if(dates[0].date.getDay() === 0)
            blank_before = 6;
        else if(dates[0].date.getDay() === 1)
            blank_before = 0;
        else
            blank_before = dates[0].date.getDay() - 1;

        if(dates[LastDay.getDay()].date.getDay() > 0)
            blank_after = 7 - dates[LastDay.getDay()].date.getDay();

        for(let i=0 ; i<blank_before ; i++){
            blank_b[i] = {blank : true};
        }
        for(let i=0 ; i<blank_after ; i++){
            blank_a[i] = {blank : true};
        }
        
        return {dates:dates ,blank_before : blank_b,blank_after:blank_a};    
    }

    mapDates(list_of_dates)
    {   
        let isDisabled = '';
        let dates = list_of_dates.map((item,i)=>
        {
            if((item.date.getFullYear() <= this.state.today.getFullYear() && item.date.getMonth() <= this.state.today.getMonth() && item.date.getDate() < this.state.today.getDate() ) || item.date.getDay() === 0)
                isDisabled = "disabled-date";
            else
                isDisabled = "";

             if(item.date.getDate() === this.state.today.getDate() && item.date.getFullYear() === this.state.today.getFullYear() && item.date.getMonth() === this.state.today.getMonth())
            return(
            <Day key={i} isDisabled={isDisabled} isToday = "today" selected={this.state.selectedDate} date={item.date} handleDateSelection = {this.handleDateSelection}/>
            )
            else
            return(
            <Day key={i} isDisabled={isDisabled} isToday="" date={item.date}  selected={this.state.selectedDate} handleDateSelection = {this.handleDateSelection}/>
            )
        })
        return dates;
    }
    render() {
       
        let list_of_dates = this.getDates(this.state.today.getFullYear(),this.state.month);
        let blank_before = 
        list_of_dates.blank_before.map((blank,i) => 
            <div key = {i} className="blank day">
            </div>
        );
        let blank_after = 
        list_of_dates.blank_after.map((blank,i) => 
            <div key = {i} className="blank day">
            </div>
        );
        let dates = this.mapDates(list_of_dates.dates);
        
        return (
                <div className = "calendar-container">
                    <div className="calendar-header">
                        <span className={this.state.month === this.state.today.getMonth() ? "hide-arrow":"header-arrow"}><i onClick={this.monthDown} className="fa fa-arrow-left"></i></span> 
                        <span className="header-current-month">{months[this.state.month]}</span>
                        <span className={this.state.month === this.state.today.getMonth() + 1 ? "hide-arrow":"header-arrow"}><i onClick={this.monthUp} className="fa fa-arrow-right"></i></span>
                    </div>
                    <div className = "calendar-dates">
                        <div className="day d_h">PO</div>
                        <div className="day d_h">UT</div>
                        <div className="day d_h">SR</div>
                        <div className="day d_h">ČE</div>
                        <div className="day d_h">PE</div>
                        <div className="day d_h">SU</div>
                        <div className="day d_h">NE</div>
                        {blank_before}
                        {dates}
                        {blank_after}
                    </div>
                    <div className="btn-container">
                        <span onClick={this.closeModal} className="btn-text">ODUSTANI</span>
                        <span onClick={this.dateSelected} className="btn-text">OK</span>
                    </div>
                </div>
        );
    }
}