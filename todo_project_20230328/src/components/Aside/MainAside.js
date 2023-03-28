/** @jsxImportSource @emotion/react */
import React from 'react';
import { Navigation } from 'react-minimal-side-navigation/lib';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useNavigate } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { GrTest } from 'react-icons/gr';
import * as S from './style';

const MainAside = () => {
    const navigate = useNavigate();

    return (
        <aside css={S.style}>
            <Navigation
            activeItemId="/"
            onSelect={({ itemId }) => {
                navigate(itemId);
            }}
            items={[
                {
                    title: 'Home',
                    itemId: '/',
                    elemBefore: () => <HiHome />,
                },
                {
                    title: 'T1',
                    itemId: '/t1',
                    elemBefore: () => <GrTest />,
                },
                {
                    title: 'T2',
                    itemId: '/t2',
                    elemBefore: () => <GrTest />
                }
                
            ]}
            />
        </aside>
    );
};

export default MainAside;