goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56345 = arguments.length;
var i__4790__auto___56346 = (0);
while(true){
if((i__4790__auto___56346 < len__4789__auto___56345)){
args__4795__auto__.push((arguments[i__4790__auto___56346]));

var G__56347 = (i__4790__auto___56346 + (1));
i__4790__auto___56346 = G__56347;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq56342){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56342));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56348 = arguments.length;
var i__4790__auto___56349 = (0);
while(true){
if((i__4790__auto___56349 < len__4789__auto___56348)){
args__4795__auto__.push((arguments[i__4790__auto___56349]));

var G__56350 = (i__4790__auto___56349 + (1));
i__4790__auto___56349 = G__56350;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq56343){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56343));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__56344 = "";
var G__56344__$1 = (cljs.core.truth_(re.ignoreCase)?[G__56344,"i"].join(''):G__56344);
var G__56344__$2 = (cljs.core.truth_(re.multiline)?[G__56344__$1,"m"].join(''):G__56344__$1);
if(cljs.core.truth_(re.unicode)){
return [G__56344__$2,"u"].join('');
} else {
return G__56344__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
