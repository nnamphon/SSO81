(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Service/record.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Service/record.service.ts ***!
  \*******************************************/
/*! exports provided: RecordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordService", function() { return RecordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RecordService = /** @class */ (function () {
    function RecordService(http) {
        this.http = http;
        this.API = '//localhost:8080';
    }
    RecordService.prototype.getMold = function () {
        return this.http.get(this.API + '/mold');
    };
    RecordService.prototype.getPayment = function () {
        return this.http.get(this.API + '/payment');
    };
    RecordService.prototype.getCoffeeorder = function () {
        return this.http.get(this.API + '/coffeeorder');
    };
    RecordService.prototype.getStaff = function () {
        return this.http.get(this.API + '/staff');
    };
    RecordService.prototype.getCustomer = function () {
        return this.http.get(this.API + '/customer');
    };
    RecordService.prototype.getResponsible = function () {
        return this.http.get(this.API + '/responsible');
    };
    RecordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RecordService);
    return RecordService;
}());



/***/ }),

/***/ "./src/app/Service/service.service.ts":
/*!********************************************!*\
  !*** ./src/app/Service/service.service.ts ***!
  \********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
        this.API = '//localhost:8080';
        this.counter = 0;
        this.push = false;
        this.numberMember = 0;
        this.mold = {
            moldID: '',
            nameM: String,
            model: '',
            partNo: '',
            address: '',
            partName: '',
        };
        this.responsible = {
            resID: '',
            nameS: String,
            other: ''
        };
        this.point = {
            id: '',
            nameM: String,
            model: '',
            partNo: '',
            address: '',
            partName: '',
        };
    }
    ServiceService.prototype.getMold = function () {
        return this.http.get(this.API + '/mold');
    };
    ServiceService.prototype.getPoint = function () {
        return this.http.get(this.API + '/point');
    };
    ServiceService.prototype.getResponsible = function () {
        return this.http.get(this.API + '/responsible');
    };
    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/add-location/point.component.css":
/*!**************************************************!*\
  !*** ./src/app/add-location/point.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\r\n    align-content: center;\r\n    text-align: center;\r\n    width: 20%;\r\n    left : 10%;\r\n  }\r\n  .example-full-widtha {\r\n    align-content: center;\r\n    text-align: center;\r\n    width: 20%;\r\n    left : 40%;\r\n  }\r\n  .example-mid-width {\r\n    align-content: center;\r\n    text-align: center;\r\n    width: 15%;\r\n    \r\n  }\r\n  .aa{\r\n    text-align: center;\r\n  }\r\n  .example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n  .top{\r\n  color: aliceblue;\r\n  font-size: 250%;\r\n \r\n}\r\n  .Title{\r\n  color: saddlebrown;\r\n}\r\n  th,tr.mat-footer-row {\r\n  font-weight: bold;\r\n  background: rgba(24, 3, 3, 0.651);\r\n  text-align: center;\r\n}\r\n\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWxvY2F0aW9uL3BvaW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0VBQ1o7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7RUFDWjtFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVOztFQUVaO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDRjtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlOztBQUVqQjtFQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0VBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1sb2NhdGlvbi9wb2ludC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbGVmdCA6IDEwJTtcclxuICB9XHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aGEge1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGxlZnQgOiA0MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLW1pZC13aWR0aCB7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5hYXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuLnRvcHtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIGZvbnQtc2l6ZTogMjUwJTtcclxuIFxyXG59XHJcbi5UaXRsZXtcclxuICBjb2xvcjogc2FkZGxlYnJvd247XHJcbn1cclxudGgsdHIubWF0LWZvb3Rlci1yb3cge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQsIDMsIDMsIDAuNjUxKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-location/point.component.html":
/*!***************************************************!*\
  !*** ./src/app/add-location/point.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class =\"top\" color=\"primary\">\r\n  <mat-toolbar-row>\r\n      <div class=\"button\" color=\"accent\">\r\n          <button mat-button  routerLink=\"/home/admin\">\r\n            <img class=\"world\" height=\"25\" src=\"assets/img/brand/BoschLogoNoBackground.png\" >\r\n          </button>\r\n          <button mat-icon-button>\r\n            <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\r\n          </button>\r\n        </div>\r\n    <span class=\"example-spacer\"></span>\r\n      <div class=\"buttonLogIn\">\r\n          <button mat-button color=\"accent\" routerLink=\"/show-location\" >\r\n              SHOW LOCATION\r\n          </button>\r\n      </div>\r\n    <a mat-button [routerLink]=\"['/home-show']\"><i class=\"material-icons\"> home </i></a>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container>\r\n    <mat-sidenav #sidenav  mode=\"side\">\r\n      <mat-nav-list>\r\n\r\n        <a mat-list-item [routerLink]=\"'/add-responsible'\"> Responsible </a>\r\n        <a mat-list-item [routerLink]=\"'/add-mold'\"> Mold </a>\r\n        <a mat-list-item [routerLink]=\"'/layout'\"> layout </a>\r\n        <a mat-list-item (click)=\"sidenav.toggle()\" href=\"\" mat-list-item>Close</a>\r\n  \r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <div> \r\n<body style=\"text-align:center;\">\r\n    <div class = \"Title\">\r\n        <h1 style=\"text-align:center;\"> ADD DATA </h1>\r\n      </div>\r\n<br>\r\n\r\n<mat-form-field  class=\"example-mid-width\" >\r\n  <mat-select placeholder=\"SelectTable\" [(ngModel)]=\"addPointSelect\" name=\"addPoint\">\r\n    <mat-option *ngFor=\"let gd of addPoints\" [value]=\"gd.id\">\r\n      {{gd.addPoint}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<br>\r\n\r\n<mat-form-field  class=\"example-mid-width\">\r\n  <mat-select placeholder=\"Responsible\" [(ngModel)]=\"nameSSelect\" name=\"nameS\">\r\n    <mat-option *ngFor=\"let nameS of nameSs\" [value]=\"nameS.resID\">\r\n      {{nameS.nameS}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<br>\r\n\r\n<mat-form-field class=\"example-mid-width\">\r\n  <mat-select [(ngModel)]=\"userSelect\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Tools No.\"\r\n              panelClass=\"example-panel\">\r\n    <mat-option value={{user.moldID}} *ngFor=\"let user of users\">{{user.nameM}} </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n<br>\r\n<mat-form-field  class=\"example-mid-width\">\r\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Date start\" [(ngModel)]=\"date\">\r\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n  <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>\r\n\r\n<br>\r\n<mat-form-field class=\"example-mid-width\">\r\n  <mat-label>Status</mat-label>\r\n  <mat-select  [(ngModel)]=\"otherSelect\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Tools No.\"\r\n  panelClass=\"example-panel\">\r\n    <mat-option value=\"PM\">PM</mat-option>\r\n    <mat-option value=\"Repair\">Repair</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n\r\n<br>\r\n<button mat-raised-button color =\"warn\" (click)=\"insert()\" >SUBMIT</button> <br>\r\n\r\n<br><br>\r\n</body>\r\n</div>\r\n</mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/add-location/point.component.ts":
/*!*************************************************!*\
  !*** ./src/app/add-location/point.component.ts ***!
  \*************************************************/
/*! exports provided: PointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointComponent", function() { return PointComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_server_all_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server-all.service */ "./src/app/service/server-all.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_record_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/record.service */ "./src/app/Service/record.service.ts");






var PointComponent = /** @class */ (function () {
    function PointComponent(controller, httpClient, router, controller1) {
        this.controller = controller;
        this.httpClient = httpClient;
        this.router = router;
        this.controller1 = controller1;
        this.userSelect = 0;
        this.data = {};
    }
    PointComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.controller.getAddpoint().subscribe(function (on) {
            _this.addPoints = on;
            console.log(_this.addPoints);
        });
        this.controller.getMold().subscribe(function (on) {
            _this.users = on;
            console.log(_this.users);
        });
        this.controller1.getResponsible().subscribe(function (data) {
            _this.nameSs = data;
            console.log(_this.nameSs);
        });
    };
    PointComponent.prototype.insert = function () {
        this.httpClient.post('http://localhost:8080/point/' + this.otherSelect + '/' + this.date + '/' + this.addPointSelect + '/' + this.userSelect + '/' + this.nameSSelect, {})
            .subscribe();
        alert("SAVE SUCCESSFULLY");
    };
    PointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-point',
            template: __webpack_require__(/*! ./point.component.html */ "./src/app/add-location/point.component.html"),
            styles: [__webpack_require__(/*! ./point.component.css */ "./src/app/add-location/point.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_all_service__WEBPACK_IMPORTED_MODULE_2__["SearchAllService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _Service_record_service__WEBPACK_IMPORTED_MODULE_5__["RecordService"]])
    ], PointComponent);
    return PointComponent;
}());



/***/ }),

