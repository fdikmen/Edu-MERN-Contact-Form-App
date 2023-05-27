import Table from 'react-bootstrap/Table';
import { Helmet } from 'react-helmet';
function Messages() {
  return (
    <>
      <Helmet>
        <title>Message Page</title>
      </Helmet>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Messages;