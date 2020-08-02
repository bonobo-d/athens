goog.provide('athens.keybindings');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.util');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
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
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var G__56100 = e.target;
return goog.dom.selection.getEndPoints(G__56100);
})());
});
athens.keybindings.destruct_event = (function athens$keybindings$destruct_event(e){
var key = e.key;
var key_code = e.keyCode;
var target = e.target;
var value = target.value;
var event = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"key-code","key-code",-1732114304),key_code,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"value","value",305978217),value], null);
var modifiers = athens.keybindings.modifier_keys(e);
var vec__56101 = athens.keybindings.get_end_points(e);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56101,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56101,(1),null);
var selection = goog.dom.selection.getText(target);
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),start);
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,end);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([modifiers,event,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"head","head",-771383919),head,new cljs.core.Keyword(null,"tail","tail",-1146023564),tail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection","selection",975998651),selection], null)], 0));
});
athens.keybindings.ARROW_KEYS = cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.events.KeyCodes.UP,new cljs.core.Keyword(null,"up","up",-269712113),goog.events.KeyCodes.LEFT,new cljs.core.Keyword(null,"left","left",-399115937),goog.events.KeyCodes.DOWN,new cljs.core.Keyword(null,"down","down",1565245570),goog.events.KeyCodes.RIGHT,new cljs.core.Keyword(null,"right","right",-452581833)]);
athens.keybindings.arrow_key_direction = (function athens$keybindings$arrow_key_direction(e){
var key_code = e.keyCode;
return (athens.keybindings.ARROW_KEYS.cljs$core$IFn$_invoke$arity$1 ? athens.keybindings.ARROW_KEYS.cljs$core$IFn$_invoke$arity$1(key_code) : athens.keybindings.ARROW_KEYS.call(null,key_code));
});
athens.keybindings.block_start_QMARK_ = (function athens$keybindings$block_start_QMARK_(e){
var vec__56104 = athens.keybindings.get_end_points(e);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56104,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56104,(1),null);
return (start === (0));
});
athens.keybindings.block_end_QMARK_ = (function athens$keybindings$block_end_QMARK_(e){
var map__56107 = athens.keybindings.destruct_event(e);
var map__56107__$1 = (((((!((map__56107 == null))))?(((((map__56107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56107):map__56107);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56107__$1,new cljs.core.Keyword(null,"value","value",305978217));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56107__$1,new cljs.core.Keyword(null,"end","end",-268185958));
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
var map__56109 = athens.keybindings.destruct_event(e);
var map__56109__$1 = (((((!((map__56109 == null))))?(((((map__56109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56109):map__56109);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56109__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56109__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56109__$1,new cljs.core.Keyword(null,"target","target",253001721));
var top_row_QMARK_ = true;
var bottom_row_QMARK_ = true;
var map__56110 = cljs.core.deref(state);
var map__56110__$1 = (((((!((map__56110 == null))))?(((((map__56110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56110):map__56110);
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56110__$1,new cljs.core.Keyword("search","results","search/results",107824727));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56110__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
var selected_items = cljs.core.deref((function (){var G__56113 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","items","selected/items",1686402211)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__56113) : re_frame.core.subscribe.call(null,G__56113));
})());
var direction = athens.keybindings.arrow_key_direction(e);
if(cljs.core.truth_((function (){var and__4174__auto__ = shift;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = cljs.core.seq(selected_items);
if(and__4174__auto____$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction)){
var G__56116 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","up","selected/up",921350754)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56116) : re_frame.core.dispatch.call(null,G__56116));
} else {
return false;
}
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())){
var and__4174__auto__ = shift;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = cljs.core.seq(selected_items);
if(and__4174__auto____$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),direction)){
var G__56119 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","down","selected/down",-1806586329)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56119) : re_frame.core.dispatch.call(null,G__56119));
} else {
return false;
}
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = shift;
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction)) && (top_row_QMARK_));
} else {
return and__4174__auto__;
}
})())){
target.blur();

var G__56120_56189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56120_56189) : re_frame.core.dispatch.call(null,G__56120_56189));

var G__56121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","add-item","selected/add-item",-508591222),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56121) : re_frame.core.dispatch.call(null,G__56121));
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = shift;
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),direction)) && (bottom_row_QMARK_));
} else {
return and__4174__auto__;
}
})())){
target.blur();

var G__56122_56192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56122_56192) : re_frame.core.dispatch.call(null,G__56122_56192));

