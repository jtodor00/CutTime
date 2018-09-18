import React,{Component} from 'react';
import '../styles/Modal.css';
import '../styles/animate.css';
import {DatePicker} from './DatePicker/DatePicker.js';
import {TreatmentSelect} from './TreatmentSelect/TreatmentSelect.js';

export class ModalCustom extends Component{

    constructor(props)
    {
        super(props);
        this.state = { show : false};
        this.closeModal = this.closeModal.bind(this);
        this.dateSelected = this.dateSelected.bind(this);
        this.closeModalButtonClicked = this.closeModalButtonClicked.bind(this);
        
    }
    
    componentWillReceiveProps(nextProps)
    {
        if(this.props !== nextProps)
        {
            if(nextProps.modal_state !== 0)
                this.setState({ show : true });
            else
                this.setState({ show : false });
        }
    }
    dateSelected(dateSelected)
    {
        this.props.dateSelected(dateSelected);
    }
    closeModal(event)
    {
        event.preventDefault();
        if(event.target === event.currentTarget)
            this.props.closeModal();
    }
    closeModalButtonClicked()
    {
        this.props.closeModal();
    }
  
    render()
    {
        let active_component = null;
        if(this.props.modal_state === 2){
            active_component = 
                <DatePicker haveDate = {this.props.haveDate} dateSelected = {this.dateSelected} dateSelectedCloseModal = {this.closeModalButtonClicked}/>
        }
        if(this.props.modal_state === 3){
            active_component = 
                <TreatmentSelect haveTreatments = {this.props.selectedTreatments} havePrice = {this.props.selectedPrice} treatmentsConfirmed={this.props.treatmentsConfirmed} closeTreatmentSelection = {this.props.closeTreatmentSelection} />
        }
        return(
        <div onClick = {this.closeModal} className={this.state.show ? "modal-custom-backdrop" : "modal-custom-closed"}>
            
            <div className= "modal-custom-container box-shadow animated05 slideInDown">
                    {active_component}
            </div>

        </div>
        )
    }
}