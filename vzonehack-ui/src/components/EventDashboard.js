import React, { Component } from 'react';
import {EventService} from '../service/EventService';
import {DataView, DataViewLayoutOptions} from 'primereact/components/dataview/DataView';
import {Panel} from 'primereact/components/panel/Panel';
import {Button} from 'primereact/components/button/Button';
import {InputText} from 'primereact/components/inputtext/InputText';

export class EventDashboard extends Component {

    constructor() {
        super();
        this.state = {
            eventsData: []
        };
        this.eventService = new EventService();
        this.dataViewItemTemplate = this.dataViewItemTemplate.bind(this);
        this.dataViewHeaderTemplate = this.dataViewHeaderTemplate.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
    }

    componentDidMount() {
        //this.eventService.addEvent("hackday", "test", "2018-07-10T18:30:00.000Z", "2018-07-11T18:30:00.000Z", "2018-07-01T18:30:00.000Z", "2018-07-03T18:30:00.000Z", 1, 1, "test", "test", "test").then(res => console.log(res));
        this.eventService.getAllEvents().then(res => this.setState({eventsData: res.getAllEvents}));
    }

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.setState({sortOrder: -1, sortField:value.substring(1, value.length), sortKey: value});
        }
        else {
            this.setState({sortOrder: 1, sortField:value, sortKey: value});
        }
    }

    dataViewItemTemplate(event,layout) {
        if(!event) {
            return;
        }

        let src = "assets/demo/images/hackathon.png";

        if(layout === 'list') {
            return (
                <div className="ui-g" style={{padding: '0.5em', borderBottom: '1px solid #d9d9d9'}}>
                    <div className="ui-g-12 ui-md-8 car-details">
                        <div className="ui-g">
                            <div className="ui-g-2 ui-sm-6">Event Name:</div>
                            <div className="ui-g-10 ui-sm-6">{event.eventName}</div>

                            <div className="ui-g-2 ui-sm-6">Event Type</div>
                            <div className="ui-g-10 ui-sm-6">{event.eventType}</div>

                            <div className="ui-g-2 ui-sm-6">Start:</div>
                            <div className="ui-g-10 ui-sm-6">{event.eventStartDate}</div>

                            <div className="ui-g-2 ui-sm-6">End:</div>
                            <div className="ui-g-10 ui-sm-6">{event.eventEndDate}</div>
                        </div>
                    </div>

                    <div className="ui-g-12 ui-md-1 search-icon" style={{marginTop:'40px'}}>
                        <Button icon="fa-search" onClick={(e) => this.setState({ selectedCar: event, visible: true })}></Button>
                    </div>
                </div>
            );
        }
        if(layout === 'grid') {
            return (
                <div style={{ padding: '.5em' }} className="ui-g-12 ui-md-4">
                    <Panel header={event.eventName} style={{ textAlign: 'center' }}>
                        <div className="car-detail">{event.eventStartDate} - {event.eventEndDate}</div>
                        <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                        <Button icon="fa-search"></Button>
                    </Panel>
                </div>
            );
        }
    }

    dataViewHeaderTemplate() {
        return <div className="ui-g">
                    <div className="ui-g-6 ui-md-4 filter-container">
                        <div style={{position:'relative'}}>
                            <InputText placeholder="Search Events" onKeyUp={e=>this.dv.filter(e.target.value)}/>
                        </div>
                    </div>
                    <div className="ui-g-6 ui-md-4" style={{textAlign: 'right'}}>
                        <DataViewLayoutOptions onClick={(e)=>this.dv.changeLayout(e.originalEvent,e.layout)}/>
                    </div>
                </div>;
    }

    render(){

        let dataViewHeader = this.dataViewHeaderTemplate();
        return (
            <div className="ui-g">
                <div className="ui-g-12">
                    {/*  Left Side  */}
                    <div className="card card-w-title">
                        <h1>All Events</h1>
                        <DataView ref={(el) => { this.dv = el; }} value={this.state.eventsData} filterBy={"eventName"} itemTemplate={this.dataViewItemTemplate}
                              paginatorPosition={'both'} paginator={true} rows={9} header={dataViewHeader} sortOrder={this.state.sortOrder} sortField={this.state.sortField}/>
                    </div>
                </div>
            </div>
        );
    }
}