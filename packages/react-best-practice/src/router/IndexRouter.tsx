import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DiffPage from '../components/diff/DiffPage';
import ClickButton from '../components/event/ClickButton';
import ParentPage from '../components/forwardRef/ParentPage';
import TodoList from '../components/todo/TodoList';

const IndexRouter = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/forwardRef" element={<ParentPage />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="/diff" element={<DiffPage />} />
                <Route path="/clickbutton" element={<ClickButton />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRouter;