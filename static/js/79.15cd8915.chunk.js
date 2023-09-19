"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[79],{3044:function(e,r,t){t.d(r,{Z:function(){return k}});var o=t(9439),a=t(3366),n=t(7462),i=t(2791),l=t(3733),c=t(4419),s=t(6934),d=t(1402),u=t(9201),p=t(184),m=(0,u.Z)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),v=t(5878),h=t(1217);function f(e){return(0,h.Z)("MuiAvatar",e)}(0,v.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],b=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,t=e.ownerState;return(0,n.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,n.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),Z=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),y=(0,s.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var k=i.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiAvatar"}),s=t.alt,u=t.children,m=t.className,v=t.component,h=void 0===v?"div":v,k=t.imgProps,x=t.sizes,S=t.src,w=t.srcSet,P=t.variant,R=void 0===P?"circular":P,C=(0,a.Z)(t,g),M=null,B=function(e){var r=e.crossOrigin,t=e.referrerPolicy,a=e.src,n=e.srcSet,l=i.useState(!1),c=(0,o.Z)(l,2),s=c[0],d=c[1];return i.useEffect((function(){if(a||n){d(!1);var e=!0,o=new Image;return o.onload=function(){e&&d("loaded")},o.onerror=function(){e&&d("error")},o.crossOrigin=r,o.referrerPolicy=t,o.src=a,n&&(o.srcset=n),function(){e=!1}}}),[r,t,a,n]),s}((0,n.Z)({},k,{src:S,srcSet:w})),F=S||w,N=F&&"error"!==B,j=(0,n.Z)({},t,{colorDefault:!N,component:h,variant:R}),z=function(e){var r=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(t,f,r)}(j);return M=N?(0,p.jsx)(Z,(0,n.Z)({alt:s,srcSet:w,src:S,sizes:x,ownerState:j,className:z.img},k)):null!=u?u:F&&s?s[0]:(0,p.jsx)(y,{ownerState:j,className:z.fallback}),(0,p.jsx)(b,(0,n.Z)({as:h,ownerState:j,className:(0,l.Z)(z.root,m),ref:r},C,{children:M}))}))},9174:function(e,r,t){t.d(r,{Z:function(){return A}});var o=t(4942),a=t(3366),n=t(7462),i=t(2791),l=t(3733),c=t(4419),s=t(2065),d=t(9439),u=t(4036),p=t(6934),m=t(5158),v=t(2930),h=t(2982),f=t(5878),g=t(1217);function b(e){return(0,g.Z)("PrivateSwitchBase",e)}(0,f.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var Z=t(184),y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],k=(0,p.ZP)(h.Z)((function(e){var r=e.ownerState;return(0,n.Z)({padding:9,borderRadius:"50%"},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})})),x=(0,p.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),S=i.forwardRef((function(e,r){var t=e.autoFocus,o=e.checked,i=e.checkedIcon,s=e.className,p=e.defaultChecked,h=e.disabled,f=e.disableFocusRipple,g=void 0!==f&&f,S=e.edge,w=void 0!==S&&S,P=e.icon,R=e.id,C=e.inputProps,M=e.inputRef,B=e.name,F=e.onBlur,N=e.onChange,j=e.onFocus,z=e.readOnly,I=e.required,q=void 0!==I&&I,A=e.tabIndex,L=e.type,T=e.value,D=(0,a.Z)(e,y),O=(0,m.Z)({controlled:o,default:Boolean(p),name:"SwitchBase",state:"checked"}),W=(0,d.Z)(O,2),E=W[0],H=W[1],G=(0,v.Z)(),V=h;G&&"undefined"===typeof V&&(V=G.disabled);var _="checkbox"===L||"radio"===L,$=(0,n.Z)({},e,{checked:E,disabled:V,disableFocusRipple:g,edge:w}),J=function(e){var r=e.classes,t=e.checked,o=e.disabled,a=e.edge,n={root:["root",t&&"checked",o&&"disabled",a&&"edge".concat((0,u.Z)(a))],input:["input"]};return(0,c.Z)(n,b,r)}($);return(0,Z.jsxs)(k,(0,n.Z)({component:"span",className:(0,l.Z)(J.root,s),centerRipple:!0,focusRipple:!g,disabled:V,tabIndex:null,role:void 0,onFocus:function(e){j&&j(e),G&&G.onFocus&&G.onFocus(e)},onBlur:function(e){F&&F(e),G&&G.onBlur&&G.onBlur(e)},ownerState:$,ref:r},D,{children:[(0,Z.jsx)(x,(0,n.Z)({autoFocus:t,checked:o,defaultChecked:p,className:J.input,disabled:V,id:_?R:void 0,name:B,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var r=e.target.checked;H(r),N&&N(e,r)}},readOnly:z,ref:M,required:q,ownerState:$,tabIndex:A,type:L},"checkbox"===L&&void 0===T?{}:{value:T},C)),E?i:P]}))})),w=t(9201),P=(0,w.Z)((0,Z.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),R=(0,w.Z)((0,Z.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),C=(0,w.Z)((0,Z.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),M=t(1402);function B(e){return(0,g.Z)("MuiCheckbox",e)}var F=(0,f.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),N=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],j=(0,p.ZP)(S,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,t.indeterminate&&r.indeterminate,"default"!==t.color&&r["color".concat((0,u.Z)(t.color))]]}})((function(e){var r,t=e.theme,a=e.ownerState;return(0,n.Z)({color:(t.vars||t).palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===a.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,s.Fq)("default"===a.color?t.palette.action.active:t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&(r={},(0,o.Z)(r,"&.".concat(F.checked,", &.").concat(F.indeterminate),{color:(t.vars||t).palette[a.color].main}),(0,o.Z)(r,"&.".concat(F.disabled),{color:(t.vars||t).palette.action.disabled}),r))})),z=(0,Z.jsx)(R,{}),I=(0,Z.jsx)(P,{}),q=(0,Z.jsx)(C,{}),A=i.forwardRef((function(e,r){var t,o,s=(0,M.Z)({props:e,name:"MuiCheckbox"}),d=s.checkedIcon,p=void 0===d?z:d,m=s.color,v=void 0===m?"primary":m,h=s.icon,f=void 0===h?I:h,g=s.indeterminate,b=void 0!==g&&g,y=s.indeterminateIcon,k=void 0===y?q:y,x=s.inputProps,S=s.size,w=void 0===S?"medium":S,P=s.className,R=(0,a.Z)(s,N),C=b?k:f,F=b?k:p,A=(0,n.Z)({},s,{color:v,indeterminate:b,size:w}),L=function(e){var r=e.classes,t=e.indeterminate,o=e.color,a=e.size,i={root:["root",t&&"indeterminate","color".concat((0,u.Z)(o)),"size".concat((0,u.Z)(a))]},l=(0,c.Z)(i,B,r);return(0,n.Z)({},r,l)}(A);return(0,Z.jsx)(j,(0,n.Z)({type:"checkbox",inputProps:(0,n.Z)({"data-indeterminate":b},x),icon:i.cloneElement(C,{fontSize:null!=(t=C.props.fontSize)?t:w}),checkedIcon:i.cloneElement(F,{fontSize:null!=(o=F.props.fontSize)?o:w}),ownerState:A,ref:r,className:(0,l.Z)(L.root,P)},R,{classes:L}))}))},4989:function(e,r,t){t.d(r,{Z:function(){return L}});var o=t(4942),a=t(3366),n=t(7462),i=t(2791),l=t(3733),c=t(4419),s=t(2930),d=t(2466),u=t(1217),p=t(3457),m=t(7078),v=t(8519),h=t(5080),f=t(1184),g=t(5682),b=t(184),Z=["component","direction","spacing","divider","children","className","useFlexGap"],y=(0,h.Z)(),k=(0,p.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,r){return r.root}});function x(e){return(0,m.Z)({props:e,name:"MuiStack",defaultTheme:y})}function S(e,r){var t=i.Children.toArray(e).filter(Boolean);return t.reduce((function(e,o,a){return e.push(o),a<t.length-1&&e.push(i.cloneElement(r,{key:"separator-".concat(a)})),e}),[])}var w=function(e){var r=e.ownerState,t=e.theme,a=(0,n.Z)({display:"flex",flexDirection:"column"},(0,f.k9)({theme:t},(0,f.P$)({values:r.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(r.spacing){var i=(0,g.hB)(t),l=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof r.spacing&&null!=r.spacing[t]||"object"===typeof r.direction&&null!=r.direction[t])&&(e[t]=!0),e}),{}),c=(0,f.P$)({values:r.direction,base:l}),s=(0,f.P$)({values:r.spacing,base:l});"object"===typeof c&&Object.keys(c).forEach((function(e,r,t){if(!c[e]){var o=r>0?c[t[r-1]]:"column";c[e]=o}}));a=(0,d.Z)(a,(0,f.k9)({theme:t},s,(function(e,t){return r.useFlexGap?{gap:(0,g.NA)(i,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":(0,o.Z)({},"margin".concat((a=t?c[t]:r.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a])),(0,g.NA)(i,e))};var a})))}return a=(0,f.dt)(t.breakpoints,a)};var P=t(6934),R=t(1402),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.createStyledComponent,t=void 0===r?k:r,o=e.useThemeProps,s=void 0===o?x:o,d=e.componentName,p=void 0===d?"MuiStack":d,m=function(){return(0,c.Z)({root:["root"]},(function(e){return(0,u.Z)(p,e)}),{})},h=t(w),f=i.forwardRef((function(e,r){var t=s(e),o=(0,v.Z)(t),i=o.component,c=void 0===i?"div":i,d=o.direction,u=void 0===d?"column":d,p=o.spacing,f=void 0===p?0:p,g=o.divider,y=o.children,k=o.className,x=o.useFlexGap,w=void 0!==x&&x,P=(0,a.Z)(o,Z),R={direction:u,spacing:f,useFlexGap:w},C=m();return(0,b.jsx)(h,(0,n.Z)({as:c,ownerState:R,ref:r,className:(0,l.Z)(C.root,k)},P,{children:g?S(y,g):y}))}));return f}({createStyledComponent:(0,P.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,r){return r.root}}),useThemeProps:function(e){return(0,R.Z)({props:e,name:"MuiStack"})}}),M=C,B=t(890),F=t(4036);function N(e){return(0,u.Z)("MuiFormControlLabel",e)}var j=(0,t(5878).Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),z=t(6147),I=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],q=(0,P.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[(0,o.Z)({},"& .".concat(j.label),r.label),r.root,r["labelPlacement".concat((0,F.Z)(t.labelPlacement))]]}})((function(e){var r=e.theme,t=e.ownerState;return(0,n.Z)((0,o.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(j.disabled),{cursor:"default"}),"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,o.Z)({},"& .".concat(j.label),(0,o.Z)({},"&.".concat(j.disabled),{color:(r.vars||r).palette.text.disabled})))})),A=(0,P.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:function(e,r){return r.asterisk}})((function(e){var r=e.theme;return(0,o.Z)({},"&.".concat(j.error),{color:(r.vars||r).palette.error.main})})),L=i.forwardRef((function(e,r){var t,o,d=(0,R.Z)({props:e,name:"MuiFormControlLabel"}),u=d.className,p=d.componentsProps,m=void 0===p?{}:p,v=d.control,h=d.disabled,f=d.disableTypography,g=d.label,Z=d.labelPlacement,y=void 0===Z?"end":Z,k=d.required,x=d.slotProps,S=void 0===x?{}:x,w=(0,a.Z)(d,I),P=(0,s.Z)(),C=null!=(t=null!=h?h:v.props.disabled)?t:null==P?void 0:P.disabled,j=null!=k?k:v.props.required,L={disabled:C,required:j};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof v.props[e]&&"undefined"!==typeof d[e]&&(L[e]=d[e])}));var T=(0,z.Z)({props:d,muiFormControl:P,states:["error"]}),D=(0,n.Z)({},d,{disabled:C,labelPlacement:y,required:j,error:T.error}),O=function(e){var r=e.classes,t=e.disabled,o=e.labelPlacement,a=e.error,n=e.required,i={root:["root",t&&"disabled","labelPlacement".concat((0,F.Z)(o)),a&&"error",n&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",a&&"error"]};return(0,c.Z)(i,N,r)}(D),W=null!=(o=S.typography)?o:m.typography,E=g;return null==E||E.type===B.Z||f||(E=(0,b.jsx)(B.Z,(0,n.Z)({component:"span"},W,{className:(0,l.Z)(O.label,null==W?void 0:W.className),children:E}))),(0,b.jsxs)(q,(0,n.Z)({className:(0,l.Z)(O.root,u),ownerState:D,ref:r},w,{children:[i.cloneElement(v,L),j?(0,b.jsxs)(M,{direction:"row",alignItems:"center",children:[E,(0,b.jsxs)(A,{ownerState:D,"aria-hidden":!0,className:O.asterisk,children:["\u2009","*"]})]}):E]}))}))},890:function(e,r,t){t.d(r,{Z:function(){return y}});var o=t(3366),a=t(7462),n=t(2791),i=t(3733),l=t(8519),c=t(4419),s=t(6934),d=t(1402),u=t(4036),p=t(5878),m=t(1217);function v(e){return(0,m.Z)("MuiTypography",e)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=t(184),f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,t.variant&&r[t.variant],"inherit"!==t.align&&r["align".concat((0,u.Z)(t.align))],t.noWrap&&r.noWrap,t.gutterBottom&&r.gutterBottom,t.paragraph&&r.paragraph]}})((function(e){var r=e.theme,t=e.ownerState;return(0,a.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&r.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=n.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiTypography"}),n=function(e){return Z[e]||e}(t.color),s=(0,l.Z)((0,a.Z)({},t,{color:n})),p=s.align,m=void 0===p?"inherit":p,y=s.className,k=s.component,x=s.gutterBottom,S=void 0!==x&&x,w=s.noWrap,P=void 0!==w&&w,R=s.paragraph,C=void 0!==R&&R,M=s.variant,B=void 0===M?"body1":M,F=s.variantMapping,N=void 0===F?b:F,j=(0,o.Z)(s,f),z=(0,a.Z)({},s,{align:m,color:n,className:y,component:k,gutterBottom:S,noWrap:P,paragraph:C,variant:B,variantMapping:N}),I=k||(C?"p":N[B]||b[B])||"span",q=function(e){var r=e.align,t=e.gutterBottom,o=e.noWrap,a=e.paragraph,n=e.variant,i=e.classes,l={root:["root",n,"inherit"!==e.align&&"align".concat((0,u.Z)(r)),t&&"gutterBottom",o&&"noWrap",a&&"paragraph"]};return(0,c.Z)(l,v,i)}(z);return(0,h.jsx)(g,(0,a.Z)({as:I,ref:r,ownerState:z,className:(0,i.Z)(q.root,y)},j))}))}}]);
//# sourceMappingURL=79.15cd8915.chunk.js.map