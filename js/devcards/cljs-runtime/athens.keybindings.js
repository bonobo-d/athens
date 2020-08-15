goog.provide('athens.keybindings');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.util');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.dom.selection');
goog.require('goog.events.KeyCodes');
goog.require('re_frame.core');
athens.keybindings.modifier_keys = (function athens$keybindings$modifier_keys(e){
var shift = e.shiftKey;
var meta = e.metaKey;
var ctrl = e.ctrlKey;
var alt = e.altKey;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"meta","meta",1499536964),meta,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),ctrl,new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null);
});
athens.keybindings.get_end_points = (function athens$keybindings$get_end_points(e){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.dom.selection.getEndPoints(e.target));
});
athens.keybindings.destruct_event = (function athens$keybindings$destruct_event(e){
var key = e.key;
var key_code = e.keyCode;
var target = e.target;
var value = target.value;
var event = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"key-code","key-code",-1732114304),key_code,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"value","value",305978217),value], null);
var modifiers = athens.keybindings.modifier_keys(e);
var vec__54869 = athens.keybindings.get_end_points(e);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54869,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54869,(1),null);
var selection = goog.dom.selection.getText(target);
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),start);
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,end);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([modifiers,event,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),head,new cljs.core.Keyword(null,"tail","tail",-1146023564),tail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection","selection",975998651),selection], null)], 0));
});
athens.keybindings.update_query = (function athens$keybindings$update_query(var_args){
var G__54873 = arguments.length;
switch (G__54873) {
case 3:
return athens.keybindings.update_query.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return athens.keybindings.update_query.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.keybindings.update_query.cljs$core$IFn$_invoke$arity$3 = (function (state,head,type){
return athens.keybindings.update_query.cljs$core$IFn$_invoke$arity$4(state,head,"",type);
}));

(athens.keybindings.update_query.cljs$core$IFn$_invoke$arity$4 = (function (state,head,key,type){
var query_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210)))?athens.db.search_in_block_content:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397)))?athens.db.search_in_node_title:null));
var link_start = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210)))?cljs.core.count(cljs.core.re_find(/.*\(\(/,head)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397)))?cljs.core.count(cljs.core.re_find(/.*\[\[/,head)):null));
var new_query = [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(head,link_start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
var results = (query_fn.cljs$core$IFn$_invoke$arity$1 ? query_fn.cljs$core$IFn$_invoke$arity$1(new_query) : query_fn.call(null,new_query));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","query","search/query",1830322034),new_query);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","results","search/results",107824727),results);
}));

(athens.keybindings.update_query.cljs$lang$maxFixedArity = 4);

