(this["webpackJsonpstreamlit-aggrid"]=this["webpackJsonpstreamlit-aggrid"]||[]).push([[0],{295:function(e,t,r){},296:function(e,t,r){},298:function(e,t,r){"use strict";r.r(t);var a=r(35),n=r.n(a),i=r(106),o=r.n(i),s=r(2),u=r(3),c=r(6),d=r(7),l=r(200),p=r(226),m=r(0),f=r(92),h=r(229),g=r(32),v=r(301),y=r(300),b=r(230);var O=function e(t,r){var a=function(t){return null!==t&&"object"===typeof t?e(t,r):r(t)};return Array.isArray(t)?t.map(a):"object"===typeof t?function(e,t){return Object.keys(e).reduce((function(r,a){return r[a]=t(e[a]),r}),{})}(t,a):t},F=r(228),_=(r(292),r(293),r(294),r(295),r(296),r(67));var j=function(e){Object(c.a)(r,e);var t=Object(d.a)(r);function r(e){var a,n=this;Object(s.a)(this,r),(a=t.call(this,e)).frameDtypes=void 0,a.api=void 0,a.columnApi=void 0,a.columnFormaters=void 0,a.manualUpdateRequested=!1,a.allowUnsafeJsCode=!1,a.fitColumnsOnGridLoad=!1,a.gridOptions=void 0,a.convertJavascriptCodeOnGridOptions=function(e){return O(e,a.convertStringToFunction)},a.render=function(){return void 0!==a.api&&a.state.should_update&&a.api.setRowData(a.state.rowData),Object(_.jsxs)("div",{className:"ag-theme-"+a.props.args.theme,style:a.defineContainerHeight(),children:[Object(_.jsx)(n.ManualUpdateButton,{manual_update:a.manualUpdateRequested,onClick:function(e){return a.returnGridValue(e)}}),Object(_.jsx)(p.AgGridReact,{onGridReady:function(e){return a.onGridReady(e)},gridOptions:a.gridOptions})]})},e.args.custom_css&&function(e){var t=function(e){var t=[];for(var r in e){var a=r+" {";for(var n in e[r])a+=n+": "+e[r][n]+";";a+="}",t.push(a)}return t.join("\n")}(e),r=document.createElement("style");r.type="text/css",r.innerText=t,console.log("Adding cutom css: ",t),document.head.appendChild(r)}(e.args.custom_css),e.args.enable_enterprise_modules?(m.ModuleRegistry.registerModules(h.a),"license_key"in e.args&&g.b.setLicenseKey(e.args.license_key)):m.ModuleRegistry.registerModules(f.a),a.frameDtypes=a.props.args.frame_dtypes,a.manualUpdateRequested=1===a.props.args.update_mode,a.allowUnsafeJsCode=a.props.args.allow_unsafe_jscode,a.fitColumnsOnGridLoad=a.props.args.fit_columns_on_grid_load,a.columnFormaters={columnTypes:{dateColumnFilter:{filter:"agDateColumnFilter",filterParams:{comparator:function(e,t){return Object(v.a)(Object(y.a)(t),e)}}},numberColumnFilter:{filter:"agNumberColumnFilter"},shortDateTimeFormat:{valueFormatter:function(e){return a.dateFormatter(e.value,"dd/MM/yyyy HH:mm")}},customDateTimeFormat:{valueFormatter:function(e){return a.dateFormatter(e.value,e.column.colDef.custom_format_string)}},customNumericFormat:{valueFormatter:function(e){var t;return a.numberFormatter(e.value,null!==(t=e.column.colDef.precision)&&void 0!==t?t:2)}},customCurrencyFormat:{valueFormatter:function(e){return a.currencyFormatter(e.value,e.column.colDef.custom_currency_symbol)}},timedeltaFormat:{valueFormatter:function(e){return Object(F.duration)(e.value).humanize(!0)}}}};var i=Object.assign({},a.columnFormaters,a.props.args.gridOptions);return a.allowUnsafeJsCode&&(console.warn("flag allow_unsafe_jscode is on."),i=a.convertJavascriptCodeOnGridOptions(i)),a.gridOptions=i,a.state={rowData:JSON.parse(e.args.row_data),gridHeight:a.props.args.height,should_update:!1},a}return Object(u.a)(r,[{key:"convertStringToFunction",value:function(e){var t="--x_x--0_0--",r=new RegExp("".concat(t,"\\s*(function\\s*.*)\\s*").concat(t)).exec(e);if(r){var a=r[1];return new Function("return "+a)()}return e}},{key:"setUpdateMode",value:function(){var e=this;if(!this.manualUpdateRequested){var t=this.props.args.update_mode;2===(2&t)&&this.api.addEventListener("cellValueChanged",(function(t){return e.returnGridValue(t)})),4===(4&t)&&this.api.addEventListener("selectionChanged",(function(t){return e.returnGridValue(t)})),8===(8&t)&&this.api.addEventListener("filterChanged",(function(t){return e.returnGridValue(t)})),16===(16&t)&&this.api.addEventListener("sortChanged",(function(t){return e.returnGridValue(t)}))}}},{key:"onGridReady",value:function(e){var t=this;for(var r in this.api=e.api,this.columnApi=e.columnApi,this.setUpdateMode(),this.api.addEventListener("firstDataRendered",(function(e){return t.fitColumns()})),this.api.setRowData(this.state.rowData),this.gridOptions.preSelectedRows)this.api.selectIndex(this.gridOptions.preSelectedRows[r],!0,!0)}},{key:"fitColumns",value:function(){this.fitColumnsOnGridLoad?this.api.sizeColumnsToFit():this.columnApi.autoSizeAllColumns()}},{key:"dateFormatter",value:function(e,t){try{var r=Object(y.a)(e);return Object(b.a)(r,t)}catch(a){return e}}},{key:"currencyFormatter",value:function(e,t){var r=Number.parseFloat(e);return Number.isNaN(r)?e:t+r.toFixed(2)}},{key:"numberFormatter",value:function(e,t){var r=Number.parseFloat(e);return Number.isNaN(r)?e:r.toFixed(t)}},{key:"returnGridValue",value:function(e){var t=[];switch(this.props.args.data_return_mode){case 0:this.api.forEachLeafNode((function(e){return t.push(e.data)}));break;case 1:this.api.forEachNodeAfterFilter((function(e){e.group||t.push(e.data)}));break;case 2:this.api.forEachNodeAfterFilterAndSort((function(e){e.group||t.push(e.data)}))}var r={originalDtypes:this.frameDtypes,rowData:t,selectedRows:this.api.getSelectedRows()};l.a.setComponentValue(r)}},{key:"ManualUpdateButton",value:function(e){return e.manual_update?Object(_.jsx)("button",{onClick:e.onClick,children:"Update"}):Object(_.jsx)("span",{})}},{key:"defineContainerHeight",value:function(){return"domLayout"in this.gridOptions&&"autoHeight"===this.gridOptions.domLayout?{width:this.props.width}:{width:this.props.width,height:this.state.gridHeight}}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.args.reload_data?{rowData:JSON.parse(e.args.row_data),gridHeight:e.args.height,should_update:!0}:{gridHeight:e.args.height}}}]),r}(l.b),w=Object(l.c)(j);o.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(w,{})}),document.getElementById("root"))}},[[298,1,2]]]);
//# sourceMappingURL=main.c1dea4eb.chunk.js.map