import { useEffect } from "react";
import styles from './../main/Main.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { addCurrency } from "../../redux/general";


 const Header = () => {
   
    const dispatch = useDispatch()
    const rates = useSelector(state=>state.general)

   const getCurrencyData =  async () => {
        const response = await fetch('https://api.exchangerate.host/latest?base=UAH')
        const currencyData = await response.json()
        dispatch(addCurrency({usd: currencyData.rates.USD, eur: currencyData.rates.EUR}))  
   }
    useEffect(()=>{
        getCurrencyData()
    }, [])
   
    return (
        <header className={styles.header}>
                <div className={styles.headerWrapper}>
                    <h1>Currency converter</h1>
                    <div className={styles.headerBlock}>
                    <div>USD: <strong>{rates.currencies[0].rate}</strong> UAH</div> 
                    <div>EUR: <strong>{rates.currencies[1].rate}</strong> UAH</div>
                    </div>
                </div>
        </header>
    )
}

export default Header