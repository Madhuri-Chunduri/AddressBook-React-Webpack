(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/App.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/App.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\r\n    text-align: center;\r\n  }\r\n  \r\n  .App-logo {\r\n    height: 40vmin;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: no-preference) {\r\n    .App-logo {\r\n      animation: App-logo-spin infinite 20s linear;\r\n    }\r\n  }\r\n  \r\n  /* input{\r\n    height : 35px;\r\n    border : white;\r\n    margin-right: 5%;\r\n    outline : none;\r\n  } */\r\n  \r\n  .App-header {\r\n    background-color: #282c34;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: calc(10px + 2vmin);\r\n    color: white;\r\n  }\r\n  \r\n  .App-link {\r\n    color: #61dafb;\r\n  }\r\n  \r\n  @keyframes App-logo-spin {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  .pageContent\r\n  {\r\n      font-family: 'Century Gothic';\r\n      margin: 0px;\r\n  }\r\n  \r\n  body\r\n  {\r\n      margin: 0px;\r\n  }\r\n  \r\n  .mainHeading\r\n  {\r\n      background-color: rgb(51,153,204);\r\n      font-size: 50px ;\r\n      color:white;\r\n      padding: 30px 0px 30px 20px;\r\n  }\r\n  \r\n  .horizontalNavigationBar ul{\r\n      margin-top: 0px;\r\n      background-color: black;\r\n      height: 35px;\r\n      color: white;\r\n      list-style: none;\r\n      font-size: 18px;\r\n      padding : 0px;\r\n  }\r\n  \r\n  .horizontalNavigationBar li{\r\n      float : left;\r\n      font-weight: 600;\r\n      text-transform: uppercase;\r\n      font-family: 'Calibri';\r\n      padding : 7px 0px 10px 25px;\r\n  }\r\n  \r\n  .horizontalNavigationBar li:last-child{\r\n      float: right;\r\n      padding-right: 30px;\r\n  }\r\n  \r\n .horizontalNavigationBar a{\r\n      text-decoration: none;\r\n      color: white;\r\n      cursor: pointer;\r\n  }\r\n  \r\n  a{\r\n      text-decoration: none;\r\n      cursor: pointer;\r\n      color : black;\r\n  }\r\n\r\n  .displaySelectedContact a{\r\n      display : flex;\r\n  }\r\n  .contacts{\r\n  overflow: auto;\r\n  }\r\n  .contactList\r\n  {\r\n      margin-left : 25px;\r\n      float: left;\r\n      font-family: \"Calibri\";\r\n  }\r\n  \r\n  .contactList ul{\r\n      list-style: none;\r\n      padding-left: 0;\r\n  }\r\n  \r\n  .contactList li{\r\n      border: 1px solid lightgray;\r\n      padding-left: 12px;\r\n      padding-right: 150px;\r\n      cursor: pointer;\r\n      list-style: none;\r\n      color: black;\r\n  }\r\n  \r\n  .contactList li:hover, .highLight {\r\n      background-color: #CEE7F2;\r\n  } \r\n  \r\n  p{\r\n      margin-top: 5px;\r\n      margin-bottom: 5px;\r\n  }\r\n  \r\n  pre{\r\n      margin-top: 5px;\r\n      margin-bottom: 5px;\r\n      font-size: 16px;\r\n      font-weight: lighter;\r\n      font-family: \"Nanum Gothic\";\r\n  }\r\n  .contactHeading p{\r\n      margin-top : 0px;\r\n  }\r\n  .name{\r\n      font-size: 30px;\r\n      font-style: lighter;\r\n  }\r\n  \r\n  .contactHeading{\r\n      font-weight: 600;\r\n      font-size: 18px;\r\n  }\r\n  \r\n  .details{\r\n      padding : 0px 50px;\r\n      margin-left: 500px;\r\n      font-size: 20px;\r\n  }\r\n  \r\n  .details a{\r\n      padding : 0 20px;\r\n  }\r\n  \r\n  h2{\r\n      font-size: 40px;\r\n      margin-bottom: 20px;\r\n  }\r\n  \r\n  .detailsForm{\r\n      padding:30px;\r\n      border: 1px solid white;\r\n      margin-left: 30%;\r\n      margin-top: 30px;\r\n      margin-right: 500px;\r\n      padding-bottom: 70px;\r\n      box-shadow: 5px 5px 20px 0px #000000;\r\n  }\r\n  \r\n  .detailsForm input{\r\n      width: 85%;\r\n      padding: 12px;\r\n      margin: 8px 0;\r\n      display: inline-block;\r\n      border: 1px solid black;\r\n      box-sizing: border-box;\r\n  }\r\n  \r\n  .detailsForm label{\r\n      width: 250px;\r\n  }\r\n  \r\n  .detailsForm textarea{\r\n      width: 85%;\r\n      height: 80px;\r\n      resize: none;\r\n      border-color: black;\r\n  }\r\n  \r\n  .detailsForm table{\r\n      width:93%;\r\n  }\r\n  \r\n  .submitDetailsButton{\r\n      padding: 10px;\r\n      background-color: #468C00;\r\n      color:white;\r\n      float: right;\r\n      border: none;\r\n      margin-right: 5px;\r\n      width : 20% !important;\r\n  }\r\n  \r\n  .box{\r\n      display: inline-block;\r\n      width: 45%;\r\n      padding-right: 1%;\r\n  }\r\n  \r\n  #contactInformation\r\n  {\r\n      margin-left: 30%;\r\n      margin-top: 3%;\r\n      font-family: \"Nanum Gothic\";\r\n  }\r\n  \r\n  .displaySelectedContact\r\n  {\r\n      display : flex;\r\n      padding-bottom: 10px;\r\n  }\r\n  \r\n  .displaySelectedContact p{\r\n      font-size: 20px;\r\n      font-weight: bolder;\r\n      padding-right : 20%;\r\n  }\r\n  \r\n  .displaySelectedContact button\r\n  {\r\n      border : 0px;\r\n      background-color: white;\r\n      height: 20px;\r\n      margin-top : 10px;\r\n      text-transform: uppercase;\r\n      font-family: \"Nanum Gothic\";\r\n      outline: none;\r\n  }\r\n  \r\n  .displaySelectedContact img{\r\n      height : 15px;\r\n      padding-top : 10px;\r\n  }\r\n  \r\n  .hideContent\r\n  {\r\n      display:none;\r\n  }\r\n  \r\n  .address pre{\r\n      margin-top : 0px;\r\n  }\r\n  .displayEmail\r\n  {\r\n      padding-bottom: 10px;\r\n  }\r\n  \r\n  .mobile\r\n  {\r\n      padding-bottom : 0px;\r\n  }\r\n  \r\n  .website,.address\r\n  {\r\n      padding-top: 10px;\r\n  }\r\n  \r\n  .error\r\n  {\r\n      color : red;\r\n  }\r\n  \r\n  .address{\r\n      display : flex;\r\n  }\r\n  \r\n  ", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/css/App.css":
/*!*************************!*\
  !*** ./src/css/App.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};


if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/App.css");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

module.exports = exported;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9BcHAuY3NzP2U4NDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxTQUFTLDJCQUEyQixPQUFPLHVCQUF1Qix1QkFBdUIsNkJBQTZCLE9BQU8sNERBQTRELG1CQUFtQix1REFBdUQsU0FBUyxPQUFPLHFCQUFxQixzQkFBc0IsdUJBQXVCLHlCQUF5Qix1QkFBdUIsT0FBTyw0QkFBNEIsa0NBQWtDLDBCQUEwQixzQkFBc0IsK0JBQStCLDRCQUE0QixnQ0FBZ0Msc0NBQXNDLHFCQUFxQixPQUFPLHVCQUF1Qix1QkFBdUIsT0FBTyxzQ0FBc0MsY0FBYyxrQ0FBa0MsU0FBUyxZQUFZLG9DQUFvQyxTQUFTLE9BQU8sK0JBQStCLHdDQUF3QyxzQkFBc0IsT0FBTyx1QkFBdUIsc0JBQXNCLE9BQU8sK0JBQStCLDRDQUE0QywyQkFBMkIsc0JBQXNCLHNDQUFzQyxPQUFPLHdDQUF3QywwQkFBMEIsa0NBQWtDLHVCQUF1Qix1QkFBdUIsMkJBQTJCLDBCQUEwQix3QkFBd0IsT0FBTyx3Q0FBd0MsdUJBQXVCLDJCQUEyQixvQ0FBb0MsaUNBQWlDLHNDQUFzQyxPQUFPLG1EQUFtRCx1QkFBdUIsOEJBQThCLE9BQU8sc0NBQXNDLGdDQUFnQyx1QkFBdUIsMEJBQTBCLE9BQU8sY0FBYyxnQ0FBZ0MsMEJBQTBCLHdCQUF3QixPQUFPLG9DQUFvQyx5QkFBeUIsT0FBTyxnQkFBZ0IscUJBQXFCLE9BQU8seUJBQXlCLDZCQUE2QixzQkFBc0IsbUNBQW1DLE9BQU8sNEJBQTRCLDJCQUEyQiwwQkFBMEIsT0FBTyw0QkFBNEIsc0NBQXNDLDZCQUE2QiwrQkFBK0IsMEJBQTBCLDJCQUEyQix1QkFBdUIsT0FBTywrQ0FBK0Msb0NBQW9DLE9BQU8sZUFBZSwwQkFBMEIsNkJBQTZCLE9BQU8sZ0JBQWdCLDBCQUEwQiw2QkFBNkIsMEJBQTBCLCtCQUErQix3Q0FBd0MsT0FBTyx3QkFBd0IsMkJBQTJCLE9BQU8sWUFBWSwwQkFBMEIsOEJBQThCLE9BQU8sNEJBQTRCLDJCQUEyQiwwQkFBMEIsT0FBTyxxQkFBcUIsNkJBQTZCLDZCQUE2QiwwQkFBMEIsT0FBTyx1QkFBdUIsMkJBQTJCLE9BQU8sZUFBZSwwQkFBMEIsOEJBQThCLE9BQU8seUJBQXlCLHVCQUF1QixrQ0FBa0MsMkJBQTJCLDJCQUEyQiw4QkFBOEIsK0JBQStCLCtDQUErQyxPQUFPLCtCQUErQixxQkFBcUIsd0JBQXdCLHdCQUF3QixnQ0FBZ0Msa0NBQWtDLGlDQUFpQyxPQUFPLCtCQUErQix1QkFBdUIsT0FBTyxrQ0FBa0MscUJBQXFCLHVCQUF1Qix1QkFBdUIsOEJBQThCLE9BQU8sK0JBQStCLG9CQUFvQixPQUFPLGlDQUFpQyx3QkFBd0Isb0NBQW9DLHNCQUFzQix1QkFBdUIsdUJBQXVCLDRCQUE0QixpQ0FBaUMsT0FBTyxpQkFBaUIsZ0NBQWdDLHFCQUFxQiw0QkFBNEIsT0FBTyxzQ0FBc0MsMkJBQTJCLHlCQUF5Qix3Q0FBd0MsT0FBTywwQ0FBMEMseUJBQXlCLCtCQUErQixPQUFPLHNDQUFzQywwQkFBMEIsOEJBQThCLDhCQUE4QixPQUFPLGlEQUFpRCx1QkFBdUIsa0NBQWtDLHVCQUF1Qiw0QkFBNEIsb0NBQW9DLHdDQUF3Qyx3QkFBd0IsT0FBTyx3Q0FBd0Msd0JBQXdCLDZCQUE2QixPQUFPLCtCQUErQix1QkFBdUIsT0FBTyx5QkFBeUIsMkJBQTJCLE9BQU8sMEJBQTBCLCtCQUErQixPQUFPLDBCQUEwQiwrQkFBK0IsT0FBTyxvQ0FBb0MsNEJBQTRCLE9BQU8seUJBQXlCLHNCQUFzQixPQUFPLHFCQUFxQix5QkFBeUIsT0FBTztBQUNyNks7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyxxSEFBdUQ7O0FBRXpGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQTtBQUNBLE1BQU0scUhBQXVEO0FBQzdEO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMscUhBQXVEOztBQUV4Rjs7QUFFQTtBQUNBLCtCQUErQixRQUFTO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsMEIiLCJmaWxlIjoic3R5bGVzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuQXBwIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXBwLWxvZ28ge1xcclxcbiAgICBoZWlnaHQ6IDQwdm1pbjtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogbm8tcHJlZmVyZW5jZSkge1xcclxcbiAgICAuQXBwLWxvZ28ge1xcclxcbiAgICAgIGFuaW1hdGlvbjogQXBwLWxvZ28tc3BpbiBpbmZpbml0ZSAyMHMgbGluZWFyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIGlucHV0e1xcclxcbiAgICBoZWlnaHQgOiAzNXB4O1xcclxcbiAgICBib3JkZXIgOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG4gICAgb3V0bGluZSA6IG5vbmU7XFxyXFxuICB9ICovXFxyXFxuICBcXHJcXG4gIC5BcHAtaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMTBweCArIDJ2bWluKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQXBwLWxpbmsge1xcclxcbiAgICBjb2xvcjogIzYxZGFmYjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQGtleWZyYW1lcyBBcHAtbG9nby1zcGluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnBhZ2VDb250ZW50XFxyXFxuICB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYyc7XFxyXFxuICAgICAgbWFyZ2luOiAwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGJvZHlcXHJcXG4gIHtcXHJcXG4gICAgICBtYXJnaW46IDBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1haW5IZWFkaW5nXFxyXFxuICB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLDE1MywyMDQpO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogNTBweCA7XFxyXFxuICAgICAgY29sb3I6d2hpdGU7XFxyXFxuICAgICAgcGFkZGluZzogMzBweCAwcHggMzBweCAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaG9yaXpvbnRhbE5hdmlnYXRpb25CYXIgdWx7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgcGFkZGluZyA6IDBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmhvcml6b250YWxOYXZpZ2F0aW9uQmFyIGxpe1xcclxcbiAgICAgIGZsb2F0IDogbGVmdDtcXHJcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdDYWxpYnJpJztcXHJcXG4gICAgICBwYWRkaW5nIDogN3B4IDBweCAxMHB4IDI1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ob3Jpem9udGFsTmF2aWdhdGlvbkJhciBsaTpsYXN0LWNoaWxke1xcclxcbiAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuIC5ob3Jpem9udGFsTmF2aWdhdGlvbkJhciBhe1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBhe1xcclxcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgY29sb3IgOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaXNwbGF5U2VsZWN0ZWRDb250YWN0IGF7XFxyXFxuICAgICAgZGlzcGxheSA6IGZsZXg7XFxyXFxuICB9XFxyXFxuICAuY29udGFjdHN7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIH1cXHJcXG4gIC5jb250YWN0TGlzdFxcclxcbiAge1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0IDogMjVweDtcXHJcXG4gICAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgICBmb250LWZhbWlseTogXFxcIkNhbGlicmlcXFwiO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdExpc3QgdWx7XFxyXFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0TGlzdCBsaXtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcclxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1MHB4O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3RMaXN0IGxpOmhvdmVyLCAuaGlnaExpZ2h0IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0VFN0YyO1xcclxcbiAgfSBcXHJcXG4gIFxcclxcbiAgcHtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBwcmV7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiO1xcclxcbiAgfVxcclxcbiAgLmNvbnRhY3RIZWFkaW5nIHB7XFxyXFxuICAgICAgbWFyZ2luLXRvcCA6IDBweDtcXHJcXG4gIH1cXHJcXG4gIC5uYW1le1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICBmb250LXN0eWxlOiBsaWdodGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdEhlYWRpbmd7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZXRhaWxze1xcclxcbiAgICAgIHBhZGRpbmcgOiAwcHggNTBweDtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogNTAwcHg7XFxyXFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGV0YWlscyBhe1xcclxcbiAgICAgIHBhZGRpbmcgOiAwIDIwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIGgye1xcclxcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGV0YWlsc0Zvcm17XFxyXFxuICAgICAgcGFkZGluZzozMHB4O1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDUwMHB4O1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggMjBweCAwcHggIzAwMDAwMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRldGFpbHNGb3JtIGlucHV0e1xcclxcbiAgICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgICAgcGFkZGluZzogMTJweDtcXHJcXG4gICAgICBtYXJnaW46IDhweCAwO1xcclxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGV0YWlsc0Zvcm0gbGFiZWx7XFxyXFxuICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGV0YWlsc0Zvcm0gdGV4dGFyZWF7XFxyXFxuICAgICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgICAgcmVzaXplOiBub25lO1xcclxcbiAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZXRhaWxzRm9ybSB0YWJsZXtcXHJcXG4gICAgICB3aWR0aDo5MyU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zdWJtaXREZXRhaWxzQnV0dG9ue1xcclxcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2OEMwMDtcXHJcXG4gICAgICBjb2xvcjp3aGl0ZTtcXHJcXG4gICAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICAgIHdpZHRoIDogMjAlICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ib3h7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIHdpZHRoOiA0NSU7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMSU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNjb250YWN0SW5mb3JtYXRpb25cXHJcXG4gIHtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMzAlO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDMlO1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRpc3BsYXlTZWxlY3RlZENvbnRhY3RcXHJcXG4gIHtcXHJcXG4gICAgICBkaXNwbGF5IDogZmxleDtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRpc3BsYXlTZWxlY3RlZENvbnRhY3QgcHtcXHJcXG4gICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgICBwYWRkaW5nLXJpZ2h0IDogMjAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGlzcGxheVNlbGVjdGVkQ29udGFjdCBidXR0b25cXHJcXG4gIHtcXHJcXG4gICAgICBib3JkZXIgOiAwcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgIG1hcmdpbi10b3AgOiAxMHB4O1xcclxcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJOYW51bSBHb3RoaWNcXFwiO1xcclxcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kaXNwbGF5U2VsZWN0ZWRDb250YWN0IGltZ3tcXHJcXG4gICAgICBoZWlnaHQgOiAxNXB4O1xcclxcbiAgICAgIHBhZGRpbmctdG9wIDogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmhpZGVDb250ZW50XFxyXFxuICB7XFxyXFxuICAgICAgZGlzcGxheTpub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYWRkcmVzcyBwcmV7XFxyXFxuICAgICAgbWFyZ2luLXRvcCA6IDBweDtcXHJcXG4gIH1cXHJcXG4gIC5kaXNwbGF5RW1haWxcXHJcXG4gIHtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vYmlsZVxcclxcbiAge1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tIDogMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAud2Vic2l0ZSwuYWRkcmVzc1xcclxcbiAge1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZXJyb3JcXHJcXG4gIHtcXHJcXG4gICAgICBjb2xvciA6IHJlZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmFkZHJlc3N7XFxyXFxuICAgICAgZGlzcGxheSA6IGZsZXg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQXBwLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5jc3NcIik7XG5cbiAgICAgICAgICAgICAgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuX19lc01vZHVsZSA/IG5ld0NvbnRlbnQuZGVmYXVsdCA6IG5ld0NvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IFxuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9