athens.keybindings.ARROW_KEYS = cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.events.KeyCodes.UP,new cljs.core.Keyword(null,"up","up",-269712113),goog.events.KeyCodes.LEFT,new cljs.core.Keyword(null,"left","left",-399115937),goog.events.KeyCodes.DOWN,new cljs.core.Keyword(null,"down","down",1565245570),goog.events.KeyCodes.RIGHT,new cljs.core.Keyword(null,"right","right",-452581833)]);
athens.keybindings.arrow_key_direction = (function athens$keybindings$arrow_key_direction(e){
var key_code = e.keyCode;
return (athens.keybindings.ARROW_KEYS.cljs$core$IFn$_invoke$arity$1 ? athens.keybindings.ARROW_KEYS.cljs$core$IFn$_invoke$arity$1(key_code) : athens.keybindings.ARROW_KEYS.call(null,key_code));
});
athens.keybindings.block_start_QMARK_ = (function athens$keybindings$block_start_QMARK_(e){
var vec__54874 = athens.keybindings.get_end_points(e);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54874,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54874,(1),null);
return (start === (0));
});
athens.keybindings.block_end_QMARK_ = (function athens$keybindings$block_end_QMARK_(e){
var map__54877 = athens.keybindings.destruct_event(e);
var map__54877__$1 = (((((!((map__54877 == null))))?(((((map__54877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54877):map__54877);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54877__$1,new cljs.core.Keyword(null,"value","value",305978217));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54877__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,cljs.core.count(value));
});
athens.keybindings.dec_cycle = (function athens$keybindings$dec_cycle(min,max,v){
if((v <= min)){
return max;
} else {
return (v - (1));
}
});
athens.keybindings.inc_cycle = (function athens$keybindings$inc_cycle(min,max,v){
if((v >= max)){
return min;
} else {
return (v + (1));
}
});
athens.keybindings.max_idx = (function athens$keybindings$max_idx(coll){
return (cljs.core.count(coll) - (1));
});
/**
 * May want to flatten this into multiple handlers.
 */
athens.keybindings.handle_arrow_key = (function athens$keybindings$handle_arrow_key(e,uid,state){
var map__54879 = athens.keybindings.destruct_event(e);
var map__54879__$1 = (((((!((map__54879 == null))))?(((((map__54879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54879):map__54879);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54879__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54879__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54879__$1,new cljs.core.Keyword(null,"target","target",253001721));
var top_row_QMARK_ = true;
var bottom_row_QMARK_ = true;
var map__54880 = cljs.core.deref(state);
var map__54880__$1 = (((((!((map__54880 == null))))?(((((map__54880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54880):map__54880);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54880__$1,new cljs.core.Keyword("search","results","search/results",107824727));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54880__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
var selected_items = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null)));
var direction = athens.keybindings.arrow_key_direction(e);
if(cljs.core.truth_((function (){var and__4115__auto__ = shift;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core.seq(selected_items);
if(and__4115__auto____$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","up","selected/up",921350754)], null));
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
var and__4115__auto__ = shift;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core.seq(selected_items);
if(and__4115__auto____$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),direction)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","down","selected/down",-1806586329)], null));
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = shift;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction)) && (top_row_QMARK_));
} else {
return and__4115__auto__;
}
})())){
target.blur();

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","add-item","selected/add-item",-508591222),uid], null));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = shift;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),direction)) && (bottom_row_QMARK_));
} else {
return and__4115__auto__;
}
})())){
target.blur();

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","add-item","selected/add-item",-508591222),uid], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"slash","slash",-1449773022))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction)){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("search","index","search/index",1990835117),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(athens.keybindings.dec_cycle,(0),athens.keybindings.max_idx(athens.keybindings.slash_options)));

var cur_index = new cljs.core.Keyword("search","index","search/index",1990835117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var container_el = goog.dom.getElement("slash-menu-container");
var next_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(container_el.children),cur_index);
return athens.util.scroll_into_view(next_el,container_el.parentNode,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),direction)){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("search","index","search/index",1990835117),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(athens.keybindings.inc_cycle,(0),athens.keybindings.max_idx(athens.keybindings.slash_options)));

var cur_index = new cljs.core.Keyword("search","index","search/index",1990835117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var container_el = goog.dom.getElement("slash-menu-container");
var next_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(container_el.children),cur_index);
return athens.util.scroll_into_view(next_el,container_el,false);
} else {
return null;
}
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.UP)){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("search","index","search/index",1990835117),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(athens.keybindings.dec_cycle,(0),athens.keybindings.max_idx(results)));

return athens.util.scroll_if_needed(goog.dom.getElement(["result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("search","index","search/index",1990835117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))].join('')),goog.dom.getElement("dropdown-menu"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DOWN)){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("search","index","search/index",1990835117),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(athens.keybindings.inc_cycle,(0),athens.keybindings.max_idx(results)));

return athens.util.scroll_if_needed(goog.dom.getElement(["result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("search","index","search/index",1990835117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))].join('')),goog.dom.getElement("dropdown-menu"));
} else {
return null;
}
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.UP)) && (top_row_QMARK_))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),uid], null));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.LEFT)) && (athens.keybindings.block_start_QMARK_(e)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),uid], null));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DOWN)) && (bottom_row_QMARK_))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1565245570),uid], null));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.RIGHT)) && (athens.keybindings.block_end_QMARK_(e)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),uid], null));
} else {
return null;
}
}
}
}

}
}
}
}
}
});
athens.keybindings.handle_tab = (function athens$keybindings$handle_tab(e,uid){
e.preventDefault();

var map__54883 = athens.keybindings.destruct_event(e);
var map__54883__$1 = (((((!((map__54883 == null))))?(((((map__54883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54883):map__54883);
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54883__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var block_zero_QMARK_ = (new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null))) === (0));
if(cljs.core.truth_(shift)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unindent","unindent",-1291301718),uid], null));
} else {
if(block_zero_QMARK_){
return null;
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent","indent",-148200125),uid], null));
}

}
});
athens.keybindings.handle_escape = (function athens$keybindings$handle_escape(e,state){
e.preventDefault();

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(state)], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0));

if(cljs.core.truth_(new cljs.core.Keyword("search","type","search/type",-1745335484).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null);
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null));

}
});
athens.keybindings.slash_options = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$material_ui$icons$index.Done,"Add Todo","{{[[TODO]]}} ","cmd-enter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$material_ui$icons$index.Timer,"Current Time",(function (){
return (new Date()).toLocaleTimeString(cljs.core.PersistentVector.EMPTY,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, ["timeStyle","short"], null)));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$material_ui$icons$index.Today,"Today",(function (){
return ["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(athens.util.get_day.cljs$core$IFn$_invoke$arity$1((0)))),"]] "].join('');
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$material_ui$icons$index.Today,"Tomorrow",(function (){
return ["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(athens.util.get_day.cljs$core$IFn$_invoke$arity$1((-1)))),"]]"].join('');
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$material_ui$icons$index.Today,"Yesterday",(function (){
return ["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(athens.util.get_day.cljs$core$IFn$_invoke$arity$1((1)))),"]]"].join('');
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$material_ui$icons$index.YouTube,"YouTube Embed","{{[[youtube]]: }}"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$material_ui$icons$index.DesktopWindows,"iframe Embed","{{iframe: }}"], null)], null);
athens.keybindings.select_slash_cmd = (function athens$keybindings$select_slash_cmd(index,state){
var map__54885 = cljs.core.deref(state);
var map__54885__$1 = (((((!((map__54885 == null))))?(((((map__54885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54885):map__54885);
var atom_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54885__$1,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204));
var vec__54886 = (athens.keybindings.slash_options.cljs$core$IFn$_invoke$arity$1 ? athens.keybindings.slash_options.cljs$core$IFn$_invoke$arity$1(index) : athens.keybindings.slash_options.call(null,index));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54886,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54886,(1),null);
var expansion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54886,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54886,(3),null);
var expand = ((cljs.core.fn_QMARK_(expansion))?(expansion.cljs$core$IFn$_invoke$arity$0 ? expansion.cljs$core$IFn$_invoke$arity$0() : expansion.call(null)):expansion);
var replace_str = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(atom_string,(0),(cljs.core.count(atom_string) - (1)));
var new_str = [replace_str,cljs.core.str.cljs$core$IFn$_invoke$arity$1(expand)].join('');
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("search","index","search/index",1990835117),(0),new cljs.core.Keyword("search","type","search/type",-1745335484),null,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str], null));
});
athens.keybindings.auto_complete = (function athens$keybindings$auto_complete(state,e,completed_str){
var map__54890 = athens.keybindings.destruct_event(e);
var map__54890__$1 = (((((!((map__54890 == null))))?(((((map__54890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54890):map__54890);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54890__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54890__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54890__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54890__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__54891 = cljs.core.deref(state);
var map__54891__$1 = (((((!((map__54891 == null))))?(((((map__54891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54891):map__54891);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54891__$1,new cljs.core.Keyword("search","query","search/query",1830322034));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54891__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
var head_pattern = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210)))?cljs.core.re_pattern(["(.*)\\(\\(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('')):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397)))?cljs.core.re_pattern(["(.*)\\[\\[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('')):null));
var tail_pattern = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210)))?/(\)\))?(.*)/:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397)))?/(\]\])?(.*)/:null));
var new_head = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210)))?"$1((":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397)))?"$1[[":null));
var closing_str = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210)))?"))":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397)))?"]]":null));
var new_str = clojure.string.replace_first(head,head_pattern,[new_head,cljs.core.str.cljs$core$IFn$_invoke$arity$1(completed_str),closing_str].join(''));
var vec__54892 = cljs.core.re_matches(tail_pattern,tail);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54892,(0),null);
var closing_delimiter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54892,(1),null);
var after_closing_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54892,(2),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),[new_str,cljs.core.str.cljs$core$IFn$_invoke$arity$1(after_closing_str)].join(''),new cljs.core.Keyword("search","query","search/query",1830322034),null,new cljs.core.Keyword("search","type","search/type",-1745335484),null], null));

