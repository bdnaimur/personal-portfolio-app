import React from 'react';

const ProgressBar = (props) => {
        const { bgcolor, completed, name } = props;
      
        const containerStyles = {
          height: 20,
          width: '100%',
          backgroundColor: "#e0e0de",
          borderRadius: 50,
          margin: "30px 0px"
        }
      
        const fillerStyles = {
          height: '100%',
          width: `${completed}%`,
          backgroundColor: bgcolor,
          borderRadius: 'inherit',
          textAlign: 'right'
        }
      
        const labelStyles = {
          padding: 10,
          color: 'white',
          fontWeight: 'bold'
        }
    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span className='text-white'>{name}</span>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;