import styles from './Main.module.css'
import PropTypes from 'prop-types'

const CurrencyForm = (props) => {
    return (
        
            <form className={styles.form}>
                <select  className={styles.formSelect} 
                        value={props.currency}
                        onChange={e=>props.onCurrencyChange(e.target.value)} >
                            {props.currencyList.map(el=> <option value={el.name}>{el.name}</option>)}
                </select> 
                <input type='text' className={styles.formInput}
                                value={props.amount}
                                onChange={e=>props.onAmountChange(e.target.value)}>
                </input>
            </form>
        
    )
}


CurrencyForm.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func
}

export default CurrencyForm