if(cljs.core.truth_(closing_delimiter)){
return (target.selectionStart = ((2) + start));
} else {
return null;
}
});
athens.keybindings.handle_enter = (function athens$keybindings$handle_enter(e,uid,state){
var map__54897 = athens.keybindings.destruct_event(e);
var map__54897__$1 = (((((!((map__54897 == null))))?(((((map__54897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54897):map__54897);
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54897__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54897__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54897__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54897__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54897__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54897__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__54898 = cljs.core.deref(state);
var map__54898__$1 = (((((!((map__54898 == null))))?(((((map__54898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54898):map__54898);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54898__$1,new cljs.core.Keyword("search","index","search/index",1990835117));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54898__$1,new cljs.core.Keyword("search","results","search/results",107824727));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54898__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"slash","slash",-1449773022))){
return athens.keybindings.select_slash_cmd(index,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397))){
var map__54901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,index);
var map__54901__$1 = (((((!((map__54901 == null))))?(((((map__54901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54901):map__54901);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54901__$1,new cljs.core.Keyword("node","title","node/title",628940777));
return athens.keybindings.auto_complete(state,e,title);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210))){
var map__54903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,index);
var map__54903__$1 = (((((!((map__54903 == null))))?(((((map__54903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54903):map__54903);
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54903__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return athens.keybindings.auto_complete(state,e,uid__$1);
} else {
if(cljs.core.truth_(shift)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join(''));
} else {
if(cljs.core.truth_(meta)){
var first = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(13));
var new_tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,(13));
var new_str = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first,"{{[[TODO]]}} "))?["{{[[DONE]]}} ",new_tail].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first,"{{[[DONE]]}} "))?new_tail:["{{[[TODO]]}} ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')
));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624),uid,value,start], null));

}
}
}
}
}
});
athens.keybindings.PAIR_CHARS = new cljs.core.PersistentArrayMap(null, 4, ["(",")","[","]","{","}","\"","\""], null);
/**
 * https://github.com/tpope/vim-surround
 */
