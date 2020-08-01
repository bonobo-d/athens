goog.provide('athens.views.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.parse_renderer');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.util');
goog.require('athens.views.blocks');
goog.require('athens.views.breadcrumbs');
goog.require('athens.views.buttons');
goog.require('athens.views.dropdown');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('garden.selectors');
goog.require('goog.functions');
goog.require('komponentit.autosize');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('tick.alpha.api');
athens.views.node_page.page_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"55rem"], null);
athens.views.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0 0.2em 1rem",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","0.25rem","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(3),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.views.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.views.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.views.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.views.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.views.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"background-minus-2","background-minus-2",-1711017591),new cljs.core.Keyword(null,"opacity-med","opacity-med",1700530190)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"0.25rem",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.views.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.views.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"border-color","border-color",-2059162761))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.views.node_page.page_menu_toggle_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"-0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"1000px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.375rem 0.5rem",new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703)),new cljs.core.Keyword(null,"top","top",-1856271961),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-100%, -50%)"], null);
athens.views.node_page.handler = (function athens$views$node_page$handler(val,uid){
var G__58584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58584) : re_frame.core.dispatch.call(null,G__58584));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__58586 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58586,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58586,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58586,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e58585){if((e58585 instanceof Object)){
var _ = e58585;
return false;
} else {
throw e58585;

}
}})());
});
athens.views.node_page.handle_new_first_child_block_click = (function athens$views$node_page$handle_new_first_child_block_click(parent_uid){
var new_uid = athens.util.gen_block_uid();
var now = athens.util.now_ts();
var G__58589_58737 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),parent_uid,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null)], null)], null)], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58589_58737) : re_frame.core.dispatch.call(null,G__58589_58737));

var G__58590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58590) : re_frame.core.dispatch.call(null,G__58590));
});
athens.views.node_page.placeholder_block_el = (function athens$views$node_page$placeholder_block_el(parent_uid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.blocks.bullet_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.node_page.handle_new_first_child_block_click(parent_uid);
})], null),"Click here to add content..."], null)], null)], null);
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(_,___$1,___$2,___$3){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),false,new cljs.core.Keyword("menu","x","menu/x",2085660544),null,new cljs.core.Keyword("menu","y","menu/y",-1754654817),null], null));
return (function (block,editing_uid,ref_groups,timeline_page_QMARK_){
var map__58591 = block;
var map__58591__$1 = (((((!((map__58591 == null))))?(((((map__58591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58591):map__58591);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58591__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var is_shortcut_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58591__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58591__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58591__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__58592 = cljs.core.deref(state);
var map__58592__$1 = (((((!((map__58592 == null))))?(((((map__58592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58592):map__58592);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58592__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58595 = e.target.value;
var G__58596 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58595,G__58596) : athens.views.node_page.db_handler.call(null,G__58595,G__58596));
})], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show)?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(show)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("menu","show","menu/show",-580966400),false);
} else {
var rect = e.target.getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),true,new cljs.core.Keyword("menu","x","menu/x",2085660544),rect.left,new cljs.core.Keyword("menu","y","menu/y",-1754654817),rect.bottom], null));
}
}),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ExpandMore], null)], null),(cljs.core.truth_(show)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),(cljs.core.truth_(is_shortcut_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","remove-shortcut","page/remove-shortcut",301722603),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58597) : re_frame.core.dispatch.call(null,G__58597));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.BookmarkBorder], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Remove Shortcut"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","add-shortcut","page/add-shortcut",467846378),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58598) : re_frame.core.dispatch.call(null,G__58598));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Bookmark], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Add Shortcut"], null)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_separator_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
athens.router.navigate(new cljs.core.Keyword(null,"pages","pages",-285406513));

