import React, {useState, useEffect} from 'react'
import Box from "@mui/material/Box"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';


const GameOptions = ({options, onAnswer, hasAnswered}) => {
    const [selected, setSelected] = useState(null);
    const [answer, setAnswer] = useState("");

    const handleAnswer = (_ans, _index) => {
        if (!hasAnswered) {
            setAnswer(_ans)
            setSelected(_index);
            onAnswer(_ans);
            
        }
    }

    useEffect(() => {
        if (hasAnswered === false) {
            setSelected(null)
        }
    }, [hasAnswered])


  return (
    <Box sx={{
        // border: 1,
    }}>
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            my: 2,
        }}>
            {options.map((opt, index )=> {
                return <Button variant="outlined" disabled={(hasAnswered && (opt.toLowerCase() !== answer.toLowerCase())) ? true : false} key={opt} onClick={() => {handleAnswer(opt, index)}} sx={{
                    display: "inline-block",
                    fontSize: "1rem",
                    mr: 1,
                    mb: 1,
                    borderColor: (selected === index) && "secondary.color1",
                    color: (selected === index) && "secondary.color1",
                    "&:hover": {
                        borderColor: "secondary.color1",
                        color: "secondary.color1",
                    }
                    
                }}>{opt}</Button>
            })}
        </Box>
    </Box>
  )
}

export default GameOptions