(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,n){e.exports=n(322)},121:function(e,t,n){},124:function(e,t,n){},126:function(e,t,n){},128:function(e,t,n){},292:function(e,t,n){},294:function(e,t,n){},296:function(e,t,n){},298:function(e,t,n){},300:function(e,t,n){},302:function(e,t,n){},304:function(e,t,n){},306:function(e,t,n){},308:function(e,t,n){},310:function(e,t,n){},312:function(e,t,n){},314:function(e,t,n){},316:function(e,t,n){},318:function(e,t,n){},320:function(e,t,n){},322:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(16),r=n.n(l),o=n(1),c=(n(121),n(4)),u=n(5);function s(){var e=Object(c.a)(["\n  position: relative;\n  padding: 13px 2px;\n  z-index: ",';\n\n  &::after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n\n']);return s=function(){return e},e}var d=u.b.div(s(),function(e){return e.zIndex}),p=n(3);function b(){var e=Object(c.a)(["\n    width: 37.2%;\n    margin-right: 0%;\n  "]);return b=function(){return e},e}function f(){var e=Object(c.a)(["\n    width: 60.5%;\n    margin-right: 2%;\n  "]);return f=function(){return e},e}function m(){var e=Object(c.a)(["\n  position: relative;\n  float: left;\n\n  @media screen and (max-width: 980px) {\n    width: 100%;\n    margin-right: 0%;\n    margin-bottom: 30px;\n  }\n\n\n  ","\n\n  ","\n\n"]);return m=function(){return e},e}var v=u.b.div(m(),function(e){return"left"===e.side&&Object(u.a)(f())},function(e){return"right"===e.side&&Object(u.a)(b())});v.propTypes={side:p.PropTypes.string.isRequired};var h=v;function E(){var e=Object(c.a)(["\n    background-color: transparent;\n  "]);return E=function(){return e},e}function g(){var e=Object(c.a)(['\n  padding: 26px;\n  background: #e7e7e7;\n\n  &:not( :first-child ) {\n    margin-top: 30px;\n  }\n\n\n  &::after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n\n  ',"\n\n"]);return g=function(){return e},e}var O=u.b.section(g(),function(e){return"light"===e.background&&Object(u.a)(E())}),y=n(21),C=n(109),j=n(24),w=n(11),S=n(7),x={saved:!0,id:null,popup:{}},N={name:"",title:"",description:"",backgroundColor:"#ffffff",titleColor:"#4b2e83",descriptionColor:"#4b2e83",bodyColor:"#444444",borderWidth:"1px",borderStyle:"none",borderColor:"#4b2e83",position:"top",formId:"0",saveToUsermeta:!0,rules:{categories:[],tags:[],postTypes:[]}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POPUP":return Object(S.a)({},e,{saved:!1,id:t.nextId,popup:N});case"SAVE_POPUP":return Object(S.a)({},e,{saved:!0});case"DELETE_POPUP":return Object(S.a)({},x);case"SELECT_POPUP":return Object(S.a)({},e,{saved:!0,id:t.id,popup:t.popup});case"CLEAR_VIEW":return Object(S.a)({},e,x);case"UPDATE_FIELD":return Object(S.a)({},e,{saved:!1,popup:Object(S.a)({},e.popup,Object(w.a)({},t.label,t.value))});case"ADD_RULE":return Object(S.a)({},e,{saved:!1,popup:Object(S.a)({},e.popup,{rules:Object(S.a)({},e.popup.rules,Object(w.a)({},t.label,[].concat(Object(j.a)(e.popup.rules[t.label]),[t.newRule])))})});case"REMOVE_RULE":return Object(S.a)({},e,{saved:!1,popup:Object(S.a)({},e.popup,{rules:Object(S.a)({},e.popup.rules,Object(w.a)({},t.label,[].concat(Object(j.a)(e.popup.rules[t.label].slice(0,t.index)),Object(j.a)(e.popup.rules[t.label].slice(t.index+1)))))})});case"UPDATE_RULE":var n=[],a=e.popup.rules[t.label];return n="&"===t.value||"|"===t.value?a.map(function(e,n){return n===t.index?t.value+e.slice(1):e}):"!"===t.value||"$"===t.value?a.map(function(e,n){return n===t.index?e[0]+t.value+e.slice(2):e}):a.map(function(e,n){return n===t.index?e.slice(0,2)+t.value:e}),Object(S.a)({},e,{saved:!1,popup:Object(S.a)({},e.popup,{rules:Object(S.a)({},e.popup.rules,Object(w.a)({},t.label,n))})});default:return e}},P=n(23);function T(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_POPUP":return Object(S.a)({},e,Object(w.a)({},t.id,t.popup));case"DELETE_POPUP":var n=""+t.id,a=(e[n],Object(P.a)(e,[n].map(T)));return Object(S.a)({},a);default:return e}},D={NameSelect:"OPEN",NewButton:"OPEN",SaveButton:"OPEN",DelButton:"OPEN",StylingSection:"CLOSED",RulesSection:"CLOSED",TextSection:"CLOSED"},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY":return Object(S.a)({},e,t.targets);default:return e}},R=Object(y.c)({view:k,popups:I,visibility:L}),U=Object(y.d)(R,Object(y.a)(C.a)),_=function(e){return{type:"SET_VISIBILITY",targets:e}},A=function(e,t,n){console.log("handleTransition fired.");var a="CLOSED"===n.TextSection&&"CLOSED"===n.StylingSection&&"CLOSED"===n.RulesSection,i="OPEN"===n.TextSection&&"OPEN"===n.StylingSection&&"OPEN"===n.RulesSection;if(a&&t(),i){e(_({TextSection:"CLOSING",StylingSection:"CLOSING",RulesSection:"CLOSING"}));var l=U.subscribe(function(){var e=U.getState().visibility;"CLOSED"===e.TextSection&&"CLOSED"===e.StylingSection&&"CLOSED"===e.RulesSection&&(l(),t())})}},F=function(){return{type:"CLEAR_VIEW"}},B=function(e,t){return{type:"UPDATE_FIELD",value:e,label:t}},M=function(e,t,n){return{type:"UPDATE_RULE",value:e,label:t,index:n}};function G(){var e=Object(c.a)(["\n    pointer-events: none;\n    opacity: 0.6;\n  "]);return G=function(){return e},e}function V(){var e=Object(c.a)(["\n  min-width: 200px;\n  border: 1.5px solid #909090;\n\n  ","\n"]);return V=function(){return e},e}var W={display:"inline-block"},$=u.b.select(V(),function(e){return e.disabled&&Object(u.a)(G())}),z=Object(o.b)(function(e){return{view:e.view,visibility:e.visibility,popups:e.popups}},function(e){return{handleChange:function(t,n,a,i){t.target.blur();var l=function(e,t){var n=e.options.selectedIndex;console.log("index is ",n);var a=e.options[n].getAttribute("thiskey");console.log("strId is ",a);var i="0"===a?null:Number(a)-1;return console.log("getIdByIndex returned a popupid of ",i),i}(t.target);(n||window.confirm("Popup is not saved.  Load selected popup anyway?"))&&e(function(e,t,n){return function(a){A(a,function(){null===e?a(F()):(a(function(e,t){return{type:"SELECT_POPUP",id:e,popup:t}}(e,n[e])),a(_({TextSection:"OPENING",StylingSection:"OPENING",RulesSection:"OPENING"})))},t)}}(l,a,i))}}})(function(e){var t=e.view,n=e.visibility,a=e.popups,l=e.handleChange,r=t.saved,o=t.popup.name,c=Object.keys(a).map(function(e){var t=Number(e)+1;return i.a.createElement("option",{key:t,thiskey:t,value:a[e].name},a[e].name)}),u="FADE"===n.NameSelect;return i.a.createElement("div",{style:W},i.a.createElement("label",{htmlFor:"NameSelect"},"Select a popup:"),i.a.createElement($,{id:"NameSelect",disabled:u,value:null===t.id?"0":o,onChange:function(e){return l(e,r,n,a)}},i.a.createElement("option",{key:"0",thiskey:"0",value:"0",hidden:!!c},"---------"),c))});function J(){var e=Object(c.a)(["\n    background-color: blue;\n    color: white;\n  "]);return J=function(){return e},e}function Y(){var e=Object(c.a)(["\n    float: ",";\n  "]);return Y=function(){return e},e}function q(){var e=Object(c.a)(["\n    width: ",";\n  "]);return q=function(){return e},e}function X(){var e=Object(c.a)(["\n    pointer-events: none;\n    opacity: 0.6;\n  "]);return X=function(){return e},e}function H(){var e=Object(c.a)(["\n  display: inline-block;\n  margin-left: 20px;\n  border: 2px solid transparent;\n  transition: 0.2s ease-out;\n\n  &:hover, &:focus {\n    border: 2px solid black;\n  }\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n"]);return H=function(){return e},e}var K=u.b.button(H(),function(e){return e.disabled&&Object(u.a)(X())},function(e){return e.width&&Object(u.a)(q(),e.width)},function(e){return e.float&&Object(u.a)(Y(),e.float)},function(e){return e.primary&&Object(u.a)(J())}),Q=Object(o.b)(function(e){return{view:e.view,visibility:e.visibility,popups:e.popups}},function(e){return{handleClick:function(t,n,a,i){t.target.blur();var l=document.getElementById("popup-name");null!==l&&l.focus(),(n||window.confirm("Your current popup is not saved.  Add a new popup anyway?"))&&e(function(e,t){return function(n){A(n,function(){n(function(e){return{type:"ADD_POPUP",nextId:e}}(t)),n(_({TextSection:"OPENING",StylingSection:"OPENING",RulesSection:"OPENING"}))},e)}}(a,i))}}})(function(e){var t=e.view,n=e.visibility,a=e.popups,l=e.handleClick,r=function(e){var t=Object.keys(e);if(0===t.length)return 0;var n=t.map(function(e){return Number(e)});return Math.max.apply(Math,Object(j.a)(n))+1}(a),o=""===t.popup.name;return"OPEN"===n.NewButton?i.a.createElement(K,{disabled:o,onClick:function(e){return l(e,t.saved,n,r)}},"Add a New Popup"):null}),Z=Object(o.b)(function(e){return{visibility:e.visibility.SaveButton,view:e.view}},function(e){return{handleClick:function(t,n){t.target.blur(),""===n.popup.name?(alert("Please give this popup a name before saving it."),document.getElementById("popup-name").focus()):e(function(e){return{type:"SAVE_POPUP",id:e.id,popup:e.popup}}(n))}}})(function(e){var t=e.visibility,n=e.view,a=e.handleClick,l=!0===n.saved,r=l?"Saved":"Save";return"OPEN"===t?i.a.createElement(K,{width:"56px",disabled:l,onClick:function(e){return a(e,n)}},r):null}),ee=Object(o.b)(function(e){return{view:e.view,visibility:e.visibility,popups:e.popups}},function(e){return{handleClick:function(t,n,a,i,l){t.target.blur();var r=""===l?"this":'the "'+l+'"';window.confirm("Are you sure you want to delete "+r+" popup?")&&e(function(e,t,n){return console.log("deleted id is ",e),function(n){A(n,function(){n(function(e){return{type:"DELETE_POPUP",id:e}}(e))},t)}}(n,a))}}})(function(e){var t=e.view,n=e.visibility,a=e.popups,l=e.handleClick,r=!0===t.saved&&null===t.id;return"OPEN"===n.DelButton?i.a.createElement(K,{float:"right",disabled:r,onClick:function(e){return l(e,t.id,n,a,t.popup.name)}},"Delete This Popup"):null}),te=(n(124),function(){return i.a.createElement(O,{background:"light"},i.a.createElement(h,{side:"left"},i.a.createElement(z,null),i.a.createElement(Z,null),i.a.createElement(Q,null)),i.a.createElement(h,{side:"right"},i.a.createElement(ee,null)))});function ne(){var e=Object(c.a)(['\n  position: relative;\n\n  &:not( :last-child ) {\n    padding-bottom: 30px;\n  }\n\n  &::after {\n    content: "";\n    display: table;\n    clear: both;\n  }\n\n']);return ne=function(){return e},e}var ae=u.b.div(ne()),ie=Object(o.b)(function(e,t){return{label:t.label,text:t.text,placeholder:t.placeholder,fieldInfo:t.fieldInfo,active:"CLOSED"!==e.visibility.TextSection,view:e.view}},function(e){return{handleChange:function(t,n){e(B(t.target.value,n))}}})(function(e){var t=e.type,n=void 0===t?"text":t,a=e.label,l=e.text,r=e.placeholder,o=e.autoFocus,c=e.fieldInfo,u=e.view,s=e.handleChange,d="popup-"+a,p=u.popup[a];return i.a.createElement(ae,null,i.a.createElement("div",{className:"text-label"},i.a.createElement("label",{htmlFor:d},l,":")),i.a.createElement("div",{className:"TextField"},i.a.createElement("input",{id:d,type:n,name:d,value:p,autoFocus:o&&""===p,onChange:function(e){return s(e,a)},placeholder:r}),i.a.createElement("span",{className:"field-info"},c)))}),le=Object(o.b)(function(e,t){return{label:t.label,text:t.text,placeholder:t.placeholder,fieldInfo:t.fieldInfo,active:"CLOSED"!==e.visibility.TextSection,view:e.view}},function(e){return{handleChange:function(t,n){e(B(t.target.value,n))}}})(function(e){var t=e.label,n=e.text,a=e.placeholder,l=e.autoFocus,r=e.fieldInfo,o=e.view,c=e.handleChange,u="popup-"+t,s=o.popup[t];return i.a.createElement(ae,null,i.a.createElement("div",{className:"text-label"},i.a.createElement("label",{htmlFor:u},n,":")),i.a.createElement("div",{className:"TextField TextareaField"},i.a.createElement("textarea",{id:u,name:u,autoFocus:l&&""===s,value:s,onChange:function(e){return c(e,t)},placeholder:a}),i.a.createElement("span",{className:"field-info"},r)))}),re=n(67),oe=function(e){var t=e.visible,n=e.sectionName,a=Object(P.a)(e,["visible","sectionName"]);return i.a.createElement(re.a,{config:re.b.fast,items:t,from:{opacity:0,transform:"scale(0)"},enter:{opacity:1,transform:"scale(1)"},leave:{opacity:0,transform:"scale(0)"},onDestroyed:function(){t?U.dispatch(_(Object(w.a)({},n,"OPEN"))):U.dispatch(_(Object(w.a)({},n,"CLOSED")))}},function(e){return e&&function(e){return i.a.createElement(O,{style:e},a.children)}})},ce=(n(126),Object(o.b)(function(e){return{visibility:e.visibility}},null)(function(e){var t=e.visibility,n="OPENING"===t.StylingSection||"OPEN"===t.StylingSection;return i.a.createElement(oe,{visible:n,sectionName:"TextSection"},i.a.createElement("h2",null,"Text"),i.a.createElement(ie,{label:"name",text:"Popup Name",placeholder:"unnamed",autoFocus:!0,fieldInfo:"This name will only serve as an identifier in the dropdown menu."}),i.a.createElement(ie,{label:"title",text:"Display Title",placeholder:"please choose a title",fieldInfo:"This title will show at the top of the popup."}),i.a.createElement(le,{label:"description",text:"Description",placeholder:"all about the popup",fieldInfo:"This will show beneath the heading, but before the form itself."}))}));n(128);function ue(){var e=Object(c.a)(['\n  display: block;\n  width: 90px;\n  margin-right: 20px;\n\n  // &::after {\n  //   content: "";\n  //   display: table;\n  //   clear: both;\n  // }\n\n']);return ue=function(){return e},e}var se=u.b.h5(ue()),de=function(e){var t=e.heading,n=void 0===t?"":t,a=e.children,l=n.length?i.a.createElement(se,null,n):"";return i.a.createElement(ae,null,l,a)},pe=n(40),be=n(41),fe=n(43),me=n(42),ve=n(44),he=n(15),Ee=n(110),ge=n(111);n(292);function Oe(){var e=Object(c.a)(["\n  position: absolute;\n  z-index: 99999;\n"]);return Oe=function(){return e},e}var ye=u.b.div(Oe()),Ce=function(e){function t(e){var n;return Object(pe.a)(this,t),(n=Object(fe.a)(this,Object(me.a)(t).call(this,e))).handleClickOutside=function(e){console.log("onClickOutside() method called on ",e),n.props.onClickOff(e)},n.state={showModal:!1},n.handleClickOutside=n.handleClickOutside.bind(Object(he.a)(Object(he.a)(n))),n}return Object(ve.a)(t,e),Object(be.a)(t,[{key:"render",value:function(){var e=this.props,t=e.color,n=e.onChangeComplete;return i.a.createElement(ye,null,i.a.createElement(ge.ChromePicker,{disableAlpha:!0,color:t,onChangeComplete:function(e){return n(e)}}))}}]),t}(a.Component),je=Object(Ee.a)(Ce);function we(){var e=Object(c.a)(["\n  display: inline-block;\n  width: 70px;\n  text-align: right;\n  padding-right: 9px;\n  font-size: 13px;\n  font-weight: 400;\n"]);return we=function(){return e},e}function Se(){var e=Object(c.a)(["\n  display: inline-block;\n  width: 180px;\n  vertical-align: middle;\n  margin-top: 12px;\n"]);return Se=function(){return e},e}var xe=u.b.div(Se()),Ne=u.b.div(we()),ke=function(e){var t=e.title,n=e.children,a=e.htmlFor,l=e.key;Object(P.a)(e,["title","children","htmlFor","key"]);return i.a.createElement(xe,{key:l},i.a.createElement(Ne,null,i.a.createElement("label",{htmlFor:a},t,":")),n)},Pe=(n(294),function(e){function t(e){var n;return Object(pe.a)(this,t),(n=Object(fe.a)(this,Object(me.a)(t).call(this,e))).timerMethod=function(){var e=void 0;return function(t,n){void 0===e?e=setTimeout(t,n):e.clearTimeout()}},n.state={showModal:!1},n.toggleModal=n.toggleModal.bind(Object(he.a)(Object(he.a)(n))),n.handleClick=n.handleClick.bind(Object(he.a)(Object(he.a)(n))),n}return Object(ve.a)(t,e),Object(be.a)(t,[{key:"toggleModal",value:function(){this.setState({showModal:!this.state.showModal})}},{key:"handleClick",value:function(e){console.log("handleClick's event  was ",e),this.timerMethod()(this.toggleModal,100)}},{key:"render",value:function(){var e=this,t=this.props,n=t.view,a=t.label,l=t.title,r=t.handleChangeComplete,o=n.popup[a],c={border:"4px solid "+o},u=i.a.createElement(je,{color:o,onChangeComplete:function(e){return r(e,a)},onClickOff:function(t){return e.handleClick(t)}});return i.a.createElement(ke,{title:l},i.a.createElement("div",{className:"ColorPicker"},i.a.createElement("div",{style:c,onClick:function(t){if(!1!==e.state.showModal)return!1;e.handleClick(t)}},i.a.createElement("span",null,o)),this.state.showModal&&u))}}]),t}(i.a.Component)),Te=Object(o.b)(function(e,t){return{title:t.title,label:t.label,id:t.id,view:e.view}},function(e){return{handleChangeComplete:function(t,n){e(B(t.hex,n))}}})(Pe),Ie=(n(296),Object(o.b)(function(e,t){return{title:t.title,label:t.label,id:t.id,options:t.options,view:e.view}},function(e){return{handleChange:function(t,n){e(B(t.target.value,n))}}})(function(e){var t=e.title,n=e.label,a=e.id,l=e.options,r=e.view,o=e.handleChange,c=r.popup[n],u=l.map(function(e,t){return i.a.createElement("option",{key:t,value:e},e)});return i.a.createElement(ke,{title:t,htmlFor:a},i.a.createElement("div",{className:"OptionPicker"},i.a.createElement("select",{id:a,name:a,value:c,onChange:function(e){return o(e,n)}},u)))})),De=(n(298),Object(o.b)(function(e,t){return{title:t.title,label:t.label,id:t.id,options:t.options,view:e.view}},function(e){return{handleChange:function(t,n){e(B(t.target.value,n))}}})(function(e){e.title;var t=e.label,n=(e.id,e.options),a=e.view,l=e.handleChange,r=a.popup[t],o=n.map(function(e,n){return i.a.createElement("div",{className:"field-container",key:n},i.a.createElement("label",null,i.a.createElement("input",{type:"radio",key:n,value:e,checked:e===r,onChange:function(e){l(e,t)}}),e[0].toUpperCase()+e.slice(1)))});return i.a.createElement("div",{className:"PositionPicker"},o)})),Le=Object(o.b)(function(e){return{visibility:e.visibility}},null)(function(e){var t=e.visibility,n="OPENING"===t.StylingSection||"OPEN"===t.StylingSection;return i.a.createElement(oe,{visible:n,sectionName:"StylingSection"},i.a.createElement("h2",null,"Styling"),i.a.createElement(de,{heading:"Background"},i.a.createElement(Te,{title:"Color",label:"backgroundColor",id:"background-color"})),i.a.createElement(de,{heading:"Text Color"},i.a.createElement(Te,{title:"Title",label:"titleColor",id:"title-color"}),i.a.createElement(Te,{title:"Description",label:"descriptionColor",id:"description-color"}),i.a.createElement(Te,{title:"Body",label:"bodyColor",id:"body-color"})),i.a.createElement(de,{heading:"Border"},i.a.createElement(Ie,{title:"Width",label:"borderWidth",id:"border-width",options:["0.5px","1px","2px","3px","4px"]}),i.a.createElement(Ie,{title:"Style",label:"borderStyle",id:"border-style`",options:["none","solid","double","dashed","dotted","groove","ridge","inset","outset"]}),i.a.createElement(Te,{title:"Color",label:"borderColor",id:"border-color"})),i.a.createElement(de,{heading:"Position"},i.a.createElement(De,{label:"position",id:"position",options:["top","bottom","left","right","center"]})))}),Re=(n(300),Object(o.b)(function(e,t){return{label:t.label,id:t.id,options:t.options,view:e.view}},function(e){return{handleChange:function(t,n){e(B(t.target.value,n))}}})(function(e){var t=e.label,n=e.id,a=e.options,l=e.view,r=e.handleChange,o=l.popup[t],c=a.map(function(e,t){return i.a.createElement("option",{key:t,value:e},e)});return i.a.createElement("div",{className:"FormPicker"},i.a.createElement("select",{id:n,name:n,value:o,onChange:function(e){return r(e,t)}},i.a.createElement("option",{value:"0"},"---------"),c))})),Ue=(n(302),Object(o.b)(function(e){return{value:e.view.popup.saveToUsermeta}},function(e){return{handleChange:function(t){e(B(t.target.checked,"saveToUsermeta")),e(_({SaveButton:"OPEN"}))}}})(function(e){var t=e.value,n=e.handleChange;return i.a.createElement("div",{className:"SaveToUsermeta"},i.a.createElement("input",{type:"checkbox",id:"save-to-usermeta",name:"save-to-usermeta",checked:t,value:t,onChange:function(e){n(e)}}),i.a.createElement("div",{className:"description"},i.a.createElement("label",{htmlFor:"save-to-usermeta"},"Save form responses in the 'wp_usermeta' table?"),i.a.createElement("p",{className:"field-info"},"Responses will be saved in each user's metadata."),i.a.createElement("p",{className:"field-info"},"Enables easier access for third-party plugins.")))})),_e=(n(304),n(306),n(308),Object(o.b)(null,function(e){return{handleChange:function(t,n,a){e(M(t.target.value,n,a))}}})(function(e){var t=e.label,n=e.value,a=void 0===n?"|":n,l=e.index,r=e.handleChange;return i.a.createElement("div",{className:"AndOrRadios"},i.a.createElement("label",{className:"|"===a?"checked":""},i.a.createElement("input",{type:"radio",value:"|",name:"and-or-"+l,checked:"|"===a,onChange:function(e){return r(e,t,l)}}),"OR"),i.a.createElement("label",{className:"&"===a?"checked":""},i.a.createElement("input",{type:"radio",value:"&",name:"and-or-"+l,checked:"&"===a,onChange:function(e){return r(e,t,l)}}),"AND"))})),Ae=(n(310),Object(o.b)(null,function(e){return{handleChange:function(t,n,a){e(M(t.target.value,n,a))}}})(function(e){var t=e.label,n=e.value,a=void 0===n?"$":n,l=e.index,r=e.handleChange;return i.a.createElement("div",{className:"IsIsntRadios"},i.a.createElement("label",{className:"$"===a?"checked":""},i.a.createElement("input",{type:"radio",value:"$",name:t+"-is-isnt-"+l,checked:"$"===a,onChange:function(e){return r(e,t,l)}}),"is..."),i.a.createElement("label",{className:"!"===a?"checked":""},i.a.createElement("input",{type:"radio",value:"!",name:t+"-is-isnt-"+l,checked:"!"===a,onChange:function(e){return r(e,t,l)}}),"isn't..."))})),Fe=(n(312),Object(o.b)(null,function(e){return{handleChange:function(t,n,a){e(M(t.target.value,n,a))}}})(function(e){var t=e.label,n=e.value,a=void 0===n?"":n,l=e.index,r=e.options,o=e.handleChange,c=r.map(function(e,t){return i.a.createElement("option",{key:t,value:e},e)});return i.a.createElement("div",{className:"TargetSelector"},i.a.createElement("select",{value:a,onChange:function(e){return o(e,t,l)}},i.a.createElement("option",{value:"***"},"---------"),c))})),Be=(n(314),function(e){var t=e.heading,n=e.error,a="Warning: you have selected the same ".concat(t," twice.  This will result in an error.");return n?i.a.createElement("div",{className:"RuleWarning"},i.a.createElement("span",null,a)):null}),Me=(n(316),Object(o.b)(null,function(e){return{handleClick:function(t,n){window.confirm("Are you sure you want to remove this rule?")&&e(function(e,t){return{type:"REMOVE_RULE",label:e,index:t}}(t,n))}}})(function(e){var t=e.label,n=e.index,a=e.handleClick;return i.a.createElement("div",{className:"RemoveButton"},i.a.createElement("button",{onClick:function(){return a(t,n)}},"X"))})),Ge=(n(318),function(e){var t=e.heading,n=e.label,a=e.error,l=e.index,r=e.rule,o=e.options,c=r[0],u=r[1],s=r.slice(2),d="categories"!==n||l>0?i.a.createElement("div",{className:"row narrow"},i.a.createElement(_e,{label:n,value:c,index:l})):null;return i.a.createElement("div",{className:"SingleRule"},d,i.a.createElement("div",{className:"row"},i.a.createElement(Ae,{label:n,value:u,index:l}),i.a.createElement(Fe,{label:n,value:s,index:l,options:o}),i.a.createElement(Be,{heading:t,error:a}),i.a.createElement(Me,{label:n,index:l})))}),Ve=(n(320),Object(o.b)(function(e,t){return{text:t.text,label:t.label,popup:e.view.popup}},function(e){return{handleClick:function(t,n,a){(0===n.length?"":n[n.length-1].slice(2))===a.slice(2)?alert("Please select a target for the last rule before adding another rule."):e(function(e,t){return{type:"ADD_RULE",label:e,newRule:t}}(t,a))}}})(function(e){var t=e.text,n=e.label,a=e.popup,l=e.handleClick,r=a.rules?a.rules[n]:[];return i.a.createElement("div",{className:"AddRuleButton"},i.a.createElement("button",{value:n,onClick:function(){return l(n,r,"|$***")}},"+ ",t))})),We=function(e){var t=e.heading,n=e.label,a=e.rules,l=void 0===a?[]:a,r=["hrsa","nwhfc","learndash"],o=function(e){if(console.log("rules is ",e),void 0===e)return!1;for(var t=e.map(function(e){return e.slice(2)}),n=0;n<t.length;n++)for(var a=n+1;a<t.length;a++)if(t[n]===t[a])return a;return!1}(l),c=l.map(function(e,a){var l=a===o;return i.a.createElement(Ge,{heading:t,label:n,error:l,key:a,index:a,rule:e,options:r})});return i.a.createElement("div",{className:"LogicSection"},i.a.createElement("div",{className:"rotated"},i.a.createElement("h5",null,t+":")),i.a.createElement("div",{className:"single-rules"},c,i.a.createElement(Ve,{text:t,label:n})))},$e=Object(o.b)(function(e){return{popup:e.view.popup}},null)(function(e){var t=e.popup,n=t.rules?t.rules:{category:[],tags:[],postTypes:[]};return i.a.createElement("div",{className:"Logic"},i.a.createElement("h3",null,"Display this popup when..."),i.a.createElement(We,{heading:"Category",label:"categories",rules:n.categories}),i.a.createElement(We,{heading:"Tag",label:"tags",rules:n.tags}),i.a.createElement(We,{heading:"Post Type",label:"postTypes",rules:n.postTypes}))}),ze=Object(o.b)(function(e){return{visibility:e.visibility}},null)(function(e){var t=e.visibility,n="OPENING"===t.RulesSection||"OPEN"===t.RulesSection;return i.a.createElement(oe,{visible:n,sectionName:"RulesSection"},i.a.createElement("h2",null,"Rules"),i.a.createElement(de,{heading:"Use Form ID..."},i.a.createElement(Re,{label:"formId",id:"form-id",options:[1,2,3,4,5]})),i.a.createElement(de,null,i.a.createElement(Ue,null)),i.a.createElement(de,null,i.a.createElement($e,null)))}),Je={},Ye=Object(o.b)(function(e){return{storeState:JSON.stringify(e,null,4)}},null)(function(e){var t=e.storeState;return i.a.createElement("div",{className:"store-log",style:Je},i.a.createElement("pre",{id:"store-log"},t))}),qe=document.getElementById("chsie_popups_app");r.a.render(i.a.createElement(o.a,{store:U},i.a.createElement(function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,null,i.a.createElement("p",null,"This application allows you to turn a Formidable form into a custom popup.")),i.a.createElement(d,null,i.a.createElement(te,null)),i.a.createElement(d,null,i.a.createElement(h,{side:"left"},i.a.createElement(ce,null),i.a.createElement(Le,null)),i.a.createElement(h,{side:"right"},i.a.createElement(ze,null))),i.a.createElement(d,{zIndex:"-1"},i.a.createElement(Ye,null)))},null)),qe)}},[[113,2,1]]]);
//# sourceMappingURL=main.47c7db12.chunk.js.map