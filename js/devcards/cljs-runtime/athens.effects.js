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
re_frame.core.reg_fx(new cljs.core.Keyword(null,"transact!","transact!",-822725810),(function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["TX OUTPUTS"], 0));

var outputs = new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(posh.reagent.transact_BANG_(athens.db.dsdb,datoms));
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(outputs);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"reset-conn!","reset-conn!",-325354379),(function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("local-storage","set-db!","local-storage/set-db!",581380949),(function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http","http",382524695),(function (p__60339){
var map__60340 = p__60339;
var map__60340__$1 = (((((!((map__60340 == null))))?(((((map__60340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60340):map__60340);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60340__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60340__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60340__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60340__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60340__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__42519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_60384){
var state_val_60385 = (state_60384[(1)]);
if((state_val_60385 === (7))){
var inst_60351 = (state_60384[(7)]);
var inst_60351__$1 = (state_60384[(2)]);
var inst_60353 = (inst_60351__$1 == null);
var inst_60354 = cljs.core.not(inst_60353);
var state_60384__$1 = (function (){var statearr_60386 = state_60384;
(statearr_60386[(7)] = inst_60351__$1);

return statearr_60386;
})();
if(inst_60354){
var statearr_60387_60422 = state_60384__$1;
(statearr_60387_60422[(1)] = (8));

} else {
var statearr_60388_60423 = state_60384__$1;
(statearr_60388_60423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (1))){
var state_60384__$1 = state_60384;
var G__60389_60424 = method;
var G__60389_60425__$1 = (((G__60389_60424 instanceof cljs.core.Keyword))?G__60389_60424.fqn:null);
switch (G__60389_60425__$1) {
case "post":
var statearr_60390_60427 = state_60384__$1;
(statearr_60390_60427[(1)] = (3));


break;
case "get":
var statearr_60391_60428 = state_60384__$1;
(statearr_60391_60428[(1)] = (4));


break;
case "put":
var statearr_60392_60429 = state_60384__$1;
(statearr_60392_60429[(1)] = (5));


break;
case "delete":
var statearr_60393_60430 = state_60384__$1;
(statearr_60393_60430[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60389_60425__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (4))){
var state_60384__$1 = state_60384;
var statearr_60394_60431 = state_60384__$1;
(statearr_60394_60431[(2)] = cljs_http.client.get);

(statearr_60394_60431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (15))){
var inst_60351 = (state_60384[(7)]);
var state_60384__$1 = state_60384;
var statearr_60395_60432 = state_60384__$1;
(statearr_60395_60432[(2)] = inst_60351);

(statearr_60395_60432[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (13))){
var inst_60364 = (state_60384[(2)]);
var state_60384__$1 = state_60384;
var statearr_60396_60433 = state_60384__$1;
(statearr_60396_60433[(2)] = inst_60364);

(statearr_60396_60433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (6))){
var state_60384__$1 = state_60384;
var statearr_60397_60434 = state_60384__$1;
(statearr_60397_60434[(2)] = cljs_http.client.delete$);

(statearr_60397_60434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (17))){
var inst_60374 = (state_60384[(8)]);
var inst_60376 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_60374);
var inst_60377 = re_frame.core.dispatch(inst_60376);
var state_60384__$1 = state_60384;
var statearr_60398_60435 = state_60384__$1;
(statearr_60398_60435[(2)] = inst_60377);

(statearr_60398_60435[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (3))){
var state_60384__$1 = state_60384;
var statearr_60399_60436 = state_60384__$1;
(statearr_60399_60436[(2)] = cljs_http.client.post);

(statearr_60399_60436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (12))){
var state_60384__$1 = state_60384;
var statearr_60400_60437 = state_60384__$1;
(statearr_60400_60437[(2)] = false);

(statearr_60400_60437[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (2))){
var inst_60348 = (state_60384[(2)]);
var inst_60349 = (inst_60348.cljs$core$IFn$_invoke$arity$2 ? inst_60348.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_60348.call(null,url,opts));
var state_60384__$1 = state_60384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60384__$1,(7),inst_60349);
} else {
if((state_val_60385 === (19))){
var inst_60382 = (state_60384[(2)]);
var state_60384__$1 = state_60384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60384__$1,inst_60382);
} else {
if((state_val_60385 === (11))){
var state_60384__$1 = state_60384;
var statearr_60401_60438 = state_60384__$1;
(statearr_60401_60438[(2)] = true);

(statearr_60401_60438[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (9))){
var state_60384__$1 = state_60384;
var statearr_60402_60439 = state_60384__$1;
(statearr_60402_60439[(2)] = false);

(statearr_60402_60439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (5))){
var state_60384__$1 = state_60384;
var statearr_60403_60440 = state_60384__$1;
(statearr_60403_60440[(2)] = cljs_http.client.put);

(statearr_60403_60440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (14))){
var inst_60351 = (state_60384[(7)]);
var inst_60369 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60351);
var state_60384__$1 = state_60384;
var statearr_60404_60441 = state_60384__$1;
(statearr_60404_60441[(2)] = inst_60369);

(statearr_60404_60441[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (16))){
var inst_60372 = (state_60384[(9)]);
var inst_60372__$1 = (state_60384[(2)]);
var inst_60373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60372__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_60374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60372__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_60384__$1 = (function (){var statearr_60405 = state_60384;
(statearr_60405[(9)] = inst_60372__$1);

(statearr_60405[(8)] = inst_60374);

return statearr_60405;
})();
if(cljs.core.truth_(inst_60373)){
var statearr_60406_60442 = state_60384__$1;
(statearr_60406_60442[(1)] = (17));

} else {
var statearr_60407_60443 = state_60384__$1;
(statearr_60407_60443[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (10))){
var inst_60367 = (state_60384[(2)]);
var state_60384__$1 = state_60384;
if(cljs.core.truth_(inst_60367)){
var statearr_60408_60444 = state_60384__$1;
(statearr_60408_60444[(1)] = (14));

} else {
var statearr_60409_60445 = state_60384__$1;
(statearr_60409_60445[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (18))){
var inst_60372 = (state_60384[(9)]);
var inst_60379 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_60372);
var inst_60380 = re_frame.core.dispatch(inst_60379);
var state_60384__$1 = state_60384;
var statearr_60410_60446 = state_60384__$1;
(statearr_60410_60446[(2)] = inst_60380);

(statearr_60410_60446[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60385 === (8))){
var inst_60351 = (state_60384[(7)]);
var inst_60356 = inst_60351.cljs$lang$protocol_mask$partition0$;
var inst_60357 = (inst_60356 & (64));
var inst_60358 = inst_60351.cljs$core$ISeq$;
var inst_60359 = (cljs.core.PROTOCOL_SENTINEL === inst_60358);
var inst_60360 = ((inst_60357) || (inst_60359));
var state_60384__$1 = state_60384;
if(cljs.core.truth_(inst_60360)){
var statearr_60411_60447 = state_60384__$1;
(statearr_60411_60447[(1)] = (11));

} else {
var statearr_60412_60448 = state_60384__$1;
(statearr_60412_60448[(1)] = (12));

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
var athens$effects$state_machine__42484__auto__ = null;
var athens$effects$state_machine__42484__auto____0 = (function (){
var statearr_60413 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60413[(0)] = athens$effects$state_machine__42484__auto__);

(statearr_60413[(1)] = (1));

return statearr_60413;
});
var athens$effects$state_machine__42484__auto____1 = (function (state_60384){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_60384);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e60414){var ex__42487__auto__ = e60414;
var statearr_60415_60449 = state_60384;
(statearr_60415_60449[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_60384[(4)]))){
var statearr_60416_60450 = state_60384;
(statearr_60416_60450[(1)] = cljs.core.first((state_60384[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60451 = state_60384;
state_60384 = G__60451;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
athens$effects$state_machine__42484__auto__ = function(state_60384){
switch(arguments.length){
case 0:
return athens$effects$state_machine__42484__auto____0.call(this);
case 1:
return athens$effects$state_machine__42484__auto____1.call(this,state_60384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__42484__auto____0;
athens$effects$state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__42484__auto____1;
return athens$effects$state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_60417 = f__42520__auto__();
(statearr_60417[(6)] = c__42519__auto__);

return statearr_60417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));

return c__42519__auto__;
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"timeout","timeout",-318625318),(function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__60418){
var map__60419 = p__60418;
var map__60419__$1 = (((((!((map__60419 == null))))?(((((map__60419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60419):map__60419);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60419__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60419__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60419__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60419__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__60421 = action;
var G__60421__$1 = (((G__60421 instanceof cljs.core.Keyword))?G__60421.fqn:null);
switch (G__60421__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return re_frame.core.dispatch(event);
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60421__$1)].join('')));

}
});
})());

//# sourceMappingURL=athens.effects.js.map
