
import React, { Component } from 'react';
import {CarService} from '../service/CarService';
import {ReportsService} from '../service/ReportsService';
import {Panel} from 'primereact/components/panel/Panel';
import {Checkbox} from 'primereact/components/checkbox/Checkbox';
import {Button} from 'primereact/components/button/Button';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import {InputText} from 'primereact/components/inputtext/InputText';
import {Chart} from 'primereact/components/chart/Chart';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';
import {Schedule} from 'primereact/components/schedule/Schedule';

export class Reports extends Component {

    constructor() {
        super();
        this.state = {
            allEventsData: [],
            upcomingEventsData: [],
            ongoingEventsData: [],

            tasks: [],
            city: null,
            selectedCar: null,

            lineData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Participants',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#007be5'
                    },
                    {
                        label: 'Events',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#20d077'
                    }
                ]
            }

        };
        this.reportsService = new ReportsService();
        this.onTaskChange = this.onTaskChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.carservice = new CarService();
    }

    onTaskChange(e) {
        let selectedTasks = [...this.state.tasks];
        if(e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        this.setState({tasks: selectedTasks});
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    componentDidMount() {
        this.reportsService.getLeaderboardStats().then(data => this.setState({leaderboard: data}));
        this.reportsService.getAllEvents().then(res => this.setState({allEventsData: res.getAllEvents}));
        this.reportsService.getUpcomingEvents().then(res => this.setState({upcomingEventsData: res.getUpcomingEvents}));
        this.reportsService.getOngoingEvents().then(res => this.setState({ongoingEventsData: res.getOngoingEvents}));
    }

    render() {
       

        let scheduleHeader = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
        };
        //console.log(this.state.ongoingEventsData[]);
        
        let calendarEvents = [];
        let i =this.state.ongoingEventsData.length;
        while(i>0){
            i=i-1;
            let event= {
                "id": this.state.ongoingEventsData[i].eventId,
                "title": this.state.ongoingEventsData[i].eventName,
                "start": this.state.ongoingEventsData[i].eventStartDate,
                "end": this.state.ongoingEventsData[i].eventEndDate,
                "url": "http://google.com/"                
            };
            calendarEvents.push(event);
        }
        i =this.state.upcomingEventsData.length;
        while(i>0){
            i=i-1;
            let event= {
                "id": this.state.upcomingEventsData[i].eventId,
                "title": this.state.upcomingEventsData[i].eventName,
                "start": new Date(this.state.upcomingEventsData[i].eventStartDate),
                "end": new Date(this.state.upcomingEventsData[i].eventEndDate),
                "url": "http://google.com/"                 
                              
            };
            calendarEvents.push(event);
        }
        //console.log(JSON.stringify(calendarEvents));


       /* i =this.state.upcomingEventsData.length;
        let trendingEvents = [];        
        if(i>0){
            trendingEvents = this.state.upcomingEventsData;
            this.state.upcomingEventsData.sort(function(a, b){                
                if(a.viewCount < b.viewCount) return b;
                if(a.viewCount > b.viewCount) return a;
                return a;
            });

            if(i<6){
                trendingEvents = this.state.upcomingEventsData;                
            }
            else{
                let i=0;
                while(i<6){
                    trendingEvents.push(this.state.upcomingEventsData[i++]);
                }
            }
        }*/
        
        
        let events = [
			{
				"id": 1,
				"title": "All Day Event",
				"start": "2018-07-01"
			},
			{
				"id": 2,
				"title": "Long Event",
				"start": "2018-07-07",
				"end": "2018-07-10"
			},
			{
				"id": 3,
				"title": "Repeating Event",
				"start": "2018-07-09T16:00:00"
			},
			{
				"id": 4,
				"title": "Repeating Event",
				"start": "2018-07-16T16:00:00"
			},
			{
				"id": 5,
				"title": "Conference",
				"start": "2018-07-11",
				"end": "2018-07-13"
			},
			{
				"id": 6,
				"title": "Meeting",
				"start": "2018-07-12T10:30:00",
				"end": "2018-07-12T12:30:00"
			},
			{
				"id": 7,
				"title": "Lunch",
				"start": "2018-07-12T12:00:00"
			},
			{
				"id": 8,
				"title": "Meeting",
				"start": "2018-07-12T14:30:00"
			},
			{
				"id": 9,
				"title": "Happy Hour",
				"start": "2018-07-12T17:30:00"
			},
			{
				"id": 10,
				"title": "Dinner",
				"start": "2018-07-12T20:00:00"
			},
			{
				"id": 11,
				"title": "Birthday Party",
				"start": "2018-07-13T07:00:00"
			},
			{
				"id": 12,
				"title": "Click for Google",
				"url": "http://google.com/",
				"start": "2018-07-28"
			}
        ];
        
        //console.log(JSON.stringify(this.state.allEventsData));
        //console.log(this.state.allEventsData.length,this.state.upcomingEventsData.length,this.state.ongoingEventsData.length);
        

        return <div className="ui-g ui-fluid dashboard">
            <div className="ui-g-12 ui-md-4">
                <div className="card clearfix summary">
                    <span className="title">Upcoming events</span>
                    <span className="detail">Number of events</span>
                    <span className="count visitors">{this.state.upcomingEventsData.length}</span>
                </div>
            </div>
            <div className="ui-g-12 ui-md-4">
                <div className="card clearfix summary">
                    <span className="title">On Going Events</span>
                    <span className="detail">Number of events</span>
                    <span className="count purchases">{this.state.ongoingEventsData.length}</span>
                </div>
            </div>
            <div className="ui-g-12 ui-md-4">
                <div className="card clearfix summary">
                    <span className="title">Completed Events</span>
                    <span className="detail">Number of events</span>
                    <span className="count revenue">{this.state.allEventsData.length-this.state.upcomingEventsData.length-this.state.ongoingEventsData.length}</span>
                </div>
            </div>

            
            <div className="ui-g-12 ui-md-6">
                <div className="card">
                    <h1 style={{fontSize:'16px'}}>Leaderboard</h1>
                    <DataTable value={this.state.leaderboard}  style={{marginBottom: '20px'}} responsive={true}
                               selectionMode="single" selection={this.state.selectedCar} onSelectionChange={(e) => this.setState({selectedCar: e.data})}>
                        <Column field="rank" header="Rank" sortable={true} />
                        <Column field="team" header="Team" sortable={true} />
                        <Column field="event" header="Event" sortable={true} />
                    </DataTable>
                </div>
            </div>


            <div className="ui-g-12 ui-md-6">
                <div className="card">
                    <Chart type="line" data={this.state.lineData}/>
                </div>
            </div>


            <div className="ui-g-12 ui-md-8">
                <Panel header="Calendar" style={{height: '100%'}}> 
                    <Schedule events={calendarEvents} header={scheduleHeader} defaultDate={new Date()} eventLimit={4}></Schedule>
                </Panel>
            </div>

            <div className="ui-g-12 ui-md-4">
                <Panel header="Trending Events:" style={{height:'100%'}}>
                    <div className="activity-header">
                        <div className="ui-g">
                            <div className="ui-g-6">
                                <h1>Last Activity</h1>
                                {/* <p>Updated 1 minute ago</p> */}
                            </div>
                            <div className="ui-g-6" style={{textAlign:'right'}}>
                                <Button label="Refresh" icon="fa-refresh" />
                            </div>
                        </div>
                    </div>
                    <ul className="activity-list">
                        
                        <li>
                            <div><h1>Speedathon</h1></div>
                            <div className="ui-g">
                                <div className="ui-g-6">Last Date</div>
                                <div className="ui-g-6">24/08/2018</div>
                            </div>
                        </li>
                        <li>
                            <div><h1>Reactathon</h1></div>
                            <div className="ui-g">
                            <div className="ui-g-6">Last Date</div>
                                <div className="ui-g-6">24/08/2018</div>
                            </div>
                        </li>
                        <li>
                            <div><h1>Machine Learning</h1></div>
                            <div className="ui-g">
                            <div className="ui-g-6">Last Date</div>
                                <div className="ui-g-6">24/08/2018</div>
                            </div>
                        </li>
                        <li>
                            <div ><h1>Machine Learning</h1></div>
                            <div className="ui-g">
                            <div className="ui-g-6">Last Date</div>
                                <div className="ui-g-6">24/08/2018</div>
                            </div>
                        </li>
                        <li>
                            <div><h1>Machine Learning</h1></div>
                            <div className="ui-g">
                            <div className="ui-g-6">Last Date</div>
                                <div className="ui-g-6">24/08/2018</div>
                            </div>
                        </li>
                    </ul>
                </Panel>
            </div>
        </div>
    }
}




/*
Add Metrics.js in components folder

Import it in App.js
import { Metrics } from "./components/Metrics";

Add this in menu items array after documentation:
{label: 'Metrics', icon: 'fa fa-fw fa-book', command: () => { window.location = "#/metrics"}}

Add this in App.js:
<Route path="/metrics" component={Metrics} />

*/