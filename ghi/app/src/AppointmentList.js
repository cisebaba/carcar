import React from "react";

class AppointmentList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            appointments:[]
        }
    }

    async componentDidMount(){
        const url = 'http://localhost:8080/api/appointments/';
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            this.setState({appointments: data.appointments})
        }
    }

    async handleDelete(id){
        // console.log(id, i)
        const deleteURl = `http://localhost:8080/api/appointments/${id}/`;
        const fetchConfig = {
            method: "delete"
        };
        const response = await fetch(deleteURl, fetchConfig);
        if (response.ok){
            const appointmentsToKeep = this.state.appointments.filter(appointment => (
                appointment.id !== id
              ))
              this.setState({appointments: appointmentsToKeep});
          }
          
    }
    // async handleComplete(id){
    //     const deleteState =`http://localhost:8080/api/appointments/${id}/`;
    //     console.log(deleteState)
    //     const fetchConfig = {
    //         method: "delete"
    //     };
    //     const response = await fetch(deleteState, fetchConfig);
    //     console.log(response)
    //     if (response.ok){
    //         const appointmentsToKeep = this.state.appointments.filter(appointment => (
    //             appointment.id !== id
    //           ))
    //           this.setState({appointments: appointmentsToKeep});
    //       }

    // }
    
    render(){
        return (
            <table className='table table-striped'>
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
                {this.state.appointments.map((appointment,i) => {
                    // console.log(this.state.appointments[0],"first")
                    // console.log(i)
                  return(
                      <tr key={appointment.id}>
                        <td>{appointment.vin_num}</td>
                        <td>{appointment.owner}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.time}</td>
                        <td>{appointment.technician}</td>
                        <td>{appointment.reason}</td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>this.handleDelete(appointment.id)} to="">Cancel</button>
                            {/* <button className="btn btn-danger" onClick={} to="">Finished</button> */}
                        </td>
                      </tr>
                  );
                })}
              </tbody>
            </table>
        )
    }
}
export default AppointmentList;
