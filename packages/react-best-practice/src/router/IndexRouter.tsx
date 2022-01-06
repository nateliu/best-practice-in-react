import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ParentPage from '../components/forwardRef/ParentPage';

const IndexRouter = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/forwardRef" element={<ParentPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRouter;