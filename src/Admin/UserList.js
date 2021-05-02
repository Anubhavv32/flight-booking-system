import React from 'react';

export default function UserList(props) {
  const {allProfile} = props;
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(allProfile) 
          ? allProfile.map(user => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobileNo}</td>
                <td>{user.type}</td>
              </tr>
            )
          }) 
          : null}
          <tr>
            <td>Admin</td>
            <td>admin123@gmail.com</td>
            <td>9292929292</td>
            <td>Admin</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
