webpackJsonp([44],{cti8:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,name:"",status:"",createUserId:"",createTime:""},dataRule:{name:[{required:!0,message:"证书名称不能为空",trigger:"blur"}],status:[{required:!0,message:"状态不能为空",trigger:"blur"}]}}},methods:{init:function(t){var a=this;this.dataForm.id=t||0,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.id&&a.$http({url:a.$http.adornUrl("/dic/zdzsmcxxb/info/"+a.dataForm.id),method:"get",params:a.$http.adornParams()}).then(function(t){var e=t.data;e&&0===e.code&&(a.dataForm.name=e.zdZsmcxxb.name,a.dataForm.status=e.zdZsmcxxb.status)})})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(a){a&&t.$http({url:t.$http.adornUrl("/dic/zdzsmcxxb/"+(t.dataForm.id?"update":"save")),method:"post",data:t.$http.adornData({id:t.dataForm.id||void 0,name:t.dataForm.name,status:t.dataForm.status})}).then(function(a){var e=a.data;e&&0===e.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(e.msg)})})}}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(a){t.visible=a}}},[e("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.dataFormSubmit()}}},[e("el-form-item",{attrs:{label:"证书名称",prop:"name"}},[e("el-input",{attrs:{placeholder:"证书名称"},model:{value:t.dataForm.name,callback:function(a){t.$set(t.dataForm,"name",a)},expression:"dataForm.name"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"状态",prop:"status"}},[e("el-radio-group",{model:{value:t.dataForm.status,callback:function(a){t.$set(t.dataForm,"status",a)},expression:"dataForm.status"}},[e("el-radio",{attrs:{label:0}},[t._v("禁用")]),t._v(" "),e("el-radio",{attrs:{label:1}},[t._v("正常")])],1)],1)],1),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.visible=!1}}},[t._v("取消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(a){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},o=e("46Yf")(r,s,!1,null,null,null);a.default=o.exports}});