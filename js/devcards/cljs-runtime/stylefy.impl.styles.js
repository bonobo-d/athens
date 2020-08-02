goog.provide('stylefy.impl.styles');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('clojure.string');
goog.require('stylefy.impl.dom');
goog.require('stylefy.impl.hashing');
goog.require('stylefy.impl.utils');
goog.require('stylefy.impl.state');
goog.require('stylefy.impl.conversion');
goog.require('stylefy.impl.log');
goog.require('clojure.set');
stylefy.impl.styles.global_vendor_prefixes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),cljs.core.PersistentHashSet.EMPTY], null));
stylefy.impl.styles.add_global_vendors = (function stylefy$impl$styles$add_global_vendors(style){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(style)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(style))], null)], 0));
});
stylefy.impl.styles.create_style_BANG_ = (function stylefy$impl$styles$create_style_BANG_(p__45159,style_created_handler){
var map__45160 = p__45159;
var map__45160__$1 = (((((!((map__45160 == null))))?(((((map__45160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45160):map__45160);
var style = map__45160__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45160__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45160__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var style_css = stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1(style);
var G__45162_45229 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),style_css,new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null);
(style_created_handler.cljs$core$IFn$_invoke$arity$1 ? style_created_handler.cljs$core$IFn$_invoke$arity$1(G__45162_45229) : style_created_handler.call(null,G__45162_45229));

var seq__45163 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(props)));
var chunk__45164 = null;
var count__45165 = (0);
var i__45166 = (0);
while(true){
if((i__45166 < count__45165)){
var sub_style = chunk__45164.cljs$core$IIndexed$_nth$arity$2(null,i__45166);
var G__45171_45232 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.hashing.hash_style(sub_style)], null);
var G__45172_45233 = style_created_handler;
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2(G__45171_45232,G__45172_45233) : stylefy.impl.styles.create_style_BANG_.call(null,G__45171_45232,G__45172_45233));


var G__45234 = seq__45163;
var G__45235 = chunk__45164;
var G__45236 = count__45165;
var G__45237 = (i__45166 + (1));
seq__45163 = G__45234;
chunk__45164 = G__45235;
count__45165 = G__45236;
i__45166 = G__45237;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45163);
if(temp__5735__auto__){
var seq__45163__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45163__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45163__$1);
var G__45240 = cljs.core.chunk_rest(seq__45163__$1);
var G__45241 = c__4609__auto__;
var G__45242 = cljs.core.count(c__4609__auto__);
var G__45243 = (0);
seq__45163 = G__45240;
chunk__45164 = G__45241;
count__45165 = G__45242;
i__45166 = G__45243;
continue;
} else {
var sub_style = cljs.core.first(seq__45163__$1);
var G__45173_45246 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.hashing.hash_style(sub_style)], null);
var G__45174_45247 = style_created_handler;
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$2(G__45173_45246,G__45174_45247) : stylefy.impl.styles.create_style_BANG_.call(null,G__45173_45246,G__45174_45247));


var G__45249 = cljs.core.next(seq__45163__$1);
var G__45250 = null;
var G__45251 = (0);
var G__45252 = (0);
seq__45163 = G__45249;
chunk__45164 = G__45250;
count__45165 = G__45251;
i__45166 = G__45252;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Return class definition as string, or nil if the argument is nil.
 */
stylefy.impl.styles.class_into_string = (function stylefy$impl$styles$class_into_string(class$){
if(cljs.core.truth_(class$)){
if(typeof class$ === 'string'){
return class$;
} else {
if((class$ instanceof cljs.core.Keyword)){
return cljs.core.name(class$);
} else {
if(cljs.core.vector_QMARK_(class$)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(stylefy.impl.styles.class_into_string,class$)));
} else {
return null;
}
}
}
} else {
return null;
}
});
stylefy.impl.styles.validate_class_definition = (function stylefy$impl$styles$validate_class_definition(class$,origin){
if((((class$ == null)) || (typeof class$ === 'string') || ((class$ instanceof cljs.core.Keyword)) || (((cljs.core.vector_QMARK_(class$)) && (cljs.core.every_QMARK_((function (p1__45175_SHARP_){
return ((typeof p1__45175_SHARP_ === 'string') || ((p1__45175_SHARP_ instanceof cljs.core.Keyword)) || ((p1__45175_SHARP_ == null)));
}),class$)))))){
return null;
} else {
throw (new Error(["Assert failed: ",["Unsupported ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(origin)," type. It should be nil, keyword, string or vector of strings/keywords). Got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class$], 0))].join(''),"\n","(or (nil? class) (string? class) (keyword? class) (and (vector? class) (every? (fn* [p1__45175#] (or (string? p1__45175#) (keyword? p1__45175#) (nil? p1__45175#))) class)))"].join('')));
}
});
/**
 * Given a style, hash and options, returns HTML attributes for a Hiccup component,
 * or nil if there are not any attributes.
 */
