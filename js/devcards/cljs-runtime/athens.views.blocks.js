goog.provide('athens.views.blocks');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.keybindings');
goog.require('athens.listeners');
goog.require('athens.parse_renderer');
goog.require('athens.parser');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.util');
goog.require('athens.views.buttons');
goog.require('athens.views.dropdown');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('garden.selectors');
goog.require('goog.dom.classlist');
goog.require('goog.events');
goog.require('goog.functions');
goog.require('instaparse.core');
goog.require('komponentit.autosize');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('goog.events.EventType');
athens.views.blocks.block_container_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"2em",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.125rem",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-start",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.show-tree-indicator:before","&.show-tree-indicator:before",-1154852006),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"content","content",15833224),"''",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"1px",new cljs.core.Keyword(null,"left","left",-399115937),"calc(1.25em + 1px)",new cljs.core.Keyword(null,"top","top",-1856271961),"2em",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(50%)",new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"left","left",-399115937)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0 0.25rem 0.5rem -0.25rem",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190))], null)], null),"0.75px","opacity 0.075s ease","0.75px","''",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975)),(-1),(0),(0),"absolute","0.25rem","none",(0)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.is-selected:after","&.is-selected:after",1596277889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".block-body",".block-body",-1609622921),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.5rem",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.1s ease",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.block-edit-toggle","button.block-edit-toggle",-1106137104),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"appearance","appearance",-216383432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"left","left",-399115937)],[(0),(0),"100%","none","text",(1),(0),"block","none","absolute",(0),(0)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,".block-body",".block-body",-1609622921)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".block-container",".block-container",1999389124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"2rem"], null)], null)], null)], null);
stylefy.core.class$("block-container",athens.views.blocks.block_container_style);
athens.views.blocks.block_disclosure_toggle_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622)],["center",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),0.4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":is(button)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], null),"all 0.05s ease","1em","none","0",(2),"none","0","center",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.closed","&.closed",693427658),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-90deg)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:empty","&:empty",1539258694),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null)], null),"flex","relative","none","2em"]);
athens.views.blocks.bullet_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"height","height",1025178622)],[athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"after","after",594996914),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["0 0 0 0.125rem transparent","translate(-50%, -50%)","all 0.05s ease","''","0.3125em","currentColor","inline-flex","100px","0.3125em","50% 0 0 50%"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056))], null)], null)], null),"all 0.05s ease","0.75em","pointer","0",(2),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.closed-with-children","&.closed-with-children",-466895087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57065 = (garden.selectors.after.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.after.cljs$core$IFn$_invoke$arity$0() : garden.selectors.after.call(null));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__57065) : garden.selectors._AMPERSAND_.call(null,G__57065));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),["0 0 0 0.125rem ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936)))].join(''),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.closed-with-children","&.closed-with-children",-466895087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57066 = (garden.selectors.before.cljs$core$IFn$_invoke$arity$0 ? garden.selectors.before.cljs$core$IFn$_invoke$arity$0() : garden.selectors.before.call(null));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__57066) : garden.selectors._AMPERSAND_.call(null,G__57066));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover:after","&:hover:after",975745128),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-50%, -50%) scale(1.3)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.dragging","&.dragging",-781884845),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"grabbing",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936))], null)], null)], null),"relative","0.25em","2em"]);
stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic("drop-area-appear",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null)], 0));
stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic("drop-area-color-pulse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null)], 0));
athens.views.blocks.drop_area_indicator = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"height","height",1025178622)],[athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"link-color","link-color",1347118056),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703)),"100%",(3),(0),"left",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"content","content",15833224),"''",new cljs.core.Keyword(null,"top","top",-1856271961),"-0.5px",new cljs.core.Keyword(null,"right","right",-452581833),"0",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"-0.5px",new cljs.core.Keyword(null,"left","left",-399115937),"2em",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"100px",new cljs.core.Keyword(null,"background","background",-863952629),"currentColor"], null)], null)], null),"block","relative","-1px","1px"]);
athens.views.blocks.block_content_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57067 = (garden.selectors.not.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.not.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493)) : garden.selectors.not.call(null,new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493)));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__57067) : garden.selectors._AMPERSAND_.call(null,G__57067));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit",["-0.25rem 0 0 0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179)))].join(''),"translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","100%",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179)),"text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","0","0.25rem","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".media-16-9",".media-16-9",330250969),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"margin-inline-end","margin-inline-end",-1696808891),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),new cljs.core.Keyword(null,"height","height",1025178622)],["0.25rem","all 0.2s ease","0.25rem","calc(100% - 0.25rem)",(1),"right center","relative",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((9) / (16)) * (100))),"%"].join(''),(0)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inset 0 0 0 0.125rem",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-minus-1","background-minus-1",-955162179))], null)], null),(0),(0),"100%","default",(0),"absolute",(0),"0.25rem","100%",(0)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.25rem",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"calc(100% - 0.25rem)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),garden.selectors.attr_EQ_(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"margin-inline-end","margin-inline-end",-1696808891),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"appearance","appearance",-216383432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["inset 0 0 0 1px","scale(1)",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0.25rem","all 0.05s ease","0.13em","1rem","pointer","none","relative","0.25rem","1rem"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["solid","rotate(45deg) translate(-40%, -50%)","45%","''","30%","0 1.5px 1.5px 0",(0),"absolute","60%","20%"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:checked","&:checked",-93007205),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-color","background-color",570434026))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:active","&:active",-1687810105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.9)"], null)], null)], null)], null)], null)], null);
stylefy.core.class$("block-content",athens.views.blocks.block_content_style);
stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic("tooltip-appear",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0",new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1",new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(1)"], null)], null)], 0));
athens.views.blocks.tooltip_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"border-spacing","border-spacing",-1602200108),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["1.75rem","9rem",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"64","64",977820579).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS),", 0 0 0 1px ",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))], null)], null),"tooltip-appear .2s ease",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703)),"background .1s ease","2rem",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"background-plus-1","background-plus-1",-1065812304)),new cljs.core.Keyword(null,"zindex-dropdown","zindex-dropdown",116119971).cljs$core$IFn$_invoke$arity$1(athens.style.ZINDICES),"0.25rem","0.5rem 0.75rem","0.5rem 1.5rem",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"table-row"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"table-cell",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"0.1em",new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"table-cell",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"all"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"left","left",-399115937)],["-1rem","-0.75rem","''",(-1),"-1rem","block","absolute","inherit","-1rem"])], null)], null),"table","absolute","0.25rem","column","0.5rem"]);
athens.views.blocks.dragging_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.25"], null);
stylefy.core.class$("dragging",athens.views.blocks.dragging_style);
athens.views.blocks.walk_parse_tree_for_links = (function athens$views$blocks$walk_parse_tree_for_links(source_str,link_fn,db_fn){
var G__57068 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-link","page-link",-169621200),(function() { 
var G__57158__delegate = function (title){
var inner_title = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,title);
if(cljs.core.truth_(((typeof inner_title === 'string')?(link_fn.cljs$core$IFn$_invoke$arity$1 ? link_fn.cljs$core$IFn$_invoke$arity$1(inner_title) : link_fn.call(null,inner_title)):false))){
var now_57159 = athens.util.now_ts();
var uid_57160 = athens.util.gen_block_uid();
(db_fn.cljs$core$IFn$_invoke$arity$3 ? db_fn.cljs$core$IFn$_invoke$arity$3(inner_title,now_57159,uid_57160) : db_fn.call(null,inner_title,now_57159,uid_57160));
} else {
}

return ["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner_title),"]]"].join('');
};
var G__57158 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__57161__i = 0, G__57161__a = new Array(arguments.length -  0);
while (G__57161__i < G__57161__a.length) {G__57161__a[G__57161__i] = arguments[G__57161__i + 0]; ++G__57161__i;}
  title = new cljs.core.IndexedSeq(G__57161__a,0,null);
} 
return G__57158__delegate.call(this,title);};
G__57158.cljs$lang$maxFixedArity = 0;
G__57158.cljs$lang$applyTo = (function (arglist__57162){
var title = cljs.core.seq(arglist__57162);
return G__57158__delegate(title);
});
G__57158.cljs$core$IFn$_invoke$arity$variadic = G__57158__delegate;
return G__57158;
})()
,new cljs.core.Keyword(null,"hashtag","hashtag",-529028899),(function() { 
var G__57163__delegate = function (title){
var inner_title = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,title);
if(cljs.core.truth_(((typeof inner_title === 'string')?(link_fn.cljs$core$IFn$_invoke$arity$1 ? link_fn.cljs$core$IFn$_invoke$arity$1(inner_title) : link_fn.call(null,inner_title)):false))){
var now_57164 = athens.util.now_ts();
var uid_57165 = athens.util.gen_block_uid();
(db_fn.cljs$core$IFn$_invoke$arity$3 ? db_fn.cljs$core$IFn$_invoke$arity$3(inner_title,now_57164,uid_57165) : db_fn.call(null,inner_title,now_57164,uid_57165));
} else {
}

return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner_title)].join('');
};
var G__57163 = function (var_args){
var title = null;
if (arguments.length > 0) {
var G__57166__i = 0, G__57166__a = new Array(arguments.length -  0);
while (G__57166__i < G__57166__a.length) {G__57166__a[G__57166__i] = arguments[G__57166__i + 0]; ++G__57166__i;}
  title = new cljs.core.IndexedSeq(G__57166__a,0,null);
} 
return G__57163__delegate.call(this,title);};
G__57163.cljs$lang$maxFixedArity = 0;
G__57163.cljs$lang$applyTo = (function (arglist__57167){
var title = cljs.core.seq(arglist__57167);
return G__57163__delegate(title);
});
G__57163.cljs$core$IFn$_invoke$arity$variadic = G__57163__delegate;
return G__57163;
})()
], null);
var G__57069 = athens.parser.parse_to_ast(source_str);
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__57068,G__57069) : instaparse.core.transform.call(null,G__57068,G__57069));
});
athens.views.blocks.on_change = (function athens$views$blocks$on_change(oldvalue,value,uid){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("block","string","block/string",-2066596447),value,new cljs.core.Keyword("edit","time","edit/time",1384867476),athens.util.now_ts()], null)], null)], null));

