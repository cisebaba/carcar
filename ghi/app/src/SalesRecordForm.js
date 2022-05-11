import React from 'react';


class SalesRecordForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            automobile: '',
            automobiles: [],
            salesperson: '',
            salespeople: [],
            customer: '',
            customers: [],
            price: '',
        };
        this.handleAutomobileChange = this.handleAutomobileChange.bind(this);
        this.handleSalespersonChange = this.handleSalespersonChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.automobiles;
        delete data.salespeople;
        delete data.customers;

        const salesUrl = 'http://localhost:8090/api/salesrecords/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(salesUrl, fetchConfig);
        
        if (response.ok) {
            const cleared = {
                automobile: '',
                salesperson: '',
                customer: '',
                price: '',
            };
            this.setState(cleared);
        }
    }

    handleAutomobileChange(event) {
        const value = event.target.value;
        this.setState({automobile: value});
    }

    handleSalespersonChange(event) {
        const value = event.target.value;
        this.setState({salesperson: value})
    }

    handleCustomerChange(event) {
        const value = event.target.value;
        this.setState({customer: value})
    }

    handlePriceChange(event) {
        const value = event.target.value;
        this.setState({price: value})
    }

    // On this part
    async componentDidMount() {
        const url = 'http://localhost:8100/api/models/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({models: data.models});
        }
    }
    
    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create an automobile to inventory</h1>
                <form onSubmit={this.handleSubmit} id="create-model-form">
                <div className="form-floating mb-3">
                    <input onChange={this.handleColorChange} placeholder="Color" required
                        value={this.state.color} type="text" name="color" id="color"
                        className="form-control" />
                    <label htmlFor="name">Color</label>
                </div>
                <div className="form-floating mb-3">
                    <input  onChange={this.handleYearChange} placeholder="Year" required
                        value={this.state.year} type="number" name="year" id="year"
                        className="form-control" />
                    <label htmlFor="room_count">Year</label>
                </div>
                <div className="form-floating mb-3">
                    <input  onChange={this.handleVinChange} placeholder="VIN" required
                        value={this.state.vin} type="text" name="vin" id="vin"
                        className="form-control" />
                    <label htmlFor="room_count">VIN</label>
                </div>
                <div className="mb-3">
                    <select onChange={this.handleModelChange} required name="model" 
                        value={this.state.model} id="model" className="form-select">
                    <option value="">Choose a model</option>
                    {this.state.models.map(model => {
                        return (
                            <option key={model.id} value={model.id}>
                                {model.name}
                            </option>
                        );
                    })}
                    </select>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
    );
  }
}

export default SalesRecordForm;