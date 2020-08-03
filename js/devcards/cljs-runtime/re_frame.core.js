goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('re_frame.events');
goog.require('re_frame.subs');
goog.require('re_frame.interop');
goog.require('re_frame.db');
goog.require('re_frame.fx');
goog.require('re_frame.cofx');
goog.require('re_frame.router');
goog.require('re_frame.loggers');
goog.require('re_frame.registrar');
goog.require('re_frame.interceptor');
goog.require('re_frame.std_interceptors');
goog.require('clojure.set');
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.reg_sub = re_frame.subs.reg_sub;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.clear_sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.subs.kind);
re_frame.core.clear_subscription_cache_BANG_ = re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
re_frame.core.reg_sub_raw = (function re_frame$core$reg_sub_raw(query_id,handler_fn){
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,handler_fn);
});
re_frame.core.reg_fx = re_frame.fx.reg_fx;
re_frame.core.clear_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.fx.kind);
re_frame.core.reg_cofx = re_frame.cofx.reg_cofx;
re_frame.core.inject_cofx = re_frame.cofx.inject_cofx;
re_frame.core.clear_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
re_frame.core.reg_event_db = (function re_frame$core$reg_event_db(var_args){
var G__52362 = arguments.length;
switch (G__52362) {
case 2:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.db_handler__GT_interceptor(handler)], null));
}));

(re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
re_frame.core.reg_event_fx = (function re_frame$core$reg_event_fx(var_args){
var G__52365 = arguments.length;
switch (G__52365) {
case 2:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.fx_handler__GT_interceptor(handler)], null));
}));

(re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3);

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
re_frame.core.reg_event_ctx = (function re_frame$core$reg_event_ctx(var_args){
var G__52367 = arguments.length;
switch (G__52367) {
case 2:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
}));

(re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3);

