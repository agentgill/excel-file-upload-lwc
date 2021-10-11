/**
 * @description       : ExcelToJson Using Static Resource sheetjs
 * @author            : agentgill
 * @group             :
 * @last modified on  : 10-11-2021
 * @last modified by  : agentgill
 **/
import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { readAsBinaryString } from './readFile';
import SHEETJS_ZIP from '@salesforce/resourceUrl/sheetjs';

export default class ExcelToJsonStatic extends LightningElement {
  fileData;

  connectedCallback() {}

  constructor() {
    super();

    loadScript(this, SHEETJS_ZIP + '/xlsx.full.min.js')
      .then(() => {
        if (!window.XLSX) {
          throw new Error('Error loading SheetJS library (XLSX undefined)');
        }
        this.ready = true;
      })
      .catch((error) => {
        this.error = error;
        this.dispatchEvent(
          new ShowToastEvent({
            title: 'Excel Upload: Error loading SheetJS',
            message: error.message,
            variant: 'error'
          })
        );
      });
  }

  uploadFile(evt) {
    console.log(evt);
    let file;

    Promise.resolve(evt.target.files)
      .then((files) => {
        if (files.length !== 1) {
          throw new Error(
            'Error accessing file -- ' + (files.length === 0 ? 'No file received' : 'Multiple files received')
          );
        }

        file = files[0];
        return readAsBinaryString(file);
      })
      .then((blob) => {
        let workbook = window.XLSX.read(blob, { type: 'binary' });
        console.dir('workbook:' + JSON.stringify(workbook));
        if (!workbook || !workbook.Workbook) {
          throw new Error('Cannot read Excel File (incorrect file format?)');
        }
        if (workbook.SheetNames.length < 1) {
          throw new Error('Excel file does not contain any sheets');
        }
        let excelJSON = window.XLSX.utils.sheet_to_json(workbook.Sheets['Sheet1'], { header: 1 });
        console.dir(JSON.stringify(excelJSON));
      });
  }
}
