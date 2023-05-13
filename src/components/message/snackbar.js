import { useState } from 'react'
import { Snackbar, Alert } from '@mui/material'
export default function Message(props) {
    const { content, duration, type } = props
    // const content = 'CCCCCCCC'
    // const duration = 3000
    // const type = 'error'
    // 开关控制：默认true,调用时会直接打开
    const [open, setOpen] = useState(true)
    // 关闭消息提示
    const handleClose = (event, reason) => {
        setOpen(false)
    }
    return (
        <Snackbar
            open={open}
            autoHideDuration={duration.toString()}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleClose}>
            <Alert severity={type.toString()}>{content.toString()}</Alert>
        </Snackbar>
    )
}
