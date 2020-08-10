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
var G__42580 = arguments.length;
switch (G__42580) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42581 = (function (f,blockable,meta42582){
this.f = f;
this.blockable = blockable;
this.meta42582 = meta42582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42583,meta42582__$1){
var self__ = this;
var _42583__$1 = this;
return (new cljs.core.async.t_cljs$core$async42581(self__.f,self__.blockable,meta42582__$1));
}));

(cljs.core.async.t_cljs$core$async42581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42583){
var self__ = this;
var _42583__$1 = this;
return self__.meta42582;
}));

(cljs.core.async.t_cljs$core$async42581.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42581.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42582","meta42582",-2143370276,null)], null);
}));

(cljs.core.async.t_cljs$core$async42581.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42581");

(cljs.core.async.t_cljs$core$async42581.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42581");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42581.
 */
cljs.core.async.__GT_t_cljs$core$async42581 = (function cljs$core$async$__GT_t_cljs$core$async42581(f__$1,blockable__$1,meta42582){
return (new cljs.core.async.t_cljs$core$async42581(f__$1,blockable__$1,meta42582));
});

}

return (new cljs.core.async.t_cljs$core$async42581(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42592 = arguments.length;
switch (G__42592) {
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
var G__42596 = arguments.length;
switch (G__42596) {
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
var G__42600 = arguments.length;
switch (G__42600) {
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
var val_44073 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44073) : fn1.call(null,val_44073));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44073) : fn1.call(null,val_44073));
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
var G__42604 = arguments.length;
switch (G__42604) {
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
var n__4613__auto___44081 = n;
var x_44082 = (0);
while(true){
if((x_44082 < n__4613__auto___44081)){
(a[x_44082] = x_44082);

var G__44083 = (x_44082 + (1));
x_44082 = G__44083;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42605 = (function (flag,meta42606){
this.flag = flag;
this.meta42606 = meta42606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42607,meta42606__$1){
var self__ = this;
var _42607__$1 = this;
return (new cljs.core.async.t_cljs$core$async42605(self__.flag,meta42606__$1));
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
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42606","meta42606",69422420,null)], null);
}));

(cljs.core.async.t_cljs$core$async42605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42605");

(cljs.core.async.t_cljs$core$async42605.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42605.
 */
cljs.core.async.__GT_t_cljs$core$async42605 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42605(flag__$1,meta42606){
return (new cljs.core.async.t_cljs$core$async42605(flag__$1,meta42606));
});

}

return (new cljs.core.async.t_cljs$core$async42605(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42608 = (function (flag,cb,meta42609){
this.flag = flag;
this.cb = cb;
this.meta42609 = meta42609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42610,meta42609__$1){
var self__ = this;
var _42610__$1 = this;
return (new cljs.core.async.t_cljs$core$async42608(self__.flag,self__.cb,meta42609__$1));
}));

(cljs.core.async.t_cljs$core$async42608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42610){
var self__ = this;
var _42610__$1 = this;
return self__.meta42609;
}));

(cljs.core.async.t_cljs$core$async42608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42609","meta42609",-1645597011,null)], null);
}));

(cljs.core.async.t_cljs$core$async42608.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42608");

(cljs.core.async.t_cljs$core$async42608.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42608");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42608.
 */
cljs.core.async.__GT_t_cljs$core$async42608 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42608(flag__$1,cb__$1,meta42609){
return (new cljs.core.async.t_cljs$core$async42608(flag__$1,cb__$1,meta42609));
});

}

return (new cljs.core.async.t_cljs$core$async42608(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42611_SHARP_){
var G__42613 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42611_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42613) : fret.call(null,G__42613));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42612_SHARP_){
var G__42614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42612_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42614) : fret.call(null,G__42614));
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
var G__44088 = (i + (1));
i = G__44088;
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
var len__4736__auto___44089 = arguments.length;
var i__4737__auto___44090 = (0);
while(true){
if((i__4737__auto___44090 < len__4736__auto___44089)){
args__4742__auto__.push((arguments[i__4737__auto___44090]));

var G__44091 = (i__4737__auto___44090 + (1));
i__4737__auto___44090 = G__44091;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42617){
var map__42618 = p__42617;
var map__42618__$1 = (((((!((map__42618 == null))))?(((((map__42618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42618):map__42618);
var opts = map__42618__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42615){
var G__42616 = cljs.core.first(seq42615);
var seq42615__$1 = cljs.core.next(seq42615);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42616,seq42615__$1);
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
var G__42621 = arguments.length;
switch (G__42621) {
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
var c__42522__auto___44094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_42645){
var state_val_42646 = (state_42645[(1)]);
if((state_val_42646 === (7))){
var inst_42641 = (state_42645[(2)]);
var state_42645__$1 = state_42645;
var statearr_42647_44095 = state_42645__$1;
(statearr_42647_44095[(2)] = inst_42641);

(statearr_42647_44095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (1))){
var state_42645__$1 = state_42645;
var statearr_42648_44100 = state_42645__$1;
(statearr_42648_44100[(2)] = null);

(statearr_42648_44100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (4))){
var inst_42624 = (state_42645[(7)]);
var inst_42624__$1 = (state_42645[(2)]);
var inst_42625 = (inst_42624__$1 == null);
var state_42645__$1 = (function (){var statearr_42649 = state_42645;
(statearr_42649[(7)] = inst_42624__$1);

return statearr_42649;
})();
if(cljs.core.truth_(inst_42625)){
var statearr_42650_44101 = state_42645__$1;
(statearr_42650_44101[(1)] = (5));

} else {
var statearr_42651_44102 = state_42645__$1;
(statearr_42651_44102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (13))){
var state_42645__$1 = state_42645;
var statearr_42652_44103 = state_42645__$1;
(statearr_42652_44103[(2)] = null);

(statearr_42652_44103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (6))){
var inst_42624 = (state_42645[(7)]);
var state_42645__$1 = state_42645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42645__$1,(11),to,inst_42624);
} else {
if((state_val_42646 === (3))){
var inst_42643 = (state_42645[(2)]);
var state_42645__$1 = state_42645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42645__$1,inst_42643);
} else {
if((state_val_42646 === (12))){
var state_42645__$1 = state_42645;
var statearr_42653_44107 = state_42645__$1;
(statearr_42653_44107[(2)] = null);

(statearr_42653_44107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (2))){
var state_42645__$1 = state_42645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42645__$1,(4),from);
} else {
if((state_val_42646 === (11))){
var inst_42634 = (state_42645[(2)]);
var state_42645__$1 = state_42645;
if(cljs.core.truth_(inst_42634)){
var statearr_42654_44109 = state_42645__$1;
(statearr_42654_44109[(1)] = (12));

} else {
var statearr_42655_44111 = state_42645__$1;
(statearr_42655_44111[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (9))){
var state_42645__$1 = state_42645;
var statearr_42656_44112 = state_42645__$1;
(statearr_42656_44112[(2)] = null);

(statearr_42656_44112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (5))){
var state_42645__$1 = state_42645;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42657_44113 = state_42645__$1;
(statearr_42657_44113[(1)] = (8));

} else {
var statearr_42658_44114 = state_42645__$1;
(statearr_42658_44114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (14))){
var inst_42639 = (state_42645[(2)]);
var state_42645__$1 = state_42645;
var statearr_42659_44117 = state_42645__$1;
(statearr_42659_44117[(2)] = inst_42639);

(statearr_42659_44117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (10))){
var inst_42631 = (state_42645[(2)]);
var state_42645__$1 = state_42645;
var statearr_42660_44119 = state_42645__$1;
(statearr_42660_44119[(2)] = inst_42631);

(statearr_42660_44119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42646 === (8))){
var inst_42628 = cljs.core.async.close_BANG_(to);
var state_42645__$1 = state_42645;
var statearr_42661_44120 = state_42645__$1;
(statearr_42661_44120[(2)] = inst_42628);

(statearr_42661_44120[(1)] = (10));


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
var cljs$core$async$state_machine__42487__auto__ = null;
var cljs$core$async$state_machine__42487__auto____0 = (function (){
var statearr_42662 = [null,null,null,null,null,null,null,null];
(statearr_42662[(0)] = cljs$core$async$state_machine__42487__auto__);

(statearr_42662[(1)] = (1));

return statearr_42662;
});
var cljs$core$async$state_machine__42487__auto____1 = (function (state_42645){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_42645);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e42663){var ex__42490__auto__ = e42663;
var statearr_42664_44121 = state_42645;
(statearr_42664_44121[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_42645[(4)]))){
var statearr_42665_44123 = state_42645;
(statearr_42665_44123[(1)] = cljs.core.first((state_42645[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44124 = state_42645;
state_42645 = G__44124;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$state_machine__42487__auto__ = function(state_42645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42487__auto____1.call(this,state_42645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42487__auto____0;
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42487__auto____1;
return cljs$core$async$state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_42666 = f__42523__auto__();
(statearr_42666[(6)] = c__42522__auto___44094);

return statearr_42666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
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
var process = (function (p__42667){
var vec__42668 = p__42667;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42668,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42668,(1),null);
var job = vec__42668;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42522__auto___44125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_42675){
var state_val_42676 = (state_42675[(1)]);
if((state_val_42676 === (1))){
var state_42675__$1 = state_42675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42675__$1,(2),res,v);
} else {
if((state_val_42676 === (2))){
var inst_42672 = (state_42675[(2)]);
var inst_42673 = cljs.core.async.close_BANG_(res);
var state_42675__$1 = (function (){var statearr_42677 = state_42675;
(statearr_42677[(7)] = inst_42672);

return statearr_42677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42675__$1,inst_42673);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____0 = (function (){
var statearr_42678 = [null,null,null,null,null,null,null,null];
(statearr_42678[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__);

(statearr_42678[(1)] = (1));

return statearr_42678;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____1 = (function (state_42675){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_42675);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e42679){var ex__42490__auto__ = e42679;
var statearr_42680_44129 = state_42675;
(statearr_42680_44129[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_42675[(4)]))){
var statearr_42681_44130 = state_42675;
(statearr_42681_44130[(1)] = cljs.core.first((state_42675[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44131 = state_42675;
state_42675 = G__44131;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__ = function(state_42675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____1.call(this,state_42675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_42682 = f__42523__auto__();
(statearr_42682[(6)] = c__42522__auto___44125);

return statearr_42682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42683){
var vec__42684 = p__42683;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42684,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42684,(1),null);
var job = vec__42684;
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
var n__4613__auto___44132 = n;
var __44133 = (0);
while(true){
if((__44133 < n__4613__auto___44132)){
var G__42687_44134 = type;
var G__42687_44135__$1 = (((G__42687_44134 instanceof cljs.core.Keyword))?G__42687_44134.fqn:null);
switch (G__42687_44135__$1) {
case "compute":
var c__42522__auto___44137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44133,c__42522__auto___44137,G__42687_44134,G__42687_44135__$1,n__4613__auto___44132,jobs,results,process,async){
return (function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = ((function (__44133,c__42522__auto___44137,G__42687_44134,G__42687_44135__$1,n__4613__auto___44132,jobs,results,process,async){
return (function (state_42700){
var state_val_42701 = (state_42700[(1)]);
if((state_val_42701 === (1))){
var state_42700__$1 = state_42700;
var statearr_42702_44138 = state_42700__$1;
(statearr_42702_44138[(2)] = null);

(statearr_42702_44138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42701 === (2))){
var state_42700__$1 = state_42700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42700__$1,(4),jobs);
} else {
if((state_val_42701 === (3))){
var inst_42698 = (state_42700[(2)]);
var state_42700__$1 = state_42700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42700__$1,inst_42698);
} else {
if((state_val_42701 === (4))){
var inst_42690 = (state_42700[(2)]);
var inst_42691 = process(inst_42690);
var state_42700__$1 = state_42700;
if(cljs.core.truth_(inst_42691)){
var statearr_42703_44139 = state_42700__$1;
(statearr_42703_44139[(1)] = (5));

} else {
var statearr_42704_44140 = state_42700__$1;
(statearr_42704_44140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42701 === (5))){
var state_42700__$1 = state_42700;
var statearr_42705_44141 = state_42700__$1;
(statearr_42705_44141[(2)] = null);

(statearr_42705_44141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42701 === (6))){
var state_42700__$1 = state_42700;
var statearr_42706_44142 = state_42700__$1;
(statearr_42706_44142[(2)] = null);

(statearr_42706_44142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42701 === (7))){
var inst_42696 = (state_42700[(2)]);
var state_42700__$1 = state_42700;
var statearr_42707_44143 = state_42700__$1;
(statearr_42707_44143[(2)] = inst_42696);

(statearr_42707_44143[(1)] = (3));


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
});})(__44133,c__42522__auto___44137,G__42687_44134,G__42687_44135__$1,n__4613__auto___44132,jobs,results,process,async))
;
return ((function (__44133,switch__42486__auto__,c__42522__auto___44137,G__42687_44134,G__42687_44135__$1,n__4613__auto___44132,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____0 = (function (){
var statearr_42708 = [null,null,null,null,null,null,null];
(statearr_42708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__);

(statearr_42708[(1)] = (1));

return statearr_42708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____1 = (function (state_42700){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_42700);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e42709){var ex__42490__auto__ = e42709;
var statearr_42710_44144 = state_42700;
(statearr_42710_44144[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_42700[(4)]))){
var statearr_42711_44145 = state_42700;
(statearr_42711_44145[(1)] = cljs.core.first((state_42700[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44146 = state_42700;
state_42700 = G__44146;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__ = function(state_42700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____1.call(this,state_42700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__;
})()
;})(__44133,switch__42486__auto__,c__42522__auto___44137,G__42687_44134,G__42687_44135__$1,n__4613__auto___44132,jobs,results,process,async))
})();
var state__42524__auto__ = (function (){var statearr_42712 = f__42523__auto__();
(statearr_42712[(6)] = c__42522__auto___44137);

return statearr_42712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
});})(__44133,c__42522__auto___44137,G__42687_44134,G__42687_44135__$1,n__4613__auto___44132,jobs,results,process,async))
);


break;
case "async":
var c__42522__auto___44147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44133,c__42522__auto___44147,G__42687_44134,G__42687_44135__$1,n__4613__auto___44132,jobs,results,process,async){
return (function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = ((function (__44133,c__42522__auto___44147,G__42687_44134,G__42687_44135__$1,n__4613__auto___44132,jobs,results,process,async){
return (function (state_42725){
var state_val_42726 = (state_42725[(1)]);
if((state_val_42726 === (1))){
var state_42725__$1 = state_42725;
var statearr_42727_44148 = state_42725__$1;
(statearr_42727_44148[(2)] = null);

(statearr_42727_44148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42726 === (2))){
var state_42725__$1 = state_42725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42725__$1,(4),jobs);
} else {
if((state_val_42726 === (3))){
var inst_42723 = (state_42725[(2)]);
var state_42725__$1 = state_42725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42725__$1,inst_42723);
} else {
if((state_val_42726 === (4))){
var inst_42715 = (state_42725[(2)]);
var inst_42716 = async(inst_42715);
var state_42725__$1 = state_42725;
if(cljs.core.truth_(inst_42716)){
var statearr_42728_44157 = state_42725__$1;
(statearr_42728_44157[(1)] = (5));

} else {
var statearr_42729_44162 = state_42725__$1;
(statearr_42729_44162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42726 === (5))){
var state_42725__$1 = state_42725;
var statearr_42730_44163 = state_42725__$1;
(statearr_42730_44163[(2)] = null);

(statearr_42730_44163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42726 === (6))){
var state_42725__$1 = state_42725;
var statearr_42731_44164 = state_42725__$1;
(statearr_42731_44164[(2)] = null);

(statearr_42731_44164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42726 === (7))){
var inst_42721 = (state_42725[(2)]);
var state_42725__$1 = state_42725;
var statearr_42732_44165 = state_42725__$1;
(statearr_42732_44165[(2)] = inst_42721);

(statearr_42732_44165[(1)] = (3));


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
});})(__44133,c__42522__auto___44147,G__42687_44134,G__42687_44135__$1,n__4613__auto___44132,jobs,results,process,async))
;
return ((function (__44133,switch__42486__auto__,c__42522__auto___44147,G__42687_44134,G__42687_44135__$1,n__4613__auto___44132,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____0 = (function (){
var statearr_42733 = [null,null,null,null,null,null,null];
(statearr_42733[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__);

(statearr_42733[(1)] = (1));

return statearr_42733;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____1 = (function (state_42725){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_42725);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e42734){var ex__42490__auto__ = e42734;
var statearr_42735_44167 = state_42725;
(statearr_42735_44167[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_42725[(4)]))){
var statearr_42736_44169 = state_42725;
(statearr_42736_44169[(1)] = cljs.core.first((state_42725[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44170 = state_42725;
state_42725 = G__44170;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__ = function(state_42725){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____1.call(this,state_42725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__;
})()
;})(__44133,switch__42486__auto__,c__42522__auto___44147,G__42687_44134,G__42687_44135__$1,n__4613__auto___44132,jobs,results,process,async))
})();
var state__42524__auto__ = (function (){var statearr_42737 = f__42523__auto__();
(statearr_42737[(6)] = c__42522__auto___44147);

return statearr_42737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
});})(__44133,c__42522__auto___44147,G__42687_44134,G__42687_44135__$1,n__4613__auto___44132,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42687_44135__$1)].join('')));

}

var G__44171 = (__44133 + (1));
__44133 = G__44171;
continue;
} else {
}
break;
}

var c__42522__auto___44172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_42759){
var state_val_42760 = (state_42759[(1)]);
if((state_val_42760 === (7))){
var inst_42755 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
var statearr_42761_44175 = state_42759__$1;
(statearr_42761_44175[(2)] = inst_42755);

(statearr_42761_44175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (1))){
var state_42759__$1 = state_42759;
var statearr_42762_44177 = state_42759__$1;
(statearr_42762_44177[(2)] = null);

(statearr_42762_44177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (4))){
var inst_42740 = (state_42759[(7)]);
var inst_42740__$1 = (state_42759[(2)]);
var inst_42741 = (inst_42740__$1 == null);
var state_42759__$1 = (function (){var statearr_42763 = state_42759;
(statearr_42763[(7)] = inst_42740__$1);

return statearr_42763;
})();
if(cljs.core.truth_(inst_42741)){
var statearr_42764_44178 = state_42759__$1;
(statearr_42764_44178[(1)] = (5));

} else {
var statearr_42765_44179 = state_42759__$1;
(statearr_42765_44179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (6))){
var inst_42740 = (state_42759[(7)]);
var inst_42745 = (state_42759[(8)]);
var inst_42745__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42746 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42747 = [inst_42740,inst_42745__$1];
var inst_42748 = (new cljs.core.PersistentVector(null,2,(5),inst_42746,inst_42747,null));
var state_42759__$1 = (function (){var statearr_42766 = state_42759;
(statearr_42766[(8)] = inst_42745__$1);

return statearr_42766;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42759__$1,(8),jobs,inst_42748);
} else {
if((state_val_42760 === (3))){
var inst_42757 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42759__$1,inst_42757);
} else {
if((state_val_42760 === (2))){
var state_42759__$1 = state_42759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42759__$1,(4),from);
} else {
if((state_val_42760 === (9))){
var inst_42752 = (state_42759[(2)]);
var state_42759__$1 = (function (){var statearr_42767 = state_42759;
(statearr_42767[(9)] = inst_42752);

return statearr_42767;
})();
var statearr_42768_44180 = state_42759__$1;
(statearr_42768_44180[(2)] = null);

(statearr_42768_44180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (5))){
var inst_42743 = cljs.core.async.close_BANG_(jobs);
var state_42759__$1 = state_42759;
var statearr_42769_44181 = state_42759__$1;
(statearr_42769_44181[(2)] = inst_42743);

(statearr_42769_44181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (8))){
var inst_42745 = (state_42759[(8)]);
var inst_42750 = (state_42759[(2)]);
var state_42759__$1 = (function (){var statearr_42770 = state_42759;
(statearr_42770[(10)] = inst_42750);

return statearr_42770;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42759__$1,(9),results,inst_42745);
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
var cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____0 = (function (){
var statearr_42771 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42771[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__);

(statearr_42771[(1)] = (1));

return statearr_42771;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____1 = (function (state_42759){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_42759);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e42772){var ex__42490__auto__ = e42772;
var statearr_42773_44182 = state_42759;
(statearr_42773_44182[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_42759[(4)]))){
var statearr_42774_44183 = state_42759;
(statearr_42774_44183[(1)] = cljs.core.first((state_42759[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44184 = state_42759;
state_42759 = G__44184;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__ = function(state_42759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____1.call(this,state_42759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_42775 = f__42523__auto__();
(statearr_42775[(6)] = c__42522__auto___44172);

return statearr_42775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
}));


var c__42522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_42813){
var state_val_42814 = (state_42813[(1)]);
if((state_val_42814 === (7))){
var inst_42809 = (state_42813[(2)]);
var state_42813__$1 = state_42813;
var statearr_42815_44185 = state_42813__$1;
(statearr_42815_44185[(2)] = inst_42809);

(statearr_42815_44185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (20))){
var state_42813__$1 = state_42813;
var statearr_42816_44186 = state_42813__$1;
(statearr_42816_44186[(2)] = null);

(statearr_42816_44186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (1))){
var state_42813__$1 = state_42813;
var statearr_42817_44187 = state_42813__$1;
(statearr_42817_44187[(2)] = null);

(statearr_42817_44187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (4))){
var inst_42778 = (state_42813[(7)]);
var inst_42778__$1 = (state_42813[(2)]);
var inst_42779 = (inst_42778__$1 == null);
var state_42813__$1 = (function (){var statearr_42818 = state_42813;
(statearr_42818[(7)] = inst_42778__$1);

return statearr_42818;
})();
if(cljs.core.truth_(inst_42779)){
var statearr_42819_44188 = state_42813__$1;
(statearr_42819_44188[(1)] = (5));

} else {
var statearr_42820_44189 = state_42813__$1;
(statearr_42820_44189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (15))){
var inst_42791 = (state_42813[(8)]);
var state_42813__$1 = state_42813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42813__$1,(18),to,inst_42791);
} else {
if((state_val_42814 === (21))){
var inst_42804 = (state_42813[(2)]);
var state_42813__$1 = state_42813;
var statearr_42821_44190 = state_42813__$1;
(statearr_42821_44190[(2)] = inst_42804);

(statearr_42821_44190[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (13))){
var inst_42806 = (state_42813[(2)]);
var state_42813__$1 = (function (){var statearr_42822 = state_42813;
(statearr_42822[(9)] = inst_42806);

return statearr_42822;
})();
var statearr_42823_44191 = state_42813__$1;
(statearr_42823_44191[(2)] = null);

(statearr_42823_44191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (6))){
var inst_42778 = (state_42813[(7)]);
var state_42813__$1 = state_42813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42813__$1,(11),inst_42778);
} else {
if((state_val_42814 === (17))){
var inst_42799 = (state_42813[(2)]);
var state_42813__$1 = state_42813;
if(cljs.core.truth_(inst_42799)){
var statearr_42824_44192 = state_42813__$1;
(statearr_42824_44192[(1)] = (19));

} else {
var statearr_42825_44193 = state_42813__$1;
(statearr_42825_44193[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (3))){
var inst_42811 = (state_42813[(2)]);
var state_42813__$1 = state_42813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42813__$1,inst_42811);
} else {
if((state_val_42814 === (12))){
var inst_42788 = (state_42813[(10)]);
var state_42813__$1 = state_42813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42813__$1,(14),inst_42788);
} else {
if((state_val_42814 === (2))){
var state_42813__$1 = state_42813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42813__$1,(4),results);
} else {
if((state_val_42814 === (19))){
var state_42813__$1 = state_42813;
var statearr_42826_44194 = state_42813__$1;
(statearr_42826_44194[(2)] = null);

(statearr_42826_44194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (11))){
var inst_42788 = (state_42813[(2)]);
var state_42813__$1 = (function (){var statearr_42827 = state_42813;
(statearr_42827[(10)] = inst_42788);

return statearr_42827;
})();
var statearr_42828_44195 = state_42813__$1;
(statearr_42828_44195[(2)] = null);

(statearr_42828_44195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (9))){
var state_42813__$1 = state_42813;
var statearr_42829_44196 = state_42813__$1;
(statearr_42829_44196[(2)] = null);

(statearr_42829_44196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (5))){
var state_42813__$1 = state_42813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42830_44197 = state_42813__$1;
(statearr_42830_44197[(1)] = (8));

} else {
var statearr_42831_44198 = state_42813__$1;
(statearr_42831_44198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (14))){
var inst_42791 = (state_42813[(8)]);
var inst_42791__$1 = (state_42813[(2)]);
var inst_42792 = (inst_42791__$1 == null);
var inst_42793 = cljs.core.not(inst_42792);
var state_42813__$1 = (function (){var statearr_42832 = state_42813;
(statearr_42832[(8)] = inst_42791__$1);

return statearr_42832;
})();
if(inst_42793){
var statearr_42833_44199 = state_42813__$1;
(statearr_42833_44199[(1)] = (15));

} else {
var statearr_42834_44200 = state_42813__$1;
(statearr_42834_44200[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (16))){
var state_42813__$1 = state_42813;
var statearr_42835_44201 = state_42813__$1;
(statearr_42835_44201[(2)] = false);

(statearr_42835_44201[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (10))){
var inst_42785 = (state_42813[(2)]);
var state_42813__$1 = state_42813;
var statearr_42836_44202 = state_42813__$1;
(statearr_42836_44202[(2)] = inst_42785);

(statearr_42836_44202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (18))){
var inst_42796 = (state_42813[(2)]);
var state_42813__$1 = state_42813;
var statearr_42837_44203 = state_42813__$1;
(statearr_42837_44203[(2)] = inst_42796);

(statearr_42837_44203[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42814 === (8))){
var inst_42782 = cljs.core.async.close_BANG_(to);
var state_42813__$1 = state_42813;
var statearr_42838_44204 = state_42813__$1;
(statearr_42838_44204[(2)] = inst_42782);

(statearr_42838_44204[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____0 = (function (){
var statearr_42839 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__);

(statearr_42839[(1)] = (1));

return statearr_42839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____1 = (function (state_42813){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_42813);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e42840){var ex__42490__auto__ = e42840;
var statearr_42841_44205 = state_42813;
(statearr_42841_44205[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_42813[(4)]))){
var statearr_42842_44206 = state_42813;
(statearr_42842_44206[(1)] = cljs.core.first((state_42813[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44207 = state_42813;
state_42813 = G__44207;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__ = function(state_42813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____1.call(this,state_42813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42487__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_42843 = f__42523__auto__();
(statearr_42843[(6)] = c__42522__auto__);

return statearr_42843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
}));

return c__42522__auto__;
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
var G__42845 = arguments.length;
switch (G__42845) {
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
var G__42847 = arguments.length;
switch (G__42847) {
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
var G__42849 = arguments.length;
switch (G__42849) {
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
var c__42522__auto___44211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_42875){
var state_val_42876 = (state_42875[(1)]);
if((state_val_42876 === (7))){
var inst_42871 = (state_42875[(2)]);
var state_42875__$1 = state_42875;
var statearr_42877_44212 = state_42875__$1;
(statearr_42877_44212[(2)] = inst_42871);

(statearr_42877_44212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42876 === (1))){
var state_42875__$1 = state_42875;
var statearr_42878_44213 = state_42875__$1;
(statearr_42878_44213[(2)] = null);

(statearr_42878_44213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42876 === (4))){
var inst_42852 = (state_42875[(7)]);
var inst_42852__$1 = (state_42875[(2)]);
var inst_42853 = (inst_42852__$1 == null);
var state_42875__$1 = (function (){var statearr_42879 = state_42875;
(statearr_42879[(7)] = inst_42852__$1);

return statearr_42879;
})();
if(cljs.core.truth_(inst_42853)){
var statearr_42880_44214 = state_42875__$1;
(statearr_42880_44214[(1)] = (5));

} else {
var statearr_42881_44215 = state_42875__$1;
(statearr_42881_44215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42876 === (13))){
var state_42875__$1 = state_42875;
var statearr_42882_44216 = state_42875__$1;
(statearr_42882_44216[(2)] = null);

(statearr_42882_44216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42876 === (6))){
var inst_42852 = (state_42875[(7)]);
var inst_42858 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42852) : p.call(null,inst_42852));
var state_42875__$1 = state_42875;
if(cljs.core.truth_(inst_42858)){
var statearr_42883_44217 = state_42875__$1;
(statearr_42883_44217[(1)] = (9));

} else {
var statearr_42884_44218 = state_42875__$1;
(statearr_42884_44218[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42876 === (3))){
var inst_42873 = (state_42875[(2)]);
var state_42875__$1 = state_42875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42875__$1,inst_42873);
} else {
if((state_val_42876 === (12))){
var state_42875__$1 = state_42875;
var statearr_42885_44219 = state_42875__$1;
(statearr_42885_44219[(2)] = null);

(statearr_42885_44219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42876 === (2))){
var state_42875__$1 = state_42875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42875__$1,(4),ch);
} else {
if((state_val_42876 === (11))){
var inst_42852 = (state_42875[(7)]);
var inst_42862 = (state_42875[(2)]);
var state_42875__$1 = state_42875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42875__$1,(8),inst_42862,inst_42852);
} else {
if((state_val_42876 === (9))){
var state_42875__$1 = state_42875;
var statearr_42886_44220 = state_42875__$1;
(statearr_42886_44220[(2)] = tc);

(statearr_42886_44220[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42876 === (5))){
var inst_42855 = cljs.core.async.close_BANG_(tc);
var inst_42856 = cljs.core.async.close_BANG_(fc);
var state_42875__$1 = (function (){var statearr_42887 = state_42875;
(statearr_42887[(8)] = inst_42855);

return statearr_42887;
})();
var statearr_42888_44221 = state_42875__$1;
(statearr_42888_44221[(2)] = inst_42856);

(statearr_42888_44221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42876 === (14))){
var inst_42869 = (state_42875[(2)]);
var state_42875__$1 = state_42875;
var statearr_42889_44222 = state_42875__$1;
(statearr_42889_44222[(2)] = inst_42869);

(statearr_42889_44222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42876 === (10))){
var state_42875__$1 = state_42875;
var statearr_42890_44223 = state_42875__$1;
(statearr_42890_44223[(2)] = fc);

(statearr_42890_44223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42876 === (8))){
var inst_42864 = (state_42875[(2)]);
var state_42875__$1 = state_42875;
if(cljs.core.truth_(inst_42864)){
var statearr_42891_44224 = state_42875__$1;
(statearr_42891_44224[(1)] = (12));

} else {
var statearr_42892_44225 = state_42875__$1;
(statearr_42892_44225[(1)] = (13));

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
var cljs$core$async$state_machine__42487__auto__ = null;
var cljs$core$async$state_machine__42487__auto____0 = (function (){
var statearr_42893 = [null,null,null,null,null,null,null,null,null];
(statearr_42893[(0)] = cljs$core$async$state_machine__42487__auto__);

(statearr_42893[(1)] = (1));

return statearr_42893;
});
var cljs$core$async$state_machine__42487__auto____1 = (function (state_42875){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_42875);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e42894){var ex__42490__auto__ = e42894;
var statearr_42895_44226 = state_42875;
(statearr_42895_44226[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_42875[(4)]))){
var statearr_42896_44227 = state_42875;
(statearr_42896_44227[(1)] = cljs.core.first((state_42875[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44228 = state_42875;
state_42875 = G__44228;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$state_machine__42487__auto__ = function(state_42875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42487__auto____1.call(this,state_42875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42487__auto____0;
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42487__auto____1;
return cljs$core$async$state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_42897 = f__42523__auto__();
(statearr_42897[(6)] = c__42522__auto___44211);

return statearr_42897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
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
var c__42522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_42919){
var state_val_42920 = (state_42919[(1)]);
if((state_val_42920 === (7))){
var inst_42915 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
var statearr_42921_44229 = state_42919__$1;
(statearr_42921_44229[(2)] = inst_42915);

(statearr_42921_44229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (1))){
var inst_42898 = init;
var inst_42899 = inst_42898;
var state_42919__$1 = (function (){var statearr_42922 = state_42919;
(statearr_42922[(7)] = inst_42899);

return statearr_42922;
})();
var statearr_42923_44230 = state_42919__$1;
(statearr_42923_44230[(2)] = null);

(statearr_42923_44230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (4))){
var inst_42902 = (state_42919[(8)]);
var inst_42902__$1 = (state_42919[(2)]);
var inst_42903 = (inst_42902__$1 == null);
var state_42919__$1 = (function (){var statearr_42924 = state_42919;
(statearr_42924[(8)] = inst_42902__$1);

return statearr_42924;
})();
if(cljs.core.truth_(inst_42903)){
var statearr_42925_44231 = state_42919__$1;
(statearr_42925_44231[(1)] = (5));

} else {
var statearr_42926_44232 = state_42919__$1;
(statearr_42926_44232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (6))){
var inst_42899 = (state_42919[(7)]);
var inst_42902 = (state_42919[(8)]);
var inst_42906 = (state_42919[(9)]);
var inst_42906__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42899,inst_42902) : f.call(null,inst_42899,inst_42902));
var inst_42907 = cljs.core.reduced_QMARK_(inst_42906__$1);
var state_42919__$1 = (function (){var statearr_42927 = state_42919;
(statearr_42927[(9)] = inst_42906__$1);

return statearr_42927;
})();
if(inst_42907){
var statearr_42928_44233 = state_42919__$1;
(statearr_42928_44233[(1)] = (8));

} else {
var statearr_42929_44234 = state_42919__$1;
(statearr_42929_44234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (3))){
var inst_42917 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42919__$1,inst_42917);
} else {
if((state_val_42920 === (2))){
var state_42919__$1 = state_42919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42919__$1,(4),ch);
} else {
if((state_val_42920 === (9))){
var inst_42906 = (state_42919[(9)]);
var inst_42899 = inst_42906;
var state_42919__$1 = (function (){var statearr_42930 = state_42919;
(statearr_42930[(7)] = inst_42899);

return statearr_42930;
})();
var statearr_42931_44235 = state_42919__$1;
(statearr_42931_44235[(2)] = null);

(statearr_42931_44235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (5))){
var inst_42899 = (state_42919[(7)]);
var state_42919__$1 = state_42919;
var statearr_42932_44236 = state_42919__$1;
(statearr_42932_44236[(2)] = inst_42899);

(statearr_42932_44236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (10))){
var inst_42913 = (state_42919[(2)]);
var state_42919__$1 = state_42919;
var statearr_42933_44237 = state_42919__$1;
(statearr_42933_44237[(2)] = inst_42913);

(statearr_42933_44237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42920 === (8))){
var inst_42906 = (state_42919[(9)]);
var inst_42909 = cljs.core.deref(inst_42906);
var state_42919__$1 = state_42919;
var statearr_42934_44238 = state_42919__$1;
(statearr_42934_44238[(2)] = inst_42909);

(statearr_42934_44238[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__42487__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42487__auto____0 = (function (){
var statearr_42935 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42935[(0)] = cljs$core$async$reduce_$_state_machine__42487__auto__);

(statearr_42935[(1)] = (1));

return statearr_42935;
});
var cljs$core$async$reduce_$_state_machine__42487__auto____1 = (function (state_42919){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_42919);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e42936){var ex__42490__auto__ = e42936;
var statearr_42937_44239 = state_42919;
(statearr_42937_44239[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_42919[(4)]))){
var statearr_42938_44240 = state_42919;
(statearr_42938_44240[(1)] = cljs.core.first((state_42919[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44241 = state_42919;
state_42919 = G__44241;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42487__auto__ = function(state_42919){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42487__auto____1.call(this,state_42919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42487__auto____0;
cljs$core$async$reduce_$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42487__auto____1;
return cljs$core$async$reduce_$_state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_42939 = f__42523__auto__();
(statearr_42939[(6)] = c__42522__auto__);

return statearr_42939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
}));

return c__42522__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_42945){
var state_val_42946 = (state_42945[(1)]);
if((state_val_42946 === (1))){
var inst_42940 = cljs.core.async.reduce(f__$1,init,ch);
var state_42945__$1 = state_42945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42945__$1,(2),inst_42940);
} else {
if((state_val_42946 === (2))){
var inst_42942 = (state_42945[(2)]);
var inst_42943 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_42942) : f__$1.call(null,inst_42942));
var state_42945__$1 = state_42945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42945__$1,inst_42943);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42487__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42487__auto____0 = (function (){
var statearr_42947 = [null,null,null,null,null,null,null];
(statearr_42947[(0)] = cljs$core$async$transduce_$_state_machine__42487__auto__);

(statearr_42947[(1)] = (1));

return statearr_42947;
});
var cljs$core$async$transduce_$_state_machine__42487__auto____1 = (function (state_42945){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_42945);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e42948){var ex__42490__auto__ = e42948;
var statearr_42949_44242 = state_42945;
(statearr_42949_44242[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_42945[(4)]))){
var statearr_42950_44243 = state_42945;
(statearr_42950_44243[(1)] = cljs.core.first((state_42945[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44244 = state_42945;
state_42945 = G__44244;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42487__auto__ = function(state_42945){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42487__auto____1.call(this,state_42945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42487__auto____0;
cljs$core$async$transduce_$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42487__auto____1;
return cljs$core$async$transduce_$_state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_42951 = f__42523__auto__();
(statearr_42951[(6)] = c__42522__auto__);

return statearr_42951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
}));

return c__42522__auto__;
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
var G__42953 = arguments.length;
switch (G__42953) {
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
var c__42522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_42978){
var state_val_42979 = (state_42978[(1)]);
if((state_val_42979 === (7))){
var inst_42960 = (state_42978[(2)]);
var state_42978__$1 = state_42978;
var statearr_42980_44246 = state_42978__$1;
(statearr_42980_44246[(2)] = inst_42960);

(statearr_42980_44246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42979 === (1))){
var inst_42954 = cljs.core.seq(coll);
var inst_42955 = inst_42954;
var state_42978__$1 = (function (){var statearr_42981 = state_42978;
(statearr_42981[(7)] = inst_42955);

return statearr_42981;
})();
var statearr_42982_44247 = state_42978__$1;
(statearr_42982_44247[(2)] = null);

(statearr_42982_44247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42979 === (4))){
var inst_42955 = (state_42978[(7)]);
var inst_42958 = cljs.core.first(inst_42955);
var state_42978__$1 = state_42978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42978__$1,(7),ch,inst_42958);
} else {
if((state_val_42979 === (13))){
var inst_42972 = (state_42978[(2)]);
var state_42978__$1 = state_42978;
var statearr_42983_44248 = state_42978__$1;
(statearr_42983_44248[(2)] = inst_42972);

(statearr_42983_44248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42979 === (6))){
var inst_42963 = (state_42978[(2)]);
var state_42978__$1 = state_42978;
if(cljs.core.truth_(inst_42963)){
var statearr_42984_44249 = state_42978__$1;
(statearr_42984_44249[(1)] = (8));

} else {
var statearr_42985_44250 = state_42978__$1;
(statearr_42985_44250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42979 === (3))){
var inst_42976 = (state_42978[(2)]);
var state_42978__$1 = state_42978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42978__$1,inst_42976);
} else {
if((state_val_42979 === (12))){
var state_42978__$1 = state_42978;
var statearr_42986_44251 = state_42978__$1;
(statearr_42986_44251[(2)] = null);

(statearr_42986_44251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42979 === (2))){
var inst_42955 = (state_42978[(7)]);
var state_42978__$1 = state_42978;
if(cljs.core.truth_(inst_42955)){
var statearr_42987_44252 = state_42978__$1;
(statearr_42987_44252[(1)] = (4));

} else {
var statearr_42988_44253 = state_42978__$1;
(statearr_42988_44253[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42979 === (11))){
var inst_42969 = cljs.core.async.close_BANG_(ch);
var state_42978__$1 = state_42978;
var statearr_42989_44254 = state_42978__$1;
(statearr_42989_44254[(2)] = inst_42969);

(statearr_42989_44254[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42979 === (9))){
var state_42978__$1 = state_42978;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42990_44255 = state_42978__$1;
(statearr_42990_44255[(1)] = (11));

} else {
var statearr_42991_44256 = state_42978__$1;
(statearr_42991_44256[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42979 === (5))){
var inst_42955 = (state_42978[(7)]);
var state_42978__$1 = state_42978;
var statearr_42992_44257 = state_42978__$1;
(statearr_42992_44257[(2)] = inst_42955);

(statearr_42992_44257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42979 === (10))){
var inst_42974 = (state_42978[(2)]);
var state_42978__$1 = state_42978;
var statearr_42993_44258 = state_42978__$1;
(statearr_42993_44258[(2)] = inst_42974);

(statearr_42993_44258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42979 === (8))){
var inst_42955 = (state_42978[(7)]);
var inst_42965 = cljs.core.next(inst_42955);
var inst_42955__$1 = inst_42965;
var state_42978__$1 = (function (){var statearr_42994 = state_42978;
(statearr_42994[(7)] = inst_42955__$1);

return statearr_42994;
})();
var statearr_42995_44259 = state_42978__$1;
(statearr_42995_44259[(2)] = null);

(statearr_42995_44259[(1)] = (2));


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
var cljs$core$async$state_machine__42487__auto__ = null;
var cljs$core$async$state_machine__42487__auto____0 = (function (){
var statearr_42996 = [null,null,null,null,null,null,null,null];
(statearr_42996[(0)] = cljs$core$async$state_machine__42487__auto__);

(statearr_42996[(1)] = (1));

return statearr_42996;
});
var cljs$core$async$state_machine__42487__auto____1 = (function (state_42978){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_42978);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e42997){var ex__42490__auto__ = e42997;
var statearr_42998_44260 = state_42978;
(statearr_42998_44260[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_42978[(4)]))){
var statearr_42999_44261 = state_42978;
(statearr_42999_44261[(1)] = cljs.core.first((state_42978[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44262 = state_42978;
state_42978 = G__44262;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$state_machine__42487__auto__ = function(state_42978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42487__auto____1.call(this,state_42978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42487__auto____0;
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42487__auto____1;
return cljs$core$async$state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_43000 = f__42523__auto__();
(statearr_43000[(6)] = c__42522__auto__);

return statearr_43000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
}));

return c__42522__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_44263 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_44263(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_44264 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_44264(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_44265 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_44265(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_44266 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_44266(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43001 = (function (ch,cs,meta43002){
this.ch = ch;
this.cs = cs;
this.meta43002 = meta43002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43003,meta43002__$1){
var self__ = this;
var _43003__$1 = this;
return (new cljs.core.async.t_cljs$core$async43001(self__.ch,self__.cs,meta43002__$1));
}));

(cljs.core.async.t_cljs$core$async43001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43003){
var self__ = this;
var _43003__$1 = this;
return self__.meta43002;
}));

(cljs.core.async.t_cljs$core$async43001.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43001.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43001.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43001.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43001.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43001.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43002","meta43002",-1000869920,null)], null);
}));

(cljs.core.async.t_cljs$core$async43001.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43001");

(cljs.core.async.t_cljs$core$async43001.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43001");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43001.
 */
cljs.core.async.__GT_t_cljs$core$async43001 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43001(ch__$1,cs__$1,meta43002){
return (new cljs.core.async.t_cljs$core$async43001(ch__$1,cs__$1,meta43002));
});

}

return (new cljs.core.async.t_cljs$core$async43001(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__42522__auto___44267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_43136){
var state_val_43137 = (state_43136[(1)]);
if((state_val_43137 === (7))){
var inst_43132 = (state_43136[(2)]);
var state_43136__$1 = state_43136;
var statearr_43138_44268 = state_43136__$1;
(statearr_43138_44268[(2)] = inst_43132);

(statearr_43138_44268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (20))){
var inst_43037 = (state_43136[(7)]);
var inst_43049 = cljs.core.first(inst_43037);
var inst_43050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43049,(0),null);
var inst_43051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43049,(1),null);
var state_43136__$1 = (function (){var statearr_43139 = state_43136;
(statearr_43139[(8)] = inst_43050);

return statearr_43139;
})();
if(cljs.core.truth_(inst_43051)){
var statearr_43140_44269 = state_43136__$1;
(statearr_43140_44269[(1)] = (22));

} else {
var statearr_43141_44270 = state_43136__$1;
(statearr_43141_44270[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (27))){
var inst_43081 = (state_43136[(9)]);
var inst_43079 = (state_43136[(10)]);
var inst_43086 = (state_43136[(11)]);
var inst_43006 = (state_43136[(12)]);
var inst_43086__$1 = cljs.core._nth(inst_43079,inst_43081);
var inst_43087 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43086__$1,inst_43006,done);
var state_43136__$1 = (function (){var statearr_43142 = state_43136;
(statearr_43142[(11)] = inst_43086__$1);

return statearr_43142;
})();
if(cljs.core.truth_(inst_43087)){
var statearr_43143_44271 = state_43136__$1;
(statearr_43143_44271[(1)] = (30));

} else {
var statearr_43144_44272 = state_43136__$1;
(statearr_43144_44272[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (1))){
var state_43136__$1 = state_43136;
var statearr_43145_44273 = state_43136__$1;
(statearr_43145_44273[(2)] = null);

(statearr_43145_44273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (24))){
var inst_43037 = (state_43136[(7)]);
var inst_43056 = (state_43136[(2)]);
var inst_43057 = cljs.core.next(inst_43037);
var inst_43015 = inst_43057;
var inst_43016 = null;
var inst_43017 = (0);
var inst_43018 = (0);
var state_43136__$1 = (function (){var statearr_43146 = state_43136;
(statearr_43146[(13)] = inst_43017);

(statearr_43146[(14)] = inst_43018);

(statearr_43146[(15)] = inst_43056);

(statearr_43146[(16)] = inst_43015);

(statearr_43146[(17)] = inst_43016);

return statearr_43146;
})();
var statearr_43147_44274 = state_43136__$1;
(statearr_43147_44274[(2)] = null);

(statearr_43147_44274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (39))){
var state_43136__$1 = state_43136;
var statearr_43151_44275 = state_43136__$1;
(statearr_43151_44275[(2)] = null);

(statearr_43151_44275[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (4))){
var inst_43006 = (state_43136[(12)]);
var inst_43006__$1 = (state_43136[(2)]);
var inst_43007 = (inst_43006__$1 == null);
var state_43136__$1 = (function (){var statearr_43152 = state_43136;
(statearr_43152[(12)] = inst_43006__$1);

return statearr_43152;
})();
if(cljs.core.truth_(inst_43007)){
var statearr_43153_44276 = state_43136__$1;
(statearr_43153_44276[(1)] = (5));

} else {
var statearr_43154_44277 = state_43136__$1;
(statearr_43154_44277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (15))){
var inst_43017 = (state_43136[(13)]);
var inst_43018 = (state_43136[(14)]);
var inst_43015 = (state_43136[(16)]);
var inst_43016 = (state_43136[(17)]);
var inst_43033 = (state_43136[(2)]);
var inst_43034 = (inst_43018 + (1));
var tmp43148 = inst_43017;
var tmp43149 = inst_43015;
var tmp43150 = inst_43016;
var inst_43015__$1 = tmp43149;
var inst_43016__$1 = tmp43150;
var inst_43017__$1 = tmp43148;
var inst_43018__$1 = inst_43034;
var state_43136__$1 = (function (){var statearr_43155 = state_43136;
(statearr_43155[(13)] = inst_43017__$1);

(statearr_43155[(14)] = inst_43018__$1);

(statearr_43155[(16)] = inst_43015__$1);

(statearr_43155[(17)] = inst_43016__$1);

(statearr_43155[(18)] = inst_43033);

return statearr_43155;
})();
var statearr_43156_44278 = state_43136__$1;
(statearr_43156_44278[(2)] = null);

(statearr_43156_44278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (21))){
var inst_43060 = (state_43136[(2)]);
var state_43136__$1 = state_43136;
var statearr_43160_44279 = state_43136__$1;
(statearr_43160_44279[(2)] = inst_43060);

(statearr_43160_44279[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (31))){
var inst_43086 = (state_43136[(11)]);
var inst_43090 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43086);
var state_43136__$1 = state_43136;
var statearr_43161_44280 = state_43136__$1;
(statearr_43161_44280[(2)] = inst_43090);

(statearr_43161_44280[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (32))){
var inst_43081 = (state_43136[(9)]);
var inst_43080 = (state_43136[(19)]);
var inst_43078 = (state_43136[(20)]);
var inst_43079 = (state_43136[(10)]);
var inst_43092 = (state_43136[(2)]);
var inst_43093 = (inst_43081 + (1));
var tmp43157 = inst_43080;
var tmp43158 = inst_43078;
var tmp43159 = inst_43079;
var inst_43078__$1 = tmp43158;
var inst_43079__$1 = tmp43159;
var inst_43080__$1 = tmp43157;
var inst_43081__$1 = inst_43093;
var state_43136__$1 = (function (){var statearr_43162 = state_43136;
(statearr_43162[(9)] = inst_43081__$1);

(statearr_43162[(19)] = inst_43080__$1);

(statearr_43162[(20)] = inst_43078__$1);

(statearr_43162[(10)] = inst_43079__$1);

(statearr_43162[(21)] = inst_43092);

return statearr_43162;
})();
var statearr_43163_44281 = state_43136__$1;
(statearr_43163_44281[(2)] = null);

(statearr_43163_44281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (40))){
var inst_43105 = (state_43136[(22)]);
var inst_43109 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43105);
var state_43136__$1 = state_43136;
var statearr_43164_44282 = state_43136__$1;
(statearr_43164_44282[(2)] = inst_43109);

(statearr_43164_44282[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (33))){
var inst_43096 = (state_43136[(23)]);
var inst_43098 = cljs.core.chunked_seq_QMARK_(inst_43096);
var state_43136__$1 = state_43136;
if(inst_43098){
var statearr_43165_44283 = state_43136__$1;
(statearr_43165_44283[(1)] = (36));

} else {
var statearr_43166_44284 = state_43136__$1;
(statearr_43166_44284[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (13))){
var inst_43027 = (state_43136[(24)]);
var inst_43030 = cljs.core.async.close_BANG_(inst_43027);
var state_43136__$1 = state_43136;
var statearr_43167_44285 = state_43136__$1;
(statearr_43167_44285[(2)] = inst_43030);

(statearr_43167_44285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (22))){
var inst_43050 = (state_43136[(8)]);
var inst_43053 = cljs.core.async.close_BANG_(inst_43050);
var state_43136__$1 = state_43136;
var statearr_43168_44286 = state_43136__$1;
(statearr_43168_44286[(2)] = inst_43053);

(statearr_43168_44286[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (36))){
var inst_43096 = (state_43136[(23)]);
var inst_43100 = cljs.core.chunk_first(inst_43096);
var inst_43101 = cljs.core.chunk_rest(inst_43096);
var inst_43102 = cljs.core.count(inst_43100);
var inst_43078 = inst_43101;
var inst_43079 = inst_43100;
var inst_43080 = inst_43102;
var inst_43081 = (0);
var state_43136__$1 = (function (){var statearr_43169 = state_43136;
(statearr_43169[(9)] = inst_43081);

(statearr_43169[(19)] = inst_43080);

(statearr_43169[(20)] = inst_43078);

(statearr_43169[(10)] = inst_43079);

return statearr_43169;
})();
var statearr_43170_44287 = state_43136__$1;
(statearr_43170_44287[(2)] = null);

(statearr_43170_44287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (41))){
var inst_43096 = (state_43136[(23)]);
var inst_43111 = (state_43136[(2)]);
var inst_43112 = cljs.core.next(inst_43096);
var inst_43078 = inst_43112;
var inst_43079 = null;
var inst_43080 = (0);
var inst_43081 = (0);
var state_43136__$1 = (function (){var statearr_43171 = state_43136;
(statearr_43171[(9)] = inst_43081);

(statearr_43171[(19)] = inst_43080);

(statearr_43171[(20)] = inst_43078);

(statearr_43171[(10)] = inst_43079);

(statearr_43171[(25)] = inst_43111);

return statearr_43171;
})();
var statearr_43172_44288 = state_43136__$1;
(statearr_43172_44288[(2)] = null);

(statearr_43172_44288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (43))){
var state_43136__$1 = state_43136;
var statearr_43173_44289 = state_43136__$1;
(statearr_43173_44289[(2)] = null);

(statearr_43173_44289[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (29))){
var inst_43120 = (state_43136[(2)]);
var state_43136__$1 = state_43136;
var statearr_43174_44290 = state_43136__$1;
(statearr_43174_44290[(2)] = inst_43120);

(statearr_43174_44290[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (44))){
var inst_43129 = (state_43136[(2)]);
var state_43136__$1 = (function (){var statearr_43175 = state_43136;
(statearr_43175[(26)] = inst_43129);

return statearr_43175;
})();
var statearr_43176_44291 = state_43136__$1;
(statearr_43176_44291[(2)] = null);

(statearr_43176_44291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (6))){
var inst_43070 = (state_43136[(27)]);
var inst_43069 = cljs.core.deref(cs);
var inst_43070__$1 = cljs.core.keys(inst_43069);
var inst_43071 = cljs.core.count(inst_43070__$1);
var inst_43072 = cljs.core.reset_BANG_(dctr,inst_43071);
var inst_43077 = cljs.core.seq(inst_43070__$1);
var inst_43078 = inst_43077;
var inst_43079 = null;
var inst_43080 = (0);
var inst_43081 = (0);
var state_43136__$1 = (function (){var statearr_43177 = state_43136;
(statearr_43177[(27)] = inst_43070__$1);

(statearr_43177[(9)] = inst_43081);

(statearr_43177[(19)] = inst_43080);

(statearr_43177[(20)] = inst_43078);

(statearr_43177[(10)] = inst_43079);

(statearr_43177[(28)] = inst_43072);

return statearr_43177;
})();
var statearr_43178_44292 = state_43136__$1;
(statearr_43178_44292[(2)] = null);

(statearr_43178_44292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (28))){
var inst_43096 = (state_43136[(23)]);
var inst_43078 = (state_43136[(20)]);
var inst_43096__$1 = cljs.core.seq(inst_43078);
var state_43136__$1 = (function (){var statearr_43179 = state_43136;
(statearr_43179[(23)] = inst_43096__$1);

return statearr_43179;
})();
if(inst_43096__$1){
var statearr_43180_44293 = state_43136__$1;
(statearr_43180_44293[(1)] = (33));

} else {
var statearr_43181_44294 = state_43136__$1;
(statearr_43181_44294[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (25))){
var inst_43081 = (state_43136[(9)]);
var inst_43080 = (state_43136[(19)]);
var inst_43083 = (inst_43081 < inst_43080);
var inst_43084 = inst_43083;
var state_43136__$1 = state_43136;
if(cljs.core.truth_(inst_43084)){
var statearr_43182_44295 = state_43136__$1;
(statearr_43182_44295[(1)] = (27));

} else {
var statearr_43183_44296 = state_43136__$1;
(statearr_43183_44296[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (34))){
var state_43136__$1 = state_43136;
var statearr_43184_44297 = state_43136__$1;
(statearr_43184_44297[(2)] = null);

(statearr_43184_44297[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (17))){
var state_43136__$1 = state_43136;
var statearr_43185_44298 = state_43136__$1;
(statearr_43185_44298[(2)] = null);

(statearr_43185_44298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (3))){
var inst_43134 = (state_43136[(2)]);
var state_43136__$1 = state_43136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43136__$1,inst_43134);
} else {
if((state_val_43137 === (12))){
var inst_43065 = (state_43136[(2)]);
var state_43136__$1 = state_43136;
var statearr_43186_44300 = state_43136__$1;
(statearr_43186_44300[(2)] = inst_43065);

(statearr_43186_44300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (2))){
var state_43136__$1 = state_43136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43136__$1,(4),ch);
} else {
if((state_val_43137 === (23))){
var state_43136__$1 = state_43136;
var statearr_43187_44303 = state_43136__$1;
(statearr_43187_44303[(2)] = null);

(statearr_43187_44303[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (35))){
var inst_43118 = (state_43136[(2)]);
var state_43136__$1 = state_43136;
var statearr_43188_44304 = state_43136__$1;
(statearr_43188_44304[(2)] = inst_43118);

(statearr_43188_44304[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (19))){
var inst_43037 = (state_43136[(7)]);
var inst_43041 = cljs.core.chunk_first(inst_43037);
var inst_43042 = cljs.core.chunk_rest(inst_43037);
var inst_43043 = cljs.core.count(inst_43041);
var inst_43015 = inst_43042;
var inst_43016 = inst_43041;
var inst_43017 = inst_43043;
var inst_43018 = (0);
var state_43136__$1 = (function (){var statearr_43189 = state_43136;
(statearr_43189[(13)] = inst_43017);

(statearr_43189[(14)] = inst_43018);

(statearr_43189[(16)] = inst_43015);

(statearr_43189[(17)] = inst_43016);

return statearr_43189;
})();
var statearr_43190_44312 = state_43136__$1;
(statearr_43190_44312[(2)] = null);

(statearr_43190_44312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (11))){
var inst_43015 = (state_43136[(16)]);
var inst_43037 = (state_43136[(7)]);
var inst_43037__$1 = cljs.core.seq(inst_43015);
var state_43136__$1 = (function (){var statearr_43191 = state_43136;
(statearr_43191[(7)] = inst_43037__$1);

return statearr_43191;
})();
if(inst_43037__$1){
var statearr_43192_44313 = state_43136__$1;
(statearr_43192_44313[(1)] = (16));

} else {
var statearr_43193_44314 = state_43136__$1;
(statearr_43193_44314[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (9))){
var inst_43067 = (state_43136[(2)]);
var state_43136__$1 = state_43136;
var statearr_43194_44317 = state_43136__$1;
(statearr_43194_44317[(2)] = inst_43067);

(statearr_43194_44317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (5))){
var inst_43013 = cljs.core.deref(cs);
var inst_43014 = cljs.core.seq(inst_43013);
var inst_43015 = inst_43014;
var inst_43016 = null;
var inst_43017 = (0);
var inst_43018 = (0);
var state_43136__$1 = (function (){var statearr_43195 = state_43136;
(statearr_43195[(13)] = inst_43017);

(statearr_43195[(14)] = inst_43018);

(statearr_43195[(16)] = inst_43015);

(statearr_43195[(17)] = inst_43016);

return statearr_43195;
})();
var statearr_43196_44320 = state_43136__$1;
(statearr_43196_44320[(2)] = null);

(statearr_43196_44320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (14))){
var state_43136__$1 = state_43136;
var statearr_43197_44321 = state_43136__$1;
(statearr_43197_44321[(2)] = null);

(statearr_43197_44321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (45))){
var inst_43126 = (state_43136[(2)]);
var state_43136__$1 = state_43136;
var statearr_43198_44324 = state_43136__$1;
(statearr_43198_44324[(2)] = inst_43126);

(statearr_43198_44324[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (26))){
var inst_43070 = (state_43136[(27)]);
var inst_43122 = (state_43136[(2)]);
var inst_43123 = cljs.core.seq(inst_43070);
var state_43136__$1 = (function (){var statearr_43199 = state_43136;
(statearr_43199[(29)] = inst_43122);

return statearr_43199;
})();
if(inst_43123){
var statearr_43200_44325 = state_43136__$1;
(statearr_43200_44325[(1)] = (42));

} else {
var statearr_43201_44326 = state_43136__$1;
(statearr_43201_44326[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (16))){
var inst_43037 = (state_43136[(7)]);
var inst_43039 = cljs.core.chunked_seq_QMARK_(inst_43037);
var state_43136__$1 = state_43136;
if(inst_43039){
var statearr_43202_44327 = state_43136__$1;
(statearr_43202_44327[(1)] = (19));

} else {
var statearr_43203_44328 = state_43136__$1;
(statearr_43203_44328[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (38))){
var inst_43115 = (state_43136[(2)]);
var state_43136__$1 = state_43136;
var statearr_43204_44329 = state_43136__$1;
(statearr_43204_44329[(2)] = inst_43115);

(statearr_43204_44329[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (30))){
var state_43136__$1 = state_43136;
var statearr_43205_44331 = state_43136__$1;
(statearr_43205_44331[(2)] = null);

(statearr_43205_44331[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (10))){
var inst_43018 = (state_43136[(14)]);
var inst_43016 = (state_43136[(17)]);
var inst_43026 = cljs.core._nth(inst_43016,inst_43018);
var inst_43027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43026,(0),null);
var inst_43028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43026,(1),null);
var state_43136__$1 = (function (){var statearr_43206 = state_43136;
(statearr_43206[(24)] = inst_43027);

return statearr_43206;
})();
if(cljs.core.truth_(inst_43028)){
var statearr_43207_44332 = state_43136__$1;
(statearr_43207_44332[(1)] = (13));

} else {
var statearr_43208_44333 = state_43136__$1;
(statearr_43208_44333[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (18))){
var inst_43063 = (state_43136[(2)]);
var state_43136__$1 = state_43136;
var statearr_43209_44334 = state_43136__$1;
(statearr_43209_44334[(2)] = inst_43063);

(statearr_43209_44334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (42))){
var state_43136__$1 = state_43136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43136__$1,(45),dchan);
} else {
if((state_val_43137 === (37))){
var inst_43096 = (state_43136[(23)]);
var inst_43105 = (state_43136[(22)]);
var inst_43006 = (state_43136[(12)]);
var inst_43105__$1 = cljs.core.first(inst_43096);
var inst_43106 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43105__$1,inst_43006,done);
var state_43136__$1 = (function (){var statearr_43210 = state_43136;
(statearr_43210[(22)] = inst_43105__$1);

return statearr_43210;
})();
if(cljs.core.truth_(inst_43106)){
var statearr_43211_44335 = state_43136__$1;
(statearr_43211_44335[(1)] = (39));

} else {
var statearr_43212_44336 = state_43136__$1;
(statearr_43212_44336[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (8))){
var inst_43017 = (state_43136[(13)]);
var inst_43018 = (state_43136[(14)]);
var inst_43020 = (inst_43018 < inst_43017);
var inst_43021 = inst_43020;
var state_43136__$1 = state_43136;
if(cljs.core.truth_(inst_43021)){
var statearr_43213_44337 = state_43136__$1;
(statearr_43213_44337[(1)] = (10));

} else {
var statearr_43214_44338 = state_43136__$1;
(statearr_43214_44338[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__42487__auto__ = null;
var cljs$core$async$mult_$_state_machine__42487__auto____0 = (function (){
var statearr_43215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43215[(0)] = cljs$core$async$mult_$_state_machine__42487__auto__);

(statearr_43215[(1)] = (1));

return statearr_43215;
});
var cljs$core$async$mult_$_state_machine__42487__auto____1 = (function (state_43136){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_43136);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e43216){var ex__42490__auto__ = e43216;
var statearr_43217_44339 = state_43136;
(statearr_43217_44339[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_43136[(4)]))){
var statearr_43218_44340 = state_43136;
(statearr_43218_44340[(1)] = cljs.core.first((state_43136[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44341 = state_43136;
state_43136 = G__44341;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42487__auto__ = function(state_43136){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42487__auto____1.call(this,state_43136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42487__auto____0;
cljs$core$async$mult_$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42487__auto____1;
return cljs$core$async$mult_$_state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_43219 = f__42523__auto__();
(statearr_43219[(6)] = c__42522__auto___44267);

return statearr_43219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
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
var G__43221 = arguments.length;
switch (G__43221) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_44343 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_44343(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44344 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_44344(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44345 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44345(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44346 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_44346(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44347 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44347(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44348 = arguments.length;
var i__4737__auto___44349 = (0);
while(true){
if((i__4737__auto___44349 < len__4736__auto___44348)){
args__4742__auto__.push((arguments[i__4737__auto___44349]));

var G__44350 = (i__4737__auto___44349 + (1));
i__4737__auto___44349 = G__44350;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43226){
var map__43227 = p__43226;
var map__43227__$1 = (((((!((map__43227 == null))))?(((((map__43227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43227):map__43227);
var opts = map__43227__$1;
var statearr_43229_44351 = state;
(statearr_43229_44351[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_43230_44352 = state;
(statearr_43230_44352[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_43231_44353 = state;
(statearr_43231_44353[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43222){
var G__43223 = cljs.core.first(seq43222);
var seq43222__$1 = cljs.core.next(seq43222);
var G__43224 = cljs.core.first(seq43222__$1);
var seq43222__$2 = cljs.core.next(seq43222__$1);
var G__43225 = cljs.core.first(seq43222__$2);
var seq43222__$3 = cljs.core.next(seq43222__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43223,G__43224,G__43225,seq43222__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43232 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43233){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43233 = meta43233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43234,meta43233__$1){
var self__ = this;
var _43234__$1 = this;
return (new cljs.core.async.t_cljs$core$async43232(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43233__$1));
}));

(cljs.core.async.t_cljs$core$async43232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43234){
var self__ = this;
var _43234__$1 = this;
return self__.meta43233;
}));

(cljs.core.async.t_cljs$core$async43232.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43232.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43232.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43232.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43232.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43232.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43232.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43232.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43233","meta43233",980934166,null)], null);
}));

(cljs.core.async.t_cljs$core$async43232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43232");

(cljs.core.async.t_cljs$core$async43232.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43232.
 */
cljs.core.async.__GT_t_cljs$core$async43232 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43232(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43233){
return (new cljs.core.async.t_cljs$core$async43232(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43233));
});

}

return (new cljs.core.async.t_cljs$core$async43232(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42522__auto___44360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_43336){
var state_val_43337 = (state_43336[(1)]);
if((state_val_43337 === (7))){
var inst_43251 = (state_43336[(2)]);
var state_43336__$1 = state_43336;
var statearr_43338_44361 = state_43336__$1;
(statearr_43338_44361[(2)] = inst_43251);

(statearr_43338_44361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (20))){
var inst_43263 = (state_43336[(7)]);
var state_43336__$1 = state_43336;
var statearr_43339_44365 = state_43336__$1;
(statearr_43339_44365[(2)] = inst_43263);

(statearr_43339_44365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (27))){
var state_43336__$1 = state_43336;
var statearr_43340_44366 = state_43336__$1;
(statearr_43340_44366[(2)] = null);

(statearr_43340_44366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (1))){
var inst_43238 = (state_43336[(8)]);
var inst_43238__$1 = calc_state();
var inst_43240 = (inst_43238__$1 == null);
var inst_43241 = cljs.core.not(inst_43240);
var state_43336__$1 = (function (){var statearr_43341 = state_43336;
(statearr_43341[(8)] = inst_43238__$1);

return statearr_43341;
})();
if(inst_43241){
var statearr_43342_44371 = state_43336__$1;
(statearr_43342_44371[(1)] = (2));

} else {
var statearr_43343_44372 = state_43336__$1;
(statearr_43343_44372[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (24))){
var inst_43310 = (state_43336[(9)]);
var inst_43296 = (state_43336[(10)]);
var inst_43287 = (state_43336[(11)]);
var inst_43310__$1 = (inst_43287.cljs$core$IFn$_invoke$arity$1 ? inst_43287.cljs$core$IFn$_invoke$arity$1(inst_43296) : inst_43287.call(null,inst_43296));
var state_43336__$1 = (function (){var statearr_43344 = state_43336;
(statearr_43344[(9)] = inst_43310__$1);

return statearr_43344;
})();
if(cljs.core.truth_(inst_43310__$1)){
var statearr_43345_44373 = state_43336__$1;
(statearr_43345_44373[(1)] = (29));

} else {
var statearr_43346_44374 = state_43336__$1;
(statearr_43346_44374[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (4))){
var inst_43254 = (state_43336[(2)]);
var state_43336__$1 = state_43336;
if(cljs.core.truth_(inst_43254)){
var statearr_43347_44375 = state_43336__$1;
(statearr_43347_44375[(1)] = (8));

} else {
var statearr_43348_44376 = state_43336__$1;
(statearr_43348_44376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (15))){
var inst_43281 = (state_43336[(2)]);
var state_43336__$1 = state_43336;
if(cljs.core.truth_(inst_43281)){
var statearr_43349_44377 = state_43336__$1;
(statearr_43349_44377[(1)] = (19));

} else {
var statearr_43350_44378 = state_43336__$1;
(statearr_43350_44378[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (21))){
var inst_43286 = (state_43336[(12)]);
var inst_43286__$1 = (state_43336[(2)]);
var inst_43287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43286__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43286__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43286__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43336__$1 = (function (){var statearr_43351 = state_43336;
(statearr_43351[(13)] = inst_43288);

(statearr_43351[(12)] = inst_43286__$1);

(statearr_43351[(11)] = inst_43287);

return statearr_43351;
})();
return cljs.core.async.ioc_alts_BANG_(state_43336__$1,(22),inst_43289);
} else {
if((state_val_43337 === (31))){
var inst_43318 = (state_43336[(2)]);
var state_43336__$1 = state_43336;
if(cljs.core.truth_(inst_43318)){
var statearr_43352_44379 = state_43336__$1;
(statearr_43352_44379[(1)] = (32));

} else {
var statearr_43353_44380 = state_43336__$1;
(statearr_43353_44380[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (32))){
var inst_43295 = (state_43336[(14)]);
var state_43336__$1 = state_43336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43336__$1,(35),out,inst_43295);
} else {
if((state_val_43337 === (33))){
var inst_43286 = (state_43336[(12)]);
var inst_43263 = inst_43286;
var state_43336__$1 = (function (){var statearr_43354 = state_43336;
(statearr_43354[(7)] = inst_43263);

return statearr_43354;
})();
var statearr_43355_44381 = state_43336__$1;
(statearr_43355_44381[(2)] = null);

(statearr_43355_44381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (13))){
var inst_43263 = (state_43336[(7)]);
var inst_43270 = inst_43263.cljs$lang$protocol_mask$partition0$;
var inst_43271 = (inst_43270 & (64));
var inst_43272 = inst_43263.cljs$core$ISeq$;
var inst_43273 = (cljs.core.PROTOCOL_SENTINEL === inst_43272);
var inst_43274 = ((inst_43271) || (inst_43273));
var state_43336__$1 = state_43336;
if(cljs.core.truth_(inst_43274)){
var statearr_43356_44382 = state_43336__$1;
(statearr_43356_44382[(1)] = (16));

} else {
var statearr_43357_44383 = state_43336__$1;
(statearr_43357_44383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (22))){
var inst_43296 = (state_43336[(10)]);
var inst_43295 = (state_43336[(14)]);
var inst_43294 = (state_43336[(2)]);
var inst_43295__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43294,(0),null);
var inst_43296__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43294,(1),null);
var inst_43297 = (inst_43295__$1 == null);
var inst_43298 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43296__$1,change);
var inst_43299 = ((inst_43297) || (inst_43298));
var state_43336__$1 = (function (){var statearr_43358 = state_43336;
(statearr_43358[(10)] = inst_43296__$1);

(statearr_43358[(14)] = inst_43295__$1);

return statearr_43358;
})();
if(cljs.core.truth_(inst_43299)){
var statearr_43359_44384 = state_43336__$1;
(statearr_43359_44384[(1)] = (23));

} else {
var statearr_43360_44385 = state_43336__$1;
(statearr_43360_44385[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (36))){
var inst_43286 = (state_43336[(12)]);
var inst_43263 = inst_43286;
var state_43336__$1 = (function (){var statearr_43361 = state_43336;
(statearr_43361[(7)] = inst_43263);

return statearr_43361;
})();
var statearr_43362_44386 = state_43336__$1;
(statearr_43362_44386[(2)] = null);

(statearr_43362_44386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (29))){
var inst_43310 = (state_43336[(9)]);
var state_43336__$1 = state_43336;
var statearr_43363_44387 = state_43336__$1;
(statearr_43363_44387[(2)] = inst_43310);

(statearr_43363_44387[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (6))){
var state_43336__$1 = state_43336;
var statearr_43364_44388 = state_43336__$1;
(statearr_43364_44388[(2)] = false);

(statearr_43364_44388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (28))){
var inst_43306 = (state_43336[(2)]);
var inst_43307 = calc_state();
var inst_43263 = inst_43307;
var state_43336__$1 = (function (){var statearr_43365 = state_43336;
(statearr_43365[(15)] = inst_43306);

(statearr_43365[(7)] = inst_43263);

return statearr_43365;
})();
var statearr_43366_44390 = state_43336__$1;
(statearr_43366_44390[(2)] = null);

(statearr_43366_44390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (25))){
var inst_43332 = (state_43336[(2)]);
var state_43336__$1 = state_43336;
var statearr_43367_44391 = state_43336__$1;
(statearr_43367_44391[(2)] = inst_43332);

(statearr_43367_44391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (34))){
var inst_43330 = (state_43336[(2)]);
var state_43336__$1 = state_43336;
var statearr_43368_44394 = state_43336__$1;
(statearr_43368_44394[(2)] = inst_43330);

(statearr_43368_44394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (17))){
var state_43336__$1 = state_43336;
var statearr_43369_44395 = state_43336__$1;
(statearr_43369_44395[(2)] = false);

(statearr_43369_44395[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (3))){
var state_43336__$1 = state_43336;
var statearr_43370_44400 = state_43336__$1;
(statearr_43370_44400[(2)] = false);

(statearr_43370_44400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (12))){
var inst_43334 = (state_43336[(2)]);
var state_43336__$1 = state_43336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43336__$1,inst_43334);
} else {
if((state_val_43337 === (2))){
var inst_43238 = (state_43336[(8)]);
var inst_43243 = inst_43238.cljs$lang$protocol_mask$partition0$;
var inst_43244 = (inst_43243 & (64));
var inst_43245 = inst_43238.cljs$core$ISeq$;
var inst_43246 = (cljs.core.PROTOCOL_SENTINEL === inst_43245);
var inst_43247 = ((inst_43244) || (inst_43246));
var state_43336__$1 = state_43336;
if(cljs.core.truth_(inst_43247)){
var statearr_43371_44411 = state_43336__$1;
(statearr_43371_44411[(1)] = (5));

} else {
var statearr_43372_44412 = state_43336__$1;
(statearr_43372_44412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (23))){
var inst_43295 = (state_43336[(14)]);
var inst_43301 = (inst_43295 == null);
var state_43336__$1 = state_43336;
if(cljs.core.truth_(inst_43301)){
var statearr_43373_44413 = state_43336__$1;
(statearr_43373_44413[(1)] = (26));

} else {
var statearr_43374_44414 = state_43336__$1;
(statearr_43374_44414[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (35))){
var inst_43321 = (state_43336[(2)]);
var state_43336__$1 = state_43336;
if(cljs.core.truth_(inst_43321)){
var statearr_43375_44415 = state_43336__$1;
(statearr_43375_44415[(1)] = (36));

} else {
var statearr_43376_44416 = state_43336__$1;
(statearr_43376_44416[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (19))){
var inst_43263 = (state_43336[(7)]);
var inst_43283 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43263);
var state_43336__$1 = state_43336;
var statearr_43377_44417 = state_43336__$1;
(statearr_43377_44417[(2)] = inst_43283);

(statearr_43377_44417[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (11))){
var inst_43263 = (state_43336[(7)]);
var inst_43267 = (inst_43263 == null);
var inst_43268 = cljs.core.not(inst_43267);
var state_43336__$1 = state_43336;
if(inst_43268){
var statearr_43378_44418 = state_43336__$1;
(statearr_43378_44418[(1)] = (13));

} else {
var statearr_43379_44419 = state_43336__$1;
(statearr_43379_44419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (9))){
var inst_43238 = (state_43336[(8)]);
var state_43336__$1 = state_43336;
var statearr_43380_44420 = state_43336__$1;
(statearr_43380_44420[(2)] = inst_43238);

(statearr_43380_44420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (5))){
var state_43336__$1 = state_43336;
var statearr_43381_44421 = state_43336__$1;
(statearr_43381_44421[(2)] = true);

(statearr_43381_44421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (14))){
var state_43336__$1 = state_43336;
var statearr_43382_44422 = state_43336__$1;
(statearr_43382_44422[(2)] = false);

(statearr_43382_44422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (26))){
var inst_43296 = (state_43336[(10)]);
var inst_43303 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43296);
var state_43336__$1 = state_43336;
var statearr_43383_44423 = state_43336__$1;
(statearr_43383_44423[(2)] = inst_43303);

(statearr_43383_44423[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (16))){
var state_43336__$1 = state_43336;
var statearr_43384_44424 = state_43336__$1;
(statearr_43384_44424[(2)] = true);

(statearr_43384_44424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (38))){
var inst_43326 = (state_43336[(2)]);
var state_43336__$1 = state_43336;
var statearr_43385_44425 = state_43336__$1;
(statearr_43385_44425[(2)] = inst_43326);

(statearr_43385_44425[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (30))){
var inst_43288 = (state_43336[(13)]);
var inst_43296 = (state_43336[(10)]);
var inst_43287 = (state_43336[(11)]);
var inst_43313 = cljs.core.empty_QMARK_(inst_43287);
var inst_43314 = (inst_43288.cljs$core$IFn$_invoke$arity$1 ? inst_43288.cljs$core$IFn$_invoke$arity$1(inst_43296) : inst_43288.call(null,inst_43296));
var inst_43315 = cljs.core.not(inst_43314);
var inst_43316 = ((inst_43313) && (inst_43315));
var state_43336__$1 = state_43336;
var statearr_43386_44426 = state_43336__$1;
(statearr_43386_44426[(2)] = inst_43316);

(statearr_43386_44426[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (10))){
var inst_43238 = (state_43336[(8)]);
var inst_43259 = (state_43336[(2)]);
var inst_43260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43259,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43259,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43259,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43263 = inst_43238;
var state_43336__$1 = (function (){var statearr_43387 = state_43336;
(statearr_43387[(16)] = inst_43260);

(statearr_43387[(17)] = inst_43261);

(statearr_43387[(7)] = inst_43263);

(statearr_43387[(18)] = inst_43262);

return statearr_43387;
})();
var statearr_43388_44427 = state_43336__$1;
(statearr_43388_44427[(2)] = null);

(statearr_43388_44427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (18))){
var inst_43278 = (state_43336[(2)]);
var state_43336__$1 = state_43336;
var statearr_43389_44428 = state_43336__$1;
(statearr_43389_44428[(2)] = inst_43278);

(statearr_43389_44428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (37))){
var state_43336__$1 = state_43336;
var statearr_43390_44429 = state_43336__$1;
(statearr_43390_44429[(2)] = null);

(statearr_43390_44429[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43337 === (8))){
var inst_43238 = (state_43336[(8)]);
var inst_43256 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43238);
var state_43336__$1 = state_43336;
var statearr_43391_44432 = state_43336__$1;
(statearr_43391_44432[(2)] = inst_43256);

(statearr_43391_44432[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__42487__auto__ = null;
var cljs$core$async$mix_$_state_machine__42487__auto____0 = (function (){
var statearr_43392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43392[(0)] = cljs$core$async$mix_$_state_machine__42487__auto__);

(statearr_43392[(1)] = (1));

return statearr_43392;
});
var cljs$core$async$mix_$_state_machine__42487__auto____1 = (function (state_43336){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_43336);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e43393){var ex__42490__auto__ = e43393;
var statearr_43394_44434 = state_43336;
(statearr_43394_44434[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_43336[(4)]))){
var statearr_43395_44435 = state_43336;
(statearr_43395_44435[(1)] = cljs.core.first((state_43336[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44437 = state_43336;
state_43336 = G__44437;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42487__auto__ = function(state_43336){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42487__auto____1.call(this,state_43336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42487__auto____0;
cljs$core$async$mix_$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42487__auto____1;
return cljs$core$async$mix_$_state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_43396 = f__42523__auto__();
(statearr_43396[(6)] = c__42522__auto___44360);

return statearr_43396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_44444 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_44444(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_44458 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_44458(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_44466 = (function() {
var G__44467 = null;
var G__44467__1 = (function (p){
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
var G__44467__2 = (function (p,v){
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
G__44467 = function(p,v){
switch(arguments.length){
case 1:
return G__44467__1.call(this,p);
case 2:
return G__44467__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44467.cljs$core$IFn$_invoke$arity$1 = G__44467__1;
G__44467.cljs$core$IFn$_invoke$arity$2 = G__44467__2;
return G__44467;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43398 = arguments.length;
switch (G__43398) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44466(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44466(p,v);
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
var G__43401 = arguments.length;
switch (G__43401) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43399_SHARP_){
if(cljs.core.truth_((p1__43399_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43399_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43399_SHARP_.call(null,topic)))){
return p1__43399_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43399_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43402 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43403){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43403 = meta43403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43404,meta43403__$1){
var self__ = this;
var _43404__$1 = this;
return (new cljs.core.async.t_cljs$core$async43402(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43403__$1));
}));

(cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43404){
var self__ = this;
var _43404__$1 = this;
return self__.meta43403;
}));

(cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43402.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43403","meta43403",-1803388059,null)], null);
}));

(cljs.core.async.t_cljs$core$async43402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43402");

(cljs.core.async.t_cljs$core$async43402.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43402.
 */
cljs.core.async.__GT_t_cljs$core$async43402 = (function cljs$core$async$__GT_t_cljs$core$async43402(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43403){
return (new cljs.core.async.t_cljs$core$async43402(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43403));
});

}

return (new cljs.core.async.t_cljs$core$async43402(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42522__auto___44470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_43476){
var state_val_43477 = (state_43476[(1)]);
if((state_val_43477 === (7))){
var inst_43472 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
var statearr_43478_44471 = state_43476__$1;
(statearr_43478_44471[(2)] = inst_43472);

(statearr_43478_44471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (20))){
var state_43476__$1 = state_43476;
var statearr_43479_44472 = state_43476__$1;
(statearr_43479_44472[(2)] = null);

(statearr_43479_44472[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (1))){
var state_43476__$1 = state_43476;
var statearr_43480_44473 = state_43476__$1;
(statearr_43480_44473[(2)] = null);

(statearr_43480_44473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (24))){
var inst_43455 = (state_43476[(7)]);
var inst_43464 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43455);
var state_43476__$1 = state_43476;
var statearr_43481_44474 = state_43476__$1;
(statearr_43481_44474[(2)] = inst_43464);

(statearr_43481_44474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (4))){
var inst_43407 = (state_43476[(8)]);
var inst_43407__$1 = (state_43476[(2)]);
var inst_43408 = (inst_43407__$1 == null);
var state_43476__$1 = (function (){var statearr_43482 = state_43476;
(statearr_43482[(8)] = inst_43407__$1);

return statearr_43482;
})();
if(cljs.core.truth_(inst_43408)){
var statearr_43483_44475 = state_43476__$1;
(statearr_43483_44475[(1)] = (5));

} else {
var statearr_43484_44476 = state_43476__$1;
(statearr_43484_44476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (15))){
var inst_43449 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
var statearr_43485_44477 = state_43476__$1;
(statearr_43485_44477[(2)] = inst_43449);

(statearr_43485_44477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (21))){
var inst_43469 = (state_43476[(2)]);
var state_43476__$1 = (function (){var statearr_43486 = state_43476;
(statearr_43486[(9)] = inst_43469);

return statearr_43486;
})();
var statearr_43487_44478 = state_43476__$1;
(statearr_43487_44478[(2)] = null);

(statearr_43487_44478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (13))){
var inst_43431 = (state_43476[(10)]);
var inst_43433 = cljs.core.chunked_seq_QMARK_(inst_43431);
var state_43476__$1 = state_43476;
if(inst_43433){
var statearr_43488_44479 = state_43476__$1;
(statearr_43488_44479[(1)] = (16));

} else {
var statearr_43489_44480 = state_43476__$1;
(statearr_43489_44480[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (22))){
var inst_43461 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
if(cljs.core.truth_(inst_43461)){
var statearr_43490_44481 = state_43476__$1;
(statearr_43490_44481[(1)] = (23));

} else {
var statearr_43491_44482 = state_43476__$1;
(statearr_43491_44482[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (6))){
var inst_43457 = (state_43476[(11)]);
var inst_43455 = (state_43476[(7)]);
var inst_43407 = (state_43476[(8)]);
var inst_43455__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43407) : topic_fn.call(null,inst_43407));
var inst_43456 = cljs.core.deref(mults);
var inst_43457__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43456,inst_43455__$1);
var state_43476__$1 = (function (){var statearr_43492 = state_43476;
(statearr_43492[(11)] = inst_43457__$1);

(statearr_43492[(7)] = inst_43455__$1);

return statearr_43492;
})();
if(cljs.core.truth_(inst_43457__$1)){
var statearr_43493_44483 = state_43476__$1;
(statearr_43493_44483[(1)] = (19));

} else {
var statearr_43494_44484 = state_43476__$1;
(statearr_43494_44484[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (25))){
var inst_43466 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
var statearr_43495_44485 = state_43476__$1;
(statearr_43495_44485[(2)] = inst_43466);

(statearr_43495_44485[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (17))){
var inst_43431 = (state_43476[(10)]);
var inst_43440 = cljs.core.first(inst_43431);
var inst_43441 = cljs.core.async.muxch_STAR_(inst_43440);
var inst_43442 = cljs.core.async.close_BANG_(inst_43441);
var inst_43443 = cljs.core.next(inst_43431);
var inst_43417 = inst_43443;
var inst_43418 = null;
var inst_43419 = (0);
var inst_43420 = (0);
var state_43476__$1 = (function (){var statearr_43496 = state_43476;
(statearr_43496[(12)] = inst_43419);

(statearr_43496[(13)] = inst_43420);

(statearr_43496[(14)] = inst_43442);

(statearr_43496[(15)] = inst_43417);

(statearr_43496[(16)] = inst_43418);

return statearr_43496;
})();
var statearr_43497_44486 = state_43476__$1;
(statearr_43497_44486[(2)] = null);

(statearr_43497_44486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (3))){
var inst_43474 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43476__$1,inst_43474);
} else {
if((state_val_43477 === (12))){
var inst_43451 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
var statearr_43498_44487 = state_43476__$1;
(statearr_43498_44487[(2)] = inst_43451);

(statearr_43498_44487[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (2))){
var state_43476__$1 = state_43476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43476__$1,(4),ch);
} else {
if((state_val_43477 === (23))){
var state_43476__$1 = state_43476;
var statearr_43499_44488 = state_43476__$1;
(statearr_43499_44488[(2)] = null);

(statearr_43499_44488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (19))){
var inst_43457 = (state_43476[(11)]);
var inst_43407 = (state_43476[(8)]);
var inst_43459 = cljs.core.async.muxch_STAR_(inst_43457);
var state_43476__$1 = state_43476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43476__$1,(22),inst_43459,inst_43407);
} else {
if((state_val_43477 === (11))){
var inst_43431 = (state_43476[(10)]);
var inst_43417 = (state_43476[(15)]);
var inst_43431__$1 = cljs.core.seq(inst_43417);
var state_43476__$1 = (function (){var statearr_43500 = state_43476;
(statearr_43500[(10)] = inst_43431__$1);

return statearr_43500;
})();
if(inst_43431__$1){
var statearr_43501_44489 = state_43476__$1;
(statearr_43501_44489[(1)] = (13));

} else {
var statearr_43502_44490 = state_43476__$1;
(statearr_43502_44490[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (9))){
var inst_43453 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
var statearr_43503_44491 = state_43476__$1;
(statearr_43503_44491[(2)] = inst_43453);

(statearr_43503_44491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (5))){
var inst_43414 = cljs.core.deref(mults);
var inst_43415 = cljs.core.vals(inst_43414);
var inst_43416 = cljs.core.seq(inst_43415);
var inst_43417 = inst_43416;
var inst_43418 = null;
var inst_43419 = (0);
var inst_43420 = (0);
var state_43476__$1 = (function (){var statearr_43504 = state_43476;
(statearr_43504[(12)] = inst_43419);

(statearr_43504[(13)] = inst_43420);

(statearr_43504[(15)] = inst_43417);

(statearr_43504[(16)] = inst_43418);

return statearr_43504;
})();
var statearr_43505_44492 = state_43476__$1;
(statearr_43505_44492[(2)] = null);

(statearr_43505_44492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (14))){
var state_43476__$1 = state_43476;
var statearr_43509_44493 = state_43476__$1;
(statearr_43509_44493[(2)] = null);

(statearr_43509_44493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (16))){
var inst_43431 = (state_43476[(10)]);
var inst_43435 = cljs.core.chunk_first(inst_43431);
var inst_43436 = cljs.core.chunk_rest(inst_43431);
var inst_43437 = cljs.core.count(inst_43435);
var inst_43417 = inst_43436;
var inst_43418 = inst_43435;
var inst_43419 = inst_43437;
var inst_43420 = (0);
var state_43476__$1 = (function (){var statearr_43510 = state_43476;
(statearr_43510[(12)] = inst_43419);

(statearr_43510[(13)] = inst_43420);

(statearr_43510[(15)] = inst_43417);

(statearr_43510[(16)] = inst_43418);

return statearr_43510;
})();
var statearr_43511_44494 = state_43476__$1;
(statearr_43511_44494[(2)] = null);

(statearr_43511_44494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (10))){
var inst_43419 = (state_43476[(12)]);
var inst_43420 = (state_43476[(13)]);
var inst_43417 = (state_43476[(15)]);
var inst_43418 = (state_43476[(16)]);
var inst_43425 = cljs.core._nth(inst_43418,inst_43420);
var inst_43426 = cljs.core.async.muxch_STAR_(inst_43425);
var inst_43427 = cljs.core.async.close_BANG_(inst_43426);
var inst_43428 = (inst_43420 + (1));
var tmp43506 = inst_43419;
var tmp43507 = inst_43417;
var tmp43508 = inst_43418;
var inst_43417__$1 = tmp43507;
var inst_43418__$1 = tmp43508;
var inst_43419__$1 = tmp43506;
var inst_43420__$1 = inst_43428;
var state_43476__$1 = (function (){var statearr_43512 = state_43476;
(statearr_43512[(12)] = inst_43419__$1);

(statearr_43512[(13)] = inst_43420__$1);

(statearr_43512[(17)] = inst_43427);

(statearr_43512[(15)] = inst_43417__$1);

(statearr_43512[(16)] = inst_43418__$1);

return statearr_43512;
})();
var statearr_43513_44495 = state_43476__$1;
(statearr_43513_44495[(2)] = null);

(statearr_43513_44495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (18))){
var inst_43446 = (state_43476[(2)]);
var state_43476__$1 = state_43476;
var statearr_43514_44496 = state_43476__$1;
(statearr_43514_44496[(2)] = inst_43446);

(statearr_43514_44496[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43477 === (8))){
var inst_43419 = (state_43476[(12)]);
var inst_43420 = (state_43476[(13)]);
var inst_43422 = (inst_43420 < inst_43419);
var inst_43423 = inst_43422;
var state_43476__$1 = state_43476;
if(cljs.core.truth_(inst_43423)){
var statearr_43515_44497 = state_43476__$1;
(statearr_43515_44497[(1)] = (10));

} else {
var statearr_43516_44498 = state_43476__$1;
(statearr_43516_44498[(1)] = (11));

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
var cljs$core$async$state_machine__42487__auto__ = null;
var cljs$core$async$state_machine__42487__auto____0 = (function (){
var statearr_43517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43517[(0)] = cljs$core$async$state_machine__42487__auto__);

(statearr_43517[(1)] = (1));

return statearr_43517;
});
var cljs$core$async$state_machine__42487__auto____1 = (function (state_43476){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_43476);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e43518){var ex__42490__auto__ = e43518;
var statearr_43519_44499 = state_43476;
(statearr_43519_44499[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_43476[(4)]))){
var statearr_43520_44500 = state_43476;
(statearr_43520_44500[(1)] = cljs.core.first((state_43476[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44501 = state_43476;
state_43476 = G__44501;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$state_machine__42487__auto__ = function(state_43476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42487__auto____1.call(this,state_43476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42487__auto____0;
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42487__auto____1;
return cljs$core$async$state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_43521 = f__42523__auto__();
(statearr_43521[(6)] = c__42522__auto___44470);

return statearr_43521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
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
var G__43523 = arguments.length;
switch (G__43523) {
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
var G__43525 = arguments.length;
switch (G__43525) {
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
var G__43527 = arguments.length;
switch (G__43527) {
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
var c__42522__auto___44505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_43570){
var state_val_43571 = (state_43570[(1)]);
if((state_val_43571 === (7))){
var state_43570__$1 = state_43570;
var statearr_43572_44506 = state_43570__$1;
(statearr_43572_44506[(2)] = null);

(statearr_43572_44506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43571 === (1))){
var state_43570__$1 = state_43570;
var statearr_43573_44507 = state_43570__$1;
(statearr_43573_44507[(2)] = null);

(statearr_43573_44507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43571 === (4))){
var inst_43530 = (state_43570[(7)]);
var inst_43531 = (state_43570[(8)]);
var inst_43533 = (inst_43531 < inst_43530);
var state_43570__$1 = state_43570;
if(cljs.core.truth_(inst_43533)){
var statearr_43574_44508 = state_43570__$1;
(statearr_43574_44508[(1)] = (6));

} else {
var statearr_43575_44509 = state_43570__$1;
(statearr_43575_44509[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43571 === (15))){
var inst_43556 = (state_43570[(9)]);
var inst_43561 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43556);
var state_43570__$1 = state_43570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43570__$1,(17),out,inst_43561);
} else {
if((state_val_43571 === (13))){
var inst_43556 = (state_43570[(9)]);
var inst_43556__$1 = (state_43570[(2)]);
var inst_43557 = cljs.core.some(cljs.core.nil_QMARK_,inst_43556__$1);
var state_43570__$1 = (function (){var statearr_43576 = state_43570;
(statearr_43576[(9)] = inst_43556__$1);

return statearr_43576;
})();
if(cljs.core.truth_(inst_43557)){
var statearr_43577_44510 = state_43570__$1;
(statearr_43577_44510[(1)] = (14));

} else {
var statearr_43578_44511 = state_43570__$1;
(statearr_43578_44511[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43571 === (6))){
var state_43570__$1 = state_43570;
var statearr_43579_44512 = state_43570__$1;
(statearr_43579_44512[(2)] = null);

(statearr_43579_44512[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43571 === (17))){
var inst_43563 = (state_43570[(2)]);
var state_43570__$1 = (function (){var statearr_43581 = state_43570;
(statearr_43581[(10)] = inst_43563);

return statearr_43581;
})();
var statearr_43582_44513 = state_43570__$1;
(statearr_43582_44513[(2)] = null);

(statearr_43582_44513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43571 === (3))){
var inst_43568 = (state_43570[(2)]);
var state_43570__$1 = state_43570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43570__$1,inst_43568);
} else {
if((state_val_43571 === (12))){
var _ = (function (){var statearr_43583 = state_43570;
(statearr_43583[(4)] = cljs.core.rest((state_43570[(4)])));

return statearr_43583;
})();
var state_43570__$1 = state_43570;
var ex43580 = (state_43570__$1[(2)]);
var statearr_43584_44514 = state_43570__$1;
(statearr_43584_44514[(5)] = ex43580);


if((ex43580 instanceof Object)){
var statearr_43585_44515 = state_43570__$1;
(statearr_43585_44515[(1)] = (11));

(statearr_43585_44515[(5)] = null);

} else {
throw ex43580;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43571 === (2))){
var inst_43529 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43530 = cnt;
var inst_43531 = (0);
var state_43570__$1 = (function (){var statearr_43586 = state_43570;
(statearr_43586[(7)] = inst_43530);

(statearr_43586[(11)] = inst_43529);

(statearr_43586[(8)] = inst_43531);

return statearr_43586;
})();
var statearr_43587_44517 = state_43570__$1;
(statearr_43587_44517[(2)] = null);

(statearr_43587_44517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43571 === (11))){
var inst_43535 = (state_43570[(2)]);
var inst_43536 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43570__$1 = (function (){var statearr_43588 = state_43570;
(statearr_43588[(12)] = inst_43535);

return statearr_43588;
})();
var statearr_43589_44519 = state_43570__$1;
(statearr_43589_44519[(2)] = inst_43536);

(statearr_43589_44519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43571 === (9))){
var inst_43531 = (state_43570[(8)]);
var _ = (function (){var statearr_43590 = state_43570;
(statearr_43590[(4)] = cljs.core.cons((12),(state_43570[(4)])));

return statearr_43590;
})();
var inst_43542 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43531) : chs__$1.call(null,inst_43531));
var inst_43543 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43531) : done.call(null,inst_43531));
var inst_43544 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43542,inst_43543);
var ___$1 = (function (){var statearr_43591 = state_43570;
(statearr_43591[(4)] = cljs.core.rest((state_43570[(4)])));

return statearr_43591;
})();
var state_43570__$1 = state_43570;
var statearr_43592_44520 = state_43570__$1;
(statearr_43592_44520[(2)] = inst_43544);

(statearr_43592_44520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43571 === (5))){
var inst_43554 = (state_43570[(2)]);
var state_43570__$1 = (function (){var statearr_43593 = state_43570;
(statearr_43593[(13)] = inst_43554);

return statearr_43593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43570__$1,(13),dchan);
} else {
if((state_val_43571 === (14))){
var inst_43559 = cljs.core.async.close_BANG_(out);
var state_43570__$1 = state_43570;
var statearr_43594_44521 = state_43570__$1;
(statearr_43594_44521[(2)] = inst_43559);

(statearr_43594_44521[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43571 === (16))){
var inst_43566 = (state_43570[(2)]);
var state_43570__$1 = state_43570;
var statearr_43595_44522 = state_43570__$1;
(statearr_43595_44522[(2)] = inst_43566);

(statearr_43595_44522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43571 === (10))){
var inst_43531 = (state_43570[(8)]);
var inst_43547 = (state_43570[(2)]);
var inst_43548 = (inst_43531 + (1));
var inst_43531__$1 = inst_43548;
var state_43570__$1 = (function (){var statearr_43596 = state_43570;
(statearr_43596[(14)] = inst_43547);

(statearr_43596[(8)] = inst_43531__$1);

return statearr_43596;
})();
var statearr_43597_44523 = state_43570__$1;
(statearr_43597_44523[(2)] = null);

(statearr_43597_44523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43571 === (8))){
var inst_43552 = (state_43570[(2)]);
var state_43570__$1 = state_43570;
var statearr_43598_44525 = state_43570__$1;
(statearr_43598_44525[(2)] = inst_43552);

(statearr_43598_44525[(1)] = (5));


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
var cljs$core$async$state_machine__42487__auto__ = null;
var cljs$core$async$state_machine__42487__auto____0 = (function (){
var statearr_43599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43599[(0)] = cljs$core$async$state_machine__42487__auto__);

(statearr_43599[(1)] = (1));

return statearr_43599;
});
var cljs$core$async$state_machine__42487__auto____1 = (function (state_43570){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_43570);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e43600){var ex__42490__auto__ = e43600;
var statearr_43601_44527 = state_43570;
(statearr_43601_44527[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_43570[(4)]))){
var statearr_43602_44528 = state_43570;
(statearr_43602_44528[(1)] = cljs.core.first((state_43570[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44529 = state_43570;
state_43570 = G__44529;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$state_machine__42487__auto__ = function(state_43570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42487__auto____1.call(this,state_43570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42487__auto____0;
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42487__auto____1;
return cljs$core$async$state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_43603 = f__42523__auto__();
(statearr_43603[(6)] = c__42522__auto___44505);

return statearr_43603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
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
var G__43606 = arguments.length;
switch (G__43606) {
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
var c__42522__auto___44531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_43638){
var state_val_43639 = (state_43638[(1)]);
if((state_val_43639 === (7))){
var inst_43617 = (state_43638[(7)]);
var inst_43618 = (state_43638[(8)]);
var inst_43617__$1 = (state_43638[(2)]);
var inst_43618__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43617__$1,(0),null);
var inst_43619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43617__$1,(1),null);
var inst_43620 = (inst_43618__$1 == null);
var state_43638__$1 = (function (){var statearr_43640 = state_43638;
(statearr_43640[(7)] = inst_43617__$1);

(statearr_43640[(9)] = inst_43619);

(statearr_43640[(8)] = inst_43618__$1);

return statearr_43640;
})();
if(cljs.core.truth_(inst_43620)){
var statearr_43641_44534 = state_43638__$1;
(statearr_43641_44534[(1)] = (8));

} else {
var statearr_43642_44535 = state_43638__$1;
(statearr_43642_44535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43639 === (1))){
var inst_43607 = cljs.core.vec(chs);
var inst_43608 = inst_43607;
var state_43638__$1 = (function (){var statearr_43643 = state_43638;
(statearr_43643[(10)] = inst_43608);

return statearr_43643;
})();
var statearr_43644_44536 = state_43638__$1;
(statearr_43644_44536[(2)] = null);

(statearr_43644_44536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43639 === (4))){
var inst_43608 = (state_43638[(10)]);
var state_43638__$1 = state_43638;
return cljs.core.async.ioc_alts_BANG_(state_43638__$1,(7),inst_43608);
} else {
if((state_val_43639 === (6))){
var inst_43634 = (state_43638[(2)]);
var state_43638__$1 = state_43638;
var statearr_43645_44537 = state_43638__$1;
(statearr_43645_44537[(2)] = inst_43634);

(statearr_43645_44537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43639 === (3))){
var inst_43636 = (state_43638[(2)]);
var state_43638__$1 = state_43638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43638__$1,inst_43636);
} else {
if((state_val_43639 === (2))){
var inst_43608 = (state_43638[(10)]);
var inst_43610 = cljs.core.count(inst_43608);
var inst_43611 = (inst_43610 > (0));
var state_43638__$1 = state_43638;
if(cljs.core.truth_(inst_43611)){
var statearr_43647_44538 = state_43638__$1;
(statearr_43647_44538[(1)] = (4));

} else {
var statearr_43648_44539 = state_43638__$1;
(statearr_43648_44539[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43639 === (11))){
var inst_43608 = (state_43638[(10)]);
var inst_43627 = (state_43638[(2)]);
var tmp43646 = inst_43608;
var inst_43608__$1 = tmp43646;
var state_43638__$1 = (function (){var statearr_43649 = state_43638;
(statearr_43649[(11)] = inst_43627);

(statearr_43649[(10)] = inst_43608__$1);

return statearr_43649;
})();
var statearr_43650_44542 = state_43638__$1;
(statearr_43650_44542[(2)] = null);

(statearr_43650_44542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43639 === (9))){
var inst_43618 = (state_43638[(8)]);
var state_43638__$1 = state_43638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43638__$1,(11),out,inst_43618);
} else {
if((state_val_43639 === (5))){
var inst_43632 = cljs.core.async.close_BANG_(out);
var state_43638__$1 = state_43638;
var statearr_43651_44543 = state_43638__$1;
(statearr_43651_44543[(2)] = inst_43632);

(statearr_43651_44543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43639 === (10))){
var inst_43630 = (state_43638[(2)]);
var state_43638__$1 = state_43638;
var statearr_43652_44544 = state_43638__$1;
(statearr_43652_44544[(2)] = inst_43630);

(statearr_43652_44544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43639 === (8))){
var inst_43617 = (state_43638[(7)]);
var inst_43619 = (state_43638[(9)]);
var inst_43618 = (state_43638[(8)]);
var inst_43608 = (state_43638[(10)]);
var inst_43622 = (function (){var cs = inst_43608;
var vec__43613 = inst_43617;
var v = inst_43618;
var c = inst_43619;
return (function (p1__43604_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43604_SHARP_);
});
})();
var inst_43623 = cljs.core.filterv(inst_43622,inst_43608);
var inst_43608__$1 = inst_43623;
var state_43638__$1 = (function (){var statearr_43653 = state_43638;
(statearr_43653[(10)] = inst_43608__$1);

return statearr_43653;
})();
var statearr_43654_44547 = state_43638__$1;
(statearr_43654_44547[(2)] = null);

(statearr_43654_44547[(1)] = (2));


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
var cljs$core$async$state_machine__42487__auto__ = null;
var cljs$core$async$state_machine__42487__auto____0 = (function (){
var statearr_43655 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43655[(0)] = cljs$core$async$state_machine__42487__auto__);

(statearr_43655[(1)] = (1));

return statearr_43655;
});
var cljs$core$async$state_machine__42487__auto____1 = (function (state_43638){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_43638);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e43656){var ex__42490__auto__ = e43656;
var statearr_43657_44548 = state_43638;
(statearr_43657_44548[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_43638[(4)]))){
var statearr_43658_44549 = state_43638;
(statearr_43658_44549[(1)] = cljs.core.first((state_43638[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44550 = state_43638;
state_43638 = G__44550;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$state_machine__42487__auto__ = function(state_43638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42487__auto____1.call(this,state_43638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42487__auto____0;
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42487__auto____1;
return cljs$core$async$state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_43659 = f__42523__auto__();
(statearr_43659[(6)] = c__42522__auto___44531);

return statearr_43659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
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
var G__43661 = arguments.length;
switch (G__43661) {
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
var c__42522__auto___44552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_43685){
var state_val_43686 = (state_43685[(1)]);
if((state_val_43686 === (7))){
var inst_43667 = (state_43685[(7)]);
var inst_43667__$1 = (state_43685[(2)]);
var inst_43668 = (inst_43667__$1 == null);
var inst_43669 = cljs.core.not(inst_43668);
var state_43685__$1 = (function (){var statearr_43687 = state_43685;
(statearr_43687[(7)] = inst_43667__$1);

return statearr_43687;
})();
if(inst_43669){
var statearr_43688_44553 = state_43685__$1;
(statearr_43688_44553[(1)] = (8));

} else {
var statearr_43689_44554 = state_43685__$1;
(statearr_43689_44554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43686 === (1))){
var inst_43662 = (0);
var state_43685__$1 = (function (){var statearr_43690 = state_43685;
(statearr_43690[(8)] = inst_43662);

return statearr_43690;
})();
var statearr_43691_44555 = state_43685__$1;
(statearr_43691_44555[(2)] = null);

(statearr_43691_44555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43686 === (4))){
var state_43685__$1 = state_43685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43685__$1,(7),ch);
} else {
if((state_val_43686 === (6))){
var inst_43680 = (state_43685[(2)]);
var state_43685__$1 = state_43685;
var statearr_43692_44556 = state_43685__$1;
(statearr_43692_44556[(2)] = inst_43680);

(statearr_43692_44556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43686 === (3))){
var inst_43682 = (state_43685[(2)]);
var inst_43683 = cljs.core.async.close_BANG_(out);
var state_43685__$1 = (function (){var statearr_43693 = state_43685;
(statearr_43693[(9)] = inst_43682);

return statearr_43693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43685__$1,inst_43683);
} else {
if((state_val_43686 === (2))){
var inst_43662 = (state_43685[(8)]);
var inst_43664 = (inst_43662 < n);
var state_43685__$1 = state_43685;
if(cljs.core.truth_(inst_43664)){
var statearr_43694_44557 = state_43685__$1;
(statearr_43694_44557[(1)] = (4));

} else {
var statearr_43695_44558 = state_43685__$1;
(statearr_43695_44558[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43686 === (11))){
var inst_43662 = (state_43685[(8)]);
var inst_43672 = (state_43685[(2)]);
var inst_43673 = (inst_43662 + (1));
var inst_43662__$1 = inst_43673;
var state_43685__$1 = (function (){var statearr_43696 = state_43685;
(statearr_43696[(10)] = inst_43672);

(statearr_43696[(8)] = inst_43662__$1);

return statearr_43696;
})();
var statearr_43697_44559 = state_43685__$1;
(statearr_43697_44559[(2)] = null);

(statearr_43697_44559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43686 === (9))){
var state_43685__$1 = state_43685;
var statearr_43698_44560 = state_43685__$1;
(statearr_43698_44560[(2)] = null);

(statearr_43698_44560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43686 === (5))){
var state_43685__$1 = state_43685;
var statearr_43699_44561 = state_43685__$1;
(statearr_43699_44561[(2)] = null);

(statearr_43699_44561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43686 === (10))){
var inst_43677 = (state_43685[(2)]);
var state_43685__$1 = state_43685;
var statearr_43700_44562 = state_43685__$1;
(statearr_43700_44562[(2)] = inst_43677);

(statearr_43700_44562[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43686 === (8))){
var inst_43667 = (state_43685[(7)]);
var state_43685__$1 = state_43685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43685__$1,(11),out,inst_43667);
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
var cljs$core$async$state_machine__42487__auto__ = null;
var cljs$core$async$state_machine__42487__auto____0 = (function (){
var statearr_43701 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43701[(0)] = cljs$core$async$state_machine__42487__auto__);

(statearr_43701[(1)] = (1));

return statearr_43701;
});
var cljs$core$async$state_machine__42487__auto____1 = (function (state_43685){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_43685);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e43702){var ex__42490__auto__ = e43702;
var statearr_43703_44563 = state_43685;
(statearr_43703_44563[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_43685[(4)]))){
var statearr_43704_44564 = state_43685;
(statearr_43704_44564[(1)] = cljs.core.first((state_43685[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44565 = state_43685;
state_43685 = G__44565;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$state_machine__42487__auto__ = function(state_43685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42487__auto____1.call(this,state_43685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42487__auto____0;
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42487__auto____1;
return cljs$core$async$state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_43705 = f__42523__auto__();
(statearr_43705[(6)] = c__42522__auto___44552);

return statearr_43705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43707 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43707 = (function (f,ch,meta43708){
this.f = f;
this.ch = ch;
this.meta43708 = meta43708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43709,meta43708__$1){
var self__ = this;
var _43709__$1 = this;
return (new cljs.core.async.t_cljs$core$async43707(self__.f,self__.ch,meta43708__$1));
}));

(cljs.core.async.t_cljs$core$async43707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43709){
var self__ = this;
var _43709__$1 = this;
return self__.meta43708;
}));

(cljs.core.async.t_cljs$core$async43707.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43707.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43707.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43707.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43707.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43710 = (function (f,ch,meta43708,_,fn1,meta43711){
this.f = f;
this.ch = ch;
this.meta43708 = meta43708;
this._ = _;
this.fn1 = fn1;
this.meta43711 = meta43711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43712,meta43711__$1){
var self__ = this;
var _43712__$1 = this;
return (new cljs.core.async.t_cljs$core$async43710(self__.f,self__.ch,self__.meta43708,self__._,self__.fn1,meta43711__$1));
}));

(cljs.core.async.t_cljs$core$async43710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43712){
var self__ = this;
var _43712__$1 = this;
return self__.meta43711;
}));

(cljs.core.async.t_cljs$core$async43710.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43710.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__43706_SHARP_){
var G__43713 = (((p1__43706_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43706_SHARP_) : self__.f.call(null,p1__43706_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43713) : f1.call(null,G__43713));
});
}));

(cljs.core.async.t_cljs$core$async43710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43708","meta43708",1148836741,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43707","cljs.core.async/t_cljs$core$async43707",-1905106691,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43711","meta43711",-1056156489,null)], null);
}));

(cljs.core.async.t_cljs$core$async43710.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43710");

(cljs.core.async.t_cljs$core$async43710.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43710");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43710.
 */
cljs.core.async.__GT_t_cljs$core$async43710 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43710(f__$1,ch__$1,meta43708__$1,___$2,fn1__$1,meta43711){
return (new cljs.core.async.t_cljs$core$async43710(f__$1,ch__$1,meta43708__$1,___$2,fn1__$1,meta43711));
});

}

return (new cljs.core.async.t_cljs$core$async43710(self__.f,self__.ch,self__.meta43708,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43714 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43714) : self__.f.call(null,G__43714));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async43707.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43707.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43708","meta43708",1148836741,null)], null);
}));

(cljs.core.async.t_cljs$core$async43707.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43707");

(cljs.core.async.t_cljs$core$async43707.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43707");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43707.
 */
cljs.core.async.__GT_t_cljs$core$async43707 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43707(f__$1,ch__$1,meta43708){
return (new cljs.core.async.t_cljs$core$async43707(f__$1,ch__$1,meta43708));
});

}

return (new cljs.core.async.t_cljs$core$async43707(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
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
cljs.core.async.t_cljs$core$async43715 = (function (f,ch,meta43716){
this.f = f;
this.ch = ch;
this.meta43716 = meta43716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43717,meta43716__$1){
var self__ = this;
var _43717__$1 = this;
return (new cljs.core.async.t_cljs$core$async43715(self__.f,self__.ch,meta43716__$1));
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
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async43715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43716","meta43716",1652975351,null)], null);
}));

(cljs.core.async.t_cljs$core$async43715.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43715");

(cljs.core.async.t_cljs$core$async43715.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43715");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43715.
 */
cljs.core.async.__GT_t_cljs$core$async43715 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43715(f__$1,ch__$1,meta43716){
return (new cljs.core.async.t_cljs$core$async43715(f__$1,ch__$1,meta43716));
});

}

return (new cljs.core.async.t_cljs$core$async43715(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43718 = (function (p,ch,meta43719){
this.p = p;
this.ch = ch;
this.meta43719 = meta43719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43720,meta43719__$1){
var self__ = this;
var _43720__$1 = this;
return (new cljs.core.async.t_cljs$core$async43718(self__.p,self__.ch,meta43719__$1));
}));

(cljs.core.async.t_cljs$core$async43718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43720){
var self__ = this;
var _43720__$1 = this;
return self__.meta43719;
}));

(cljs.core.async.t_cljs$core$async43718.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43718.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43718.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43718.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43718.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43718.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43718.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43719","meta43719",996161558,null)], null);
}));

(cljs.core.async.t_cljs$core$async43718.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43718");

(cljs.core.async.t_cljs$core$async43718.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43718");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43718.
 */
cljs.core.async.__GT_t_cljs$core$async43718 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43718(p__$1,ch__$1,meta43719){
return (new cljs.core.async.t_cljs$core$async43718(p__$1,ch__$1,meta43719));
});

}

return (new cljs.core.async.t_cljs$core$async43718(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43722 = arguments.length;
switch (G__43722) {
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
var c__42522__auto___44576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_43743){
var state_val_43744 = (state_43743[(1)]);
if((state_val_43744 === (7))){
var inst_43739 = (state_43743[(2)]);
var state_43743__$1 = state_43743;
var statearr_43745_44577 = state_43743__$1;
(statearr_43745_44577[(2)] = inst_43739);

(statearr_43745_44577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (1))){
var state_43743__$1 = state_43743;
var statearr_43746_44578 = state_43743__$1;
(statearr_43746_44578[(2)] = null);

(statearr_43746_44578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (4))){
var inst_43725 = (state_43743[(7)]);
var inst_43725__$1 = (state_43743[(2)]);
var inst_43726 = (inst_43725__$1 == null);
var state_43743__$1 = (function (){var statearr_43747 = state_43743;
(statearr_43747[(7)] = inst_43725__$1);

return statearr_43747;
})();
if(cljs.core.truth_(inst_43726)){
var statearr_43748_44579 = state_43743__$1;
(statearr_43748_44579[(1)] = (5));

} else {
var statearr_43749_44580 = state_43743__$1;
(statearr_43749_44580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (6))){
var inst_43725 = (state_43743[(7)]);
var inst_43730 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43725) : p.call(null,inst_43725));
var state_43743__$1 = state_43743;
if(cljs.core.truth_(inst_43730)){
var statearr_43750_44581 = state_43743__$1;
(statearr_43750_44581[(1)] = (8));

} else {
var statearr_43751_44582 = state_43743__$1;
(statearr_43751_44582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (3))){
var inst_43741 = (state_43743[(2)]);
var state_43743__$1 = state_43743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43743__$1,inst_43741);
} else {
if((state_val_43744 === (2))){
var state_43743__$1 = state_43743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43743__$1,(4),ch);
} else {
if((state_val_43744 === (11))){
var inst_43733 = (state_43743[(2)]);
var state_43743__$1 = state_43743;
var statearr_43752_44583 = state_43743__$1;
(statearr_43752_44583[(2)] = inst_43733);

(statearr_43752_44583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (9))){
var state_43743__$1 = state_43743;
var statearr_43753_44584 = state_43743__$1;
(statearr_43753_44584[(2)] = null);

(statearr_43753_44584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (5))){
var inst_43728 = cljs.core.async.close_BANG_(out);
var state_43743__$1 = state_43743;
var statearr_43754_44585 = state_43743__$1;
(statearr_43754_44585[(2)] = inst_43728);

(statearr_43754_44585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (10))){
var inst_43736 = (state_43743[(2)]);
var state_43743__$1 = (function (){var statearr_43755 = state_43743;
(statearr_43755[(8)] = inst_43736);

return statearr_43755;
})();
var statearr_43756_44586 = state_43743__$1;
(statearr_43756_44586[(2)] = null);

(statearr_43756_44586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43744 === (8))){
var inst_43725 = (state_43743[(7)]);
var state_43743__$1 = state_43743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43743__$1,(11),out,inst_43725);
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
var cljs$core$async$state_machine__42487__auto__ = null;
var cljs$core$async$state_machine__42487__auto____0 = (function (){
var statearr_43757 = [null,null,null,null,null,null,null,null,null];
(statearr_43757[(0)] = cljs$core$async$state_machine__42487__auto__);

(statearr_43757[(1)] = (1));

return statearr_43757;
});
var cljs$core$async$state_machine__42487__auto____1 = (function (state_43743){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_43743);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e43758){var ex__42490__auto__ = e43758;
var statearr_43759_44587 = state_43743;
(statearr_43759_44587[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_43743[(4)]))){
var statearr_43760_44588 = state_43743;
(statearr_43760_44588[(1)] = cljs.core.first((state_43743[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44589 = state_43743;
state_43743 = G__44589;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$state_machine__42487__auto__ = function(state_43743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42487__auto____1.call(this,state_43743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42487__auto____0;
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42487__auto____1;
return cljs$core$async$state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_43761 = f__42523__auto__();
(statearr_43761[(6)] = c__42522__auto___44576);

return statearr_43761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43763 = arguments.length;
switch (G__43763) {
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
var c__42522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_43825){
var state_val_43826 = (state_43825[(1)]);
if((state_val_43826 === (7))){
var inst_43821 = (state_43825[(2)]);
var state_43825__$1 = state_43825;
var statearr_43827_44591 = state_43825__$1;
(statearr_43827_44591[(2)] = inst_43821);

(statearr_43827_44591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (20))){
var inst_43791 = (state_43825[(7)]);
var inst_43802 = (state_43825[(2)]);
var inst_43803 = cljs.core.next(inst_43791);
var inst_43777 = inst_43803;
var inst_43778 = null;
var inst_43779 = (0);
var inst_43780 = (0);
var state_43825__$1 = (function (){var statearr_43828 = state_43825;
(statearr_43828[(8)] = inst_43778);

(statearr_43828[(9)] = inst_43777);

(statearr_43828[(10)] = inst_43779);

(statearr_43828[(11)] = inst_43802);

(statearr_43828[(12)] = inst_43780);

return statearr_43828;
})();
var statearr_43829_44592 = state_43825__$1;
(statearr_43829_44592[(2)] = null);

(statearr_43829_44592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (1))){
var state_43825__$1 = state_43825;
var statearr_43830_44593 = state_43825__$1;
(statearr_43830_44593[(2)] = null);

(statearr_43830_44593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (4))){
var inst_43766 = (state_43825[(13)]);
var inst_43766__$1 = (state_43825[(2)]);
var inst_43767 = (inst_43766__$1 == null);
var state_43825__$1 = (function (){var statearr_43831 = state_43825;
(statearr_43831[(13)] = inst_43766__$1);

return statearr_43831;
})();
if(cljs.core.truth_(inst_43767)){
var statearr_43832_44594 = state_43825__$1;
(statearr_43832_44594[(1)] = (5));

} else {
var statearr_43833_44595 = state_43825__$1;
(statearr_43833_44595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (15))){
var state_43825__$1 = state_43825;
var statearr_43837_44596 = state_43825__$1;
(statearr_43837_44596[(2)] = null);

(statearr_43837_44596[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (21))){
var state_43825__$1 = state_43825;
var statearr_43838_44597 = state_43825__$1;
(statearr_43838_44597[(2)] = null);

(statearr_43838_44597[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (13))){
var inst_43778 = (state_43825[(8)]);
var inst_43777 = (state_43825[(9)]);
var inst_43779 = (state_43825[(10)]);
var inst_43780 = (state_43825[(12)]);
var inst_43787 = (state_43825[(2)]);
var inst_43788 = (inst_43780 + (1));
var tmp43834 = inst_43778;
var tmp43835 = inst_43777;
var tmp43836 = inst_43779;
var inst_43777__$1 = tmp43835;
var inst_43778__$1 = tmp43834;
var inst_43779__$1 = tmp43836;
var inst_43780__$1 = inst_43788;
var state_43825__$1 = (function (){var statearr_43839 = state_43825;
(statearr_43839[(8)] = inst_43778__$1);

(statearr_43839[(9)] = inst_43777__$1);

(statearr_43839[(10)] = inst_43779__$1);

(statearr_43839[(14)] = inst_43787);

(statearr_43839[(12)] = inst_43780__$1);

return statearr_43839;
})();
var statearr_43840_44598 = state_43825__$1;
(statearr_43840_44598[(2)] = null);

(statearr_43840_44598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (22))){
var state_43825__$1 = state_43825;
var statearr_43841_44599 = state_43825__$1;
(statearr_43841_44599[(2)] = null);

(statearr_43841_44599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (6))){
var inst_43766 = (state_43825[(13)]);
var inst_43775 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43766) : f.call(null,inst_43766));
var inst_43776 = cljs.core.seq(inst_43775);
var inst_43777 = inst_43776;
var inst_43778 = null;
var inst_43779 = (0);
var inst_43780 = (0);
var state_43825__$1 = (function (){var statearr_43842 = state_43825;
(statearr_43842[(8)] = inst_43778);

(statearr_43842[(9)] = inst_43777);

(statearr_43842[(10)] = inst_43779);

(statearr_43842[(12)] = inst_43780);

return statearr_43842;
})();
var statearr_43843_44600 = state_43825__$1;
(statearr_43843_44600[(2)] = null);

(statearr_43843_44600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (17))){
var inst_43791 = (state_43825[(7)]);
var inst_43795 = cljs.core.chunk_first(inst_43791);
var inst_43796 = cljs.core.chunk_rest(inst_43791);
var inst_43797 = cljs.core.count(inst_43795);
var inst_43777 = inst_43796;
var inst_43778 = inst_43795;
var inst_43779 = inst_43797;
var inst_43780 = (0);
var state_43825__$1 = (function (){var statearr_43844 = state_43825;
(statearr_43844[(8)] = inst_43778);

(statearr_43844[(9)] = inst_43777);

(statearr_43844[(10)] = inst_43779);

(statearr_43844[(12)] = inst_43780);

return statearr_43844;
})();
var statearr_43845_44601 = state_43825__$1;
(statearr_43845_44601[(2)] = null);

(statearr_43845_44601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (3))){
var inst_43823 = (state_43825[(2)]);
var state_43825__$1 = state_43825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43825__$1,inst_43823);
} else {
if((state_val_43826 === (12))){
var inst_43811 = (state_43825[(2)]);
var state_43825__$1 = state_43825;
var statearr_43846_44602 = state_43825__$1;
(statearr_43846_44602[(2)] = inst_43811);

(statearr_43846_44602[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (2))){
var state_43825__$1 = state_43825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43825__$1,(4),in$);
} else {
if((state_val_43826 === (23))){
var inst_43819 = (state_43825[(2)]);
var state_43825__$1 = state_43825;
var statearr_43847_44603 = state_43825__$1;
(statearr_43847_44603[(2)] = inst_43819);

(statearr_43847_44603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (19))){
var inst_43806 = (state_43825[(2)]);
var state_43825__$1 = state_43825;
var statearr_43848_44604 = state_43825__$1;
(statearr_43848_44604[(2)] = inst_43806);

(statearr_43848_44604[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (11))){
var inst_43777 = (state_43825[(9)]);
var inst_43791 = (state_43825[(7)]);
var inst_43791__$1 = cljs.core.seq(inst_43777);
var state_43825__$1 = (function (){var statearr_43849 = state_43825;
(statearr_43849[(7)] = inst_43791__$1);

return statearr_43849;
})();
if(inst_43791__$1){
var statearr_43850_44605 = state_43825__$1;
(statearr_43850_44605[(1)] = (14));

} else {
var statearr_43851_44606 = state_43825__$1;
(statearr_43851_44606[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (9))){
var inst_43813 = (state_43825[(2)]);
var inst_43814 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43825__$1 = (function (){var statearr_43852 = state_43825;
(statearr_43852[(15)] = inst_43813);

return statearr_43852;
})();
if(cljs.core.truth_(inst_43814)){
var statearr_43853_44607 = state_43825__$1;
(statearr_43853_44607[(1)] = (21));

} else {
var statearr_43854_44608 = state_43825__$1;
(statearr_43854_44608[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (5))){
var inst_43769 = cljs.core.async.close_BANG_(out);
var state_43825__$1 = state_43825;
var statearr_43855_44609 = state_43825__$1;
(statearr_43855_44609[(2)] = inst_43769);

(statearr_43855_44609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (14))){
var inst_43791 = (state_43825[(7)]);
var inst_43793 = cljs.core.chunked_seq_QMARK_(inst_43791);
var state_43825__$1 = state_43825;
if(inst_43793){
var statearr_43856_44610 = state_43825__$1;
(statearr_43856_44610[(1)] = (17));

} else {
var statearr_43857_44611 = state_43825__$1;
(statearr_43857_44611[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (16))){
var inst_43809 = (state_43825[(2)]);
var state_43825__$1 = state_43825;
var statearr_43858_44612 = state_43825__$1;
(statearr_43858_44612[(2)] = inst_43809);

(statearr_43858_44612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43826 === (10))){
var inst_43778 = (state_43825[(8)]);
var inst_43780 = (state_43825[(12)]);
var inst_43785 = cljs.core._nth(inst_43778,inst_43780);
var state_43825__$1 = state_43825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43825__$1,(13),out,inst_43785);
} else {
if((state_val_43826 === (18))){
var inst_43791 = (state_43825[(7)]);
var inst_43800 = cljs.core.first(inst_43791);
var state_43825__$1 = state_43825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43825__$1,(20),out,inst_43800);
} else {
if((state_val_43826 === (8))){
var inst_43779 = (state_43825[(10)]);
var inst_43780 = (state_43825[(12)]);
var inst_43782 = (inst_43780 < inst_43779);
var inst_43783 = inst_43782;
var state_43825__$1 = state_43825;
if(cljs.core.truth_(inst_43783)){
var statearr_43859_44613 = state_43825__$1;
(statearr_43859_44613[(1)] = (10));

} else {
var statearr_43860_44614 = state_43825__$1;
(statearr_43860_44614[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__42487__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42487__auto____0 = (function (){
var statearr_43861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43861[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42487__auto__);

(statearr_43861[(1)] = (1));

return statearr_43861;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42487__auto____1 = (function (state_43825){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_43825);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e43862){var ex__42490__auto__ = e43862;
var statearr_43863_44615 = state_43825;
(statearr_43863_44615[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_43825[(4)]))){
var statearr_43864_44616 = state_43825;
(statearr_43864_44616[(1)] = cljs.core.first((state_43825[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44617 = state_43825;
state_43825 = G__44617;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42487__auto__ = function(state_43825){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42487__auto____1.call(this,state_43825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42487__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42487__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_43865 = f__42523__auto__();
(statearr_43865[(6)] = c__42522__auto__);

return statearr_43865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
}));

return c__42522__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43867 = arguments.length;
switch (G__43867) {
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
var G__43869 = arguments.length;
switch (G__43869) {
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
var G__43871 = arguments.length;
switch (G__43871) {
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
var c__42522__auto___44621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_43895){
var state_val_43896 = (state_43895[(1)]);
if((state_val_43896 === (7))){
var inst_43890 = (state_43895[(2)]);
var state_43895__$1 = state_43895;
var statearr_43897_44622 = state_43895__$1;
(statearr_43897_44622[(2)] = inst_43890);

(statearr_43897_44622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43896 === (1))){
var inst_43872 = null;
var state_43895__$1 = (function (){var statearr_43898 = state_43895;
(statearr_43898[(7)] = inst_43872);

return statearr_43898;
})();
var statearr_43899_44623 = state_43895__$1;
(statearr_43899_44623[(2)] = null);

(statearr_43899_44623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43896 === (4))){
var inst_43875 = (state_43895[(8)]);
var inst_43875__$1 = (state_43895[(2)]);
var inst_43876 = (inst_43875__$1 == null);
var inst_43877 = cljs.core.not(inst_43876);
var state_43895__$1 = (function (){var statearr_43900 = state_43895;
(statearr_43900[(8)] = inst_43875__$1);

return statearr_43900;
})();
if(inst_43877){
var statearr_43901_44624 = state_43895__$1;
(statearr_43901_44624[(1)] = (5));

} else {
var statearr_43902_44625 = state_43895__$1;
(statearr_43902_44625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43896 === (6))){
var state_43895__$1 = state_43895;
var statearr_43903_44626 = state_43895__$1;
(statearr_43903_44626[(2)] = null);

(statearr_43903_44626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43896 === (3))){
var inst_43892 = (state_43895[(2)]);
var inst_43893 = cljs.core.async.close_BANG_(out);
var state_43895__$1 = (function (){var statearr_43904 = state_43895;
(statearr_43904[(9)] = inst_43892);

return statearr_43904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43895__$1,inst_43893);
} else {
if((state_val_43896 === (2))){
var state_43895__$1 = state_43895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43895__$1,(4),ch);
} else {
if((state_val_43896 === (11))){
var inst_43875 = (state_43895[(8)]);
var inst_43884 = (state_43895[(2)]);
var inst_43872 = inst_43875;
var state_43895__$1 = (function (){var statearr_43905 = state_43895;
(statearr_43905[(7)] = inst_43872);

(statearr_43905[(10)] = inst_43884);

return statearr_43905;
})();
var statearr_43906_44627 = state_43895__$1;
(statearr_43906_44627[(2)] = null);

(statearr_43906_44627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43896 === (9))){
var inst_43875 = (state_43895[(8)]);
var state_43895__$1 = state_43895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43895__$1,(11),out,inst_43875);
} else {
if((state_val_43896 === (5))){
var inst_43872 = (state_43895[(7)]);
var inst_43875 = (state_43895[(8)]);
var inst_43879 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43875,inst_43872);
var state_43895__$1 = state_43895;
if(inst_43879){
var statearr_43908_44628 = state_43895__$1;
(statearr_43908_44628[(1)] = (8));

} else {
var statearr_43909_44629 = state_43895__$1;
(statearr_43909_44629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43896 === (10))){
var inst_43887 = (state_43895[(2)]);
var state_43895__$1 = state_43895;
var statearr_43910_44630 = state_43895__$1;
(statearr_43910_44630[(2)] = inst_43887);

(statearr_43910_44630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43896 === (8))){
var inst_43872 = (state_43895[(7)]);
var tmp43907 = inst_43872;
var inst_43872__$1 = tmp43907;
var state_43895__$1 = (function (){var statearr_43911 = state_43895;
(statearr_43911[(7)] = inst_43872__$1);

return statearr_43911;
})();
var statearr_43912_44631 = state_43895__$1;
(statearr_43912_44631[(2)] = null);

(statearr_43912_44631[(1)] = (2));


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
var cljs$core$async$state_machine__42487__auto__ = null;
var cljs$core$async$state_machine__42487__auto____0 = (function (){
var statearr_43913 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43913[(0)] = cljs$core$async$state_machine__42487__auto__);

(statearr_43913[(1)] = (1));

return statearr_43913;
});
var cljs$core$async$state_machine__42487__auto____1 = (function (state_43895){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_43895);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e43914){var ex__42490__auto__ = e43914;
var statearr_43915_44632 = state_43895;
(statearr_43915_44632[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_43895[(4)]))){
var statearr_43916_44633 = state_43895;
(statearr_43916_44633[(1)] = cljs.core.first((state_43895[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44634 = state_43895;
state_43895 = G__44634;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$state_machine__42487__auto__ = function(state_43895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42487__auto____1.call(this,state_43895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42487__auto____0;
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42487__auto____1;
return cljs$core$async$state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_43917 = f__42523__auto__();
(statearr_43917[(6)] = c__42522__auto___44621);

return statearr_43917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43919 = arguments.length;
switch (G__43919) {
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
var c__42522__auto___44636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_43957){
var state_val_43958 = (state_43957[(1)]);
if((state_val_43958 === (7))){
var inst_43953 = (state_43957[(2)]);
var state_43957__$1 = state_43957;
var statearr_43959_44637 = state_43957__$1;
(statearr_43959_44637[(2)] = inst_43953);

(statearr_43959_44637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43958 === (1))){
var inst_43920 = (new Array(n));
var inst_43921 = inst_43920;
var inst_43922 = (0);
var state_43957__$1 = (function (){var statearr_43960 = state_43957;
(statearr_43960[(7)] = inst_43921);

(statearr_43960[(8)] = inst_43922);

return statearr_43960;
})();
var statearr_43961_44638 = state_43957__$1;
(statearr_43961_44638[(2)] = null);

(statearr_43961_44638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43958 === (4))){
var inst_43925 = (state_43957[(9)]);
var inst_43925__$1 = (state_43957[(2)]);
var inst_43926 = (inst_43925__$1 == null);
var inst_43927 = cljs.core.not(inst_43926);
var state_43957__$1 = (function (){var statearr_43962 = state_43957;
(statearr_43962[(9)] = inst_43925__$1);

return statearr_43962;
})();
if(inst_43927){
var statearr_43963_44642 = state_43957__$1;
(statearr_43963_44642[(1)] = (5));

} else {
var statearr_43964_44643 = state_43957__$1;
(statearr_43964_44643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43958 === (15))){
var inst_43947 = (state_43957[(2)]);
var state_43957__$1 = state_43957;
var statearr_43965_44644 = state_43957__$1;
(statearr_43965_44644[(2)] = inst_43947);

(statearr_43965_44644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43958 === (13))){
var state_43957__$1 = state_43957;
var statearr_43966_44645 = state_43957__$1;
(statearr_43966_44645[(2)] = null);

(statearr_43966_44645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43958 === (6))){
var inst_43922 = (state_43957[(8)]);
var inst_43943 = (inst_43922 > (0));
var state_43957__$1 = state_43957;
if(cljs.core.truth_(inst_43943)){
var statearr_43967_44646 = state_43957__$1;
(statearr_43967_44646[(1)] = (12));

} else {
var statearr_43968_44647 = state_43957__$1;
(statearr_43968_44647[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43958 === (3))){
var inst_43955 = (state_43957[(2)]);
var state_43957__$1 = state_43957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43957__$1,inst_43955);
} else {
if((state_val_43958 === (12))){
var inst_43921 = (state_43957[(7)]);
var inst_43945 = cljs.core.vec(inst_43921);
var state_43957__$1 = state_43957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43957__$1,(15),out,inst_43945);
} else {
if((state_val_43958 === (2))){
var state_43957__$1 = state_43957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43957__$1,(4),ch);
} else {
if((state_val_43958 === (11))){
var inst_43937 = (state_43957[(2)]);
var inst_43938 = (new Array(n));
var inst_43921 = inst_43938;
var inst_43922 = (0);
var state_43957__$1 = (function (){var statearr_43969 = state_43957;
(statearr_43969[(10)] = inst_43937);

(statearr_43969[(7)] = inst_43921);

(statearr_43969[(8)] = inst_43922);

return statearr_43969;
})();
var statearr_43970_44650 = state_43957__$1;
(statearr_43970_44650[(2)] = null);

(statearr_43970_44650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43958 === (9))){
var inst_43921 = (state_43957[(7)]);
var inst_43935 = cljs.core.vec(inst_43921);
var state_43957__$1 = state_43957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43957__$1,(11),out,inst_43935);
} else {
if((state_val_43958 === (5))){
var inst_43930 = (state_43957[(11)]);
var inst_43925 = (state_43957[(9)]);
var inst_43921 = (state_43957[(7)]);
var inst_43922 = (state_43957[(8)]);
var inst_43929 = (inst_43921[inst_43922] = inst_43925);
var inst_43930__$1 = (inst_43922 + (1));
var inst_43931 = (inst_43930__$1 < n);
var state_43957__$1 = (function (){var statearr_43971 = state_43957;
(statearr_43971[(12)] = inst_43929);

(statearr_43971[(11)] = inst_43930__$1);

return statearr_43971;
})();
if(cljs.core.truth_(inst_43931)){
var statearr_43972_44651 = state_43957__$1;
(statearr_43972_44651[(1)] = (8));

} else {
var statearr_43973_44652 = state_43957__$1;
(statearr_43973_44652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43958 === (14))){
var inst_43950 = (state_43957[(2)]);
var inst_43951 = cljs.core.async.close_BANG_(out);
var state_43957__$1 = (function (){var statearr_43975 = state_43957;
(statearr_43975[(13)] = inst_43950);

return statearr_43975;
})();
var statearr_43976_44653 = state_43957__$1;
(statearr_43976_44653[(2)] = inst_43951);

(statearr_43976_44653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43958 === (10))){
var inst_43941 = (state_43957[(2)]);
var state_43957__$1 = state_43957;
var statearr_43977_44654 = state_43957__$1;
(statearr_43977_44654[(2)] = inst_43941);

(statearr_43977_44654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43958 === (8))){
var inst_43930 = (state_43957[(11)]);
var inst_43921 = (state_43957[(7)]);
var tmp43974 = inst_43921;
var inst_43921__$1 = tmp43974;
var inst_43922 = inst_43930;
var state_43957__$1 = (function (){var statearr_43978 = state_43957;
(statearr_43978[(7)] = inst_43921__$1);

(statearr_43978[(8)] = inst_43922);

return statearr_43978;
})();
var statearr_43979_44655 = state_43957__$1;
(statearr_43979_44655[(2)] = null);

(statearr_43979_44655[(1)] = (2));


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
var cljs$core$async$state_machine__42487__auto__ = null;
var cljs$core$async$state_machine__42487__auto____0 = (function (){
var statearr_43980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43980[(0)] = cljs$core$async$state_machine__42487__auto__);

(statearr_43980[(1)] = (1));

return statearr_43980;
});
var cljs$core$async$state_machine__42487__auto____1 = (function (state_43957){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_43957);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e43981){var ex__42490__auto__ = e43981;
var statearr_43982_44656 = state_43957;
(statearr_43982_44656[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_43957[(4)]))){
var statearr_43983_44657 = state_43957;
(statearr_43983_44657[(1)] = cljs.core.first((state_43957[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44658 = state_43957;
state_43957 = G__44658;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$state_machine__42487__auto__ = function(state_43957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42487__auto____1.call(this,state_43957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42487__auto____0;
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42487__auto____1;
return cljs$core$async$state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_43984 = f__42523__auto__();
(statearr_43984[(6)] = c__42522__auto___44636);

return statearr_43984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43986 = arguments.length;
switch (G__43986) {
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
var c__42522__auto___44660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42523__auto__ = (function (){var switch__42486__auto__ = (function (state_44028){
var state_val_44029 = (state_44028[(1)]);
if((state_val_44029 === (7))){
var inst_44024 = (state_44028[(2)]);
var state_44028__$1 = state_44028;
var statearr_44030_44661 = state_44028__$1;
(statearr_44030_44661[(2)] = inst_44024);

(statearr_44030_44661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44029 === (1))){
var inst_43987 = [];
var inst_43988 = inst_43987;
var inst_43989 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44028__$1 = (function (){var statearr_44031 = state_44028;
(statearr_44031[(7)] = inst_43988);

(statearr_44031[(8)] = inst_43989);

return statearr_44031;
})();
var statearr_44032_44662 = state_44028__$1;
(statearr_44032_44662[(2)] = null);

(statearr_44032_44662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44029 === (4))){
var inst_43992 = (state_44028[(9)]);
var inst_43992__$1 = (state_44028[(2)]);
var inst_43993 = (inst_43992__$1 == null);
var inst_43994 = cljs.core.not(inst_43993);
var state_44028__$1 = (function (){var statearr_44033 = state_44028;
(statearr_44033[(9)] = inst_43992__$1);

return statearr_44033;
})();
if(inst_43994){
var statearr_44034_44663 = state_44028__$1;
(statearr_44034_44663[(1)] = (5));

} else {
var statearr_44035_44664 = state_44028__$1;
(statearr_44035_44664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44029 === (15))){
var inst_44018 = (state_44028[(2)]);
var state_44028__$1 = state_44028;
var statearr_44036_44666 = state_44028__$1;
(statearr_44036_44666[(2)] = inst_44018);

(statearr_44036_44666[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44029 === (13))){
var state_44028__$1 = state_44028;
var statearr_44037_44667 = state_44028__$1;
(statearr_44037_44667[(2)] = null);

(statearr_44037_44667[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44029 === (6))){
var inst_43988 = (state_44028[(7)]);
var inst_44013 = inst_43988.length;
var inst_44014 = (inst_44013 > (0));
var state_44028__$1 = state_44028;
if(cljs.core.truth_(inst_44014)){
var statearr_44038_44668 = state_44028__$1;
(statearr_44038_44668[(1)] = (12));

} else {
var statearr_44039_44669 = state_44028__$1;
(statearr_44039_44669[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44029 === (3))){
var inst_44026 = (state_44028[(2)]);
var state_44028__$1 = state_44028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44028__$1,inst_44026);
} else {
if((state_val_44029 === (12))){
var inst_43988 = (state_44028[(7)]);
var inst_44016 = cljs.core.vec(inst_43988);
var state_44028__$1 = state_44028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44028__$1,(15),out,inst_44016);
} else {
if((state_val_44029 === (2))){
var state_44028__$1 = state_44028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44028__$1,(4),ch);
} else {
if((state_val_44029 === (11))){
var inst_43996 = (state_44028[(10)]);
var inst_43992 = (state_44028[(9)]);
var inst_44006 = (state_44028[(2)]);
var inst_44007 = [];
var inst_44008 = inst_44007.push(inst_43992);
var inst_43988 = inst_44007;
var inst_43989 = inst_43996;
var state_44028__$1 = (function (){var statearr_44040 = state_44028;
(statearr_44040[(11)] = inst_44008);

(statearr_44040[(7)] = inst_43988);

(statearr_44040[(8)] = inst_43989);

(statearr_44040[(12)] = inst_44006);

return statearr_44040;
})();
var statearr_44041_44670 = state_44028__$1;
(statearr_44041_44670[(2)] = null);

(statearr_44041_44670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44029 === (9))){
var inst_43988 = (state_44028[(7)]);
var inst_44004 = cljs.core.vec(inst_43988);
var state_44028__$1 = state_44028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44028__$1,(11),out,inst_44004);
} else {
if((state_val_44029 === (5))){
var inst_43996 = (state_44028[(10)]);
var inst_43989 = (state_44028[(8)]);
var inst_43992 = (state_44028[(9)]);
var inst_43996__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43992) : f.call(null,inst_43992));
var inst_43997 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43996__$1,inst_43989);
var inst_43998 = cljs.core.keyword_identical_QMARK_(inst_43989,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43999 = ((inst_43997) || (inst_43998));
var state_44028__$1 = (function (){var statearr_44042 = state_44028;
(statearr_44042[(10)] = inst_43996__$1);

return statearr_44042;
})();
if(cljs.core.truth_(inst_43999)){
var statearr_44043_44671 = state_44028__$1;
(statearr_44043_44671[(1)] = (8));

} else {
var statearr_44044_44672 = state_44028__$1;
(statearr_44044_44672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44029 === (14))){
var inst_44021 = (state_44028[(2)]);
var inst_44022 = cljs.core.async.close_BANG_(out);
var state_44028__$1 = (function (){var statearr_44046 = state_44028;
(statearr_44046[(13)] = inst_44021);

return statearr_44046;
})();
var statearr_44047_44673 = state_44028__$1;
(statearr_44047_44673[(2)] = inst_44022);

(statearr_44047_44673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44029 === (10))){
var inst_44011 = (state_44028[(2)]);
var state_44028__$1 = state_44028;
var statearr_44048_44674 = state_44028__$1;
(statearr_44048_44674[(2)] = inst_44011);

(statearr_44048_44674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44029 === (8))){
var inst_43988 = (state_44028[(7)]);
var inst_43996 = (state_44028[(10)]);
var inst_43992 = (state_44028[(9)]);
var inst_44001 = inst_43988.push(inst_43992);
var tmp44045 = inst_43988;
var inst_43988__$1 = tmp44045;
var inst_43989 = inst_43996;
var state_44028__$1 = (function (){var statearr_44049 = state_44028;
(statearr_44049[(7)] = inst_43988__$1);

(statearr_44049[(8)] = inst_43989);

(statearr_44049[(14)] = inst_44001);

return statearr_44049;
})();
var statearr_44050_44675 = state_44028__$1;
(statearr_44050_44675[(2)] = null);

(statearr_44050_44675[(1)] = (2));


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
var cljs$core$async$state_machine__42487__auto__ = null;
var cljs$core$async$state_machine__42487__auto____0 = (function (){
var statearr_44051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44051[(0)] = cljs$core$async$state_machine__42487__auto__);

(statearr_44051[(1)] = (1));

return statearr_44051;
});
var cljs$core$async$state_machine__42487__auto____1 = (function (state_44028){
while(true){
var ret_value__42488__auto__ = (function (){try{while(true){
var result__42489__auto__ = switch__42486__auto__(state_44028);
if(cljs.core.keyword_identical_QMARK_(result__42489__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42489__auto__;
}
break;
}
}catch (e44052){var ex__42490__auto__ = e44052;
var statearr_44053_44676 = state_44028;
(statearr_44053_44676[(2)] = ex__42490__auto__);


if(cljs.core.seq((state_44028[(4)]))){
var statearr_44054_44677 = state_44028;
(statearr_44054_44677[(1)] = cljs.core.first((state_44028[(4)])));

} else {
throw ex__42490__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42488__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44678 = state_44028;
state_44028 = G__44678;
continue;
} else {
return ret_value__42488__auto__;
}
break;
}
});
cljs$core$async$state_machine__42487__auto__ = function(state_44028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42487__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42487__auto____1.call(this,state_44028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42487__auto____0;
cljs$core$async$state_machine__42487__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42487__auto____1;
return cljs$core$async$state_machine__42487__auto__;
})()
})();
var state__42524__auto__ = (function (){var statearr_44055 = f__42523__auto__();
(statearr_44055[(6)] = c__42522__auto___44660);

return statearr_44055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42524__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
