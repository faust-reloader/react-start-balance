const Transaction = ({transaction}) => {
    return (
        <div>
            label: {transaction.label}
            <p>Value: {transaction.value}</p>
        </div>
    )
}

export default Transaction;