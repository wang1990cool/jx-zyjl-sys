webpackJsonp([33],{"kF+a":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("pnfl"),r=a("uFP8"),i={data:function(){return{dataForm:{year:"",courseName:"",order:"year desc, studentNum asc"},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1,scoreImportVisible:!1}},components:{AddOrUpdate:n.default,ScoreImport:r.default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/train/scoreSearch/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,order:this.dataForm.order,year:this.dataForm.year,courseName:this.dataForm.courseName})}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},getDataAllList:function(){this.dataForm.year="",this.dataForm.studentName="",this.dataForm.order="year desc, studentNum asc",this.getDataList()},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},sortChangeHandle:function(e){this.setOrder(e),this.getDataList()},setOrder:function(e){var t="ascending"==e.order?"ASC":"DESC",a=e.prop;this.order=a+" "+t},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},importHandle:function(){var e=this;this.scoreImportVisible=!0,this.$nextTick(function(){e.$refs.scoreImport.init()})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/train/score/delete"),method:"post",data:t.$http.adornData(a,!1)}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"年份",clearable:""},model:{value:e.dataForm.year,callback:function(t){e.$set(e.dataForm,"year",t)},expression:"dataForm.year"}})],1),e._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"课程名",clearable:""},model:{value:e.dataForm.courseName,callback:function(t){e.$set(e.dataForm,"courseName",t)},expression:"dataForm.courseName"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-zoom-in",type:"primary",plain:""},on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-zoom-out",type:"primary",plain:""},on:{click:function(t){e.getDataAllList()}}},[e._v("取消")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle,"sort-change":e.sortChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"year","header-align":"center",align:"center",width:"100",sortable:"",label:"年份"}}),e._v(" "),a("el-table-column",{attrs:{prop:"studentNum","header-align":"center",align:"center",width:"120",sortable:"",label:"学号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"studentName","header-align":"center",align:"center",width:"120",label:"学生姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"courseNum","header-align":"center",align:"center",sortable:"",label:"课程号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"courseName","header-align":"center",align:"center",sortable:"",label:"课程名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"studentScore","header-align":"center",align:"center",label:"学生成绩"}})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e(),e._v(" "),e.scoreImportVisible?a("score-import",{ref:"scoreImport",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},s=a("46Yf")(i,o,!1,null,null,null);t.default=s.exports}});