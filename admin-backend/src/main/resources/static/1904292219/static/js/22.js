webpackJsonp([22,36],{"4Ekv":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("XKfM"),n=a("ryJa"),r={data:function(){return{visible:!1,dataForm:{key:""},projectId:"",dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:i.default},activated:function(){this.getDataList()},methods:{init:function(t,e){this.visible=!0,this.projectId=e,this.getDataList()},getDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/train/projectWorkload/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,projectId:this.projectId})}).then(function(e){var a=e.data;a&&0===a.code?(t.dataList=a.page.list,t.totalPage=a.page.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},selectionChangeHandle:function(t){this.dataListSelections=t},addOrUpdateHandle:function(t){var e=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){e.$refs.addOrUpdate.init(t,e.projectId)})},deleteHandle:function(t){var e=this,a=t?[t]:this.dataListSelections.map(function(t){return t.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(t?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http({url:e.$http.adornUrl("/train/projectTrainProgram/delete"),method:"post",data:e.$http.adornData(a,!1)}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)})})},dateFormat:function(t,e){var a=t[e.property];return void 0==a?"":n(a).format("YYYY-MM-DD")}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"工作量统计","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("div",{staticClass:"mod-config"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"teacherId","header-align":"center",align:"center",label:"教师工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"teacherName","header-align":"center",align:"center",label:"教师姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"workload","header-align":"center",align:"center",label:"总课时"}})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}}),t._v(" "),t.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getDataList}}):t._e()],1)])},staticRenderFns:[]},o=a("46Yf")(r,l,!1,null,null,null);e.default=o.exports},DwJe:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("4Ekv"),n=a("njPW"),r=a("ryJa"),l={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],order:"id desc",detailVisible:!1,addOrUpdateVisible:!1}},components:{projectWorkloadList:i.default,AddOrUpdate:n.default},activated:function(){this.getDataList()},methods:{getDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/train/projectWorkload/projectList"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,order:this.order,projectName:this.dataForm.projectName})}).then(function(e){var a=e.data;a&&0===a.code?(t.dataList=a.page.list,t.totalPage=a.page.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},getDataAllList:function(){this.dataForm.projectId="",this.dataForm.projectName="",this.getDataList()},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},selectionChangeHandle:function(t){this.dataListSelections=t},detailHandle:function(t,e){var a=this;this.detailVisible=!0,this.$nextTick(function(){a.$refs.projectWorkloadList.init(t,e)})},projectDetailHandle:function(t){var e=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){e.$refs.addOrUpdate.init(t,!0)})},dateFormat:function(t,e){var a=t[e.property];return void 0==a?"":r(a).format("YYYY-MM-DD")}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"项目名称",clearable:""},model:{value:t.dataForm.projectName,callback:function(e){t.$set(t.dataForm,"projectName",e)},expression:"dataForm.projectName"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-zoom-in",type:"primary",plain:""},on:{click:function(e){t.getDataList()}}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{icon:"el-icon-zoom-out",type:"primary",plain:""},on:{click:function(e){t.getDataAllList()}}},[t._v("取消")])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectName","header-align":"center",align:"center",label:"项目名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectBudget","header-align":"center",align:"center",label:"项目预算"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applicantName","header-align":"center",align:"center",label:"申请人姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applicantDept","header-align":"center",align:"center",label:"申请人部门"}}),t._v(" "),a("el-table-column",{attrs:{prop:"auditorId","header-align":"center",align:"center",width:"100",label:"审核人工号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"auditorName","header-align":"center",align:"center",width:"100",label:"审核人姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"auditTime","header-align":"center",align:"center",formatter:t.dateFormat,label:"审核时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"statusCode","header-align":"center",align:"center",width:"100",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return["5"===e.row.statusCode?a("el-tag",{attrs:{size:"small",type:"info"}},[t._v("项目结束")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.projectDetailHandle(e.row.id)}}},[t._v("详情")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.detailHandle(e.row.id,e.row.projectId)}}},[t._v("工作量详情")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}}),t._v(" "),t.detailVisible?a("project-workload-list",{ref:"projectWorkloadList"}):t._e(),t._v(" "),t.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getDataList}}):t._e()],1)},staticRenderFns:[]},s=a("46Yf")(l,o,!1,null,null,null);e.default=s.exports}});