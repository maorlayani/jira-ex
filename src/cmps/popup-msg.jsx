import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closePopup } from "../store/table.actions"

export const PopupMsg = ({ delay }) => {

    const popup = useSelector(state => state.tableModule.popup)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!popup.isOpen) return
        const timeoutId = setTimeout(() => {
            dispatch(closePopup())
        }, delay)
        return () => clearTimeout(timeoutId)
    })

    return (
        <section className={`popup-msg ${popup.isOpen ? 'open' : ''}`}>
            <span>{popup.msg}</span>
        </section>
    )
}