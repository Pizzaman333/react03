import styles from './TransactionsHistory.module.scss';

const TransactionsList = (transactions) => (
  <tbody>
    {transactions.map(transaction => (
      <tr key={transaction.id}>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
      </tr>
    ))}
 </tbody>
);

export const TransactionsHistory = ({transactions}) => (
  <table className={styles.transactionHistory}>

    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    {TransactionsList(transactions)}
  </table>
);
