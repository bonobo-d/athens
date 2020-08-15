goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55065 = arguments.length;
var i__4737__auto___55066 = (0);
while(true){
if((i__4737__auto___55066 < len__4736__auto___55065)){
args__4742__auto__.push((arguments[i__4737__auto___55066]));

var G__55067 = (i__4737__auto___55066 + (1));
i__4737__auto___55066 = G__55067;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq55062){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55062));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55068 = arguments.length;
var i__4737__auto___55069 = (0);
while(true){
if((i__4737__auto___55069 < len__4736__auto___55068)){
args__4742__auto__.push((arguments[i__4737__auto___55069]));

var G__55070 = (i__4737__auto___55069 + (1));
i__4737__auto___55069 = G__55070;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq55063){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55063));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__55064 = "";
var G__55064__$1 = (cljs.core.truth_(re.ignoreCase)?[G__55064,"i"].join(''):G__55064);
var G__55064__$2 = (cljs.core.truth_(re.multiline)?[G__55064__$1,"m"].join(''):G__55064__$1);
if(cljs.core.truth_(re.unicode)){
return [G__55064__$2,"u"].join('');
} else {
return G__55064__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
