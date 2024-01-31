

export default function Item({name, isChecked, changeChecked, id}) {
    return (
        <div>
            <label htmlFor={`inp_${id}`}>{name}</label>
            <input type="checkbox" id={`inp_${id}`} checked={isChecked} onChange={() => changeChecked(id)}/>
        </div>
    )
}