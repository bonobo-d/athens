goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.patterns');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.views.blocks');
goog.require('athens.views.breadcrumbs');
goog.require('athens.views.buttons');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('garden.selectors');
goog.require('goog.functions');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('tick.alpha.api');
athens.views.node_page.page_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"55rem"], null);
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58210 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58210) : re_frame.core.dispatch.call(null,G__58210));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.get_ref_ids = (function athens$views$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58211 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58212 = athens.db.dsdb;
var G__58213 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58211,G__58212,G__58213) : posh.reagent.q.call(null,G__58211,G__58212,G__58213));
})());
});
athens.views.node_page.merge_parents_and_block = (function athens$views$node_page$merge_parents_and_block(ref_ids){
var parents = cljs.core.reduce_kv((function (m,_,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,athens.db.get_parents_recursively(v));
}),cljs.core.PersistentArrayMap.EMPTY,ref_ids);
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return athens.db.get_block_document(id);
}),ref_ids);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parents","block/parents",-1954648902),cljs.core.get.cljs$core$IFn$_invoke$arity$2(parents,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))], null)], 0));
}),blocks);
});
athens.views.node_page.group_by_parent = (function athens$views$node_page$group_by_parent(blocks){
return cljs.core.group_by((function (x){
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(x)));
}),blocks);
});
athens.views.node_page.get_data = (function athens$views$node_page$get_data(pattern){
return cljs.core.seq(athens.views.node_page.group_by_parent(athens.views.node_page.merge_parents_and_block(athens.views.node_page.get_ref_ids(pattern))));
});
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__58215 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58215,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58215,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58215,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58214){if((e58214 instanceof Object)){
var _ = e58214;
return false;
} else {
throw e58214;

}
}})());
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(p__58218,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58219 = p__58218;
var map__58219__$1 = (((((!((map__58219 == null))))?(((((map__58219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58219):map__58219);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58219__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58219__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58219__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58221 = e.target.value;
var G__58222 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58221,G__58222) : athens.views.node_page.db_handler.call(null,G__58221,G__58222));
})], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58223(s__58224){
return (new cljs.core.LazySeq(null,(function (){
var s__58224__$1 = s__58224;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58224__$1);
if(temp__5735__auto__){
var s__58224__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58224__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58224__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58226 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58225 = (0);
while(true){
if((i__58225 < size__4581__auto__)){
var map__58227 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58225);
var map__58227__$1 = (((((!((map__58227 == null))))?(((((map__58227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58227):map__58227);
var child = map__58227__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58226,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58360 = (i__58225 + (1));
i__58225 = G__58360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58226),athens$views$node_page$node_page_el_$_iter__58223(cljs.core.chunk_rest(s__58224__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58226),null);
}
} else {
var map__58229 = cljs.core.first(s__58224__$2);
var map__58229__$1 = (((((!((map__58229 == null))))?(((((map__58229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58229):map__58229);
var child = map__58229__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58229__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58223(cljs.core.rest(s__58224__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58231(s__58232){
return (new cljs.core.LazySeq(null,(function (){
var s__58232__$1 = s__58232;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58232__$1);
if(temp__5735__auto__){
var s__58232__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58232__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58232__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58234 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58233 = (0);
while(true){
if((i__58233 < size__4581__auto__)){
var vec__58235 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58233);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58235,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58235,(1),null);
cljs.core.chunk_append(b__58234,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58233,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238(s__58239){
return (new cljs.core.LazySeq(null,((function (i__58233,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
var s__58239__$1 = s__58239;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58239__$1);
if(temp__5735__auto____$1){
var s__58239__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58239__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58239__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58241 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58240 = (0);
while(true){
if((i__58240 < size__4581__auto____$1)){
var vec__58242 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58240);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58242,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58242,(1),null);
cljs.core.chunk_append(b__58241,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58240,i__58233,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58240,i__58233,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58240,i__58233,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58245(s__58246){
return (new cljs.core.LazySeq(null,((function (i__58240,i__58233,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
var s__58246__$1 = s__58246;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58246__$1);
if(temp__5735__auto____$2){
var s__58246__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58246__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58246__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58248 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58247 = (0);
while(true){
if((i__58247 < size__4581__auto____$2)){
var map__58249 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58247);
var map__58249__$1 = (((((!((map__58249 == null))))?(((((map__58249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58249):map__58249);
var block = map__58249__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58249__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58249__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58248,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58247,i__58240,i__58233,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58245_$_iter__58251(s__58252){
return (new cljs.core.LazySeq(null,((function (i__58247,i__58240,i__58233,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
var s__58252__$1 = s__58252;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58252__$1);
if(temp__5735__auto____$3){
var s__58252__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58252__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58252__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58254 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58253 = (0);
while(true){
if((i__58253 < size__4581__auto____$3)){
var map__58255 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58253);
var map__58255__$1 = (((((!((map__58255 == null))))?(((((map__58255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58255):map__58255);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58255__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58255__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58255__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58254,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58253,i__58247,i__58240,i__58233,map__58255,map__58255__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58254,s__58252__$2,temp__5735__auto____$3,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58253,i__58247,i__58240,i__58233,map__58255,map__58255__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58254,s__58252__$2,temp__5735__auto____$3,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58361 = (i__58253 + (1));
i__58253 = G__58361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58254),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58245_$_iter__58251(cljs.core.chunk_rest(s__58252__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58254),null);
}
} else {
var map__58257 = cljs.core.first(s__58252__$2);
var map__58257__$1 = (((((!((map__58257 == null))))?(((((map__58257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58257):map__58257);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58257__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58257__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58257__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58247,i__58240,i__58233,map__58257,map__58257__$1,title__$1,string,uid__$2,s__58252__$2,temp__5735__auto____$3,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58247,i__58240,i__58233,map__58257,map__58257__$1,title__$1,string,uid__$2,s__58252__$2,temp__5735__auto____$3,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58245_$_iter__58251(cljs.core.rest(s__58252__$2)));
}
} else {
return null;
}
break;
}
});})(i__58247,i__58240,i__58233,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
,null,null));
});})(i__58247,i__58240,i__58233,map__58249,map__58249__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58248,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58362 = (i__58247 + (1));
i__58247 = G__58362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58248),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58245(cljs.core.chunk_rest(s__58246__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58248),null);
}
} else {
var map__58259 = cljs.core.first(s__58246__$2);
var map__58259__$1 = (((((!((map__58259 == null))))?(((((map__58259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58259):map__58259);
var block = map__58259__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58259__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58259__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58240,i__58233,map__58259,map__58259__$1,block,uid__$1,parents,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58245_$_iter__58261(s__58262){
return (new cljs.core.LazySeq(null,((function (i__58240,i__58233,map__58259,map__58259__$1,block,uid__$1,parents,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
var s__58262__$1 = s__58262;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58262__$1);
if(temp__5735__auto____$3){
var s__58262__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58262__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58262__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58264 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58263 = (0);
while(true){
if((i__58263 < size__4581__auto____$2)){
var map__58265 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58263);
var map__58265__$1 = (((((!((map__58265 == null))))?(((((map__58265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58265):map__58265);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58265__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58265__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58265__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58264,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58263,i__58240,i__58233,map__58265,map__58265__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58264,s__58262__$2,temp__5735__auto____$3,map__58259,map__58259__$1,block,uid__$1,parents,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58263,i__58240,i__58233,map__58265,map__58265__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58264,s__58262__$2,temp__5735__auto____$3,map__58259,map__58259__$1,block,uid__$1,parents,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58363 = (i__58263 + (1));
i__58263 = G__58363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58264),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58245_$_iter__58261(cljs.core.chunk_rest(s__58262__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58264),null);
}
} else {
var map__58267 = cljs.core.first(s__58262__$2);
var map__58267__$1 = (((((!((map__58267 == null))))?(((((map__58267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58267):map__58267);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58267__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58267__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58267__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58240,i__58233,map__58267,map__58267__$1,title__$1,string,uid__$2,s__58262__$2,temp__5735__auto____$3,map__58259,map__58259__$1,block,uid__$1,parents,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58240,i__58233,map__58267,map__58267__$1,title__$1,string,uid__$2,s__58262__$2,temp__5735__auto____$3,map__58259,map__58259__$1,block,uid__$1,parents,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58245_$_iter__58261(cljs.core.rest(s__58262__$2)));
}
} else {
return null;
}
break;
}
});})(i__58240,i__58233,map__58259,map__58259__$1,block,uid__$1,parents,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
,null,null));
});})(i__58240,i__58233,map__58259,map__58259__$1,block,uid__$1,parents,s__58246__$2,temp__5735__auto____$2,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58245(cljs.core.rest(s__58246__$2)));
}
} else {
return null;
}
break;
}
});})(i__58240,i__58233,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
,null,null));
});})(i__58240,i__58233,vec__58242,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58241,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58364 = (i__58240 + (1));
i__58240 = G__58364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58241),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238(cljs.core.chunk_rest(s__58239__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58241),null);
}
} else {
var vec__58269 = cljs.core.first(s__58239__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58269,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58269,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58233,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58233,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58233,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58272(s__58273){
return (new cljs.core.LazySeq(null,((function (i__58233,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
var s__58273__$1 = s__58273;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58273__$1);
if(temp__5735__auto____$2){
var s__58273__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58273__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58273__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58275 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58274 = (0);
while(true){
if((i__58274 < size__4581__auto____$1)){
var map__58276 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58274);
var map__58276__$1 = (((((!((map__58276 == null))))?(((((map__58276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58276):map__58276);
var block = map__58276__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58276__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58276__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58275,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58274,i__58233,map__58276,map__58276__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58275,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58272_$_iter__58278(s__58279){
return (new cljs.core.LazySeq(null,((function (i__58274,i__58233,map__58276,map__58276__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58275,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
var s__58279__$1 = s__58279;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58279__$1);
if(temp__5735__auto____$3){
var s__58279__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58279__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58279__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58281 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58280 = (0);
while(true){
if((i__58280 < size__4581__auto____$2)){
var map__58282 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58280);
var map__58282__$1 = (((((!((map__58282 == null))))?(((((map__58282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58282):map__58282);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58282__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58282__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58282__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58281,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58280,i__58274,i__58233,map__58282,map__58282__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58281,s__58279__$2,temp__5735__auto____$3,map__58276,map__58276__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58275,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58280,i__58274,i__58233,map__58282,map__58282__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58281,s__58279__$2,temp__5735__auto____$3,map__58276,map__58276__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58275,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58365 = (i__58280 + (1));
i__58280 = G__58365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58281),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58272_$_iter__58278(cljs.core.chunk_rest(s__58279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58281),null);
}
} else {
var map__58284 = cljs.core.first(s__58279__$2);
var map__58284__$1 = (((((!((map__58284 == null))))?(((((map__58284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58284):map__58284);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58284__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58274,i__58233,map__58284,map__58284__$1,title__$1,string,uid__$2,s__58279__$2,temp__5735__auto____$3,map__58276,map__58276__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58275,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58274,i__58233,map__58284,map__58284__$1,title__$1,string,uid__$2,s__58279__$2,temp__5735__auto____$3,map__58276,map__58276__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58275,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58272_$_iter__58278(cljs.core.rest(s__58279__$2)));
}
} else {
return null;
}
break;
}
});})(i__58274,i__58233,map__58276,map__58276__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58275,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
,null,null));
});})(i__58274,i__58233,map__58276,map__58276__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58275,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58366 = (i__58274 + (1));
i__58274 = G__58366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58275),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58272(cljs.core.chunk_rest(s__58273__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58275),null);
}
} else {
var map__58286 = cljs.core.first(s__58273__$2);
var map__58286__$1 = (((((!((map__58286 == null))))?(((((map__58286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58286):map__58286);
var block = map__58286__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58286__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58233,map__58286,map__58286__$1,block,uid__$1,parents,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58272_$_iter__58288(s__58289){
return (new cljs.core.LazySeq(null,((function (i__58233,map__58286,map__58286__$1,block,uid__$1,parents,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
var s__58289__$1 = s__58289;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58289__$1);
if(temp__5735__auto____$3){
var s__58289__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58289__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58289__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58291 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58290 = (0);
while(true){
if((i__58290 < size__4581__auto____$1)){
var map__58292 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58290);
var map__58292__$1 = (((((!((map__58292 == null))))?(((((map__58292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58292):map__58292);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58292__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58292__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58292__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58291,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58290,i__58233,map__58292,map__58292__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58291,s__58289__$2,temp__5735__auto____$3,map__58286,map__58286__$1,block,uid__$1,parents,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58290,i__58233,map__58292,map__58292__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58291,s__58289__$2,temp__5735__auto____$3,map__58286,map__58286__$1,block,uid__$1,parents,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58367 = (i__58290 + (1));
i__58290 = G__58367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58291),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58272_$_iter__58288(cljs.core.chunk_rest(s__58289__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58291),null);
}
} else {
var map__58294 = cljs.core.first(s__58289__$2);
var map__58294__$1 = (((((!((map__58294 == null))))?(((((map__58294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58294):map__58294);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58294__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58294__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58294__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58233,map__58294,map__58294__$1,title__$1,string,uid__$2,s__58289__$2,temp__5735__auto____$3,map__58286,map__58286__$1,block,uid__$1,parents,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58233,map__58294,map__58294__$1,title__$1,string,uid__$2,s__58289__$2,temp__5735__auto____$3,map__58286,map__58286__$1,block,uid__$1,parents,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58272_$_iter__58288(cljs.core.rest(s__58289__$2)));
}
} else {
return null;
}
break;
}
});})(i__58233,map__58286,map__58286__$1,block,uid__$1,parents,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
,null,null));
});})(i__58233,map__58286,map__58286__$1,block,uid__$1,parents,s__58273__$2,temp__5735__auto____$2,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238_$_iter__58272(cljs.core.rest(s__58273__$2)));
}
} else {
return null;
}
break;
}
});})(i__58233,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
,null,null));
});})(i__58233,vec__58269,group_title,group,s__58239__$2,temp__5735__auto____$1,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58238(cljs.core.rest(s__58239__$2)));
}
} else {
return null;
}
break;
}
});})(i__58233,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
,null,null));
});})(i__58233,vec__58235,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58234,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58368 = (i__58233 + (1));
i__58233 = G__58368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58234),athens$views$node_page$node_page_el_$_iter__58231(cljs.core.chunk_rest(s__58232__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58234),null);
}
} else {
var vec__58296 = cljs.core.first(s__58232__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58296,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58296,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299(s__58300){
return (new cljs.core.LazySeq(null,(function (){
var s__58300__$1 = s__58300;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58300__$1);
if(temp__5735__auto____$1){
var s__58300__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58300__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58300__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58302 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58301 = (0);
while(true){
if((i__58301 < size__4581__auto__)){
var vec__58303 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58301);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58303,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58303,(1),null);
cljs.core.chunk_append(b__58302,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58301,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58301,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58301,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58306(s__58307){
return (new cljs.core.LazySeq(null,((function (i__58301,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
var s__58307__$1 = s__58307;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58307__$1);
if(temp__5735__auto____$2){
var s__58307__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58307__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58307__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58309 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58308 = (0);
while(true){
if((i__58308 < size__4581__auto____$1)){
var map__58310 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58308);
var map__58310__$1 = (((((!((map__58310 == null))))?(((((map__58310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58310):map__58310);
var block = map__58310__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58310__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58310__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58309,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58308,i__58301,map__58310,map__58310__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58309,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58306_$_iter__58312(s__58313){
return (new cljs.core.LazySeq(null,((function (i__58308,i__58301,map__58310,map__58310__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58309,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
var s__58313__$1 = s__58313;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58313__$1);
if(temp__5735__auto____$3){
var s__58313__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58313__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58313__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58315 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58314 = (0);
while(true){
if((i__58314 < size__4581__auto____$2)){
var map__58316 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58314);
var map__58316__$1 = (((((!((map__58316 == null))))?(((((map__58316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58316):map__58316);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58315,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58314,i__58308,i__58301,map__58316,map__58316__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58315,s__58313__$2,temp__5735__auto____$3,map__58310,map__58310__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58309,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58314,i__58308,i__58301,map__58316,map__58316__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58315,s__58313__$2,temp__5735__auto____$3,map__58310,map__58310__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58309,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58369 = (i__58314 + (1));
i__58314 = G__58369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58315),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58306_$_iter__58312(cljs.core.chunk_rest(s__58313__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58315),null);
}
} else {
var map__58318 = cljs.core.first(s__58313__$2);
var map__58318__$1 = (((((!((map__58318 == null))))?(((((map__58318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58318):map__58318);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58318__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58318__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58318__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58308,i__58301,map__58318,map__58318__$1,title__$1,string,uid__$2,s__58313__$2,temp__5735__auto____$3,map__58310,map__58310__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58309,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58308,i__58301,map__58318,map__58318__$1,title__$1,string,uid__$2,s__58313__$2,temp__5735__auto____$3,map__58310,map__58310__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58309,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58306_$_iter__58312(cljs.core.rest(s__58313__$2)));
}
} else {
return null;
}
break;
}
});})(i__58308,i__58301,map__58310,map__58310__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58309,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
,null,null));
});})(i__58308,i__58301,map__58310,map__58310__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58309,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58370 = (i__58308 + (1));
i__58308 = G__58370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58309),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58306(cljs.core.chunk_rest(s__58307__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58309),null);
}
} else {
var map__58320 = cljs.core.first(s__58307__$2);
var map__58320__$1 = (((((!((map__58320 == null))))?(((((map__58320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58320):map__58320);
var block = map__58320__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58320__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58320__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58301,map__58320,map__58320__$1,block,uid__$1,parents,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58306_$_iter__58322(s__58323){
return (new cljs.core.LazySeq(null,((function (i__58301,map__58320,map__58320__$1,block,uid__$1,parents,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
var s__58323__$1 = s__58323;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58323__$1);
if(temp__5735__auto____$3){
var s__58323__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58323__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58323__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58325 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58324 = (0);
while(true){
if((i__58324 < size__4581__auto____$1)){
var map__58326 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58324);
var map__58326__$1 = (((((!((map__58326 == null))))?(((((map__58326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58326):map__58326);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58326__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58326__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58326__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58325,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58324,i__58301,map__58326,map__58326__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58325,s__58323__$2,temp__5735__auto____$3,map__58320,map__58320__$1,block,uid__$1,parents,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58324,i__58301,map__58326,map__58326__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58325,s__58323__$2,temp__5735__auto____$3,map__58320,map__58320__$1,block,uid__$1,parents,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58371 = (i__58324 + (1));
i__58324 = G__58371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58325),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58306_$_iter__58322(cljs.core.chunk_rest(s__58323__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58325),null);
}
} else {
var map__58328 = cljs.core.first(s__58323__$2);
var map__58328__$1 = (((((!((map__58328 == null))))?(((((map__58328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58328):map__58328);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58328__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58328__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58328__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58301,map__58328,map__58328__$1,title__$1,string,uid__$2,s__58323__$2,temp__5735__auto____$3,map__58320,map__58320__$1,block,uid__$1,parents,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58301,map__58328,map__58328__$1,title__$1,string,uid__$2,s__58323__$2,temp__5735__auto____$3,map__58320,map__58320__$1,block,uid__$1,parents,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58306_$_iter__58322(cljs.core.rest(s__58323__$2)));
}
} else {
return null;
}
break;
}
});})(i__58301,map__58320,map__58320__$1,block,uid__$1,parents,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
,null,null));
});})(i__58301,map__58320,map__58320__$1,block,uid__$1,parents,s__58307__$2,temp__5735__auto____$2,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58306(cljs.core.rest(s__58307__$2)));
}
} else {
return null;
}
break;
}
});})(i__58301,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
,null,null));
});})(i__58301,vec__58303,group_title,group,c__4580__auto__,size__4581__auto__,b__58302,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58372 = (i__58301 + (1));
i__58301 = G__58372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58302),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299(cljs.core.chunk_rest(s__58300__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58302),null);
}
} else {
var vec__58330 = cljs.core.first(s__58300__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58330,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58330,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58333(s__58334){
return (new cljs.core.LazySeq(null,(function (){
var s__58334__$1 = s__58334;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58334__$1);
if(temp__5735__auto____$2){
var s__58334__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58334__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58334__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58336 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58335 = (0);
while(true){
if((i__58335 < size__4581__auto__)){
var map__58337 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58335);
var map__58337__$1 = (((((!((map__58337 == null))))?(((((map__58337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58337):map__58337);
var block = map__58337__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58337__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58337__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58336,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58335,map__58337,map__58337__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58336,s__58334__$2,temp__5735__auto____$2,vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58333_$_iter__58339(s__58340){
return (new cljs.core.LazySeq(null,((function (i__58335,map__58337,map__58337__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58336,s__58334__$2,temp__5735__auto____$2,vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
var s__58340__$1 = s__58340;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58340__$1);
if(temp__5735__auto____$3){
var s__58340__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58340__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58340__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58342 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58341 = (0);
while(true){
if((i__58341 < size__4581__auto____$1)){
var map__58343 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58341);
var map__58343__$1 = (((((!((map__58343 == null))))?(((((map__58343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58343):map__58343);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58343__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58342,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58341,i__58335,map__58343,map__58343__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58342,s__58340__$2,temp__5735__auto____$3,map__58337,map__58337__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58336,s__58334__$2,temp__5735__auto____$2,vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58341,i__58335,map__58343,map__58343__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58342,s__58340__$2,temp__5735__auto____$3,map__58337,map__58337__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58336,s__58334__$2,temp__5735__auto____$2,vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58373 = (i__58341 + (1));
i__58341 = G__58373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58342),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58333_$_iter__58339(cljs.core.chunk_rest(s__58340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58342),null);
}
} else {
var map__58345 = cljs.core.first(s__58340__$2);
var map__58345__$1 = (((((!((map__58345 == null))))?(((((map__58345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58345):map__58345);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58345__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58335,map__58345,map__58345__$1,title__$1,string,uid__$2,s__58340__$2,temp__5735__auto____$3,map__58337,map__58337__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58336,s__58334__$2,temp__5735__auto____$2,vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58335,map__58345,map__58345__$1,title__$1,string,uid__$2,s__58340__$2,temp__5735__auto____$3,map__58337,map__58337__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58336,s__58334__$2,temp__5735__auto____$2,vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58333_$_iter__58339(cljs.core.rest(s__58340__$2)));
}
} else {
return null;
}
break;
}
});})(i__58335,map__58337,map__58337__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58336,s__58334__$2,temp__5735__auto____$2,vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
,null,null));
});})(i__58335,map__58337,map__58337__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58336,s__58334__$2,temp__5735__auto____$2,vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58374 = (i__58335 + (1));
i__58335 = G__58374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58336),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58333(cljs.core.chunk_rest(s__58334__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58336),null);
}
} else {
var map__58347 = cljs.core.first(s__58334__$2);
var map__58347__$1 = (((((!((map__58347 == null))))?(((((map__58347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58347):map__58347);
var block = map__58347__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58347__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58347__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58347,map__58347__$1,block,uid__$1,parents,s__58334__$2,temp__5735__auto____$2,vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58333_$_iter__58349(s__58350){
return (new cljs.core.LazySeq(null,(function (){
var s__58350__$1 = s__58350;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58350__$1);
if(temp__5735__auto____$3){
var s__58350__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58350__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58350__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58352 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58351 = (0);
while(true){
if((i__58351 < size__4581__auto__)){
var map__58353 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58351);
var map__58353__$1 = (((((!((map__58353 == null))))?(((((map__58353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58353):map__58353);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58353__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58353__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58353__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58352,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58351,map__58353,map__58353__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58352,s__58350__$2,temp__5735__auto____$3,map__58347,map__58347__$1,block,uid__$1,parents,s__58334__$2,temp__5735__auto____$2,vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58351,map__58353,map__58353__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58352,s__58350__$2,temp__5735__auto____$3,map__58347,map__58347__$1,block,uid__$1,parents,s__58334__$2,temp__5735__auto____$2,vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58375 = (i__58351 + (1));
i__58351 = G__58375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58352),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58333_$_iter__58349(cljs.core.chunk_rest(s__58350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58352),null);
}
} else {
var map__58355 = cljs.core.first(s__58350__$2);
var map__58355__$1 = (((((!((map__58355 == null))))?(((((map__58355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58355):map__58355);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58355__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58355__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58355__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58355,map__58355__$1,title__$1,string,uid__$2,s__58350__$2,temp__5735__auto____$3,map__58347,map__58347__$1,block,uid__$1,parents,s__58334__$2,temp__5735__auto____$2,vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58355,map__58355__$1,title__$1,string,uid__$2,s__58350__$2,temp__5735__auto____$3,map__58347,map__58347__$1,block,uid__$1,parents,s__58334__$2,temp__5735__auto____$2,vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58333_$_iter__58349(cljs.core.rest(s__58350__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58347,map__58347__$1,block,uid__$1,parents,s__58334__$2,temp__5735__auto____$2,vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299_$_iter__58333(cljs.core.rest(s__58334__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58330,group_title,group,s__58300__$2,temp__5735__auto____$1,vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$views$node_page$node_page_el_$_iter__58231_$_iter__58299(cljs.core.rest(s__58300__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58296,linked_or_unlinked,refs,s__58232__$2,temp__5735__auto__,map__58219,map__58219__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$views$node_page$node_page_el_$_iter__58231(cljs.core.rest(s__58232__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_groups);
})())], null);
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__58357 = athens.db.get_node_document(ident);
var map__58357__$1 = (((((!((map__58357 == null))))?(((((map__58357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58357):map__58357);
var node = map__58357__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58357__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58357__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58359 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58359) : re_frame.core.subscribe.call(null,G__58359));
})());
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.views.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.views.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
