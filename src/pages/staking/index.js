import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MyButton } from '@/components/mui-components/index.js'
import home4 from '@/assets/image/home4.png'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
import { green } from '@mui/material/colors'
import CircularProgress from '@mui/material/CircularProgress'
import Paper from '@mui/material/Paper'
import { poposInfo } from '@/api/index.js'
import ethersContract from '@/utils/wen3-contract.js'
const MyTableContainer = styled(TableContainer)`
    background-color: rgb(33, 85, 72) !important;
    .MuiTableCell-root {
        color: #fff !important;
    }
`
function Earn() {
    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(true)
    const ethersContractMy = new ethersContract()
    useEffect(() => {
        console.log('==================')
        const getPoposInfo = async () => {
            const res = await poposInfo({
                address: '0x8b5FaB3B0724F1a8a01340154A6AF1fab3f2ceaa'
            })

            const resEthers = await ethersContractMy.getMintInfosOs()
            let newArray = res.result
            res.result.forEach((element, index) => {
                resEthers.forEach((elementSon) => {
                    if (element.mintSeq === elementSon.mintSeq) {
                        newArray[index].isShowButton = elementSon.isShowButton
                    }
                })
            })
            // newArray[0].isShowButton = true
            console.log(newArray, 'newArray')
            setRows(newArray)
            setLoading(false)
        }
        getPoposInfo()
        // eslint-disable-next-line
    }, [])
    const sendWithdraw = (mintSeq) => {
        ethersContractMy.sendWithdraw(mintSeq)
    }

    const tempTimeCheck = (tempTime) => {
        var today = new Date(Number(tempTime))
        var DD = String(today.getDate()).padStart(2, '0') // 获取日
        var MM = String(today.getMonth() + 1).padStart(2, '0') //获取月份，1 月为 0
        var yyyy = today.getFullYear() // 获取年
        var hh = String(today.getHours()).padStart(2, '0') //获取当前小时数(0-23)
        var mm = String(today.getMinutes()).padStart(2, '0') //获取当前分钟数(0-59)
        var ss = String(today.getSeconds()).padStart(2, '0') //获取当前秒数(0-59)
        today = yyyy + '-' + MM + '-' + DD + ' ' + hh + ':' + mm + ':' + ss
        return today
    }

    const buttonSx = {
        ...(!loading && {
            bgcolor: 'rgb(129, 248, 166)',
            color: 'rgb(0, 0, 0)',
            '&:hover': {
                bgcolor: '#aef77e'
            }
        })
    }
    return (
        <div className="pb-9">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="text-white mt-6">
                            Stake your <span style={{ color: '#acf10c' }}>POPOS</span> to earn
                            rewards
                        </h1>
                        <p className="text-white mt-3">
                            You can unstake your GDX at any time, and it will be available to claim
                            24 hours after unstakingThere will be no rewards for the day of
                            unstaking
                        </p>
                        <MyButton className="text-nowrap px-7 mt-5">Stake POPOS</MyButton>
                    </div>
                    <div className="col-md-5">
                        <img style={{ width: 300 }} src={home4} alt="" />
                    </div>
                </div>
            </div>
            <div className="container mt-6">
                <h4 className="text-white">
                    Staking details <span>My staked 1,382.98 Dx</span>
                </h4>
                <MyTableContainer component={Paper} className="mt-4">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Time</TableCell>
                                <TableCell align="right">A(Staked Amount)</TableCell>
                                <TableCell align="right">Countdown (D)</TableCell>
                                <TableCell align="right">Total staking rewards</TableCell>
                                <TableCell align="right" sx={{ textAlign: 'center' }}>
                                    Status
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    key={row.mintSeq}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell scope="row">
                                        {tempTimeCheck(row.depositedTime)}
                                    </TableCell>
                                    <TableCell align="right">{row.amount}</TableCell>
                                    <TableCell align="right">{row.depositedLeftDays}</TableCell>
                                    <TableCell align="right">{row.depositedReward}</TableCell>
                                    <TableCell align="right">
                                        <div className="position-relative">
                                            <Button
                                                variant="contained"
                                                sx={buttonSx}
                                                disabled={loading || !row.isShowButton}
                                                onClick={() => {
                                                    sendWithdraw(row.mintSeq)
                                                }}>
                                                Claim
                                            </Button>
                                            {loading && (
                                                <CircularProgress
                                                    size={24}
                                                    sx={{
                                                        color: green[500],
                                                        position: 'absolute',
                                                        top: '50%',
                                                        left: '50%',
                                                        marginTop: '-12px',
                                                        marginLeft: '0px'
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </MyTableContainer>
            </div>
        </div>
    )
}

export default Earn
