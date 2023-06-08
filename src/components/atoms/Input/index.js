import React from 'react'

const Input = ({value, onChange}) => {
    return (
        <div>
            <input
                className='px-3 w-96 h-10 rounded-lg'
                placeholder='Cari Film Disini'
                type="text"
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default Input