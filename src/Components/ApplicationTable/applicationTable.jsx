import React from "react";
import { Table } from "react-bootstrap";

const ApplicationTable = ({ applications }) => {
  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Job Title</th>
            <th>Company</th>
            <th>Link</th>
            <th>Status</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(
            ({
              applicationsId,
              dateTime,
              jobTitle,
              company,
              link,
              status,
              comments,
            }) => {
              return (
                <tr key={applicationsId}>
                  <td>{applicationsId}</td>
                  <td>{dateTime}</td>
                  <td>{jobTitle}</td>
                  <td>{company}</td>
                  <td>{link}</td>
                  <td>{status}</td>
                  <td>{comments}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default ApplicationTable;
