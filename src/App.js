import React, { Fragment, useState } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MyTodos from './MyTodos';
import Home from './Home';


function App() {
    const [value, setValue] = useState('one');

    const handleChange = (event, value) => {
        setValue(value);
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab value="one" label="Home" />
                    <Tab value="two" label="My Todos" />
                </Tabs>
            </ AppBar>
            {value === 'one' && <div><Home /></div>}
            {value === 'two' && <div><MyTodos /></div>}
        </div>
    );
}
export default App;