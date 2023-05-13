import { ethers } from 'ethers'
import web3Wallet from '@/utils/web3-wallet.js'
import poposABI from '@/assets/abi/popos.json'
import mintpoolABI from '@/assets/abi/mintpool.json'

const contracts = {
    popos: {
        address: '0xf882696d107eC3181F585dC6E41c01708E76a630',
        abi: poposABI
    },
    mintpool: {
        address: '0xdE3b84fC3b8BA2BC169A87eb9C1bdA85c42845f0',
        abi: mintpoolABI
    }
}
// https://goerli.etherscan.io/address/0xb8416ccf3cb8c325a6718d7b3855d6509a94b2e3
export default class ethersContract {
    constructor() {
        // 单例模式
        if (!ethersContract.instance) {
            ethersContract.instance = this
            this.contractCaller = {}
            this.contractSender = {}
            this.web3WalletNow = {}
        }
        this.getWalletAddress()
        return ethersContract.instance
    }
    getWalletAddress() {
        this.web3WalletNow = new web3Wallet()
        this.web3WalletNow.getWalletAddress()
    }
    async getContract(types = 'popos') {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const address = contracts[types].address
            const abi = contracts[types].abi
            this.contractCaller = new ethers.Contract(address, abi, provider)
            this.contractSender = this.contractCaller.connect(signer)
        } catch (e) {
            console.error(e)
        }
    }
    async mint(days = '365') {
        await this.web3WalletNow.switchChain()
        await this.web3WalletNow.getWalletAddress()
        try {
            await this.getContract('popos')
            // const tx = await contractWETH.deposit({value: ethers.utils.parseEther("0.001")})
            let contractSenderBack = await this.contractSender.mint(days, {
                value: ethers.utils.parseEther('0.0025')
            })
            return contractSenderBack
        } catch (e) {
            console.error(e)
        }
    }
    returnValueConversion(datas) {
        let newArray = []
        datas.forEach((element) => {
            newArray.push({
                mintSeq: Number(element[0]._hex).toString(10),
                isShowButton: element[2]
            })
        })
        return newArray
    }
    async getMintInfosOs() {
        await this.web3WalletNow.switchChain()
        await this.web3WalletNow.getWalletAddress()
        try {
            this.getContract('mintpool')
            let contractCallerBack = await this.contractSender.getWithdrawInfos()
            return this.returnValueConversion(contractCallerBack)
        } catch (e) {
            console.error(e)
        }
    }
    async sendWithdraw(mintSeq) {
        await this.web3WalletNow.switchChain()
        await this.web3WalletNow.getWalletAddress()
        try {
            this.getContract('mintpool')
            return await this.contractSender.withdraw(mintSeq)
        } catch (e) {
            console.error(e)
        }
    }
}
