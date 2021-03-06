import { priceReducer } from './price';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { userReducer, userAction } from './user'
import { meterReducer } from './meter'
import { ticketsReducer } from './tickets'
import { valueReducer } from './value'
import { newsReducer } from './news'

export const store = configureStore({
  reducer: {
    user: userReducer,
    meter: meterReducer,
    tickets: ticketsReducer,
    value: valueReducer,
    news: newsReducer,
    price: priceReducer
  },
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>

store.dispatch(
  userAction.verify({
    token: window.localStorage.getItem('Token') || '',
  }) as any,
)