athens.keybindings.surround = (function athens$keybindings$surround(selection,around){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.keybindings.PAIR_CHARS,around);
if(cljs.core.truth_(temp__5733__auto__)){
var complement = temp__5733__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(around),cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection),cljs.core.str.cljs$core$IFn$_invoke$arity$1(complement)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(around),cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection),cljs.core.str.cljs$core$IFn$_invoke$arity$1(around)].join('');
}
});
athens.keybindings.handle_shortcuts = (function athens$keybindings$handle_shortcuts(e,_,state){
var map__54905 = athens.keybindings.destruct_event(e);
var map__54905__$1 = (((((!((map__54905 == null))))?(((((map__54905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54905):map__54905);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54905__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54905__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54905__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54905__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.B)){
var new_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),athens.keybindings.surround(selection,"**"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.I)){
var new_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),athens.keybindings.surround(selection,"__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);
} else {
return null;
}
}
});
athens.keybindings.pair_char_QMARK_ = (function athens$keybindings$pair_char_QMARK_(e){
var map__54907 = athens.keybindings.destruct_event(e);
var map__54907__$1 = (((((!((map__54907 == null))))?(((((map__54907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54907):map__54907);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54907__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pair_char_set = cljs.core.set(cljs.core.flatten(cljs.core.seq(athens.keybindings.PAIR_CHARS)));
return (pair_char_set.cljs$core$IFn$_invoke$arity$1 ? pair_char_set.cljs$core$IFn$_invoke$arity$1(key) : pair_char_set.call(null,key));
});
athens.keybindings.handle_pair_char = (function athens$keybindings$handle_pair_char(e,_,state){
var map__54909 = athens.keybindings.destruct_event(e);
var map__54909__$1 = (((((!((map__54909 == null))))?(((((map__54909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54909):map__54909);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54909__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54909__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54909__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54909__$1,new cljs.core.Keyword(null,"target","target",253001721));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54909__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54909__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54909__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var close_pair = cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.keybindings.PAIR_CHARS,key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,end)){
var new_str_54929 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(close_pair),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
setTimeout((function (){
return goog.dom.selection.setCursorPosition(target,(start + (1)));
}),(10));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str_54929);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,end)){
var surround_selection_54930 = athens.keybindings.surround(selection,key);
var new_str_54931 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),surround_selection_54930,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str_54931);

setTimeout((function (){
goog.dom.selection.setStart(target,(start + (1)));

return goog.dom.selection.setEnd(target,(end + (1)));
}),(10));
} else {
}
}

var four_char = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),(start - (1)),(start + (3)));
var double_brackets_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[[]]",four_char);
var double_parens_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(())",four_char);
if(double_brackets_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),new cljs.core.Keyword(null,"page","page",849072397));
} else {
if(double_parens_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),new cljs.core.Keyword(null,"block","block",664686210));
} else {
return null;
}
}
});
athens.keybindings.handle_backspace = (function athens$keybindings$handle_backspace(e,uid,state){
var map__54912 = athens.keybindings.destruct_event(e);
var map__54912__$1 = (((((!((map__54912 == null))))?(((((map__54912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54912):map__54912);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54912__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54912__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54912__$1,new cljs.core.Keyword(null,"value","value",305978217));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54912__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54912__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54912__$1,new cljs.core.Keyword(null,"target","target",253001721));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54912__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var possible_pair = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(start - (1)),(start + (1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,end)){
var new_tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,end);
var new_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),new_tail].join('');
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);
} else {
if(cljs.core.truth_(meta)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),tail);
} else {
if(athens.keybindings.block_start_QMARK_(e)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backspace","backspace",-696007848),uid,value], null));
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__54911_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(possible_pair,p1__54911_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[]","{}","()"], null)))){
var head__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(start - (1)));
var tail__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,(start + (1)));
var new_str = [head__$1,tail__$1].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null);

return setTimeout((function (){
return goog.dom.selection.setCursorPosition(target,(start - (1)));
}),(10));
} else {
var head__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(start - (1)));
var new_str = [head__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
var map__54914 = cljs.core.deref(state);
var map__54914__$1 = (((((!((map__54914 == null))))?(((((map__54914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54914):map__54914);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54914__$1,new cljs.core.Keyword("search","query","search/query",1830322034));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54914__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.last(value))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("search","type","search/type",-1745335484),null,new cljs.core.Keyword("search","query","search/query",1830322034),null], null));
} else {
}

if(cljs.core.truth_(query)){
athens.keybindings.update_query.cljs$core$IFn$_invoke$arity$3(state,head__$1,type);
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);

}
}
}
}
});
/**
 * Closure returns true even when using modifier keys. We do not make that assumption.
 */
