import React, { useState } from 'react'
import { useGetTasksQuery } from '../../api/apiSlice'
import Spinner from '../../components/Spinner'
import Mensaje from '../../components/Mensaje'
import { useDispatch, useSelector } from 'react-redux'
import { addLocalTask, deleteLocalTask } from './taskSlice'

const TasksList = () => {

    const dispatch = useDispatch()
    const tachos = useSelector(state => state.tasks)
    const {data: tasks, error, isError, isLoading, isSuccess} = useGetTasksQuery()

    let content
    const handleChange = (e, task) => {
        if(e.target.checked){
            dispatch(addLocalTask(task))
        }else {
            dispatch(deleteLocalTask(task.id))
        }
    }

   

    if(isLoading){
        return (
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <Spinner />
            </div>
        )
    }else if(isError){
        return(
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <Mensaje contenido={`Oops! ${error?.message ?? 'hubo un error'}`} />
            </div>
        )
    }else if(isSuccess){
        content = <table className='table shadow'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Completed</th>
                    <th scope='col'>Check</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task => (
                    <tr key={task.id}>
                        <th scope="row">{task.id}</th>
                        <td>{task.title}</td>
                        <td>{task.completed ? '😎' : '👎'}</td>
                        <td>
                            <input 
                                type="checkbox" 
                                name="" 
                                id="" 
                                onChange={(e) => handleChange(e,task)} 
                                checked={tachos.some(tac => tac.id === task.id)} 
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    }


    return (
        <div className='w-100 bg-body-tertiary rounded p-5 shadow mt-8'>
            {content}
        </div>
    )
}

export default TasksList