import React from 'react';
import Typography from '@mui/material/Typography';

function SubText() {
    const subTextStyles = {
        fontSize: '3.5rem',
        color: 'white',
        marginTop: '-2.5rem',
    };

    return (
        <Typography variant="body1" component="div" style={subTextStyles}>
            Good evening, RedBoard.
        </Typography>
    );
}

export default SubText;