re_frame.core.clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
re_frame.core.debug = re_frame.std_interceptors.debug;
re_frame.core.path = re_frame.std_interceptors.path;
re_frame.core.enrich = re_frame.std_interceptors.enrich;
re_frame.core.trim_v = re_frame.std_interceptors.trim_v;
re_frame.core.after = re_frame.std_interceptors.after;
re_frame.core.on_changes = re_frame.std_interceptors.on_changes;
re_frame.core.__GT_interceptor = re_frame.interceptor.__GT_interceptor;
re_frame.core.get_coeffect = re_frame.interceptor.get_coeffect;
re_frame.core.assoc_coeffect = re_frame.interceptor.assoc_coeffect;
re_frame.core.get_effect = re_frame.interceptor.get_effect;
re_frame.core.assoc_effect = re_frame.interceptor.assoc_effect;
re_frame.core.enqueue = re_frame.interceptor.enqueue;
re_frame.core.set_loggers_BANG_ = re_frame.loggers.set_loggers_BANG_;
re_frame.core.console = re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
re_frame.core.make_restore_fn = (function re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref(re_frame.db.app_db);
var subs_cache = cljs.core.deref(re_frame.subs.query__GT_reaction);
return (function (){
var original_subs_52399 = cljs.core.set(cljs.core.vals(subs_cache));
var current_subs_52400 = cljs.core.set(cljs.core.vals(cljs.core.deref(re_frame.subs.query__GT_reaction)));
var seq__52371_52401 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_subs_52400,original_subs_52399));
var chunk__52372_52402 = null;
var count__52373_52403 = (0);
var i__52374_52404 = (0);
while(true){
if((i__52374_52404 < count__52373_52403)){
var sub_52405 = chunk__52372_52402.cljs$core$IIndexed$_nth$arity$2(null,i__52374_52404);
re_frame.interop.dispose_BANG_(sub_52405);


var G__52406 = seq__52371_52401;
var G__52407 = chunk__52372_52402;
var G__52408 = count__52373_52403;
var G__52409 = (i__52374_52404 + (1));
seq__52371_52401 = G__52406;
chunk__52372_52402 = G__52407;
count__52373_52403 = G__52408;
i__52374_52404 = G__52409;
continue;
} else {
var temp__5735__auto___52410 = cljs.core.seq(seq__52371_52401);
if(temp__5735__auto___52410){
var seq__52371_52411__$1 = temp__5735__auto___52410;
if(cljs.core.chunked_seq_QMARK_(seq__52371_52411__$1)){
var c__4609__auto___52412 = cljs.core.chunk_first(seq__52371_52411__$1);
var G__52413 = cljs.core.chunk_rest(seq__52371_52411__$1);
var G__52414 = c__4609__auto___52412;
var G__52415 = cljs.core.count(c__4609__auto___52412);
var G__52416 = (0);
seq__52371_52401 = G__52413;
chunk__52372_52402 = G__52414;
count__52373_52403 = G__52415;
i__52374_52404 = G__52416;
continue;
} else {
var sub_52417 = cljs.core.first(seq__52371_52411__$1);
re_frame.interop.dispose_BANG_(sub_52417);


var G__52418 = cljs.core.next(seq__52371_52411__$1);
var G__52419 = null;
var G__52420 = (0);
var G__52421 = (0);
seq__52371_52401 = G__52418;
chunk__52372_52402 = G__52419;
count__52373_52403 = G__52420;
i__52374_52404 = G__52421;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_(re_frame.db.app_db,app_db);

return null;
});
});
/**
 * Remove all events queued for processing
 */
re_frame.core.purge_event_queue = (function re_frame$core$purge_event_queue(){
return re_frame.router.event_queue.re_frame$router$IEventQueue$purge$arity$1(null);
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
re_frame.core.add_post_event_callback = (function re_frame$core$add_post_event_callback(var_args){
var G__52382 = arguments.length;
switch (G__52382) {
case 1:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
}));

(re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.event_queue.re_frame$router$IEventQueue$add_post_event_callback$arity$3(null,id,f);
}));

(re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2);

re_frame.core.remove_post_event_callback = (function re_frame$core$remove_post_event_callback(id){
return re_frame.router.event_queue.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(null,id);
});
re_frame.core.register_handler = (function re_frame$core$register_handler(var_args){
var args__4795__auto__ = [];
var len__4789__auto___52423 = arguments.length;
var i__4790__auto___52424 = (0);
while(true){
if((i__4790__auto___52424 < len__4789__auto___52423)){
args__4795__auto__.push((arguments[i__4790__auto___52424]));

var G__52425 = (i__4790__auto___52424 + (1));
i__4790__auto___52424 = G__52425;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__52384_52426 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__52385_52427 = "re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of";
var G__52386_52428 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__52387_52429 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__52384_52426,G__52385_52427,G__52386_52428,G__52387_52429) : re_frame.core.console.call(null,G__52384_52426,G__52385_52427,G__52386_52428,G__52387_52429));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_event_db,args);
}));

(re_frame.core.register_handler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.core.register_handler.cljs$lang$applyTo = (function (seq52383){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52383));
}));

re_frame.core.register_sub = (function re_frame$core$register_sub(var_args){
var args__4795__auto__ = [];
var len__4789__auto___52430 = arguments.length;
var i__4790__auto___52431 = (0);
while(true){
if((i__4790__auto___52431 < len__4789__auto___52430)){
args__4795__auto__.push((arguments[i__4790__auto___52431]));

var G__52432 = (i__4790__auto___52431 + (1));
i__4790__auto___52431 = G__52432;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__52392_52433 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__52393_52434 = "re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of";
var G__52394_52435 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__52395_52436 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__52392_52433,G__52393_52434,G__52394_52435,G__52395_52436) : re_frame.core.console.call(null,G__52392_52433,G__52393_52434,G__52394_52435,G__52395_52436));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_sub_raw,args);
}));

(re_frame.core.register_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.core.register_sub.cljs$lang$applyTo = (function (seq52391){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52391));
}));


//# sourceMappingURL=re_frame.core.js.map
