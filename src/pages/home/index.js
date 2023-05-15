import React, { useEffect, useState } from 'react'
import * as echarts from 'echarts'
import home1 from '@/assets/image/home1.png'
import home2 from '@/assets/image/home2.png'
import home3 from '@/assets/image/home3.png'
import home11 from '@/assets/image/home11.png'
import home12 from '@/assets/image/home12.png'
import styled from 'styled-components'
import LinearProgress from '@mui/material/LinearProgress'
import TextField from '@mui/material/TextField'
import { MyButton } from '@/components/mui-components/index.js'
import { useNavigate } from 'react-router-dom'
import ethersContract from '@/utils/wen3-contract.js'

const BorderLinearProgress = styled(LinearProgress)`
    height: 10px !important;
    border-radius: 5px !important;
    background-color: rgb(38, 66, 58) !important;
    .MuiLinearProgress-bar {
        background-color: #acf10c !important;
    }
`
const MyTextField = styled(TextField)`
    width: 180px;
    background: rgb(54 85 76);
    border-radius: 8px !important;
    .MuiInputBase-input {
        color: #acf10c !important;
    }
    .MuiInputBase-root::after {
        border-bottom: 2px solid #acf10c !important;
    }
`
function Home() {
    const navigate = useNavigate()
    const [progress, setProgress] = useState(60)
    const [termdays, setTermdays] = useState(365)
    const [countdown, setCountdown] = useState(`2 day 1h 43m 00s`)

    useEffect(() => {
        if (document.getElementById('main') == null) return
        var chartDom = document.getElementById('main')
        let myChart = echarts.init(chartDom)
        var option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                show: false,
                top: '0%',
                left: 'center'
            },
            series: [
                {
                    name: 'Tokens',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    textStyle: {
                        textShadowColor: '#fff'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 14,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 20, name: 'Mint ' },
                        { value: 35, name: 'Locked Rewards' },
                        { value: 30, name: 'Liquidity ' },
                        { value: 10, name: 'Staking Rewards' },
                        { value: 5, name: 'AirDrop' }
                    ],
                    label: {
                        show: true,
                        position: 'left',
                        formatter: '{b} {d}%'
                    }
                }
            ]
        }
        option && myChart.setOption(option)
        const resizeObserver = new ResizeObserver((entries) => {
            myChart.resize()
        })
        resizeObserver.observe(document.body)

        const startSetInterval = () => {
            setInterval(() => {
                // 设置结束时间
                var endTime = new Date(1684238400000)
                // 获取当前时间
                var nowTime = new Date()
                // 计算剩余时间（毫秒）
                var remainingTime = endTime - nowTime
                // 计算天数
                var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
                // 计算小时数
                var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                // 计算分钟数
                var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
                // 计算秒数
                var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)
                // 输出倒计时
                setCountdown(`${days} day ${hours}h ${minutes}m ${seconds}s`)
            }, 1000)
        }
        startSetInterval()
    }, [])

    const sendMint = (days) => {
        const ethersContractInstance = new ethersContract()
        ethersContractInstance.mint(days)
    }
    return (
        <div className="min-vh-100 pb-9 overflow-hidden">
            <div className="container mt-8">
                <h1 className="text-white text-center">The token that's all about</h1>
                <h1 className="mt-3 text-center" style={{ color: '#acf10c' }}>
                    getting POPOS
                </h1>
                <h5 className="text-white mt-4 text-center mx-auto" style={{ maxWidth: '400px' }}>
                    At POPOS, we believe that investing should be thrilling, not boring
                </h5>
                <div className="d-flex-center mt-4">
                    <a href="https://twitter.com/POPOSLabs" target="_blank" rel="noreferrer">
                        <i className="iconfont icon-twitter-fill text-white fs-3 mx-3"></i>
                    </a>
                    <a href="https://discord.gg/EataDHPrM5" target="_blank" rel="noreferrer">
                        <i className="iconfont icon-discord text-white fs-3 mx-3"></i>
                    </a>
                    <a href="https://poposlabs.medium.com" target="_blank" rel="noreferrer">
                        <i className="iconfont icon-medium text-white fs-3 mx-3"></i>
                    </a>
                </div>
            </div>
            <div className="container-fluid mt-8 position-relative">
                <img
                    className="position-absolute top-50 start-0 translate-middle-y z-0"
                    style={{ width: '377px', opacity: 0.7 }}
                    src={home1}
                    alt="home1"
                />
                <img
                    className="position-absolute top-50 end-0 translate-middle-y z-0"
                    style={{ width: '377px', opacity: 0.7 }}
                    src={home2}
                    alt="home1"
                />
                <div
                    id="mint"
                    className="p-2 mx-auto  position-relative z-1 "
                    style={{
                        background:
                            'linear-gradient(92.01deg, rgba(174, 247, 126,0.6) 1.3%, rgba(129, 248, 166,0.6) 100.91%)',
                        borderRadius: '26px',
                        maxWidth: '570px',
                        backdropFilter: 'blur(4px)'
                    }}>
                    <div
                        className="w-100 h-100 p-4 px-6"
                        style={{
                            background: 'rgba(14, 45, 37,0.6)',
                            borderRadius: '26px'
                        }}>
                        <h2 className="text-white text-center">
                            <span>You get</span> POPOS now
                        </h2>
                        <p className="mt-3" style={{ color: 'rgb(115, 160, 149)' }}>
                            1.Any address can mint tokens, which account for 20% of the total token
                            supply. Each address can only mint ten times, and after minting, tokens
                            must be staked for a minimum of 1 day and a maximum of 365 days, with
                            the deadline extended accordingly.
                            <br /> <br />
                            2.The minted amount decreases by 0.001% for each additional address
                            until the total minted amount reaches 0. The minting period is 31 days,
                            and any remaining untapped tokens at expiration will be minted by the
                            contract and then destroyed. The minting fee is 0.0025 ETH worth of ETH,
                            with gas fees deducted. 50% of the remaining amount is used to build
                            liquidity, and the other 50% is transferred to the POPOS Foundation for
                            ecological development.
                            <br /> <br />
                            3.Withdrawal at expiration: Every day after expiration, tokens will be
                            reduced by 1.5%, and the reduced portion will be destroyed.
                        </p>
                        <div className="mt-4">
                            <div className="d-flex-between-center">
                                <span style={{ color: 'rgb(115, 160, 149)' }}>0</span>
                                <span style={{ color: 'rgb(115, 160, 149)' }}>100000</span>
                            </div>
                            <BorderLinearProgress
                                className="mt-1"
                                variant="determinate"
                                value={0}></BorderLinearProgress>
                        </div>
                        <div
                            className="p-3 d-flex-center mt-5"
                            style={{
                                background: 'rgb(38, 66, 58)',
                                borderRadius: '12px'
                            }}>
                            <p style={{ color: '#acf10c' }}>31 days will be burned</p>
                        </div>
                        <div className="d-flex-between-center mt-4" style={{ color: '#acf10c' }}>
                            <h5>Global Rank</h5>
                            <h5>0 / 10000000</h5>
                        </div>
                        <div className="d-flex-between-center mt-4" style={{ color: '#acf10c' }}>
                            <h5>Term, days (1 - 365)</h5>
                            <MyTextField
                                hiddenLabel
                                id="filled-hidden-label-small"
                                variant="filled"
                                size="small"
                                type="number"
                                value={termdays}
                                onChange={(event) => {
                                    if (event.target.value >= 365) {
                                        setTermdays(365)
                                    } else if (event.target.value <= 1) {
                                        setTermdays(1)
                                    } else {
                                        setTermdays(event.target.value)
                                    }
                                }}
                            />
                        </div>
                        <div className="mt-5 d-flex-center">
                            <MyButton
                                className="text-nowrap px-7"
                                onClick={() => {
                                    sendMint(termdays)
                                }}>
                                {countdown}
                            </MyButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-9" id="about">
                <div className="row">
                    <div className="col-md-6">
                        <h1 style={{ color: '#acf10c' }}>Welcome to POPOS</h1>
                        <h3 className="text-white mt-3">
                            POPOS is just a modern alligator. POPOS came from Mississippi with the
                            breath of MEMECOIN. To join the army of MEMECOIN, POPOS has made
                            sufficient preparations. POPOS has polished its sharp teeth and armored
                            its body. I have to say that its defense is strong and its attack is
                            stronger. Although it is a bit silly, it is very powerful.
                        </h3>
                        <MyButton className="z-1 text-nowrap px-4 mt-6" onClick={() => {}}>
                            <a href="https://docs.poposlabs.io/" target="_blank" rel="noreferrer">
                                Konw More About
                            </a>
                        </MyButton>
                    </div>
                    <div className="col-md-6">
                        <img
                            className="d-block mx-auto mt-3"
                            style={{ width: '80%' }}
                            src={home11}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="container mt-9">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            className="d-block mx-auto mt-3"
                            style={{ width: '100%' }}
                            src={home12}
                            alt=""
                        />
                    </div>
                    <div className="col-md-6">
                        <h1 style={{ width: '50%', color: '#acf10c' }}>Value</h1>
                        <h3 className="text-white mt-3">
                            POPOS is honored to be a member of the MEME community and is striving to
                            become a major force in the ARB ecosystem. Based on the L2 protocol,
                            POPOS will build a new token exchange application and continuously
                            enrich the DEFI ecosystem with new gameplay. <br /> <br />
                            Despite just being born, POPOS is already full of powerful strength. By
                            minting tokens, building community-driven liquidity pools, and creating
                            a strong social system for the ARB ecosystem, POPOS is dedicated to
                            making a significant impact.
                        </h3>
                    </div>
                </div>
            </div>
            <div className="container mt-9 position-relative">
                <h1 className="z-1 position-relative" style={{ color: '#acf10c' }}>
                    Staking
                </h1>
                <h3 className="z-1 position-relative text-white mt-3 w-50">
                    POPOS keeps earning food through staking, unless the world ends.
                </h3>
                <MyButton className="z-1 text-nowrap px-4 mt-6" onClick={() => {}}>
                    Coming Soon
                </MyButton>
                <img
                    className="position-absolute top-50 end-0 translate-middle-y z-0"
                    style={{ width: '377px', opacity: 0.6 }}
                    src={home3}
                    alt=""
                />
            </div>
            <div className="container mt-9" id="economics">
                <div className="row">
                    <div className="col-md-6 pt-5">
                        <h1 style={{ color: '#acf10c' }}> completely fair distribution</h1>
                        <h3 className="text-white mt-4">
                            No holdings, fully distributed to the community and liquidity, no
                            whales, no giant pumps.
                        </h3>
                        <div className="d-flex mt-6">
                            <div className="mx-3 d-flex flex-column align-items-center">
                                <div
                                    style={{
                                        width: 50,
                                        height: 20,
                                        background: '#5470C7',
                                        borderRadius: 4
                                    }}></div>
                                <p className="text-white text-center fs-8 mt-2">Mint 20%</p>
                            </div>
                            <div className="mx-3 d-flex flex-column align-items-center">
                                <div
                                    style={{
                                        width: 50,
                                        height: 20,
                                        background: '#91CC75',
                                        borderRadius: 4
                                    }}></div>
                                <p className="text-white text-center fs-8 mt-2">
                                    Locked Rewards 35%
                                </p>
                            </div>
                            <div className="mx-3 d-flex flex-column align-items-center">
                                <div
                                    style={{
                                        width: 50,
                                        height: 20,
                                        background: '#FAC858',
                                        borderRadius: 4
                                    }}></div>
                                <p className="text-white text-center fs-8 mt-2">Liquidity 30%</p>
                            </div>
                            <div className="mx-3 d-flex flex-column align-items-center">
                                <div
                                    style={{
                                        width: 50,
                                        height: 20,
                                        background: '#FF7070',
                                        borderRadius: 4
                                    }}></div>
                                <p className="text-white text-center fs-8 mt-2">
                                    Staking Rewards 10%
                                </p>
                            </div>
                            <div className="mx-3 d-flex flex-column align-items-center">
                                <div
                                    style={{
                                        width: 50,
                                        height: 20,
                                        background: '#7ED3F5',
                                        borderRadius: 4
                                    }}></div>
                                <p className="text-white text-center fs-8 mt-2">AirDrop 5%</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div id="main" style={{ width: '100%', height: 450 }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