athens.keybindings.is_character_key_QMARK_ = (function athens$keybindings$is_character_key_QMARK_(e){
var map__54916 = athens.keybindings.destruct_event(e);
var map__54916__$1 = (((((!((map__54916 == null))))?(((((map__54916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54916):map__54916);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54916__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var ctrl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54916__$1,new cljs.core.Keyword(null,"ctrl","ctrl",361402094));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54916__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54916__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
if(cljs.core.not(meta)){
if(cljs.core.not(ctrl)){
if(cljs.core.not(alt)){
return goog.events.KeyCodes.isCharacterKey(key_code);
} else {
return false;
}
} else {
return false;
}
} else {
return false;
}
});
athens.keybindings.write_char = (function athens$keybindings$write_char(e,_,state){
var map__54918 = athens.keybindings.destruct_event(e);
var map__54918__$1 = (((((!((map__54918 == null))))?(((((map__54918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54918):map__54918);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54918__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54918__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54918__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54918__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var new_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
var map__54919 = cljs.core.deref(state);
var map__54919__$1 = (((((!((map__54919 == null))))?(((((map__54919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54919):map__54919);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54919__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.SLASH)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("search","query","search/query",1830322034),"",new cljs.core.Keyword("search","type","search/type",-1745335484),new cljs.core.Keyword(null,"slash","slash",-1449773022)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"slash","slash",-1449773022))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","query","search/query",1830322034),new_str);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397))))){
athens.keybindings.update_query.cljs$core$IFn$_invoke$arity$4(state,head,key,type);
} else {
}
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str], null));
});
athens.keybindings.block_key_down = (function athens$keybindings$block_key_down(e,uid,state){
var d_event = athens.keybindings.destruct_event(e);
var map__54922 = d_event;
var map__54922__$1 = (((((!((map__54922 == null))))?(((((map__54922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54922):map__54922);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54922__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var ctrl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54922__$1,new cljs.core.Keyword(null,"ctrl","ctrl",361402094));
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54922__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"last-keydown","last-keydown",348696018),d_event);

if(cljs.core.truth_(athens.keybindings.arrow_key_direction(e))){
return athens.keybindings.handle_arrow_key(e,uid,state);
} else {
if(cljs.core.truth_(athens.keybindings.pair_char_QMARK_(e))){
return athens.keybindings.handle_pair_char(e,uid,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.TAB)){
return athens.keybindings.handle_tab(e,uid);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.ENTER)){
return athens.keybindings.handle_enter(e,uid,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.BACKSPACE)){
return athens.keybindings.handle_backspace(e,uid,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.ESC)){
return athens.keybindings.handle_escape(e,state);
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = meta;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ctrl;
}
})())){
return athens.keybindings.handle_shortcuts(e,uid,state);
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

//# sourceMappingURL=athens.keybindings.js.map
