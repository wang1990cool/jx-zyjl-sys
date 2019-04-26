webpackJsonp([34],{njPW:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={data:function(){var t=this;return{visible:!1,dataForm:{id:0,projectId:"",projectName:"",projectBudget:"",trainingPlan:"",auditOption:"",applicantId:"",applicantName:"",applicantDept:"",auditorId:"",auditorName:"",auditTime:"",status:"",statusCode:""},dataRule:{projectId:[{required:!0,validator:function(a,e,r){""===e?r(new Error("项目编号不能为空")):t.$http({url:t.$http.adornUrl("/train/project/checkProjectIdIsExists/"+e),method:"get",params:t.$http.adornParams()}).then(function(t){var a=t.data;a&&0!==a.code?r(new Error("项目编号已存在")):r()})},trigger:"blur"}],projectName:[{required:!0,message:"项目名称不能为空",trigger:"blur"}],projectBudget:[{required:!0,validator:function(t,a,e){!1===/^\d+(\.\d+)?$/.test(a)?e(new Error("请输入数字")):e()},trigger:"blur"}]}}},methods:{init:function(t){var a=this;this.dataForm.id=t||0,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.id&&a.$http({url:a.$http.adornUrl("/train/project/info/"+a.dataForm.id),method:"get",params:a.$http.adornParams()}).then(function(t){var e=t.data;e&&0===e.code&&(a.dataForm.projectId=e.trainProject.projectId,a.dataForm.projectName=e.trainProject.projectName,a.dataForm.projectBudget=e.trainProject.projectBudget,a.dataForm.trainingPlan=e.trainProject.trainingPlan,a.dataForm.auditOption=e.trainProject.auditOption,a.dataForm.applicantId=e.trainProject.applicantId,a.dataForm.applicantName=e.trainProject.applicantName,a.dataForm.applicantDept=e.trainProject.applicantDept,a.dataForm.auditorId=e.trainProject.auditorId,a.dataForm.auditorName=e.trainProject.auditorName,a.dataForm.auditTime=e.trainProject.auditTime,a.dataForm.status=e.trainProject.status,a.dataForm.statusCode=e.trainProject.statusCode)})})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(a){a&&t.$http({url:t.$http.adornUrl("/train/project/"+(t.dataForm.id?"update":"save")),method:"post",data:t.$http.adornData({id:t.dataForm.id||void 0,projectId:t.dataForm.projectId,projectName:t.dataForm.projectName,projectBudget:t.dataForm.projectBudget,trainingPlan:t.dataForm.trainingPlan,auditOption:t.dataForm.auditOption,applicantId:t.dataForm.applicantId,applicantName:t.dataForm.applicantName,applicantDept:t.dataForm.applicantDept,auditorId:t.dataForm.auditorId,auditorName:t.dataForm.auditorName,auditTime:t.dataForm.auditTime,status:"草稿状态",statusCode:"1"})}).then(function(a){var e=a.data;e&&0===e.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(e.msg)})})}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(a){t.visible=a}}},[e("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,size:"mini","label-width":"130px"},nativeOn:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.dataFormSubmit()}}},[e("el-form-item",{attrs:{label:"项目编号",prop:"projectId"}},[e("el-input",{attrs:{placeholder:"项目编号"},model:{value:t.dataForm.projectId,callback:function(a){t.$set(t.dataForm,"projectId",a)},expression:"dataForm.projectId"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"项目名称",prop:"projectName"}},[e("el-input",{attrs:{placeholder:"项目名称"},model:{value:t.dataForm.projectName,callback:function(a){t.$set(t.dataForm,"projectName",a)},expression:"dataForm.projectName"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"项目预算",prop:"projectBudget"}},[e("el-input",{attrs:{placeholder:"项目预算"},model:{value:t.dataForm.projectBudget,callback:function(a){t.$set(t.dataForm,"projectBudget",a)},expression:"dataForm.projectBudget"}})],1),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e()],1),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.visible=!1}}},[t._v("取消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(a){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},i=e("46Yf")(r,o,!1,null,null,null);a.default=i.exports}});