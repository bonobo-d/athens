goog.provide('athens.views.athena');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.subs');
goog.require('athens.util');
goog.require('athens.views.buttons');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('goog.functions');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('goog.events.KeyCodes');
athens.views.athena.container_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"64","64",977820579).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS),", 0 0 0 1px ",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))], null)], null),"60vh","translate(-50%, -50%)","50%","hidden","784px",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-bg-color","app-bg-color",168697297)),new cljs.core.Keyword(null,"zindex-modal","zindex-modal",1311705508).cljs$core$IFn$_invoke$arity$1(athens.style.ZINDICES),"flex","fixed","4px","column","50%"]);
athens.views.athena.athena_input_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["49px","#433F38","38px",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),"::placeholder",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971))], null)], null),"300","100%","text","24px",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"-0.03em",(0),"4px 4px 0 0"]);
athens.views.athena.results_list_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-bg-color","app-bg-color",168697297)),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"100%"], null);
athens.views.athena.results_heading_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 18px",new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-bg-color","app-bg-color",168697297)),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"position","position",-2011731912),"sticky",new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0 1px 0 0 ",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))], null)], null),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))], null)], null)], null);
athens.views.athena.result_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"grid-template","grid-template",-268181948),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),new cljs.core.Keyword(null,"border-top","border-top",-158897573)],["\"title icon\" \"preview icon\"",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-bg-color","app-bg-color",168697297))], null)], null),"all .05s ease",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"title",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"header-text-color","header-text-color",-2100972680)),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null),new cljs.core.Keyword(null,"preview","preview",451279890),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"preview",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"wrap",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190))], null),new cljs.core.Keyword(null,"link-leader","link-leader",-1261639700),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451),"icon",new cljs.core.Keyword(null,"color","color",1011675173),"transparent",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto auto"], null)], null),"0 12px",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),0.02),"8px 32px",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.selected","&.selected",-406082501),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-bg-color","app-bg-color",168697297))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.Keyword(null,".preview",".preview",351053960),new cljs.core.Keyword(null,".link-leader",".link-leader",-1886712257),new cljs.core.Keyword(null,".result-highlight",".result-highlight",1377844970),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".title",".title",-416997657),new cljs.core.Keyword(null,".preview",".preview",351053960),new cljs.core.Keyword(null,".link-leader",".link-leader",-1886712257),new cljs.core.Keyword(null,".result-highlight",".result-highlight",1377844970),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null)], null)], null)], null),"grid","1fr auto",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))], null)], null)]);
athens.views.athena.result_highlight_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500"], null);
athens.views.athena.hint_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"inherit",new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd","kbd",316156875),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"inherit",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(600),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid rgba(67, 63, 56, 0.25)",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 4px"], null)], null)], null)], null);
athens.views.athena.highlight_match = (function athens$views$athena$highlight_match(query,txt){
var query_pattern = athens.db.re_case_insensitive(["((?<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),")|(?=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),"))"].join(''));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,part){
if(cljs.core.truth_(cljs.core.re_find(query_pattern,part))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.result-highlight","span.result-highlight",-1225928510),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_highlight_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),part], null);
} else {
return part;
}
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(txt,query_pattern)));
});
athens.views.athena.create_search_handler = (function athens$views$athena$create_search_handler(state){
return (function (query){
if(clojure.string.blank_QMARK_(query)){
return cljs.core.reset_BANG_(state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"query","query",-1288509510),null,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.PersistentVector.EMPTY], null));
} else {
return cljs.core.reset_BANG_(state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.db.search_exact_node_title(query)], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),athens.db.search_in_node_title(query)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),athens.db.search_in_block_content(query))], 0)))], null));
}
});
});
athens.views.athena.key_down_handler = (function athens$views$athena$key_down_handler(e,state){
var key = e.keyCode;
var shift = e.shiftKey;
var map__55731 = cljs.core.deref(state);
var map__55731__$1 = (((((!((map__55731 == null))))?(((((map__55731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55731):map__55731);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55731__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55731__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55731__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,index);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.ESC)){
var G__55733 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","toggle","athena/toggle",2028366801)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55733) : re_frame.core.dispatch.call(null,G__55733));
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = shift;
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,key)) && ((index === (0))) && ((item == null)));
} else {
return and__4174__auto__;
}
})())){
var uid = athens.util.gen_block_uid();
var G__55734_55785 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","toggle","athena/toggle",2028366801)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55734_55785) : re_frame.core.dispatch.call(null,G__55734_55785));

var G__55735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","open-item","right-sidebar/open-item",-1234515614),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55735) : re_frame.core.dispatch.call(null,G__55735));
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = shift;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.ENTER);
} else {
return and__4174__auto__;
}
})())){
var G__55736_55786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","toggle","athena/toggle",2028366801)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55736_55786) : re_frame.core.dispatch.call(null,G__55736_55786));

var G__55737 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","open-item","right-sidebar/open-item",-1234515614),new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(item)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55737) : re_frame.core.dispatch.call(null,G__55737));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,key)) && ((index === (0))) && ((item == null)))){
var uid = athens.util.gen_block_uid();
var G__55738_55787 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","toggle","athena/toggle",2028366801)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55738_55787) : re_frame.core.dispatch.call(null,G__55738_55787));

var G__55739_55788 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),query,uid], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55739_55788) : re_frame.core.dispatch.call(null,G__55739_55788));

