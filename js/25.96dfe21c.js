(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"0a6e":function(i,t,e){"use strict";e.r(t);var a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("div",{staticClass:"text-h6 text-primary"},[i._v("\n    "+i._s(i.$t("unsubscribe_title"))+"\n  ")]),e("div",{staticClass:"row justify-center q-py-md"},[e("div",{staticClass:"col-xs-auto text-left"},[e("div",{staticClass:"q-px-xs"},[e("q-checkbox",{attrs:{color:"primary",label:i.$t("field_emailNotificationNews")},model:{value:i.userEmailNotificationDetails.emailNotificationNews,callback:function(t){i.$set(i.userEmailNotificationDetails,"emailNotificationNews",t)},expression:"userEmailNotificationDetails.emailNotificationNews"}})],1),e("div",{staticClass:"q-px-xs"},[e("q-checkbox",{attrs:{color:"primary",label:i.$t("field_emailNotificationTariffChanges")},model:{value:i.userEmailNotificationDetails.emailNotificationTariffChanges,callback:function(t){i.$set(i.userEmailNotificationDetails,"emailNotificationTariffChanges",t)},expression:"userEmailNotificationDetails.emailNotificationTariffChanges"}})],1),e("div",{staticClass:"q-px-xs"},[e("q-checkbox",{attrs:{color:"primary",label:i.$t("field_emailNotificationClientRequests")},model:{value:i.userEmailNotificationDetails.emailNotificationClientRequests,callback:function(t){i.$set(i.userEmailNotificationDetails,"emailNotificationClientRequests",t)},expression:"userEmailNotificationDetails.emailNotificationClientRequests"}})],1),e("div",{staticClass:"q-px-xs"},[e("q-checkbox",{attrs:{color:"primary",label:i.$t("field_emailNotificationProductPurchase")},model:{value:i.userEmailNotificationDetails.emailNotificationProductPurchase,callback:function(t){i.$set(i.userEmailNotificationDetails,"emailNotificationProductPurchase",t)},expression:"userEmailNotificationDetails.emailNotificationProductPurchase"}})],1),e("div",{staticClass:"q-px-xs"},[e("q-checkbox",{attrs:{color:"primary",label:i.$t("field_emailNotificationContest")},model:{value:i.userEmailNotificationDetails.emailNotificationContest,callback:function(t){i.$set(i.userEmailNotificationDetails,"emailNotificationContest",t)},expression:"userEmailNotificationDetails.emailNotificationContest"}})],1),e("div",{staticClass:"q-px-xs"},[e("q-checkbox",{attrs:{color:"primary",label:i.$t("field_emailNotificationLanding")},model:{value:i.userEmailNotificationDetails.emailNotificationLanding,callback:function(t){i.$set(i.userEmailNotificationDetails,"emailNotificationLanding",t)},expression:"userEmailNotificationDetails.emailNotificationLanding"}})],1)])]),e("div",{staticClass:"row items-start col-xs-12"},[e("q-btn",{staticClass:"col-xs-12",attrs:{outline:"",rounded:"",label:i.$t("action_save_email_notification_settings"),color:"primary"},on:{click:i.submit}})],1)])},o=[],n=(e("8e6e"),e("8a81"),e("ac6a"),e("cadf"),e("06db"),e("456d"),e("96cf"),e("c973")),s=e.n(n),c=e("9523"),l=e.n(c),r=e("2f62"),f=e("ee47"),u=e("1cb6");function m(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),e.push.apply(e,a)}return e}function N(i){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?m(Object(e),!0).forEach((function(t){l()(i,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(e,t))}))}return i}var p={name:"UnsubscribeEmailSettings",mixins:[f["a"]],props:{token:String,email:String},computed:N({},Object(r["c"])("auth",["userEmailNotificationDetails"])),methods:N({},Object(r["b"])("auth",["fetchEmailNotificationSettings","updateEmailNotificationSettings"]),{fetch:function(){var i=s()(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,this.fetchEmailNotificationSettings({variables:{token:this.token,email:this.email}});case 2:case"end":return i.stop()}}),i,this)})));function t(){return i.apply(this,arguments)}return t}(),submit:function(){var i=s()(regeneratorRuntime.mark((function i(){var t,e,a,o,n,s,c,l,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t=this.userEmailNotificationDetails,e=t.emailNotificationNews,a=t.emailNotificationContest,o=t.emailNotificationLanding,n=t.emailNotificationAppointment,s=t.emailNotificationTariffChanges,c=t.emailNotificationClientRequests,l=t.emailNotificationProductPurchase,r={token:this.token,email:this.email,emailNotificationNews:e,emailNotificationContest:a,emailNotificationLanding:o,emailNotificationAppointment:n,emailNotificationTariffChanges:s,emailNotificationClientRequests:c,emailNotificationProductPurchase:l},u["a"].logEvent("unsubscribe-email-settings","update-subscription",JSON.stringify(r),0,this.$router.currentRoute),i.next=5,this.updateEmailNotificationSettings({variables:r});case 5:this.$q.notify({type:"positive",message:this.$t("save_email_notification_settings_success_updated")});case 6:case"end":return i.stop()}}),i,this)})));function t(){return i.apply(this,arguments)}return t}()})},d=p,b=e("42e1"),h=Object(b["a"])(d,a,o,!1,null,null,null);t["default"]=h.exports}}]);