import React from 'react';




const Line = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5,
            padding: 0

        }}
    />
);

export default Line;
