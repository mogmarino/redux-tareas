import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import TasksList from './features/tasks/TasksList';
import GroupList from './features/groups/GroupList';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<TasksList />}/>
        <Route path='group' element={<GroupList />}/>
      </Route>
     
    </Routes>
  )
}

export default App
