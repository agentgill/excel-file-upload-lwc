/**
 * @description       : ExcelToJson
 * @author            : agentgill
 * @group             :
 * @last modified on  : 10-09-2021
 * @last modified by  : agentgill
 **/
import { LightningElement, track } from 'lwc';

export default class ExcelToJson extends LightningElement {
    @track acceptedFormats = ['.xlsx'];
    async handleUploadFinished(event) {
        const uploadedFiles = event.detail.files;
        const formData = new FormData();
        if (uploadedFiles.length > 0) {
            console.dir(uploadedFiles);

            formData.append('upload', uploadedFiles);
        }
        const QUERY_URL = 'https://radiant-hamlet-82916.herokuapp.com/upload';
        const response = await fetch(QUERY_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        });
        console.dir(response);
        const result = await response.json();
        console.log(result);
    }
    async onClick(event) {
        const QUERY_URL = 'https://radiant-hamlet-82916.herokuapp.com/hello';
        console.log('Button Clicked' + event);
        const response = await fetch(QUERY_URL, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.dir(response);
        const result = await response.json();
        console.log(result);
    }
}