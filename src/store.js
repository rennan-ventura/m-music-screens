import  {createStore}  from 'redux'

const INITIAL_STATE = {
    codeContent: '',
}

function qrContent( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case 'CHANGE':
            return { ...state, codeContent: action.value }
        default:
            return state
    }
}

const store = createStore(qrContent)

export default store