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
var G__54995 = (line + (1));
var G__54996 = (1);
var G__54997 = (counter + (1));
line = G__54995;
col = G__54996;
counter = G__54997;
continue;
} else {
var G__54998 = line;
var G__54999 = (col + (1));
var G__55000 = (counter + (1));
line = G__54998;
col = G__54999;
counter = G__55000;
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
var G__55001 = cljs.core.next(chars);
var G__55002 = (n__$1 - (1));
chars = G__55001;
n__$1 = G__55002;
continue;
} else {
var G__55003 = cljs.core.next(chars);
var G__55004 = n__$1;
chars = G__55003;
n__$1 = G__55004;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__54982){
var map__54983 = p__54982;
var map__54983__$1 = (((((!((map__54983 == null))))?(((((map__54983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54983):map__54983);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54983__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54983__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54983__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54983__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__54985_55015 = cljs.core.seq(full_reasons);
var chunk__54986_55016 = null;
var count__54987_55017 = (0);
var i__54988_55018 = (0);
while(true){
if((i__54988_55018 < count__54987_55017)){
var r_55020 = chunk__54986_55016.cljs$core$IIndexed$_nth$arity$2(null,i__54988_55018);
instaparse.failure.print_reason(r_55020);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55021 = seq__54985_55015;
var G__55022 = chunk__54986_55016;
var G__55023 = count__54987_55017;
var G__55024 = (i__54988_55018 + (1));
seq__54985_55015 = G__55021;
chunk__54986_55016 = G__55022;
count__54987_55017 = G__55023;
i__54988_55018 = G__55024;
continue;
} else {
var temp__5735__auto___55025 = cljs.core.seq(seq__54985_55015);
if(temp__5735__auto___55025){
var seq__54985_55026__$1 = temp__5735__auto___55025;
if(cljs.core.chunked_seq_QMARK_(seq__54985_55026__$1)){
var c__4556__auto___55027 = cljs.core.chunk_first(seq__54985_55026__$1);
var G__55028 = cljs.core.chunk_rest(seq__54985_55026__$1);
var G__55029 = c__4556__auto___55027;
var G__55030 = cljs.core.count(c__4556__auto___55027);
var G__55031 = (0);
seq__54985_55015 = G__55028;
chunk__54986_55016 = G__55029;
count__54987_55017 = G__55030;
i__54988_55018 = G__55031;
continue;
} else {
var r_55032 = cljs.core.first(seq__54985_55026__$1);
instaparse.failure.print_reason(r_55032);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__55033 = cljs.core.next(seq__54985_55026__$1);
var G__55034 = null;
var G__55035 = (0);
var G__55036 = (0);
seq__54985_55015 = G__55033;
chunk__54986_55016 = G__55034;
count__54987_55017 = G__55035;
i__54988_55018 = G__55036;
continue;
}
} else {
}
}
break;
}

var seq__54989 = cljs.core.seq(partial_reasons);
var chunk__54990 = null;
var count__54991 = (0);
var i__54992 = (0);
while(true){
if((i__54992 < count__54991)){
var r = chunk__54990.cljs$core$IIndexed$_nth$arity$2(null,i__54992);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55037 = seq__54989;
var G__55038 = chunk__54990;
var G__55039 = count__54991;
var G__55040 = (i__54992 + (1));
seq__54989 = G__55037;
chunk__54990 = G__55038;
count__54991 = G__55039;
i__54992 = G__55040;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54989);
if(temp__5735__auto__){
var seq__54989__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54989__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54989__$1);
var G__55041 = cljs.core.chunk_rest(seq__54989__$1);
var G__55042 = c__4556__auto__;
var G__55043 = cljs.core.count(c__4556__auto__);
var G__55044 = (0);
seq__54989 = G__55041;
chunk__54990 = G__55042;
count__54991 = G__55043;
i__54992 = G__55044;
continue;
} else {
var r = cljs.core.first(seq__54989__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__55045 = cljs.core.next(seq__54989__$1);
var G__55046 = null;
var G__55047 = (0);
var G__55048 = (0);
seq__54989 = G__55045;
chunk__54990 = G__55046;
count__54991 = G__55047;
i__54992 = G__55048;
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
