import "../styles/_inputField.scss"


interface inputProps{
    label?:string,
    type:string,
    value?:string| number,
    required?:boolean,
    name:string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Update prop type
    width?:number,
    placeholder?:string
}

const InputField = ({ label,name,type,value,required=false,onChange,width,placeholder}:inputProps) => {
    const style:React.CSSProperties={
        width:`${width}px`
    }

  return (
    <div className="inputFieldContainer" style={style}>
        <label htmlFor={name} className="inputFieldLabel">{label}</label>
        <input
         type={type}
         name={name}
         placeholder={placeholder}
         required={required}
         value={value}
         onChange={onChange}
         className="inputField"
         />
    </div>
  )
}

export default InputField
