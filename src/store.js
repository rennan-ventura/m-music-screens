import  {createStore}  from 'redux'

const INITIAL_STATE = {
    codeContent: '',
    statusContent: '',
}

function qrContent( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case 'CHANGEQR':
            return { ...state, codeContent: action.value }
        case 'CHANGESTATE':
            return { ...state, statusContent: action.value}
        default:
            return state
    }
}

const store = createStore(qrContent)

export default store