
import { utilService } from "../services/util.service"

const TypeIssue = ['Bug', 'Story', 'Task']

export const mockProviders = {
    jira: {
        name: 'Jira',
        logoUrl: 'https://res.cloudinary.com/dqhrqqqul/image/upload/v1674055578/job-application-tracker/Jira_Software_24_htxmed.svg',
        iconUrl: 'https://res.cloudinary.com/dqhrqqqul/image/upload/v1674082508/job-application-tracker/atlassian_jira_logo_icon_170511_y3nkd1.png',
        projects: [
            {
                id: utilService.makeId(8),
                title: 'Project J22',
                issue: [...TypeIssue]
            },
            {
                id: utilService.makeId(8),
                title: 'Project J34',
                issue: [...TypeIssue]
            }
        ]
    },
    servicenow: {
        name: 'servicenow',
        logoUrl: 'https://res.cloudinary.com/dqhrqqqul/image/upload/v1674052050/job-application-tracker/idvLqY1N93_crulg7.svg',
        iconUrl: 'https://res.cloudinary.com/dqhrqqqul/image/upload/v1674082010/job-application-tracker/servicenow_logo_icon_168835_y7lsq5.png',
        projects: [
            {
                id: utilService.makeId(8),
                title: 'Project S99',
                issue: [...TypeIssue]
            },
            {
                id: utilService.makeId(8),
                title: 'Project S19',
                issue: [...TypeIssue]
            },
            {
                id: utilService.makeId(8),
                title: 'Project S72',
                issue: [...TypeIssue]
            },
        ]
    },
    monday: {
        name: 'Monday',
        logoUrl: 'https://res.cloudinary.com/dqhrqqqul/image/upload/v1674055846/job-application-tracker/monday-logo_uifnoe.png',
        iconUrl: 'https://res.cloudinary.com/dqhrqqqul/image/upload/v1674082389/job-application-tracker/monday_logo_icon_168967_khkgmh.png',
        projects: [
            {
                id: utilService.makeId(8),
                title: 'Project M56',
                issue: [...TypeIssue]
            },
            {
                id: utilService.makeId(8),
                title: 'Project M44',
                issue: [...TypeIssue]
            },
            {
                id: utilService.makeId(8),
                title: 'Project M09',
                issue: [...TypeIssue]
            },
            {
                id: utilService.makeId(8),
                title: 'Project M80',
                issue: [...TypeIssue]
            }
        ]
    }
}

export const moackFindings = [
    {
        id: utilService.makeId(8),
        title: 'This is the title of the finding 1',
        description: 'This is the description of the finding 1',
        ticket: null
    },
    {
        id: utilService.makeId(8),
        title: 'This is the title of the finding 2',
        description: 'This is the description of the finding 2',
        ticket: null
    },
    {
        id: utilService.makeId(8),
        title: 'This is the title of the finding 3',
        description: 'This is the description of the finding 3',
        ticket: null
    },
    {
        id: utilService.makeId(8),
        title: 'This is the title of the finding 4',
        description: 'This is the description of the finding 4',
        ticket: null
    },
    {
        id: utilService.makeId(8),
        title: 'This is the title of the finding 5',
        description: 'This is the description of the finding 5',
        ticket: null
    },
    {
        id: utilService.makeId(8),
        title: 'This is the title of the finding 6',
        description: 'This is the description of the finding 6',
        ticket: null
    },
    {
        id: utilService.makeId(8),
        title: 'This is the title of the finding 7',
        description: 'This is the description of the finding 7',
        ticket: null
    },
    {
        id: utilService.makeId(8),
        title: 'This is the title of the finding 8',
        description: 'This is the description of the finding 8',
        ticket: null
    },
    {
        id: utilService.makeId(8),
        title: 'This is the title of the finding 9',
        description: 'This is the description of the finding 9',
        ticket: null
    },
    {
        id: utilService.makeId(8),
        title: 'This is the title of the finding 10',
        description: 'This is the description of the finding 10',
        ticket: null
    },
    {
        id: utilService.makeId(8),
        title: 'This is the title of the finding 11',
        description: 'This is the description of the finding 11',
        ticket: null
    },
    {
        id: utilService.makeId(8),
        title: 'This is the title of the finding 12',
        description: 'This is the description of the finding 12',
        ticket: null
    }
]


