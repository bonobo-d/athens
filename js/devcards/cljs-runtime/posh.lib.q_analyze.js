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
var G__25747 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25747) : stop_at_QMARK_.call(null,G__25747));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__25748 = stop_at_QMARK_;
var G__25749 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__25748,G__25749) : posh.lib.q_analyze.take_until.call(null,G__25748,G__25749));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__25751 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__25751) : rest_at_QMARK_.call(null,G__25751));
}
})())){
return ls;
} else {
var G__26128 = rest_at_QMARK_;
var G__26129 = cljs.core.rest(ls);
rest_at_QMARK_ = G__26128;
ls = G__26129;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__25752 = split_at_QMARK_;
var G__25753 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__25752,G__25753) : posh.lib.q_analyze.split_list_at.call(null,G__25752,G__25753));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__25754 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__25754) : posh.lib.q_analyze.get_all_vars.call(null,G__25754));
})(),(function (){var G__25755 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__25755) : posh.lib.q_analyze.get_all_vars.call(null,G__25755));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__25756 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__25756) : posh.lib.q_analyze.get_all_vars.call(null,G__25756));
})(),cljs.core.first(query));
} else {
var G__25757 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__25757) : posh.lib.q_analyze.get_all_vars.call(null,G__25757));

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
var G__25759 = cljs.core.rest(eav);
var G__25760 = (n - (1));
var G__25761 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__25762 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__25759,G__25760,G__25761,G__25762) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__25759,G__25760,G__25761,G__25762));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__25763 = cljs.core.rest(eav);
var G__25764 = (n - (1));
var G__25765 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__25766 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__25763,G__25764,G__25765,G__25766) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__25763,G__25764,G__25765,G__25766));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__25767 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__25767) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__25767));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__25768 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__25768) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__25768));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__25772 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25772) : posh.lib.q_analyze.get_eavs.call(null,G__25772));
})(),(function (){var G__25774 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25774) : posh.lib.q_analyze.get_eavs.call(null,G__25774));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__25775 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25775) : posh.lib.q_analyze.get_eavs.call(null,G__25775));
})(),(function (){var G__25776 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25776) : posh.lib.q_analyze.get_eavs.call(null,G__25776));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__25777 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25777) : posh.lib.q_analyze.get_eavs.call(null,G__25777));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_25788 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_25788)) && ((cljs.core.count(ocr_25788) === 2)))){
try{var ocr_25788_0__25801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25788,(0));
if(((cljs.core.vector_QMARK_(ocr_25788_0__25801)) && ((cljs.core.count(ocr_25788_0__25801) === 5)))){
try{var ocr_25788_0__25801_0__25803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25788_0__25801,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25788_0__25801_0__25803,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25788_0__25801,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25788_0__25801,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25788_0__25801,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25788,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__25812 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25812) : posh.lib.q_analyze.get_eavs.call(null,G__25812));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e25811){if((e25811 instanceof Error)){
var e__24844__auto__ = e25811;
if((e__24844__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto__;
}
} else {
throw e25811;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25810){if((e25810 instanceof Error)){
var e__24844__auto__ = e25810;
if((e__24844__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto__;
}
} else {
throw e25810;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25808){if((e25808 instanceof Error)){
var e__24844__auto__ = e25808;
if((e__24844__auto__ === cljs.core.match.backtrack)){
var G__25809 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25809) : posh.lib.q_analyze.get_eavs.call(null,G__25809));
} else {
throw e__24844__auto__;
}
} else {
throw e25808;

}
}} else {
var G__25813 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__25813) : posh.lib.q_analyze.get_eavs.call(null,G__25813));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__25814){
var vec__25815 = p__25814;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25815,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25818_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__25818_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__25818_SHARP_);
} else {
return p1__25818_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__25819 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__25819) : posh.lib.q_analyze.count_qvars.call(null,G__25819));
})(),(function (){var G__25820 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__25820) : posh.lib.q_analyze.count_qvars.call(null,G__25820));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__25821 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__25821) : posh.lib.q_analyze.count_qvars.call(null,G__25821));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__25822(s__25823){
return (new cljs.core.LazySeq(null,(function (){
var s__25823__$1 = s__25823;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25823__$1);
if(temp__5735__auto__){
var s__25823__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25823__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__25823__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__25825 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__25824 = (0);
while(true){
if((i__25824 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__25824);
cljs.core.chunk_append(b__25825,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__26162 = (i__25824 + (1));
i__25824 = G__26162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25825),posh$lib$q_analyze$fill_qvar_set_$_iter__25822(cljs.core.chunk_rest(s__25823__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25825),null);
}
} else {
var r = cljs.core.first(s__25823__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__25822(cljs.core.rest(s__25823__$2)));
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
return cljs.core.cons((function (){var G__25826 = cljs.core.first(seq1);
var G__25827 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25826,G__25827) : f.call(null,G__25826,G__25827));
})(),(function (){var G__25828 = f;
var G__25829 = cljs.core.rest(seq1);
var G__25830 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__25828,G__25829,G__25830) : posh.lib.q_analyze.seq_merge_with.call(null,G__25828,G__25829,G__25830));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__25833){
var vec__25834 = p__25833;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25834,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25834,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25834,(2),null);
var eav = vec__25834;
var vec__25837 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25837,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25837,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25837,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__25840(s__25841){
return (new cljs.core.LazySeq(null,(function (){
var s__25841__$1 = s__25841;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__25841__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__25841__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__25840_$_iter__25842(s__25843){
return (new cljs.core.LazySeq(null,((function (s__25841__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav){
return (function (){
var s__25843__$1 = s__25843;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__25843__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__25843__$1,s__25841__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__25840_$_iter__25842_$_iter__25844(s__25845){
return (new cljs.core.LazySeq(null,((function (s__25843__$1,s__25841__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav){
return (function (){
var s__25845__$1 = s__25845;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__25845__$1);
if(temp__5735__auto____$2){
var s__25845__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__25845__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__25845__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__25847 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__25846 = (0);
while(true){
if((i__25846 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__25846);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__25846,s__25845__$1,s__25843__$1,s__25841__$1,vv,c__4580__auto__,size__4581__auto__,b__25847,s__25845__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav){
return (function (p1__25831_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__25831_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__25846,s__25845__$1,s__25843__$1,s__25841__$1,vv,c__4580__auto__,size__4581__auto__,b__25847,s__25845__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__25846,s__25845__$1,s__25843__$1,s__25841__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__25847,s__25845__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav){
return (function (p__25848){
var vec__25849 = p__25848;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25849,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25849,(1),null);
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
});})(i__25846,s__25845__$1,s__25843__$1,s__25841__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__25847,s__25845__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__25846,s__25845__$1,s__25843__$1,s__25841__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__25847,s__25845__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav){
return (function (p1__25832_SHARP_){
if(cljs.core.truth_(p1__25832_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__25846,s__25845__$1,s__25843__$1,s__25841__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__25847,s__25845__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__25847,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__26164 = (i__25846 + (1));
i__25846 = G__26164;
continue;
} else {
var G__26165 = (i__25846 + (1));
i__25846 = G__26165;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25847),posh$lib$q_analyze$pattern_from_eav__old_$_iter__25840_$_iter__25842_$_iter__25844(cljs.core.chunk_rest(s__25845__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25847),null);
}
} else {
var vv = cljs.core.first(s__25845__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__25845__$1,s__25843__$1,s__25841__$1,vv,s__25845__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav){
return (function (p1__25831_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__25831_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__25845__$1,s__25843__$1,s__25841__$1,vv,s__25845__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__25845__$1,s__25843__$1,s__25841__$1,wildcard_count,vv,s__25845__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav){
return (function (p__25852){
var vec__25853 = p__25852;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25853,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25853,(1),null);
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
});})(s__25845__$1,s__25843__$1,s__25841__$1,wildcard_count,vv,s__25845__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__25845__$1,s__25843__$1,s__25841__$1,wildcard_count,exposed_qvars,vv,s__25845__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav){
return (function (p1__25832_SHARP_){
if(cljs.core.truth_(p1__25832_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__25845__$1,s__25843__$1,s__25841__$1,wildcard_count,exposed_qvars,vv,s__25845__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__25840_$_iter__25842_$_iter__25844(cljs.core.rest(s__25845__$2)));
} else {
var G__26166 = cljs.core.rest(s__25845__$2);
s__25845__$1 = G__26166;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__25843__$1,s__25841__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav))
,null,null));
});})(s__25843__$1,s__25841__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__25840_$_iter__25842(cljs.core.rest(s__25843__$1)));
} else {
var G__26167 = cljs.core.rest(s__25843__$1);
s__25843__$1 = G__26167;
continue;
}
} else {
return null;
}
break;
}
});})(s__25841__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav))
,null,null));
});})(s__25841__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__25837,qe,qa,qv,vec__25834,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__25840(cljs.core.rest(s__25841__$1)));
} else {
var G__26168 = cljs.core.rest(s__25841__$1);
s__25841__$1 = G__26168;
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
var ocr_25856 = cljs.core.vec(eav);
var ocr_25857 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_25856)) && ((cljs.core.count(ocr_25856) === 3)))){
try{var ocr_25856_0__25885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_0__25885,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25856_1__25886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_1__25886,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25856_2__25887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_2__25887,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25961){if((e25961 instanceof Error)){
var e__24844__auto__ = e25961;
if((e__24844__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_25857)) && ((cljs.core.count(ocr_25857) === 3)))){
try{var ocr_25857_2__25890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(2));
if((ocr_25857_2__25890 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25963){if((e25963 instanceof Error)){
var e__24844__auto____$1 = e25963;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25857_2__25890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(2));
if((ocr_25857_2__25890 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25964){if((e25964 instanceof Error)){
var e__24844__auto____$2 = e25964;
if((e__24844__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$2;
}
} else {
throw e25964;

}
}} else {
throw e__24844__auto____$1;
}
} else {
throw e25963;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25962){if((e25962 instanceof Error)){
var e__24844__auto____$1 = e25962;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$1;
}
} else {
throw e25962;

}
}} else {
throw e__24844__auto__;
}
} else {
throw e25961;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25956){if((e25956 instanceof Error)){
var e__24844__auto__ = e25956;
if((e__24844__auto__ === cljs.core.match.backtrack)){
try{var ocr_25856_2__25887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_2__25887,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_25857)) && ((cljs.core.count(ocr_25857) === 3)))){
try{var ocr_25857_1__25892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25892 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25959){if((e25959 instanceof Error)){
var e__24844__auto____$1 = e25959;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25857_1__25892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25892 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25960){if((e25960 instanceof Error)){
var e__24844__auto____$2 = e25960;
if((e__24844__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$2;
}
} else {
throw e25960;

}
}} else {
throw e__24844__auto____$1;
}
} else {
throw e25959;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25958){if((e25958 instanceof Error)){
var e__24844__auto____$1 = e25958;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$1;
}
} else {
throw e25958;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25957){if((e25957 instanceof Error)){
var e__24844__auto____$1 = e25957;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$1;
}
} else {
throw e25957;

}
}} else {
throw e__24844__auto__;
}
} else {
throw e25956;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25898){if((e25898 instanceof Error)){
var e__24844__auto__ = e25898;
if((e__24844__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_25857)) && ((cljs.core.count(ocr_25857) === 3)))){
try{var ocr_25857_0__25894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(0));
if((ocr_25857_0__25894 === false)){
try{var ocr_25856_1__25886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_1__25886,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25856_2__25887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_2__25887,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25955){if((e25955 instanceof Error)){
var e__24844__auto____$1 = e25955;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$1;
}
} else {
throw e25955;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25954){if((e25954 instanceof Error)){
var e__24844__auto____$1 = e25954;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$1;
}
} else {
throw e25954;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25900){if((e25900 instanceof Error)){
var e__24844__auto____$1 = e25900;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25857_0__25894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(0));
if((ocr_25857_0__25894 === true)){
try{var ocr_25856_2__25887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_2__25887,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25856_1__25886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_1__25886,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25951){if((e25951 instanceof Error)){
var e__24844__auto____$2 = e25951;
if((e__24844__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25952){if((e25952 instanceof Error)){
var e__24844__auto____$3 = e25952;
if((e__24844__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25953){if((e25953 instanceof Error)){
var e__24844__auto____$4 = e25953;
if((e__24844__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$4;
}
} else {
throw e25953;

}
}} else {
throw e__24844__auto____$3;
}
} else {
throw e25952;

}
}} else {
throw e__24844__auto____$2;
}
} else {
throw e25951;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25950){if((e25950 instanceof Error)){
var e__24844__auto____$2 = e25950;
if((e__24844__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$2;
}
} else {
throw e25950;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25901){if((e25901 instanceof Error)){
var e__24844__auto____$2 = e25901;
if((e__24844__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_25857_0__25894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(0));
if((ocr_25857_0__25894 === false)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === true)){
try{var ocr_25856_2__25887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_2__25887,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25949){if((e25949 instanceof Error)){
var e__24844__auto____$3 = e25949;
if((e__24844__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$3;
}
} else {
throw e25949;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25946){if((e25946 instanceof Error)){
var e__24844__auto____$3 = e25946;
if((e__24844__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === false)){
try{var ocr_25856_2__25887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_2__25887,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25948){if((e25948 instanceof Error)){
var e__24844__auto____$4 = e25948;
if((e__24844__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$4;
}
} else {
throw e25948;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25947){if((e25947 instanceof Error)){
var e__24844__auto____$4 = e25947;
if((e__24844__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$4;
}
} else {
throw e25947;

}
}} else {
throw e__24844__auto____$3;
}
} else {
throw e25946;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25902){if((e25902 instanceof Error)){
var e__24844__auto____$3 = e25902;
if((e__24844__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_25857_2__25896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(2));
if((ocr_25857_2__25896 === true)){
try{var ocr_25857_0__25894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(0));
if((ocr_25857_0__25894 === true)){
try{var ocr_25856_1__25886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_1__25886,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25945){if((e25945 instanceof Error)){
var e__24844__auto____$4 = e25945;
if((e__24844__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$4;
}
} else {
throw e25945;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25944){if((e25944 instanceof Error)){
var e__24844__auto____$4 = e25944;
if((e__24844__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$4;
}
} else {
throw e25944;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25903){if((e25903 instanceof Error)){
var e__24844__auto____$4 = e25903;
if((e__24844__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_25857_2__25896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(2));
if((ocr_25857_2__25896 === false)){
try{var ocr_25857_0__25894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(0));
if((ocr_25857_0__25894 === true)){
try{var ocr_25856_1__25886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_1__25886,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25943){if((e25943 instanceof Error)){
var e__24844__auto____$5 = e25943;
if((e__24844__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$5;
}
} else {
throw e25943;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25942){if((e25942 instanceof Error)){
var e__24844__auto____$5 = e25942;
if((e__24844__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$5;
}
} else {
throw e25942;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25904){if((e25904 instanceof Error)){
var e__24844__auto____$5 = e25904;
if((e__24844__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_25857_2__25896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(2));
if((ocr_25857_2__25896 === true)){
try{var ocr_25857_0__25894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(0));
if((ocr_25857_0__25894 === false)){
try{var ocr_25856_1__25886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_1__25886,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25941){if((e25941 instanceof Error)){
var e__24844__auto____$6 = e25941;
if((e__24844__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$6;
}
} else {
throw e25941;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25940){if((e25940 instanceof Error)){
var e__24844__auto____$6 = e25940;
if((e__24844__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$6;
}
} else {
throw e25940;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25905){if((e25905 instanceof Error)){
var e__24844__auto____$6 = e25905;
if((e__24844__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_25857_2__25896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(2));
if((ocr_25857_2__25896 === false)){
try{var ocr_25857_0__25894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(0));
if((ocr_25857_0__25894 === false)){
try{var ocr_25856_1__25886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_1__25886,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25939){if((e25939 instanceof Error)){
var e__24844__auto____$7 = e25939;
if((e__24844__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$7;
}
} else {
throw e25939;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25938){if((e25938 instanceof Error)){
var e__24844__auto____$7 = e25938;
if((e__24844__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$7;
}
} else {
throw e25938;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25906){if((e25906 instanceof Error)){
var e__24844__auto____$7 = e25906;
if((e__24844__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_25857_2__25896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(2));
if((ocr_25857_2__25896 === true)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === true)){
try{var ocr_25856_0__25885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_0__25885,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25937){if((e25937 instanceof Error)){
var e__24844__auto____$8 = e25937;
if((e__24844__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$8;
}
} else {
throw e25937;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25936){if((e25936 instanceof Error)){
var e__24844__auto____$8 = e25936;
if((e__24844__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$8;
}
} else {
throw e25936;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25907){if((e25907 instanceof Error)){
var e__24844__auto____$8 = e25907;
if((e__24844__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_25857_2__25896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(2));
if((ocr_25857_2__25896 === false)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === true)){
try{var ocr_25856_0__25885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_0__25885,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25935){if((e25935 instanceof Error)){
var e__24844__auto____$9 = e25935;
if((e__24844__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$9;
}
} else {
throw e25935;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25934){if((e25934 instanceof Error)){
var e__24844__auto____$9 = e25934;
if((e__24844__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$9;
}
} else {
throw e25934;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25908){if((e25908 instanceof Error)){
var e__24844__auto____$9 = e25908;
if((e__24844__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_25857_2__25896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(2));
if((ocr_25857_2__25896 === true)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === false)){
try{var ocr_25856_0__25885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_0__25885,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25933){if((e25933 instanceof Error)){
var e__24844__auto____$10 = e25933;
if((e__24844__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$10;
}
} else {
throw e25933;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25932){if((e25932 instanceof Error)){
var e__24844__auto____$10 = e25932;
if((e__24844__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$10;
}
} else {
throw e25932;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25909){if((e25909 instanceof Error)){
var e__24844__auto____$10 = e25909;
if((e__24844__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_25857_2__25896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(2));
if((ocr_25857_2__25896 === false)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === false)){
try{var ocr_25856_0__25885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25856_0__25885,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25931){if((e25931 instanceof Error)){
var e__24844__auto____$11 = e25931;
if((e__24844__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$11;
}
} else {
throw e25931;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25930){if((e25930 instanceof Error)){
var e__24844__auto____$11 = e25930;
if((e__24844__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$11;
}
} else {
throw e25930;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25910){if((e25910 instanceof Error)){
var e__24844__auto____$11 = e25910;
if((e__24844__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_25857_2__25896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(2));
if((ocr_25857_2__25896 === true)){
try{var ocr_25857_0__25894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(0));
if((ocr_25857_0__25894 === true)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25929){if((e25929 instanceof Error)){
var e__24844__auto____$12 = e25929;
if((e__24844__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$12;
}
} else {
throw e25929;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25924){if((e25924 instanceof Error)){
var e__24844__auto____$12 = e25924;
if((e__24844__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_25857_0__25894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(0));
if((ocr_25857_0__25894 === false)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25928){if((e25928 instanceof Error)){
var e__24844__auto____$13 = e25928;
if((e__24844__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$13;
}
} else {
throw e25928;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25925){if((e25925 instanceof Error)){
var e__24844__auto____$13 = e25925;
if((e__24844__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_25857_0__25894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(0));
if((ocr_25857_0__25894 === true)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25927){if((e25927 instanceof Error)){
var e__24844__auto____$14 = e25927;
if((e__24844__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$14;
}
} else {
throw e25927;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25926){if((e25926 instanceof Error)){
var e__24844__auto____$14 = e25926;
if((e__24844__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$14;
}
} else {
throw e25926;

}
}} else {
throw e__24844__auto____$13;
}
} else {
throw e25925;

}
}} else {
throw e__24844__auto____$12;
}
} else {
throw e25924;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25911){if((e25911 instanceof Error)){
var e__24844__auto____$12 = e25911;
if((e__24844__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_25857_2__25896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(2));
if((ocr_25857_2__25896 === false)){
try{var ocr_25857_0__25894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(0));
if((ocr_25857_0__25894 === true)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25923){if((e25923 instanceof Error)){
var e__24844__auto____$13 = e25923;
if((e__24844__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$13;
}
} else {
throw e25923;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25922){if((e25922 instanceof Error)){
var e__24844__auto____$13 = e25922;
if((e__24844__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$13;
}
} else {
throw e25922;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25912){if((e25912 instanceof Error)){
var e__24844__auto____$13 = e25912;
if((e__24844__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_25857_2__25896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(2));
if((ocr_25857_2__25896 === true)){
try{var ocr_25857_0__25894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(0));
if((ocr_25857_0__25894 === false)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25921){if((e25921 instanceof Error)){
var e__24844__auto____$14 = e25921;
if((e__24844__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$14;
}
} else {
throw e25921;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25920){if((e25920 instanceof Error)){
var e__24844__auto____$14 = e25920;
if((e__24844__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$14;
}
} else {
throw e25920;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25913){if((e25913 instanceof Error)){
var e__24844__auto____$14 = e25913;
if((e__24844__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_25857_2__25896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(2));
if((ocr_25857_2__25896 === false)){
try{var ocr_25857_0__25894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(0));
if((ocr_25857_0__25894 === true)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25919){if((e25919 instanceof Error)){
var e__24844__auto____$15 = e25919;
if((e__24844__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$15;
}
} else {
throw e25919;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25915){if((e25915 instanceof Error)){
var e__24844__auto____$15 = e25915;
if((e__24844__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_25857_0__25894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(0));
if((ocr_25857_0__25894 === false)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25917){if((e25917 instanceof Error)){
var e__24844__auto____$16 = e25917;
if((e__24844__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_25857_1__25895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25857,(1));
if((ocr_25857_1__25895 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25856,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e25918){if((e25918 instanceof Error)){
var e__24844__auto____$17 = e25918;
if((e__24844__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$17;
}
} else {
throw e25918;

}
}} else {
throw e__24844__auto____$16;
}
} else {
throw e25917;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25916){if((e25916 instanceof Error)){
var e__24844__auto____$16 = e25916;
if((e__24844__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$16;
}
} else {
throw e25916;

}
}} else {
throw e__24844__auto____$15;
}
} else {
throw e25915;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25914){if((e25914 instanceof Error)){
var e__24844__auto____$15 = e25914;
if((e__24844__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$15;
}
} else {
throw e25914;

}
}} else {
throw e__24844__auto____$14;
}
} else {
throw e25913;

}
}} else {
throw e__24844__auto____$13;
}
} else {
throw e25912;

}
}} else {
throw e__24844__auto____$12;
}
} else {
throw e25911;

}
}} else {
throw e__24844__auto____$11;
}
} else {
throw e25910;

}
}} else {
throw e__24844__auto____$10;
}
} else {
throw e25909;

}
}} else {
throw e__24844__auto____$9;
}
} else {
throw e25908;

}
}} else {
throw e__24844__auto____$8;
}
} else {
throw e25907;

}
}} else {
throw e__24844__auto____$7;
}
} else {
throw e25906;

}
}} else {
throw e__24844__auto____$6;
}
} else {
throw e25905;

}
}} else {
throw e__24844__auto____$5;
}
} else {
throw e25904;

}
}} else {
throw e__24844__auto____$4;
}
} else {
throw e25903;

}
}} else {
throw e__24844__auto____$3;
}
} else {
throw e25902;

}
}} else {
throw e__24844__auto____$2;
}
} else {
throw e25901;

}
}} else {
throw e__24844__auto____$1;
}
} else {
throw e25900;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25899){if((e25899 instanceof Error)){
var e__24844__auto____$1 = e25899;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$1;
}
} else {
throw e25899;

}
}} else {
throw e__24844__auto__;
}
} else {
throw e25898;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e25897){if((e25897 instanceof Error)){
var e__24844__auto__ = e25897;
if((e__24844__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__24844__auto__;
}
} else {
throw e25897;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_25965 = cljs.core.vec(eav);
var ocr_25966 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_25965)) && ((cljs.core.count(ocr_25965) === 3)))){
try{var ocr_25965_0__25991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25965_0__25991,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25965_1__25992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25965_1__25992,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25965_2__25993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25965_2__25993,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e26055){if((e26055 instanceof Error)){
var e__24844__auto__ = e26055;
if((e__24844__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_25966)) && ((cljs.core.count(ocr_25966) === 3)))){
try{var ocr_25966_2__25996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(2));
if((ocr_25966_2__25996 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26057){if((e26057 instanceof Error)){
var e__24844__auto____$1 = e26057;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25966_2__25996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(2));
if((ocr_25966_2__25996 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26058){if((e26058 instanceof Error)){
var e__24844__auto____$2 = e26058;
if((e__24844__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$2;
}
} else {
throw e26058;

}
}} else {
throw e__24844__auto____$1;
}
} else {
throw e26057;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26056){if((e26056 instanceof Error)){
var e__24844__auto____$1 = e26056;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$1;
}
} else {
throw e26056;

}
}} else {
throw e__24844__auto__;
}
} else {
throw e26055;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26050){if((e26050 instanceof Error)){
var e__24844__auto__ = e26050;
if((e__24844__auto__ === cljs.core.match.backtrack)){
try{var ocr_25965_2__25993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25965_2__25993,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_25966)) && ((cljs.core.count(ocr_25966) === 3)))){
try{var ocr_25966_1__25998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(1));
if((ocr_25966_1__25998 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26053){if((e26053 instanceof Error)){
var e__24844__auto____$1 = e26053;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25966_1__25998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(1));
if((ocr_25966_1__25998 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26054){if((e26054 instanceof Error)){
var e__24844__auto____$2 = e26054;
if((e__24844__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$2;
}
} else {
throw e26054;

}
}} else {
throw e__24844__auto____$1;
}
} else {
throw e26053;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26052){if((e26052 instanceof Error)){
var e__24844__auto____$1 = e26052;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$1;
}
} else {
throw e26052;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26051){if((e26051 instanceof Error)){
var e__24844__auto____$1 = e26051;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$1;
}
} else {
throw e26051;

}
}} else {
throw e__24844__auto__;
}
} else {
throw e26050;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26004){if((e26004 instanceof Error)){
var e__24844__auto__ = e26004;
if((e__24844__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_25966)) && ((cljs.core.count(ocr_25966) === 3)))){
try{var ocr_25966_0__26000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(0));
if((ocr_25966_0__26000 === false)){
try{var ocr_25965_1__25992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25965_1__25992,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25965_2__25993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25965_2__25993,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26049){if((e26049 instanceof Error)){
var e__24844__auto____$1 = e26049;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$1;
}
} else {
throw e26049;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26048){if((e26048 instanceof Error)){
var e__24844__auto____$1 = e26048;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$1;
}
} else {
throw e26048;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26006){if((e26006 instanceof Error)){
var e__24844__auto____$1 = e26006;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_25966_0__26000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(0));
if((ocr_25966_0__26000 === true)){
try{var ocr_25965_2__25993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25965_2__25993,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_25965_1__25992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25965_1__25992,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26045){if((e26045 instanceof Error)){
var e__24844__auto____$2 = e26045;
if((e__24844__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_25966_1__26001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(1));
if((ocr_25966_1__26001 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26046){if((e26046 instanceof Error)){
var e__24844__auto____$3 = e26046;
if((e__24844__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_25966_1__26001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(1));
if((ocr_25966_1__26001 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26047){if((e26047 instanceof Error)){
var e__24844__auto____$4 = e26047;
if((e__24844__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$4;
}
} else {
throw e26047;

}
}} else {
throw e__24844__auto____$3;
}
} else {
throw e26046;

}
}} else {
throw e__24844__auto____$2;
}
} else {
throw e26045;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26044){if((e26044 instanceof Error)){
var e__24844__auto____$2 = e26044;
if((e__24844__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$2;
}
} else {
throw e26044;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26007){if((e26007 instanceof Error)){
var e__24844__auto____$2 = e26007;
if((e__24844__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_25966_0__26000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(0));
if((ocr_25966_0__26000 === false)){
try{var ocr_25966_1__26001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(1));
if((ocr_25966_1__26001 === true)){
try{var ocr_25965_2__25993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25965_2__25993,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26043){if((e26043 instanceof Error)){
var e__24844__auto____$3 = e26043;
if((e__24844__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$3;
}
} else {
throw e26043;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26042){if((e26042 instanceof Error)){
var e__24844__auto____$3 = e26042;
if((e__24844__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$3;
}
} else {
throw e26042;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26008){if((e26008 instanceof Error)){
var e__24844__auto____$3 = e26008;
if((e__24844__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_25966_2__26002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(2));
if((ocr_25966_2__26002 === true)){
try{var ocr_25966_0__26000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(0));
if((ocr_25966_0__26000 === true)){
try{var ocr_25965_1__25992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25965_1__25992,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26041){if((e26041 instanceof Error)){
var e__24844__auto____$4 = e26041;
if((e__24844__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$4;
}
} else {
throw e26041;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26040){if((e26040 instanceof Error)){
var e__24844__auto____$4 = e26040;
if((e__24844__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$4;
}
} else {
throw e26040;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26009){if((e26009 instanceof Error)){
var e__24844__auto____$4 = e26009;
if((e__24844__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_25966_2__26002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(2));
if((ocr_25966_2__26002 === false)){
try{var ocr_25966_0__26000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(0));
if((ocr_25966_0__26000 === true)){
try{var ocr_25965_1__25992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25965_1__25992,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26039){if((e26039 instanceof Error)){
var e__24844__auto____$5 = e26039;
if((e__24844__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$5;
}
} else {
throw e26039;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26038){if((e26038 instanceof Error)){
var e__24844__auto____$5 = e26038;
if((e__24844__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$5;
}
} else {
throw e26038;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26010){if((e26010 instanceof Error)){
var e__24844__auto____$5 = e26010;
if((e__24844__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_25966_2__26002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(2));
if((ocr_25966_2__26002 === true)){
try{var ocr_25966_0__26000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(0));
if((ocr_25966_0__26000 === false)){
try{var ocr_25965_1__25992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25965_1__25992,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26037){if((e26037 instanceof Error)){
var e__24844__auto____$6 = e26037;
if((e__24844__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$6;
}
} else {
throw e26037;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26034){if((e26034 instanceof Error)){
var e__24844__auto____$6 = e26034;
if((e__24844__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_25966_1__26001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(1));
if((ocr_25966_1__26001 === true)){
try{var ocr_25965_0__25991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25965_0__25991,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26036){if((e26036 instanceof Error)){
var e__24844__auto____$7 = e26036;
if((e__24844__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$7;
}
} else {
throw e26036;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26035){if((e26035 instanceof Error)){
var e__24844__auto____$7 = e26035;
if((e__24844__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$7;
}
} else {
throw e26035;

}
}} else {
throw e__24844__auto____$6;
}
} else {
throw e26034;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26011){if((e26011 instanceof Error)){
var e__24844__auto____$6 = e26011;
if((e__24844__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_25966_2__26002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(2));
if((ocr_25966_2__26002 === false)){
try{var ocr_25966_1__26001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(1));
if((ocr_25966_1__26001 === true)){
try{var ocr_25965_0__25991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25965_0__25991,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26033){if((e26033 instanceof Error)){
var e__24844__auto____$7 = e26033;
if((e__24844__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$7;
}
} else {
throw e26033;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26032){if((e26032 instanceof Error)){
var e__24844__auto____$7 = e26032;
if((e__24844__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$7;
}
} else {
throw e26032;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26012){if((e26012 instanceof Error)){
var e__24844__auto____$7 = e26012;
if((e__24844__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_25966_2__26002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(2));
if((ocr_25966_2__26002 === true)){
try{var ocr_25966_1__26001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(1));
if((ocr_25966_1__26001 === false)){
try{var ocr_25965_0__25991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_25965_0__25991,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26031){if((e26031 instanceof Error)){
var e__24844__auto____$8 = e26031;
if((e__24844__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$8;
}
} else {
throw e26031;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26025){if((e26025 instanceof Error)){
var e__24844__auto____$8 = e26025;
if((e__24844__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_25966_1__26001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(1));
if((ocr_25966_1__26001 === true)){
try{var ocr_25966_0__26000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(0));
if((ocr_25966_0__26000 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26029){if((e26029 instanceof Error)){
var e__24844__auto____$9 = e26029;
if((e__24844__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_25966_0__26000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(0));
if((ocr_25966_0__26000 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26030){if((e26030 instanceof Error)){
var e__24844__auto____$10 = e26030;
if((e__24844__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$10;
}
} else {
throw e26030;

}
}} else {
throw e__24844__auto____$9;
}
} else {
throw e26029;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26026){if((e26026 instanceof Error)){
var e__24844__auto____$9 = e26026;
if((e__24844__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_25966_1__26001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(1));
if((ocr_25966_1__26001 === false)){
try{var ocr_25966_0__26000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(0));
if((ocr_25966_0__26000 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26028){if((e26028 instanceof Error)){
var e__24844__auto____$10 = e26028;
if((e__24844__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$10;
}
} else {
throw e26028;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26027){if((e26027 instanceof Error)){
var e__24844__auto____$10 = e26027;
if((e__24844__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$10;
}
} else {
throw e26027;

}
}} else {
throw e__24844__auto____$9;
}
} else {
throw e26026;

}
}} else {
throw e__24844__auto____$8;
}
} else {
throw e26025;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26013){if((e26013 instanceof Error)){
var e__24844__auto____$8 = e26013;
if((e__24844__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_25966_2__26002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(2));
if((ocr_25966_2__26002 === false)){
try{var ocr_25966_0__26000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(0));
if((ocr_25966_0__26000 === true)){
try{var ocr_25966_1__26001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(1));
if((ocr_25966_1__26001 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26024){if((e26024 instanceof Error)){
var e__24844__auto____$9 = e26024;
if((e__24844__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$9;
}
} else {
throw e26024;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26023){if((e26023 instanceof Error)){
var e__24844__auto____$9 = e26023;
if((e__24844__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$9;
}
} else {
throw e26023;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26014){if((e26014 instanceof Error)){
var e__24844__auto____$9 = e26014;
if((e__24844__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_25966_2__26002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(2));
if((ocr_25966_2__26002 === true)){
try{var ocr_25966_0__26000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(0));
if((ocr_25966_0__26000 === false)){
try{var ocr_25966_1__26001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(1));
if((ocr_25966_1__26001 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26022){if((e26022 instanceof Error)){
var e__24844__auto____$10 = e26022;
if((e__24844__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$10;
}
} else {
throw e26022;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26021){if((e26021 instanceof Error)){
var e__24844__auto____$10 = e26021;
if((e__24844__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$10;
}
} else {
throw e26021;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26015){if((e26015 instanceof Error)){
var e__24844__auto____$10 = e26015;
if((e__24844__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_25966_2__26002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(2));
if((ocr_25966_2__26002 === false)){
try{var ocr_25966_0__26000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(0));
if((ocr_25966_0__26000 === true)){
try{var ocr_25966_1__26001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(1));
if((ocr_25966_1__26001 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26020){if((e26020 instanceof Error)){
var e__24844__auto____$11 = e26020;
if((e__24844__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$11;
}
} else {
throw e26020;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26017){if((e26017 instanceof Error)){
var e__24844__auto____$11 = e26017;
if((e__24844__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_25966_0__26000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(0));
if((ocr_25966_0__26000 === false)){
try{var ocr_25966_1__26001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25966,(1));
if((ocr_25966_1__26001 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_25965,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e26019){if((e26019 instanceof Error)){
var e__24844__auto____$12 = e26019;
if((e__24844__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$12;
}
} else {
throw e26019;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26018){if((e26018 instanceof Error)){
var e__24844__auto____$12 = e26018;
if((e__24844__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$12;
}
} else {
throw e26018;

}
}} else {
throw e__24844__auto____$11;
}
} else {
throw e26017;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26016){if((e26016 instanceof Error)){
var e__24844__auto____$11 = e26016;
if((e__24844__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$11;
}
} else {
throw e26016;

}
}} else {
throw e__24844__auto____$10;
}
} else {
throw e26015;

}
}} else {
throw e__24844__auto____$9;
}
} else {
throw e26014;

}
}} else {
throw e__24844__auto____$8;
}
} else {
throw e26013;

}
}} else {
throw e__24844__auto____$7;
}
} else {
throw e26012;

}
}} else {
throw e__24844__auto____$6;
}
} else {
throw e26011;

}
}} else {
throw e__24844__auto____$5;
}
} else {
throw e26010;

}
}} else {
throw e__24844__auto____$4;
}
} else {
throw e26009;

}
}} else {
throw e__24844__auto____$3;
}
} else {
throw e26008;

}
}} else {
throw e__24844__auto____$2;
}
} else {
throw e26007;

}
}} else {
throw e__24844__auto____$1;
}
} else {
throw e26006;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26005){if((e26005 instanceof Error)){
var e__24844__auto____$1 = e26005;
if((e__24844__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__24844__auto____$1;
}
} else {
throw e26005;

}
}} else {
throw e__24844__auto__;
}
} else {
throw e26004;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e26003){if((e26003 instanceof Error)){
var e__24844__auto__ = e26003;
if((e__24844__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__24844__auto__;
}
} else {
throw e26003;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26060){
var vec__26061 = p__26060;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26061,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26061,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__26059_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__26059_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26065){
var vec__26066 = p__26065;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26066,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26066,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__26064_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__26064_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__26069 = cljs.core.rest(ins);
var G__26070 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__26069,G__26070) : posh.lib.q_analyze.just_qvars.call(null,G__26069,G__26070));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26071_SHARP_){
return cljs.core.zipmap(qvars,p1__26071_SHARP_);
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
var vec__26072 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26072,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26072,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26072,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26072,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__26246 = var$;
var G__26247 = dbvarmap;
var G__26248 = cljs.core.rest(dbeavs);
var$ = G__26246;
dbvarmap = G__26247;
dbeavs = G__26248;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__26075 = cljs.core.rest(vars);
var G__26076 = dbvarmap;
var G__26077 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__26075,G__26076,G__26077) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__26075,G__26076,G__26077));
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
var G__26250 = (n + (1));
var G__26251 = cljs.core.rest(xs__$1);
n = G__26250;
xs__$1 = G__26251;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26078_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__26078_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__26078_SHARP_) : type.call(null,p1__26078_SHARP_));
} else {
return p1__26078_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__26079 = cljs.core.rest(ins);
var G__26080 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__26079,G__26080) : posh.lib.q_analyze.make_dbarg_map.call(null,G__26079,G__26080));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26081){
var vec__26082 = p__26081;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26082,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26082,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__26086_SHARP_,p2__26085_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__26085_SHARP_)){
return p1__26086_SHARP_;
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
var pred__26090 = cljs.core._EQ_;
var expr__26091 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__26090.cljs$core$IFn$_invoke$arity$2 ? pred__26090.cljs$core$IFn$_invoke$arity$2((1),expr__26091) : pred__26090.call(null,(1),expr__26091)))){
return true;
} else {
if(cljs.core.truth_((pred__26090.cljs$core$IFn$_invoke$arity$2 ? pred__26090.cljs$core$IFn$_invoke$arity$2((3),expr__26091) : pred__26090.call(null,(3),expr__26091)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__26253 = cljs.core.first(remaining);
var G__26254 = cljs.core.rest(remaining);
clause = G__26253;
remaining = G__26254;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__26255 = cljs.core.first(remaining);
var G__26256 = cljs.core.rest(remaining);
clause = G__26255;
remaining = G__26256;
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
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__26093(s__26094){
return (new cljs.core.LazySeq(null,(function (){
var s__26094__$1 = s__26094;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26094__$1);
if(temp__5735__auto__){
var s__26094__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26094__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__26094__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__26096 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__26095 = (0);
while(true){
if((i__26095 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__26095);
cljs.core.chunk_append(b__26096,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__26258 = (i__26095 + (1));
i__26095 = G__26258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26096),posh$lib$q_analyze$resolve_any_idents_$_iter__26093(cljs.core.chunk_rest(s__26094__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26096),null);
}
} else {
var var_value = cljs.core.first(s__26094__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__26093(cljs.core.rest(s__26094__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26101){
var vec__26102 = p__26101;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26102,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26102,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26105){
var vec__26106 = p__26105;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26106,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26106,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26109){
var vec__26110 = p__26109;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26110,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26110,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26113){
var vec__26114 = p__26113;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26114,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26114,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__26118 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__26119 = cljs.core.vec(r);
var fexpr__26117 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__26117.cljs$core$IFn$_invoke$arity$2 ? fexpr__26117.cljs$core$IFn$_invoke$arity$2(G__26118,G__26119) : fexpr__26117.call(null,G__26118,G__26119));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26120){
var vec__26121 = p__26120;
var seq__26122 = cljs.core.seq(vec__26121);
var first__26123 = cljs.core.first(seq__26122);
var seq__26122__$1 = cljs.core.next(seq__26122);
var db = first__26123;
var eav = seq__26122__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26124){
var vec__26125 = p__26124;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26125,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26125,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__26099_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__26099_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__26099_SHARP_) : linked_qvars.call(null,p1__26099_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__26099_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__26100_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__26100_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__26100_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
