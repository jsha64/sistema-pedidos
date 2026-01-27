export default function InputLoginRegister({
    type = "text",
    value,
    placeholder,
    onChange,
    onClick,
    className
}) {

    return (
        <input 
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onClick={onClick}
          className={className}
          />
    )
  
}
