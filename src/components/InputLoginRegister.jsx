export default function InputLoginRegister({
    type = "text",
    value,
    placeholder,
    onChange,
    onClick,
    className,
    icon
}) {

    if (type === "button") {
        return (
            <button className={className} onClick={onClick}>
                {value}
                {icon && <>{icon}</>}
            </button>
        )
    } 

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
