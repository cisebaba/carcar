function SalesRecordList(props) {
    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Sales Person Name</th>
            <th>Sales Person Number</th>
            <th>Customer Name</th>
            <th>Automobile VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.salesrecords.map(sale => {
            return (
              <tr key={sale.id}>
                <td>{ sale.salesperson.name }</td>
                <td>{ sale.salesperson.employee_id }</td>
                <td>{ sale.customer.name }</td>
                <td>{ sale.automobile.vin }</td>
                <td>{ sale.price }</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    );
}

export default SalesRecordList;