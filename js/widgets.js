/**
 --- WIDGETS CONTAINS ---
 1. Placeholder
 2. Debouncedresize
 */

/**--- 1. Placeholder ---*/
/*Placeholder. https://github.com/mathiasbynens/jquery-placeholder, http://mths.be/placeholder v2.0.8*/
(function(m,g,d){function r(b){var a={},c=/^jQuery\d+$/;d.each(b.attributes,function(b,d){d.specified&&!c.test(d.name)&&(a[d.name]=d.value)});return a}function h(b,a){var c=d(this);if(this.value==c.attr("placeholder")&&c.hasClass("placeholder"))if(c.data("placeholder-password")){c=c.hide().next().show().attr("id",c.removeAttr("id").data("placeholder-id"));if(!0===b)return c[0].value=a;c.focus()}else this.value="",c.removeClass("placeholder"),this==n()&&this.select()}function l(){var b,a=d(this),c= this.id;if(""==this.value){if("password"==this.type){if(!a.data("placeholder-textinput")){try{b=a.clone().attr({type:"text"})}catch(e){b=d("<input>").attr(d.extend(r(this),{type:"text"}))}b.removeAttr("name").data({"placeholder-password":a,"placeholder-id":c}).bind("focus.placeholder",h);a.data({"placeholder-textinput":b,"placeholder-id":c}).before(b)}a=a.removeAttr("id").hide().prev().attr("id",c).show()}a.addClass("placeholder");a[0].value=a.attr("placeholder")}else a.removeClass("placeholder")} function n(){try{return g.activeElement}catch(b){}}var f="[object OperaMini]"==Object.prototype.toString.call(m.operamini),k="placeholder"in g.createElement("input")&&!f,f="placeholder"in g.createElement("textarea")&&!f,e=d.fn,p=d.valHooks,q=d.propHooks;k&&f?(e=e.placeholder=function(){return this},e.input=e.textarea=!0):(e=e.placeholder=function(){this.filter((k?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":h,"blur.placeholder":l}).data("placeholder-enabled", !0).trigger("blur.placeholder");return this},e.input=k,e.textarea=f,e={get:function(b){var a=d(b),c=a.data("placeholder-password");return c?c[0].value:a.data("placeholder-enabled")&&a.hasClass("placeholder")?"":b.value},set:function(b,a){var c=d(b),e=c.data("placeholder-password");if(e)return e[0].value=a;if(!c.data("placeholder-enabled"))return b.value=a;""==a?(b.value=a,b!=n()&&l.call(b)):c.hasClass("placeholder")?h.call(b,!0,a)||(b.value=a):b.value=a;return c}},k||(p.input=e,q.value=e),f||(p.textarea= e, q.value=e),d(function(){d(g).delegate("form","submit.placeholder",function(){var b=d(".placeholder",this).each(h);setTimeout(function(){b.each(l)},10)})}),d(m).bind("beforeunload.placeholder",function(){d(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery);
/**--- Placeholder end ---*/

/**--- 2. Debouncedresize ---*/
/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work?
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
(function($) {

	var $event = $.event,
		$special,
		resizeTimeout;

	$special = $event.special.debouncedresize = {
		setup: function() {
			$( this ).on( "resize", $special.handler );
		},
		teardown: function() {
			$( this ).off( "resize", $special.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function() {
					// set correct event type
					event.type = "debouncedresize";
					$event.dispatch.apply( context, args );
				};

			if ( resizeTimeout ) {
				clearTimeout( resizeTimeout );
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout( dispatch, $special.threshold );
		},
		threshold: 150
	};

})(jQuery);
/**--- Debouncedresize end ---*/