athens.views.blocks.walk_parse_tree_for_links(value,(function (inner_title){
return (athens.db.search_exact_node_title(inner_title) == null);
}),(function (inner_title,now_time,uid__$1){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("node","title","node/title",628940777),inner_title,new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476),now_time,new cljs.core.Keyword("create","time","create/time",-1563077754),now_time], null)], null)], null));
}));

return athens.views.blocks.walk_parse_tree_for_links(oldvalue,(function (inner_title){
var block = athens.db.search_exact_node_title(inner_title);
return (((!((block == null)))) && ((new cljs.core.Keyword("block","children","block/children",-1040716209).cljs$core$IFn$_invoke$arity$1(athens.db.get_block_document(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))) == null)) && ((athens.db.count_linked_references_excl_uid(inner_title,uid) === (0))) && ((!(clojure.string.includes_QMARK_(value,inner_title)))));
}),(function (inner_title,_,___$1){
var uid__$1 = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(inner_title)));
if((!((uid__$1 == null)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","delete","page/delete",-1774686917),uid__$1], null));
} else {
return null;
}
}));
});
athens.views.blocks.db_on_change = goog.functions.debounce(athens.views.blocks.on_change,(1000));
athens.views.blocks.toggle = (function athens$views$blocks$toggle(id,open){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.not(open)], null)], null)], null));
});
athens.views.blocks.toggle_el = (function athens$views$blocks$toggle_el(p__57070){
var map__57071 = p__57070;
var map__57071__$1 = (((((!((map__57071 == null))))?(((((map__57071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57071):map__57071);
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57071__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57071__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57071__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
if(cljs.core.seq(children)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.blocks.block_disclosure_toggle_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(open)?"open":"closed"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.blocks.toggle(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),open);
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.KeyboardArrowDown,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.blocks.block_disclosure_toggle_style)], null);
}
});
athens.views.blocks.tooltip_el = (function athens$views$blocks$tooltip_el(p__57073,state){
var map__57074 = p__57073;
var map__57074__$1 = (((((!((map__57074 == null))))?(((((map__57074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57074):map__57074);
var dbid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57074__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var edit_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57074__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57074__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57074__$1,new cljs.core.Keyword("block","order","block/order",-1429282437));
var map__57076 = cljs.core.deref(state);
var map__57076__$1 = (((((!((map__57076 == null))))?(((((map__57076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57076):map__57076);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57076__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57076__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
if(cljs.core.truth_((function (){var and__4115__auto__ = tooltip;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(dragging);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.blocks.tooltip_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"tooltip",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return e.stopPropagation();
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),false);
})], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"db/id"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),dbid], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"uid"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),uid], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"order"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),order], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"last edit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),athens.util.date_string(edit_time)], null)], null)], null);
} else {
return null;
}
});
athens.views.blocks.inline_search_el = (function athens$views$blocks$inline_search_el(state){
var map__57078 = cljs.core.deref(state);
var map__57078__$1 = (((((!((map__57078 == null))))?(((((map__57078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57078):map__57078);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57078__$1,new cljs.core.Keyword("search","query","search/query",1830322034));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57078__$1,new cljs.core.Keyword("search","results","search/results",107824727));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57078__$1,new cljs.core.Keyword("search","index","search/index",1990835117));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57078__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"100%",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"20rem",new cljs.core.Keyword(null,"left","left",-399115937),"1.75em"], null)], null)], 0)),((clojure.string.blank_QMARK_(query))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Search for a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(type))].join('')], null):cljs.core.doall.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.dropdown.menu_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"dropdown-menu"], null)),(function (){var iter__4529__auto__ = (function athens$views$blocks$inline_search_el_$_iter__57080(s__57081){
return (new cljs.core.LazySeq(null,(function (){
var s__57081__$1 = s__57081;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57081__$1);
if(temp__5735__auto__){
var s__57081__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57081__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57081__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57083 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57082 = (0);
while(true){
if((i__57082 < size__4528__auto__)){
var vec__57084 = cljs.core._nth(c__4527__auto__,i__57082);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57084,(0),null);
var map__57087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57084,(1),null);
var map__57087__$1 = (((((!((map__57087 == null))))?(((((map__57087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57087):map__57087);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57087__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57087__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57087__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57083,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57082,vec__57084,i,map__57087,map__57087__$1,title,string,uid,c__4527__auto__,size__4528__auto__,b__57083,s__57081__$2,temp__5735__auto__,map__57078,map__57078__$1,query,results,index,type){
return (function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["expand"], 0));
});})(i__57082,vec__57084,i,map__57087,map__57087__$1,title,string,uid,c__4527__auto__,size__4528__auto__,b__57083,s__57081__$2,temp__5735__auto__,map__57078,map__57078__$1,query,results,index,type))
,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,i),new cljs.core.Keyword(null,"id","id",-1388402092),["result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),(function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["inline-search-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join('')], null)));

var G__57170 = (i__57082 + (1));
i__57082 = G__57170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57083),athens$views$blocks$inline_search_el_$_iter__57080(cljs.core.chunk_rest(s__57081__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57083),null);
}
} else {
var vec__57089 = cljs.core.first(s__57081__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57089,(0),null);
var map__57092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57089,(1),null);
var map__57092__$1 = (((((!((map__57092 == null))))?(((((map__57092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57092):map__57092);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57092__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57092__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57092__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57089,i,map__57092,map__57092__$1,title,string,uid,s__57081__$2,temp__5735__auto__,map__57078,map__57078__$1,query,results,index,type){
return (function (){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["expand"], 0));
});})(vec__57089,i,map__57092,map__57092__$1,title,string,uid,s__57081__$2,temp__5735__auto__,map__57078,map__57078__$1,query,results,index,type))
,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,i),new cljs.core.Keyword(null,"id","id",-1388402092),["result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),(function (){var or__4126__auto__ = title;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["inline-search-item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join('')], null)),athens$views$blocks$inline_search_el_$_iter__57080(cljs.core.rest(s__57081__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,results));
})()], null)))], null);
});
athens.views.blocks.slash_menu_el = (function athens$views$blocks$slash_menu_el(state){
var map__57094 = cljs.core.deref(state);
var map__57094__$1 = (((((!((map__57094 == null))))?(((((map__57094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57094):map__57094);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57094__$1,new cljs.core.Keyword("search","index","search/index",1990835117));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"100%",new cljs.core.Keyword(null,"left","left",-399115937),"-0.125em"], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#slash-menu-container","div#slash-menu-container",2006893928),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"8em"], null)], null)], 0)),(function (){var iter__4529__auto__ = (function athens$views$blocks$slash_menu_el_$_iter__57096(s__57097){
return (new cljs.core.LazySeq(null,(function (){
var s__57097__$1 = s__57097;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57097__$1);
if(temp__5735__auto__){
var s__57097__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57097__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57097__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57099 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57098 = (0);
while(true){
if((i__57098 < size__4528__auto__)){
var vec__57100 = cljs.core._nth(c__4527__auto__,i__57098);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57100,(0),null);
var vec__57103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57100,(1),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57103,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57103,(1),null);
var _expansion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57103,(2),null);
var kbd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57103,(3),null);
cljs.core.chunk_append(b__57099,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,index),new cljs.core.Keyword(null,"key","key",-1516042587),text,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57098,vec__57100,i,vec__57103,icon,text,_expansion,kbd,c__4527__auto__,size__4528__auto__,b__57099,s__57097__$2,temp__5735__auto__,map__57094,map__57094__$1,index){
return (function (){
return athens.keybindings.select_slash_cmd(i,state);
});})(i__57098,vec__57100,i,vec__57103,icon,text,_expansion,kbd,c__4527__auto__,size__4528__auto__,b__57099,s__57097__$2,temp__5735__auto__,map__57094,map__57094__$1,index))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(icon)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),text], null),(cljs.core.truth_(kbd)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd","kbd",316156875),kbd], null):null)], null)], null));

var G__57171 = (i__57098 + (1));
i__57098 = G__57171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57099),athens$views$blocks$slash_menu_el_$_iter__57096(cljs.core.chunk_rest(s__57097__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57099),null);
}
} else {
var vec__57106 = cljs.core.first(s__57097__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57106,(0),null);
var vec__57109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57106,(1),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57109,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57109,(1),null);
var _expansion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57109,(2),null);
var kbd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57109,(3),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,index),new cljs.core.Keyword(null,"key","key",-1516042587),text,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57106,i,vec__57109,icon,text,_expansion,kbd,s__57097__$2,temp__5735__auto__,map__57094,map__57094__$1,index){
return (function (){
return athens.keybindings.select_slash_cmd(i,state);
});})(vec__57106,i,vec__57109,icon,text,_expansion,kbd,s__57097__$2,temp__5735__auto__,map__57094,map__57094__$1,index))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(icon)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),text], null),(cljs.core.truth_(kbd)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd","kbd",316156875),kbd], null):null)], null)], null),athens$views$blocks$slash_menu_el_$_iter__57096(cljs.core.rest(s__57097__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,athens.keybindings.slash_options));
})()], null)], null);
});
/**
 * if user does typical copy and paste, meta+v, and 
 */
