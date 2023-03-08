import PropTypes from 'prop-types';

import { Wrapper } from './style';

const Transaction = ({ transaction: {value, label} }) => {
    return (
        <Wrapper value={value}>
            label: {label}
            <p>Value: {value}</p>
        </Wrapper>
    )
}

Transaction.propTypes= {
    transaction: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
    })
}
Transaction.defaultProps = {
    transaction: { 
        label: '',
        value: 0
    }
}

export default Transaction;