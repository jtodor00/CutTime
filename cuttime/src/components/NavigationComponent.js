import React, {Component} from 'react';
import '../styles/NavigationComponent.css';

export class NavigationComponent extends Component{
    constructor(props)
    {
        super(props);
        this.show = this.show.bind(this);
       
    }
  
    show()
    {
        this.props.showLogin();
    }
   
  
    render(){
        return(
            <div className="navigation box-shadow">
                <span className="navigation-title">CutTime</span>
                <button onClick={ this.show } className="navigation-button btn">PRIJAVA</button>
            </div>


        );
    }

}

