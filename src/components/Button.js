import React from 'react'

const Button = ({handleClear,tasks}) => {
    return (
        <div>
            {tasks.length>1&&<button className='clear' onClick={handleClear}>Clear all</button>}
        </div>
    )
}

export default Button
