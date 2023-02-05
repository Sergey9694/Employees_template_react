import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => { // вытаскиваем из пропсов

    const elements = data.map(item => { // перебираем эл-ты массива
        const {id, ...itemProps} = item; // деструктуризация по остаточному принципу (вытаскиваем id из item, ...itemProps -все остальные свойства)
        return (
            <EmployeesListItem 
                key={id}
                {...itemProps} //разложили св-ва через spread
                onDelete={() => onDelete(id)} 
                onToggleProp ={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/> 
        )
    })

    return (
        <ul className="app-list app-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;