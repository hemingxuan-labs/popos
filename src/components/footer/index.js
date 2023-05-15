import * as React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import logo from '@/assets/image/logo.png'
import web3Wallet from '@/utils/web3-wallet.js'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
const MySnackbar = styled(Snackbar)`
    .MuiSnackbarContent-message {
        color: #acf10c !important;
    }
`
export default function PrimarySearchAppBar() {
    const navigate = useNavigate()
    const web3WalletNow = new web3Wallet()
    let menuList = [
        {
            title: 'Ecosystem',
            path: '/ecosystem'
        },
        {
            title: 'Mint',
            path: 'mint'
        },
        {
            title: 'About',
            path: 'about'
        },
        {
            title: 'Economics',
            path: 'economics'
        },
        {
            title: 'Earn',
            path: '/earn'
        },
        {
            title: 'Staking',
            path: '/staking'
        },
        {
            title: 'Docs',
            path: 'Docs'
        }
    ]
    const [openSnackbar, setOpenSnackbar] = React.useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpenSnackbar(false)
    }
    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName)
            // 如果对应id的锚点存在，就跳转到锚点
            if (anchorElement) {
                anchorElement.scrollIntoView()
            }
        }
    }
    const action = (
        <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    )
    return (
        <div>
            <MySnackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                open={openSnackbar}
                autoHideDuration={2500}
                onClose={handleClose}
                message="Cooming Soon"
                action={action}
            />
            <footer
                className="p-4 webkit-scrollbar-none"
                style={{ background: '#09090b', overflowX: 'auto', height: 160 }}>
                <div className="container text-white">
                    <div className="d-flex-between-center">
                        <p className="fs-5 d-flex-center" style={{ color: '#acf10c' }}>
                            <img
                                className="me-3"
                                style={{
                                    width: 34
                                }}
                                src={logo}
                                alt=""
                            />
                            POPOS
                        </p>
                        <div className="d-flex-center">
                            {menuList.map((item) => {
                                return (
                                    <div
                                        style={{ cursor: 'pointer' }}
                                        key={item.title}
                                        className="mx-3"
                                        onClick={() => {
                                            if (item.path === 'Docs') {
                                                window.open('https://docs.poposlabs.io/')
                                                return
                                            }
                                            if (
                                                item.path === '/earn' ||
                                                item.path === '/staking' ||
                                                item.path === '/ecosystem'
                                            ) {
                                                setOpenSnackbar(true)
                                                return
                                            }
                                            scrollToAnchor(item.path)
                                            return
                                            // navigate(item.path)
                                        }}>
                                        {item.title}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="d-flex">
                            <a
                                href="https://twitter.com/POPOSLabs"
                                target="_blank"
                                rel="noreferrer">
                                <i className="iconfont icon-twitter-fill text-white fs-3 mx-2"></i>
                            </a>
                            <a
                                href="https://discord.gg/EataDHPrM5"
                                target="_blank"
                                rel="noreferrer">
                                <i className="iconfont icon-discord text-white fs-3 mx-2"></i>
                            </a>
                            <a href="https://poposlabs.medium.com" target="_blank" rel="noreferrer">
                                <i className="iconfont icon-medium text-white fs-3 mx-2"></i>
                            </a>
                        </div>
                    </div>
                    <div
                        className="my-4"
                        style={{ width: '100%', height: '1px', background: '#fff' }}></div>
                    <div className="fs-8 text-center">POPOSLabs © 2023. All right reserved.</div>
                </div>
            </footer>
        </div>
    )
}
