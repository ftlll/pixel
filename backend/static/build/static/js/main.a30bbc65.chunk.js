(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{175:function(e,t,n){e.exports=n(386)},180:function(e,t,n){},386:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"init",(function(){return O})),n.d(r,"newProject",(function(){return C})),n.d(r,"clear",(function(){return N})),n.d(r,"setCanvas",(function(){return j})),n.d(r,"changeName",(function(){return T})),n.d(r,"changeDimensions",(function(){return S})),n.d(r,"changeDuration",(function(){return P})),n.d(r,"changeCellSize",(function(){return k})),n.d(r,"importPixelate",(function(){return A})),n.d(r,"applyTools",(function(){return I})),n.d(r,"switchTool",(function(){return _})),n.d(r,"selectPaletteColor",(function(){return D})),n.d(r,"applyColorPicker",(function(){return z})),n.d(r,"addNewFrame",(function(){return R})),n.d(r,"addDuplicatedFrame",(function(){return x})),n.d(r,"deleteFrame",(function(){return L})),n.d(r,"switchFrame",(function(){return M})),n.d(r,"reorderFrame",(function(){return U})),n.d(r,"undo",(function(){return F})),n.d(r,"redo",(function(){return H}));var a=n(0),c=n.n(a),o=n(26),i=n.n(o),l=(n(94),n(180),n(7)),s=n(8),u=n(10),d=n(9),p=n(11),m=(n(181),n(24)),f="PENCIL",g="APPLY_".concat(f),v="APPLY_".concat("ERASER"),E="APPLY_".concat("PAINT_BUCKET"),h="APPLY_".concat("EYE_DROPPER"),b="APPLY_".concat("COLOR_PICKER"),w=n(34),y=n.n(w);function O(){return{type:"SET_INIT_STATE"}}function C(){return{type:"NEW_PROJECT"}}function N(){return{type:"CLEAR"}}function j(e,t,n,r,a){return{type:"SET_CANVAS",grids:e,paletteGrid:t,cellSize:n,columns:r,rows:a}}function T(e){return{type:"CHANGE_NAME",name:e}}function S(e,t){return{type:"CHANGE_DIMENSIONS",newColumns:e,newRows:t}}function P(e){return{type:"CHANGE_DURATION",duration:parseInt(e,10)}}function k(e){return{type:"CHANGE_CELL_SIZE",size:parseInt(e,10)}}function A(e){return{type:"IMPORT_PIXELATE",grids:e.grids,columns:e.columns,rows:e.rows,options:e.options}}function I(e){var t=e.paletteColor,n=void 0===t?"":t,r=e.color,a=e.id,c=e.columns,o=e.rows,i=e.drawingTool;return{type:"APPLY_".concat(i),paletteColor:n,color:r,id:a,columns:c,rows:o}}function _(e){return{type:"SWITCH_TOOL",drawingTool:e}}function D(e){return{type:"SELECT_PALETTE_COLOR",id:e}}function z(e){return{type:b,color:e}}function R(){return{type:"ADD_NEW_FRAME"}}function x(e){return{type:"ADD_DUPLICATED_FRAME",id:e}}function L(e){return{type:"DELETE_FRAME",id:e}}function M(e){return{type:"SWITCH_FRAME",id:e}}function U(e,t){return{type:"REORDER_FRAMES",initIndex:e,finalIndex:t}}function F(){return w.ActionCreators.undo()}function H(){return w.ActionCreators.redo()}function W(e){try{var t=e.getItem("PIXEL_ART_HUB");return!!t&&JSON.parse(t)}catch(n){return!1}}function G(e,t){var n=W(e);if(n){var r=0;return n.stored.splice(t,1),0===n.stored.length?r=-1:n.current>t&&(r=n.current-1),n.current=r,function(e,t){try{return e.setItem("PIXEL_ART_HUB",JSON.stringify(t)),!0}catch(n){return!1}}(e,n)}return!1}var B=function(e,t){var n=W(t);if(n){if(n.current>0){var r=n.stored[n.current],a=r.grids,c=r.paletteGridData,o=r.columns,i=r.rows,l=r.cellSize;r.duration;e(j(a,c,l,o,i))}}else!function(e){e.setItem("PIXEL_ART_HUB",JSON.stringify({stored:[],current:0}))}(t)},J=n(2),Y=Object(J.b)((function(e){return{name:e.present.get("canvas").get("name")}}),(function(e){return{changeName:function(){return e(T)}}}))((function(e){e.changeName,e.name;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"title"},c.a.createElement("h2",null," PIXEL ART HUB ")),c.a.createElement("div",{className:"author"},c.a.createElement("h5",null,"GITHUB: ",c.a.createElement("a",{href:"https://github.com/ftlll/pixel",target:"_blank",rel:"noopener noreferrer"},"FTL"))))})),X=n(57),K=n(174),V=function(e,t){return Object(K.a)({color:e.grid.get(t),id:t},e)},Z=function(e){return{onMouseUp:function(){e.setState({pressed:!1})},drawHandlers:function(t){return{onMouseDown:function(n,r){r.preventDefault();var a=t.props,c=V(a,n);a.applyTools(c),e.setState({pressed:!0})},onMouseOver:function(n,r){r.preventDefault();var a=t.props,c=V(a,n);e.state.pressed&&a.applyTools(c)}}}}},$=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e){var t=this.props.cell,n=t.color,r=t.width;return e.color!==n||e.width!==r}},{key:"render",value:function(){var e=this.props,t=e.cell,n=t.color,r=t.width,a=e.id,o=e.drawHandler,i={width:"".concat(r,"%"),paddingBottom:"".concat(r,"%"),backgroundColor:n||"rgba(49, 49, 49, 0.4)"};return c.a.createElement("div",{style:i,className:"cell",onMouseDown:function(e){return o.onMouseDown(a,e)},onMouseOver:function(e){return o.onMouseOver(a,e)},onFocus:function(e){return o.onMouseOver(a,e)},onTouchStart:function(e){return o.onMouseDown(a,e)}})}}]),t}(c.a.Component),q=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e){var t=this.props.cells;return e.cells!==t}},{key:"render",value:function(){var e=this,t=this.props,n=t.style,r=t.cells;return c.a.createElement("div",{style:n},r.map((function(t,n){return c.a.createElement($,{cell:t,key:t.id,id:n,drawHandler:e.props.drawHandler})})))}}]),t}(c.a.Component),Q=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={pressed:!1},n.drawHandlerProvider=Z(Object(X.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e){var t=this.props.grid;return e.grid!==t}},{key:"render",value:function(){var e=this.props,t=e.grid.map((function(t,n){return{id:n,width:100/e.columns,color:t}}));return c.a.createElement("div",{onMouseUp:this.drawHandlerProvider.onMouseUp,onTouchEnd:this.drawHandlerProvider.onMouseUp,onTouchCancel:this.drawHandlerProvider.onMouseUp,style:{width:"90%"}},c.a.createElement(q,{cells:t,drawingTool:e.drawingTool,drawHandler:this.drawHandlerProvider.drawHandlers(this)}))}}]),t}(c.a.Component),ee=Object(J.b)((function(e){var t=e.present.get("canvas"),n=e.present.get("drawingTool"),r=e.present.get("palette"),a=r.get("active"),c=r.getIn(["grid",-1===a?0:a,"color"]);return{grid:t.get("grids").get(t.get("active")),paletteColor:c,drawingTool:n,columns:t.get("columns"),rows:t.get("rows")}}),(function(e){return{applyTools:function(t){return e(I(t))}}}))(Q),te=n(142),ne=n.n(te),re=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={visible:!1},n.handleClick=function(){n.setState({visible:!n.state.visible})},n.handleClose=function(){n.setState({visible:!1})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.color,n=e.applyColorPicker,r=e.applyPencil;this.applyColorPicker=function(e){var t="rgba("+(e=e.rgb).r+","+e.g+","+e.b+","+e.a+")";n(t),r()};var a={picker:{position:"relative",bottom:"5em",left:"-250px"},popover:{position:"absolute",zIndex:"2",right:-250,top:155},cover:{position:"fixed",top:0,right:0,bottom:0,left:0}};return c.a.createElement("div",{className:"color-picker ".concat(this.state.visible?"active":"")},c.a.createElement("i",{className:"fas fa-paint-brush",onClick:this.handleClick}),c.a.createElement("div",{style:a.picker},this.state.visible?c.a.createElement("div",{style:a.popover},c.a.createElement("div",{style:a.cover,onClick:this.handleClose}),c.a.createElement(ne.a,{color:t,onChange:this.applyColorPicker,onClose:this.handleClose,type:"sketch"})):null))}}]),t}(c.a.Component),ae=Object(J.b)((function(e){var t=e.present.get("palette").toObject(),n=t.grid,r=t.active;return{color:-1===r?"rgba(49,49,49,1)":n.getIn([r,"color"])}}),(function(e){return{applyColorPicker:function(t){return e(z(t))},applyPencil:function(){return e(_(f))}}}))(re),ce=Object(J.b)((function(e){return{usingPencil:e.present.get("drawingTool")===f}}),(function(e){return{switchPencil:function(){return e(_(f))}}}))((function(e){var t=e.usingPencil,n=e.switchPencil;return c.a.createElement("div",{className:"pencil ".concat(t?"active":"")},c.a.createElement("i",{"aria-label":"Pencil Tool",onClick:n,className:"fas fa-pencil-alt"}))})),oe=Object(J.b)((function(e){return{usingEraser:"ERASER"===e.present.get("drawingTool")}}),(function(e){return{switchEraser:function(){return e(_("ERASER"))}}}))((function(e){var t=e.usingEraser,n=e.switchEraser;return c.a.createElement("div",{className:"eraser ".concat(t?"active":"")},c.a.createElement("i",{"aria-label":"Eraser Tool",onClick:n,className:"fas fa-eraser"}))})),ie=Object(J.b)((function(e){return{usingEyeDropper:"EYE_DROPPER"===e.present.get("drawingTool")}}),(function(e){return{switchEyeDropper:function(){return e(_("EYE_DROPPER"))}}}))((function(e){var t=e.usingEyeDropper,n=e.switchEyeDropper;return c.a.createElement("div",{className:"eye-dropper ".concat(t?"active":"")},c.a.createElement("i",{"aria-label":"EyeDropper Tool",onClick:n,className:"eyeDropper fas fa-eye-dropper"}))})),le=n(12),se=function(e){var t=e.width,n=e.color,r=e.active,a=e.selectPaletteColor,o=e.id,i={width:"".concat(t,"%"),height:"30px",backgroundColor:n||"rgba(49, 49, 49, 0.5)"};return c.a.createElement("button",{style:i,onClick:function(){return a(o)},className:"palette-cell ".concat(r?"active":"")})},ue=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.grid,n=e.active,r=e.selectPaletteColor;return c.a.createElement("div",{className:"palette-grid"},t.map((function(e,t){return c.a.createElement(se,{color:e.get("color"),active:n===t,width:12.5,key:e.get("id"),id:t,selectPaletteColor:r})})))}}]),t}(c.a.Component),de=Object(J.b)((function(e){var t=e.present.get("palette").toObject();return{grid:t.grid,active:t.active}}),(function(e){return Object(le.b)({selectPaletteColor:D},e)}))(ue),pe=Object(J.b)((function(e){return{usingPaintBucket:"PAINT_BUCKET"===e.present.get("drawingTool")}}),(function(e){return{switchPaintBucket:function(){return e(_("PAINT_BUCKET"))}}}))((function(e){var t=e.usingPaintBucket,n=e.switchPaintBucket;return c.a.createElement("div",{className:"bucket ".concat(t?"active":"")},c.a.createElement("i",{"aria-label":"Paint Bucket Tool",className:"fas fa-fill-drip",onClick:n}))})),me=Object(J.b)(null,(function(e){return{actions:Object(le.b)(r,e)}}))((function(e){return c.a.createElement("div",{className:"undo-redo"},c.a.createElement("div",{className:"undo-container"},c.a.createElement("button",{className:"undo fas fa-undo-alt",onClick:function(){e.actions.undo()}})),c.a.createElement("div",{className:"redo-container"},c.a.createElement("button",{className:"redo fas fa-redo-alt",onClick:function(){e.actions.redo()}})))})),fe=n(143),ge=n.n(fe),ve=n(92),Ee=n.n(ve),he=n(88),be=n(44),we=n(5);var ye=n(66),Oe=Object(ye.a)((function(e){var t=ye.a.keyframes(e.boxShadow,"pulse"),n={position:"absolute",animation:"x ".concat(e.duration,"s infinite"),animationName:t,left:"-5px",top:"-5px"};return c.a.createElement("div",{style:n})})),Ce=function(e){var t=e.storedData||e,n=t.columns,r=t.rows,a=t.cellSize||10,o={width:"".concat(n*a,"px"),height:"".concat(r*a,"px"),position:"relative"};return c.a.createElement("div",{className:"preview",style:o},function(){var t,n,r=e.duration,a=e.storedData,o=e.active,i=a||e,l=i.grids,s=i.columns,u=i.cellSize,d=i.animate,p=l.size>1&&d,m=u||10,f=r||5,g={previewWrapper:{height:m,width:m}};return d?t=function(e,t,n){var r=Object(we.a)(),a=e.size,c=100/a;return e.forEach((function(e,t){var n=t===a-1?100:Math.round((t+1)*c*10)/10,o=Object(we.b)({grid:e,interval:n});r=r.push(o)})),Object(be.getAnimationKeyframes)(r,{pSize:n,c:t})}(l,s,m):n=function(e,t,n,r){return Object(be.getImageData)(e,{format:r,pSize:n,c:t})}(l.get(o),s,m,"string"),g.previewWrapper.boxShadow=n,g.previewWrapper.MozBoxShadow=n,g.previewWrapper.WebkitBoxShadow=n,c.a.createElement("div",{style:p?null:g.previewWrapper},p?c.a.createElement(he.a,null,c.a.createElement(Oe,{duration:f,boxShadow:t})):null)}())},Ne=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={},n.fileUpload=function(){n.props.fileUpload(n.state)},n.fileProcess=function(e,t){n.setState({file:e})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"upload"},c.a.createElement("input",{type:"file",onChange:this.fileProcess}),c.a.createElement("button",{className:"upload-button",onClick:this.fileUpload},"Upload"))}}]),t}(c.a.Component),je=Object(J.b)(null,(function(e){return{fileUpload:function(t){var n=new FormData;t.file?(n.append("file",t.file),fetch("./api/pixelate",{headers:{"Access-Control-Allow-Origin":!0},method:"POST",body:n}).then((function(e){return e.json()})).then((function(t){e(A(t))}))):alert("no file attached")}}}))(Ne),Te="undefined"===typeof localStorage?null:localStorage,Se=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"importProject",value:function(){var e=function(e){if(""===e)return!1;try{return JSON.parse(e)}catch(t){return!1}}(this.importProjectData.value),t=this.props,n=t.actions,r=t.close;if(e){var a=e.grids,c=e.paletteGridData,o=e.columns,i=e.rows,l=e.cellSize;n.setCanvas(a,c,l,o,i),r(),m.NotificationManager.success("Project successfully imported")}else m.NotificationManager.error("Sorry, there is some error importing project")}},{key:"removeFromStorage",value:function(e,t){var n=this.props.close;(t.stopPropagation(),Te)&&(G(Te,e)&&(m.NotificationManager.success("Drawing deleted"),n()))}},{key:"drawingClick",value:function(e){var t=this.props,n=t.actions,r=t.close;n.setCanvas(e.grids,e.paletteGridData,e.cellSize,e.columns,e.rows),r(),m.NotificationManager.success("Project successfully imported")}},{key:"getDrawing",value:function(){var e=this;if(Te){var t=W(Te);if(t&&t.stored.length>0)return t.stored.map((function(t,n){var r={animate:t.grids.length>1,cellSize:5,columns:t.columns,grids:Object(we.c)(t.grids),paletteGridData:Object(we.c)(t.paletteGridData),rows:t.rows,id:n};return c.a.createElement("div",{key:r.id,onClick:function(){e.drawingClick(r)},onKeyPress:function(){e.drawingClick(r)},className:"local-data-preview",tabIndex:0},c.a.createElement(Ce,{key:r.id,storedData:r,active:0,duration:1}),c.a.createElement("div",{className:"local-data-delete",onClick:function(t){e.removeFromStorage(r.id,t)}},c.a.createElement("i",{className:"fas fa-trash-alt"})))}))}return[]}},{key:"getOptions",value:function(e){var t=this.getDrawing().length>0;return c.a.createElement("div",{className:"load-drawing"},c.a.createElement("h3",null,"Select one of your saved drawings"),c.a.createElement("div",{className:"load-drawing__container\n                ".concat(t?"":"empty")},t?this.getDrawing():"Nothing saved yet..."))}},{key:"render",value:function(){var e=this.props.loadType;return this.getOptions(e)}}]),t}(c.a.Component),Pe=n(91),ke=n.n(Pe),Ae=Object(J.b)((function(e){return{canvas:e.present.get("canvas")}}),(function(e){return{}}))((function(e){var t=e.canvas,n=e.type;return c.a.createElement("button",{className:"download",onClick:function(){fetch("./api/img",{headers:{"Access-Control-Allow-Origin":!0,"Content-Type":"application/json"},method:"POST",body:JSON.stringify({type:n,grids:t.get("grids"),columns:t.get("columns"),rows:t.get("rows"),size:t.get("size"),active:t.get("active")})}).then((function(e){return e.blob()})).then((function(e){"gif"===n?ke.a.saveAs(e,"pixel.gif"):"png"===n&&ke.a.saveAs(e,"pixel.png")}))}},"DOWNLOAD")})),Ie=function(e){var t=e.grids,n=e.columns,r=e.size,a=e.active,o=e.animate,i=e.duration;return c.a.createElement("div",{className:"display-css"},o?c.a.createElement("h4",null,"Paste the following code anywhere in the CSS code and assign",c.a.createElement("b",null," .pixel-animation "),"class to a HTML element"):c.a.createElement("h4",null,"Paste the following code anywhere in the CSS code and assign",c.a.createElement("b",null," .pixelart-to-css "),"class to a HTML element"),c.a.createElement("textarea",{className:"css-textarea",readOnly:!0,value:o?function(e,t,n,r){return Object(be.getAnimationCssClassOutput)(e,{pSize:n,c:t,duration:r,cssClassName:"pixel-art-hub"})}(t,n,r,i):function(e,t,n){return Object(be.getImageCssClassOutput)(e,{format:"string",pSize:n,c:t,cssClassName:"pixel-art-hub"})}(t.get(a),n,r)}))},_e=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).changeType=function(e){n.setState({type:e[0].value})},n.getImportContent=function(e){var t=n.props.actions;switch(e){case"upload image":return c.a.createElement(je,null);case"local data":default:return c.a.createElement(Se,{actions:t,close:n.closeModal,open:n.openModal})}},n.getExportContent=function(e){var t,r=n.props,a=r.grids,o=r.columns,i=r.rows,l=r.active,s=r.cellSize,u=r.duration,d={textAlign:"center"};switch(e){case"download files":return t=c.a.createElement("div",{className:"preview-animation"},c.a.createElement("div",{style:d},"Animation"),c.a.createElement(Ce,{key:"0",grids:a,columns:o,rows:i,cellSize:10,duration:5,active:l,animate:!0}),c.a.createElement(Ae,{type:"gif"})),c.a.createElement("div",{className:"preview-content"},c.a.createElement("div",{className:"preview-frame ".concat(a.size>1?"":"only")},c.a.createElement("div",{style:d},"Current Frame"),c.a.createElement(Ce,{key:"0",grids:a,columns:o,rows:i,cellSize:10,duration:5,active:l,animate:!1}),c.a.createElement(Ae,{className:"download-button",type:"png"})),a.size>1?t:"");case"get css data (current frame)":return c.a.createElement(Ie,{grids:a,columns:o,rows:i,size:s,duration:u,active:l,animate:!1});case"get css data (animation)":return c.a.createElement(Ie,{grids:a,columns:o,rows:i,size:s,duration:u,active:l,animate:!0});default:return t=c.a.createElement("div",{className:"preview-animation"},c.a.createElement("div",{style:d},"Animation"),c.a.createElement(Ce,{key:"0",grids:a,columns:o,rows:i,cellSize:s,duration:u,active:l,animate:!0}),c.a.createElement(Ae,{type:"gif"})),c.a.createElement("div",{className:"preview-content"},c.a.createElement("div",{className:"preview-frame ".concat(a.size>1?"":"only")},c.a.createElement("div",{style:d},"Current Frame"),c.a.createElement(Ce,{key:"0",grids:a,columns:o,rows:i,cellSize:s,duration:u,active:l,animate:!1}),c.a.createElement(Ae,{className:"download-button",type:"png"})),a.size>1?t:"")}},n.getPreviewContent=function(){var e=n.props,t=e.grids,r=e.columns,a=e.rows,o=e.duration,i=e.active,l={textAlign:"center"},s=c.a.createElement("div",{className:"preview-animation"},c.a.createElement("div",{style:l},"Animation"),c.a.createElement(Ce,{key:"0",grids:t,columns:r,rows:a,cellSize:10,duration:o,active:i,animate:!0}));return c.a.createElement("div",{className:"preview-content"},c.a.createElement("div",{className:"preview-frame ".concat(t.size>1?"":"only")},c.a.createElement("div",{style:l},"Current Frame"),c.a.createElement(Ce,{key:"0",grids:t,columns:r,rows:a,cellSize:10,active:i,animate:!1})),t.size>1?s:"")},n.getModalContent=function(e){var t,r;switch(e){case"import":r=[{value:"local data"},{value:"upload image"}],t=c.a.createElement("div",{className:"popup"},c.a.createElement("button",{className:"popup-close",onClick:function(){return n.props.close()}},"x"),c.a.createElement("div",{className:"popup-header"},"Import"),c.a.createElement("div",{className:"dropdown-select"},c.a.createElement(Ee.a,{options:r,values:[{value:"local data"}],onChange:n.changeType,labelField:"value",searchable:!1})),n.getImportContent(n.state.type));break;case"export":r=[{value:"download files"},{value:"get css data (current frame)"},{value:"get css data (animation)"}],t=c.a.createElement("div",{className:"popup"},c.a.createElement("button",{className:"popup-close",onClick:function(){return n.props.close()}},"x"),c.a.createElement("div",{className:"popup-header"},"Export"),c.a.createElement("div",{className:"dropdown-select"},c.a.createElement(Ee.a,{options:r,values:[{value:"download images"}],onChange:n.changeType,labelField:"value",searchable:!1})),n.getExportContent(n.state.type));break;case"preview":t=c.a.createElement("div",{className:"popup"},c.a.createElement("button",{className:"popup-close",onClick:function(){return n.props.close()}},"x"),c.a.createElement("div",{className:"popup-header"},"Preivew"),n.getPreviewContent())}return t},n.state={type:[]},n.closeModal=function(){e.close()},n.openModal=function(){n.props.visible=!0},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.visible,r=t.popUpType;return c.a.createElement(ge.a,{visible:n,width:"80%",height:"80%",effect:"fadeInUp",onClickAway:function(){return e.props.close()}},this.getModalContent(r))}}]),t}(c.a.Component),De=Object(J.b)((function(e){var t=e.present.get("canvas"),n=t.get("active");return{grids:t.get("grids"),active:n,activeGrid:t.getIn(["grids",n]),paletteGridData:e.present.getIn(["palette","grid"]),columns:t.get("columns"),rows:t.get("rows"),cellSize:e.present.get("size"),duration:e.present.get("duration")}}),(function(e){return{actions:Object(le.b)(r,e)}}))(_e),ze=Object(J.b)(null,(function(e){return{newProject:function(){return e({type:"NEW_PROJECT"})}}}))((function(e){var t=e.newProject;return c.a.createElement("button",{type:"button",className:"newProject",onClick:t},"NEW PROJECT")})),Re=Object(J.b)(null,(function(e){return{clear:function(){return e({type:"CLEAR"})}}}))((function(e){var t=e.clear;return c.a.createElement("button",{type:"button",className:"clear",onClick:t},"CLEAR")})),xe=Object(J.b)((function(e){var t=e.present.get("canvas");return{grids:t.get("grids"),columns:t.get("columns"),rows:t.get("rows"),cellSize:e.present.get("cellSize"),paletteGridData:e.present.getIn(["palette","grid"])}}),(function(e){return{}}))((function(e){return c.a.createElement("button",{className:"save",type:"button",onClick:function(){var t={grids:e.grids,paletteGridData:e.paletteGridData,cellSize:e.cellSize,columns:e.columns,rows:e.rows,animate:e.grids.size>1};!function(e,t){try{var n=W(e);n?(n.stored.push(t),n.current=n.stored.length-1):n={stored:[t],current:0},e.setItem("PIXEL_ART_HUB",JSON.stringify(n))}catch(r){return!1}}(localStorage,t),m.NotificationManager.success("Saved to local storage successfully!")}},"SAVE")})),Le=n(43),Me=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.grid,n=e.columns,r=e.rows,a=e.actions,o=e.id,i=e.active,l=e.size,s=function(){a.switchFrame(o)},u=function(){a.addDuplicatedFrame(o)},d=function(){a.deleteFrame(o)};return c.a.createElement(Le.b,{key:o,draggableId:o.toString(),index:o},(function(e){return c.a.createElement("div",Object.assign({onClick:s},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,className:"frame ".concat(i===o?"active":"")}),c.a.createElement(Ce,{key:o,grids:Object(we.a)([t]),columns:n,rows:r,cellSize:4,active:0}),c.a.createElement("div",{className:"frame-tools"},c.a.createElement("i",{role:"button",onClick:u,className:"frame-add-icon fas fa-copy"}),c.a.createElement("i",{className:"frame-add-icon2 fas fa-copy"}),c.a.createElement("i",{role:"button",onClick:l!==o+1?d:void 0,className:"frame-delete-icon fas fa-trash-alt ".concat(l===o+1?"disabled":"")})))}))}}]),t}(c.a.Component),Ue=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).onDragEnd=function(e){var t=e.destination,r=e.source,a=n.props.actions;t&&(t.droppableId===r.droppableId&&t.index===r.index||a.reorderFrame(r.index,t.index))},n.addNewFrame=function(){n.props.actions.addNewFrame()},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"getFrames",value:function(){var e=this.props,t=e.grids,n=e.columns,r=e.rows,a=e.active,o=e.actions;return t.map((function(e,i){return c.a.createElement(Me,{key:i,id:i,grid:e,columns:n,rows:r,active:a,size:t.size,actions:{switchFrame:o.switchFrame,deleteFrame:o.deleteFrame,addDuplicatedFrame:o.addDuplicatedFrame}})}))}},{key:"render",value:function(){var e=this,t={frameList:{display:"flex",flexDirection:"column",marginLeft:"10px",marginBottom:"36px"},frameListContent:{backgroundColor:"rgba(50, 50, 50, 0.3)",width:"140px",display:"flex",flex:"1",minHeight:"0",overflow:"scroll"}};return c.a.createElement("div",{style:t.frameList},c.a.createElement("button",{type:"button",className:"frames-list-add",onClick:function(){return e.addNewFrame()}},c.a.createElement("div",null,"+")),c.a.createElement("div",{style:t.frameListContent},c.a.createElement(Le.a,{onDragEnd:this.onDragEnd,className:"framesHandlerContext"},c.a.createElement(Le.c,{droppableId:"droppable",direction:"vertical",className:"frames-handler"},(function(t){return c.a.createElement("div",Object.assign({ref:t.innerRef},t.droppableProps),e.getFrames(),t.placeholder)})))))}}]),t}(c.a.Component),Fe=Object(J.b)((function(e){return e.present.get("canvas").toObject()}),(function(e){return{actions:Object(le.b)(r,e)}}))(Ue),He=Object(J.b)((function(e){var t=e.present.get("canvas");return{columns:t.get("columns"),rows:t.get("rows"),duration:t.get("duration"),size:t.get("size")}}),(function(e){return{changeDimensions:function(t,n){return e(S(t,n))}}}))((function(e){var t=e.changeDimensions,n=e.rows,r=e.columns;return c.a.createElement("div",{className:"change-dimension"},c.a.createElement("div",{className:"rows"},c.a.createElement("label",null," ROWS",c.a.createElement("input",{type:"number",value:n,onChange:function(e){var n;n=e.target.value,n=parseInt(n,10),t(r,n)}}))),c.a.createElement("div",{className:""},c.a.createElement("label",null," COLUMNS",c.a.createElement("input",{type:"number",value:r,onChange:function(e){var r;r=e.target.value,r=parseInt(r,10),t(r,n)}}))))})),We=Object(J.b)((function(e){var t=e.present.get("canvas");return{columns:t.get("columns"),rows:t.get("rows"),duration:t.get("duration"),size:t.get("size")}}),(function(e){return{changeDuration:function(t){return e(P(t))}}}))((function(e){var t=e.changeDuration,n=e.duration;return c.a.createElement("div",{className:"duration"},c.a.createElement("label",null," DURATION",c.a.createElement("input",{type:"number",value:n,onChange:function(e){t(e.target.value)}})))})),Ge=Object(J.b)((function(e){var t=e.present.get("canvas");return{columns:t.get("columns"),rows:t.get("rows"),duration:t.get("duration"),size:t.get("size")}}),(function(e){return{changeCellSize:function(t){return e(k(t))}}}))((function(e){var t=e.changeCellSize,n=e.size;return c.a.createElement("div",{className:"cell-size"},c.a.createElement("label",null," Cell Size",c.a.createElement("input",{type:"number",value:n,onChange:function(e){t(e.target.value)}})))})),Be=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).state={popUpType:null,popUpShown:!1},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;B(e,localStorage)}},{key:"setPopUp",value:function(e){this.setState({popUpShown:!0,popUpType:e})}},{key:"closePopUp",value:function(){this.setState({popUpShown:!1,popUpType:null})}},{key:"render",value:function(){var e=this,t=this.state,n=t.popUpShown,r=t.popUpType;return c.a.createElement("div",{className:"background"},c.a.createElement(m.NotificationContainer,null),c.a.createElement("div",{className:"app"},c.a.createElement(Y,null),c.a.createElement("div",{className:"tool-bar"},c.a.createElement(ze,null),c.a.createElement(Re,null),c.a.createElement(xe,null),c.a.createElement("button",{className:"import",onClick:function(){return e.setPopUp("import")}},"IMPORT"),c.a.createElement("button",{className:"import",onClick:function(){return e.setPopUp("export")}},"EXPORT"),c.a.createElement("button",{className:"import",onClick:function(){return e.setPopUp("preview")}},"PREVIEW")),c.a.createElement("div",{className:"app-content"},c.a.createElement("div",{className:"side-bar col-lg-2"},c.a.createElement(Fe,null)),c.a.createElement("div",{className:"canvas-container col-lg-6"},c.a.createElement(ee,null)),c.a.createElement("div",{className:"tools col-lg-4"},c.a.createElement("div",{className:"col-12"},c.a.createElement(me,null),c.a.createElement(He,null),c.a.createElement(We,null),c.a.createElement(Ge,null),c.a.createElement("div",{className:"draw-tools"},c.a.createElement(ce,null),c.a.createElement(oe,null),c.a.createElement(pe,null),c.a.createElement(ie,null),c.a.createElement(ae,null)),c.a.createElement(de,null)))),c.a.createElement(De,{visible:n,popUpType:r,close:function(){return e.closePopUp()}})))}}]),t}(c.a.Component),Je=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.options||{},n=parseInt(t.columns,10)||16,r=parseInt(t.rows,10)||16,a=parseInt(t.size,10)||10,c=parseInt(t.duration,10)||5,o=Object(we.a)(),i=0;i<r*n;i++)o=o.push("");var l=Object(we.a)();return l=l.push(o),Object(we.b)({name:"name",grids:l,active:0,columns:n,rows:r,size:a,duration:c})},Ye=function(e,t){var n=t.grids,r=t.columns,a=t.rows,c=t.cellSize,o=t.duration;return Object(we.c)({grids:n,columns:r,rows:a,size:c,duration:o||5,active:0})},Xe=function(e){var t=e.columns,n=e.rows,r=Object(we.a)(e.grids);return Object(we.b)({grids:r,active:0,columns:t,rows:n})},Ke=function(e,t){return e.merge({name:t.name})},Ve=function(e,t){var n=e.get("columns"),r=e.get("rows"),a=t.newColumns,c=t.newRows,o=Object(we.a)();return e.get("grids").forEach((function(e){o=o.push(function(e,t,n,r,a){var c=a-n,o=r-t,i=e;if(c>0)for(var l=0;l<t;l++)for(var s=0;s<c;s++)i=i.push("");else if(c<0)for(var u=0;u<t;u++)for(var d=c;d<0;d++)i=i.splice(-1,1);else if(o>0)for(var p=t*n;p>0;p-=t)for(var m=0;m<o;m++)i=i.insert(p,"");else if(o<0)for(var f=t*n;f>0;f-=t)i=i.splice(f+o,-o);return i}(e,n,r,a,c))})),e.merge({grids:o,columns:a,rows:c})},Ze=function(e,t){var n=t.duration;return e.merge({duration:n})},$e=function(e,t){var n=t.size;return e.merge({size:n})},qe=function(e,t){for(var n=e.get("grids"),r=e.get("columns"),a=e.get("rows"),c=Object(we.a)(),o=0;o<a*r;o++)c=c.push("");var i=n.insert(n.size,c);return e.merge({grids:i,active:n.size})},Qe=function(e,t){var n=e.get("grids"),r=n.get(t.id),a=n.insert(t.id,r);return e.merge({grids:a,active:t.id+1})},et=function(e,t){var n=e.get("grids").remove(t.id);return e.merge({grids:n,active:t.id})},tt=function(e,t){return e.merge({active:t.id})},nt=function(e,t){var n=e.get("grids"),r=t.initIndex,a=t.finalIndex,c=r<a,o=a+(c?1:0),i=r+(c?0:1),l=n.get(r);return n=n.splice(o,0,l).splice(i,1),e.merge({grids:n,active:a})},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INIT_STATE":case"NEW_PROJECT":return Je(t);case"SET_CANVAS":return Ye(0,t);case"CHANGE_NAME":return Ke(e,t);case"CHANGE_DIMENSIONS":return Ve(e,t);case"CHANGE_DURATION":return Ze(e,t);case"CHANGE_CELL_SIZE":return $e(e,t);case"IMPORT_PIXELATE":return Xe(t);case"ADD_NEW_FRAME":return qe(e);case"ADD_DUPLICATED_FRAME":return Qe(e,t);case"DELETE_FRAME":return et(e,t);case"SWITCH_FRAME":return tt(e,t);case"REORDER_FRAMES":return nt(e,t);default:return e}},at=function(e,t,n){return e.set(n,t)},ct=function(e,t){var n=e.get("active"),r=function(e,t){var n=t.paletteColor,r=t.id;return at(e,n,r)}(e.get("grids").get(n),t);return e.setIn(["grids",n],r)},ot=function(e,t){return(e||"rgba(49, 49, 49, 1)")===(t||"rgba(49, 49, 49, 1)")},it=function(e,t,n,r,a){var c=[];return n>=r&&ot(e.get(n-r),t)&&c.push(n-r),n<(r-1)*a&&ot(e.get(n+r),t)&&c.push(n+r),n%r!==0&&ot(e.get(n-1),t)&&c.push(n-1),n%r!==r-1&&ot(e.get(n+1),t)&&c.push(n+1),c},lt=function(e,t){var n=e.get("active"),r=function(e,t){for(var n,r,a=t.id,c=t.paletteColor,o=t.columns,i=t.rows,l=e.get(a),s=[a],u=e;s.length>0;){n=s.shift(),u=at(u,c,n),r=it(u,l,n,o,i);for(var d=0;d<r.length;d++){var p=r[d],m=u.get(p);-1===s.indexOf(p)&&m!==c&&s.push(p)}}return u}(e.get("grids").get(n),t);return e.setIn(["grids",n],r)},st=function(e,t){switch(t.type){case"CLEAR":return function(e,t){for(var n=e.get("active"),r=e.get("columns"),a=e.get("rows"),c=Object(we.a)(),o=0;o<a*r;o++)c=c.push("");return e.setIn(["grids",n],c)}(e);case g:return ct(e,t);case v:return function(e,t){var n=e.get("active"),r=e.get("grids").get(n),a=at(r,"",t.id);return e.setIn(["grids",n],a)}(e,t);case E:return lt(e,t);default:return e}},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;return e===t.drawingTool?f:t.drawingTool};function dt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INIT_STATE":return f;case"SWITCH_TOOL":return ut(e,t);case h:case g:return f;case"SELECT_PALETTE_COLOR":default:return e}}var pt=function(){return Object(we.b)({grid:Object(we.a)(["rgb(0,0,0)","rgb(255,0,0)","rgb(255,51,0)","rgb(255,153,0)","rgb(255,255,0)","rgb(153,255,0)","rgb(0,255,0)","rgb(0,255,255)","rgb(0,0,255)","rgb(102,0,255)","rgb(255,0,255)","rgb(192,192,192)","rgb(255,255,255)","",""]).map((function(e,t){return Object(we.b)({color:e,id:t})})),active:0})},mt=function(e,t){var n=t.paletteGrid;return Object(we.c)({grid:n,active:0})},ft=function(e,t){return e.set("active",t.id)},gt=function(e,t){return"ERASER"===t.drawingTool?e.set("active",-1):e},vt=function(e,t){var n=t.color,r=e.get("grid"),a=function(e,t){for(var n=0;n<e.size-1;n++)if(e.getIn([n,"color"])===t)return n;return-1}(r,n);if(-1!==a)return e.set("active",a);var c=r.size-1;return e.merge({grid:r.setIn([c,"color"],n),active:c})},Et=function(e,t){var n=t.color,r=e.get("grid"),a=e.get("active");return-1===a?e.merge({grid:r.setIn([a,"color"],n),active:r.size-1}):e.merge({grid:r.setIn([a,"color"],n),active:a})},ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INIT_STATE":case"NEW_PROJECT":return pt();case"SET_CANVAS":return mt(0,t);case"SELECT_PALETTE_COLOR":return ft(e,t);case h:return vt(e,t);case"SWITCH_TOOL":return gt(e,t);case b:return Et(e,t);default:return e}};function bt(e){var t={cellSize:10};return e.merge(t)}function wt(){return bt(Object(we.b)())}var yt=function(e){return function(t,n){return e.reduce((function(e,t){return t(e,n)}),t)}};function Ot(e,t){switch(t.type){case"SET_INIT_STATE":return bt(e);default:return e}}var Ct=Object(le.d)(y()((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt(),t=arguments.length>1?arguments[1]:void 0;return Ot(e,t).merge({canvas:yt([rt,st])(e.get("canvas"),t),drawingTool:dt(e.get("drawingTool"),t),palette:ht(e.get("palette"),t)})}),{filter:Object(w.includeAction)([v,h,E,g,"CLEAR"]),debug:!0}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Nt=document.getElementById("root");i.a.render(c.a.createElement(J.a,{store:Ct},c.a.createElement(Be,{dispatch:Ct.dispatch})),Nt),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,n){}},[[175,1,2]]]);
//# sourceMappingURL=main.a30bbc65.chunk.js.map