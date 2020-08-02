goog.provide('athens.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('posh.reagent');
goog.require('tick.alpha.api');
goog.require('tick.locale_en_us');
athens.util.gen_block_uid = (function athens$util$gen_block_uid(){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),(27));
});
athens.util.scroll_if_needed = (function athens$util$scroll_if_needed(element,container){
if((element.offsetTop < container.scrollTop)){
return (container.scrollTop = element.offsetTop);
} else {
var offsetBottom = (element.offsetTop + element.offsetHeight);
var scrollBottom = (container.scrollTop + container.offsetHeight);
if((scrollBottom < offsetBottom)){
return (container.scrollTop = (offsetBottom - container.offsetHeight));
} else {
return null;
}
}
});
athens.util.mouse_offset = (function athens$util$mouse_offset(e){
var rect = e.target.getBoundingClientRect();
var offset_x = (e.pageX - rect.left);
var offset_y = (e.pageY - rect.top);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),offset_x,new cljs.core.Keyword(null,"y","y",-1757859776),offset_y], null);
});
athens.util.vertical_center = (function athens$util$vertical_center(el){
var rect = el.getBoundingClientRect();
return ((rect.bottom - rect.top) / (2));
});
/**
 * Checks if any part of the element is above or below the container's bounding rect
 */
athens.util.is_beyond_rect_QMARK_ = (function athens$util$is_beyond_rect_QMARK_(element,container){
var el_box = element.getBoundingClientRect();
var cont_box = container.getBoundingClientRect();
return (((el_box.bottom > cont_box.bottom)) || ((el_box.top < cont_box.top)));
});
athens.util.date_col_format = tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("LLLL dd, yyyy h':'mma");
athens.util.US_format = tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("MM-dd-yyyy");
athens.util.title_format = tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1("LLLL dd, yyyy");
athens.util.now_ts = (function athens$util$now_ts(){
return (new Date()).getTime();
});
/**
 * Returns today's date or a date OFFSET days before today
 */
athens.util.get_day = (function athens$util$get_day(var_args){
var G__39192 = arguments.length;
switch (G__39192) {
case 0:
return athens.util.get_day.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return athens.util.get_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.util.get_day.cljs$core$IFn$_invoke$arity$0 = (function (){
return athens.util.get_day.cljs$core$IFn$_invoke$arity$1((0));
}));

(athens.util.get_day.cljs$core$IFn$_invoke$arity$1 = (function (offset){
var day = tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic(tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.alpha.api.new_duration(offset,new cljs.core.Keyword(null,"days","days",-1394072564))], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uid","uid",-1447769400),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.util.US_format,day),new cljs.core.Keyword(null,"title","title",636505583),tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.util.title_format,day)], null);
}));

(athens.util.get_day.cljs$lang$maxFixedArity = 1);

athens.util.date_string = (function athens$util$date_string(ts){
if(cljs.core.not(ts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"(unknown date)"], null);
} else {
var x = tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1(ts);
var x__$1 = tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1(x);
var x__$2 = tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2(athens.util.date_col_format,x__$1);
var x__$3 = clojure.string.replace(x__$2,/AM/,"am");
return clojure.string.replace(x__$3,/PM/,"pm");
}
});
athens.util.regex_esc_char_map = (function (){var esc_chars = "()*&^%$#![]";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39196_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39196_SHARP_)].join('');
}),esc_chars));
})();
/**
 * Take a string and escape all regex special characters in it
 */
athens.util.escape_str = (function athens$util$escape_str(str){
return clojure.string.escape(str,athens.util.regex_esc_char_map);
});

//# sourceMappingURL=athens.util.js.map
