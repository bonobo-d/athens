goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56343 = arguments.length;
var i__4790__auto___56344 = (0);
while(true){
if((i__4790__auto___56344 < len__4789__auto___56343)){
args__4795__auto__.push((arguments[i__4790__auto___56344]));

var G__56345 = (i__4790__auto___56344 + (1));
i__4790__auto___56344 = G__56345;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq56340){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56340));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56346 = arguments.length;
var i__4790__auto___56347 = (0);
while(true){
if((i__4790__auto___56347 < len__4789__auto___56346)){
args__4795__auto__.push((arguments[i__4790__auto___56347]));

var G__56348 = (i__4790__auto___56347 + (1));
i__4790__auto___56347 = G__56348;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq56341){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56341));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__56342 = "";
var G__56342__$1 = (cljs.core.truth_(re.ignoreCase)?[G__56342,"i"].join(''):G__56342);
var G__56342__$2 = (cljs.core.truth_(re.multiline)?[G__56342__$1,"m"].join(''):G__56342__$1);
if(cljs.core.truth_(re.unicode)){
return [G__56342__$2,"u"].join('');
} else {
return G__56342__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
