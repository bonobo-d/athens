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
var G__42577 = arguments.length;
switch (G__42577) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42578 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42578 = (function (f,blockable,meta42579){
this.f = f;
this.blockable = blockable;
this.meta42579 = meta42579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42580,meta42579__$1){
var self__ = this;
var _42580__$1 = this;
return (new cljs.core.async.t_cljs$core$async42578(self__.f,self__.blockable,meta42579__$1));
}));

(cljs.core.async.t_cljs$core$async42578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42580){
var self__ = this;
var _42580__$1 = this;
return self__.meta42579;
}));

(cljs.core.async.t_cljs$core$async42578.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42578.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42579","meta42579",172127052,null)], null);
}));

(cljs.core.async.t_cljs$core$async42578.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42578");

(cljs.core.async.t_cljs$core$async42578.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42578");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42578.
 */
cljs.core.async.__GT_t_cljs$core$async42578 = (function cljs$core$async$__GT_t_cljs$core$async42578(f__$1,blockable__$1,meta42579){
return (new cljs.core.async.t_cljs$core$async42578(f__$1,blockable__$1,meta42579));
});

}

return (new cljs.core.async.t_cljs$core$async42578(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42589 = arguments.length;
switch (G__42589) {
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
var G__42593 = arguments.length;
switch (G__42593) {
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
var G__42596 = arguments.length;
switch (G__42596) {
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
var val_44076 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44076) : fn1.call(null,val_44076));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44076) : fn1.call(null,val_44076));
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
var G__42601 = arguments.length;
switch (G__42601) {
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
var n__4613__auto___44078 = n;
var x_44079 = (0);
while(true){
if((x_44079 < n__4613__auto___44078)){
(a[x_44079] = x_44079);

var G__44080 = (x_44079 + (1));
x_44079 = G__44080;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42602 = (function (flag,meta42603){
this.flag = flag;
this.meta42603 = meta42603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42604,meta42603__$1){
var self__ = this;
var _42604__$1 = this;
return (new cljs.core.async.t_cljs$core$async42602(self__.flag,meta42603__$1));
}));

(cljs.core.async.t_cljs$core$async42602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42604){
var self__ = this;
var _42604__$1 = this;
return self__.meta42603;
}));

(cljs.core.async.t_cljs$core$async42602.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42602.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42602.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42602.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42603","meta42603",982033799,null)], null);
}));

(cljs.core.async.t_cljs$core$async42602.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42602");

(cljs.core.async.t_cljs$core$async42602.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42602");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42602.
 */
cljs.core.async.__GT_t_cljs$core$async42602 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42602(flag__$1,meta42603){
return (new cljs.core.async.t_cljs$core$async42602(flag__$1,meta42603));
});

}

return (new cljs.core.async.t_cljs$core$async42602(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42605 = (function (flag,cb,meta42606){
this.flag = flag;
this.cb = cb;
this.meta42606 = meta42606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42607,meta42606__$1){
var self__ = this;
var _42607__$1 = this;
return (new cljs.core.async.t_cljs$core$async42605(self__.flag,self__.cb,meta42606__$1));
}));

(cljs.core.async.t_cljs$core$async42605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42607){
var self__ = this;
var _42607__$1 = this;
return self__.meta42606;
}));

(cljs.core.async.t_cljs$core$async42605.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42606","meta42606",69422420,null)], null);
}));

(cljs.core.async.t_cljs$core$async42605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42605");

(cljs.core.async.t_cljs$core$async42605.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42605.
 */
cljs.core.async.__GT_t_cljs$core$async42605 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42605(flag__$1,cb__$1,meta42606){
return (new cljs.core.async.t_cljs$core$async42605(flag__$1,cb__$1,meta42606));
});

}