var G__58599 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","delete","page/delete",-1774686917),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58599) : re_frame.core.dispatch.call(null,G__58599));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58600(s__58601){
return (new cljs.core.LazySeq(null,(function (){
var s__58601__$1 = s__58601;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58601__$1);
if(temp__5735__auto__){
var s__58601__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58601__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58601__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58603 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58602 = (0);
while(true){
if((i__58602 < size__4581__auto__)){
var map__58604 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58602);
var map__58604__$1 = (((((!((map__58604 == null))))?(((((map__58604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58604):map__58604);
var child = map__58604__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58604__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58603,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58738 = (i__58602 + (1));
i__58602 = G__58738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58603),athens$views$node_page$node_page_el_$_iter__58600(cljs.core.chunk_rest(s__58601__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58603),null);
}
} else {
var map__58606 = cljs.core.first(s__58601__$2);
var map__58606__$1 = (((((!((map__58606 == null))))?(((((map__58606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58606):map__58606);
var child = map__58606__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58606__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__58600(cljs.core.rest(s__58601__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$views$node_page$node_page_el_$_iter__58608(s__58609){
return (new cljs.core.LazySeq(null,(function (){
var s__58609__$1 = s__58609;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58609__$1);
if(temp__5735__auto__){
var s__58609__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58609__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58609__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58611 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58610 = (0);
while(true){
if((i__58610 < size__4581__auto__)){
var vec__58612 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58610);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58612,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58612,(1),null);
cljs.core.chunk_append(b__58611,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58610,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615(s__58616){
return (new cljs.core.LazySeq(null,((function (i__58610,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
var s__58616__$1 = s__58616;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58616__$1);
if(temp__5735__auto____$1){
var s__58616__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58616__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58616__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58618 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58617 = (0);
while(true){
if((i__58617 < size__4581__auto____$1)){
var vec__58619 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58617);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58619,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58619,(1),null);
cljs.core.chunk_append(b__58618,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58617,i__58610,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58617,i__58610,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58617,i__58610,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58622(s__58623){
return (new cljs.core.LazySeq(null,((function (i__58617,i__58610,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
var s__58623__$1 = s__58623;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58623__$1);
if(temp__5735__auto____$2){
var s__58623__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58623__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58623__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58625 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58624 = (0);
while(true){
if((i__58624 < size__4581__auto____$2)){
var map__58626 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58624);
var map__58626__$1 = (((((!((map__58626 == null))))?(((((map__58626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58626):map__58626);
var block__$1 = map__58626__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58626__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58625,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58624,i__58617,i__58610,map__58626,map__58626__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58625,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58622_$_iter__58628(s__58629){
return (new cljs.core.LazySeq(null,((function (i__58624,i__58617,i__58610,map__58626,map__58626__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58625,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
var s__58629__$1 = s__58629;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58629__$1);
if(temp__5735__auto____$3){
var s__58629__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58629__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58629__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58631 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58630 = (0);
while(true){
if((i__58630 < size__4581__auto____$3)){
var map__58632 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58630);
var map__58632__$1 = (((((!((map__58632 == null))))?(((((map__58632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58632):map__58632);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58632__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58631,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58630,i__58624,i__58617,i__58610,map__58632,map__58632__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58631,s__58629__$2,temp__5735__auto____$3,map__58626,map__58626__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58625,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58630,i__58624,i__58617,i__58610,map__58632,map__58632__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58631,s__58629__$2,temp__5735__auto____$3,map__58626,map__58626__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58625,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58739 = (i__58630 + (1));
i__58630 = G__58739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58631),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58622_$_iter__58628(cljs.core.chunk_rest(s__58629__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58631),null);
}
} else {
var map__58634 = cljs.core.first(s__58629__$2);
var map__58634__$1 = (((((!((map__58634 == null))))?(((((map__58634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58634):map__58634);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58624,i__58617,i__58610,map__58634,map__58634__$1,title__$1,string,uid__$2,s__58629__$2,temp__5735__auto____$3,map__58626,map__58626__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58625,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58624,i__58617,i__58610,map__58634,map__58634__$1,title__$1,string,uid__$2,s__58629__$2,temp__5735__auto____$3,map__58626,map__58626__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58625,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58622_$_iter__58628(cljs.core.rest(s__58629__$2)));
}
} else {
return null;
}
break;
}
});})(i__58624,i__58617,i__58610,map__58626,map__58626__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58625,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
,null,null));
});})(i__58624,i__58617,i__58610,map__58626,map__58626__$1,block__$1,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58625,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58740 = (i__58624 + (1));
i__58624 = G__58740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58625),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58622(cljs.core.chunk_rest(s__58623__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58625),null);
}
} else {
var map__58636 = cljs.core.first(s__58623__$2);
var map__58636__$1 = (((((!((map__58636 == null))))?(((((map__58636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58636):map__58636);
var block__$1 = map__58636__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58636__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58636__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58617,i__58610,map__58636,map__58636__$1,block__$1,uid__$1,parents,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58622_$_iter__58638(s__58639){
return (new cljs.core.LazySeq(null,((function (i__58617,i__58610,map__58636,map__58636__$1,block__$1,uid__$1,parents,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
var s__58639__$1 = s__58639;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58639__$1);
if(temp__5735__auto____$3){
var s__58639__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58639__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58639__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58641 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58640 = (0);
while(true){
if((i__58640 < size__4581__auto____$2)){
var map__58642 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58640);
var map__58642__$1 = (((((!((map__58642 == null))))?(((((map__58642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58642):map__58642);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58642__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58641,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58640,i__58617,i__58610,map__58642,map__58642__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58641,s__58639__$2,temp__5735__auto____$3,map__58636,map__58636__$1,block__$1,uid__$1,parents,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58640,i__58617,i__58610,map__58642,map__58642__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58641,s__58639__$2,temp__5735__auto____$3,map__58636,map__58636__$1,block__$1,uid__$1,parents,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58741 = (i__58640 + (1));
i__58640 = G__58741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58641),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58622_$_iter__58638(cljs.core.chunk_rest(s__58639__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58641),null);
}
} else {
var map__58644 = cljs.core.first(s__58639__$2);
var map__58644__$1 = (((((!((map__58644 == null))))?(((((map__58644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58644):map__58644);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58644__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58644__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58644__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58617,i__58610,map__58644,map__58644__$1,title__$1,string,uid__$2,s__58639__$2,temp__5735__auto____$3,map__58636,map__58636__$1,block__$1,uid__$1,parents,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58617,i__58610,map__58644,map__58644__$1,title__$1,string,uid__$2,s__58639__$2,temp__5735__auto____$3,map__58636,map__58636__$1,block__$1,uid__$1,parents,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58622_$_iter__58638(cljs.core.rest(s__58639__$2)));
}
} else {
return null;
}
break;
}
});})(i__58617,i__58610,map__58636,map__58636__$1,block__$1,uid__$1,parents,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
,null,null));
});})(i__58617,i__58610,map__58636,map__58636__$1,block__$1,uid__$1,parents,s__58623__$2,temp__5735__auto____$2,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58622(cljs.core.rest(s__58623__$2)));
}
} else {
return null;
}
break;
}
});})(i__58617,i__58610,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
,null,null));
});})(i__58617,i__58610,vec__58619,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58618,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58742 = (i__58617 + (1));
i__58617 = G__58742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58618),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615(cljs.core.chunk_rest(s__58616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58618),null);
}
} else {
var vec__58646 = cljs.core.first(s__58616__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58646,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58646,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58610,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58610,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58610,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58649(s__58650){
return (new cljs.core.LazySeq(null,((function (i__58610,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
var s__58650__$1 = s__58650;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58650__$1);
if(temp__5735__auto____$2){
var s__58650__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58650__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58650__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58652 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58651 = (0);
while(true){
if((i__58651 < size__4581__auto____$1)){
var map__58653 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58651);
var map__58653__$1 = (((((!((map__58653 == null))))?(((((map__58653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58653):map__58653);
var block__$1 = map__58653__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58652,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58651,i__58610,map__58653,map__58653__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58652,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58649_$_iter__58655(s__58656){
return (new cljs.core.LazySeq(null,((function (i__58651,i__58610,map__58653,map__58653__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58652,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
var s__58656__$1 = s__58656;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58656__$1);
if(temp__5735__auto____$3){
var s__58656__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58656__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58656__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58658 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58657 = (0);
while(true){
if((i__58657 < size__4581__auto____$2)){
var map__58659 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58657);
var map__58659__$1 = (((((!((map__58659 == null))))?(((((map__58659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58659):map__58659);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58658,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58657,i__58651,i__58610,map__58659,map__58659__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58658,s__58656__$2,temp__5735__auto____$3,map__58653,map__58653__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58652,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58657,i__58651,i__58610,map__58659,map__58659__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58658,s__58656__$2,temp__5735__auto____$3,map__58653,map__58653__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58652,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58743 = (i__58657 + (1));
i__58657 = G__58743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58658),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58649_$_iter__58655(cljs.core.chunk_rest(s__58656__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58658),null);
}
} else {
var map__58661 = cljs.core.first(s__58656__$2);
var map__58661__$1 = (((((!((map__58661 == null))))?(((((map__58661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58661):map__58661);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58661__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58661__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58661__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58651,i__58610,map__58661,map__58661__$1,title__$1,string,uid__$2,s__58656__$2,temp__5735__auto____$3,map__58653,map__58653__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58652,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58651,i__58610,map__58661,map__58661__$1,title__$1,string,uid__$2,s__58656__$2,temp__5735__auto____$3,map__58653,map__58653__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58652,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58649_$_iter__58655(cljs.core.rest(s__58656__$2)));
}
} else {
return null;
}
break;
}
});})(i__58651,i__58610,map__58653,map__58653__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58652,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
,null,null));
});})(i__58651,i__58610,map__58653,map__58653__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58652,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58744 = (i__58651 + (1));
i__58651 = G__58744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58652),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58649(cljs.core.chunk_rest(s__58650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58652),null);
}
} else {
var map__58663 = cljs.core.first(s__58650__$2);
var map__58663__$1 = (((((!((map__58663 == null))))?(((((map__58663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58663):map__58663);
var block__$1 = map__58663__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58663__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58663__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58610,map__58663,map__58663__$1,block__$1,uid__$1,parents,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58649_$_iter__58665(s__58666){
return (new cljs.core.LazySeq(null,((function (i__58610,map__58663,map__58663__$1,block__$1,uid__$1,parents,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
var s__58666__$1 = s__58666;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58666__$1);
if(temp__5735__auto____$3){
var s__58666__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58666__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58666__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58668 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58667 = (0);
while(true){
if((i__58667 < size__4581__auto____$1)){
var map__58669 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58667);
var map__58669__$1 = (((((!((map__58669 == null))))?(((((map__58669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58669):map__58669);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58668,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58667,i__58610,map__58669,map__58669__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58668,s__58666__$2,temp__5735__auto____$3,map__58663,map__58663__$1,block__$1,uid__$1,parents,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58667,i__58610,map__58669,map__58669__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58668,s__58666__$2,temp__5735__auto____$3,map__58663,map__58663__$1,block__$1,uid__$1,parents,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58745 = (i__58667 + (1));
i__58667 = G__58745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58668),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58649_$_iter__58665(cljs.core.chunk_rest(s__58666__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58668),null);
}
} else {
var map__58671 = cljs.core.first(s__58666__$2);
var map__58671__$1 = (((((!((map__58671 == null))))?(((((map__58671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58671):map__58671);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58671__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58671__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58671__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58610,map__58671,map__58671__$1,title__$1,string,uid__$2,s__58666__$2,temp__5735__auto____$3,map__58663,map__58663__$1,block__$1,uid__$1,parents,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58610,map__58671,map__58671__$1,title__$1,string,uid__$2,s__58666__$2,temp__5735__auto____$3,map__58663,map__58663__$1,block__$1,uid__$1,parents,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58649_$_iter__58665(cljs.core.rest(s__58666__$2)));
}
} else {
return null;
}
break;
}
});})(i__58610,map__58663,map__58663__$1,block__$1,uid__$1,parents,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
,null,null));
});})(i__58610,map__58663,map__58663__$1,block__$1,uid__$1,parents,s__58650__$2,temp__5735__auto____$2,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615_$_iter__58649(cljs.core.rest(s__58650__$2)));
}
} else {
return null;
}
break;
}
});})(i__58610,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
,null,null));
});})(i__58610,vec__58646,group_title,group,s__58616__$2,temp__5735__auto____$1,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58615(cljs.core.rest(s__58616__$2)));
}
} else {
return null;
}
break;
}
});})(i__58610,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
,null,null));
});})(i__58610,vec__58612,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58611,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null));

var G__58746 = (i__58610 + (1));
i__58610 = G__58746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58611),athens$views$node_page$node_page_el_$_iter__58608(cljs.core.chunk_rest(s__58609__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58611),null);
}
} else {
var vec__58673 = cljs.core.first(s__58609__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58673,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58673,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676(s__58677){
return (new cljs.core.LazySeq(null,(function (){
var s__58677__$1 = s__58677;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58677__$1);
if(temp__5735__auto____$1){
var s__58677__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58677__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58677__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58679 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58678 = (0);
while(true){
if((i__58678 < size__4581__auto__)){
var vec__58680 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58678);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58680,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58680,(1),null);
cljs.core.chunk_append(b__58679,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58678,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__58678,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58678,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58683(s__58684){
return (new cljs.core.LazySeq(null,((function (i__58678,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
var s__58684__$1 = s__58684;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58684__$1);
if(temp__5735__auto____$2){
var s__58684__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58684__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58684__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58686 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58685 = (0);
while(true){
if((i__58685 < size__4581__auto____$1)){
var map__58687 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58685);
var map__58687__$1 = (((((!((map__58687 == null))))?(((((map__58687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58687):map__58687);
var block__$1 = map__58687__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58687__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58686,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58685,i__58678,map__58687,map__58687__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58686,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58683_$_iter__58689(s__58690){
return (new cljs.core.LazySeq(null,((function (i__58685,i__58678,map__58687,map__58687__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58686,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
var s__58690__$1 = s__58690;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58690__$1);
if(temp__5735__auto____$3){
var s__58690__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58690__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58690__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58692 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58691 = (0);
while(true){
if((i__58691 < size__4581__auto____$2)){
var map__58693 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58691);
var map__58693__$1 = (((((!((map__58693 == null))))?(((((map__58693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58693):map__58693);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58692,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58691,i__58685,i__58678,map__58693,map__58693__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58692,s__58690__$2,temp__5735__auto____$3,map__58687,map__58687__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58686,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58691,i__58685,i__58678,map__58693,map__58693__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58692,s__58690__$2,temp__5735__auto____$3,map__58687,map__58687__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58686,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58747 = (i__58691 + (1));
i__58691 = G__58747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58692),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58683_$_iter__58689(cljs.core.chunk_rest(s__58690__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58692),null);
}
} else {
var map__58695 = cljs.core.first(s__58690__$2);
var map__58695__$1 = (((((!((map__58695 == null))))?(((((map__58695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58695):map__58695);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58695__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58685,i__58678,map__58695,map__58695__$1,title__$1,string,uid__$2,s__58690__$2,temp__5735__auto____$3,map__58687,map__58687__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58686,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58685,i__58678,map__58695,map__58695__$1,title__$1,string,uid__$2,s__58690__$2,temp__5735__auto____$3,map__58687,map__58687__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58686,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58683_$_iter__58689(cljs.core.rest(s__58690__$2)));
}
} else {
return null;
}
break;
}
});})(i__58685,i__58678,map__58687,map__58687__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58686,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
,null,null));
});})(i__58685,i__58678,map__58687,map__58687__$1,block__$1,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58686,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58748 = (i__58685 + (1));
i__58685 = G__58748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58686),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58683(cljs.core.chunk_rest(s__58684__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58686),null);
}
} else {
var map__58697 = cljs.core.first(s__58684__$2);
var map__58697__$1 = (((((!((map__58697 == null))))?(((((map__58697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58697):map__58697);
var block__$1 = map__58697__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58697__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58697__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58678,map__58697,map__58697__$1,block__$1,uid__$1,parents,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58683_$_iter__58699(s__58700){
return (new cljs.core.LazySeq(null,((function (i__58678,map__58697,map__58697__$1,block__$1,uid__$1,parents,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
var s__58700__$1 = s__58700;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58700__$1);
if(temp__5735__auto____$3){
var s__58700__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58700__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58700__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58702 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58701 = (0);
while(true){
if((i__58701 < size__4581__auto____$1)){
var map__58703 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58701);
var map__58703__$1 = (((((!((map__58703 == null))))?(((((map__58703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58703):map__58703);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58703__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58703__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58703__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58702,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58701,i__58678,map__58703,map__58703__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58702,s__58700__$2,temp__5735__auto____$3,map__58697,map__58697__$1,block__$1,uid__$1,parents,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58701,i__58678,map__58703,map__58703__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58702,s__58700__$2,temp__5735__auto____$3,map__58697,map__58697__$1,block__$1,uid__$1,parents,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58749 = (i__58701 + (1));
i__58701 = G__58749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58702),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58683_$_iter__58699(cljs.core.chunk_rest(s__58700__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58702),null);
}
} else {
var map__58705 = cljs.core.first(s__58700__$2);
var map__58705__$1 = (((((!((map__58705 == null))))?(((((map__58705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58705):map__58705);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58705__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58705__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58705__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58678,map__58705,map__58705__$1,title__$1,string,uid__$2,s__58700__$2,temp__5735__auto____$3,map__58697,map__58697__$1,block__$1,uid__$1,parents,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58678,map__58705,map__58705__$1,title__$1,string,uid__$2,s__58700__$2,temp__5735__auto____$3,map__58697,map__58697__$1,block__$1,uid__$1,parents,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58683_$_iter__58699(cljs.core.rest(s__58700__$2)));
}
} else {
return null;
}
break;
}
});})(i__58678,map__58697,map__58697__$1,block__$1,uid__$1,parents,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
,null,null));
});})(i__58678,map__58697,map__58697__$1,block__$1,uid__$1,parents,s__58684__$2,temp__5735__auto____$2,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58683(cljs.core.rest(s__58684__$2)));
}
} else {
return null;
}
break;
}
});})(i__58678,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
,null,null));
});})(i__58678,vec__58680,group_title,group,c__4580__auto__,size__4581__auto__,b__58679,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null));

var G__58750 = (i__58678 + (1));
i__58678 = G__58750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58679),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676(cljs.core.chunk_rest(s__58677__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58679),null);
}
} else {
var vec__58707 = cljs.core.first(s__58677__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58707,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58707,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58710(s__58711){
return (new cljs.core.LazySeq(null,(function (){
var s__58711__$1 = s__58711;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58711__$1);
if(temp__5735__auto____$2){
var s__58711__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58711__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58711__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58713 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58712 = (0);
while(true){
if((i__58712 < size__4581__auto__)){
var map__58714 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58712);
var map__58714__$1 = (((((!((map__58714 == null))))?(((((map__58714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58714):map__58714);
var block__$1 = map__58714__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58714__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58713,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (i__58712,map__58714,map__58714__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58713,s__58711__$2,temp__5735__auto____$2,vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58710_$_iter__58716(s__58717){
return (new cljs.core.LazySeq(null,((function (i__58712,map__58714,map__58714__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58713,s__58711__$2,temp__5735__auto____$2,vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
var s__58717__$1 = s__58717;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58717__$1);
if(temp__5735__auto____$3){
var s__58717__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58717__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58717__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58719 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58718 = (0);
while(true){
if((i__58718 < size__4581__auto____$1)){
var map__58720 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58718);
var map__58720__$1 = (((((!((map__58720 == null))))?(((((map__58720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58720):map__58720);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58720__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58720__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58720__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58719,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58718,i__58712,map__58720,map__58720__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58719,s__58717__$2,temp__5735__auto____$3,map__58714,map__58714__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58713,s__58711__$2,temp__5735__auto____$2,vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58718,i__58712,map__58720,map__58720__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58719,s__58717__$2,temp__5735__auto____$3,map__58714,map__58714__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58713,s__58711__$2,temp__5735__auto____$2,vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58751 = (i__58718 + (1));
i__58718 = G__58751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58719),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58710_$_iter__58716(cljs.core.chunk_rest(s__58717__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58719),null);
}
} else {
var map__58722 = cljs.core.first(s__58717__$2);
var map__58722__$1 = (((((!((map__58722 == null))))?(((((map__58722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58722):map__58722);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58722__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58722__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58722__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58712,map__58722,map__58722__$1,title__$1,string,uid__$2,s__58717__$2,temp__5735__auto____$3,map__58714,map__58714__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58713,s__58711__$2,temp__5735__auto____$2,vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58712,map__58722,map__58722__$1,title__$1,string,uid__$2,s__58717__$2,temp__5735__auto____$3,map__58714,map__58714__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58713,s__58711__$2,temp__5735__auto____$2,vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58710_$_iter__58716(cljs.core.rest(s__58717__$2)));
}
} else {
return null;
}
break;
}
});})(i__58712,map__58714,map__58714__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58713,s__58711__$2,temp__5735__auto____$2,vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
,null,null));
});})(i__58712,map__58714,map__58714__$1,block__$1,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58713,s__58711__$2,temp__5735__auto____$2,vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null));

var G__58752 = (i__58712 + (1));
i__58712 = G__58752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58713),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58710(cljs.core.chunk_rest(s__58711__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58713),null);
}
} else {
var map__58724 = cljs.core.first(s__58711__$2);
var map__58724__$1 = (((((!((map__58724 == null))))?(((((map__58724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58724):map__58724);
var block__$1 = map__58724__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58724__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58724__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = ((function (map__58724,map__58724__$1,block__$1,uid__$1,parents,s__58711__$2,temp__5735__auto____$2,vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58710_$_iter__58726(s__58727){
return (new cljs.core.LazySeq(null,(function (){
var s__58727__$1 = s__58727;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58727__$1);
if(temp__5735__auto____$3){
var s__58727__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58727__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58727__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58729 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58728 = (0);
while(true){
if((i__58728 < size__4581__auto__)){
var map__58730 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58728);
var map__58730__$1 = (((((!((map__58730 == null))))?(((((map__58730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58730):map__58730);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58730__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58730__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58730__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58729,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58728,map__58730,map__58730__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58729,s__58727__$2,temp__5735__auto____$3,map__58724,map__58724__$1,block__$1,uid__$1,parents,s__58711__$2,temp__5735__auto____$2,vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58728,map__58730,map__58730__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58729,s__58727__$2,temp__5735__auto____$3,map__58724,map__58724__$1,block__$1,uid__$1,parents,s__58711__$2,temp__5735__auto____$2,vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58753 = (i__58728 + (1));
i__58728 = G__58753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58729),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58710_$_iter__58726(cljs.core.chunk_rest(s__58727__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58729),null);
}
} else {
var map__58732 = cljs.core.first(s__58727__$2);
var map__58732__$1 = (((((!((map__58732 == null))))?(((((map__58732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58732):map__58732);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58732__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58732__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58732__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58732,map__58732__$1,title__$1,string,uid__$2,s__58727__$2,temp__5735__auto____$3,map__58724,map__58724__$1,block__$1,uid__$1,parents,s__58711__$2,temp__5735__auto____$2,vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58732,map__58732__$1,title__$1,string,uid__$2,s__58727__$2,temp__5735__auto____$3,map__58724,map__58724__$1,block__$1,uid__$1,parents,s__58711__$2,temp__5735__auto____$2,vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58710_$_iter__58726(cljs.core.rest(s__58727__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58724,map__58724__$1,block__$1,uid__$1,parents,s__58711__$2,temp__5735__auto____$2,vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
;
return iter__4582__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676_$_iter__58710(cljs.core.rest(s__58711__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58707,group_title,group,s__58677__$2,temp__5735__auto____$1,vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
;
return iter__4582__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__58608_$_iter__58676(cljs.core.rest(s__58677__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58673,linked_or_unlinked,refs,s__58609__$2,temp__5735__auto__,map__58591,map__58591__$1,title,is_shortcut_QMARK_,children,uid,map__58592,map__58592__$1,show,x,y,state))
;
return iter__4582__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__58608(cljs.core.rest(s__58609__$2)));
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
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__58734 = athens.db.get_node_document(ident);
var map__58734__$1 = (((((!((map__58734 == null))))?(((((map__58734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58734):map__58734);
var node = map__58734__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58734__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58734__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref((function (){var G__58736 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58736) : re_frame.core.subscribe.call(null,G__58736));
})());
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.db.get_linked_references(athens.util.escape_str(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.db.get_unlinked_references(athens.util.escape_str(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
