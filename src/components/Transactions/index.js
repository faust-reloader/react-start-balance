import PropTypes from 'prop-types';
import Transaction from "../Transaction";

const Transactions = ({transactions = []}) => transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction}/>) 

Transaction.PropTypes = {
    transactions: PropTypes.array
}

Transactions.defaultProps = {
    transactions: []
}

export default Transactions;