import React, {Component} from 'react';
import '../styles/TreatmentSelectComponent.css';
import menImg from '../images/men.png';
export class TreatmentSelectComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state = { };
        this.handleTreatementSelection = this.handleTreatementSelection.bind(this);
    }
    componentWillReceiveProps(nextProps)
    {
       
    }
    handleTreatementSelection()
    {
        this.props.showTreatmentSelection();
    }
    render(){
        return(
            <div onClick = {this.handleTreatementSelection} className="TreatmentSelect">
                <span className="TreatmentSelectIcon"><img className="treatment-icon" src={menImg} alt='img' /></span>
                <span className="TreatmentSelectText">ODABERITE TRETMAN</span>
            </div>
        );
    }

}
