import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data}) => { //в компонент приходит data

    const elements = data.map(item => { // перебираем эл-ты массива
        return (
            <EmployeesListItem {...item}/> //разложили св-ва через spread
        )
    })

    return (
        <ul className="app-list app-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;