import { configureStore, type ThunkAction, type Action, combineReducers } from '@reduxjs/toolkit'
import editorReducer from './reducers/editorSlice'

const rootReducer = combineReducers({
  editorReducer
})
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>
