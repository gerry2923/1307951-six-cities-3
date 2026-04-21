import { store } from '../store/index.ts';

// returnType позволяет определить тип, который возвращает какая-то функция
export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