athens.views.blocks.paste = (function athens$views$blocks$paste(e,uid,state){
var data = e.clipboardData.getData("text");
var is_block = cljs.core.re_find(/\r?\n/,data);
var last_keydown = new cljs.core.Keyword(null,"last-keydown","last-keydown",348696018).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var map__57112 = last_keydown;
var map__57112__$1 = (((((!((map__57112 == null))))?(((((map__57112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57112):map__57112);
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57112__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
if(cljs.core.truth_((function (){var and__4115__auto__ = is_block;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(shift);
} else {
return and__4115__auto__;
}
})())){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paste","paste",1975741548),uid,data], null));
} else {
return null;
}
});
athens.views.blocks.block_on_change = (function athens$views$blocks$block_on_change(e,_uid,state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),e.target.value);
});
athens.views.blocks.block_content_el = (function athens$views$blocks$block_content_el(_,___$1,___$2){
return (function (block,state,is_editing){
var map__57115 = block;
var map__57115__$1 = (((((!((map__57115 == null))))?(((((map__57115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57115):map__57115);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57115__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57115__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-content",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(e.shiftKey === false){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),uid], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-paste","on-paste",-50859856),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),(function (___$3){
goog.events.listen(window,goog.events.EventType.MOUSEOVER,athens.listeners.multi_block_select_over);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,athens.listeners.multi_block_select_up);
}),(function (e){
var source_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
if(cljs.core.truth_((function (){var and__4115__auto__ = source_uid;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = uid;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(source_uid,uid)){
return e.shiftKey;
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
var target = e.target;
var page = (function (){var or__4126__auto__ = target.closest(".node-page");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return target.closest(".block-page");
}
})();
var target_block = target.closest(".block-container");
var blocks = cljs.core.vec(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(page.querySelectorAll(".block-container")));
var vec__57117 = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,el){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,target_block)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_uid,el.dataset.uid)))){
return i;
} else {
return null;
}
}),blocks);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57117,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57117,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = start;
if(cljs.core.truth_(and__4115__auto__)){
return end;
} else {
return and__4115__auto__;
}
})())){
var selected_blocks = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(blocks,start,(end + (1)));
var selected_uids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__57114_SHARP_){
return p1__57114_SHARP_.dataset.uid;
}),selected_blocks);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","add-items","selected/add-items",142460854),selected_uids], null));
} else {
return null;
}
} else {
return null;
}
}),(function (e){
return athens.views.blocks.paste(e,uid,state);
}),["editable-uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(is_editing)?"is-editing":null),"textarea"], null),true,(function (e){
return athens.views.blocks.block_on_change(e,uid,state);
}),(function (e){
return athens.keybindings.block_key_down(e,uid,state);
})])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.parse_renderer.parse_and_render,string,uid], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.blocks.drop_area_indicator,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"drag-target","drag-target",2017061919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null):null)], 0)))], null)], null);
});
});
athens.views.blocks.bullet_el = (function athens$views$blocks$bullet_el(_,___$1){
return (function (block,state){
var map__57120 = block;
var map__57120__$1 = (((((!((map__57120 == null))))?(((((map__57120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57120):map__57120);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57120__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57120__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57120__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var map__57121 = cljs.core.deref(state);
var map__57121__$1 = (((((!((map__57121 == null))))?(((((map__57121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57121):map__57121);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57121__$1,new cljs.core.Keyword("context-menu","show","context-menu/show",-1695332002));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57121__$1,new cljs.core.Keyword("context-menu","x","context-menu/x",1022133854));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57121__$1,new cljs.core.Keyword("context-menu","y","context-menu/y",1468921341));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(show)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"x","x",2099068185),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"y","y",-1757859776),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (___$2){
var selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
var data = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show,new cljs.core.Keyword(null,"one","one",935007904)))?["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid),"))"].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show,new cljs.core.Keyword(null,"many","many",1092119164)))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (uid__$1){
return ["((",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1),"))\n"].join('');
}),selected_items)):null));
navigator.clipboard.writeText(data);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("context-menu","show","context-menu/show",-1695332002),false);
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show,new cljs.core.Keyword(null,"one","one",935007904)))?"Copy block ref":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show,new cljs.core.Keyword(null,"many","many",1092119164)))?"Copy block refs":null))], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.blocks.bullet_style,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((cljs.core.seq(children)) && (cljs.core.not(open))))?"closed-with-children":null)], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),true);
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (e){
var related = e.relatedTarget;
if(cljs.core.truth_((function (){var and__4115__auto__ = related;
if(cljs.core.truth_(and__4115__auto__)){
return goog.dom.classlist.contains(related,"tooltip");
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),false);
}
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$2(uid,e);
}),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (e){
e.preventDefault();

var selected_blocks = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
var rect = e.target.getBoundingClientRect();
var new_context_menu_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("context-menu","x","context-menu/x",1022133854),rect.left,new cljs.core.Keyword("context-menu","y","context-menu/y",1468921341),rect.bottom,new cljs.core.Keyword("context-menu","show","context-menu/show",-1695332002),((cljs.core.empty_QMARK_(selected_blocks))?new cljs.core.Keyword(null,"one","one",935007904):new cljs.core.Keyword(null,"many","many",1092119164))], null)], 0));
if(cljs.core.empty_QMARK_(selected_blocks)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new_context_menu_state);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new_context_menu_state);
}
}),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (e){
(e.dataTransfer.effectAllowed = "move");

e.dataTransfer.setData("text/plain",uid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true);
}),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (___$2){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),false);
})], null))], null)], null);
});
});
/**
 * Two checks to make sure block is open or not: children exist and :block/open bool
 */
