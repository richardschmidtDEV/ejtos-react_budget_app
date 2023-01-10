import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Add code to import the components
import { AppProvider } from './context/AppContext';
import AllocationForm from './components/AllocationForm';
import Budget from './components/Budget';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <AllocationForm />
                <Budget />
                <ExpenseItem />
                <ExpenseList />
                <ExpenseTotal />
                <Remaining />
                </div>
        </AppProvider>
    );
};
export default App;