/***/ "./src/app/add-mold/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-mold/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n.Title{\r\n  color: saddlebrown;\r\n}\r\n.button-row {\r\n  margin-bottom: 5%;\r\n}\r\n.top{\r\n  color: aliceblue;\r\n  font-size: 250%;\r\n  /* background-color: rgb(0, 0, 0); */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW1vbGQvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9DQUFvQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL2FkZC1tb2xkL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5UaXRsZXtcclxuICBjb2xvcjogc2FkZGxlYnJvd247XHJcbn1cclxuLmJ1dHRvbi1yb3cge1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi50b3B7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBmb250LXNpemU6IDI1MCU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAqL1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-mold/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-mold/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class =\"top\" color=\"primary\">\r\n  <mat-toolbar-row>\r\n      <div class=\"button\" color=\"accent\">\r\n          <button mat-button  routerLink=\"/home/admin\">\r\n            <img class=\"world\" height=\"25\" src=\"assets/img/brand/BoschLogoNoBackground.png\" >\r\n          </button>\r\n          <button mat-icon-button>\r\n            <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\r\n          </button>\r\n        </div>\r\n    <span class=\"example-spacer\"></span>\r\n      <div class=\"buttonLogIn\">\r\n          <button mat-button color=\"accent\" routerLink=\"/list-mold\" >\r\n              LIST MOLD\r\n          </button>\r\n      </div>\r\n    <a mat-button [routerLink]=\"['/home-show']\"><i class=\"material-icons\"> home </i></a>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container>\r\n    <mat-sidenav #sidenav  mode=\"side\">\r\n      <mat-nav-list>\r\n  \r\n        <a mat-list-item [routerLink]=\"'/add-location'\"> Location </a>\r\n        <a mat-list-item [routerLink]=\"'/add-responsible'\"> Responsible </a>\r\n        <a mat-list-item [routerLink]=\"'/layout'\"> layout </a>\r\n        <a mat-list-item (click)=\"sidenav.toggle()\" href=\"\" mat-list-item>Close</a>\r\n  \r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <div>\r\n        <div class = \"Title\">\r\n          <h1 style=\"text-align:center;\"> REGISTER MOLD </h1>\r\n        </div>\r\n\r\n        <div class=\"member\">\r\n          <form class=\"name\" style=\"text-align:center;\">\r\n\r\n            <h4>PRODUCT : &nbsp;&nbsp;<mat-form-field>\r\n              <mat-select [(ngModel)]=\"productSelect\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Select part mold\"\r\n                          panelClass=\"example-panel\">\r\n                <mat-option [value]=\"product.productID\" *ngFor=\"let product of proName\" >\r\n                  {{product.proName}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field></h4>\r\n\r\n            <h4>TOOL NO. : &nbsp;&nbsp; <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Input tool no.\" [(ngModel)]=\"addmold.inputName\"\r\n                    type = \"text\" [ngModelOptions]=\"{standalone: true}\">\r\n            </mat-form-field></h4>\r\n\r\n            <h4>MODEL : &nbsp;&nbsp; <mat-form-field>\r\n              <mat-select [(ngModel)]=\"modelSelect\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Select model\"\r\n                          panelClass=\"example-panel\">\r\n                <mat-option [value]=\"model.modelID\" *ngFor=\"let model of models\" >\r\n                  {{model.model}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field></h4>\r\n\r\n            <h4>PART NO. : &nbsp;&nbsp; <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Input part no.\" [(ngModel)]=\"addmold.inputPartNo\"\r\n                    type = \"text\" [ngModelOptions]=\"{standalone: true}\">\r\n            </mat-form-field></h4>\r\n\r\n            <h4>PART NAME : &nbsp;&nbsp; <mat-form-field>\r\n              <mat-select [(ngModel)]=\"partNameSelect\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Select part name\"\r\n                          panelClass=\"example-panel\">\r\n                <mat-option [value]=\"partName.partNameID\" *ngFor=\"let partName of namepas\" >\r\n                  {{partName.namePa}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field></h4>\r\n\r\n\r\n            <br>\r\n            <div class =\"button-row\">\r\n              <a mat-raised-button color =\"warn\" (click)= \"save()\" >save</a>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      </mat-sidenav-content>\r\n  </mat-sidenav-container>"

/***/ }),

/***/ "./src/app/add-mold/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-mold/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/member.service */ "./src/app/service/member.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(memberService, httpClient, router, serviceService) {
        this.memberService = memberService;
        this.httpClient = httpClient;
        this.router = router;
        this.serviceService = serviceService;
        this.addmold = {
            inputName: '',
            inputPartNo: '',
        };
        this.productSelect = 0;
        this.modelSelect = 0;
        this.partNameSelect = 0;
        this.number = 0;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberService.getProduct().subscribe(function (data) {
            _this.proName = data;
            console.log(_this.proName);
        });
        this.memberService.getModel().subscribe(function (data) {
            _this.models = data;
            console.log(_this.models);
        });
        this.memberService.getPartName().subscribe(function (data) {
            _this.namepas = data;
            console.log(_this.namepas);
        });
    };
    RegisterComponent.prototype.save = function () {
        if (this.productSelect === 0 || this.addmold.inputName === '' || this.modelSelect === 0 ||
            this.addmold.inputPartNo === '' || this.partNameSelect === 0) {
            alert('Please complete all information.');
        }
        else {
            this.httpClient.post('http://localhost:8080/mold/' + this.productSelect + '/' +
                this.modelSelect + '/' + this.partNameSelect, this.addmold)
                .subscribe(function (data) {
                console.log('PUT Request is successful', data);
            }, function (error) {
                console.log('Error', error);
            });
            alert('Save data successfully.');
            this.router.navigate(['delete-mold']);
        }
    };
    RegisterComponent.prototype.push = function () {
        this.serviceService.numberMember = this.serviceService.numberMember + this.number;
        this.number++;
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/add-mold/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/add-mold/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/add-responsible/responsible.component.css":
/*!***********************************************************!*\
  !*** ./src/app/add-responsible/responsible.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  .Title{\r\n    color: saddlebrown;\r\n  }\r\n  .button-row {\r\n    margin-bottom: 5%;\r\n  }\r\n  .top{\r\n    color: aliceblue;\r\n    font-size: 250%;\r\n    /* background-color: rgb(0, 0, 0); */\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXJlc3BvbnNpYmxlL3Jlc3BvbnNpYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQ0FBb0M7RUFDdEMiLCJmaWxlIjoic3JjL2FwcC9hZGQtcmVzcG9uc2libGUvcmVzcG9uc2libGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgLlRpdGxle1xyXG4gICAgY29sb3I6IHNhZGRsZWJyb3duO1xyXG4gIH1cclxuICAuYnV0dG9uLXJvdyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICB9XHJcbiAgLnRvcHtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXNpemU6IDI1MCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7ICovXHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/add-responsible/responsible.component.html":
/*!************************************************************!*\
  !*** ./src/app/add-responsible/responsible.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class =\"top\" color=\"primary\">\n    <mat-toolbar-row>\n        <div class=\"button\" color=\"accent\">\n            <button mat-button  routerLink=\"/home/admin\">\n              <img class=\"world\" height=\"25\" src=\"assets/img/brand/BoschLogoNoBackground.png\" >\n            </button>\n            <button mat-icon-button>\n              <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\n            </button>\n          </div>\n      <span class=\"example-spacer\"></span>\n        <div class=\"buttonLogIn\">\n            <button mat-button color=\"accent\" routerLink=\"/list-responsible\" >\n                SHOW RESPONSIBLE\n            </button>\n        </div>\n      <a mat-button [routerLink]=\"['/home/admin']\"><i class=\"material-icons\"> home </i></a>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-sidenav-container>\n      <mat-sidenav #sidenav  mode=\"side\">\n        <mat-nav-list>\n    \n          <a mat-list-item [routerLink]=\"'/add-location'\"> Location </a>\n          <a mat-list-item [routerLink]=\"'/add-mold'\"> Mold </a>\n          <a mat-list-item [routerLink]=\"'/layout'\"> layout </a>\n          <a mat-list-item (click)=\"sidenav.toggle()\" href=\"\" mat-list-item>Close</a>\n    \n        </mat-nav-list>\n      </mat-sidenav>\n      <mat-sidenav-content>\n        <div>\n<div class = \"Title\">\n  <h1 style=\"text-align:center;\"> REGISTER RESPONSIBLE </h1>\n</div>\n\n<div class=\"member\">\n  <form class=\"name\" style=\"text-align:center;\">\n\n    \n\n    <h4>NAME : &nbsp;&nbsp; <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Input name\" [(ngModel)]=\"addresponsible.inputName\"\n             type = \"text\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field></h4>\n\n    <h4>OTHER : &nbsp;&nbsp; <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Input other\" [(ngModel)]=\"addresponsible.inputOther\"\n             type = \"text\" [ngModelOptions]=\"{standalone: true}\">\n    </mat-form-field></h4>\n\n  \n\n\n    <br>\n    <div class =\"button-row\">\n      <a mat-raised-button color =\"warn\" (click)= \"save()\" >save</a>\n    </div>\n  </form>\n</div>\n</div>\n</mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/add-responsible/responsible.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/add-responsible/responsible.component.ts ***!
  \**********************************************************/
/*! exports provided: ResponsibleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsibleComponent", function() { return ResponsibleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/member.service */ "./src/app/service/member.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");






