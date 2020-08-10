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
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null));
});
athens.views.node_page.db_handler = goog.functions.debounce(athens.views.node_page.handler,(500));
athens.views.node_page.is_timeline_page = (function athens$views$node_page$is_timeline_page(uid){
return cljs.core.boolean$((function (){try{var vec__57212 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uid,"-");
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57212,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57212,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57212,(2),null);
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,m,d], null)));
}catch (e57211){if((e57211 instanceof Object)){
var _ = e57211;
return false;
} else {
throw e57211;

}
}})());
});
athens.views.node_page.handle_new_first_child_block_click = (function athens$views$node_page$handle_new_first_child_block_click(parent_uid){
var new_uid = athens.util.gen_block_uid();
var now = athens.util.now_ts();
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),parent_uid,new cljs.core.Keyword("edit","time","edit/time",1384867476),now,new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","order","block/order",-1429282437),(0),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new_uid,new cljs.core.Keyword("block","open","block/open",-1875254829),true,new cljs.core.Keyword("block","string","block/string",-2066596447),""], null)], null)], null)], null)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),new_uid], null));
});
athens.views.node_page.placeholder_block_el = (function athens$views$node_page$placeholder_block_el(parent_uid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block-container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.blocks.bullet_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.views.node_page.handle_new_first_child_block_click(parent_uid);
})], null),"Click here to add content..."], null)], null)], null);
});
athens.views.node_page.node_page_el = (function athens$views$node_page$node_page_el(_,___$1,___$2,___$3){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),false,new cljs.core.Keyword("menu","x","menu/x",2085660544),null,new cljs.core.Keyword("menu","y","menu/y",-1754654817),null], null));
return (function (block,editing_uid,ref_groups,timeline_page_QMARK_){
var map__57215 = block;
var map__57215__$1 = (((((!((map__57215 == null))))?(((((map__57215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57215):map__57215);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57215__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var is_shortcut_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57215__$1,new cljs.core.Keyword("page","sidebar","page/sidebar",32416927));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57215__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57215__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var map__57216 = cljs.core.deref(state);
var map__57216__$1 = (((((!((map__57216 == null))))?(((((map__57216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57216):map__57216);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57216__$1,new cljs.core.Keyword("menu","show","menu/show",-580966400));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57216__$1,new cljs.core.Keyword("menu","x","menu/x",2085660544));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57216__$1,new cljs.core.Keyword("menu","y","menu/y",-1754654817));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.page_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-page"], null)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),(cljs.core.truth_(timeline_page_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__57219 = e.target.value;
var G__57220 = uid;
return (athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.views.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__57219,G__57220) : athens.views.node_page.db_handler.call(null,G__57219,G__57220));
})], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(show)?"active":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(show)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("menu","show","menu/show",-580966400),false);
} else {
var rect = e.target.getBoundingClientRect();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("menu","show","menu/show",-580966400),true,new cljs.core.Keyword("menu","x","menu/x",2085660544),rect.left,new cljs.core.Keyword("menu","y","menu/y",-1754654817),rect.bottom], null));
}
}),new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.page_menu_toggle_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.ExpandMore], null)], null),(cljs.core.truth_(show)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.dropdown_style),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null)], null)], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_style),(cljs.core.truth_(is_shortcut_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","remove-shortcut","page/remove-shortcut",301722603),uid], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.BookmarkBorder], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Remove Shortcut"], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","add-shortcut","page/add-shortcut",467846378),uid], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Bookmark], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Add Shortcut"], null)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.dropdown.menu_separator_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
athens.router.navigate(new cljs.core.Keyword(null,"pages","pages",-285406513));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","delete","page/delete",-1774686917),uid], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Delete], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Delete Page"], null)], null)], null)], null)], null):null),athens.parse_renderer.parse_and_render(title,uid)], null),((cljs.core.empty_QMARK_(children))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.placeholder_block_el,uid], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function athens$views$node_page$node_page_el_$_iter__57221(s__57222){
return (new cljs.core.LazySeq(null,(function (){
var s__57222__$1 = s__57222;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57222__$1);
if(temp__5735__auto__){
var s__57222__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57222__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57222__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57224 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57223 = (0);
while(true){
if((i__57223 < size__4528__auto__)){
var map__57225 = cljs.core._nth(c__4527__auto__,i__57223);
var map__57225__$1 = (((((!((map__57225 == null))))?(((((map__57225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57225):map__57225);
var child = map__57225__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57225__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57224,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__57357 = (i__57223 + (1));
i__57223 = G__57357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57224),athens$views$node_page$node_page_el_$_iter__57221(cljs.core.chunk_rest(s__57222__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57224),null);
}
} else {
var map__57227 = cljs.core.first(s__57222__$2);
var map__57227__$1 = (((((!((map__57227 == null))))?(((((map__57227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57227):map__57227);
var child = map__57227__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57227__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$views$node_page$node_page_el_$_iter__57221(cljs.core.rest(s__57222__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(children);
})()], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function athens$views$node_page$node_page_el_$_iter__57229(s__57230){
return (new cljs.core.LazySeq(null,(function (){
var s__57230__$1 = s__57230;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57230__$1);
if(temp__5735__auto__){
var s__57230__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57230__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57230__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57232 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57231 = (0);
while(true){
if((i__57231 < size__4528__auto__)){
var vec__57233 = cljs.core._nth(c__4527__auto__,i__57231);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57233,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57233,(1),null);
cljs.core.chunk_append(b__57232,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57231,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236(s__57237){
return (new cljs.core.LazySeq(null,((function (i__57231,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
var s__57237__$1 = s__57237;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57237__$1);
if(temp__5735__auto____$1){
var s__57237__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57237__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57237__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57239 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57238 = (0);
while(true){
if((i__57238 < size__4528__auto____$1)){
var vec__57240 = cljs.core._nth(c__4527__auto____$1,i__57238);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57240,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57240,(1),null);
cljs.core.chunk_append(b__57239,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57238,i__57231,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57238,i__57231,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57238,i__57231,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57243(s__57244){
return (new cljs.core.LazySeq(null,((function (i__57238,i__57231,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
var s__57244__$1 = s__57244;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57244__$1);
if(temp__5735__auto____$2){
var s__57244__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57244__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57244__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57246 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57245 = (0);
while(true){
if((i__57245 < size__4528__auto____$2)){
var map__57247 = cljs.core._nth(c__4527__auto____$2,i__57245);
var map__57247__$1 = (((((!((map__57247 == null))))?(((((map__57247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57247):map__57247);
var block__$1 = map__57247__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57247__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57247__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57246,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57245,i__57238,i__57231,map__57247,map__57247__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57246,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57243_$_iter__57249(s__57250){
return (new cljs.core.LazySeq(null,((function (i__57245,i__57238,i__57231,map__57247,map__57247__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57246,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
var s__57250__$1 = s__57250;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57250__$1);
if(temp__5735__auto____$3){
var s__57250__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57250__$2)){
var c__4527__auto____$3 = cljs.core.chunk_first(s__57250__$2);
var size__4528__auto____$3 = cljs.core.count(c__4527__auto____$3);
var b__57252 = cljs.core.chunk_buffer(size__4528__auto____$3);
if((function (){var i__57251 = (0);
while(true){
if((i__57251 < size__4528__auto____$3)){
var map__57253 = cljs.core._nth(c__4527__auto____$3,i__57251);
var map__57253__$1 = (((((!((map__57253 == null))))?(((((map__57253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57253):map__57253);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57253__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57253__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57253__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57252,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57251,i__57245,i__57238,i__57231,map__57253,map__57253__$1,title__$1,string,uid__$2,c__4527__auto____$3,size__4528__auto____$3,b__57252,s__57250__$2,temp__5735__auto____$3,map__57247,map__57247__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57246,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57251,i__57245,i__57238,i__57231,map__57253,map__57253__$1,title__$1,string,uid__$2,c__4527__auto____$3,size__4528__auto____$3,b__57252,s__57250__$2,temp__5735__auto____$3,map__57247,map__57247__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57246,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57358 = (i__57251 + (1));
i__57251 = G__57358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57252),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57243_$_iter__57249(cljs.core.chunk_rest(s__57250__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57252),null);
}
} else {
var map__57255 = cljs.core.first(s__57250__$2);
var map__57255__$1 = (((((!((map__57255 == null))))?(((((map__57255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57255):map__57255);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57255__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57255__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57255__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57245,i__57238,i__57231,map__57255,map__57255__$1,title__$1,string,uid__$2,s__57250__$2,temp__5735__auto____$3,map__57247,map__57247__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57246,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57245,i__57238,i__57231,map__57255,map__57255__$1,title__$1,string,uid__$2,s__57250__$2,temp__5735__auto____$3,map__57247,map__57247__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57246,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57243_$_iter__57249(cljs.core.rest(s__57250__$2)));
}
} else {
return null;
}
break;
}
});})(i__57245,i__57238,i__57231,map__57247,map__57247__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57246,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
,null,null));
});})(i__57245,i__57238,i__57231,map__57247,map__57247__$1,block__$1,uid__$1,parents,c__4527__auto____$2,size__4528__auto____$2,b__57246,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57359 = (i__57245 + (1));
i__57245 = G__57359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57246),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57243(cljs.core.chunk_rest(s__57244__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57246),null);
}
} else {
var map__57257 = cljs.core.first(s__57244__$2);
var map__57257__$1 = (((((!((map__57257 == null))))?(((((map__57257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57257):map__57257);
var block__$1 = map__57257__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57257__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57257__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57238,i__57231,map__57257,map__57257__$1,block__$1,uid__$1,parents,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57243_$_iter__57259(s__57260){
return (new cljs.core.LazySeq(null,((function (i__57238,i__57231,map__57257,map__57257__$1,block__$1,uid__$1,parents,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
var s__57260__$1 = s__57260;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57260__$1);
if(temp__5735__auto____$3){
var s__57260__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57260__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57260__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57262 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57261 = (0);
while(true){
if((i__57261 < size__4528__auto____$2)){
var map__57263 = cljs.core._nth(c__4527__auto____$2,i__57261);
var map__57263__$1 = (((((!((map__57263 == null))))?(((((map__57263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57263):map__57263);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57263__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57263__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57263__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57262,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57261,i__57238,i__57231,map__57263,map__57263__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57262,s__57260__$2,temp__5735__auto____$3,map__57257,map__57257__$1,block__$1,uid__$1,parents,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57261,i__57238,i__57231,map__57263,map__57263__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57262,s__57260__$2,temp__5735__auto____$3,map__57257,map__57257__$1,block__$1,uid__$1,parents,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57360 = (i__57261 + (1));
i__57261 = G__57360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57262),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57243_$_iter__57259(cljs.core.chunk_rest(s__57260__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57262),null);
}
} else {
var map__57265 = cljs.core.first(s__57260__$2);
var map__57265__$1 = (((((!((map__57265 == null))))?(((((map__57265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57265):map__57265);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57265__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57265__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57265__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57238,i__57231,map__57265,map__57265__$1,title__$1,string,uid__$2,s__57260__$2,temp__5735__auto____$3,map__57257,map__57257__$1,block__$1,uid__$1,parents,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57238,i__57231,map__57265,map__57265__$1,title__$1,string,uid__$2,s__57260__$2,temp__5735__auto____$3,map__57257,map__57257__$1,block__$1,uid__$1,parents,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57243_$_iter__57259(cljs.core.rest(s__57260__$2)));
}
} else {
return null;
}
break;
}
});})(i__57238,i__57231,map__57257,map__57257__$1,block__$1,uid__$1,parents,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
,null,null));
});})(i__57238,i__57231,map__57257,map__57257__$1,block__$1,uid__$1,parents,s__57244__$2,temp__5735__auto____$2,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57243(cljs.core.rest(s__57244__$2)));
}
} else {
return null;
}
break;
}
});})(i__57238,i__57231,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
,null,null));
});})(i__57238,i__57231,vec__57240,group_title,group,c__4527__auto____$1,size__4528__auto____$1,b__57239,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null));

var G__57361 = (i__57238 + (1));
i__57238 = G__57361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57239),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236(cljs.core.chunk_rest(s__57237__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57239),null);
}
} else {
var vec__57267 = cljs.core.first(s__57237__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57267,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57267,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57231,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57231,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57231,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57270(s__57271){
return (new cljs.core.LazySeq(null,((function (i__57231,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
var s__57271__$1 = s__57271;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57271__$1);
if(temp__5735__auto____$2){
var s__57271__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57271__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57271__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57273 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57272 = (0);
while(true){
if((i__57272 < size__4528__auto____$1)){
var map__57274 = cljs.core._nth(c__4527__auto____$1,i__57272);
var map__57274__$1 = (((((!((map__57274 == null))))?(((((map__57274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57274):map__57274);
var block__$1 = map__57274__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57274__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57274__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57273,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57272,i__57231,map__57274,map__57274__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57273,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57270_$_iter__57276(s__57277){
return (new cljs.core.LazySeq(null,((function (i__57272,i__57231,map__57274,map__57274__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57273,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
var s__57277__$1 = s__57277;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57277__$1);
if(temp__5735__auto____$3){
var s__57277__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57277__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57277__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57279 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57278 = (0);
while(true){
if((i__57278 < size__4528__auto____$2)){
var map__57280 = cljs.core._nth(c__4527__auto____$2,i__57278);
var map__57280__$1 = (((((!((map__57280 == null))))?(((((map__57280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57280):map__57280);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57280__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57280__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57280__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57279,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57278,i__57272,i__57231,map__57280,map__57280__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57279,s__57277__$2,temp__5735__auto____$3,map__57274,map__57274__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57273,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57278,i__57272,i__57231,map__57280,map__57280__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57279,s__57277__$2,temp__5735__auto____$3,map__57274,map__57274__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57273,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57362 = (i__57278 + (1));
i__57278 = G__57362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57279),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57270_$_iter__57276(cljs.core.chunk_rest(s__57277__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57279),null);
}
} else {
var map__57282 = cljs.core.first(s__57277__$2);
var map__57282__$1 = (((((!((map__57282 == null))))?(((((map__57282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57282):map__57282);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57282__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57282__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57282__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57272,i__57231,map__57282,map__57282__$1,title__$1,string,uid__$2,s__57277__$2,temp__5735__auto____$3,map__57274,map__57274__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57273,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57272,i__57231,map__57282,map__57282__$1,title__$1,string,uid__$2,s__57277__$2,temp__5735__auto____$3,map__57274,map__57274__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57273,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57270_$_iter__57276(cljs.core.rest(s__57277__$2)));
}
} else {
return null;
}
break;
}
});})(i__57272,i__57231,map__57274,map__57274__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57273,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
,null,null));
});})(i__57272,i__57231,map__57274,map__57274__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57273,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57363 = (i__57272 + (1));
i__57272 = G__57363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57273),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57270(cljs.core.chunk_rest(s__57271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57273),null);
}
} else {
var map__57284 = cljs.core.first(s__57271__$2);
var map__57284__$1 = (((((!((map__57284 == null))))?(((((map__57284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57284):map__57284);
var block__$1 = map__57284__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57284__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57284__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57231,map__57284,map__57284__$1,block__$1,uid__$1,parents,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57270_$_iter__57286(s__57287){
return (new cljs.core.LazySeq(null,((function (i__57231,map__57284,map__57284__$1,block__$1,uid__$1,parents,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
var s__57287__$1 = s__57287;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57287__$1);
if(temp__5735__auto____$3){
var s__57287__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57287__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57287__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57289 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57288 = (0);
while(true){
if((i__57288 < size__4528__auto____$1)){
var map__57290 = cljs.core._nth(c__4527__auto____$1,i__57288);
var map__57290__$1 = (((((!((map__57290 == null))))?(((((map__57290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57290):map__57290);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57290__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57290__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57290__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57289,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57288,i__57231,map__57290,map__57290__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57289,s__57287__$2,temp__5735__auto____$3,map__57284,map__57284__$1,block__$1,uid__$1,parents,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57288,i__57231,map__57290,map__57290__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57289,s__57287__$2,temp__5735__auto____$3,map__57284,map__57284__$1,block__$1,uid__$1,parents,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57364 = (i__57288 + (1));
i__57288 = G__57364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57289),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57270_$_iter__57286(cljs.core.chunk_rest(s__57287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57289),null);
}
} else {
var map__57292 = cljs.core.first(s__57287__$2);
var map__57292__$1 = (((((!((map__57292 == null))))?(((((map__57292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57292):map__57292);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57292__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57292__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57292__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57231,map__57292,map__57292__$1,title__$1,string,uid__$2,s__57287__$2,temp__5735__auto____$3,map__57284,map__57284__$1,block__$1,uid__$1,parents,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57231,map__57292,map__57292__$1,title__$1,string,uid__$2,s__57287__$2,temp__5735__auto____$3,map__57284,map__57284__$1,block__$1,uid__$1,parents,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57270_$_iter__57286(cljs.core.rest(s__57287__$2)));
}
} else {
return null;
}
break;
}
});})(i__57231,map__57284,map__57284__$1,block__$1,uid__$1,parents,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
,null,null));
});})(i__57231,map__57284,map__57284__$1,block__$1,uid__$1,parents,s__57271__$2,temp__5735__auto____$2,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236_$_iter__57270(cljs.core.rest(s__57271__$2)));
}
} else {
return null;
}
break;
}
});})(i__57231,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
,null,null));
});})(i__57231,vec__57267,group_title,group,s__57237__$2,temp__5735__auto____$1,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57236(cljs.core.rest(s__57237__$2)));
}
} else {
return null;
}
break;
}
});})(i__57231,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
,null,null));
});})(i__57231,vec__57233,linked_or_unlinked,refs,c__4527__auto__,size__4528__auto__,b__57232,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
;
return iter__4529__auto__(refs);
})())], null)], null):null));

var G__57365 = (i__57231 + (1));
i__57231 = G__57365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57232),athens$views$node_page$node_page_el_$_iter__57229(cljs.core.chunk_rest(s__57230__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57232),null);
}
} else {
var vec__57294 = cljs.core.first(s__57230__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57294,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57294,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297(s__57298){
return (new cljs.core.LazySeq(null,(function (){
var s__57298__$1 = s__57298;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57298__$1);
if(temp__5735__auto____$1){
var s__57298__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57298__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57298__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57300 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57299 = (0);
while(true){
if((i__57299 < size__4528__auto__)){
var vec__57301 = cljs.core._nth(c__4527__auto__,i__57299);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57301,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57301,(1),null);
cljs.core.chunk_append(b__57300,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57299,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(i__57299,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57299,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57304(s__57305){
return (new cljs.core.LazySeq(null,((function (i__57299,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
var s__57305__$1 = s__57305;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57305__$1);
if(temp__5735__auto____$2){
var s__57305__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57305__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57305__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57307 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57306 = (0);
while(true){
if((i__57306 < size__4528__auto____$1)){
var map__57308 = cljs.core._nth(c__4527__auto____$1,i__57306);
var map__57308__$1 = (((((!((map__57308 == null))))?(((((map__57308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57308):map__57308);
var block__$1 = map__57308__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57308__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57308__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57307,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57306,i__57299,map__57308,map__57308__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57307,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57304_$_iter__57310(s__57311){
return (new cljs.core.LazySeq(null,((function (i__57306,i__57299,map__57308,map__57308__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57307,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
var s__57311__$1 = s__57311;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57311__$1);
if(temp__5735__auto____$3){
var s__57311__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57311__$2)){
var c__4527__auto____$2 = cljs.core.chunk_first(s__57311__$2);
var size__4528__auto____$2 = cljs.core.count(c__4527__auto____$2);
var b__57313 = cljs.core.chunk_buffer(size__4528__auto____$2);
if((function (){var i__57312 = (0);
while(true){
if((i__57312 < size__4528__auto____$2)){
var map__57314 = cljs.core._nth(c__4527__auto____$2,i__57312);
var map__57314__$1 = (((((!((map__57314 == null))))?(((((map__57314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57314):map__57314);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57314__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57314__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57314__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57313,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57312,i__57306,i__57299,map__57314,map__57314__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57313,s__57311__$2,temp__5735__auto____$3,map__57308,map__57308__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57307,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57312,i__57306,i__57299,map__57314,map__57314__$1,title__$1,string,uid__$2,c__4527__auto____$2,size__4528__auto____$2,b__57313,s__57311__$2,temp__5735__auto____$3,map__57308,map__57308__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57307,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57366 = (i__57312 + (1));
i__57312 = G__57366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57313),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57304_$_iter__57310(cljs.core.chunk_rest(s__57311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57313),null);
}
} else {
var map__57316 = cljs.core.first(s__57311__$2);
var map__57316__$1 = (((((!((map__57316 == null))))?(((((map__57316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57316):map__57316);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57316__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57316__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57316__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57306,i__57299,map__57316,map__57316__$1,title__$1,string,uid__$2,s__57311__$2,temp__5735__auto____$3,map__57308,map__57308__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57307,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57306,i__57299,map__57316,map__57316__$1,title__$1,string,uid__$2,s__57311__$2,temp__5735__auto____$3,map__57308,map__57308__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57307,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57304_$_iter__57310(cljs.core.rest(s__57311__$2)));
}
} else {
return null;
}
break;
}
});})(i__57306,i__57299,map__57308,map__57308__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57307,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
,null,null));
});})(i__57306,i__57299,map__57308,map__57308__$1,block__$1,uid__$1,parents,c__4527__auto____$1,size__4528__auto____$1,b__57307,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57367 = (i__57306 + (1));
i__57306 = G__57367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57307),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57304(cljs.core.chunk_rest(s__57305__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57307),null);
}
} else {
var map__57318 = cljs.core.first(s__57305__$2);
var map__57318__$1 = (((((!((map__57318 == null))))?(((((map__57318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57318):map__57318);
var block__$1 = map__57318__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57318__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57318__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57299,map__57318,map__57318__$1,block__$1,uid__$1,parents,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57304_$_iter__57320(s__57321){
return (new cljs.core.LazySeq(null,((function (i__57299,map__57318,map__57318__$1,block__$1,uid__$1,parents,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
var s__57321__$1 = s__57321;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57321__$1);
if(temp__5735__auto____$3){
var s__57321__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57321__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57321__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57323 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57322 = (0);
while(true){
if((i__57322 < size__4528__auto____$1)){
var map__57324 = cljs.core._nth(c__4527__auto____$1,i__57322);
var map__57324__$1 = (((((!((map__57324 == null))))?(((((map__57324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57324):map__57324);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57324__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57324__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57324__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57323,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57322,i__57299,map__57324,map__57324__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57323,s__57321__$2,temp__5735__auto____$3,map__57318,map__57318__$1,block__$1,uid__$1,parents,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57322,i__57299,map__57324,map__57324__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57323,s__57321__$2,temp__5735__auto____$3,map__57318,map__57318__$1,block__$1,uid__$1,parents,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57368 = (i__57322 + (1));
i__57322 = G__57368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57323),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57304_$_iter__57320(cljs.core.chunk_rest(s__57321__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57323),null);
}
} else {
var map__57326 = cljs.core.first(s__57321__$2);
var map__57326__$1 = (((((!((map__57326 == null))))?(((((map__57326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57326):map__57326);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57326__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57326__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57326__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57299,map__57326,map__57326__$1,title__$1,string,uid__$2,s__57321__$2,temp__5735__auto____$3,map__57318,map__57318__$1,block__$1,uid__$1,parents,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57299,map__57326,map__57326__$1,title__$1,string,uid__$2,s__57321__$2,temp__5735__auto____$3,map__57318,map__57318__$1,block__$1,uid__$1,parents,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57304_$_iter__57320(cljs.core.rest(s__57321__$2)));
}
} else {
return null;
}
break;
}
});})(i__57299,map__57318,map__57318__$1,block__$1,uid__$1,parents,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
,null,null));
});})(i__57299,map__57318,map__57318__$1,block__$1,uid__$1,parents,s__57305__$2,temp__5735__auto____$2,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57304(cljs.core.rest(s__57305__$2)));
}
} else {
return null;
}
break;
}
});})(i__57299,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
,null,null));
});})(i__57299,vec__57301,group_title,group,c__4527__auto__,size__4528__auto__,b__57300,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null));

var G__57369 = (i__57299 + (1));
i__57299 = G__57369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57300),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297(cljs.core.chunk_rest(s__57298__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57300),null);
}
} else {
var vec__57328 = cljs.core.first(s__57298__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57328,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57328,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["group-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_title)].join('')], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.parse_renderer.pull_node_from_string(group_title))));
});})(vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),group_title], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57331(s__57332){
return (new cljs.core.LazySeq(null,(function (){
var s__57332__$1 = s__57332;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__57332__$1);
if(temp__5735__auto____$2){
var s__57332__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__57332__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57332__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57334 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57333 = (0);
while(true){
if((i__57333 < size__4528__auto__)){
var map__57335 = cljs.core._nth(c__4527__auto__,i__57333);
var map__57335__$1 = (((((!((map__57335 == null))))?(((((map__57335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57335):map__57335);
var block__$1 = map__57335__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57335__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57335__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__57334,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__57333,map__57335,map__57335__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57334,s__57332__$2,temp__5735__auto____$2,vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57331_$_iter__57337(s__57338){
return (new cljs.core.LazySeq(null,((function (i__57333,map__57335,map__57335__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57334,s__57332__$2,temp__5735__auto____$2,vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
var s__57338__$1 = s__57338;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57338__$1);
if(temp__5735__auto____$3){
var s__57338__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57338__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__57338__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__57340 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__57339 = (0);
while(true){
if((i__57339 < size__4528__auto____$1)){
var map__57341 = cljs.core._nth(c__4527__auto____$1,i__57339);
var map__57341__$1 = (((((!((map__57341 == null))))?(((((map__57341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57341):map__57341);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57341__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57341__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57341__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57340,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57339,i__57333,map__57341,map__57341__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57340,s__57338__$2,temp__5735__auto____$3,map__57335,map__57335__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57334,s__57332__$2,temp__5735__auto____$2,vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57339,i__57333,map__57341,map__57341__$1,title__$1,string,uid__$2,c__4527__auto____$1,size__4528__auto____$1,b__57340,s__57338__$2,temp__5735__auto____$3,map__57335,map__57335__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57334,s__57332__$2,temp__5735__auto____$2,vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57370 = (i__57339 + (1));
i__57339 = G__57370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57340),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57331_$_iter__57337(cljs.core.chunk_rest(s__57338__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57340),null);
}
} else {
var map__57343 = cljs.core.first(s__57338__$2);
var map__57343__$1 = (((((!((map__57343 == null))))?(((((map__57343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57343):map__57343);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57343__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57343__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57343__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57333,map__57343,map__57343__$1,title__$1,string,uid__$2,s__57338__$2,temp__5735__auto____$3,map__57335,map__57335__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57334,s__57332__$2,temp__5735__auto____$2,vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57333,map__57343,map__57343__$1,title__$1,string,uid__$2,s__57338__$2,temp__5735__auto____$3,map__57335,map__57335__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57334,s__57332__$2,temp__5735__auto____$2,vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57331_$_iter__57337(cljs.core.rest(s__57338__$2)));
}
} else {
return null;
}
break;
}
});})(i__57333,map__57335,map__57335__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57334,s__57332__$2,temp__5735__auto____$2,vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
,null,null));
});})(i__57333,map__57335,map__57335__$1,block__$1,uid__$1,parents,c__4527__auto__,size__4528__auto__,b__57334,s__57332__$2,temp__5735__auto____$2,vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null));

var G__57371 = (i__57333 + (1));
i__57333 = G__57371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57334),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57331(cljs.core.chunk_rest(s__57332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57334),null);
}
} else {
var map__57345 = cljs.core.first(s__57332__$2);
var map__57345__$1 = (((((!((map__57345 == null))))?(((((map__57345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57345):map__57345);
var block__$1 = map__57345__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57345__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57345__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["ref-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1)].join('')], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.blocks.block_el,block__$1], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.views.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (map__57345,map__57345__$1,block__$1,uid__$1,parents,s__57332__$2,temp__5735__auto____$2,vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57331_$_iter__57347(s__57348){
return (new cljs.core.LazySeq(null,(function (){
var s__57348__$1 = s__57348;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__57348__$1);
if(temp__5735__auto____$3){
var s__57348__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__57348__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__57348__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__57350 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__57349 = (0);
while(true){
if((i__57349 < size__4528__auto__)){
var map__57351 = cljs.core._nth(c__4527__auto__,i__57349);
var map__57351__$1 = (((((!((map__57351 == null))))?(((((map__57351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57351):map__57351);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57351__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57351__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57351__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__57350,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57349,map__57351,map__57351__$1,title__$1,string,uid__$2,c__4527__auto__,size__4528__auto__,b__57350,s__57348__$2,temp__5735__auto____$3,map__57345,map__57345__$1,block__$1,uid__$1,parents,s__57332__$2,temp__5735__auto____$2,vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__57349,map__57351,map__57351__$1,title__$1,string,uid__$2,c__4527__auto__,size__4528__auto__,b__57350,s__57348__$2,temp__5735__auto____$3,map__57345,map__57345__$1,block__$1,uid__$1,parents,s__57332__$2,temp__5735__auto____$2,vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null));

var G__57372 = (i__57349 + (1));
i__57349 = G__57372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57350),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57331_$_iter__57347(cljs.core.chunk_rest(s__57348__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57350),null);
}
} else {
var map__57353 = cljs.core.first(s__57348__$2);
var map__57353__$1 = (((((!((map__57353 == null))))?(((((map__57353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57353):map__57353);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57353__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57353__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57353__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["breadcrumb-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$2)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__57353,map__57353__$1,title__$1,string,uid__$2,s__57348__$2,temp__5735__auto____$3,map__57345,map__57345__$1,block__$1,uid__$1,parents,s__57332__$2,temp__5735__auto____$2,vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__57353,map__57353__$1,title__$1,string,uid__$2,s__57348__$2,temp__5735__auto____$3,map__57345,map__57345__$1,block__$1,uid__$1,parents,s__57332__$2,temp__5735__auto____$2,vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
], null),(function (){var or__4126__auto__ = title__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return string;
}
})()], null),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57331_$_iter__57347(cljs.core.rest(s__57348__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__57345,map__57345__$1,block__$1,uid__$1,parents,s__57332__$2,temp__5735__auto____$2,vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
;
return iter__4529__auto__(parents);
})())], null):null)], null),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297_$_iter__57331(cljs.core.rest(s__57332__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__57328,group_title,group,s__57298__$2,temp__5735__auto____$1,vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
;
return iter__4529__auto__(group);
})())], null),athens$views$node_page$node_page_el_$_iter__57229_$_iter__57297(cljs.core.rest(s__57298__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__57294,linked_or_unlinked,refs,s__57230__$2,temp__5735__auto__,map__57215,map__57215__$1,title,is_shortcut_QMARK_,children,uid,map__57216,map__57216__$1,show,x,y,state))
;
return iter__4529__auto__(refs);
})())], null)], null):null),athens$views$node_page$node_page_el_$_iter__57229(cljs.core.rest(s__57230__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(ref_groups);
})())], null);
});
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.views.node_page.node_page_component = (function athens$views$node_page$node_page_component(ident){
var map__57355 = athens.db.get_node_document(ident);
var map__57355__$1 = (((((!((map__57355 == null))))?(((((map__57355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57355):map__57355);
var node = map__57355__$1;
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57355__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57355__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var editing_uid = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040)], null)));
var timeline_page_QMARK_ = athens.views.node_page.is_timeline_page(uid);
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.db.get_linked_references(athens.util.escape_str(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.db.get_unlinked_references(athens.util.escape_str(title))], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.node_page.node_page_el,node,editing_uid,ref_groups,timeline_page_QMARK_], null);
}
});

//# sourceMappingURL=athens.views.node_page.js.map
