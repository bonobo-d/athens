goog.provide('garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32971 = arguments.length;
var i__4790__auto___32972 = (0);
while(true){
if((i__4790__auto___32972 < len__4789__auto___32971)){
args__4795__auto__.push((arguments[i__4790__auto___32972]));

var G__32973 = (i__4790__auto___32972 + (1));
i__4790__auto___32972 = G__32973;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(garden.util.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.util.format.cljs$lang$applyTo = (function (seq32938){
var G__32939 = cljs.core.first(seq32938);
var seq32938__$1 = cljs.core.next(seq32938);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32939,seq32938__$1);
}));


/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.garden$util$ToString$to_str$arity$1 == null)))))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (garden.util.to_str[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (garden.util.to_str["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
}
});

(cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

goog.object.set(garden.util.ToString,"_",true);

var G__32940_32974 = garden.util.to_str;
var G__32941_32975 = "_";
var G__32942_32976 = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});
goog.object.set(G__32940_32974,G__32941_32975,G__32942_32976);

goog.object.set(garden.util.ToString,"null",true);

var G__32943_32977 = garden.util.to_str;
var G__32944_32978 = "null";
var G__32945_32979 = (function (this$){
return "";
});
goog.object.set(G__32943_32977,G__32944_32978,G__32945_32979);
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32980 = arguments.length;
var i__4790__auto___32981 = (0);
while(true){
if((i__4790__auto___32981 < len__4789__auto___32980)){
args__4795__auto__.push((arguments[i__4790__auto___32981]));

var G__32982 = (i__4790__auto___32981 + (1));
i__4790__auto___32981 = G__32982;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,args));
}));

(garden.util.as_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.util.as_str.cljs$lang$applyTo = (function (seq32946){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32946));
}));

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32983 = arguments.length;
var i__4790__auto___32984 = (0);
while(true){
if((i__4790__auto___32984 < len__4789__auto___32983)){
args__4795__auto__.push((arguments[i__4790__auto___32984]));

var G__32985 = (i__4790__auto___32984 + (1));
i__4790__auto___32984 = G__32985;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__32950){
var vec__32951 = p__32950;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32951,(0),null);
var radix__$1 = (function (){var or__4185__auto__ = radix;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
}));

(garden.util.string__GT_int.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.util.string__GT_int.cljs$lang$applyTo = (function (seq32947){
var G__32948 = cljs.core.first(seq32947);
var seq32947__$1 = cljs.core.next(seq32947);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32948,seq32947__$1);
}));

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32991 = arguments.length;
var i__4790__auto___32993 = (0);
while(true){
if((i__4790__auto___32993 < len__4789__auto___32991)){
args__4795__auto__.push((arguments[i__4790__auto___32993]));

var G__32994 = (i__4790__auto___32993 + (1));
i__4790__auto___32993 = G__32994;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__32956){
var vec__32957 = p__32956;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32957,(0),null);
var radix__$1 = (function (){var or__4185__auto__ = radix;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
}));

(garden.util.int__GT_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.util.int__GT_string.cljs$lang$applyTo = (function (seq32954){
var G__32955 = cljs.core.first(seq32954);
var seq32954__$1 = cljs.core.next(seq32954);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32955,seq32954__$1);
}));

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__4582__auto__ = (function garden$util$comma_join_$_iter__32960(s__32961){
return (new cljs.core.LazySeq(null,(function (){
var s__32961__$1 = s__32961;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32961__$1);
if(temp__5735__auto__){
var s__32961__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32961__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__32961__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__32963 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__32962 = (0);
while(true){
if((i__32962 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__32962);
cljs.core.chunk_append(b__32963,((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)));

var G__32997 = (i__32962 + (1));
i__32962 = G__32997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32963),garden$util$comma_join_$_iter__32960(cljs.core.chunk_rest(s__32961__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32963),null);
}
} else {
var x = cljs.core.first(s__32961__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)),garden$util$comma_join_$_iter__32960(cljs.core.rest(s__32961__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@supports` rule.
 */
garden.util.at_supports_QMARK_ = (function garden$util$at_supports_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"feature","feature",27242652))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
return ((garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return garden.util.prefix(p__$1,s);
} else {
return garden.util.prefix(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4276__auto__ = a;
var y__4277__auto__ = b;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var top = (function (){var x__4273__auto__ = a;
var y__4274__auto__ = b;
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__32964 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32964,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32964,(1),null);
var x__4273__auto__ = a__$1;
var y__4274__auto__ = (function (){var x__4276__auto__ = b__$1;
var y__4277__auto__ = n;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33014 = arguments.length;
var i__4790__auto___33015 = (0);
while(true){
if((i__4790__auto___33015 < len__4789__auto___33014)){
args__4795__auto__.push((arguments[i__4790__auto___33015]));

var G__33016 = (i__4790__auto___33015 + (1));
i__4790__auto___33015 = G__33016;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
}));

(garden.util.average.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(garden.util.average.cljs$lang$applyTo = (function (seq32967){
var G__32968 = cljs.core.first(seq32967);
var seq32967__$1 = cljs.core.next(seq32967);
var G__32969 = cljs.core.first(seq32967__$1);
var seq32967__$2 = cljs.core.next(seq32967__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32968,G__32969,seq32967__$2);
}));

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33022 = arguments.length;
var i__4790__auto___33024 = (0);
while(true){
if((i__4790__auto___33024 < len__4789__auto___33022)){
args__4795__auto__.push((arguments[i__4790__auto___33024]));

var G__33025 = (i__4790__auto___33024 + (1));
i__4790__auto___33024 = G__33025;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function garden$util$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5733__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5733__auto__){
var rst = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__33028 = (i - (1));
var G__33029 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__33028;
v_seqs__$2 = G__33029;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return garden$util$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(garden.util.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.util.cartesian_product.cljs$lang$applyTo = (function (seq32970){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32970));
}));


//# sourceMappingURL=garden.util.js.map
