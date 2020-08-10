goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__59712,p__59713){
var map__59714 = p__59712;
var map__59714__$1 = (((((!((map__59714 == null))))?(((((map__59714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59714):map__59714);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59714__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59715 = p__59713;
var map__59715__$1 = (((((!((map__59715 == null))))?(((((map__59715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59715):map__59715);
var msg = map__59715__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59715__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__59718,p__59719){
var map__59720 = p__59718;
var map__59720__$1 = (((((!((map__59720 == null))))?(((((map__59720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59720):map__59720);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59720__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59721 = p__59719;
var map__59721__$1 = (((((!((map__59721 == null))))?(((((map__59721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59721):map__59721);
var msg = map__59721__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59721__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__59724 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59726 = null;
var count__59727 = (0);
var i__59728 = (0);
while(true){
if((i__59728 < count__59727)){
var map__59734 = chunk__59726.cljs$core$IIndexed$_nth$arity$2(null,i__59728);
var map__59734__$1 = (((((!((map__59734 == null))))?(((((map__59734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59734):map__59734);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59734__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59781 = seq__59724;
var G__59782 = chunk__59726;
var G__59783 = count__59727;
var G__59784 = (i__59728 + (1));
seq__59724 = G__59781;
chunk__59726 = G__59782;
count__59727 = G__59783;
i__59728 = G__59784;
continue;
} else {
var G__59785 = seq__59724;
var G__59786 = chunk__59726;
var G__59787 = count__59727;
var G__59788 = (i__59728 + (1));
seq__59724 = G__59785;
chunk__59726 = G__59786;
count__59727 = G__59787;
i__59728 = G__59788;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59724);
if(temp__5735__auto__){
var seq__59724__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59724__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59724__$1);
var G__59789 = cljs.core.chunk_rest(seq__59724__$1);
var G__59790 = c__4556__auto__;
var G__59791 = cljs.core.count(c__4556__auto__);
var G__59792 = (0);
seq__59724 = G__59789;
chunk__59726 = G__59790;
count__59727 = G__59791;
i__59728 = G__59792;
continue;
} else {
var map__59736 = cljs.core.first(seq__59724__$1);
var map__59736__$1 = (((((!((map__59736 == null))))?(((((map__59736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59736):map__59736);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59736__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__59793 = cljs.core.next(seq__59724__$1);
var G__59794 = null;
var G__59795 = (0);
var G__59796 = (0);
seq__59724 = G__59793;
chunk__59726 = G__59794;
count__59727 = G__59795;
i__59728 = G__59796;
continue;
} else {
var G__59797 = cljs.core.next(seq__59724__$1);
var G__59798 = null;
var G__59799 = (0);
var G__59800 = (0);
seq__59724 = G__59797;
chunk__59726 = G__59798;
count__59727 = G__59799;
i__59728 = G__59800;
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
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__59738,msg){
var map__59739 = p__59738;
var map__59739__$1 = (((((!((map__59739 == null))))?(((((map__59739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59739):map__59739);
var runtime = map__59739__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59739__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__59741,key,p__59742){
var map__59743 = p__59741;
var map__59743__$1 = (((((!((map__59743 == null))))?(((((map__59743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59743):map__59743);
var state = map__59743__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59743__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__59744 = p__59742;
var map__59744__$1 = (((((!((map__59744 == null))))?(((((map__59744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59744):map__59744);
var spec = map__59744__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59744__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__59747,key,spec){
var map__59748 = p__59747;
var map__59748__$1 = (((((!((map__59748 == null))))?(((((map__59748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59748):map__59748);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59748__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__59755){
var map__59756 = p__59755;
var map__59756__$1 = (((((!((map__59756 == null))))?(((((map__59756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59756):map__59756);
var runtime = map__59756__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59756__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__59750_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__59750_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__59751_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__59751_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__59752_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__59752_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__59753_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__59753_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__59754_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__59754_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__59758,key){
var map__59759 = p__59758;
var map__59759__$1 = (((((!((map__59759 == null))))?(((((map__59759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59759):map__59759);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59759__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__59761,p__59762){
var map__59763 = p__59761;
var map__59763__$1 = (((((!((map__59763 == null))))?(((((map__59763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59763):map__59763);
var runtime = map__59763__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59763__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59764 = p__59762;
var map__59764__$1 = (((((!((map__59764 == null))))?(((((map__59764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59764):map__59764);
var msg = map__59764__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59764__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__59767 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59769 = null;
var count__59770 = (0);
var i__59771 = (0);
while(true){
if((i__59771 < count__59770)){
var map__59777 = chunk__59769.cljs$core$IIndexed$_nth$arity$2(null,i__59771);
var map__59777__$1 = (((((!((map__59777 == null))))?(((((map__59777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59777):map__59777);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59777__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59801 = seq__59767;
var G__59802 = chunk__59769;
var G__59803 = count__59770;
var G__59804 = (i__59771 + (1));
seq__59767 = G__59801;
chunk__59769 = G__59802;
count__59770 = G__59803;
i__59771 = G__59804;
continue;
} else {
var G__59805 = seq__59767;
var G__59806 = chunk__59769;
var G__59807 = count__59770;
var G__59808 = (i__59771 + (1));
seq__59767 = G__59805;
chunk__59769 = G__59806;
count__59770 = G__59807;
i__59771 = G__59808;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59767);
if(temp__5735__auto__){
var seq__59767__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59767__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59767__$1);
var G__59809 = cljs.core.chunk_rest(seq__59767__$1);
var G__59810 = c__4556__auto__;
var G__59811 = cljs.core.count(c__4556__auto__);
var G__59812 = (0);
seq__59767 = G__59809;
chunk__59769 = G__59810;
count__59770 = G__59811;
i__59771 = G__59812;
continue;
} else {
var map__59779 = cljs.core.first(seq__59767__$1);
var map__59779__$1 = (((((!((map__59779 == null))))?(((((map__59779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59779):map__59779);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59779__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__59813 = cljs.core.next(seq__59767__$1);
var G__59814 = null;
var G__59815 = (0);
var G__59816 = (0);
seq__59767 = G__59813;
chunk__59769 = G__59814;
count__59770 = G__59815;
i__59771 = G__59816;
continue;
} else {
var G__59817 = cljs.core.next(seq__59767__$1);
var G__59818 = null;
var G__59819 = (0);
var G__59820 = (0);
seq__59767 = G__59817;
chunk__59769 = G__59818;
count__59770 = G__59819;
i__59771 = G__59820;
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