var ResponsibleComponent = /** @class */ (function () {
    function ResponsibleComponent(memberService, httpClient, router, serviceService) {
        this.memberService = memberService;
        this.httpClient = httpClient;
        this.router = router;
        this.serviceService = serviceService;
        this.addresponsible = {
            inputName: '',
            inputOther: '',
        };
        this.number = 0;
    }
    ResponsibleComponent.prototype.ngOnInit = function () {
    };
    ResponsibleComponent.prototype.save = function () {
        if (this.addresponsible.inputName === '' || this.addresponsible.inputOther === '') {
            alert('Please complete all information.');
        }
        else {
            this.httpClient.post('http://localhost:8080/responsible/', this.addresponsible)
                .subscribe(function (data) {
                console.log('PUT Request is successful', data);
            }, function (error) {
                console.log('Error', error);
            });
            alert('Save data successfully.');
        }
    };
    ResponsibleComponent.prototype.push = function () {
        this.serviceService.numberMember = this.serviceService.numberMember + this.number;
        this.number++;
    };
    ResponsibleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-responsible',
            template: __webpack_require__(/*! ./responsible.component.html */ "./src/app/add-responsible/responsible.component.html"),
            styles: [__webpack_require__(/*! ./responsible.component.css */ "./src/app/add-responsible/responsible.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"]])
    ], ResponsibleComponent);
    return ResponsibleComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  -->\r\n\r\n \r\n      <router-outlet></router-outlet>\r\n  \r\n    \r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Frontend Team01';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _service_manu_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/manu.service */ "./src/app/service/manu.service.ts");
/* harmony import */ var _list_responsible_homestaff_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-responsible/homestaff.component */ "./src/app/list-responsible/homestaff.component.ts");
/* harmony import */ var _add_mold_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-mold/register.component */ "./src/app/add-mold/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_location_point_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-location/point.component */ "./src/app/add-location/point.component.ts");
/* harmony import */ var _home_admin_point_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home-admin/point-view.component */ "./src/app/home-admin/point-view.component.ts");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _list_mold_cancel_member_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./list-mold/cancel-member.component */ "./src/app/list-mold/cancel-member.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _list_location_show_tables_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./list-location/show-tables.component */ "./src/app/list-location/show-tables.component.ts");
/* harmony import */ var _add_responsible_responsible_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./add-responsible/responsible.component */ "./src/app/add-responsible/responsible.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");

























