// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31427 = arguments.length;
switch (G__31427) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31428 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31428 = (function (f,blockable,meta31429){
this.f = f;
this.blockable = blockable;
this.meta31429 = meta31429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31430,meta31429__$1){
var self__ = this;
var _31430__$1 = this;
return (new cljs.core.async.t_cljs$core$async31428(self__.f,self__.blockable,meta31429__$1));
});

cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31430){
var self__ = this;
var _31430__$1 = this;
return self__.meta31429;
});

cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31428.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31429","meta31429",-1697874909,null)], null);
});

cljs.core.async.t_cljs$core$async31428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31428";

cljs.core.async.t_cljs$core$async31428.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31428");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31428.
 */
cljs.core.async.__GT_t_cljs$core$async31428 = (function cljs$core$async$__GT_t_cljs$core$async31428(f__$1,blockable__$1,meta31429){
return (new cljs.core.async.t_cljs$core$async31428(f__$1,blockable__$1,meta31429));
});

}

return (new cljs.core.async.t_cljs$core$async31428(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31434 = arguments.length;
switch (G__31434) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31437 = arguments.length;
switch (G__31437) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31440 = arguments.length;
switch (G__31440) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31442 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31442);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31442,ret){
return (function (){
return fn1.call(null,val_31442);
});})(val_31442,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31444 = arguments.length;
switch (G__31444) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___31446 = n;
var x_31447 = (0);
while(true){
if((x_31447 < n__4518__auto___31446)){
(a[x_31447] = (0));

var G__31448 = (x_31447 + (1));
x_31447 = G__31448;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31449 = (i + (1));
i = G__31449;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31450 = (function (flag,meta31451){
this.flag = flag;
this.meta31451 = meta31451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31452,meta31451__$1){
var self__ = this;
var _31452__$1 = this;
return (new cljs.core.async.t_cljs$core$async31450(self__.flag,meta31451__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31452){
var self__ = this;
var _31452__$1 = this;
return self__.meta31451;
});})(flag))
;

cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31450.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31451","meta31451",73060290,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31450";

cljs.core.async.t_cljs$core$async31450.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31450");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31450.
 */
cljs.core.async.__GT_t_cljs$core$async31450 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31450(flag__$1,meta31451){
return (new cljs.core.async.t_cljs$core$async31450(flag__$1,meta31451));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31450(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31453 = (function (flag,cb,meta31454){
this.flag = flag;
this.cb = cb;
this.meta31454 = meta31454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31455,meta31454__$1){
var self__ = this;
var _31455__$1 = this;
return (new cljs.core.async.t_cljs$core$async31453(self__.flag,self__.cb,meta31454__$1));
});

cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31455){
var self__ = this;
var _31455__$1 = this;
return self__.meta31454;
});

cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31453.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31454","meta31454",1937104211,null)], null);
});

cljs.core.async.t_cljs$core$async31453.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31453";

cljs.core.async.t_cljs$core$async31453.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31453");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31453.
 */
cljs.core.async.__GT_t_cljs$core$async31453 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31453(flag__$1,cb__$1,meta31454){
return (new cljs.core.async.t_cljs$core$async31453(flag__$1,cb__$1,meta31454));
});

}

