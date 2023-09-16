export const reducer = (state, action) => {
    switch(action.type){
        case 'DENTISTAS':
            return {...state, dentistas: action.payload}
        case 'AGREGAR_FAVORITO':
            return {...state, favoritos: [...state.favoritos, action.payload]}
        case 'CAMBIAR_TEMA':
            return {...state, theme: action.payload}
        default:
            throw new Error()
        }
    }