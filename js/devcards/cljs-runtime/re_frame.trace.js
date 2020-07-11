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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__45967){
var map__45968 = p__45967;
var map__45968__$1 = (((((!((map__45968 == null))))?(((((map__45968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45968):map__45968);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45968__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45968__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45968__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45968__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
var seq__45970_45997 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__45971_45998 = null;
var count__45972_45999 = (0);
var i__45973_46000 = (0);
while(true){
if((i__45973_46000 < count__45972_45999)){
var vec__45984_46001 = chunk__45971_45998.cljs$core$IIndexed$_nth$arity$2(null,i__45973_46000);
var k_46002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45984_46001,(0),null);
var cb_46003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45984_46001,(1),null);
try{var G__45988_46004 = cljs.core.deref(re_frame.trace.traces);
(cb_46003.cljs$core$IFn$_invoke$arity$1 ? cb_46003.cljs$core$IFn$_invoke$arity$1(G__45988_46004) : cb_46003.call(null,G__45988_46004));
}catch (e45987){var e_46005 = e45987;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46002,"while storing",cljs.core.deref(re_frame.trace.traces),e_46005], 0));
}

var G__46006 = seq__45970_45997;
var G__46007 = chunk__45971_45998;
var G__46008 = count__45972_45999;
var G__46009 = (i__45973_46000 + (1));
seq__45970_45997 = G__46006;
chunk__45971_45998 = G__46007;
count__45972_45999 = G__46008;
i__45973_46000 = G__46009;
continue;
} else {
var temp__5735__auto___46010 = cljs.core.seq(seq__45970_45997);
if(temp__5735__auto___46010){
var seq__45970_46011__$1 = temp__5735__auto___46010;
if(cljs.core.chunked_seq_QMARK_(seq__45970_46011__$1)){
var c__4609__auto___46012 = cljs.core.chunk_first(seq__45970_46011__$1);
var G__46013 = cljs.core.chunk_rest(seq__45970_46011__$1);
var G__46014 = c__4609__auto___46012;
var G__46015 = cljs.core.count(c__4609__auto___46012);
var G__46016 = (0);
seq__45970_45997 = G__46013;
chunk__45971_45998 = G__46014;
count__45972_45999 = G__46015;
i__45973_46000 = G__46016;
continue;
} else {
var vec__45989_46017 = cljs.core.first(seq__45970_46011__$1);
var k_46018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45989_46017,(0),null);
var cb_46019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45989_46017,(1),null);
try{var G__45993_46020 = cljs.core.deref(re_frame.trace.traces);
(cb_46019.cljs$core$IFn$_invoke$arity$1 ? cb_46019.cljs$core$IFn$_invoke$arity$1(G__45993_46020) : cb_46019.call(null,G__45993_46020));
}catch (e45992){var e_46021 = e45992;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46018,"while storing",cljs.core.deref(re_frame.trace.traces),e_46021], 0));
}

var G__46022 = cljs.core.next(seq__45970_46011__$1);
var G__46023 = null;
var G__46024 = (0);
var G__46025 = (0);
seq__45970_45997 = G__46022;
chunk__45971_45998 = G__46023;
count__45972_45999 = G__46024;
i__45973_46000 = G__46025;
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