return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.ENTER)){
var G__55740_55789 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","toggle","athena/toggle",2028366801)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55740_55789) : re_frame.core.dispatch.call(null,G__55740_55789));

return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(item));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(item);
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.UP)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.dec);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.DOWN)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.inc);
} else {
return null;

}
}
}
}
}
}
}
});
athens.views.athena.athena_prompt_el = (function athens$views$athena$athena_prompt_el(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
var G__55741 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","toggle","athena/toggle",2028366801)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55741) : re_frame.core.dispatch.call(null,G__55741));
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Search], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Find or Create a Page"], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px"], null)], null)], null);
});
athens.views.athena.results_el = (function athens$views$athena$results_el(state){
var query_QMARK_ = clojure.string.blank_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
var recent_items = cljs.core.deref((function (){var G__55742 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","get-recent","athena/get-recent",141186072)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55742) : re_frame.core.subscribe.call(null,G__55742));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.athena.results_heading_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),((query_QMARK_)?"Recent":"Results")], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.athena.hint_style),"Press ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd","kbd",316156875),"shift + enter"], null)," to open in right sidebar."], null)], null),((query_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.athena.results_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$athena$results_el_$_iter__55743(s__55744){
return (new cljs.core.LazySeq(null,(function (){
var s__55744__$1 = s__55744;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55744__$1);
if(temp__5735__auto__){
var s__55744__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55744__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55744__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55746 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55745 = (0);
while(true){
if((i__55745 < size__4581__auto__)){
var vec__55747 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55745);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55747,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55747,(1),null);
cljs.core.chunk_append(b__55746,(cljs.core.truth_(x)?(function (){var map__55750 = x;
var map__55750__$1 = (((((!((map__55750 == null))))?(((((map__55750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55750):map__55750);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55750__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55750__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55750__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55750__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55745,map__55750,map__55750__$1,query,title,uid,string,vec__55747,i,x,c__4580__auto__,size__4581__auto__,b__55746,s__55744__$2,temp__5735__auto__,query_QMARK_,recent_items){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__55745,map__55750,map__55750__$1,query,title,uid,string,vec__55747,i,x,c__4580__auto__,size__4581__auto__,b__55746,s__55744__$2,temp__5735__auto__,query_QMARK_,recent_items))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.title","h4.title",-103059385),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"title","title",636505583)),athens.views.athena.highlight_match(query,title)], null),(cljs.core.truth_(string)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.preview","span.preview",391484430),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"preview","preview",451279890)),athens.views.athena.highlight_match(query,string)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.link-leader","span.link-leader",-227077341),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"link-leader","link-leader",-1261639700)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.ArrowForward)], null)], null)], null);
})():null));

var G__55793 = (i__55745 + (1));
i__55745 = G__55793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55746),athens$views$athena$results_el_$_iter__55743(cljs.core.chunk_rest(s__55744__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55746),null);
}
} else {
var vec__55752 = cljs.core.first(s__55744__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55752,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55752,(1),null);
return cljs.core.cons((cljs.core.truth_(x)?(function (){var map__55755 = x;
var map__55755__$1 = (((((!((map__55755 == null))))?(((((map__55755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55755):map__55755);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55755__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55755__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55755__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55755__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__55755,map__55755__$1,query,title,uid,string,vec__55752,i,x,s__55744__$2,temp__5735__auto__,query_QMARK_,recent_items){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(map__55755,map__55755__$1,query,title,uid,string,vec__55752,i,x,s__55744__$2,temp__5735__auto__,query_QMARK_,recent_items))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.title","h4.title",-103059385),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"title","title",636505583)),athens.views.athena.highlight_match(query,title)], null),(cljs.core.truth_(string)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.preview","span.preview",391484430),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"preview","preview",451279890)),athens.views.athena.highlight_match(query,string)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.link-leader","span.link-leader",-227077341),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"link-leader","link-leader",-1261639700)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.ArrowForward)], null)], null)], null);
})():null),athens$views$athena$results_el_$_iter__55743(cljs.core.rest(s__55744__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,recent_items));
})())], null):null)], null);
});
athens.views.athena.athena_component = (function athens$views$athena$athena_component(){
var open_QMARK_ = cljs.core.deref((function (){var G__55757 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","open","athena/open",1253777725)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55757) : re_frame.core.subscribe.call(null,G__55757));
})());
var s = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"query","query",-1288509510),null,new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.PersistentVector.EMPTY], null));
var search_handler = (function (){var G__55758 = athens.views.athena.create_search_handler(s);
var G__55759 = (500);
return goog.functions.debounce(G__55758,G__55759);
})();
if(cljs.core.truth_(open_QMARK_)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.athena","div.athena",-1081699296),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.athena.container_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.athena_input_style,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Find or Create Page",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__55760 = e.target.value;
return (search_handler.cljs$core$IFn$_invoke$arity$1 ? search_handler.cljs$core$IFn$_invoke$arity$1(G__55760) : search_handler.call(null,G__55760));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
return athens.views.athena.key_down_handler(e,s);
})], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.athena.results_el,s], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var map__55761 = cljs.core.deref(s);
var map__55761__$1 = (((((!((map__55761 == null))))?(((((map__55761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55761):map__55761);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55761__$1,new cljs.core.Keyword(null,"results","results",-1134170113));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55761__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55761__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.athena.results_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$athena$athena_component_$_iter__55763(s__55764){
return (new cljs.core.LazySeq(null,(function (){
var s__55764__$1 = s__55764;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55764__$1);
if(temp__5735__auto__){
var s__55764__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55764__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55764__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55766 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55765 = (0);
while(true){
if((i__55765 < size__4581__auto__)){
var vec__55767 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55765);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55767,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55767,(1),null);
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(x);
var title = (function (){var or__4185__auto__ = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var uid = (function (){var or__4185__auto__ = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var string = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(x);
cljs.core.chunk_append(b__55766,(((x == null))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55765,parent,title,uid,string,vec__55767,i,x,c__4580__auto__,size__4581__auto__,b__55766,s__55764__$2,temp__5735__auto__,map__55761,map__55761__$1,results,query,index,open_QMARK_,s,search_handler){
return (function (_){
var uid__$1 = athens.util.gen_block_uid();
var G__55770_55794 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","toggle","athena/toggle",2028366801)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55770_55794) : re_frame.core.dispatch.call(null,G__55770_55794));

var G__55771_55795 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),query,uid__$1], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55771_55795) : re_frame.core.dispatch.call(null,G__55771_55795));

return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$1);
});})(i__55765,parent,title,uid,string,vec__55767,i,x,c__4580__auto__,size__4581__auto__,b__55766,s__55764__$2,temp__5735__auto__,map__55761,map__55761__$1,results,query,index,open_QMARK_,s,search_handler))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,index))?"selected":null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.title","h4.title",-103059385),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"title","title",636505583)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Create Page: "], null),query], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.link-leader","span.link-leader",-227077341),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"link-leader","link-leader",-1261639700)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Create)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55765,parent,title,uid,string,vec__55767,i,x,c__4580__auto__,size__4581__auto__,b__55766,s__55764__$2,temp__5735__auto__,map__55761,map__55761__$1,results,query,index,open_QMARK_,s,search_handler){
return (function (){
var selected_page = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("node","title","node/title",628940777),title,new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","string","block/string",-2066596447),string,new cljs.core.Keyword(null,"query","query",-1288509510),query], null);
var G__55772_55796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","update-recent-items","athena/update-recent-items",-1049064820),selected_page], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55772_55796) : re_frame.core.dispatch.call(null,G__55772_55796));

return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__55765,parent,title,uid,string,vec__55767,i,x,c__4580__auto__,size__4581__auto__,b__55766,s__55764__$2,temp__5735__auto__,map__55761,map__55761__$1,results,query,index,open_QMARK_,s,search_handler))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,index))?"selected":null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.title","h4.title",-103059385),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"title","title",636505583)),athens.views.athena.highlight_match(query,title)], null),(cljs.core.truth_(string)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.preview","span.preview",391484430),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"preview","preview",451279890)),athens.views.athena.highlight_match(query,string)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.link-leader","span.link-leader",-227077341),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"link-leader","link-leader",-1261639700)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.ArrowForward)], null)], null)], null)));

