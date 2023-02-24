import React from 'react';

function Card({children}) {

const cardstyle = {
    width:           '200px',
    height:          '200px',
    border:          '1.5px solid lightgrey',
    borderRadius:    '2px',
    padding:         '4px',
    margin:         '4px' ,
    display:          'flex'
}
return(

    <div style={cardstyle}>
        {children}
    </div>
)    
}

export default Card