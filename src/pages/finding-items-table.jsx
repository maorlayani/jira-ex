import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { FindingItemList } from "../cmps/finding-item-list"
import { PopupMsg } from "../cmps/popup-msg"
import { getFindings } from "../store/table.actions"

export const FindingItemsTable = () => {

    const dispatch = useDispatch()
    const findings = useSelector(state => state.tableModule.findings)

    useEffect(() => {
        loadTFindings()
    }, [])

    const loadTFindings = async () => {
        try {
            await dispatch(getFindings())
        } catch (err) {
            console.error('Cannot load table', err)
        }
    }

    return (
        <section className="finding-items-table main-layout">
            <PopupMsg delay={3000} />
            <h1>Findings</h1>
            <FindingItemList findings={findings} />
            <Outlet />
        </section>
    )
}