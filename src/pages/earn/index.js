import React from 'react'
import { MyButton } from '@/components/mui-components/index.js'
import home4 from '@/assets/image/home4.png'
import home5 from '@/assets/image/home5.png'
function Earn() {
    return (
        <div>
            <div className="container">
                <img
                    style={{ width: '400px', opacity: 0.6, bottom: -80, right: -70 }}
                    className="position-fixed z-0"
                    src={home4}
                    alt=""
                />
                <img
                    style={{ width: '400px', opacity: 0.6, bottom: -80, left: -30 }}
                    className="position-fixed z-0"
                    src={home5}
                    alt=""
                />
                <h1 className="text-white text-center mt-6">
                    Staking to Earn <span style={{ color: '#acf10c' }}>POPOS</span>
                </h1>
                <div
                    className="rounded-4 mt-5 position-relative z-1"
                    style={{ border: '1px solid rgb(174, 247, 126)' }}>
                    <h4
                        className="text-white px-5"
                        style={{
                            height: '56px',
                            lineHeight: '56px',
                            borderBottom: '1px solid rgb(174, 247, 126)'
                        }}>
                        Stats
                    </h4>
                    <div className="py-5 d-block d-sm-flex justify-content-evenly">
                        <div>
                            <p className="fs-5 text-center" style={{ color: '#acf10c' }}>
                                Staked POPOS
                            </p>
                            <p className="fs-4 text-center text-white">
                                47356531020807 &nbsp; POPOS
                            </p>
                        </div>
                        <div>
                            <p className="fs-5 text-center" style={{ color: '#acf10c' }}>
                                APY
                            </p>
                            <p className="fs-4 text-center text-white">502.013%</p>
                        </div>
                    </div>
                </div>
                <div className="w-100 m-0 d-block d-md-flex gap-3 position-relative z-1">
                    <div
                        className="flex-fill rounded-4 mt-3"
                        style={{ border: '1px solid rgb(174, 247, 126)' }}>
                        <h4
                            className="text-white px-5"
                            style={{
                                height: '56px',
                                lineHeight: '56px',
                                borderBottom: '1px solid rgb(174, 247, 126)'
                            }}>
                            My POPOS stake
                        </h4>
                        <div className="py-5">
                            <p className="fs-5 text-center" style={{ color: '#acf10c' }}>
                                0 POPOS
                            </p>
                            <div className="d-flex justify-content-center  gap-3 mt-3">
                                <MyButton>Stake POPOS</MyButton>
                                <MyButton>Unstake POPOS</MyButton>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex-fill rounded-4 mt-3"
                        style={{ border: '1px solid rgb(174, 247, 126)' }}>
                        <h4
                            className="text-white px-5"
                            style={{
                                height: '56px',
                                lineHeight: '56px',
                                borderBottom: '1px solid rgb(174, 247, 126)'
                            }}>
                            My Rewards
                        </h4>
                        <div className="py-5">
                            <p className="fs-5 text-center" style={{ color: '#acf10c' }}>
                                0 POPOS
                            </p>
                            <div className="d-flex justify-content-center gap-3 mt-3">
                                <MyButton>Claim Rewards</MyButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Earn