var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'add-mold', component: _add_mold_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"] },
    { path: 'list-mold', component: _list_mold_cancel_member_component__WEBPACK_IMPORTED_MODULE_19__["CancelMemberComponent"] },
    { path: 'add-responsible', component: _add_responsible_responsible_component__WEBPACK_IMPORTED_MODULE_22__["ResponsibleComponent"] },
    { path: 'list-responsible', component: _list_responsible_homestaff_component__WEBPACK_IMPORTED_MODULE_11__["HomestaffComponent"] },
    { path: 'add-location', component: _add_location_point_component__WEBPACK_IMPORTED_MODULE_15__["PointComponent"] },
    { path: 'show-location', component: _list_location_show_tables_component__WEBPACK_IMPORTED_MODULE_21__["ShowTablesComponent"] },
    { path: 'home/admin', component: _home_admin_point_view_component__WEBPACK_IMPORTED_MODULE_16__["PointViewComponent"] },
    { path: 'home-show', component: _show_show_component__WEBPACK_IMPORTED_MODULE_17__["ShowComponent"] },
    { path: 'layout', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_23__["LayoutComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _list_responsible_homestaff_component__WEBPACK_IMPORTED_MODULE_11__["HomestaffComponent"],
                _add_mold_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _add_location_point_component__WEBPACK_IMPORTED_MODULE_15__["PointComponent"],
                _home_admin_point_view_component__WEBPACK_IMPORTED_MODULE_16__["PointViewComponent"],
                _show_show_component__WEBPACK_IMPORTED_MODULE_17__["ShowComponent"],
                _list_mold_cancel_member_component__WEBPACK_IMPORTED_MODULE_19__["CancelMemberComponent"],
                _list_location_show_tables_component__WEBPACK_IMPORTED_MODULE_21__["ShowTablesComponent"],
                _add_responsible_responsible_component__WEBPACK_IMPORTED_MODULE_22__["ResponsibleComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_23__["LayoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBS-fusP8ANNGCD1KGL7Bop1bqD1XcXTYk' }),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"]
            ],
            entryComponents: [],
            providers: [_service_manu_service__WEBPACK_IMPORTED_MODULE_10__["ManuService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home-admin/point-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/home-admin/point-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n.Title{\r\n  color: saddlebrown;\r\n}\r\n.button-row {\r\n  margin-bottom: 5%;\r\n}\r\n.top{\r\n  color: aliceblue;\r\n  font-size: 250%;\r\n  /* background-color: rgb(0, 0, 0); */\r\n}\r\n.img-circle {\r\n  border-radius: 50%;\r\n  width: auto;\r\n  height: 50%;\r\n}\r\n.centered {\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  filter: saturate(200%);\r\n  -webkit-filter: saturate(200%);\r\n  -moz-filter: saturate(200%);\r\n  -o-filter: saturate(200%);\r\n  -ms-filter: saturate(200%);\r\n}\r\nh1 {\r\n  top: 80%;\r\n  left: 50%;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  color: rgb(0, 0, 0);\r\n \r\n}\r\n.bottom {\r\n  position: absolute;\r\n  top: 77%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  filter: saturate(200%);\r\n  -webkit-filter: saturate(200%);\r\n  -moz-filter: saturate(200%);\r\n  -o-filter: saturate(200%);\r\n  -ms-filter: saturate(200%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1hZG1pbi9wb2ludC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjs7QUFFckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1hZG1pbi9wb2ludC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5UaXRsZXtcclxuICBjb2xvcjogc2FkZGxlYnJvd247XHJcbn1cclxuLmJ1dHRvbi1yb3cge1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi50b3B7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBmb250LXNpemU6IDI1MCU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAqL1xyXG59XHJcbi5pbWctY2lyY2xlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuLmNlbnRlcmVkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGZpbHRlcjogc2F0dXJhdGUoMjAwJSk7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IHNhdHVyYXRlKDIwMCUpO1xyXG4gIC1tb3otZmlsdGVyOiBzYXR1cmF0ZSgyMDAlKTtcclxuICAtby1maWx0ZXI6IHNhdHVyYXRlKDIwMCUpO1xyXG4gIC1tcy1maWx0ZXI6IHNhdHVyYXRlKDIwMCUpO1xyXG59XHJcbmgxIHtcclxuICB0b3A6IDgwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuIFxyXG59XHJcbi5ib3R0b20ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDc3JTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZmlsdGVyOiBzYXR1cmF0ZSgyMDAlKTtcclxuICAtd2Via2l0LWZpbHRlcjogc2F0dXJhdGUoMjAwJSk7XHJcbiAgLW1vei1maWx0ZXI6IHNhdHVyYXRlKDIwMCUpO1xyXG4gIC1vLWZpbHRlcjogc2F0dXJhdGUoMjAwJSk7XHJcbiAgLW1zLWZpbHRlcjogc2F0dXJhdGUoMjAwJSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home-admin/point-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/home-admin/point-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class =\"top\" color=\"primary\">\r\n    <mat-toolbar-row>\r\n        <div class=\"button\" color=\"accent\">\r\n            <button mat-button  routerLink=\"/home/admin\">\r\n              <img class=\"world\" height=\"25\" src=\"assets/img/brand/BoschLogoNoBackground.png\" >\r\n            </button>\r\n            \r\n\r\n            <a mat-button [routerLink]=\"'/add-mold'\"> MOLD </a>\r\n            <a mat-button [routerLink]=\"'/add-location'\"> LOCATION </a>\r\n            <a mat-button [routerLink]=\"'/layout'\"> LAYOUT </a>\r\n        </div>\r\n\r\n      <span class=\"example-spacer\"></span>\r\n      <button mat-button [matMenuTriggerFor]=\"menu\">{{staffs[i+0].staffName}}</button>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <a mat-menu-item  href=\"\" mat-menu-item>Logout</a>\r\n        <a mat-menu-item [routerLink]=\"'/home'\">Home</a>\r\n      </mat-menu>\r\n      \r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n  <div class=\"centered\"><img class=\"world\" height=\"355\" src=\"assets/img/2.png\"></div>\r\n  <!-- <img   src=\"assets/img/Capture.PNG\" > -->\r\n\r\n<div class=\"bottom\">\r\n<h1 >WELCOME TO</h1>\r\n<h1  >TEF9 SHOP MAINTENANCE</h1>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home-admin/point-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home-admin/point-view.component.ts ***!
  \****************************************************/
/*! exports provided: PointViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointViewComponent", function() { return PointViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_server_all_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server-all.service */ "./src/app/service/server-all.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PointViewComponent = /** @class */ (function () {
    function PointViewComponent(controller, httpClient, router) {
        this.controller = controller;
        this.httpClient = httpClient;
        this.router = router;
        this.i = 0;
    }
    PointViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.controller.getStaffxy().subscribe(function (data) {
            _this.staffs = data;
            console.log(_this.staffs);
        });
    };
    PointViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-point-view',
            template: __webpack_require__(/*! ./point-view.component.html */ "./src/app/home-admin/point-view.component.html"),
            styles: [__webpack_require__(/*! ./point-view.component.css */ "./src/app/home-admin/point-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_server_all_service__WEBPACK_IMPORTED_MODULE_2__["SearchAllService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PointViewComponent);
    return PointViewComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-circle {\r\n  border-radius: 50%;\r\n  width: auto;\r\n  height: 30%;\r\n}\r\n.centered {\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  filter: saturate(200%);\r\n  -webkit-filter: saturate(200%);\r\n  -moz-filter: saturate(200%);\r\n  -o-filter: saturate(200%);\r\n  -ms-filter: saturate(200%);\r\n}\r\nh1 {\r\n  top: 80%;\r\n  left: 50%;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  color: rgb(0, 0, 0);\r\n}\r\n.bottom{\r\n  position: absolute;\r\n  top: 77%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  filter: saturate(200%);\r\n  -webkit-filter: saturate(200%);\r\n  -moz-filter: saturate(200%);\r\n  -o-filter: saturate(200%);\r\n  -ms-filter: saturate(200%);\r\n}\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n.Title{\r\n  color: saddlebrown;\r\n}\r\n.button-row {\r\n  margin-bottom: 5%;\r\n}\r\n.top{\r\n  color: aliceblue;\r\n  font-size: 250%;\r\n  /* background-color: rgb(0, 0, 0); */\r\n}\r\n.word{\r\n  border-radius: 50%;\r\n  width: auto;\r\n  height: 50%;\r\n  \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1jaXJjbGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDMwJTtcclxufVxyXG4uY2VudGVyZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZmlsdGVyOiBzYXR1cmF0ZSgyMDAlKTtcclxuICAtd2Via2l0LWZpbHRlcjogc2F0dXJhdGUoMjAwJSk7XHJcbiAgLW1vei1maWx0ZXI6IHNhdHVyYXRlKDIwMCUpO1xyXG4gIC1vLWZpbHRlcjogc2F0dXJhdGUoMjAwJSk7XHJcbiAgLW1zLWZpbHRlcjogc2F0dXJhdGUoMjAwJSk7XHJcbn1cclxuaDEge1xyXG4gIHRvcDogODAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcbi5ib3R0b217XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzclO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBmaWx0ZXI6IHNhdHVyYXRlKDIwMCUpO1xyXG4gIC13ZWJraXQtZmlsdGVyOiBzYXR1cmF0ZSgyMDAlKTtcclxuICAtbW96LWZpbHRlcjogc2F0dXJhdGUoMjAwJSk7XHJcbiAgLW8tZmlsdGVyOiBzYXR1cmF0ZSgyMDAlKTtcclxuICAtbXMtZmlsdGVyOiBzYXR1cmF0ZSgyMDAlKTtcclxufVxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5UaXRsZXtcclxuICBjb2xvcjogc2FkZGxlYnJvd247XHJcbn1cclxuLmJ1dHRvbi1yb3cge1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi50b3B7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBmb250LXNpemU6IDI1MCU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAqL1xyXG59XHJcbi53b3Jke1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDUwJTtcclxuICBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class =\"top\" color=\"primary\">\r\n    <mat-toolbar-row>\r\n        <div class=\"button\" color=\"accent\">\r\n            <button mat-button  routerLink=\"/home\">\r\n              <img class=\"world\" height=\"25\" src=\"assets/img/brand/BoschLogoNoBackground.png\" >\r\n            </button>\r\n            \r\n          </div>\r\n      <span class=\"example-spacer\"></span>\r\n        <div class=\"buttonLogIn\">\r\n            <button mat-button color=\"accent\" routerLink=\"/login\" >\r\n                LOGIN\r\n            </button>\r\n        </div>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n  \r\n      <div class=\"centered\"><img class=\"world\" height=\"355\" src=\"assets/img/2.png\"></div>\r\n      <!-- <img   src=\"assets/img/Capture.PNG\" > -->\r\n  \r\n<div class=\"bottom\">\r\n    <h1 >WELCOME TO</h1>\r\n  <h1  >TEF9 SHOP MAINTENANCE</h1>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\r\n    flex: 1 1 auto;\r\n  }.word{\r\n     left: 0%;\r\n     right: 0%;\r\n     \r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQixDQUFDO0tBQ0UsUUFBUTtLQUNSLFNBQVM7O0VBRVoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfS53b3Jke1xyXG4gICAgIGxlZnQ6IDAlO1xyXG4gICAgIHJpZ2h0OiAwJTtcclxuICAgICBcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class =\"top\" color=\"primary\">\n    <mat-toolbar-row>\n        <div class=\"button\" color=\"accent\">\n            <button mat-button  routerLink=\"/home/admin\">\n              <img class=\"world\" height=\"25\" src=\"assets/img/brand/BoschLogoNoBackground.png\" >\n            </button>\n            <button mat-icon-button>\n              <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\n            </button>\n          </div>\n      <span class=\"example-spacer\"></span>\n        <div class=\"buttonLogIn\">\n            <button mat-button color=\"accent\" routerLink=\"/add-location\" >\n                ADD LOCATION\n            </button>\n        </div>\n      <a mat-button [routerLink]=\"['/show-location']\"><i class=\"material-icons\"> keyboard_arrow_left </i></a>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <mat-sidenav-container>\n    <mat-sidenav #sidenav  mode=\"side\">\n      <mat-nav-list>\n  \n        <a mat-list-item [routerLink]=\"'/add-location'\"> Location </a>\n        <a mat-list-item [routerLink]=\"'/add-responsible'\"> Responsible </a>\n        <a mat-list-item [routerLink]=\"'/layout'\"> layout </a>\n        <a mat-list-item (click)=\"sidenav.toggle()\" href=\"\" mat-list-item>Close</a>\n  \n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <div>\n<mat-card class=\"world\">\n    <img   src=\"assets/img/Drawing1.png\" >\n</mat-card>    \n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/list-location/show-tables.component.css":
/*!*********************************************************!*\
  !*** ./src/app/list-location/show-tables.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 75%;\r\n    border-collapse: collapse;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  \r\n  }\r\n  \r\n  .button-row button,\r\n  .button-row a {\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  th,tr.mat-footer-row {\r\n    font-weight: bold;\r\n    background: rgba(24, 3, 3, 0.651);\r\n    text-align: center;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  .Title{\r\n    color: saddlebrown;\r\n  }\r\n  \r\n  .button-row {\r\n    margin-bottom: 5%;\r\n  }\r\n  \r\n  .top{\r\n    color: aliceblue;\r\n    font-size: 250%;\r\n    /* background-color: rgb(250, 0, 0); */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1sb2NhdGlvbi9zaG93LXRhYmxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCOztFQUVwQjs7RUFFQTs7SUFFRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNDQUFzQztFQUN4QyIsImZpbGUiOiJzcmMvYXBwL2xpc3QtbG9jYXRpb24vc2hvdy10YWJsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24tcm93IGJ1dHRvbixcclxuICAuYnV0dG9uLXJvdyBhIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgdGgsdHIubWF0LWZvb3Rlci1yb3cge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0LCAzLCAzLCAwLjY1MSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgLlRpdGxle1xyXG4gICAgY29sb3I6IHNhZGRsZWJyb3duO1xyXG4gIH1cclxuICAuYnV0dG9uLXJvdyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICB9XHJcbiAgLnRvcHtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBmb250LXNpemU6IDI1MCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAwLCAwKTsgKi9cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/list-location/show-tables.component.html":
/*!**********************************************************!*\
  !*** ./src/app/list-location/show-tables.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class =\"top\" color=\"primary\">\n    <mat-toolbar-row>\n        <div class=\"button\" color=\"accent\">\n            <button mat-button  routerLink=\"/home/admin\">\n              <img class=\"world\" height=\"25\" src=\"assets/img/brand/BoschLogoNoBackground.png\" >\n            </button>\n            <button mat-icon-button>\n              <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\n            </button>\n          </div>\n      <span class=\"example-spacer\"></span>\n        <div class=\"buttonLogIn\">\n            <button mat-button color=\"accent\" routerLink=\"/add-location\" >\n                ADD LOCATION\n            </button>\n        </div>\n      <a mat-button [routerLink]=\"['/layout']\"><i class=\"material-icons\"> keyboard_arrow_right </i></a>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <mat-sidenav-container>\n    <mat-sidenav #sidenav  mode=\"side\">\n      <mat-nav-list>\n  \n        <a mat-list-item [routerLink]=\"'/add-location'\"> Location </a>\n        <a mat-list-item [routerLink]=\"'/add-responsible'\"> Responsible </a>\n        <a mat-list-item [routerLink]=\"'/layout'\"> layout </a>\n        <a mat-list-item (click)=\"sidenav.toggle()\" href=\"\" mat-list-item>Close</a>\n  \n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <div>\n        <div class = \"Title\">\n          <h1 style=\"text-align:center;\"> TABLE STATUS</h1>\n        </div>\n<mat-dialog-content >\n  <table mat-table  [dataSource]=\"points\" class=\"mat-elevation-z8\"> \n\n   \n    <ng-container matColumnDef=\"table\">\n      <th mat-header-cell *matHeaderCellDef>TABLE ID</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.addpoint.addPoint}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"dateStart\">\n      <th mat-header-cell *matHeaderCellDef>DATE START</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"nameS\">\n      <th mat-header-cell *matHeaderCellDef>RESPONSIBLE</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.responsible.nameS}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"nameM\">\n      <th mat-header-cell *matHeaderCellDef>TOOL NO.</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.mold.nameM}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"model\">\n      <th mat-header-cell *matHeaderCellDef>MODEL</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.mold.model.model}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"other\">\n      <th mat-header-cell *matHeaderCellDef>STATUS</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.other}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"remove\">\n      <th mat-header-cell *matHeaderCellDef style = \"width:20%\"></th>\n      <td mat-cell *matCellDef=\"let element\"> \n        <button mat-raised-button color=\"warn\"(click)=\"DeletePoint(element.id)\"  href=\"\"   >\n        DONE</button> </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"dataColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: dataColumns;\"></tr>\n  \n  </table>\n</mat-dialog-content>\n</div>\n</mat-sidenav-content>\n</mat-sidenav-container>\n\n\n\n"

/***/ }),

/***/ "./src/app/list-location/show-tables.component.ts":
/*!********************************************************!*\
  !*** ./src/app/list-location/show-tables.component.ts ***!
  \********************************************************/
/*! exports provided: ShowTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowTablesComponent", function() { return ShowTablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_server_all_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/server-all.service */ "./src/app/service/server-all.service.ts");
/* harmony import */ var _Service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Service/service.service */ "./src/app/Service/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ShowTablesComponent = /** @class */ (function () {
    function ShowTablesComponent(serviceService, controller, httpClient, router) {
        this.serviceService = serviceService;
        this.controller = controller;
        this.httpClient = httpClient;
        this.router = router;
        this.API = '//localhost:8080';
        this.dataColumns = ['table', 'dateStart', 'nameS', 'nameM', 'model', 'other', 'remove'];
    }
    //-------------------------------Delete-----------------------------------
    ShowTablesComponent.prototype.DeletePoint = function (id) {
        if (this.serviceService.push === false) {
            this.httpClient.delete(this.API + '/point' + '/' + id).subscribe(function (data) {
                console.log(' Delet is successful', data);
            }, function (error) {
                console.log('Error', error);
            });
        }
        else {
            this.serviceService.counter = this.serviceService.counter - 1;
            this.httpClient.delete(this.API + '/point' + '/' + id).subscribe(function (data) {
                console.log(' Delet is successful', data);
            }, function (error) {
                console.log('Error', error);
            });
        }
    };
    //------------------------------------------------------------------------
    ShowTablesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.controller.getPoint().subscribe(function (data) {
            _this.points = data;
            console.log(_this.points);
        });
    };
    ShowTablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-tables',
            template: __webpack_require__(/*! ./show-tables.component.html */ "./src/app/list-location/show-tables.component.html"),
            styles: [__webpack_require__(/*! ./show-tables.component.css */ "./src/app/list-location/show-tables.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _service_server_all_service__WEBPACK_IMPORTED_MODULE_2__["SearchAllService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ShowTablesComponent);
    return ShowTablesComponent;
}());



