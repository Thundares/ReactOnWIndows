import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserTable from './tables/Script1';

function App() {

    const addUser = (user) =>
    {
        user.id = user.length + 1
        setUsers
    }

    return (
        <div className="container">
            <h1>CRUD test</h1>
            <div className="flex-row">
                <div className="flex-large">
                    <h2>Add user</h2>
                </div>
                <div className="flex-large">
                  <h2>View Users</h2>
                  <UserTable />
                </div>
            </div>
        </div>
    );
}

export default App;
