import { store } from '../store';
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector, useDispatch, useStore } from 'react-redux';

// эти два типа надо вынести в отдельный файл
export type RootState = ReturnType < typeof store.getState >;
export type AppDispatch = typeof store.dispatch;

const useAppDispatch = useDispatch<AppDispatch>;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppStore: () => typeof store = useStore;

export { useAppDispatch, useAppSelector, useAppStore };
