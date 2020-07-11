goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__30640 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30640) : stop_at_QMARK_.call(null,G__30640));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__30641 = stop_at_QMARK_;
var G__30642 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__30641,G__30642) : posh.lib.q_analyze.take_until.call(null,G__30641,G__30642));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__30644 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__30644) : rest_at_QMARK_.call(null,G__30644));
}
})())){
return ls;
} else {
var G__31021 = rest_at_QMARK_;
var G__31022 = cljs.core.rest(ls);
rest_at_QMARK_ = G__31021;
ls = G__31022;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__30645 = split_at_QMARK_;
var G__30646 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__30645,G__30646) : posh.lib.q_analyze.split_list_at.call(null,G__30645,G__30646));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__30648 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__30648) : posh.lib.q_analyze.get_all_vars.call(null,G__30648));
})(),(function (){var G__30649 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__30649) : posh.lib.q_analyze.get_all_vars.call(null,G__30649));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__30650 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__30650) : posh.lib.q_analyze.get_all_vars.call(null,G__30650));
})(),cljs.core.first(query));
} else {
var G__30651 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__30651) : posh.lib.q_analyze.get_all_vars.call(null,G__30651));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4174__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4174__auto__;
}
})())){
var G__30652 = cljs.core.rest(eav);
var G__30653 = (n - (1));
var G__30654 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__30655 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__30652,G__30653,G__30654,G__30655) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__30652,G__30653,G__30654,G__30655));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__30656 = cljs.core.rest(eav);
var G__30657 = (n - (1));
var G__30658 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__30659 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__30656,G__30657,G__30658,G__30659) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__30656,G__30657,G__30658,G__30659));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__30664 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__30664) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__30664));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__30665 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__30665) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__30665));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__30675 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30675) : posh.lib.q_analyze.get_eavs.call(null,G__30675));
})(),(function (){var G__30677 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30677) : posh.lib.q_analyze.get_eavs.call(null,G__30677));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__30678 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30678) : posh.lib.q_analyze.get_eavs.call(null,G__30678));
})(),(function (){var G__30679 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30679) : posh.lib.q_analyze.get_eavs.call(null,G__30679));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__30683 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30683) : posh.lib.q_analyze.get_eavs.call(null,G__30683));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_30687 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_30687)) && ((cljs.core.count(ocr_30687) === 2)))){
try{var ocr_30687_0__30694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30687,(0));
if(((cljs.core.vector_QMARK_(ocr_30687_0__30694)) && ((cljs.core.count(ocr_30687_0__30694) === 5)))){
try{var ocr_30687_0__30694_0__30696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30687_0__30694,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30687_0__30694_0__30696,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30687_0__30694,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30687_0__30694,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30687_0__30694,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30687,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__30705 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30705) : posh.lib.q_analyze.get_eavs.call(null,G__30705));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e30704){if((e30704 instanceof Error)){
var e__29737__auto__ = e30704;
if((e__29737__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto__;
}
} else {
throw e30704;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30703){if((e30703 instanceof Error)){
var e__29737__auto__ = e30703;
if((e__29737__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto__;
}
} else {
throw e30703;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30701){if((e30701 instanceof Error)){
var e__29737__auto__ = e30701;
if((e__29737__auto__ === cljs.core.match.backtrack)){
var G__30702 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30702) : posh.lib.q_analyze.get_eavs.call(null,G__30702));
} else {
throw e__29737__auto__;
}
} else {
throw e30701;

}
}} else {
var G__30706 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__30706) : posh.lib.q_analyze.get_eavs.call(null,G__30706));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__30707){
var vec__30708 = p__30707;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30708,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30708,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30711_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__30711_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__30711_SHARP_);
} else {
return p1__30711_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30712 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__30712) : posh.lib.q_analyze.count_qvars.call(null,G__30712));
})(),(function (){var G__30713 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__30713) : posh.lib.q_analyze.count_qvars.call(null,G__30713));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__30714 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__30714) : posh.lib.q_analyze.count_qvars.call(null,G__30714));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__30715(s__30716){
return (new cljs.core.LazySeq(null,(function (){
var s__30716__$1 = s__30716;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30716__$1);
if(temp__5735__auto__){
var s__30716__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30716__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30716__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30718 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30717 = (0);
while(true){
if((i__30717 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30717);
cljs.core.chunk_append(b__30718,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__31056 = (i__30717 + (1));
i__30717 = G__31056;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30718),posh$lib$q_analyze$fill_qvar_set_$_iter__30715(cljs.core.chunk_rest(s__30716__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30718),null);
}
} else {
var r = cljs.core.first(s__30716__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__30715(cljs.core.rest(s__30716__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__30719 = cljs.core.first(seq1);
var G__30720 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30719,G__30720) : f.call(null,G__30719,G__30720));
})(),(function (){var G__30721 = f;
var G__30722 = cljs.core.rest(seq1);
var G__30723 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__30721,G__30722,G__30723) : posh.lib.q_analyze.seq_merge_with.call(null,G__30721,G__30722,G__30723));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__30726){
var vec__30727 = p__30726;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30727,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30727,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30727,(2),null);
var eav = vec__30727;
var vec__30730 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30730,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30730,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30730,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__30733(s__30734){
return (new cljs.core.LazySeq(null,(function (){
var s__30734__$1 = s__30734;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30734__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__30734__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__30733_$_iter__30735(s__30736){
return (new cljs.core.LazySeq(null,((function (s__30734__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav){
return (function (){
var s__30736__$1 = s__30736;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__30736__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__30736__$1,s__30734__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__30733_$_iter__30735_$_iter__30737(s__30738){
return (new cljs.core.LazySeq(null,((function (s__30736__$1,s__30734__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav){
return (function (){
var s__30738__$1 = s__30738;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__30738__$1);
if(temp__5735__auto____$2){
var s__30738__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__30738__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30738__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30740 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30739 = (0);
while(true){
if((i__30739 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30739);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__30739,s__30738__$1,s__30736__$1,s__30734__$1,vv,c__4580__auto__,size__4581__auto__,b__30740,s__30738__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav){
return (function (p1__30724_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__30724_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__30739,s__30738__$1,s__30736__$1,s__30734__$1,vv,c__4580__auto__,size__4581__auto__,b__30740,s__30738__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__30739,s__30738__$1,s__30736__$1,s__30734__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__30740,s__30738__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav){
return (function (p__30741){
var vec__30742 = p__30741;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30742,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30742,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__30739,s__30738__$1,s__30736__$1,s__30734__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__30740,s__30738__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__30739,s__30738__$1,s__30736__$1,s__30734__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__30740,s__30738__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav){
return (function (p1__30725_SHARP_){
if(cljs.core.truth_(p1__30725_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__30739,s__30738__$1,s__30736__$1,s__30734__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__30740,s__30738__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__30740,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__31057 = (i__30739 + (1));
i__30739 = G__31057;
continue;
} else {
var G__31058 = (i__30739 + (1));
i__30739 = G__31058;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30740),posh$lib$q_analyze$pattern_from_eav__old_$_iter__30733_$_iter__30735_$_iter__30737(cljs.core.chunk_rest(s__30738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30740),null);
}
} else {
var vv = cljs.core.first(s__30738__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__30738__$1,s__30736__$1,s__30734__$1,vv,s__30738__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav){
return (function (p1__30724_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__30724_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__30738__$1,s__30736__$1,s__30734__$1,vv,s__30738__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__30738__$1,s__30736__$1,s__30734__$1,wildcard_count,vv,s__30738__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav){
return (function (p__30745){
var vec__30746 = p__30745;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30746,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30746,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__30738__$1,s__30736__$1,s__30734__$1,wildcard_count,vv,s__30738__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__30738__$1,s__30736__$1,s__30734__$1,wildcard_count,exposed_qvars,vv,s__30738__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav){
return (function (p1__30725_SHARP_){
if(cljs.core.truth_(p1__30725_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__30738__$1,s__30736__$1,s__30734__$1,wildcard_count,exposed_qvars,vv,s__30738__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__30733_$_iter__30735_$_iter__30737(cljs.core.rest(s__30738__$2)));
} else {
var G__31060 = cljs.core.rest(s__30738__$2);
s__30738__$1 = G__31060;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__30736__$1,s__30734__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav))
,null,null));
});})(s__30736__$1,s__30734__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__30733_$_iter__30735(cljs.core.rest(s__30736__$1)));
} else {
var G__31061 = cljs.core.rest(s__30736__$1);
s__30736__$1 = G__31061;
continue;
}
} else {
return null;
}
break;
}
});})(s__30734__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav))
,null,null));
});})(s__30734__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__30730,qe,qa,qv,vec__30727,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__30733(cljs.core.rest(s__30734__$1)));
} else {
var G__31062 = cljs.core.rest(s__30734__$1);
s__30734__$1 = G__31062;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_30749 = cljs.core.vec(eav);
var ocr_30750 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_30749)) && ((cljs.core.count(ocr_30749) === 3)))){
try{var ocr_30749_0__30778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_0__30778,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30749_1__30779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_1__30779,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30749_2__30780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_2__30780,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30854){if((e30854 instanceof Error)){
var e__29737__auto__ = e30854;
if((e__29737__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_30750)) && ((cljs.core.count(ocr_30750) === 3)))){
try{var ocr_30750_2__30783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(2));
if((ocr_30750_2__30783 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30856){if((e30856 instanceof Error)){
var e__29737__auto____$1 = e30856;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_30750_2__30783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(2));
if((ocr_30750_2__30783 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30857){if((e30857 instanceof Error)){
var e__29737__auto____$2 = e30857;
if((e__29737__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$2;
}
} else {
throw e30857;

}
}} else {
throw e__29737__auto____$1;
}
} else {
throw e30856;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30855){if((e30855 instanceof Error)){
var e__29737__auto____$1 = e30855;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$1;
}
} else {
throw e30855;

}
}} else {
throw e__29737__auto__;
}
} else {
throw e30854;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30849){if((e30849 instanceof Error)){
var e__29737__auto__ = e30849;
if((e__29737__auto__ === cljs.core.match.backtrack)){
try{var ocr_30749_2__30780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_2__30780,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_30750)) && ((cljs.core.count(ocr_30750) === 3)))){
try{var ocr_30750_1__30785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30785 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30852){if((e30852 instanceof Error)){
var e__29737__auto____$1 = e30852;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_30750_1__30785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30785 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30853){if((e30853 instanceof Error)){
var e__29737__auto____$2 = e30853;
if((e__29737__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$2;
}
} else {
throw e30853;

}
}} else {
throw e__29737__auto____$1;
}
} else {
throw e30852;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30851){if((e30851 instanceof Error)){
var e__29737__auto____$1 = e30851;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$1;
}
} else {
throw e30851;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30850){if((e30850 instanceof Error)){
var e__29737__auto____$1 = e30850;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$1;
}
} else {
throw e30850;

}
}} else {
throw e__29737__auto__;
}
} else {
throw e30849;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30791){if((e30791 instanceof Error)){
var e__29737__auto__ = e30791;
if((e__29737__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_30750)) && ((cljs.core.count(ocr_30750) === 3)))){
try{var ocr_30750_0__30787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(0));
if((ocr_30750_0__30787 === false)){
try{var ocr_30749_1__30779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_1__30779,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30749_2__30780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_2__30780,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30848){if((e30848 instanceof Error)){
var e__29737__auto____$1 = e30848;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$1;
}
} else {
throw e30848;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30847){if((e30847 instanceof Error)){
var e__29737__auto____$1 = e30847;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$1;
}
} else {
throw e30847;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30793){if((e30793 instanceof Error)){
var e__29737__auto____$1 = e30793;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_30750_0__30787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(0));
if((ocr_30750_0__30787 === true)){
try{var ocr_30749_2__30780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_2__30780,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30749_1__30779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_1__30779,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30844){if((e30844 instanceof Error)){
var e__29737__auto____$2 = e30844;
if((e__29737__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30845){if((e30845 instanceof Error)){
var e__29737__auto____$3 = e30845;
if((e__29737__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30846){if((e30846 instanceof Error)){
var e__29737__auto____$4 = e30846;
if((e__29737__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$4;
}
} else {
throw e30846;

}
}} else {
throw e__29737__auto____$3;
}
} else {
throw e30845;

}
}} else {
throw e__29737__auto____$2;
}
} else {
throw e30844;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30843){if((e30843 instanceof Error)){
var e__29737__auto____$2 = e30843;
if((e__29737__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$2;
}
} else {
throw e30843;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30794){if((e30794 instanceof Error)){
var e__29737__auto____$2 = e30794;
if((e__29737__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_30750_0__30787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(0));
if((ocr_30750_0__30787 === false)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === true)){
try{var ocr_30749_2__30780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_2__30780,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30842){if((e30842 instanceof Error)){
var e__29737__auto____$3 = e30842;
if((e__29737__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$3;
}
} else {
throw e30842;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30839){if((e30839 instanceof Error)){
var e__29737__auto____$3 = e30839;
if((e__29737__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === false)){
try{var ocr_30749_2__30780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_2__30780,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30841){if((e30841 instanceof Error)){
var e__29737__auto____$4 = e30841;
if((e__29737__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$4;
}
} else {
throw e30841;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30840){if((e30840 instanceof Error)){
var e__29737__auto____$4 = e30840;
if((e__29737__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$4;
}
} else {
throw e30840;

}
}} else {
throw e__29737__auto____$3;
}
} else {
throw e30839;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30795){if((e30795 instanceof Error)){
var e__29737__auto____$3 = e30795;
if((e__29737__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_30750_2__30789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(2));
if((ocr_30750_2__30789 === true)){
try{var ocr_30750_0__30787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(0));
if((ocr_30750_0__30787 === true)){
try{var ocr_30749_1__30779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_1__30779,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30838){if((e30838 instanceof Error)){
var e__29737__auto____$4 = e30838;
if((e__29737__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$4;
}
} else {
throw e30838;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30837){if((e30837 instanceof Error)){
var e__29737__auto____$4 = e30837;
if((e__29737__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$4;
}
} else {
throw e30837;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30796){if((e30796 instanceof Error)){
var e__29737__auto____$4 = e30796;
if((e__29737__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_30750_2__30789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(2));
if((ocr_30750_2__30789 === false)){
try{var ocr_30750_0__30787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(0));
if((ocr_30750_0__30787 === true)){
try{var ocr_30749_1__30779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_1__30779,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30836){if((e30836 instanceof Error)){
var e__29737__auto____$5 = e30836;
if((e__29737__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$5;
}
} else {
throw e30836;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30835){if((e30835 instanceof Error)){
var e__29737__auto____$5 = e30835;
if((e__29737__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$5;
}
} else {
throw e30835;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30797){if((e30797 instanceof Error)){
var e__29737__auto____$5 = e30797;
if((e__29737__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_30750_2__30789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(2));
if((ocr_30750_2__30789 === true)){
try{var ocr_30750_0__30787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(0));
if((ocr_30750_0__30787 === false)){
try{var ocr_30749_1__30779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_1__30779,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30834){if((e30834 instanceof Error)){
var e__29737__auto____$6 = e30834;
if((e__29737__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$6;
}
} else {
throw e30834;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30833){if((e30833 instanceof Error)){
var e__29737__auto____$6 = e30833;
if((e__29737__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$6;
}
} else {
throw e30833;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30798){if((e30798 instanceof Error)){
var e__29737__auto____$6 = e30798;
if((e__29737__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_30750_2__30789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(2));
if((ocr_30750_2__30789 === false)){
try{var ocr_30750_0__30787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(0));
if((ocr_30750_0__30787 === false)){
try{var ocr_30749_1__30779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_1__30779,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30832){if((e30832 instanceof Error)){
var e__29737__auto____$7 = e30832;
if((e__29737__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$7;
}
} else {
throw e30832;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30831){if((e30831 instanceof Error)){
var e__29737__auto____$7 = e30831;
if((e__29737__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$7;
}
} else {
throw e30831;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30799){if((e30799 instanceof Error)){
var e__29737__auto____$7 = e30799;
if((e__29737__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_30750_2__30789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(2));
if((ocr_30750_2__30789 === true)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === true)){
try{var ocr_30749_0__30778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_0__30778,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30830){if((e30830 instanceof Error)){
var e__29737__auto____$8 = e30830;
if((e__29737__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$8;
}
} else {
throw e30830;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30829){if((e30829 instanceof Error)){
var e__29737__auto____$8 = e30829;
if((e__29737__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$8;
}
} else {
throw e30829;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30800){if((e30800 instanceof Error)){
var e__29737__auto____$8 = e30800;
if((e__29737__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_30750_2__30789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(2));
if((ocr_30750_2__30789 === false)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === true)){
try{var ocr_30749_0__30778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_0__30778,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30828){if((e30828 instanceof Error)){
var e__29737__auto____$9 = e30828;
if((e__29737__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$9;
}
} else {
throw e30828;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30827){if((e30827 instanceof Error)){
var e__29737__auto____$9 = e30827;
if((e__29737__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$9;
}
} else {
throw e30827;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30801){if((e30801 instanceof Error)){
var e__29737__auto____$9 = e30801;
if((e__29737__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_30750_2__30789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(2));
if((ocr_30750_2__30789 === true)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === false)){
try{var ocr_30749_0__30778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_0__30778,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30826){if((e30826 instanceof Error)){
var e__29737__auto____$10 = e30826;
if((e__29737__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$10;
}
} else {
throw e30826;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30825){if((e30825 instanceof Error)){
var e__29737__auto____$10 = e30825;
if((e__29737__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$10;
}
} else {
throw e30825;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30802){if((e30802 instanceof Error)){
var e__29737__auto____$10 = e30802;
if((e__29737__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_30750_2__30789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(2));
if((ocr_30750_2__30789 === false)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === false)){
try{var ocr_30749_0__30778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30749_0__30778,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30824){if((e30824 instanceof Error)){
var e__29737__auto____$11 = e30824;
if((e__29737__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$11;
}
} else {
throw e30824;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30823){if((e30823 instanceof Error)){
var e__29737__auto____$11 = e30823;
if((e__29737__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$11;
}
} else {
throw e30823;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30803){if((e30803 instanceof Error)){
var e__29737__auto____$11 = e30803;
if((e__29737__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_30750_2__30789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(2));
if((ocr_30750_2__30789 === true)){
try{var ocr_30750_0__30787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(0));
if((ocr_30750_0__30787 === true)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30822){if((e30822 instanceof Error)){
var e__29737__auto____$12 = e30822;
if((e__29737__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$12;
}
} else {
throw e30822;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30817){if((e30817 instanceof Error)){
var e__29737__auto____$12 = e30817;
if((e__29737__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_30750_0__30787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(0));
if((ocr_30750_0__30787 === false)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30821){if((e30821 instanceof Error)){
var e__29737__auto____$13 = e30821;
if((e__29737__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$13;
}
} else {
throw e30821;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30818){if((e30818 instanceof Error)){
var e__29737__auto____$13 = e30818;
if((e__29737__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_30750_0__30787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(0));
if((ocr_30750_0__30787 === true)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30820){if((e30820 instanceof Error)){
var e__29737__auto____$14 = e30820;
if((e__29737__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$14;
}
} else {
throw e30820;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30819){if((e30819 instanceof Error)){
var e__29737__auto____$14 = e30819;
if((e__29737__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$14;
}
} else {
throw e30819;

}
}} else {
throw e__29737__auto____$13;
}
} else {
throw e30818;

}
}} else {
throw e__29737__auto____$12;
}
} else {
throw e30817;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30804){if((e30804 instanceof Error)){
var e__29737__auto____$12 = e30804;
if((e__29737__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_30750_2__30789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(2));
if((ocr_30750_2__30789 === false)){
try{var ocr_30750_0__30787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(0));
if((ocr_30750_0__30787 === true)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30816){if((e30816 instanceof Error)){
var e__29737__auto____$13 = e30816;
if((e__29737__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$13;
}
} else {
throw e30816;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30815){if((e30815 instanceof Error)){
var e__29737__auto____$13 = e30815;
if((e__29737__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$13;
}
} else {
throw e30815;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30805){if((e30805 instanceof Error)){
var e__29737__auto____$13 = e30805;
if((e__29737__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_30750_2__30789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(2));
if((ocr_30750_2__30789 === true)){
try{var ocr_30750_0__30787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(0));
if((ocr_30750_0__30787 === false)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30814){if((e30814 instanceof Error)){
var e__29737__auto____$14 = e30814;
if((e__29737__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$14;
}
} else {
throw e30814;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30813){if((e30813 instanceof Error)){
var e__29737__auto____$14 = e30813;
if((e__29737__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$14;
}
} else {
throw e30813;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30806){if((e30806 instanceof Error)){
var e__29737__auto____$14 = e30806;
if((e__29737__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_30750_2__30789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(2));
if((ocr_30750_2__30789 === false)){
try{var ocr_30750_0__30787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(0));
if((ocr_30750_0__30787 === true)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30812){if((e30812 instanceof Error)){
var e__29737__auto____$15 = e30812;
if((e__29737__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$15;
}
} else {
throw e30812;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30808){if((e30808 instanceof Error)){
var e__29737__auto____$15 = e30808;
if((e__29737__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_30750_0__30787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(0));
if((ocr_30750_0__30787 === false)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30810){if((e30810 instanceof Error)){
var e__29737__auto____$16 = e30810;
if((e__29737__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_30750_1__30788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30750,(1));
if((ocr_30750_1__30788 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30749,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30811){if((e30811 instanceof Error)){
var e__29737__auto____$17 = e30811;
if((e__29737__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$17;
}
} else {
throw e30811;

}
}} else {
throw e__29737__auto____$16;
}
} else {
throw e30810;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30809){if((e30809 instanceof Error)){
var e__29737__auto____$16 = e30809;
if((e__29737__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$16;
}
} else {
throw e30809;

}
}} else {
throw e__29737__auto____$15;
}
} else {
throw e30808;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30807){if((e30807 instanceof Error)){
var e__29737__auto____$15 = e30807;
if((e__29737__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$15;
}
} else {
throw e30807;

}
}} else {
throw e__29737__auto____$14;
}
} else {
throw e30806;

}
}} else {
throw e__29737__auto____$13;
}
} else {
throw e30805;

}
}} else {
throw e__29737__auto____$12;
}
} else {
throw e30804;

}
}} else {
throw e__29737__auto____$11;
}
} else {
throw e30803;

}
}} else {
throw e__29737__auto____$10;
}
} else {
throw e30802;

}
}} else {
throw e__29737__auto____$9;
}
} else {
throw e30801;

}
}} else {
throw e__29737__auto____$8;
}
} else {
throw e30800;

}
}} else {
throw e__29737__auto____$7;
}
} else {
throw e30799;

}
}} else {
throw e__29737__auto____$6;
}
} else {
throw e30798;

}
}} else {
throw e__29737__auto____$5;
}
} else {
throw e30797;

}
}} else {
throw e__29737__auto____$4;
}
} else {
throw e30796;

}
}} else {
throw e__29737__auto____$3;
}
} else {
throw e30795;

}
}} else {
throw e__29737__auto____$2;
}
} else {
throw e30794;

}
}} else {
throw e__29737__auto____$1;
}
} else {
throw e30793;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30792){if((e30792 instanceof Error)){
var e__29737__auto____$1 = e30792;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$1;
}
} else {
throw e30792;

}
}} else {
throw e__29737__auto__;
}
} else {
throw e30791;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30790){if((e30790 instanceof Error)){
var e__29737__auto__ = e30790;
if((e__29737__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__29737__auto__;
}
} else {
throw e30790;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_30858 = cljs.core.vec(eav);
var ocr_30859 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_30858)) && ((cljs.core.count(ocr_30858) === 3)))){
try{var ocr_30858_0__30884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30858_0__30884,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30858_1__30885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30858_1__30885,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30858_2__30886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30858_2__30886,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e30948){if((e30948 instanceof Error)){
var e__29737__auto__ = e30948;
if((e__29737__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_30859)) && ((cljs.core.count(ocr_30859) === 3)))){
try{var ocr_30859_2__30889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(2));
if((ocr_30859_2__30889 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30950){if((e30950 instanceof Error)){
var e__29737__auto____$1 = e30950;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_30859_2__30889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(2));
if((ocr_30859_2__30889 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30951){if((e30951 instanceof Error)){
var e__29737__auto____$2 = e30951;
if((e__29737__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$2;
}
} else {
throw e30951;

}
}} else {
throw e__29737__auto____$1;
}
} else {
throw e30950;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30949){if((e30949 instanceof Error)){
var e__29737__auto____$1 = e30949;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$1;
}
} else {
throw e30949;

}
}} else {
throw e__29737__auto__;
}
} else {
throw e30948;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30943){if((e30943 instanceof Error)){
var e__29737__auto__ = e30943;
if((e__29737__auto__ === cljs.core.match.backtrack)){
try{var ocr_30858_2__30886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30858_2__30886,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_30859)) && ((cljs.core.count(ocr_30859) === 3)))){
try{var ocr_30859_1__30891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(1));
if((ocr_30859_1__30891 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30946){if((e30946 instanceof Error)){
var e__29737__auto____$1 = e30946;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_30859_1__30891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(1));
if((ocr_30859_1__30891 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30947){if((e30947 instanceof Error)){
var e__29737__auto____$2 = e30947;
if((e__29737__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$2;
}
} else {
throw e30947;

}
}} else {
throw e__29737__auto____$1;
}
} else {
throw e30946;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30945){if((e30945 instanceof Error)){
var e__29737__auto____$1 = e30945;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$1;
}
} else {
throw e30945;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30944){if((e30944 instanceof Error)){
var e__29737__auto____$1 = e30944;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$1;
}
} else {
throw e30944;

}
}} else {
throw e__29737__auto__;
}
} else {
throw e30943;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30897){if((e30897 instanceof Error)){
var e__29737__auto__ = e30897;
if((e__29737__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_30859)) && ((cljs.core.count(ocr_30859) === 3)))){
try{var ocr_30859_0__30893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(0));
if((ocr_30859_0__30893 === false)){
try{var ocr_30858_1__30885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30858_1__30885,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30858_2__30886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30858_2__30886,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30942){if((e30942 instanceof Error)){
var e__29737__auto____$1 = e30942;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$1;
}
} else {
throw e30942;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30941){if((e30941 instanceof Error)){
var e__29737__auto____$1 = e30941;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$1;
}
} else {
throw e30941;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30899){if((e30899 instanceof Error)){
var e__29737__auto____$1 = e30899;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_30859_0__30893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(0));
if((ocr_30859_0__30893 === true)){
try{var ocr_30858_2__30886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30858_2__30886,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_30858_1__30885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30858_1__30885,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30938){if((e30938 instanceof Error)){
var e__29737__auto____$2 = e30938;
if((e__29737__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_30859_1__30894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(1));
if((ocr_30859_1__30894 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30939){if((e30939 instanceof Error)){
var e__29737__auto____$3 = e30939;
if((e__29737__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_30859_1__30894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(1));
if((ocr_30859_1__30894 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30940){if((e30940 instanceof Error)){
var e__29737__auto____$4 = e30940;
if((e__29737__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$4;
}
} else {
throw e30940;

}
}} else {
throw e__29737__auto____$3;
}
} else {
throw e30939;

}
}} else {
throw e__29737__auto____$2;
}
} else {
throw e30938;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30937){if((e30937 instanceof Error)){
var e__29737__auto____$2 = e30937;
if((e__29737__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$2;
}
} else {
throw e30937;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30900){if((e30900 instanceof Error)){
var e__29737__auto____$2 = e30900;
if((e__29737__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_30859_0__30893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(0));
if((ocr_30859_0__30893 === false)){
try{var ocr_30859_1__30894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(1));
if((ocr_30859_1__30894 === true)){
try{var ocr_30858_2__30886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30858_2__30886,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30936){if((e30936 instanceof Error)){
var e__29737__auto____$3 = e30936;
if((e__29737__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$3;
}
} else {
throw e30936;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30935){if((e30935 instanceof Error)){
var e__29737__auto____$3 = e30935;
if((e__29737__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$3;
}
} else {
throw e30935;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30901){if((e30901 instanceof Error)){
var e__29737__auto____$3 = e30901;
if((e__29737__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_30859_2__30895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(2));
if((ocr_30859_2__30895 === true)){
try{var ocr_30859_0__30893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(0));
if((ocr_30859_0__30893 === true)){
try{var ocr_30858_1__30885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30858_1__30885,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30934){if((e30934 instanceof Error)){
var e__29737__auto____$4 = e30934;
if((e__29737__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$4;
}
} else {
throw e30934;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30933){if((e30933 instanceof Error)){
var e__29737__auto____$4 = e30933;
if((e__29737__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$4;
}
} else {
throw e30933;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30902){if((e30902 instanceof Error)){
var e__29737__auto____$4 = e30902;
if((e__29737__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_30859_2__30895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(2));
if((ocr_30859_2__30895 === false)){
try{var ocr_30859_0__30893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(0));
if((ocr_30859_0__30893 === true)){
try{var ocr_30858_1__30885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30858_1__30885,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30932){if((e30932 instanceof Error)){
var e__29737__auto____$5 = e30932;
if((e__29737__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$5;
}
} else {
throw e30932;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30931){if((e30931 instanceof Error)){
var e__29737__auto____$5 = e30931;
if((e__29737__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$5;
}
} else {
throw e30931;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30903){if((e30903 instanceof Error)){
var e__29737__auto____$5 = e30903;
if((e__29737__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_30859_2__30895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(2));
if((ocr_30859_2__30895 === true)){
try{var ocr_30859_0__30893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(0));
if((ocr_30859_0__30893 === false)){
try{var ocr_30858_1__30885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30858_1__30885,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30930){if((e30930 instanceof Error)){
var e__29737__auto____$6 = e30930;
if((e__29737__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$6;
}
} else {
throw e30930;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30927){if((e30927 instanceof Error)){
var e__29737__auto____$6 = e30927;
if((e__29737__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_30859_1__30894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(1));
if((ocr_30859_1__30894 === true)){
try{var ocr_30858_0__30884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30858_0__30884,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30929){if((e30929 instanceof Error)){
var e__29737__auto____$7 = e30929;
if((e__29737__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$7;
}
} else {
throw e30929;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30928){if((e30928 instanceof Error)){
var e__29737__auto____$7 = e30928;
if((e__29737__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$7;
}
} else {
throw e30928;

}
}} else {
throw e__29737__auto____$6;
}
} else {
throw e30927;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30904){if((e30904 instanceof Error)){
var e__29737__auto____$6 = e30904;
if((e__29737__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_30859_2__30895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(2));
if((ocr_30859_2__30895 === false)){
try{var ocr_30859_1__30894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(1));
if((ocr_30859_1__30894 === true)){
try{var ocr_30858_0__30884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30858_0__30884,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30926){if((e30926 instanceof Error)){
var e__29737__auto____$7 = e30926;
if((e__29737__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$7;
}
} else {
throw e30926;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30925){if((e30925 instanceof Error)){
var e__29737__auto____$7 = e30925;
if((e__29737__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$7;
}
} else {
throw e30925;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30905){if((e30905 instanceof Error)){
var e__29737__auto____$7 = e30905;
if((e__29737__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_30859_2__30895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(2));
if((ocr_30859_2__30895 === true)){
try{var ocr_30859_1__30894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(1));
if((ocr_30859_1__30894 === false)){
try{var ocr_30858_0__30884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_30858_0__30884,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30924){if((e30924 instanceof Error)){
var e__29737__auto____$8 = e30924;
if((e__29737__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$8;
}
} else {
throw e30924;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30918){if((e30918 instanceof Error)){
var e__29737__auto____$8 = e30918;
if((e__29737__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_30859_1__30894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(1));
if((ocr_30859_1__30894 === true)){
try{var ocr_30859_0__30893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(0));
if((ocr_30859_0__30893 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30922){if((e30922 instanceof Error)){
var e__29737__auto____$9 = e30922;
if((e__29737__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_30859_0__30893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(0));
if((ocr_30859_0__30893 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30923){if((e30923 instanceof Error)){
var e__29737__auto____$10 = e30923;
if((e__29737__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$10;
}
} else {
throw e30923;

}
}} else {
throw e__29737__auto____$9;
}
} else {
throw e30922;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30919){if((e30919 instanceof Error)){
var e__29737__auto____$9 = e30919;
if((e__29737__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_30859_1__30894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(1));
if((ocr_30859_1__30894 === false)){
try{var ocr_30859_0__30893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(0));
if((ocr_30859_0__30893 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30921){if((e30921 instanceof Error)){
var e__29737__auto____$10 = e30921;
if((e__29737__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$10;
}
} else {
throw e30921;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30920){if((e30920 instanceof Error)){
var e__29737__auto____$10 = e30920;
if((e__29737__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$10;
}
} else {
throw e30920;

}
}} else {
throw e__29737__auto____$9;
}
} else {
throw e30919;

}
}} else {
throw e__29737__auto____$8;
}
} else {
throw e30918;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30906){if((e30906 instanceof Error)){
var e__29737__auto____$8 = e30906;
if((e__29737__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_30859_2__30895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(2));
if((ocr_30859_2__30895 === false)){
try{var ocr_30859_0__30893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(0));
if((ocr_30859_0__30893 === true)){
try{var ocr_30859_1__30894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(1));
if((ocr_30859_1__30894 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30917){if((e30917 instanceof Error)){
var e__29737__auto____$9 = e30917;
if((e__29737__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$9;
}
} else {
throw e30917;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30916){if((e30916 instanceof Error)){
var e__29737__auto____$9 = e30916;
if((e__29737__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$9;
}
} else {
throw e30916;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30907){if((e30907 instanceof Error)){
var e__29737__auto____$9 = e30907;
if((e__29737__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_30859_2__30895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(2));
if((ocr_30859_2__30895 === true)){
try{var ocr_30859_0__30893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(0));
if((ocr_30859_0__30893 === false)){
try{var ocr_30859_1__30894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(1));
if((ocr_30859_1__30894 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30915){if((e30915 instanceof Error)){
var e__29737__auto____$10 = e30915;
if((e__29737__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$10;
}
} else {
throw e30915;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30914){if((e30914 instanceof Error)){
var e__29737__auto____$10 = e30914;
if((e__29737__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$10;
}
} else {
throw e30914;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30908){if((e30908 instanceof Error)){
var e__29737__auto____$10 = e30908;
if((e__29737__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_30859_2__30895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(2));
if((ocr_30859_2__30895 === false)){
try{var ocr_30859_0__30893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(0));
if((ocr_30859_0__30893 === true)){
try{var ocr_30859_1__30894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(1));
if((ocr_30859_1__30894 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30913){if((e30913 instanceof Error)){
var e__29737__auto____$11 = e30913;
if((e__29737__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$11;
}
} else {
throw e30913;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30910){if((e30910 instanceof Error)){
var e__29737__auto____$11 = e30910;
if((e__29737__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_30859_0__30893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(0));
if((ocr_30859_0__30893 === false)){
try{var ocr_30859_1__30894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30859,(1));
if((ocr_30859_1__30894 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_30858,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e30912){if((e30912 instanceof Error)){
var e__29737__auto____$12 = e30912;
if((e__29737__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$12;
}
} else {
throw e30912;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30911){if((e30911 instanceof Error)){
var e__29737__auto____$12 = e30911;
if((e__29737__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$12;
}
} else {
throw e30911;

}
}} else {
throw e__29737__auto____$11;
}
} else {
throw e30910;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30909){if((e30909 instanceof Error)){
var e__29737__auto____$11 = e30909;
if((e__29737__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$11;
}
} else {
throw e30909;

}
}} else {
throw e__29737__auto____$10;
}
} else {
throw e30908;

}
}} else {
throw e__29737__auto____$9;
}
} else {
throw e30907;

}
}} else {
throw e__29737__auto____$8;
}
} else {
throw e30906;

}
}} else {
throw e__29737__auto____$7;
}
} else {
throw e30905;

}
}} else {
throw e__29737__auto____$6;
}
} else {
throw e30904;

}
}} else {
throw e__29737__auto____$5;
}
} else {
throw e30903;

}
}} else {
throw e__29737__auto____$4;
}
} else {
throw e30902;

}
}} else {
throw e__29737__auto____$3;
}
} else {
throw e30901;

}
}} else {
throw e__29737__auto____$2;
}
} else {
throw e30900;

}
}} else {
throw e__29737__auto____$1;
}
} else {
throw e30899;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30898){if((e30898 instanceof Error)){
var e__29737__auto____$1 = e30898;
if((e__29737__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__29737__auto____$1;
}
} else {
throw e30898;

}
}} else {
throw e__29737__auto__;
}
} else {
throw e30897;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e30896){if((e30896 instanceof Error)){
var e__29737__auto__ = e30896;
if((e__29737__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__29737__auto__;
}
} else {
throw e30896;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30953){
var vec__30954 = p__30953;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30954,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30954,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__30952_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__30952_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30958){
var vec__30959 = p__30958;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30959,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30959,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__30957_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__30957_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__30962 = cljs.core.rest(ins);
var G__30963 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__30962,G__30963) : posh.lib.q_analyze.just_qvars.call(null,G__30962,G__30963));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30964_SHARP_){
return cljs.core.zipmap(qvars,p1__30964_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__30965 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30965,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30965,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30965,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30965,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__31145 = var$;
var G__31146 = dbvarmap;
var G__31147 = cljs.core.rest(dbeavs);
var$ = G__31145;
dbvarmap = G__31146;
dbeavs = G__31147;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__30968 = cljs.core.rest(vars);
var G__30969 = dbvarmap;
var G__30970 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__30968,G__30969,G__30970) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__30968,G__30969,G__30970));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__31148 = (n + (1));
var G__31149 = cljs.core.rest(xs__$1);
n = G__31148;
xs__$1 = G__31149;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4174__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4174__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30971_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__30971_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__30971_SHARP_) : type.call(null,p1__30971_SHARP_));
} else {
return p1__30971_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__30972 = cljs.core.rest(ins);
var G__30973 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__30972,G__30973) : posh.lib.q_analyze.make_dbarg_map.call(null,G__30972,G__30973));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30974){
var vec__30975 = p__30974;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30975,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30975,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__30979_SHARP_,p2__30978_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__30978_SHARP_)){
return p1__30979_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__30983 = cljs.core._EQ_;
var expr__30984 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__30983.cljs$core$IFn$_invoke$arity$2 ? pred__30983.cljs$core$IFn$_invoke$arity$2((1),expr__30984) : pred__30983.call(null,(1),expr__30984)))){
return true;
} else {
if(cljs.core.truth_((pred__30983.cljs$core$IFn$_invoke$arity$2 ? pred__30983.cljs$core$IFn$_invoke$arity$2((3),expr__30984) : pred__30983.call(null,(3),expr__30984)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__31153 = cljs.core.first(remaining);
var G__31154 = cljs.core.rest(remaining);
clause = G__31153;
remaining = G__31154;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__31155 = cljs.core.first(remaining);
var G__31156 = cljs.core.rest(remaining);
clause = G__31155;
remaining = G__31156;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__30986(s__30987){
return (new cljs.core.LazySeq(null,(function (){
var s__30987__$1 = s__30987;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30987__$1);
if(temp__5735__auto__){
var s__30987__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30987__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30987__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30989 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30988 = (0);
while(true){
if((i__30988 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30988);
cljs.core.chunk_append(b__30989,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__31157 = (i__30988 + (1));
i__30988 = G__31157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30989),posh$lib$q_analyze$resolve_any_idents_$_iter__30986(cljs.core.chunk_rest(s__30987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30989),null);
}
} else {
var var_value = cljs.core.first(s__30987__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__30986(cljs.core.rest(s__30987__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30994){
var vec__30995 = p__30994;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30995,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30995,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30998){
var vec__30999 = p__30998;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30999,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30999,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31002){
var vec__31003 = p__31002;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31003,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31003,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31006){
var vec__31007 = p__31006;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31007,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31007,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__31011 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__31012 = cljs.core.vec(r);
var fexpr__31010 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__31010.cljs$core$IFn$_invoke$arity$2 ? fexpr__31010.cljs$core$IFn$_invoke$arity$2(G__31011,G__31012) : fexpr__31010.call(null,G__31011,G__31012));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31013){
var vec__31014 = p__31013;
var seq__31015 = cljs.core.seq(vec__31014);
var first__31016 = cljs.core.first(seq__31015);
var seq__31015__$1 = cljs.core.next(seq__31015);
var db = first__31016;
var eav = seq__31015__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31017){
var vec__31018 = p__31017;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31018,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31018,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__30992_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__30992_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__30992_SHARP_) : linked_qvars.call(null,p1__30992_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__30992_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__30993_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__30993_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__30993_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
