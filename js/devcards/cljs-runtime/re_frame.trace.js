goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__50271){
var map__50272 = p__50271;
var map__50272__$1 = (((((!((map__50272 == null))))?(((((map__50272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50272):map__50272);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50272__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50272__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50272__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50272__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__50274_50315 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__50275_50316 = null;
var count__50276_50317 = (0);
var i__50277_50318 = (0);
while(true){
if((i__50277_50318 < count__50276_50317)){
var vec__50290_50319 = chunk__50275_50316.cljs$core$IIndexed$_nth$arity$2(null,i__50277_50318);
var k_50320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50290_50319,(0),null);
var cb_50321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50290_50319,(1),null);
try{var G__50294_50322 = cljs.core.deref(re_frame.trace.traces);
(cb_50321.cljs$core$IFn$_invoke$arity$1 ? cb_50321.cljs$core$IFn$_invoke$arity$1(G__50294_50322) : cb_50321.call(null,G__50294_50322));
}catch (e50293){var e_50323 = e50293;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50320,"while storing",cljs.core.deref(re_frame.trace.traces),e_50323], 0));
}

var G__50325 = seq__50274_50315;
var G__50326 = chunk__50275_50316;
var G__50327 = count__50276_50317;
var G__50328 = (i__50277_50318 + (1));
seq__50274_50315 = G__50325;
chunk__50275_50316 = G__50326;
count__50276_50317 = G__50327;
i__50277_50318 = G__50328;
continue;
} else {
var temp__5735__auto___50329 = cljs.core.seq(seq__50274_50315);
if(temp__5735__auto___50329){
var seq__50274_50330__$1 = temp__5735__auto___50329;
if(cljs.core.chunked_seq_QMARK_(seq__50274_50330__$1)){
var c__4556__auto___50332 = cljs.core.chunk_first(seq__50274_50330__$1);
var G__50333 = cljs.core.chunk_rest(seq__50274_50330__$1);
var G__50334 = c__4556__auto___50332;
var G__50335 = cljs.core.count(c__4556__auto___50332);
var G__50336 = (0);
seq__50274_50315 = G__50333;
chunk__50275_50316 = G__50334;
count__50276_50317 = G__50335;
i__50277_50318 = G__50336;
continue;
} else {
var vec__50295_50337 = cljs.core.first(seq__50274_50330__$1);
var k_50338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50295_50337,(0),null);
var cb_50339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50295_50337,(1),null);
try{var G__50299_50340 = cljs.core.deref(re_frame.trace.traces);
(cb_50339.cljs$core$IFn$_invoke$arity$1 ? cb_50339.cljs$core$IFn$_invoke$arity$1(G__50299_50340) : cb_50339.call(null,G__50299_50340));
}catch (e50298){var e_50341 = e50298;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50338,"while storing",cljs.core.deref(re_frame.trace.traces),e_50341], 0));
}

var G__50342 = cljs.core.next(seq__50274_50330__$1);
var G__50343 = null;
var G__50344 = (0);
var G__50345 = (0);
seq__50274_50315 = G__50342;
chunk__50275_50316 = G__50343;
count__50276_50317 = G__50344;
i__50277_50318 = G__50345;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
