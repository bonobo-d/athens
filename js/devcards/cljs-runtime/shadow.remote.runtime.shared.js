goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__59719,p__59720){
var map__59721 = p__59719;
var map__59721__$1 = (((((!((map__59721 == null))))?(((((map__59721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59721):map__59721);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59721__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59722 = p__59720;
var map__59722__$1 = (((((!((map__59722 == null))))?(((((map__59722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59722):map__59722);
var msg = map__59722__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59722__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__59725,p__59726){
var map__59727 = p__59725;
var map__59727__$1 = (((((!((map__59727 == null))))?(((((map__59727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59727):map__59727);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59727__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59728 = p__59726;
var map__59728__$1 = (((((!((map__59728 == null))))?(((((map__59728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59728):map__59728);
var msg = map__59728__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59728__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__59731 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59733 = null;
var count__59734 = (0);
var i__59735 = (0);
while(true){
if((i__59735 < count__59734)){
var map__59741 = chunk__59733.cljs$core$IIndexed$_nth$arity$2(null,i__59735);
var map__59741__$1 = (((((!((map__59741 == null))))?(((((map__59741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59741):map__59741);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59741__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59788 = seq__59731;
var G__59789 = chunk__59733;
var G__59790 = count__59734;
var G__59791 = (i__59735 + (1));
seq__59731 = G__59788;
chunk__59733 = G__59789;
count__59734 = G__59790;
i__59735 = G__59791;
continue;
} else {
var G__59792 = seq__59731;
var G__59793 = chunk__59733;
var G__59794 = count__59734;
var G__59795 = (i__59735 + (1));
seq__59731 = G__59792;
chunk__59733 = G__59793;
count__59734 = G__59794;
i__59735 = G__59795;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59731);
if(temp__5735__auto__){
var seq__59731__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59731__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59731__$1);
var G__59796 = cljs.core.chunk_rest(seq__59731__$1);
var G__59797 = c__4556__auto__;
var G__59798 = cljs.core.count(c__4556__auto__);
var G__59799 = (0);
seq__59731 = G__59796;
chunk__59733 = G__59797;
count__59734 = G__59798;
i__59735 = G__59799;
continue;
} else {
var map__59743 = cljs.core.first(seq__59731__$1);
var map__59743__$1 = (((((!((map__59743 == null))))?(((((map__59743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59743):map__59743);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59743__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59800 = cljs.core.next(seq__59731__$1);
var G__59801 = null;
var G__59802 = (0);
var G__59803 = (0);
seq__59731 = G__59800;
chunk__59733 = G__59801;
count__59734 = G__59802;
i__59735 = G__59803;
continue;
} else {
var G__59804 = cljs.core.next(seq__59731__$1);
var G__59805 = null;
var G__59806 = (0);
var G__59807 = (0);
seq__59731 = G__59804;
chunk__59733 = G__59805;
count__59734 = G__59806;
i__59735 = G__59807;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__59745,msg){
var map__59746 = p__59745;
var map__59746__$1 = (((((!((map__59746 == null))))?(((((map__59746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59746):map__59746);
var runtime = map__59746__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59746__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__59748,key,p__59749){
var map__59750 = p__59748;
var map__59750__$1 = (((((!((map__59750 == null))))?(((((map__59750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59750):map__59750);
var state = map__59750__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59750__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__59751 = p__59749;
var map__59751__$1 = (((((!((map__59751 == null))))?(((((map__59751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59751):map__59751);
var spec = map__59751__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59751__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__59754,key,spec){
var map__59755 = p__59754;
var map__59755__$1 = (((((!((map__59755 == null))))?(((((map__59755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59755):map__59755);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59755__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__59762){
var map__59763 = p__59762;
var map__59763__$1 = (((((!((map__59763 == null))))?(((((map__59763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59763):map__59763);
var runtime = map__59763__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59763__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__59757_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__59757_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__59758_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__59758_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__59759_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__59759_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__59760_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__59760_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__59761_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__59761_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__59765,key){
var map__59766 = p__59765;
var map__59766__$1 = (((((!((map__59766 == null))))?(((((map__59766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59766):map__59766);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59766__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__59768,p__59769){
var map__59770 = p__59768;
var map__59770__$1 = (((((!((map__59770 == null))))?(((((map__59770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59770):map__59770);
var runtime = map__59770__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59771 = p__59769;
var map__59771__$1 = (((((!((map__59771 == null))))?(((((map__59771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59771):map__59771);
var msg = map__59771__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59771__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__59774 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59776 = null;
var count__59777 = (0);
var i__59778 = (0);
while(true){
if((i__59778 < count__59777)){
var map__59784 = chunk__59776.cljs$core$IIndexed$_nth$arity$2(null,i__59778);
var map__59784__$1 = (((((!((map__59784 == null))))?(((((map__59784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59784):map__59784);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59784__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59808 = seq__59774;
var G__59809 = chunk__59776;
var G__59810 = count__59777;
var G__59811 = (i__59778 + (1));
seq__59774 = G__59808;
chunk__59776 = G__59809;
count__59777 = G__59810;
i__59778 = G__59811;
continue;
} else {
var G__59812 = seq__59774;
var G__59813 = chunk__59776;
var G__59814 = count__59777;
var G__59815 = (i__59778 + (1));
seq__59774 = G__59812;
chunk__59776 = G__59813;
count__59777 = G__59814;
i__59778 = G__59815;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59774);
if(temp__5735__auto__){
var seq__59774__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59774__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59774__$1);
var G__59816 = cljs.core.chunk_rest(seq__59774__$1);
var G__59817 = c__4556__auto__;
var G__59818 = cljs.core.count(c__4556__auto__);
var G__59819 = (0);
seq__59774 = G__59816;
chunk__59776 = G__59817;
count__59777 = G__59818;
i__59778 = G__59819;
continue;
} else {
var map__59786 = cljs.core.first(seq__59774__$1);
var map__59786__$1 = (((((!((map__59786 == null))))?(((((map__59786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59786):map__59786);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59786__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59820 = cljs.core.next(seq__59774__$1);
var G__59821 = null;
var G__59822 = (0);
var G__59823 = (0);
seq__59774 = G__59820;
chunk__59776 = G__59821;
count__59777 = G__59822;
i__59778 = G__59823;
continue;
} else {
var G__59824 = cljs.core.next(seq__59774__$1);
var G__59825 = null;
var G__59826 = (0);
var G__59827 = (0);
seq__59774 = G__59824;
chunk__59776 = G__59825;
count__59777 = G__59826;
i__59778 = G__59827;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
