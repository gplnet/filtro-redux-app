import { Todo } from './todo/models/todo.models';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';
import * as fromFiltroActions from './filter/filter.accions';

export interface AppState {
  todos: Todo[];
  filtro: fromFiltroActions.filtosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filtro: fromFiltro.fltroReducer
};
