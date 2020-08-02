goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43514 = arguments.length;
switch (G__43514) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43515 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43515 = (function (f,blockable,meta43516){
this.f = f;
this.blockable = blockable;
this.meta43516 = meta43516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43517,meta43516__$1){
var self__ = this;
var _43517__$1 = this;
return (new cljs.core.async.t_cljs$core$async43515(self__.f,self__.blockable,meta43516__$1));
}));

(cljs.core.async.t_cljs$core$async43515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43517){
var self__ = this;
var _43517__$1 = this;
return self__.meta43516;
}));

(cljs.core.async.t_cljs$core$async43515.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43515.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43516","meta43516",-2133805665,null)], null);
}));

(cljs.core.async.t_cljs$core$async43515.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43515");

(cljs.core.async.t_cljs$core$async43515.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43515");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43515.
 */
cljs.core.async.__GT_t_cljs$core$async43515 = (function cljs$core$async$__GT_t_cljs$core$async43515(f__$1,blockable__$1,meta43516){
return (new cljs.core.async.t_cljs$core$async43515(f__$1,blockable__$1,meta43516));
});

}

return (new cljs.core.async.t_cljs$core$async43515(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__43522 = arguments.length;
switch (G__43522) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43524 = arguments.length;
switch (G__43524) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__43526 = arguments.length;
switch (G__43526) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_44987 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44987) : fn1.call(null,val_44987));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44987) : fn1.call(null,val_44987));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43528 = arguments.length;
switch (G__43528) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___44993 = n;
var x_44994 = (0);
while(true){
if((x_44994 < n__4666__auto___44993)){
(a[x_44994] = x_44994);

var G__44995 = (x_44994 + (1));
x_44994 = G__44995;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43529 = (function (flag,meta43530){
this.flag = flag;
this.meta43530 = meta43530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43531,meta43530__$1){
var self__ = this;
var _43531__$1 = this;
return (new cljs.core.async.t_cljs$core$async43529(self__.flag,meta43530__$1));
}));

(cljs.core.async.t_cljs$core$async43529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43531){
var self__ = this;
var _43531__$1 = this;
return self__.meta43530;
}));

(cljs.core.async.t_cljs$core$async43529.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43529.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43529.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43529.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43530","meta43530",-2140630587,null)], null);
}));

(cljs.core.async.t_cljs$core$async43529.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43529");

(cljs.core.async.t_cljs$core$async43529.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43529");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43529.
 */
cljs.core.async.__GT_t_cljs$core$async43529 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43529(flag__$1,meta43530){
return (new cljs.core.async.t_cljs$core$async43529(flag__$1,meta43530));
});

}

return (new cljs.core.async.t_cljs$core$async43529(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43532 = (function (flag,cb,meta43533){
this.flag = flag;
this.cb = cb;
this.meta43533 = meta43533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43534,meta43533__$1){
var self__ = this;
var _43534__$1 = this;
return (new cljs.core.async.t_cljs$core$async43532(self__.flag,self__.cb,meta43533__$1));
}));

(cljs.core.async.t_cljs$core$async43532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43534){
var self__ = this;
var _43534__$1 = this;
return self__.meta43533;
}));

(cljs.core.async.t_cljs$core$async43532.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43532.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43533","meta43533",-1423319024,null)], null);
}));

(cljs.core.async.t_cljs$core$async43532.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43532");

(cljs.core.async.t_cljs$core$async43532.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43532");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43532.
 */
cljs.core.async.__GT_t_cljs$core$async43532 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43532(flag__$1,cb__$1,meta43533){
return (new cljs.core.async.t_cljs$core$async43532(flag__$1,cb__$1,meta43533));
});

}

