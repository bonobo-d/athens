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
var G__61408_61500 = new cljs.core.Keyword(null,"transact!","transact!",-822725810);
var G__61409_61501 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms)));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61408_61500,G__61409_61501) : re_frame.core.reg_fx.call(null,G__61408_61500,G__61409_61501));
var G__61410_61502 = new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379);
var G__61411_61503 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61410_61502,G__61411_61503) : re_frame.core.reg_fx.call(null,G__61410_61502,G__61411_61503));
var G__61412_61504 = new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949);
var G__61413_61505 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61412_61504,G__61413_61505) : re_frame.core.reg_fx.call(null,G__61412_61504,G__61413_61505));
var G__61414_61506 = new cljs.core.Keyword(null,"http","http",382524695);
var G__61415_61507 = (function (p__61416){
var map__61417 = p__61416;
var map__61417__$1 = (((((!((map__61417 == null))))?(((((map__61417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61417):map__61417);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61417__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61417__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61417__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61417__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61417__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__37014__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37015__auto__ = (function (){var switch__36947__auto__ = (function (state_61461){
var state_val_61462 = (state_61461[(1)]);
if((state_val_61462 === (7))){
var inst_61428 = (state_61461[(7)]);
var inst_61428__$1 = (state_61461[(2)]);
var inst_61430 = (inst_61428__$1 == null);
var inst_61431 = cljs.core.not(inst_61430);
var state_61461__$1 = (function (){var statearr_61463 = state_61461;
(statearr_61463[(7)] = inst_61428__$1);

return statearr_61463;
})();
if(inst_61431){
var statearr_61464_61508 = state_61461__$1;
(statearr_61464_61508[(1)] = (8));

} else {
var statearr_61465_61509 = state_61461__$1;
(statearr_61465_61509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (1))){
var state_61461__$1 = state_61461;
var G__61466_61510 = method;
var G__61466_61511__$1 = (((G__61466_61510 instanceof cljs.core.Keyword))?G__61466_61510.fqn:null);
switch (G__61466_61511__$1) {
case "post":
var statearr_61467_61513 = state_61461__$1;
(statearr_61467_61513[(1)] = (3));


break;
case "get":
var statearr_61468_61514 = state_61461__$1;
(statearr_61468_61514[(1)] = (4));


break;
case "put":
var statearr_61469_61515 = state_61461__$1;
(statearr_61469_61515[(1)] = (5));


break;
case "delete":
var statearr_61470_61516 = state_61461__$1;
(statearr_61470_61516[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61466_61511__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (4))){
var state_61461__$1 = state_61461;
var statearr_61471_61517 = state_61461__$1;
(statearr_61471_61517[(2)] = cljs_http.client.get);

(statearr_61471_61517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (15))){
var inst_61428 = (state_61461[(7)]);
var state_61461__$1 = state_61461;
var statearr_61472_61518 = state_61461__$1;
(statearr_61472_61518[(2)] = inst_61428);

(statearr_61472_61518[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (13))){
var inst_61441 = (state_61461[(2)]);
var state_61461__$1 = state_61461;
var statearr_61473_61519 = state_61461__$1;
(statearr_61473_61519[(2)] = inst_61441);

(statearr_61473_61519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (6))){
var state_61461__$1 = state_61461;
var statearr_61474_61520 = state_61461__$1;
(statearr_61474_61520[(2)] = cljs_http.client.delete$);

(statearr_61474_61520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (17))){
var inst_61451 = (state_61461[(8)]);
var inst_61453 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_61451);
var inst_61454 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61453) : re_frame.core.dispatch.call(null,inst_61453));
var state_61461__$1 = state_61461;
var statearr_61475_61521 = state_61461__$1;
(statearr_61475_61521[(2)] = inst_61454);

(statearr_61475_61521[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (3))){
var state_61461__$1 = state_61461;
var statearr_61476_61522 = state_61461__$1;
(statearr_61476_61522[(2)] = cljs_http.client.post);

(statearr_61476_61522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (12))){
var state_61461__$1 = state_61461;
var statearr_61477_61523 = state_61461__$1;
(statearr_61477_61523[(2)] = false);

(statearr_61477_61523[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (2))){
var inst_61425 = (state_61461[(2)]);
var inst_61426 = (inst_61425.cljs$core$IFn$_invoke$arity$2 ? inst_61425.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_61425.call(null,url,opts));
var state_61461__$1 = state_61461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61461__$1,(7),inst_61426);
} else {
if((state_val_61462 === (19))){
var inst_61459 = (state_61461[(2)]);
var state_61461__$1 = state_61461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61461__$1,inst_61459);
} else {
if((state_val_61462 === (11))){
var state_61461__$1 = state_61461;
var statearr_61478_61524 = state_61461__$1;
(statearr_61478_61524[(2)] = true);

(statearr_61478_61524[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (9))){
var state_61461__$1 = state_61461;
var statearr_61479_61525 = state_61461__$1;
(statearr_61479_61525[(2)] = false);

(statearr_61479_61525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (5))){
var state_61461__$1 = state_61461;
var statearr_61480_61526 = state_61461__$1;
(statearr_61480_61526[(2)] = cljs_http.client.put);

(statearr_61480_61526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (14))){
var inst_61428 = (state_61461[(7)]);
var inst_61446 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61428);
var state_61461__$1 = state_61461;
var statearr_61481_61527 = state_61461__$1;
(statearr_61481_61527[(2)] = inst_61446);

(statearr_61481_61527[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (16))){
var inst_61449 = (state_61461[(9)]);
var inst_61449__$1 = (state_61461[(2)]);
var inst_61450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61449__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_61451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61449__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_61461__$1 = (function (){var statearr_61482 = state_61461;
(statearr_61482[(8)] = inst_61451);

(statearr_61482[(9)] = inst_61449__$1);

return statearr_61482;
})();
if(cljs.core.truth_(inst_61450)){
var statearr_61483_61528 = state_61461__$1;
(statearr_61483_61528[(1)] = (17));

} else {
var statearr_61484_61529 = state_61461__$1;
(statearr_61484_61529[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (10))){
var inst_61444 = (state_61461[(2)]);
var state_61461__$1 = state_61461;
if(cljs.core.truth_(inst_61444)){
var statearr_61485_61530 = state_61461__$1;
(statearr_61485_61530[(1)] = (14));

} else {
var statearr_61486_61531 = state_61461__$1;
(statearr_61486_61531[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (18))){
var inst_61449 = (state_61461[(9)]);
var inst_61456 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_61449);
var inst_61457 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_61456) : re_frame.core.dispatch.call(null,inst_61456));
var state_61461__$1 = state_61461;
var statearr_61487_61532 = state_61461__$1;
(statearr_61487_61532[(2)] = inst_61457);

(statearr_61487_61532[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61462 === (8))){
var inst_61428 = (state_61461[(7)]);
var inst_61433 = inst_61428.cljs$lang$protocol_mask$partition0$;
var inst_61434 = (inst_61433 & (64));
var inst_61435 = inst_61428.cljs$core$ISeq$;
var inst_61436 = (cljs.core.PROTOCOL_SENTINEL === inst_61435);
var inst_61437 = ((inst_61434) || (inst_61436));
var state_61461__$1 = state_61461;
if(cljs.core.truth_(inst_61437)){
var statearr_61488_61533 = state_61461__$1;
(statearr_61488_61533[(1)] = (11));

} else {
var statearr_61489_61534 = state_61461__$1;
(statearr_61489_61534[(1)] = (12));

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
var athens$effects$state_machine__36948__auto__ = null;
var athens$effects$state_machine__36948__auto____0 = (function (){
var statearr_61490 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61490[(0)] = athens$effects$state_machine__36948__auto__);

(statearr_61490[(1)] = (1));

return statearr_61490;
});
var athens$effects$state_machine__36948__auto____1 = (function (state_61461){
while(true){
var ret_value__36949__auto__ = (function (){try{while(true){
var result__36950__auto__ = switch__36947__auto__(state_61461);
if(cljs.core.keyword_identical_QMARK_(result__36950__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36950__auto__;
}
break;
}
}catch (e61491){if((e61491 instanceof Object)){
var ex__36951__auto__ = e61491;
var statearr_61492_61535 = state_61461;
(statearr_61492_61535[(5)] = ex__36951__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61491;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36949__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61536 = state_61461;
state_61461 = G__61536;
continue;
} else {
return ret_value__36949__auto__;
}
break;
}
});
athens$effects$state_machine__36948__auto__ = function(state_61461){
switch(arguments.length){
case 0:
return athens$effects$state_machine__36948__auto____0.call(this);
case 1:
return athens$effects$state_machine__36948__auto____1.call(this,state_61461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__36948__auto____0;
athens$effects$state_machine__36948__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__36948__auto____1;
return athens$effects$state_machine__36948__auto__;
})()
})();
var state__37016__auto__ = (function (){var statearr_61493 = (f__37015__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37015__auto__.cljs$core$IFn$_invoke$arity$0() : f__37015__auto__.call(null));
(statearr_61493[(6)] = c__37014__auto__);

return statearr_61493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37016__auto__);
}));

return c__37014__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61414_61506,G__61415_61507) : re_frame.core.reg_fx.call(null,G__61414_61506,G__61415_61507));
var G__61494_61537 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__61495_61538 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__61496){
var map__61497 = p__61496;
var map__61497__$1 = (((((!((map__61497 == null))))?(((((map__61497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61497):map__61497);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61497__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61497__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61497__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61497__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__61499 = action;
var G__61499__$1 = (((G__61499 instanceof cljs.core.Keyword))?G__61499.fqn:null);
switch (G__61499__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61499__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61494_61537,G__61495_61538) : re_frame.core.reg_fx.call(null,G__61494_61537,G__61495_61538));

//# sourceMappingURL=athens.effects.js.map
