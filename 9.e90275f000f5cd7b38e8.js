(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4mt+":function(n,l,e){"use strict";e.d(l,"a",(function(){return s})),e.d(l,"b",(function(){return w}));var o=e("LoAr"),t=e("s1E3"),i=e("0b/r"),u=e("WT9V"),a=e("IfiR"),r=e("aKV/"),d=e("0XQN"),s=(e("/k5y"),e("cTE3"),e("0OuC"),o.zb({encapsulation:2,styles:[['\n.fd-input{font-size:.875rem;font-size:var(--sapFontSize,.875rem);line-height:1.42857;color:var(--sapTextColor,#32363a);font-family:"72","72full",Arial,Helvetica,sans-serif;font-family:var(--sapFontFamily,"72","72full",Arial,Helvetica,sans-serif);font-weight:400;-webkit-font-smoothing:antialiased;box-sizing:border-box;white-space:nowrap;text-overflow:ellipsis;color:#32363a;color:var(--sapField_TextColor,#32363a);background-color:#fff;background-color:var(--sapField_Background,#fff);border:.0625rem solid #89919a;border-color:var(--sapField_BorderColor,#89919a);border-width:var(--sapField_BorderWidth,.0625rem);border-radius:.125rem;border-radius:var(--sapField_BorderCornerRadius,.125rem);outline:0;appearance:none;-webkit-appearance:none;-moz-appearance:none;min-width:2.75rem;width:100%;height:2.25rem;margin:.25rem 0;padding:0 .625rem;z-index:1;cursor:text;overflow:hidden}.fd-input:after,.fd-input:before{box-sizing:inherit;font-size:inherit}.fd-input::-webkit-input-placeholder{font-style:italic;color:#74777a;color:var(--sapField_PlaceholderTextColor,#74777a)}.fd-input::-moz-placeholder{font-style:italic;color:#74777a;color:var(--sapField_PlaceholderTextColor,#74777a)}.fd-input:-ms-input-placeholder{font-style:italic;color:#74777a;color:var(--sapField_PlaceholderTextColor,#74777a)}.fd-input::-ms-input-placeholder{font-style:italic;color:#74777a;color:var(--sapField_PlaceholderTextColor,#74777a)}.fd-input::placeholder{font-style:italic;color:#74777a;color:var(--sapField_PlaceholderTextColor,#74777a)}.fd-input::-moz-selection{color:#fff;color:var(--sapContent_ContrastTextColor,#fff);background-color:#0854a0;background-color:var(--sapSelectedColor,#0854a0)}.fd-input::selection{color:#fff;color:var(--sapContent_ContrastTextColor,#fff);background-color:#0854a0;background-color:var(--sapSelectedColor,#0854a0)}.fd-input.is-hover,.fd-input:hover{background-color:#fff;background-color:var(--sapField_Hover_Background,#fff);border-color:#0854a0;border-color:var(--sapField_Hover_BorderColor,#0854a0)}.fd-input.is-success{border-width:.0625rem}.fd-input.is-success,.fd-input.is-success.is-hover,.fd-input.is-success:hover{background-color:#fff;background-color:var(--sapField_SuccessBackground,#fff);border-color:#107e3e;border-color:var(--sapField_SuccessColor,#107e3e)}.fd-input.is-error,.fd-input.is-error.is-hover,.fd-input.is-error:hover{background-color:#fff;background-color:var(--sapField_InvalidBackground,#fff);border-color:#b00;border-color:var(--sapField_InvalidColor,#b00)}.fd-input.is-alert,.fd-input.is-alert.is-hover,.fd-input.is-alert:hover,.fd-input.is-warning,.fd-input.is-warning.is-hover,.fd-input.is-warning:hover{background-color:#fff;background-color:var(--sapField_WarningBackground,#fff);border-color:#e9730c;border-color:var(--sapField_WarningColor,#e9730c)}.fd-input.is-information,.fd-input.is-information.is-hover,.fd-input.is-information:hover{background-color:#fff;background-color:var(--sapField_InformationBackground,#fff);border-color:#0a6ed1;border-color:var(--sapField_InformationColor,#0a6ed1)}.fd-input.is-focus,.fd-input:focus{z-index:5;box-shadow:none;outline-offset:-.1875rem;outline-width:.0625rem;outline-width:var(--sapContent_FocusWidth,.0625rem);outline-color:#000;outline-color:var(--sapContent_FocusColor,#000);outline-style:dotted;outline-style:var(--sapContent_FocusStyle,dotted)}.fd-input.is-alert,.fd-input.is-error,.fd-input.is-information,.fd-input.is-warning{border-width:.125rem}.fd-input.is-alert.is-focus,.fd-input.is-alert:focus,.fd-input.is-error.is-focus,.fd-input.is-error:focus,.fd-input.is-information.is-focus,.fd-input.is-information:focus,.fd-input.is-warning.is-focus,.fd-input.is-warning:focus{z-index:5;box-shadow:none;outline-offset:-.25rem}.fd-input.is-disabled,.fd-input:disabled,.fd-input[aria-disabled=true]{pointer-events:none;opacity:.4;opacity:var(--sapContent_DisabledOpacity,.4)}.fd-input.is-disabled::-webkit-input-placeholder,.fd-input:disabled::-webkit-input-placeholder,.fd-input[aria-disabled=true]::-webkit-input-placeholder{color:transparent}.fd-input.is-disabled::-moz-placeholder,.fd-input:disabled::-moz-placeholder,.fd-input[aria-disabled=true]::-moz-placeholder{color:transparent}.fd-input.is-disabled:-ms-input-placeholder,.fd-input:disabled:-ms-input-placeholder,.fd-input[aria-disabled=true]:-ms-input-placeholder{color:transparent}.fd-input.is-disabled::-ms-input-placeholder,.fd-input:disabled::-ms-input-placeholder,.fd-input[aria-disabled=true]::-ms-input-placeholder{color:transparent}.fd-input.is-disabled::placeholder,.fd-input:disabled::placeholder,.fd-input[aria-disabled=true]::placeholder{color:transparent}.fd-input.is-readonly,.fd-input[readonly]{background-color:hsla(0,0%,94.9%,.5);background-color:var(--sapField_ReadOnly_Background,hsla(0,0%,94.9%,.5));border-color:#89919a;border-color:var(--sapField_ReadOnly_BorderColor,#89919a)}.fd-input.is-readonly::-webkit-input-placeholder,.fd-input[readonly]::-webkit-input-placeholder{color:transparent}.fd-input.is-readonly::-moz-placeholder,.fd-input[readonly]::-moz-placeholder{color:transparent}.fd-input.is-readonly:-ms-input-placeholder,.fd-input[readonly]:-ms-input-placeholder{color:transparent}.fd-input.is-readonly::-ms-input-placeholder,.fd-input[readonly]::-ms-input-placeholder{color:transparent}.fd-input.is-readonly::placeholder,.fd-input[readonly]::placeholder{color:transparent}.fd-input::-ms-clear{display:none}.fd-input[aria-expanded=false]{z-index:0}.fd-input[aria-expanded=true]{z-index:4}.fd-input:last-child{margin-bottom:.25rem}.fd-input--compact{min-width:2rem;height:1.625rem;margin-top:.1875rem;margin-bottom:.1875rem;padding:0 .5rem;box-sizing:border-box}.fd-input--no-number-spinner{-moz-appearance:textfield}.fd-input--no-number-spinner::-webkit-inner-spin-button,.fd-input--no-number-spinner::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.fd-input.right-align{text-align:right}.fd-time{font-size:.875rem;font-size:var(--sapFontSize,.875rem);line-height:1.42857;color:#32363a;color:var(--sapTextColor,#32363a);font-family:"72","72full",Arial,Helvetica,sans-serif;font-family:var(--sapFontFamily,"72","72full",Arial,Helvetica,sans-serif);font-weight:400;-webkit-font-smoothing:antialiased;box-sizing:border-box;padding:0;margin:0;border:0;width:184px}.fd-time:after,.fd-time:before{box-sizing:inherit;font-size:inherit}.fd-time__item{font-size:.875rem;font-size:var(--sapFontSize,.875rem);line-height:1.42857;color:#32363a;color:var(--sapTextColor,#32363a);font-family:"72","72full",Arial,Helvetica,sans-serif;font-family:var(--sapFontFamily,"72","72full",Arial,Helvetica,sans-serif);font-weight:400;-webkit-font-smoothing:antialiased;box-sizing:border-box;padding:0;border:0;display:inline-block;max-width:40px;text-align:center;margin:0 4px 0 0}.fd-time__item:after,.fd-time__item:before{box-sizing:inherit;font-size:inherit}.fd-time__item:last-child{margin-right:0}.fd-time__item .fd-time__input{margin:8px 0;padding-left:8px;padding-right:8px;text-align:center;width:100%}.fd-time__control{font-size:.875rem;font-size:var(--sapFontSize,.875rem);line-height:1.42857;color:#32363a;color:var(--sapTextColor,#32363a);font-family:"72","72full",Arial,Helvetica,sans-serif;font-family:var(--sapFontFamily,"72","72full",Arial,Helvetica,sans-serif);font-weight:400;-webkit-font-smoothing:antialiased;box-sizing:border-box;padding:0;margin:0;border:0}.fd-time__control:after,.fd-time__control:before{box-sizing:inherit;font-size:inherit}.fd-time__item .fd-time__input{min-width:auto}']],data:{}}));function p(n){return o.dc(0,[(n()(),o.Bb(0,0,null,null,1,"button",[["fd-button",""],["type","button"]],[[8,"disabled",0],[1,"aria-label",0],[1,"type",0]],[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.increaseHour()&&o),o}),t.b,t.a)),o.Ab(1,638976,null,0,i.a,[o.l],{type:[0,"type"],glyph:[1,"glyph"],fdType:[2,"fdType"]},null)],(function(n,l){n(l,1,0,"button","navigation-up-arrow","transparent")}),(function(n,l){var e=l.component;n(l,0,0,e.disabled,null==e.timeI18nLabels?null:e.timeI18nLabels.increaseHoursLabel,o.Qb(l,1).type)}))}function c(n){return o.dc(0,[(n()(),o.Bb(0,0,null,null,1,"button",[["fd-button",""],["type","button"]],[[8,"disabled",0],[1,"aria-label",0],[1,"type",0]],[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.decreaseHour()&&o),o}),t.b,t.a)),o.Ab(1,638976,null,0,i.a,[o.l],{type:[0,"type"],glyph:[1,"glyph"],fdType:[2,"fdType"]},null)],(function(n,l){n(l,1,0,"button","navigation-down-arrow","transparent")}),(function(n,l){var e=l.component;n(l,0,0,e.disabled,null==e.timeI18nLabels?null:e.timeI18nLabels.decreaseHoursLabel,o.Qb(l,1).type)}))}function b(n){return o.dc(0,[(n()(),o.Bb(0,0,null,null,17,"div",[["class","fd-time__item"]],null,null,null,null,null)),(n()(),o.Bb(1,0,null,null,2,"div",[["class","fd-time__control"]],null,null,null,null,null)),(n()(),o.kb(16777216,null,null,1,null,p)),o.Ab(3,16384,null,0,u.o,[o.R,o.N],{ngIf:[0,"ngIf"]},null),(n()(),o.Bb(4,0,null,null,10,"input",[["class","fd-input fd-time__input fd-input--no-number-spinner"],["fd-only-digits",""],["type","number"]],[[8,"placeholder",0],[1,"aria-label",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"],[null,"change"],[null,"keydown"]],(function(n,l,e){var t=!0,i=n.component;return"input"===l&&(t=!1!==o.Qb(n,7)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==o.Qb(n,7).onTouched()&&t),"compositionstart"===l&&(t=!1!==o.Qb(n,7)._compositionStart()&&t),"compositionend"===l&&(t=!1!==o.Qb(n,7)._compositionEnd(e.target.value)&&t),"change"===l&&(t=!1!==o.Qb(n,8).onChange(e.target.value)&&t),"input"===l&&(t=!1!==o.Qb(n,8).onChange(e.target.value)&&t),"blur"===l&&(t=!1!==o.Qb(n,8).onTouched()&&t),"keydown"===l&&(t=!1!==o.Qb(n,14).onKeyDown(e)&&t),"ngModelChange"===l&&(t=!1!==i.displayedHourChanged(e)&&t),"blur"===l&&(t=!1!==i.inputBlur("hour")&&t),t}),null,null)),o.Ab(5,278528,null,0,u.m,[o.t,o.u,o.l,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Tb(6,{"is-disabled":0,"is-error":1}),o.Ab(7,16384,null,0,a.d,[o.F,o.l,[2,a.a]],null,null),o.Ab(8,16384,null,0,a.v,[o.F,o.l],null,null),o.Vb(1024,null,a.o,(function(n,l){return[n,l]}),[a.d,a.v]),o.Ab(10,671744,null,0,a.t,[[8,null],[8,null],[8,null],[6,a.o]],{model:[0,"model"]},{update:"ngModelChange"}),o.Ub(11,2),o.Vb(2048,null,a.p,null,[a.t]),o.Ab(13,16384,null,0,a.q,[[4,a.p]],null,null),o.Ab(14,16384,null,0,r.a,[],null,null),(n()(),o.Bb(15,0,null,null,2,"div",[["class","fd-time__control"]],null,null,null,null,null)),(n()(),o.kb(16777216,null,null,1,null,c)),o.Ab(17,16384,null,0,u.o,[o.R,o.N],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,e.spinners);var t=n(l,6,0,e.disabled,(e.displayedHour>24||e.displayedHour<0)&&e.validate);n(l,5,0,"fd-input fd-time__input fd-input--no-number-spinner",t);var i=o.bc(l,10,0,n(l,11,0,o.Qb(l.parent,0),e.displayedHour,e.keepTwoDigits));n(l,10,0,i),n(l,17,0,e.spinners)}),(function(n,l){var e=l.component;n(l,4,0,o.Ib(1,"",null==e.timeI18n?null:e.timeI18n.hoursPlaceholder,""),null==e.timeI18nLabels?null:e.timeI18nLabels.hoursLabel,o.Qb(l,13).ngClassUntouched,o.Qb(l,13).ngClassTouched,o.Qb(l,13).ngClassPristine,o.Qb(l,13).ngClassDirty,o.Qb(l,13).ngClassValid,o.Qb(l,13).ngClassInvalid,o.Qb(l,13).ngClassPending)}))}function f(n){return o.dc(0,[(n()(),o.Bb(0,0,null,null,1,"button",[["fd-button",""],["type","button"]],[[8,"disabled",0],[1,"aria-label",0],[1,"type",0]],[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.increaseMinute()&&o),o}),t.b,t.a)),o.Ab(1,638976,null,0,i.a,[o.l],{type:[0,"type"],glyph:[1,"glyph"],fdType:[2,"fdType"]},null)],(function(n,l){n(l,1,0,"button","navigation-up-arrow","transparent")}),(function(n,l){var e=l.component;n(l,0,0,e.disabled,null==e.timeI18nLabels?null:e.timeI18nLabels.increaseMinutesLabel,o.Qb(l,1).type)}))}function g(n){return o.dc(0,[(n()(),o.Bb(0,0,null,null,1,"button",[["fd-button",""],["type","button"]],[[8,"disabled",0],[1,"aria-label",0],[1,"type",0]],[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.decreaseMinute()&&o),o}),t.b,t.a)),o.Ab(1,638976,null,0,i.a,[o.l],{type:[0,"type"],glyph:[1,"glyph"],fdType:[2,"fdType"]},null)],(function(n,l){n(l,1,0,"button","navigation-down-arrow","transparent")}),(function(n,l){var e=l.component;n(l,0,0,e.disabled,null==e.timeI18nLabels?null:e.timeI18nLabels.decreaseMinutesLabel,o.Qb(l,1).type)}))}function m(n){return o.dc(0,[(n()(),o.Bb(0,0,null,null,17,"div",[["class","fd-time__item"]],null,null,null,null,null)),(n()(),o.Bb(1,0,null,null,2,"div",[["class","fd-time__control"]],null,null,null,null,null)),(n()(),o.kb(16777216,null,null,1,null,f)),o.Ab(3,16384,null,0,u.o,[o.R,o.N],{ngIf:[0,"ngIf"]},null),(n()(),o.Bb(4,0,null,null,10,"input",[["class","fd-input fd-time__input fd-input--no-number-spinner"],["fd-only-digits",""],["type","number"]],[[8,"placeholder",0],[1,"aria-label",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"],[null,"change"],[null,"keydown"]],(function(n,l,e){var t=!0,i=n.component;return"input"===l&&(t=!1!==o.Qb(n,7)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==o.Qb(n,7).onTouched()&&t),"compositionstart"===l&&(t=!1!==o.Qb(n,7)._compositionStart()&&t),"compositionend"===l&&(t=!1!==o.Qb(n,7)._compositionEnd(e.target.value)&&t),"change"===l&&(t=!1!==o.Qb(n,8).onChange(e.target.value)&&t),"input"===l&&(t=!1!==o.Qb(n,8).onChange(e.target.value)&&t),"blur"===l&&(t=!1!==o.Qb(n,8).onTouched()&&t),"keydown"===l&&(t=!1!==o.Qb(n,14).onKeyDown(e)&&t),"ngModelChange"===l&&(t=!1!==i.minuteModelChange(e)&&t),"blur"===l&&(t=!1!==i.inputBlur("minute")&&t),t}),null,null)),o.Ab(5,278528,null,0,u.m,[o.t,o.u,o.l,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Tb(6,{"is-disabled":0,"is-error":1}),o.Ab(7,16384,null,0,a.d,[o.F,o.l,[2,a.a]],null,null),o.Ab(8,16384,null,0,a.v,[o.F,o.l],null,null),o.Vb(1024,null,a.o,(function(n,l){return[n,l]}),[a.d,a.v]),o.Ab(10,671744,null,0,a.t,[[8,null],[8,null],[8,null],[6,a.o]],{model:[0,"model"]},{update:"ngModelChange"}),o.Ub(11,2),o.Vb(2048,null,a.p,null,[a.t]),o.Ab(13,16384,null,0,a.q,[[4,a.p]],null,null),o.Ab(14,16384,null,0,r.a,[],null,null),(n()(),o.Bb(15,0,null,null,2,"div",[["class","fd-time__control"]],null,null,null,null,null)),(n()(),o.kb(16777216,null,null,1,null,g)),o.Ab(17,16384,null,0,u.o,[o.R,o.N],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,e.spinners);var t=n(l,6,0,e.disabled,(e.time.minute>59||e.time.minute<0)&&e.validate);n(l,5,0,"fd-input fd-time__input fd-input--no-number-spinner",t);var i=o.bc(l,10,0,n(l,11,0,o.Qb(l.parent,0),e.time.minute,e.keepTwoDigits));n(l,10,0,i),n(l,17,0,e.spinners)}),(function(n,l){var e=l.component;n(l,4,0,o.Ib(1,"",null==e.timeI18n?null:e.timeI18n.minutesPlaceholder,""),null==e.timeI18nLabels?null:e.timeI18nLabels.minutesLabel,o.Qb(l,13).ngClassUntouched,o.Qb(l,13).ngClassTouched,o.Qb(l,13).ngClassPristine,o.Qb(l,13).ngClassDirty,o.Qb(l,13).ngClassValid,o.Qb(l,13).ngClassInvalid,o.Qb(l,13).ngClassPending)}))}function h(n){return o.dc(0,[(n()(),o.Bb(0,0,null,null,1,"button",[["fd-button",""],["type","button"]],[[8,"disabled",0],[1,"aria-label",0],[1,"type",0]],[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.increaseSecond()&&o),o}),t.b,t.a)),o.Ab(1,638976,null,0,i.a,[o.l],{type:[0,"type"],glyph:[1,"glyph"],fdType:[2,"fdType"]},null)],(function(n,l){n(l,1,0,"button","navigation-up-arrow","transparent")}),(function(n,l){var e=l.component;n(l,0,0,e.disabled,null==e.timeI18nLabels?null:e.timeI18nLabels.increaseSecondsLabel,o.Qb(l,1).type)}))}function v(n){return o.dc(0,[(n()(),o.Bb(0,0,null,null,1,"button",[["fd-button",""],["type","button"]],[[8,"disabled",0],[1,"aria-label",0],[1,"type",0]],[[null,"click"],[null,"keydown"]],(function(n,l,e){var o=!0,t=n.component;return"click"===l&&(o=!1!==t.decreaseSecond()&&o),"keydown"===l&&(o=!1!==(t.meridian?"":t.lastButtonKeydown(e))&&o),o}),t.b,t.a)),o.Ab(1,638976,null,0,i.a,[o.l],{type:[0,"type"],glyph:[1,"glyph"],fdType:[2,"fdType"]},null)],(function(n,l){n(l,1,0,"button","navigation-down-arrow","transparent")}),(function(n,l){var e=l.component;n(l,0,0,e.disabled,null==e.timeI18nLabels?null:e.timeI18nLabels.decreaseSecondsLabel,o.Qb(l,1).type)}))}function y(n){return o.dc(0,[(n()(),o.Bb(0,0,null,null,17,"div",[["class","fd-time__item"]],null,null,null,null,null)),(n()(),o.Bb(1,0,null,null,2,"div",[["class","fd-time__control"]],null,null,null,null,null)),(n()(),o.kb(16777216,null,null,1,null,h)),o.Ab(3,16384,null,0,u.o,[o.R,o.N],{ngIf:[0,"ngIf"]},null),(n()(),o.Bb(4,0,null,null,10,"input",[["class","fd-input fd-time__input fd-input--no-number-spinner"],["fd-only-digits",""],["type","number"]],[[8,"placeholder",0],[1,"aria-label",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"blur"],[null,"keydown"],[null,"input"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(n,l,e){var t=!0,i=n.component;return"input"===l&&(t=!1!==o.Qb(n,7)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==o.Qb(n,7).onTouched()&&t),"compositionstart"===l&&(t=!1!==o.Qb(n,7)._compositionStart()&&t),"compositionend"===l&&(t=!1!==o.Qb(n,7)._compositionEnd(e.target.value)&&t),"change"===l&&(t=!1!==o.Qb(n,8).onChange(e.target.value)&&t),"input"===l&&(t=!1!==o.Qb(n,8).onChange(e.target.value)&&t),"blur"===l&&(t=!1!==o.Qb(n,8).onTouched()&&t),"keydown"===l&&(t=!1!==o.Qb(n,14).onKeyDown(e)&&t),"ngModelChange"===l&&(t=!1!==i.secondModelChange(e)&&t),"blur"===l&&(t=!1!==i.inputBlur("second")&&t),"keydown"===l&&(t=!1!==(i.meridian||i.spinners?"":i.lastButtonKeydown(e))&&t),t}),null,null)),o.Ab(5,278528,null,0,u.m,[o.t,o.u,o.l,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Tb(6,{"is-disabled":0,"is-error":1}),o.Ab(7,16384,null,0,a.d,[o.F,o.l,[2,a.a]],null,null),o.Ab(8,16384,null,0,a.v,[o.F,o.l],null,null),o.Vb(1024,null,a.o,(function(n,l){return[n,l]}),[a.d,a.v]),o.Ab(10,671744,null,0,a.t,[[8,null],[8,null],[8,null],[6,a.o]],{model:[0,"model"]},{update:"ngModelChange"}),o.Ub(11,2),o.Vb(2048,null,a.p,null,[a.t]),o.Ab(13,16384,null,0,a.q,[[4,a.p]],null,null),o.Ab(14,16384,null,0,r.a,[],null,null),(n()(),o.Bb(15,0,null,null,2,"div",[["class","fd-time__control"]],null,null,null,null,null)),(n()(),o.kb(16777216,null,null,1,null,v)),o.Ab(17,16384,null,0,u.o,[o.R,o.N],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,e.spinners);var t=n(l,6,0,e.disabled,(e.time.second>59||e.time.second<0)&&e.validate);n(l,5,0,"fd-input fd-time__input fd-input--no-number-spinner",t);var i=o.bc(l,10,0,n(l,11,0,o.Qb(l.parent,0),e.time.second,e.keepTwoDigits));n(l,10,0,i),n(l,17,0,e.spinners)}),(function(n,l){var e=l.component;n(l,4,0,o.Ib(1,"",null==e.timeI18n?null:e.timeI18n.secondsPlaceholder,""),null==e.timeI18nLabels?null:e.timeI18nLabels.secondsLabel,o.Qb(l,13).ngClassUntouched,o.Qb(l,13).ngClassTouched,o.Qb(l,13).ngClassPristine,o.Qb(l,13).ngClassDirty,o.Qb(l,13).ngClassValid,o.Qb(l,13).ngClassInvalid,o.Qb(l,13).ngClassPending)}))}function _(n){return o.dc(0,[(n()(),o.Bb(0,0,null,null,1,"button",[["fd-button",""]],[[8,"disabled",0],[1,"aria-label",0],[1,"type",0]],[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.togglePeriod()&&o),o}),t.b,t.a)),o.Ab(1,638976,null,0,i.a,[o.l],{glyph:[0,"glyph"],fdType:[1,"fdType"]},null)],(function(n,l){n(l,1,0,"navigation-up-arrow","transparent")}),(function(n,l){var e=l.component;n(l,0,0,e.disabled,null==e.timeI18nLabels?null:e.timeI18nLabels.increasePeriodLabel,o.Qb(l,1).type)}))}function k(n){return o.dc(0,[(n()(),o.Bb(0,0,null,null,1,"button",[["fd-button",""],["type","button"]],[[8,"disabled",0],[1,"aria-label",0],[1,"type",0]],[[null,"click"],[null,"keydown"]],(function(n,l,e){var o=!0,t=n.component;return"click"===l&&(o=!1!==t.togglePeriod()&&o),"keydown"===l&&(o=!1!==t.lastButtonKeydown(e)&&o),o}),t.b,t.a)),o.Ab(1,638976,null,0,i.a,[o.l],{type:[0,"type"],glyph:[1,"glyph"],fdType:[2,"fdType"]},null)],(function(n,l){n(l,1,0,"button","navigation-down-arrow","transparent")}),(function(n,l){var e=l.component;n(l,0,0,e.disabled,null==e.timeI18nLabels?null:e.timeI18nLabels.decreasePeriodLabel,o.Qb(l,1).type)}))}function C(n){return o.dc(0,[(n()(),o.Bb(0,0,null,null,14,"div",[["class","fd-time__item"]],null,null,null,null,null)),(n()(),o.Bb(1,0,null,null,2,"div",[["class","fd-time__control"]],null,null,null,null,null)),(n()(),o.kb(16777216,null,null,1,null,_)),o.Ab(3,16384,null,0,u.o,[o.R,o.N],{ngIf:[0,"ngIf"]},null),(n()(),o.Bb(4,0,null,null,7,"input",[["class","fd-input fd-time__input"],["type","text"]],[[8,"placeholder",0],[1,"aria-label",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,e){var t=!0,i=n.component;return"input"===l&&(t=!1!==o.Qb(n,7)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==o.Qb(n,7).onTouched()&&t),"compositionstart"===l&&(t=!1!==o.Qb(n,7)._compositionStart()&&t),"compositionend"===l&&(t=!1!==o.Qb(n,7)._compositionEnd(e.target.value)&&t),"ngModelChange"===l&&(t=!1!==(i.period=e)&&t),"blur"===l&&(t=!1!==i.inputBlur("period")&&t),"ngModelChange"===l&&(t=!1!==i.periodModelChange()&&t),t}),null,null)),o.Ab(5,278528,null,0,u.m,[o.t,o.u,o.l,o.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.Tb(6,{"is-disabled":0}),o.Ab(7,16384,null,0,a.d,[o.F,o.l,[2,a.a]],null,null),o.Vb(1024,null,a.o,(function(n){return[n]}),[a.d]),o.Ab(9,671744,null,0,a.t,[[8,null],[8,null],[8,null],[6,a.o]],{model:[0,"model"]},{update:"ngModelChange"}),o.Vb(2048,null,a.p,null,[a.t]),o.Ab(11,16384,null,0,a.q,[[4,a.p]],null,null),(n()(),o.Bb(12,0,null,null,2,"div",[["class","fd-time__control"]],null,null,null,null,null)),(n()(),o.kb(16777216,null,null,1,null,k)),o.Ab(14,16384,null,0,u.o,[o.R,o.N],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,e.spinners);var o=n(l,6,0,e.disabled);n(l,5,0,"fd-input fd-time__input",o),n(l,9,0,e.period),n(l,14,0,e.spinners)}),(function(n,l){var e=l.component;n(l,4,0,o.Ib(1,"",null==e.timeI18n?null:e.timeI18n.meridianPlaceholder,""),null==e.timeI18nLabels?null:e.timeI18nLabels.periodLabel,o.Qb(l,11).ngClassUntouched,o.Qb(l,11).ngClassTouched,o.Qb(l,11).ngClassPristine,o.Qb(l,11).ngClassDirty,o.Qb(l,11).ngClassValid,o.Qb(l,11).ngClassInvalid,o.Qb(l,11).ngClassPending)}))}function w(n){return o.dc(2,[o.Sb(0,d.a,[]),(n()(),o.kb(16777216,null,null,1,null,b)),o.Ab(2,16384,null,0,u.o,[o.R,o.N],{ngIf:[0,"ngIf"]},null),(n()(),o.kb(16777216,null,null,1,null,m)),o.Ab(4,16384,null,0,u.o,[o.R,o.N],{ngIf:[0,"ngIf"]},null),(n()(),o.kb(16777216,null,null,1,null,y)),o.Ab(6,16384,null,0,u.o,[o.R,o.N],{ngIf:[0,"ngIf"]},null),(n()(),o.kb(16777216,null,null,1,null,C)),o.Ab(8,16384,null,0,u.o,[o.R,o.N],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,2,0,e.displayHours),n(l,4,0,e.displayMinutes),n(l,6,0,e.displaySeconds),n(l,8,0,e.meridian)}),null)}}}]);