import React, { Component } from 'react';
import {RegistrationService} from '../service/RegistrationService';
import {CountryService} from '../service/CountryService';
import {CarService} from '../service/CarService';
import {NodeService} from '../service/NodeService';
import { Route } from 'react-router-dom';

import {InputText} from 'primereact/components/inputtext/InputText';
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea';
import {AutoComplete} from 'primereact/components/autocomplete/AutoComplete';
import {MultiSelect} from 'primereact/components/multiselect/MultiSelect';
import {Calendar} from 'primereact/components/calendar/Calendar';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {DataGrid} from 'primereact/components/datagrid/DataGrid';
import {Tree} from 'primereact/components/tree/Tree';
import {Checkbox} from 'primereact/components/checkbox/Checkbox';
import {Menu} from 'primereact/components/menu/Menu';
import {PanelMenu} from 'primereact/components/panelmenu/PanelMenu';
import {InputMask} from 'primereact/components/inputmask/InputMask';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import {Password} from 'primereact/components/password/Password';
import {Spinner} from 'primereact/components/spinner/Spinner';
import {Slider} from 'primereact/components/slider/Slider';
import {ListBox} from 'primereact/components/listbox/ListBox';
import {RadioButton} from 'primereact/components/radiobutton/RadioButton';
import {PickList} from 'primereact/components/picklist/PickList';
import {OrderList} from 'primereact/components/orderlist/OrderList';
import {ToggleButton} from 'primereact/components/togglebutton/ToggleButton';
import {SelectButton} from 'primereact/components/selectbutton/SelectButton';
import {Button} from 'primereact/components/button/Button';
import {SplitButton} from 'primereact/components/splitbutton/SplitButton';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';
import {Panel} from 'primereact/components/panel/Panel';
import {ProgressBar} from 'primereact/components/progressbar/ProgressBar';
import {Dialog} from 'primereact/components/dialog/Dialog';
import {Column} from 'primereact/components/column/Column';

export class RegisterEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEvent: {},
      teamName:'',
      teamSize:0,
      portfolio:'',
      location:'',
      stack:'',
      poc:'',
      teamMember:''
    }
    this.registrationService = new RegistrationService();
    this.onTeamName = this.onTeamName.bind(this);
    this.onTeamSize= this.onTeamSize.bind(this);
    this.onPortfolio = this.onPortfolio.bind(this);
    this.onLocation = this.onLocation.bind(this);
    this.onStack = this.onStack.bind(this);
    this.onPoc = this.onPoc.bind(this);
    this.onTeamMember = this.onTeamMember.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onTeamName(e) {
    this.setState({teamName: e.target.value});
}
onTeamSize(e) {
  this.setState({teamSize: e.target.value});
}
onPortfolio(e) {
  this.setState({portfolio: e.target.value});
}
onLocation(e) {
  this.setState({location: e.target.value});
}
onStack(e) {
  this.setState({stack: e.target.value});
}
onPoc(e) {
  this.setState({poc: e.target.value});
}
onTeamMember(e) {
  this.setState({teamMember: e.target.value});
}

handleSubmit(){
  var sTeamName=this.state.teamName;
  var steamSize=this.state.teamSize;
  var sportfolio=this.state.portfolio;
  var sLocation=this.state.location;
  var sStack=this.state.stack;
  var sPoc=this.state.poc;
  var sTeamMember=this.state.teamMember;
  this.registrationService.addEventRegistration( 5,sPoc,sTeamMember,sTeamName).then(res => {this.showSuccess})
      
}


    render() {
       console.log(this.props.selectedEvent);
        return (
            <div className="ui-g ui-fluid">
                      
            <div className="card card-w-title">
      <h3>Register Event</h3>
      <div className="ui-g form-group">
          
          <table className="table-width-full">
          
         <div className="ui-g form-group">
          
    <label htmlFor="teamName">Team Name</label>
    <input type="text" className="form-control" id="teamName" name="teamName" placeholder="Enter Team Name"  onChange={this.onTeamName} value={this.state.teamName} />
  </div>
  <div className="form-group">
  <label htmlFor="teamSize">Team Size</label>
    <input type="number" className="form-control" id="teamSize" name="teamSize" placeholder="Enter Team Size" onChange={this.onTeamSize} value={this.state.teamSize}/>
  </div>
  <div className="form-group">
  <label htmlFor="portfolio">Portfolio</label>
    <input type="text" className="form-control" id="portfolio" name="portfolio" placeholder="Enter Portfolio" onChange={this.onPortfolio} value={this.state.portfolio}/>
  </div>
  <div className="form-group">
  <label htmlFor="location">Location</label>
    <input type="text" className="form-control" id="location" name="location" placeholder="Enter Location" onChange={this.onLocation} value={this.state.location}/>
  </div>
  <div className="form-group">
  <label htmlFor="techStack">Technology Stack</label>
    <textarea className="form-control" id="techStack" name="techStack" placeholder="Enter Technology Stack" onChange={this.onStack} value={this.state.stack}/>
  </div>
  <div className="form-group">
  <label htmlFor="teamPoc">POC</label>
    <input type="text" className="form-control" id="teamPoc" name="teamPoc" placeholder="Enter Event POC" onChange={this.onPoc} value={this.state.poc}/>
  </div>
  <div className="form-group">
    <label htmlFor="teamMembers">Team Members</label>
    <textarea className="form-control" id="teamMembers" name="teamMembers"placeholder="Team Members" onChange={this.onTeamMember} value={this.state.teamMember} />
  </div>

  
  <button type="submit" className="btn btn-danger" onClick={this.handleSubmit}>Submit</button>

          </table>
         
          </div></div>
          </div>
        
        );
      }
    }
