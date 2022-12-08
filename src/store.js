import  {createStore}  from 'redux'

const INITIAL_STATE = {
    codeContent: '',
    statusContent: '',
    token: '',
    requestUUID: ''
}

function qrContent( state = INITIAL_STATE, action ) {
    switch (action.type) {
        case 'CHANGEQR':
            return { ...state, codeContent: action.value }
        case 'CHANGESTATE':
            return { ...state, statusContent: action.value}
        case 'CHANGETOKEN':
            return { ...state, token: action.value}
        case 'REQUESTUUID':
            return { ...state, requestUUID: action.value}
        default:
            return state
    }
}

const store = createStore(qrContent)

export default store