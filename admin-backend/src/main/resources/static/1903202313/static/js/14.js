webpackJsonp([14],{UZYF:function(e,a,t){var r=t("rH0t");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t("XkoO")("232bbd5e",r,!0)},rH0t:function(e,a,t){(e.exports=t("acE3")(!1)).push([e.i,"\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409EFF;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 178px;\n  height: 178px;\n  line-height: 178px;\n  text-align: center;\n}\n.avatar {\n  width: 178px;\n  height: 178px;\n  display: block;\n}\n",""])},tJvB:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={data:function(){return{uploadUrl:this.$http.adornUrl("/upload?token="+this.$cookie.get("token")),visible:!1,dataForm:{id:0,ksnd:"",ksxmid:"",ksxmmc:"",sex:"",birth:"",mz:"",sfzh:"",telephone:"",email:"",zppath:"",zszp:""},imageUrl:"",ksxmmcList:[],sexList:[{value:"0",label:"女"},{value:"1",label:"男"}],dataRule:{ksnd:[{required:!0,message:"不能为空",trigger:"blur"}],ksxmid:[{required:!0,message:"不能为空",trigger:"blur"}],ksxmmc:[{required:!0,message:"不能为空",trigger:"blur"}],sex:[{required:!0,message:"不能为空",trigger:"blur"}],birth:[{required:!0,message:"不能为空",trigger:"blur"}],mz:[{required:!0,message:"不能为空",trigger:"blur"}],sfzh:[{required:!0,message:"不能为空",trigger:"blur"}],telephone:[{required:!0,message:"不能为空",trigger:"blur"}],email:[{required:!0,message:"不能为空",trigger:"blur"}],zppath:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{init:function(e){var a=this;this.dataForm.id=e||0,this.visible=!0,this.imageUrl="",this.$http({url:this.$http.adornUrl("/ksbm/ksapxxb/select"),method:"get"}).then(function(e){var t=e.data;a.ksxmmcList=t.ksxmmclist}).then(function(){a.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.id&&a.$http({url:a.$http.adornUrl("/ksbm/ksbmxxb/info/"+a.dataForm.id),method:"get",params:a.$http.adornParams()}).then(function(e){var t=e.data;t&&0===t.code&&(a.dataForm.ksnd=t.ksbmxxb.ksnd,a.dataForm.ksxmid=t.ksbmxxb.ksxmid,a.dataForm.ksxmmc=t.ksbmxxb.ksxmmc,a.dataForm.sex=t.ksbmxxb.sex,a.dataForm.birth=t.ksbmxxb.birth,a.dataForm.mz=t.ksbmxxb.mz,a.dataForm.sfzh=t.ksbmxxb.sfzh,a.dataForm.telephone=t.ksbmxxb.telephone,a.dataForm.email=t.ksbmxxb.email,a.imageUrl="data:image/png;base64,"+t.ksbmxxb.zszp,a.dataForm.zppath=t.ksbmxxb.zppath)})})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){a&&e.$http({url:e.$http.adornUrl("/ksbm/ksbmxxb/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,ksnd:e.dataForm.ksnd,ksxmid:e.dataForm.ksxmid,ksxmmc:e.dataForm.ksxmmc,sex:e.dataForm.sex,birth:e.dataForm.birth,mz:e.dataForm.mz,sfzh:e.dataForm.sfzh,telephone:e.dataForm.telephone,email:e.dataForm.email,zppath:e.dataForm.zppath,zszp:e.dataForm.zszp})}).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})})},selectKsmc:function(e){var a;a=this.ksxmmcList.find(function(a){return a.value==e}),this.dataForm.ksnd=a.ksnd,this.dataForm.ksxmmc=a.label},handleBeforeUpload:function(e){"image/png"!==e.type&&"image/gif"!==e.type&&"image/jpg"!==e.type&&"image/jpeg"!==e.type&&this.$notify.warning({title:"警告",message:"请上传格式为image/png, image/gif, image/jpg, image/jpeg的图片"}),e.size/1024/1024/2>2&&this.$notify.warning({title:"警告",message:"图片大小必须小于2M"})},handleExceed:function(e,a){this.$message({showClose:!0,message:"这是一条消息提示"})},handleRemove:function(e,a){},handlePictureCardPreview:function(e){this.imageUrl=e.url},uploadFile:function(){this.$refs.upload.submit()},handleAvatarSuccess:function(e,a){this.imageUrl=URL.createObjectURL(a.raw),this.dataForm.zppath=e.filename},beforeAvatarUpload:function(e){var a="image/png"===e.type||"image/gif"===e.type||"image/jpg"===e.type||"image/jpeg"===e.type,t=e.size/1024/1024<2;return a||this.$message.error("上传图片只能是 JPG 格式!"),t||this.$message.error("上传图片大小不能超过 2MB!"),a&&t}}},s={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"考试名称",prop:"ksxmmc",hidden:"true"}},[t("el-input",{attrs:{placeholder:"",readonly:"true"},model:{value:e.dataForm.ksxmmc,callback:function(a){e.$set(e.dataForm,"ksxmmc",a)},expression:"dataForm.ksxmmc"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"考试名称",prop:"ksxmid"}},[t("el-select",{attrs:{label:"考试名称",placeholder:"请选择"},on:{change:e.selectKsmc},model:{value:e.dataForm.ksxmid,callback:function(a){e.$set(e.dataForm,"ksxmid",a)},expression:"dataForm.ksxmid"}},e._l(e.ksxmmcList,function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"考试年份",prop:"ksnd"}},[t("el-input",{attrs:{placeholder:"",disabled:!0},model:{value:e.dataForm.ksnd,callback:function(a){e.$set(e.dataForm,"ksnd",a)},expression:"dataForm.ksnd"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"性别",prop:"sex"}},[t("el-select",{attrs:{label:"性别",placeholder:"请选择"},model:{value:e.dataForm.sex,callback:function(a){e.$set(e.dataForm,"sex",a)},expression:"dataForm.sex"}},e._l(e.sexList,function(e){return t("el-option",{key:e.label,attrs:{label:e.label,value:e.label}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"出生日期",prop:"birth"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyyMMdd"},model:{value:e.dataForm.birth,callback:function(a){e.$set(e.dataForm,"birth",a)},expression:"dataForm.birth"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"民族",prop:"mz"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.mz,callback:function(a){e.$set(e.dataForm,"mz",a)},expression:"dataForm.mz"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"身份证号",prop:"sfzh"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.sfzh,callback:function(a){e.$set(e.dataForm,"sfzh",a)},expression:"dataForm.sfzh"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"联系电话",prop:"telephone"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.telephone,callback:function(a){e.$set(e.dataForm,"telephone",a)},expression:"dataForm.telephone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"email",prop:"email"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.email,callback:function(a){e.$set(e.dataForm,"email",a)},expression:"dataForm.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"照片",prop:"zszp"}},[e._e(),e._v(" "),t("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?t("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]};var l=t("46Yf")(r,s,!1,function(e){t("UZYF")},null,null);a.default=l.exports}});