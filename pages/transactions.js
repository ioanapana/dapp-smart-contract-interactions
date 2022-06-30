
import Head from 'next/head'
import 'bulma/css/bulma.css'
import styles from '../styles/Transactions.module.css'
import {useState, useEffect} from "react";
import Web3 from 'web3'

const Transactions = () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
    const [account, setAccount] = useState();
    const [error, setError] = useState();

    const connectWalletHandler = async () => {
        try {
            if(web3){
                alert('Meta exists')
                    loadAccounts();
            }else {
                alert('Please connect to Meta Mask')
            }
        } catch (error) {
            setError(error.message)
        }
        

    }

   
      //requests accounts from givenProvider OR Ganache localhost and set the account with the first value
  async function loadAccounts() {
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0])
  }


    return (
        <div className={styles.main}>
            <Head>
                <title>Transactions App</title>
                <meta name="description" content="A Blockchain transactions app" />
           </Head>
        <nav className="navbar m-4">
            <div className='container'>
                <div className='navbar-brand'>
                    <h1>Blockchain Transactions</h1>
                </div>
                <div className='navbar-end'>
                    <button onClick={connectWalletHandler} className='button is-primary'>Connect Wallet</button>
                </div>
            </div>
        </nav>
        <section>
            <div className='container'>
                <p>placeholder text { account}</p>
            </div>
        </section>

        <section>
            <div className='container has-text-danger'>
                <p>{ error}</p>
            </div>
        </section>

        </div>
        
    )
}
export default Transactions;