stylefy.impl.styles.prepare_style_return_value = (function stylefy$impl$styles$prepare_style_return_value(style,style_hash,options){
if(cljs.core.truth_(new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options))){
stylefy.impl.log.warn(":stylefy.core/with-classes is deprecated in options map (since 1.3.0, removed in 2.0.0), use :class instead.");
} else {
}

var style_with_classes = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(style);
var html_attributes = stylefy.impl.utils.remove_special_keywords(options);
var html_attributes_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(html_attributes);
var html_attributes_inline_style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(html_attributes);
stylefy.impl.styles.validate_class_definition(html_attributes_class,":class");

stylefy.impl.styles.validate_class_definition(style_with_classes,":stylefy.core/with-classes");

if((html_attributes_inline_style == null)){
} else {
throw (new Error(["Assert failed: ","HTML attribute :style is not supported in options map. Instead, you should provide your style definitions as the first argument when calling use-style.","\n","(nil? html-attributes-inline-style)"].join('')));
}

var class_as_string = stylefy.impl.styles.class_into_string(html_attributes_class);
var style_with_classes_as_string = stylefy.impl.styles.class_into_string(style_with_classes);
var final_class = clojure.string.trim([cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_hash)," ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_as_string,style_with_classes_as_string], null)))].join(''));
var final_html_attributes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html_attributes,(((!(cljs.core.empty_QMARK_(final_class))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),final_class], null):null)], 0));
if((!(cljs.core.empty_QMARK_(final_html_attributes)))){
return final_html_attributes;
} else {
return null;
}
});
stylefy.impl.styles.style_return_value = (function stylefy$impl$styles$style_return_value(style,style_hash,options){
var return_map = stylefy.impl.styles.prepare_style_return_value(style,style_hash,options);
if(((cljs.core.empty_QMARK_(style)) || (stylefy.impl.dom.style_in_dom_QMARK_(style_hash)))){
return return_map;
} else {
var contains_media_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_feature_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_manual_mode_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369).cljs$core$IFn$_invoke$arity$1(style) == null)));
var excluded_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),null], null), null);
var modes = new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(style);
var mode_names = ((cljs.core.map_QMARK_(modes))?cljs.core.set(cljs.core.keys(modes)):((cljs.core.vector_QMARK_(modes))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,modes)):cljs.core.PersistentHashSet.EMPTY
));
var contains_modes_not_excluded_QMARK_ = (!(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,excluded_modes),mode_names))));
var inline_style = stylefy.impl.conversion.garden_units__GT_css(stylefy.impl.utils.remove_special_keywords(style));
if(((contains_media_queries_QMARK_) || (contains_feature_queries_QMARK_) || (contains_manual_mode_QMARK_) || (contains_modes_not_excluded_QMARK_))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], 0))], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),inline_style], null)], 0));
}
}
});
stylefy.impl.styles.use_style_BANG_ = (function stylefy$impl$styles$use_style_BANG_(style,options,style_created_handler){
stylefy.impl.state.check_stylefy_initialisation();

var style_with_global_vendors = ((cljs.core.empty_QMARK_(style))?null:stylefy.impl.styles.add_global_vendors(style));
var style_hash = stylefy.impl.hashing.hash_style(style_with_global_vendors);
var already_created = stylefy.impl.dom.style_by_hash(style_hash);
if((((!(cljs.core.empty_QMARK_(style_with_global_vendors)))) && ((!((style_hash == null)))) && (cljs.core.not(already_created)))){
stylefy.impl.styles.create_style_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),style_with_global_vendors,new cljs.core.Keyword(null,"hash","hash",-13781596),style_hash], null),style_created_handler);
} else {
}

return stylefy.impl.styles.style_return_value(style_with_global_vendors,style_hash,options);
});
stylefy.impl.styles.use_sub_style_BANG_ = (function stylefy$impl$styles$use_sub_style_BANG_(style,sub_style,options,style_created_handler){
var resolved_sub_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style),sub_style);
if(cljs.core.truth_(resolved_sub_style)){
return stylefy.impl.styles.use_style_BANG_(resolved_sub_style,options,style_created_handler);
} else {
return stylefy.impl.log.warn(["Sub-style ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_style], 0))," not found in style: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''));
}
});
stylefy.impl.styles.sub_style = (function stylefy$impl$styles$sub_style(var_args){
var args__4795__auto__ = [];
var len__4789__auto___45264 = arguments.length;
var i__4790__auto___45265 = (0);
while(true){
if((i__4790__auto___45265 < len__4789__auto___45264)){
args__4795__auto__.push((arguments[i__4790__auto___45265]));

var G__45266 = (i__4790__auto___45265 + (1));
i__4790__auto___45265 = G__45266;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
var resolved_sub_style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__45197_SHARP_,p2__45198_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__45197_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),p2__45198_SHARP_], null));
}),style,sub_styles);
if(cljs.core.truth_(resolved_sub_style)){
return resolved_sub_style;
} else {
return stylefy.impl.log.warn(["Sub-style ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_styles], 0))," not found in style: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''));
}
}));

