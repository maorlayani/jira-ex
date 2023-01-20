const initialState = {
    findings: [],
    providers: {},
    popup: {
        isOpen: false,
        msg: ''
    }
}

export function tableReducer(state = initialState, action = {}) {
    var newState = state
    var findings
    switch (action.type) {

        case 'SET_FINDINGS':
            newState = { ...state, findings: action.findings }
            break

        case 'SET_PROVIDERS':
            newState = { ...state, providers: action.providers }
            break

        case 'UPDATE_FINDING':
            findings = state.findings.map(finding => (finding.id === action.finding.id) ? action.finding : finding)
            newState = { ...state, findings }
            break

        case 'OPEN_POPUP':
            newState = {
                ...state, popup: { msg: action.msg, isOpen: true }
            }
            break

        case 'CLOSE_POPUP':
            newState = { ...state, popup: { ...state.popup, isOpen: false } }
            break

        default:
    }
    return newState
}