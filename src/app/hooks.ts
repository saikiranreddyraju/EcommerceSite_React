import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import { RootState, AppDispatch } from './store';

/* Here useAppSelector & useAppDispatch are custom hooks */
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: ()=>AppDispatch = useDispatch;