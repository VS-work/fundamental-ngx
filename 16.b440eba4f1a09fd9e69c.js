(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{IKLO:function(t,o,i){"use strict";i.d(o,"a",(function(){return n})),i.d(o,"b",(function(){return _}));var e=i("LoAr"),r=i("c3qP"),d=i("ZrTn"),c=i("WT9V"),l=i("XpHP"),s=i("qHqB"),n=(i("rxpU"),e.zb({encapsulation:2,styles:[['.drag-placeholder{position:absolute;opacity:.3}\n.fd-product-switch{font-size:.875rem;font-size:var(--sapFontSize,.875rem);line-height:1.42857;color:#32363a;color:var(--sapTextColor,#32363a);font-family:"72","72full",Arial,Helvetica,sans-serif;font-family:var(--sapFontFamily,"72","72full",Arial,Helvetica,sans-serif);font-weight:400;-webkit-font-smoothing:antialiased;box-sizing:border-box;padding:0;margin:0;border:0}.fd-product-switch:after,.fd-product-switch:before{box-sizing:inherit;font-size:inherit}.fd-product-switch__control{font-size:.875rem;font-size:var(--sapFontSize,.875rem);line-height:1.42857;color:#32363a;color:var(--sapTextColor,#32363a);font-family:"72","72full",Arial,Helvetica,sans-serif;font-family:var(--sapFontFamily,"72","72full",Arial,Helvetica,sans-serif);font-weight:400;-webkit-font-smoothing:antialiased;box-sizing:border-box;padding:0;margin:0;border:0;color:#fff;color:var(--sapShell_TextColor,#fff)}.fd-product-switch__control:after,.fd-product-switch__control:before{box-sizing:inherit;font-size:inherit}.fd-product-switch__control:before{margin-right:0}.fd-product-switch__control.is-hover,.fd-product-switch__control:hover{color:#fff;color:var(--sapShell_TextColor,#fff);background-color:#283848;background-color:var(--sapShell_Hover_Background,#283848)}.fd-product-switch__control.is-hover.is-disabled,.fd-product-switch__control.is-hover:disabled,.fd-product-switch__control.is-hover[aria-disabled=true],.fd-product-switch__control:hover.is-disabled,.fd-product-switch__control:hover:disabled,.fd-product-switch__control:hover[aria-disabled=true]{color:#fff;color:var(--sapShell_TextColor,#fff);opacity:.4%}.fd-product-switch__control.is-disabled,.fd-product-switch__control:disabled,.fd-product-switch__control[aria-disabled=true]{opacity:.4%}.fd-product-switch__control.is-active,.fd-product-switch__control.is-pressed,.fd-product-switch__control.is-selected,.fd-product-switch__control:active,.fd-product-switch__control[aria-pressed=true],.fd-product-switch__control[aria-selected=true]{color:#fff;color:var(--sapShell_Active_TextColor,#fff);background-color:#23303e;background-color:var(--sapShell_Active_Background,#23303e)}.fd-product-switch__list{font-size:.875rem;font-size:var(--sapFontSize,.875rem);line-height:1.42857;color:#32363a;color:var(--sapTextColor,#32363a);font-family:"72","72full",Arial,Helvetica,sans-serif;font-family:var(--sapFontFamily,"72","72full",Arial,Helvetica,sans-serif);font-weight:400;-webkit-font-smoothing:antialiased;box-sizing:border-box;padding:0;margin:0;border:0;display:flex;flex-direction:row;flex-wrap:wrap;width:47rem}.fd-product-switch__list:after,.fd-product-switch__list:before{box-sizing:inherit;font-size:inherit}.fd-product-switch__item{font-size:.875rem;font-size:var(--sapFontSize,.875rem);line-height:1.42857;color:#32363a;color:var(--sapTextColor,#32363a);font-family:"72","72full",Arial,Helvetica,sans-serif;font-family:var(--sapFontFamily,"72","72full",Arial,Helvetica,sans-serif);font-weight:400;-webkit-font-smoothing:antialiased;box-sizing:border-box;border:0;display:flex;flex-direction:column;align-items:center;text-align:center;height:7rem;max-width:11.25rem;flex:1 0 25%;padding:.5rem;margin:0 .5rem .5rem 0;background-color:#fff;background-color:var(--sapList_Background,#fff);border-radius:.25rem;border-radius:var(--sapElement_BorderCornerRadius,.25rem)}.fd-product-switch__item:after,.fd-product-switch__item:before{box-sizing:inherit;font-size:inherit}.fd-product-switch__item .fd-product-switch__title:not(:last-child){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fd-product-switch__item .fd-product-switch__title:after,.fd-product-switch__item .fd-product-switch__title:before{background-color:#fff;background-color:var(--sapList_Background,#fff)}.fd-product-switch__item.selected{border:.125rem solid #0854a0;border-color:var(--sapList_SelectionBorderColor,#0854a0)}.fd-product-switch__item.selected,.fd-product-switch__item.selected .fd-product-switch__title:after,.fd-product-switch__item.selected .fd-product-switch__title:before{background-color:#e5f0fa;background-color:var(--sapList_SelectionBackgroundColor,#e5f0fa)}.fd-product-switch__item.selected:hover,.fd-product-switch__item.selected:hover .fd-product-switch__title:after,.fd-product-switch__item.selected:hover .fd-product-switch__title:before{background-color:#d8e9f8;background-color:var(--sapList_Hover_SelectionBackground,#d8e9f8)}.fd-product-switch__item.selected:active,.fd-product-switch__item.selected:active .fd-product-switch__title:after,.fd-product-switch__item.selected:active .fd-product-switch__title:before{background-color:#0854a0;background-color:var(--sapList_Active_Background,#0854a0)}.fd-product-switch__item:focus{outline:0;border:.0625rem dotted #000;border-color:var(--sapContent_FocusColor,#000);border-radius:.25rem;border-radius:var(--sapElement_BorderCornerRadius,.25rem)}.fd-product-switch__item.dragged{cursor:-webkit-grabbing;cursor:grabbing;box-shadow:0 0 0 .0625rem rgba(0,0,0,.42),0 .625rem 1.875rem 0 rgba(0,0,0,.3);box-shadow:var(--sapContent_Shadow2,0 0 0 .0625rem rgba(0,0,0,.42),0 .625rem 1.875rem 0 rgba(0,0,0,.3))}.fd-product-switch__item.dragged,.fd-product-switch__item.dragged:active,.fd-product-switch__item.dragged:hover{background-color:#fff;background-color:var(--sapList_Background,#fff)}.fd-product-switch__item.dragged:active .fd-product-switch__icon,.fd-product-switch__item.dragged:hover .fd-product-switch__icon{color:#0854a0;color:var(--sapContent_IconColor,#0854a0)}.fd-product-switch__item.dragged:active .fd-product-switch__title,.fd-product-switch__item.dragged:hover .fd-product-switch__title{color:#32363a;color:var(--sapGroup_TitleTextColor,#32363a)}.fd-product-switch__item.dragged:active .fd-product-switch__subtitle,.fd-product-switch__item.dragged:hover .fd-product-switch__subtitle{color:#6a6d70;color:var(--sapContent_LabelColor,#6a6d70)}.fd-product-switch__item.dragged.selected{border:none;box-shadow:0 0 0 .0625rem rgba(0,0,0,.42),0 .625rem 1.875rem 0 rgba(0,0,0,.3);box-shadow:var(--sapContent_Shadow2,0 0 0 .0625rem rgba(0,0,0,.42),0 .625rem 1.875rem 0 rgba(0,0,0,.3))}.fd-product-switch__item.dragged:focus{outline:0}.fd-product-switch__item:hover,.fd-product-switch__item:hover .fd-product-switch__title:after,.fd-product-switch__item:hover .fd-product-switch__title:before{background-color:#f5f5f5;background-color:var(--sapList_Hover_Background,#f5f5f5)}.fd-product-switch__item:active{background-color:#0854a0;background-color:var(--sapList_Active_Background,#0854a0)}.fd-product-switch__item:active .fd-product-switch__icon,.fd-product-switch__item:active .fd-product-switch__subtitle,.fd-product-switch__item:active .fd-product-switch__title{color:#fff;color:var(--sapList_Active_TextColor,#fff)}.fd-product-switch__item:active .fd-product-switch__title:after,.fd-product-switch__item:active .fd-product-switch__title:before,.fd-product-switch__item:active:hover .fd-product-switch__title:after,.fd-product-switch__item:active:hover .fd-product-switch__title:before{background-color:#0854a0;background-color:var(--sapList_Active_Background,#0854a0)}.fd-product-switch__icon{font-size:.875rem;font-size:var(--sapFontSize,.875rem);line-height:1.42857;color:#32363a;color:var(--sapTextColor,#32363a);font-family:"72","72full",Arial,Helvetica,sans-serif;font-family:var(--sapFontFamily,"72","72full",Arial,Helvetica,sans-serif);font-weight:400;-webkit-font-smoothing:antialiased;box-sizing:border-box;padding:0;border:0;display:flex;flex-direction:row;align-items:center;justify-content:center;min-width:3rem;min-height:3rem;font-size:1.5rem;margin:0 0 .5rem;color:#0854a0;color:var(--sapContent_IconColor,#0854a0)}.fd-product-switch__icon:after,.fd-product-switch__icon:before{box-sizing:inherit;font-size:inherit}.fd-product-switch__text{font-size:.875rem;font-size:var(--sapFontSize,.875rem);line-height:1.42857;color:#32363a;color:var(--sapTextColor,#32363a);font-family:"72","72full",Arial,Helvetica,sans-serif;font-family:var(--sapFontFamily,"72","72full",Arial,Helvetica,sans-serif);font-weight:400;-webkit-font-smoothing:antialiased;box-sizing:border-box;padding:0;margin:0;border:0;width:100%;overflow:hidden;max-height:2.5rem}.fd-product-switch__text:after,.fd-product-switch__text:before{box-sizing:inherit;font-size:inherit}.fd-product-switch__title{font-size:var(--sapFontSize,.875rem);line-height:1.42857;color:var(--sapTextColor,#32363a);font-family:"72","72full",Arial,Helvetica,sans-serif;font-family:var(--sapFontFamily,"72","72full",Arial,Helvetica,sans-serif);font-weight:400;-webkit-font-smoothing:antialiased;box-sizing:border-box;border:0;font-size:.875rem;font-size:var(--sapFontHeader6Size,.875rem);color:#32363a;color:var(--sapGroup_TitleTextColor,#32363a);white-space:normal;z-index:1;position:relative;line-height:1.25rem;max-height:2.5rem;overflow:hidden;margin:0 -1em 0 0;padding:0 1em 0 0}.fd-product-switch__title:after,.fd-product-switch__title:before{box-sizing:inherit;font-size:inherit}.fd-product-switch__title:before{position:absolute;content:"...";right:0;bottom:1px}.fd-product-switch__title:after{content:"";position:absolute;right:0;width:1em;height:1em;margin-top:.2em;background:0 0}.fd-product-switch__title:after,.fd-product-switch__title:before{content:none}.fd-product-switch__title:last-child:after{content:""}.fd-product-switch__title:last-child:before{content:"..."}.fd-product-switch__title:before{left:9.4rem;width:1rem;z-index:2}.fd-product-switch__title:after{width:1rem;left:9.4rem;z-index:3}.fd-product-switch__subtitle{font-size:.875rem;font-size:var(--sapFontSize,.875rem);line-height:1.42857;color:#32363a;color:var(--sapTextColor,#32363a);font-family:"72","72full",Arial,Helvetica,sans-serif;font-family:var(--sapFontFamily,"72","72full",Arial,Helvetica,sans-serif);font-weight:400;-webkit-font-smoothing:antialiased;box-sizing:border-box;padding:0;margin:0;border:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.25rem;font-size:.75rem;font-size:var(--sapFontSmallSize,.75rem);color:#6a6d70;color:var(--sapContent_LabelColor,#6a6d70)}.fd-product-switch__subtitle:after,.fd-product-switch__subtitle:before{box-sizing:inherit;font-size:inherit}.fd-product-switch__body{font-size:.875rem;font-size:var(--sapFontSize,.875rem);line-height:1.42857;color:#32363a;color:var(--sapTextColor,#32363a);font-family:"72","72full",Arial,Helvetica,sans-serif;font-family:var(--sapFontFamily,"72","72full",Arial,Helvetica,sans-serif);font-weight:400;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;border:0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-height:calc(100vh - 76px);overflow-y:auto;padding:1.5rem .5rem 1rem 1rem;background-color:#fff;background-color:var(--sapList_Background,#fff);border-radius:.25rem;border-radius:var(--sapElement_BorderCornerRadius,.25rem)}.fd-product-switch__body:after,.fd-product-switch__body:before{box-sizing:inherit;font-size:inherit}.fd-product-switch__body--col-3 .fd-product-switch__list{width:35.25rem}.fd-product-switch__body--mobile{padding:0;width:100%;max-width:100vw;overflow-x:hidden}.fd-product-switch__body--mobile .fd-product-switch__list{display:flex;flex-direction:column;width:100%}.fd-product-switch__body--mobile .fd-product-switch__item{font-size:.875rem;font-size:var(--sapFontSize,.875rem);line-height:1.42857;color:#32363a;color:var(--sapTextColor,#32363a);font-family:"72","72full",Arial,Helvetica,sans-serif;font-family:var(--sapFontFamily,"72","72full",Arial,Helvetica,sans-serif);font-weight:400;-webkit-font-smoothing:antialiased;box-sizing:border-box;margin:0;display:flex;flex-direction:row;max-width:100%;max-height:5rem;padding:1rem;text-align:left;border-radius:0;flex:auto;border:none;border-bottom:#d8d8d8;border-bottom:.0625rem solid var(--sapList_GroupHeaderBorderColor,#d8d8d8)}.fd-product-switch__body--mobile .fd-product-switch__item:after,.fd-product-switch__body--mobile .fd-product-switch__item:before{box-sizing:inherit;font-size:inherit}.fd-product-switch__body--mobile .fd-product-switch__item .fd-product-switch__title:after,.fd-product-switch__body--mobile .fd-product-switch__item .fd-product-switch__title:before{background-color:#fff;background-color:var(--sapTile_Background,#fff)}.fd-product-switch__body--mobile .fd-product-switch__item:hover .fd-product-switch__title:after,.fd-product-switch__body--mobile .fd-product-switch__item:hover .fd-product-switch__title:before{background-color:#f5f5f5;background-color:var(--sapList_Hover_Background,#f5f5f5)}.fd-product-switch__body--mobile .fd-product-switch__item:active .fd-product-switch__title:after,.fd-product-switch__body--mobile .fd-product-switch__item:active .fd-product-switch__title:before{background-color:#0854a0;background-color:var(--sapList_SelectionBorderColor,#0854a0)}.fd-product-switch__body--mobile .fd-product-switch__item.selected{border-bottom-color:#0854a0;border-bottom-color:var(--sapList_SelectionBorderColor,#0854a0)}.fd-product-switch__body--mobile .fd-product-switch__item.selected .fd-product-switch__title:after,.fd-product-switch__body--mobile .fd-product-switch__item.selected .fd-product-switch__title:before{background-color:#0854a0;background-color:var(--sapList_SelectionBorderColor,#0854a0)}.fd-product-switch__body--mobile .fd-product-switch__item.selected:hover .fd-product-switch__title:after,.fd-product-switch__body--mobile .fd-product-switch__item.selected:hover .fd-product-switch__title:before{background-color:#d8e9f8;background-color:var(--sapList_Hover_SelectionBackground,#d8e9f8)}.fd-product-switch__body--mobile .fd-product-switch__item.selected:active .fd-product-switch__title:after,.fd-product-switch__body--mobile .fd-product-switch__item.selected:active .fd-product-switch__title:before,.fd-product-switch__body--mobile .fd-product-switch__item.selected:active:hover .fd-product-switch__title:after,.fd-product-switch__body--mobile .fd-product-switch__item.selected:active:hover .fd-product-switch__title:before{background-color:#0854a0;background-color:var(--sapList_Active_Background,#0854a0)}.fd-product-switch__body--mobile .fd-product-switch__item:focus{outline:0;border:.0625rem dotted #000;border-color:var(--sapContent_FocusColor,#000);border-radius:0}.fd-product-switch__body--mobile .fd-product-switch__item .fd-product-switch__title:after,.fd-product-switch__body--mobile .fd-product-switch__item .fd-product-switch__title:before{left:21.7rem;width:1rem;z-index:2}.fd-product-switch__body--mobile .fd-product-switch__text{display:flex;flex-direction:column;justify-content:space-between;height:100%}.fd-product-switch__body--mobile .fd-product-switch__icon{margin-bottom:0;margin-right:.75rem}.fd-product-switch__body--mobile[dir=rtl] .fd-product-switch__icon,[dir=rtl] .fd-product-switch__body--mobile .fd-product-switch__icon{margin-right:0;margin-left:.75rem}.fd-product-switch__body--mobile[dir=rtl] .fd-product-switch__text,[dir=rtl] .fd-product-switch__body--mobile .fd-product-switch__text{align-items:flex-start}.fd-product-switch__body--mobile[dir=rtl] .fd-product-switch__text .fd-product-switch__title:not(:last-child),[dir=rtl] .fd-product-switch__body--mobile .fd-product-switch__text .fd-product-switch__title:not(:last-child){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fd-product-switch__body--mobile[dir=rtl] .fd-product-switch__text .fd-product-switch__title:not(:last-child):after,[dir=rtl] .fd-product-switch__body--mobile .fd-product-switch__text .fd-product-switch__title:not(:last-child):after{display:none}.fd-product-switch__body--mobile[dir=rtl] .fd-product-switch__text .fd-product-switch__title:not(:last-child):before,[dir=rtl] .fd-product-switch__body--mobile .fd-product-switch__text .fd-product-switch__title:not(:last-child):before{display:inline-flex}.fd-product-switch__body--mobile[dir=rtl] .fd-product-switch__item .fd-product-switch__title:before,[dir=rtl] .fd-product-switch__body--mobile .fd-product-switch__item .fd-product-switch__title:before{right:21.8rem;width:2rem}.fd-product-switch__body--mobile[dir=rtl] .fd-product-switch__item .fd-product-switch__subtitle,[dir=rtl] .fd-product-switch__body--mobile .fd-product-switch__item .fd-product-switch__subtitle{position:relative;line-height:1.25rem;max-height:1.25rem;overflow:hidden;margin-right:-1em;padding-right:1em}.fd-product-switch__body--mobile[dir=rtl] .fd-product-switch__item .fd-product-switch__subtitle:before,[dir=rtl] .fd-product-switch__body--mobile .fd-product-switch__item .fd-product-switch__subtitle:before{position:absolute;content:"...";right:0;bottom:1px}.fd-product-switch__body--mobile[dir=rtl] .fd-product-switch__item .fd-product-switch__subtitle:after,[dir=rtl] .fd-product-switch__body--mobile .fd-product-switch__item .fd-product-switch__subtitle:after{content:"";position:absolute;right:0;width:1em;height:1em;margin-top:.2em;background:0 0}.fd-product-switch__body--mobile[dir=rtl] .fd-product-switch__item .fd-product-switch__subtitle:before,[dir=rtl] .fd-product-switch__body--mobile .fd-product-switch__item .fd-product-switch__subtitle:before{right:21.8rem;width:2rem;text-align:right;z-index:2}.fd-product-switch__body--mobile[dir=rtl] .fd-product-switch__item .fd-product-switch__subtitle:after,[dir=rtl] .fd-product-switch__body--mobile .fd-product-switch__item .fd-product-switch__subtitle:after{z-index:3;display:none}.fd-product-switch__body--mobile[dir=rtl] .fd-product-switch__item:active .fd-product-switch__subtitle,[dir=rtl] .fd-product-switch__body--mobile .fd-product-switch__item:active .fd-product-switch__subtitle{color:#fff;color:var(--sapList_Active_TextColor,#fff)}.cdk-drag-dragging{z-index:15;background-color:#fff;opacity:.8;transition:box-shadow .2s cubic-bezier(0,0,.2,1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.fd-product-switch__item.cdk-drag-dragging{cursor:-webkit-grabbing;cursor:grabbing}.fd-product-switch__body--mobile .fd-product-switch__item.cdk-drag-dragging,.fd-product-switch__item.cdk-drag-dragging{outline:none;box-shadow:0 0 0 .0625rem rgba(0,0,0,.15),0 .625rem 1.875rem 0 rgba(0,0,0,.3)}.fd-dnd-placeholder{top:0;left:0;position:absolute;opacity:.3;z-index:-1}.fd-dnd-container{position:relative;padding:0}.fd-dnd-container.fd-dnd-on-drag{background-color:#fff;z-index:15}.fd-dnd-container.fd-dnd-on-drag .fd-product-switch__item .fd-product-switch__title:after,.fd-dnd-container.fd-dnd-on-drag .fd-product-switch__item .fd-product-switch__title:before{background-color:#fff}.fd-dnd-container.fd-dnd-on-drag .fd-product-switch__item:active .fd-product-switch__icon{color:#0854a0}.fd-dnd-container.fd-dnd-on-drag .fd-product-switch__item:active .fd-product-switch__title{color:#32363a}.fd-dnd-container.fd-dnd-on-drag .fd-product-switch__item:active .fd-product-switch__subtitle{color:#6a6d70}.fd-dnd-container.fd-dnd-on-drag .fd-product-switch__item:active,.fd-dnd-container.fd-dnd-on-drag.selected{background-color:#fff}.fd-product-switch__fullfill{width:500px}.fd-product-switch__body--mobile .fd-product-switch__fullfill{width:100%}[dir=rtl] .fd-product-switch__body--mobile .fd-product-switch__subtitle,[dir=rtl] .fd-product-switch__body--mobile .fd-product-switch__title{text-align:right}.drop-area__line{z-index:9999;position:absolute;background:#0854a0}.drop-area__line--vertical{top:0;height:calc(100% - .5rem);width:2px}.drop-area__line--vertical.after{right:.2rem}.drop-area__line--vertical.before{left:-.3rem}.drop-area__line--vertical:before{background-color:#fff;content:"";position:absolute;left:-.2rem;top:-.5rem;border-radius:50%;width:.5rem;height:.5rem;border:.125rem solid #0854a0}.drop-area__line--horizontal{left:0;width:100%;height:2px}.drop-area__line--horizontal.before{top:0}.drop-area__line--horizontal.after{bottom:0}.drop-area__line--horizontal:before{background-color:#fff;content:"";position:absolute;left:0;top:-.2rem;border-radius:50%;width:.5rem;height:.5rem;border:.125rem solid #0854a0}.fd-product-switch__list>li{list-style-type:none}']],data:{}}));function a(t){return e.dc(0,[(t()(),e.Bb(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(t,o){t(o,0,0,o.parent.context.$implicit.image)}))}function f(t){return e.dc(0,[(t()(),e.Bb(0,0,null,null,19,"li",[["class","fd-dnd-container"],["fd-dnd-container",""]],null,null,null,null,null)),e.Ab(1,1064960,[[1,4]],1,r.a,[e.l],{stickInPlace:[0,"stickInPlace"]},null),e.Wb(603979776,2,{cdkDrag:0}),(t()(),e.Bb(3,16777216,null,null,16,"div",[["cdkDrag",""],["class","fd-product-switch__item fd-product-switch__fullfill cdk-drag"],["tabindex","0"]],[[2,"cdk-drag-disabled",null],[2,"cdk-drag-dragging",null]],[[null,"click"]],(function(t,o,i){var e=!0;return"click"===o&&(e=!1!==t.component.itemClick(t.context.$implicit,i)&&e),e}),null,null)),e.Vb(6144,null,d.k,null,[d.c]),e.Ab(5,278528,null,0,c.m,[e.t,e.u,e.l,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Tb(6,{selected:0}),e.Ab(7,4866048,[[2,4]],3,d.c,[e.l,[3,d.b],c.d,e.A,e.R,[2,d.a],[2,l.b],d.g,e.h],{disabled:[0,"disabled"]},null),e.Wb(603979776,3,{_handles:1}),e.Wb(603979776,4,{_previewTemplate:0}),e.Wb(603979776,5,{_placeholderTemplate:0}),(t()(),e.Bb(11,0,null,null,3,"div",[["class","fd-product-switch__icon"]],null,null,null,null,null)),e.Ab(12,278528,null,0,c.m,[e.t,e.u,e.l,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(t()(),e.kb(16777216,null,null,1,null,a)),e.Ab(14,16384,null,0,c.o,[e.R,e.N],{ngIf:[0,"ngIf"]},null),(t()(),e.Bb(15,0,null,null,4,"div",[["class","fd-product-switch__text"]],null,null,null,null,null)),(t()(),e.Bb(16,0,null,null,1,"div",[["class","fd-product-switch__title"]],null,null,null,null,null)),(t()(),e.ac(17,null,["",""])),(t()(),e.Bb(18,0,null,null,1,"div",[["class","fd-product-switch__subtitle"]],null,null,null,null,null)),(t()(),e.ac(19,null,["",""]))],(function(t,o){var i=o.component;t(o,1,0,o.context.$implicit.stickToPosition);var e=t(o,6,0,o.context.$implicit.selected);t(o,5,0,"fd-product-switch__item fd-product-switch__fullfill",e),t(o,7,0,o.context.$implicit.disabledDragAndDrop||!i.dragAndDropEnabled),t(o,12,0,"fd-product-switch__icon",o.context.$implicit.icon?"sap-icon--"+o.context.$implicit.icon:""),t(o,14,0,o.context.$implicit.image)}),(function(t,o){t(o,3,0,e.Qb(o,7).disabled,e.Qb(o,7)._dragRef.isDragging()),t(o,17,0,o.context.$implicit.title),t(o,19,0,o.context.$implicit.subtitle)}))}function _(t){return e.dc(2,[(t()(),e.Bb(0,0,null,null,7,"div",[["class","fd-product-switch__body"]],null,null,null,null,null)),e.Ab(1,278528,null,0,c.m,[e.t,e.u,e.l,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Tb(2,{"fd-product-switch__body--col-3":0,"fd-product-switch__body--mobile":1}),(t()(),e.Bb(3,0,null,null,4,"ul",[["class","fd-product-switch__list"],["fd-dnd-list",""]],null,[[null,"itemsChange"]],(function(t,o,i){var e=!0;return"itemsChange"===o&&(e=!1!==t.component.productSwitchItemsChangeHandle(i)&&e),e}),null,null)),e.Ab(4,1064960,null,1,s.a,[],{listMode:[0,"listMode"],items:[1,"items"]},{itemsChange:"itemsChange"}),e.Wb(603979776,1,{dndContainerItems:1}),(t()(),e.kb(16777216,null,null,1,null,f)),e.Ab(7,278528,null,0,c.n,[e.R,e.N,e.t],{ngForOf:[0,"ngForOf"]},null)],(function(t,o){var i=o.component,e=t(o,2,0,i.isSmallMode()&&!i.isListMode(),i.isListMode());t(o,1,0,"fd-product-switch__body",e),t(o,4,0,i.isListMode(),i.products),t(o,7,0,i.products)}),null)}},iGwA:function(t,o,i){"use strict";i.d(o,"a",(function(){return _})),i.d(o,"b",(function(){return u}));var e=i("LoAr"),r=i("1j2o"),d=i("GM5q"),c=i("mvBN"),l=i("dwsI"),s=i("s1E3"),n=i("0b/r"),a=i("FL/x"),f=i("l+lg"),_=(i("eS21"),e.zb({encapsulation:2,styles:[[""]],data:{}}));function u(t){return e.dc(2,[e.Wb(671088640,1,{directiveRef:0}),(t()(),e.Bb(1,0,null,null,10,"div",[["class","fd-product-switch"]],null,null,null,null,null)),(t()(),e.Bb(2,0,null,null,9,"fd-popover",[],[[2,"fd-popover-custom",null],[1,"id",0],[2,"fd-popover-custom--disabled",null]],[[null,"isOpenChange"]],(function(t,o,i){var e=!0,r=t.component;return"isOpenChange"===o&&(e=!1!==(r.isOpen=i)&&e),"isOpenChange"===o&&(e=!1!==r.openChanged(i)&&e),e}),r.b,r.a)),e.Ab(3,49152,null,1,d.a,[],{disabled:[0,"disabled"],triggers:[1,"triggers"],placement:[2,"placement"],isOpen:[3,"isOpen"],focusTrapped:[4,"focusTrapped"],closeOnOutsideClick:[5,"closeOnOutsideClick"],closeOnEscapeKey:[6,"closeOnEscapeKey"]},{isOpenChange:"isOpenChange"}),e.Wb(603979776,2,{dropdownComponent:0}),(t()(),e.Bb(5,0,null,0,3,"fd-popover-control",[],null,null,null,c.b,c.a)),e.Ab(6,49152,null,0,l.a,[],null,null),(t()(),e.Bb(7,0,null,0,1,"button",[["class","fd-shellbar__button fd-product-switch__control"],["fd-button",""]],[[1,"aria-label",0],[1,"type",0]],null,null,s.b,s.a)),e.Ab(8,638976,null,0,n.a,[e.l],{class:[0,"class"],glyph:[1,"glyph"],fdType:[2,"fdType"]},null),(t()(),e.Bb(9,0,null,2,2,"fd-popover-body",[],null,null,null,a.b,a.a)),e.Ab(10,49152,null,0,f.a,[],null,null),e.Pb(2,0)],(function(t,o){var i=o.component;t(o,3,0,i.disabled,i.triggers,i.placement,i.isOpen,!1,i.closeOnOutsideClick,i.closeOnEscapeKey),t(o,8,0,"fd-shellbar__button fd-product-switch__control","grid","transparent")}),(function(t,o){var i=o.component;t(o,2,0,!0,e.Qb(o,3).id,e.Qb(o,3).disabled),t(o,7,0,i.ariaLabel,e.Qb(o,8).type)}))}}}]);