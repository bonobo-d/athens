goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__56299 = (line + (1));
var G__56300 = (1);
var G__56301 = (counter + (1));
line = G__56299;
col = G__56300;
counter = G__56301;
continue;
} else {
var G__56302 = line;
var G__56303 = (col + (1));
var G__56304 = (counter + (1));
line = G__56302;
col = G__56303;
counter = G__56304;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__56305 = cljs.core.next(chars);
var G__56306 = (n__$1 - (1));
chars = G__56305;
n__$1 = G__56306;
continue;
} else {
var G__56307 = cljs.core.next(chars);
var G__56308 = n__$1;
chars = G__56307;
n__$1 = G__56308;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__56287){
var map__56288 = p__56287;
var map__56288__$1 = (((((!((map__56288 == null))))?(((((map__56288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56288):map__56288);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56288__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56288__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56288__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56288__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__56290_56309 = cljs.core.seq(full_reasons);
var chunk__56291_56310 = null;
var count__56292_56311 = (0);
var i__56293_56312 = (0);
while(true){
if((i__56293_56312 < count__56292_56311)){
var r_56313 = chunk__56291_56310.cljs$core$IIndexed$_nth$arity$2(null,i__56293_56312);
instaparse.failure.print_reason(r_56313);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56314 = seq__56290_56309;
var G__56315 = chunk__56291_56310;
var G__56316 = count__56292_56311;
var G__56317 = (i__56293_56312 + (1));
seq__56290_56309 = G__56314;
chunk__56291_56310 = G__56315;
count__56292_56311 = G__56316;
i__56293_56312 = G__56317;
continue;
} else {
var temp__5735__auto___56318 = cljs.core.seq(seq__56290_56309);
if(temp__5735__auto___56318){
var seq__56290_56319__$1 = temp__5735__auto___56318;
if(cljs.core.chunked_seq_QMARK_(seq__56290_56319__$1)){
var c__4609__auto___56320 = cljs.core.chunk_first(seq__56290_56319__$1);
var G__56321 = cljs.core.chunk_rest(seq__56290_56319__$1);
var G__56322 = c__4609__auto___56320;
var G__56323 = cljs.core.count(c__4609__auto___56320);
var G__56324 = (0);
seq__56290_56309 = G__56321;
chunk__56291_56310 = G__56322;
count__56292_56311 = G__56323;
i__56293_56312 = G__56324;
continue;
} else {
var r_56325 = cljs.core.first(seq__56290_56319__$1);
instaparse.failure.print_reason(r_56325);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56326 = cljs.core.next(seq__56290_56319__$1);
var G__56327 = null;
var G__56328 = (0);
var G__56329 = (0);
seq__56290_56309 = G__56326;
chunk__56291_56310 = G__56327;
count__56292_56311 = G__56328;
i__56293_56312 = G__56329;
continue;
}
} else {
}
}
break;
}

var seq__56295 = cljs.core.seq(partial_reasons);
var chunk__56296 = null;
var count__56297 = (0);
var i__56298 = (0);
while(true){
if((i__56298 < count__56297)){
var r = chunk__56296.cljs$core$IIndexed$_nth$arity$2(null,i__56298);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56330 = seq__56295;
var G__56331 = chunk__56296;
var G__56332 = count__56297;
var G__56333 = (i__56298 + (1));
seq__56295 = G__56330;
chunk__56296 = G__56331;
count__56297 = G__56332;
i__56298 = G__56333;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56295);
if(temp__5735__auto__){
var seq__56295__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56295__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56295__$1);
var G__56334 = cljs.core.chunk_rest(seq__56295__$1);
var G__56335 = c__4609__auto__;
var G__56336 = cljs.core.count(c__4609__auto__);
var G__56337 = (0);
seq__56295 = G__56334;
chunk__56296 = G__56335;
count__56297 = G__56336;
i__56298 = G__56337;
continue;
} else {
var r = cljs.core.first(seq__56295__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56338 = cljs.core.next(seq__56295__$1);
var G__56339 = null;
var G__56340 = (0);
var G__56341 = (0);
seq__56295 = G__56338;
chunk__56296 = G__56339;
count__56297 = G__56340;
i__56298 = G__56341;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
