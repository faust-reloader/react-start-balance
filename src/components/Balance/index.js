const Balance = ({ balance }) => {
    return (
        <div>
            Поточний баланс: {balance}
            {!balance && 'Full null'}
        </div>
    )
}
  
export default Balance;