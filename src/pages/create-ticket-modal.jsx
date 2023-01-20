import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from 'react-router-dom'
import { tableService } from "../services/table.service"
import { closePopup, getProviders, openPopup, updateFinding } from "../store/table.actions"
import { CustomSelect } from "../cmps/custom-select"
import { CustomInputRadio } from "../cmps/custom-input-radio"
import { RadioGroup } from "@mui/material"
import closeIcon from '../assets/img/close-icon.svg'

export const CreateTicketModal = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const findingItem = location.state
    const providers = useSelector(state => state.tableModule.providers)
    const [isFormFullyOpen, setIsFormFullyOpen] = useState(false)
    const [isDisplayPlaceholder, setIsDisplayPlaceholder] = useState(true)
    const [ticket, setTicket] = useState({
        title: findingItem.title,
        description: findingItem.description,
        project: { id: '', title: 'Select project', issue: [] }
        , issueType: ''
    })

    useEffect(() => {
        loadPorviders()
        dispatch(closePopup())
    }, [])

    const loadPorviders = async () => {
        try {
            const providersFromService = await dispatch(getProviders())
            setTicket(prevTicket => ({ ...prevTicket, provider: providersFromService.jira }))
        } catch (err) {
            console.error('Cannot load table', err)
        }
    }

    const onSetProvider = (ev) => {
        const value = ev.target.value.toLocaleLowerCase()
        setTicket(prevTicket => ({
            ...prevTicket,
            provider: providers[value],
            project: { title: 'Select project', id: '', issue: [] },
            issueType: ''
        }))
        setIsFormFullyOpen(false)
        setIsDisplayPlaceholder(true)
    }

    const onSetProject = async (ev) => {
        const project = await tableService.getProjectById(ticket.provider, ev.target.value,)
        setTicket(prevTicket => ({ ...prevTicket, project, issueType: '' }))
        setIsDisplayPlaceholder(true)
    }

    const onSetIssue = (ev) => {
        setTicket(prevTicket => ({ ...prevTicket, issueType: ev.target.value }))
        setIsFormFullyOpen(true)
        setIsDisplayPlaceholder(true)
    }

    const onClose = () => {
        navigate('/')
    }

    const clickedOnModal = (ev) => {
        ev.stopPropagation()
    }

    const onCreateTicket = async () => {
        try {
            if (!ticket.title || !ticket.description) return
            const updatedTicket = await dispatch(updateFinding(findingItem.id, ticket))
            onClose()
            const msg = `${updatedTicket.provider.name}-${updatedTicket.id}`
            dispatch(openPopup(`Ticket created successfully: ${msg}`))
        } catch (err) {
            console.error('Cannot create ticket', err)
        }
    }

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        setTicket(prevTicket => ({ ...prevTicket, [field]: value }))
    }

    if (!providers.jira) return <div>Loading...</div>
    return (
        <section className="create-ticket-modal">
            <div className="black-screen" onClick={onClose}>

                <div className="modal-container" onClick={clickedOnModal}>

                    <div className="modal-header flex">
                        <span>Create a ticket</span>
                        <img onClick={onClose} src={closeIcon} alt="close" />
                    </div>

                    <div className="providers flex" onChange={onSetProvider}>
                        <RadioGroup defaultValue="Jira" name="providers-radio-buttons" row>
                            <CustomInputRadio provider={providers.jira} color='#9e9eff' />
                            <CustomInputRadio provider={providers.servicenow} color='#9e9eff' />
                            <CustomInputRadio provider={providers.monday} color='#9e9eff' />
                        </RadioGroup>
                    </div>

                    <div className="ticket-main-content">
                        <div className="custom-select flex">
                            <span className="tag-title">Project</span>
                            {ticket.provider?.projects && <CustomSelect selectValue={ticket.project.id}
                                selectHandler={onSetProject}
                                hidePlaceholder={setIsDisplayPlaceholder}
                                isDisplayPlaceholder={isDisplayPlaceholder}
                                title='Project'
                                option={ticket.provider.projects}
                                isDisabled={false} />}
                        </div>
                        <div className="custom-select flex">
                            <span className="tag-title">Issue Type</span>
                            <CustomSelect selectValue={ticket.issueType}
                                selectHandler={onSetIssue}
                                hidePlaceholder={setIsDisplayPlaceholder}
                                isDisplayPlaceholder={isDisplayPlaceholder}
                                title='Issue Type'
                                option={ticket.project.issue}
                                isDisabled={!ticket.project.id} />
                        </div>
                    </div>

                    {isFormFullyOpen && <React.Fragment><div className="finding-container flex">
                        <div className="input-container flex">
                            <label htmlFor="title">Title</label>
                            <input type="text"
                                name="title"
                                id="title"
                                value={ticket.title}
                                placeholder="Write a title"
                                onChange={handleChange}
                                required />
                        </div>
                        <div className="input-container flex">
                            <label htmlFor="title">Dscription</label>
                            <textarea type="text"
                                name="description"
                                id="description"
                                value={ticket.description}
                                placeholder="Describe the ticket"
                                onChange={handleChange}
                                required />
                        </div>
                    </div>
                        <div className="btn-container flex">
                            <button className="btn-modal cancel" onClick={onClose}>Cancel</button>
                            <button className="btn-modal create" onClick={onCreateTicket}>Create ticket</button>
                        </div>
                    </React.Fragment>}

                </div>
            </div>
        </section>
    )
}