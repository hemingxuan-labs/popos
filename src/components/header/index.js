import * as React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '@/assets/image/logo.png'
import './index.scss'
import { MyButton } from '@/components/mui-components/index.js'
import web3Wallet from '@/utils/web3-wallet.js'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

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
        }
    ]
    const [openSnackbar, setOpenSnackbar] = React.useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpenSnackbar(false)
    }
    const walletAddress = useSelector((state) => state.wallet.walletAddress)
    const showWalletAddress = useSelector((state) => state.wallet.showWalletAddress)
    const scrollToAnchor = (anchorName) => {
        // 锚点定位
        if (anchorName) {
            navigate('/')
            setTimeout(() => {
                let anchorElement = document.getElementById(anchorName)
                if (anchorElement) {
                    anchorElement.scrollIntoView()
                }
            }, 100)
        }
    }
    const action = (
        <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    )
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleCloseMenu = () => {
        setAnchorEl(null)
    }
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
            <header className="header-box webkit-scrollbar-none pb-0">
                <div className="logo-box d-flex-center">
                    <img
                        className="me-3"
                        style={{
                            width: 34
                        }}
                        src={logo}
                        alt=""
                    />
                    POPOS
                </div>
                <div className="header-item-box">
                    {menuList.map((item) => {
                        return (
                            <div
                                key={item.title}
                                className="header-item text-nowrap"
                                onClick={() => {
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
                <div className="header-button">
                    {!walletAddress ? (
                        <MyButton
                            className="text-nowrap px-3"
                            onClick={() => {
                                web3WalletNow.getWalletAddress()
                            }}>
                            Connect Wallet
                        </MyButton>
                    ) : (
                        <div className="text-white cursor-pointer" onClick={handleClick}>
                            {showWalletAddress}
                        </div>
                    )}
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleCloseMenu}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button'
                        }}>
                        <MenuItem
                            onClick={() => {
                                web3WalletNow.setWalletLoginLogout()
                                handleCloseMenu()
                            }}>
                            Disconnect
                        </MenuItem>
                    </Menu>
                </div>
            </header>
        </div>
    )
}