var G__55797 = (i__55765 + (1));
i__55765 = G__55797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55766),athens$views$athena$athena_component_$_iter__55763(cljs.core.chunk_rest(s__55764__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55766),null);
}
} else {
var vec__55773 = cljs.core.first(s__55764__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55773,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55773,(1),null);
var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(x);
var title = (function (){var or__4185__auto__ = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var uid = (function (){var or__4185__auto__ = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var string = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(x);
return cljs.core.cons((((x == null))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (parent,title,uid,string,vec__55773,i,x,s__55764__$2,temp__5735__auto__,map__55761,map__55761__$1,results,query,index,open_QMARK_,s,search_handler){
return (function (_){
var uid__$1 = athens.util.gen_block_uid();
var G__55776_55798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","toggle","athena/toggle",2028366801)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55776_55798) : re_frame.core.dispatch.call(null,G__55776_55798));

var G__55777_55799 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","create","page/create",-1304816391),query,uid__$1], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55777_55799) : re_frame.core.dispatch.call(null,G__55777_55799));

return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$1);
});})(parent,title,uid,string,vec__55773,i,x,s__55764__$2,temp__5735__auto__,map__55761,map__55761__$1,results,query,index,open_QMARK_,s,search_handler))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,index))?"selected":null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.title","h4.title",-103059385),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"title","title",636505583)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Create Page: "], null),query], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.link-leader","span.link-leader",-227077341),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"link-leader","link-leader",-1261639700)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Create)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (parent,title,uid,string,vec__55773,i,x,s__55764__$2,temp__5735__auto__,map__55761,map__55761__$1,results,query,index,open_QMARK_,s,search_handler){
return (function (){
var selected_page = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("node","title","node/title",628940777),title,new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid,new cljs.core.Keyword("block","string","block/string",-2066596447),string,new cljs.core.Keyword(null,"query","query",-1288509510),query], null);
var G__55778_55800 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athena","update-recent-items","athena/update-recent-items",-1049064820),selected_page], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55778_55800) : re_frame.core.dispatch.call(null,G__55778_55800));

return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(parent,title,uid,string,vec__55773,i,x,s__55764__$2,temp__5735__auto__,map__55761,map__55761__$1,results,query,index,open_QMARK_,s,search_handler))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,index))?"selected":null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.title","h4.title",-103059385),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"title","title",636505583)),athens.views.athena.highlight_match(query,title)], null),(cljs.core.truth_(string)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.preview","span.preview",391484430),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"preview","preview",451279890)),athens.views.athena.highlight_match(query,string)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.link-leader","span.link-leader",-227077341),stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(athens.views.athena.result_style,new cljs.core.Keyword(null,"link-leader","link-leader",-1261639700)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.ArrowForward)], null)], null)], null)),athens$views$athena$athena_component_$_iter__55763(cljs.core.rest(s__55764__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,results));
})())], null);
})], null)], null);
} else {
return null;
}
});

//# sourceMappingURL=athens.views.athena.js.map
