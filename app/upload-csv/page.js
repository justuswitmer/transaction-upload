'use client';
import { Fragment, useState } from "react";
import { default as CSVReader } from "./CSVReaderClickAndDragUpload.client"
import { default as DisplayTransactions } from "./DisplayTransactions.client"

const CSVProcessing = () => {

  const [transactions, setTransactions] = useState([]);
  const [headers, setHeaders] = useState([]);
  const collectTransactions = (collectedTransactions) => {
    let tempTransactions = collectedTransactions.data.slice(1);
    setTransactions([]);
    setHeaders(collectedTransactions.data[0]);
    console.log('tempTransactions', tempTransactions);
    setTransactions(tempTransactions);
  }

  return (
    <Fragment>
      <CSVReader setResults={collectTransactions} />
      <DisplayTransactions headers={headers} transactions={transactions} />
    </Fragment>
  )
}

export default CSVProcessing;