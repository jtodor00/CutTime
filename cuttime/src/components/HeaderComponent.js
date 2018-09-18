import React, {Component} from 'react';
import '../styles/HeaderComponent.css';
import { DateSelectComponent } from './DateSelectComponent';
import { TreatmentSelectComponent } from './TreatmentSelectComponent';

export class HeaderComponent extends Component{


    render(){
        return(
            <div className="header">
                <div className="header-cover">
                  <div className="header-interact">
                    <DateSelectComponent  dateSelected = {this.props.dateSelected} showDateSelection = {this.props.showDateSelection} />
                    <TreatmentSelectComponent showTreatmentSelection = {this.props.showTreatmentSelection}/>
                  </div>              
                </div>
            </div>
        );
    }

}

