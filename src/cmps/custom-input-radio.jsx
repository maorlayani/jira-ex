import { FormControlLabel, Radio } from "@mui/material"

export const CustomInputRadio = ({ provider, color }) => {
    return (
        <FormControlLabel
            value={provider.name}
            control={<Radio
                size="small"
                sx={{ color: `${color}`, '&.Mui-checked': { color: `${color}` } }} />}
            label={<img src={provider.logoUrl}
                className="radio-label-img" />}
        />
    )
}