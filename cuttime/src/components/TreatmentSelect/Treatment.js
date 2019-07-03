import React, { Component } from 'react';
import '../../styles/treatmentSelect/Treatment.css';
export class Treatment extends Component {
    constructor(props)
    {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
    }
    handleSelection()
    {
        this.props.handleTreatmentSelection(this.props.treatment,this.props.selected);
    }
    render() {
        
        return (
            <div onClick = {this.handleSelection} className={this.props.selected ? "treatment-selected treatment box-shadow":"treatment box-shadow"}>
                <div className="name-img">
                <div className="treatment-img"><img src={this.props.treatment.image} alt={this.props.name + " image"}/></div>
                <div className="treatment-name">{this.props.treatment.name}</div>
                </div>
				<p>Jure</p>
				<p>Todorić<p/>
				<p>Gospodin</p>
            </div>  
        );
    }
}