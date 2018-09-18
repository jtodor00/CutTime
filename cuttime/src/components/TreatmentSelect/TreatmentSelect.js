import React, { Component } from 'react';
import {list_of_treatments} from '../../data/treatments.js';
import {Treatment} from './Treatment.js';
import '../../styles/treatmentSelect/TreatmentSelect.css';

export class TreatmentSelect extends Component {
    constructor(props)
    {
        super(props);
        this.state = {selectedTreatements : this.props.haveTreatments ,price : this.props.havePrice}
        this.getTreatments = this.getTreatments.bind(this);
        this.handleTreatmentSelection = this.handleTreatmentSelection.bind(this);
        this.closeTreatmentSelection = this.closeTreatmentSelection.bind(this);
        this.confirmTreatments = this.confirmTreatments.bind(this);
    }
    confirmTreatments()
    {
        this.props.treatmentsConfirmed(this.state.selectedTreatements,this.state.price);
    }
    closeTreatmentSelection()
    {
        this.props.closeTreatmentSelection(this.props.haveTreatments,this.props.havePrice);
    }
    handleTreatmentSelection(treatment,selected)
    {
        let newTreatments = this.state.selectedTreatements;
        let newPrice = this.state.price;
        if(selected)
        {
            newTreatments = this.state.selectedTreatements.filter(item => item.id !== treatment.id);
            newPrice -= treatment.price;
        }
        else
        {
            if(newTreatments === null)
            {
                newTreatments = [];
            }
            newTreatments.push(treatment);
            newPrice += treatment.price;
        }
        this.setState({selectedTreatements : newTreatments , price:newPrice});
    }
    getTreatments()
    {
        let treatments = null;
        if(this.state.selectedTreatements === null )
        {
            treatments = list_of_treatments.map((item,i)=>
            <Treatment key ={i} selected={false} treatment={item} handleTreatmentSelection = {this.handleTreatmentSelection} />
            )
        }
        else
        {
            treatments = list_of_treatments.map((item,i) =>
            { 
                if(this.state.selectedTreatements.some(element => element.id === item.id))
                    return (<Treatment selected = {true} key={i} treatment = {item} handleTreatmentSelection = {this.handleTreatmentSelection} /> )
                else
                    return(<Treatment selected = {false} key={i} treatment = {item} handleTreatmentSelection = {this.handleTreatmentSelection} />)
            }
            )

        }
        return treatments;
    }
    render() {
        console.log("TREATMENTS",this.state.selectedTreatements,this.props.haveTreatments)
        return (
            <div className="treatment-container">
                <div className="treatment-header head-box-shadow">
                    <span className="treatment-heading">Odaberite tretmane</span>
                    <span onClick={this.closeTreatmentSelection} className="close-icon"><i className="fa fa-remove"></i></span>
                </div>
                <div className="treatment-selection-field">
                    {this.getTreatments()}
                </div>
                
                <div className="treatment-confirmation footer-box-shadow">
                    <div className="confirmation-price">
                        <span>UKUPNO</span>
                        <span>{this.state.price +" kn"}</span>
                    </div>
                    <div className="confirmation-btn-container">
                        <button onClick = {this.confirmTreatments} className="confirmation-btn ">POTVRDI</button>    
                    </div>
                </div>
            </div>
        );
    }
}