import { moackFindings, mockProviders } from '../data/mockData'
import { utilService } from './util.service'
import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'

var mock = new AxiosMockAdapter(axios)

mock.onGet('/findings').reply(200, moackFindings)

mock.onGet(/\/findings\/\d+/).reply(function (config) {
    const id = config.url.replace(/\D/g, '')
    const finding = moackFindings.find(finding => finding.id === id)
    return [
        200,
        {
            finding
        },
    ]
})

mock.onGet('/providers').reply(200, mockProviders)

mock.onGet(/\/projects\/\d+/).reply(function (config) {
    const id = config.url.replace(/\D/g, '')
    const provider = JSON.parse(config.data)
    const project = provider.projects.find(proj => proj.id === id)
    return [
        200,
        { project },
    ]
})

mock.onPut('/findings').reply(function (config) {
    const { data } = JSON.parse(config.data)
    const { finding, ticket } = data
    finding.title = ticket.title
    finding.description = ticket.description
    ticket.id = utilService.makeId()
    finding.ticket = ticket
    return [
        204,
        { finding },
    ]
})

export const tableService = {
    getFindings,
    getProviders,
    getProjectById,
    updateFinding
}

async function getFindings() {
    try {
        const { data } = await axios.get('/findings')
        return data
    } catch (err) {
        console.error('Cannot get the findings', err)
        throw err
    }
}

async function getProviders() {
    try {
        const { data } = await axios.get('/providers')
        return data
    } catch (err) {
        console.error('Cannot get the findings', err)
        throw err
    }
}

async function getProjectById(provider, projectId) {
    try {
        const { data } = await axios.get(`/projects/${projectId}`, { data: provider })
        return data.project
    } catch (err) {
        console.error('Cannot get the findings', err)
        throw err
    }
}

async function updateFinding(findingId, ticket) {
    try {
        const { finding } = await _getFindingById(findingId)
        const { data } = await axios.put('/findings', { data: { finding, ticket } })
        return data.finding
    } catch (err) {
        console.error('Cannot update finding', err)
        throw err
    }
}

async function _getFindingById(findingId) {
    try {
        const { data } = await axios.get(`/findings/${findingId}`)
        return data
    } catch (err) {
        console.error('Cannot get the findings', err)
        throw err
    }
}