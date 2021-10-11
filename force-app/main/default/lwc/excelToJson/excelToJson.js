/**
 * @description       : ExcelToJson
 * @author            : agentgill
 * @group             :
 * @last modified on  : 10-11-2021
 * @last modified by  : agentgill
 **/
import { LightningElement } from 'lwc';

export default class ExcelToJson extends LightningElement {
  fileData;
  excelJSON;
  testHeroku;
  defaultUrl = 'https://radiant-hamlet-82916.herokuapp.com';

  handleUploadFinished(event) {
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = () => {
      var base64 = reader.result.split(',')[1];
      this.fileData = {
        filename: file.name,
        base64: base64
      };
      console.log(this.fileData);
    };
    reader.readAsDataURL(file);
    this.parseFile(file);
  }

  async parseFile(file) {
    const QUERY_URL = this.defaultUrl + '/upload';
    const formData = new FormData();
    formData.append('upload', file);

    const response = await fetch(QUERY_URL, {
      method: 'POST',
      mode: 'cors',
      body: formData
    });
    console.dir(response);
    const fileJSON = await response.json();
    this.excelJSON = JSON.stringify(fileJSON.data.excel, null, 2);
    console.dir('excelJSON:' + this.excelJSON);
  }

  async onClick() {
    const QUERY_URL = this.defaultUrl + '/hello';
    const response = await fetch(QUERY_URL, {
      mode: 'cors'
    });
    console.dir(response);
    const result = await response.json();
    this.testHeroku = JSON.stringify(result);
    console.log(result);
  }
}
