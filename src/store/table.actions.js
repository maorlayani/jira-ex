import { tableService } from "../services/table.service"

export function getFindings() {
    return async (dispatch) => {
        try {
            const findings = await tableService.getFindings()
            dispatch({
                type: 'SET_FINDINGS',
                findings
            })
        } catch (err) {
            console.error('Cannot get findings', err)
        }
    }
}

export function updateFinding(findingId, ticket) {
    return async (dispatch) => {
        try {
            const finding = await tableService.updateFinding(findingId, ticket)
            dispatch({
                type: 'UPDATE_FINDING',
                finding
            })
            return finding.ticket
        } catch (err) {
            console.error('Cannot get finding', err)
        }
    }
}

export function getProviders() {
    return async (dispatch) => {
        try {
            const providers = await tableService.getProviders()
            dispatch({
                type: 'SET_PROVIDERS',
                providers
            })
            return providers
        } catch (err) {
            console.error('Cannot get providers', err)
        }
    }
}

export function openPopup(msg) {
    return (dispatch) => {
        dispatch({
            type: 'OPEN_POPUP',
            msg
        })
    }
}

export function closePopup() {
    return (dispatch) => {
        dispatch({
            type: 'CLOSE_POPUP'
        })
    }
}