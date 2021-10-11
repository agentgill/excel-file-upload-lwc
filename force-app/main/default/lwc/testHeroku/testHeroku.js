/**
 * @description       : TestHeroku using CORS Anywhere
 * @author            : agentgill
 * @group             :
 * @last modified on  : 10-10-2021
 * @last modified by  : agentgill
 **/
import { LightningElement } from 'lwc';

export default class TestHeroku extends LightningElement {
  defaultUrl = 'https://calm-crag-81824.herokuapp.com';
  corsAnywhereUrl = 'https://guarded-shelf-67473.herokuapp.com/https://calm-crag-81824.herokuapp.com';
  testHeroku;
  async onClickNoCORS() {
    console.log('Clicked');
    const QUERY_URL = this.corsAnywhereUrl + '/hello';
    const response = await fetch(QUERY_URL, {});
    console.dir(response);
    const result = await response.json();
    this.testHeroku = JSON.stringify(result);
    console.log(result);
  }

  async onClickCORS() {
    console.log('Clicked');
    const QUERY_URL = this.defaultUrl + '/hello';
    const response = await fetch(QUERY_URL, { mode: 'cors' });
    console.dir(response);
    const result = await response.json();
    this.testHeroku = JSON.stringify(result);
    console.log(result);
  }
}
