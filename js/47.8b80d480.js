(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{"31c2":function(t,e,a){},"3d3b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"row q-my-sm",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("div",{staticClass:"col-xs-12 q-px-xs"},[a("div",[a("img",{attrs:{alt:t.$t("img_logo_alt"),title:t.$t("img_logo_title"),src:"statics/logo.svg"}})]),a("div",[t._v("SEEYOUR.info")])]),t.getLoginError?a("div",{staticClass:"error"},[t._v(t._s(t.getLoginError.message))]):t._e(),a("div",{staticClass:"col-xs-12 text-weight-light text-left q-mx-xs q-py-sm"},[a("div",{staticClass:"text-grey q-pl-sm q-pb-xs"},[t._v("\n      "+t._s(t.$t("add_company_company_path"))+"\n    ")]),a("div",{staticClass:"q-pl-sm text-secondary"},[t._v("\n      "+t._s("https://seeyour.info/"+(t.form.companyPath||"..."))+"\n    ")])]),a("div",{staticClass:"col-xs-12"},[a("q-input",{attrs:{rounded:"",standout:"bg-grey-2 text-grey-14",label:t.$t("field_company_path")+"*",hint:t.$t("signup_company_company_path_hint"),maxlength:"50","bottom-slots":"",error:t.$v.form.companyPath.$error,"error-message":t.getErrorMessage(t.$v.form.companyPath,t.t)},model:{value:t.form.companyPath,callback:function(e){t.$set(t.form,"companyPath","string"===typeof e?e.trim():e)},expression:"form.companyPath"}})],1),a("div",{staticClass:"col-xs-12"},[a("q-input",{attrs:{rounded:"",standout:"bg-grey-2 text-grey-14",label:t.$t("field_name")+"*",hint:t.$t("field_name_hint"),maxlength:"255","bottom-slots":"",error:t.$v.form.companyName.$error,"error-message":t.getErrorMessage(t.$v.form.companyName,t.t)},model:{value:t.form.companyName,callback:function(e){t.$set(t.form,"companyName","string"===typeof e?e.trim():e)},expression:"form.companyName"}})],1),a("div",{staticClass:"col-xs-12 row q-mt-lg"},[a("q-btn",{staticClass:"col-xs-12 q-mb-xs signup-company-btn-signup",attrs:{rounded:"",type:"submit",label:t.$t("add_company_register_action"),color:"primary"}}),a("q-btn",{staticClass:"col-xs-12 q-mb-xs signup-company-btn-back-to-login",attrs:{rounded:"",outline:"",to:{name:"login-"+t.$q.lang.isoName},label:t.$t("action_cancel"),color:"grey-14"},on:{click:function(e){return t.$router.go(-1)}}})],1)])},n=[],o=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("7f7f"),a("96cf"),a("c973")),s=a.n(o),i=a("9523"),c=a.n(i),m=a("b06b"),p=a("1cb6"),l=a("2f62"),u=a("b5ae"),d=a("d59f"),y=a("e8f4"),g=a("96fb");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b={name:"Signup",mixins:[y["a"]],data:function(){return{t:this.$t.bind(this),form:{companyName:"",companyPath:""}}},computed:h({},Object(l["c"])("company",["companyAddError"])),methods:h({openURL:m["a"],getErrorMessage:d["a"],logClickEvent:function(t){p["a"].logEvent("add-company-page","click",t,0,this.$router.currentRoute)},handleSubmit:function(){var t=s()(regeneratorRuntime.mark((function t(){var e,a,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$v.form.$touch(),!this.$v.form.$error){t.next=3;break}return t.abrupt("return");case 3:return e={companyName:this.form.companyName,companyPath:this.form.companyPath,activityType:this.form.activityType},this.$q.loading.show(),t.prev=5,t.next=8,this.addIndividualCompany({variables:e});case 8:a=t.sent,this.companyAddError?this.$q.notify({type:"negative",message:this.$t(this.companyAddError)}):(p["a"].logEvent("add-company-page","click","add-action",0,this.$router.currentRoute),this.trackUserAction({actionName:"createMoreProjects"}),this.updateUserCompanyRole({companyId:a.id,companyName:a.name,role:"admin"}),this.$q.notify({type:"positive",message:this.$t("add_company_register_success")}),setTimeout((function(){r.$router.push({name:"individual-details",params:{companyId:a.id}})}),500)),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](5),this.$q.notify({type:"negative",message:this.$t("add_company_register_error")});case 15:this.$q.loading.hide();case 16:case"end":return t.stop()}}),t,this,[[5,12]])})));function e(){return t.apply(this,arguments)}return e}()},Object(l["b"])("company",["addIndividualCompany"]),{},Object(l["d"])("auth",["updateUserCompanyRole","setCurrentCompany"]),{},Object(l["b"])("auth",["trackUserAction"])),validations:function(){var t={form:{companyName:{required:u["required"],maxLength:Object(u["maxLength"])(255)},companyPath:{required:u["required"],minLength:Object(u["minLength"])(3),maxLength:Object(u["maxLength"])(50),urlPath:g["a"]}}};return t}},v=b,$=(a("fca3"),a("42e1")),_=Object($["a"])(v,r,n,!1,null,"7cc41313",null);e["default"]=_.exports},fca3:function(t,e,a){"use strict";var r=a("31c2"),n=a.n(r);n.a}}]);