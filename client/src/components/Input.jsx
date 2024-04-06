const Input = ({ type, name, value, onChange }) => {
    return (
        <div>
        <label>{name}</label>
        <input type={type} name={name} value={value} onChange={onChange} className='m-3 p-3 border border-gray-700 bg-gray-900 text-gray-200'/>
         </div>
    )
}

export default Input;