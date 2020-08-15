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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__50313){
var map__50314 = p__50313;
var map__50314__$1 = (((((!((map__50314 == null))))?(((((map__50314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50314):map__50314);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50314__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50314__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50314__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50314__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__50316_50343 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__50317_50344 = null;
var count__50318_50345 = (0);
var i__50319_50346 = (0);
while(true){
if((i__50319_50346 < count__50318_50345)){
var vec__50330_50347 = chunk__50317_50344.cljs$core$IIndexed$_nth$arity$2(null,i__50319_50346);
var k_50348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50330_50347,(0),null);
var cb_50349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50330_50347,(1),null);
try{var G__50334_50350 = cljs.core.deref(re_frame.trace.traces);
(cb_50349.cljs$core$IFn$_invoke$arity$1 ? cb_50349.cljs$core$IFn$_invoke$arity$1(G__50334_50350) : cb_50349.call(null,G__50334_50350));
}catch (e50333){var e_50351 = e50333;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50348,"while storing",cljs.core.deref(re_frame.trace.traces),e_50351], 0));
}

var G__50352 = seq__50316_50343;
var G__50353 = chunk__50317_50344;
var G__50354 = count__50318_50345;
var G__50355 = (i__50319_50346 + (1));
seq__50316_50343 = G__50352;
chunk__50317_50344 = G__50353;
count__50318_50345 = G__50354;
i__50319_50346 = G__50355;
continue;
} else {
var temp__5735__auto___50356 = cljs.core.seq(seq__50316_50343);
if(temp__5735__auto___50356){
var seq__50316_50357__$1 = temp__5735__auto___50356;
if(cljs.core.chunked_seq_QMARK_(seq__50316_50357__$1)){
var c__4556__auto___50358 = cljs.core.chunk_first(seq__50316_50357__$1);
var G__50359 = cljs.core.chunk_rest(seq__50316_50357__$1);
var G__50360 = c__4556__auto___50358;
var G__50361 = cljs.core.count(c__4556__auto___50358);
var G__50362 = (0);
seq__50316_50343 = G__50359;
chunk__50317_50344 = G__50360;
count__50318_50345 = G__50361;
i__50319_50346 = G__50362;
continue;
} else {
var vec__50335_50363 = cljs.core.first(seq__50316_50357__$1);
var k_50364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50335_50363,(0),null);
var cb_50365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50335_50363,(1),null);
try{var G__50339_50366 = cljs.core.deref(re_frame.trace.traces);
(cb_50365.cljs$core$IFn$_invoke$arity$1 ? cb_50365.cljs$core$IFn$_invoke$arity$1(G__50339_50366) : cb_50365.call(null,G__50339_50366));
}catch (e50338){var e_50367 = e50338;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50364,"while storing",cljs.core.deref(re_frame.trace.traces),e_50367], 0));
}

var G__50368 = cljs.core.next(seq__50316_50357__$1);
var G__50369 = null;
var G__50370 = (0);
var G__50371 = (0);
seq__50316_50343 = G__50368;
chunk__50317_50344 = G__50369;
count__50318_50345 = G__50370;
i__50319_50346 = G__50371;
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
