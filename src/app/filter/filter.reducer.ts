import * as fromFiltro from './filter.accions';

const estadoInicial: fromFiltro.filtosValidos = 'todos';

export function fltroReducer ( state = estadoInicial, action: fromFiltro.acciones ): fromFiltro.filtosValidos{
  switch (action.type) {
    case fromFiltro.SET_FILTRO:
      return action.filtro;
    default:
      return state;
  }
}
