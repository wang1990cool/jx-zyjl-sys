webpackJsonp([22,34],{CZul:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("njPW"),i=a("JuyP"),o={data:function(){return{dataForm:{projectId:"",projectName:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,order:"id desc",dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1,detailVisible:!1}},components:{AddOrUpdate:r.default,trainProgramDetailList:i.default},activated:function(){this.getDataList()},methods:{getDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/train/project/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,order:this.order,projectId:this.dataForm.projectId,projectName:this.dataForm.projectName})}).then(function(e){var a=e.data;a&&0===a.code?(t.dataList=a.page.list,t.totalPage=a.page.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},getDataAllList:function(){this.dataForm.projectId="",this.dataForm.projectName="",this.getDataList()},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},selectionChangeHandle:function(t){this.dataListSelections=t},addOrUpdateHandle:function(t){var e=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){e.$refs.addOrUpdate.init(t)})},detailHandle:function(t,e){var a=this;this.detailVisible=!0,this.$nextTick(function(){a.$refs.trainProgramDetailList.init(t,e)})},sumbitHandle:function(t){var e=this;this.$confirm("确定提交？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http({url:e.$http.adornUrl("/train/project/submit"),method:"post",data:e.$http.adornData(t,!1)}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)})})},withdrawHandle:function(t){var e=this;this.$confirm("确定撤回？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http({url:e.$http.adornUrl("/train/project/withdraw"),method:"post",data:e.$http.adornData(t,!1)}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)})})},deleteHandle:function(t){for(var e=this,a=!1,r=0;r<this.dataListSelections.length;r++)if("1"!==this.dataListSelections[r].statusCode){a=!0;break}if(a)this.$message.error('请选择"草稿状态"的记录');else{var i=t?[t]:this.dataListSelections.map(function(t){return t.id});this.$confirm("确定"+(t?"删除":"批量删除")+"?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http({url:e.$http.adornUrl("/train/project/delete"),method:"post",data:e.$http.adornData(i,!1)}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)})})}}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"项目编号",clearable:""},model:{value:t.dataForm.projectId,callback:function(e){t.$set(t.dataForm,"projectId",e)},expression:"dataForm.projectId"}})],1),t._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"项目名称",clearable:""},model:{value:t.dataForm.projectName,callback:function(e){t.$set(t.dataForm,"projectName",e)},expression:"dataForm.projectName"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-zoom-in",type:"primary",plain:""},on:{click:function(e){t.getDataList()}}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{icon:"el-icon-zoom-out",type:"primary",plain:""},on:{click:function(e){t.getDataAllList()}}},[t._v("取消")])],1)],1),t._v(" "),a("el-form",[a("el-form-item",{staticStyle:{"margin-bottom":"5px"}},[t.isAuth("train:project:save")?a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.addOrUpdateHandle()}}},[t._v("新增")]):t._e(),t._v(" "),t.isAuth("train:project:delete")?a("el-button",{attrs:{size:"small",type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.deleteHandle()}}},[t._v("批量删除")]):t._e()],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v("ß\n\n    "),t._v(" "),a("el-table-column",{attrs:{prop:"projectId","header-align":"center",align:"center",label:"项目编号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectName","header-align":"center",align:"center",label:"项目名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectBudget","header-align":"center",align:"center",label:"项目预算"}}),t._v(" "),a("el-table-column",{attrs:{prop:"applicantName","header-align":"center",align:"center",label:"申请人姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"auditorName","header-align":"center",align:"center",label:"审核人姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"auditTime","header-align":"center",align:"center",label:"审核时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"statusCode","header-align":"center",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return["1"===e.row.statusCode?a("el-tag",{attrs:{size:"small",type:"warning"}},[t._v("草稿状态")]):t._e(),t._v(" "),"2"===e.row.statusCode?a("el-tag",{attrs:{size:"small",type:"success"}},[t._v("待中心审核")]):t._e(),t._v(" "),"3"===e.row.statusCode?a("el-tag",{attrs:{size:"small",type:"primary"}},[t._v("审核通过")]):t._e(),t._v(" "),"4"===e.row.statusCode?a("el-tag",{attrs:{size:"small",type:"danger"}},[t._v("方案已填写")]):t._e(),t._v(" "),"5"===e.row.statusCode?a("el-tag",{attrs:{size:"small",type:"info"}},[t._v("项目结束")]):t._e(),t._v(" "),"9"===e.row.statusCode?a("el-tag",{attrs:{size:"small",type:"danger"}},[t._v("中心驳回")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return["1"===e.row.statusCode?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.addOrUpdateHandle(e.row.id)}}},[t._v("修改")]):t._e(),t._v(" "),"1"===e.row.statusCode?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteHandle(e.row.id)}}},[t._v("删除")]):t._e(),t._v(" "),"1"===e.row.statusCode?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.sumbitHandle(e.row.id)}}},[t._v("提交")]):t._e(),t._v(" "),"4"===e.row.statusCode||"5"===e.row.statusCode?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.detailHandle(e.row.id,e.row.projectId)}}},[t._v("方案详情")]):t._e(),t._v(" "),"2"===e.row.statusCode?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.withdrawHandle(e.row.id)}}},[t._v("撤回")]):t._e()]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}}),t._v(" "),t.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getDataList}}):t._e(),t._v(" "),t.detailVisible?a("train-program-detail-list",{ref:"trainProgramDetailList"}):t._e()],1)},staticRenderFns:[]},d=a("46Yf")(o,n,!1,null,null,null);e.default=d.exports},njPW:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){var t=this;return{visible:!1,dataForm:{id:0,projectId:"",projectName:"",projectBudget:"",trainingPlan:"",auditOption:"",applicantId:"",applicantName:"",applicantDept:"",auditorId:"",auditorName:"",auditTime:"",status:"",statusCode:""},dataRule:{projectId:[{required:!0,validator:function(e,a,r){""===a?r(new Error("项目编号不能为空")):t.$http({url:t.$http.adornUrl("/train/project/checkProjectIdIsExists/"+a),method:"get",params:t.$http.adornParams()}).then(function(t){var e=t.data;e&&0!==e.code?r(new Error("项目编号已存在")):r()})},trigger:"blur"}],projectName:[{required:!0,message:"项目名称不能为空",trigger:"blur"}],projectBudget:[{required:!0,validator:function(t,e,a){!1===/^\d+(\.\d+)?$/.test(e)?a(new Error("请输入数字")):a()},trigger:"blur"}]}}},methods:{init:function(t){var e=this;this.dataForm.id=t||0,this.visible=!0,this.$nextTick(function(){e.$refs.dataForm.resetFields(),e.dataForm.id&&e.$http({url:e.$http.adornUrl("/train/project/info/"+e.dataForm.id),method:"get",params:e.$http.adornParams()}).then(function(t){var a=t.data;a&&0===a.code&&(e.dataForm.projectId=a.trainProject.projectId,e.dataForm.projectName=a.trainProject.projectName,e.dataForm.projectBudget=a.trainProject.projectBudget,e.dataForm.trainingPlan=a.trainProject.trainingPlan,e.dataForm.auditOption=a.trainProject.auditOption,e.dataForm.applicantId=a.trainProject.applicantId,e.dataForm.applicantName=a.trainProject.applicantName,e.dataForm.applicantDept=a.trainProject.applicantDept,e.dataForm.auditorId=a.trainProject.auditorId,e.dataForm.auditorName=a.trainProject.auditorName,e.dataForm.auditTime=a.trainProject.auditTime,e.dataForm.status=a.trainProject.status,e.dataForm.statusCode=a.trainProject.statusCode)})})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$http({url:t.$http.adornUrl("/train/project/"+(t.dataForm.id?"update":"save")),method:"post",data:t.$http.adornData({id:t.dataForm.id||void 0,projectId:t.dataForm.projectId,projectName:t.dataForm.projectName,projectBudget:t.dataForm.projectBudget,trainingPlan:t.dataForm.trainingPlan,auditOption:t.dataForm.auditOption,applicantId:t.dataForm.applicantId,applicantName:t.dataForm.applicantName,applicantDept:t.dataForm.applicantDept,auditorId:t.dataForm.auditorId,auditorName:t.dataForm.auditorName,auditTime:t.dataForm.auditTime,status:"草稿状态",statusCode:"1"})}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(a.msg)})})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,size:"mini","label-width":"130px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"项目编号",prop:"projectId"}},[a("el-input",{attrs:{placeholder:"项目编号"},model:{value:t.dataForm.projectId,callback:function(e){t.$set(t.dataForm,"projectId",e)},expression:"dataForm.projectId"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"项目名称",prop:"projectName"}},[a("el-input",{attrs:{placeholder:"项目名称"},model:{value:t.dataForm.projectName,callback:function(e){t.$set(t.dataForm,"projectName",e)},expression:"dataForm.projectName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"项目预算",prop:"projectBudget"}},[a("el-input",{attrs:{placeholder:"项目预算"},model:{value:t.dataForm.projectBudget,callback:function(e){t.$set(t.dataForm,"projectBudget",e)},expression:"dataForm.projectBudget"}})],1),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e()],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},o=a("46Yf")(r,i,!1,null,null,null);e.default=o.exports}});