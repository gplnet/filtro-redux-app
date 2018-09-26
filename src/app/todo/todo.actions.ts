import { Action } from '@ngrx/store';



export const TOGGLE_TODO =  '[TODO] Toggle todo';
export const TOOGLE_ALL_TODO =  '[TODO] Toggle All todo';

export const AGREGAR_TODO =  '[TODO] Agregar todo';
export const EDITAR_TODO =  '[TODO] Editar todo';
export const BORRAR_TODO =  '[TODO] Borrar todo';

export const BORRAR_TODO_ALL =  '[TODO] Borrar todo all';



export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;

  constructor(public texto: string ) {

  }
}
export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number ) {

  }
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;

  constructor(public id: number, public texto: string ) {

  }
}

export class BorrarTodoAction implements Action {
  readonly type = BORRAR_TODO;

  constructor(public id: number ) {

  }
}

export class BorrarTodoAllAction implements Action {
  readonly type = BORRAR_TODO_ALL;

}

export class ToggleTodoAllAction implements Action {
  readonly type = TOOGLE_ALL_TODO;

  constructor(public completado: boolean ) {

  }
}


export type Acciones = AgregarTodoAction
                     | ToggleTodoAction
                     | EditarTodoAction
                     | BorrarTodoAction
                     | ToggleTodoAllAction
                     | BorrarTodoAllAction;
