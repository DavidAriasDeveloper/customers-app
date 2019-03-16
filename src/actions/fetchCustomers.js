import { FETCH_CUSTOMERS } from "./../constants";
import { createAction } from 'redux-actions';

const customers = [
        {
            "dni": "2700000",
            "name": "Juan Perez",
            "age": 37
        },
        {
            "dni": "3000000",
            "name": "Otro",
            "age": 35
        },
        {
            "dni": "3300000",
            "name": "Luis Martinez",
            "age": 32
        }
    ];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);