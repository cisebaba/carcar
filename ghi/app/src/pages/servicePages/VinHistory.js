import React from 'react';

class VinHistory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search: '',
            appointments:[]
        };
    this.handleChangeSearch = this.handleChangeSearch.bind(this);

    }
    async componentDidMount(){
        const url = 'http://localhost:8080/api/appointments/';
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            this.setState({appointments: data.appointments})
        }
    }
   

    handleChangeSearch(event){
        const value = event.target.value;
        this.setState({ search: value })
    }
    
    render() {
        return (
            <div>
                {/* <label>VIN search</label> */}
                <input onChange={this.handleChangeSearch} type="text" className="form-control mt-5" placeholder="Search VIN"/>
                <table className='table table-striped mt-5'>
                <thead>
                    <tr>
                    <th>VIN</th>
                    <th>Car Owner</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.appointments.map((appointment) => {
                    // console.log(this.state.appointments[i].id)
                        let isComplete=""
                        if(appointment.is_finished === true){
                        isComplete="table-success"
                        }
                        let isVip=""
                        if(appointment.is_vip===true){
                        isVip="table-dark"
                        }
                        let hideList = ""
                        if(appointment.vin_num !== this.state.search){
                            hideList="d-none"
                        }
                        
                    return(
                        <tr className={isComplete} key={appointment.id}>
                            <td className={isVip+" "+hideList}>{appointment.vin_num}</td>
                            <td className={hideList}>{appointment.owner}</td>
                            <td className={hideList}>{appointment.date}</td>
                            <td className={hideList}>{appointment.time}</td>
                            <td className={hideList}>{appointment.technician}</td>
                            <td className={hideList}>{appointment.reason}</td>
                        </tr>
                    );
                    })}
                    <p>*VIP customers are highlighted.</p>
                </tbody>
                </table>
            </div>

        );
    }
}
export default VinHistory;