var G__56123 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("selected","add-item","selected/add-item",-508591222),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56123) : re_frame.core.dispatch.call(null,G__56123));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"slash","slash",-1449773022))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up","up",-269712113),direction)){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("search","index","search/index",1990835117),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(athens.keybindings.dec_cycle,(0),athens.keybindings.max_idx(athens.keybindings.slash_options)));

var cur_index = new cljs.core.Keyword("search","index","search/index",1990835117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var container_el = document.getElementById("slash-menu-container");
var next_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(container_el.children),cur_index);
if(athens.util.is_beyond_rect_QMARK_(next_el,container_el.parentNode)){
return next_el.scrollIntoView(false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),"auto"], null));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down","down",1565245570),direction)){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("search","index","search/index",1990835117),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(athens.keybindings.inc_cycle,(0),athens.keybindings.max_idx(athens.keybindings.slash_options)));

var cur_index = new cljs.core.Keyword("search","index","search/index",1990835117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var container_el = document.getElementById("slash-menu-container");
var next_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(container_el.children),cur_index);
if(athens.util.is_beyond_rect_QMARK_(next_el,container_el)){
return next_el.scrollIntoView(false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),"auto"], null));
} else {
return null;
}
} else {
return null;
}
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.UP)){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("search","index","search/index",1990835117),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(athens.keybindings.dec_cycle,(0),athens.keybindings.max_idx(results)));

return athens.util.scroll_if_needed(document.getElementById(["result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("search","index","search/index",1990835117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))].join('')),document.getElementById("dropdown-menu"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DOWN)){
e.preventDefault();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword("search","index","search/index",1990835117),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(athens.keybindings.inc_cycle,(0),athens.keybindings.max_idx(results)));

return athens.util.scroll_if_needed(document.getElementById(["result-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("search","index","search/index",1990835117).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))].join('')),document.getElementById("dropdown-menu"));
} else {
return null;
}
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.UP)) && (top_row_QMARK_))){
var G__56124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56124) : re_frame.core.dispatch.call(null,G__56124));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.LEFT)) && (athens.keybindings.block_start_QMARK_(e)))){
var G__56125 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56125) : re_frame.core.dispatch.call(null,G__56125));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.DOWN)) && (bottom_row_QMARK_))){
var G__56126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1565245570),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56126) : re_frame.core.dispatch.call(null,G__56126));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.RIGHT)) && (athens.keybindings.block_end_QMARK_(e)))){
var G__56127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56127) : re_frame.core.dispatch.call(null,G__56127));
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