(stylefy.impl.styles.sub_style.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(stylefy.impl.styles.sub_style.cljs$lang$applyTo = (function (seq45199){
var G__45200 = cljs.core.first(seq45199);
var seq45199__$1 = cljs.core.next(seq45199);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45200,seq45199__$1);
}));

stylefy.impl.styles.prepare_styles = (function stylefy$impl$styles$prepare_styles(var_args){
var G__45206 = arguments.length;
switch (G__45206) {
case 1:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),true], null));
}));

(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2 = (function (styles,p__45208){
var map__45210 = p__45208;
var map__45210__$1 = (((((!((map__45210 == null))))?(((((map__45210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45210):map__45210);
var options = map__45210__$1;
var request_dom_update_after_done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45210__$1,new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510));
var styles_45268__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,styles);
var seq__45214_45269 = cljs.core.seq(styles_45268__$1);
var chunk__45215_45270 = null;
var count__45216_45271 = (0);
var i__45217_45272 = (0);
while(true){
if((i__45217_45272 < count__45216_45271)){
var style_45273 = chunk__45215_45270.cljs$core$IIndexed$_nth$arity$2(null,i__45217_45272);
stylefy.impl.styles.use_style_BANG_(style_45273,cljs.core.PersistentArrayMap.EMPTY,stylefy.impl.dom.save_style_BANG_);

var temp__5735__auto___45274 = cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_45273));
if(cljs.core.truth_(temp__5735__auto___45274)){
var sub_styles_45275 = temp__5735__auto___45274;
stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(sub_styles_45275,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__45276 = seq__45214_45269;
var G__45277 = chunk__45215_45270;
var G__45278 = count__45216_45271;
var G__45279 = (i__45217_45272 + (1));
seq__45214_45269 = G__45276;
chunk__45215_45270 = G__45277;
count__45216_45271 = G__45278;
i__45217_45272 = G__45279;
continue;
} else {
var temp__5735__auto___45280 = cljs.core.seq(seq__45214_45269);
if(temp__5735__auto___45280){
var seq__45214_45281__$1 = temp__5735__auto___45280;
if(cljs.core.chunked_seq_QMARK_(seq__45214_45281__$1)){
var c__4609__auto___45282 = cljs.core.chunk_first(seq__45214_45281__$1);
var G__45283 = cljs.core.chunk_rest(seq__45214_45281__$1);
var G__45284 = c__4609__auto___45282;
var G__45285 = cljs.core.count(c__4609__auto___45282);
var G__45286 = (0);
seq__45214_45269 = G__45283;
chunk__45215_45270 = G__45284;
count__45216_45271 = G__45285;
i__45217_45272 = G__45286;
continue;
} else {
var style_45287 = cljs.core.first(seq__45214_45281__$1);
stylefy.impl.styles.use_style_BANG_(style_45287,cljs.core.PersistentArrayMap.EMPTY,stylefy.impl.dom.save_style_BANG_);

var temp__5735__auto___45288__$1 = cljs.core.vals(new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_45287));
if(cljs.core.truth_(temp__5735__auto___45288__$1)){
var sub_styles_45289 = temp__5735__auto___45288__$1;
stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(sub_styles_45289,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__45290 = cljs.core.next(seq__45214_45281__$1);
var G__45291 = null;
var G__45292 = (0);
var G__45293 = (0);
seq__45214_45269 = G__45290;
chunk__45215_45270 = G__45291;
count__45216_45271 = G__45292;
i__45217_45272 = G__45293;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(request_dom_update_after_done_QMARK_)){
return stylefy.impl.dom.update_dom_if_requested();
} else {
return null;
}
}));

(stylefy.impl.styles.prepare_styles.cljs$lang$maxFixedArity = 2);

stylefy.impl.styles.init_global_vendor_prefixes = (function stylefy$impl$styles$init_global_vendor_prefixes(options){
var global_vendor_prefixes_options = new cljs.core.Keyword(null,"global-vendor-prefixes","global-vendor-prefixes",882986417).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.reset_BANG_(stylefy.impl.styles.global_vendor_prefixes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options)], null));
});

//# sourceMappingURL=stylefy.impl.styles.js.map