return (new cljs.core.async.t_cljs$core$async43532(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43537_SHARP_){
var G__43541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43537_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43541) : fret.call(null,G__43541));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43538_SHARP_){
var G__43542 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43538_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43542) : fret.call(null,G__43542));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45001 = (i + (1));
i = G__45001;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___45005 = arguments.length;
var i__4790__auto___45006 = (0);
while(true){
if((i__4790__auto___45006 < len__4789__auto___45005)){
args__4795__auto__.push((arguments[i__4790__auto___45006]));

var G__45008 = (i__4790__auto___45006 + (1));
i__4790__auto___45006 = G__45008;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43547){
var map__43548 = p__43547;
var map__43548__$1 = (((((!((map__43548 == null))))?(((((map__43548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43548):map__43548);
var opts = map__43548__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43545){
var G__43546 = cljs.core.first(seq43545);
var seq43545__$1 = cljs.core.next(seq43545);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43546,seq43545__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43553 = arguments.length;
switch (G__43553) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43454__auto___45014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_43581){
var state_val_43582 = (state_43581[(1)]);
if((state_val_43582 === (7))){
var inst_43577 = (state_43581[(2)]);
var state_43581__$1 = state_43581;
var statearr_43583_45015 = state_43581__$1;
(statearr_43583_45015[(2)] = inst_43577);

(statearr_43583_45015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43582 === (1))){
var state_43581__$1 = state_43581;
var statearr_43584_45016 = state_43581__$1;
(statearr_43584_45016[(2)] = null);

(statearr_43584_45016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43582 === (4))){
var inst_43560 = (state_43581[(7)]);
var inst_43560__$1 = (state_43581[(2)]);
var inst_43561 = (inst_43560__$1 == null);
var state_43581__$1 = (function (){var statearr_43585 = state_43581;
(statearr_43585[(7)] = inst_43560__$1);

return statearr_43585;
})();
if(cljs.core.truth_(inst_43561)){
var statearr_43586_45018 = state_43581__$1;
(statearr_43586_45018[(1)] = (5));

} else {
var statearr_43587_45021 = state_43581__$1;
(statearr_43587_45021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43582 === (13))){
var state_43581__$1 = state_43581;
var statearr_43588_45022 = state_43581__$1;
(statearr_43588_45022[(2)] = null);

(statearr_43588_45022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43582 === (6))){
var inst_43560 = (state_43581[(7)]);
var state_43581__$1 = state_43581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43581__$1,(11),to,inst_43560);
} else {
if((state_val_43582 === (3))){
var inst_43579 = (state_43581[(2)]);
var state_43581__$1 = state_43581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43581__$1,inst_43579);
} else {
if((state_val_43582 === (12))){
var state_43581__$1 = state_43581;
var statearr_43589_45023 = state_43581__$1;
(statearr_43589_45023[(2)] = null);

(statearr_43589_45023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43582 === (2))){
var state_43581__$1 = state_43581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43581__$1,(4),from);
} else {
if((state_val_43582 === (11))){
var inst_43570 = (state_43581[(2)]);
var state_43581__$1 = state_43581;
if(cljs.core.truth_(inst_43570)){
var statearr_43590_45024 = state_43581__$1;
(statearr_43590_45024[(1)] = (12));

} else {
var statearr_43591_45025 = state_43581__$1;
(statearr_43591_45025[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43582 === (9))){
var state_43581__$1 = state_43581;
var statearr_43592_45026 = state_43581__$1;
(statearr_43592_45026[(2)] = null);

(statearr_43592_45026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43582 === (5))){
var state_43581__$1 = state_43581;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43593_45027 = state_43581__$1;
(statearr_43593_45027[(1)] = (8));

} else {
var statearr_43594_45028 = state_43581__$1;
(statearr_43594_45028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43582 === (14))){
var inst_43575 = (state_43581[(2)]);
var state_43581__$1 = state_43581;
var statearr_43595_45029 = state_43581__$1;
(statearr_43595_45029[(2)] = inst_43575);

(statearr_43595_45029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43582 === (10))){
var inst_43567 = (state_43581[(2)]);
var state_43581__$1 = state_43581;
var statearr_43596_45030 = state_43581__$1;
(statearr_43596_45030[(2)] = inst_43567);

(statearr_43596_45030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43582 === (8))){
var inst_43564 = cljs.core.async.close_BANG_(to);
var state_43581__$1 = state_43581;
var statearr_43597_45031 = state_43581__$1;
(statearr_43597_45031[(2)] = inst_43564);

(statearr_43597_45031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43389__auto__ = null;
var cljs$core$async$state_machine__43389__auto____0 = (function (){
var statearr_43598 = [null,null,null,null,null,null,null,null];
(statearr_43598[(0)] = cljs$core$async$state_machine__43389__auto__);

(statearr_43598[(1)] = (1));

return statearr_43598;
});
var cljs$core$async$state_machine__43389__auto____1 = (function (state_43581){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_43581);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e43599){if((e43599 instanceof Object)){
var ex__43392__auto__ = e43599;
var statearr_43600_45032 = state_43581;
(statearr_43600_45032[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43599;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45033 = state_43581;
state_43581 = G__45033;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$state_machine__43389__auto__ = function(state_43581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43389__auto____1.call(this,state_43581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43389__auto____0;
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43389__auto____1;
return cljs$core$async$state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43601 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43601[(6)] = c__43454__auto___45014);

return statearr_43601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__43602){
var vec__43603 = p__43602;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43603,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43603,(1),null);
var job = vec__43603;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43454__auto___45034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_43610){
var state_val_43611 = (state_43610[(1)]);
if((state_val_43611 === (1))){
var state_43610__$1 = state_43610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43610__$1,(2),res,v);
} else {
if((state_val_43611 === (2))){
var inst_43607 = (state_43610[(2)]);
var inst_43608 = cljs.core.async.close_BANG_(res);
var state_43610__$1 = (function (){var statearr_43612 = state_43610;
(statearr_43612[(7)] = inst_43607);

return statearr_43612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43610__$1,inst_43608);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____0 = (function (){
var statearr_43613 = [null,null,null,null,null,null,null,null];
(statearr_43613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__);

(statearr_43613[(1)] = (1));

return statearr_43613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____1 = (function (state_43610){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_43610);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e43614){if((e43614 instanceof Object)){
var ex__43392__auto__ = e43614;
var statearr_43615_45047 = state_43610;
(statearr_43615_45047[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43614;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45048 = state_43610;
state_43610 = G__45048;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__ = function(state_43610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____1.call(this,state_43610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43616 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43616[(6)] = c__43454__auto___45034);

return statearr_43616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43617){
var vec__43618 = p__43617;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43618,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43618,(1),null);
var job = vec__43618;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___45050 = n;
var __45051 = (0);
while(true){
if((__45051 < n__4666__auto___45050)){
var G__43621_45052 = type;
var G__43621_45053__$1 = (((G__43621_45052 instanceof cljs.core.Keyword))?G__43621_45052.fqn:null);
switch (G__43621_45053__$1) {
case "compute":
var c__43454__auto___45055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45051,c__43454__auto___45055,G__43621_45052,G__43621_45053__$1,n__4666__auto___45050,jobs,results,process,async){
return (function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = ((function (__45051,c__43454__auto___45055,G__43621_45052,G__43621_45053__$1,n__4666__auto___45050,jobs,results,process,async){
return (function (state_43634){
var state_val_43635 = (state_43634[(1)]);
if((state_val_43635 === (1))){
var state_43634__$1 = state_43634;
var statearr_43636_45057 = state_43634__$1;
(statearr_43636_45057[(2)] = null);

(statearr_43636_45057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43635 === (2))){
var state_43634__$1 = state_43634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43634__$1,(4),jobs);
} else {
if((state_val_43635 === (3))){
var inst_43632 = (state_43634[(2)]);
var state_43634__$1 = state_43634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43634__$1,inst_43632);
} else {
if((state_val_43635 === (4))){
var inst_43624 = (state_43634[(2)]);
var inst_43625 = process(inst_43624);
var state_43634__$1 = state_43634;
if(cljs.core.truth_(inst_43625)){
var statearr_43637_45058 = state_43634__$1;
(statearr_43637_45058[(1)] = (5));

} else {
var statearr_43638_45060 = state_43634__$1;
(statearr_43638_45060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43635 === (5))){
var state_43634__$1 = state_43634;
var statearr_43639_45062 = state_43634__$1;
(statearr_43639_45062[(2)] = null);

(statearr_43639_45062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43635 === (6))){
var state_43634__$1 = state_43634;
var statearr_43640_45063 = state_43634__$1;
(statearr_43640_45063[(2)] = null);

(statearr_43640_45063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43635 === (7))){
var inst_43630 = (state_43634[(2)]);
var state_43634__$1 = state_43634;
var statearr_43641_45064 = state_43634__$1;
(statearr_43641_45064[(2)] = inst_43630);

(statearr_43641_45064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45051,c__43454__auto___45055,G__43621_45052,G__43621_45053__$1,n__4666__auto___45050,jobs,results,process,async))
;
return ((function (__45051,switch__43388__auto__,c__43454__auto___45055,G__43621_45052,G__43621_45053__$1,n__4666__auto___45050,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____0 = (function (){
var statearr_43642 = [null,null,null,null,null,null,null];
(statearr_43642[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__);

(statearr_43642[(1)] = (1));

return statearr_43642;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____1 = (function (state_43634){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_43634);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e43643){if((e43643 instanceof Object)){
var ex__43392__auto__ = e43643;
var statearr_43644_45065 = state_43634;
(statearr_43644_45065[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43643;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45066 = state_43634;
state_43634 = G__45066;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__ = function(state_43634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____1.call(this,state_43634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__;
})()
;})(__45051,switch__43388__auto__,c__43454__auto___45055,G__43621_45052,G__43621_45053__$1,n__4666__auto___45050,jobs,results,process,async))
})();
var state__43456__auto__ = (function (){var statearr_43645 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43645[(6)] = c__43454__auto___45055);

return statearr_43645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
});})(__45051,c__43454__auto___45055,G__43621_45052,G__43621_45053__$1,n__4666__auto___45050,jobs,results,process,async))
);


break;
case "async":
var c__43454__auto___45067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45051,c__43454__auto___45067,G__43621_45052,G__43621_45053__$1,n__4666__auto___45050,jobs,results,process,async){
return (function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = ((function (__45051,c__43454__auto___45067,G__43621_45052,G__43621_45053__$1,n__4666__auto___45050,jobs,results,process,async){
return (function (state_43658){
var state_val_43659 = (state_43658[(1)]);
if((state_val_43659 === (1))){
var state_43658__$1 = state_43658;
var statearr_43660_45068 = state_43658__$1;
(statearr_43660_45068[(2)] = null);

(statearr_43660_45068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43659 === (2))){
var state_43658__$1 = state_43658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43658__$1,(4),jobs);
} else {
if((state_val_43659 === (3))){
var inst_43656 = (state_43658[(2)]);
var state_43658__$1 = state_43658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43658__$1,inst_43656);
} else {
if((state_val_43659 === (4))){
var inst_43648 = (state_43658[(2)]);
var inst_43649 = async(inst_43648);
var state_43658__$1 = state_43658;
if(cljs.core.truth_(inst_43649)){
var statearr_43661_45069 = state_43658__$1;
(statearr_43661_45069[(1)] = (5));

} else {
var statearr_43662_45070 = state_43658__$1;
(statearr_43662_45070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43659 === (5))){
var state_43658__$1 = state_43658;
var statearr_43663_45071 = state_43658__$1;
(statearr_43663_45071[(2)] = null);

(statearr_43663_45071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43659 === (6))){
var state_43658__$1 = state_43658;
var statearr_43664_45072 = state_43658__$1;
(statearr_43664_45072[(2)] = null);

(statearr_43664_45072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43659 === (7))){
var inst_43654 = (state_43658[(2)]);
var state_43658__$1 = state_43658;
var statearr_43665_45073 = state_43658__$1;
(statearr_43665_45073[(2)] = inst_43654);

(statearr_43665_45073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45051,c__43454__auto___45067,G__43621_45052,G__43621_45053__$1,n__4666__auto___45050,jobs,results,process,async))
;
return ((function (__45051,switch__43388__auto__,c__43454__auto___45067,G__43621_45052,G__43621_45053__$1,n__4666__auto___45050,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____0 = (function (){
var statearr_43666 = [null,null,null,null,null,null,null];
(statearr_43666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__);

(statearr_43666[(1)] = (1));

return statearr_43666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____1 = (function (state_43658){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_43658);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e43667){if((e43667 instanceof Object)){
var ex__43392__auto__ = e43667;
var statearr_43668_45074 = state_43658;
(statearr_43668_45074[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45075 = state_43658;
state_43658 = G__45075;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__ = function(state_43658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____1.call(this,state_43658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__;
})()
;})(__45051,switch__43388__auto__,c__43454__auto___45067,G__43621_45052,G__43621_45053__$1,n__4666__auto___45050,jobs,results,process,async))
})();
var state__43456__auto__ = (function (){var statearr_43669 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43669[(6)] = c__43454__auto___45067);

return statearr_43669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
});})(__45051,c__43454__auto___45067,G__43621_45052,G__43621_45053__$1,n__4666__auto___45050,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43621_45053__$1)].join('')));

}

var G__45076 = (__45051 + (1));
__45051 = G__45076;
continue;
} else {
}
break;
}

var c__43454__auto___45077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_43691){
var state_val_43692 = (state_43691[(1)]);
if((state_val_43692 === (7))){
var inst_43687 = (state_43691[(2)]);
var state_43691__$1 = state_43691;
var statearr_43693_45078 = state_43691__$1;
(statearr_43693_45078[(2)] = inst_43687);

(statearr_43693_45078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43692 === (1))){
var state_43691__$1 = state_43691;
var statearr_43694_45079 = state_43691__$1;
(statearr_43694_45079[(2)] = null);

(statearr_43694_45079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43692 === (4))){
var inst_43672 = (state_43691[(7)]);
var inst_43672__$1 = (state_43691[(2)]);
var inst_43673 = (inst_43672__$1 == null);
var state_43691__$1 = (function (){var statearr_43695 = state_43691;
(statearr_43695[(7)] = inst_43672__$1);

return statearr_43695;
})();
if(cljs.core.truth_(inst_43673)){
var statearr_43696_45080 = state_43691__$1;
(statearr_43696_45080[(1)] = (5));

} else {
var statearr_43697_45081 = state_43691__$1;
(statearr_43697_45081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43692 === (6))){
var inst_43677 = (state_43691[(8)]);
var inst_43672 = (state_43691[(7)]);
var inst_43677__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43678 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43679 = [inst_43672,inst_43677__$1];
var inst_43680 = (new cljs.core.PersistentVector(null,2,(5),inst_43678,inst_43679,null));
var state_43691__$1 = (function (){var statearr_43698 = state_43691;
(statearr_43698[(8)] = inst_43677__$1);

return statearr_43698;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43691__$1,(8),jobs,inst_43680);
} else {
if((state_val_43692 === (3))){
var inst_43689 = (state_43691[(2)]);
var state_43691__$1 = state_43691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43691__$1,inst_43689);
} else {
if((state_val_43692 === (2))){
var state_43691__$1 = state_43691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43691__$1,(4),from);
} else {
if((state_val_43692 === (9))){
var inst_43684 = (state_43691[(2)]);
var state_43691__$1 = (function (){var statearr_43699 = state_43691;
(statearr_43699[(9)] = inst_43684);

return statearr_43699;
})();
var statearr_43700_45082 = state_43691__$1;
(statearr_43700_45082[(2)] = null);

(statearr_43700_45082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43692 === (5))){
var inst_43675 = cljs.core.async.close_BANG_(jobs);
var state_43691__$1 = state_43691;
var statearr_43701_45083 = state_43691__$1;
(statearr_43701_45083[(2)] = inst_43675);

(statearr_43701_45083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43692 === (8))){
var inst_43677 = (state_43691[(8)]);
var inst_43682 = (state_43691[(2)]);
var state_43691__$1 = (function (){var statearr_43702 = state_43691;
(statearr_43702[(10)] = inst_43682);

return statearr_43702;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43691__$1,(9),results,inst_43677);
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____0 = (function (){
var statearr_43703 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__);

(statearr_43703[(1)] = (1));

return statearr_43703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____1 = (function (state_43691){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_43691);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e43704){if((e43704 instanceof Object)){
var ex__43392__auto__ = e43704;
var statearr_43705_45084 = state_43691;
(statearr_43705_45084[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45085 = state_43691;
state_43691 = G__45085;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__ = function(state_43691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____1.call(this,state_43691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43706 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43706[(6)] = c__43454__auto___45077);

return statearr_43706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


var c__43454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_43744){
var state_val_43745 = (state_43744[(1)]);
if((state_val_43745 === (7))){
var inst_43740 = (state_43744[(2)]);
var state_43744__$1 = state_43744;
var statearr_43746_45086 = state_43744__$1;
(statearr_43746_45086[(2)] = inst_43740);

(statearr_43746_45086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (20))){
var state_43744__$1 = state_43744;
var statearr_43747_45087 = state_43744__$1;
(statearr_43747_45087[(2)] = null);

(statearr_43747_45087[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (1))){
var state_43744__$1 = state_43744;
var statearr_43748_45088 = state_43744__$1;
(statearr_43748_45088[(2)] = null);

(statearr_43748_45088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (4))){
var inst_43709 = (state_43744[(7)]);
var inst_43709__$1 = (state_43744[(2)]);
var inst_43710 = (inst_43709__$1 == null);
var state_43744__$1 = (function (){var statearr_43749 = state_43744;
(statearr_43749[(7)] = inst_43709__$1);

return statearr_43749;
})();
if(cljs.core.truth_(inst_43710)){
var statearr_43750_45089 = state_43744__$1;
(statearr_43750_45089[(1)] = (5));

} else {
var statearr_43751_45090 = state_43744__$1;
(statearr_43751_45090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (15))){
var inst_43722 = (state_43744[(8)]);
var state_43744__$1 = state_43744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43744__$1,(18),to,inst_43722);
} else {
if((state_val_43745 === (21))){
var inst_43735 = (state_43744[(2)]);
var state_43744__$1 = state_43744;
var statearr_43752_45091 = state_43744__$1;
(statearr_43752_45091[(2)] = inst_43735);

(statearr_43752_45091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (13))){
var inst_43737 = (state_43744[(2)]);
var state_43744__$1 = (function (){var statearr_43753 = state_43744;
(statearr_43753[(9)] = inst_43737);

return statearr_43753;
})();
var statearr_43754_45092 = state_43744__$1;
(statearr_43754_45092[(2)] = null);

(statearr_43754_45092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (6))){
var inst_43709 = (state_43744[(7)]);
var state_43744__$1 = state_43744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43744__$1,(11),inst_43709);
} else {
if((state_val_43745 === (17))){
var inst_43730 = (state_43744[(2)]);
var state_43744__$1 = state_43744;
if(cljs.core.truth_(inst_43730)){
var statearr_43755_45093 = state_43744__$1;
(statearr_43755_45093[(1)] = (19));

} else {
var statearr_43756_45094 = state_43744__$1;
(statearr_43756_45094[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (3))){
var inst_43742 = (state_43744[(2)]);
var state_43744__$1 = state_43744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43744__$1,inst_43742);
} else {
if((state_val_43745 === (12))){
var inst_43719 = (state_43744[(10)]);
var state_43744__$1 = state_43744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43744__$1,(14),inst_43719);
} else {
if((state_val_43745 === (2))){
var state_43744__$1 = state_43744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43744__$1,(4),results);
} else {
if((state_val_43745 === (19))){
var state_43744__$1 = state_43744;
var statearr_43757_45095 = state_43744__$1;
(statearr_43757_45095[(2)] = null);

(statearr_43757_45095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (11))){
var inst_43719 = (state_43744[(2)]);
var state_43744__$1 = (function (){var statearr_43758 = state_43744;
(statearr_43758[(10)] = inst_43719);

return statearr_43758;
})();
var statearr_43759_45096 = state_43744__$1;
(statearr_43759_45096[(2)] = null);

(statearr_43759_45096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (9))){
var state_43744__$1 = state_43744;
var statearr_43760_45097 = state_43744__$1;
(statearr_43760_45097[(2)] = null);

(statearr_43760_45097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (5))){
var state_43744__$1 = state_43744;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43761_45098 = state_43744__$1;
(statearr_43761_45098[(1)] = (8));

} else {
var statearr_43762_45099 = state_43744__$1;
(statearr_43762_45099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (14))){
var inst_43722 = (state_43744[(8)]);
var inst_43722__$1 = (state_43744[(2)]);
var inst_43723 = (inst_43722__$1 == null);
var inst_43724 = cljs.core.not(inst_43723);
var state_43744__$1 = (function (){var statearr_43763 = state_43744;
(statearr_43763[(8)] = inst_43722__$1);

return statearr_43763;
})();
if(inst_43724){
var statearr_43764_45100 = state_43744__$1;
(statearr_43764_45100[(1)] = (15));

} else {
var statearr_43765_45101 = state_43744__$1;
(statearr_43765_45101[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (16))){
var state_43744__$1 = state_43744;
var statearr_43766_45102 = state_43744__$1;
(statearr_43766_45102[(2)] = false);

(statearr_43766_45102[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (10))){
var inst_43716 = (state_43744[(2)]);
var state_43744__$1 = state_43744;
var statearr_43767_45103 = state_43744__$1;
(statearr_43767_45103[(2)] = inst_43716);

(statearr_43767_45103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (18))){
var inst_43727 = (state_43744[(2)]);
var state_43744__$1 = state_43744;
var statearr_43768_45104 = state_43744__$1;
(statearr_43768_45104[(2)] = inst_43727);

(statearr_43768_45104[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43745 === (8))){
var inst_43713 = cljs.core.async.close_BANG_(to);
var state_43744__$1 = state_43744;
var statearr_43769_45105 = state_43744__$1;
(statearr_43769_45105[(2)] = inst_43713);

(statearr_43769_45105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____0 = (function (){
var statearr_43770 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43770[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__);

(statearr_43770[(1)] = (1));

return statearr_43770;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____1 = (function (state_43744){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_43744);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e43771){if((e43771 instanceof Object)){
var ex__43392__auto__ = e43771;
var statearr_43772_45106 = state_43744;
(statearr_43772_45106[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45107 = state_43744;
state_43744 = G__45107;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__ = function(state_43744){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____1.call(this,state_43744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43389__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43773 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43773[(6)] = c__43454__auto__);

return statearr_43773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));

return c__43454__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__43775 = arguments.length;
switch (G__43775) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__43777 = arguments.length;
switch (G__43777) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__43779 = arguments.length;
switch (G__43779) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43454__auto___45111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_43805){
var state_val_43806 = (state_43805[(1)]);
if((state_val_43806 === (7))){
var inst_43801 = (state_43805[(2)]);
var state_43805__$1 = state_43805;
var statearr_43807_45112 = state_43805__$1;
(statearr_43807_45112[(2)] = inst_43801);

(statearr_43807_45112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (1))){
var state_43805__$1 = state_43805;
var statearr_43808_45113 = state_43805__$1;
(statearr_43808_45113[(2)] = null);

(statearr_43808_45113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (4))){
var inst_43782 = (state_43805[(7)]);
var inst_43782__$1 = (state_43805[(2)]);
var inst_43783 = (inst_43782__$1 == null);
var state_43805__$1 = (function (){var statearr_43809 = state_43805;
(statearr_43809[(7)] = inst_43782__$1);

return statearr_43809;
})();
if(cljs.core.truth_(inst_43783)){
var statearr_43810_45114 = state_43805__$1;
(statearr_43810_45114[(1)] = (5));

} else {
var statearr_43811_45115 = state_43805__$1;
(statearr_43811_45115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (13))){
var state_43805__$1 = state_43805;
var statearr_43812_45116 = state_43805__$1;
(statearr_43812_45116[(2)] = null);

(statearr_43812_45116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (6))){
var inst_43782 = (state_43805[(7)]);
var inst_43788 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43782) : p.call(null,inst_43782));
var state_43805__$1 = state_43805;
if(cljs.core.truth_(inst_43788)){
var statearr_43813_45117 = state_43805__$1;
(statearr_43813_45117[(1)] = (9));

} else {
var statearr_43814_45118 = state_43805__$1;
(statearr_43814_45118[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (3))){
var inst_43803 = (state_43805[(2)]);
var state_43805__$1 = state_43805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43805__$1,inst_43803);
} else {
if((state_val_43806 === (12))){
var state_43805__$1 = state_43805;
var statearr_43815_45119 = state_43805__$1;
(statearr_43815_45119[(2)] = null);

(statearr_43815_45119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (2))){
var state_43805__$1 = state_43805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43805__$1,(4),ch);
} else {
if((state_val_43806 === (11))){
var inst_43782 = (state_43805[(7)]);
var inst_43792 = (state_43805[(2)]);
var state_43805__$1 = state_43805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43805__$1,(8),inst_43792,inst_43782);
} else {
if((state_val_43806 === (9))){
var state_43805__$1 = state_43805;
var statearr_43816_45120 = state_43805__$1;
(statearr_43816_45120[(2)] = tc);

(statearr_43816_45120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (5))){
var inst_43785 = cljs.core.async.close_BANG_(tc);
var inst_43786 = cljs.core.async.close_BANG_(fc);
var state_43805__$1 = (function (){var statearr_43817 = state_43805;
(statearr_43817[(8)] = inst_43785);

return statearr_43817;
})();
var statearr_43818_45121 = state_43805__$1;
(statearr_43818_45121[(2)] = inst_43786);

(statearr_43818_45121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (14))){
var inst_43799 = (state_43805[(2)]);
var state_43805__$1 = state_43805;
var statearr_43819_45122 = state_43805__$1;
(statearr_43819_45122[(2)] = inst_43799);

(statearr_43819_45122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (10))){
var state_43805__$1 = state_43805;
var statearr_43820_45123 = state_43805__$1;
(statearr_43820_45123[(2)] = fc);

(statearr_43820_45123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43806 === (8))){
var inst_43794 = (state_43805[(2)]);
var state_43805__$1 = state_43805;
if(cljs.core.truth_(inst_43794)){
var statearr_43821_45124 = state_43805__$1;
(statearr_43821_45124[(1)] = (12));

} else {
var statearr_43822_45125 = state_43805__$1;
(statearr_43822_45125[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43389__auto__ = null;
var cljs$core$async$state_machine__43389__auto____0 = (function (){
var statearr_43823 = [null,null,null,null,null,null,null,null,null];
(statearr_43823[(0)] = cljs$core$async$state_machine__43389__auto__);

(statearr_43823[(1)] = (1));

return statearr_43823;
});
var cljs$core$async$state_machine__43389__auto____1 = (function (state_43805){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_43805);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e43824){if((e43824 instanceof Object)){
var ex__43392__auto__ = e43824;
var statearr_43825_45126 = state_43805;
(statearr_43825_45126[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45127 = state_43805;
state_43805 = G__45127;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$state_machine__43389__auto__ = function(state_43805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43389__auto____1.call(this,state_43805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43389__auto____0;
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43389__auto____1;
return cljs$core$async$state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43826 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43826[(6)] = c__43454__auto___45111);

return statearr_43826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_43847){
var state_val_43848 = (state_43847[(1)]);
if((state_val_43848 === (7))){
var inst_43843 = (state_43847[(2)]);
var state_43847__$1 = state_43847;
var statearr_43849_45128 = state_43847__$1;
(statearr_43849_45128[(2)] = inst_43843);

(statearr_43849_45128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43848 === (1))){
var inst_43827 = init;
var state_43847__$1 = (function (){var statearr_43850 = state_43847;
(statearr_43850[(7)] = inst_43827);

return statearr_43850;
})();
var statearr_43851_45129 = state_43847__$1;
(statearr_43851_45129[(2)] = null);

(statearr_43851_45129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43848 === (4))){
var inst_43830 = (state_43847[(8)]);
var inst_43830__$1 = (state_43847[(2)]);
var inst_43831 = (inst_43830__$1 == null);
var state_43847__$1 = (function (){var statearr_43852 = state_43847;
(statearr_43852[(8)] = inst_43830__$1);

return statearr_43852;
})();
if(cljs.core.truth_(inst_43831)){
var statearr_43853_45130 = state_43847__$1;
(statearr_43853_45130[(1)] = (5));

} else {
var statearr_43854_45131 = state_43847__$1;
(statearr_43854_45131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43848 === (6))){
var inst_43830 = (state_43847[(8)]);
var inst_43827 = (state_43847[(7)]);
var inst_43834 = (state_43847[(9)]);
var inst_43834__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43827,inst_43830) : f.call(null,inst_43827,inst_43830));
var inst_43835 = cljs.core.reduced_QMARK_(inst_43834__$1);
var state_43847__$1 = (function (){var statearr_43855 = state_43847;
(statearr_43855[(9)] = inst_43834__$1);

return statearr_43855;
})();
if(inst_43835){
var statearr_43856_45132 = state_43847__$1;
(statearr_43856_45132[(1)] = (8));

} else {
var statearr_43857_45133 = state_43847__$1;
(statearr_43857_45133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43848 === (3))){
var inst_43845 = (state_43847[(2)]);
var state_43847__$1 = state_43847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43847__$1,inst_43845);
} else {
if((state_val_43848 === (2))){
var state_43847__$1 = state_43847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43847__$1,(4),ch);
} else {
if((state_val_43848 === (9))){
var inst_43834 = (state_43847[(9)]);
var inst_43827 = inst_43834;
var state_43847__$1 = (function (){var statearr_43858 = state_43847;
(statearr_43858[(7)] = inst_43827);

return statearr_43858;
})();
var statearr_43859_45134 = state_43847__$1;
(statearr_43859_45134[(2)] = null);

(statearr_43859_45134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43848 === (5))){
var inst_43827 = (state_43847[(7)]);
var state_43847__$1 = state_43847;
var statearr_43860_45135 = state_43847__$1;
(statearr_43860_45135[(2)] = inst_43827);

(statearr_43860_45135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43848 === (10))){
var inst_43841 = (state_43847[(2)]);
var state_43847__$1 = state_43847;
var statearr_43861_45136 = state_43847__$1;
(statearr_43861_45136[(2)] = inst_43841);

(statearr_43861_45136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43848 === (8))){
var inst_43834 = (state_43847[(9)]);
var inst_43837 = cljs.core.deref(inst_43834);
var state_43847__$1 = state_43847;
var statearr_43862_45137 = state_43847__$1;
(statearr_43862_45137[(2)] = inst_43837);

(statearr_43862_45137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43389__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43389__auto____0 = (function (){
var statearr_43863 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43863[(0)] = cljs$core$async$reduce_$_state_machine__43389__auto__);

(statearr_43863[(1)] = (1));

return statearr_43863;
});
var cljs$core$async$reduce_$_state_machine__43389__auto____1 = (function (state_43847){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_43847);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e43864){if((e43864 instanceof Object)){
var ex__43392__auto__ = e43864;
var statearr_43865_45138 = state_43847;
(statearr_43865_45138[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43864;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45139 = state_43847;
state_43847 = G__45139;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43389__auto__ = function(state_43847){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43389__auto____1.call(this,state_43847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43389__auto____0;
cljs$core$async$reduce_$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43389__auto____1;
return cljs$core$async$reduce_$_state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43866 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43866[(6)] = c__43454__auto__);

return statearr_43866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));

return c__43454__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_43872){
var state_val_43873 = (state_43872[(1)]);
if((state_val_43873 === (1))){
var inst_43867 = cljs.core.async.reduce(f__$1,init,ch);
var state_43872__$1 = state_43872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43872__$1,(2),inst_43867);
} else {
if((state_val_43873 === (2))){
var inst_43869 = (state_43872[(2)]);
var inst_43870 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43869) : f__$1.call(null,inst_43869));
var state_43872__$1 = state_43872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43872__$1,inst_43870);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43389__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43389__auto____0 = (function (){
var statearr_43874 = [null,null,null,null,null,null,null];
(statearr_43874[(0)] = cljs$core$async$transduce_$_state_machine__43389__auto__);

(statearr_43874[(1)] = (1));

return statearr_43874;
});
var cljs$core$async$transduce_$_state_machine__43389__auto____1 = (function (state_43872){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_43872);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e43875){if((e43875 instanceof Object)){
var ex__43392__auto__ = e43875;
var statearr_43876_45150 = state_43872;
(statearr_43876_45150[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43875;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45151 = state_43872;
state_43872 = G__45151;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43389__auto__ = function(state_43872){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43389__auto____1.call(this,state_43872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43389__auto____0;
cljs$core$async$transduce_$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43389__auto____1;
return cljs$core$async$transduce_$_state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43877 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43877[(6)] = c__43454__auto__);

return statearr_43877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));

return c__43454__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__43879 = arguments.length;
switch (G__43879) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_43904){
var state_val_43905 = (state_43904[(1)]);
if((state_val_43905 === (7))){
var inst_43886 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
var statearr_43906_45159 = state_43904__$1;
(statearr_43906_45159[(2)] = inst_43886);

(statearr_43906_45159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (1))){
var inst_43880 = cljs.core.seq(coll);
var inst_43881 = inst_43880;
var state_43904__$1 = (function (){var statearr_43907 = state_43904;
(statearr_43907[(7)] = inst_43881);

return statearr_43907;
})();
var statearr_43908_45160 = state_43904__$1;
(statearr_43908_45160[(2)] = null);

(statearr_43908_45160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (4))){
var inst_43881 = (state_43904[(7)]);
var inst_43884 = cljs.core.first(inst_43881);
var state_43904__$1 = state_43904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43904__$1,(7),ch,inst_43884);
} else {
if((state_val_43905 === (13))){
var inst_43898 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
var statearr_43909_45162 = state_43904__$1;
(statearr_43909_45162[(2)] = inst_43898);

(statearr_43909_45162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (6))){
var inst_43889 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
if(cljs.core.truth_(inst_43889)){
var statearr_43910_45163 = state_43904__$1;
(statearr_43910_45163[(1)] = (8));

} else {
var statearr_43911_45164 = state_43904__$1;
(statearr_43911_45164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (3))){
var inst_43902 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43904__$1,inst_43902);
} else {
if((state_val_43905 === (12))){
var state_43904__$1 = state_43904;
var statearr_43912_45165 = state_43904__$1;
(statearr_43912_45165[(2)] = null);

(statearr_43912_45165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (2))){
var inst_43881 = (state_43904[(7)]);
var state_43904__$1 = state_43904;
if(cljs.core.truth_(inst_43881)){
var statearr_43913_45166 = state_43904__$1;
(statearr_43913_45166[(1)] = (4));

} else {
var statearr_43914_45167 = state_43904__$1;
(statearr_43914_45167[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (11))){
var inst_43895 = cljs.core.async.close_BANG_(ch);
var state_43904__$1 = state_43904;
var statearr_43915_45168 = state_43904__$1;
(statearr_43915_45168[(2)] = inst_43895);

(statearr_43915_45168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (9))){
var state_43904__$1 = state_43904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43916_45169 = state_43904__$1;
(statearr_43916_45169[(1)] = (11));

} else {
var statearr_43917_45170 = state_43904__$1;
(statearr_43917_45170[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (5))){
var inst_43881 = (state_43904[(7)]);
var state_43904__$1 = state_43904;
var statearr_43918_45171 = state_43904__$1;
(statearr_43918_45171[(2)] = inst_43881);

(statearr_43918_45171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (10))){
var inst_43900 = (state_43904[(2)]);
var state_43904__$1 = state_43904;
var statearr_43919_45172 = state_43904__$1;
(statearr_43919_45172[(2)] = inst_43900);

(statearr_43919_45172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43905 === (8))){
var inst_43881 = (state_43904[(7)]);
var inst_43891 = cljs.core.next(inst_43881);
var inst_43881__$1 = inst_43891;
var state_43904__$1 = (function (){var statearr_43920 = state_43904;
(statearr_43920[(7)] = inst_43881__$1);

return statearr_43920;
})();
var statearr_43921_45173 = state_43904__$1;
(statearr_43921_45173[(2)] = null);

(statearr_43921_45173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43389__auto__ = null;
var cljs$core$async$state_machine__43389__auto____0 = (function (){
var statearr_43922 = [null,null,null,null,null,null,null,null];
(statearr_43922[(0)] = cljs$core$async$state_machine__43389__auto__);

(statearr_43922[(1)] = (1));

return statearr_43922;
});
var cljs$core$async$state_machine__43389__auto____1 = (function (state_43904){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_43904);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e43923){if((e43923 instanceof Object)){
var ex__43392__auto__ = e43923;
var statearr_43924_45174 = state_43904;
(statearr_43924_45174[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43923;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45175 = state_43904;
state_43904 = G__45175;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$state_machine__43389__auto__ = function(state_43904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43389__auto____1.call(this,state_43904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43389__auto____0;
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43389__auto____1;
return cljs$core$async$state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_43925 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_43925[(6)] = c__43454__auto__);

return statearr_43925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));

return c__43454__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43926 = (function (ch,cs,meta43927){
this.ch = ch;
this.cs = cs;
this.meta43927 = meta43927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43928,meta43927__$1){
var self__ = this;
var _43928__$1 = this;
return (new cljs.core.async.t_cljs$core$async43926(self__.ch,self__.cs,meta43927__$1));
}));

(cljs.core.async.t_cljs$core$async43926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43928){
var self__ = this;
var _43928__$1 = this;
return self__.meta43927;
}));

(cljs.core.async.t_cljs$core$async43926.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43926.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43926.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43926.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43926.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43927","meta43927",972878784,null)], null);
}));

(cljs.core.async.t_cljs$core$async43926.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43926");

(cljs.core.async.t_cljs$core$async43926.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async43926");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43926.
 */
cljs.core.async.__GT_t_cljs$core$async43926 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43926(ch__$1,cs__$1,meta43927){
return (new cljs.core.async.t_cljs$core$async43926(ch__$1,cs__$1,meta43927));
});

}

return (new cljs.core.async.t_cljs$core$async43926(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43454__auto___45180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_44063){
var state_val_44064 = (state_44063[(1)]);
if((state_val_44064 === (7))){
var inst_44059 = (state_44063[(2)]);
var state_44063__$1 = state_44063;
var statearr_44065_45181 = state_44063__$1;
(statearr_44065_45181[(2)] = inst_44059);

(statearr_44065_45181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (20))){
var inst_43962 = (state_44063[(7)]);
var inst_43974 = cljs.core.first(inst_43962);
var inst_43975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43974,(0),null);
var inst_43976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43974,(1),null);
var state_44063__$1 = (function (){var statearr_44066 = state_44063;
(statearr_44066[(8)] = inst_43975);

return statearr_44066;
})();
if(cljs.core.truth_(inst_43976)){
var statearr_44067_45184 = state_44063__$1;
(statearr_44067_45184[(1)] = (22));

} else {
var statearr_44068_45185 = state_44063__$1;
(statearr_44068_45185[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (27))){
var inst_44011 = (state_44063[(9)]);
var inst_44006 = (state_44063[(10)]);
var inst_44004 = (state_44063[(11)]);
var inst_43931 = (state_44063[(12)]);
var inst_44011__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44004,inst_44006);
var inst_44012 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44011__$1,inst_43931,done);
var state_44063__$1 = (function (){var statearr_44069 = state_44063;
(statearr_44069[(9)] = inst_44011__$1);

return statearr_44069;
})();
if(cljs.core.truth_(inst_44012)){
var statearr_44070_45189 = state_44063__$1;
(statearr_44070_45189[(1)] = (30));

} else {
var statearr_44071_45190 = state_44063__$1;
(statearr_44071_45190[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (1))){
var state_44063__$1 = state_44063;
var statearr_44072_45195 = state_44063__$1;
(statearr_44072_45195[(2)] = null);

(statearr_44072_45195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (24))){
var inst_43962 = (state_44063[(7)]);
var inst_43981 = (state_44063[(2)]);
var inst_43982 = cljs.core.next(inst_43962);
var inst_43940 = inst_43982;
var inst_43941 = null;
var inst_43942 = (0);
var inst_43943 = (0);
var state_44063__$1 = (function (){var statearr_44073 = state_44063;
(statearr_44073[(13)] = inst_43941);

(statearr_44073[(14)] = inst_43942);

(statearr_44073[(15)] = inst_43943);

(statearr_44073[(16)] = inst_43940);

(statearr_44073[(17)] = inst_43981);

return statearr_44073;
})();
var statearr_44074_45196 = state_44063__$1;
(statearr_44074_45196[(2)] = null);

(statearr_44074_45196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (39))){
var state_44063__$1 = state_44063;
var statearr_44078_45197 = state_44063__$1;
(statearr_44078_45197[(2)] = null);

(statearr_44078_45197[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (4))){
var inst_43931 = (state_44063[(12)]);
var inst_43931__$1 = (state_44063[(2)]);
var inst_43932 = (inst_43931__$1 == null);
var state_44063__$1 = (function (){var statearr_44079 = state_44063;
(statearr_44079[(12)] = inst_43931__$1);

return statearr_44079;
})();
if(cljs.core.truth_(inst_43932)){
var statearr_44080_45198 = state_44063__$1;
(statearr_44080_45198[(1)] = (5));

} else {
var statearr_44081_45199 = state_44063__$1;
(statearr_44081_45199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (15))){
var inst_43941 = (state_44063[(13)]);
var inst_43942 = (state_44063[(14)]);
var inst_43943 = (state_44063[(15)]);
var inst_43940 = (state_44063[(16)]);
var inst_43958 = (state_44063[(2)]);
var inst_43959 = (inst_43943 + (1));
var tmp44075 = inst_43941;
var tmp44076 = inst_43942;
var tmp44077 = inst_43940;
var inst_43940__$1 = tmp44077;
var inst_43941__$1 = tmp44075;
var inst_43942__$1 = tmp44076;
var inst_43943__$1 = inst_43959;
var state_44063__$1 = (function (){var statearr_44082 = state_44063;
(statearr_44082[(18)] = inst_43958);

(statearr_44082[(13)] = inst_43941__$1);

(statearr_44082[(14)] = inst_43942__$1);

(statearr_44082[(15)] = inst_43943__$1);

(statearr_44082[(16)] = inst_43940__$1);

return statearr_44082;
})();
var statearr_44083_45200 = state_44063__$1;
(statearr_44083_45200[(2)] = null);

(statearr_44083_45200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (21))){
var inst_43985 = (state_44063[(2)]);
var state_44063__$1 = state_44063;
var statearr_44087_45201 = state_44063__$1;
(statearr_44087_45201[(2)] = inst_43985);

(statearr_44087_45201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (31))){
var inst_44011 = (state_44063[(9)]);
var inst_44015 = done(null);
var inst_44016 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44011);
var state_44063__$1 = (function (){var statearr_44088 = state_44063;
(statearr_44088[(19)] = inst_44015);

return statearr_44088;
})();
var statearr_44089_45202 = state_44063__$1;
(statearr_44089_45202[(2)] = inst_44016);

(statearr_44089_45202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (32))){
var inst_44005 = (state_44063[(20)]);
var inst_44006 = (state_44063[(10)]);
var inst_44004 = (state_44063[(11)]);
var inst_44003 = (state_44063[(21)]);
var inst_44018 = (state_44063[(2)]);
var inst_44019 = (inst_44006 + (1));
var tmp44084 = inst_44005;
var tmp44085 = inst_44004;
var tmp44086 = inst_44003;
var inst_44003__$1 = tmp44086;
var inst_44004__$1 = tmp44085;
var inst_44005__$1 = tmp44084;
var inst_44006__$1 = inst_44019;
var state_44063__$1 = (function (){var statearr_44090 = state_44063;
(statearr_44090[(20)] = inst_44005__$1);

(statearr_44090[(22)] = inst_44018);

(statearr_44090[(10)] = inst_44006__$1);

(statearr_44090[(11)] = inst_44004__$1);

(statearr_44090[(21)] = inst_44003__$1);

return statearr_44090;
})();
var statearr_44091_45203 = state_44063__$1;
(statearr_44091_45203[(2)] = null);

(statearr_44091_45203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (40))){
var inst_44031 = (state_44063[(23)]);
var inst_44035 = done(null);
var inst_44036 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44031);
var state_44063__$1 = (function (){var statearr_44092 = state_44063;
(statearr_44092[(24)] = inst_44035);

return statearr_44092;
})();
var statearr_44093_45205 = state_44063__$1;
(statearr_44093_45205[(2)] = inst_44036);

(statearr_44093_45205[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (33))){
var inst_44022 = (state_44063[(25)]);
var inst_44024 = cljs.core.chunked_seq_QMARK_(inst_44022);
var state_44063__$1 = state_44063;
if(inst_44024){
var statearr_44094_45208 = state_44063__$1;
(statearr_44094_45208[(1)] = (36));

} else {
var statearr_44095_45209 = state_44063__$1;
(statearr_44095_45209[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (13))){
var inst_43952 = (state_44063[(26)]);
var inst_43955 = cljs.core.async.close_BANG_(inst_43952);
var state_44063__$1 = state_44063;
var statearr_44096_45214 = state_44063__$1;
(statearr_44096_45214[(2)] = inst_43955);

(statearr_44096_45214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (22))){
var inst_43975 = (state_44063[(8)]);
var inst_43978 = cljs.core.async.close_BANG_(inst_43975);
var state_44063__$1 = state_44063;
var statearr_44097_45219 = state_44063__$1;
(statearr_44097_45219[(2)] = inst_43978);

(statearr_44097_45219[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (36))){
var inst_44022 = (state_44063[(25)]);
var inst_44026 = cljs.core.chunk_first(inst_44022);
var inst_44027 = cljs.core.chunk_rest(inst_44022);
var inst_44028 = cljs.core.count(inst_44026);
var inst_44003 = inst_44027;
var inst_44004 = inst_44026;
var inst_44005 = inst_44028;
var inst_44006 = (0);
var state_44063__$1 = (function (){var statearr_44098 = state_44063;
(statearr_44098[(20)] = inst_44005);

(statearr_44098[(10)] = inst_44006);

(statearr_44098[(11)] = inst_44004);

(statearr_44098[(21)] = inst_44003);

return statearr_44098;
})();
var statearr_44099_45226 = state_44063__$1;
(statearr_44099_45226[(2)] = null);

(statearr_44099_45226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (41))){
var inst_44022 = (state_44063[(25)]);
var inst_44038 = (state_44063[(2)]);
var inst_44039 = cljs.core.next(inst_44022);
var inst_44003 = inst_44039;
var inst_44004 = null;
var inst_44005 = (0);
var inst_44006 = (0);
var state_44063__$1 = (function (){var statearr_44100 = state_44063;
(statearr_44100[(27)] = inst_44038);

(statearr_44100[(20)] = inst_44005);

(statearr_44100[(10)] = inst_44006);

(statearr_44100[(11)] = inst_44004);

(statearr_44100[(21)] = inst_44003);

return statearr_44100;
})();
var statearr_44101_45227 = state_44063__$1;
(statearr_44101_45227[(2)] = null);

(statearr_44101_45227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (43))){
var state_44063__$1 = state_44063;
var statearr_44102_45228 = state_44063__$1;
(statearr_44102_45228[(2)] = null);

(statearr_44102_45228[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (29))){
var inst_44047 = (state_44063[(2)]);
var state_44063__$1 = state_44063;
var statearr_44103_45229 = state_44063__$1;
(statearr_44103_45229[(2)] = inst_44047);

(statearr_44103_45229[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (44))){
var inst_44056 = (state_44063[(2)]);
var state_44063__$1 = (function (){var statearr_44104 = state_44063;
(statearr_44104[(28)] = inst_44056);

return statearr_44104;
})();
var statearr_44105_45230 = state_44063__$1;
(statearr_44105_45230[(2)] = null);

(statearr_44105_45230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (6))){
var inst_43995 = (state_44063[(29)]);
var inst_43994 = cljs.core.deref(cs);
var inst_43995__$1 = cljs.core.keys(inst_43994);
var inst_43996 = cljs.core.count(inst_43995__$1);
var inst_43997 = cljs.core.reset_BANG_(dctr,inst_43996);
var inst_44002 = cljs.core.seq(inst_43995__$1);
var inst_44003 = inst_44002;
var inst_44004 = null;
var inst_44005 = (0);
var inst_44006 = (0);
var state_44063__$1 = (function (){var statearr_44106 = state_44063;
(statearr_44106[(20)] = inst_44005);

(statearr_44106[(30)] = inst_43997);

(statearr_44106[(10)] = inst_44006);

(statearr_44106[(11)] = inst_44004);

(statearr_44106[(21)] = inst_44003);

(statearr_44106[(29)] = inst_43995__$1);

return statearr_44106;
})();
var statearr_44107_45231 = state_44063__$1;
(statearr_44107_45231[(2)] = null);

(statearr_44107_45231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (28))){
var inst_44022 = (state_44063[(25)]);
var inst_44003 = (state_44063[(21)]);
var inst_44022__$1 = cljs.core.seq(inst_44003);
var state_44063__$1 = (function (){var statearr_44108 = state_44063;
(statearr_44108[(25)] = inst_44022__$1);

return statearr_44108;
})();
if(inst_44022__$1){
var statearr_44109_45232 = state_44063__$1;
(statearr_44109_45232[(1)] = (33));

} else {
var statearr_44110_45233 = state_44063__$1;
(statearr_44110_45233[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (25))){
var inst_44005 = (state_44063[(20)]);
var inst_44006 = (state_44063[(10)]);
var inst_44008 = (inst_44006 < inst_44005);
var inst_44009 = inst_44008;
var state_44063__$1 = state_44063;
if(cljs.core.truth_(inst_44009)){
var statearr_44111_45234 = state_44063__$1;
(statearr_44111_45234[(1)] = (27));

} else {
var statearr_44112_45235 = state_44063__$1;
(statearr_44112_45235[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (34))){
var state_44063__$1 = state_44063;
var statearr_44113_45236 = state_44063__$1;
(statearr_44113_45236[(2)] = null);

(statearr_44113_45236[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (17))){
var state_44063__$1 = state_44063;
var statearr_44114_45237 = state_44063__$1;
(statearr_44114_45237[(2)] = null);

(statearr_44114_45237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (3))){
var inst_44061 = (state_44063[(2)]);
var state_44063__$1 = state_44063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44063__$1,inst_44061);
} else {
if((state_val_44064 === (12))){
var inst_43990 = (state_44063[(2)]);
var state_44063__$1 = state_44063;
var statearr_44115_45238 = state_44063__$1;
(statearr_44115_45238[(2)] = inst_43990);

(statearr_44115_45238[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (2))){
var state_44063__$1 = state_44063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44063__$1,(4),ch);
} else {
if((state_val_44064 === (23))){
var state_44063__$1 = state_44063;
var statearr_44116_45239 = state_44063__$1;
(statearr_44116_45239[(2)] = null);

(statearr_44116_45239[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (35))){
var inst_44045 = (state_44063[(2)]);
var state_44063__$1 = state_44063;
var statearr_44117_45242 = state_44063__$1;
(statearr_44117_45242[(2)] = inst_44045);

(statearr_44117_45242[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (19))){
var inst_43962 = (state_44063[(7)]);
var inst_43966 = cljs.core.chunk_first(inst_43962);
var inst_43967 = cljs.core.chunk_rest(inst_43962);
var inst_43968 = cljs.core.count(inst_43966);
var inst_43940 = inst_43967;
var inst_43941 = inst_43966;
var inst_43942 = inst_43968;
var inst_43943 = (0);
var state_44063__$1 = (function (){var statearr_44118 = state_44063;
(statearr_44118[(13)] = inst_43941);

(statearr_44118[(14)] = inst_43942);

(statearr_44118[(15)] = inst_43943);

(statearr_44118[(16)] = inst_43940);

return statearr_44118;
})();
var statearr_44119_45244 = state_44063__$1;
(statearr_44119_45244[(2)] = null);

(statearr_44119_45244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (11))){
var inst_43962 = (state_44063[(7)]);
var inst_43940 = (state_44063[(16)]);
var inst_43962__$1 = cljs.core.seq(inst_43940);
var state_44063__$1 = (function (){var statearr_44120 = state_44063;
(statearr_44120[(7)] = inst_43962__$1);

return statearr_44120;
})();
if(inst_43962__$1){
var statearr_44121_45246 = state_44063__$1;
(statearr_44121_45246[(1)] = (16));

} else {
var statearr_44122_45247 = state_44063__$1;
(statearr_44122_45247[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (9))){
var inst_43992 = (state_44063[(2)]);
var state_44063__$1 = state_44063;
var statearr_44123_45248 = state_44063__$1;
(statearr_44123_45248[(2)] = inst_43992);

(statearr_44123_45248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (5))){
var inst_43938 = cljs.core.deref(cs);
var inst_43939 = cljs.core.seq(inst_43938);
var inst_43940 = inst_43939;
var inst_43941 = null;
var inst_43942 = (0);
var inst_43943 = (0);
var state_44063__$1 = (function (){var statearr_44124 = state_44063;
(statearr_44124[(13)] = inst_43941);

(statearr_44124[(14)] = inst_43942);

(statearr_44124[(15)] = inst_43943);

(statearr_44124[(16)] = inst_43940);

return statearr_44124;
})();
var statearr_44125_45254 = state_44063__$1;
(statearr_44125_45254[(2)] = null);

(statearr_44125_45254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (14))){
var state_44063__$1 = state_44063;
var statearr_44126_45257 = state_44063__$1;
(statearr_44126_45257[(2)] = null);

(statearr_44126_45257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (45))){
var inst_44053 = (state_44063[(2)]);
var state_44063__$1 = state_44063;
var statearr_44127_45259 = state_44063__$1;
(statearr_44127_45259[(2)] = inst_44053);

(statearr_44127_45259[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (26))){
var inst_43995 = (state_44063[(29)]);
var inst_44049 = (state_44063[(2)]);
var inst_44050 = cljs.core.seq(inst_43995);
var state_44063__$1 = (function (){var statearr_44128 = state_44063;
(statearr_44128[(31)] = inst_44049);

return statearr_44128;
})();
if(inst_44050){
var statearr_44129_45271 = state_44063__$1;
(statearr_44129_45271[(1)] = (42));

} else {
var statearr_44130_45272 = state_44063__$1;
(statearr_44130_45272[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (16))){
var inst_43962 = (state_44063[(7)]);
var inst_43964 = cljs.core.chunked_seq_QMARK_(inst_43962);
var state_44063__$1 = state_44063;
if(inst_43964){
var statearr_44131_45276 = state_44063__$1;
(statearr_44131_45276[(1)] = (19));

} else {
var statearr_44132_45277 = state_44063__$1;
(statearr_44132_45277[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (38))){
var inst_44042 = (state_44063[(2)]);
var state_44063__$1 = state_44063;
var statearr_44133_45282 = state_44063__$1;
(statearr_44133_45282[(2)] = inst_44042);

(statearr_44133_45282[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (30))){
var state_44063__$1 = state_44063;
var statearr_44134_45283 = state_44063__$1;
(statearr_44134_45283[(2)] = null);

(statearr_44134_45283[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (10))){
var inst_43941 = (state_44063[(13)]);
var inst_43943 = (state_44063[(15)]);
var inst_43951 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43941,inst_43943);
var inst_43952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43951,(0),null);
var inst_43953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43951,(1),null);
var state_44063__$1 = (function (){var statearr_44135 = state_44063;
(statearr_44135[(26)] = inst_43952);

return statearr_44135;
})();
if(cljs.core.truth_(inst_43953)){
var statearr_44136_45284 = state_44063__$1;
(statearr_44136_45284[(1)] = (13));

} else {
var statearr_44137_45285 = state_44063__$1;
(statearr_44137_45285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (18))){
var inst_43988 = (state_44063[(2)]);
var state_44063__$1 = state_44063;
var statearr_44138_45286 = state_44063__$1;
(statearr_44138_45286[(2)] = inst_43988);

(statearr_44138_45286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (42))){
var state_44063__$1 = state_44063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44063__$1,(45),dchan);
} else {
if((state_val_44064 === (37))){
var inst_44031 = (state_44063[(23)]);
var inst_44022 = (state_44063[(25)]);
var inst_43931 = (state_44063[(12)]);
var inst_44031__$1 = cljs.core.first(inst_44022);
var inst_44032 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44031__$1,inst_43931,done);
var state_44063__$1 = (function (){var statearr_44139 = state_44063;
(statearr_44139[(23)] = inst_44031__$1);

return statearr_44139;
})();
if(cljs.core.truth_(inst_44032)){
var statearr_44140_45287 = state_44063__$1;
(statearr_44140_45287[(1)] = (39));

} else {
var statearr_44141_45288 = state_44063__$1;
(statearr_44141_45288[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44064 === (8))){
var inst_43942 = (state_44063[(14)]);
var inst_43943 = (state_44063[(15)]);
var inst_43945 = (inst_43943 < inst_43942);
var inst_43946 = inst_43945;
var state_44063__$1 = state_44063;
if(cljs.core.truth_(inst_43946)){
var statearr_44142_45289 = state_44063__$1;
(statearr_44142_45289[(1)] = (10));

} else {
var statearr_44143_45290 = state_44063__$1;
(statearr_44143_45290[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
return (function() {
var cljs$core$async$mult_$_state_machine__43389__auto__ = null;
var cljs$core$async$mult_$_state_machine__43389__auto____0 = (function (){
var statearr_44144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44144[(0)] = cljs$core$async$mult_$_state_machine__43389__auto__);

(statearr_44144[(1)] = (1));

return statearr_44144;
});
var cljs$core$async$mult_$_state_machine__43389__auto____1 = (function (state_44063){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_44063);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e44145){if((e44145 instanceof Object)){
var ex__43392__auto__ = e44145;
var statearr_44146_45291 = state_44063;
(statearr_44146_45291[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45292 = state_44063;
state_44063 = G__45292;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43389__auto__ = function(state_44063){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43389__auto____1.call(this,state_44063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43389__auto____0;
cljs$core$async$mult_$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43389__auto____1;
return cljs$core$async$mult_$_state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44147 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44147[(6)] = c__43454__auto___45180);

return statearr_44147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44149 = arguments.length;
switch (G__44149) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___45294 = arguments.length;
var i__4790__auto___45295 = (0);
while(true){
if((i__4790__auto___45295 < len__4789__auto___45294)){
args__4795__auto__.push((arguments[i__4790__auto___45295]));

var G__45296 = (i__4790__auto___45295 + (1));
i__4790__auto___45295 = G__45296;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44154){
var map__44155 = p__44154;
var map__44155__$1 = (((((!((map__44155 == null))))?(((((map__44155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44155):map__44155);
var opts = map__44155__$1;
var statearr_44157_45297 = state;
(statearr_44157_45297[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44158_45298 = state;
(statearr_44158_45298[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_44159_45299 = state;
(statearr_44159_45299[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44150){
var G__44151 = cljs.core.first(seq44150);
var seq44150__$1 = cljs.core.next(seq44150);
var G__44152 = cljs.core.first(seq44150__$1);
var seq44150__$2 = cljs.core.next(seq44150__$1);
var G__44153 = cljs.core.first(seq44150__$2);
var seq44150__$3 = cljs.core.next(seq44150__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44151,G__44152,G__44153,seq44150__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44160 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44161){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44161 = meta44161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44162,meta44161__$1){
var self__ = this;
var _44162__$1 = this;
return (new cljs.core.async.t_cljs$core$async44160(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44161__$1));
}));

(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44162){
var self__ = this;
var _44162__$1 = this;
return self__.meta44161;
}));

(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44160.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44161","meta44161",672555268,null)], null);
}));

(cljs.core.async.t_cljs$core$async44160.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44160");

(cljs.core.async.t_cljs$core$async44160.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44160");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44160.
 */
cljs.core.async.__GT_t_cljs$core$async44160 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44160(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44161){
return (new cljs.core.async.t_cljs$core$async44160(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44161));
});

}

return (new cljs.core.async.t_cljs$core$async44160(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43454__auto___45300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_44264){
var state_val_44265 = (state_44264[(1)]);
if((state_val_44265 === (7))){
var inst_44179 = (state_44264[(2)]);
var state_44264__$1 = state_44264;
var statearr_44266_45303 = state_44264__$1;
(statearr_44266_45303[(2)] = inst_44179);

(statearr_44266_45303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (20))){
var inst_44191 = (state_44264[(7)]);
var state_44264__$1 = state_44264;
var statearr_44267_45304 = state_44264__$1;
(statearr_44267_45304[(2)] = inst_44191);

(statearr_44267_45304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (27))){
var state_44264__$1 = state_44264;
var statearr_44268_45305 = state_44264__$1;
(statearr_44268_45305[(2)] = null);

(statearr_44268_45305[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (1))){
var inst_44166 = (state_44264[(8)]);
var inst_44166__$1 = calc_state();
var inst_44168 = (inst_44166__$1 == null);
var inst_44169 = cljs.core.not(inst_44168);
var state_44264__$1 = (function (){var statearr_44269 = state_44264;
(statearr_44269[(8)] = inst_44166__$1);

return statearr_44269;
})();
if(inst_44169){
var statearr_44270_45306 = state_44264__$1;
(statearr_44270_45306[(1)] = (2));

} else {
var statearr_44271_45307 = state_44264__$1;
(statearr_44271_45307[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (24))){
var inst_44238 = (state_44264[(9)]);
var inst_44224 = (state_44264[(10)]);
var inst_44215 = (state_44264[(11)]);
var inst_44238__$1 = (inst_44215.cljs$core$IFn$_invoke$arity$1 ? inst_44215.cljs$core$IFn$_invoke$arity$1(inst_44224) : inst_44215.call(null,inst_44224));
var state_44264__$1 = (function (){var statearr_44272 = state_44264;
(statearr_44272[(9)] = inst_44238__$1);

return statearr_44272;
})();
if(cljs.core.truth_(inst_44238__$1)){
var statearr_44273_45310 = state_44264__$1;
(statearr_44273_45310[(1)] = (29));

} else {
var statearr_44274_45311 = state_44264__$1;
(statearr_44274_45311[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (4))){
var inst_44182 = (state_44264[(2)]);
var state_44264__$1 = state_44264;
if(cljs.core.truth_(inst_44182)){
var statearr_44275_45312 = state_44264__$1;
(statearr_44275_45312[(1)] = (8));

} else {
var statearr_44276_45313 = state_44264__$1;
(statearr_44276_45313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (15))){
var inst_44209 = (state_44264[(2)]);
var state_44264__$1 = state_44264;
if(cljs.core.truth_(inst_44209)){
var statearr_44277_45314 = state_44264__$1;
(statearr_44277_45314[(1)] = (19));

} else {
var statearr_44278_45315 = state_44264__$1;
(statearr_44278_45315[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (21))){
var inst_44214 = (state_44264[(12)]);
var inst_44214__$1 = (state_44264[(2)]);
var inst_44215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44214__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44214__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44214__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44264__$1 = (function (){var statearr_44279 = state_44264;
(statearr_44279[(12)] = inst_44214__$1);

(statearr_44279[(13)] = inst_44216);

(statearr_44279[(11)] = inst_44215);

return statearr_44279;
})();
return cljs.core.async.ioc_alts_BANG_(state_44264__$1,(22),inst_44217);
} else {
if((state_val_44265 === (31))){
var inst_44246 = (state_44264[(2)]);
var state_44264__$1 = state_44264;
if(cljs.core.truth_(inst_44246)){
var statearr_44280_45317 = state_44264__$1;
(statearr_44280_45317[(1)] = (32));

} else {
var statearr_44281_45319 = state_44264__$1;
(statearr_44281_45319[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (32))){
var inst_44223 = (state_44264[(14)]);
var state_44264__$1 = state_44264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44264__$1,(35),out,inst_44223);
} else {
if((state_val_44265 === (33))){
var inst_44214 = (state_44264[(12)]);
var inst_44191 = inst_44214;
var state_44264__$1 = (function (){var statearr_44282 = state_44264;
(statearr_44282[(7)] = inst_44191);

return statearr_44282;
})();
var statearr_44283_45320 = state_44264__$1;
(statearr_44283_45320[(2)] = null);

(statearr_44283_45320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (13))){
var inst_44191 = (state_44264[(7)]);
var inst_44198 = inst_44191.cljs$lang$protocol_mask$partition0$;
var inst_44199 = (inst_44198 & (64));
var inst_44200 = inst_44191.cljs$core$ISeq$;
var inst_44201 = (cljs.core.PROTOCOL_SENTINEL === inst_44200);
var inst_44202 = ((inst_44199) || (inst_44201));
var state_44264__$1 = state_44264;
if(cljs.core.truth_(inst_44202)){
var statearr_44284_45321 = state_44264__$1;
(statearr_44284_45321[(1)] = (16));

} else {
var statearr_44285_45322 = state_44264__$1;
(statearr_44285_45322[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (22))){
var inst_44224 = (state_44264[(10)]);
var inst_44223 = (state_44264[(14)]);
var inst_44222 = (state_44264[(2)]);
var inst_44223__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44222,(0),null);
var inst_44224__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44222,(1),null);
var inst_44225 = (inst_44223__$1 == null);
var inst_44226 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44224__$1,change);
var inst_44227 = ((inst_44225) || (inst_44226));
var state_44264__$1 = (function (){var statearr_44286 = state_44264;
(statearr_44286[(10)] = inst_44224__$1);

(statearr_44286[(14)] = inst_44223__$1);

return statearr_44286;
})();
if(cljs.core.truth_(inst_44227)){
var statearr_44287_45324 = state_44264__$1;
(statearr_44287_45324[(1)] = (23));

} else {
var statearr_44288_45326 = state_44264__$1;
(statearr_44288_45326[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (36))){
var inst_44214 = (state_44264[(12)]);
var inst_44191 = inst_44214;
var state_44264__$1 = (function (){var statearr_44289 = state_44264;
(statearr_44289[(7)] = inst_44191);

return statearr_44289;
})();
var statearr_44290_45327 = state_44264__$1;
(statearr_44290_45327[(2)] = null);

(statearr_44290_45327[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (29))){
var inst_44238 = (state_44264[(9)]);
var state_44264__$1 = state_44264;
var statearr_44291_45328 = state_44264__$1;
(statearr_44291_45328[(2)] = inst_44238);

(statearr_44291_45328[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (6))){
var state_44264__$1 = state_44264;
var statearr_44292_45329 = state_44264__$1;
(statearr_44292_45329[(2)] = false);

(statearr_44292_45329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (28))){
var inst_44234 = (state_44264[(2)]);
var inst_44235 = calc_state();
var inst_44191 = inst_44235;
var state_44264__$1 = (function (){var statearr_44293 = state_44264;
(statearr_44293[(7)] = inst_44191);

(statearr_44293[(15)] = inst_44234);

return statearr_44293;
})();
var statearr_44294_45332 = state_44264__$1;
(statearr_44294_45332[(2)] = null);

(statearr_44294_45332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (25))){
var inst_44260 = (state_44264[(2)]);
var state_44264__$1 = state_44264;
var statearr_44295_45333 = state_44264__$1;
(statearr_44295_45333[(2)] = inst_44260);

(statearr_44295_45333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (34))){
var inst_44258 = (state_44264[(2)]);
var state_44264__$1 = state_44264;
var statearr_44296_45334 = state_44264__$1;
(statearr_44296_45334[(2)] = inst_44258);

(statearr_44296_45334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (17))){
var state_44264__$1 = state_44264;
var statearr_44297_45335 = state_44264__$1;
(statearr_44297_45335[(2)] = false);

(statearr_44297_45335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (3))){
var state_44264__$1 = state_44264;
var statearr_44298_45336 = state_44264__$1;
(statearr_44298_45336[(2)] = false);

(statearr_44298_45336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (12))){
var inst_44262 = (state_44264[(2)]);
var state_44264__$1 = state_44264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44264__$1,inst_44262);
} else {
if((state_val_44265 === (2))){
var inst_44166 = (state_44264[(8)]);
var inst_44171 = inst_44166.cljs$lang$protocol_mask$partition0$;
var inst_44172 = (inst_44171 & (64));
var inst_44173 = inst_44166.cljs$core$ISeq$;
var inst_44174 = (cljs.core.PROTOCOL_SENTINEL === inst_44173);
var inst_44175 = ((inst_44172) || (inst_44174));
var state_44264__$1 = state_44264;
if(cljs.core.truth_(inst_44175)){
var statearr_44299_45337 = state_44264__$1;
(statearr_44299_45337[(1)] = (5));

} else {
var statearr_44300_45338 = state_44264__$1;
(statearr_44300_45338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (23))){
var inst_44223 = (state_44264[(14)]);
var inst_44229 = (inst_44223 == null);
var state_44264__$1 = state_44264;
if(cljs.core.truth_(inst_44229)){
var statearr_44301_45339 = state_44264__$1;
(statearr_44301_45339[(1)] = (26));

} else {
var statearr_44302_45340 = state_44264__$1;
(statearr_44302_45340[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (35))){
var inst_44249 = (state_44264[(2)]);
var state_44264__$1 = state_44264;
if(cljs.core.truth_(inst_44249)){
var statearr_44303_45341 = state_44264__$1;
(statearr_44303_45341[(1)] = (36));

} else {
var statearr_44304_45342 = state_44264__$1;
(statearr_44304_45342[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (19))){
var inst_44191 = (state_44264[(7)]);
var inst_44211 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44191);
var state_44264__$1 = state_44264;
var statearr_44305_45343 = state_44264__$1;
(statearr_44305_45343[(2)] = inst_44211);

(statearr_44305_45343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (11))){
var inst_44191 = (state_44264[(7)]);
var inst_44195 = (inst_44191 == null);
var inst_44196 = cljs.core.not(inst_44195);
var state_44264__$1 = state_44264;
if(inst_44196){
var statearr_44306_45344 = state_44264__$1;
(statearr_44306_45344[(1)] = (13));

} else {
var statearr_44307_45345 = state_44264__$1;
(statearr_44307_45345[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (9))){
var inst_44166 = (state_44264[(8)]);
var state_44264__$1 = state_44264;
var statearr_44308_45346 = state_44264__$1;
(statearr_44308_45346[(2)] = inst_44166);

(statearr_44308_45346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (5))){
var state_44264__$1 = state_44264;
var statearr_44309_45347 = state_44264__$1;
(statearr_44309_45347[(2)] = true);

(statearr_44309_45347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (14))){
var state_44264__$1 = state_44264;
var statearr_44310_45348 = state_44264__$1;
(statearr_44310_45348[(2)] = false);

(statearr_44310_45348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (26))){
var inst_44224 = (state_44264[(10)]);
var inst_44231 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44224);
var state_44264__$1 = state_44264;
var statearr_44311_45349 = state_44264__$1;
(statearr_44311_45349[(2)] = inst_44231);

(statearr_44311_45349[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (16))){
var state_44264__$1 = state_44264;
var statearr_44312_45350 = state_44264__$1;
(statearr_44312_45350[(2)] = true);

(statearr_44312_45350[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (38))){
var inst_44254 = (state_44264[(2)]);
var state_44264__$1 = state_44264;
var statearr_44313_45351 = state_44264__$1;
(statearr_44313_45351[(2)] = inst_44254);

(statearr_44313_45351[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (30))){
var inst_44224 = (state_44264[(10)]);
var inst_44216 = (state_44264[(13)]);
var inst_44215 = (state_44264[(11)]);
var inst_44241 = cljs.core.empty_QMARK_(inst_44215);
var inst_44242 = (inst_44216.cljs$core$IFn$_invoke$arity$1 ? inst_44216.cljs$core$IFn$_invoke$arity$1(inst_44224) : inst_44216.call(null,inst_44224));
var inst_44243 = cljs.core.not(inst_44242);
var inst_44244 = ((inst_44241) && (inst_44243));
var state_44264__$1 = state_44264;
var statearr_44314_45352 = state_44264__$1;
(statearr_44314_45352[(2)] = inst_44244);

(statearr_44314_45352[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (10))){
var inst_44166 = (state_44264[(8)]);
var inst_44187 = (state_44264[(2)]);
var inst_44188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44187,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44187,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44187,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44191 = inst_44166;
var state_44264__$1 = (function (){var statearr_44315 = state_44264;
(statearr_44315[(16)] = inst_44188);

(statearr_44315[(7)] = inst_44191);

(statearr_44315[(17)] = inst_44190);

(statearr_44315[(18)] = inst_44189);

return statearr_44315;
})();
var statearr_44316_45353 = state_44264__$1;
(statearr_44316_45353[(2)] = null);

(statearr_44316_45353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (18))){
var inst_44206 = (state_44264[(2)]);
var state_44264__$1 = state_44264;
var statearr_44317_45355 = state_44264__$1;
(statearr_44317_45355[(2)] = inst_44206);

(statearr_44317_45355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (37))){
var state_44264__$1 = state_44264;
var statearr_44318_45356 = state_44264__$1;
(statearr_44318_45356[(2)] = null);

(statearr_44318_45356[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44265 === (8))){
var inst_44166 = (state_44264[(8)]);
var inst_44184 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44166);
var state_44264__$1 = state_44264;
var statearr_44319_45357 = state_44264__$1;
(statearr_44319_45357[(2)] = inst_44184);

(statearr_44319_45357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
return (function() {
var cljs$core$async$mix_$_state_machine__43389__auto__ = null;
var cljs$core$async$mix_$_state_machine__43389__auto____0 = (function (){
var statearr_44320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44320[(0)] = cljs$core$async$mix_$_state_machine__43389__auto__);

(statearr_44320[(1)] = (1));

return statearr_44320;
});
var cljs$core$async$mix_$_state_machine__43389__auto____1 = (function (state_44264){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_44264);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e44321){if((e44321 instanceof Object)){
var ex__43392__auto__ = e44321;
var statearr_44322_45359 = state_44264;
(statearr_44322_45359[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44321;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45360 = state_44264;
state_44264 = G__45360;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43389__auto__ = function(state_44264){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43389__auto____1.call(this,state_44264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43389__auto____0;
cljs$core$async$mix_$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43389__auto____1;
return cljs$core$async$mix_$_state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44323 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44323[(6)] = c__43454__auto___45300);

return statearr_44323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44325 = arguments.length;
switch (G__44325) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__44328 = arguments.length;
switch (G__44328) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44326_SHARP_){
if(cljs.core.truth_((p1__44326_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44326_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44326_SHARP_.call(null,topic)))){
return p1__44326_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44326_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44329 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44329 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44330){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44330 = meta44330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44331,meta44330__$1){
var self__ = this;
var _44331__$1 = this;
return (new cljs.core.async.t_cljs$core$async44329(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44330__$1));
}));

(cljs.core.async.t_cljs$core$async44329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44331){
var self__ = this;
var _44331__$1 = this;
return self__.meta44330;
}));

(cljs.core.async.t_cljs$core$async44329.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44329.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44329.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44329.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44329.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async44329.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44329.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44330","meta44330",134978446,null)], null);
}));

(cljs.core.async.t_cljs$core$async44329.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44329");

(cljs.core.async.t_cljs$core$async44329.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44329");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44329.
 */
cljs.core.async.__GT_t_cljs$core$async44329 = (function cljs$core$async$__GT_t_cljs$core$async44329(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44330){
return (new cljs.core.async.t_cljs$core$async44329(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44330));
});

}

return (new cljs.core.async.t_cljs$core$async44329(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43454__auto___45370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_44403){
var state_val_44404 = (state_44403[(1)]);
if((state_val_44404 === (7))){
var inst_44399 = (state_44403[(2)]);
var state_44403__$1 = state_44403;
var statearr_44405_45371 = state_44403__$1;
(statearr_44405_45371[(2)] = inst_44399);

(statearr_44405_45371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (20))){
var state_44403__$1 = state_44403;
var statearr_44406_45372 = state_44403__$1;
(statearr_44406_45372[(2)] = null);

(statearr_44406_45372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (1))){
var state_44403__$1 = state_44403;
var statearr_44407_45373 = state_44403__$1;
(statearr_44407_45373[(2)] = null);

(statearr_44407_45373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (24))){
var inst_44382 = (state_44403[(7)]);
var inst_44391 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44382);
var state_44403__$1 = state_44403;
var statearr_44408_45374 = state_44403__$1;
(statearr_44408_45374[(2)] = inst_44391);

(statearr_44408_45374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (4))){
var inst_44334 = (state_44403[(8)]);
var inst_44334__$1 = (state_44403[(2)]);
var inst_44335 = (inst_44334__$1 == null);
var state_44403__$1 = (function (){var statearr_44409 = state_44403;
(statearr_44409[(8)] = inst_44334__$1);

return statearr_44409;
})();
if(cljs.core.truth_(inst_44335)){
var statearr_44410_45375 = state_44403__$1;
(statearr_44410_45375[(1)] = (5));

} else {
var statearr_44411_45376 = state_44403__$1;
(statearr_44411_45376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (15))){
var inst_44376 = (state_44403[(2)]);
var state_44403__$1 = state_44403;
var statearr_44412_45377 = state_44403__$1;
(statearr_44412_45377[(2)] = inst_44376);

(statearr_44412_45377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (21))){
var inst_44396 = (state_44403[(2)]);
var state_44403__$1 = (function (){var statearr_44413 = state_44403;
(statearr_44413[(9)] = inst_44396);

return statearr_44413;
})();
var statearr_44414_45378 = state_44403__$1;
(statearr_44414_45378[(2)] = null);

(statearr_44414_45378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (13))){
var inst_44358 = (state_44403[(10)]);
var inst_44360 = cljs.core.chunked_seq_QMARK_(inst_44358);
var state_44403__$1 = state_44403;
if(inst_44360){
var statearr_44415_45379 = state_44403__$1;
(statearr_44415_45379[(1)] = (16));

} else {
var statearr_44416_45380 = state_44403__$1;
(statearr_44416_45380[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (22))){
var inst_44388 = (state_44403[(2)]);
var state_44403__$1 = state_44403;
if(cljs.core.truth_(inst_44388)){
var statearr_44417_45381 = state_44403__$1;
(statearr_44417_45381[(1)] = (23));

} else {
var statearr_44418_45382 = state_44403__$1;
(statearr_44418_45382[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (6))){
var inst_44334 = (state_44403[(8)]);
var inst_44382 = (state_44403[(7)]);
var inst_44384 = (state_44403[(11)]);
var inst_44382__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44334) : topic_fn.call(null,inst_44334));
var inst_44383 = cljs.core.deref(mults);
var inst_44384__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44383,inst_44382__$1);
var state_44403__$1 = (function (){var statearr_44419 = state_44403;
(statearr_44419[(7)] = inst_44382__$1);

(statearr_44419[(11)] = inst_44384__$1);

return statearr_44419;
})();
if(cljs.core.truth_(inst_44384__$1)){
var statearr_44420_45383 = state_44403__$1;
(statearr_44420_45383[(1)] = (19));

} else {
var statearr_44421_45384 = state_44403__$1;
(statearr_44421_45384[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (25))){
var inst_44393 = (state_44403[(2)]);
var state_44403__$1 = state_44403;
var statearr_44422_45385 = state_44403__$1;
(statearr_44422_45385[(2)] = inst_44393);

(statearr_44422_45385[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (17))){
var inst_44358 = (state_44403[(10)]);
var inst_44367 = cljs.core.first(inst_44358);
var inst_44368 = cljs.core.async.muxch_STAR_(inst_44367);
var inst_44369 = cljs.core.async.close_BANG_(inst_44368);
var inst_44370 = cljs.core.next(inst_44358);
var inst_44344 = inst_44370;
var inst_44345 = null;
var inst_44346 = (0);
var inst_44347 = (0);
var state_44403__$1 = (function (){var statearr_44423 = state_44403;
(statearr_44423[(12)] = inst_44345);

(statearr_44423[(13)] = inst_44347);

(statearr_44423[(14)] = inst_44344);

(statearr_44423[(15)] = inst_44369);

(statearr_44423[(16)] = inst_44346);

return statearr_44423;
})();
var statearr_44424_45386 = state_44403__$1;
(statearr_44424_45386[(2)] = null);

(statearr_44424_45386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (3))){
var inst_44401 = (state_44403[(2)]);
var state_44403__$1 = state_44403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44403__$1,inst_44401);
} else {
if((state_val_44404 === (12))){
var inst_44378 = (state_44403[(2)]);
var state_44403__$1 = state_44403;
var statearr_44425_45387 = state_44403__$1;
(statearr_44425_45387[(2)] = inst_44378);

(statearr_44425_45387[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (2))){
var state_44403__$1 = state_44403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44403__$1,(4),ch);
} else {
if((state_val_44404 === (23))){
var state_44403__$1 = state_44403;
var statearr_44426_45388 = state_44403__$1;
(statearr_44426_45388[(2)] = null);

(statearr_44426_45388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (19))){
var inst_44334 = (state_44403[(8)]);
var inst_44384 = (state_44403[(11)]);
var inst_44386 = cljs.core.async.muxch_STAR_(inst_44384);
var state_44403__$1 = state_44403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44403__$1,(22),inst_44386,inst_44334);
} else {
if((state_val_44404 === (11))){
var inst_44358 = (state_44403[(10)]);
var inst_44344 = (state_44403[(14)]);
var inst_44358__$1 = cljs.core.seq(inst_44344);
var state_44403__$1 = (function (){var statearr_44427 = state_44403;
(statearr_44427[(10)] = inst_44358__$1);

return statearr_44427;
})();
if(inst_44358__$1){
var statearr_44428_45389 = state_44403__$1;
(statearr_44428_45389[(1)] = (13));

} else {
var statearr_44429_45390 = state_44403__$1;
(statearr_44429_45390[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (9))){
var inst_44380 = (state_44403[(2)]);
var state_44403__$1 = state_44403;
var statearr_44430_45391 = state_44403__$1;
(statearr_44430_45391[(2)] = inst_44380);

(statearr_44430_45391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (5))){
var inst_44341 = cljs.core.deref(mults);
var inst_44342 = cljs.core.vals(inst_44341);
var inst_44343 = cljs.core.seq(inst_44342);
var inst_44344 = inst_44343;
var inst_44345 = null;
var inst_44346 = (0);
var inst_44347 = (0);
var state_44403__$1 = (function (){var statearr_44431 = state_44403;
(statearr_44431[(12)] = inst_44345);

(statearr_44431[(13)] = inst_44347);

(statearr_44431[(14)] = inst_44344);

(statearr_44431[(16)] = inst_44346);

return statearr_44431;
})();
var statearr_44432_45392 = state_44403__$1;
(statearr_44432_45392[(2)] = null);

(statearr_44432_45392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (14))){
var state_44403__$1 = state_44403;
var statearr_44436_45393 = state_44403__$1;
(statearr_44436_45393[(2)] = null);

(statearr_44436_45393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (16))){
var inst_44358 = (state_44403[(10)]);
var inst_44362 = cljs.core.chunk_first(inst_44358);
var inst_44363 = cljs.core.chunk_rest(inst_44358);
var inst_44364 = cljs.core.count(inst_44362);
var inst_44344 = inst_44363;
var inst_44345 = inst_44362;
var inst_44346 = inst_44364;
var inst_44347 = (0);
var state_44403__$1 = (function (){var statearr_44437 = state_44403;
(statearr_44437[(12)] = inst_44345);

(statearr_44437[(13)] = inst_44347);

(statearr_44437[(14)] = inst_44344);

(statearr_44437[(16)] = inst_44346);

return statearr_44437;
})();
var statearr_44438_45394 = state_44403__$1;
(statearr_44438_45394[(2)] = null);

(statearr_44438_45394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (10))){
var inst_44345 = (state_44403[(12)]);
var inst_44347 = (state_44403[(13)]);
var inst_44344 = (state_44403[(14)]);
var inst_44346 = (state_44403[(16)]);
var inst_44352 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44345,inst_44347);
var inst_44353 = cljs.core.async.muxch_STAR_(inst_44352);
var inst_44354 = cljs.core.async.close_BANG_(inst_44353);
var inst_44355 = (inst_44347 + (1));
var tmp44433 = inst_44345;
var tmp44434 = inst_44344;
var tmp44435 = inst_44346;
var inst_44344__$1 = tmp44434;
var inst_44345__$1 = tmp44433;
var inst_44346__$1 = tmp44435;
var inst_44347__$1 = inst_44355;
var state_44403__$1 = (function (){var statearr_44439 = state_44403;
(statearr_44439[(12)] = inst_44345__$1);

(statearr_44439[(17)] = inst_44354);

(statearr_44439[(13)] = inst_44347__$1);

(statearr_44439[(14)] = inst_44344__$1);

(statearr_44439[(16)] = inst_44346__$1);

return statearr_44439;
})();
var statearr_44440_45395 = state_44403__$1;
(statearr_44440_45395[(2)] = null);

(statearr_44440_45395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (18))){
var inst_44373 = (state_44403[(2)]);
var state_44403__$1 = state_44403;
var statearr_44441_45396 = state_44403__$1;
(statearr_44441_45396[(2)] = inst_44373);

(statearr_44441_45396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44404 === (8))){
var inst_44347 = (state_44403[(13)]);
var inst_44346 = (state_44403[(16)]);
var inst_44349 = (inst_44347 < inst_44346);
var inst_44350 = inst_44349;
var state_44403__$1 = state_44403;
if(cljs.core.truth_(inst_44350)){
var statearr_44442_45397 = state_44403__$1;
(statearr_44442_45397[(1)] = (10));

} else {
var statearr_44443_45398 = state_44403__$1;
(statearr_44443_45398[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
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
return (function() {
var cljs$core$async$state_machine__43389__auto__ = null;
var cljs$core$async$state_machine__43389__auto____0 = (function (){
var statearr_44444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44444[(0)] = cljs$core$async$state_machine__43389__auto__);

(statearr_44444[(1)] = (1));

return statearr_44444;
});
var cljs$core$async$state_machine__43389__auto____1 = (function (state_44403){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_44403);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e44445){if((e44445 instanceof Object)){
var ex__43392__auto__ = e44445;
var statearr_44446_45399 = state_44403;
(statearr_44446_45399[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45400 = state_44403;
state_44403 = G__45400;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$state_machine__43389__auto__ = function(state_44403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43389__auto____1.call(this,state_44403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43389__auto____0;
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43389__auto____1;
return cljs$core$async$state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44447 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44447[(6)] = c__43454__auto___45370);

return statearr_44447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__44449 = arguments.length;
switch (G__44449) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__44451 = arguments.length;
switch (G__44451) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__44453 = arguments.length;
switch (G__44453) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__43454__auto___45409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_44492){
var state_val_44493 = (state_44492[(1)]);
if((state_val_44493 === (7))){
var state_44492__$1 = state_44492;
var statearr_44494_45410 = state_44492__$1;
(statearr_44494_45410[(2)] = null);

(statearr_44494_45410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (1))){
var state_44492__$1 = state_44492;
var statearr_44495_45411 = state_44492__$1;
(statearr_44495_45411[(2)] = null);

(statearr_44495_45411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (4))){
var inst_44456 = (state_44492[(7)]);
var inst_44458 = (inst_44456 < cnt);
var state_44492__$1 = state_44492;
if(cljs.core.truth_(inst_44458)){
var statearr_44496_45412 = state_44492__$1;
(statearr_44496_45412[(1)] = (6));

} else {
var statearr_44497_45413 = state_44492__$1;
(statearr_44497_45413[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (15))){
var inst_44488 = (state_44492[(2)]);
var state_44492__$1 = state_44492;
var statearr_44498_45414 = state_44492__$1;
(statearr_44498_45414[(2)] = inst_44488);

(statearr_44498_45414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (13))){
var inst_44481 = cljs.core.async.close_BANG_(out);
var state_44492__$1 = state_44492;
var statearr_44499_45415 = state_44492__$1;
(statearr_44499_45415[(2)] = inst_44481);

(statearr_44499_45415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (6))){
var state_44492__$1 = state_44492;
var statearr_44500_45416 = state_44492__$1;
(statearr_44500_45416[(2)] = null);

(statearr_44500_45416[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (3))){
var inst_44490 = (state_44492[(2)]);
var state_44492__$1 = state_44492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44492__$1,inst_44490);
} else {
if((state_val_44493 === (12))){
var inst_44478 = (state_44492[(8)]);
var inst_44478__$1 = (state_44492[(2)]);
var inst_44479 = cljs.core.some(cljs.core.nil_QMARK_,inst_44478__$1);
var state_44492__$1 = (function (){var statearr_44501 = state_44492;
(statearr_44501[(8)] = inst_44478__$1);

return statearr_44501;
})();
if(cljs.core.truth_(inst_44479)){
var statearr_44502_45417 = state_44492__$1;
(statearr_44502_45417[(1)] = (13));

} else {
var statearr_44503_45418 = state_44492__$1;
(statearr_44503_45418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (2))){
var inst_44455 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44456 = (0);
var state_44492__$1 = (function (){var statearr_44504 = state_44492;
(statearr_44504[(7)] = inst_44456);

(statearr_44504[(9)] = inst_44455);

return statearr_44504;
})();
var statearr_44505_45419 = state_44492__$1;
(statearr_44505_45419[(2)] = null);

(statearr_44505_45419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (11))){
var inst_44456 = (state_44492[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_44492,(10),Object,null,(9));
var inst_44465 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44456) : chs__$1.call(null,inst_44456));
var inst_44466 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44456) : done.call(null,inst_44456));
var inst_44467 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44465,inst_44466);
var state_44492__$1 = state_44492;
var statearr_44506_45420 = state_44492__$1;
(statearr_44506_45420[(2)] = inst_44467);


cljs.core.async.impl.ioc_helpers.process_exception(state_44492__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (9))){
var inst_44456 = (state_44492[(7)]);
var inst_44469 = (state_44492[(2)]);
var inst_44470 = (inst_44456 + (1));
var inst_44456__$1 = inst_44470;
var state_44492__$1 = (function (){var statearr_44507 = state_44492;
(statearr_44507[(7)] = inst_44456__$1);

(statearr_44507[(10)] = inst_44469);

return statearr_44507;
})();
var statearr_44508_45421 = state_44492__$1;
(statearr_44508_45421[(2)] = null);

(statearr_44508_45421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (5))){
var inst_44476 = (state_44492[(2)]);
var state_44492__$1 = (function (){var statearr_44509 = state_44492;
(statearr_44509[(11)] = inst_44476);

return statearr_44509;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44492__$1,(12),dchan);
} else {
if((state_val_44493 === (14))){
var inst_44478 = (state_44492[(8)]);
var inst_44483 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44478);
var state_44492__$1 = state_44492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44492__$1,(16),out,inst_44483);
} else {
if((state_val_44493 === (16))){
var inst_44485 = (state_44492[(2)]);
var state_44492__$1 = (function (){var statearr_44510 = state_44492;
(statearr_44510[(12)] = inst_44485);

return statearr_44510;
})();
var statearr_44511_45422 = state_44492__$1;
(statearr_44511_45422[(2)] = null);

(statearr_44511_45422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (10))){
var inst_44460 = (state_44492[(2)]);
var inst_44461 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44492__$1 = (function (){var statearr_44512 = state_44492;
(statearr_44512[(13)] = inst_44460);

return statearr_44512;
})();
var statearr_44513_45424 = state_44492__$1;
(statearr_44513_45424[(2)] = inst_44461);


cljs.core.async.impl.ioc_helpers.process_exception(state_44492__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44493 === (8))){
var inst_44474 = (state_44492[(2)]);
var state_44492__$1 = state_44492;
var statearr_44514_45425 = state_44492__$1;
(statearr_44514_45425[(2)] = inst_44474);

(statearr_44514_45425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43389__auto__ = null;
var cljs$core$async$state_machine__43389__auto____0 = (function (){
var statearr_44515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44515[(0)] = cljs$core$async$state_machine__43389__auto__);

(statearr_44515[(1)] = (1));

return statearr_44515;
});
var cljs$core$async$state_machine__43389__auto____1 = (function (state_44492){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_44492);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e44516){if((e44516 instanceof Object)){
var ex__43392__auto__ = e44516;
var statearr_44517_45426 = state_44492;
(statearr_44517_45426[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45427 = state_44492;
state_44492 = G__45427;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$state_machine__43389__auto__ = function(state_44492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43389__auto____1.call(this,state_44492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43389__auto____0;
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43389__auto____1;
return cljs$core$async$state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44518 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44518[(6)] = c__43454__auto___45409);

return statearr_44518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__44521 = arguments.length;
switch (G__44521) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43454__auto___45429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_44553){
var state_val_44554 = (state_44553[(1)]);
if((state_val_44554 === (7))){
var inst_44532 = (state_44553[(7)]);
var inst_44533 = (state_44553[(8)]);
var inst_44532__$1 = (state_44553[(2)]);
var inst_44533__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44532__$1,(0),null);
var inst_44534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44532__$1,(1),null);
var inst_44535 = (inst_44533__$1 == null);
var state_44553__$1 = (function (){var statearr_44555 = state_44553;
(statearr_44555[(9)] = inst_44534);

(statearr_44555[(7)] = inst_44532__$1);

(statearr_44555[(8)] = inst_44533__$1);

return statearr_44555;
})();
if(cljs.core.truth_(inst_44535)){
var statearr_44556_45430 = state_44553__$1;
(statearr_44556_45430[(1)] = (8));

} else {
var statearr_44557_45431 = state_44553__$1;
(statearr_44557_45431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44554 === (1))){
var inst_44522 = cljs.core.vec(chs);
var inst_44523 = inst_44522;
var state_44553__$1 = (function (){var statearr_44558 = state_44553;
(statearr_44558[(10)] = inst_44523);

return statearr_44558;
})();
var statearr_44559_45432 = state_44553__$1;
(statearr_44559_45432[(2)] = null);

(statearr_44559_45432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44554 === (4))){
var inst_44523 = (state_44553[(10)]);
var state_44553__$1 = state_44553;
return cljs.core.async.ioc_alts_BANG_(state_44553__$1,(7),inst_44523);
} else {
if((state_val_44554 === (6))){
var inst_44549 = (state_44553[(2)]);
var state_44553__$1 = state_44553;
var statearr_44560_45433 = state_44553__$1;
(statearr_44560_45433[(2)] = inst_44549);

(statearr_44560_45433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44554 === (3))){
var inst_44551 = (state_44553[(2)]);
var state_44553__$1 = state_44553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44553__$1,inst_44551);
} else {
if((state_val_44554 === (2))){
var inst_44523 = (state_44553[(10)]);
var inst_44525 = cljs.core.count(inst_44523);
var inst_44526 = (inst_44525 > (0));
var state_44553__$1 = state_44553;
if(cljs.core.truth_(inst_44526)){
var statearr_44562_45434 = state_44553__$1;
(statearr_44562_45434[(1)] = (4));

} else {
var statearr_44563_45435 = state_44553__$1;
(statearr_44563_45435[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44554 === (11))){
var inst_44523 = (state_44553[(10)]);
var inst_44542 = (state_44553[(2)]);
var tmp44561 = inst_44523;
var inst_44523__$1 = tmp44561;
var state_44553__$1 = (function (){var statearr_44564 = state_44553;
(statearr_44564[(11)] = inst_44542);

(statearr_44564[(10)] = inst_44523__$1);

return statearr_44564;
})();
var statearr_44565_45436 = state_44553__$1;
(statearr_44565_45436[(2)] = null);

(statearr_44565_45436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44554 === (9))){
var inst_44533 = (state_44553[(8)]);
var state_44553__$1 = state_44553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44553__$1,(11),out,inst_44533);
} else {
if((state_val_44554 === (5))){
var inst_44547 = cljs.core.async.close_BANG_(out);
var state_44553__$1 = state_44553;
var statearr_44566_45437 = state_44553__$1;
(statearr_44566_45437[(2)] = inst_44547);

(statearr_44566_45437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44554 === (10))){
var inst_44545 = (state_44553[(2)]);
var state_44553__$1 = state_44553;
var statearr_44567_45438 = state_44553__$1;
(statearr_44567_45438[(2)] = inst_44545);

(statearr_44567_45438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44554 === (8))){
var inst_44534 = (state_44553[(9)]);
var inst_44532 = (state_44553[(7)]);
var inst_44533 = (state_44553[(8)]);
var inst_44523 = (state_44553[(10)]);
var inst_44537 = (function (){var cs = inst_44523;
var vec__44528 = inst_44532;
var v = inst_44533;
var c = inst_44534;
return (function (p1__44519_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44519_SHARP_);
});
})();
var inst_44538 = cljs.core.filterv(inst_44537,inst_44523);
var inst_44523__$1 = inst_44538;
var state_44553__$1 = (function (){var statearr_44568 = state_44553;
(statearr_44568[(10)] = inst_44523__$1);

return statearr_44568;
})();
var statearr_44569_45439 = state_44553__$1;
(statearr_44569_45439[(2)] = null);

(statearr_44569_45439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__43389__auto__ = null;
var cljs$core$async$state_machine__43389__auto____0 = (function (){
var statearr_44570 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44570[(0)] = cljs$core$async$state_machine__43389__auto__);

(statearr_44570[(1)] = (1));

return statearr_44570;
});
var cljs$core$async$state_machine__43389__auto____1 = (function (state_44553){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_44553);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e44571){if((e44571 instanceof Object)){
var ex__43392__auto__ = e44571;
var statearr_44572_45440 = state_44553;
(statearr_44572_45440[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44571;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45441 = state_44553;
state_44553 = G__45441;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$state_machine__43389__auto__ = function(state_44553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43389__auto____1.call(this,state_44553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43389__auto____0;
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43389__auto____1;
return cljs$core$async$state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44573 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44573[(6)] = c__43454__auto___45429);

return statearr_44573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__44575 = arguments.length;
switch (G__44575) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43454__auto___45443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_44599){
var state_val_44600 = (state_44599[(1)]);
if((state_val_44600 === (7))){
var inst_44581 = (state_44599[(7)]);
var inst_44581__$1 = (state_44599[(2)]);
var inst_44582 = (inst_44581__$1 == null);
var inst_44583 = cljs.core.not(inst_44582);
var state_44599__$1 = (function (){var statearr_44601 = state_44599;
(statearr_44601[(7)] = inst_44581__$1);

return statearr_44601;
})();
if(inst_44583){
var statearr_44602_45444 = state_44599__$1;
(statearr_44602_45444[(1)] = (8));

} else {
var statearr_44603_45445 = state_44599__$1;
(statearr_44603_45445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44600 === (1))){
var inst_44576 = (0);
var state_44599__$1 = (function (){var statearr_44604 = state_44599;
(statearr_44604[(8)] = inst_44576);

return statearr_44604;
})();
var statearr_44605_45446 = state_44599__$1;
(statearr_44605_45446[(2)] = null);

(statearr_44605_45446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44600 === (4))){
var state_44599__$1 = state_44599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44599__$1,(7),ch);
} else {
if((state_val_44600 === (6))){
var inst_44594 = (state_44599[(2)]);
var state_44599__$1 = state_44599;
var statearr_44606_45447 = state_44599__$1;
(statearr_44606_45447[(2)] = inst_44594);

(statearr_44606_45447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44600 === (3))){
var inst_44596 = (state_44599[(2)]);
var inst_44597 = cljs.core.async.close_BANG_(out);
var state_44599__$1 = (function (){var statearr_44607 = state_44599;
(statearr_44607[(9)] = inst_44596);

return statearr_44607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44599__$1,inst_44597);
} else {
if((state_val_44600 === (2))){
var inst_44576 = (state_44599[(8)]);
var inst_44578 = (inst_44576 < n);
var state_44599__$1 = state_44599;
if(cljs.core.truth_(inst_44578)){
var statearr_44608_45448 = state_44599__$1;
(statearr_44608_45448[(1)] = (4));

} else {
var statearr_44609_45449 = state_44599__$1;
(statearr_44609_45449[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44600 === (11))){
var inst_44576 = (state_44599[(8)]);
var inst_44586 = (state_44599[(2)]);
var inst_44587 = (inst_44576 + (1));
var inst_44576__$1 = inst_44587;
var state_44599__$1 = (function (){var statearr_44610 = state_44599;
(statearr_44610[(10)] = inst_44586);

(statearr_44610[(8)] = inst_44576__$1);

return statearr_44610;
})();
var statearr_44611_45450 = state_44599__$1;
(statearr_44611_45450[(2)] = null);

(statearr_44611_45450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44600 === (9))){
var state_44599__$1 = state_44599;
var statearr_44612_45451 = state_44599__$1;
(statearr_44612_45451[(2)] = null);

(statearr_44612_45451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44600 === (5))){
var state_44599__$1 = state_44599;
var statearr_44613_45452 = state_44599__$1;
(statearr_44613_45452[(2)] = null);

(statearr_44613_45452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44600 === (10))){
var inst_44591 = (state_44599[(2)]);
var state_44599__$1 = state_44599;
var statearr_44614_45453 = state_44599__$1;
(statearr_44614_45453[(2)] = inst_44591);

(statearr_44614_45453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44600 === (8))){
var inst_44581 = (state_44599[(7)]);
var state_44599__$1 = state_44599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44599__$1,(11),out,inst_44581);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__43389__auto__ = null;
var cljs$core$async$state_machine__43389__auto____0 = (function (){
var statearr_44615 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44615[(0)] = cljs$core$async$state_machine__43389__auto__);

(statearr_44615[(1)] = (1));

return statearr_44615;
});
var cljs$core$async$state_machine__43389__auto____1 = (function (state_44599){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_44599);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e44616){if((e44616 instanceof Object)){
var ex__43392__auto__ = e44616;
var statearr_44617_45454 = state_44599;
(statearr_44617_45454[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44616;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45455 = state_44599;
state_44599 = G__45455;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$state_machine__43389__auto__ = function(state_44599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43389__auto____1.call(this,state_44599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43389__auto____0;
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43389__auto____1;
return cljs$core$async$state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44618 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44618[(6)] = c__43454__auto___45443);

return statearr_44618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44620 = (function (f,ch,meta44621){
this.f = f;
this.ch = ch;
this.meta44621 = meta44621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44622,meta44621__$1){
var self__ = this;
var _44622__$1 = this;
return (new cljs.core.async.t_cljs$core$async44620(self__.f,self__.ch,meta44621__$1));
}));

(cljs.core.async.t_cljs$core$async44620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44622){
var self__ = this;
var _44622__$1 = this;
return self__.meta44621;
}));

(cljs.core.async.t_cljs$core$async44620.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44620.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44620.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44620.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44620.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44623 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44623 = (function (f,ch,meta44621,_,fn1,meta44624){
this.f = f;
this.ch = ch;
this.meta44621 = meta44621;
this._ = _;
this.fn1 = fn1;
this.meta44624 = meta44624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44625,meta44624__$1){
var self__ = this;
var _44625__$1 = this;
return (new cljs.core.async.t_cljs$core$async44623(self__.f,self__.ch,self__.meta44621,self__._,self__.fn1,meta44624__$1));
}));

(cljs.core.async.t_cljs$core$async44623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44625){
var self__ = this;
var _44625__$1 = this;
return self__.meta44624;
}));

(cljs.core.async.t_cljs$core$async44623.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44623.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44623.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44623.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__44619_SHARP_){
var G__44626 = (((p1__44619_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44619_SHARP_) : self__.f.call(null,p1__44619_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44626) : f1.call(null,G__44626));
});
}));

(cljs.core.async.t_cljs$core$async44623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44621","meta44621",-1043847277,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44620","cljs.core.async/t_cljs$core$async44620",1417976330,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44624","meta44624",-1125211119,null)], null);
}));

(cljs.core.async.t_cljs$core$async44623.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44623");

(cljs.core.async.t_cljs$core$async44623.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44623");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44623.
 */
cljs.core.async.__GT_t_cljs$core$async44623 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44623(f__$1,ch__$1,meta44621__$1,___$2,fn1__$1,meta44624){
return (new cljs.core.async.t_cljs$core$async44623(f__$1,ch__$1,meta44621__$1,___$2,fn1__$1,meta44624));
});

}

return (new cljs.core.async.t_cljs$core$async44623(self__.f,self__.ch,self__.meta44621,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44627 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44627) : self__.f.call(null,G__44627));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44620.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44620.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44621","meta44621",-1043847277,null)], null);
}));

(cljs.core.async.t_cljs$core$async44620.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44620");

(cljs.core.async.t_cljs$core$async44620.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44620");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44620.
 */
cljs.core.async.__GT_t_cljs$core$async44620 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44620(f__$1,ch__$1,meta44621){
return (new cljs.core.async.t_cljs$core$async44620(f__$1,ch__$1,meta44621));
});

}

return (new cljs.core.async.t_cljs$core$async44620(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44628 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44628 = (function (f,ch,meta44629){
this.f = f;
this.ch = ch;
this.meta44629 = meta44629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44630,meta44629__$1){
var self__ = this;
var _44630__$1 = this;
return (new cljs.core.async.t_cljs$core$async44628(self__.f,self__.ch,meta44629__$1));
}));

(cljs.core.async.t_cljs$core$async44628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44630){
var self__ = this;
var _44630__$1 = this;
return self__.meta44629;
}));

(cljs.core.async.t_cljs$core$async44628.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44628.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44628.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44628.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44628.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44628.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async44628.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44629","meta44629",-1130239521,null)], null);
}));

(cljs.core.async.t_cljs$core$async44628.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44628.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44628");

(cljs.core.async.t_cljs$core$async44628.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44628");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44628.
 */
cljs.core.async.__GT_t_cljs$core$async44628 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44628(f__$1,ch__$1,meta44629){
return (new cljs.core.async.t_cljs$core$async44628(f__$1,ch__$1,meta44629));
});

}

return (new cljs.core.async.t_cljs$core$async44628(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44631 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44631 = (function (p,ch,meta44632){
this.p = p;
this.ch = ch;
this.meta44632 = meta44632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44633,meta44632__$1){
var self__ = this;
var _44633__$1 = this;
return (new cljs.core.async.t_cljs$core$async44631(self__.p,self__.ch,meta44632__$1));
}));

(cljs.core.async.t_cljs$core$async44631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44633){
var self__ = this;
var _44633__$1 = this;
return self__.meta44632;
}));

(cljs.core.async.t_cljs$core$async44631.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44631.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44631.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44631.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44631.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44631.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44631.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44632","meta44632",-1656988790,null)], null);
}));

(cljs.core.async.t_cljs$core$async44631.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44631");

(cljs.core.async.t_cljs$core$async44631.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async44631");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44631.
 */
cljs.core.async.__GT_t_cljs$core$async44631 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44631(p__$1,ch__$1,meta44632){
return (new cljs.core.async.t_cljs$core$async44631(p__$1,ch__$1,meta44632));
});

}

return (new cljs.core.async.t_cljs$core$async44631(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__44635 = arguments.length;
switch (G__44635) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43454__auto___45457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_44656){
var state_val_44657 = (state_44656[(1)]);
if((state_val_44657 === (7))){
var inst_44652 = (state_44656[(2)]);
var state_44656__$1 = state_44656;
var statearr_44658_45458 = state_44656__$1;
(statearr_44658_45458[(2)] = inst_44652);

(statearr_44658_45458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (1))){
var state_44656__$1 = state_44656;
var statearr_44659_45459 = state_44656__$1;
(statearr_44659_45459[(2)] = null);

(statearr_44659_45459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (4))){
var inst_44638 = (state_44656[(7)]);
var inst_44638__$1 = (state_44656[(2)]);
var inst_44639 = (inst_44638__$1 == null);
var state_44656__$1 = (function (){var statearr_44660 = state_44656;
(statearr_44660[(7)] = inst_44638__$1);

return statearr_44660;
})();
if(cljs.core.truth_(inst_44639)){
var statearr_44661_45460 = state_44656__$1;
(statearr_44661_45460[(1)] = (5));

} else {
var statearr_44662_45461 = state_44656__$1;
(statearr_44662_45461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (6))){
var inst_44638 = (state_44656[(7)]);
var inst_44643 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44638) : p.call(null,inst_44638));
var state_44656__$1 = state_44656;
if(cljs.core.truth_(inst_44643)){
var statearr_44663_45462 = state_44656__$1;
(statearr_44663_45462[(1)] = (8));

} else {
var statearr_44664_45463 = state_44656__$1;
(statearr_44664_45463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (3))){
var inst_44654 = (state_44656[(2)]);
var state_44656__$1 = state_44656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44656__$1,inst_44654);
} else {
if((state_val_44657 === (2))){
var state_44656__$1 = state_44656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44656__$1,(4),ch);
} else {
if((state_val_44657 === (11))){
var inst_44646 = (state_44656[(2)]);
var state_44656__$1 = state_44656;
var statearr_44665_45464 = state_44656__$1;
(statearr_44665_45464[(2)] = inst_44646);

(statearr_44665_45464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (9))){
var state_44656__$1 = state_44656;
var statearr_44666_45465 = state_44656__$1;
(statearr_44666_45465[(2)] = null);

(statearr_44666_45465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (5))){
var inst_44641 = cljs.core.async.close_BANG_(out);
var state_44656__$1 = state_44656;
var statearr_44667_45466 = state_44656__$1;
(statearr_44667_45466[(2)] = inst_44641);

(statearr_44667_45466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (10))){
var inst_44649 = (state_44656[(2)]);
var state_44656__$1 = (function (){var statearr_44668 = state_44656;
(statearr_44668[(8)] = inst_44649);

return statearr_44668;
})();
var statearr_44669_45467 = state_44656__$1;
(statearr_44669_45467[(2)] = null);

(statearr_44669_45467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44657 === (8))){
var inst_44638 = (state_44656[(7)]);
var state_44656__$1 = state_44656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44656__$1,(11),out,inst_44638);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__43389__auto__ = null;
var cljs$core$async$state_machine__43389__auto____0 = (function (){
var statearr_44670 = [null,null,null,null,null,null,null,null,null];
(statearr_44670[(0)] = cljs$core$async$state_machine__43389__auto__);

(statearr_44670[(1)] = (1));

return statearr_44670;
});
var cljs$core$async$state_machine__43389__auto____1 = (function (state_44656){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_44656);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e44671){if((e44671 instanceof Object)){
var ex__43392__auto__ = e44671;
var statearr_44672_45468 = state_44656;
(statearr_44672_45468[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45469 = state_44656;
state_44656 = G__45469;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$state_machine__43389__auto__ = function(state_44656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43389__auto____1.call(this,state_44656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43389__auto____0;
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43389__auto____1;
return cljs$core$async$state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44673 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44673[(6)] = c__43454__auto___45457);

return statearr_44673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44675 = arguments.length;
switch (G__44675) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43454__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_44737){
var state_val_44738 = (state_44737[(1)]);
if((state_val_44738 === (7))){
var inst_44733 = (state_44737[(2)]);
var state_44737__$1 = state_44737;
var statearr_44739_45475 = state_44737__$1;
(statearr_44739_45475[(2)] = inst_44733);

(statearr_44739_45475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (20))){
var inst_44703 = (state_44737[(7)]);
var inst_44714 = (state_44737[(2)]);
var inst_44715 = cljs.core.next(inst_44703);
var inst_44689 = inst_44715;
var inst_44690 = null;
var inst_44691 = (0);
var inst_44692 = (0);
var state_44737__$1 = (function (){var statearr_44740 = state_44737;
(statearr_44740[(8)] = inst_44690);

(statearr_44740[(9)] = inst_44691);

(statearr_44740[(10)] = inst_44714);

(statearr_44740[(11)] = inst_44692);

(statearr_44740[(12)] = inst_44689);

return statearr_44740;
})();
var statearr_44741_45480 = state_44737__$1;
(statearr_44741_45480[(2)] = null);

(statearr_44741_45480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (1))){
var state_44737__$1 = state_44737;
var statearr_44742_45482 = state_44737__$1;
(statearr_44742_45482[(2)] = null);

(statearr_44742_45482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (4))){
var inst_44678 = (state_44737[(13)]);
var inst_44678__$1 = (state_44737[(2)]);
var inst_44679 = (inst_44678__$1 == null);
var state_44737__$1 = (function (){var statearr_44743 = state_44737;
(statearr_44743[(13)] = inst_44678__$1);

return statearr_44743;
})();
if(cljs.core.truth_(inst_44679)){
var statearr_44744_45484 = state_44737__$1;
(statearr_44744_45484[(1)] = (5));

} else {
var statearr_44745_45485 = state_44737__$1;
(statearr_44745_45485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (15))){
var state_44737__$1 = state_44737;
var statearr_44749_45488 = state_44737__$1;
(statearr_44749_45488[(2)] = null);

(statearr_44749_45488[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (21))){
var state_44737__$1 = state_44737;
var statearr_44750_45490 = state_44737__$1;
(statearr_44750_45490[(2)] = null);

(statearr_44750_45490[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (13))){
var inst_44690 = (state_44737[(8)]);
var inst_44691 = (state_44737[(9)]);
var inst_44692 = (state_44737[(11)]);
var inst_44689 = (state_44737[(12)]);
var inst_44699 = (state_44737[(2)]);
var inst_44700 = (inst_44692 + (1));
var tmp44746 = inst_44690;
var tmp44747 = inst_44691;
var tmp44748 = inst_44689;
var inst_44689__$1 = tmp44748;
var inst_44690__$1 = tmp44746;
var inst_44691__$1 = tmp44747;
var inst_44692__$1 = inst_44700;
var state_44737__$1 = (function (){var statearr_44751 = state_44737;
(statearr_44751[(14)] = inst_44699);

(statearr_44751[(8)] = inst_44690__$1);

(statearr_44751[(9)] = inst_44691__$1);

(statearr_44751[(11)] = inst_44692__$1);

(statearr_44751[(12)] = inst_44689__$1);

return statearr_44751;
})();
var statearr_44752_45491 = state_44737__$1;
(statearr_44752_45491[(2)] = null);

(statearr_44752_45491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (22))){
var state_44737__$1 = state_44737;
var statearr_44753_45492 = state_44737__$1;
(statearr_44753_45492[(2)] = null);

(statearr_44753_45492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (6))){
var inst_44678 = (state_44737[(13)]);
var inst_44687 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44678) : f.call(null,inst_44678));
var inst_44688 = cljs.core.seq(inst_44687);
var inst_44689 = inst_44688;
var inst_44690 = null;
var inst_44691 = (0);
var inst_44692 = (0);
var state_44737__$1 = (function (){var statearr_44754 = state_44737;
(statearr_44754[(8)] = inst_44690);

(statearr_44754[(9)] = inst_44691);

(statearr_44754[(11)] = inst_44692);

(statearr_44754[(12)] = inst_44689);

return statearr_44754;
})();
var statearr_44755_45493 = state_44737__$1;
(statearr_44755_45493[(2)] = null);

(statearr_44755_45493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (17))){
var inst_44703 = (state_44737[(7)]);
var inst_44707 = cljs.core.chunk_first(inst_44703);
var inst_44708 = cljs.core.chunk_rest(inst_44703);
var inst_44709 = cljs.core.count(inst_44707);
var inst_44689 = inst_44708;
var inst_44690 = inst_44707;
var inst_44691 = inst_44709;
var inst_44692 = (0);
var state_44737__$1 = (function (){var statearr_44756 = state_44737;
(statearr_44756[(8)] = inst_44690);

(statearr_44756[(9)] = inst_44691);

(statearr_44756[(11)] = inst_44692);

(statearr_44756[(12)] = inst_44689);

return statearr_44756;
})();
var statearr_44757_45494 = state_44737__$1;
(statearr_44757_45494[(2)] = null);

(statearr_44757_45494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (3))){
var inst_44735 = (state_44737[(2)]);
var state_44737__$1 = state_44737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44737__$1,inst_44735);
} else {
if((state_val_44738 === (12))){
var inst_44723 = (state_44737[(2)]);
var state_44737__$1 = state_44737;
var statearr_44758_45495 = state_44737__$1;
(statearr_44758_45495[(2)] = inst_44723);

(statearr_44758_45495[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (2))){
var state_44737__$1 = state_44737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44737__$1,(4),in$);
} else {
if((state_val_44738 === (23))){
var inst_44731 = (state_44737[(2)]);
var state_44737__$1 = state_44737;
var statearr_44759_45496 = state_44737__$1;
(statearr_44759_45496[(2)] = inst_44731);

(statearr_44759_45496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (19))){
var inst_44718 = (state_44737[(2)]);
var state_44737__$1 = state_44737;
var statearr_44760_45497 = state_44737__$1;
(statearr_44760_45497[(2)] = inst_44718);

(statearr_44760_45497[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (11))){
var inst_44703 = (state_44737[(7)]);
var inst_44689 = (state_44737[(12)]);
var inst_44703__$1 = cljs.core.seq(inst_44689);
var state_44737__$1 = (function (){var statearr_44761 = state_44737;
(statearr_44761[(7)] = inst_44703__$1);

return statearr_44761;
})();
if(inst_44703__$1){
var statearr_44762_45498 = state_44737__$1;
(statearr_44762_45498[(1)] = (14));

} else {
var statearr_44763_45499 = state_44737__$1;
(statearr_44763_45499[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (9))){
var inst_44725 = (state_44737[(2)]);
var inst_44726 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44737__$1 = (function (){var statearr_44764 = state_44737;
(statearr_44764[(15)] = inst_44725);

return statearr_44764;
})();
if(cljs.core.truth_(inst_44726)){
var statearr_44765_45501 = state_44737__$1;
(statearr_44765_45501[(1)] = (21));

} else {
var statearr_44766_45502 = state_44737__$1;
(statearr_44766_45502[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (5))){
var inst_44681 = cljs.core.async.close_BANG_(out);
var state_44737__$1 = state_44737;
var statearr_44767_45503 = state_44737__$1;
(statearr_44767_45503[(2)] = inst_44681);

(statearr_44767_45503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (14))){
var inst_44703 = (state_44737[(7)]);
var inst_44705 = cljs.core.chunked_seq_QMARK_(inst_44703);
var state_44737__$1 = state_44737;
if(inst_44705){
var statearr_44768_45504 = state_44737__$1;
(statearr_44768_45504[(1)] = (17));

} else {
var statearr_44769_45505 = state_44737__$1;
(statearr_44769_45505[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (16))){
var inst_44721 = (state_44737[(2)]);
var state_44737__$1 = state_44737;
var statearr_44770_45506 = state_44737__$1;
(statearr_44770_45506[(2)] = inst_44721);

(statearr_44770_45506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44738 === (10))){
var inst_44690 = (state_44737[(8)]);
var inst_44692 = (state_44737[(11)]);
var inst_44697 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44690,inst_44692);
var state_44737__$1 = state_44737;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44737__$1,(13),out,inst_44697);
} else {
if((state_val_44738 === (18))){
var inst_44703 = (state_44737[(7)]);
var inst_44712 = cljs.core.first(inst_44703);
var state_44737__$1 = state_44737;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44737__$1,(20),out,inst_44712);
} else {
if((state_val_44738 === (8))){
var inst_44691 = (state_44737[(9)]);
var inst_44692 = (state_44737[(11)]);
var inst_44694 = (inst_44692 < inst_44691);
var inst_44695 = inst_44694;
var state_44737__$1 = state_44737;
if(cljs.core.truth_(inst_44695)){
var statearr_44771_45507 = state_44737__$1;
(statearr_44771_45507[(1)] = (10));

} else {
var statearr_44772_45508 = state_44737__$1;
(statearr_44772_45508[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
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
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43389__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43389__auto____0 = (function (){
var statearr_44773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44773[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43389__auto__);

(statearr_44773[(1)] = (1));

return statearr_44773;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43389__auto____1 = (function (state_44737){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_44737);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e44774){if((e44774 instanceof Object)){
var ex__43392__auto__ = e44774;
var statearr_44775_45509 = state_44737;
(statearr_44775_45509[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45510 = state_44737;
state_44737 = G__45510;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43389__auto__ = function(state_44737){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43389__auto____1.call(this,state_44737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43389__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43389__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44776 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44776[(6)] = c__43454__auto__);

return statearr_44776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));

return c__43454__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44778 = arguments.length;
switch (G__44778) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__44780 = arguments.length;
switch (G__44780) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__44782 = arguments.length;
switch (G__44782) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43454__auto___45514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_44806){
var state_val_44807 = (state_44806[(1)]);
if((state_val_44807 === (7))){
var inst_44801 = (state_44806[(2)]);
var state_44806__$1 = state_44806;
var statearr_44808_45515 = state_44806__$1;
(statearr_44808_45515[(2)] = inst_44801);

(statearr_44808_45515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44807 === (1))){
var inst_44783 = null;
var state_44806__$1 = (function (){var statearr_44809 = state_44806;
(statearr_44809[(7)] = inst_44783);

return statearr_44809;
})();
var statearr_44810_45516 = state_44806__$1;
(statearr_44810_45516[(2)] = null);

(statearr_44810_45516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44807 === (4))){
var inst_44786 = (state_44806[(8)]);
var inst_44786__$1 = (state_44806[(2)]);
var inst_44787 = (inst_44786__$1 == null);
var inst_44788 = cljs.core.not(inst_44787);
var state_44806__$1 = (function (){var statearr_44811 = state_44806;
(statearr_44811[(8)] = inst_44786__$1);

return statearr_44811;
})();
if(inst_44788){
var statearr_44812_45517 = state_44806__$1;
(statearr_44812_45517[(1)] = (5));

} else {
var statearr_44813_45518 = state_44806__$1;
(statearr_44813_45518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44807 === (6))){
var state_44806__$1 = state_44806;
var statearr_44814_45519 = state_44806__$1;
(statearr_44814_45519[(2)] = null);

(statearr_44814_45519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44807 === (3))){
var inst_44803 = (state_44806[(2)]);
var inst_44804 = cljs.core.async.close_BANG_(out);
var state_44806__$1 = (function (){var statearr_44815 = state_44806;
(statearr_44815[(9)] = inst_44803);

return statearr_44815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44806__$1,inst_44804);
} else {
if((state_val_44807 === (2))){
var state_44806__$1 = state_44806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44806__$1,(4),ch);
} else {
if((state_val_44807 === (11))){
var inst_44786 = (state_44806[(8)]);
var inst_44795 = (state_44806[(2)]);
var inst_44783 = inst_44786;
var state_44806__$1 = (function (){var statearr_44816 = state_44806;
(statearr_44816[(7)] = inst_44783);

(statearr_44816[(10)] = inst_44795);

return statearr_44816;
})();
var statearr_44817_45520 = state_44806__$1;
(statearr_44817_45520[(2)] = null);

(statearr_44817_45520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44807 === (9))){
var inst_44786 = (state_44806[(8)]);
var state_44806__$1 = state_44806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44806__$1,(11),out,inst_44786);
} else {
if((state_val_44807 === (5))){
var inst_44783 = (state_44806[(7)]);
var inst_44786 = (state_44806[(8)]);
var inst_44790 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44786,inst_44783);
var state_44806__$1 = state_44806;
if(inst_44790){
var statearr_44819_45521 = state_44806__$1;
(statearr_44819_45521[(1)] = (8));

} else {
var statearr_44820_45522 = state_44806__$1;
(statearr_44820_45522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44807 === (10))){
var inst_44798 = (state_44806[(2)]);
var state_44806__$1 = state_44806;
var statearr_44821_45523 = state_44806__$1;
(statearr_44821_45523[(2)] = inst_44798);

(statearr_44821_45523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44807 === (8))){
var inst_44783 = (state_44806[(7)]);
var tmp44818 = inst_44783;
var inst_44783__$1 = tmp44818;
var state_44806__$1 = (function (){var statearr_44822 = state_44806;
(statearr_44822[(7)] = inst_44783__$1);

return statearr_44822;
})();
var statearr_44823_45524 = state_44806__$1;
(statearr_44823_45524[(2)] = null);

(statearr_44823_45524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__43389__auto__ = null;
var cljs$core$async$state_machine__43389__auto____0 = (function (){
var statearr_44824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44824[(0)] = cljs$core$async$state_machine__43389__auto__);

(statearr_44824[(1)] = (1));

return statearr_44824;
});
var cljs$core$async$state_machine__43389__auto____1 = (function (state_44806){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_44806);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e44825){if((e44825 instanceof Object)){
var ex__43392__auto__ = e44825;
var statearr_44826_45525 = state_44806;
(statearr_44826_45525[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45526 = state_44806;
state_44806 = G__45526;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$state_machine__43389__auto__ = function(state_44806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43389__auto____1.call(this,state_44806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43389__auto____0;
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43389__auto____1;
return cljs$core$async$state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44827 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44827[(6)] = c__43454__auto___45514);

return statearr_44827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44829 = arguments.length;
switch (G__44829) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43454__auto___45528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_44867){
var state_val_44868 = (state_44867[(1)]);
if((state_val_44868 === (7))){
var inst_44863 = (state_44867[(2)]);
var state_44867__$1 = state_44867;
var statearr_44869_45529 = state_44867__$1;
(statearr_44869_45529[(2)] = inst_44863);

(statearr_44869_45529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (1))){
var inst_44830 = (new Array(n));
var inst_44831 = inst_44830;
var inst_44832 = (0);
var state_44867__$1 = (function (){var statearr_44870 = state_44867;
(statearr_44870[(7)] = inst_44832);

(statearr_44870[(8)] = inst_44831);

return statearr_44870;
})();
var statearr_44871_45530 = state_44867__$1;
(statearr_44871_45530[(2)] = null);

(statearr_44871_45530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (4))){
var inst_44835 = (state_44867[(9)]);
var inst_44835__$1 = (state_44867[(2)]);
var inst_44836 = (inst_44835__$1 == null);
var inst_44837 = cljs.core.not(inst_44836);
var state_44867__$1 = (function (){var statearr_44872 = state_44867;
(statearr_44872[(9)] = inst_44835__$1);

return statearr_44872;
})();
if(inst_44837){
var statearr_44873_45531 = state_44867__$1;
(statearr_44873_45531[(1)] = (5));

} else {
var statearr_44874_45532 = state_44867__$1;
(statearr_44874_45532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (15))){
var inst_44857 = (state_44867[(2)]);
var state_44867__$1 = state_44867;
var statearr_44875_45533 = state_44867__$1;
(statearr_44875_45533[(2)] = inst_44857);

(statearr_44875_45533[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (13))){
var state_44867__$1 = state_44867;
var statearr_44876_45534 = state_44867__$1;
(statearr_44876_45534[(2)] = null);

(statearr_44876_45534[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (6))){
var inst_44832 = (state_44867[(7)]);
var inst_44853 = (inst_44832 > (0));
var state_44867__$1 = state_44867;
if(cljs.core.truth_(inst_44853)){
var statearr_44877_45535 = state_44867__$1;
(statearr_44877_45535[(1)] = (12));

} else {
var statearr_44878_45536 = state_44867__$1;
(statearr_44878_45536[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (3))){
var inst_44865 = (state_44867[(2)]);
var state_44867__$1 = state_44867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44867__$1,inst_44865);
} else {
if((state_val_44868 === (12))){
var inst_44831 = (state_44867[(8)]);
var inst_44855 = cljs.core.vec(inst_44831);
var state_44867__$1 = state_44867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44867__$1,(15),out,inst_44855);
} else {
if((state_val_44868 === (2))){
var state_44867__$1 = state_44867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44867__$1,(4),ch);
} else {
if((state_val_44868 === (11))){
var inst_44847 = (state_44867[(2)]);
var inst_44848 = (new Array(n));
var inst_44831 = inst_44848;
var inst_44832 = (0);
var state_44867__$1 = (function (){var statearr_44879 = state_44867;
(statearr_44879[(7)] = inst_44832);

(statearr_44879[(8)] = inst_44831);

(statearr_44879[(10)] = inst_44847);

return statearr_44879;
})();
var statearr_44880_45537 = state_44867__$1;
(statearr_44880_45537[(2)] = null);

(statearr_44880_45537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (9))){
var inst_44831 = (state_44867[(8)]);
var inst_44845 = cljs.core.vec(inst_44831);
var state_44867__$1 = state_44867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44867__$1,(11),out,inst_44845);
} else {
if((state_val_44868 === (5))){
var inst_44832 = (state_44867[(7)]);
var inst_44831 = (state_44867[(8)]);
var inst_44835 = (state_44867[(9)]);
var inst_44840 = (state_44867[(11)]);
var inst_44839 = (inst_44831[inst_44832] = inst_44835);
var inst_44840__$1 = (inst_44832 + (1));
var inst_44841 = (inst_44840__$1 < n);
var state_44867__$1 = (function (){var statearr_44881 = state_44867;
(statearr_44881[(12)] = inst_44839);

(statearr_44881[(11)] = inst_44840__$1);

return statearr_44881;
})();
if(cljs.core.truth_(inst_44841)){
var statearr_44882_45538 = state_44867__$1;
(statearr_44882_45538[(1)] = (8));

} else {
var statearr_44883_45539 = state_44867__$1;
(statearr_44883_45539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (14))){
var inst_44860 = (state_44867[(2)]);
var inst_44861 = cljs.core.async.close_BANG_(out);
var state_44867__$1 = (function (){var statearr_44885 = state_44867;
(statearr_44885[(13)] = inst_44860);

return statearr_44885;
})();
var statearr_44886_45540 = state_44867__$1;
(statearr_44886_45540[(2)] = inst_44861);

(statearr_44886_45540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (10))){
var inst_44851 = (state_44867[(2)]);
var state_44867__$1 = state_44867;
var statearr_44887_45541 = state_44867__$1;
(statearr_44887_45541[(2)] = inst_44851);

(statearr_44887_45541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44868 === (8))){
var inst_44831 = (state_44867[(8)]);
var inst_44840 = (state_44867[(11)]);
var tmp44884 = inst_44831;
var inst_44831__$1 = tmp44884;
var inst_44832 = inst_44840;
var state_44867__$1 = (function (){var statearr_44888 = state_44867;
(statearr_44888[(7)] = inst_44832);

(statearr_44888[(8)] = inst_44831__$1);

return statearr_44888;
})();
var statearr_44889_45542 = state_44867__$1;
(statearr_44889_45542[(2)] = null);

(statearr_44889_45542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43389__auto__ = null;
var cljs$core$async$state_machine__43389__auto____0 = (function (){
var statearr_44890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44890[(0)] = cljs$core$async$state_machine__43389__auto__);

(statearr_44890[(1)] = (1));

return statearr_44890;
});
var cljs$core$async$state_machine__43389__auto____1 = (function (state_44867){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_44867);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e44891){if((e44891 instanceof Object)){
var ex__43392__auto__ = e44891;
var statearr_44892_45543 = state_44867;
(statearr_44892_45543[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44891;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45544 = state_44867;
state_44867 = G__45544;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$state_machine__43389__auto__ = function(state_44867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43389__auto____1.call(this,state_44867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43389__auto____0;
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43389__auto____1;
return cljs$core$async$state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44893 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44893[(6)] = c__43454__auto___45528);

return statearr_44893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44895 = arguments.length;
switch (G__44895) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43454__auto___45546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43455__auto__ = (function (){var switch__43388__auto__ = (function (state_44937){
var state_val_44938 = (state_44937[(1)]);
if((state_val_44938 === (7))){
var inst_44933 = (state_44937[(2)]);
var state_44937__$1 = state_44937;
var statearr_44939_45547 = state_44937__$1;
(statearr_44939_45547[(2)] = inst_44933);

(statearr_44939_45547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44938 === (1))){
var inst_44896 = [];
var inst_44897 = inst_44896;
var inst_44898 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44937__$1 = (function (){var statearr_44940 = state_44937;
(statearr_44940[(7)] = inst_44897);

(statearr_44940[(8)] = inst_44898);

return statearr_44940;
})();
var statearr_44941_45548 = state_44937__$1;
(statearr_44941_45548[(2)] = null);

(statearr_44941_45548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44938 === (4))){
var inst_44901 = (state_44937[(9)]);
var inst_44901__$1 = (state_44937[(2)]);
var inst_44902 = (inst_44901__$1 == null);
var inst_44903 = cljs.core.not(inst_44902);
var state_44937__$1 = (function (){var statearr_44942 = state_44937;
(statearr_44942[(9)] = inst_44901__$1);

return statearr_44942;
})();
if(inst_44903){
var statearr_44943_45549 = state_44937__$1;
(statearr_44943_45549[(1)] = (5));

} else {
var statearr_44944_45550 = state_44937__$1;
(statearr_44944_45550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44938 === (15))){
var inst_44927 = (state_44937[(2)]);
var state_44937__$1 = state_44937;
var statearr_44945_45551 = state_44937__$1;
(statearr_44945_45551[(2)] = inst_44927);

(statearr_44945_45551[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44938 === (13))){
var state_44937__$1 = state_44937;
var statearr_44946_45552 = state_44937__$1;
(statearr_44946_45552[(2)] = null);

(statearr_44946_45552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44938 === (6))){
var inst_44897 = (state_44937[(7)]);
var inst_44922 = inst_44897.length;
var inst_44923 = (inst_44922 > (0));
var state_44937__$1 = state_44937;
if(cljs.core.truth_(inst_44923)){
var statearr_44947_45553 = state_44937__$1;
(statearr_44947_45553[(1)] = (12));

} else {
var statearr_44948_45554 = state_44937__$1;
(statearr_44948_45554[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44938 === (3))){
var inst_44935 = (state_44937[(2)]);
var state_44937__$1 = state_44937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44937__$1,inst_44935);
} else {
if((state_val_44938 === (12))){
var inst_44897 = (state_44937[(7)]);
var inst_44925 = cljs.core.vec(inst_44897);
var state_44937__$1 = state_44937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44937__$1,(15),out,inst_44925);
} else {
if((state_val_44938 === (2))){
var state_44937__$1 = state_44937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44937__$1,(4),ch);
} else {
if((state_val_44938 === (11))){
var inst_44905 = (state_44937[(10)]);
var inst_44901 = (state_44937[(9)]);
var inst_44915 = (state_44937[(2)]);
var inst_44916 = [];
var inst_44917 = inst_44916.push(inst_44901);
var inst_44897 = inst_44916;
var inst_44898 = inst_44905;
var state_44937__$1 = (function (){var statearr_44949 = state_44937;
(statearr_44949[(7)] = inst_44897);

(statearr_44949[(8)] = inst_44898);

(statearr_44949[(11)] = inst_44915);

(statearr_44949[(12)] = inst_44917);

return statearr_44949;
})();
var statearr_44950_45555 = state_44937__$1;
(statearr_44950_45555[(2)] = null);

(statearr_44950_45555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44938 === (9))){
var inst_44897 = (state_44937[(7)]);
var inst_44913 = cljs.core.vec(inst_44897);
var state_44937__$1 = state_44937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44937__$1,(11),out,inst_44913);
} else {
if((state_val_44938 === (5))){
var inst_44905 = (state_44937[(10)]);
var inst_44898 = (state_44937[(8)]);
var inst_44901 = (state_44937[(9)]);
var inst_44905__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44901) : f.call(null,inst_44901));
var inst_44906 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44905__$1,inst_44898);
var inst_44907 = cljs.core.keyword_identical_QMARK_(inst_44898,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44908 = ((inst_44906) || (inst_44907));
var state_44937__$1 = (function (){var statearr_44951 = state_44937;
(statearr_44951[(10)] = inst_44905__$1);

return statearr_44951;
})();
if(cljs.core.truth_(inst_44908)){
var statearr_44952_45556 = state_44937__$1;
(statearr_44952_45556[(1)] = (8));

} else {
var statearr_44953_45557 = state_44937__$1;
(statearr_44953_45557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44938 === (14))){
var inst_44930 = (state_44937[(2)]);
var inst_44931 = cljs.core.async.close_BANG_(out);
var state_44937__$1 = (function (){var statearr_44955 = state_44937;
(statearr_44955[(13)] = inst_44930);

return statearr_44955;
})();
var statearr_44956_45558 = state_44937__$1;
(statearr_44956_45558[(2)] = inst_44931);

(statearr_44956_45558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44938 === (10))){
var inst_44920 = (state_44937[(2)]);
var state_44937__$1 = state_44937;
var statearr_44957_45559 = state_44937__$1;
(statearr_44957_45559[(2)] = inst_44920);

(statearr_44957_45559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44938 === (8))){
var inst_44897 = (state_44937[(7)]);
var inst_44905 = (state_44937[(10)]);
var inst_44901 = (state_44937[(9)]);
var inst_44910 = inst_44897.push(inst_44901);
var tmp44954 = inst_44897;
var inst_44897__$1 = tmp44954;
var inst_44898 = inst_44905;
var state_44937__$1 = (function (){var statearr_44958 = state_44937;
(statearr_44958[(7)] = inst_44897__$1);

(statearr_44958[(8)] = inst_44898);

(statearr_44958[(14)] = inst_44910);

return statearr_44958;
})();
var statearr_44959_45560 = state_44937__$1;
(statearr_44959_45560[(2)] = null);

(statearr_44959_45560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43389__auto__ = null;
var cljs$core$async$state_machine__43389__auto____0 = (function (){
var statearr_44960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44960[(0)] = cljs$core$async$state_machine__43389__auto__);

(statearr_44960[(1)] = (1));

return statearr_44960;
});
var cljs$core$async$state_machine__43389__auto____1 = (function (state_44937){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_44937);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e44961){if((e44961 instanceof Object)){
var ex__43392__auto__ = e44961;
var statearr_44962_45561 = state_44937;
(statearr_44962_45561[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44961;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45562 = state_44937;
state_44937 = G__45562;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
cljs$core$async$state_machine__43389__auto__ = function(state_44937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43389__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43389__auto____1.call(this,state_44937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43389__auto____0;
cljs$core$async$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43389__auto____1;
return cljs$core$async$state_machine__43389__auto__;
})()
})();
var state__43456__auto__ = (function (){var statearr_44963 = (f__43455__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43455__auto__.cljs$core$IFn$_invoke$arity$0() : f__43455__auto__.call(null));
(statearr_44963[(6)] = c__43454__auto___45546);

return statearr_44963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43456__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