/***/ }),

/***/ "./src/app/list-mold/cancel-member.component.css":
/*!*******************************************************!*\
  !*** ./src/app/list-mold/cancel-member.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 75%;\r\n    border-collapse: collapse;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  \r\n  }\r\n  \r\n  .button-row button,\r\n  .button-row a {\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  th,tr.mat-footer-row {\r\n    font-weight: bold;\r\n    background: rgba(24, 3, 3, 0.651);\r\n    text-align: center;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  .Title{\r\n    color: saddlebrown;\r\n  }\r\n  \r\n  .button-row {\r\n    margin-bottom: 5%;\r\n  }\r\n  \r\n  .top{\r\n    color: aliceblue;\r\n    font-size: 250%;\r\n    /* background-color: rgb(250, 0, 0); */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1tb2xkL2NhbmNlbC1tZW1iZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7RUFFcEI7O0VBRUE7O0lBRUUsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxjQUFjO0VBQ2hCOztFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQ0FBc0M7RUFDeEMiLCJmaWxlIjoic3JjL2FwcC9saXN0LW1vbGQvY2FuY2VsLW1lbWJlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4gIC5idXR0b24tcm93IGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICB0aCx0ci5tYXQtZm9vdGVyLXJvdyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQsIDMsIDMsIDAuNjUxKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICAuVGl0bGV7XHJcbiAgICBjb2xvcjogc2FkZGxlYnJvd247XHJcbiAgfVxyXG4gIC5idXR0b24tcm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIH1cclxuICAudG9we1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMjUwJTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDAsIDApOyAqL1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/list-mold/cancel-member.component.html":
/*!********************************************************!*\
  !*** ./src/app/list-mold/cancel-member.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class =\"top\" color=\"primary\">\n  <mat-toolbar-row>\n      <div class=\"button\" color=\"accent\">\n          <button mat-button  routerLink=\"/home/admin\">\n            <img class=\"world\" height=\"25\" src=\"assets/img/brand/BoschLogoNoBackground.png\" >\n          </button>\n          <button mat-icon-button>\n            <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\n          </button>\n        </div>\n    <span class=\"example-spacer\"></span>\n      <div class=\"buttonLogIn\">\n          <button mat-button color=\"accent\" routerLink=\"/add-mold\" >\n              ADD MOLD\n          </button>\n      </div>\n    <a mat-button [routerLink]=\"['/home/admin']\"><i class=\"material-icons\"> home </i></a>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-sidenav-container>\n  <mat-sidenav #sidenav  mode=\"side\">\n    <mat-nav-list>\n\n      <a mat-list-item [routerLink]=\"'/add-location'\"> Location </a>\n      <a mat-list-item [routerLink]=\"'/add-responsible'\"> Responsible </a>\n      <a mat-list-item [routerLink]=\"'/layout'\"> layout </a>\n      <a mat-list-item (click)=\"sidenav.toggle()\" href=\"\" mat-list-item>Close</a>\n\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <div>\n        <div class = \"Title\">\n          <h1 style=\"text-align:center;\"> LIST MOLD </h1>\n        </div>\n<mat-dialog-content >\n  <table mat-table  [dataSource]=\"member\" class=\"mat-elevation-z8\"> \n\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef> MOLD_ID  </th>\n      <td mat-cell *matCellDef=\"let element\">  {{element.moldID}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"model\">\n      <th mat-header-cell *matHeaderCellDef>MODEL</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.model.model}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"nameM\">\n      <th mat-header-cell *matHeaderCellDef>TOOL NO.</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.nameM}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"pass\">\n      <th mat-header-cell *matHeaderCellDef>PART NAME</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.partName.namePa}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"CreditPay\">\n      <th mat-header-cell *matHeaderCellDef style = \"width:20%\"></th>\n      <td mat-cell *matCellDef=\"let element\"> <button mat-raised-button color=\"warn\" (click)=\"DeleteMold(element.moldID)\">\n        Remove</button> </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"dataColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: dataColumns;\"></tr>\n  \n\n  </table>\n</mat-dialog-content>\n</div>\n</mat-sidenav-content>\n</mat-sidenav-container>\n\n"

/***/ }),

/***/ "./src/app/list-mold/cancel-member.component.ts":
/*!******************************************************!*\
  !*** ./src/app/list-mold/cancel-member.component.ts ***!
  \******************************************************/
/*! exports provided: CancelMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelMemberComponent", function() { return CancelMemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Service_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Service/service.service */ "./src/app/Service/service.service.ts");




