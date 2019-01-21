// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e36654){if((e36654 instanceof Error)){
var e = e36654;
return "Error: Unable to stringify";
} else {
throw e36654;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36657 = arguments.length;
switch (G__36657) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36655_SHARP_){
if(typeof p1__36655_SHARP_ === 'string'){
return p1__36655_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36655_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___36660 = arguments.length;
var i__4642__auto___36661 = (0);
while(true){
if((i__4642__auto___36661 < len__4641__auto___36660)){
args__4647__auto__.push((arguments[i__4642__auto___36661]));

var G__36662 = (i__4642__auto___36661 + (1));
i__4642__auto___36661 = G__36662;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36659){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36659));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___36664 = arguments.length;
var i__4642__auto___36665 = (0);
while(true){
if((i__4642__auto___36665 < len__4641__auto___36664)){
args__4647__auto__.push((arguments[i__4642__auto___36665]));

var G__36666 = (i__4642__auto___36665 + (1));
i__4642__auto___36665 = G__36666;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36663){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36663));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36667){
var map__36668 = p__36667;
var map__36668__$1 = (((((!((map__36668 == null))))?(((((map__36668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36668):map__36668);
var message = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31367__auto___36747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___36747,ch){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___36747,ch){
return (function (state_36719){
var state_val_36720 = (state_36719[(1)]);
if((state_val_36720 === (7))){
var inst_36715 = (state_36719[(2)]);
var state_36719__$1 = state_36719;
var statearr_36721_36748 = state_36719__$1;
(statearr_36721_36748[(2)] = inst_36715);

(statearr_36721_36748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (1))){
var state_36719__$1 = state_36719;
var statearr_36722_36749 = state_36719__$1;
(statearr_36722_36749[(2)] = null);

(statearr_36722_36749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (4))){
var inst_36672 = (state_36719[(7)]);
var inst_36672__$1 = (state_36719[(2)]);
var state_36719__$1 = (function (){var statearr_36723 = state_36719;
(statearr_36723[(7)] = inst_36672__$1);

return statearr_36723;
})();
if(cljs.core.truth_(inst_36672__$1)){
var statearr_36724_36750 = state_36719__$1;
(statearr_36724_36750[(1)] = (5));

} else {
var statearr_36725_36751 = state_36719__$1;
(statearr_36725_36751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (15))){
var inst_36679 = (state_36719[(8)]);
var inst_36694 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36679);
var inst_36695 = cljs.core.first.call(null,inst_36694);
var inst_36696 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36695);
var inst_36697 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36696)].join('');
var inst_36698 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36697);
var state_36719__$1 = state_36719;
var statearr_36726_36752 = state_36719__$1;
(statearr_36726_36752[(2)] = inst_36698);

(statearr_36726_36752[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (13))){
var inst_36703 = (state_36719[(2)]);
var state_36719__$1 = state_36719;
var statearr_36727_36753 = state_36719__$1;
(statearr_36727_36753[(2)] = inst_36703);

(statearr_36727_36753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (6))){
var state_36719__$1 = state_36719;
var statearr_36728_36754 = state_36719__$1;
(statearr_36728_36754[(2)] = null);

(statearr_36728_36754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (17))){
var inst_36701 = (state_36719[(2)]);
var state_36719__$1 = state_36719;
var statearr_36729_36755 = state_36719__$1;
(statearr_36729_36755[(2)] = inst_36701);

(statearr_36729_36755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (3))){
var inst_36717 = (state_36719[(2)]);
var state_36719__$1 = state_36719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36719__$1,inst_36717);
} else {
if((state_val_36720 === (12))){
var inst_36678 = (state_36719[(9)]);
var inst_36692 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36678,opts);
var state_36719__$1 = state_36719;
if(inst_36692){
var statearr_36730_36756 = state_36719__$1;
(statearr_36730_36756[(1)] = (15));

} else {
var statearr_36731_36757 = state_36719__$1;
(statearr_36731_36757[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (2))){
var state_36719__$1 = state_36719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36719__$1,(4),ch);
} else {
if((state_val_36720 === (11))){
var inst_36679 = (state_36719[(8)]);
var inst_36684 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36685 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36679);
var inst_36686 = cljs.core.async.timeout.call(null,(1000));
var inst_36687 = [inst_36685,inst_36686];
var inst_36688 = (new cljs.core.PersistentVector(null,2,(5),inst_36684,inst_36687,null));
var state_36719__$1 = state_36719;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36719__$1,(14),inst_36688);
} else {
if((state_val_36720 === (9))){
var inst_36679 = (state_36719[(8)]);
var inst_36705 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36706 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36679);
var inst_36707 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36706);
var inst_36708 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36707)].join('');
var inst_36709 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36708);
var state_36719__$1 = (function (){var statearr_36732 = state_36719;
(statearr_36732[(10)] = inst_36705);

return statearr_36732;
})();
var statearr_36733_36758 = state_36719__$1;
(statearr_36733_36758[(2)] = inst_36709);

(statearr_36733_36758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (5))){
var inst_36672 = (state_36719[(7)]);
var inst_36674 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36675 = (new cljs.core.PersistentArrayMap(null,2,inst_36674,null));
var inst_36676 = (new cljs.core.PersistentHashSet(null,inst_36675,null));
var inst_36677 = figwheel.client.focus_msgs.call(null,inst_36676,inst_36672);
var inst_36678 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36677);
var inst_36679 = cljs.core.first.call(null,inst_36677);
var inst_36680 = figwheel.client.autoload_QMARK_.call(null);
var state_36719__$1 = (function (){var statearr_36734 = state_36719;
(statearr_36734[(8)] = inst_36679);

(statearr_36734[(9)] = inst_36678);

return statearr_36734;
})();
if(cljs.core.truth_(inst_36680)){
var statearr_36735_36759 = state_36719__$1;
(statearr_36735_36759[(1)] = (8));

} else {
var statearr_36736_36760 = state_36719__$1;
(statearr_36736_36760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (14))){
var inst_36690 = (state_36719[(2)]);
var state_36719__$1 = state_36719;
var statearr_36737_36761 = state_36719__$1;
(statearr_36737_36761[(2)] = inst_36690);

(statearr_36737_36761[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (16))){
var state_36719__$1 = state_36719;
var statearr_36738_36762 = state_36719__$1;
(statearr_36738_36762[(2)] = null);

(statearr_36738_36762[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (10))){
var inst_36711 = (state_36719[(2)]);
var state_36719__$1 = (function (){var statearr_36739 = state_36719;
(statearr_36739[(11)] = inst_36711);

return statearr_36739;
})();
var statearr_36740_36763 = state_36719__$1;
(statearr_36740_36763[(2)] = null);

(statearr_36740_36763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36720 === (8))){
var inst_36678 = (state_36719[(9)]);
var inst_36682 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36678,opts);
var state_36719__$1 = state_36719;
if(cljs.core.truth_(inst_36682)){
var statearr_36741_36764 = state_36719__$1;
(statearr_36741_36764[(1)] = (11));

} else {
var statearr_36742_36765 = state_36719__$1;
(statearr_36742_36765[(1)] = (12));

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
});})(c__31367__auto___36747,ch))
;
return ((function (switch__31272__auto__,c__31367__auto___36747,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31273__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31273__auto____0 = (function (){
var statearr_36743 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36743[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31273__auto__);

(statearr_36743[(1)] = (1));

return statearr_36743;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31273__auto____1 = (function (state_36719){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_36719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e36744){if((e36744 instanceof Object)){
var ex__31276__auto__ = e36744;
var statearr_36745_36766 = state_36719;
(statearr_36745_36766[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36767 = state_36719;
state_36719 = G__36767;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31273__auto__ = function(state_36719){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31273__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31273__auto____1.call(this,state_36719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31273__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31273__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___36747,ch))
})();
var state__31369__auto__ = (function (){var statearr_36746 = f__31368__auto__.call(null);
(statearr_36746[(6)] = c__31367__auto___36747);

return statearr_36746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___36747,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36768_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36768_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36774 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36774){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36770 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36771 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36772 = true;
var _STAR_print_fn_STAR__temp_val__36773 = ((function (_STAR_print_newline_STAR__orig_val__36770,_STAR_print_fn_STAR__orig_val__36771,_STAR_print_newline_STAR__temp_val__36772,sb,base_path_36774){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__36770,_STAR_print_fn_STAR__orig_val__36771,_STAR_print_newline_STAR__temp_val__36772,sb,base_path_36774))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36772;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36773;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36771;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36770;
}}catch (e36769){if((e36769 instanceof Error)){
var e = e36769;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36774], null));
} else {
var e = e36769;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_36774))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36775){
var map__36776 = p__36775;
var map__36776__$1 = (((((!((map__36776 == null))))?(((((map__36776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36776):map__36776);
var opts = map__36776__$1;
var build_id = cljs.core.get.call(null,map__36776__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36776,map__36776__$1,opts,build_id){
return (function (p__36778){
var vec__36779 = p__36778;
var seq__36780 = cljs.core.seq.call(null,vec__36779);
var first__36781 = cljs.core.first.call(null,seq__36780);
var seq__36780__$1 = cljs.core.next.call(null,seq__36780);
var map__36782 = first__36781;
var map__36782__$1 = (((((!((map__36782 == null))))?(((((map__36782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36782):map__36782);
var msg = map__36782__$1;
var msg_name = cljs.core.get.call(null,map__36782__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36780__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36779,seq__36780,first__36781,seq__36780__$1,map__36782,map__36782__$1,msg,msg_name,_,map__36776,map__36776__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36779,seq__36780,first__36781,seq__36780__$1,map__36782,map__36782__$1,msg,msg_name,_,map__36776,map__36776__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36776,map__36776__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36784){
var vec__36785 = p__36784;
var seq__36786 = cljs.core.seq.call(null,vec__36785);
var first__36787 = cljs.core.first.call(null,seq__36786);
var seq__36786__$1 = cljs.core.next.call(null,seq__36786);
var map__36788 = first__36787;
var map__36788__$1 = (((((!((map__36788 == null))))?(((((map__36788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36788):map__36788);
var msg = map__36788__$1;
var msg_name = cljs.core.get.call(null,map__36788__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36786__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36790){
var map__36791 = p__36790;
var map__36791__$1 = (((((!((map__36791 == null))))?(((((map__36791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36791):map__36791);
var on_compile_warning = cljs.core.get.call(null,map__36791__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36791__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36791,map__36791__$1,on_compile_warning,on_compile_fail){
return (function (p__36793){
var vec__36794 = p__36793;
var seq__36795 = cljs.core.seq.call(null,vec__36794);
var first__36796 = cljs.core.first.call(null,seq__36795);
var seq__36795__$1 = cljs.core.next.call(null,seq__36795);
var map__36797 = first__36796;
var map__36797__$1 = (((((!((map__36797 == null))))?(((((map__36797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36797):map__36797);
var msg = map__36797__$1;
var msg_name = cljs.core.get.call(null,map__36797__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36795__$1;
var pred__36799 = cljs.core._EQ_;
var expr__36800 = msg_name;
if(cljs.core.truth_(pred__36799.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36800))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36799.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36800))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36791,map__36791__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto__,msg_hist,msg_names,msg){
return (function (state_36889){
var state_val_36890 = (state_36889[(1)]);
if((state_val_36890 === (7))){
var inst_36809 = (state_36889[(2)]);
var state_36889__$1 = state_36889;
if(cljs.core.truth_(inst_36809)){
var statearr_36891_36938 = state_36889__$1;
(statearr_36891_36938[(1)] = (8));

} else {
var statearr_36892_36939 = state_36889__$1;
(statearr_36892_36939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (20))){
var inst_36883 = (state_36889[(2)]);
var state_36889__$1 = state_36889;
var statearr_36893_36940 = state_36889__$1;
(statearr_36893_36940[(2)] = inst_36883);

(statearr_36893_36940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (27))){
var inst_36879 = (state_36889[(2)]);
var state_36889__$1 = state_36889;
var statearr_36894_36941 = state_36889__$1;
(statearr_36894_36941[(2)] = inst_36879);

(statearr_36894_36941[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (1))){
var inst_36802 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36889__$1 = state_36889;
if(cljs.core.truth_(inst_36802)){
var statearr_36895_36942 = state_36889__$1;
(statearr_36895_36942[(1)] = (2));

} else {
var statearr_36896_36943 = state_36889__$1;
(statearr_36896_36943[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (24))){
var inst_36881 = (state_36889[(2)]);
var state_36889__$1 = state_36889;
var statearr_36897_36944 = state_36889__$1;
(statearr_36897_36944[(2)] = inst_36881);

(statearr_36897_36944[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (4))){
var inst_36887 = (state_36889[(2)]);
var state_36889__$1 = state_36889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36889__$1,inst_36887);
} else {
if((state_val_36890 === (15))){
var inst_36885 = (state_36889[(2)]);
var state_36889__$1 = state_36889;
var statearr_36898_36945 = state_36889__$1;
(statearr_36898_36945[(2)] = inst_36885);

(statearr_36898_36945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (21))){
var inst_36838 = (state_36889[(2)]);
var inst_36839 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36840 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36839);
var state_36889__$1 = (function (){var statearr_36899 = state_36889;
(statearr_36899[(7)] = inst_36838);

return statearr_36899;
})();
var statearr_36900_36946 = state_36889__$1;
(statearr_36900_36946[(2)] = inst_36840);

(statearr_36900_36946[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (31))){
var inst_36868 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36889__$1 = state_36889;
if(inst_36868){
var statearr_36901_36947 = state_36889__$1;
(statearr_36901_36947[(1)] = (34));

} else {
var statearr_36902_36948 = state_36889__$1;
(statearr_36902_36948[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (32))){
var inst_36877 = (state_36889[(2)]);
var state_36889__$1 = state_36889;
var statearr_36903_36949 = state_36889__$1;
(statearr_36903_36949[(2)] = inst_36877);

(statearr_36903_36949[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (33))){
var inst_36864 = (state_36889[(2)]);
var inst_36865 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36866 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36865);
var state_36889__$1 = (function (){var statearr_36904 = state_36889;
(statearr_36904[(8)] = inst_36864);

return statearr_36904;
})();
var statearr_36905_36950 = state_36889__$1;
(statearr_36905_36950[(2)] = inst_36866);

(statearr_36905_36950[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (13))){
var inst_36823 = figwheel.client.heads_up.clear.call(null);
var state_36889__$1 = state_36889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36889__$1,(16),inst_36823);
} else {
if((state_val_36890 === (22))){
var inst_36844 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36845 = figwheel.client.heads_up.append_warning_message.call(null,inst_36844);
var state_36889__$1 = state_36889;
var statearr_36906_36951 = state_36889__$1;
(statearr_36906_36951[(2)] = inst_36845);

(statearr_36906_36951[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (36))){
var inst_36875 = (state_36889[(2)]);
var state_36889__$1 = state_36889;
var statearr_36907_36952 = state_36889__$1;
(statearr_36907_36952[(2)] = inst_36875);

(statearr_36907_36952[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (29))){
var inst_36855 = (state_36889[(2)]);
var inst_36856 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36857 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36856);
var state_36889__$1 = (function (){var statearr_36908 = state_36889;
(statearr_36908[(9)] = inst_36855);

return statearr_36908;
})();
var statearr_36909_36953 = state_36889__$1;
(statearr_36909_36953[(2)] = inst_36857);

(statearr_36909_36953[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (6))){
var inst_36804 = (state_36889[(10)]);
var state_36889__$1 = state_36889;
var statearr_36910_36954 = state_36889__$1;
(statearr_36910_36954[(2)] = inst_36804);

(statearr_36910_36954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (28))){
var inst_36851 = (state_36889[(2)]);
var inst_36852 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36853 = figwheel.client.heads_up.display_warning.call(null,inst_36852);
var state_36889__$1 = (function (){var statearr_36911 = state_36889;
(statearr_36911[(11)] = inst_36851);

return statearr_36911;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36889__$1,(29),inst_36853);
} else {
if((state_val_36890 === (25))){
var inst_36849 = figwheel.client.heads_up.clear.call(null);
var state_36889__$1 = state_36889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36889__$1,(28),inst_36849);
} else {
if((state_val_36890 === (34))){
var inst_36870 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36889__$1 = state_36889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36889__$1,(37),inst_36870);
} else {
if((state_val_36890 === (17))){
var inst_36829 = (state_36889[(2)]);
var inst_36830 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36831 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36830);
var state_36889__$1 = (function (){var statearr_36912 = state_36889;
(statearr_36912[(12)] = inst_36829);

return statearr_36912;
})();
var statearr_36913_36955 = state_36889__$1;
(statearr_36913_36955[(2)] = inst_36831);

(statearr_36913_36955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (3))){
var inst_36821 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36889__$1 = state_36889;
if(inst_36821){
var statearr_36914_36956 = state_36889__$1;
(statearr_36914_36956[(1)] = (13));

} else {
var statearr_36915_36957 = state_36889__$1;
(statearr_36915_36957[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (12))){
var inst_36817 = (state_36889[(2)]);
var state_36889__$1 = state_36889;
var statearr_36916_36958 = state_36889__$1;
(statearr_36916_36958[(2)] = inst_36817);

(statearr_36916_36958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (2))){
var inst_36804 = (state_36889[(10)]);
var inst_36804__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36889__$1 = (function (){var statearr_36917 = state_36889;
(statearr_36917[(10)] = inst_36804__$1);

return statearr_36917;
})();
if(cljs.core.truth_(inst_36804__$1)){
var statearr_36918_36959 = state_36889__$1;
(statearr_36918_36959[(1)] = (5));

} else {
var statearr_36919_36960 = state_36889__$1;
(statearr_36919_36960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (23))){
var inst_36847 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36889__$1 = state_36889;
if(inst_36847){
var statearr_36920_36961 = state_36889__$1;
(statearr_36920_36961[(1)] = (25));

} else {
var statearr_36921_36962 = state_36889__$1;
(statearr_36921_36962[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (35))){
var state_36889__$1 = state_36889;
var statearr_36922_36963 = state_36889__$1;
(statearr_36922_36963[(2)] = null);

(statearr_36922_36963[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (19))){
var inst_36842 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36889__$1 = state_36889;
if(inst_36842){
var statearr_36923_36964 = state_36889__$1;
(statearr_36923_36964[(1)] = (22));

} else {
var statearr_36924_36965 = state_36889__$1;
(statearr_36924_36965[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (11))){
var inst_36813 = (state_36889[(2)]);
var state_36889__$1 = state_36889;
var statearr_36925_36966 = state_36889__$1;
(statearr_36925_36966[(2)] = inst_36813);

(statearr_36925_36966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (9))){
var inst_36815 = figwheel.client.heads_up.clear.call(null);
var state_36889__$1 = state_36889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36889__$1,(12),inst_36815);
} else {
if((state_val_36890 === (5))){
var inst_36806 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36889__$1 = state_36889;
var statearr_36926_36967 = state_36889__$1;
(statearr_36926_36967[(2)] = inst_36806);

(statearr_36926_36967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (14))){
var inst_36833 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36889__$1 = state_36889;
if(inst_36833){
var statearr_36927_36968 = state_36889__$1;
(statearr_36927_36968[(1)] = (18));

} else {
var statearr_36928_36969 = state_36889__$1;
(statearr_36928_36969[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (26))){
var inst_36859 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36889__$1 = state_36889;
if(inst_36859){
var statearr_36929_36970 = state_36889__$1;
(statearr_36929_36970[(1)] = (30));

} else {
var statearr_36930_36971 = state_36889__$1;
(statearr_36930_36971[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (16))){
var inst_36825 = (state_36889[(2)]);
var inst_36826 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36827 = figwheel.client.heads_up.display_exception.call(null,inst_36826);
var state_36889__$1 = (function (){var statearr_36931 = state_36889;
(statearr_36931[(13)] = inst_36825);

return statearr_36931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36889__$1,(17),inst_36827);
} else {
if((state_val_36890 === (30))){
var inst_36861 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36862 = figwheel.client.heads_up.display_warning.call(null,inst_36861);
var state_36889__$1 = state_36889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36889__$1,(33),inst_36862);
} else {
if((state_val_36890 === (10))){
var inst_36819 = (state_36889[(2)]);
var state_36889__$1 = state_36889;
var statearr_36932_36972 = state_36889__$1;
(statearr_36932_36972[(2)] = inst_36819);

(statearr_36932_36972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (18))){
var inst_36835 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36836 = figwheel.client.heads_up.display_exception.call(null,inst_36835);
var state_36889__$1 = state_36889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36889__$1,(21),inst_36836);
} else {
if((state_val_36890 === (37))){
var inst_36872 = (state_36889[(2)]);
var state_36889__$1 = state_36889;
var statearr_36933_36973 = state_36889__$1;
(statearr_36933_36973[(2)] = inst_36872);

(statearr_36933_36973[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36890 === (8))){
var inst_36811 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36889__$1 = state_36889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36889__$1,(11),inst_36811);
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
});})(c__31367__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31272__auto__,c__31367__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31273__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31273__auto____0 = (function (){
var statearr_36934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36934[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31273__auto__);

(statearr_36934[(1)] = (1));

return statearr_36934;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31273__auto____1 = (function (state_36889){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_36889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e36935){if((e36935 instanceof Object)){
var ex__31276__auto__ = e36935;
var statearr_36936_36974 = state_36889;
(statearr_36936_36974[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36975 = state_36889;
state_36889 = G__36975;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31273__auto__ = function(state_36889){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31273__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31273__auto____1.call(this,state_36889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31273__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31273__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto__,msg_hist,msg_names,msg))
})();
var state__31369__auto__ = (function (){var statearr_36937 = f__31368__auto__.call(null);
(statearr_36937[(6)] = c__31367__auto__);

return statearr_36937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto__,msg_hist,msg_names,msg))
);

return c__31367__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31367__auto___37004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___37004,ch){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___37004,ch){
return (function (state_36990){
var state_val_36991 = (state_36990[(1)]);
if((state_val_36991 === (1))){
var state_36990__$1 = state_36990;
var statearr_36992_37005 = state_36990__$1;
(statearr_36992_37005[(2)] = null);

(statearr_36992_37005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (2))){
var state_36990__$1 = state_36990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36990__$1,(4),ch);
} else {
if((state_val_36991 === (3))){
var inst_36988 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36990__$1,inst_36988);
} else {
if((state_val_36991 === (4))){
var inst_36978 = (state_36990[(7)]);
var inst_36978__$1 = (state_36990[(2)]);
var state_36990__$1 = (function (){var statearr_36993 = state_36990;
(statearr_36993[(7)] = inst_36978__$1);

return statearr_36993;
})();
if(cljs.core.truth_(inst_36978__$1)){
var statearr_36994_37006 = state_36990__$1;
(statearr_36994_37006[(1)] = (5));

} else {
var statearr_36995_37007 = state_36990__$1;
(statearr_36995_37007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (5))){
var inst_36978 = (state_36990[(7)]);
var inst_36980 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36978);
var state_36990__$1 = state_36990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36990__$1,(8),inst_36980);
} else {
if((state_val_36991 === (6))){
var state_36990__$1 = state_36990;
var statearr_36996_37008 = state_36990__$1;
(statearr_36996_37008[(2)] = null);

(statearr_36996_37008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (7))){
var inst_36986 = (state_36990[(2)]);
var state_36990__$1 = state_36990;
var statearr_36997_37009 = state_36990__$1;
(statearr_36997_37009[(2)] = inst_36986);

(statearr_36997_37009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36991 === (8))){
var inst_36982 = (state_36990[(2)]);
var state_36990__$1 = (function (){var statearr_36998 = state_36990;
(statearr_36998[(8)] = inst_36982);

return statearr_36998;
})();
var statearr_36999_37010 = state_36990__$1;
(statearr_36999_37010[(2)] = null);

(statearr_36999_37010[(1)] = (2));


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
});})(c__31367__auto___37004,ch))
;
return ((function (switch__31272__auto__,c__31367__auto___37004,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31273__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31273__auto____0 = (function (){
var statearr_37000 = [null,null,null,null,null,null,null,null,null];
(statearr_37000[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31273__auto__);

(statearr_37000[(1)] = (1));

return statearr_37000;
});
var figwheel$client$heads_up_plugin_$_state_machine__31273__auto____1 = (function (state_36990){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_36990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e37001){if((e37001 instanceof Object)){
var ex__31276__auto__ = e37001;
var statearr_37002_37011 = state_36990;
(statearr_37002_37011[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37012 = state_36990;
state_36990 = G__37012;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31273__auto__ = function(state_36990){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31273__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31273__auto____1.call(this,state_36990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31273__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31273__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___37004,ch))
})();
var state__31369__auto__ = (function (){var statearr_37003 = f__31368__auto__.call(null);
(statearr_37003[(6)] = c__31367__auto___37004);

return statearr_37003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___37004,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto__){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto__){
return (function (state_37018){
var state_val_37019 = (state_37018[(1)]);
if((state_val_37019 === (1))){
var inst_37013 = cljs.core.async.timeout.call(null,(3000));
var state_37018__$1 = state_37018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37018__$1,(2),inst_37013);
} else {
if((state_val_37019 === (2))){
var inst_37015 = (state_37018[(2)]);
var inst_37016 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37018__$1 = (function (){var statearr_37020 = state_37018;
(statearr_37020[(7)] = inst_37015);

return statearr_37020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37018__$1,inst_37016);
} else {
return null;
}
}
});})(c__31367__auto__))
;
return ((function (switch__31272__auto__,c__31367__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31273__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31273__auto____0 = (function (){
var statearr_37021 = [null,null,null,null,null,null,null,null];
(statearr_37021[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31273__auto__);

(statearr_37021[(1)] = (1));

return statearr_37021;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31273__auto____1 = (function (state_37018){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_37018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e37022){if((e37022 instanceof Object)){
var ex__31276__auto__ = e37022;
var statearr_37023_37025 = state_37018;
(statearr_37023_37025[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37026 = state_37018;
state_37018 = G__37026;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31273__auto__ = function(state_37018){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31273__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31273__auto____1.call(this,state_37018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31273__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31273__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto__))
})();
var state__31369__auto__ = (function (){var statearr_37024 = f__31368__auto__.call(null);
(statearr_37024[(6)] = c__31367__auto__);

return statearr_37024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto__))
);

return c__31367__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto__,figwheel_version,temp__5720__auto__){
return (function (state_37033){
var state_val_37034 = (state_37033[(1)]);
if((state_val_37034 === (1))){
var inst_37027 = cljs.core.async.timeout.call(null,(2000));
var state_37033__$1 = state_37033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37033__$1,(2),inst_37027);
} else {
if((state_val_37034 === (2))){
var inst_37029 = (state_37033[(2)]);
var inst_37030 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37031 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37030);
var state_37033__$1 = (function (){var statearr_37035 = state_37033;
(statearr_37035[(7)] = inst_37029);

return statearr_37035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37033__$1,inst_37031);
} else {
return null;
}
}
});})(c__31367__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__31272__auto__,c__31367__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31273__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31273__auto____0 = (function (){
var statearr_37036 = [null,null,null,null,null,null,null,null];
(statearr_37036[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31273__auto__);

(statearr_37036[(1)] = (1));

return statearr_37036;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31273__auto____1 = (function (state_37033){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_37033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e37037){if((e37037 instanceof Object)){
var ex__31276__auto__ = e37037;
var statearr_37038_37040 = state_37033;
(statearr_37038_37040[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37041 = state_37033;
state_37033 = G__37041;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31273__auto__ = function(state_37033){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31273__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31273__auto____1.call(this,state_37033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31273__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31273__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto__,figwheel_version,temp__5720__auto__))
})();
var state__31369__auto__ = (function (){var statearr_37039 = f__31368__auto__.call(null);
(statearr_37039[(6)] = c__31367__auto__);

return statearr_37039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto__,figwheel_version,temp__5720__auto__))
);

return c__31367__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37042){
var map__37043 = p__37042;
var map__37043__$1 = (((((!((map__37043 == null))))?(((((map__37043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37043):map__37043);
var file = cljs.core.get.call(null,map__37043__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37043__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37043__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37045 = "";
var G__37045__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37045),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37045);
var G__37045__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37045__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37045__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37045__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37045__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37046){
var map__37047 = p__37046;
var map__37047__$1 = (((((!((map__37047 == null))))?(((((map__37047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37047):map__37047);
var ed = map__37047__$1;
var exception_data = cljs.core.get.call(null,map__37047__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37047__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_37050 = (function (){var G__37049 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37049)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__37049;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_37050);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37051){
var map__37052 = p__37051;
var map__37052__$1 = (((((!((map__37052 == null))))?(((((map__37052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37052):map__37052);
var w = map__37052__$1;
var message = cljs.core.get.call(null,map__37052__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37054 = cljs.core.seq.call(null,plugins);
var chunk__37055 = null;
var count__37056 = (0);
var i__37057 = (0);
while(true){
if((i__37057 < count__37056)){
var vec__37058 = cljs.core._nth.call(null,chunk__37055,i__37057);
var k = cljs.core.nth.call(null,vec__37058,(0),null);
var plugin = cljs.core.nth.call(null,vec__37058,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37064 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37054,chunk__37055,count__37056,i__37057,pl_37064,vec__37058,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37064.call(null,msg_hist);
});})(seq__37054,chunk__37055,count__37056,i__37057,pl_37064,vec__37058,k,plugin))
);
} else {
}


var G__37065 = seq__37054;
var G__37066 = chunk__37055;
var G__37067 = count__37056;
var G__37068 = (i__37057 + (1));
seq__37054 = G__37065;
chunk__37055 = G__37066;
count__37056 = G__37067;
i__37057 = G__37068;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37054);
if(temp__5720__auto__){
var seq__37054__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37054__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__37054__$1);
var G__37069 = cljs.core.chunk_rest.call(null,seq__37054__$1);
var G__37070 = c__4461__auto__;
var G__37071 = cljs.core.count.call(null,c__4461__auto__);
var G__37072 = (0);
seq__37054 = G__37069;
chunk__37055 = G__37070;
count__37056 = G__37071;
i__37057 = G__37072;
continue;
} else {
var vec__37061 = cljs.core.first.call(null,seq__37054__$1);
var k = cljs.core.nth.call(null,vec__37061,(0),null);
var plugin = cljs.core.nth.call(null,vec__37061,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37073 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37054,chunk__37055,count__37056,i__37057,pl_37073,vec__37061,k,plugin,seq__37054__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37073.call(null,msg_hist);
});})(seq__37054,chunk__37055,count__37056,i__37057,pl_37073,vec__37061,k,plugin,seq__37054__$1,temp__5720__auto__))
);
} else {
}


var G__37074 = cljs.core.next.call(null,seq__37054__$1);
var G__37075 = null;
var G__37076 = (0);
var G__37077 = (0);
seq__37054 = G__37074;
chunk__37055 = G__37075;
count__37056 = G__37076;
i__37057 = G__37077;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37079 = arguments.length;
switch (G__37079) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37080_37085 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37081_37086 = null;
var count__37082_37087 = (0);
var i__37083_37088 = (0);
while(true){
if((i__37083_37088 < count__37082_37087)){
var msg_37089 = cljs.core._nth.call(null,chunk__37081_37086,i__37083_37088);
figwheel.client.socket.handle_incoming_message.call(null,msg_37089);


var G__37090 = seq__37080_37085;
var G__37091 = chunk__37081_37086;
var G__37092 = count__37082_37087;
var G__37093 = (i__37083_37088 + (1));
seq__37080_37085 = G__37090;
chunk__37081_37086 = G__37091;
count__37082_37087 = G__37092;
i__37083_37088 = G__37093;
continue;
} else {
var temp__5720__auto___37094 = cljs.core.seq.call(null,seq__37080_37085);
if(temp__5720__auto___37094){
var seq__37080_37095__$1 = temp__5720__auto___37094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37080_37095__$1)){
var c__4461__auto___37096 = cljs.core.chunk_first.call(null,seq__37080_37095__$1);
var G__37097 = cljs.core.chunk_rest.call(null,seq__37080_37095__$1);
var G__37098 = c__4461__auto___37096;
var G__37099 = cljs.core.count.call(null,c__4461__auto___37096);
var G__37100 = (0);
seq__37080_37085 = G__37097;
chunk__37081_37086 = G__37098;
count__37082_37087 = G__37099;
i__37083_37088 = G__37100;
continue;
} else {
var msg_37101 = cljs.core.first.call(null,seq__37080_37095__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37101);


var G__37102 = cljs.core.next.call(null,seq__37080_37095__$1);
var G__37103 = null;
var G__37104 = (0);
var G__37105 = (0);
seq__37080_37085 = G__37102;
chunk__37081_37086 = G__37103;
count__37082_37087 = G__37104;
i__37083_37088 = G__37105;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
var len__4641__auto___37110 = arguments.length;
var i__4642__auto___37111 = (0);
while(true){
if((i__4642__auto___37111 < len__4641__auto___37110)){
args__4647__auto__.push((arguments[i__4642__auto___37111]));

var G__37112 = (i__4642__auto___37111 + (1));
i__4642__auto___37111 = G__37112;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37107){
var map__37108 = p__37107;
var map__37108__$1 = (((((!((map__37108 == null))))?(((((map__37108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37108):map__37108);
var opts = map__37108__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37106){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37106));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37113){if((e37113 instanceof Error)){
var e = e37113;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37113;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37114){
var map__37115 = p__37114;
var map__37115__$1 = (((((!((map__37115 == null))))?(((((map__37115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37115):map__37115);
var msg_name = cljs.core.get.call(null,map__37115__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1548047571835