var map__56128 = athens.keybindings.destruct_event(e);
var map__56128__$1 = (((((!((map__56128 == null))))?(((((map__56128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56128):map__56128);
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56128__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var block_zero_QMARK_ = (new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1(athens.db.get_block(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null))) === (0));
if(cljs.core.truth_(shift)){
var G__56130 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unindent","unindent",-1291301718),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56130) : re_frame.core.dispatch.call(null,G__56130));
} else {
if(block_zero_QMARK_){
return null;
} else {
var G__56131 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indent","indent",-148200125),uid], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56131) : re_frame.core.dispatch.call(null,G__56131));
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
var G__56132 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("editing","uid","editing/uid",974963040),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56132) : re_frame.core.dispatch.call(null,G__56132));

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
var map__56133 = cljs.core.deref(state);
var map__56133__$1 = (((((!((map__56133 == null))))?(((((map__56133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56133):map__56133);
var atom_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56133__$1,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204));
var vec__56134 = (athens.keybindings.slash_options.cljs$core$IFn$_invoke$arity$1 ? athens.keybindings.slash_options.cljs$core$IFn$_invoke$arity$1(index) : athens.keybindings.slash_options.call(null,index));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56134,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56134,(1),null);
var expansion = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56134,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56134,(3),null);
var expand = ((cljs.core.fn_QMARK_(expansion))?(expansion.cljs$core$IFn$_invoke$arity$0 ? expansion.cljs$core$IFn$_invoke$arity$0() : expansion.call(null)):expansion);
var replace_str = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(atom_string,(0),(cljs.core.count(atom_string) - (1)));
var new_str = [replace_str,cljs.core.str.cljs$core$IFn$_invoke$arity$1(expand)].join('');
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("search","index","search/index",1990835117),(0),new cljs.core.Keyword("search","type","search/type",-1745335484),null,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str], null));
});
athens.keybindings.handle_enter = (function athens$keybindings$handle_enter(e,uid,state){
var map__56138 = athens.keybindings.destruct_event(e);
var map__56138__$1 = (((((!((map__56138 == null))))?(((((map__56138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56138):map__56138);
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56138__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56138__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56138__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56138__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56138__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56138__$1,new cljs.core.Keyword(null,"value","value",305978217));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56138__$1,new cljs.core.Keyword(null,"target","target",253001721));
var map__56139 = cljs.core.deref(state);
var map__56139__$1 = (((((!((map__56139 == null))))?(((((map__56139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56139):map__56139);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56139__$1,new cljs.core.Keyword("search","query","search/query",1830322034));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56139__$1,new cljs.core.Keyword("search","index","search/index",1990835117));
var results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56139__$1,new cljs.core.Keyword("search","results","search/results",107824727));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56139__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"slash","slash",-1449773022))){
return athens.keybindings.select_slash_cmd(index,state);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397))){
var map__56142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,index);
var map__56142__$1 = (((((!((map__56142 == null))))?(((((map__56142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56142):map__56142);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56142__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var new_str = clojure.string.replace_first(value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),"]]"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"]]"].join(''));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str,new cljs.core.Keyword("search","query","search/query",1830322034),null,new cljs.core.Keyword("search","type","search/type",-1745335484),null], null));

return (target.selectionStart = ((2) + start));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210))){
var map__56144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(results,index);
var map__56144__$1 = (((((!((map__56144 == null))))?(((((map__56144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56144):map__56144);
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56144__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var new_str = clojure.string.replace_first(value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),"))"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uid__$1),"))"].join(''));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str,new cljs.core.Keyword("search","query","search/query",1830322034),null,new cljs.core.Keyword("search","type","search/type",-1745335484),null], null));

return (target.selectionStart = ((2) + start));
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
var G__56146 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624),uid,value,start], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56146) : re_frame.core.dispatch.call(null,G__56146));

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
/**
 * Assumes meta is selected
 */
athens.keybindings.handle_system_shortcuts = (function athens$keybindings$handle_system_shortcuts(e,_,state){
var map__56147 = athens.keybindings.destruct_event(e);
var map__56147__$1 = (((((!((map__56147 == null))))?(((((map__56147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56147):map__56147);
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56147__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56147__$1,new cljs.core.Keyword(null,"target","target",253001721));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56147__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56147__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.A)){
goog.dom.selection.setStart(target,(0));

return goog.dom.selection.setEnd(target,end);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.Z)){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["undo"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.X)){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cut"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.V)){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["paste"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.B)){
var new_str = athens.keybindings.surround(selection,"**");
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.I)){
var new_str = athens.keybindings.surround(selection,"__");
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);
} else {
return null;
}
}
}
}
}
}
});
athens.keybindings.pair_char_QMARK_ = (function athens$keybindings$pair_char_QMARK_(e){
var map__56149 = athens.keybindings.destruct_event(e);
var map__56149__$1 = (((((!((map__56149 == null))))?(((((map__56149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56149):map__56149);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56149__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pair_char_set = cljs.core.set(cljs.core.flatten(cljs.core.seq(athens.keybindings.PAIR_CHARS)));
return (pair_char_set.cljs$core$IFn$_invoke$arity$1 ? pair_char_set.cljs$core$IFn$_invoke$arity$1(key) : pair_char_set.call(null,key));
});
athens.keybindings.handle_pair_char = (function athens$keybindings$handle_pair_char(e,_,state){
var map__56151 = athens.keybindings.destruct_event(e);
var map__56151__$1 = (((((!((map__56151 == null))))?(((((map__56151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56151):map__56151);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56151__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56151__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56151__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56151__$1,new cljs.core.Keyword(null,"target","target",253001721));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56151__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56151__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56151__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var close_pair = cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.keybindings.PAIR_CHARS,key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,end)){
var new_str_56205 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(close_pair),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
setTimeout((function (){
var G__56153 = target;
var G__56154 = (start + (1));
return goog.dom.selection.setCursorPosition(G__56153,G__56154);
}),(10));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str_56205);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start,end)){
var surround_selection_56206 = athens.keybindings.surround(selection,key);
var new_str_56207 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),surround_selection_56206,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str_56207);

setTimeout((function (){
var G__56155_56208 = target;
var G__56156_56209 = (start + (1));
goog.dom.selection.setStart(G__56155_56208,G__56156_56209);

var G__56157 = target;
var G__56158 = (end + (1));
return goog.dom.selection.setEnd(G__56157,G__56158);
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
athens.keybindings.update_query = (function athens$keybindings$update_query(state,new_query,query_fun){
var results = (query_fun.cljs$core$IFn$_invoke$arity$1 ? query_fun.cljs$core$IFn$_invoke$arity$1(new_query) : query_fun.call(null,new_query));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","query","search/query",1830322034),new_query);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","results","search/results",107824727),results);
});
athens.keybindings.handle_backspace = (function athens$keybindings$handle_backspace(e,uid,state){
var map__56160 = athens.keybindings.destruct_event(e);
var map__56160__$1 = (((((!((map__56160 == null))))?(((((map__56160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56160):map__56160);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56160__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56160__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56160__$1,new cljs.core.Keyword(null,"value","value",305978217));
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56160__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56160__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56160__$1,new cljs.core.Keyword(null,"target","target",253001721));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56160__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
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
var G__56162 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backspace","backspace",-696007848),uid,value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56162) : re_frame.core.dispatch.call(null,G__56162));
} else {
if(cljs.core.truth_(cljs.core.some((function (p1__56159_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(possible_pair,p1__56159_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[]","{}","()"], null)))){
var head__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(start - (1)));
var tail__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(value,(start + (1)));
var new_str = [head__$1,tail__$1].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","type","search/type",-1745335484),null);

return setTimeout((function (){
var G__56163 = target;
var G__56164 = (start - (1));
return goog.dom.selection.setCursorPosition(G__56163,G__56164);
}),(10));
} else {
var head__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(start - (1)));
var new_str = [head__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
var map__56165 = cljs.core.deref(state);
var map__56165__$1 = (((((!((map__56165 == null))))?(((((map__56165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56165):map__56165);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56165__$1,new cljs.core.Keyword("search","query","search/query",1830322034));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56165__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
var query_fun = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397)))?athens.db.search_in_node_title:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210)))?athens.db.search_in_block_content:null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.last(value))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("search","type","search/type",-1745335484),null,new cljs.core.Keyword("search","query","search/query",1830322034),null], null));
} else {
}

if(cljs.core.truth_(query)){
athens.keybindings.update_query(state,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(query,(0),(cljs.core.count(query) - (1))),query_fun);
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
var map__56167 = athens.keybindings.destruct_event(e);
var map__56167__$1 = (((((!((map__56167 == null))))?(((((map__56167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56167):map__56167);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56167__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var ctrl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56167__$1,new cljs.core.Keyword(null,"ctrl","ctrl",361402094));
var alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56167__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56167__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
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
var map__56169 = athens.keybindings.destruct_event(e);
var map__56169__$1 = (((((!((map__56169 == null))))?(((((map__56169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56169):map__56169);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56169__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var tail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56169__$1,new cljs.core.Keyword(null,"tail","tail",-1146023564));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56169__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56169__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
var new_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
var map__56170 = cljs.core.deref(state);
var map__56170__$1 = (((((!((map__56170 == null))))?(((((map__56170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56170):map__56170);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56170__$1,new cljs.core.Keyword("search","query","search/query",1830322034));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56170__$1,new cljs.core.Keyword("search","type","search/type",-1745335484));
var new_query = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key_code,goog.events.KeyCodes.SLASH)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("search","query","search/query",1830322034),"",new cljs.core.Keyword("search","type","search/type",-1745335484),new cljs.core.Keyword(null,"slash","slash",-1449773022)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"slash","slash",-1449773022))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword("search","query","search/query",1830322034),new_str);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"block","block",664686210))){
athens.keybindings.update_query(state,new_query,athens.db.search_in_block_content);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"page","page",849072397))){
athens.keybindings.update_query(state,new_query,athens.db.search_in_node_title);
} else {
}
}
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"atom-string","atom-string",-1067323204),new_str], null));
});
athens.keybindings.block_key_down = (function athens$keybindings$block_key_down(e,uid,state){
var map__56173 = athens.keybindings.destruct_event(e);
var map__56173__$1 = (((((!((map__56173 == null))))?(((((map__56173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56173):map__56173);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56173__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var key_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56173__$1,new cljs.core.Keyword(null,"key-code","key-code",-1732114304));
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
if(cljs.core.truth_(meta)){
return athens.keybindings.handle_system_shortcuts(e,uid,state);
} else {
if(cljs.core.truth_(athens.keybindings.is_character_key_QMARK_(e))){
return athens.keybindings.write_char(e,uid,state);
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
});

//# sourceMappingURL=athens.keybindings.js.map
