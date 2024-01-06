import uploadTransactions from "../../functions/uploadTransactions";

const DisplayTransactions = ({ transactions, headers }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold">Transactions</h2>
      {transactions.length > 0 && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => { uploadTransactions(transactions) }}
        >
          Upload Transactions
        </button>
      )}
      <div className="flex flex-col">
        <div className="flex flex-row">
          {headers.map((header, index) => (
            <p key={index} className="font-mono text-sm">{header}</p>
          ))}
        </div>
        {transactions.map((transaction, index) => (
          <div key={index} className="flex flex-row">
            {transaction.map((item, index) => (
              <p key={index} className="font-mono text-sm">{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DisplayTransactions;