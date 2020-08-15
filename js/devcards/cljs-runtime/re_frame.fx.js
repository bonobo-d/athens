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
var _STAR_current_trace_STAR__orig_val__51188 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__51189 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__51189);

try{try{var seq__51190 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51191 = null;
var count__51192 = (0);
var i__51193 = (0);
while(true){
if((i__51193 < count__51192)){
var vec__51200 = chunk__51191.cljs$core$IIndexed$_nth$arity$2(null,i__51193);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51200,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51200,(1),null);
var temp__5733__auto___51245 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51245)){
var effect_fn_51246 = temp__5733__auto___51245;
(effect_fn_51246.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51246.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51246.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51247 = seq__51190;
var G__51248 = chunk__51191;
var G__51249 = count__51192;
var G__51250 = (i__51193 + (1));
seq__51190 = G__51247;
chunk__51191 = G__51248;
count__51192 = G__51249;
i__51193 = G__51250;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51190);
if(temp__5735__auto__){
var seq__51190__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51190__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51190__$1);
var G__51251 = cljs.core.chunk_rest(seq__51190__$1);
var G__51252 = c__4556__auto__;
var G__51253 = cljs.core.count(c__4556__auto__);
var G__51254 = (0);
seq__51190 = G__51251;
chunk__51191 = G__51252;
count__51192 = G__51253;
i__51193 = G__51254;
continue;
} else {
var vec__51203 = cljs.core.first(seq__51190__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51203,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51203,(1),null);
var temp__5733__auto___51255 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51255)){
var effect_fn_51256 = temp__5733__auto___51255;
(effect_fn_51256.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51256.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51256.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51257 = cljs.core.next(seq__51190__$1);
var G__51258 = null;
var G__51259 = (0);
var G__51260 = (0);
seq__51190 = G__51257;
chunk__51191 = G__51258;
count__51192 = G__51259;
i__51193 = G__51260;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__50291__auto___51261 = re_frame.interop.now();
var duration__50292__auto___51262 = (end__50291__auto___51261 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__50292__auto___51262,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__50291__auto___51261);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__51188);
}} else {
var seq__51206 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51207 = null;
var count__51208 = (0);
var i__51209 = (0);
while(true){
if((i__51209 < count__51208)){
var vec__51218 = chunk__51207.cljs$core$IIndexed$_nth$arity$2(null,i__51209);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51218,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51218,(1),null);
var temp__5733__auto___51263 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51263)){
var effect_fn_51264 = temp__5733__auto___51263;
(effect_fn_51264.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51264.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51264.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51265 = seq__51206;
var G__51266 = chunk__51207;
var G__51267 = count__51208;
var G__51268 = (i__51209 + (1));
seq__51206 = G__51265;
chunk__51207 = G__51266;
count__51208 = G__51267;
i__51209 = G__51268;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51206);
if(temp__5735__auto__){
var seq__51206__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51206__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51206__$1);
var G__51269 = cljs.core.chunk_rest(seq__51206__$1);
var G__51270 = c__4556__auto__;
var G__51271 = cljs.core.count(c__4556__auto__);
var G__51272 = (0);
seq__51206 = G__51269;
chunk__51207 = G__51270;
count__51208 = G__51271;
i__51209 = G__51272;
continue;
} else {
var vec__51221 = cljs.core.first(seq__51206__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51221,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51221,(1),null);
var temp__5733__auto___51273 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___51273)){
var effect_fn_51274 = temp__5733__auto___51273;
(effect_fn_51274.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51274.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51274.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51275 = cljs.core.next(seq__51206__$1);
var G__51276 = null;
var G__51277 = (0);
var G__51278 = (0);
seq__51206 = G__51275;
chunk__51207 = G__51276;
count__51208 = G__51277;
i__51209 = G__51278;
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
var seq__51224 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51225 = null;
var count__51226 = (0);
var i__51227 = (0);
while(true){
if((i__51227 < count__51226)){
var map__51233 = chunk__51225.cljs$core$IIndexed$_nth$arity$2(null,i__51227);
var map__51233__$1 = (((((!((map__51233 == null))))?(((((map__51233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51233):map__51233);
var effect = map__51233__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51233__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51233__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51224,chunk__51225,count__51226,i__51227,map__51233,map__51233__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51224,chunk__51225,count__51226,i__51227,map__51233,map__51233__$1,effect,ms,dispatch))
,ms);
}


var G__51279 = seq__51224;
var G__51280 = chunk__51225;
var G__51281 = count__51226;
var G__51282 = (i__51227 + (1));
seq__51224 = G__51279;
chunk__51225 = G__51280;
count__51226 = G__51281;
i__51227 = G__51282;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51224);
if(temp__5735__auto__){
var seq__51224__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51224__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51224__$1);
var G__51283 = cljs.core.chunk_rest(seq__51224__$1);
var G__51284 = c__4556__auto__;
var G__51285 = cljs.core.count(c__4556__auto__);
var G__51286 = (0);
seq__51224 = G__51283;
chunk__51225 = G__51284;
count__51226 = G__51285;
i__51227 = G__51286;
continue;
} else {
var map__51235 = cljs.core.first(seq__51224__$1);
var map__51235__$1 = (((((!((map__51235 == null))))?(((((map__51235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51235):map__51235);
var effect = map__51235__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51235__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51235__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51224,chunk__51225,count__51226,i__51227,map__51235,map__51235__$1,effect,ms,dispatch,seq__51224__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51224,chunk__51225,count__51226,i__51227,map__51235,map__51235__$1,effect,ms,dispatch,seq__51224__$1,temp__5735__auto__))
,ms);
}


var G__51290 = cljs.core.next(seq__51224__$1);
var G__51291 = null;
var G__51292 = (0);
var G__51293 = (0);
seq__51224 = G__51290;
chunk__51225 = G__51291;
count__51226 = G__51292;
i__51227 = G__51293;
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
var seq__51237 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51238 = null;
var count__51239 = (0);
var i__51240 = (0);
while(true){
if((i__51240 < count__51239)){
var event = chunk__51238.cljs$core$IIndexed$_nth$arity$2(null,i__51240);
re_frame.router.dispatch(event);


var G__51294 = seq__51237;
var G__51295 = chunk__51238;
var G__51296 = count__51239;
var G__51297 = (i__51240 + (1));
seq__51237 = G__51294;
chunk__51238 = G__51295;
count__51239 = G__51296;
i__51240 = G__51297;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51237);
if(temp__5735__auto__){
var seq__51237__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51237__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51237__$1);
var G__51298 = cljs.core.chunk_rest(seq__51237__$1);
var G__51299 = c__4556__auto__;
var G__51300 = cljs.core.count(c__4556__auto__);
var G__51301 = (0);
seq__51237 = G__51298;
chunk__51238 = G__51299;
count__51239 = G__51300;
i__51240 = G__51301;
continue;
} else {
var event = cljs.core.first(seq__51237__$1);
re_frame.router.dispatch(event);


var G__51302 = cljs.core.next(seq__51237__$1);
var G__51303 = null;
var G__51304 = (0);
var G__51305 = (0);
seq__51237 = G__51302;
chunk__51238 = G__51303;
count__51239 = G__51304;
i__51240 = G__51305;
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
var seq__51241 = cljs.core.seq(value);
var chunk__51242 = null;
var count__51243 = (0);
var i__51244 = (0);
while(true){
if((i__51244 < count__51243)){
var event = chunk__51242.cljs$core$IIndexed$_nth$arity$2(null,i__51244);
clear_event(event);


var G__51308 = seq__51241;
var G__51309 = chunk__51242;
var G__51310 = count__51243;
var G__51311 = (i__51244 + (1));
seq__51241 = G__51308;
chunk__51242 = G__51309;
count__51243 = G__51310;
i__51244 = G__51311;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51241);
if(temp__5735__auto__){
var seq__51241__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51241__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51241__$1);
var G__51314 = cljs.core.chunk_rest(seq__51241__$1);
var G__51315 = c__4556__auto__;
var G__51316 = cljs.core.count(c__4556__auto__);
var G__51317 = (0);
seq__51241 = G__51314;
chunk__51242 = G__51315;
count__51243 = G__51316;
i__51244 = G__51317;
continue;
} else {
var event = cljs.core.first(seq__51241__$1);
clear_event(event);


var G__51318 = cljs.core.next(seq__51241__$1);
var G__51319 = null;
var G__51320 = (0);
var G__51321 = (0);
seq__51241 = G__51318;
chunk__51242 = G__51319;
count__51243 = G__51320;
i__51244 = G__51321;
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
