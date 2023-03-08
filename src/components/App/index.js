import {Component} from 'react';

import Balance from '../Balance';
import Transactions from '../Transactions';
import Form from '../Form';

import { GlobalStyle, Wrapper } from './style';

let id = 0;
class App extends Component {
    constructor() {
        super();
        this.state = {
            balance: 0,
            transactions: [],
            id: ++id
        }

        // this.onChange = this.onChange.bind(this)
    }

    onChange = (value) => {
        this.setState((state) => ({
            balance: state.balance + Number(value),
            transactions: [{value, label: 'change'}, ...state.transactions]
        }))
    }

    render() {
        return (
            <Wrapper>
                <GlobalStyle/>
                <Balance balance={this.state.balance}/>
                <Form onChange={this.onChange}/>
                <hr/>
                <Transactions transactions={this.state.transactions}/>
            </Wrapper>
        )
    }
}

export default App;