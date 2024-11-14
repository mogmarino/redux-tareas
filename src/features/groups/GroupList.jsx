import React from 'react'
import { useSelector } from 'react-redux'
import Mensaje from '../../components/Mensaje';
import { useDispatch } from 'react-redux';
import { deleteLocalTask } from '../tasks/taskSlice';

const GroupList = () => {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (e, id) => {
        dispatch(deleteLocalTask(id))
    }


    if(tasks.length === 0){
        return(
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <Mensaje contenido={`Oops! Sin tareas en el estado`} />
            </div>
        )
    }

    return (
        <div className='w-100 bg-body-tertiary rounded p-5 shadow mt-8'>
            <table className='table shadow'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Completed</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task.id} >
                            <th scope="row">{task.id}</th>
                            <td scope='row'>{task.title}</td>
                            <td>{task.completed ? '😎' : '👎'}</td>
                            <td><input type="button" name="" id="" className='btn btn-danger rounded' value={'x'} onClick={(e) => handleDelete(e,task.id)}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GroupList