return (new cljs.core.async.t_cljs$core$async42605(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42608_SHARP_){
var G__42610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42608_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42610) : fret.call(null,G__42610));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42609_SHARP_){
var G__42611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42609_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42611) : fret.call(null,G__42611));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44085 = (i + (1));
i = G__44085;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___44087 = arguments.length;
var i__4737__auto___44088 = (0);
while(true){
if((i__4737__auto___44088 < len__4736__auto___44087)){
args__4742__auto__.push((arguments[i__4737__auto___44088]));

var G__44089 = (i__4737__auto___44088 + (1));
i__4737__auto___44088 = G__44089;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42614){
var map__42615 = p__42614;
var map__42615__$1 = (((((!((map__42615 == null))))?(((((map__42615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42615):map__42615);
var opts = map__42615__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42612){
var G__42613 = cljs.core.first(seq42612);
var seq42612__$1 = cljs.core.next(seq42612);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42613,seq42612__$1);
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
var G__42618 = arguments.length;
switch (G__42618) {
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
var c__42519__auto___44099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_42642){
var state_val_42643 = (state_42642[(1)]);
if((state_val_42643 === (7))){
var inst_42638 = (state_42642[(2)]);
var state_42642__$1 = state_42642;
var statearr_42644_44101 = state_42642__$1;
(statearr_42644_44101[(2)] = inst_42638);

(statearr_42644_44101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (1))){
var state_42642__$1 = state_42642;
var statearr_42645_44102 = state_42642__$1;
(statearr_42645_44102[(2)] = null);

(statearr_42645_44102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (4))){
var inst_42621 = (state_42642[(7)]);
var inst_42621__$1 = (state_42642[(2)]);
var inst_42622 = (inst_42621__$1 == null);
var state_42642__$1 = (function (){var statearr_42646 = state_42642;
(statearr_42646[(7)] = inst_42621__$1);

return statearr_42646;
})();
if(cljs.core.truth_(inst_42622)){
var statearr_42647_44105 = state_42642__$1;
(statearr_42647_44105[(1)] = (5));

} else {
var statearr_42648_44107 = state_42642__$1;
(statearr_42648_44107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (13))){
var state_42642__$1 = state_42642;
var statearr_42649_44108 = state_42642__$1;
(statearr_42649_44108[(2)] = null);

(statearr_42649_44108[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (6))){
var inst_42621 = (state_42642[(7)]);
var state_42642__$1 = state_42642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42642__$1,(11),to,inst_42621);
} else {
if((state_val_42643 === (3))){
var inst_42640 = (state_42642[(2)]);
var state_42642__$1 = state_42642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42642__$1,inst_42640);
} else {
if((state_val_42643 === (12))){
var state_42642__$1 = state_42642;
var statearr_42650_44109 = state_42642__$1;
(statearr_42650_44109[(2)] = null);

(statearr_42650_44109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (2))){
var state_42642__$1 = state_42642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42642__$1,(4),from);
} else {
if((state_val_42643 === (11))){
var inst_42631 = (state_42642[(2)]);
var state_42642__$1 = state_42642;
if(cljs.core.truth_(inst_42631)){
var statearr_42651_44111 = state_42642__$1;
(statearr_42651_44111[(1)] = (12));

} else {
var statearr_42652_44112 = state_42642__$1;
(statearr_42652_44112[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (9))){
var state_42642__$1 = state_42642;
var statearr_42653_44113 = state_42642__$1;
(statearr_42653_44113[(2)] = null);

(statearr_42653_44113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (5))){
var state_42642__$1 = state_42642;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42654_44114 = state_42642__$1;
(statearr_42654_44114[(1)] = (8));

} else {
var statearr_42655_44115 = state_42642__$1;
(statearr_42655_44115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (14))){
var inst_42636 = (state_42642[(2)]);
var state_42642__$1 = state_42642;
var statearr_42656_44116 = state_42642__$1;
(statearr_42656_44116[(2)] = inst_42636);

(statearr_42656_44116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (10))){
var inst_42628 = (state_42642[(2)]);
var state_42642__$1 = state_42642;
var statearr_42657_44117 = state_42642__$1;
(statearr_42657_44117[(2)] = inst_42628);

(statearr_42657_44117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42643 === (8))){
var inst_42625 = cljs.core.async.close_BANG_(to);
var state_42642__$1 = state_42642;
var statearr_42658_44118 = state_42642__$1;
(statearr_42658_44118[(2)] = inst_42625);

(statearr_42658_44118[(1)] = (10));


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
var cljs$core$async$state_machine__42484__auto__ = null;
var cljs$core$async$state_machine__42484__auto____0 = (function (){
var statearr_42659 = [null,null,null,null,null,null,null,null];
(statearr_42659[(0)] = cljs$core$async$state_machine__42484__auto__);

(statearr_42659[(1)] = (1));

return statearr_42659;
});
var cljs$core$async$state_machine__42484__auto____1 = (function (state_42642){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_42642);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e42660){var ex__42487__auto__ = e42660;
var statearr_42661_44122 = state_42642;
(statearr_42661_44122[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_42642[(4)]))){
var statearr_42662_44123 = state_42642;
(statearr_42662_44123[(1)] = cljs.core.first((state_42642[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44124 = state_42642;
state_42642 = G__44124;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$state_machine__42484__auto__ = function(state_42642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42484__auto____1.call(this,state_42642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42484__auto____0;
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42484__auto____1;
return cljs$core$async$state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_42663 = f__42520__auto__();
(statearr_42663[(6)] = c__42519__auto___44099);

return statearr_42663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
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
var process = (function (p__42664){
var vec__42665 = p__42664;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42665,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42665,(1),null);
var job = vec__42665;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42519__auto___44125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_42672){
var state_val_42673 = (state_42672[(1)]);
if((state_val_42673 === (1))){
var state_42672__$1 = state_42672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42672__$1,(2),res,v);
} else {
if((state_val_42673 === (2))){
var inst_42669 = (state_42672[(2)]);
var inst_42670 = cljs.core.async.close_BANG_(res);
var state_42672__$1 = (function (){var statearr_42674 = state_42672;
(statearr_42674[(7)] = inst_42669);

return statearr_42674;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42672__$1,inst_42670);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____0 = (function (){
var statearr_42675 = [null,null,null,null,null,null,null,null];
(statearr_42675[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__);

(statearr_42675[(1)] = (1));

return statearr_42675;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____1 = (function (state_42672){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_42672);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e42676){var ex__42487__auto__ = e42676;
var statearr_42677_44126 = state_42672;
(statearr_42677_44126[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_42672[(4)]))){
var statearr_42678_44127 = state_42672;
(statearr_42678_44127[(1)] = cljs.core.first((state_42672[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44128 = state_42672;
state_42672 = G__44128;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__ = function(state_42672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____1.call(this,state_42672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_42679 = f__42520__auto__();
(statearr_42679[(6)] = c__42519__auto___44125);

return statearr_42679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42680){
var vec__42681 = p__42680;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42681,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42681,(1),null);
var job = vec__42681;
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
var n__4613__auto___44129 = n;
var __44130 = (0);
while(true){
if((__44130 < n__4613__auto___44129)){
var G__42684_44131 = type;
var G__42684_44132__$1 = (((G__42684_44131 instanceof cljs.core.Keyword))?G__42684_44131.fqn:null);
switch (G__42684_44132__$1) {
case "compute":
var c__42519__auto___44134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44130,c__42519__auto___44134,G__42684_44131,G__42684_44132__$1,n__4613__auto___44129,jobs,results,process,async){
return (function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = ((function (__44130,c__42519__auto___44134,G__42684_44131,G__42684_44132__$1,n__4613__auto___44129,jobs,results,process,async){
return (function (state_42697){
var state_val_42698 = (state_42697[(1)]);
if((state_val_42698 === (1))){
var state_42697__$1 = state_42697;
var statearr_42699_44135 = state_42697__$1;
(statearr_42699_44135[(2)] = null);

(statearr_42699_44135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42698 === (2))){
var state_42697__$1 = state_42697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42697__$1,(4),jobs);
} else {
if((state_val_42698 === (3))){
var inst_42695 = (state_42697[(2)]);
var state_42697__$1 = state_42697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42697__$1,inst_42695);
} else {
if((state_val_42698 === (4))){
var inst_42687 = (state_42697[(2)]);
var inst_42688 = process(inst_42687);
var state_42697__$1 = state_42697;
if(cljs.core.truth_(inst_42688)){
var statearr_42700_44136 = state_42697__$1;
(statearr_42700_44136[(1)] = (5));

} else {
var statearr_42701_44137 = state_42697__$1;
(statearr_42701_44137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42698 === (5))){
var state_42697__$1 = state_42697;
var statearr_42702_44138 = state_42697__$1;
(statearr_42702_44138[(2)] = null);

(statearr_42702_44138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42698 === (6))){
var state_42697__$1 = state_42697;
var statearr_42703_44139 = state_42697__$1;
(statearr_42703_44139[(2)] = null);

(statearr_42703_44139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42698 === (7))){
var inst_42693 = (state_42697[(2)]);
var state_42697__$1 = state_42697;
var statearr_42704_44144 = state_42697__$1;
(statearr_42704_44144[(2)] = inst_42693);

(statearr_42704_44144[(1)] = (3));


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
});})(__44130,c__42519__auto___44134,G__42684_44131,G__42684_44132__$1,n__4613__auto___44129,jobs,results,process,async))
;
return ((function (__44130,switch__42483__auto__,c__42519__auto___44134,G__42684_44131,G__42684_44132__$1,n__4613__auto___44129,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____0 = (function (){
var statearr_42705 = [null,null,null,null,null,null,null];
(statearr_42705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__);

(statearr_42705[(1)] = (1));

return statearr_42705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____1 = (function (state_42697){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_42697);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e42706){var ex__42487__auto__ = e42706;
var statearr_42707_44153 = state_42697;
(statearr_42707_44153[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_42697[(4)]))){
var statearr_42708_44154 = state_42697;
(statearr_42708_44154[(1)] = cljs.core.first((state_42697[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44155 = state_42697;
state_42697 = G__44155;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__ = function(state_42697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____1.call(this,state_42697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__;
})()
;})(__44130,switch__42483__auto__,c__42519__auto___44134,G__42684_44131,G__42684_44132__$1,n__4613__auto___44129,jobs,results,process,async))
})();
var state__42521__auto__ = (function (){var statearr_42709 = f__42520__auto__();
(statearr_42709[(6)] = c__42519__auto___44134);

return statearr_42709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
});})(__44130,c__42519__auto___44134,G__42684_44131,G__42684_44132__$1,n__4613__auto___44129,jobs,results,process,async))
);


break;
case "async":
var c__42519__auto___44157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44130,c__42519__auto___44157,G__42684_44131,G__42684_44132__$1,n__4613__auto___44129,jobs,results,process,async){
return (function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = ((function (__44130,c__42519__auto___44157,G__42684_44131,G__42684_44132__$1,n__4613__auto___44129,jobs,results,process,async){
return (function (state_42722){
var state_val_42723 = (state_42722[(1)]);
if((state_val_42723 === (1))){
var state_42722__$1 = state_42722;
var statearr_42724_44159 = state_42722__$1;
(statearr_42724_44159[(2)] = null);

(statearr_42724_44159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (2))){
var state_42722__$1 = state_42722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42722__$1,(4),jobs);
} else {
if((state_val_42723 === (3))){
var inst_42720 = (state_42722[(2)]);
var state_42722__$1 = state_42722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42722__$1,inst_42720);
} else {
if((state_val_42723 === (4))){
var inst_42712 = (state_42722[(2)]);
var inst_42713 = async(inst_42712);
var state_42722__$1 = state_42722;
if(cljs.core.truth_(inst_42713)){
var statearr_42725_44160 = state_42722__$1;
(statearr_42725_44160[(1)] = (5));

} else {
var statearr_42726_44161 = state_42722__$1;
(statearr_42726_44161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (5))){
var state_42722__$1 = state_42722;
var statearr_42727_44163 = state_42722__$1;
(statearr_42727_44163[(2)] = null);

(statearr_42727_44163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (6))){
var state_42722__$1 = state_42722;
var statearr_42728_44165 = state_42722__$1;
(statearr_42728_44165[(2)] = null);

(statearr_42728_44165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42723 === (7))){
var inst_42718 = (state_42722[(2)]);
var state_42722__$1 = state_42722;
var statearr_42729_44167 = state_42722__$1;
(statearr_42729_44167[(2)] = inst_42718);

(statearr_42729_44167[(1)] = (3));


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
});})(__44130,c__42519__auto___44157,G__42684_44131,G__42684_44132__$1,n__4613__auto___44129,jobs,results,process,async))
;
return ((function (__44130,switch__42483__auto__,c__42519__auto___44157,G__42684_44131,G__42684_44132__$1,n__4613__auto___44129,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____0 = (function (){
var statearr_42730 = [null,null,null,null,null,null,null];
(statearr_42730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__);

(statearr_42730[(1)] = (1));

return statearr_42730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____1 = (function (state_42722){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_42722);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e42731){var ex__42487__auto__ = e42731;
var statearr_42732_44168 = state_42722;
(statearr_42732_44168[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_42722[(4)]))){
var statearr_42733_44169 = state_42722;
(statearr_42733_44169[(1)] = cljs.core.first((state_42722[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44170 = state_42722;
state_42722 = G__44170;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__ = function(state_42722){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____1.call(this,state_42722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__;
})()
;})(__44130,switch__42483__auto__,c__42519__auto___44157,G__42684_44131,G__42684_44132__$1,n__4613__auto___44129,jobs,results,process,async))
})();
var state__42521__auto__ = (function (){var statearr_42734 = f__42520__auto__();
(statearr_42734[(6)] = c__42519__auto___44157);

return statearr_42734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
});})(__44130,c__42519__auto___44157,G__42684_44131,G__42684_44132__$1,n__4613__auto___44129,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42684_44132__$1)].join('')));

}

var G__44171 = (__44130 + (1));
__44130 = G__44171;
continue;
} else {
}
break;
}

var c__42519__auto___44172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_42756){
var state_val_42757 = (state_42756[(1)]);
if((state_val_42757 === (7))){
var inst_42752 = (state_42756[(2)]);
var state_42756__$1 = state_42756;
var statearr_42758_44173 = state_42756__$1;
(statearr_42758_44173[(2)] = inst_42752);

(statearr_42758_44173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (1))){
var state_42756__$1 = state_42756;
var statearr_42759_44174 = state_42756__$1;
(statearr_42759_44174[(2)] = null);

(statearr_42759_44174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (4))){
var inst_42737 = (state_42756[(7)]);
var inst_42737__$1 = (state_42756[(2)]);
var inst_42738 = (inst_42737__$1 == null);
var state_42756__$1 = (function (){var statearr_42760 = state_42756;
(statearr_42760[(7)] = inst_42737__$1);

return statearr_42760;
})();
if(cljs.core.truth_(inst_42738)){
var statearr_42761_44175 = state_42756__$1;
(statearr_42761_44175[(1)] = (5));

} else {
var statearr_42762_44176 = state_42756__$1;
(statearr_42762_44176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (6))){
var inst_42737 = (state_42756[(7)]);
var inst_42742 = (state_42756[(8)]);
var inst_42742__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42743 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42744 = [inst_42737,inst_42742__$1];
var inst_42745 = (new cljs.core.PersistentVector(null,2,(5),inst_42743,inst_42744,null));
var state_42756__$1 = (function (){var statearr_42763 = state_42756;
(statearr_42763[(8)] = inst_42742__$1);

return statearr_42763;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42756__$1,(8),jobs,inst_42745);
} else {
if((state_val_42757 === (3))){
var inst_42754 = (state_42756[(2)]);
var state_42756__$1 = state_42756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42756__$1,inst_42754);
} else {
if((state_val_42757 === (2))){
var state_42756__$1 = state_42756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42756__$1,(4),from);
} else {
if((state_val_42757 === (9))){
var inst_42749 = (state_42756[(2)]);
var state_42756__$1 = (function (){var statearr_42764 = state_42756;
(statearr_42764[(9)] = inst_42749);

return statearr_42764;
})();
var statearr_42765_44177 = state_42756__$1;
(statearr_42765_44177[(2)] = null);

(statearr_42765_44177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (5))){
var inst_42740 = cljs.core.async.close_BANG_(jobs);
var state_42756__$1 = state_42756;
var statearr_42766_44178 = state_42756__$1;
(statearr_42766_44178[(2)] = inst_42740);

(statearr_42766_44178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (8))){
var inst_42742 = (state_42756[(8)]);
var inst_42747 = (state_42756[(2)]);
var state_42756__$1 = (function (){var statearr_42767 = state_42756;
(statearr_42767[(10)] = inst_42747);

return statearr_42767;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42756__$1,(9),results,inst_42742);
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
var cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____0 = (function (){
var statearr_42768 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42768[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__);

(statearr_42768[(1)] = (1));

return statearr_42768;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____1 = (function (state_42756){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_42756);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e42769){var ex__42487__auto__ = e42769;
var statearr_42770_44179 = state_42756;
(statearr_42770_44179[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_42756[(4)]))){
var statearr_42771_44180 = state_42756;
(statearr_42771_44180[(1)] = cljs.core.first((state_42756[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44181 = state_42756;
state_42756 = G__44181;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__ = function(state_42756){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____1.call(this,state_42756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_42772 = f__42520__auto__();
(statearr_42772[(6)] = c__42519__auto___44172);

return statearr_42772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));


var c__42519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_42810){
var state_val_42811 = (state_42810[(1)]);
if((state_val_42811 === (7))){
var inst_42806 = (state_42810[(2)]);
var state_42810__$1 = state_42810;
var statearr_42812_44182 = state_42810__$1;
(statearr_42812_44182[(2)] = inst_42806);

(statearr_42812_44182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (20))){
var state_42810__$1 = state_42810;
var statearr_42813_44183 = state_42810__$1;
(statearr_42813_44183[(2)] = null);

(statearr_42813_44183[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (1))){
var state_42810__$1 = state_42810;
var statearr_42814_44184 = state_42810__$1;
(statearr_42814_44184[(2)] = null);

(statearr_42814_44184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (4))){
var inst_42775 = (state_42810[(7)]);
var inst_42775__$1 = (state_42810[(2)]);
var inst_42776 = (inst_42775__$1 == null);
var state_42810__$1 = (function (){var statearr_42815 = state_42810;
(statearr_42815[(7)] = inst_42775__$1);

return statearr_42815;
})();
if(cljs.core.truth_(inst_42776)){
var statearr_42816_44185 = state_42810__$1;
(statearr_42816_44185[(1)] = (5));

} else {
var statearr_42817_44186 = state_42810__$1;
(statearr_42817_44186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (15))){
var inst_42788 = (state_42810[(8)]);
var state_42810__$1 = state_42810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42810__$1,(18),to,inst_42788);
} else {
if((state_val_42811 === (21))){
var inst_42801 = (state_42810[(2)]);
var state_42810__$1 = state_42810;
var statearr_42818_44187 = state_42810__$1;
(statearr_42818_44187[(2)] = inst_42801);

(statearr_42818_44187[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (13))){
var inst_42803 = (state_42810[(2)]);
var state_42810__$1 = (function (){var statearr_42819 = state_42810;
(statearr_42819[(9)] = inst_42803);

return statearr_42819;
})();
var statearr_42820_44188 = state_42810__$1;
(statearr_42820_44188[(2)] = null);

(statearr_42820_44188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (6))){
var inst_42775 = (state_42810[(7)]);
var state_42810__$1 = state_42810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42810__$1,(11),inst_42775);
} else {
if((state_val_42811 === (17))){
var inst_42796 = (state_42810[(2)]);
var state_42810__$1 = state_42810;
if(cljs.core.truth_(inst_42796)){
var statearr_42821_44189 = state_42810__$1;
(statearr_42821_44189[(1)] = (19));

} else {
var statearr_42822_44190 = state_42810__$1;
(statearr_42822_44190[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (3))){
var inst_42808 = (state_42810[(2)]);
var state_42810__$1 = state_42810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42810__$1,inst_42808);
} else {
if((state_val_42811 === (12))){
var inst_42785 = (state_42810[(10)]);
var state_42810__$1 = state_42810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42810__$1,(14),inst_42785);
} else {
if((state_val_42811 === (2))){
var state_42810__$1 = state_42810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42810__$1,(4),results);
} else {
if((state_val_42811 === (19))){
var state_42810__$1 = state_42810;
var statearr_42823_44191 = state_42810__$1;
(statearr_42823_44191[(2)] = null);

(statearr_42823_44191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (11))){
var inst_42785 = (state_42810[(2)]);
var state_42810__$1 = (function (){var statearr_42824 = state_42810;
(statearr_42824[(10)] = inst_42785);

return statearr_42824;
})();
var statearr_42825_44192 = state_42810__$1;
(statearr_42825_44192[(2)] = null);

(statearr_42825_44192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (9))){
var state_42810__$1 = state_42810;
var statearr_42826_44193 = state_42810__$1;
(statearr_42826_44193[(2)] = null);

(statearr_42826_44193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (5))){
var state_42810__$1 = state_42810;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42827_44194 = state_42810__$1;
(statearr_42827_44194[(1)] = (8));

} else {
var statearr_42828_44195 = state_42810__$1;
(statearr_42828_44195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (14))){
var inst_42788 = (state_42810[(8)]);
var inst_42788__$1 = (state_42810[(2)]);
var inst_42789 = (inst_42788__$1 == null);
var inst_42790 = cljs.core.not(inst_42789);
var state_42810__$1 = (function (){var statearr_42829 = state_42810;
(statearr_42829[(8)] = inst_42788__$1);

return statearr_42829;
})();
if(inst_42790){
var statearr_42830_44196 = state_42810__$1;
(statearr_42830_44196[(1)] = (15));

} else {
var statearr_42831_44197 = state_42810__$1;
(statearr_42831_44197[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (16))){
var state_42810__$1 = state_42810;
var statearr_42832_44198 = state_42810__$1;
(statearr_42832_44198[(2)] = false);

(statearr_42832_44198[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (10))){
var inst_42782 = (state_42810[(2)]);
var state_42810__$1 = state_42810;
var statearr_42833_44199 = state_42810__$1;
(statearr_42833_44199[(2)] = inst_42782);

(statearr_42833_44199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (18))){
var inst_42793 = (state_42810[(2)]);
var state_42810__$1 = state_42810;
var statearr_42834_44200 = state_42810__$1;
(statearr_42834_44200[(2)] = inst_42793);

(statearr_42834_44200[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (8))){
var inst_42779 = cljs.core.async.close_BANG_(to);
var state_42810__$1 = state_42810;
var statearr_42835_44201 = state_42810__$1;
(statearr_42835_44201[(2)] = inst_42779);

(statearr_42835_44201[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____0 = (function (){
var statearr_42836 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__);

(statearr_42836[(1)] = (1));

return statearr_42836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____1 = (function (state_42810){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_42810);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e42837){var ex__42487__auto__ = e42837;
var statearr_42838_44202 = state_42810;
(statearr_42838_44202[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_42810[(4)]))){
var statearr_42839_44203 = state_42810;
(statearr_42839_44203[(1)] = cljs.core.first((state_42810[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44204 = state_42810;
state_42810 = G__44204;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__ = function(state_42810){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____1.call(this,state_42810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_42840 = f__42520__auto__();
(statearr_42840[(6)] = c__42519__auto__);

return statearr_42840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));

return c__42519__auto__;
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
var G__42842 = arguments.length;
switch (G__42842) {
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
var G__42844 = arguments.length;
switch (G__42844) {
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
var G__42846 = arguments.length;
switch (G__42846) {
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
var c__42519__auto___44208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_42872){
var state_val_42873 = (state_42872[(1)]);
if((state_val_42873 === (7))){
var inst_42868 = (state_42872[(2)]);
var state_42872__$1 = state_42872;
var statearr_42874_44209 = state_42872__$1;
(statearr_42874_44209[(2)] = inst_42868);

(statearr_42874_44209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42873 === (1))){
var state_42872__$1 = state_42872;
var statearr_42875_44210 = state_42872__$1;
(statearr_42875_44210[(2)] = null);

(statearr_42875_44210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42873 === (4))){
var inst_42849 = (state_42872[(7)]);
var inst_42849__$1 = (state_42872[(2)]);
var inst_42850 = (inst_42849__$1 == null);
var state_42872__$1 = (function (){var statearr_42876 = state_42872;
(statearr_42876[(7)] = inst_42849__$1);

return statearr_42876;
})();
if(cljs.core.truth_(inst_42850)){
var statearr_42877_44211 = state_42872__$1;
(statearr_42877_44211[(1)] = (5));

} else {
var statearr_42878_44212 = state_42872__$1;
(statearr_42878_44212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42873 === (13))){
var state_42872__$1 = state_42872;
var statearr_42879_44213 = state_42872__$1;
(statearr_42879_44213[(2)] = null);

(statearr_42879_44213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42873 === (6))){
var inst_42849 = (state_42872[(7)]);
var inst_42855 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42849) : p.call(null,inst_42849));
var state_42872__$1 = state_42872;
if(cljs.core.truth_(inst_42855)){
var statearr_42880_44214 = state_42872__$1;
(statearr_42880_44214[(1)] = (9));

} else {
var statearr_42881_44215 = state_42872__$1;
(statearr_42881_44215[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42873 === (3))){
var inst_42870 = (state_42872[(2)]);
var state_42872__$1 = state_42872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42872__$1,inst_42870);
} else {
if((state_val_42873 === (12))){
var state_42872__$1 = state_42872;
var statearr_42882_44216 = state_42872__$1;
(statearr_42882_44216[(2)] = null);

(statearr_42882_44216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42873 === (2))){
var state_42872__$1 = state_42872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42872__$1,(4),ch);
} else {
if((state_val_42873 === (11))){
var inst_42849 = (state_42872[(7)]);
var inst_42859 = (state_42872[(2)]);
var state_42872__$1 = state_42872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42872__$1,(8),inst_42859,inst_42849);
} else {
if((state_val_42873 === (9))){
var state_42872__$1 = state_42872;
var statearr_42883_44217 = state_42872__$1;
(statearr_42883_44217[(2)] = tc);

(statearr_42883_44217[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42873 === (5))){
var inst_42852 = cljs.core.async.close_BANG_(tc);
var inst_42853 = cljs.core.async.close_BANG_(fc);
var state_42872__$1 = (function (){var statearr_42884 = state_42872;
(statearr_42884[(8)] = inst_42852);

return statearr_42884;
})();
var statearr_42885_44218 = state_42872__$1;
(statearr_42885_44218[(2)] = inst_42853);

(statearr_42885_44218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42873 === (14))){
var inst_42866 = (state_42872[(2)]);
var state_42872__$1 = state_42872;
var statearr_42886_44219 = state_42872__$1;
(statearr_42886_44219[(2)] = inst_42866);

(statearr_42886_44219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42873 === (10))){
var state_42872__$1 = state_42872;
var statearr_42887_44220 = state_42872__$1;
(statearr_42887_44220[(2)] = fc);

(statearr_42887_44220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42873 === (8))){
var inst_42861 = (state_42872[(2)]);
var state_42872__$1 = state_42872;
if(cljs.core.truth_(inst_42861)){
var statearr_42888_44221 = state_42872__$1;
(statearr_42888_44221[(1)] = (12));

} else {
var statearr_42889_44222 = state_42872__$1;
(statearr_42889_44222[(1)] = (13));

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
var cljs$core$async$state_machine__42484__auto__ = null;
var cljs$core$async$state_machine__42484__auto____0 = (function (){
var statearr_42890 = [null,null,null,null,null,null,null,null,null];
(statearr_42890[(0)] = cljs$core$async$state_machine__42484__auto__);

(statearr_42890[(1)] = (1));

return statearr_42890;
});
var cljs$core$async$state_machine__42484__auto____1 = (function (state_42872){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_42872);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e42891){var ex__42487__auto__ = e42891;
var statearr_42892_44223 = state_42872;
(statearr_42892_44223[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_42872[(4)]))){
var statearr_42893_44224 = state_42872;
(statearr_42893_44224[(1)] = cljs.core.first((state_42872[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44225 = state_42872;
state_42872 = G__44225;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$state_machine__42484__auto__ = function(state_42872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42484__auto____1.call(this,state_42872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42484__auto____0;
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42484__auto____1;
return cljs$core$async$state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_42894 = f__42520__auto__();
(statearr_42894[(6)] = c__42519__auto___44208);

return statearr_42894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
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
var c__42519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_42916){
var state_val_42917 = (state_42916[(1)]);
if((state_val_42917 === (7))){
var inst_42912 = (state_42916[(2)]);
var state_42916__$1 = state_42916;
var statearr_42918_44226 = state_42916__$1;
(statearr_42918_44226[(2)] = inst_42912);

(statearr_42918_44226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (1))){
var inst_42895 = init;
var inst_42896 = inst_42895;
var state_42916__$1 = (function (){var statearr_42919 = state_42916;
(statearr_42919[(7)] = inst_42896);

return statearr_42919;
})();
var statearr_42920_44227 = state_42916__$1;
(statearr_42920_44227[(2)] = null);

(statearr_42920_44227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (4))){
var inst_42899 = (state_42916[(8)]);
var inst_42899__$1 = (state_42916[(2)]);
var inst_42900 = (inst_42899__$1 == null);
var state_42916__$1 = (function (){var statearr_42921 = state_42916;
(statearr_42921[(8)] = inst_42899__$1);

return statearr_42921;
})();
if(cljs.core.truth_(inst_42900)){
var statearr_42922_44228 = state_42916__$1;
(statearr_42922_44228[(1)] = (5));

} else {
var statearr_42923_44229 = state_42916__$1;
(statearr_42923_44229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (6))){
var inst_42896 = (state_42916[(7)]);
var inst_42899 = (state_42916[(8)]);
var inst_42903 = (state_42916[(9)]);
var inst_42903__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42896,inst_42899) : f.call(null,inst_42896,inst_42899));
var inst_42904 = cljs.core.reduced_QMARK_(inst_42903__$1);
var state_42916__$1 = (function (){var statearr_42924 = state_42916;
(statearr_42924[(9)] = inst_42903__$1);

return statearr_42924;
})();
if(inst_42904){
var statearr_42925_44230 = state_42916__$1;
(statearr_42925_44230[(1)] = (8));

} else {
var statearr_42926_44231 = state_42916__$1;
(statearr_42926_44231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (3))){
var inst_42914 = (state_42916[(2)]);
var state_42916__$1 = state_42916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42916__$1,inst_42914);
} else {
if((state_val_42917 === (2))){
var state_42916__$1 = state_42916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42916__$1,(4),ch);
} else {
if((state_val_42917 === (9))){
var inst_42903 = (state_42916[(9)]);
var inst_42896 = inst_42903;
var state_42916__$1 = (function (){var statearr_42927 = state_42916;
(statearr_42927[(7)] = inst_42896);

return statearr_42927;
})();
var statearr_42928_44232 = state_42916__$1;
(statearr_42928_44232[(2)] = null);

(statearr_42928_44232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (5))){
var inst_42896 = (state_42916[(7)]);
var state_42916__$1 = state_42916;
var statearr_42929_44233 = state_42916__$1;
(statearr_42929_44233[(2)] = inst_42896);

(statearr_42929_44233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (10))){
var inst_42910 = (state_42916[(2)]);
var state_42916__$1 = state_42916;
var statearr_42930_44234 = state_42916__$1;
(statearr_42930_44234[(2)] = inst_42910);

(statearr_42930_44234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42917 === (8))){
var inst_42903 = (state_42916[(9)]);
var inst_42906 = cljs.core.deref(inst_42903);
var state_42916__$1 = state_42916;
var statearr_42931_44235 = state_42916__$1;
(statearr_42931_44235[(2)] = inst_42906);

(statearr_42931_44235[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__42484__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42484__auto____0 = (function (){
var statearr_42932 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42932[(0)] = cljs$core$async$reduce_$_state_machine__42484__auto__);

(statearr_42932[(1)] = (1));

return statearr_42932;
});
var cljs$core$async$reduce_$_state_machine__42484__auto____1 = (function (state_42916){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_42916);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e42933){var ex__42487__auto__ = e42933;
var statearr_42934_44236 = state_42916;
(statearr_42934_44236[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_42916[(4)]))){
var statearr_42935_44237 = state_42916;
(statearr_42935_44237[(1)] = cljs.core.first((state_42916[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44238 = state_42916;
state_42916 = G__44238;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42484__auto__ = function(state_42916){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42484__auto____1.call(this,state_42916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42484__auto____0;
cljs$core$async$reduce_$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42484__auto____1;
return cljs$core$async$reduce_$_state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_42936 = f__42520__auto__();
(statearr_42936[(6)] = c__42519__auto__);

return statearr_42936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));

return c__42519__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_42942){
var state_val_42943 = (state_42942[(1)]);
if((state_val_42943 === (1))){
var inst_42937 = cljs.core.async.reduce(f__$1,init,ch);
var state_42942__$1 = state_42942;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42942__$1,(2),inst_42937);
} else {
if((state_val_42943 === (2))){
var inst_42939 = (state_42942[(2)]);
var inst_42940 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_42939) : f__$1.call(null,inst_42939));
var state_42942__$1 = state_42942;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42942__$1,inst_42940);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42484__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42484__auto____0 = (function (){
var statearr_42944 = [null,null,null,null,null,null,null];
(statearr_42944[(0)] = cljs$core$async$transduce_$_state_machine__42484__auto__);

(statearr_42944[(1)] = (1));

return statearr_42944;
});
var cljs$core$async$transduce_$_state_machine__42484__auto____1 = (function (state_42942){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_42942);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e42945){var ex__42487__auto__ = e42945;
var statearr_42946_44239 = state_42942;
(statearr_42946_44239[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_42942[(4)]))){
var statearr_42947_44240 = state_42942;
(statearr_42947_44240[(1)] = cljs.core.first((state_42942[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44241 = state_42942;
state_42942 = G__44241;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42484__auto__ = function(state_42942){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42484__auto____1.call(this,state_42942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42484__auto____0;
cljs$core$async$transduce_$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42484__auto____1;
return cljs$core$async$transduce_$_state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_42948 = f__42520__auto__();
(statearr_42948[(6)] = c__42519__auto__);

return statearr_42948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));

return c__42519__auto__;
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
var G__42950 = arguments.length;
switch (G__42950) {
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
var c__42519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_42975){
var state_val_42976 = (state_42975[(1)]);
if((state_val_42976 === (7))){
var inst_42957 = (state_42975[(2)]);
var state_42975__$1 = state_42975;
var statearr_42977_44243 = state_42975__$1;
(statearr_42977_44243[(2)] = inst_42957);

(statearr_42977_44243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (1))){
var inst_42951 = cljs.core.seq(coll);
var inst_42952 = inst_42951;
var state_42975__$1 = (function (){var statearr_42978 = state_42975;
(statearr_42978[(7)] = inst_42952);

return statearr_42978;
})();
var statearr_42979_44244 = state_42975__$1;
(statearr_42979_44244[(2)] = null);

(statearr_42979_44244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (4))){
var inst_42952 = (state_42975[(7)]);
var inst_42955 = cljs.core.first(inst_42952);
var state_42975__$1 = state_42975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42975__$1,(7),ch,inst_42955);
} else {
if((state_val_42976 === (13))){
var inst_42969 = (state_42975[(2)]);
var state_42975__$1 = state_42975;
var statearr_42980_44245 = state_42975__$1;
(statearr_42980_44245[(2)] = inst_42969);

(statearr_42980_44245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (6))){
var inst_42960 = (state_42975[(2)]);
var state_42975__$1 = state_42975;
if(cljs.core.truth_(inst_42960)){
var statearr_42981_44246 = state_42975__$1;
(statearr_42981_44246[(1)] = (8));

} else {
var statearr_42982_44247 = state_42975__$1;
(statearr_42982_44247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (3))){
var inst_42973 = (state_42975[(2)]);
var state_42975__$1 = state_42975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42975__$1,inst_42973);
} else {
if((state_val_42976 === (12))){
var state_42975__$1 = state_42975;
var statearr_42983_44248 = state_42975__$1;
(statearr_42983_44248[(2)] = null);

(statearr_42983_44248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (2))){
var inst_42952 = (state_42975[(7)]);
var state_42975__$1 = state_42975;
if(cljs.core.truth_(inst_42952)){
var statearr_42984_44249 = state_42975__$1;
(statearr_42984_44249[(1)] = (4));

} else {
var statearr_42985_44250 = state_42975__$1;
(statearr_42985_44250[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (11))){
var inst_42966 = cljs.core.async.close_BANG_(ch);
var state_42975__$1 = state_42975;
var statearr_42986_44251 = state_42975__$1;
(statearr_42986_44251[(2)] = inst_42966);

(statearr_42986_44251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (9))){
var state_42975__$1 = state_42975;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42987_44252 = state_42975__$1;
(statearr_42987_44252[(1)] = (11));

} else {
var statearr_42988_44253 = state_42975__$1;
(statearr_42988_44253[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (5))){
var inst_42952 = (state_42975[(7)]);
var state_42975__$1 = state_42975;
var statearr_42989_44254 = state_42975__$1;
(statearr_42989_44254[(2)] = inst_42952);

(statearr_42989_44254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (10))){
var inst_42971 = (state_42975[(2)]);
var state_42975__$1 = state_42975;
var statearr_42990_44255 = state_42975__$1;
(statearr_42990_44255[(2)] = inst_42971);

(statearr_42990_44255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42976 === (8))){
var inst_42952 = (state_42975[(7)]);
var inst_42962 = cljs.core.next(inst_42952);
var inst_42952__$1 = inst_42962;
var state_42975__$1 = (function (){var statearr_42991 = state_42975;
(statearr_42991[(7)] = inst_42952__$1);

return statearr_42991;
})();
var statearr_42992_44256 = state_42975__$1;
(statearr_42992_44256[(2)] = null);

(statearr_42992_44256[(1)] = (2));


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
var cljs$core$async$state_machine__42484__auto__ = null;
var cljs$core$async$state_machine__42484__auto____0 = (function (){
var statearr_42993 = [null,null,null,null,null,null,null,null];
(statearr_42993[(0)] = cljs$core$async$state_machine__42484__auto__);

(statearr_42993[(1)] = (1));

return statearr_42993;
});
var cljs$core$async$state_machine__42484__auto____1 = (function (state_42975){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_42975);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e42994){var ex__42487__auto__ = e42994;
var statearr_42995_44257 = state_42975;
(statearr_42995_44257[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_42975[(4)]))){
var statearr_42996_44258 = state_42975;
(statearr_42996_44258[(1)] = cljs.core.first((state_42975[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44259 = state_42975;
state_42975 = G__44259;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$state_machine__42484__auto__ = function(state_42975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42484__auto____1.call(this,state_42975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42484__auto____0;
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42484__auto____1;
return cljs$core$async$state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_42997 = f__42520__auto__();
(statearr_42997[(6)] = c__42519__auto__);

return statearr_42997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));

return c__42519__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_44260 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_44260(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_44261 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_44261(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_44262 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_44262(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_44263 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_44263(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42998 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42998 = (function (ch,cs,meta42999){
this.ch = ch;
this.cs = cs;
this.meta42999 = meta42999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43000,meta42999__$1){
var self__ = this;
var _43000__$1 = this;
return (new cljs.core.async.t_cljs$core$async42998(self__.ch,self__.cs,meta42999__$1));
}));

(cljs.core.async.t_cljs$core$async42998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43000){
var self__ = this;
var _43000__$1 = this;
return self__.meta42999;
}));

(cljs.core.async.t_cljs$core$async42998.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42998.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42998.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42998.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async42998.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async42998.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async42998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42999","meta42999",-2074085045,null)], null);
}));

(cljs.core.async.t_cljs$core$async42998.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42998");

(cljs.core.async.t_cljs$core$async42998.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42998");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42998.
 */
cljs.core.async.__GT_t_cljs$core$async42998 = (function cljs$core$async$mult_$___GT_t_cljs$core$async42998(ch__$1,cs__$1,meta42999){
return (new cljs.core.async.t_cljs$core$async42998(ch__$1,cs__$1,meta42999));
});

}

return (new cljs.core.async.t_cljs$core$async42998(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__42519__auto___44264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_43133){
var state_val_43134 = (state_43133[(1)]);
if((state_val_43134 === (7))){
var inst_43129 = (state_43133[(2)]);
var state_43133__$1 = state_43133;
var statearr_43135_44265 = state_43133__$1;
(statearr_43135_44265[(2)] = inst_43129);

(statearr_43135_44265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (20))){
var inst_43034 = (state_43133[(7)]);
var inst_43046 = cljs.core.first(inst_43034);
var inst_43047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43046,(0),null);
var inst_43048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43046,(1),null);
var state_43133__$1 = (function (){var statearr_43136 = state_43133;
(statearr_43136[(8)] = inst_43047);

return statearr_43136;
})();
if(cljs.core.truth_(inst_43048)){
var statearr_43137_44266 = state_43133__$1;
(statearr_43137_44266[(1)] = (22));

} else {
var statearr_43138_44267 = state_43133__$1;
(statearr_43138_44267[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (27))){
var inst_43076 = (state_43133[(9)]);
var inst_43083 = (state_43133[(10)]);
var inst_43078 = (state_43133[(11)]);
var inst_43003 = (state_43133[(12)]);
var inst_43083__$1 = cljs.core._nth(inst_43076,inst_43078);
var inst_43084 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43083__$1,inst_43003,done);
var state_43133__$1 = (function (){var statearr_43139 = state_43133;
(statearr_43139[(10)] = inst_43083__$1);

return statearr_43139;
})();
if(cljs.core.truth_(inst_43084)){
var statearr_43140_44268 = state_43133__$1;
(statearr_43140_44268[(1)] = (30));

} else {
var statearr_43141_44269 = state_43133__$1;
(statearr_43141_44269[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (1))){
var state_43133__$1 = state_43133;
var statearr_43142_44270 = state_43133__$1;
(statearr_43142_44270[(2)] = null);

(statearr_43142_44270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (24))){
var inst_43034 = (state_43133[(7)]);
var inst_43053 = (state_43133[(2)]);
var inst_43054 = cljs.core.next(inst_43034);
var inst_43012 = inst_43054;
var inst_43013 = null;
var inst_43014 = (0);
var inst_43015 = (0);
var state_43133__$1 = (function (){var statearr_43143 = state_43133;
(statearr_43143[(13)] = inst_43013);

(statearr_43143[(14)] = inst_43015);

(statearr_43143[(15)] = inst_43012);

(statearr_43143[(16)] = inst_43014);

(statearr_43143[(17)] = inst_43053);

return statearr_43143;
})();
var statearr_43144_44271 = state_43133__$1;
(statearr_43144_44271[(2)] = null);

(statearr_43144_44271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (39))){
var state_43133__$1 = state_43133;
var statearr_43148_44272 = state_43133__$1;
(statearr_43148_44272[(2)] = null);

(statearr_43148_44272[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (4))){
var inst_43003 = (state_43133[(12)]);
var inst_43003__$1 = (state_43133[(2)]);
var inst_43004 = (inst_43003__$1 == null);
var state_43133__$1 = (function (){var statearr_43149 = state_43133;
(statearr_43149[(12)] = inst_43003__$1);

return statearr_43149;
})();
if(cljs.core.truth_(inst_43004)){
var statearr_43150_44273 = state_43133__$1;
(statearr_43150_44273[(1)] = (5));

} else {
var statearr_43151_44274 = state_43133__$1;
(statearr_43151_44274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (15))){
var inst_43013 = (state_43133[(13)]);
var inst_43015 = (state_43133[(14)]);
var inst_43012 = (state_43133[(15)]);
var inst_43014 = (state_43133[(16)]);
var inst_43030 = (state_43133[(2)]);
var inst_43031 = (inst_43015 + (1));
var tmp43145 = inst_43013;
var tmp43146 = inst_43012;
var tmp43147 = inst_43014;
var inst_43012__$1 = tmp43146;
var inst_43013__$1 = tmp43145;
var inst_43014__$1 = tmp43147;
var inst_43015__$1 = inst_43031;
var state_43133__$1 = (function (){var statearr_43152 = state_43133;
(statearr_43152[(13)] = inst_43013__$1);

(statearr_43152[(14)] = inst_43015__$1);

(statearr_43152[(15)] = inst_43012__$1);

(statearr_43152[(18)] = inst_43030);

(statearr_43152[(16)] = inst_43014__$1);

return statearr_43152;
})();
var statearr_43153_44275 = state_43133__$1;
(statearr_43153_44275[(2)] = null);

(statearr_43153_44275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (21))){
var inst_43057 = (state_43133[(2)]);
var state_43133__$1 = state_43133;
var statearr_43157_44276 = state_43133__$1;
(statearr_43157_44276[(2)] = inst_43057);

(statearr_43157_44276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (31))){
var inst_43083 = (state_43133[(10)]);
var inst_43087 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43083);
var state_43133__$1 = state_43133;
var statearr_43158_44277 = state_43133__$1;
(statearr_43158_44277[(2)] = inst_43087);

(statearr_43158_44277[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (32))){
var inst_43075 = (state_43133[(19)]);
var inst_43077 = (state_43133[(20)]);
var inst_43076 = (state_43133[(9)]);
var inst_43078 = (state_43133[(11)]);
var inst_43089 = (state_43133[(2)]);
var inst_43090 = (inst_43078 + (1));
var tmp43154 = inst_43075;
var tmp43155 = inst_43077;
var tmp43156 = inst_43076;
var inst_43075__$1 = tmp43154;
var inst_43076__$1 = tmp43156;
var inst_43077__$1 = tmp43155;
var inst_43078__$1 = inst_43090;
var state_43133__$1 = (function (){var statearr_43159 = state_43133;
(statearr_43159[(19)] = inst_43075__$1);

(statearr_43159[(20)] = inst_43077__$1);

(statearr_43159[(9)] = inst_43076__$1);

(statearr_43159[(11)] = inst_43078__$1);

(statearr_43159[(21)] = inst_43089);

return statearr_43159;
})();
var statearr_43160_44278 = state_43133__$1;
(statearr_43160_44278[(2)] = null);

(statearr_43160_44278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (40))){
var inst_43102 = (state_43133[(22)]);
var inst_43106 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43102);
var state_43133__$1 = state_43133;
var statearr_43161_44279 = state_43133__$1;
(statearr_43161_44279[(2)] = inst_43106);

(statearr_43161_44279[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (33))){
var inst_43093 = (state_43133[(23)]);
var inst_43095 = cljs.core.chunked_seq_QMARK_(inst_43093);
var state_43133__$1 = state_43133;
if(inst_43095){
var statearr_43162_44280 = state_43133__$1;
(statearr_43162_44280[(1)] = (36));

} else {
var statearr_43163_44281 = state_43133__$1;
(statearr_43163_44281[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (13))){
var inst_43024 = (state_43133[(24)]);
var inst_43027 = cljs.core.async.close_BANG_(inst_43024);
var state_43133__$1 = state_43133;
var statearr_43164_44282 = state_43133__$1;
(statearr_43164_44282[(2)] = inst_43027);

(statearr_43164_44282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (22))){
var inst_43047 = (state_43133[(8)]);
var inst_43050 = cljs.core.async.close_BANG_(inst_43047);
var state_43133__$1 = state_43133;
var statearr_43165_44284 = state_43133__$1;
(statearr_43165_44284[(2)] = inst_43050);

(statearr_43165_44284[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (36))){
var inst_43093 = (state_43133[(23)]);
var inst_43097 = cljs.core.chunk_first(inst_43093);
var inst_43098 = cljs.core.chunk_rest(inst_43093);
var inst_43099 = cljs.core.count(inst_43097);
var inst_43075 = inst_43098;
var inst_43076 = inst_43097;
var inst_43077 = inst_43099;
var inst_43078 = (0);
var state_43133__$1 = (function (){var statearr_43166 = state_43133;
(statearr_43166[(19)] = inst_43075);

(statearr_43166[(20)] = inst_43077);

(statearr_43166[(9)] = inst_43076);

(statearr_43166[(11)] = inst_43078);

return statearr_43166;
})();
var statearr_43167_44287 = state_43133__$1;
(statearr_43167_44287[(2)] = null);

(statearr_43167_44287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (41))){
var inst_43093 = (state_43133[(23)]);
var inst_43108 = (state_43133[(2)]);
var inst_43109 = cljs.core.next(inst_43093);
var inst_43075 = inst_43109;
var inst_43076 = null;
var inst_43077 = (0);
var inst_43078 = (0);
var state_43133__$1 = (function (){var statearr_43168 = state_43133;
(statearr_43168[(19)] = inst_43075);

(statearr_43168[(20)] = inst_43077);

(statearr_43168[(9)] = inst_43076);

(statearr_43168[(25)] = inst_43108);

(statearr_43168[(11)] = inst_43078);

return statearr_43168;
})();
var statearr_43169_44295 = state_43133__$1;
(statearr_43169_44295[(2)] = null);

(statearr_43169_44295[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (43))){
var state_43133__$1 = state_43133;
var statearr_43170_44296 = state_43133__$1;
(statearr_43170_44296[(2)] = null);

(statearr_43170_44296[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (29))){
var inst_43117 = (state_43133[(2)]);
var state_43133__$1 = state_43133;
var statearr_43171_44299 = state_43133__$1;
(statearr_43171_44299[(2)] = inst_43117);

(statearr_43171_44299[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (44))){
var inst_43126 = (state_43133[(2)]);
var state_43133__$1 = (function (){var statearr_43172 = state_43133;
(statearr_43172[(26)] = inst_43126);

return statearr_43172;
})();
var statearr_43173_44300 = state_43133__$1;
(statearr_43173_44300[(2)] = null);

(statearr_43173_44300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (6))){
var inst_43067 = (state_43133[(27)]);
var inst_43066 = cljs.core.deref(cs);
var inst_43067__$1 = cljs.core.keys(inst_43066);
var inst_43068 = cljs.core.count(inst_43067__$1);
var inst_43069 = cljs.core.reset_BANG_(dctr,inst_43068);
var inst_43074 = cljs.core.seq(inst_43067__$1);
var inst_43075 = inst_43074;
var inst_43076 = null;
var inst_43077 = (0);
var inst_43078 = (0);
var state_43133__$1 = (function (){var statearr_43174 = state_43133;
(statearr_43174[(19)] = inst_43075);

(statearr_43174[(28)] = inst_43069);

(statearr_43174[(20)] = inst_43077);

(statearr_43174[(9)] = inst_43076);

(statearr_43174[(11)] = inst_43078);

(statearr_43174[(27)] = inst_43067__$1);

return statearr_43174;
})();
var statearr_43175_44305 = state_43133__$1;
(statearr_43175_44305[(2)] = null);

(statearr_43175_44305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (28))){
var inst_43075 = (state_43133[(19)]);
var inst_43093 = (state_43133[(23)]);
var inst_43093__$1 = cljs.core.seq(inst_43075);
var state_43133__$1 = (function (){var statearr_43176 = state_43133;
(statearr_43176[(23)] = inst_43093__$1);

return statearr_43176;
})();
if(inst_43093__$1){
var statearr_43177_44306 = state_43133__$1;
(statearr_43177_44306[(1)] = (33));

} else {
var statearr_43178_44307 = state_43133__$1;
(statearr_43178_44307[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (25))){
var inst_43077 = (state_43133[(20)]);
var inst_43078 = (state_43133[(11)]);
var inst_43080 = (inst_43078 < inst_43077);
var inst_43081 = inst_43080;
var state_43133__$1 = state_43133;
if(cljs.core.truth_(inst_43081)){
var statearr_43179_44308 = state_43133__$1;
(statearr_43179_44308[(1)] = (27));

} else {
var statearr_43180_44309 = state_43133__$1;
(statearr_43180_44309[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (34))){
var state_43133__$1 = state_43133;
var statearr_43181_44311 = state_43133__$1;
(statearr_43181_44311[(2)] = null);

(statearr_43181_44311[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (17))){
var state_43133__$1 = state_43133;
var statearr_43182_44312 = state_43133__$1;
(statearr_43182_44312[(2)] = null);

(statearr_43182_44312[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (3))){
var inst_43131 = (state_43133[(2)]);
var state_43133__$1 = state_43133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43133__$1,inst_43131);
} else {
if((state_val_43134 === (12))){
var inst_43062 = (state_43133[(2)]);
var state_43133__$1 = state_43133;
var statearr_43183_44313 = state_43133__$1;
(statearr_43183_44313[(2)] = inst_43062);

(statearr_43183_44313[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (2))){
var state_43133__$1 = state_43133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43133__$1,(4),ch);
} else {
if((state_val_43134 === (23))){
var state_43133__$1 = state_43133;
var statearr_43184_44314 = state_43133__$1;
(statearr_43184_44314[(2)] = null);

(statearr_43184_44314[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (35))){
var inst_43115 = (state_43133[(2)]);
var state_43133__$1 = state_43133;
var statearr_43185_44315 = state_43133__$1;
(statearr_43185_44315[(2)] = inst_43115);

(statearr_43185_44315[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (19))){
var inst_43034 = (state_43133[(7)]);
var inst_43038 = cljs.core.chunk_first(inst_43034);
var inst_43039 = cljs.core.chunk_rest(inst_43034);
var inst_43040 = cljs.core.count(inst_43038);
var inst_43012 = inst_43039;
var inst_43013 = inst_43038;
var inst_43014 = inst_43040;
var inst_43015 = (0);
var state_43133__$1 = (function (){var statearr_43186 = state_43133;
(statearr_43186[(13)] = inst_43013);

(statearr_43186[(14)] = inst_43015);

(statearr_43186[(15)] = inst_43012);

(statearr_43186[(16)] = inst_43014);

return statearr_43186;
})();
var statearr_43187_44316 = state_43133__$1;
(statearr_43187_44316[(2)] = null);

(statearr_43187_44316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (11))){
var inst_43034 = (state_43133[(7)]);
var inst_43012 = (state_43133[(15)]);
var inst_43034__$1 = cljs.core.seq(inst_43012);
var state_43133__$1 = (function (){var statearr_43188 = state_43133;
(statearr_43188[(7)] = inst_43034__$1);

return statearr_43188;
})();
if(inst_43034__$1){
var statearr_43189_44317 = state_43133__$1;
(statearr_43189_44317[(1)] = (16));

} else {
var statearr_43190_44318 = state_43133__$1;
(statearr_43190_44318[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (9))){
var inst_43064 = (state_43133[(2)]);
var state_43133__$1 = state_43133;
var statearr_43191_44319 = state_43133__$1;
(statearr_43191_44319[(2)] = inst_43064);

(statearr_43191_44319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (5))){
var inst_43010 = cljs.core.deref(cs);
var inst_43011 = cljs.core.seq(inst_43010);
var inst_43012 = inst_43011;
var inst_43013 = null;
var inst_43014 = (0);
var inst_43015 = (0);
var state_43133__$1 = (function (){var statearr_43192 = state_43133;
(statearr_43192[(13)] = inst_43013);

(statearr_43192[(14)] = inst_43015);

(statearr_43192[(15)] = inst_43012);

(statearr_43192[(16)] = inst_43014);

return statearr_43192;
})();
var statearr_43193_44320 = state_43133__$1;
(statearr_43193_44320[(2)] = null);

(statearr_43193_44320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (14))){
var state_43133__$1 = state_43133;
var statearr_43194_44321 = state_43133__$1;
(statearr_43194_44321[(2)] = null);

(statearr_43194_44321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (45))){
var inst_43123 = (state_43133[(2)]);
var state_43133__$1 = state_43133;
var statearr_43195_44322 = state_43133__$1;
(statearr_43195_44322[(2)] = inst_43123);

(statearr_43195_44322[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (26))){
var inst_43067 = (state_43133[(27)]);
var inst_43119 = (state_43133[(2)]);
var inst_43120 = cljs.core.seq(inst_43067);
var state_43133__$1 = (function (){var statearr_43196 = state_43133;
(statearr_43196[(29)] = inst_43119);

return statearr_43196;
})();
if(inst_43120){
var statearr_43197_44323 = state_43133__$1;
(statearr_43197_44323[(1)] = (42));

} else {
var statearr_43198_44324 = state_43133__$1;
(statearr_43198_44324[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (16))){
var inst_43034 = (state_43133[(7)]);
var inst_43036 = cljs.core.chunked_seq_QMARK_(inst_43034);
var state_43133__$1 = state_43133;
if(inst_43036){
var statearr_43199_44325 = state_43133__$1;
(statearr_43199_44325[(1)] = (19));

} else {
var statearr_43200_44326 = state_43133__$1;
(statearr_43200_44326[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (38))){
var inst_43112 = (state_43133[(2)]);
var state_43133__$1 = state_43133;
var statearr_43201_44327 = state_43133__$1;
(statearr_43201_44327[(2)] = inst_43112);

(statearr_43201_44327[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (30))){
var state_43133__$1 = state_43133;
var statearr_43202_44328 = state_43133__$1;
(statearr_43202_44328[(2)] = null);

(statearr_43202_44328[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (10))){
var inst_43013 = (state_43133[(13)]);
var inst_43015 = (state_43133[(14)]);
var inst_43023 = cljs.core._nth(inst_43013,inst_43015);
var inst_43024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43023,(0),null);
var inst_43025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43023,(1),null);
var state_43133__$1 = (function (){var statearr_43203 = state_43133;
(statearr_43203[(24)] = inst_43024);

return statearr_43203;
})();
if(cljs.core.truth_(inst_43025)){
var statearr_43204_44329 = state_43133__$1;
(statearr_43204_44329[(1)] = (13));

} else {
var statearr_43205_44330 = state_43133__$1;
(statearr_43205_44330[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (18))){
var inst_43060 = (state_43133[(2)]);
var state_43133__$1 = state_43133;
var statearr_43206_44331 = state_43133__$1;
(statearr_43206_44331[(2)] = inst_43060);

(statearr_43206_44331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (42))){
var state_43133__$1 = state_43133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43133__$1,(45),dchan);
} else {
if((state_val_43134 === (37))){
var inst_43093 = (state_43133[(23)]);
var inst_43102 = (state_43133[(22)]);
var inst_43003 = (state_43133[(12)]);
var inst_43102__$1 = cljs.core.first(inst_43093);
var inst_43103 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43102__$1,inst_43003,done);
var state_43133__$1 = (function (){var statearr_43207 = state_43133;
(statearr_43207[(22)] = inst_43102__$1);

return statearr_43207;
})();
if(cljs.core.truth_(inst_43103)){
var statearr_43208_44332 = state_43133__$1;
(statearr_43208_44332[(1)] = (39));

} else {
var statearr_43209_44333 = state_43133__$1;
(statearr_43209_44333[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43134 === (8))){
var inst_43015 = (state_43133[(14)]);
var inst_43014 = (state_43133[(16)]);
var inst_43017 = (inst_43015 < inst_43014);
var inst_43018 = inst_43017;
var state_43133__$1 = state_43133;
if(cljs.core.truth_(inst_43018)){
var statearr_43210_44334 = state_43133__$1;
(statearr_43210_44334[(1)] = (10));

} else {
var statearr_43211_44335 = state_43133__$1;
(statearr_43211_44335[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__42484__auto__ = null;
var cljs$core$async$mult_$_state_machine__42484__auto____0 = (function (){
var statearr_43212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43212[(0)] = cljs$core$async$mult_$_state_machine__42484__auto__);

(statearr_43212[(1)] = (1));

return statearr_43212;
});
var cljs$core$async$mult_$_state_machine__42484__auto____1 = (function (state_43133){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_43133);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e43213){var ex__42487__auto__ = e43213;
var statearr_43214_44336 = state_43133;
(statearr_43214_44336[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_43133[(4)]))){
var statearr_43215_44337 = state_43133;
(statearr_43215_44337[(1)] = cljs.core.first((state_43133[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44338 = state_43133;
state_43133 = G__44338;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42484__auto__ = function(state_43133){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42484__auto____1.call(this,state_43133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42484__auto____0;
cljs$core$async$mult_$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42484__auto____1;
return cljs$core$async$mult_$_state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_43216 = f__42520__auto__();
(statearr_43216[(6)] = c__42519__auto___44264);

return statearr_43216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
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
var G__43218 = arguments.length;
switch (G__43218) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_44340 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_44340(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44341 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_44341(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44342 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44342(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44347 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_44347(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44348 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44348(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44349 = arguments.length;
var i__4737__auto___44350 = (0);
while(true){
if((i__4737__auto___44350 < len__4736__auto___44349)){
args__4742__auto__.push((arguments[i__4737__auto___44350]));

var G__44351 = (i__4737__auto___44350 + (1));
i__4737__auto___44350 = G__44351;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43223){
var map__43224 = p__43223;
var map__43224__$1 = (((((!((map__43224 == null))))?(((((map__43224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43224):map__43224);
var opts = map__43224__$1;
var statearr_43226_44354 = state;
(statearr_43226_44354[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_43227_44355 = state;
(statearr_43227_44355[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_43228_44356 = state;
(statearr_43228_44356[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43219){
var G__43220 = cljs.core.first(seq43219);
var seq43219__$1 = cljs.core.next(seq43219);
var G__43221 = cljs.core.first(seq43219__$1);
var seq43219__$2 = cljs.core.next(seq43219__$1);
var G__43222 = cljs.core.first(seq43219__$2);
var seq43219__$3 = cljs.core.next(seq43219__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43220,G__43221,G__43222,seq43219__$3);
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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43229 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43230){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43230 = meta43230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43231,meta43230__$1){
var self__ = this;
var _43231__$1 = this;
return (new cljs.core.async.t_cljs$core$async43229(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43230__$1));
}));

(cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43231){
var self__ = this;
var _43231__$1 = this;
return self__.meta43230;
}));

(cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43229.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43230","meta43230",-514129191,null)], null);
}));

(cljs.core.async.t_cljs$core$async43229.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43229");

(cljs.core.async.t_cljs$core$async43229.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43229");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43229.
 */
cljs.core.async.__GT_t_cljs$core$async43229 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43229(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43230){
return (new cljs.core.async.t_cljs$core$async43229(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43230));
});

}

return (new cljs.core.async.t_cljs$core$async43229(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42519__auto___44364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_43333){
var state_val_43334 = (state_43333[(1)]);
if((state_val_43334 === (7))){
var inst_43248 = (state_43333[(2)]);
var state_43333__$1 = state_43333;
var statearr_43335_44366 = state_43333__$1;
(statearr_43335_44366[(2)] = inst_43248);

(statearr_43335_44366[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (20))){
var inst_43260 = (state_43333[(7)]);
var state_43333__$1 = state_43333;
var statearr_43336_44367 = state_43333__$1;
(statearr_43336_44367[(2)] = inst_43260);

(statearr_43336_44367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (27))){
var state_43333__$1 = state_43333;
var statearr_43337_44370 = state_43333__$1;
(statearr_43337_44370[(2)] = null);

(statearr_43337_44370[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (1))){
var inst_43235 = (state_43333[(8)]);
var inst_43235__$1 = calc_state();
var inst_43237 = (inst_43235__$1 == null);
var inst_43238 = cljs.core.not(inst_43237);
var state_43333__$1 = (function (){var statearr_43338 = state_43333;
(statearr_43338[(8)] = inst_43235__$1);

return statearr_43338;
})();
if(inst_43238){
var statearr_43339_44381 = state_43333__$1;
(statearr_43339_44381[(1)] = (2));

} else {
var statearr_43340_44382 = state_43333__$1;
(statearr_43340_44382[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (24))){
var inst_43284 = (state_43333[(9)]);
var inst_43293 = (state_43333[(10)]);
var inst_43307 = (state_43333[(11)]);
var inst_43307__$1 = (inst_43284.cljs$core$IFn$_invoke$arity$1 ? inst_43284.cljs$core$IFn$_invoke$arity$1(inst_43293) : inst_43284.call(null,inst_43293));
var state_43333__$1 = (function (){var statearr_43341 = state_43333;
(statearr_43341[(11)] = inst_43307__$1);

return statearr_43341;
})();
if(cljs.core.truth_(inst_43307__$1)){
var statearr_43342_44387 = state_43333__$1;
(statearr_43342_44387[(1)] = (29));

} else {
var statearr_43343_44388 = state_43333__$1;
(statearr_43343_44388[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (4))){
var inst_43251 = (state_43333[(2)]);
var state_43333__$1 = state_43333;
if(cljs.core.truth_(inst_43251)){
var statearr_43344_44389 = state_43333__$1;
(statearr_43344_44389[(1)] = (8));

} else {
var statearr_43345_44390 = state_43333__$1;
(statearr_43345_44390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (15))){
var inst_43278 = (state_43333[(2)]);
var state_43333__$1 = state_43333;
if(cljs.core.truth_(inst_43278)){
var statearr_43346_44391 = state_43333__$1;
(statearr_43346_44391[(1)] = (19));

} else {
var statearr_43347_44392 = state_43333__$1;
(statearr_43347_44392[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (21))){
var inst_43283 = (state_43333[(12)]);
var inst_43283__$1 = (state_43333[(2)]);
var inst_43284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43283__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43283__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43283__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43333__$1 = (function (){var statearr_43348 = state_43333;
(statearr_43348[(9)] = inst_43284);

(statearr_43348[(13)] = inst_43285);

(statearr_43348[(12)] = inst_43283__$1);

return statearr_43348;
})();
return cljs.core.async.ioc_alts_BANG_(state_43333__$1,(22),inst_43286);
} else {
if((state_val_43334 === (31))){
var inst_43315 = (state_43333[(2)]);
var state_43333__$1 = state_43333;
if(cljs.core.truth_(inst_43315)){
var statearr_43349_44393 = state_43333__$1;
(statearr_43349_44393[(1)] = (32));

} else {
var statearr_43350_44394 = state_43333__$1;
(statearr_43350_44394[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (32))){
var inst_43292 = (state_43333[(14)]);
var state_43333__$1 = state_43333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43333__$1,(35),out,inst_43292);
} else {
if((state_val_43334 === (33))){
var inst_43283 = (state_43333[(12)]);
var inst_43260 = inst_43283;
var state_43333__$1 = (function (){var statearr_43351 = state_43333;
(statearr_43351[(7)] = inst_43260);

return statearr_43351;
})();
var statearr_43352_44395 = state_43333__$1;
(statearr_43352_44395[(2)] = null);

(statearr_43352_44395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (13))){
var inst_43260 = (state_43333[(7)]);
var inst_43267 = inst_43260.cljs$lang$protocol_mask$partition0$;
var inst_43268 = (inst_43267 & (64));
var inst_43269 = inst_43260.cljs$core$ISeq$;
var inst_43270 = (cljs.core.PROTOCOL_SENTINEL === inst_43269);
var inst_43271 = ((inst_43268) || (inst_43270));
var state_43333__$1 = state_43333;
if(cljs.core.truth_(inst_43271)){
var statearr_43353_44396 = state_43333__$1;
(statearr_43353_44396[(1)] = (16));

} else {
var statearr_43354_44397 = state_43333__$1;
(statearr_43354_44397[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (22))){
var inst_43293 = (state_43333[(10)]);
var inst_43292 = (state_43333[(14)]);
var inst_43291 = (state_43333[(2)]);
var inst_43292__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43291,(0),null);
var inst_43293__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43291,(1),null);
var inst_43294 = (inst_43292__$1 == null);
var inst_43295 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43293__$1,change);
var inst_43296 = ((inst_43294) || (inst_43295));
var state_43333__$1 = (function (){var statearr_43355 = state_43333;
(statearr_43355[(10)] = inst_43293__$1);

(statearr_43355[(14)] = inst_43292__$1);

return statearr_43355;
})();
if(cljs.core.truth_(inst_43296)){
var statearr_43356_44398 = state_43333__$1;
(statearr_43356_44398[(1)] = (23));

} else {
var statearr_43357_44399 = state_43333__$1;
(statearr_43357_44399[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (36))){
var inst_43283 = (state_43333[(12)]);
var inst_43260 = inst_43283;
var state_43333__$1 = (function (){var statearr_43358 = state_43333;
(statearr_43358[(7)] = inst_43260);

return statearr_43358;
})();
var statearr_43359_44400 = state_43333__$1;
(statearr_43359_44400[(2)] = null);

(statearr_43359_44400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (29))){
var inst_43307 = (state_43333[(11)]);
var state_43333__$1 = state_43333;
var statearr_43360_44403 = state_43333__$1;
(statearr_43360_44403[(2)] = inst_43307);

(statearr_43360_44403[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (6))){
var state_43333__$1 = state_43333;
var statearr_43361_44405 = state_43333__$1;
(statearr_43361_44405[(2)] = false);

(statearr_43361_44405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (28))){
var inst_43303 = (state_43333[(2)]);
var inst_43304 = calc_state();
var inst_43260 = inst_43304;
var state_43333__$1 = (function (){var statearr_43362 = state_43333;
(statearr_43362[(15)] = inst_43303);

(statearr_43362[(7)] = inst_43260);

return statearr_43362;
})();
var statearr_43363_44406 = state_43333__$1;
(statearr_43363_44406[(2)] = null);

(statearr_43363_44406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (25))){
var inst_43329 = (state_43333[(2)]);
var state_43333__$1 = state_43333;
var statearr_43364_44407 = state_43333__$1;
(statearr_43364_44407[(2)] = inst_43329);

(statearr_43364_44407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (34))){
var inst_43327 = (state_43333[(2)]);
var state_43333__$1 = state_43333;
var statearr_43365_44409 = state_43333__$1;
(statearr_43365_44409[(2)] = inst_43327);

(statearr_43365_44409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (17))){
var state_43333__$1 = state_43333;
var statearr_43366_44410 = state_43333__$1;
(statearr_43366_44410[(2)] = false);

(statearr_43366_44410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (3))){
var state_43333__$1 = state_43333;
var statearr_43367_44411 = state_43333__$1;
(statearr_43367_44411[(2)] = false);

(statearr_43367_44411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (12))){
var inst_43331 = (state_43333[(2)]);
var state_43333__$1 = state_43333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43333__$1,inst_43331);
} else {
if((state_val_43334 === (2))){
var inst_43235 = (state_43333[(8)]);
var inst_43240 = inst_43235.cljs$lang$protocol_mask$partition0$;
var inst_43241 = (inst_43240 & (64));
var inst_43242 = inst_43235.cljs$core$ISeq$;
var inst_43243 = (cljs.core.PROTOCOL_SENTINEL === inst_43242);
var inst_43244 = ((inst_43241) || (inst_43243));
var state_43333__$1 = state_43333;
if(cljs.core.truth_(inst_43244)){
var statearr_43368_44418 = state_43333__$1;
(statearr_43368_44418[(1)] = (5));

} else {
var statearr_43369_44420 = state_43333__$1;
(statearr_43369_44420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (23))){
var inst_43292 = (state_43333[(14)]);
var inst_43298 = (inst_43292 == null);
var state_43333__$1 = state_43333;
if(cljs.core.truth_(inst_43298)){
var statearr_43370_44422 = state_43333__$1;
(statearr_43370_44422[(1)] = (26));

} else {
var statearr_43371_44427 = state_43333__$1;
(statearr_43371_44427[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (35))){
var inst_43318 = (state_43333[(2)]);
var state_43333__$1 = state_43333;
if(cljs.core.truth_(inst_43318)){
var statearr_43372_44430 = state_43333__$1;
(statearr_43372_44430[(1)] = (36));

} else {
var statearr_43373_44432 = state_43333__$1;
(statearr_43373_44432[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (19))){
var inst_43260 = (state_43333[(7)]);
var inst_43280 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43260);
var state_43333__$1 = state_43333;
var statearr_43374_44438 = state_43333__$1;
(statearr_43374_44438[(2)] = inst_43280);

(statearr_43374_44438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (11))){
var inst_43260 = (state_43333[(7)]);
var inst_43264 = (inst_43260 == null);
var inst_43265 = cljs.core.not(inst_43264);
var state_43333__$1 = state_43333;
if(inst_43265){
var statearr_43375_44445 = state_43333__$1;
(statearr_43375_44445[(1)] = (13));

} else {
var statearr_43376_44446 = state_43333__$1;
(statearr_43376_44446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (9))){
var inst_43235 = (state_43333[(8)]);
var state_43333__$1 = state_43333;
var statearr_43377_44447 = state_43333__$1;
(statearr_43377_44447[(2)] = inst_43235);

(statearr_43377_44447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (5))){
var state_43333__$1 = state_43333;
var statearr_43378_44448 = state_43333__$1;
(statearr_43378_44448[(2)] = true);

(statearr_43378_44448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (14))){
var state_43333__$1 = state_43333;
var statearr_43379_44449 = state_43333__$1;
(statearr_43379_44449[(2)] = false);

(statearr_43379_44449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (26))){
var inst_43293 = (state_43333[(10)]);
var inst_43300 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43293);
var state_43333__$1 = state_43333;
var statearr_43380_44450 = state_43333__$1;
(statearr_43380_44450[(2)] = inst_43300);

(statearr_43380_44450[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (16))){
var state_43333__$1 = state_43333;
var statearr_43381_44451 = state_43333__$1;
(statearr_43381_44451[(2)] = true);

(statearr_43381_44451[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (38))){
var inst_43323 = (state_43333[(2)]);
var state_43333__$1 = state_43333;
var statearr_43382_44452 = state_43333__$1;
(statearr_43382_44452[(2)] = inst_43323);

(statearr_43382_44452[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (30))){
var inst_43284 = (state_43333[(9)]);
var inst_43293 = (state_43333[(10)]);
var inst_43285 = (state_43333[(13)]);
var inst_43310 = cljs.core.empty_QMARK_(inst_43284);
var inst_43311 = (inst_43285.cljs$core$IFn$_invoke$arity$1 ? inst_43285.cljs$core$IFn$_invoke$arity$1(inst_43293) : inst_43285.call(null,inst_43293));
var inst_43312 = cljs.core.not(inst_43311);
var inst_43313 = ((inst_43310) && (inst_43312));
var state_43333__$1 = state_43333;
var statearr_43383_44453 = state_43333__$1;
(statearr_43383_44453[(2)] = inst_43313);

(statearr_43383_44453[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (10))){
var inst_43235 = (state_43333[(8)]);
var inst_43256 = (state_43333[(2)]);
var inst_43257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43256,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43256,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43256,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43260 = inst_43235;
var state_43333__$1 = (function (){var statearr_43384 = state_43333;
(statearr_43384[(16)] = inst_43259);

(statearr_43384[(17)] = inst_43257);

(statearr_43384[(18)] = inst_43258);

(statearr_43384[(7)] = inst_43260);

return statearr_43384;
})();
var statearr_43385_44454 = state_43333__$1;
(statearr_43385_44454[(2)] = null);

(statearr_43385_44454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (18))){
var inst_43275 = (state_43333[(2)]);
var state_43333__$1 = state_43333;
var statearr_43386_44455 = state_43333__$1;
(statearr_43386_44455[(2)] = inst_43275);

(statearr_43386_44455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (37))){
var state_43333__$1 = state_43333;
var statearr_43387_44456 = state_43333__$1;
(statearr_43387_44456[(2)] = null);

(statearr_43387_44456[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43334 === (8))){
var inst_43235 = (state_43333[(8)]);
var inst_43253 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43235);
var state_43333__$1 = state_43333;
var statearr_43388_44457 = state_43333__$1;
(statearr_43388_44457[(2)] = inst_43253);

(statearr_43388_44457[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__42484__auto__ = null;
var cljs$core$async$mix_$_state_machine__42484__auto____0 = (function (){
var statearr_43389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43389[(0)] = cljs$core$async$mix_$_state_machine__42484__auto__);

(statearr_43389[(1)] = (1));

return statearr_43389;
});
var cljs$core$async$mix_$_state_machine__42484__auto____1 = (function (state_43333){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_43333);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e43390){var ex__42487__auto__ = e43390;
var statearr_43391_44458 = state_43333;
(statearr_43391_44458[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_43333[(4)]))){
var statearr_43392_44459 = state_43333;
(statearr_43392_44459[(1)] = cljs.core.first((state_43333[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44460 = state_43333;
state_43333 = G__44460;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42484__auto__ = function(state_43333){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42484__auto____1.call(this,state_43333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42484__auto____0;
cljs$core$async$mix_$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42484__auto____1;
return cljs$core$async$mix_$_state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_43393 = f__42520__auto__();
(statearr_43393[(6)] = c__42519__auto___44364);

return statearr_43393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_44461 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_44461(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_44462 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_44462(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_44463 = (function() {
var G__44464 = null;
var G__44464__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__44464__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__44464 = function(p,v){
switch(arguments.length){
case 1:
return G__44464__1.call(this,p);
case 2:
return G__44464__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44464.cljs$core$IFn$_invoke$arity$1 = G__44464__1;
G__44464.cljs$core$IFn$_invoke$arity$2 = G__44464__2;
return G__44464;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43395 = arguments.length;
switch (G__43395) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44463(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44463(p,v);
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
var G__43398 = arguments.length;
switch (G__43398) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43396_SHARP_){
if(cljs.core.truth_((p1__43396_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43396_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43396_SHARP_.call(null,topic)))){
return p1__43396_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43396_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43399 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43399 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43400){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43400 = meta43400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43401,meta43400__$1){
var self__ = this;
var _43401__$1 = this;
return (new cljs.core.async.t_cljs$core$async43399(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43400__$1));
}));

(cljs.core.async.t_cljs$core$async43399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43401){
var self__ = this;
var _43401__$1 = this;
return self__.meta43400;
}));

(cljs.core.async.t_cljs$core$async43399.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43399.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43399.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43399.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43399.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async43399.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43399.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43400","meta43400",-1252416777,null)], null);
}));

(cljs.core.async.t_cljs$core$async43399.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43399");

(cljs.core.async.t_cljs$core$async43399.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43399");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43399.
 */
cljs.core.async.__GT_t_cljs$core$async43399 = (function cljs$core$async$__GT_t_cljs$core$async43399(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43400){
return (new cljs.core.async.t_cljs$core$async43399(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43400));
});

}

return (new cljs.core.async.t_cljs$core$async43399(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42519__auto___44467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_43473){
var state_val_43474 = (state_43473[(1)]);
if((state_val_43474 === (7))){
var inst_43469 = (state_43473[(2)]);
var state_43473__$1 = state_43473;
var statearr_43475_44468 = state_43473__$1;
(statearr_43475_44468[(2)] = inst_43469);

(statearr_43475_44468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (20))){
var state_43473__$1 = state_43473;
var statearr_43476_44469 = state_43473__$1;
(statearr_43476_44469[(2)] = null);

(statearr_43476_44469[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (1))){
var state_43473__$1 = state_43473;
var statearr_43477_44470 = state_43473__$1;
(statearr_43477_44470[(2)] = null);

(statearr_43477_44470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (24))){
var inst_43452 = (state_43473[(7)]);
var inst_43461 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43452);
var state_43473__$1 = state_43473;
var statearr_43478_44471 = state_43473__$1;
(statearr_43478_44471[(2)] = inst_43461);

(statearr_43478_44471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (4))){
var inst_43404 = (state_43473[(8)]);
var inst_43404__$1 = (state_43473[(2)]);
var inst_43405 = (inst_43404__$1 == null);
var state_43473__$1 = (function (){var statearr_43479 = state_43473;
(statearr_43479[(8)] = inst_43404__$1);

return statearr_43479;
})();
if(cljs.core.truth_(inst_43405)){
var statearr_43480_44472 = state_43473__$1;
(statearr_43480_44472[(1)] = (5));

} else {
var statearr_43481_44473 = state_43473__$1;
(statearr_43481_44473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (15))){
var inst_43446 = (state_43473[(2)]);
var state_43473__$1 = state_43473;
var statearr_43482_44474 = state_43473__$1;
(statearr_43482_44474[(2)] = inst_43446);

(statearr_43482_44474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (21))){
var inst_43466 = (state_43473[(2)]);
var state_43473__$1 = (function (){var statearr_43483 = state_43473;
(statearr_43483[(9)] = inst_43466);

return statearr_43483;
})();
var statearr_43484_44475 = state_43473__$1;
(statearr_43484_44475[(2)] = null);

(statearr_43484_44475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (13))){
var inst_43428 = (state_43473[(10)]);
var inst_43430 = cljs.core.chunked_seq_QMARK_(inst_43428);
var state_43473__$1 = state_43473;
if(inst_43430){
var statearr_43485_44476 = state_43473__$1;
(statearr_43485_44476[(1)] = (16));

} else {
var statearr_43486_44477 = state_43473__$1;
(statearr_43486_44477[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (22))){
var inst_43458 = (state_43473[(2)]);
var state_43473__$1 = state_43473;
if(cljs.core.truth_(inst_43458)){
var statearr_43487_44478 = state_43473__$1;
(statearr_43487_44478[(1)] = (23));

} else {
var statearr_43488_44479 = state_43473__$1;
(statearr_43488_44479[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (6))){
var inst_43454 = (state_43473[(11)]);
var inst_43404 = (state_43473[(8)]);
var inst_43452 = (state_43473[(7)]);
var inst_43452__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43404) : topic_fn.call(null,inst_43404));
var inst_43453 = cljs.core.deref(mults);
var inst_43454__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43453,inst_43452__$1);
var state_43473__$1 = (function (){var statearr_43489 = state_43473;
(statearr_43489[(11)] = inst_43454__$1);

(statearr_43489[(7)] = inst_43452__$1);

return statearr_43489;
})();
if(cljs.core.truth_(inst_43454__$1)){
var statearr_43490_44480 = state_43473__$1;
(statearr_43490_44480[(1)] = (19));

} else {
var statearr_43491_44481 = state_43473__$1;
(statearr_43491_44481[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (25))){
var inst_43463 = (state_43473[(2)]);
var state_43473__$1 = state_43473;
var statearr_43492_44482 = state_43473__$1;
(statearr_43492_44482[(2)] = inst_43463);

(statearr_43492_44482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (17))){
var inst_43428 = (state_43473[(10)]);
var inst_43437 = cljs.core.first(inst_43428);
var inst_43438 = cljs.core.async.muxch_STAR_(inst_43437);
var inst_43439 = cljs.core.async.close_BANG_(inst_43438);
var inst_43440 = cljs.core.next(inst_43428);
var inst_43414 = inst_43440;
var inst_43415 = null;
var inst_43416 = (0);
var inst_43417 = (0);
var state_43473__$1 = (function (){var statearr_43493 = state_43473;
(statearr_43493[(12)] = inst_43439);

(statearr_43493[(13)] = inst_43414);

(statearr_43493[(14)] = inst_43416);

(statearr_43493[(15)] = inst_43415);

(statearr_43493[(16)] = inst_43417);

return statearr_43493;
})();
var statearr_43494_44483 = state_43473__$1;
(statearr_43494_44483[(2)] = null);

(statearr_43494_44483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (3))){
var inst_43471 = (state_43473[(2)]);
var state_43473__$1 = state_43473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43473__$1,inst_43471);
} else {
if((state_val_43474 === (12))){
var inst_43448 = (state_43473[(2)]);
var state_43473__$1 = state_43473;
var statearr_43495_44484 = state_43473__$1;
(statearr_43495_44484[(2)] = inst_43448);

(statearr_43495_44484[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (2))){
var state_43473__$1 = state_43473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43473__$1,(4),ch);
} else {
if((state_val_43474 === (23))){
var state_43473__$1 = state_43473;
var statearr_43496_44485 = state_43473__$1;
(statearr_43496_44485[(2)] = null);

(statearr_43496_44485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (19))){
var inst_43454 = (state_43473[(11)]);
var inst_43404 = (state_43473[(8)]);
var inst_43456 = cljs.core.async.muxch_STAR_(inst_43454);
var state_43473__$1 = state_43473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43473__$1,(22),inst_43456,inst_43404);
} else {
if((state_val_43474 === (11))){
var inst_43428 = (state_43473[(10)]);
var inst_43414 = (state_43473[(13)]);
var inst_43428__$1 = cljs.core.seq(inst_43414);
var state_43473__$1 = (function (){var statearr_43497 = state_43473;
(statearr_43497[(10)] = inst_43428__$1);

return statearr_43497;
})();
if(inst_43428__$1){
var statearr_43498_44486 = state_43473__$1;
(statearr_43498_44486[(1)] = (13));

} else {
var statearr_43499_44487 = state_43473__$1;
(statearr_43499_44487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (9))){
var inst_43450 = (state_43473[(2)]);
var state_43473__$1 = state_43473;
var statearr_43500_44488 = state_43473__$1;
(statearr_43500_44488[(2)] = inst_43450);

(statearr_43500_44488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (5))){
var inst_43411 = cljs.core.deref(mults);
var inst_43412 = cljs.core.vals(inst_43411);
var inst_43413 = cljs.core.seq(inst_43412);
var inst_43414 = inst_43413;
var inst_43415 = null;
var inst_43416 = (0);
var inst_43417 = (0);
var state_43473__$1 = (function (){var statearr_43501 = state_43473;
(statearr_43501[(13)] = inst_43414);

(statearr_43501[(14)] = inst_43416);

(statearr_43501[(15)] = inst_43415);

(statearr_43501[(16)] = inst_43417);

return statearr_43501;
})();
var statearr_43502_44489 = state_43473__$1;
(statearr_43502_44489[(2)] = null);

(statearr_43502_44489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (14))){
var state_43473__$1 = state_43473;
var statearr_43506_44490 = state_43473__$1;
(statearr_43506_44490[(2)] = null);

(statearr_43506_44490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (16))){
var inst_43428 = (state_43473[(10)]);
var inst_43432 = cljs.core.chunk_first(inst_43428);
var inst_43433 = cljs.core.chunk_rest(inst_43428);
var inst_43434 = cljs.core.count(inst_43432);
var inst_43414 = inst_43433;
var inst_43415 = inst_43432;
var inst_43416 = inst_43434;
var inst_43417 = (0);
var state_43473__$1 = (function (){var statearr_43507 = state_43473;
(statearr_43507[(13)] = inst_43414);

(statearr_43507[(14)] = inst_43416);

(statearr_43507[(15)] = inst_43415);

(statearr_43507[(16)] = inst_43417);

return statearr_43507;
})();
var statearr_43508_44493 = state_43473__$1;
(statearr_43508_44493[(2)] = null);

(statearr_43508_44493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (10))){
var inst_43414 = (state_43473[(13)]);
var inst_43416 = (state_43473[(14)]);
var inst_43415 = (state_43473[(15)]);
var inst_43417 = (state_43473[(16)]);
var inst_43422 = cljs.core._nth(inst_43415,inst_43417);
var inst_43423 = cljs.core.async.muxch_STAR_(inst_43422);
var inst_43424 = cljs.core.async.close_BANG_(inst_43423);
var inst_43425 = (inst_43417 + (1));
var tmp43503 = inst_43414;
var tmp43504 = inst_43416;
var tmp43505 = inst_43415;
var inst_43414__$1 = tmp43503;
var inst_43415__$1 = tmp43505;
var inst_43416__$1 = tmp43504;
var inst_43417__$1 = inst_43425;
var state_43473__$1 = (function (){var statearr_43509 = state_43473;
(statearr_43509[(17)] = inst_43424);

(statearr_43509[(13)] = inst_43414__$1);

(statearr_43509[(14)] = inst_43416__$1);

(statearr_43509[(15)] = inst_43415__$1);

(statearr_43509[(16)] = inst_43417__$1);

return statearr_43509;
})();
var statearr_43510_44494 = state_43473__$1;
(statearr_43510_44494[(2)] = null);

(statearr_43510_44494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (18))){
var inst_43443 = (state_43473[(2)]);
var state_43473__$1 = state_43473;
var statearr_43511_44495 = state_43473__$1;
(statearr_43511_44495[(2)] = inst_43443);

(statearr_43511_44495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43474 === (8))){
var inst_43416 = (state_43473[(14)]);
var inst_43417 = (state_43473[(16)]);
var inst_43419 = (inst_43417 < inst_43416);
var inst_43420 = inst_43419;
var state_43473__$1 = state_43473;
if(cljs.core.truth_(inst_43420)){
var statearr_43512_44496 = state_43473__$1;
(statearr_43512_44496[(1)] = (10));

} else {
var statearr_43513_44497 = state_43473__$1;
(statearr_43513_44497[(1)] = (11));

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
var cljs$core$async$state_machine__42484__auto__ = null;
var cljs$core$async$state_machine__42484__auto____0 = (function (){
var statearr_43514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43514[(0)] = cljs$core$async$state_machine__42484__auto__);

(statearr_43514[(1)] = (1));

return statearr_43514;
});
var cljs$core$async$state_machine__42484__auto____1 = (function (state_43473){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_43473);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e43515){var ex__42487__auto__ = e43515;
var statearr_43516_44500 = state_43473;
(statearr_43516_44500[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_43473[(4)]))){
var statearr_43517_44501 = state_43473;
(statearr_43517_44501[(1)] = cljs.core.first((state_43473[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44502 = state_43473;
state_43473 = G__44502;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$state_machine__42484__auto__ = function(state_43473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42484__auto____1.call(this,state_43473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42484__auto____0;
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42484__auto____1;
return cljs$core$async$state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_43518 = f__42520__auto__();
(statearr_43518[(6)] = c__42519__auto___44467);

return statearr_43518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
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
var G__43520 = arguments.length;
switch (G__43520) {
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
var G__43522 = arguments.length;
switch (G__43522) {
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
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
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
var G__43524 = arguments.length;
switch (G__43524) {
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
var c__42519__auto___44508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_43567){
var state_val_43568 = (state_43567[(1)]);
if((state_val_43568 === (7))){
var state_43567__$1 = state_43567;
var statearr_43569_44509 = state_43567__$1;
(statearr_43569_44509[(2)] = null);

(statearr_43569_44509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (1))){
var state_43567__$1 = state_43567;
var statearr_43570_44512 = state_43567__$1;
(statearr_43570_44512[(2)] = null);

(statearr_43570_44512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (4))){
var inst_43527 = (state_43567[(7)]);
var inst_43528 = (state_43567[(8)]);
var inst_43530 = (inst_43528 < inst_43527);
var state_43567__$1 = state_43567;
if(cljs.core.truth_(inst_43530)){
var statearr_43571_44513 = state_43567__$1;
(statearr_43571_44513[(1)] = (6));

} else {
var statearr_43572_44514 = state_43567__$1;
(statearr_43572_44514[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (15))){
var inst_43553 = (state_43567[(9)]);
var inst_43558 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43553);
var state_43567__$1 = state_43567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43567__$1,(17),out,inst_43558);
} else {
if((state_val_43568 === (13))){
var inst_43553 = (state_43567[(9)]);
var inst_43553__$1 = (state_43567[(2)]);
var inst_43554 = cljs.core.some(cljs.core.nil_QMARK_,inst_43553__$1);
var state_43567__$1 = (function (){var statearr_43573 = state_43567;
(statearr_43573[(9)] = inst_43553__$1);

return statearr_43573;
})();
if(cljs.core.truth_(inst_43554)){
var statearr_43574_44515 = state_43567__$1;
(statearr_43574_44515[(1)] = (14));

} else {
var statearr_43575_44516 = state_43567__$1;
(statearr_43575_44516[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (6))){
var state_43567__$1 = state_43567;
var statearr_43576_44519 = state_43567__$1;
(statearr_43576_44519[(2)] = null);

(statearr_43576_44519[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (17))){
var inst_43560 = (state_43567[(2)]);
var state_43567__$1 = (function (){var statearr_43578 = state_43567;
(statearr_43578[(10)] = inst_43560);

return statearr_43578;
})();
var statearr_43579_44520 = state_43567__$1;
(statearr_43579_44520[(2)] = null);

(statearr_43579_44520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (3))){
var inst_43565 = (state_43567[(2)]);
var state_43567__$1 = state_43567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43567__$1,inst_43565);
} else {
if((state_val_43568 === (12))){
var _ = (function (){var statearr_43580 = state_43567;
(statearr_43580[(4)] = cljs.core.rest((state_43567[(4)])));

return statearr_43580;
})();
var state_43567__$1 = state_43567;
var ex43577 = (state_43567__$1[(2)]);
var statearr_43581_44521 = state_43567__$1;
(statearr_43581_44521[(5)] = ex43577);


if((ex43577 instanceof Object)){
var statearr_43582_44522 = state_43567__$1;
(statearr_43582_44522[(1)] = (11));

(statearr_43582_44522[(5)] = null);

} else {
throw ex43577;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (2))){
var inst_43526 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43527 = cnt;
var inst_43528 = (0);
var state_43567__$1 = (function (){var statearr_43583 = state_43567;
(statearr_43583[(11)] = inst_43526);

(statearr_43583[(7)] = inst_43527);

(statearr_43583[(8)] = inst_43528);

return statearr_43583;
})();
var statearr_43584_44523 = state_43567__$1;
(statearr_43584_44523[(2)] = null);

(statearr_43584_44523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (11))){
var inst_43532 = (state_43567[(2)]);
var inst_43533 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43567__$1 = (function (){var statearr_43585 = state_43567;
(statearr_43585[(12)] = inst_43532);

return statearr_43585;
})();
var statearr_43586_44524 = state_43567__$1;
(statearr_43586_44524[(2)] = inst_43533);

(statearr_43586_44524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (9))){
var inst_43528 = (state_43567[(8)]);
var _ = (function (){var statearr_43587 = state_43567;
(statearr_43587[(4)] = cljs.core.cons((12),(state_43567[(4)])));

return statearr_43587;
})();
var inst_43539 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43528) : chs__$1.call(null,inst_43528));
var inst_43540 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43528) : done.call(null,inst_43528));
var inst_43541 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43539,inst_43540);
var ___$1 = (function (){var statearr_43588 = state_43567;
(statearr_43588[(4)] = cljs.core.rest((state_43567[(4)])));

return statearr_43588;
})();
var state_43567__$1 = state_43567;
var statearr_43589_44525 = state_43567__$1;
(statearr_43589_44525[(2)] = inst_43541);

(statearr_43589_44525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (5))){
var inst_43551 = (state_43567[(2)]);
var state_43567__$1 = (function (){var statearr_43590 = state_43567;
(statearr_43590[(13)] = inst_43551);

return statearr_43590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43567__$1,(13),dchan);
} else {
if((state_val_43568 === (14))){
var inst_43556 = cljs.core.async.close_BANG_(out);
var state_43567__$1 = state_43567;
var statearr_43591_44526 = state_43567__$1;
(statearr_43591_44526[(2)] = inst_43556);

(statearr_43591_44526[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (16))){
var inst_43563 = (state_43567[(2)]);
var state_43567__$1 = state_43567;
var statearr_43592_44527 = state_43567__$1;
(statearr_43592_44527[(2)] = inst_43563);

(statearr_43592_44527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (10))){
var inst_43528 = (state_43567[(8)]);
var inst_43544 = (state_43567[(2)]);
var inst_43545 = (inst_43528 + (1));
var inst_43528__$1 = inst_43545;
var state_43567__$1 = (function (){var statearr_43593 = state_43567;
(statearr_43593[(8)] = inst_43528__$1);

(statearr_43593[(14)] = inst_43544);

return statearr_43593;
})();
var statearr_43594_44528 = state_43567__$1;
(statearr_43594_44528[(2)] = null);

(statearr_43594_44528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43568 === (8))){
var inst_43549 = (state_43567[(2)]);
var state_43567__$1 = state_43567;
var statearr_43595_44529 = state_43567__$1;
(statearr_43595_44529[(2)] = inst_43549);

(statearr_43595_44529[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__42484__auto__ = null;
var cljs$core$async$state_machine__42484__auto____0 = (function (){
var statearr_43596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43596[(0)] = cljs$core$async$state_machine__42484__auto__);

(statearr_43596[(1)] = (1));

return statearr_43596;
});
var cljs$core$async$state_machine__42484__auto____1 = (function (state_43567){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_43567);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e43597){var ex__42487__auto__ = e43597;
var statearr_43598_44530 = state_43567;
(statearr_43598_44530[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_43567[(4)]))){
var statearr_43599_44531 = state_43567;
(statearr_43599_44531[(1)] = cljs.core.first((state_43567[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44532 = state_43567;
state_43567 = G__44532;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$state_machine__42484__auto__ = function(state_43567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42484__auto____1.call(this,state_43567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42484__auto____0;
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42484__auto____1;
return cljs$core$async$state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_43600 = f__42520__auto__();
(statearr_43600[(6)] = c__42519__auto___44508);

return statearr_43600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
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
var G__43603 = arguments.length;
switch (G__43603) {
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
var c__42519__auto___44534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_43635){
var state_val_43636 = (state_43635[(1)]);
if((state_val_43636 === (7))){
var inst_43614 = (state_43635[(7)]);
var inst_43615 = (state_43635[(8)]);
var inst_43614__$1 = (state_43635[(2)]);
var inst_43615__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43614__$1,(0),null);
var inst_43616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43614__$1,(1),null);
var inst_43617 = (inst_43615__$1 == null);
var state_43635__$1 = (function (){var statearr_43637 = state_43635;
(statearr_43637[(9)] = inst_43616);

(statearr_43637[(7)] = inst_43614__$1);

(statearr_43637[(8)] = inst_43615__$1);

return statearr_43637;
})();
if(cljs.core.truth_(inst_43617)){
var statearr_43638_44535 = state_43635__$1;
(statearr_43638_44535[(1)] = (8));

} else {
var statearr_43639_44536 = state_43635__$1;
(statearr_43639_44536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43636 === (1))){
var inst_43604 = cljs.core.vec(chs);
var inst_43605 = inst_43604;
var state_43635__$1 = (function (){var statearr_43640 = state_43635;
(statearr_43640[(10)] = inst_43605);

return statearr_43640;
})();
var statearr_43641_44537 = state_43635__$1;
(statearr_43641_44537[(2)] = null);

(statearr_43641_44537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43636 === (4))){
var inst_43605 = (state_43635[(10)]);
var state_43635__$1 = state_43635;
return cljs.core.async.ioc_alts_BANG_(state_43635__$1,(7),inst_43605);
} else {
if((state_val_43636 === (6))){
var inst_43631 = (state_43635[(2)]);
var state_43635__$1 = state_43635;
var statearr_43642_44538 = state_43635__$1;
(statearr_43642_44538[(2)] = inst_43631);

(statearr_43642_44538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43636 === (3))){
var inst_43633 = (state_43635[(2)]);
var state_43635__$1 = state_43635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43635__$1,inst_43633);
} else {
if((state_val_43636 === (2))){
var inst_43605 = (state_43635[(10)]);
var inst_43607 = cljs.core.count(inst_43605);
var inst_43608 = (inst_43607 > (0));
var state_43635__$1 = state_43635;
if(cljs.core.truth_(inst_43608)){
var statearr_43644_44539 = state_43635__$1;
(statearr_43644_44539[(1)] = (4));

} else {
var statearr_43645_44540 = state_43635__$1;
(statearr_43645_44540[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43636 === (11))){
var inst_43605 = (state_43635[(10)]);
var inst_43624 = (state_43635[(2)]);
var tmp43643 = inst_43605;
var inst_43605__$1 = tmp43643;
var state_43635__$1 = (function (){var statearr_43646 = state_43635;
(statearr_43646[(11)] = inst_43624);

(statearr_43646[(10)] = inst_43605__$1);

return statearr_43646;
})();
var statearr_43647_44542 = state_43635__$1;
(statearr_43647_44542[(2)] = null);

(statearr_43647_44542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43636 === (9))){
var inst_43615 = (state_43635[(8)]);
var state_43635__$1 = state_43635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43635__$1,(11),out,inst_43615);
} else {
if((state_val_43636 === (5))){
var inst_43629 = cljs.core.async.close_BANG_(out);
var state_43635__$1 = state_43635;
var statearr_43648_44543 = state_43635__$1;
(statearr_43648_44543[(2)] = inst_43629);

(statearr_43648_44543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43636 === (10))){
var inst_43627 = (state_43635[(2)]);
var state_43635__$1 = state_43635;
var statearr_43649_44545 = state_43635__$1;
(statearr_43649_44545[(2)] = inst_43627);

(statearr_43649_44545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43636 === (8))){
var inst_43616 = (state_43635[(9)]);
var inst_43614 = (state_43635[(7)]);
var inst_43615 = (state_43635[(8)]);
var inst_43605 = (state_43635[(10)]);
var inst_43619 = (function (){var cs = inst_43605;
var vec__43610 = inst_43614;
var v = inst_43615;
var c = inst_43616;
return (function (p1__43601_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43601_SHARP_);
});
})();
var inst_43620 = cljs.core.filterv(inst_43619,inst_43605);
var inst_43605__$1 = inst_43620;
var state_43635__$1 = (function (){var statearr_43650 = state_43635;
(statearr_43650[(10)] = inst_43605__$1);

return statearr_43650;
})();
var statearr_43651_44546 = state_43635__$1;
(statearr_43651_44546[(2)] = null);

(statearr_43651_44546[(1)] = (2));


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
var cljs$core$async$state_machine__42484__auto__ = null;
var cljs$core$async$state_machine__42484__auto____0 = (function (){
var statearr_43652 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43652[(0)] = cljs$core$async$state_machine__42484__auto__);

(statearr_43652[(1)] = (1));

return statearr_43652;
});
var cljs$core$async$state_machine__42484__auto____1 = (function (state_43635){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_43635);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e43653){var ex__42487__auto__ = e43653;
var statearr_43654_44550 = state_43635;
(statearr_43654_44550[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_43635[(4)]))){
var statearr_43655_44551 = state_43635;
(statearr_43655_44551[(1)] = cljs.core.first((state_43635[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44552 = state_43635;
state_43635 = G__44552;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$state_machine__42484__auto__ = function(state_43635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42484__auto____1.call(this,state_43635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42484__auto____0;
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42484__auto____1;
return cljs$core$async$state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_43656 = f__42520__auto__();
(statearr_43656[(6)] = c__42519__auto___44534);

return statearr_43656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
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
var G__43658 = arguments.length;
switch (G__43658) {
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
var c__42519__auto___44558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_43682){
var state_val_43683 = (state_43682[(1)]);
if((state_val_43683 === (7))){
var inst_43664 = (state_43682[(7)]);
var inst_43664__$1 = (state_43682[(2)]);
var inst_43665 = (inst_43664__$1 == null);
var inst_43666 = cljs.core.not(inst_43665);
var state_43682__$1 = (function (){var statearr_43684 = state_43682;
(statearr_43684[(7)] = inst_43664__$1);

return statearr_43684;
})();
if(inst_43666){
var statearr_43685_44559 = state_43682__$1;
(statearr_43685_44559[(1)] = (8));

} else {
var statearr_43686_44560 = state_43682__$1;
(statearr_43686_44560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (1))){
var inst_43659 = (0);
var state_43682__$1 = (function (){var statearr_43687 = state_43682;
(statearr_43687[(8)] = inst_43659);

return statearr_43687;
})();
var statearr_43688_44561 = state_43682__$1;
(statearr_43688_44561[(2)] = null);

(statearr_43688_44561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (4))){
var state_43682__$1 = state_43682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43682__$1,(7),ch);
} else {
if((state_val_43683 === (6))){
var inst_43677 = (state_43682[(2)]);
var state_43682__$1 = state_43682;
var statearr_43689_44562 = state_43682__$1;
(statearr_43689_44562[(2)] = inst_43677);

(statearr_43689_44562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (3))){
var inst_43679 = (state_43682[(2)]);
var inst_43680 = cljs.core.async.close_BANG_(out);
var state_43682__$1 = (function (){var statearr_43690 = state_43682;
(statearr_43690[(9)] = inst_43679);

return statearr_43690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43682__$1,inst_43680);
} else {
if((state_val_43683 === (2))){
var inst_43659 = (state_43682[(8)]);
var inst_43661 = (inst_43659 < n);
var state_43682__$1 = state_43682;
if(cljs.core.truth_(inst_43661)){
var statearr_43691_44563 = state_43682__$1;
(statearr_43691_44563[(1)] = (4));

} else {
var statearr_43692_44564 = state_43682__$1;
(statearr_43692_44564[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (11))){
var inst_43659 = (state_43682[(8)]);
var inst_43669 = (state_43682[(2)]);
var inst_43670 = (inst_43659 + (1));
var inst_43659__$1 = inst_43670;
var state_43682__$1 = (function (){var statearr_43693 = state_43682;
(statearr_43693[(10)] = inst_43669);

(statearr_43693[(8)] = inst_43659__$1);

return statearr_43693;
})();
var statearr_43694_44565 = state_43682__$1;
(statearr_43694_44565[(2)] = null);

(statearr_43694_44565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (9))){
var state_43682__$1 = state_43682;
var statearr_43695_44566 = state_43682__$1;
(statearr_43695_44566[(2)] = null);

(statearr_43695_44566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (5))){
var state_43682__$1 = state_43682;
var statearr_43696_44567 = state_43682__$1;
(statearr_43696_44567[(2)] = null);

(statearr_43696_44567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (10))){
var inst_43674 = (state_43682[(2)]);
var state_43682__$1 = state_43682;
var statearr_43697_44568 = state_43682__$1;
(statearr_43697_44568[(2)] = inst_43674);

(statearr_43697_44568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43683 === (8))){
var inst_43664 = (state_43682[(7)]);
var state_43682__$1 = state_43682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43682__$1,(11),out,inst_43664);
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
var cljs$core$async$state_machine__42484__auto__ = null;
var cljs$core$async$state_machine__42484__auto____0 = (function (){
var statearr_43698 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43698[(0)] = cljs$core$async$state_machine__42484__auto__);

(statearr_43698[(1)] = (1));

return statearr_43698;
});
var cljs$core$async$state_machine__42484__auto____1 = (function (state_43682){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_43682);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e43699){var ex__42487__auto__ = e43699;
var statearr_43700_44569 = state_43682;
(statearr_43700_44569[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_43682[(4)]))){
var statearr_43701_44570 = state_43682;
(statearr_43701_44570[(1)] = cljs.core.first((state_43682[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44571 = state_43682;
state_43682 = G__44571;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$state_machine__42484__auto__ = function(state_43682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42484__auto____1.call(this,state_43682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42484__auto____0;
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42484__auto____1;
return cljs$core$async$state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_43702 = f__42520__auto__();
(statearr_43702[(6)] = c__42519__auto___44558);

return statearr_43702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43704 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43704 = (function (f,ch,meta43705){
this.f = f;
this.ch = ch;
this.meta43705 = meta43705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43706,meta43705__$1){
var self__ = this;
var _43706__$1 = this;
return (new cljs.core.async.t_cljs$core$async43704(self__.f,self__.ch,meta43705__$1));
}));

(cljs.core.async.t_cljs$core$async43704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43706){
var self__ = this;
var _43706__$1 = this;
return self__.meta43705;
}));

(cljs.core.async.t_cljs$core$async43704.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43704.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43704.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43707 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43707 = (function (f,ch,meta43705,_,fn1,meta43708){
this.f = f;
this.ch = ch;
this.meta43705 = meta43705;
this._ = _;
this.fn1 = fn1;
this.meta43708 = meta43708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43709,meta43708__$1){
var self__ = this;
var _43709__$1 = this;
return (new cljs.core.async.t_cljs$core$async43707(self__.f,self__.ch,self__.meta43705,self__._,self__.fn1,meta43708__$1));
}));

(cljs.core.async.t_cljs$core$async43707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43709){
var self__ = this;
var _43709__$1 = this;
return self__.meta43708;
}));

(cljs.core.async.t_cljs$core$async43707.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__43703_SHARP_){
var G__43710 = (((p1__43703_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43703_SHARP_) : self__.f.call(null,p1__43703_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43710) : f1.call(null,G__43710));
});
}));

(cljs.core.async.t_cljs$core$async43707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43705","meta43705",-1108019546,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43704","cljs.core.async/t_cljs$core$async43704",1606064132,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43708","meta43708",1148836741,null)], null);
}));

(cljs.core.async.t_cljs$core$async43707.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43707");

(cljs.core.async.t_cljs$core$async43707.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43707");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43707.
 */
cljs.core.async.__GT_t_cljs$core$async43707 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43707(f__$1,ch__$1,meta43705__$1,___$2,fn1__$1,meta43708){
return (new cljs.core.async.t_cljs$core$async43707(f__$1,ch__$1,meta43705__$1,___$2,fn1__$1,meta43708));
});

}

return (new cljs.core.async.t_cljs$core$async43707(self__.f,self__.ch,self__.meta43705,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43711 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43711) : self__.f.call(null,G__43711));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async43704.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43705","meta43705",-1108019546,null)], null);
}));

(cljs.core.async.t_cljs$core$async43704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43704");

(cljs.core.async.t_cljs$core$async43704.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43704.
 */
cljs.core.async.__GT_t_cljs$core$async43704 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43704(f__$1,ch__$1,meta43705){
return (new cljs.core.async.t_cljs$core$async43704(f__$1,ch__$1,meta43705));
});

}

return (new cljs.core.async.t_cljs$core$async43704(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43712 = (function (f,ch,meta43713){
this.f = f;
this.ch = ch;
this.meta43713 = meta43713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43714,meta43713__$1){
var self__ = this;
var _43714__$1 = this;
return (new cljs.core.async.t_cljs$core$async43712(self__.f,self__.ch,meta43713__$1));
}));

(cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43714){
var self__ = this;
var _43714__$1 = this;
return self__.meta43713;
}));

(cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async43712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43713","meta43713",-1560998578,null)], null);
}));

(cljs.core.async.t_cljs$core$async43712.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43712");

(cljs.core.async.t_cljs$core$async43712.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43712");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43712.
 */
cljs.core.async.__GT_t_cljs$core$async43712 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43712(f__$1,ch__$1,meta43713){
return (new cljs.core.async.t_cljs$core$async43712(f__$1,ch__$1,meta43713));
});

}

return (new cljs.core.async.t_cljs$core$async43712(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43715 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43715 = (function (p,ch,meta43716){
this.p = p;
this.ch = ch;
this.meta43716 = meta43716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43717,meta43716__$1){
var self__ = this;
var _43717__$1 = this;
return (new cljs.core.async.t_cljs$core$async43715(self__.p,self__.ch,meta43716__$1));
}));

(cljs.core.async.t_cljs$core$async43715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43717){
var self__ = this;
var _43717__$1 = this;
return self__.meta43716;
}));

(cljs.core.async.t_cljs$core$async43715.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43715.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43715.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43715.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43715.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43715.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43715.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43716","meta43716",1652975351,null)], null);
}));

(cljs.core.async.t_cljs$core$async43715.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43715");

(cljs.core.async.t_cljs$core$async43715.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43715");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43715.
 */
cljs.core.async.__GT_t_cljs$core$async43715 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43715(p__$1,ch__$1,meta43716){
return (new cljs.core.async.t_cljs$core$async43715(p__$1,ch__$1,meta43716));
});

}

return (new cljs.core.async.t_cljs$core$async43715(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43719 = arguments.length;
switch (G__43719) {
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
var c__42519__auto___44573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_43740){
var state_val_43741 = (state_43740[(1)]);
if((state_val_43741 === (7))){
var inst_43736 = (state_43740[(2)]);
var state_43740__$1 = state_43740;
var statearr_43742_44574 = state_43740__$1;
(statearr_43742_44574[(2)] = inst_43736);

(statearr_43742_44574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (1))){
var state_43740__$1 = state_43740;
var statearr_43743_44575 = state_43740__$1;
(statearr_43743_44575[(2)] = null);

(statearr_43743_44575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (4))){
var inst_43722 = (state_43740[(7)]);
var inst_43722__$1 = (state_43740[(2)]);
var inst_43723 = (inst_43722__$1 == null);
var state_43740__$1 = (function (){var statearr_43744 = state_43740;
(statearr_43744[(7)] = inst_43722__$1);

return statearr_43744;
})();
if(cljs.core.truth_(inst_43723)){
var statearr_43745_44576 = state_43740__$1;
(statearr_43745_44576[(1)] = (5));

} else {
var statearr_43746_44577 = state_43740__$1;
(statearr_43746_44577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (6))){
var inst_43722 = (state_43740[(7)]);
var inst_43727 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43722) : p.call(null,inst_43722));
var state_43740__$1 = state_43740;
if(cljs.core.truth_(inst_43727)){
var statearr_43747_44578 = state_43740__$1;
(statearr_43747_44578[(1)] = (8));

} else {
var statearr_43748_44579 = state_43740__$1;
(statearr_43748_44579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (3))){
var inst_43738 = (state_43740[(2)]);
var state_43740__$1 = state_43740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43740__$1,inst_43738);
} else {
if((state_val_43741 === (2))){
var state_43740__$1 = state_43740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43740__$1,(4),ch);
} else {
if((state_val_43741 === (11))){
var inst_43730 = (state_43740[(2)]);
var state_43740__$1 = state_43740;
var statearr_43749_44580 = state_43740__$1;
(statearr_43749_44580[(2)] = inst_43730);

(statearr_43749_44580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (9))){
var state_43740__$1 = state_43740;
var statearr_43750_44581 = state_43740__$1;
(statearr_43750_44581[(2)] = null);

(statearr_43750_44581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (5))){
var inst_43725 = cljs.core.async.close_BANG_(out);
var state_43740__$1 = state_43740;
var statearr_43751_44582 = state_43740__$1;
(statearr_43751_44582[(2)] = inst_43725);

(statearr_43751_44582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (10))){
var inst_43733 = (state_43740[(2)]);
var state_43740__$1 = (function (){var statearr_43752 = state_43740;
(statearr_43752[(8)] = inst_43733);

return statearr_43752;
})();
var statearr_43753_44583 = state_43740__$1;
(statearr_43753_44583[(2)] = null);

(statearr_43753_44583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43741 === (8))){
var inst_43722 = (state_43740[(7)]);
var state_43740__$1 = state_43740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43740__$1,(11),out,inst_43722);
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
var cljs$core$async$state_machine__42484__auto__ = null;
var cljs$core$async$state_machine__42484__auto____0 = (function (){
var statearr_43754 = [null,null,null,null,null,null,null,null,null];
(statearr_43754[(0)] = cljs$core$async$state_machine__42484__auto__);

(statearr_43754[(1)] = (1));

return statearr_43754;
});
var cljs$core$async$state_machine__42484__auto____1 = (function (state_43740){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_43740);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e43755){var ex__42487__auto__ = e43755;
var statearr_43756_44584 = state_43740;
(statearr_43756_44584[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_43740[(4)]))){
var statearr_43757_44585 = state_43740;
(statearr_43757_44585[(1)] = cljs.core.first((state_43740[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44586 = state_43740;
state_43740 = G__44586;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$state_machine__42484__auto__ = function(state_43740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42484__auto____1.call(this,state_43740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42484__auto____0;
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42484__auto____1;
return cljs$core$async$state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_43758 = f__42520__auto__();
(statearr_43758[(6)] = c__42519__auto___44573);

return statearr_43758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43760 = arguments.length;
switch (G__43760) {
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
var c__42519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_43822){
var state_val_43823 = (state_43822[(1)]);
if((state_val_43823 === (7))){
var inst_43818 = (state_43822[(2)]);
var state_43822__$1 = state_43822;
var statearr_43824_44588 = state_43822__$1;
(statearr_43824_44588[(2)] = inst_43818);

(statearr_43824_44588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (20))){
var inst_43788 = (state_43822[(7)]);
var inst_43799 = (state_43822[(2)]);
var inst_43800 = cljs.core.next(inst_43788);
var inst_43774 = inst_43800;
var inst_43775 = null;
var inst_43776 = (0);
var inst_43777 = (0);
var state_43822__$1 = (function (){var statearr_43825 = state_43822;
(statearr_43825[(8)] = inst_43777);

(statearr_43825[(9)] = inst_43799);

(statearr_43825[(10)] = inst_43774);

(statearr_43825[(11)] = inst_43775);

(statearr_43825[(12)] = inst_43776);

return statearr_43825;
})();
var statearr_43826_44589 = state_43822__$1;
(statearr_43826_44589[(2)] = null);

(statearr_43826_44589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (1))){
var state_43822__$1 = state_43822;
var statearr_43827_44590 = state_43822__$1;
(statearr_43827_44590[(2)] = null);

(statearr_43827_44590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (4))){
var inst_43763 = (state_43822[(13)]);
var inst_43763__$1 = (state_43822[(2)]);
var inst_43764 = (inst_43763__$1 == null);
var state_43822__$1 = (function (){var statearr_43828 = state_43822;
(statearr_43828[(13)] = inst_43763__$1);

return statearr_43828;
})();
if(cljs.core.truth_(inst_43764)){
var statearr_43829_44591 = state_43822__$1;
(statearr_43829_44591[(1)] = (5));

} else {
var statearr_43830_44592 = state_43822__$1;
(statearr_43830_44592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (15))){
var state_43822__$1 = state_43822;
var statearr_43834_44593 = state_43822__$1;
(statearr_43834_44593[(2)] = null);

(statearr_43834_44593[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (21))){
var state_43822__$1 = state_43822;
var statearr_43835_44594 = state_43822__$1;
(statearr_43835_44594[(2)] = null);

(statearr_43835_44594[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (13))){
var inst_43777 = (state_43822[(8)]);
var inst_43774 = (state_43822[(10)]);
var inst_43775 = (state_43822[(11)]);
var inst_43776 = (state_43822[(12)]);
var inst_43784 = (state_43822[(2)]);
var inst_43785 = (inst_43777 + (1));
var tmp43831 = inst_43774;
var tmp43832 = inst_43775;
var tmp43833 = inst_43776;
var inst_43774__$1 = tmp43831;
var inst_43775__$1 = tmp43832;
var inst_43776__$1 = tmp43833;
var inst_43777__$1 = inst_43785;
var state_43822__$1 = (function (){var statearr_43836 = state_43822;
(statearr_43836[(14)] = inst_43784);

(statearr_43836[(8)] = inst_43777__$1);

(statearr_43836[(10)] = inst_43774__$1);

(statearr_43836[(11)] = inst_43775__$1);

(statearr_43836[(12)] = inst_43776__$1);

return statearr_43836;
})();
var statearr_43837_44595 = state_43822__$1;
(statearr_43837_44595[(2)] = null);

(statearr_43837_44595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (22))){
var state_43822__$1 = state_43822;
var statearr_43838_44596 = state_43822__$1;
(statearr_43838_44596[(2)] = null);

(statearr_43838_44596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (6))){
var inst_43763 = (state_43822[(13)]);
var inst_43772 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43763) : f.call(null,inst_43763));
var inst_43773 = cljs.core.seq(inst_43772);
var inst_43774 = inst_43773;
var inst_43775 = null;
var inst_43776 = (0);
var inst_43777 = (0);
var state_43822__$1 = (function (){var statearr_43839 = state_43822;
(statearr_43839[(8)] = inst_43777);

(statearr_43839[(10)] = inst_43774);

(statearr_43839[(11)] = inst_43775);

(statearr_43839[(12)] = inst_43776);

return statearr_43839;
})();
var statearr_43840_44597 = state_43822__$1;
(statearr_43840_44597[(2)] = null);

(statearr_43840_44597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (17))){
var inst_43788 = (state_43822[(7)]);
var inst_43792 = cljs.core.chunk_first(inst_43788);
var inst_43793 = cljs.core.chunk_rest(inst_43788);
var inst_43794 = cljs.core.count(inst_43792);
var inst_43774 = inst_43793;
var inst_43775 = inst_43792;
var inst_43776 = inst_43794;
var inst_43777 = (0);
var state_43822__$1 = (function (){var statearr_43841 = state_43822;
(statearr_43841[(8)] = inst_43777);

(statearr_43841[(10)] = inst_43774);

(statearr_43841[(11)] = inst_43775);

(statearr_43841[(12)] = inst_43776);

return statearr_43841;
})();
var statearr_43842_44598 = state_43822__$1;
(statearr_43842_44598[(2)] = null);

(statearr_43842_44598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (3))){
var inst_43820 = (state_43822[(2)]);
var state_43822__$1 = state_43822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43822__$1,inst_43820);
} else {
if((state_val_43823 === (12))){
var inst_43808 = (state_43822[(2)]);
var state_43822__$1 = state_43822;
var statearr_43843_44602 = state_43822__$1;
(statearr_43843_44602[(2)] = inst_43808);

(statearr_43843_44602[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (2))){
var state_43822__$1 = state_43822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43822__$1,(4),in$);
} else {
if((state_val_43823 === (23))){
var inst_43816 = (state_43822[(2)]);
var state_43822__$1 = state_43822;
var statearr_43844_44603 = state_43822__$1;
(statearr_43844_44603[(2)] = inst_43816);

(statearr_43844_44603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (19))){
var inst_43803 = (state_43822[(2)]);
var state_43822__$1 = state_43822;
var statearr_43845_44604 = state_43822__$1;
(statearr_43845_44604[(2)] = inst_43803);

(statearr_43845_44604[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (11))){
var inst_43774 = (state_43822[(10)]);
var inst_43788 = (state_43822[(7)]);
var inst_43788__$1 = cljs.core.seq(inst_43774);
var state_43822__$1 = (function (){var statearr_43846 = state_43822;
(statearr_43846[(7)] = inst_43788__$1);

return statearr_43846;
})();
if(inst_43788__$1){
var statearr_43847_44605 = state_43822__$1;
(statearr_43847_44605[(1)] = (14));

} else {
var statearr_43848_44606 = state_43822__$1;
(statearr_43848_44606[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (9))){
var inst_43810 = (state_43822[(2)]);
var inst_43811 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43822__$1 = (function (){var statearr_43849 = state_43822;
(statearr_43849[(15)] = inst_43810);

return statearr_43849;
})();
if(cljs.core.truth_(inst_43811)){
var statearr_43850_44607 = state_43822__$1;
(statearr_43850_44607[(1)] = (21));

} else {
var statearr_43851_44608 = state_43822__$1;
(statearr_43851_44608[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (5))){
var inst_43766 = cljs.core.async.close_BANG_(out);
var state_43822__$1 = state_43822;
var statearr_43852_44609 = state_43822__$1;
(statearr_43852_44609[(2)] = inst_43766);

(statearr_43852_44609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (14))){
var inst_43788 = (state_43822[(7)]);
var inst_43790 = cljs.core.chunked_seq_QMARK_(inst_43788);
var state_43822__$1 = state_43822;
if(inst_43790){
var statearr_43853_44610 = state_43822__$1;
(statearr_43853_44610[(1)] = (17));

} else {
var statearr_43854_44612 = state_43822__$1;
(statearr_43854_44612[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (16))){
var inst_43806 = (state_43822[(2)]);
var state_43822__$1 = state_43822;
var statearr_43855_44614 = state_43822__$1;
(statearr_43855_44614[(2)] = inst_43806);

(statearr_43855_44614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43823 === (10))){
var inst_43777 = (state_43822[(8)]);
var inst_43775 = (state_43822[(11)]);
var inst_43782 = cljs.core._nth(inst_43775,inst_43777);
var state_43822__$1 = state_43822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43822__$1,(13),out,inst_43782);
} else {
if((state_val_43823 === (18))){
var inst_43788 = (state_43822[(7)]);
var inst_43797 = cljs.core.first(inst_43788);
var state_43822__$1 = state_43822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43822__$1,(20),out,inst_43797);
} else {
if((state_val_43823 === (8))){
var inst_43777 = (state_43822[(8)]);
var inst_43776 = (state_43822[(12)]);
var inst_43779 = (inst_43777 < inst_43776);
var inst_43780 = inst_43779;
var state_43822__$1 = state_43822;
if(cljs.core.truth_(inst_43780)){
var statearr_43856_44615 = state_43822__$1;
(statearr_43856_44615[(1)] = (10));

} else {
var statearr_43857_44616 = state_43822__$1;
(statearr_43857_44616[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__42484__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42484__auto____0 = (function (){
var statearr_43858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43858[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42484__auto__);

(statearr_43858[(1)] = (1));

return statearr_43858;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42484__auto____1 = (function (state_43822){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_43822);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e43859){var ex__42487__auto__ = e43859;
var statearr_43860_44617 = state_43822;
(statearr_43860_44617[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_43822[(4)]))){
var statearr_43861_44618 = state_43822;
(statearr_43861_44618[(1)] = cljs.core.first((state_43822[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44619 = state_43822;
state_43822 = G__44619;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42484__auto__ = function(state_43822){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42484__auto____1.call(this,state_43822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42484__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42484__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_43862 = f__42520__auto__();
(statearr_43862[(6)] = c__42519__auto__);

return statearr_43862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));

return c__42519__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43864 = arguments.length;
switch (G__43864) {
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
var G__43866 = arguments.length;
switch (G__43866) {
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
var G__43868 = arguments.length;
switch (G__43868) {
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
var c__42519__auto___44623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_43892){
var state_val_43893 = (state_43892[(1)]);
if((state_val_43893 === (7))){
var inst_43887 = (state_43892[(2)]);
var state_43892__$1 = state_43892;
var statearr_43894_44624 = state_43892__$1;
(statearr_43894_44624[(2)] = inst_43887);

(statearr_43894_44624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43893 === (1))){
var inst_43869 = null;
var state_43892__$1 = (function (){var statearr_43895 = state_43892;
(statearr_43895[(7)] = inst_43869);

return statearr_43895;
})();
var statearr_43896_44625 = state_43892__$1;
(statearr_43896_44625[(2)] = null);

(statearr_43896_44625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43893 === (4))){
var inst_43872 = (state_43892[(8)]);
var inst_43872__$1 = (state_43892[(2)]);
var inst_43873 = (inst_43872__$1 == null);
var inst_43874 = cljs.core.not(inst_43873);
var state_43892__$1 = (function (){var statearr_43897 = state_43892;
(statearr_43897[(8)] = inst_43872__$1);

return statearr_43897;
})();
if(inst_43874){
var statearr_43898_44626 = state_43892__$1;
(statearr_43898_44626[(1)] = (5));

} else {
var statearr_43899_44627 = state_43892__$1;
(statearr_43899_44627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43893 === (6))){
var state_43892__$1 = state_43892;
var statearr_43900_44628 = state_43892__$1;
(statearr_43900_44628[(2)] = null);

(statearr_43900_44628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43893 === (3))){
var inst_43889 = (state_43892[(2)]);
var inst_43890 = cljs.core.async.close_BANG_(out);
var state_43892__$1 = (function (){var statearr_43901 = state_43892;
(statearr_43901[(9)] = inst_43889);

return statearr_43901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43892__$1,inst_43890);
} else {
if((state_val_43893 === (2))){
var state_43892__$1 = state_43892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43892__$1,(4),ch);
} else {
if((state_val_43893 === (11))){
var inst_43872 = (state_43892[(8)]);
var inst_43881 = (state_43892[(2)]);
var inst_43869 = inst_43872;
var state_43892__$1 = (function (){var statearr_43902 = state_43892;
(statearr_43902[(7)] = inst_43869);

(statearr_43902[(10)] = inst_43881);

return statearr_43902;
})();
var statearr_43903_44630 = state_43892__$1;
(statearr_43903_44630[(2)] = null);

(statearr_43903_44630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43893 === (9))){
var inst_43872 = (state_43892[(8)]);
var state_43892__$1 = state_43892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43892__$1,(11),out,inst_43872);
} else {
if((state_val_43893 === (5))){
var inst_43872 = (state_43892[(8)]);
var inst_43869 = (state_43892[(7)]);
var inst_43876 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43872,inst_43869);
var state_43892__$1 = state_43892;
if(inst_43876){
var statearr_43905_44631 = state_43892__$1;
(statearr_43905_44631[(1)] = (8));

} else {
var statearr_43906_44632 = state_43892__$1;
(statearr_43906_44632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43893 === (10))){
var inst_43884 = (state_43892[(2)]);
var state_43892__$1 = state_43892;
var statearr_43907_44633 = state_43892__$1;
(statearr_43907_44633[(2)] = inst_43884);

(statearr_43907_44633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43893 === (8))){
var inst_43869 = (state_43892[(7)]);
var tmp43904 = inst_43869;
var inst_43869__$1 = tmp43904;
var state_43892__$1 = (function (){var statearr_43908 = state_43892;
(statearr_43908[(7)] = inst_43869__$1);

return statearr_43908;
})();
var statearr_43909_44634 = state_43892__$1;
(statearr_43909_44634[(2)] = null);

(statearr_43909_44634[(1)] = (2));


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
var cljs$core$async$state_machine__42484__auto__ = null;
var cljs$core$async$state_machine__42484__auto____0 = (function (){
var statearr_43910 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43910[(0)] = cljs$core$async$state_machine__42484__auto__);

(statearr_43910[(1)] = (1));

return statearr_43910;
});
var cljs$core$async$state_machine__42484__auto____1 = (function (state_43892){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_43892);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e43911){var ex__42487__auto__ = e43911;
var statearr_43912_44635 = state_43892;
(statearr_43912_44635[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_43892[(4)]))){
var statearr_43913_44636 = state_43892;
(statearr_43913_44636[(1)] = cljs.core.first((state_43892[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44637 = state_43892;
state_43892 = G__44637;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$state_machine__42484__auto__ = function(state_43892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42484__auto____1.call(this,state_43892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42484__auto____0;
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42484__auto____1;
return cljs$core$async$state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_43914 = f__42520__auto__();
(statearr_43914[(6)] = c__42519__auto___44623);

return statearr_43914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43916 = arguments.length;
switch (G__43916) {
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
var c__42519__auto___44639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_43954){
var state_val_43955 = (state_43954[(1)]);
if((state_val_43955 === (7))){
var inst_43950 = (state_43954[(2)]);
var state_43954__$1 = state_43954;
var statearr_43956_44640 = state_43954__$1;
(statearr_43956_44640[(2)] = inst_43950);

(statearr_43956_44640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43955 === (1))){
var inst_43917 = (new Array(n));
var inst_43918 = inst_43917;
var inst_43919 = (0);
var state_43954__$1 = (function (){var statearr_43957 = state_43954;
(statearr_43957[(7)] = inst_43919);

(statearr_43957[(8)] = inst_43918);

return statearr_43957;
})();
var statearr_43958_44641 = state_43954__$1;
(statearr_43958_44641[(2)] = null);

(statearr_43958_44641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43955 === (4))){
var inst_43922 = (state_43954[(9)]);
var inst_43922__$1 = (state_43954[(2)]);
var inst_43923 = (inst_43922__$1 == null);
var inst_43924 = cljs.core.not(inst_43923);
var state_43954__$1 = (function (){var statearr_43959 = state_43954;
(statearr_43959[(9)] = inst_43922__$1);

return statearr_43959;
})();
if(inst_43924){
var statearr_43960_44642 = state_43954__$1;
(statearr_43960_44642[(1)] = (5));

} else {
var statearr_43961_44643 = state_43954__$1;
(statearr_43961_44643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43955 === (15))){
var inst_43944 = (state_43954[(2)]);
var state_43954__$1 = state_43954;
var statearr_43962_44644 = state_43954__$1;
(statearr_43962_44644[(2)] = inst_43944);

(statearr_43962_44644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43955 === (13))){
var state_43954__$1 = state_43954;
var statearr_43963_44645 = state_43954__$1;
(statearr_43963_44645[(2)] = null);

(statearr_43963_44645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43955 === (6))){
var inst_43919 = (state_43954[(7)]);
var inst_43940 = (inst_43919 > (0));
var state_43954__$1 = state_43954;
if(cljs.core.truth_(inst_43940)){
var statearr_43964_44646 = state_43954__$1;
(statearr_43964_44646[(1)] = (12));

} else {
var statearr_43965_44647 = state_43954__$1;
(statearr_43965_44647[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43955 === (3))){
var inst_43952 = (state_43954[(2)]);
var state_43954__$1 = state_43954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43954__$1,inst_43952);
} else {
if((state_val_43955 === (12))){
var inst_43918 = (state_43954[(8)]);
var inst_43942 = cljs.core.vec(inst_43918);
var state_43954__$1 = state_43954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43954__$1,(15),out,inst_43942);
} else {
if((state_val_43955 === (2))){
var state_43954__$1 = state_43954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43954__$1,(4),ch);
} else {
if((state_val_43955 === (11))){
var inst_43934 = (state_43954[(2)]);
var inst_43935 = (new Array(n));
var inst_43918 = inst_43935;
var inst_43919 = (0);
var state_43954__$1 = (function (){var statearr_43966 = state_43954;
(statearr_43966[(7)] = inst_43919);

(statearr_43966[(8)] = inst_43918);

(statearr_43966[(10)] = inst_43934);

return statearr_43966;
})();
var statearr_43967_44648 = state_43954__$1;
(statearr_43967_44648[(2)] = null);

(statearr_43967_44648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43955 === (9))){
var inst_43918 = (state_43954[(8)]);
var inst_43932 = cljs.core.vec(inst_43918);
var state_43954__$1 = state_43954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43954__$1,(11),out,inst_43932);
} else {
if((state_val_43955 === (5))){
var inst_43919 = (state_43954[(7)]);
var inst_43918 = (state_43954[(8)]);
var inst_43927 = (state_43954[(11)]);
var inst_43922 = (state_43954[(9)]);
var inst_43926 = (inst_43918[inst_43919] = inst_43922);
var inst_43927__$1 = (inst_43919 + (1));
var inst_43928 = (inst_43927__$1 < n);
var state_43954__$1 = (function (){var statearr_43968 = state_43954;
(statearr_43968[(11)] = inst_43927__$1);

(statearr_43968[(12)] = inst_43926);

return statearr_43968;
})();
if(cljs.core.truth_(inst_43928)){
var statearr_43969_44649 = state_43954__$1;
(statearr_43969_44649[(1)] = (8));

} else {
var statearr_43970_44650 = state_43954__$1;
(statearr_43970_44650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43955 === (14))){
var inst_43947 = (state_43954[(2)]);
var inst_43948 = cljs.core.async.close_BANG_(out);
var state_43954__$1 = (function (){var statearr_43972 = state_43954;
(statearr_43972[(13)] = inst_43947);

return statearr_43972;
})();
var statearr_43973_44651 = state_43954__$1;
(statearr_43973_44651[(2)] = inst_43948);

(statearr_43973_44651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43955 === (10))){
var inst_43938 = (state_43954[(2)]);
var state_43954__$1 = state_43954;
var statearr_43974_44652 = state_43954__$1;
(statearr_43974_44652[(2)] = inst_43938);

(statearr_43974_44652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43955 === (8))){
var inst_43918 = (state_43954[(8)]);
var inst_43927 = (state_43954[(11)]);
var tmp43971 = inst_43918;
var inst_43918__$1 = tmp43971;
var inst_43919 = inst_43927;
var state_43954__$1 = (function (){var statearr_43975 = state_43954;
(statearr_43975[(7)] = inst_43919);

(statearr_43975[(8)] = inst_43918__$1);

return statearr_43975;
})();
var statearr_43976_44653 = state_43954__$1;
(statearr_43976_44653[(2)] = null);

(statearr_43976_44653[(1)] = (2));


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
var cljs$core$async$state_machine__42484__auto__ = null;
var cljs$core$async$state_machine__42484__auto____0 = (function (){
var statearr_43977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43977[(0)] = cljs$core$async$state_machine__42484__auto__);

(statearr_43977[(1)] = (1));

return statearr_43977;
});
var cljs$core$async$state_machine__42484__auto____1 = (function (state_43954){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_43954);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e43978){var ex__42487__auto__ = e43978;
var statearr_43979_44654 = state_43954;
(statearr_43979_44654[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_43954[(4)]))){
var statearr_43980_44655 = state_43954;
(statearr_43980_44655[(1)] = cljs.core.first((state_43954[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44656 = state_43954;
state_43954 = G__44656;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$state_machine__42484__auto__ = function(state_43954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42484__auto____1.call(this,state_43954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42484__auto____0;
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42484__auto____1;
return cljs$core$async$state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_43981 = f__42520__auto__();
(statearr_43981[(6)] = c__42519__auto___44639);

return statearr_43981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43983 = arguments.length;
switch (G__43983) {
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
var c__42519__auto___44658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_44025){
var state_val_44026 = (state_44025[(1)]);
if((state_val_44026 === (7))){
var inst_44021 = (state_44025[(2)]);
var state_44025__$1 = state_44025;
var statearr_44027_44659 = state_44025__$1;
(statearr_44027_44659[(2)] = inst_44021);

(statearr_44027_44659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44026 === (1))){
var inst_43984 = [];
var inst_43985 = inst_43984;
var inst_43986 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44025__$1 = (function (){var statearr_44028 = state_44025;
(statearr_44028[(7)] = inst_43985);

(statearr_44028[(8)] = inst_43986);

return statearr_44028;
})();
var statearr_44029_44660 = state_44025__$1;
(statearr_44029_44660[(2)] = null);

(statearr_44029_44660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44026 === (4))){
var inst_43989 = (state_44025[(9)]);
var inst_43989__$1 = (state_44025[(2)]);
var inst_43990 = (inst_43989__$1 == null);
var inst_43991 = cljs.core.not(inst_43990);
var state_44025__$1 = (function (){var statearr_44030 = state_44025;
(statearr_44030[(9)] = inst_43989__$1);

return statearr_44030;
})();
if(inst_43991){
var statearr_44031_44661 = state_44025__$1;
(statearr_44031_44661[(1)] = (5));

} else {
var statearr_44032_44662 = state_44025__$1;
(statearr_44032_44662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44026 === (15))){
var inst_44015 = (state_44025[(2)]);
var state_44025__$1 = state_44025;
var statearr_44033_44663 = state_44025__$1;
(statearr_44033_44663[(2)] = inst_44015);

(statearr_44033_44663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44026 === (13))){
var state_44025__$1 = state_44025;
var statearr_44034_44664 = state_44025__$1;
(statearr_44034_44664[(2)] = null);

(statearr_44034_44664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44026 === (6))){
var inst_43985 = (state_44025[(7)]);
var inst_44010 = inst_43985.length;
var inst_44011 = (inst_44010 > (0));
var state_44025__$1 = state_44025;
if(cljs.core.truth_(inst_44011)){
var statearr_44035_44665 = state_44025__$1;
(statearr_44035_44665[(1)] = (12));

} else {
var statearr_44036_44666 = state_44025__$1;
(statearr_44036_44666[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44026 === (3))){
var inst_44023 = (state_44025[(2)]);
var state_44025__$1 = state_44025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44025__$1,inst_44023);
} else {
if((state_val_44026 === (12))){
var inst_43985 = (state_44025[(7)]);
var inst_44013 = cljs.core.vec(inst_43985);
var state_44025__$1 = state_44025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44025__$1,(15),out,inst_44013);
} else {
if((state_val_44026 === (2))){
var state_44025__$1 = state_44025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44025__$1,(4),ch);
} else {
if((state_val_44026 === (11))){
var inst_43989 = (state_44025[(9)]);
var inst_43993 = (state_44025[(10)]);
var inst_44003 = (state_44025[(2)]);
var inst_44004 = [];
var inst_44005 = inst_44004.push(inst_43989);
var inst_43985 = inst_44004;
var inst_43986 = inst_43993;
var state_44025__$1 = (function (){var statearr_44037 = state_44025;
(statearr_44037[(7)] = inst_43985);

(statearr_44037[(11)] = inst_44005);

(statearr_44037[(8)] = inst_43986);

(statearr_44037[(12)] = inst_44003);

return statearr_44037;
})();
var statearr_44038_44667 = state_44025__$1;
(statearr_44038_44667[(2)] = null);

(statearr_44038_44667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44026 === (9))){
var inst_43985 = (state_44025[(7)]);
var inst_44001 = cljs.core.vec(inst_43985);
var state_44025__$1 = state_44025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44025__$1,(11),out,inst_44001);
} else {
if((state_val_44026 === (5))){
var inst_43986 = (state_44025[(8)]);
var inst_43989 = (state_44025[(9)]);
var inst_43993 = (state_44025[(10)]);
var inst_43993__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43989) : f.call(null,inst_43989));
var inst_43994 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43993__$1,inst_43986);
var inst_43995 = cljs.core.keyword_identical_QMARK_(inst_43986,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43996 = ((inst_43994) || (inst_43995));
var state_44025__$1 = (function (){var statearr_44039 = state_44025;
(statearr_44039[(10)] = inst_43993__$1);

return statearr_44039;
})();
if(cljs.core.truth_(inst_43996)){
var statearr_44040_44668 = state_44025__$1;
(statearr_44040_44668[(1)] = (8));

} else {
var statearr_44041_44669 = state_44025__$1;
(statearr_44041_44669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44026 === (14))){
var inst_44018 = (state_44025[(2)]);
var inst_44019 = cljs.core.async.close_BANG_(out);
var state_44025__$1 = (function (){var statearr_44043 = state_44025;
(statearr_44043[(13)] = inst_44018);

return statearr_44043;
})();
var statearr_44044_44670 = state_44025__$1;
(statearr_44044_44670[(2)] = inst_44019);

(statearr_44044_44670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44026 === (10))){
var inst_44008 = (state_44025[(2)]);
var state_44025__$1 = state_44025;
var statearr_44045_44671 = state_44025__$1;
(statearr_44045_44671[(2)] = inst_44008);

(statearr_44045_44671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44026 === (8))){
var inst_43985 = (state_44025[(7)]);
var inst_43989 = (state_44025[(9)]);
var inst_43993 = (state_44025[(10)]);
var inst_43998 = inst_43985.push(inst_43989);
var tmp44042 = inst_43985;
var inst_43985__$1 = tmp44042;
var inst_43986 = inst_43993;
var state_44025__$1 = (function (){var statearr_44046 = state_44025;
(statearr_44046[(14)] = inst_43998);

(statearr_44046[(7)] = inst_43985__$1);

(statearr_44046[(8)] = inst_43986);

return statearr_44046;
})();
var statearr_44047_44672 = state_44025__$1;
(statearr_44047_44672[(2)] = null);

(statearr_44047_44672[(1)] = (2));


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
var cljs$core$async$state_machine__42484__auto__ = null;
var cljs$core$async$state_machine__42484__auto____0 = (function (){
var statearr_44048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44048[(0)] = cljs$core$async$state_machine__42484__auto__);

(statearr_44048[(1)] = (1));

return statearr_44048;
});
var cljs$core$async$state_machine__42484__auto____1 = (function (state_44025){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_44025);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e44049){var ex__42487__auto__ = e44049;
var statearr_44050_44673 = state_44025;
(statearr_44050_44673[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_44025[(4)]))){
var statearr_44051_44674 = state_44025;
(statearr_44051_44674[(1)] = cljs.core.first((state_44025[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44675 = state_44025;
state_44025 = G__44675;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
cljs$core$async$state_machine__42484__auto__ = function(state_44025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42484__auto____1.call(this,state_44025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42484__auto____0;
cljs$core$async$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42484__auto____1;
return cljs$core$async$state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_44052 = f__42520__auto__();
(statearr_44052[(6)] = c__42519__auto___44658);

return statearr_44052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
