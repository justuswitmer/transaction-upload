'use server';
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from 'google-auth-library';

export default async function uploadTransactions(transactions) {
  console.log("uploadTransactions");
  try {
    const spreadsheetId = process.env.GOOGLE_TRANSACTION_UPLOAD_SHEET_ID;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;

    const serviceAccountAuth = new JWT({
      email: clientEmail,
      key: privateKey,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const spreadsheet = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);

    await spreadsheet.loadInfo();
    let worksheet = spreadsheet.sheetsByTitle["Transactions"];
    await worksheet.addRows(transactions)
  } catch (error) {
    const errorMsg = "Could not add to spreadsheet.";
    console.log("error", error);
    console.log(errorMsg);
  }
}