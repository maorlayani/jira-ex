import { FindingItemPreview } from "./finding-item-preview"

export const FindingItemList = ({ findings }) => {

    return (
        <section className="finding-item-list">
            <section className="finding-item-preview table-header">
                <span className="finding-title">Title</span>
                <span className="finding-desc">Description</span>
                <span className="finding-Ticket">Ticket</span>
            </section>
            {findings.map((findingItem, idx) => <FindingItemPreview
                key={findingItem.title + idx}
                findingItem={findingItem} />)}
        </section>
    )
}