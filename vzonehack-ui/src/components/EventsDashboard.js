import React, { Component } from 'react';
import {CountryService} from '../service/CountryService';
import {CarService} from '../service/CarService';
import {NodeService} from '../service/NodeService';
import {EventService} from '../service/EventService';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { RegisterEvents } from './RegisterEvents';
import {Dashboard} from './Dashboard';
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

export class EventDashboard extends Component {

    constructor(props) {
        super(props);
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
            eventsData: [],
            selectedEvent:{}
        };
        this.eventService = new EventService();
        this.countryService = new CountryService();
        this.carService = new CarService();
        this.nodeService = new NodeService();
        this.onDropdownChange = this.onDropdownChange.bind(this);
        this.onSpinnerChange = this.onSpinnerChange.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.onMultiSelectCarChange = this.onMultiSelectCarChange.bind(this);
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
        this.eventService.getAllEvents().then(res => this.setState({eventsData: res.getAllEvents}));
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

    onSliderChange(event){
        this.setState({sliderValue:event.value})
    }

    onMultiSelectCarChange(e) {
        this.setState({carOptions: e.value});
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

    dataGridTemplate(event) {
        if (!event) {
            return;
        }

        return (
            <div style={{padding: '3px'}} className="ui-g-12 ui-md-4"  onClick={() =>this.onItemClick(event)}>
            
                <Panel header={event.eventName} style={{ textAlign: 'center' }} >
               
                    <img src={`assets/demo/images/Hackathon.jpg`} alt={event.eventName} style={{width: '75%'}}/>
                    <div className="car-detail">{event.eventType} - {event.eventLocation}</div>
                    <div className="car-detail">Event Dates : {event.eventStartDate} - {event.eventEndDate}</div>
                    <div className="car-detail">Nomination Starts on : {event.nominationStartDate} - {event.nominationEndDate}</div>
                    
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
    onItemClick(event) {

       console.log(event);
       this.setState({ selectedEvent: event});
       window.location = '#/registerEvents';
       
    
    }

    render(){

        let carOptions=[
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        let cities = [
            {label: 'Select City', value: null},
            {label: 'New York', value: 'New York'},
            {label: 'Rome', value: 'Rome'},
            {label: 'London', value: 'London'},
            {label: 'Istanbul', value: 'Istanbul'},
            {label: 'Paris', value: 'Paris'},
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
                <div className="ui-g">
                    <div className="card card-w-title">
                        <h1>Hack Events</h1>
                        <DataGrid value={this.state.eventsData} itemTemplate={this.dataGridTemplate} paginator={true} rows={18}/>
                    </div>               
                </div>
            </div>
        </div>
    }
    
    
}