var CancelMemberComponent = /** @class */ (function () {
    function CancelMemberComponent(serviceService, http) {
        this.serviceService = serviceService;
        this.http = http;
        this.API = '//localhost:8080';
        this.member = {
            moldID: Number,
            nameM: Number,
            model: String,
            password: String,
        };
        this.dataColumns = ['id', 'nameM', 'model', 'pass', 'CreditPay'];
    }
    //-------------------------------Delete-----------------------------------
    CancelMemberComponent.prototype.DeleteMold = function (moldID) {
        if (this.serviceService.push === false) {
            this.http.delete(this.API + '/mold' + '/' + moldID).subscribe(function (data) {
                console.log(' Delet is successful', data);
            }, function (error) {
                console.log('Error', error);
            });
        }
        else {
            this.serviceService.counter = this.serviceService.counter - 1;
            this.http.delete(this.API + '/mold' + '/' + moldID).subscribe(function (data) {
                console.log(' Delet is successful', data);
            }, function (error) {
                console.log('Error', error);
            });
        }
    };
    //------------------------------------------------------------------------
    CancelMemberComponent.prototype.getmember = function () {
        return this.http.get(this.API + '/mold');
    };
    CancelMemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getmember().subscribe(function (data) {
            _this.member = data;
            console.log(_this.member);
        });
        this.serviceService.getMold().subscribe(function (data) {
            _this.serviceService.mold = data;
            console.log(_this.serviceService.mold);
        });
    };
    CancelMemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cancel-member',
            template: __webpack_require__(/*! ./cancel-member.component.html */ "./src/app/list-mold/cancel-member.component.html"),
            styles: [__webpack_require__(/*! ./cancel-member.component.css */ "./src/app/list-mold/cancel-member.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Service_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CancelMemberComponent);
    return CancelMemberComponent;
}());



/***/ }),

/***/ "./src/app/list-responsible/homestaff.component.css":
/*!**********************************************************!*\
  !*** ./src/app/list-responsible/homestaff.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 75%;\r\n  border-collapse: collapse;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n\r\n}\r\n\r\n.button-row button,\r\n.button-row a {\r\n  margin-right: 10px;\r\n}\r\n\r\nth,tr.mat-footer-row {\r\n  font-weight: bold;\r\n  background: rgba(24, 3, 3, 0.651);\r\n  text-align: center;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.Title{\r\n  color: saddlebrown;\r\n}\r\n\r\n.button-row {\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.top{\r\n  color: aliceblue;\r\n  font-size: 250%;\r\n  /* background-color: rgb(250, 0, 0); */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1yZXNwb25zaWJsZS9ob21lc3RhZmYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixzQ0FBc0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9saXN0LXJlc3BvbnNpYmxlL2hvbWVzdGFmZi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG59XHJcblxyXG4uYnV0dG9uLXJvdyBidXR0b24sXHJcbi5idXR0b24tcm93IGEge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxudGgsdHIubWF0LWZvb3Rlci1yb3cge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQsIDMsIDMsIDAuNjUxKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4uVGl0bGV7XHJcbiAgY29sb3I6IHNhZGRsZWJyb3duO1xyXG59XHJcbi5idXR0b24tcm93IHtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG4udG9we1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgZm9udC1zaXplOiAyNTAlO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDAsIDApOyAqL1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/list-responsible/homestaff.component.html":
/*!***********************************************************!*\
  !*** ./src/app/list-responsible/homestaff.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class =\"top\" color=\"primary\">\r\n        <mat-toolbar-row>\r\n            <div class=\"button\" color=\"accent\">\r\n                <button mat-button  routerLink=\"/home/admin\">\r\n                  <img class=\"world\" height=\"25\" src=\"assets/img/brand/BoschLogoNoBackground.png\" >\r\n                </button>\r\n                <button mat-icon-button>\r\n                  <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\r\n                </button>\r\n              </div>\r\n          <span class=\"example-spacer\"></span>\r\n            <div class=\"buttonLogIn\">\r\n                <button mat-button color=\"accent\" routerLink=\"/add-responsible\" >\r\n                    ADD RESPONSIBLE\r\n                </button>\r\n            </div>\r\n          <a mat-button [routerLink]=\"['/home/admin']\"><i class=\"material-icons\"> home </i></a>\r\n        </mat-toolbar-row>\r\n      </mat-toolbar>\r\n      <mat-sidenav-container>\r\n        <mat-sidenav #sidenav  mode=\"side\">\r\n          <mat-nav-list>\r\n      \r\n            <a mat-list-item [routerLink]=\"'/add-location'\"> Location </a>\r\n            <a mat-list-item [routerLink]=\"'/add-responsible'\"> Responsible </a>\r\n            <a mat-list-item [routerLink]=\"'/layout'\"> layout </a>\r\n            <a mat-list-item (click)=\"sidenav.toggle()\" href=\"\" mat-list-item>Close</a>\r\n      \r\n          </mat-nav-list>\r\n        </mat-sidenav>\r\n\r\n        <mat-sidenav-content>\r\n          <div>\r\n              <div class = \"Title\">\r\n                <h1 style=\"text-align:center;\"> LIST RESPONSIBLE </h1>\r\n              </div>\r\n              <mat-dialog-content >\r\n                <table mat-table  [dataSource]=\"responsible\" class=\"mat-elevation-z8\"> \r\n              \r\n                  <ng-container matColumnDef=\"id\">\r\n                    <th mat-header-cell *matHeaderCellDef> RES_ID  </th>\r\n                    <td mat-cell *matCellDef=\"let element\">  {{element.resID}} </td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"other\">\r\n                        <th mat-header-cell *matHeaderCellDef>DEPARTMANT</th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.other}} </td>\r\n                    </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"nameR\">\r\n                    <th mat-header-cell *matHeaderCellDef>NAME</th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.nameS}} </td>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"remove\">\r\n                        <th mat-header-cell *matHeaderCellDef style = \"width:20%\"></th>\r\n                        <td mat-cell *matCellDef=\"let element\"> <button mat-raised-button color=\"warn\" (click)=\"DeleteResponsible(element.resID)\">\r\n                          Remove</button> </td>\r\n                      </ng-container>\r\n              \r\n                  <tr mat-header-row *matHeaderRowDef=\"dataColumns\"></tr>\r\n                  <tr mat-row *matRowDef=\"let row; columns: dataColumns;\"></tr>\r\n                </table>\r\n              </mat-dialog-content>\r\n          </div>\r\n        </mat-sidenav-content>\r\n      </mat-sidenav-container>\r\n      \r\n      "

/***/ }),

/***/ "./src/app/list-responsible/homestaff.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/list-responsible/homestaff.component.ts ***!
  \*********************************************************/
