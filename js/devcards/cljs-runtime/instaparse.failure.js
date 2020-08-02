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
var G__56289 = (line + (1));
var G__56290 = (1);
var G__56291 = (counter + (1));
line = G__56289;
col = G__56290;
counter = G__56291;
continue;
} else {
var G__56293 = line;
var G__56294 = (col + (1));
var G__56295 = (counter + (1));
line = G__56293;
col = G__56294;
counter = G__56295;
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
var G__56298 = cljs.core.next(chars);
var G__56299 = (n__$1 - (1));
chars = G__56298;
n__$1 = G__56299;
continue;
} else {
var G__56300 = cljs.core.next(chars);
var G__56301 = n__$1;
chars = G__56300;
n__$1 = G__56301;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__56278){
var map__56279 = p__56278;
var map__56279__$1 = (((((!((map__56279 == null))))?(((((map__56279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56279):map__56279);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56279__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56279__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56279__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56279__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__56281_56306 = cljs.core.seq(full_reasons);
var chunk__56282_56307 = null;
var count__56283_56308 = (0);
var i__56284_56309 = (0);
while(true){
if((i__56284_56309 < count__56283_56308)){
var r_56310 = chunk__56282_56307.cljs$core$IIndexed$_nth$arity$2(null,i__56284_56309);
instaparse.failure.print_reason(r_56310);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56311 = seq__56281_56306;
var G__56312 = chunk__56282_56307;
var G__56313 = count__56283_56308;
var G__56314 = (i__56284_56309 + (1));
seq__56281_56306 = G__56311;
chunk__56282_56307 = G__56312;
count__56283_56308 = G__56313;
i__56284_56309 = G__56314;
continue;
} else {
var temp__5735__auto___56315 = cljs.core.seq(seq__56281_56306);
if(temp__5735__auto___56315){
var seq__56281_56316__$1 = temp__5735__auto___56315;
if(cljs.core.chunked_seq_QMARK_(seq__56281_56316__$1)){
var c__4609__auto___56317 = cljs.core.chunk_first(seq__56281_56316__$1);
var G__56318 = cljs.core.chunk_rest(seq__56281_56316__$1);
var G__56319 = c__4609__auto___56317;
var G__56320 = cljs.core.count(c__4609__auto___56317);
var G__56321 = (0);
seq__56281_56306 = G__56318;
chunk__56282_56307 = G__56319;
count__56283_56308 = G__56320;
i__56284_56309 = G__56321;
continue;
} else {
var r_56322 = cljs.core.first(seq__56281_56316__$1);
instaparse.failure.print_reason(r_56322);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__56323 = cljs.core.next(seq__56281_56316__$1);
var G__56324 = null;
var G__56325 = (0);
var G__56326 = (0);
seq__56281_56306 = G__56323;
chunk__56282_56307 = G__56324;
count__56283_56308 = G__56325;
i__56284_56309 = G__56326;
continue;
}
} else {
}
}
break;
}

var seq__56285 = cljs.core.seq(partial_reasons);
var chunk__56286 = null;
var count__56287 = (0);
var i__56288 = (0);
while(true){
if((i__56288 < count__56287)){
var r = chunk__56286.cljs$core$IIndexed$_nth$arity$2(null,i__56288);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56327 = seq__56285;
var G__56328 = chunk__56286;
var G__56329 = count__56287;
var G__56330 = (i__56288 + (1));
seq__56285 = G__56327;
chunk__56286 = G__56328;
count__56287 = G__56329;
i__56288 = G__56330;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56285);
if(temp__5735__auto__){
var seq__56285__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56285__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56285__$1);
var G__56331 = cljs.core.chunk_rest(seq__56285__$1);
var G__56332 = c__4609__auto__;
var G__56333 = cljs.core.count(c__4609__auto__);
var G__56334 = (0);
seq__56285 = G__56331;
chunk__56286 = G__56332;
count__56287 = G__56333;
i__56288 = G__56334;
continue;
} else {
var r = cljs.core.first(seq__56285__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__56335 = cljs.core.next(seq__56285__$1);
var G__56336 = null;
var G__56337 = (0);
var G__56338 = (0);
seq__56285 = G__56335;
chunk__56286 = G__56336;
count__56287 = G__56337;
i__56288 = G__56338;
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
