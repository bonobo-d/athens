goog.provide('athens.devcards.db_boxes');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.views.data_browser');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('garden.core');
goog.require('reagent.core');
goog.require('sci.core');
goog.require('goog.events.KeyCodes');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  # An experiment in browsing the datascript database\n\n  You can use these devcards to explore the Athens datascript database.\n\n  Initial data:\n  - Start by loading initial data with the \"Load Real Data\" button.\n  - This will load some sample datoms from the ego.datoms file\n\n  Executing queries:\n  - The browse-box uses [sci](https://github.com/borkdude/sci) to execute datascript queries.\n  - In addition to the (non-side-effecting) clojure.core functions, the following bindings are available:\n  - `athens/db` -> the datascript connection, dereference (`@`) to get the current database value\n  - `d/q` -> for querying the database\n  - `d/pull` -> pull one or more attributes of an entity, returns a map\n  - `d/pull-many` -> like `d/pull`, but pulls many entities at once\n  - Execute the query by pressing `shift-enter`\n\n  Browsing:\n  - The browser is a simple html table translating the query result into rows and cells.\n  - Browsing is possible if you've used a pull expression (in a query or with `d/pull` or `d/pull-many`).\n  - If you click a link, it will generate a new query and evaluate it.\n\n  History:\n  - Devcards keeps a history for us. Use the arrows at the bottom to navigate back to earlier states.\n\n  Possible improvements:\n  - Right now navigation is only possible by using a pull expression. By analysing queries it might also be possible for all other queries.\n  - No transctions are currently allowed, but this can easily be changed by adding `d/transact` to sci's bindings.\n  - There is absolutely no styling, some minimal styling would probably make reading the table easier.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
athens.devcards.db_boxes.initial_box = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"str-content","str-content",297549190),"(d/q '[:find [(pull ?e [*]) ...]\n       :where [?e :node/title]]\n    @athens/db)"], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.box_state_STAR_ !== 'undefined')){
} else {
athens.devcards.db_boxes.box_state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.initial_box);
}
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__59317){
var map__59318 = p__59317;
var map__59318__$1 = (((((!((map__59318 == null))))?(((((map__59318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59318):map__59318);
var box = map__59318__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59318__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__59320 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e59323){if((e59323 instanceof Error)){
var e = e59323;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e59323;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59320,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59320,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__59324_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59324_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__42519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42520__auto__ = (function (){var switch__42483__auto__ = (function (state_59364){
var state_val_59365 = (state_59364[(1)]);
if((state_val_59365 === (7))){
var state_59364__$1 = state_59364;
var statearr_59366_59427 = state_59364__$1;
(statearr_59366_59427[(2)] = false);

(statearr_59366_59427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59365 === (1))){
var inst_59326 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_59327 = [false];
var inst_59328 = cljs.core.PersistentHashMap.fromArrays(inst_59326,inst_59327);
var inst_59329 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_59328], 0));
var state_59364__$1 = state_59364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59364__$1,(2),inst_59329);
} else {
if((state_val_59365 === (4))){
var state_59364__$1 = state_59364;
var statearr_59367_59428 = state_59364__$1;
(statearr_59367_59428[(2)] = false);

(statearr_59367_59428[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59365 === (13))){
var inst_59360 = alert("Failed to retrieve data from GitHub");
var state_59364__$1 = state_59364;
var statearr_59368_59429 = state_59364__$1;
(statearr_59368_59429[(2)] = inst_59360);

(statearr_59368_59429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59365 === (6))){
var state_59364__$1 = state_59364;
var statearr_59369_59430 = state_59364__$1;
(statearr_59369_59430[(2)] = true);

(statearr_59369_59430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59365 === (3))){
var inst_59331 = (state_59364[(7)]);
var inst_59336 = inst_59331.cljs$lang$protocol_mask$partition0$;
var inst_59337 = (inst_59336 & (64));
var inst_59338 = inst_59331.cljs$core$ISeq$;
var inst_59339 = (cljs.core.PROTOCOL_SENTINEL === inst_59338);
var inst_59340 = ((inst_59337) || (inst_59339));
var state_59364__$1 = state_59364;
if(cljs.core.truth_(inst_59340)){
var statearr_59370_59431 = state_59364__$1;
(statearr_59370_59431[(1)] = (6));

} else {
var statearr_59371_59432 = state_59364__$1;
(statearr_59371_59432[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59365 === (12))){
var inst_59354 = (state_59364[(8)]);
var inst_59356 = athens.db.str_to_db_tx(inst_59354);
var inst_59357 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_59356);
var inst_59358 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_59364__$1 = (function (){var statearr_59372 = state_59364;
(statearr_59372[(9)] = inst_59357);

return statearr_59372;
})();
var statearr_59373_59433 = state_59364__$1;
(statearr_59373_59433[(2)] = inst_59358);

(statearr_59373_59433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59365 === (2))){
var inst_59331 = (state_59364[(7)]);
var inst_59331__$1 = (state_59364[(2)]);
var inst_59333 = (inst_59331__$1 == null);
var inst_59334 = cljs.core.not(inst_59333);
var state_59364__$1 = (function (){var statearr_59374 = state_59364;
(statearr_59374[(7)] = inst_59331__$1);

return statearr_59374;
})();
if(inst_59334){
var statearr_59375_59434 = state_59364__$1;
(statearr_59375_59434[(1)] = (3));

} else {
var statearr_59376_59435 = state_59364__$1;
(statearr_59376_59435[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59365 === (11))){
var inst_59352 = (state_59364[(2)]);
var inst_59353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59352,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_59354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59352,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_59364__$1 = (function (){var statearr_59377 = state_59364;
(statearr_59377[(8)] = inst_59354);

return statearr_59377;
})();
if(cljs.core.truth_(inst_59353)){
var statearr_59378_59436 = state_59364__$1;
(statearr_59378_59436[(1)] = (12));

} else {
var statearr_59379_59437 = state_59364__$1;
(statearr_59379_59437[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59365 === (9))){
var inst_59331 = (state_59364[(7)]);
var inst_59349 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59331);
var state_59364__$1 = state_59364;
var statearr_59380_59438 = state_59364__$1;
(statearr_59380_59438[(2)] = inst_59349);

(statearr_59380_59438[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59365 === (5))){
var inst_59347 = (state_59364[(2)]);
var state_59364__$1 = state_59364;
if(cljs.core.truth_(inst_59347)){
var statearr_59381_59439 = state_59364__$1;
(statearr_59381_59439[(1)] = (9));

} else {
var statearr_59382_59440 = state_59364__$1;
(statearr_59382_59440[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59365 === (14))){
var inst_59362 = (state_59364[(2)]);
var state_59364__$1 = state_59364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59364__$1,inst_59362);
} else {
if((state_val_59365 === (10))){
var inst_59331 = (state_59364[(7)]);
var state_59364__$1 = state_59364;
var statearr_59383_59441 = state_59364__$1;
(statearr_59383_59441[(2)] = inst_59331);

(statearr_59383_59441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59365 === (8))){
var inst_59344 = (state_59364[(2)]);
var state_59364__$1 = state_59364;
var statearr_59384_59442 = state_59364__$1;
(statearr_59384_59442[(2)] = inst_59344);

(statearr_59384_59442[(1)] = (5));


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
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto__ = null;
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto____0 = (function (){
var statearr_59385 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59385[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto__);

(statearr_59385[(1)] = (1));

return statearr_59385;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto____1 = (function (state_59364){
while(true){
var ret_value__42485__auto__ = (function (){try{while(true){
var result__42486__auto__ = switch__42483__auto__(state_59364);
if(cljs.core.keyword_identical_QMARK_(result__42486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42486__auto__;
}
break;
}
}catch (e59386){var ex__42487__auto__ = e59386;
var statearr_59387_59443 = state_59364;
(statearr_59387_59443[(2)] = ex__42487__auto__);


if(cljs.core.seq((state_59364[(4)]))){
var statearr_59388_59444 = state_59364;
(statearr_59388_59444[(1)] = cljs.core.first((state_59364[(4)])));

} else {
throw ex__42487__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59445 = state_59364;
state_59364 = G__59445;
continue;
} else {
return ret_value__42485__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto__ = function(state_59364){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto____1.call(this,state_59364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__42484__auto__;
})()
})();
var state__42521__auto__ = (function (){var statearr_59389 = f__42520__auto__();
(statearr_59389[(6)] = c__42519__auto__);

return statearr_59389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42521__auto__);
}));

return c__42519__auto__;
});
athens.devcards.db_boxes.load_real_db_button = (function athens$devcards$db_boxes$load_real_db_button(conn){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db_boxes.load_real_db_BANG_(conn);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59390 = (function (meta59391){
this.meta59391 = meta59391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59392,meta59391__$1){
var self__ = this;
var _59392__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59390(meta59391__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59392){
var self__ = this;
var _59392__$1 = this;
return self__.meta59391;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59390.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59390.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47717__auto__,devcard_opts__47718__auto__){
var self__ = this;
var this__47717__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47718__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47736__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__47736__auto__)){
return (function (data_atom__47737__auto__,owner__47738__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47736__auto__,data_atom__47737__auto__,owner__47738__auto__], null));
});
} else {
return reagent.core.as_element(v__47736__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47718__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59391","meta59391",1052712444,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59390.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59390.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59390");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59390.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59390");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59390.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59390 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59390(meta59391){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59390(meta59391));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59390(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59393 = (function (meta59394){
this.meta59394 = meta59394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59395,meta59394__$1){
var self__ = this;
var _59395__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59393(meta59394__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59395){
var self__ = this;
var _59395__$1 = this;
return self__.meta59394;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59393.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59393.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47717__auto__,devcard_opts__47718__auto__){
var self__ = this;
var this__47717__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47718__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47736__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards_rendered-card",".com-rigsomelight-devcards_rendered-card",-457975033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column-reverse"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__47736__auto__)){
return (function (data_atom__47737__auto__,owner__47738__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47736__auto__,data_atom__47737__auto__,owner__47738__auto__], null));
});
} else {
return reagent.core.as_element(v__47736__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47718__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59394","meta59394",1334621227,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59393.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59393.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59393");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59393.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59393");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59393.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59393 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59393(meta59394){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59393(meta59394));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59393(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__59397 = arguments.length;
switch (G__59397) {
case 1:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1 = (function (id){
return ["(d/pull @athens/db '[*] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),")"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2 = (function (attr,id){
return ["(d/pull @athens/db '[*] [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),"])"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$lang$maxFixedArity = 2);

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__59398){
var map__59399 = p__59398;
var map__59399__$1 = (((((!((map__59399 == null))))?(((((map__59399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59399):map__59399);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(value)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = id;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return value;
}
})()));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(athens.views.data_browser.attr_unique_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2(attr,value));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(((athens.views.data_browser.attr_many_QMARK_(attr)) && (athens.views.data_browser.attr_ref_QMARK_(attr)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function athens$devcards$db_boxes$cell_$_iter__59401(s__59402){
return (new cljs.core.LazySeq(null,(function (){
var s__59402__$1 = s__59402;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59402__$1);
if(temp__5735__auto__){
var s__59402__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59402__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__59402__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__59404 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__59403 = (0);
while(true){
if((i__59403 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__59403);
cljs.core.chunk_append(b__59404,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59405 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59405) : athens.devcards.db_boxes.cell.call(null,G__59405));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__59447 = (i__59403 + (1));
i__59403 = G__59447;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59404),athens$devcards$db_boxes$cell_$_iter__59401(cljs.core.chunk_rest(s__59402__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59404),null);
}
} else {
var v = cljs.core.first(s__59402__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59406 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59406) : athens.devcards.db_boxes.cell.call(null,G__59406));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__59401(cljs.core.rest(s__59402__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(value);
})()], null);
} else {
if(cljs.core.truth_(athens.views.data_browser.attr_reverse_QMARK_(attr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function athens$devcards$db_boxes$cell_$_iter__59407(s__59408){
return (new cljs.core.LazySeq(null,(function (){
var s__59408__$1 = s__59408;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59408__$1);
if(temp__5735__auto__){
var s__59408__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59408__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__59408__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__59410 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__59409 = (0);
while(true){
if((i__59409 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__59409);
cljs.core.chunk_append(b__59410,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59411 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59411) : athens.devcards.db_boxes.cell.call(null,G__59411));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__59448 = (i__59409 + (1));
i__59409 = G__59448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59410),athens$devcards$db_boxes$cell_$_iter__59407(cljs.core.chunk_rest(s__59408__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59410),null);
}
} else {
var v = cljs.core.first(s__59408__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59412 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59412) : athens.devcards.db_boxes.cell.call(null,G__59412));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__59407(cljs.core.rest(s__59408__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(value);
})()], null);
} else {
if(athens.views.data_browser.attr_many_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function athens$devcards$db_boxes$cell_$_iter__59413(s__59414){
return (new cljs.core.LazySeq(null,(function (){
var s__59414__$1 = s__59414;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59414__$1);
if(temp__5735__auto__){
var s__59414__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59414__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__59414__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__59416 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__59415 = (0);
while(true){
if((i__59415 < size__4528__auto__)){
var v = cljs.core._nth(c__4527__auto__,i__59415);
cljs.core.chunk_append(b__59416,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59417 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59417) : athens.devcards.db_boxes.cell.call(null,G__59417));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__59449 = (i__59415 + (1));
i__59415 = G__59449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59416),athens$devcards$db_boxes$cell_$_iter__59413(cljs.core.chunk_rest(s__59414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59416),null);
}
} else {
var v = cljs.core.first(s__59414__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__59418 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__59418) : athens.devcards.db_boxes.cell.call(null,G__59418));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__59413(cljs.core.rest(s__59414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(value);
})()], null);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

}
}
}
}
}
} else {
return "";
}
});
athens.devcards.db_boxes.error_component = (function athens$devcards$db_boxes$error_component(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
});
athens.devcards.db_boxes.handle_box_change_BANG_ = (function athens$devcards$db_boxes$handle_box_change_BANG_(e){
return athens.devcards.db_boxes.update_box_BANG_(e.target.value);
});
athens.devcards.db_boxes.handle_return_key_BANG_ = (function athens$devcards$db_boxes$handle_return_key_BANG_(e){
e.preventDefault();

return athens.devcards.db_boxes.eval_box_BANG_();
});
athens.devcards.db_boxes.insert_tab = (function athens$devcards$db_boxes$insert_tab(s,pos){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),pos),"  ",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,pos)].join('');
});
athens.devcards.db_boxes.handle_tab_key_BANG_ = (function athens$devcards$db_boxes$handle_tab_key_BANG_(e){
var t = e.target;
var v = t.value;
var pos = t.selectionStart;
e.preventDefault();

athens.devcards.db_boxes.update_box_BANG_(athens.devcards.db_boxes.insert_tab(v,pos));

return (t.selectionEnd = ((2) + pos));
});
athens.devcards.db_boxes.handle_box_key_down_BANG_ = (function athens$devcards$db_boxes$handle_box_key_down_BANG_(e){
var key = e.keyCode;
var shift_QMARK_ = e.shiftKey;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.ENTER)){
if(cljs.core.truth_(shift_QMARK_)){
return athens.devcards.db_boxes.handle_return_key_BANG_(e);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.TAB)){
return athens.devcards.db_boxes.handle_tab_key_BANG_(e);
} else {
return null;

}
}
});
athens.devcards.db_boxes.box_component = (function athens$devcards$db_boxes$box_component(box_state,_){
var map__59419 = cljs.core.deref(box_state);
var map__59419__$1 = (((((!((map__59419 == null))))?(((((map__59419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59419):map__59419);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59419__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59419__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59419__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.data_browser.browser,result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.db_boxes.cell], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.error_component,result], null))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59421 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59421 = (function (meta59422){
this.meta59422 = meta59422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59423,meta59422__$1){
var self__ = this;
var _59423__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59421(meta59422__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59423){
var self__ = this;
var _59423__$1 = this;
return self__.meta59422;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59421.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59421.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47717__auto__,devcard_opts__47718__auto__){
var self__ = this;
var this__47717__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47718__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47736__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__47736__auto__)){
return (function (data_atom__47737__auto__,owner__47738__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47736__auto__,data_atom__47737__auto__,owner__47738__auto__], null));
});
} else {
return reagent.core.as_element(v__47736__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47718__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59422","meta59422",1231431515,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59421.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59421.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59421");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59421.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59421");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59421.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59421 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59421(meta59422){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59421(meta59422));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59421(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes59424 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes59424 = (function (meta59425){
this.meta59425 = meta59425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes59424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59426,meta59425__$1){
var self__ = this;
var _59426__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59424(meta59425__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59426){
var self__ = this;
var _59426__$1 = this;
return self__.meta59425;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59424.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59424.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47717__auto__,devcard_opts__47718__auto__){
var self__ = this;
var this__47717__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47718__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47736__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__47736__auto__)){
return (function (data_atom__47737__auto__,owner__47738__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47736__auto__,data_atom__47737__auto__,owner__47738__auto__], null));
});
} else {
return reagent.core.as_element(v__47736__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47718__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta59425","meta59425",-159241795,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59424.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59424.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes59424");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes59424.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes59424");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes59424.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes59424 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes59424(meta59425){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59424(meta59425));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes59424(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
