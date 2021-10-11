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

  async handleUploadFinished(event) {
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      var base64 = reader.result.split(',')[1];
      this.fileData = {
        filename: file.name,
        base64: base64
      };
      this.parseFile(this.fileData);
      console.dir('fileData:' + JSON.stringify(this.fileData));
    };
    reader.readAsDataURL(file);
  }

  async parseFile(data) {}
}