/*! exports provided: HomestaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomestaffComponent", function() { return HomestaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service.service */ "./src/app/service/service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var HomestaffComponent = /** @class */ (function () {
    function HomestaffComponent(serviceService, http) {
        this.serviceService = serviceService;
        this.http = http;
        this.API = '//localhost:8080';
        this.responsible = {
            resID: Number,
            nameR: Number,
            other: String,
        };
        this.dataColumns = ['id', 'nameR', 'other', 'remove'];
    }
    //-------------------------------Delete-----------------------------------
    HomestaffComponent.prototype.DeleteResponsible = function (resID) {
        if (this.serviceService.push === false) {
            this.http.delete(this.API + '/responsible' + '/' + resID).subscribe(function (data) {
                console.log(' Delet is successful', data);
            }, function (error) {
                console.log('Error', error);
            });
        }
        else {
            this.serviceService.counter = this.serviceService.counter - 1;
            this.http.delete(this.API + '/responsible' + '/' + resID).subscribe(function (data) {
                console.log(' Delet is successful', data);
            }, function (error) {
                console.log('Error', error);
            });
        }
    };
    //------------------------------------------------------------------------
    HomestaffComponent.prototype.getresponsible = function () {
        return this.http.get(this.API + '/responsible');
    };
    HomestaffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getresponsible().subscribe(function (data) {
            _this.responsible = data;
            console.log(_this.responsible);
        });
        this.serviceService.getResponsible().subscribe(function (data) {
            _this.serviceService.responsible = data;
            console.log(_this.serviceService.responsible);
        });
    };
    HomestaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homestaff',
            template: __webpack_require__(/*! ./homestaff.component.html */ "./src/app/list-responsible/homestaff.component.html"),
            styles: [__webpack_require__(/*! ./homestaff.component.css */ "./src/app/list-responsible/homestaff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HomestaffComponent);
    return HomestaffComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card2{\r\n  right: 50%;\r\n  left: 35%;\r\n  width: 25%;\r\n\r\n}\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n.button-row button,\r\n.button-row a {\r\n  margin-right: 8px;\r\n}\r\n.mat-radio-button ~ .mat-radio-button {\r\n  padding-right: 16px;\r\n}\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n.word{\r\n   left: 25%;\r\n   right: 25%;\r\n   \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVTs7QUFFWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQUM7R0FDRSxTQUFTO0dBQ1QsVUFBVTs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZDJ7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICBsZWZ0OiAzNSU7XHJcbiAgd2lkdGg6IDI1JTtcclxuXHJcbn1cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uYnV0dG9uLXJvdyBhIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24gfiAubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59LndvcmR7XHJcbiAgIGxlZnQ6IDI1JTtcclxuICAgcmlnaHQ6IDI1JTtcclxuICAgXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class =\"top\" color=\"primary\">\r\n    <mat-toolbar-row>\r\n        <div class=\"button\" color=\"accent\">\r\n            <button mat-button  routerLink=\"/home\">\r\n              <img class=\"world\" height=\"25\" src=\"assets/img/brand/BoschLogoNoBackground.png\" >\r\n            </button>\r\n            \r\n          </div>\r\n      \r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n\r\n\r\n<br><br>\r\n<h2 style=\"text-align:center;\">TEF9 SHOP MAINTENANCE</h2>\r\n\r\n<div class=\"w3-display-middle\">\r\n\r\n  <h4 style=\"text-align:center;\">Please LogIn</h4>\r\n  <mat-card class=\"card2\" >\r\n    <mat-card-content style=\"text-align:center\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Username\" type=\"text\" id=\"username\" [(ngModel)]=\"staff.username\">\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" type=\"password\" id=\"password\" [(ngModel)]=\"staff.password\">\r\n      </mat-form-field>\r\n    </mat-card-content>\r\n\r\n    <mat-card-actions style=\"text-align:center\">\r\n      <button mat-raised-button (click)=\"login()\" color=\"primary\" type=\"submit\">Login</button>\r\n    </mat-card-actions>\r\n\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.staff = {
            username: '',
            password: ''
        };
        this.check = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.staff.username === '' || this.staff.password === '') {
            alert('Please complete all information.');
        }
        else {
            this.httpClient.get('http://localhost:8080/staff/' + this.staff.username + '/' + this.staff.password, this.staff)
                .subscribe(function (data) {
                _this.check = data;
                console.log('PUT Request is successful', data);
                if (_this.check === true) {
                    alert('login sucessful');
                    _this.router.navigate(['home/admin', {}]);
                }
                else {
                    alert('Cannot login. Please check your user name and password');
                }
            }, function (error) {
                console.log('Error', error);
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/service/manu.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/manu.service.ts ***!
  \*****************************************/
/*! exports provided: ManuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManuService", function() { return ManuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ManuService = /** @class */ (function () {
    function ManuService(http) {
        this.http = http;
        this.API = '//localhost:8080';
    }
    ManuService.prototype.getCoffeeType = function () {
        return this.http.get(this.API + '/coffeetype');
    };
    ManuService.prototype.getBakerType = function () {
        return this.http.get(this.API + '/bakerytype');
    };
    ManuService.prototype.getManuType = function () {
        return this.http.get(this.API + '/manutype');
    };
    ManuService.prototype.getManu = function () {
        return this.http.get(this.API + '/manu');
    };
    ManuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ManuService);
    return ManuService;
}());



/***/ }),

/***/ "./src/app/service/member.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/member.service.ts ***!
  \*******************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MemberService = /** @class */ (function () {
    function MemberService(http) {
        this.http = http;
        this.API = '//localhost:8080';
    }
    MemberService.prototype.getProduct = function () {
        return this.http.get(this.API + '/product');
    };
    MemberService.prototype.getModel = function () {
        return this.http.get(this.API + '/model');
    };
    MemberService.prototype.getPartName = function () {
        return this.http.get(this.API + '/partName');
    };
    MemberService.prototype.getResponsible = function () {
        return this.http.get(this.API + '/responsible');
    };
    MemberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MemberService);
    return MemberService;
}());



/***/ }),

/***/ "./src/app/service/server-all.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/server-all.service.ts ***!
  \***********************************************/
/*! exports provided: SearchAllService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAllService", function() { return SearchAllService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SearchAllService = /** @class */ (function () {
    function SearchAllService(httpClient) {
        this.httpClient = httpClient;
        this.API = '//localhost:8080';
        this.counter = 0;
        this.push = false;
        this.numberMember = 0;
        this.points = '';
    }
    //addPoint
    SearchAllService.prototype.getAddpoint = function () {
        return this.httpClient.get(this.API + '/addpoint');
    };
    //mold
    SearchAllService.prototype.getMold = function () {
        return this.httpClient.get(this.API + '/mold');
    };
    //point
    SearchAllService.prototype.getPoint = function () {
        return this.httpClient.get(this.API + '/point');
    };
    //staffxy
    SearchAllService.prototype.getStaffxy = function () {
        return this.httpClient.get(this.API + '/staff');
    };
    SearchAllService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchAllService);
    return SearchAllService;
}());



/***/ }),

/***/ "./src/app/service/service.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/service.service.ts ***!
  \********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
        this.API = '//localhost:8080';
        this.counter = 0;
        this.push = false;
        this.numberMember = 0;
        this.mold = {
            moldID: '',
            nameM: String,
            model: '',
            partNo: '',
            address: '',
            partName: '',
        };
        this.responsible = {
            resID: '',
            nameS: String,
            other: ''
        };
        this.point = {
            id: '',
            nameM: String,
            model: '',
            partNo: '',
            address: '',
            partName: '',
        };
    }
    ServiceService.prototype.getMold = function () {
        return this.http.get(this.API + '/mold');
    };
    ServiceService.prototype.getPoint = function () {
        return this.http.get(this.API + '/point');
    };
    ServiceService.prototype.getResponsible = function () {
        return this.http.get(this.API + '/responsible');
    };
    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/show/show.component.css":
