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
exports.push([module.i, ".App {\r\n    text-align: center;\r\n  }\r\n  \r\n  .App-logo {\r\n    height: 40vmin;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: no-preference) {\r\n    .App-logo {\r\n      animation: App-logo-spin infinite 20s linear;\r\n    }\r\n  }\r\n  \r\n  /* input{\r\n    height : 35px;\r\n    border : white;\r\n    margin-right: 5%;\r\n    outline : none;\r\n  } */\r\n  \r\n  .App-header {\r\n    background-color: #282c34;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: calc(10px + 2vmin);\r\n    color: white;\r\n  }\r\n  \r\n  .App-link {\r\n    color: #61dafb;\r\n  }\r\n  \r\n  @keyframes App-logo-spin {\r\n    from {\r\n      transform: rotate(0deg);\r\n    }\r\n    to {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  .pageContent\r\n  {\r\n      font-family: 'Century Gothic';\r\n      margin: 0px;\r\n  }\r\n  \r\n  body\r\n  {\r\n      margin: 0px;\r\n  }\r\n  \r\n  .mainHeading\r\n  {\r\n      background-color: rgb(51,153,204);\r\n      font-size: 50px ;\r\n      color:white;\r\n      padding: 30px 0px 30px 20px;\r\n  }\r\n  \r\n  .horizontalNavigationBar ul{\r\n      margin-top: 0px;\r\n      background-color: black;\r\n      height: 35px;\r\n      color: white;\r\n      list-style: none;\r\n      font-size: 18px;\r\n      padding : 0px;\r\n  }\r\n  \r\n  .horizontalNavigationBar li{\r\n      float : left;\r\n      font-weight: 600;\r\n      text-transform: uppercase;\r\n      font-family: 'Calibri';\r\n      padding : 7px 0px 10px 25px;\r\n  }\r\n  \r\n  .horizontalNavigationBar li:last-child{\r\n      float: right;\r\n      padding-right: 30px;\r\n  }\r\n  \r\n  .horizontalNavigationBar a{\r\n      text-decoration: none;\r\n      color: white;\r\n      cursor: pointer;\r\n  }\r\n  \r\n  .contacts{\r\n  overflow: auto;\r\n  }\r\n  .contactList\r\n  {\r\n      margin-left : 25px;\r\n      float: left;\r\n      font-family: \"Calibri\";\r\n  }\r\n  \r\n  .contactList ul{\r\n      list-style: none;\r\n      padding-left: 0;\r\n  }\r\n  \r\n  .contactList li{\r\n      border: 1px solid lightgray;\r\n      padding-left: 12px;\r\n      padding-right: 150px;\r\n      cursor: pointer;\r\n      list-style: none;\r\n  }\r\n  \r\n  .contactList li:hover {\r\n      background-color: #CEE7F2;\r\n  } \r\n  \r\n  p{\r\n      margin-top: 5px;\r\n      margin-bottom: 5px;\r\n  }\r\n  \r\n  pre{\r\n      margin-top: 5px;\r\n      margin-bottom: 5px;\r\n      font-size: 16px;\r\n      font-weight: lighter;\r\n      font-family: \"Nanum Gothic\";\r\n  }\r\n  .contactHeading p{\r\n      margin-top : 0px;\r\n  }\r\n  .name{\r\n      font-size: 30px;\r\n      font-style: lighter;\r\n  }\r\n  \r\n  .contactHeading{\r\n      font-weight: 600;\r\n      font-size: 18px;\r\n  }\r\n  \r\n  .details{\r\n      padding : 0px 50px;\r\n      margin-left: 500px;\r\n      font-size: 20px;\r\n  }\r\n  \r\n  .details a{\r\n      padding : 0 20px;\r\n  }\r\n  \r\n  h2{\r\n      font-size: 40px;\r\n      margin-bottom: 20px;\r\n  }\r\n  \r\n  .detailsForm{\r\n      padding:30px;\r\n      border: 1px solid white;\r\n      margin-left: 30%;\r\n      margin-top: 30px;\r\n      margin-right: 500px;\r\n      padding-bottom: 70px;\r\n      box-shadow: 5px 5px 20px 0px #000000;\r\n  }\r\n  \r\n  .detailsForm input{\r\n      width: 85%;\r\n      padding: 12px;\r\n      margin: 8px 0;\r\n      display: inline-block;\r\n      border: 1px solid black;\r\n      box-sizing: border-box;\r\n  }\r\n  \r\n  .detailsForm label{\r\n      width: 250px;\r\n  }\r\n  \r\n  .detailsForm textarea{\r\n      width: 85%;\r\n      height: 80px;\r\n      resize: none;\r\n      border-color: black;\r\n  }\r\n  \r\n  .detailsForm table{\r\n      width:93%;\r\n  }\r\n  \r\n  .submitDetailsButton{\r\n      padding: 10px;\r\n      background-color: #468C00;\r\n      color:white;\r\n      float: right;\r\n      border: none;\r\n      margin-right: 5px;\r\n      width : 20% !important;\r\n  }\r\n  \r\n  .box{\r\n      display: inline-block;\r\n      width: 45%;\r\n      padding-right: 1%;\r\n  }\r\n  \r\n  #contactInformation\r\n  {\r\n      margin-left: 30%;\r\n      margin-top: 3%;\r\n      font-family: \"Nanum Gothic\";\r\n  }\r\n  \r\n  .displaySelectedContact\r\n  {\r\n      display : flex;\r\n      padding-bottom: 10px;\r\n  }\r\n  \r\n  .displaySelectedContact p{\r\n      font-size: 20px;\r\n      font-weight: bolder;\r\n      padding-right : 20%;\r\n  }\r\n  \r\n  .displaySelectedContact button\r\n  {\r\n      border : 0px;\r\n      background-color: white;\r\n      height: 20px;\r\n      margin-top : 10px;\r\n      text-transform: uppercase;\r\n      font-family: \"Nanum Gothic\";\r\n      padding-right: 3%;\r\n      outline: none;\r\n  }\r\n  \r\n  .displaySelectedContact img{\r\n      height : 15px;\r\n      padding-top : 10px;\r\n  }\r\n  \r\n  .hideContent\r\n  {\r\n      display:none;\r\n  }\r\n  \r\n  .address pre{\r\n      margin-top : 0px;\r\n  }\r\n  .displayEmail\r\n  {\r\n      padding-bottom: 10px;\r\n  }\r\n  \r\n  .mobile\r\n  {\r\n      padding-bottom : 0px;\r\n  }\r\n  \r\n  .website,.address\r\n  {\r\n      padding-top: 10px;\r\n  }\r\n  \r\n  .error\r\n  {\r\n      color : red;\r\n  }\r\n  \r\n  .address{\r\n      display : flex;\r\n  }\r\n  \r\n  ", ""]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9BcHAuY3NzP2U4NDEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxTQUFTLDJCQUEyQixPQUFPLHVCQUF1Qix1QkFBdUIsNkJBQTZCLE9BQU8sNERBQTRELG1CQUFtQix1REFBdUQsU0FBUyxPQUFPLHFCQUFxQixzQkFBc0IsdUJBQXVCLHlCQUF5Qix1QkFBdUIsT0FBTyw0QkFBNEIsa0NBQWtDLDBCQUEwQixzQkFBc0IsK0JBQStCLDRCQUE0QixnQ0FBZ0Msc0NBQXNDLHFCQUFxQixPQUFPLHVCQUF1Qix1QkFBdUIsT0FBTyxzQ0FBc0MsY0FBYyxrQ0FBa0MsU0FBUyxZQUFZLG9DQUFvQyxTQUFTLE9BQU8sK0JBQStCLHdDQUF3QyxzQkFBc0IsT0FBTyx1QkFBdUIsc0JBQXNCLE9BQU8sK0JBQStCLDRDQUE0QywyQkFBMkIsc0JBQXNCLHNDQUFzQyxPQUFPLHdDQUF3QywwQkFBMEIsa0NBQWtDLHVCQUF1Qix1QkFBdUIsMkJBQTJCLDBCQUEwQix3QkFBd0IsT0FBTyx3Q0FBd0MsdUJBQXVCLDJCQUEyQixvQ0FBb0MsaUNBQWlDLHNDQUFzQyxPQUFPLG1EQUFtRCx1QkFBdUIsOEJBQThCLE9BQU8sdUNBQXVDLGdDQUFnQyx1QkFBdUIsMEJBQTBCLE9BQU8sc0JBQXNCLHFCQUFxQixPQUFPLHlCQUF5Qiw2QkFBNkIsc0JBQXNCLG1DQUFtQyxPQUFPLDRCQUE0QiwyQkFBMkIsMEJBQTBCLE9BQU8sNEJBQTRCLHNDQUFzQyw2QkFBNkIsK0JBQStCLDBCQUEwQiwyQkFBMkIsT0FBTyxtQ0FBbUMsb0NBQW9DLE9BQU8sZUFBZSwwQkFBMEIsNkJBQTZCLE9BQU8sZ0JBQWdCLDBCQUEwQiw2QkFBNkIsMEJBQTBCLCtCQUErQix3Q0FBd0MsT0FBTyx3QkFBd0IsMkJBQTJCLE9BQU8sWUFBWSwwQkFBMEIsOEJBQThCLE9BQU8sNEJBQTRCLDJCQUEyQiwwQkFBMEIsT0FBTyxxQkFBcUIsNkJBQTZCLDZCQUE2QiwwQkFBMEIsT0FBTyx1QkFBdUIsMkJBQTJCLE9BQU8sZUFBZSwwQkFBMEIsOEJBQThCLE9BQU8seUJBQXlCLHVCQUF1QixrQ0FBa0MsMkJBQTJCLDJCQUEyQiw4QkFBOEIsK0JBQStCLCtDQUErQyxPQUFPLCtCQUErQixxQkFBcUIsd0JBQXdCLHdCQUF3QixnQ0FBZ0Msa0NBQWtDLGlDQUFpQyxPQUFPLCtCQUErQix1QkFBdUIsT0FBTyxrQ0FBa0MscUJBQXFCLHVCQUF1Qix1QkFBdUIsOEJBQThCLE9BQU8sK0JBQStCLG9CQUFvQixPQUFPLGlDQUFpQyx3QkFBd0Isb0NBQW9DLHNCQUFzQix1QkFBdUIsdUJBQXVCLDRCQUE0QixpQ0FBaUMsT0FBTyxpQkFBaUIsZ0NBQWdDLHFCQUFxQiw0QkFBNEIsT0FBTyxzQ0FBc0MsMkJBQTJCLHlCQUF5Qix3Q0FBd0MsT0FBTywwQ0FBMEMseUJBQXlCLCtCQUErQixPQUFPLHNDQUFzQywwQkFBMEIsOEJBQThCLDhCQUE4QixPQUFPLGlEQUFpRCx1QkFBdUIsa0NBQWtDLHVCQUF1Qiw0QkFBNEIsb0NBQW9DLHdDQUF3Qyw0QkFBNEIsd0JBQXdCLE9BQU8sd0NBQXdDLHdCQUF3Qiw2QkFBNkIsT0FBTywrQkFBK0IsdUJBQXVCLE9BQU8seUJBQXlCLDJCQUEyQixPQUFPLDBCQUEwQiwrQkFBK0IsT0FBTywwQkFBMEIsK0JBQStCLE9BQU8sb0NBQW9DLDRCQUE0QixPQUFPLHlCQUF5QixzQkFBc0IsT0FBTyxxQkFBcUIseUJBQXlCLE9BQU87QUFDMXZLO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMscUhBQXVEOztBQUV6Rjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQSxNQUFNLHFIQUF1RDtBQUM3RDtBQUNBLHlCQUF5QixtQkFBTyxDQUFDLHFIQUF1RDs7QUFFeEY7O0FBRUE7QUFDQSwrQkFBK0IsUUFBUztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQztBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLDBCIiwiZmlsZSI6InN0eWxlcy5idW5kbGUuOGJkMWFmYmVmNmZjMWE3ZGE4YTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLkFwcCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkFwcC1sb2dvIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHZtaW47XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHtcXHJcXG4gICAgLkFwcC1sb2dvIHtcXHJcXG4gICAgICBhbmltYXRpb246IEFwcC1sb2dvLXNwaW4gaW5maW5pdGUgMjBzIGxpbmVhcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBpbnB1dHtcXHJcXG4gICAgaGVpZ2h0IDogMzVweDtcXHJcXG4gICAgYm9yZGVyIDogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxyXFxuICAgIG91dGxpbmUgOiBub25lO1xcclxcbiAgfSAqL1xcclxcbiAgXFxyXFxuICAuQXBwLWhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODJjMzQ7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAydm1pbik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLkFwcC1saW5rIHtcXHJcXG4gICAgY29sb3I6ICM2MWRhZmI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBrZXlmcmFtZXMgQXBwLWxvZ28tc3BpbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5wYWdlQ29udGVudFxcclxcbiAge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnO1xcclxcbiAgICAgIG1hcmdpbjogMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBib2R5XFxyXFxuICB7XFxyXFxuICAgICAgbWFyZ2luOiAwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tYWluSGVhZGluZ1xcclxcbiAge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwxNTMsMjA0KTtcXHJcXG4gICAgICBmb250LXNpemU6IDUwcHggO1xcclxcbiAgICAgIGNvbG9yOndoaXRlO1xcclxcbiAgICAgIHBhZGRpbmc6IDMwcHggMHB4IDMwcHggMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmhvcml6b250YWxOYXZpZ2F0aW9uQmFyIHVse1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgIHBhZGRpbmcgOiAwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ob3Jpem9udGFsTmF2aWdhdGlvbkJhciBsaXtcXHJcXG4gICAgICBmbG9hdCA6IGxlZnQ7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ2FsaWJyaSc7XFxyXFxuICAgICAgcGFkZGluZyA6IDdweCAwcHggMTBweCAyNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaG9yaXpvbnRhbE5hdmlnYXRpb25CYXIgbGk6bGFzdC1jaGlsZHtcXHJcXG4gICAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmhvcml6b250YWxOYXZpZ2F0aW9uQmFyIGF7XFxyXFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0c3tcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcbiAgLmNvbnRhY3RMaXN0XFxyXFxuICB7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQgOiAyNXB4O1xcclxcbiAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiQ2FsaWJyaVxcXCI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0TGlzdCB1bHtcXHJcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3RMaXN0IGxpe1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodDogMTUwcHg7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0TGlzdCBsaTpob3ZlciB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NFRTdGMjtcXHJcXG4gIH0gXFxyXFxuICBcXHJcXG4gIHB7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgcHJle1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIjtcXHJcXG4gIH1cXHJcXG4gIC5jb250YWN0SGVhZGluZyBwe1xcclxcbiAgICAgIG1hcmdpbi10b3AgOiAwcHg7XFxyXFxuICB9XFxyXFxuICAubmFtZXtcXHJcXG4gICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgZm9udC1zdHlsZTogbGlnaHRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3RIZWFkaW5ne1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGV0YWlsc3tcXHJcXG4gICAgICBwYWRkaW5nIDogMHB4IDUwcHg7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDUwMHB4O1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRldGFpbHMgYXtcXHJcXG4gICAgICBwYWRkaW5nIDogMCAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBoMntcXHJcXG4gICAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRldGFpbHNGb3Jte1xcclxcbiAgICAgIHBhZGRpbmc6MzBweDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMzAlO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiA1MDBweDtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcXHJcXG4gICAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggMHB4ICMwMDAwMDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZXRhaWxzRm9ybSBpbnB1dHtcXHJcXG4gICAgICB3aWR0aDogODUlO1xcclxcbiAgICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgICAgbWFyZ2luOiA4cHggMDtcXHJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRldGFpbHNGb3JtIGxhYmVse1xcclxcbiAgICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRldGFpbHNGb3JtIHRleHRhcmVhe1xcclxcbiAgICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGV0YWlsc0Zvcm0gdGFibGV7XFxyXFxuICAgICAgd2lkdGg6OTMlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc3VibWl0RGV0YWlsc0J1dHRvbntcXHJcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjhDMDA7XFxyXFxuICAgICAgY29sb3I6d2hpdGU7XFxyXFxuICAgICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gICAgICB3aWR0aCA6IDIwJSAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYm94e1xcclxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICB3aWR0aDogNDUlO1xcclxcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDElO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjY29udGFjdEluZm9ybWF0aW9uXFxyXFxuICB7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDMwJTtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAzJTtcXHJcXG4gICAgICBmb250LWZhbWlseTogXFxcIk5hbnVtIEdvdGhpY1xcXCI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kaXNwbGF5U2VsZWN0ZWRDb250YWN0XFxyXFxuICB7XFxyXFxuICAgICAgZGlzcGxheSA6IGZsZXg7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kaXNwbGF5U2VsZWN0ZWRDb250YWN0IHB7XFxyXFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgICAgcGFkZGluZy1yaWdodCA6IDIwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRpc3BsYXlTZWxlY3RlZENvbnRhY3QgYnV0dG9uXFxyXFxuICB7XFxyXFxuICAgICAgYm9yZGVyIDogMHB4O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICBtYXJnaW4tdG9wIDogMTBweDtcXHJcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiTmFudW0gR290aGljXFxcIjtcXHJcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcXHJcXG4gICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGlzcGxheVNlbGVjdGVkQ29udGFjdCBpbWd7XFxyXFxuICAgICAgaGVpZ2h0IDogMTVweDtcXHJcXG4gICAgICBwYWRkaW5nLXRvcCA6IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5oaWRlQ29udGVudFxcclxcbiAge1xcclxcbiAgICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmFkZHJlc3MgcHJle1xcclxcbiAgICAgIG1hcmdpbi10b3AgOiAwcHg7XFxyXFxuICB9XFxyXFxuICAuZGlzcGxheUVtYWlsXFxyXFxuICB7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2JpbGVcXHJcXG4gIHtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbSA6IDBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLndlYnNpdGUsLmFkZHJlc3NcXHJcXG4gIHtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVycm9yXFxyXFxuICB7XFxyXFxuICAgICAgY29sb3IgOiByZWQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5hZGRyZXNze1xcclxcbiAgICAgIGRpc3BsYXkgOiBmbGV4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBcIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0FwcC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50Ll9fZXNNb2R1bGUgPyBuZXdDb250ZW50LmRlZmF1bHQgOiBuZXdDb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyBcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==