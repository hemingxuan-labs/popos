import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from '@/components/header'
import Footer from '@/components/footer'
import eventEmitter from '@/utils/event.js'
const AppBox = styled.div`
    background-color: rgb(14, 45, 37);
    min-height: 100vh;
`
function App() {
    return (
        <AppBox>
            <Header></Header>
            <div className="outlet">
                <Outlet />
            </div>
            <Footer></Footer>
        </AppBox>
    )
}

export default App
