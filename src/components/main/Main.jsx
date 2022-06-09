import { useSelector } from 'react-redux'
import styles from './Main.module.css'
import { useEffect, useState } from 'react'
import CurrencyForm from './CurrencyForm'



const Main = () => {

    const currencyList = useSelector(state=>state.general.currencies)
    
    const [amountFirst, setAmountFirst] = useState(1)
    const [amountSecond, setAmountSecond] = useState(1)
    const [currencyFirst, setCurrencyFirst] = useState('USD')
    const [currencySecond, setCurrencySecond] = useState('UAH')

    const calculateAmountFirst = (amountFirst) => {
        setAmountSecond((amountFirst * currencyList.filter(e => e.name==currencyFirst)[0].rate / currencyList.filter(e => e.name==currencySecond)[0].rate).toFixed(2) )
        setAmountFirst(amountFirst)
    }

    const handleCurrencyFirstChange = (currencyFirst) => {
        setAmountSecond((amountFirst * currencyList.filter(e => e.name==currencyFirst)[0].rate / currencyList.filter(e => e.name==currencySecond)[0].rate).toFixed(2) )
        setCurrencyFirst(currencyFirst)
    }
    const calculateAmountSecond = (amountSecond) => {
        setAmountFirst((amountSecond * currencyList.filter(e => e.name==currencySecond)[0].rate / currencyList.filter(e => e.name==currencyFirst)[0].rate).toFixed(2) )
        setAmountSecond(amountSecond)
    }

    const handleCurrencySecondChange = (currencySecond) => {
        setAmountFirst((amountSecond * currencyList.filter(e => e.name==currencySecond)[0].rate / currencyList.filter(e => e.name==currencyFirst)[0].rate).toFixed(2) )
        setCurrencySecond(currencySecond)
    }

    useEffect(() => {
        calculateAmountFirst(1)
    }, [])

    return (
        <div className={styles.main}>
                <div className={styles.formBlock}>
                    <CurrencyForm currencyList={currencyList} amount={amountFirst} currency={currencyFirst}
                    onAmountChange={calculateAmountFirst} onCurrencyChange={handleCurrencyFirstChange}/>
                    <CurrencyForm currencyList={currencyList} amount={amountSecond} currency={currencySecond}
                    onAmountChange={calculateAmountSecond} onCurrencyChange={handleCurrencySecondChange}/>
                </div>
        </div>
    )
}


export default Main