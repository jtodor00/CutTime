import React,{ Component } from 'react';
import './styles/App.css';
import { NavigationComponent } from './components/NavigationComponent.js';
import { HeaderComponent } from './components/HeaderComponent';
import { ModalCustom } from './components/ModalCustom';
import { GeneralInfoComponent } from './components/GeneralInfoComponent';



class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = { app_state : 0 , modal_state : 0, dateSelected : null,treatmentsSelected : null,price : 0};
    this.showLogin = this.showLogin.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showDateSelection = this.showDateSelection.bind(this);
    this.showTreatmentSelection = this.showTreatmentSelection.bind(this);
    this.dateSelected = this.dateSelected.bind(this);
    this.treatmentsConfirmed = this.treatmentsConfirmed.bind(this);
    this.closeTreatmentSelection = this.closeTreatmentSelection.bind(this);
  }
  dateSelected(dateSelected)
  {
    this.setState({dateSelected: dateSelected});
  }
  showLogin()
  {
    this.setState({modal_state : 1});
  }
  showDateSelection()
  {
    this.setState({modal_state : 2});
  }
  showTreatmentSelection()
  {
    this.setState({modal_state : 3});
  }
  closeModal()
  {
    this.setState({modal_state : 0});
  }
  treatmentsConfirmed(treatments,price)
  {
    this.setState({treatmentsSelected : treatments, price : price,modal_state : 0});
  }
  closeTreatmentSelection(treatments,price)
  {
    this.setState({treatmentsSelected : treatments, price : price, modal_state : 0});
  }

  render() {
    let main_active = null;
    if(this.state.app_state === 0)
    {
        main_active = 
        <div>
          <GeneralInfoComponent />
        </div>
    }
    return (
      
      <div className="App">
        <div className="Navigation">
          <NavigationComponent showLogin = {this.showLogin}/>
        </div>
        <div className="Header">
          <HeaderComponent dateSelected = {this.state.dateSelected} showDateSelection = {this.showDateSelection} showTreatmentSelection = {this.showTreatmentSelection}/>
        </div>
        <div className="Main">
          {main_active}
        </div>
        <div className="Footer"></div>

        <ModalCustom dateSelected={this.dateSelected} haveDate = {this.state.dateSelected} 
        modal_state = {this.state.modal_state} closeModal = {this.closeModal} 
        selectedTreatments = {this.state.treatmentsSelected} selectedPrice = {this.state.price} 
        treatmentsConfirmed = {this.treatmentsConfirmed} closeTreatmentSelection = {this.closeTreatmentSelection}/>

      </div>
    );
  }
}

export default App;