athens.views.blocks.block_el = (function athens$views$blocks$block_el(block){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"old-string","old-string",-469973663),new cljs.core.Keyword("search","type","search/type",-1745335484),new cljs.core.Keyword(null,"dragging","dragging",1185097613),new cljs.core.Keyword("search","index","search/index",1990835117),new cljs.core.Keyword(null,"last-keydown","last-keydown",348696018),new cljs.core.Keyword("search","query","search/query",1830322034),new cljs.core.Keyword("edit","time","edit/time",1384867476),new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new cljs.core.Keyword("context-menu","y","context-menu/y",1468921341),new cljs.core.Keyword("context-menu","show","context-menu/show",-1695332002),new cljs.core.Keyword("context-menu","x","context-menu/x",1022133854),new cljs.core.Keyword(null,"drag-target","drag-target",2017061919)],[new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(block),null,false,(0),null,null,new cljs.core.Keyword("edit","time","edit/time",1384867476).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(block),null,false,null,null]));
cljs.core.add_watch(state,new cljs.core.Keyword(null,"string-listener","string-listener",1462473208),(function (_context,_atom,old,new$){
var map__57124 = new$;
var map__57124__$1 = (((((!((map__57124 == null))))?(((((map__57124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57124):map__57124);
var atom_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57124__$1,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204).cljs$core$IFn$_invoke$arity$1(old),atom_string)){
var G__57126 = new cljs.core.Keyword(null,"old-string","old-string",-469973663).cljs$core$IFn$_invoke$arity$1(old);
var G__57127 = atom_string;
var G__57128 = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(block);
return (athens.views.blocks.db_on_change.cljs$core$IFn$_invoke$arity$3 ? athens.views.blocks.db_on_change.cljs$core$IFn$_invoke$arity$3(G__57126,G__57127,G__57128) : athens.views.blocks.db_on_change.call(null,G__57126,G__57127,G__57128));
} else {
return null;
}
}));

return (function (block__$1){
var map__57129 = block__$1;
var map__57129__$1 = (((((!((map__57129 == null))))?(((((map__57129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57129):map__57129);
var edit_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57129__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57129__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57129__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57129__$1,new cljs.core.Keyword("block","open","block/open",-1875254829));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57129__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var map__57130 = cljs.core.deref(state);
var map__57130__$1 = (((((!((map__57130 == null))))?(((((map__57130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57130):map__57130);
var state_edit_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57130__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57130__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57130__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var drag_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57130__$1,new cljs.core.Keyword(null,"drag-target","drag-target",2017061919));
var is_editing = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","is-editing","editing/is-editing",-1509220484),uid], null)));
var is_selected = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","is-selected","selected/is-selected",689082595),uid], null)));
if((state_edit_time < edit_time)){
var new_state_57172 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("edit","time","edit/time",1384867476),edit_time,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),string,new cljs.core.Keyword(null,"old-string","old-string",-469973663),string], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new_state_57172);
} else {
}

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block-container",(cljs.core.truth_(dragging)?"dragging":null),(cljs.core.truth_(is_editing)?"is-editing":null),(cljs.core.truth_(is_selected)?"is-selected":null),(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.seq(children);
if(and__4115__auto__){
return open;
} else {
return and__4115__auto__;
}
})())?"show-tree-indicator":null)], null),new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (e){
e.preventDefault();

e.stopPropagation();

var offset = athens.util.mouse_offset(e);
var middle_y = athens.util.vertical_center(e.target);
var closest_container = e.target.closest(".block-container");
var next_sibling = closest_container.nextElementSibling;
var last_child_QMARK_ = (next_sibling == null);
var dragging_ancestor = e.target.closest(".dragging");
var not_dragging_QMARK_ = (dragging_ancestor == null);
var target = ((not_dragging_QMARK_)?(((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset) < middle_y))?new cljs.core.Keyword(null,"above","above",-1286866470):((((cljs.core.empty_QMARK_(children)) && (((50) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset)))))?new cljs.core.Keyword(null,"child","child",623967545):((((last_child_QMARK_) && ((middle_y < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset)))))?new cljs.core.Keyword(null,"below","below",-926774883):null))):null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"drag-target","drag-target",2017061919),target);
}),new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),(function (_){
return null;
}),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"drag-target","drag-target",2017061919),null);
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (e){
e.stopPropagation();

var source_uid = e.dataTransfer.getData("text/plain");
if((drag_target == null)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_uid,uid)){
} else {
}
}

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drop-bullet","drop-bullet",1177869489),source_uid,uid,drag_target], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"drag-target","drag-target",2017061919),null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.blocks.drop_area_indicator,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_target,new cljs.core.Keyword(null,"above","above",-1286866470)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null):null)], 0)))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-body","div.block-body",-1586332448),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.block-edit-toggle","button.block-edit-toggle",-1106137104),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(e.shiftKey === false){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),uid], null));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.toggle_el,block__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.bullet_el,block__$1,state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.tooltip_el,block__$1,state], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_content_el,block__$1,state,is_editing], null)], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.inline_search_el,state], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"slash","slash",-1449773022)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.slash_menu_el,state], null):null)),(cljs.core.truth_((function (){var and__4115__auto__ = open;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.seq(children);
} else {
return and__4115__auto__;
}
})())?(function (){var iter__4529__auto__ = (function athens$views$blocks$block_el_$_iter__57133(s__57134){
return (new cljs.core.LazySeq(null,(function (){
var s__57134__$1 = s__57134;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57134__$1);
if(temp__5735__auto__){
var s__57134__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57134__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57134__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57136 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57135 = (0);
while(true){
if((i__57135 < size__4528__auto__)){
var child = cljs.core._nth(c__4527__auto__,i__57135);
cljs.core.chunk_append(b__57136,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null)], null));

var G__57173 = (i__57135 + (1));
i__57135 = G__57173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57136),athens$views$blocks$block_el_$_iter__57133(cljs.core.chunk_rest(s__57134__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57136),null);
}
} else {
var child = cljs.core.first(s__57134__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(child)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null)], null),athens$views$blocks$block_el_$_iter__57133(cljs.core.rest(s__57134__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(children);
})():null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.blocks.drop_area_indicator,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drag_target,new cljs.core.Keyword(null,"below","below",-926774883)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null):null)], 0)))], null)], null);
});
});
athens.views.blocks.block_component = (function athens$views$blocks$block_component(ident){
var block = athens.db.get_block_document(ident);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null);
});

//# sourceMappingURL=athens.views.blocks.js.map
