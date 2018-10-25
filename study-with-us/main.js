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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _materials_display_material_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./materials/display-material.component */ "./src/app/materials/display-material.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                    { path: ':id', component: _materials_display_material_component__WEBPACK_IMPORTED_MODULE_2__["DisplayMaterialComponent"] },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n  position: relative;\r\n  z-index: 100;\r\n}\r\n.header h1{\r\n  text-align: center;\r\n}\r\n.header span{\r\n  color: red;\r\n}\r\nmain{\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  z-index: 90;\r\n\r\n}\r\n.container{\r\n  font-size: 0;\r\n\r\n  margin: 0 auto;\r\n}\r\n.container *{\r\n  font-size: 1rem;\r\n}\r\n.side-menu, .content{\r\n  display: inline-block;\r\n  vertical-align: top;\r\n // border: 1px solid black;\r\n}\r\n.side-menu{\r\n \r\n  width: 160px;\r\n  background: #e3e3e3;\r\n  height: 300px\r\n}\r\n.content{\r\n  padding: 20px 10px;\r\n  width: auto\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <h1>\r\n    Lets Start <span>{{ title }}</span>!\r\n  </h1>\r\n  <swu-menu></swu-menu>\r\n</div>\r\n\r\n<main>\r\n  <div class=\"container\">\r\n    <div class=\"side-menu\">\r\n      <!--<swu-side-menu></swu-side-menu>-->\r\n    </div>\r\n    <div class=\"content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n\r\n\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Study With Us';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'swu-root',
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _categories_categories_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories/categories-list.component */ "./src/app/categories/categories-list.component.ts");
/* harmony import */ var _materials_display_material_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./materials/display-material.component */ "./src/app/materials/display-material.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/breadcrumbs.component */ "./src/app/shared/breadcrumbs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _categories_categories_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesListComponent"],
                _materials_display_material_component__WEBPACK_IMPORTED_MODULE_5__["DisplayMaterialComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _shared_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__["BreadCrumbsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categories/categories-list.component.css":
/*!**********************************************************!*\
  !*** ./src/app/categories/categories-list.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".categories-list, .categories-list ul{\r\n  font-size: 14px;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n  .categories-list{\r\n    text-align: center;\r\n\r\n  }\r\n\r\n  .sub-categories-list{\r\n  position: absolute;\r\n  width: 100%;\r\n \r\n}\r\n\r\n  .categories-list a {\r\n  text-decoration: none;\r\n  display: block;\r\n  padding: 10px 15px;\r\n}\r\n\r\n  .categories-list > li {\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    position: relative;\r\n    width: 100px;\r\n    text-align: center;\r\n  }\r\n\r\n  .categories-list > li:hover> a{\r\n      background: #5ca479;\r\n    }\r\n\r\n  .categories-list > li:hover > a {\r\n      color: white\r\n    }\r\n\r\n  .sub-categories-list > li:hover > a{\r\n    background: #e4e4e4;\r\n  }\r\n\r\n  .categories-list {\r\n  //border-top: 1px solid grey;\r\n  //border-bottom: 1px solid grey;\r\n  background: #8ac99c;\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);\r\n}\r\n\r\n  a.active{\r\n  color: red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/categories/categories-list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/categories/categories-list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\r\n  <ul class=\"categories-list\">\r\n    <li *ngFor =\"let category of mainCategoriesList\"\r\n         (click)=\"sendActiveId(category.id)\">\r\n         <a [routerLink]=\"[category.id]\" routerLinkActive=\"active\"> {{category.name}}</a>\r\n\r\n      <ul *ngIf=\"activeId == category.id\" class=\"sub-categories-list\">\r\n        <li *ngFor =\"let subcategory of childCategories(activeId)\">          \r\n          <a [routerLink]=\"[subcategory.id]\" routerLinkActive=\"active\">{{subcategory.name}} </a>\r\n        </li>\r\n      </ul>\r\n\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/categories/categories-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-list.component.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesListComponent", function() { return CategoriesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.service */ "./src/app/categories/categories.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesListComponent = /** @class */ (function () {
    function CategoriesListComponent(categoriesService) {
        this.categoriesService = categoriesService;
        this.clicked = false;
    }
    CategoriesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService.getCategories().subscribe(function (value) {
            _this.categoriesList = value;
            _this.mainCategoriesList = value.filter(function (temp) {
                return temp.parentId === 0 || temp.parentId == undefined;
            });
        });
    };
    CategoriesListComponent.prototype.sendActiveId = function (id) {
        if (this.activeId != id) {
            this.activeId = id;
        }
        else
            this.activeId = undefined;
    };
    CategoriesListComponent.prototype.childCategories = function (id) {
        return this.categoriesList.filter(function (temp) {
            return temp.parentId == id;
        });
    };
    CategoriesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'swu-menu',
            template: __webpack_require__(/*! ./categories-list.component.html */ "./src/app/categories/categories-list.component.html"),
            styles: [__webpack_require__(/*! ./categories-list.component.css */ "./src/app/categories/categories-list.component.css")]
        }),
        __metadata("design:paramtypes", [_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]])
    ], CategoriesListComponent);
    return CategoriesListComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.service.ts":
