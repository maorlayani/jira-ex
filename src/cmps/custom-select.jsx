import { MenuItem, Select } from "@mui/material"

export const CustomSelect = ({
    selectValue,
    selectHandler,
    hidePlaceholder,
    isDisplayPlaceholder,
    title,
    option,
    isDisabled }) => {

    return (
        <Select value={selectValue}
            onChange={selectHandler}
            displayEmpty
            disabled={isDisabled}
            onOpen={() => hidePlaceholder(false)}
            sx={{ width: '230px', height: '30px', fontSize: '13px' }}
        >
            <MenuItem disabled sx={{ fontSize: '13px' }} style={{ display: isDisplayPlaceholder ? "block" : "none" }} value="">
                {`Seclet ${title}`}
            </MenuItem>
            {option.map((opt, idx) =>
                (opt?.id) ?
                    <MenuItem key={opt.id} sx={{ fontSize: '13px' }} value={opt.id}>{opt.title}</MenuItem>
                    : <MenuItem key={opt + idx} sx={{ fontSize: '13px' }} value={opt}>{opt}</MenuItem>)}
        </Select>
    )
}