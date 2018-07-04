import React, { Component } from 'react';
import {CountryService} from '../service/CountryService';
import {CarService} from '../service/CarService';
import {NodeService} from '../service/NodeService';
import {EventService} from '../service/EventService';
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
import {Messages} from 'primereact/components/messages/Messages';
import {Growl} from 'primereact/components/growl/Growl';


export class EventForm extends Component {

    constructor() {
        super(); 
    
        this.state = {
            countriesData: [],
            carOptions: [],
            checkboxValue: [],
            dialogValue: false,
            dataTableValue: [],
            dataGridValue: [],
            treeData: [],
            picklistSourceCars: [],
            picklistTargetCars: [],
            orderlistCars: [],
            locations: [],
            tech: [],
            hackOptions:[],
            hackName:'',
            startDate:'',
            endDate:'',
            nstartDate:'',
            nendDate:'',
            hackPoc:'',
            hackDet:''
        };
        this.countryService = new CountryService();
        this.carService = new CarService();
        this.nodeService = new NodeService();
        this.eventService = new EventService();
        this.onDropdownChange = this.onDropdownChange.bind(this);
        this.onDropdownClick = this.onDropdownClick.bind(this);
        this.onHackName = this.onHackName.bind(this);
        this.onStartDate = this.onStartDate.bind(this);
        this.onEndDate = this.onEndDate.bind(this);
        this.onNStartDate = this.onNStartDate.bind(this);
        this.onNEndDate = this.onNEndDate.bind(this);
        this.onHackPoc = this.onHackPoc.bind(this);
        this.onHackDet = this.onHackDet.bind(this);
        this.onSpinnerChange = this.onSpinnerChange.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
        this.onMultiSelectCarChange = this.onMultiSelectCarChange.bind(this);
        this.onMultiSelectLocationChange = this.onMultiSelectLocationChange.bind(this);
        this.onMultiSelectTechChange = this.onMultiSelectTechChange.bind(this);
        this.onMultiSelectHackChange = this.onMultiSelectHackChange.bind(this);
        this.onToggleChange = this.onToggleChange.bind(this);
        this.onSelectButtonChange = this.onSelectButtonChange.bind(this);
        this.onListBoxChange = this.onListBoxChange.bind(this);
        this.dataGridTemplate = this.dataGridTemplate.bind(this);
        this.orderListTemplate = this.orderListTemplate.bind(this);
        this.onSliderChange = this.onSliderChange.bind(this);
    }
  
    componentDidMount(){
        this.setState({countriesData: this.countryService.getCountries(this)});
        this.carService.getCarsSmall().then(data => this.setState({dataTableValue: data}));
        this.carService.getCarsLarge().then(data => this.setState({dataGridValue: data}));
        this.nodeService.getFiles(this).then(files => this.setState({treeData: files}));
        this.carService.getCarsSmall().then(data => this.setState({picklistSourceCars: data}));
        this.carService.getCarsSmall().then(data => this.setState({orderlistCars: data}));
    }

    onCountryValueChange(e) {
        this.setState({ country: e.value, filteredCountries: null });
    }

