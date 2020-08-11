goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__51191 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__51192 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__51192);

try{try{var seq__51193 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51194 = null;
var count__51195 = (0);
var i__51196 = (0);
while(true){
if((i__51196 < count__51195)){
var vec__51203 = chunk__51194.cljs$core$IIndexed$_nth$arity$2(null,i__51196);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51203,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51203,(1),null);
var temp__5733__auto___51248 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51248)){
var effect_fn_51249 = temp__5733__auto___51248;
(effect_fn_51249.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51249.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51249.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51250 = seq__51193;
var G__51251 = chunk__51194;
var G__51252 = count__51195;
var G__51253 = (i__51196 + (1));
seq__51193 = G__51250;
chunk__51194 = G__51251;
count__51195 = G__51252;
i__51196 = G__51253;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51193);
if(temp__5735__auto__){
var seq__51193__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51193__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51193__$1);
var G__51254 = cljs.core.chunk_rest(seq__51193__$1);
var G__51255 = c__4556__auto__;
var G__51256 = cljs.core.count(c__4556__auto__);
var G__51257 = (0);
seq__51193 = G__51254;
chunk__51194 = G__51255;
count__51195 = G__51256;
i__51196 = G__51257;
continue;
} else {
var vec__51206 = cljs.core.first(seq__51193__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51206,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51206,(1),null);
var temp__5733__auto___51258 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51258)){
var effect_fn_51259 = temp__5733__auto___51258;
(effect_fn_51259.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51259.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51259.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51260 = cljs.core.next(seq__51193__$1);
var G__51261 = null;
var G__51262 = (0);
var G__51263 = (0);
seq__51193 = G__51260;
chunk__51194 = G__51261;
count__51195 = G__51262;
i__51196 = G__51263;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__50198__auto___51264 = re_frame.interop.now();
var duration__50199__auto___51265 = (end__50198__auto___51264 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__50199__auto___51265,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__50198__auto___51264);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__51191);
}} else {
var seq__51209 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51210 = null;
var count__51211 = (0);
var i__51212 = (0);
while(true){
if((i__51212 < count__51211)){
var vec__51219 = chunk__51210.cljs$core$IIndexed$_nth$arity$2(null,i__51212);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51219,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51219,(1),null);
var temp__5733__auto___51266 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51266)){
var effect_fn_51267 = temp__5733__auto___51266;
(effect_fn_51267.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51267.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51267.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51271 = seq__51209;
var G__51272 = chunk__51210;
var G__51273 = count__51211;
var G__51274 = (i__51212 + (1));
seq__51209 = G__51271;
chunk__51210 = G__51272;
count__51211 = G__51273;
i__51212 = G__51274;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51209);
if(temp__5735__auto__){
var seq__51209__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51209__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51209__$1);
var G__51275 = cljs.core.chunk_rest(seq__51209__$1);
var G__51276 = c__4556__auto__;
var G__51277 = cljs.core.count(c__4556__auto__);
var G__51278 = (0);
seq__51209 = G__51275;
chunk__51210 = G__51276;
count__51211 = G__51277;
i__51212 = G__51278;
continue;
} else {
var vec__51222 = cljs.core.first(seq__51209__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51222,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51222,(1),null);
var temp__5733__auto___51279 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51279)){
var effect_fn_51280 = temp__5733__auto___51279;
(effect_fn_51280.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51280.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51280.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51281 = cljs.core.next(seq__51209__$1);
var G__51282 = null;
var G__51283 = (0);
var G__51284 = (0);
seq__51209 = G__51281;
chunk__51210 = G__51282;
count__51211 = G__51283;
i__51212 = G__51284;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__51225 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51226 = null;
var count__51227 = (0);
var i__51228 = (0);
while(true){
if((i__51228 < count__51227)){
var map__51235 = chunk__51226.cljs$core$IIndexed$_nth$arity$2(null,i__51228);
var map__51235__$1 = (((((!((map__51235 == null))))?(((((map__51235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51235):map__51235);
var effect = map__51235__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51235__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51235__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51225,chunk__51226,count__51227,i__51228,map__51235,map__51235__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51225,chunk__51226,count__51227,i__51228,map__51235,map__51235__$1,effect,ms,dispatch))
,ms);
}


var G__51287 = seq__51225;
var G__51288 = chunk__51226;
var G__51289 = count__51227;
var G__51290 = (i__51228 + (1));
seq__51225 = G__51287;
chunk__51226 = G__51288;
count__51227 = G__51289;
i__51228 = G__51290;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51225);
if(temp__5735__auto__){
var seq__51225__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51225__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51225__$1);
var G__51291 = cljs.core.chunk_rest(seq__51225__$1);
var G__51292 = c__4556__auto__;
var G__51293 = cljs.core.count(c__4556__auto__);
var G__51294 = (0);
seq__51225 = G__51291;
chunk__51226 = G__51292;
count__51227 = G__51293;
i__51228 = G__51294;
continue;
} else {
var map__51237 = cljs.core.first(seq__51225__$1);
var map__51237__$1 = (((((!((map__51237 == null))))?(((((map__51237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51237):map__51237);
var effect = map__51237__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51237__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51237__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51225,chunk__51226,count__51227,i__51228,map__51237,map__51237__$1,effect,ms,dispatch,seq__51225__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51225,chunk__51226,count__51227,i__51228,map__51237,map__51237__$1,effect,ms,dispatch,seq__51225__$1,temp__5735__auto__))
,ms);
}


var G__51299 = cljs.core.next(seq__51225__$1);
var G__51300 = null;
var G__51301 = (0);
var G__51302 = (0);
seq__51225 = G__51299;
chunk__51226 = G__51300;
count__51227 = G__51301;
i__51228 = G__51302;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__51240 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51241 = null;
var count__51242 = (0);
var i__51243 = (0);
while(true){
if((i__51243 < count__51242)){
var event = chunk__51241.cljs$core$IIndexed$_nth$arity$2(null,i__51243);
re_frame.router.dispatch(event);


var G__51303 = seq__51240;
var G__51304 = chunk__51241;
var G__51305 = count__51242;
var G__51306 = (i__51243 + (1));
seq__51240 = G__51303;
chunk__51241 = G__51304;
count__51242 = G__51305;
i__51243 = G__51306;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51240);
if(temp__5735__auto__){
var seq__51240__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51240__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51240__$1);
var G__51307 = cljs.core.chunk_rest(seq__51240__$1);
var G__51308 = c__4556__auto__;
var G__51309 = cljs.core.count(c__4556__auto__);
var G__51310 = (0);
seq__51240 = G__51307;
chunk__51241 = G__51308;
count__51242 = G__51309;
i__51243 = G__51310;
continue;
} else {
var event = cljs.core.first(seq__51240__$1);
re_frame.router.dispatch(event);


var G__51311 = cljs.core.next(seq__51240__$1);
var G__51312 = null;
var G__51313 = (0);
var G__51314 = (0);
seq__51240 = G__51311;
chunk__51241 = G__51312;
count__51242 = G__51313;
i__51243 = G__51314;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__51244 = cljs.core.seq(value);
var chunk__51245 = null;
var count__51246 = (0);
var i__51247 = (0);
while(true){
if((i__51247 < count__51246)){
var event = chunk__51245.cljs$core$IIndexed$_nth$arity$2(null,i__51247);
clear_event(event);


var G__51317 = seq__51244;
var G__51318 = chunk__51245;
var G__51319 = count__51246;
var G__51320 = (i__51247 + (1));
seq__51244 = G__51317;
chunk__51245 = G__51318;
count__51246 = G__51319;
i__51247 = G__51320;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51244);
if(temp__5735__auto__){
var seq__51244__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51244__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51244__$1);
var G__51323 = cljs.core.chunk_rest(seq__51244__$1);
var G__51324 = c__4556__auto__;
var G__51325 = cljs.core.count(c__4556__auto__);
var G__51326 = (0);
seq__51244 = G__51323;
chunk__51245 = G__51324;
count__51246 = G__51325;
i__51247 = G__51326;
continue;
} else {
var event = cljs.core.first(seq__51244__$1);
clear_event(event);


var G__51327 = cljs.core.next(seq__51244__$1);
var G__51328 = null;
var G__51329 = (0);
var G__51330 = (0);
seq__51244 = G__51327;
chunk__51245 = G__51328;
count__51246 = G__51329;
i__51247 = G__51330;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
