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
var G__61802_61894 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61803_61895 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61802_61894,G__61803_61895) : re_frame.core.reg_fx.call(null,G__61802_61894,G__61803_61895));
var G__61804_61896 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61805_61897 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61804_61896,G__61805_61897) : re_frame.core.reg_fx.call(null,G__61804_61896,G__61805_61897));
var G__61806_61898 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61807_61899 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61806_61898,G__61807_61899) : re_frame.core.reg_fx.call(null,G__61806_61898,G__61807_61899));
var G__61808_61900 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61809_61901 = (function (p__61810){
var map__61811 = p__61810;
var map__61811__$1 = (((((!((map__61811 == null))))?(((((map__61811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61811):map__61811);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61811__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61811__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61811__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61811__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61811__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__43456__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43457__auto__ = (function (){var switch__43388__auto__ = (function (state_61855){
var state_val_61856 = (state_61855[(1)]);
if((state_val_61856 === (7))){
var inst_61822 = (state_61855[(7)]);
var inst_61822__$1 = (state_61855[(2)]);
var inst_61824 = (inst_61822__$1 == null);
var inst_61825 = cljs.core.not(inst_61824);
var state_61855__$1 = (function (){var statearr_61857 = state_61855;
(statearr_61857[(7)] = inst_61822__$1);

return statearr_61857;
})();
if(inst_61825){
var statearr_61858_61902 = state_61855__$1;
(statearr_61858_61902[(1)] = (8));

} else {
var statearr_61859_61903 = state_61855__$1;
(statearr_61859_61903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (1))){
var state_61855__$1 = state_61855;
var G__61860_61904 = method;
var G__61860_61905__$1 = (((G__61860_61904 instanceof cljs.core.Keyword))?G__61860_61904.fqn:null);
switch (G__61860_61905__$1) {
case "post":
var statearr_61861_61907 = state_61855__$1;
(statearr_61861_61907[(1)] = (3));


break;
case "get":
var statearr_61862_61908 = state_61855__$1;
(statearr_61862_61908[(1)] = (4));


break;
case "put":
var statearr_61863_61909 = state_61855__$1;
(statearr_61863_61909[(1)] = (5));


break;
case "delete":
var statearr_61864_61910 = state_61855__$1;
(statearr_61864_61910[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61860_61905__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (4))){
var state_61855__$1 = state_61855;
var statearr_61865_61911 = state_61855__$1;
(statearr_61865_61911[(2)] = cljs_http.client.get);

(statearr_61865_61911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (15))){
var inst_61822 = (state_61855[(7)]);
var state_61855__$1 = state_61855;
var statearr_61866_61912 = state_61855__$1;
(statearr_61866_61912[(2)] = inst_61822);

(statearr_61866_61912[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (13))){
var inst_61835 = (state_61855[(2)]);
var state_61855__$1 = state_61855;
var statearr_61867_61913 = state_61855__$1;
(statearr_61867_61913[(2)] = inst_61835);

(statearr_61867_61913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (6))){
var state_61855__$1 = state_61855;
var statearr_61868_61914 = state_61855__$1;
(statearr_61868_61914[(2)] = cljs_http.client.delete$);

(statearr_61868_61914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (17))){
var inst_61845 = (state_61855[(8)]);
var inst_61847 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61845);
var inst_61848 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61847) : re_frame.core.dispatch.call(null,inst_61847));
var state_61855__$1 = state_61855;
var statearr_61869_61915 = state_61855__$1;
(statearr_61869_61915[(2)] = inst_61848);

(statearr_61869_61915[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (3))){
var state_61855__$1 = state_61855;
var statearr_61870_61916 = state_61855__$1;
(statearr_61870_61916[(2)] = cljs_http.client.post);

(statearr_61870_61916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (12))){
var state_61855__$1 = state_61855;
var statearr_61871_61917 = state_61855__$1;
(statearr_61871_61917[(2)] = false);

(statearr_61871_61917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (2))){
var inst_61819 = (state_61855[(2)]);
var inst_61820 = (inst_61819.cljs$core$IFn$_invoke$arity$2 ? inst_61819.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61819.call(null,url,opts));
var state_61855__$1 = state_61855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61855__$1,(7),inst_61820);
} else {
if((state_val_61856 === (19))){
var inst_61853 = (state_61855[(2)]);
var state_61855__$1 = state_61855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61855__$1,inst_61853);
} else {
if((state_val_61856 === (11))){
var state_61855__$1 = state_61855;
var statearr_61872_61918 = state_61855__$1;
(statearr_61872_61918[(2)] = true);

(statearr_61872_61918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (9))){
var state_61855__$1 = state_61855;
var statearr_61873_61919 = state_61855__$1;
(statearr_61873_61919[(2)] = false);

(statearr_61873_61919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (5))){
var state_61855__$1 = state_61855;
var statearr_61874_61920 = state_61855__$1;
(statearr_61874_61920[(2)] = cljs_http.client.put);

(statearr_61874_61920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (14))){
var inst_61822 = (state_61855[(7)]);
var inst_61840 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61822);
var state_61855__$1 = state_61855;
var statearr_61875_61921 = state_61855__$1;
(statearr_61875_61921[(2)] = inst_61840);

(statearr_61875_61921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (16))){
var inst_61843 = (state_61855[(9)]);
var inst_61843__$1 = (state_61855[(2)]);
var inst_61844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61843__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61843__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61855__$1 = (function (){var statearr_61876 = state_61855;
(statearr_61876[(8)] = inst_61845);

(statearr_61876[(9)] = inst_61843__$1);

return statearr_61876;
})();
if(cljs.core.truth_(inst_61844)){
var statearr_61877_61922 = state_61855__$1;
(statearr_61877_61922[(1)] = (17));

} else {
var statearr_61878_61923 = state_61855__$1;
(statearr_61878_61923[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (10))){
var inst_61838 = (state_61855[(2)]);
var state_61855__$1 = state_61855;
if(cljs.core.truth_(inst_61838)){
var statearr_61879_61924 = state_61855__$1;
(statearr_61879_61924[(1)] = (14));

} else {
var statearr_61880_61925 = state_61855__$1;
(statearr_61880_61925[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (18))){
var inst_61843 = (state_61855[(9)]);
var inst_61850 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61843);
var inst_61851 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61850) : re_frame.core.dispatch.call(null,inst_61850));
var state_61855__$1 = state_61855;
var statearr_61881_61926 = state_61855__$1;
(statearr_61881_61926[(2)] = inst_61851);

(statearr_61881_61926[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61856 === (8))){
var inst_61822 = (state_61855[(7)]);
var inst_61827 = inst_61822.cljs$lang$protocol_mask$partition0$;
var inst_61828 = (inst_61827 & (64));
var inst_61829 = inst_61822.cljs$core$ISeq$;
var inst_61830 = (cljs.core.PROTOCOL_SENTINEL === inst_61829);
var inst_61831 = ((inst_61828) || (inst_61830));
var state_61855__$1 = state_61855;
if(cljs.core.truth_(inst_61831)){
var statearr_61882_61927 = state_61855__$1;
(statearr_61882_61927[(1)] = (11));

} else {
var statearr_61883_61928 = state_61855__$1;
(statearr_61883_61928[(1)] = (12));

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
var statearr_61884 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61884[(0)] = athens$effects$state_machine__43389__auto__);

(statearr_61884[(1)] = (1));

return statearr_61884;
});
var athens$effects$state_machine__43389__auto____1 = (function (state_61855){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_61855);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e61885){if((e61885 instanceof Object)){
var ex__43392__auto__ = e61885;
var statearr_61886_61929 = state_61855;
(statearr_61886_61929[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61885;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61930 = state_61855;
state_61855 = G__61930;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
athens$effects$state_machine__43389__auto__ = function(state_61855){
switch(arguments.length){
case 0:
return athens$effects$state_machine__43389__auto____0.call(this);
case 1:
return athens$effects$state_machine__43389__auto____1.call(this,state_61855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__43389__auto____0;
athens$effects$state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__43389__auto____1;
return athens$effects$state_machine__43389__auto__;
})()
})();
var state__43458__auto__ = (function (){var statearr_61887 = (f__43457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43457__auto__.cljs$core$IFn$_invoke$arity$0() : f__43457__auto__.call(null));
(statearr_61887[(6)] = c__43456__auto__);

return statearr_61887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43458__auto__);
}));

return c__43456__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61808_61900,G__61809_61901) : re_frame.core.reg_fx.call(null,G__61808_61900,G__61809_61901));
var G__61888_61931 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61889_61932 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61890){
var map__61891 = p__61890;
var map__61891__$1 = (((((!((map__61891 == null))))?(((((map__61891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61891):map__61891);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61891__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61891__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61891__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61891__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61893 = action;
var G__61893__$1 = (((G__61893 instanceof cljs.core.Keyword))?G__61893.fqn:null);
switch (G__61893__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61893__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61888_61931,G__61889_61932) : re_frame.core.reg_fx.call(null,G__61888_61931,G__61889_61932));

//# sourceMappingURL=athens.effects.js.map
