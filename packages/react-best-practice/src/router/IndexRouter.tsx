import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ParentPage from '../components/forwardRef/ParentPage';
import TodoList from '../components/todo/TodoList';

const IndexRouter = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/forwardRef" element={<ParentPage />} />
                <Route path="/todo" element={<TodoList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRouter;