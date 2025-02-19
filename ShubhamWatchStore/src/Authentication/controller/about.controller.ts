
import * as angular from 'angular';


export class AboutController {
    static $inject = ['$scope'];
    message: string;
  
    constructor() {
      // Controller logic for About
      this.message = 'Whether youre searching for [product category] or [product category], we ensure that everything we sell is [unique trait like eco-friendly, handcrafted, etc.]. Our team is committed to providing exceptional customer service and a seamless shopping experience.';
    }
  }