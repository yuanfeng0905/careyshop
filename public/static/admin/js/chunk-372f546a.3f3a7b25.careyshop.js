(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-372f546a"],{"15da":function(e,t,n){"use strict";n("58a4")},4629:function(e,t,n){},"58a4":function(e,t,n){},cb99:function(e,t,n){"use strict";n.r(t);var i,o,r=n("5530"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"region-control",on:{click:function(t){e.visible=!0}}},[e._t("control"),n("el-dialog",{attrs:{width:"600px",visible:e.visible,"append-to-body":!0},on:{"update:visible":function(t){e.visible=t},open:e.handleOpen}},[e.visible?n("el-tree",{ref:"tree",staticStyle:{"margin-top":"-15px"},attrs:{"node-key":"region_id",data:e.treeData,props:e.treeProps,"default-checked-keys":e.checkedKeys,"close-on-click-modal":!1,"show-checkbox":!0}}):e._e(),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.visible=!1}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleConfirm}},[e._v("确定")])],1)],1)],2)},l=[],s=(n("a9e3"),n("ca00")),c=n("f86b"),d={name:"cs-storage-all",props:{checkedKeys:{type:Array,required:!1,default:function(){return[]}},regionId:{type:Number,required:!1,default:1}},data:function(){return{visible:!1,treeData:[],treeProps:{label:"region_name",children:"children"}}},methods:{handleOpen:function(){var e=this;this.treeData.length>0||Object(c["d"])({region_id:this.regionId}).then((function(t){var n={key:"parent_id",value:[e.regionId]};e.treeData=s["a"].formatDataToTree(t.data,"region_id","parent_id",n)}))},handleConfirm:function(){this.$refs.tree&&this.$emit("confirm",this.$refs.tree.getCheckedKeys())}}},u=d,f=(n("ebe3"),n("2877")),h=Object(f["a"])(u,a,l,!1,null,"b8e4298e",null),p=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"region-control",on:{click:function(t){e.visible=!0}}},[e._t("control"),n("el-dialog",{attrs:{width:"600px",visible:e.visible,"append-to-body":!0,"close-on-click-modal":!1},on:{"update:visible":function(t){e.visible=t}}},[e.visible?n("el-tree",{ref:"tree",staticStyle:{"margin-top":"-15px"},attrs:{"node-key":"region_id",props:e.treeProps,load:e.loadNode,"show-checkbox":!0,lazy:!0}}):e._e(),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.visible=!1}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleConfirm}},[e._v("确定")])],1)],1)],2)},m=[],g={name:"cs-region-lazy",props:{regionId:{type:Number,required:!1,default:1}},data:function(){return{visible:!1,treeProps:{label:"region_name",children:"children"}}},methods:{loadNode:function(e,t){this.getRegionData(e.level?e.key:this.regionId,t)},getRegionData:function(e,t){Object(c["c"])({region_id:e}).then((function(e){t(e.data||[])}))},handleConfirm:function(){this.$refs.tree&&this.$emit("confirm",this.$refs.tree.getCheckedKeys())}}},v=g,y=(n("15da"),Object(f["a"])(v,b,m,!1,null,"2b2b8fa4",null)),k=y.exports,_={name:"cs-region",props:{value:{type:Array,required:!1,default:function(){return[]}},type:{type:String,required:!1,default:"all"}},computed:{component:function(){return"all"===this.type?p:"lazy"===this.type?k:"div"}},render:function(e){var t=this,n=[this.$slots.default];return this.$slots.control&&n.push(e("template",{slot:"control"},[this.$slots.control])),e("div",{},[e(this.component,{ref:"region",props:Object(r["a"])({checkedKeys:this.value},this.$attrs),on:{confirm:function(e){t.$emit("input",e),t.$refs.region.visible=!1}}},n)])}},O=_,j=Object(f["a"])(O,i,o,!1,null,null,null);t["default"]=j.exports},ebe3:function(e,t,n){"use strict";n("4629")},f86b:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return u}));var i=n("5530"),o=n("bc07"),r="/v1/region";function a(e){return Object(o["a"])({url:r,method:"post",data:Object(i["a"])({method:"add.region.item"},e)})}function l(e){return Object(o["a"])({url:r,method:"post",data:Object(i["a"])({method:"set.region.item"},e)})}function s(e){return Object(o["a"])({url:r,method:"post",data:{method:"del.region.list",region_id:e}})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(o["a"])({url:r,method:"post",data:Object(i["a"])({method:"get.region.list"},e)})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(o["a"])({url:r,method:"post",data:Object(i["a"])({method:"get.region.son.list"},e)})}function u(e){return Object(o["a"])({url:r,method:"post",data:{method:"set.region.index",region_id:e}})}}}]);