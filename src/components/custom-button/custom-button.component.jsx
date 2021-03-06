import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, ...Otherprops}) => (
    <button className= 'custom-button'{...Otherprops}>
        {children}
    </button>
)

export default CustomButton;