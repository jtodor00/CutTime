import React, {Component} from 'react';
import '../styles/DateSelectComponent.css';

export class DateSelectComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state = { dateSelected : false, date : ''};
        this.handleDateSelection = this.handleDateSelection.bind(this);
    }
    componentWillReceiveProps(nextProps)
    {
        if(this.props !== nextProps)
        {
            this.setState({dateSelected : nextProps.dateSelected , date : nextProps.date});
        }
    }
    handleDateSelection()
    {
        this.props.showDateSelection();
    }

    render(){
        let date = '';
        if(this.props.dateSelected !== null)
            date = this.props.dateSelected.getDate() + ' - ' +  (this.props.dateSelected.getMonth()+1) + ' - ' +  this.props.dateSelected.getFullYear(); 
        return(
            <div onClick={this.handleDateSelection} className="DateSelect">
                <span className="DateSelectIcon"><i className="fa fa-calendar"></i></span>
                <span className="DateSelectText">{date !== '' ? date : "ODABERITE DATUM"}</span>
            </div>
        );
    }

}