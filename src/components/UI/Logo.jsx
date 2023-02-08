import Typography from "@mui/material/Typography"

// type = lockup || text || icon
const Logo = ({variant, type}) => {

    return <Typography sx={{
        color: (variant === "grey") ? "grey" ? (variant === "white") : "white" : "primary.main",
        // p: 3,
    }}>
        sparkplay
    </Typography>
}

export default Logo; 