/*!**************************************************!*\
  !*** ./src/app/categories/categories.service.ts ***!
  \**************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesService = /** @class */ (function () {
    function CategoriesService(http) {
        this.http = http;
        this.categoriesUrl = 'api/categories/categories.json';
    }
    CategoriesService.prototype.getCategories = function () {
        return this.http.get(this.categoriesUrl);
    };
    CategoriesService.prototype.getCategoryById = function (id) {
        return this.getCategories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (categories) {
            return categories.find(function (temp) {
                return temp.id == id;
            });
        }));
    };
    CategoriesService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = "An error occured:  " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message + " ";
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoriesService);
    return CategoriesService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n<p>HOME</p>\n"
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/materials/display-material.component.css":
/*!**********************************************************!*\
  !*** ./src/app/materials/display-material.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/materials/display-material.component.html":
/*!***********************************************************!*\
  !*** ./src/app/materials/display-material.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<swu-breadcrumbs [id]=\"id\"> </swu-breadcrumbs>\r\n<p *ngIf=\"material\">\r\n  {{material.description}}\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/materials/display-material.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/materials/display-material.component.ts ***!
  \*********************************************************/
/*! exports provided: DisplayMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayMaterialComponent", function() { return DisplayMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.service */ "./src/app/materials/material.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayMaterialComponent = /** @class */ (function () {
    function DisplayMaterialComponent(router, materialService) {
        var _this = this;
        this.router = router;
        this.materialService = materialService;
        this.subscription = this.router.params.subscribe(function (params) { return _this.id = params['id']; });
    }
    Object.defineProperty(DisplayMaterialComponent.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
            this.getMaterialForCategoryId();
        },
        enumerable: true,
        configurable: true
    });
    DisplayMaterialComponent.prototype.getMaterialForCategoryId = function () {
        var _this = this;
        this.materialService.getMaterials().subscribe(function (materials) {
            _this.material = materials.find(function (temp) {
                return Number(temp.categoryId) == _this.id;
            });
        });
    };
    DisplayMaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./display-material.component.html */ "./src/app/materials/display-material.component.html"),
            styles: [__webpack_require__(/*! ./display-material.component.css */ "./src/app/materials/display-material.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _material_service__WEBPACK_IMPORTED_MODULE_2__["MaterialService"]])
    ], DisplayMaterialComponent);
    return DisplayMaterialComponent;
}());



/***/ }),

/***/ "./src/app/materials/material.service.ts":
/*!***********************************************!*\
  !*** ./src/app/materials/material.service.ts ***!
  \***********************************************/
/*! exports provided: MaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialService", function() { return MaterialService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialService = /** @class */ (function () {
    function MaterialService(http) {
        this.http = http;
        this.materialsUrl = 'api/materials/material.json';
    }
    MaterialService.prototype.getMaterials = function () {
        return this.http.get(this.materialsUrl);
    };
    MaterialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], MaterialService);
    return MaterialService;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumbs.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/breadcrumbs.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumbs{\r\n  background: #fff;\r\n /*padding: 1px;*/ \r\n}\r\n\r\nul{\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.breadcrumbs li{\r\n  display: inline-block;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.breadcrumbs a{\r\n  color: darkred;\r\n  text-decoration: none;\r\n}\r\n\r\nul li + li:before {\r\n  padding: 8px;\r\n  color: black;\r\n  content: \"/\";\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/breadcrumbs.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/breadcrumbs.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\r\n  <ul>\r\n    <li> <a routerLink='/home'> Home </a> </li>\r\n    <li  *ngFor=\"let crumb of crumbs\">\r\n      <a [routerLink]='[\"/\",crumb.id]' >{{crumb.name}}</a>\r\n    </li>\r\n    <li *ngIf=\"activeCrumb\">  {{activeCrumb.name}}  </li>\r\n  </ul>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/breadcrumbs.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/breadcrumbs.component.ts ***!
  \*************************************************/
/*! exports provided: BreadCrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumbsComponent", function() { return BreadCrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../categories/categories.service */ "./src/app/categories/categories.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadCrumbsComponent = /** @class */ (function () {
    function BreadCrumbsComponent(categoryService) {
        this.categoryService = categoryService;
        this.crumbs = [];
    }
    BreadCrumbsComponent.prototype.ngOnChanges = function () {
        if (this.allCategories) {
            this.pushCrumbs();
        }
    };
    BreadCrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (value) {
            _this.allCategories = value;
            _this.pushCrumbs();
        });
    };
    BreadCrumbsComponent.prototype.getCategorybyId = function (id) {
        return this.allCategories.find(function (temp) {
            return temp.id == id;
        });
    };
    BreadCrumbsComponent.prototype.pushCrumbs = function () {
        var id = this.id;
        var crumb;
        this.crumbs = [];
        this.activeCrumb = this.getCategorybyId(this.id);
        crumb = this.getCategorybyId(id);
        while (crumb.parentId != 0 && crumb.parentId != undefined) {
            id = crumb.parentId;
            crumb = this.getCategorybyId(id);
            this.crumbs.unshift(crumb);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BreadCrumbsComponent.prototype, "id", void 0);
    BreadCrumbsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'swu-breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumbs.component.html */ "./src/app/shared/breadcrumbs.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumbs.component.css */ "./src/app/shared/breadcrumbs.component.css")]
        }),
        __metadata("design:paramtypes", [_categories_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]])
    ], BreadCrumbsComponent);
    return BreadCrumbsComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\NEW\Angular\study-with-us\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map