return (new cljs.core.async.t_cljs$core$async31453(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31456_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31456_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31457_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31457_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31458 = (i + (1));
i = G__31458;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___31464 = arguments.length;
var i__4642__auto___31465 = (0);
while(true){
if((i__4642__auto___31465 < len__4641__auto___31464)){
args__4647__auto__.push((arguments[i__4642__auto___31465]));

var G__31466 = (i__4642__auto___31465 + (1));
i__4642__auto___31465 = G__31466;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31461){
var map__31462 = p__31461;
var map__31462__$1 = (((((!((map__31462 == null))))?(((((map__31462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31462):map__31462);
var opts = map__31462__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31459){
var G__31460 = cljs.core.first.call(null,seq31459);
var seq31459__$1 = cljs.core.next.call(null,seq31459);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31460,seq31459__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31468 = arguments.length;
switch (G__31468) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31367__auto___31514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___31514){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___31514){
return (function (state_31492){
var state_val_31493 = (state_31492[(1)]);
if((state_val_31493 === (7))){
var inst_31488 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31494_31515 = state_31492__$1;
(statearr_31494_31515[(2)] = inst_31488);

(statearr_31494_31515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (1))){
var state_31492__$1 = state_31492;
var statearr_31495_31516 = state_31492__$1;
(statearr_31495_31516[(2)] = null);

(statearr_31495_31516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (4))){
var inst_31471 = (state_31492[(7)]);
var inst_31471__$1 = (state_31492[(2)]);
var inst_31472 = (inst_31471__$1 == null);
var state_31492__$1 = (function (){var statearr_31496 = state_31492;
(statearr_31496[(7)] = inst_31471__$1);

return statearr_31496;
})();
if(cljs.core.truth_(inst_31472)){
var statearr_31497_31517 = state_31492__$1;
(statearr_31497_31517[(1)] = (5));

} else {
var statearr_31498_31518 = state_31492__$1;
(statearr_31498_31518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (13))){
var state_31492__$1 = state_31492;
var statearr_31499_31519 = state_31492__$1;
(statearr_31499_31519[(2)] = null);

(statearr_31499_31519[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (6))){
var inst_31471 = (state_31492[(7)]);
var state_31492__$1 = state_31492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31492__$1,(11),to,inst_31471);
} else {
if((state_val_31493 === (3))){
var inst_31490 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31492__$1,inst_31490);
} else {
if((state_val_31493 === (12))){
var state_31492__$1 = state_31492;
var statearr_31500_31520 = state_31492__$1;
(statearr_31500_31520[(2)] = null);

(statearr_31500_31520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (2))){
var state_31492__$1 = state_31492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31492__$1,(4),from);
} else {
if((state_val_31493 === (11))){
var inst_31481 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
if(cljs.core.truth_(inst_31481)){
var statearr_31501_31521 = state_31492__$1;
(statearr_31501_31521[(1)] = (12));

} else {
var statearr_31502_31522 = state_31492__$1;
(statearr_31502_31522[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (9))){
var state_31492__$1 = state_31492;
var statearr_31503_31523 = state_31492__$1;
(statearr_31503_31523[(2)] = null);

(statearr_31503_31523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (5))){
var state_31492__$1 = state_31492;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31504_31524 = state_31492__$1;
(statearr_31504_31524[(1)] = (8));

} else {
var statearr_31505_31525 = state_31492__$1;
(statearr_31505_31525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (14))){
var inst_31486 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31506_31526 = state_31492__$1;
(statearr_31506_31526[(2)] = inst_31486);

(statearr_31506_31526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (10))){
var inst_31478 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31507_31527 = state_31492__$1;
(statearr_31507_31527[(2)] = inst_31478);

(statearr_31507_31527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (8))){
var inst_31475 = cljs.core.async.close_BANG_.call(null,to);
var state_31492__$1 = state_31492;
var statearr_31508_31528 = state_31492__$1;
(statearr_31508_31528[(2)] = inst_31475);

(statearr_31508_31528[(1)] = (10));


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
});})(c__31367__auto___31514))
;
return ((function (switch__31272__auto__,c__31367__auto___31514){
return (function() {
var cljs$core$async$state_machine__31273__auto__ = null;
var cljs$core$async$state_machine__31273__auto____0 = (function (){
var statearr_31509 = [null,null,null,null,null,null,null,null];
(statearr_31509[(0)] = cljs$core$async$state_machine__31273__auto__);

(statearr_31509[(1)] = (1));

return statearr_31509;
});
var cljs$core$async$state_machine__31273__auto____1 = (function (state_31492){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_31492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e31510){if((e31510 instanceof Object)){
var ex__31276__auto__ = e31510;
var statearr_31511_31529 = state_31492;
(statearr_31511_31529[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31530 = state_31492;
state_31492 = G__31530;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$state_machine__31273__auto__ = function(state_31492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31273__auto____1.call(this,state_31492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31273__auto____0;
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31273__auto____1;
return cljs$core$async$state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___31514))
})();
var state__31369__auto__ = (function (){var statearr_31512 = f__31368__auto__.call(null);
(statearr_31512[(6)] = c__31367__auto___31514);

return statearr_31512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___31514))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31531){
var vec__31532 = p__31531;
var v = cljs.core.nth.call(null,vec__31532,(0),null);
var p = cljs.core.nth.call(null,vec__31532,(1),null);
var job = vec__31532;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31367__auto___31703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___31703,res,vec__31532,v,p,job,jobs,results){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___31703,res,vec__31532,v,p,job,jobs,results){
return (function (state_31539){
var state_val_31540 = (state_31539[(1)]);
if((state_val_31540 === (1))){
var state_31539__$1 = state_31539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31539__$1,(2),res,v);
} else {
if((state_val_31540 === (2))){
var inst_31536 = (state_31539[(2)]);
var inst_31537 = cljs.core.async.close_BANG_.call(null,res);
var state_31539__$1 = (function (){var statearr_31541 = state_31539;
(statearr_31541[(7)] = inst_31536);

return statearr_31541;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31539__$1,inst_31537);
} else {
return null;
}
}
});})(c__31367__auto___31703,res,vec__31532,v,p,job,jobs,results))
;
return ((function (switch__31272__auto__,c__31367__auto___31703,res,vec__31532,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____0 = (function (){
var statearr_31542 = [null,null,null,null,null,null,null,null];
(statearr_31542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__);

(statearr_31542[(1)] = (1));

return statearr_31542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____1 = (function (state_31539){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_31539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e31543){if((e31543 instanceof Object)){
var ex__31276__auto__ = e31543;
var statearr_31544_31704 = state_31539;
(statearr_31544_31704[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31705 = state_31539;
state_31539 = G__31705;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__ = function(state_31539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____1.call(this,state_31539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___31703,res,vec__31532,v,p,job,jobs,results))
})();
var state__31369__auto__ = (function (){var statearr_31545 = f__31368__auto__.call(null);
(statearr_31545[(6)] = c__31367__auto___31703);

return statearr_31545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___31703,res,vec__31532,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31546){
var vec__31547 = p__31546;
var v = cljs.core.nth.call(null,vec__31547,(0),null);
var p = cljs.core.nth.call(null,vec__31547,(1),null);
var job = vec__31547;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___31706 = n;
var __31707 = (0);
while(true){
if((__31707 < n__4518__auto___31706)){
var G__31550_31708 = type;
var G__31550_31709__$1 = (((G__31550_31708 instanceof cljs.core.Keyword))?G__31550_31708.fqn:null);
switch (G__31550_31709__$1) {
case "compute":
var c__31367__auto___31711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31707,c__31367__auto___31711,G__31550_31708,G__31550_31709__$1,n__4518__auto___31706,jobs,results,process,async){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (__31707,c__31367__auto___31711,G__31550_31708,G__31550_31709__$1,n__4518__auto___31706,jobs,results,process,async){
return (function (state_31563){
var state_val_31564 = (state_31563[(1)]);
if((state_val_31564 === (1))){
var state_31563__$1 = state_31563;
var statearr_31565_31712 = state_31563__$1;
(statearr_31565_31712[(2)] = null);

(statearr_31565_31712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (2))){
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31563__$1,(4),jobs);
} else {
if((state_val_31564 === (3))){
var inst_31561 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31563__$1,inst_31561);
} else {
if((state_val_31564 === (4))){
var inst_31553 = (state_31563[(2)]);
var inst_31554 = process.call(null,inst_31553);
var state_31563__$1 = state_31563;
if(cljs.core.truth_(inst_31554)){
var statearr_31566_31713 = state_31563__$1;
(statearr_31566_31713[(1)] = (5));

} else {
var statearr_31567_31714 = state_31563__$1;
(statearr_31567_31714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (5))){
var state_31563__$1 = state_31563;
var statearr_31568_31715 = state_31563__$1;
(statearr_31568_31715[(2)] = null);

(statearr_31568_31715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (6))){
var state_31563__$1 = state_31563;
var statearr_31569_31716 = state_31563__$1;
(statearr_31569_31716[(2)] = null);

(statearr_31569_31716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (7))){
var inst_31559 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31570_31717 = state_31563__$1;
(statearr_31570_31717[(2)] = inst_31559);

(statearr_31570_31717[(1)] = (3));


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
});})(__31707,c__31367__auto___31711,G__31550_31708,G__31550_31709__$1,n__4518__auto___31706,jobs,results,process,async))
;
return ((function (__31707,switch__31272__auto__,c__31367__auto___31711,G__31550_31708,G__31550_31709__$1,n__4518__auto___31706,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____0 = (function (){
var statearr_31571 = [null,null,null,null,null,null,null];
(statearr_31571[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__);

(statearr_31571[(1)] = (1));

return statearr_31571;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____1 = (function (state_31563){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_31563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e31572){if((e31572 instanceof Object)){
var ex__31276__auto__ = e31572;
var statearr_31573_31718 = state_31563;
(statearr_31573_31718[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31719 = state_31563;
state_31563 = G__31719;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__ = function(state_31563){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____1.call(this,state_31563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__;
})()
;})(__31707,switch__31272__auto__,c__31367__auto___31711,G__31550_31708,G__31550_31709__$1,n__4518__auto___31706,jobs,results,process,async))
})();
var state__31369__auto__ = (function (){var statearr_31574 = f__31368__auto__.call(null);
(statearr_31574[(6)] = c__31367__auto___31711);

return statearr_31574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(__31707,c__31367__auto___31711,G__31550_31708,G__31550_31709__$1,n__4518__auto___31706,jobs,results,process,async))
);


break;
case "async":
var c__31367__auto___31720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31707,c__31367__auto___31720,G__31550_31708,G__31550_31709__$1,n__4518__auto___31706,jobs,results,process,async){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (__31707,c__31367__auto___31720,G__31550_31708,G__31550_31709__$1,n__4518__auto___31706,jobs,results,process,async){
return (function (state_31587){
var state_val_31588 = (state_31587[(1)]);
if((state_val_31588 === (1))){
var state_31587__$1 = state_31587;
var statearr_31589_31721 = state_31587__$1;
(statearr_31589_31721[(2)] = null);

(statearr_31589_31721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (2))){
var state_31587__$1 = state_31587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31587__$1,(4),jobs);
} else {
if((state_val_31588 === (3))){
var inst_31585 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31587__$1,inst_31585);
} else {
if((state_val_31588 === (4))){
var inst_31577 = (state_31587[(2)]);
var inst_31578 = async.call(null,inst_31577);
var state_31587__$1 = state_31587;
if(cljs.core.truth_(inst_31578)){
var statearr_31590_31722 = state_31587__$1;
(statearr_31590_31722[(1)] = (5));

} else {
var statearr_31591_31723 = state_31587__$1;
(statearr_31591_31723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (5))){
var state_31587__$1 = state_31587;
var statearr_31592_31724 = state_31587__$1;
(statearr_31592_31724[(2)] = null);

(statearr_31592_31724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (6))){
var state_31587__$1 = state_31587;
var statearr_31593_31725 = state_31587__$1;
(statearr_31593_31725[(2)] = null);

(statearr_31593_31725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (7))){
var inst_31583 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
var statearr_31594_31726 = state_31587__$1;
(statearr_31594_31726[(2)] = inst_31583);

(statearr_31594_31726[(1)] = (3));


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
});})(__31707,c__31367__auto___31720,G__31550_31708,G__31550_31709__$1,n__4518__auto___31706,jobs,results,process,async))
;
return ((function (__31707,switch__31272__auto__,c__31367__auto___31720,G__31550_31708,G__31550_31709__$1,n__4518__auto___31706,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____0 = (function (){
var statearr_31595 = [null,null,null,null,null,null,null];
(statearr_31595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__);

(statearr_31595[(1)] = (1));

return statearr_31595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____1 = (function (state_31587){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_31587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e31596){if((e31596 instanceof Object)){
var ex__31276__auto__ = e31596;
var statearr_31597_31727 = state_31587;
(statearr_31597_31727[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31728 = state_31587;
state_31587 = G__31728;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__ = function(state_31587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____1.call(this,state_31587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__;
})()
;})(__31707,switch__31272__auto__,c__31367__auto___31720,G__31550_31708,G__31550_31709__$1,n__4518__auto___31706,jobs,results,process,async))
})();
var state__31369__auto__ = (function (){var statearr_31598 = f__31368__auto__.call(null);
(statearr_31598[(6)] = c__31367__auto___31720);

return statearr_31598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(__31707,c__31367__auto___31720,G__31550_31708,G__31550_31709__$1,n__4518__auto___31706,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31550_31709__$1)].join('')));

}

var G__31729 = (__31707 + (1));
__31707 = G__31729;
continue;
} else {
}
break;
}

var c__31367__auto___31730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___31730,jobs,results,process,async){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___31730,jobs,results,process,async){
return (function (state_31620){
var state_val_31621 = (state_31620[(1)]);
if((state_val_31621 === (7))){
var inst_31616 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31622_31731 = state_31620__$1;
(statearr_31622_31731[(2)] = inst_31616);

(statearr_31622_31731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (1))){
var state_31620__$1 = state_31620;
var statearr_31623_31732 = state_31620__$1;
(statearr_31623_31732[(2)] = null);

(statearr_31623_31732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (4))){
var inst_31601 = (state_31620[(7)]);
var inst_31601__$1 = (state_31620[(2)]);
var inst_31602 = (inst_31601__$1 == null);
var state_31620__$1 = (function (){var statearr_31624 = state_31620;
(statearr_31624[(7)] = inst_31601__$1);

return statearr_31624;
})();
if(cljs.core.truth_(inst_31602)){
var statearr_31625_31733 = state_31620__$1;
(statearr_31625_31733[(1)] = (5));

} else {
var statearr_31626_31734 = state_31620__$1;
(statearr_31626_31734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (6))){
var inst_31606 = (state_31620[(8)]);
var inst_31601 = (state_31620[(7)]);
var inst_31606__$1 = cljs.core.async.chan.call(null,(1));
var inst_31607 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31608 = [inst_31601,inst_31606__$1];
var inst_31609 = (new cljs.core.PersistentVector(null,2,(5),inst_31607,inst_31608,null));
var state_31620__$1 = (function (){var statearr_31627 = state_31620;
(statearr_31627[(8)] = inst_31606__$1);

return statearr_31627;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31620__$1,(8),jobs,inst_31609);
} else {
if((state_val_31621 === (3))){
var inst_31618 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31620__$1,inst_31618);
} else {
if((state_val_31621 === (2))){
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31620__$1,(4),from);
} else {
if((state_val_31621 === (9))){
var inst_31613 = (state_31620[(2)]);
var state_31620__$1 = (function (){var statearr_31628 = state_31620;
(statearr_31628[(9)] = inst_31613);

return statearr_31628;
})();
var statearr_31629_31735 = state_31620__$1;
(statearr_31629_31735[(2)] = null);

(statearr_31629_31735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (5))){
var inst_31604 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31620__$1 = state_31620;
var statearr_31630_31736 = state_31620__$1;
(statearr_31630_31736[(2)] = inst_31604);

(statearr_31630_31736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (8))){
var inst_31606 = (state_31620[(8)]);
var inst_31611 = (state_31620[(2)]);
var state_31620__$1 = (function (){var statearr_31631 = state_31620;
(statearr_31631[(10)] = inst_31611);

return statearr_31631;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31620__$1,(9),results,inst_31606);
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
});})(c__31367__auto___31730,jobs,results,process,async))
;
return ((function (switch__31272__auto__,c__31367__auto___31730,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____0 = (function (){
var statearr_31632 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__);

(statearr_31632[(1)] = (1));

return statearr_31632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____1 = (function (state_31620){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_31620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e31633){if((e31633 instanceof Object)){
var ex__31276__auto__ = e31633;
var statearr_31634_31737 = state_31620;
(statearr_31634_31737[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31738 = state_31620;
state_31620 = G__31738;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__ = function(state_31620){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____1.call(this,state_31620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___31730,jobs,results,process,async))
})();
var state__31369__auto__ = (function (){var statearr_31635 = f__31368__auto__.call(null);
(statearr_31635[(6)] = c__31367__auto___31730);

return statearr_31635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___31730,jobs,results,process,async))
);


var c__31367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto__,jobs,results,process,async){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto__,jobs,results,process,async){
return (function (state_31673){
var state_val_31674 = (state_31673[(1)]);
if((state_val_31674 === (7))){
var inst_31669 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31675_31739 = state_31673__$1;
(statearr_31675_31739[(2)] = inst_31669);

(statearr_31675_31739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (20))){
var state_31673__$1 = state_31673;
var statearr_31676_31740 = state_31673__$1;
(statearr_31676_31740[(2)] = null);

(statearr_31676_31740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (1))){
var state_31673__$1 = state_31673;
var statearr_31677_31741 = state_31673__$1;
(statearr_31677_31741[(2)] = null);

(statearr_31677_31741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (4))){
var inst_31638 = (state_31673[(7)]);
var inst_31638__$1 = (state_31673[(2)]);
var inst_31639 = (inst_31638__$1 == null);
var state_31673__$1 = (function (){var statearr_31678 = state_31673;
(statearr_31678[(7)] = inst_31638__$1);

return statearr_31678;
})();
if(cljs.core.truth_(inst_31639)){
var statearr_31679_31742 = state_31673__$1;
(statearr_31679_31742[(1)] = (5));

} else {
var statearr_31680_31743 = state_31673__$1;
(statearr_31680_31743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (15))){
var inst_31651 = (state_31673[(8)]);
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31673__$1,(18),to,inst_31651);
} else {
if((state_val_31674 === (21))){
var inst_31664 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31681_31744 = state_31673__$1;
(statearr_31681_31744[(2)] = inst_31664);

(statearr_31681_31744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (13))){
var inst_31666 = (state_31673[(2)]);
var state_31673__$1 = (function (){var statearr_31682 = state_31673;
(statearr_31682[(9)] = inst_31666);

return statearr_31682;
})();
var statearr_31683_31745 = state_31673__$1;
(statearr_31683_31745[(2)] = null);

(statearr_31683_31745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (6))){
var inst_31638 = (state_31673[(7)]);
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31673__$1,(11),inst_31638);
} else {
if((state_val_31674 === (17))){
var inst_31659 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
if(cljs.core.truth_(inst_31659)){
var statearr_31684_31746 = state_31673__$1;
(statearr_31684_31746[(1)] = (19));

} else {
var statearr_31685_31747 = state_31673__$1;
(statearr_31685_31747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (3))){
var inst_31671 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31673__$1,inst_31671);
} else {
if((state_val_31674 === (12))){
var inst_31648 = (state_31673[(10)]);
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31673__$1,(14),inst_31648);
} else {
if((state_val_31674 === (2))){
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31673__$1,(4),results);
} else {
if((state_val_31674 === (19))){
var state_31673__$1 = state_31673;
var statearr_31686_31748 = state_31673__$1;
(statearr_31686_31748[(2)] = null);

(statearr_31686_31748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (11))){
var inst_31648 = (state_31673[(2)]);
var state_31673__$1 = (function (){var statearr_31687 = state_31673;
(statearr_31687[(10)] = inst_31648);

return statearr_31687;
})();
var statearr_31688_31749 = state_31673__$1;
(statearr_31688_31749[(2)] = null);

(statearr_31688_31749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (9))){
var state_31673__$1 = state_31673;
var statearr_31689_31750 = state_31673__$1;
(statearr_31689_31750[(2)] = null);

(statearr_31689_31750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (5))){
var state_31673__$1 = state_31673;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31690_31751 = state_31673__$1;
(statearr_31690_31751[(1)] = (8));

} else {
var statearr_31691_31752 = state_31673__$1;
(statearr_31691_31752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (14))){
var inst_31651 = (state_31673[(8)]);
var inst_31653 = (state_31673[(11)]);
var inst_31651__$1 = (state_31673[(2)]);
var inst_31652 = (inst_31651__$1 == null);
var inst_31653__$1 = cljs.core.not.call(null,inst_31652);
var state_31673__$1 = (function (){var statearr_31692 = state_31673;
(statearr_31692[(8)] = inst_31651__$1);

(statearr_31692[(11)] = inst_31653__$1);

return statearr_31692;
})();
if(inst_31653__$1){
var statearr_31693_31753 = state_31673__$1;
(statearr_31693_31753[(1)] = (15));

} else {
var statearr_31694_31754 = state_31673__$1;
(statearr_31694_31754[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (16))){
var inst_31653 = (state_31673[(11)]);
var state_31673__$1 = state_31673;
var statearr_31695_31755 = state_31673__$1;
(statearr_31695_31755[(2)] = inst_31653);

(statearr_31695_31755[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (10))){
var inst_31645 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31696_31756 = state_31673__$1;
(statearr_31696_31756[(2)] = inst_31645);

(statearr_31696_31756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (18))){
var inst_31656 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31697_31757 = state_31673__$1;
(statearr_31697_31757[(2)] = inst_31656);

(statearr_31697_31757[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (8))){
var inst_31642 = cljs.core.async.close_BANG_.call(null,to);
var state_31673__$1 = state_31673;
var statearr_31698_31758 = state_31673__$1;
(statearr_31698_31758[(2)] = inst_31642);

(statearr_31698_31758[(1)] = (10));


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
}
}
});})(c__31367__auto__,jobs,results,process,async))
;
return ((function (switch__31272__auto__,c__31367__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____0 = (function (){
var statearr_31699 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31699[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__);

(statearr_31699[(1)] = (1));

return statearr_31699;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____1 = (function (state_31673){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_31673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e31700){if((e31700 instanceof Object)){
var ex__31276__auto__ = e31700;
var statearr_31701_31759 = state_31673;
(statearr_31701_31759[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31760 = state_31673;
state_31673 = G__31760;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__ = function(state_31673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____1.call(this,state_31673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto__,jobs,results,process,async))
})();
var state__31369__auto__ = (function (){var statearr_31702 = f__31368__auto__.call(null);
(statearr_31702[(6)] = c__31367__auto__);

return statearr_31702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto__,jobs,results,process,async))
);

return c__31367__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31762 = arguments.length;
switch (G__31762) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31765 = arguments.length;
switch (G__31765) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31768 = arguments.length;
switch (G__31768) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31367__auto___31817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___31817,tc,fc){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___31817,tc,fc){
return (function (state_31794){
var state_val_31795 = (state_31794[(1)]);
if((state_val_31795 === (7))){
var inst_31790 = (state_31794[(2)]);
var state_31794__$1 = state_31794;
var statearr_31796_31818 = state_31794__$1;
(statearr_31796_31818[(2)] = inst_31790);

(statearr_31796_31818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (1))){
var state_31794__$1 = state_31794;
var statearr_31797_31819 = state_31794__$1;
(statearr_31797_31819[(2)] = null);

(statearr_31797_31819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (4))){
var inst_31771 = (state_31794[(7)]);
var inst_31771__$1 = (state_31794[(2)]);
var inst_31772 = (inst_31771__$1 == null);
var state_31794__$1 = (function (){var statearr_31798 = state_31794;
(statearr_31798[(7)] = inst_31771__$1);

return statearr_31798;
})();
if(cljs.core.truth_(inst_31772)){
var statearr_31799_31820 = state_31794__$1;
(statearr_31799_31820[(1)] = (5));

} else {
var statearr_31800_31821 = state_31794__$1;
(statearr_31800_31821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (13))){
var state_31794__$1 = state_31794;
var statearr_31801_31822 = state_31794__$1;
(statearr_31801_31822[(2)] = null);

(statearr_31801_31822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (6))){
var inst_31771 = (state_31794[(7)]);
var inst_31777 = p.call(null,inst_31771);
var state_31794__$1 = state_31794;
if(cljs.core.truth_(inst_31777)){
var statearr_31802_31823 = state_31794__$1;
(statearr_31802_31823[(1)] = (9));

} else {
var statearr_31803_31824 = state_31794__$1;
(statearr_31803_31824[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (3))){
var inst_31792 = (state_31794[(2)]);
var state_31794__$1 = state_31794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31794__$1,inst_31792);
} else {
if((state_val_31795 === (12))){
var state_31794__$1 = state_31794;
var statearr_31804_31825 = state_31794__$1;
(statearr_31804_31825[(2)] = null);

(statearr_31804_31825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (2))){
var state_31794__$1 = state_31794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31794__$1,(4),ch);
} else {
if((state_val_31795 === (11))){
var inst_31771 = (state_31794[(7)]);
var inst_31781 = (state_31794[(2)]);
var state_31794__$1 = state_31794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31794__$1,(8),inst_31781,inst_31771);
} else {
if((state_val_31795 === (9))){
var state_31794__$1 = state_31794;
var statearr_31805_31826 = state_31794__$1;
(statearr_31805_31826[(2)] = tc);

(statearr_31805_31826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (5))){
var inst_31774 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31775 = cljs.core.async.close_BANG_.call(null,fc);
var state_31794__$1 = (function (){var statearr_31806 = state_31794;
(statearr_31806[(8)] = inst_31774);

return statearr_31806;
})();
var statearr_31807_31827 = state_31794__$1;
(statearr_31807_31827[(2)] = inst_31775);

(statearr_31807_31827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (14))){
var inst_31788 = (state_31794[(2)]);
var state_31794__$1 = state_31794;
var statearr_31808_31828 = state_31794__$1;
(statearr_31808_31828[(2)] = inst_31788);

(statearr_31808_31828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (10))){
var state_31794__$1 = state_31794;
var statearr_31809_31829 = state_31794__$1;
(statearr_31809_31829[(2)] = fc);

(statearr_31809_31829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31795 === (8))){
var inst_31783 = (state_31794[(2)]);
var state_31794__$1 = state_31794;
if(cljs.core.truth_(inst_31783)){
var statearr_31810_31830 = state_31794__$1;
(statearr_31810_31830[(1)] = (12));

} else {
var statearr_31811_31831 = state_31794__$1;
(statearr_31811_31831[(1)] = (13));

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
});})(c__31367__auto___31817,tc,fc))
;
return ((function (switch__31272__auto__,c__31367__auto___31817,tc,fc){
return (function() {
var cljs$core$async$state_machine__31273__auto__ = null;
var cljs$core$async$state_machine__31273__auto____0 = (function (){
var statearr_31812 = [null,null,null,null,null,null,null,null,null];
(statearr_31812[(0)] = cljs$core$async$state_machine__31273__auto__);

(statearr_31812[(1)] = (1));

return statearr_31812;
});
var cljs$core$async$state_machine__31273__auto____1 = (function (state_31794){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_31794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e31813){if((e31813 instanceof Object)){
var ex__31276__auto__ = e31813;
var statearr_31814_31832 = state_31794;
(statearr_31814_31832[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31833 = state_31794;
state_31794 = G__31833;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$state_machine__31273__auto__ = function(state_31794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31273__auto____1.call(this,state_31794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31273__auto____0;
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31273__auto____1;
return cljs$core$async$state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___31817,tc,fc))
})();
var state__31369__auto__ = (function (){var statearr_31815 = f__31368__auto__.call(null);
(statearr_31815[(6)] = c__31367__auto___31817);

return statearr_31815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___31817,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto__){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto__){
return (function (state_31854){
var state_val_31855 = (state_31854[(1)]);
if((state_val_31855 === (7))){
var inst_31850 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31856_31874 = state_31854__$1;
(statearr_31856_31874[(2)] = inst_31850);

(statearr_31856_31874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (1))){
var inst_31834 = init;
var state_31854__$1 = (function (){var statearr_31857 = state_31854;
(statearr_31857[(7)] = inst_31834);

return statearr_31857;
})();
var statearr_31858_31875 = state_31854__$1;
(statearr_31858_31875[(2)] = null);

(statearr_31858_31875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (4))){
var inst_31837 = (state_31854[(8)]);
var inst_31837__$1 = (state_31854[(2)]);
var inst_31838 = (inst_31837__$1 == null);
var state_31854__$1 = (function (){var statearr_31859 = state_31854;
(statearr_31859[(8)] = inst_31837__$1);

return statearr_31859;
})();
if(cljs.core.truth_(inst_31838)){
var statearr_31860_31876 = state_31854__$1;
(statearr_31860_31876[(1)] = (5));

} else {
var statearr_31861_31877 = state_31854__$1;
(statearr_31861_31877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (6))){
var inst_31834 = (state_31854[(7)]);
var inst_31841 = (state_31854[(9)]);
var inst_31837 = (state_31854[(8)]);
var inst_31841__$1 = f.call(null,inst_31834,inst_31837);
var inst_31842 = cljs.core.reduced_QMARK_.call(null,inst_31841__$1);
var state_31854__$1 = (function (){var statearr_31862 = state_31854;
(statearr_31862[(9)] = inst_31841__$1);

return statearr_31862;
})();
if(inst_31842){
var statearr_31863_31878 = state_31854__$1;
(statearr_31863_31878[(1)] = (8));

} else {
var statearr_31864_31879 = state_31854__$1;
(statearr_31864_31879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (3))){
var inst_31852 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31854__$1,inst_31852);
} else {
if((state_val_31855 === (2))){
var state_31854__$1 = state_31854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31854__$1,(4),ch);
} else {
if((state_val_31855 === (9))){
var inst_31841 = (state_31854[(9)]);
var inst_31834 = inst_31841;
var state_31854__$1 = (function (){var statearr_31865 = state_31854;
(statearr_31865[(7)] = inst_31834);

return statearr_31865;
})();
var statearr_31866_31880 = state_31854__$1;
(statearr_31866_31880[(2)] = null);

(statearr_31866_31880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (5))){
var inst_31834 = (state_31854[(7)]);
var state_31854__$1 = state_31854;
var statearr_31867_31881 = state_31854__$1;
(statearr_31867_31881[(2)] = inst_31834);

(statearr_31867_31881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (10))){
var inst_31848 = (state_31854[(2)]);
var state_31854__$1 = state_31854;
var statearr_31868_31882 = state_31854__$1;
(statearr_31868_31882[(2)] = inst_31848);

(statearr_31868_31882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31855 === (8))){
var inst_31841 = (state_31854[(9)]);
var inst_31844 = cljs.core.deref.call(null,inst_31841);
var state_31854__$1 = state_31854;
var statearr_31869_31883 = state_31854__$1;
(statearr_31869_31883[(2)] = inst_31844);

(statearr_31869_31883[(1)] = (10));


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
});})(c__31367__auto__))
;
return ((function (switch__31272__auto__,c__31367__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31273__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31273__auto____0 = (function (){
var statearr_31870 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31870[(0)] = cljs$core$async$reduce_$_state_machine__31273__auto__);

(statearr_31870[(1)] = (1));

return statearr_31870;
});
var cljs$core$async$reduce_$_state_machine__31273__auto____1 = (function (state_31854){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_31854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e31871){if((e31871 instanceof Object)){
var ex__31276__auto__ = e31871;
var statearr_31872_31884 = state_31854;
(statearr_31872_31884[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31885 = state_31854;
state_31854 = G__31885;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31273__auto__ = function(state_31854){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31273__auto____1.call(this,state_31854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31273__auto____0;
cljs$core$async$reduce_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31273__auto____1;
return cljs$core$async$reduce_$_state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto__))
})();
var state__31369__auto__ = (function (){var statearr_31873 = f__31368__auto__.call(null);
(statearr_31873[(6)] = c__31367__auto__);

return statearr_31873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto__))
);

return c__31367__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto__,f__$1){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto__,f__$1){
return (function (state_31891){
var state_val_31892 = (state_31891[(1)]);
if((state_val_31892 === (1))){
var inst_31886 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31891__$1 = state_31891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31891__$1,(2),inst_31886);
} else {
if((state_val_31892 === (2))){
var inst_31888 = (state_31891[(2)]);
var inst_31889 = f__$1.call(null,inst_31888);
var state_31891__$1 = state_31891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31891__$1,inst_31889);
} else {
return null;
}
}
});})(c__31367__auto__,f__$1))
;
return ((function (switch__31272__auto__,c__31367__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31273__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31273__auto____0 = (function (){
var statearr_31893 = [null,null,null,null,null,null,null];
(statearr_31893[(0)] = cljs$core$async$transduce_$_state_machine__31273__auto__);

(statearr_31893[(1)] = (1));

return statearr_31893;
});
var cljs$core$async$transduce_$_state_machine__31273__auto____1 = (function (state_31891){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_31891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e31894){if((e31894 instanceof Object)){
var ex__31276__auto__ = e31894;
var statearr_31895_31897 = state_31891;
(statearr_31895_31897[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31898 = state_31891;
state_31891 = G__31898;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31273__auto__ = function(state_31891){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31273__auto____1.call(this,state_31891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31273__auto____0;
cljs$core$async$transduce_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31273__auto____1;
return cljs$core$async$transduce_$_state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto__,f__$1))
})();
var state__31369__auto__ = (function (){var statearr_31896 = f__31368__auto__.call(null);
(statearr_31896[(6)] = c__31367__auto__);

return statearr_31896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto__,f__$1))
);

return c__31367__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31900 = arguments.length;
switch (G__31900) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto__){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto__){
return (function (state_31925){
var state_val_31926 = (state_31925[(1)]);
if((state_val_31926 === (7))){
var inst_31907 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
var statearr_31927_31948 = state_31925__$1;
(statearr_31927_31948[(2)] = inst_31907);

(statearr_31927_31948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (1))){
var inst_31901 = cljs.core.seq.call(null,coll);
var inst_31902 = inst_31901;
var state_31925__$1 = (function (){var statearr_31928 = state_31925;
(statearr_31928[(7)] = inst_31902);

return statearr_31928;
})();
var statearr_31929_31949 = state_31925__$1;
(statearr_31929_31949[(2)] = null);

(statearr_31929_31949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (4))){
var inst_31902 = (state_31925[(7)]);
var inst_31905 = cljs.core.first.call(null,inst_31902);
var state_31925__$1 = state_31925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31925__$1,(7),ch,inst_31905);
} else {
if((state_val_31926 === (13))){
var inst_31919 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
var statearr_31930_31950 = state_31925__$1;
(statearr_31930_31950[(2)] = inst_31919);

(statearr_31930_31950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (6))){
var inst_31910 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
if(cljs.core.truth_(inst_31910)){
var statearr_31931_31951 = state_31925__$1;
(statearr_31931_31951[(1)] = (8));

} else {
var statearr_31932_31952 = state_31925__$1;
(statearr_31932_31952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (3))){
var inst_31923 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31925__$1,inst_31923);
} else {
if((state_val_31926 === (12))){
var state_31925__$1 = state_31925;
var statearr_31933_31953 = state_31925__$1;
(statearr_31933_31953[(2)] = null);

(statearr_31933_31953[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (2))){
var inst_31902 = (state_31925[(7)]);
var state_31925__$1 = state_31925;
if(cljs.core.truth_(inst_31902)){
var statearr_31934_31954 = state_31925__$1;
(statearr_31934_31954[(1)] = (4));

} else {
var statearr_31935_31955 = state_31925__$1;
(statearr_31935_31955[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (11))){
var inst_31916 = cljs.core.async.close_BANG_.call(null,ch);
var state_31925__$1 = state_31925;
var statearr_31936_31956 = state_31925__$1;
(statearr_31936_31956[(2)] = inst_31916);

(statearr_31936_31956[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (9))){
var state_31925__$1 = state_31925;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31937_31957 = state_31925__$1;
(statearr_31937_31957[(1)] = (11));

} else {
var statearr_31938_31958 = state_31925__$1;
(statearr_31938_31958[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (5))){
var inst_31902 = (state_31925[(7)]);
var state_31925__$1 = state_31925;
var statearr_31939_31959 = state_31925__$1;
(statearr_31939_31959[(2)] = inst_31902);

(statearr_31939_31959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (10))){
var inst_31921 = (state_31925[(2)]);
var state_31925__$1 = state_31925;
var statearr_31940_31960 = state_31925__$1;
(statearr_31940_31960[(2)] = inst_31921);

(statearr_31940_31960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31926 === (8))){
var inst_31902 = (state_31925[(7)]);
var inst_31912 = cljs.core.next.call(null,inst_31902);
var inst_31902__$1 = inst_31912;
var state_31925__$1 = (function (){var statearr_31941 = state_31925;
(statearr_31941[(7)] = inst_31902__$1);

return statearr_31941;
})();
var statearr_31942_31961 = state_31925__$1;
(statearr_31942_31961[(2)] = null);

(statearr_31942_31961[(1)] = (2));


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
});})(c__31367__auto__))
;
return ((function (switch__31272__auto__,c__31367__auto__){
return (function() {
var cljs$core$async$state_machine__31273__auto__ = null;
var cljs$core$async$state_machine__31273__auto____0 = (function (){
var statearr_31943 = [null,null,null,null,null,null,null,null];
(statearr_31943[(0)] = cljs$core$async$state_machine__31273__auto__);

(statearr_31943[(1)] = (1));

return statearr_31943;
});
var cljs$core$async$state_machine__31273__auto____1 = (function (state_31925){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_31925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e31944){if((e31944 instanceof Object)){
var ex__31276__auto__ = e31944;
var statearr_31945_31962 = state_31925;
(statearr_31945_31962[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31963 = state_31925;
state_31925 = G__31963;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$state_machine__31273__auto__ = function(state_31925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31273__auto____1.call(this,state_31925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31273__auto____0;
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31273__auto____1;
return cljs$core$async$state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto__))
})();
var state__31369__auto__ = (function (){var statearr_31946 = f__31368__auto__.call(null);
(statearr_31946[(6)] = c__31367__auto__);

return statearr_31946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto__))
);

return c__31367__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31964 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31964 = (function (ch,cs,meta31965){
this.ch = ch;
this.cs = cs;
this.meta31965 = meta31965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31966,meta31965__$1){
var self__ = this;
var _31966__$1 = this;
return (new cljs.core.async.t_cljs$core$async31964(self__.ch,self__.cs,meta31965__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31966){
var self__ = this;
var _31966__$1 = this;
return self__.meta31965;
});})(cs))
;

cljs.core.async.t_cljs$core$async31964.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31964.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31964.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31964.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31964.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31964.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31964.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31965","meta31965",-666717218,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31964.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31964";

cljs.core.async.t_cljs$core$async31964.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31964");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31964.
 */
cljs.core.async.__GT_t_cljs$core$async31964 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31964(ch__$1,cs__$1,meta31965){
return (new cljs.core.async.t_cljs$core$async31964(ch__$1,cs__$1,meta31965));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31964(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31367__auto___32186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___32186,cs,m,dchan,dctr,done){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___32186,cs,m,dchan,dctr,done){
return (function (state_32101){
var state_val_32102 = (state_32101[(1)]);
if((state_val_32102 === (7))){
var inst_32097 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32103_32187 = state_32101__$1;
(statearr_32103_32187[(2)] = inst_32097);

(statearr_32103_32187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (20))){
var inst_32000 = (state_32101[(7)]);
var inst_32012 = cljs.core.first.call(null,inst_32000);
var inst_32013 = cljs.core.nth.call(null,inst_32012,(0),null);
var inst_32014 = cljs.core.nth.call(null,inst_32012,(1),null);
var state_32101__$1 = (function (){var statearr_32104 = state_32101;
(statearr_32104[(8)] = inst_32013);

return statearr_32104;
})();
if(cljs.core.truth_(inst_32014)){
var statearr_32105_32188 = state_32101__$1;
(statearr_32105_32188[(1)] = (22));

} else {
var statearr_32106_32189 = state_32101__$1;
(statearr_32106_32189[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (27))){
var inst_32049 = (state_32101[(9)]);
var inst_31969 = (state_32101[(10)]);
var inst_32044 = (state_32101[(11)]);
var inst_32042 = (state_32101[(12)]);
var inst_32049__$1 = cljs.core._nth.call(null,inst_32042,inst_32044);
var inst_32050 = cljs.core.async.put_BANG_.call(null,inst_32049__$1,inst_31969,done);
var state_32101__$1 = (function (){var statearr_32107 = state_32101;
(statearr_32107[(9)] = inst_32049__$1);

return statearr_32107;
})();
if(cljs.core.truth_(inst_32050)){
var statearr_32108_32190 = state_32101__$1;
(statearr_32108_32190[(1)] = (30));

} else {
var statearr_32109_32191 = state_32101__$1;
(statearr_32109_32191[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (1))){
var state_32101__$1 = state_32101;
var statearr_32110_32192 = state_32101__$1;
(statearr_32110_32192[(2)] = null);

(statearr_32110_32192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (24))){
var inst_32000 = (state_32101[(7)]);
var inst_32019 = (state_32101[(2)]);
var inst_32020 = cljs.core.next.call(null,inst_32000);
var inst_31978 = inst_32020;
var inst_31979 = null;
var inst_31980 = (0);
var inst_31981 = (0);
var state_32101__$1 = (function (){var statearr_32111 = state_32101;
(statearr_32111[(13)] = inst_31979);

(statearr_32111[(14)] = inst_31980);

(statearr_32111[(15)] = inst_32019);

(statearr_32111[(16)] = inst_31978);

(statearr_32111[(17)] = inst_31981);

return statearr_32111;
})();
var statearr_32112_32193 = state_32101__$1;
(statearr_32112_32193[(2)] = null);

(statearr_32112_32193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (39))){
var state_32101__$1 = state_32101;
var statearr_32116_32194 = state_32101__$1;
(statearr_32116_32194[(2)] = null);

(statearr_32116_32194[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (4))){
var inst_31969 = (state_32101[(10)]);
var inst_31969__$1 = (state_32101[(2)]);
var inst_31970 = (inst_31969__$1 == null);
var state_32101__$1 = (function (){var statearr_32117 = state_32101;
(statearr_32117[(10)] = inst_31969__$1);

return statearr_32117;
})();
if(cljs.core.truth_(inst_31970)){
var statearr_32118_32195 = state_32101__$1;
(statearr_32118_32195[(1)] = (5));

} else {
var statearr_32119_32196 = state_32101__$1;
(statearr_32119_32196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (15))){
var inst_31979 = (state_32101[(13)]);
var inst_31980 = (state_32101[(14)]);
var inst_31978 = (state_32101[(16)]);
var inst_31981 = (state_32101[(17)]);
var inst_31996 = (state_32101[(2)]);
var inst_31997 = (inst_31981 + (1));
var tmp32113 = inst_31979;
var tmp32114 = inst_31980;
var tmp32115 = inst_31978;
var inst_31978__$1 = tmp32115;
var inst_31979__$1 = tmp32113;
var inst_31980__$1 = tmp32114;
var inst_31981__$1 = inst_31997;
var state_32101__$1 = (function (){var statearr_32120 = state_32101;
(statearr_32120[(18)] = inst_31996);

(statearr_32120[(13)] = inst_31979__$1);

(statearr_32120[(14)] = inst_31980__$1);

(statearr_32120[(16)] = inst_31978__$1);

(statearr_32120[(17)] = inst_31981__$1);

return statearr_32120;
})();
var statearr_32121_32197 = state_32101__$1;
(statearr_32121_32197[(2)] = null);

(statearr_32121_32197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (21))){
var inst_32023 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32125_32198 = state_32101__$1;
(statearr_32125_32198[(2)] = inst_32023);

(statearr_32125_32198[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (31))){
var inst_32049 = (state_32101[(9)]);
var inst_32053 = done.call(null,null);
var inst_32054 = cljs.core.async.untap_STAR_.call(null,m,inst_32049);
var state_32101__$1 = (function (){var statearr_32126 = state_32101;
(statearr_32126[(19)] = inst_32053);

return statearr_32126;
})();
var statearr_32127_32199 = state_32101__$1;
(statearr_32127_32199[(2)] = inst_32054);

(statearr_32127_32199[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (32))){
var inst_32043 = (state_32101[(20)]);
var inst_32044 = (state_32101[(11)]);
var inst_32042 = (state_32101[(12)]);
var inst_32041 = (state_32101[(21)]);
var inst_32056 = (state_32101[(2)]);
var inst_32057 = (inst_32044 + (1));
var tmp32122 = inst_32043;
var tmp32123 = inst_32042;
var tmp32124 = inst_32041;
var inst_32041__$1 = tmp32124;
var inst_32042__$1 = tmp32123;
var inst_32043__$1 = tmp32122;
var inst_32044__$1 = inst_32057;
var state_32101__$1 = (function (){var statearr_32128 = state_32101;
(statearr_32128[(20)] = inst_32043__$1);

(statearr_32128[(22)] = inst_32056);

(statearr_32128[(11)] = inst_32044__$1);

(statearr_32128[(12)] = inst_32042__$1);

(statearr_32128[(21)] = inst_32041__$1);

return statearr_32128;
})();
var statearr_32129_32200 = state_32101__$1;
(statearr_32129_32200[(2)] = null);

(statearr_32129_32200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (40))){
var inst_32069 = (state_32101[(23)]);
var inst_32073 = done.call(null,null);
var inst_32074 = cljs.core.async.untap_STAR_.call(null,m,inst_32069);
var state_32101__$1 = (function (){var statearr_32130 = state_32101;
(statearr_32130[(24)] = inst_32073);

return statearr_32130;
})();
var statearr_32131_32201 = state_32101__$1;
(statearr_32131_32201[(2)] = inst_32074);

(statearr_32131_32201[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (33))){
var inst_32060 = (state_32101[(25)]);
var inst_32062 = cljs.core.chunked_seq_QMARK_.call(null,inst_32060);
var state_32101__$1 = state_32101;
if(inst_32062){
var statearr_32132_32202 = state_32101__$1;
(statearr_32132_32202[(1)] = (36));

} else {
var statearr_32133_32203 = state_32101__$1;
(statearr_32133_32203[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (13))){
var inst_31990 = (state_32101[(26)]);
var inst_31993 = cljs.core.async.close_BANG_.call(null,inst_31990);
var state_32101__$1 = state_32101;
var statearr_32134_32204 = state_32101__$1;
(statearr_32134_32204[(2)] = inst_31993);

(statearr_32134_32204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (22))){
var inst_32013 = (state_32101[(8)]);
var inst_32016 = cljs.core.async.close_BANG_.call(null,inst_32013);
var state_32101__$1 = state_32101;
var statearr_32135_32205 = state_32101__$1;
(statearr_32135_32205[(2)] = inst_32016);

(statearr_32135_32205[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (36))){
var inst_32060 = (state_32101[(25)]);
var inst_32064 = cljs.core.chunk_first.call(null,inst_32060);
var inst_32065 = cljs.core.chunk_rest.call(null,inst_32060);
var inst_32066 = cljs.core.count.call(null,inst_32064);
var inst_32041 = inst_32065;
var inst_32042 = inst_32064;
var inst_32043 = inst_32066;
var inst_32044 = (0);
var state_32101__$1 = (function (){var statearr_32136 = state_32101;
(statearr_32136[(20)] = inst_32043);

(statearr_32136[(11)] = inst_32044);

(statearr_32136[(12)] = inst_32042);

(statearr_32136[(21)] = inst_32041);

return statearr_32136;
})();
var statearr_32137_32206 = state_32101__$1;
(statearr_32137_32206[(2)] = null);

(statearr_32137_32206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (41))){
var inst_32060 = (state_32101[(25)]);
var inst_32076 = (state_32101[(2)]);
var inst_32077 = cljs.core.next.call(null,inst_32060);
var inst_32041 = inst_32077;
var inst_32042 = null;
var inst_32043 = (0);
var inst_32044 = (0);
var state_32101__$1 = (function (){var statearr_32138 = state_32101;
(statearr_32138[(20)] = inst_32043);

(statearr_32138[(27)] = inst_32076);

(statearr_32138[(11)] = inst_32044);

(statearr_32138[(12)] = inst_32042);

(statearr_32138[(21)] = inst_32041);

return statearr_32138;
})();
var statearr_32139_32207 = state_32101__$1;
(statearr_32139_32207[(2)] = null);

(statearr_32139_32207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (43))){
var state_32101__$1 = state_32101;
var statearr_32140_32208 = state_32101__$1;
(statearr_32140_32208[(2)] = null);

(statearr_32140_32208[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (29))){
var inst_32085 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32141_32209 = state_32101__$1;
(statearr_32141_32209[(2)] = inst_32085);

(statearr_32141_32209[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (44))){
var inst_32094 = (state_32101[(2)]);
var state_32101__$1 = (function (){var statearr_32142 = state_32101;
(statearr_32142[(28)] = inst_32094);

return statearr_32142;
})();
var statearr_32143_32210 = state_32101__$1;
(statearr_32143_32210[(2)] = null);

(statearr_32143_32210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (6))){
var inst_32033 = (state_32101[(29)]);
var inst_32032 = cljs.core.deref.call(null,cs);
var inst_32033__$1 = cljs.core.keys.call(null,inst_32032);
var inst_32034 = cljs.core.count.call(null,inst_32033__$1);
var inst_32035 = cljs.core.reset_BANG_.call(null,dctr,inst_32034);
var inst_32040 = cljs.core.seq.call(null,inst_32033__$1);
var inst_32041 = inst_32040;
var inst_32042 = null;
var inst_32043 = (0);
var inst_32044 = (0);
var state_32101__$1 = (function (){var statearr_32144 = state_32101;
(statearr_32144[(30)] = inst_32035);

(statearr_32144[(20)] = inst_32043);

(statearr_32144[(29)] = inst_32033__$1);

(statearr_32144[(11)] = inst_32044);

(statearr_32144[(12)] = inst_32042);

(statearr_32144[(21)] = inst_32041);

return statearr_32144;
})();
var statearr_32145_32211 = state_32101__$1;
(statearr_32145_32211[(2)] = null);

(statearr_32145_32211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (28))){
var inst_32041 = (state_32101[(21)]);
var inst_32060 = (state_32101[(25)]);
var inst_32060__$1 = cljs.core.seq.call(null,inst_32041);
var state_32101__$1 = (function (){var statearr_32146 = state_32101;
(statearr_32146[(25)] = inst_32060__$1);

return statearr_32146;
})();
if(inst_32060__$1){
var statearr_32147_32212 = state_32101__$1;
(statearr_32147_32212[(1)] = (33));

} else {
var statearr_32148_32213 = state_32101__$1;
(statearr_32148_32213[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (25))){
var inst_32043 = (state_32101[(20)]);
var inst_32044 = (state_32101[(11)]);
var inst_32046 = (inst_32044 < inst_32043);
var inst_32047 = inst_32046;
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32047)){
var statearr_32149_32214 = state_32101__$1;
(statearr_32149_32214[(1)] = (27));

} else {
var statearr_32150_32215 = state_32101__$1;
(statearr_32150_32215[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (34))){
var state_32101__$1 = state_32101;
var statearr_32151_32216 = state_32101__$1;
(statearr_32151_32216[(2)] = null);

(statearr_32151_32216[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (17))){
var state_32101__$1 = state_32101;
var statearr_32152_32217 = state_32101__$1;
(statearr_32152_32217[(2)] = null);

(statearr_32152_32217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (3))){
var inst_32099 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32101__$1,inst_32099);
} else {
if((state_val_32102 === (12))){
var inst_32028 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32153_32218 = state_32101__$1;
(statearr_32153_32218[(2)] = inst_32028);

(statearr_32153_32218[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (2))){
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32101__$1,(4),ch);
} else {
if((state_val_32102 === (23))){
var state_32101__$1 = state_32101;
var statearr_32154_32219 = state_32101__$1;
(statearr_32154_32219[(2)] = null);

(statearr_32154_32219[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (35))){
var inst_32083 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32155_32220 = state_32101__$1;
(statearr_32155_32220[(2)] = inst_32083);

(statearr_32155_32220[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (19))){
var inst_32000 = (state_32101[(7)]);
var inst_32004 = cljs.core.chunk_first.call(null,inst_32000);
var inst_32005 = cljs.core.chunk_rest.call(null,inst_32000);
var inst_32006 = cljs.core.count.call(null,inst_32004);
var inst_31978 = inst_32005;
var inst_31979 = inst_32004;
var inst_31980 = inst_32006;
var inst_31981 = (0);
var state_32101__$1 = (function (){var statearr_32156 = state_32101;
(statearr_32156[(13)] = inst_31979);

(statearr_32156[(14)] = inst_31980);

(statearr_32156[(16)] = inst_31978);

(statearr_32156[(17)] = inst_31981);

return statearr_32156;
})();
var statearr_32157_32221 = state_32101__$1;
(statearr_32157_32221[(2)] = null);

(statearr_32157_32221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (11))){
var inst_32000 = (state_32101[(7)]);
var inst_31978 = (state_32101[(16)]);
var inst_32000__$1 = cljs.core.seq.call(null,inst_31978);
var state_32101__$1 = (function (){var statearr_32158 = state_32101;
(statearr_32158[(7)] = inst_32000__$1);

return statearr_32158;
})();
if(inst_32000__$1){
var statearr_32159_32222 = state_32101__$1;
(statearr_32159_32222[(1)] = (16));

} else {
var statearr_32160_32223 = state_32101__$1;
(statearr_32160_32223[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (9))){
var inst_32030 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32161_32224 = state_32101__$1;
(statearr_32161_32224[(2)] = inst_32030);

(statearr_32161_32224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (5))){
var inst_31976 = cljs.core.deref.call(null,cs);
var inst_31977 = cljs.core.seq.call(null,inst_31976);
var inst_31978 = inst_31977;
var inst_31979 = null;
var inst_31980 = (0);
var inst_31981 = (0);
var state_32101__$1 = (function (){var statearr_32162 = state_32101;
(statearr_32162[(13)] = inst_31979);

(statearr_32162[(14)] = inst_31980);

(statearr_32162[(16)] = inst_31978);

(statearr_32162[(17)] = inst_31981);

return statearr_32162;
})();
var statearr_32163_32225 = state_32101__$1;
(statearr_32163_32225[(2)] = null);

(statearr_32163_32225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (14))){
var state_32101__$1 = state_32101;
var statearr_32164_32226 = state_32101__$1;
(statearr_32164_32226[(2)] = null);

(statearr_32164_32226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (45))){
var inst_32091 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32165_32227 = state_32101__$1;
(statearr_32165_32227[(2)] = inst_32091);

(statearr_32165_32227[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (26))){
var inst_32033 = (state_32101[(29)]);
var inst_32087 = (state_32101[(2)]);
var inst_32088 = cljs.core.seq.call(null,inst_32033);
var state_32101__$1 = (function (){var statearr_32166 = state_32101;
(statearr_32166[(31)] = inst_32087);

return statearr_32166;
})();
if(inst_32088){
var statearr_32167_32228 = state_32101__$1;
(statearr_32167_32228[(1)] = (42));

} else {
var statearr_32168_32229 = state_32101__$1;
(statearr_32168_32229[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (16))){
var inst_32000 = (state_32101[(7)]);
var inst_32002 = cljs.core.chunked_seq_QMARK_.call(null,inst_32000);
var state_32101__$1 = state_32101;
if(inst_32002){
var statearr_32169_32230 = state_32101__$1;
(statearr_32169_32230[(1)] = (19));

} else {
var statearr_32170_32231 = state_32101__$1;
(statearr_32170_32231[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (38))){
var inst_32080 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32171_32232 = state_32101__$1;
(statearr_32171_32232[(2)] = inst_32080);

(statearr_32171_32232[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (30))){
var state_32101__$1 = state_32101;
var statearr_32172_32233 = state_32101__$1;
(statearr_32172_32233[(2)] = null);

(statearr_32172_32233[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (10))){
var inst_31979 = (state_32101[(13)]);
var inst_31981 = (state_32101[(17)]);
var inst_31989 = cljs.core._nth.call(null,inst_31979,inst_31981);
var inst_31990 = cljs.core.nth.call(null,inst_31989,(0),null);
var inst_31991 = cljs.core.nth.call(null,inst_31989,(1),null);
var state_32101__$1 = (function (){var statearr_32173 = state_32101;
(statearr_32173[(26)] = inst_31990);

return statearr_32173;
})();
if(cljs.core.truth_(inst_31991)){
var statearr_32174_32234 = state_32101__$1;
(statearr_32174_32234[(1)] = (13));

} else {
var statearr_32175_32235 = state_32101__$1;
(statearr_32175_32235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (18))){
var inst_32026 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32176_32236 = state_32101__$1;
(statearr_32176_32236[(2)] = inst_32026);

(statearr_32176_32236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (42))){
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32101__$1,(45),dchan);
} else {
if((state_val_32102 === (37))){
var inst_32069 = (state_32101[(23)]);
var inst_31969 = (state_32101[(10)]);
var inst_32060 = (state_32101[(25)]);
var inst_32069__$1 = cljs.core.first.call(null,inst_32060);
var inst_32070 = cljs.core.async.put_BANG_.call(null,inst_32069__$1,inst_31969,done);
var state_32101__$1 = (function (){var statearr_32177 = state_32101;
(statearr_32177[(23)] = inst_32069__$1);

return statearr_32177;
})();
if(cljs.core.truth_(inst_32070)){
var statearr_32178_32237 = state_32101__$1;
(statearr_32178_32237[(1)] = (39));

} else {
var statearr_32179_32238 = state_32101__$1;
(statearr_32179_32238[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (8))){
var inst_31980 = (state_32101[(14)]);
var inst_31981 = (state_32101[(17)]);
var inst_31983 = (inst_31981 < inst_31980);
var inst_31984 = inst_31983;
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_31984)){
var statearr_32180_32239 = state_32101__$1;
(statearr_32180_32239[(1)] = (10));

} else {
var statearr_32181_32240 = state_32101__$1;
(statearr_32181_32240[(1)] = (11));

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
});})(c__31367__auto___32186,cs,m,dchan,dctr,done))
;
return ((function (switch__31272__auto__,c__31367__auto___32186,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31273__auto__ = null;
var cljs$core$async$mult_$_state_machine__31273__auto____0 = (function (){
var statearr_32182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32182[(0)] = cljs$core$async$mult_$_state_machine__31273__auto__);

(statearr_32182[(1)] = (1));

return statearr_32182;
});
var cljs$core$async$mult_$_state_machine__31273__auto____1 = (function (state_32101){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_32101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e32183){if((e32183 instanceof Object)){
var ex__31276__auto__ = e32183;
var statearr_32184_32241 = state_32101;
(statearr_32184_32241[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32242 = state_32101;
state_32101 = G__32242;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31273__auto__ = function(state_32101){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31273__auto____1.call(this,state_32101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31273__auto____0;
cljs$core$async$mult_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31273__auto____1;
return cljs$core$async$mult_$_state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___32186,cs,m,dchan,dctr,done))
})();
var state__31369__auto__ = (function (){var statearr_32185 = f__31368__auto__.call(null);
(statearr_32185[(6)] = c__31367__auto___32186);

return statearr_32185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___32186,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32244 = arguments.length;
switch (G__32244) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32256 = arguments.length;
var i__4642__auto___32257 = (0);
while(true){
if((i__4642__auto___32257 < len__4641__auto___32256)){
args__4647__auto__.push((arguments[i__4642__auto___32257]));

var G__32258 = (i__4642__auto___32257 + (1));
i__4642__auto___32257 = G__32258;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32250){
var map__32251 = p__32250;
var map__32251__$1 = (((((!((map__32251 == null))))?(((((map__32251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32251):map__32251);
var opts = map__32251__$1;
var statearr_32253_32259 = state;
(statearr_32253_32259[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__32251,map__32251__$1,opts){
return (function (val){
var statearr_32254_32260 = state;
(statearr_32254_32260[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32251,map__32251__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_32255_32261 = state;
(statearr_32255_32261[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32246){
var G__32247 = cljs.core.first.call(null,seq32246);
var seq32246__$1 = cljs.core.next.call(null,seq32246);
var G__32248 = cljs.core.first.call(null,seq32246__$1);
var seq32246__$2 = cljs.core.next.call(null,seq32246__$1);
var G__32249 = cljs.core.first.call(null,seq32246__$2);
var seq32246__$3 = cljs.core.next.call(null,seq32246__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32247,G__32248,G__32249,seq32246__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32262 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32262 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32263){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32263 = meta32263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32264,meta32263__$1){
var self__ = this;
var _32264__$1 = this;
return (new cljs.core.async.t_cljs$core$async32262(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32263__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32264){
var self__ = this;
var _32264__$1 = this;
return self__.meta32263;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32262.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32262.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32263","meta32263",-2093388085,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32262";

cljs.core.async.t_cljs$core$async32262.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32262");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32262.
 */
cljs.core.async.__GT_t_cljs$core$async32262 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32262(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32263){
return (new cljs.core.async.t_cljs$core$async32262(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32263));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32262(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31367__auto___32426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___32426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___32426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32366){
var state_val_32367 = (state_32366[(1)]);
if((state_val_32367 === (7))){
var inst_32281 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
var statearr_32368_32427 = state_32366__$1;
(statearr_32368_32427[(2)] = inst_32281);

(statearr_32368_32427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (20))){
var inst_32293 = (state_32366[(7)]);
var state_32366__$1 = state_32366;
var statearr_32369_32428 = state_32366__$1;
(statearr_32369_32428[(2)] = inst_32293);

(statearr_32369_32428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (27))){
var state_32366__$1 = state_32366;
var statearr_32370_32429 = state_32366__$1;
(statearr_32370_32429[(2)] = null);

(statearr_32370_32429[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (1))){
var inst_32268 = (state_32366[(8)]);
var inst_32268__$1 = calc_state.call(null);
var inst_32270 = (inst_32268__$1 == null);
var inst_32271 = cljs.core.not.call(null,inst_32270);
var state_32366__$1 = (function (){var statearr_32371 = state_32366;
(statearr_32371[(8)] = inst_32268__$1);

return statearr_32371;
})();
if(inst_32271){
var statearr_32372_32430 = state_32366__$1;
(statearr_32372_32430[(1)] = (2));

} else {
var statearr_32373_32431 = state_32366__$1;
(statearr_32373_32431[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (24))){
var inst_32317 = (state_32366[(9)]);
var inst_32326 = (state_32366[(10)]);
var inst_32340 = (state_32366[(11)]);
var inst_32340__$1 = inst_32317.call(null,inst_32326);
var state_32366__$1 = (function (){var statearr_32374 = state_32366;
(statearr_32374[(11)] = inst_32340__$1);

return statearr_32374;
})();
if(cljs.core.truth_(inst_32340__$1)){
var statearr_32375_32432 = state_32366__$1;
(statearr_32375_32432[(1)] = (29));

} else {
var statearr_32376_32433 = state_32366__$1;
(statearr_32376_32433[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (4))){
var inst_32284 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
if(cljs.core.truth_(inst_32284)){
var statearr_32377_32434 = state_32366__$1;
(statearr_32377_32434[(1)] = (8));

} else {
var statearr_32378_32435 = state_32366__$1;
(statearr_32378_32435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (15))){
var inst_32311 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
if(cljs.core.truth_(inst_32311)){
var statearr_32379_32436 = state_32366__$1;
(statearr_32379_32436[(1)] = (19));

} else {
var statearr_32380_32437 = state_32366__$1;
(statearr_32380_32437[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (21))){
var inst_32316 = (state_32366[(12)]);
var inst_32316__$1 = (state_32366[(2)]);
var inst_32317 = cljs.core.get.call(null,inst_32316__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32318 = cljs.core.get.call(null,inst_32316__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32319 = cljs.core.get.call(null,inst_32316__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32366__$1 = (function (){var statearr_32381 = state_32366;
(statearr_32381[(9)] = inst_32317);

(statearr_32381[(12)] = inst_32316__$1);

(statearr_32381[(13)] = inst_32318);

return statearr_32381;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32366__$1,(22),inst_32319);
} else {
if((state_val_32367 === (31))){
var inst_32348 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
if(cljs.core.truth_(inst_32348)){
var statearr_32382_32438 = state_32366__$1;
(statearr_32382_32438[(1)] = (32));

} else {
var statearr_32383_32439 = state_32366__$1;
(statearr_32383_32439[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (32))){
var inst_32325 = (state_32366[(14)]);
var state_32366__$1 = state_32366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32366__$1,(35),out,inst_32325);
} else {
if((state_val_32367 === (33))){
var inst_32316 = (state_32366[(12)]);
var inst_32293 = inst_32316;
var state_32366__$1 = (function (){var statearr_32384 = state_32366;
(statearr_32384[(7)] = inst_32293);

return statearr_32384;
})();
var statearr_32385_32440 = state_32366__$1;
(statearr_32385_32440[(2)] = null);

(statearr_32385_32440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (13))){
var inst_32293 = (state_32366[(7)]);
var inst_32300 = inst_32293.cljs$lang$protocol_mask$partition0$;
var inst_32301 = (inst_32300 & (64));
var inst_32302 = inst_32293.cljs$core$ISeq$;
var inst_32303 = (cljs.core.PROTOCOL_SENTINEL === inst_32302);
var inst_32304 = ((inst_32301) || (inst_32303));
var state_32366__$1 = state_32366;
if(cljs.core.truth_(inst_32304)){
var statearr_32386_32441 = state_32366__$1;
(statearr_32386_32441[(1)] = (16));

} else {
var statearr_32387_32442 = state_32366__$1;
(statearr_32387_32442[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (22))){
var inst_32325 = (state_32366[(14)]);
var inst_32326 = (state_32366[(10)]);
var inst_32324 = (state_32366[(2)]);
var inst_32325__$1 = cljs.core.nth.call(null,inst_32324,(0),null);
var inst_32326__$1 = cljs.core.nth.call(null,inst_32324,(1),null);
var inst_32327 = (inst_32325__$1 == null);
var inst_32328 = cljs.core._EQ_.call(null,inst_32326__$1,change);
var inst_32329 = ((inst_32327) || (inst_32328));
var state_32366__$1 = (function (){var statearr_32388 = state_32366;
(statearr_32388[(14)] = inst_32325__$1);

(statearr_32388[(10)] = inst_32326__$1);

return statearr_32388;
})();
if(cljs.core.truth_(inst_32329)){
var statearr_32389_32443 = state_32366__$1;
(statearr_32389_32443[(1)] = (23));

} else {
var statearr_32390_32444 = state_32366__$1;
(statearr_32390_32444[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (36))){
var inst_32316 = (state_32366[(12)]);
var inst_32293 = inst_32316;
var state_32366__$1 = (function (){var statearr_32391 = state_32366;
(statearr_32391[(7)] = inst_32293);

return statearr_32391;
})();
var statearr_32392_32445 = state_32366__$1;
(statearr_32392_32445[(2)] = null);

(statearr_32392_32445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (29))){
var inst_32340 = (state_32366[(11)]);
var state_32366__$1 = state_32366;
var statearr_32393_32446 = state_32366__$1;
(statearr_32393_32446[(2)] = inst_32340);

(statearr_32393_32446[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (6))){
var state_32366__$1 = state_32366;
var statearr_32394_32447 = state_32366__$1;
(statearr_32394_32447[(2)] = false);

(statearr_32394_32447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (28))){
var inst_32336 = (state_32366[(2)]);
var inst_32337 = calc_state.call(null);
var inst_32293 = inst_32337;
var state_32366__$1 = (function (){var statearr_32395 = state_32366;
(statearr_32395[(15)] = inst_32336);

(statearr_32395[(7)] = inst_32293);

return statearr_32395;
})();
var statearr_32396_32448 = state_32366__$1;
(statearr_32396_32448[(2)] = null);

(statearr_32396_32448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (25))){
var inst_32362 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
var statearr_32397_32449 = state_32366__$1;
(statearr_32397_32449[(2)] = inst_32362);

(statearr_32397_32449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (34))){
var inst_32360 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
var statearr_32398_32450 = state_32366__$1;
(statearr_32398_32450[(2)] = inst_32360);

(statearr_32398_32450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (17))){
var state_32366__$1 = state_32366;
var statearr_32399_32451 = state_32366__$1;
(statearr_32399_32451[(2)] = false);

(statearr_32399_32451[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (3))){
var state_32366__$1 = state_32366;
var statearr_32400_32452 = state_32366__$1;
(statearr_32400_32452[(2)] = false);

(statearr_32400_32452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (12))){
var inst_32364 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32366__$1,inst_32364);
} else {
if((state_val_32367 === (2))){
var inst_32268 = (state_32366[(8)]);
var inst_32273 = inst_32268.cljs$lang$protocol_mask$partition0$;
var inst_32274 = (inst_32273 & (64));
var inst_32275 = inst_32268.cljs$core$ISeq$;
var inst_32276 = (cljs.core.PROTOCOL_SENTINEL === inst_32275);
var inst_32277 = ((inst_32274) || (inst_32276));
var state_32366__$1 = state_32366;
if(cljs.core.truth_(inst_32277)){
var statearr_32401_32453 = state_32366__$1;
(statearr_32401_32453[(1)] = (5));

} else {
var statearr_32402_32454 = state_32366__$1;
(statearr_32402_32454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (23))){
var inst_32325 = (state_32366[(14)]);
var inst_32331 = (inst_32325 == null);
var state_32366__$1 = state_32366;
if(cljs.core.truth_(inst_32331)){
var statearr_32403_32455 = state_32366__$1;
(statearr_32403_32455[(1)] = (26));

} else {
var statearr_32404_32456 = state_32366__$1;
(statearr_32404_32456[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (35))){
var inst_32351 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
if(cljs.core.truth_(inst_32351)){
var statearr_32405_32457 = state_32366__$1;
(statearr_32405_32457[(1)] = (36));

} else {
var statearr_32406_32458 = state_32366__$1;
(statearr_32406_32458[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (19))){
var inst_32293 = (state_32366[(7)]);
var inst_32313 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32293);
var state_32366__$1 = state_32366;
var statearr_32407_32459 = state_32366__$1;
(statearr_32407_32459[(2)] = inst_32313);

(statearr_32407_32459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (11))){
var inst_32293 = (state_32366[(7)]);
var inst_32297 = (inst_32293 == null);
var inst_32298 = cljs.core.not.call(null,inst_32297);
var state_32366__$1 = state_32366;
if(inst_32298){
var statearr_32408_32460 = state_32366__$1;
(statearr_32408_32460[(1)] = (13));

} else {
var statearr_32409_32461 = state_32366__$1;
(statearr_32409_32461[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (9))){
var inst_32268 = (state_32366[(8)]);
var state_32366__$1 = state_32366;
var statearr_32410_32462 = state_32366__$1;
(statearr_32410_32462[(2)] = inst_32268);

(statearr_32410_32462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (5))){
var state_32366__$1 = state_32366;
var statearr_32411_32463 = state_32366__$1;
(statearr_32411_32463[(2)] = true);

(statearr_32411_32463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (14))){
var state_32366__$1 = state_32366;
var statearr_32412_32464 = state_32366__$1;
(statearr_32412_32464[(2)] = false);

(statearr_32412_32464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (26))){
var inst_32326 = (state_32366[(10)]);
var inst_32333 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32326);
var state_32366__$1 = state_32366;
var statearr_32413_32465 = state_32366__$1;
(statearr_32413_32465[(2)] = inst_32333);

(statearr_32413_32465[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (16))){
var state_32366__$1 = state_32366;
var statearr_32414_32466 = state_32366__$1;
(statearr_32414_32466[(2)] = true);

(statearr_32414_32466[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (38))){
var inst_32356 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
var statearr_32415_32467 = state_32366__$1;
(statearr_32415_32467[(2)] = inst_32356);

(statearr_32415_32467[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (30))){
var inst_32317 = (state_32366[(9)]);
var inst_32326 = (state_32366[(10)]);
var inst_32318 = (state_32366[(13)]);
var inst_32343 = cljs.core.empty_QMARK_.call(null,inst_32317);
var inst_32344 = inst_32318.call(null,inst_32326);
var inst_32345 = cljs.core.not.call(null,inst_32344);
var inst_32346 = ((inst_32343) && (inst_32345));
var state_32366__$1 = state_32366;
var statearr_32416_32468 = state_32366__$1;
(statearr_32416_32468[(2)] = inst_32346);

(statearr_32416_32468[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (10))){
var inst_32268 = (state_32366[(8)]);
var inst_32289 = (state_32366[(2)]);
var inst_32290 = cljs.core.get.call(null,inst_32289,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32291 = cljs.core.get.call(null,inst_32289,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32292 = cljs.core.get.call(null,inst_32289,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32293 = inst_32268;
var state_32366__$1 = (function (){var statearr_32417 = state_32366;
(statearr_32417[(16)] = inst_32291);

(statearr_32417[(17)] = inst_32292);

(statearr_32417[(7)] = inst_32293);

(statearr_32417[(18)] = inst_32290);

return statearr_32417;
})();
var statearr_32418_32469 = state_32366__$1;
(statearr_32418_32469[(2)] = null);

(statearr_32418_32469[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (18))){
var inst_32308 = (state_32366[(2)]);
var state_32366__$1 = state_32366;
var statearr_32419_32470 = state_32366__$1;
(statearr_32419_32470[(2)] = inst_32308);

(statearr_32419_32470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (37))){
var state_32366__$1 = state_32366;
var statearr_32420_32471 = state_32366__$1;
(statearr_32420_32471[(2)] = null);

(statearr_32420_32471[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32367 === (8))){
var inst_32268 = (state_32366[(8)]);
var inst_32286 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32268);
var state_32366__$1 = state_32366;
var statearr_32421_32472 = state_32366__$1;
(statearr_32421_32472[(2)] = inst_32286);

(statearr_32421_32472[(1)] = (10));


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
});})(c__31367__auto___32426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31272__auto__,c__31367__auto___32426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31273__auto__ = null;
var cljs$core$async$mix_$_state_machine__31273__auto____0 = (function (){
var statearr_32422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32422[(0)] = cljs$core$async$mix_$_state_machine__31273__auto__);

(statearr_32422[(1)] = (1));

return statearr_32422;
});
var cljs$core$async$mix_$_state_machine__31273__auto____1 = (function (state_32366){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_32366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e32423){if((e32423 instanceof Object)){
var ex__31276__auto__ = e32423;
var statearr_32424_32473 = state_32366;
(statearr_32424_32473[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32474 = state_32366;
state_32366 = G__32474;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31273__auto__ = function(state_32366){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31273__auto____1.call(this,state_32366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31273__auto____0;
cljs$core$async$mix_$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31273__auto____1;
return cljs$core$async$mix_$_state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___32426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31369__auto__ = (function (){var statearr_32425 = f__31368__auto__.call(null);
(statearr_32425[(6)] = c__31367__auto___32426);

return statearr_32425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___32426,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32476 = arguments.length;
switch (G__32476) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32480 = arguments.length;
switch (G__32480) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__32478_SHARP_){
if(cljs.core.truth_(p1__32478_SHARP_.call(null,topic))){
return p1__32478_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32478_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32481 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32481 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32482){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32482 = meta32482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32483,meta32482__$1){
var self__ = this;
var _32483__$1 = this;
return (new cljs.core.async.t_cljs$core$async32481(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32482__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32483){
var self__ = this;
var _32483__$1 = this;
return self__.meta32482;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32481.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32481.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32481.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32481.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32481.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32481.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32481.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32481.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32482","meta32482",1843600255,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32481";

cljs.core.async.t_cljs$core$async32481.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32481");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32481.
 */
cljs.core.async.__GT_t_cljs$core$async32481 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32481(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32482){
return (new cljs.core.async.t_cljs$core$async32481(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32482));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32481(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31367__auto___32601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___32601,mults,ensure_mult,p){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___32601,mults,ensure_mult,p){
return (function (state_32555){
var state_val_32556 = (state_32555[(1)]);
if((state_val_32556 === (7))){
var inst_32551 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32557_32602 = state_32555__$1;
(statearr_32557_32602[(2)] = inst_32551);

(statearr_32557_32602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (20))){
var state_32555__$1 = state_32555;
var statearr_32558_32603 = state_32555__$1;
(statearr_32558_32603[(2)] = null);

(statearr_32558_32603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (1))){
var state_32555__$1 = state_32555;
var statearr_32559_32604 = state_32555__$1;
(statearr_32559_32604[(2)] = null);

(statearr_32559_32604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (24))){
var inst_32534 = (state_32555[(7)]);
var inst_32543 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32534);
var state_32555__$1 = state_32555;
var statearr_32560_32605 = state_32555__$1;
(statearr_32560_32605[(2)] = inst_32543);

(statearr_32560_32605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (4))){
var inst_32486 = (state_32555[(8)]);
var inst_32486__$1 = (state_32555[(2)]);
var inst_32487 = (inst_32486__$1 == null);
var state_32555__$1 = (function (){var statearr_32561 = state_32555;
(statearr_32561[(8)] = inst_32486__$1);

return statearr_32561;
})();
if(cljs.core.truth_(inst_32487)){
var statearr_32562_32606 = state_32555__$1;
(statearr_32562_32606[(1)] = (5));

} else {
var statearr_32563_32607 = state_32555__$1;
(statearr_32563_32607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (15))){
var inst_32528 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32564_32608 = state_32555__$1;
(statearr_32564_32608[(2)] = inst_32528);

(statearr_32564_32608[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (21))){
var inst_32548 = (state_32555[(2)]);
var state_32555__$1 = (function (){var statearr_32565 = state_32555;
(statearr_32565[(9)] = inst_32548);

return statearr_32565;
})();
var statearr_32566_32609 = state_32555__$1;
(statearr_32566_32609[(2)] = null);

(statearr_32566_32609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (13))){
var inst_32510 = (state_32555[(10)]);
var inst_32512 = cljs.core.chunked_seq_QMARK_.call(null,inst_32510);
var state_32555__$1 = state_32555;
if(inst_32512){
var statearr_32567_32610 = state_32555__$1;
(statearr_32567_32610[(1)] = (16));

} else {
var statearr_32568_32611 = state_32555__$1;
(statearr_32568_32611[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (22))){
var inst_32540 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32540)){
var statearr_32569_32612 = state_32555__$1;
(statearr_32569_32612[(1)] = (23));

} else {
var statearr_32570_32613 = state_32555__$1;
(statearr_32570_32613[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (6))){
var inst_32534 = (state_32555[(7)]);
var inst_32486 = (state_32555[(8)]);
var inst_32536 = (state_32555[(11)]);
var inst_32534__$1 = topic_fn.call(null,inst_32486);
var inst_32535 = cljs.core.deref.call(null,mults);
var inst_32536__$1 = cljs.core.get.call(null,inst_32535,inst_32534__$1);
var state_32555__$1 = (function (){var statearr_32571 = state_32555;
(statearr_32571[(7)] = inst_32534__$1);

(statearr_32571[(11)] = inst_32536__$1);

return statearr_32571;
})();
if(cljs.core.truth_(inst_32536__$1)){
var statearr_32572_32614 = state_32555__$1;
(statearr_32572_32614[(1)] = (19));

} else {
var statearr_32573_32615 = state_32555__$1;
(statearr_32573_32615[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (25))){
var inst_32545 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32574_32616 = state_32555__$1;
(statearr_32574_32616[(2)] = inst_32545);

(statearr_32574_32616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (17))){
var inst_32510 = (state_32555[(10)]);
var inst_32519 = cljs.core.first.call(null,inst_32510);
var inst_32520 = cljs.core.async.muxch_STAR_.call(null,inst_32519);
var inst_32521 = cljs.core.async.close_BANG_.call(null,inst_32520);
var inst_32522 = cljs.core.next.call(null,inst_32510);
var inst_32496 = inst_32522;
var inst_32497 = null;
var inst_32498 = (0);
var inst_32499 = (0);
var state_32555__$1 = (function (){var statearr_32575 = state_32555;
(statearr_32575[(12)] = inst_32498);

(statearr_32575[(13)] = inst_32521);

(statearr_32575[(14)] = inst_32499);

(statearr_32575[(15)] = inst_32496);

(statearr_32575[(16)] = inst_32497);

return statearr_32575;
})();
var statearr_32576_32617 = state_32555__$1;
(statearr_32576_32617[(2)] = null);

(statearr_32576_32617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (3))){
var inst_32553 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32555__$1,inst_32553);
} else {
if((state_val_32556 === (12))){
var inst_32530 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32577_32618 = state_32555__$1;
(statearr_32577_32618[(2)] = inst_32530);

(statearr_32577_32618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (2))){
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32555__$1,(4),ch);
} else {
if((state_val_32556 === (23))){
var state_32555__$1 = state_32555;
var statearr_32578_32619 = state_32555__$1;
(statearr_32578_32619[(2)] = null);

(statearr_32578_32619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (19))){
var inst_32486 = (state_32555[(8)]);
var inst_32536 = (state_32555[(11)]);
var inst_32538 = cljs.core.async.muxch_STAR_.call(null,inst_32536);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32555__$1,(22),inst_32538,inst_32486);
} else {
if((state_val_32556 === (11))){
var inst_32496 = (state_32555[(15)]);
var inst_32510 = (state_32555[(10)]);
var inst_32510__$1 = cljs.core.seq.call(null,inst_32496);
var state_32555__$1 = (function (){var statearr_32579 = state_32555;
(statearr_32579[(10)] = inst_32510__$1);

return statearr_32579;
})();
if(inst_32510__$1){
var statearr_32580_32620 = state_32555__$1;
(statearr_32580_32620[(1)] = (13));

} else {
var statearr_32581_32621 = state_32555__$1;
(statearr_32581_32621[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (9))){
var inst_32532 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32582_32622 = state_32555__$1;
(statearr_32582_32622[(2)] = inst_32532);

(statearr_32582_32622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (5))){
var inst_32493 = cljs.core.deref.call(null,mults);
var inst_32494 = cljs.core.vals.call(null,inst_32493);
var inst_32495 = cljs.core.seq.call(null,inst_32494);
var inst_32496 = inst_32495;
var inst_32497 = null;
var inst_32498 = (0);
var inst_32499 = (0);
var state_32555__$1 = (function (){var statearr_32583 = state_32555;
(statearr_32583[(12)] = inst_32498);

(statearr_32583[(14)] = inst_32499);

(statearr_32583[(15)] = inst_32496);

(statearr_32583[(16)] = inst_32497);

return statearr_32583;
})();
var statearr_32584_32623 = state_32555__$1;
(statearr_32584_32623[(2)] = null);

(statearr_32584_32623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (14))){
var state_32555__$1 = state_32555;
var statearr_32588_32624 = state_32555__$1;
(statearr_32588_32624[(2)] = null);

(statearr_32588_32624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (16))){
var inst_32510 = (state_32555[(10)]);
var inst_32514 = cljs.core.chunk_first.call(null,inst_32510);
var inst_32515 = cljs.core.chunk_rest.call(null,inst_32510);
var inst_32516 = cljs.core.count.call(null,inst_32514);
var inst_32496 = inst_32515;
var inst_32497 = inst_32514;
var inst_32498 = inst_32516;
var inst_32499 = (0);
var state_32555__$1 = (function (){var statearr_32589 = state_32555;
(statearr_32589[(12)] = inst_32498);

(statearr_32589[(14)] = inst_32499);

(statearr_32589[(15)] = inst_32496);

(statearr_32589[(16)] = inst_32497);

return statearr_32589;
})();
var statearr_32590_32625 = state_32555__$1;
(statearr_32590_32625[(2)] = null);

(statearr_32590_32625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (10))){
var inst_32498 = (state_32555[(12)]);
var inst_32499 = (state_32555[(14)]);
var inst_32496 = (state_32555[(15)]);
var inst_32497 = (state_32555[(16)]);
var inst_32504 = cljs.core._nth.call(null,inst_32497,inst_32499);
var inst_32505 = cljs.core.async.muxch_STAR_.call(null,inst_32504);
var inst_32506 = cljs.core.async.close_BANG_.call(null,inst_32505);
var inst_32507 = (inst_32499 + (1));
var tmp32585 = inst_32498;
var tmp32586 = inst_32496;
var tmp32587 = inst_32497;
var inst_32496__$1 = tmp32586;
var inst_32497__$1 = tmp32587;
var inst_32498__$1 = tmp32585;
var inst_32499__$1 = inst_32507;
var state_32555__$1 = (function (){var statearr_32591 = state_32555;
(statearr_32591[(12)] = inst_32498__$1);

(statearr_32591[(17)] = inst_32506);

(statearr_32591[(14)] = inst_32499__$1);

(statearr_32591[(15)] = inst_32496__$1);

(statearr_32591[(16)] = inst_32497__$1);

return statearr_32591;
})();
var statearr_32592_32626 = state_32555__$1;
(statearr_32592_32626[(2)] = null);

(statearr_32592_32626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (18))){
var inst_32525 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32593_32627 = state_32555__$1;
(statearr_32593_32627[(2)] = inst_32525);

(statearr_32593_32627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (8))){
var inst_32498 = (state_32555[(12)]);
var inst_32499 = (state_32555[(14)]);
var inst_32501 = (inst_32499 < inst_32498);
var inst_32502 = inst_32501;
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32502)){
var statearr_32594_32628 = state_32555__$1;
(statearr_32594_32628[(1)] = (10));

} else {
var statearr_32595_32629 = state_32555__$1;
(statearr_32595_32629[(1)] = (11));

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
}
}
}
}
}
}
});})(c__31367__auto___32601,mults,ensure_mult,p))
;
return ((function (switch__31272__auto__,c__31367__auto___32601,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31273__auto__ = null;
var cljs$core$async$state_machine__31273__auto____0 = (function (){
var statearr_32596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32596[(0)] = cljs$core$async$state_machine__31273__auto__);

(statearr_32596[(1)] = (1));

return statearr_32596;
});
var cljs$core$async$state_machine__31273__auto____1 = (function (state_32555){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_32555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e32597){if((e32597 instanceof Object)){
var ex__31276__auto__ = e32597;
var statearr_32598_32630 = state_32555;
(statearr_32598_32630[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32631 = state_32555;
state_32555 = G__32631;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$state_machine__31273__auto__ = function(state_32555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31273__auto____1.call(this,state_32555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31273__auto____0;
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31273__auto____1;
return cljs$core$async$state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___32601,mults,ensure_mult,p))
})();
var state__31369__auto__ = (function (){var statearr_32599 = f__31368__auto__.call(null);
(statearr_32599[(6)] = c__31367__auto___32601);

return statearr_32599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___32601,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32633 = arguments.length;
switch (G__32633) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32636 = arguments.length;
switch (G__32636) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32639 = arguments.length;
switch (G__32639) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31367__auto___32706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___32706,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___32706,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32678){
var state_val_32679 = (state_32678[(1)]);
if((state_val_32679 === (7))){
var state_32678__$1 = state_32678;
var statearr_32680_32707 = state_32678__$1;
(statearr_32680_32707[(2)] = null);

(statearr_32680_32707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (1))){
var state_32678__$1 = state_32678;
var statearr_32681_32708 = state_32678__$1;
(statearr_32681_32708[(2)] = null);

(statearr_32681_32708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (4))){
var inst_32642 = (state_32678[(7)]);
var inst_32644 = (inst_32642 < cnt);
var state_32678__$1 = state_32678;
if(cljs.core.truth_(inst_32644)){
var statearr_32682_32709 = state_32678__$1;
(statearr_32682_32709[(1)] = (6));

} else {
var statearr_32683_32710 = state_32678__$1;
(statearr_32683_32710[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (15))){
var inst_32674 = (state_32678[(2)]);
var state_32678__$1 = state_32678;
var statearr_32684_32711 = state_32678__$1;
(statearr_32684_32711[(2)] = inst_32674);

(statearr_32684_32711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (13))){
var inst_32667 = cljs.core.async.close_BANG_.call(null,out);
var state_32678__$1 = state_32678;
var statearr_32685_32712 = state_32678__$1;
(statearr_32685_32712[(2)] = inst_32667);

(statearr_32685_32712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (6))){
var state_32678__$1 = state_32678;
var statearr_32686_32713 = state_32678__$1;
(statearr_32686_32713[(2)] = null);

(statearr_32686_32713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (3))){
var inst_32676 = (state_32678[(2)]);
var state_32678__$1 = state_32678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32678__$1,inst_32676);
} else {
if((state_val_32679 === (12))){
var inst_32664 = (state_32678[(8)]);
var inst_32664__$1 = (state_32678[(2)]);
var inst_32665 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32664__$1);
var state_32678__$1 = (function (){var statearr_32687 = state_32678;
(statearr_32687[(8)] = inst_32664__$1);

return statearr_32687;
})();
if(cljs.core.truth_(inst_32665)){
var statearr_32688_32714 = state_32678__$1;
(statearr_32688_32714[(1)] = (13));

} else {
var statearr_32689_32715 = state_32678__$1;
(statearr_32689_32715[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (2))){
var inst_32641 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32642 = (0);
var state_32678__$1 = (function (){var statearr_32690 = state_32678;
(statearr_32690[(9)] = inst_32641);

(statearr_32690[(7)] = inst_32642);

return statearr_32690;
})();
var statearr_32691_32716 = state_32678__$1;
(statearr_32691_32716[(2)] = null);

(statearr_32691_32716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (11))){
var inst_32642 = (state_32678[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32678,(10),Object,null,(9));
var inst_32651 = chs__$1.call(null,inst_32642);
var inst_32652 = done.call(null,inst_32642);
var inst_32653 = cljs.core.async.take_BANG_.call(null,inst_32651,inst_32652);
var state_32678__$1 = state_32678;
var statearr_32692_32717 = state_32678__$1;
(statearr_32692_32717[(2)] = inst_32653);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32678__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (9))){
var inst_32642 = (state_32678[(7)]);
var inst_32655 = (state_32678[(2)]);
var inst_32656 = (inst_32642 + (1));
var inst_32642__$1 = inst_32656;
var state_32678__$1 = (function (){var statearr_32693 = state_32678;
(statearr_32693[(10)] = inst_32655);

(statearr_32693[(7)] = inst_32642__$1);

return statearr_32693;
})();
var statearr_32694_32718 = state_32678__$1;
(statearr_32694_32718[(2)] = null);

(statearr_32694_32718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (5))){
var inst_32662 = (state_32678[(2)]);
var state_32678__$1 = (function (){var statearr_32695 = state_32678;
(statearr_32695[(11)] = inst_32662);

return statearr_32695;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32678__$1,(12),dchan);
} else {
if((state_val_32679 === (14))){
var inst_32664 = (state_32678[(8)]);
var inst_32669 = cljs.core.apply.call(null,f,inst_32664);
var state_32678__$1 = state_32678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32678__$1,(16),out,inst_32669);
} else {
if((state_val_32679 === (16))){
var inst_32671 = (state_32678[(2)]);
var state_32678__$1 = (function (){var statearr_32696 = state_32678;
(statearr_32696[(12)] = inst_32671);

return statearr_32696;
})();
var statearr_32697_32719 = state_32678__$1;
(statearr_32697_32719[(2)] = null);

(statearr_32697_32719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (10))){
var inst_32646 = (state_32678[(2)]);
var inst_32647 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32678__$1 = (function (){var statearr_32698 = state_32678;
(statearr_32698[(13)] = inst_32646);

return statearr_32698;
})();
var statearr_32699_32720 = state_32678__$1;
(statearr_32699_32720[(2)] = inst_32647);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32678__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32679 === (8))){
var inst_32660 = (state_32678[(2)]);
var state_32678__$1 = state_32678;
var statearr_32700_32721 = state_32678__$1;
(statearr_32700_32721[(2)] = inst_32660);

(statearr_32700_32721[(1)] = (5));


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
});})(c__31367__auto___32706,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31272__auto__,c__31367__auto___32706,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31273__auto__ = null;
var cljs$core$async$state_machine__31273__auto____0 = (function (){
var statearr_32701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32701[(0)] = cljs$core$async$state_machine__31273__auto__);

(statearr_32701[(1)] = (1));

return statearr_32701;
});
var cljs$core$async$state_machine__31273__auto____1 = (function (state_32678){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_32678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e32702){if((e32702 instanceof Object)){
var ex__31276__auto__ = e32702;
var statearr_32703_32722 = state_32678;
(statearr_32703_32722[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32723 = state_32678;
state_32678 = G__32723;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$state_machine__31273__auto__ = function(state_32678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31273__auto____1.call(this,state_32678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31273__auto____0;
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31273__auto____1;
return cljs$core$async$state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___32706,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31369__auto__ = (function (){var statearr_32704 = f__31368__auto__.call(null);
(statearr_32704[(6)] = c__31367__auto___32706);

return statearr_32704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___32706,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32726 = arguments.length;
switch (G__32726) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31367__auto___32780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___32780,out){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___32780,out){
return (function (state_32758){
var state_val_32759 = (state_32758[(1)]);
if((state_val_32759 === (7))){
var inst_32737 = (state_32758[(7)]);
var inst_32738 = (state_32758[(8)]);
var inst_32737__$1 = (state_32758[(2)]);
var inst_32738__$1 = cljs.core.nth.call(null,inst_32737__$1,(0),null);
var inst_32739 = cljs.core.nth.call(null,inst_32737__$1,(1),null);
var inst_32740 = (inst_32738__$1 == null);
var state_32758__$1 = (function (){var statearr_32760 = state_32758;
(statearr_32760[(7)] = inst_32737__$1);

(statearr_32760[(9)] = inst_32739);

(statearr_32760[(8)] = inst_32738__$1);

return statearr_32760;
})();
if(cljs.core.truth_(inst_32740)){
var statearr_32761_32781 = state_32758__$1;
(statearr_32761_32781[(1)] = (8));

} else {
var statearr_32762_32782 = state_32758__$1;
(statearr_32762_32782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (1))){
var inst_32727 = cljs.core.vec.call(null,chs);
var inst_32728 = inst_32727;
var state_32758__$1 = (function (){var statearr_32763 = state_32758;
(statearr_32763[(10)] = inst_32728);

return statearr_32763;
})();
var statearr_32764_32783 = state_32758__$1;
(statearr_32764_32783[(2)] = null);

(statearr_32764_32783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (4))){
var inst_32728 = (state_32758[(10)]);
var state_32758__$1 = state_32758;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32758__$1,(7),inst_32728);
} else {
if((state_val_32759 === (6))){
var inst_32754 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
var statearr_32765_32784 = state_32758__$1;
(statearr_32765_32784[(2)] = inst_32754);

(statearr_32765_32784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (3))){
var inst_32756 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32758__$1,inst_32756);
} else {
if((state_val_32759 === (2))){
var inst_32728 = (state_32758[(10)]);
var inst_32730 = cljs.core.count.call(null,inst_32728);
var inst_32731 = (inst_32730 > (0));
var state_32758__$1 = state_32758;
if(cljs.core.truth_(inst_32731)){
var statearr_32767_32785 = state_32758__$1;
(statearr_32767_32785[(1)] = (4));

} else {
var statearr_32768_32786 = state_32758__$1;
(statearr_32768_32786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (11))){
var inst_32728 = (state_32758[(10)]);
var inst_32747 = (state_32758[(2)]);
var tmp32766 = inst_32728;
var inst_32728__$1 = tmp32766;
var state_32758__$1 = (function (){var statearr_32769 = state_32758;
(statearr_32769[(10)] = inst_32728__$1);

(statearr_32769[(11)] = inst_32747);

return statearr_32769;
})();
var statearr_32770_32787 = state_32758__$1;
(statearr_32770_32787[(2)] = null);

(statearr_32770_32787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (9))){
var inst_32738 = (state_32758[(8)]);
var state_32758__$1 = state_32758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32758__$1,(11),out,inst_32738);
} else {
if((state_val_32759 === (5))){
var inst_32752 = cljs.core.async.close_BANG_.call(null,out);
var state_32758__$1 = state_32758;
var statearr_32771_32788 = state_32758__$1;
(statearr_32771_32788[(2)] = inst_32752);

(statearr_32771_32788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (10))){
var inst_32750 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
var statearr_32772_32789 = state_32758__$1;
(statearr_32772_32789[(2)] = inst_32750);

(statearr_32772_32789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (8))){
var inst_32737 = (state_32758[(7)]);
var inst_32739 = (state_32758[(9)]);
var inst_32728 = (state_32758[(10)]);
var inst_32738 = (state_32758[(8)]);
var inst_32742 = (function (){var cs = inst_32728;
var vec__32733 = inst_32737;
var v = inst_32738;
var c = inst_32739;
return ((function (cs,vec__32733,v,c,inst_32737,inst_32739,inst_32728,inst_32738,state_val_32759,c__31367__auto___32780,out){
return (function (p1__32724_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32724_SHARP_);
});
;})(cs,vec__32733,v,c,inst_32737,inst_32739,inst_32728,inst_32738,state_val_32759,c__31367__auto___32780,out))
})();
var inst_32743 = cljs.core.filterv.call(null,inst_32742,inst_32728);
var inst_32728__$1 = inst_32743;
var state_32758__$1 = (function (){var statearr_32773 = state_32758;
(statearr_32773[(10)] = inst_32728__$1);

return statearr_32773;
})();
var statearr_32774_32790 = state_32758__$1;
(statearr_32774_32790[(2)] = null);

(statearr_32774_32790[(1)] = (2));


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
});})(c__31367__auto___32780,out))
;
return ((function (switch__31272__auto__,c__31367__auto___32780,out){
return (function() {
var cljs$core$async$state_machine__31273__auto__ = null;
var cljs$core$async$state_machine__31273__auto____0 = (function (){
var statearr_32775 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32775[(0)] = cljs$core$async$state_machine__31273__auto__);

(statearr_32775[(1)] = (1));

return statearr_32775;
});
var cljs$core$async$state_machine__31273__auto____1 = (function (state_32758){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_32758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e32776){if((e32776 instanceof Object)){
var ex__31276__auto__ = e32776;
var statearr_32777_32791 = state_32758;
(statearr_32777_32791[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32792 = state_32758;
state_32758 = G__32792;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$state_machine__31273__auto__ = function(state_32758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31273__auto____1.call(this,state_32758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31273__auto____0;
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31273__auto____1;
return cljs$core$async$state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___32780,out))
})();
var state__31369__auto__ = (function (){var statearr_32778 = f__31368__auto__.call(null);
(statearr_32778[(6)] = c__31367__auto___32780);

return statearr_32778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___32780,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32794 = arguments.length;
switch (G__32794) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31367__auto___32839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___32839,out){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___32839,out){
return (function (state_32818){
var state_val_32819 = (state_32818[(1)]);
if((state_val_32819 === (7))){
var inst_32800 = (state_32818[(7)]);
var inst_32800__$1 = (state_32818[(2)]);
var inst_32801 = (inst_32800__$1 == null);
var inst_32802 = cljs.core.not.call(null,inst_32801);
var state_32818__$1 = (function (){var statearr_32820 = state_32818;
(statearr_32820[(7)] = inst_32800__$1);

return statearr_32820;
})();
if(inst_32802){
var statearr_32821_32840 = state_32818__$1;
(statearr_32821_32840[(1)] = (8));

} else {
var statearr_32822_32841 = state_32818__$1;
(statearr_32822_32841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (1))){
var inst_32795 = (0);
var state_32818__$1 = (function (){var statearr_32823 = state_32818;
(statearr_32823[(8)] = inst_32795);

return statearr_32823;
})();
var statearr_32824_32842 = state_32818__$1;
(statearr_32824_32842[(2)] = null);

(statearr_32824_32842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (4))){
var state_32818__$1 = state_32818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32818__$1,(7),ch);
} else {
if((state_val_32819 === (6))){
var inst_32813 = (state_32818[(2)]);
var state_32818__$1 = state_32818;
var statearr_32825_32843 = state_32818__$1;
(statearr_32825_32843[(2)] = inst_32813);

(statearr_32825_32843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (3))){
var inst_32815 = (state_32818[(2)]);
var inst_32816 = cljs.core.async.close_BANG_.call(null,out);
var state_32818__$1 = (function (){var statearr_32826 = state_32818;
(statearr_32826[(9)] = inst_32815);

return statearr_32826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32818__$1,inst_32816);
} else {
if((state_val_32819 === (2))){
var inst_32795 = (state_32818[(8)]);
var inst_32797 = (inst_32795 < n);
var state_32818__$1 = state_32818;
if(cljs.core.truth_(inst_32797)){
var statearr_32827_32844 = state_32818__$1;
(statearr_32827_32844[(1)] = (4));

} else {
var statearr_32828_32845 = state_32818__$1;
(statearr_32828_32845[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (11))){
var inst_32795 = (state_32818[(8)]);
var inst_32805 = (state_32818[(2)]);
var inst_32806 = (inst_32795 + (1));
var inst_32795__$1 = inst_32806;
var state_32818__$1 = (function (){var statearr_32829 = state_32818;
(statearr_32829[(8)] = inst_32795__$1);

(statearr_32829[(10)] = inst_32805);

return statearr_32829;
})();
var statearr_32830_32846 = state_32818__$1;
(statearr_32830_32846[(2)] = null);

(statearr_32830_32846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (9))){
var state_32818__$1 = state_32818;
var statearr_32831_32847 = state_32818__$1;
(statearr_32831_32847[(2)] = null);

(statearr_32831_32847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (5))){
var state_32818__$1 = state_32818;
var statearr_32832_32848 = state_32818__$1;
(statearr_32832_32848[(2)] = null);

(statearr_32832_32848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (10))){
var inst_32810 = (state_32818[(2)]);
var state_32818__$1 = state_32818;
var statearr_32833_32849 = state_32818__$1;
(statearr_32833_32849[(2)] = inst_32810);

(statearr_32833_32849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32819 === (8))){
var inst_32800 = (state_32818[(7)]);
var state_32818__$1 = state_32818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32818__$1,(11),out,inst_32800);
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
});})(c__31367__auto___32839,out))
;
return ((function (switch__31272__auto__,c__31367__auto___32839,out){
return (function() {
var cljs$core$async$state_machine__31273__auto__ = null;
var cljs$core$async$state_machine__31273__auto____0 = (function (){
var statearr_32834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32834[(0)] = cljs$core$async$state_machine__31273__auto__);

(statearr_32834[(1)] = (1));

return statearr_32834;
});
var cljs$core$async$state_machine__31273__auto____1 = (function (state_32818){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_32818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e32835){if((e32835 instanceof Object)){
var ex__31276__auto__ = e32835;
var statearr_32836_32850 = state_32818;
(statearr_32836_32850[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32851 = state_32818;
state_32818 = G__32851;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$state_machine__31273__auto__ = function(state_32818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31273__auto____1.call(this,state_32818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31273__auto____0;
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31273__auto____1;
return cljs$core$async$state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___32839,out))
})();
var state__31369__auto__ = (function (){var statearr_32837 = f__31368__auto__.call(null);
(statearr_32837[(6)] = c__31367__auto___32839);

return statearr_32837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___32839,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32853 = (function (f,ch,meta32854){
this.f = f;
this.ch = ch;
this.meta32854 = meta32854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32855,meta32854__$1){
var self__ = this;
var _32855__$1 = this;
return (new cljs.core.async.t_cljs$core$async32853(self__.f,self__.ch,meta32854__$1));
});

cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32855){
var self__ = this;
var _32855__$1 = this;
return self__.meta32854;
});

cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32856 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32856 = (function (f,ch,meta32854,_,fn1,meta32857){
this.f = f;
this.ch = ch;
this.meta32854 = meta32854;
this._ = _;
this.fn1 = fn1;
this.meta32857 = meta32857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32858,meta32857__$1){
var self__ = this;
var _32858__$1 = this;
return (new cljs.core.async.t_cljs$core$async32856(self__.f,self__.ch,self__.meta32854,self__._,self__.fn1,meta32857__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32858){
var self__ = this;
var _32858__$1 = this;
return self__.meta32857;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32856.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32852_SHARP_){
return f1.call(null,(((p1__32852_SHARP_ == null))?null:self__.f.call(null,p1__32852_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32856.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32854","meta32854",-1267057644,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32853","cljs.core.async/t_cljs$core$async32853",1340022764,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32857","meta32857",-733726070,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32856.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32856";

cljs.core.async.t_cljs$core$async32856.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32856");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32856.
 */
cljs.core.async.__GT_t_cljs$core$async32856 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32856(f__$1,ch__$1,meta32854__$1,___$2,fn1__$1,meta32857){
return (new cljs.core.async.t_cljs$core$async32856(f__$1,ch__$1,meta32854__$1,___$2,fn1__$1,meta32857));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32856(self__.f,self__.ch,self__.meta32854,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32854","meta32854",-1267057644,null)], null);
});

cljs.core.async.t_cljs$core$async32853.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32853";

cljs.core.async.t_cljs$core$async32853.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32853");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32853.
 */
cljs.core.async.__GT_t_cljs$core$async32853 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32853(f__$1,ch__$1,meta32854){
return (new cljs.core.async.t_cljs$core$async32853(f__$1,ch__$1,meta32854));
});

}

return (new cljs.core.async.t_cljs$core$async32853(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32859 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32859 = (function (f,ch,meta32860){
this.f = f;
this.ch = ch;
this.meta32860 = meta32860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32861,meta32860__$1){
var self__ = this;
var _32861__$1 = this;
return (new cljs.core.async.t_cljs$core$async32859(self__.f,self__.ch,meta32860__$1));
});

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32861){
var self__ = this;
var _32861__$1 = this;
return self__.meta32860;
});

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32859.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32860","meta32860",-1881999007,null)], null);
});

cljs.core.async.t_cljs$core$async32859.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32859";

cljs.core.async.t_cljs$core$async32859.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32859");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32859.
 */
cljs.core.async.__GT_t_cljs$core$async32859 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32859(f__$1,ch__$1,meta32860){
return (new cljs.core.async.t_cljs$core$async32859(f__$1,ch__$1,meta32860));
});

}

return (new cljs.core.async.t_cljs$core$async32859(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32862 = (function (p,ch,meta32863){
this.p = p;
this.ch = ch;
this.meta32863 = meta32863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32864,meta32863__$1){
var self__ = this;
var _32864__$1 = this;
return (new cljs.core.async.t_cljs$core$async32862(self__.p,self__.ch,meta32863__$1));
});

cljs.core.async.t_cljs$core$async32862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32864){
var self__ = this;
var _32864__$1 = this;
return self__.meta32863;
});

cljs.core.async.t_cljs$core$async32862.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32862.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32862.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32862.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32862.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32862.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32862.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32863","meta32863",-867901917,null)], null);
});

cljs.core.async.t_cljs$core$async32862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32862";

cljs.core.async.t_cljs$core$async32862.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32862");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32862.
 */
cljs.core.async.__GT_t_cljs$core$async32862 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32862(p__$1,ch__$1,meta32863){
return (new cljs.core.async.t_cljs$core$async32862(p__$1,ch__$1,meta32863));
});

}

return (new cljs.core.async.t_cljs$core$async32862(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32866 = arguments.length;
switch (G__32866) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31367__auto___32906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___32906,out){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___32906,out){
return (function (state_32887){
var state_val_32888 = (state_32887[(1)]);
if((state_val_32888 === (7))){
var inst_32883 = (state_32887[(2)]);
var state_32887__$1 = state_32887;
var statearr_32889_32907 = state_32887__$1;
(statearr_32889_32907[(2)] = inst_32883);

(statearr_32889_32907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (1))){
var state_32887__$1 = state_32887;
var statearr_32890_32908 = state_32887__$1;
(statearr_32890_32908[(2)] = null);

(statearr_32890_32908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (4))){
var inst_32869 = (state_32887[(7)]);
var inst_32869__$1 = (state_32887[(2)]);
var inst_32870 = (inst_32869__$1 == null);
var state_32887__$1 = (function (){var statearr_32891 = state_32887;
(statearr_32891[(7)] = inst_32869__$1);

return statearr_32891;
})();
if(cljs.core.truth_(inst_32870)){
var statearr_32892_32909 = state_32887__$1;
(statearr_32892_32909[(1)] = (5));

} else {
var statearr_32893_32910 = state_32887__$1;
(statearr_32893_32910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (6))){
var inst_32869 = (state_32887[(7)]);
var inst_32874 = p.call(null,inst_32869);
var state_32887__$1 = state_32887;
if(cljs.core.truth_(inst_32874)){
var statearr_32894_32911 = state_32887__$1;
(statearr_32894_32911[(1)] = (8));

} else {
var statearr_32895_32912 = state_32887__$1;
(statearr_32895_32912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (3))){
var inst_32885 = (state_32887[(2)]);
var state_32887__$1 = state_32887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32887__$1,inst_32885);
} else {
if((state_val_32888 === (2))){
var state_32887__$1 = state_32887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32887__$1,(4),ch);
} else {
if((state_val_32888 === (11))){
var inst_32877 = (state_32887[(2)]);
var state_32887__$1 = state_32887;
var statearr_32896_32913 = state_32887__$1;
(statearr_32896_32913[(2)] = inst_32877);

(statearr_32896_32913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (9))){
var state_32887__$1 = state_32887;
var statearr_32897_32914 = state_32887__$1;
(statearr_32897_32914[(2)] = null);

(statearr_32897_32914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (5))){
var inst_32872 = cljs.core.async.close_BANG_.call(null,out);
var state_32887__$1 = state_32887;
var statearr_32898_32915 = state_32887__$1;
(statearr_32898_32915[(2)] = inst_32872);

(statearr_32898_32915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (10))){
var inst_32880 = (state_32887[(2)]);
var state_32887__$1 = (function (){var statearr_32899 = state_32887;
(statearr_32899[(8)] = inst_32880);

return statearr_32899;
})();
var statearr_32900_32916 = state_32887__$1;
(statearr_32900_32916[(2)] = null);

(statearr_32900_32916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32888 === (8))){
var inst_32869 = (state_32887[(7)]);
var state_32887__$1 = state_32887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32887__$1,(11),out,inst_32869);
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
});})(c__31367__auto___32906,out))
;
return ((function (switch__31272__auto__,c__31367__auto___32906,out){
return (function() {
var cljs$core$async$state_machine__31273__auto__ = null;
var cljs$core$async$state_machine__31273__auto____0 = (function (){
var statearr_32901 = [null,null,null,null,null,null,null,null,null];
(statearr_32901[(0)] = cljs$core$async$state_machine__31273__auto__);

(statearr_32901[(1)] = (1));

return statearr_32901;
});
var cljs$core$async$state_machine__31273__auto____1 = (function (state_32887){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_32887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e32902){if((e32902 instanceof Object)){
var ex__31276__auto__ = e32902;
var statearr_32903_32917 = state_32887;
(statearr_32903_32917[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32918 = state_32887;
state_32887 = G__32918;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$state_machine__31273__auto__ = function(state_32887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31273__auto____1.call(this,state_32887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31273__auto____0;
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31273__auto____1;
return cljs$core$async$state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___32906,out))
})();
var state__31369__auto__ = (function (){var statearr_32904 = f__31368__auto__.call(null);
(statearr_32904[(6)] = c__31367__auto___32906);

return statearr_32904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___32906,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32920 = arguments.length;
switch (G__32920) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31367__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto__){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto__){
return (function (state_32983){
var state_val_32984 = (state_32983[(1)]);
if((state_val_32984 === (7))){
var inst_32979 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
var statearr_32985_33023 = state_32983__$1;
(statearr_32985_33023[(2)] = inst_32979);

(statearr_32985_33023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (20))){
var inst_32949 = (state_32983[(7)]);
var inst_32960 = (state_32983[(2)]);
var inst_32961 = cljs.core.next.call(null,inst_32949);
var inst_32935 = inst_32961;
var inst_32936 = null;
var inst_32937 = (0);
var inst_32938 = (0);
var state_32983__$1 = (function (){var statearr_32986 = state_32983;
(statearr_32986[(8)] = inst_32938);

(statearr_32986[(9)] = inst_32935);

(statearr_32986[(10)] = inst_32936);

(statearr_32986[(11)] = inst_32960);

(statearr_32986[(12)] = inst_32937);

return statearr_32986;
})();
var statearr_32987_33024 = state_32983__$1;
(statearr_32987_33024[(2)] = null);

(statearr_32987_33024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (1))){
var state_32983__$1 = state_32983;
var statearr_32988_33025 = state_32983__$1;
(statearr_32988_33025[(2)] = null);

(statearr_32988_33025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (4))){
var inst_32924 = (state_32983[(13)]);
var inst_32924__$1 = (state_32983[(2)]);
var inst_32925 = (inst_32924__$1 == null);
var state_32983__$1 = (function (){var statearr_32989 = state_32983;
(statearr_32989[(13)] = inst_32924__$1);

return statearr_32989;
})();
if(cljs.core.truth_(inst_32925)){
var statearr_32990_33026 = state_32983__$1;
(statearr_32990_33026[(1)] = (5));

} else {
var statearr_32991_33027 = state_32983__$1;
(statearr_32991_33027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (15))){
var state_32983__$1 = state_32983;
var statearr_32995_33028 = state_32983__$1;
(statearr_32995_33028[(2)] = null);

(statearr_32995_33028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (21))){
var state_32983__$1 = state_32983;
var statearr_32996_33029 = state_32983__$1;
(statearr_32996_33029[(2)] = null);

(statearr_32996_33029[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (13))){
var inst_32938 = (state_32983[(8)]);
var inst_32935 = (state_32983[(9)]);
var inst_32936 = (state_32983[(10)]);
var inst_32937 = (state_32983[(12)]);
var inst_32945 = (state_32983[(2)]);
var inst_32946 = (inst_32938 + (1));
var tmp32992 = inst_32935;
var tmp32993 = inst_32936;
var tmp32994 = inst_32937;
var inst_32935__$1 = tmp32992;
var inst_32936__$1 = tmp32993;
var inst_32937__$1 = tmp32994;
var inst_32938__$1 = inst_32946;
var state_32983__$1 = (function (){var statearr_32997 = state_32983;
(statearr_32997[(8)] = inst_32938__$1);

(statearr_32997[(9)] = inst_32935__$1);

(statearr_32997[(10)] = inst_32936__$1);

(statearr_32997[(12)] = inst_32937__$1);

(statearr_32997[(14)] = inst_32945);

return statearr_32997;
})();
var statearr_32998_33030 = state_32983__$1;
(statearr_32998_33030[(2)] = null);

(statearr_32998_33030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (22))){
var state_32983__$1 = state_32983;
var statearr_32999_33031 = state_32983__$1;
(statearr_32999_33031[(2)] = null);

(statearr_32999_33031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (6))){
var inst_32924 = (state_32983[(13)]);
var inst_32933 = f.call(null,inst_32924);
var inst_32934 = cljs.core.seq.call(null,inst_32933);
var inst_32935 = inst_32934;
var inst_32936 = null;
var inst_32937 = (0);
var inst_32938 = (0);
var state_32983__$1 = (function (){var statearr_33000 = state_32983;
(statearr_33000[(8)] = inst_32938);

(statearr_33000[(9)] = inst_32935);

(statearr_33000[(10)] = inst_32936);

(statearr_33000[(12)] = inst_32937);

return statearr_33000;
})();
var statearr_33001_33032 = state_32983__$1;
(statearr_33001_33032[(2)] = null);

(statearr_33001_33032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (17))){
var inst_32949 = (state_32983[(7)]);
var inst_32953 = cljs.core.chunk_first.call(null,inst_32949);
var inst_32954 = cljs.core.chunk_rest.call(null,inst_32949);
var inst_32955 = cljs.core.count.call(null,inst_32953);
var inst_32935 = inst_32954;
var inst_32936 = inst_32953;
var inst_32937 = inst_32955;
var inst_32938 = (0);
var state_32983__$1 = (function (){var statearr_33002 = state_32983;
(statearr_33002[(8)] = inst_32938);

(statearr_33002[(9)] = inst_32935);

(statearr_33002[(10)] = inst_32936);

(statearr_33002[(12)] = inst_32937);

return statearr_33002;
})();
var statearr_33003_33033 = state_32983__$1;
(statearr_33003_33033[(2)] = null);

(statearr_33003_33033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (3))){
var inst_32981 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32983__$1,inst_32981);
} else {
if((state_val_32984 === (12))){
var inst_32969 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
var statearr_33004_33034 = state_32983__$1;
(statearr_33004_33034[(2)] = inst_32969);

(statearr_33004_33034[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (2))){
var state_32983__$1 = state_32983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32983__$1,(4),in$);
} else {
if((state_val_32984 === (23))){
var inst_32977 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
var statearr_33005_33035 = state_32983__$1;
(statearr_33005_33035[(2)] = inst_32977);

(statearr_33005_33035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (19))){
var inst_32964 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
var statearr_33006_33036 = state_32983__$1;
(statearr_33006_33036[(2)] = inst_32964);

(statearr_33006_33036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (11))){
var inst_32949 = (state_32983[(7)]);
var inst_32935 = (state_32983[(9)]);
var inst_32949__$1 = cljs.core.seq.call(null,inst_32935);
var state_32983__$1 = (function (){var statearr_33007 = state_32983;
(statearr_33007[(7)] = inst_32949__$1);

return statearr_33007;
})();
if(inst_32949__$1){
var statearr_33008_33037 = state_32983__$1;
(statearr_33008_33037[(1)] = (14));

} else {
var statearr_33009_33038 = state_32983__$1;
(statearr_33009_33038[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (9))){
var inst_32971 = (state_32983[(2)]);
var inst_32972 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32983__$1 = (function (){var statearr_33010 = state_32983;
(statearr_33010[(15)] = inst_32971);

return statearr_33010;
})();
if(cljs.core.truth_(inst_32972)){
var statearr_33011_33039 = state_32983__$1;
(statearr_33011_33039[(1)] = (21));

} else {
var statearr_33012_33040 = state_32983__$1;
(statearr_33012_33040[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (5))){
var inst_32927 = cljs.core.async.close_BANG_.call(null,out);
var state_32983__$1 = state_32983;
var statearr_33013_33041 = state_32983__$1;
(statearr_33013_33041[(2)] = inst_32927);

(statearr_33013_33041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (14))){
var inst_32949 = (state_32983[(7)]);
var inst_32951 = cljs.core.chunked_seq_QMARK_.call(null,inst_32949);
var state_32983__$1 = state_32983;
if(inst_32951){
var statearr_33014_33042 = state_32983__$1;
(statearr_33014_33042[(1)] = (17));

} else {
var statearr_33015_33043 = state_32983__$1;
(statearr_33015_33043[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (16))){
var inst_32967 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
var statearr_33016_33044 = state_32983__$1;
(statearr_33016_33044[(2)] = inst_32967);

(statearr_33016_33044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (10))){
var inst_32938 = (state_32983[(8)]);
var inst_32936 = (state_32983[(10)]);
var inst_32943 = cljs.core._nth.call(null,inst_32936,inst_32938);
var state_32983__$1 = state_32983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32983__$1,(13),out,inst_32943);
} else {
if((state_val_32984 === (18))){
var inst_32949 = (state_32983[(7)]);
var inst_32958 = cljs.core.first.call(null,inst_32949);
var state_32983__$1 = state_32983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32983__$1,(20),out,inst_32958);
} else {
if((state_val_32984 === (8))){
var inst_32938 = (state_32983[(8)]);
var inst_32937 = (state_32983[(12)]);
var inst_32940 = (inst_32938 < inst_32937);
var inst_32941 = inst_32940;
var state_32983__$1 = state_32983;
if(cljs.core.truth_(inst_32941)){
var statearr_33017_33045 = state_32983__$1;
(statearr_33017_33045[(1)] = (10));

} else {
var statearr_33018_33046 = state_32983__$1;
(statearr_33018_33046[(1)] = (11));

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
}
}
}
}
});})(c__31367__auto__))
;
return ((function (switch__31272__auto__,c__31367__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31273__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31273__auto____0 = (function (){
var statearr_33019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33019[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31273__auto__);

(statearr_33019[(1)] = (1));

return statearr_33019;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31273__auto____1 = (function (state_32983){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_32983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e33020){if((e33020 instanceof Object)){
var ex__31276__auto__ = e33020;
var statearr_33021_33047 = state_32983;
(statearr_33021_33047[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33048 = state_32983;
state_32983 = G__33048;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31273__auto__ = function(state_32983){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31273__auto____1.call(this,state_32983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31273__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31273__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto__))
})();
var state__31369__auto__ = (function (){var statearr_33022 = f__31368__auto__.call(null);
(statearr_33022[(6)] = c__31367__auto__);

return statearr_33022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto__))
);

return c__31367__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33050 = arguments.length;
switch (G__33050) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33053 = arguments.length;
switch (G__33053) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33056 = arguments.length;
switch (G__33056) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31367__auto___33103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___33103,out){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___33103,out){
return (function (state_33080){
var state_val_33081 = (state_33080[(1)]);
if((state_val_33081 === (7))){
var inst_33075 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
var statearr_33082_33104 = state_33080__$1;
(statearr_33082_33104[(2)] = inst_33075);

(statearr_33082_33104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (1))){
var inst_33057 = null;
var state_33080__$1 = (function (){var statearr_33083 = state_33080;
(statearr_33083[(7)] = inst_33057);

return statearr_33083;
})();
var statearr_33084_33105 = state_33080__$1;
(statearr_33084_33105[(2)] = null);

(statearr_33084_33105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (4))){
var inst_33060 = (state_33080[(8)]);
var inst_33060__$1 = (state_33080[(2)]);
var inst_33061 = (inst_33060__$1 == null);
var inst_33062 = cljs.core.not.call(null,inst_33061);
var state_33080__$1 = (function (){var statearr_33085 = state_33080;
(statearr_33085[(8)] = inst_33060__$1);

return statearr_33085;
})();
if(inst_33062){
var statearr_33086_33106 = state_33080__$1;
(statearr_33086_33106[(1)] = (5));

} else {
var statearr_33087_33107 = state_33080__$1;
(statearr_33087_33107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (6))){
var state_33080__$1 = state_33080;
var statearr_33088_33108 = state_33080__$1;
(statearr_33088_33108[(2)] = null);

(statearr_33088_33108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (3))){
var inst_33077 = (state_33080[(2)]);
var inst_33078 = cljs.core.async.close_BANG_.call(null,out);
var state_33080__$1 = (function (){var statearr_33089 = state_33080;
(statearr_33089[(9)] = inst_33077);

return statearr_33089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33080__$1,inst_33078);
} else {
if((state_val_33081 === (2))){
var state_33080__$1 = state_33080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33080__$1,(4),ch);
} else {
if((state_val_33081 === (11))){
var inst_33060 = (state_33080[(8)]);
var inst_33069 = (state_33080[(2)]);
var inst_33057 = inst_33060;
var state_33080__$1 = (function (){var statearr_33090 = state_33080;
(statearr_33090[(7)] = inst_33057);

(statearr_33090[(10)] = inst_33069);

return statearr_33090;
})();
var statearr_33091_33109 = state_33080__$1;
(statearr_33091_33109[(2)] = null);

(statearr_33091_33109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (9))){
var inst_33060 = (state_33080[(8)]);
var state_33080__$1 = state_33080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33080__$1,(11),out,inst_33060);
} else {
if((state_val_33081 === (5))){
var inst_33060 = (state_33080[(8)]);
var inst_33057 = (state_33080[(7)]);
var inst_33064 = cljs.core._EQ_.call(null,inst_33060,inst_33057);
var state_33080__$1 = state_33080;
if(inst_33064){
var statearr_33093_33110 = state_33080__$1;
(statearr_33093_33110[(1)] = (8));

} else {
var statearr_33094_33111 = state_33080__$1;
(statearr_33094_33111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (10))){
var inst_33072 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
var statearr_33095_33112 = state_33080__$1;
(statearr_33095_33112[(2)] = inst_33072);

(statearr_33095_33112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (8))){
var inst_33057 = (state_33080[(7)]);
var tmp33092 = inst_33057;
var inst_33057__$1 = tmp33092;
var state_33080__$1 = (function (){var statearr_33096 = state_33080;
(statearr_33096[(7)] = inst_33057__$1);

return statearr_33096;
})();
var statearr_33097_33113 = state_33080__$1;
(statearr_33097_33113[(2)] = null);

(statearr_33097_33113[(1)] = (2));


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
});})(c__31367__auto___33103,out))
;
return ((function (switch__31272__auto__,c__31367__auto___33103,out){
return (function() {
var cljs$core$async$state_machine__31273__auto__ = null;
var cljs$core$async$state_machine__31273__auto____0 = (function (){
var statearr_33098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33098[(0)] = cljs$core$async$state_machine__31273__auto__);

(statearr_33098[(1)] = (1));

return statearr_33098;
});
var cljs$core$async$state_machine__31273__auto____1 = (function (state_33080){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_33080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e33099){if((e33099 instanceof Object)){
var ex__31276__auto__ = e33099;
var statearr_33100_33114 = state_33080;
(statearr_33100_33114[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33115 = state_33080;
state_33080 = G__33115;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$state_machine__31273__auto__ = function(state_33080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31273__auto____1.call(this,state_33080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31273__auto____0;
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31273__auto____1;
return cljs$core$async$state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___33103,out))
})();
var state__31369__auto__ = (function (){var statearr_33101 = f__31368__auto__.call(null);
(statearr_33101[(6)] = c__31367__auto___33103);

return statearr_33101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___33103,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33117 = arguments.length;
switch (G__33117) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31367__auto___33183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___33183,out){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___33183,out){
return (function (state_33155){
var state_val_33156 = (state_33155[(1)]);
if((state_val_33156 === (7))){
var inst_33151 = (state_33155[(2)]);
var state_33155__$1 = state_33155;
var statearr_33157_33184 = state_33155__$1;
(statearr_33157_33184[(2)] = inst_33151);

(statearr_33157_33184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33156 === (1))){
var inst_33118 = (new Array(n));
var inst_33119 = inst_33118;
var inst_33120 = (0);
var state_33155__$1 = (function (){var statearr_33158 = state_33155;
(statearr_33158[(7)] = inst_33119);

(statearr_33158[(8)] = inst_33120);

return statearr_33158;
})();
var statearr_33159_33185 = state_33155__$1;
(statearr_33159_33185[(2)] = null);

(statearr_33159_33185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33156 === (4))){
var inst_33123 = (state_33155[(9)]);
var inst_33123__$1 = (state_33155[(2)]);
var inst_33124 = (inst_33123__$1 == null);
var inst_33125 = cljs.core.not.call(null,inst_33124);
var state_33155__$1 = (function (){var statearr_33160 = state_33155;
(statearr_33160[(9)] = inst_33123__$1);

return statearr_33160;
})();
if(inst_33125){
var statearr_33161_33186 = state_33155__$1;
(statearr_33161_33186[(1)] = (5));

} else {
var statearr_33162_33187 = state_33155__$1;
(statearr_33162_33187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33156 === (15))){
var inst_33145 = (state_33155[(2)]);
var state_33155__$1 = state_33155;
var statearr_33163_33188 = state_33155__$1;
(statearr_33163_33188[(2)] = inst_33145);

(statearr_33163_33188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33156 === (13))){
var state_33155__$1 = state_33155;
var statearr_33164_33189 = state_33155__$1;
(statearr_33164_33189[(2)] = null);

(statearr_33164_33189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33156 === (6))){
var inst_33120 = (state_33155[(8)]);
var inst_33141 = (inst_33120 > (0));
var state_33155__$1 = state_33155;
if(cljs.core.truth_(inst_33141)){
var statearr_33165_33190 = state_33155__$1;
(statearr_33165_33190[(1)] = (12));

} else {
var statearr_33166_33191 = state_33155__$1;
(statearr_33166_33191[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33156 === (3))){
var inst_33153 = (state_33155[(2)]);
var state_33155__$1 = state_33155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33155__$1,inst_33153);
} else {
if((state_val_33156 === (12))){
var inst_33119 = (state_33155[(7)]);
var inst_33143 = cljs.core.vec.call(null,inst_33119);
var state_33155__$1 = state_33155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33155__$1,(15),out,inst_33143);
} else {
if((state_val_33156 === (2))){
var state_33155__$1 = state_33155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33155__$1,(4),ch);
} else {
if((state_val_33156 === (11))){
var inst_33135 = (state_33155[(2)]);
var inst_33136 = (new Array(n));
var inst_33119 = inst_33136;
var inst_33120 = (0);
var state_33155__$1 = (function (){var statearr_33167 = state_33155;
(statearr_33167[(7)] = inst_33119);

(statearr_33167[(8)] = inst_33120);

(statearr_33167[(10)] = inst_33135);

return statearr_33167;
})();
var statearr_33168_33192 = state_33155__$1;
(statearr_33168_33192[(2)] = null);

(statearr_33168_33192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33156 === (9))){
var inst_33119 = (state_33155[(7)]);
var inst_33133 = cljs.core.vec.call(null,inst_33119);
var state_33155__$1 = state_33155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33155__$1,(11),out,inst_33133);
} else {
if((state_val_33156 === (5))){
var inst_33119 = (state_33155[(7)]);
var inst_33128 = (state_33155[(11)]);
var inst_33123 = (state_33155[(9)]);
var inst_33120 = (state_33155[(8)]);
var inst_33127 = (inst_33119[inst_33120] = inst_33123);
var inst_33128__$1 = (inst_33120 + (1));
var inst_33129 = (inst_33128__$1 < n);
var state_33155__$1 = (function (){var statearr_33169 = state_33155;
(statearr_33169[(11)] = inst_33128__$1);

(statearr_33169[(12)] = inst_33127);

return statearr_33169;
})();
if(cljs.core.truth_(inst_33129)){
var statearr_33170_33193 = state_33155__$1;
(statearr_33170_33193[(1)] = (8));

} else {
var statearr_33171_33194 = state_33155__$1;
(statearr_33171_33194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33156 === (14))){
var inst_33148 = (state_33155[(2)]);
var inst_33149 = cljs.core.async.close_BANG_.call(null,out);
var state_33155__$1 = (function (){var statearr_33173 = state_33155;
(statearr_33173[(13)] = inst_33148);

return statearr_33173;
})();
var statearr_33174_33195 = state_33155__$1;
(statearr_33174_33195[(2)] = inst_33149);

(statearr_33174_33195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33156 === (10))){
var inst_33139 = (state_33155[(2)]);
var state_33155__$1 = state_33155;
var statearr_33175_33196 = state_33155__$1;
(statearr_33175_33196[(2)] = inst_33139);

(statearr_33175_33196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33156 === (8))){
var inst_33119 = (state_33155[(7)]);
var inst_33128 = (state_33155[(11)]);
var tmp33172 = inst_33119;
var inst_33119__$1 = tmp33172;
var inst_33120 = inst_33128;
var state_33155__$1 = (function (){var statearr_33176 = state_33155;
(statearr_33176[(7)] = inst_33119__$1);

(statearr_33176[(8)] = inst_33120);

return statearr_33176;
})();
var statearr_33177_33197 = state_33155__$1;
(statearr_33177_33197[(2)] = null);

(statearr_33177_33197[(1)] = (2));


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
});})(c__31367__auto___33183,out))
;
return ((function (switch__31272__auto__,c__31367__auto___33183,out){
return (function() {
var cljs$core$async$state_machine__31273__auto__ = null;
var cljs$core$async$state_machine__31273__auto____0 = (function (){
var statearr_33178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33178[(0)] = cljs$core$async$state_machine__31273__auto__);

(statearr_33178[(1)] = (1));

return statearr_33178;
});
var cljs$core$async$state_machine__31273__auto____1 = (function (state_33155){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_33155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e33179){if((e33179 instanceof Object)){
var ex__31276__auto__ = e33179;
var statearr_33180_33198 = state_33155;
(statearr_33180_33198[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33199 = state_33155;
state_33155 = G__33199;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$state_machine__31273__auto__ = function(state_33155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31273__auto____1.call(this,state_33155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31273__auto____0;
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31273__auto____1;
return cljs$core$async$state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___33183,out))
})();
var state__31369__auto__ = (function (){var statearr_33181 = f__31368__auto__.call(null);
(statearr_33181[(6)] = c__31367__auto___33183);

return statearr_33181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___33183,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33201 = arguments.length;
switch (G__33201) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31367__auto___33271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31367__auto___33271,out){
return (function (){
var f__31368__auto__ = (function (){var switch__31272__auto__ = ((function (c__31367__auto___33271,out){
return (function (state_33243){
var state_val_33244 = (state_33243[(1)]);
if((state_val_33244 === (7))){
var inst_33239 = (state_33243[(2)]);
var state_33243__$1 = state_33243;
var statearr_33245_33272 = state_33243__$1;
(statearr_33245_33272[(2)] = inst_33239);

(statearr_33245_33272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (1))){
var inst_33202 = [];
var inst_33203 = inst_33202;
var inst_33204 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33243__$1 = (function (){var statearr_33246 = state_33243;
(statearr_33246[(7)] = inst_33203);

(statearr_33246[(8)] = inst_33204);

return statearr_33246;
})();
var statearr_33247_33273 = state_33243__$1;
(statearr_33247_33273[(2)] = null);

(statearr_33247_33273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (4))){
var inst_33207 = (state_33243[(9)]);
var inst_33207__$1 = (state_33243[(2)]);
var inst_33208 = (inst_33207__$1 == null);
var inst_33209 = cljs.core.not.call(null,inst_33208);
var state_33243__$1 = (function (){var statearr_33248 = state_33243;
(statearr_33248[(9)] = inst_33207__$1);

return statearr_33248;
})();
if(inst_33209){
var statearr_33249_33274 = state_33243__$1;
(statearr_33249_33274[(1)] = (5));

} else {
var statearr_33250_33275 = state_33243__$1;
(statearr_33250_33275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (15))){
var inst_33233 = (state_33243[(2)]);
var state_33243__$1 = state_33243;
var statearr_33251_33276 = state_33243__$1;
(statearr_33251_33276[(2)] = inst_33233);

(statearr_33251_33276[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (13))){
var state_33243__$1 = state_33243;
var statearr_33252_33277 = state_33243__$1;
(statearr_33252_33277[(2)] = null);

(statearr_33252_33277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (6))){
var inst_33203 = (state_33243[(7)]);
var inst_33228 = inst_33203.length;
var inst_33229 = (inst_33228 > (0));
var state_33243__$1 = state_33243;
if(cljs.core.truth_(inst_33229)){
var statearr_33253_33278 = state_33243__$1;
(statearr_33253_33278[(1)] = (12));

} else {
var statearr_33254_33279 = state_33243__$1;
(statearr_33254_33279[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (3))){
var inst_33241 = (state_33243[(2)]);
var state_33243__$1 = state_33243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33243__$1,inst_33241);
} else {
if((state_val_33244 === (12))){
var inst_33203 = (state_33243[(7)]);
var inst_33231 = cljs.core.vec.call(null,inst_33203);
var state_33243__$1 = state_33243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33243__$1,(15),out,inst_33231);
} else {
if((state_val_33244 === (2))){
var state_33243__$1 = state_33243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33243__$1,(4),ch);
} else {
if((state_val_33244 === (11))){
var inst_33211 = (state_33243[(10)]);
var inst_33207 = (state_33243[(9)]);
var inst_33221 = (state_33243[(2)]);
var inst_33222 = [];
var inst_33223 = inst_33222.push(inst_33207);
var inst_33203 = inst_33222;
var inst_33204 = inst_33211;
var state_33243__$1 = (function (){var statearr_33255 = state_33243;
(statearr_33255[(7)] = inst_33203);

(statearr_33255[(11)] = inst_33223);

(statearr_33255[(12)] = inst_33221);

(statearr_33255[(8)] = inst_33204);

return statearr_33255;
})();
var statearr_33256_33280 = state_33243__$1;
(statearr_33256_33280[(2)] = null);

(statearr_33256_33280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (9))){
var inst_33203 = (state_33243[(7)]);
var inst_33219 = cljs.core.vec.call(null,inst_33203);
var state_33243__$1 = state_33243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33243__$1,(11),out,inst_33219);
} else {
if((state_val_33244 === (5))){
var inst_33211 = (state_33243[(10)]);
var inst_33204 = (state_33243[(8)]);
var inst_33207 = (state_33243[(9)]);
var inst_33211__$1 = f.call(null,inst_33207);
var inst_33212 = cljs.core._EQ_.call(null,inst_33211__$1,inst_33204);
var inst_33213 = cljs.core.keyword_identical_QMARK_.call(null,inst_33204,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33214 = ((inst_33212) || (inst_33213));
var state_33243__$1 = (function (){var statearr_33257 = state_33243;
(statearr_33257[(10)] = inst_33211__$1);

return statearr_33257;
})();
if(cljs.core.truth_(inst_33214)){
var statearr_33258_33281 = state_33243__$1;
(statearr_33258_33281[(1)] = (8));

} else {
var statearr_33259_33282 = state_33243__$1;
(statearr_33259_33282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (14))){
var inst_33236 = (state_33243[(2)]);
var inst_33237 = cljs.core.async.close_BANG_.call(null,out);
var state_33243__$1 = (function (){var statearr_33261 = state_33243;
(statearr_33261[(13)] = inst_33236);

return statearr_33261;
})();
var statearr_33262_33283 = state_33243__$1;
(statearr_33262_33283[(2)] = inst_33237);

(statearr_33262_33283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (10))){
var inst_33226 = (state_33243[(2)]);
var state_33243__$1 = state_33243;
var statearr_33263_33284 = state_33243__$1;
(statearr_33263_33284[(2)] = inst_33226);

(statearr_33263_33284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33244 === (8))){
var inst_33211 = (state_33243[(10)]);
var inst_33203 = (state_33243[(7)]);
var inst_33207 = (state_33243[(9)]);
var inst_33216 = inst_33203.push(inst_33207);
var tmp33260 = inst_33203;
var inst_33203__$1 = tmp33260;
var inst_33204 = inst_33211;
var state_33243__$1 = (function (){var statearr_33264 = state_33243;
(statearr_33264[(7)] = inst_33203__$1);

(statearr_33264[(14)] = inst_33216);

(statearr_33264[(8)] = inst_33204);

return statearr_33264;
})();
var statearr_33265_33285 = state_33243__$1;
(statearr_33265_33285[(2)] = null);

(statearr_33265_33285[(1)] = (2));


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
});})(c__31367__auto___33271,out))
;
return ((function (switch__31272__auto__,c__31367__auto___33271,out){
return (function() {
var cljs$core$async$state_machine__31273__auto__ = null;
var cljs$core$async$state_machine__31273__auto____0 = (function (){
var statearr_33266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33266[(0)] = cljs$core$async$state_machine__31273__auto__);

(statearr_33266[(1)] = (1));

return statearr_33266;
});
var cljs$core$async$state_machine__31273__auto____1 = (function (state_33243){
while(true){
var ret_value__31274__auto__ = (function (){try{while(true){
var result__31275__auto__ = switch__31272__auto__.call(null,state_33243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31275__auto__;
}
break;
}
}catch (e33267){if((e33267 instanceof Object)){
var ex__31276__auto__ = e33267;
var statearr_33268_33286 = state_33243;
(statearr_33268_33286[(5)] = ex__31276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33287 = state_33243;
state_33243 = G__33287;
continue;
} else {
return ret_value__31274__auto__;
}
break;
}
});
cljs$core$async$state_machine__31273__auto__ = function(state_33243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31273__auto____1.call(this,state_33243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31273__auto____0;
cljs$core$async$state_machine__31273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31273__auto____1;
return cljs$core$async$state_machine__31273__auto__;
})()
;})(switch__31272__auto__,c__31367__auto___33271,out))
})();
var state__31369__auto__ = (function (){var statearr_33269 = f__31368__auto__.call(null);
(statearr_33269[(6)] = c__31367__auto___33271);

return statearr_33269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31369__auto__);
});})(c__31367__auto___33271,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1548047559645
