_N_E=("object"!==typeof self?self:this.webpackJsonp_N_E="object"!==typeof self?self:this.webpackJsonp_N_E||[]).push([[48],{"6G68":function(e,t){e.exports=function(e,t){let n,r,o="",s=0;try{n=JSON.parse(e.replace(/\.0/g,".1")),r=n}catch(d){return{go:"",error:d.message}}return a("type "+(t=f(t||"AutoGenerated"))+" "),u(r),{go:o};function u(e){let t;if("object"===typeof e&&null!==e)if(Array.isArray(e)){let n,r,o=e.length;for(n=0;n<o;n++){const t=l(e[n]);if(r){if(r!==t&&(r=p(t,r),"interface{}"===r))break}else r=t}if(a("[]"),"struct"===r){let r,s;const u={};for(n=0;n<o;n++)for(r in s=Object.keys(e[n]),s)t=s[r],t in u||(u[t]={value:e[n][t],count:0}),u[t].count++;s=Object.keys(u);let c={},a={};for(r in s){t=s[r];let e=u[t];c[t]=e.value,a[t]=e.count!==o}i(c,a)}else"slice"===r?u(e[0]):a(r||"interface{}")}else i(e);else a(l(e))}function i(e,t){a("struct {\n"),++s;const n=Object.keys(e);for(const r in n){const o=n[r];c(s),a(f(o)+" "),u(e[o]),a(' `json:"'+o),t&&!0===t[o]&&a(",omitempty"),a('"`\n')}c(--s),a("}")}function c(e){for(let t=0;t<e;t++)o+="\t"}function a(e){o+=e}function f(e){if(!e)return"";if(e.match(/^\d+$/))e="Num"+e;else if(e.charAt(0).match(/\d/)){e={0:"Zero_",1:"One_",2:"Two_",3:"Three_",4:"Four_",5:"Five_",6:"Six_",7:"Seven_",8:"Eight_",9:"Nine_"}[e.charAt(0)]+e.substr(1)}return function(e){const t=["API","ASCII","CPU","CSS","DNS","EOF","GUID","HTML","HTTP","HTTPS","ID","IP","JSON","LHS","QPS","RAM","RHS","RPC","SLA","SMTP","SSH","TCP","TLS","TTL","UDP","UI","UID","UUID","URI","URL","UTF8","VM","XML","XSRF","XSS"];return e.replace(/(^|[^a-zA-Z])([a-z]+)/g,(function(e,n,r){return t.indexOf(r.toUpperCase())>=0?n+r.toUpperCase():n+r[0].toUpperCase()+r.substr(1).toLowerCase()})).replace(/([A-Z])([a-z]+)/g,(function(e,n,r){return t.indexOf(n+r.toUpperCase())>=0?(n+r).toUpperCase():n+r}))}(e).replace(/[^a-z0-9]/gi,"")||"NAMING_FAILED"}function l(e){if(null===e)return"interface{}";switch(typeof e){case"string":return/\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(\+\d\d:\d\d|Z)/.test(e)?"time.Time":"string";case"number":return e%1===0?e>-2147483648&&e<2147483647?"int":"int64":"float64";case"boolean":return"bool";case"object":return Array.isArray(e)?"slice":"struct";default:return"interface{}"}}function p(e,t){return"float"===e.substr(0,5)&&"int"===t.substr(0,3)||"int"===e.substr(0,3)&&"float"===t.substr(0,5)?e:"interface{}"}}},UzN2:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("nKUr"),o=n("sN8P"),s=n("q1tI"),u=n("6G68"),i=n.n(u),c=n("FfZQ"),a=n.n(c);function f(){var e=Object(s.useCallback)((function(e){var t=e.value;return a()(i()(t).go)}),[]);return Object(r.jsx)(o.a,{transformer:e,editorTitle:"JSON",editorLanguage:"json",resultTitle:"Go",resultLanguage:"go"})}},ppxy:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="ppxy"},sC8h:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/json-to-go",function(){return n("UzN2")}])}},[["sC8h",1,2,22,0,3]]]);