    filterCountry(event) {
        let results = this.state.countriesData.filter((country) => {
            return country.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
        this.setState({ filteredCountries: results });
    }

    onDropdownChange(event){
        this.setState({dropdownCity: event.value})
    }
    onDropdownClick(event){
        var eventID=3;
        var shackName=this.state.hackName;
        var shackDet=this.state.hackDet;
        var shackType=this.state.hackOptions;
        var sStartDate=this.state.startDate;
        var sEndDate=this.state.endDate;
        var snstartDate=this.state.nstartDate;
        var snendDate=this.state.nendDate;
        var smaxSize=this.state.dropdownCity;
        var sportfolio=this.state.carOptions;
        var slocation=this.state.locations;
        var spoc=this.state.hackPoc;
        //this.eventService.addEvent(2,'test1','VDSI','2018-07-05','2018-07-10','2018-07-05','2018-07-10',1,5,"NTS","Chennai","test",0,0).then(res => this.setState({eventsData: res.getAllEvents}))
        this.eventService.addEvent(shackName, shackType[0], sStartDate,sStartDate,snstartDate,snendDate,1,smaxSize[0],sportfolio[0],slocation[0],spoc,0,0).then(res => {this.showSuccess})
        alert(this.state.startDate);
        this.showSuccess;
    }
    onSpinnerChange(event){
        this.setState({spinnerValue: event.value})
    }

    onCheckboxChange(event){
        var selected = [...this.state.checkboxValue];
        if(event.checked)
            selected.push(event.value);
        else
            selected.splice(selected.indexOf(event.value), 1);

        this.setState({checkboxValue: selected});

    }

    onRadioChange(event){
        this.setState({radioValue: event.value})
    }
    showSuccess() {
        let msg = { severity: 'success', summary: 'Success Message', detail: 'Order submitted' };
        this.growl.show(msg);
        this.messages.show(msg);
    }
    onSliderChange(event){
        this.setState({sliderValue:event.value})
    }

    onMultiSelectCarChange(e) {
        this.setState({carOptions: e.value});
    }
    onMultiSelectHackChange(e) {
        this.setState({hackOptions: e.value});
    }

    onHackName(e) {
        this.setState({hackName: e.target.value});
    }
    onHackPoc(e) {
        this.setState({hackPoc: e.target.value});
    }
    onHackDet(e) {
        this.setState({hackDet: e.target.value});
    }

    onStartDate(e) {
        this.setState({startDate: e.value});
    }
    onEndDate(e) {
        this.setState({endDate: e.value});
    }
    onNStartDate(e) {
        this.setState({nstartDate: e.value});
    }
    onNEndDate(e) {
        this.setState({nendDate: e.value});
    }
    onMultiSelectLocationChange(e) {
        this.setState({locations: e.value});
    }
    onMultiSelectTechChange(e) {
        this.setState({tech: e.value});
    }
    onToggleChange(event){
        this.setState({toggleButtonValue: event.value})
    }

    onSelectButtonChange(event){
        this.setState({types: event.value})
    }

    onListBoxChange(e) {
        this.setState({listBoxCity: e.value});
    }

    dataGridTemplate(car) {
        if (!car) {
            return;
        }

        return (
            <div style={{padding: '3px'}} className="ui-g-12 ui-md-4">
                <Panel header={car.vin} style={{ textAlign: 'center' }}>
                    <img src={`assets/demo/images/car/${car.brand}.png`} alt={car.brand} style={{width: '75%'}}/>
                    <div className="car-detail">{car.year} - {car.color}</div>
                </Panel>
            </div>
        );
    }

    orderListTemplate(car){
        if (!car) {
            return;
        }

        return (
            <div className="ui-helper-clearfix">
                <img src={`assets/demo/images/car/${car.brand}.png`} alt={car.brand} style={{display:'inline-block',margin:'2px 0 2px 2px', width: '50px'}}/>
                <div style={{fontSize:14,float:'right',margin:'15px 5px 0 0'}}>{car.brand} - {car.year} - {car.color}</div>
            </div>
        );
    }

    render(){

        let carOptions=[
          
            {label: 'NT', value: 'NT'},
            {label: 'VES', value: 'VES'},
            {label: 'Wireline', value: 'Wireline'},
            {label: 'Wireless', value: 'Wireless'},
            {label: 'GTS', value: 'GTS'}
 
        ];

        let hackOptions=[
            {label: 'VDSI', value: 'VDSI'},
            {label: 'VERIZON', value: 'VERIZON'}
 
        ];
        let locations=[
            {label: 'Chennai', value: 'Chennai'},
            {label: 'Hyderabad', value: 'Hyderabad'}
 
        ];

        let tech=[
            {label: 'Java', value: 'Java'},
            {label: '.net', value: '.net'},
            {label: 'React', value: 'React'},
            {label: 'Angular', value: 'Angular'},
            {label: 'Node', value: 'Node'},
            {label: 'SpringBoot', value: 'SpringBoot'},
            {label: 'AWS', value: 'AWS'},
        ];
        let cities = [
            {label: 'Select Team Size', value: null},
            {label: '1', value: '1'},
            {label: '2', value: '2'},
            {label: '3', value: '3'},
            {label: '4', value: '4'},
            {label: '5', value: '5'},
        ];

        let listBoxCities = cities.slice(1,6);

        let types = [
            {label: 'Apartment', value: 'Apartment'},
            {label: 'House', value: 'House'},
            {label: 'Studio', value: 'Studio'}
        ];

        let splitButtonItems = [
            {label: 'Update', icon: 'fa-refresh'},
            {label: 'Delete', icon: 'fa-close'},
            {label: 'Home', icon: 'fa-home', url: 'http://www.primefaces.org/primereact'}
        ];

        let dialogFooter= <div className="ui-dialog-buttonpane ui-helper-clearfix">
                    <Button label="Login" icon="fa-user" onClick={()=>this.setState({dialogValue:false})}/>
                </div>;

        let menuItems = [
            {
                label: 'File',
                items: [
                    {label: 'New', icon: 'fa-plus'},
                    {label: 'Open', icon: 'fa-external-link-square'}
                ]
            },
            {
                label: 'Edit',
                items: [
                    {label: 'Undo', icon: 'fa-undo'},
                    {label: 'Redo', icon: 'fa-repeat'}
                ]
            }
        ];

        let panelMenuItems = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                        label: 'New', 
                        icon: 'fa-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search', 
                        icon: 'fa-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                    ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa-save'},
                            {label: 'Update', icon: 'fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa-minus'}
                        ]
                    }
                ]
            }
        ];

        return <div className="ui-fluid">
            <div className="ui-g">
                <div className="ui-g-12">
                    <div className="card card-w-title">
                        <h1>Register your Hackathon</h1>
                        <div className="ui-g form-group">
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="input">Hackathon Name</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <InputText id="input" onChange={this.onHackName} value={this.state.hackName}  />
                            </div>
                            <div className="ui-g-12 ui-md-12">
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="multiselect3">Hackathon Type</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <MultiSelect id="multiselect3" value={this.state.hackOptions} options={hackOptions} onChange={this.onMultiSelectHackChange}/>
                            </div>
                            <div className="ui-g-12 ui-md-12">
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="startDate">Event Start Date</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <Calendar id="startDate"  onChange={this.onStartDate} value={this.state.startDate}></Calendar>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="endDate">Event End Date</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <Calendar id="endDate" onChange={this.onEndDate} value={this.state.endDate}></Calendar>
                            </div>
                            <div className="ui-g-12 ui-md-12">
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="multiselect">Portfolio</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <MultiSelect id="multiselect" value={this.state.carOptions} options={carOptions} onChange={this.onMultiSelectCarChange}/>
                            </div>
                            <div className="ui-g-12 ui-md-12">
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="multiselect">Location</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <MultiSelect id="multiselect1" value={this.state.locations} options={locations} onChange={this.onMultiSelectLocationChange}/>
                            </div>
                            <div className="ui-g-12 ui-md-12">
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="multiselect">Tech Stack</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <MultiSelect id="multiselect2" value={this.state.tech} options={tech} onChange={this.onMultiSelectTechChange}/>
                            </div>
                            <div className="ui-g-12 ui-md-12">
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="dropdown">Max Team Size</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <Dropdown options={cities} value={this.state.dropdownCity} onChange={this.onDropdownChange} autoWidth={false}/>
                            </div>
                            <div className="ui-g-12 ui-md-12">
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="eventDate4">Nomination Start Date</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <Calendar id="eventDate4"  onChange={this.onNStartDate} value={this.state.nstartDate}></Calendar>
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="eventDate5">Nomination End Date</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <Calendar id="eventDate4"  onChange={this.onNEndDate} value={this.state.nendDate}></Calendar>
                            </div>
                            <div className="ui-g-12 ui-md-12">
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="input">Hackathon POC</label>
                            </div>
                            <div className="ui-g-12 ui-md-4">
                                <InputText id="input"  onChange={this.onHackPoc} value={this.state.hackPoc}  />
                            </div>
                            <div className="ui-g-12 ui-md-12">
                            </div>
                            <div className="ui-g-12 ui-md-2">
                                <label htmlFor="textarea">Details</label>
                            </div>

                            <div className="ui-g-12 ui-md-8">
                                <InputTextarea id="textarea" rows={4} cols={80} autoResize={true} onChange={this.onHackDet} value={this.state.hackDet}></InputTextarea>
                            </div>
                            <div className="ui-g-12 ui-md-12">
                            </div>
                            <div className="ui-g-12 ui-md-4">
                            </div>
                                <div className="ui-g-12 ui-md-4">   
                              <Button label="Submit" style={{marginBottom:'10px'}} className="red-button" onClick={this.onDropdownClick} />
                      </div>
                        </div>

                    </div>

                    
                </div>
                <div className="ui-g-12 ui-lg-6">
                   

                   
                </div>
             
            </div>
        </div>
    }
}