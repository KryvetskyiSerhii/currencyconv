import { createSlice } from "@reduxjs/toolkit";




const general = createSlice ({
    name: 'general',
    initialState: {
        currencies: [
            {
                name: 'USD',
                rate: 0
            },
            {
                name: 'EUR',
                rate: 0
            },
            {
                name: 'UAH',
                rate: 1
            },

        ]       
        
    },
    reducers: {
        addCurrency(state,action) {
            state.currencies.find(elem => elem.name =='USD').rate  = (1/action.payload.usd).toFixed(2)
            state.currencies.find(elem=>elem.name=='EUR').rate = (1/action.payload.eur).toFixed(2)
        }
    }
})


export default general.reducer

export const {addCurrency} = general.actions