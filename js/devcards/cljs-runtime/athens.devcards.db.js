goog.provide('athens.devcards.db');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.views.buttons');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('reagent.core');
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(){
var c__43456__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43457__auto__ = (function (){var switch__43388__auto__ = (function (state_49178){
var state_val_49179 = (state_49178[(1)]);
if((state_val_49179 === (7))){
var state_49178__$1 = state_49178;
var statearr_49180_49214 = state_49178__$1;
(statearr_49180_49214[(2)] = false);

(statearr_49180_49214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (1))){
var inst_49141 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_49142 = [false];
var inst_49143 = cljs.core.PersistentHashMap.fromArrays(inst_49141,inst_49142);
var inst_49144 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49143], 0));
var state_49178__$1 = state_49178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49178__$1,(2),inst_49144);
} else {
if((state_val_49179 === (4))){
var state_49178__$1 = state_49178;
var statearr_49181_49215 = state_49178__$1;
(statearr_49181_49215[(2)] = false);

(statearr_49181_49215[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (13))){
var inst_49174 = alert("Failed to retrieve data from GitHub");
var state_49178__$1 = state_49178;
var statearr_49182_49216 = state_49178__$1;
(statearr_49182_49216[(2)] = inst_49174);

(statearr_49182_49216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (6))){
var state_49178__$1 = state_49178;
var statearr_49185_49217 = state_49178__$1;
(statearr_49185_49217[(2)] = true);

(statearr_49185_49217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (3))){
var inst_49146 = (state_49178[(7)]);
var inst_49151 = inst_49146.cljs$lang$protocol_mask$partition0$;
var inst_49152 = (inst_49151 & (64));
var inst_49153 = inst_49146.cljs$core$ISeq$;
var inst_49154 = (cljs.core.PROTOCOL_SENTINEL === inst_49153);
var inst_49155 = ((inst_49152) || (inst_49154));
var state_49178__$1 = state_49178;
if(cljs.core.truth_(inst_49155)){
var statearr_49187_49218 = state_49178__$1;
(statearr_49187_49218[(1)] = (6));

} else {
var statearr_49188_49219 = state_49178__$1;
(statearr_49188_49219[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (12))){
var inst_49169 = (state_49178[(8)]);
var inst_49171 = athens.db.str_to_db_tx(inst_49169);
var inst_49172 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_49171) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_49171));
var state_49178__$1 = state_49178;
var statearr_49189_49220 = state_49178__$1;
(statearr_49189_49220[(2)] = inst_49172);

(statearr_49189_49220[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (2))){
var inst_49146 = (state_49178[(7)]);
var inst_49146__$1 = (state_49178[(2)]);
var inst_49148 = (inst_49146__$1 == null);
var inst_49149 = cljs.core.not(inst_49148);
var state_49178__$1 = (function (){var statearr_49190 = state_49178;
(statearr_49190[(7)] = inst_49146__$1);

return statearr_49190;
})();
if(inst_49149){
var statearr_49191_49221 = state_49178__$1;
(statearr_49191_49221[(1)] = (3));

} else {
var statearr_49192_49222 = state_49178__$1;
(statearr_49192_49222[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (11))){
var inst_49167 = (state_49178[(2)]);
var inst_49168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49167,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_49169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49167,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_49178__$1 = (function (){var statearr_49193 = state_49178;
(statearr_49193[(8)] = inst_49169);

return statearr_49193;
})();
if(cljs.core.truth_(inst_49168)){
var statearr_49194_49223 = state_49178__$1;
(statearr_49194_49223[(1)] = (12));

} else {
var statearr_49195_49224 = state_49178__$1;
(statearr_49195_49224[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (9))){
var inst_49146 = (state_49178[(7)]);
var inst_49164 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49146);
var state_49178__$1 = state_49178;
var statearr_49196_49226 = state_49178__$1;
(statearr_49196_49226[(2)] = inst_49164);

(statearr_49196_49226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (5))){
var inst_49162 = (state_49178[(2)]);
var state_49178__$1 = state_49178;
if(cljs.core.truth_(inst_49162)){
var statearr_49198_49227 = state_49178__$1;
(statearr_49198_49227[(1)] = (9));

} else {
var statearr_49199_49228 = state_49178__$1;
(statearr_49199_49228[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (14))){
var inst_49176 = (state_49178[(2)]);
var state_49178__$1 = state_49178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49178__$1,inst_49176);
} else {
if((state_val_49179 === (10))){
var inst_49146 = (state_49178[(7)]);
var state_49178__$1 = state_49178;
var statearr_49200_49229 = state_49178__$1;
(statearr_49200_49229[(2)] = inst_49146);

(statearr_49200_49229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49179 === (8))){
var inst_49159 = (state_49178[(2)]);
var state_49178__$1 = state_49178;
var statearr_49201_49230 = state_49178__$1;
(statearr_49201_49230[(2)] = inst_49159);

(statearr_49201_49230[(1)] = (5));


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
});
return (function() {
var athens$devcards$db$load_real_db_BANG__$_state_machine__43389__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__43389__auto____0 = (function (){
var statearr_49202 = [null,null,null,null,null,null,null,null,null];
(statearr_49202[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__43389__auto__);

(statearr_49202[(1)] = (1));

return statearr_49202;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__43389__auto____1 = (function (state_49178){
while(true){
var ret_value__43390__auto__ = (function (){try{while(true){
var result__43391__auto__ = switch__43388__auto__(state_49178);
if(cljs.core.keyword_identical_QMARK_(result__43391__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43391__auto__;
}
break;
}
}catch (e49203){if((e49203 instanceof Object)){
var ex__43392__auto__ = e49203;
var statearr_49204_49231 = state_49178;
(statearr_49204_49231[(5)] = ex__43392__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49203;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43390__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49232 = state_49178;
state_49178 = G__49232;
continue;
} else {
return ret_value__43390__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__43389__auto__ = function(state_49178){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__43389__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__43389__auto____1.call(this,state_49178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__43389__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__43389__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__43389__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__43389__auto__;
})()
})();
var state__43458__auto__ = (function (){var statearr_49205 = (f__43457__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43457__auto__.cljs$core$IFn$_invoke$arity$0() : f__43457__auto__.call(null));
(statearr_49205[(6)] = c__43456__auto__);

return statearr_49205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43458__auto__);
}));

return c__43456__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_();
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
athens.devcards.db.reset_db_button = (function athens$devcards$db$reset_db_button(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));
})], null),"Reset DB"], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds. Can only press once.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db49207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db49207 = (function (meta49208){
this.meta49208 = meta49208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db49207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49209,meta49208__$1){
var self__ = this;
var _49209__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db49207(meta49208__$1));
}));

(athens.devcards.db.t_athens$devcards$db49207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49209){
var self__ = this;
var _49209__$1 = this;
return self__.meta49208;
}));

(athens.devcards.db.t_athens$devcards$db49207.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db49207.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48669__auto__,devcard_opts__48670__auto__){
var self__ = this;
var this__48669__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48670__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48688__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__48688__auto__)){
return (function (data_atom__48689__auto__,owner__48690__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48688__auto__,data_atom__48689__auto__,owner__48690__auto__], null));
});
} else {
return reagent.core.as_element(v__48688__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48670__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db49207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49208","meta49208",783540913,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db49207.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db49207.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db49207");

(athens.devcards.db.t_athens$devcards$db49207.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db49207");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db49207.
 */
athens.devcards.db.__GT_t_athens$devcards$db49207 = (function athens$devcards$db$__GT_t_athens$devcards$db49207(meta49208){
return (new athens.devcards.db.t_athens$devcards$db49207(meta49208));
});

}

return (new athens.devcards.db.t_athens$devcards$db49207(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Reset-DB","Reset-DB",2022815017)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db49210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db49210 = (function (meta49211){
this.meta49211 = meta49211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db49210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49212,meta49211__$1){
var self__ = this;
var _49212__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db49210(meta49211__$1));
}));

(athens.devcards.db.t_athens$devcards$db49210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49212){
var self__ = this;
var _49212__$1 = this;
return self__.meta49211;
}));

(athens.devcards.db.t_athens$devcards$db49210.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db49210.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48669__auto__,devcard_opts__48670__auto__){
var self__ = this;
var this__48669__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48670__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48688__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.reset_db_button], null);
if(cljs.core.fn_QMARK_(v__48688__auto__)){
return (function (data_atom__48689__auto__,owner__48690__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48688__auto__,data_atom__48689__auto__,owner__48690__auto__], null));
});
} else {
return reagent.core.as_element(v__48688__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48670__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db49210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49211","meta49211",199958506,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db49210.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db49210.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db49210");

(athens.devcards.db.t_athens$devcards$db49210.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db49210");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db49210.
 */
athens.devcards.db.__GT_t_athens$devcards$db49210 = (function athens$devcards$db$__GT_t_athens$devcards$db49210(meta49211){
return (new athens.devcards.db.t_athens$devcards$db49210(meta49211));
});

}

return (new athens.devcards.db.t_athens$devcards$db49210(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=athens.devcards.db.js.map
