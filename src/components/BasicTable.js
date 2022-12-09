import { Table } from "react-bootstrap";

const BasicTable = () => {
  return (
    <div>
      <Table striped bordered hover>
      <thead>
      <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>

      </thead>

      <tbody>
      <tr>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>

      </tbody>
       
      
      </Table>
    </div>
  );
};

export default BasicTable;
