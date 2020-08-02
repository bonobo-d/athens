goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
var G__61800_61892 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61801_61893 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61800_61892,G__61801_61893) : re_frame.core.reg_fx.call(null,G__61800_61892,G__61801_61893));
var G__61802_61894 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61803_61895 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61802_61894,G__61803_61895) : re_frame.core.reg_fx.call(null,G__61802_61894,G__61803_61895));
var G__61804_61896 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61805_61897 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61804_61896,G__61805_61897) : re_frame.core.reg_fx.call(null,G__61804_61896,G__61805_61897));
var G__61806_61898 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61807_61899 = (function (p__61808){
var map__61809 = p__61808;
var map__61809__$1 = (((((!((map__61809 == null))))?(((((map__61809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61809):map__61809);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61809__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61809__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61809__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61809__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61809__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__43456__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43457__auto__ = (function (){var switch__43388__auto__ = (function (state_61853){
var state_val_61854 = (state_61853[(1)]);
if((state_val_61854 === (7))){
var inst_61820 = (state_61853[(7)]);
var inst_61820__$1 = (state_61853[(2)]);
var inst_61822 = (inst_61820__$1 == null);
var inst_61823 = cljs.core.not(inst_61822);
var state_61853__$1 = (function (){var statearr_61855 = state_61853;
(statearr_61855[(7)] = inst_61820__$1);

return statearr_61855;
})();
if(inst_61823){
var statearr_61856_61900 = state_61853__$1;
(statearr_61856_61900[(1)] = (8));

} else {
var statearr_61857_61901 = state_61853__$1;
(statearr_61857_61901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (1))){
var state_61853__$1 = state_61853;
var G__61858_61902 = method;
var G__61858_61903__$1 = (((G__61858_61902 instanceof cljs.core.Keyword))?G__61858_61902.fqn:null);
switch (G__61858_61903__$1) {
case "post":
var statearr_61859_61905 = state_61853__$1;
(statearr_61859_61905[(1)] = (3));


break;
case "get":
var statearr_61860_61906 = state_61853__$1;
(statearr_61860_61906[(1)] = (4));


break;
case "put":
var statearr_61861_61907 = state_61853__$1;
(statearr_61861_61907[(1)] = (5));


break;
case "delete":
var statearr_61862_61908 = state_61853__$1;
(statearr_61862_61908[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61858_61903__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (4))){
var state_61853__$1 = state_61853;
var statearr_61863_61909 = state_61853__$1;
(statearr_61863_61909[(2)] = cljs_http.client.get);

(statearr_61863_61909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (15))){
var inst_61820 = (state_61853[(7)]);
var state_61853__$1 = state_61853;
var statearr_61864_61910 = state_61853__$1;
(statearr_61864_61910[(2)] = inst_61820);

(statearr_61864_61910[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (13))){
var inst_61833 = (state_61853[(2)]);
var state_61853__$1 = state_61853;
var statearr_61865_61911 = state_61853__$1;
(statearr_61865_61911[(2)] = inst_61833);

(statearr_61865_61911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (6))){
var state_61853__$1 = state_61853;
var statearr_61866_61912 = state_61853__$1;
(statearr_61866_61912[(2)] = cljs_http.client.delete$);

(statearr_61866_61912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (17))){
var inst_61843 = (state_61853[(8)]);
var inst_61845 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61843);
var inst_61846 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61845) : re_frame.core.dispatch.call(null,inst_61845));
var state_61853__$1 = state_61853;
var statearr_61867_61913 = state_61853__$1;
(statearr_61867_61913[(2)] = inst_61846);

(statearr_61867_61913[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (3))){
var state_61853__$1 = state_61853;
var statearr_61868_61914 = state_61853__$1;
(statearr_61868_61914[(2)] = cljs_http.client.post);

(statearr_61868_61914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (12))){
var state_61853__$1 = state_61853;
var statearr_61869_61915 = state_61853__$1;
(statearr_61869_61915[(2)] = false);

(statearr_61869_61915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (2))){
var inst_61817 = (state_61853[(2)]);
var inst_61818 = (inst_61817.cljs$core$IFn$_invoke$arity$2 ? inst_61817.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61817.call(null,url,opts));
var state_61853__$1 = state_61853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61853__$1,(7),inst_61818);
} else {
if((state_val_61854 === (19))){
var inst_61851 = (state_61853[(2)]);
var state_61853__$1 = state_61853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61853__$1,inst_61851);
} else {
if((state_val_61854 === (11))){
var state_61853__$1 = state_61853;
var statearr_61870_61916 = state_61853__$1;
(statearr_61870_61916[(2)] = true);

(statearr_61870_61916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (9))){
var state_61853__$1 = state_61853;
var statearr_61871_61917 = state_61853__$1;
(statearr_61871_61917[(2)] = false);

(statearr_61871_61917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (5))){
var state_61853__$1 = state_61853;
var statearr_61872_61918 = state_61853__$1;
(statearr_61872_61918[(2)] = cljs_http.client.put);

(statearr_61872_61918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (14))){
var inst_61820 = (state_61853[(7)]);
var inst_61838 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61820);
var state_61853__$1 = state_61853;
var statearr_61873_61919 = state_61853__$1;
(statearr_61873_61919[(2)] = inst_61838);

(statearr_61873_61919[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (16))){
var inst_61841 = (state_61853[(9)]);
var inst_61841__$1 = (state_61853[(2)]);
var inst_61842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61841__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61841__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61853__$1 = (function (){var statearr_61874 = state_61853;
(statearr_61874[(9)] = inst_61841__$1);

(statearr_61874[(8)] = inst_61843);

return statearr_61874;
})();
if(cljs.core.truth_(inst_61842)){
var statearr_61875_61920 = state_61853__$1;
(statearr_61875_61920[(1)] = (17));

} else {
var statearr_61876_61921 = state_61853__$1;
(statearr_61876_61921[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (10))){
var inst_61836 = (state_61853[(2)]);
var state_61853__$1 = state_61853;
if(cljs.core.truth_(inst_61836)){
var statearr_61877_61922 = state_61853__$1;
(statearr_61877_61922[(1)] = (14));

} else {
var statearr_61878_61923 = state_61853__$1;
(statearr_61878_61923[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (18))){
var inst_61841 = (state_61853[(9)]);
var inst_61848 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61841);
var inst_61849 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61848) : re_frame.core.dispatch.call(null,inst_61848));
var state_61853__$1 = state_61853;
var statearr_61879_61924 = state_61853__$1;
(statearr_61879_61924[(2)] = inst_61849);

(statearr_61879_61924[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61854 === (8))){
var inst_61820 = (state_61853[(7)]);
var inst_61825 = inst_61820.cljs$lang$protocol_mask$partition0$;
var inst_61826 = (inst_61825 & (64));
var inst_61827 = inst_61820.cljs$core$ISeq$;
var inst_61828 = (cljs.core.PROTOCOL_SENTINEL === inst_61827);
var inst_61829 = ((inst_61826) || (inst_61828));
var state_61853__$1 = state_61853;
if(cljs.core.truth_(inst_61829)){
var statearr_61880_61925 = state_61853__$1;
(statearr_61880_61925[(1)] = (11));

} else {
var statearr_61881_61926 = state_61853__$1;
(statearr_61881_61926[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$effects$state_machine__43389__auto__ = null;
var athens$effects$state_machine__43389__auto____0 = (function (){
var statearr_61882 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61882[(0)] = athens$effects$state_machine__43389__auto__);

(statearr_61882[(1)] = (1));

return statearr_61882;
});
var athens$effects$state_machine__43389__auto____1 = (function (state_61853){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_61853);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e61883){if((e61883 instanceof Object)){
var ex__43392__auto__ = e61883;
var statearr_61884_61927 = state_61853;
(statearr_61884_61927[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61883;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61928 = state_61853;
state_61853 = G__61928;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
athens$effects$state_machine__43389__auto__ = function(state_61853){
switch(arguments.length){
case 0:
return athens$effects$state_machine__43389__auto____0.call(this);
case 1:
return athens$effects$state_machine__43389__auto____1.call(this,state_61853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__43389__auto____0;
athens$effects$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__43389__auto____1;
return athens$effects$state_machine__43389__auto__;
})()
})();
var state__43458__auto__ = (function (){var statearr_61885 = (f__43457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43457__auto__.cljs$core$IFn$_invoke$arity$0() : f__43457__auto__.call(null));
(statearr_61885[(6)] = c__43456__auto__);

return statearr_61885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43458__auto__);
}));

return c__43456__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61806_61898,G__61807_61899) : re_frame.core.reg_fx.call(null,G__61806_61898,G__61807_61899));
var G__61886_61929 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61887_61930 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61888){
var map__61889 = p__61888;
var map__61889__$1 = (((((!((map__61889 == null))))?(((((map__61889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61889):map__61889);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61889__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61889__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61889__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61889__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61891 = action;
var G__61891__$1 = (((G__61891 instanceof cljs.core.Keyword))?G__61891.fqn:null);
switch (G__61891__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61891__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61886_61929,G__61887_61930) : re_frame.core.reg_fx.call(null,G__61886_61929,G__61887_61930));

//# sourceMappingURL=athens.effects.js.map
