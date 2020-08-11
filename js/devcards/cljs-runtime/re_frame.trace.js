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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__50230){
var map__50231 = p__50230;
var map__50231__$1 = (((((!((map__50231 == null))))?(((((map__50231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50231):map__50231);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50231__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50231__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50231__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50231__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__50233_50279 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__50234_50280 = null;
var count__50235_50281 = (0);
var i__50236_50282 = (0);
while(true){
if((i__50236_50282 < count__50235_50281)){
var vec__50256_50283 = chunk__50234_50280.cljs$core$IIndexed$_nth$arity$2(null,i__50236_50282);
var k_50285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50256_50283,(0),null);
var cb_50287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50256_50283,(1),null);
try{var G__50263_50293 = cljs.core.deref(re_frame.trace.traces);
(cb_50287.cljs$core$IFn$_invoke$arity$1 ? cb_50287.cljs$core$IFn$_invoke$arity$1(G__50263_50293) : cb_50287.call(null,G__50263_50293));
}catch (e50259){var e_50294 = e50259;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50285,"while storing",cljs.core.deref(re_frame.trace.traces),e_50294], 0));
}

var G__50299 = seq__50233_50279;
var G__50300 = chunk__50234_50280;
var G__50301 = count__50235_50281;
var G__50302 = (i__50236_50282 + (1));
seq__50233_50279 = G__50299;
chunk__50234_50280 = G__50300;
count__50235_50281 = G__50301;
i__50236_50282 = G__50302;
continue;
} else {
var temp__5735__auto___50304 = cljs.core.seq(seq__50233_50279);
if(temp__5735__auto___50304){
var seq__50233_50306__$1 = temp__5735__auto___50304;
if(cljs.core.chunked_seq_QMARK_(seq__50233_50306__$1)){
var c__4556__auto___50308 = cljs.core.chunk_first(seq__50233_50306__$1);
var G__50309 = cljs.core.chunk_rest(seq__50233_50306__$1);
var G__50310 = c__4556__auto___50308;
var G__50311 = cljs.core.count(c__4556__auto___50308);
var G__50312 = (0);
seq__50233_50279 = G__50309;
chunk__50234_50280 = G__50310;
count__50235_50281 = G__50311;
i__50236_50282 = G__50312;
continue;
} else {
var vec__50269_50317 = cljs.core.first(seq__50233_50306__$1);
var k_50318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50269_50317,(0),null);
var cb_50319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50269_50317,(1),null);
try{var G__50273_50323 = cljs.core.deref(re_frame.trace.traces);
(cb_50319.cljs$core$IFn$_invoke$arity$1 ? cb_50319.cljs$core$IFn$_invoke$arity$1(G__50273_50323) : cb_50319.call(null,G__50273_50323));
}catch (e50272){var e_50328 = e50272;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50318,"while storing",cljs.core.deref(re_frame.trace.traces),e_50328], 0));
}

var G__50329 = cljs.core.next(seq__50233_50306__$1);
var G__50330 = null;
var G__50331 = (0);
var G__50332 = (0);
seq__50233_50279 = G__50329;
chunk__50234_50280 = G__50330;
count__50235_50281 = G__50331;
i__50236_50282 = G__50332;
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