/*!*****************************************!*\
  !*** ./src/app/show/show.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button button,\r\n.button a {\r\n  margin-left: auto;\r\n}\r\n.buttonLogIn button,\r\n.buttonLogIn a {\r\n  margin-right: auto;\r\n  size: auto;\r\n}\r\nmat-toolbar{\r\n  position: fixed;\r\n  z-index: 2;\r\n}\r\n.grid-tile{\r\n  margin-left: 8%;\r\n  \r\n}\r\n.example-fill-remaining-space {\r\n  flex: 1 1 auto;\r\n\r\n}\r\n.example-card  {\r\n  max-width: 250px;\r\n  max-height: 500px;\r\n  margin-top: 5px;\r\n}\r\n.example-header-image {\r\n  background-image: url('https://thecoffeeclub.co.th/wp-content/uploads/2017/03/Coffeeclub_logo-uai-258x258.jpg');\r\n  background-size: cover;\r\n}\r\n.buttonBuy button,\r\n.buttonBuy a{\r\n  right: -50%;\r\n   background-color: #ba7d60;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy9zaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZUFBZTs7QUFFakI7QUFDQTtFQUNFLGNBQWM7O0FBRWhCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLCtHQUErRztFQUMvRyxzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxXQUFXO0dBQ1YseUJBQXlCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvc2hvdy9zaG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIGJ1dHRvbixcclxuLmJ1dHRvbiBhIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uYnV0dG9uTG9nSW4gYnV0dG9uLFxyXG4uYnV0dG9uTG9nSW4gYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHNpemU6IGF1dG87XHJcbn1cclxubWF0LXRvb2xiYXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmdyaWQtdGlsZXtcclxuICBtYXJnaW4tbGVmdDogOCU7XHJcbiAgXHJcbn1cclxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG5cclxufVxyXG4uZXhhbXBsZS1jYXJkICB7XHJcbiAgbWF4LXdpZHRoOiAyNTBweDtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdGhlY29mZmVlY2x1Yi5jby50aC93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wMy9Db2ZmZWVjbHViX2xvZ28tdWFpLTI1OHgyNTguanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uYnV0dG9uQnV5IGJ1dHRvbixcclxuLmJ1dHRvbkJ1eSBhe1xyXG4gIHJpZ2h0OiAtNTAlO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmE3ZDYwO1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/show/show.component.html":
/*!******************************************!*\
  !*** ./src/app/show/show.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<html>\r\n  <body class=\"inventory-body\">\r\n        <mat-toolbar color=\"primary\">\r\n       <br>\r\n          <div class=\"button\" >\r\n            <button mat-button color=\"accent\" (click)=\"insert()\" routerLink=\"/homestaff\">\r\n            <h2>TEF9 SHOP MAINTENANCE</h2></button>\r\n          </div> <p></p>\r\n            <span class=\"example-fill-remaining-space\"></span>\r\n          <div class=\"buttonLogIn\">\r\n            <button mat-button color=\"accent\" (click)=\"insert()\" routerLink=\"/history\" >\r\n                HISTORY DATA\r\n            </button>\r\n          </div>\r\n        </mat-toolbar>\r\n\r\n        <br><br><br>\r\n\r\n          <div class=\"grid-tile\">\r\n            <div fxLayout=\"row wrap\" fxLayout.xs=\"column\"   fxLayoutWrap fxLayoutGap =\"24px\" fxLayoutGap.xs=\"0\"\r\n                 fxLayoutAlign=\"flex-start\" fxLayoutAlign.xs=\"center\">\r\n\r\n                 <mat-card class=\"example-card\" >\r\n                  <mat-card-header> \r\n                    <mat-card-title>Table : {{points[i+0].addpoint.addPoint}}</mat-card-title>\r\n                  </mat-card-header>\r\n                  <img mat-card-image width=\"100\" height=\"190\" (click)=\"insert()\" routerLink=\"/add-data\" img class=\"world\" src=\"assets/img/p3.jpg.png\" >\r\n                        <p>Responsible : {{points[i+0].responsible.nameS}}</p> \r\n                        <p>Tools No. : {{points[i+0].mold.nameM}}</p> \r\n                        <p>Status  : {{points[i+0].other}}</p>\r\n                        <p>Date Start : {{points[i+0].date}}</p> \r\n                 \r\n                </mat-card>\r\n                <br>\r\n\r\n                <mat-card class=\"example-card\">\r\n                  <mat-card-header>\r\n                    <mat-card-title>Table : {{points[i+1].addpoint.addPoint}}</mat-card-title> \r\n                  </mat-card-header>\r\n                  <img mat-card-image width=\"100\" height=\"190\" (click)=\"insert()\" routerLink=\"/add-data\" img class=\"world\" src=\"assets/img/p3.jpg.png\" >\r\n                        <p>Responsible : {{points[i+1].staff.staffName}}</p>\r\n                        <p>Tools No. : {{points[i+1].mold.nameM}}</p>\r\n                        <p>Status  : {{points[i+1].other}}</p>\r\n                        <p>Date Start : {{points[i+1].date}}</p> \r\n                </mat-card>\r\n                <br>\r\n\r\n              <mat-card class=\"example-card\">\r\n                <mat-card-header>\r\n                  <mat-card-title>Table : {{points[i+2].addpoint.addPoint}}</mat-card-title>\r\n                </mat-card-header>\r\n                <img mat-card-image width=\"100\" height=\"190\" (click)=\"insert()\" routerLink=\"/add-data\" img class=\"world\" src=\"assets/img/p3.jpg.png\" >\r\n                      <p>Responsible : {{points[i+2].staff.staffName}}</p>\r\n                      <p>Tools No. : {{points[i+2].mold.nameM}}</p>\r\n                      <p>Status  : {{points[i+2].other}}</p>\r\n                      <p>Date Start : {{points[i+2].date}}</p> \r\n              </mat-card>\r\n              <br>\r\n\r\n              <mat-card class=\"example-card\">\r\n                <mat-card-header>\r\n                  <mat-card-title>Table : {{points[i+3].addpoint.addPoint}}</mat-card-title>\r\n                </mat-card-header>\r\n                <img mat-card-image width=\"100\" height=\"190\" (click)=\"insert()\" routerLink=\"/add-data\" img class=\"world\" src=\"assets/img/p3.jpg.png\" >\r\n                      <p>Responsible : {{points[i+3].staff.staffName}}</p>\r\n                      <p>Tools No. : {{points[i+3].mold.nameM}}</p>\r\n                      <p>Status  : {{points[i+3].other}}</p>\r\n                      <p>Date Start : {{points[i+3].date}}</p>\r\n              </mat-card>\r\n              <br>\r\n\r\n              <mat-card class=\"example-card\">\r\n                <mat-card-header>\r\n                  <mat-card-title>Table : {{points[i+4].addpoint.addPoint}}</mat-card-title> \r\n                </mat-card-header>\r\n                <img mat-card-image width=\"100\" height=\"190\" (click)=\"insert()\" routerLink=\"/add-data\" img class=\"world\" src=\"assets/img/p3.jpg.png\" >\r\n                      <p>Responsible : {{points[i+4].staff.staffName}}</p>\r\n                      <p>Tools No. : {{points[i+4].mold.nameM}}</p>\r\n                      <p>Status  : {{points[i+4].other}}</p>\r\n                      <p>Date Start : {{points[i+4].date}}</p> \r\n              </mat-card>\r\n            </div>\r\n          </div> <!-- end -->\r\n        <br> \r\n              <br> \r\n              <br> \r\n              <br> \r\n              <br> \r\n              <br> \r\n              <br> \r\n              <br>\r\n              <br> \r\n              <br> \r\n <!--  -----------------------------------------------------------------------------------*/ -->\r\n <div class=\"grid-tile\">\r\n  <div fxLayout=\"row wrap\" fxLayout.xs=\"column\"   fxLayoutWrap fxLayoutGap =\"24px\" fxLayoutGap.xs=\"0\"\r\n       fxLayoutAlign=\"flex-start\" fxLayoutAlign.xs=\"center\">\r\n\r\n       <mat-card class=\"example-card\" width=\"300\" height=\"290\" >\r\n        <mat-card-header>\r\n          <mat-card-title>Table : {{points[i+5].addpoint.addPoint}}</mat-card-title>\r\n          \r\n        </mat-card-header>\r\n        <img mat-card-image width=\"300\" height=\"290\" (click)=\"insert()\" routerLink=\"/add-data\" img class=\"world\" src=\"assets/img/p3.jpg.png\" >\r\n              <p>Responsible : {{points[i+5].staff.staffName}}</p>\r\n              <p>Tools No. : {{points[i+5].mold.nameM}}</p>\r\n              <p>Status  : {{points[i+5].other}}</p>\r\n              <p>Date Start : {{points[i+5].date}}</p> \r\n      </mat-card>\r\n      <br>\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <mat-card-title>Table : {{points[i+6].addpoint.addPoint}}</mat-card-title>\r\n          \r\n        </mat-card-header>\r\n        <img mat-card-image width=\"300\" height=\"290\" (click)=\"insert()\" routerLink=\"/add-data\" img class=\"world\" src=\"assets/img/p3.jpg.png\" >\r\n              <p>Responsible : {{points[i+6].staff.staffName}}</p>\r\n              <p>Tools No. : {{points[i+6].mold.nameM}}</p>\r\n              <p>Status  : {{points[i+6].other}}</p>\r\n              <p>Date Start : {{points[i+6].date}}</p> \r\n      </mat-card>\r\n      <br>\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>Table : {{points[i+7].addpoint.addPoint}}</mat-card-title>\r\n        \r\n      </mat-card-header>\r\n      <img mat-card-image width=\"300\" height=\"290\" (click)=\"insert()\" routerLink=\"/add-data\" img class=\"world\" src=\"assets/img/p3.jpg.png\" >\r\n            <p>Responsible : {{points[i+7].staff.staffName}}</p>\r\n            <p>Tools No. : {{points[i+7].mold.nameM}}</p>\r\n            <p>Status  : {{points[i+7].other}}</p>\r\n            <p>Date Start : {{points[i+7].date}}</p> <mat-card-actions>\r\n          \r\n      </mat-card-actions>\r\n    </mat-card>\r\n    <br>\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>Table : {{points[i+8].addpoint.addPoint}}</mat-card-title>\r\n        \r\n      </mat-card-header>\r\n      <img mat-card-image width=\"300\" height=\"290\" (click)=\"insert()\" routerLink=\"/add-data\" img class=\"world\" src=\"assets/img/p3.jpg.png\" >\r\n            <p>Responsible : {{points[i+8].staff.staffName}}</p>\r\n            <p>Tools No. : {{points[i+8].mold.nameM}}</p>\r\n            <p>Status  : {{points[i+8].other}}</p>\r\n            <p>Date Start : {{points[i+8].date}}</p> <mat-card-actions>\r\n          \r\n      </mat-card-actions>\r\n    </mat-card>\r\n    <br>\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <mat-card-title>Table : {{points[i+9].addpoint.addPoint}}</mat-card-title>\r\n        \r\n      </mat-card-header>\r\n      <img mat-card-image width=\"300\" height=\"290\" (click)=\"insert()\" routerLink=\"/add-data\" img class=\"world\" src=\"assets/img/p3.jpg.png\" >\r\n            <p>Responsible : {{points[i+9].staff.staffName}}</p>\r\n            <p>Tools No. : {{points[i+9].mold.nameM}}</p>\r\n            <p>Status  : {{points[i+9].other}}</p>\r\n            <p>Date Start : {{points[i+9].date}}</p> <mat-card-actions>\r\n          \r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</div> <!-- end -->\r\n        <br>\r\n  </body>\r\n\r\n\r\n</html>\r\n\r\n"

/***/ }),

/***/ "./src/app/show/show.component.ts":
/*!****************************************!*\
  !*** ./src/app/show/show.component.ts ***!
  \****************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_server_all_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/server-all.service */ "./src/app/service/server-all.service.ts");




var ShowComponent = /** @class */ (function () {
    function ShowComponent(httpClient, controller) {
        this.httpClient = httpClient;
        this.controller = controller;
        this.points = {
            moldID: Number,
            nameM: Number,
            model: String,
            nameS: String,
        };
        this.i = 0;
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.controller.getPoint().subscribe(function (data) {
            _this.points = data;
            console.log(_this.points);
        });
    };
    ShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show',
            template: __webpack_require__(/*! ./show.component.html */ "./src/app/show/show.component.html"),
            styles: [__webpack_require__(/*! ./show.component.css */ "./src/app/show/show.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_server_all_service__WEBPACK_IMPORTED_MODULE_3__["SearchAllService"]])
    ], ShowComponent);
    return ShowComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SSO81HMJ\Desktop\Project\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map