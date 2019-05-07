webpackJsonp([48],{"2bBr":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={data:function(){return{dataForm:{ksnd:"",szbj:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1,zszpVisible:!1}},components:{Zszp:a("NVCn").default},activated:function(){this.getDataList()},methods:{exportDataList:function(){var e=this;this.$http({url:this.$http.adornUrl("/ksbm/ksbmcx/export"),method:"post",responseType:"arraybuffer",params:this.$http.adornParams({ksnd:this.dataForm.ksnd,szbj:this.dataForm.szbj})}).then(function(t){var a=t.data;if(a){var l=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"}),n=document.createElement("a"),s=window.URL.createObjectURL(l);n.href=s;n.download="学生考试报名信息表.xlsx",document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(s),e.getDataList()}})},getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/ksbm/ksbmcx/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,ksnd:this.dataForm.ksnd,szbj:this.dataForm.szbj})}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},zszpHandle:function(e){var t=this;this.zszpVisible=!0,this.$nextTick(function(){t.$refs.zszp.init(e)})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"年度",clearable:""},model:{value:e.dataForm.ksnd,callback:function(t){e.$set(e.dataForm,"ksnd",t)},expression:"dataForm.ksnd"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"",prop:"szxb"}},[a("el-select",{attrs:{label:"栏目",placeholder:"系部"},model:{value:e.dataForm.szxb,callback:function(t){e.$set(e.dataForm,"szxb",t)},expression:"dataForm.szxb"}},e._l(e.szxbList,function(e){return a("el-option",{key:e.label,attrs:{label:e.label,value:e.label}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"",prop:"szzy"}},[a("el-select",{attrs:{label:"栏目",placeholder:"专业"},model:{value:e.dataForm.szzy,callback:function(t){e.$set(e.dataForm,"szzy",t)},expression:"dataForm.szzy"}},e._l(e.szzyList,function(e){return a("el-option",{key:e.label,attrs:{label:e.label,value:e.label}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"",prop:"szbj"}},[a("el-select",{attrs:{label:"栏目",placeholder:"班级"},model:{value:e.dataForm.szbj,callback:function(t){e.$set(e.dataForm,"szbj",t)},expression:"dataForm.szbj"}},e._l(e.szbjList,function(e){return a("el-option",{key:e.label,attrs:{label:e.label,value:e.label}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){e.exportDataList()}}},[e._v("导出")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{prop:"ksnd","header-align":"center",align:"center",label:"考试年份"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ksxmmc","header-align":"center",align:"center",label:"考试名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"xsxm","header-align":"center",align:"center",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sex","header-align":"center",align:"center",label:"性别"}}),e._v(" "),a("el-table-column",{attrs:{prop:"birth","header-align":"center",align:"center",label:"出生日期"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mz","header-align":"center",align:"center",label:"民族"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sfzh","header-align":"center",align:"center",label:"身份证号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"telephone","header-align":"center",align:"center",label:"联系电话"}}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",width:"80",label:"照片"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isAuth("ksbm:ksbmxxb:info")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.zszpHandle(t.row.id)}}},[e._v("查看照片 ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",label:"报名时间"}})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.zszpVisible?a("zszp",{ref:"zszp",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},s=a("46Yf")(l,n,!1,null,null,null);t.default=s.exports}});