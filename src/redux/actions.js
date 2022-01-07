import { ADD_FILTER, REMOVE_ITEM, CLEAR_ALL } from "./actionTypes";

export const setFilter = filter => ({ type: ADD_FILTER, payload: { filter } });

export const removeItem = item => ({ type: REMOVE_ITEM, payload: { item } });

export const clearAll = item => ({ type: CLEAR_ALL, payload: {} });