# Excel File Upload

Sample application for uploading and parsing Excel documents using "sheetjs" natively with LWC and an alternative solution using Heroku App for nodejs/express based parsing.

Note - You need to update any Heroku URLS to match your own Heroku Apps i.e. https://radiant-hamlet-82916.herokuapp.com

## Resources

- [SheetJS](https://sheetjs.com/)
- [xlsx](https://www.npmjs.com/package/xlsx)
- [Heroku](https://heroku.com/)
- [SalesforceLabs - ExcelUpload](https://github.com/SalesforceLabs/ExcelUpload)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## excelToJsonStatic LWC

Simple LWC with file upload which uses "sheetjs" static resource for parsng (based on ExcelUpload repo). Parses uploaded excel document and returns JSON.

## excelToJson LWC

Simple LWC with file upload and send to Heroku App based on Fetch API. POST to endpont on Hero for parsing and returns JSON response.

## testHeroku LWC

Simple LWC for testing callout to Heroku using Fetch API.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
