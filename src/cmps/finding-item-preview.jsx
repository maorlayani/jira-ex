import { Link } from "react-router-dom"

export const FindingItemPreview = ({ findingItem }) => {

    return (
        <section className="finding-item-preview">
            <span className="finding-title text-container">{findingItem.title}</span>
            <span className="finding-desc text-container">{findingItem.description}</span>
            {!findingItem.ticket && <Link className="create-ticket text-container" to={'create-ticket'} state={findingItem}>Create Ticket</Link>}
            {findingItem.ticket &&
                <div className="ticket-preview flex">
                    <img src={findingItem.ticket.provider.iconUrl} alt={findingItem.ticket.provider.name} />
                    <span>{findingItem.ticket.provider.name}-{findingItem.ticket.id}</span>
                </div>}
        </section>
    )
}