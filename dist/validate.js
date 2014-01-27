/*! validate-0.0.1 2014-01-27 23:19:46 */
define("crossjs/validate/0.0.1/validate",["crossjs/util/0.0.1/util","crossjs/class/0.0.3/class","$","crossjs/class/0.0.3/super","./config"],function(a){"use strict";var b=a("crossjs/util/0.0.1/util"),c=a("crossjs/class/0.0.3/class"),d=a("./config"),e=d.elements.join(","),f=d.attributes,g=d.rules,h=d.messages,i=new c({__construct:function(a){var b=this,c=$(a.form);0!==c.length&&(b.rules=a.rules||{},b.messages=a.messages||{},b.pending=0,b.submitted=!1,b.errorElements=$(),b.form=c.attr({novalidate:"novalidate"}).on("submit",function(){return b.submitted?b.checkPending():b.validateForm(),!1}),a.eventType&&b.initElements(a.eventType))},initElements:function(a){var b=this;b.form.find(e).off(".validate").on(a+".validate",function(){b.validateElem($(this))})},validateForm:function(){var a=this;a.errorElements=$(),a.submitted=!0,a.form.find(e).filter(":enabled").each(function(){a.validateElem($(this))}),a.checkPending()},checkPending:function(){0===this.pending&&(this.submitted=!1,this.isValid()?this.fire("valid",this):(this.focusError(),this.fire("error",this)))},clearErrors:function(){var a=this;a.form.find(e).filter(":enabled").each(function(){a.removeError($(this))})},validateElem:function(a){var b=this,c=!0,d=a.prop("name"),e=a.val();b.removeError(a),$.each(f,function(f,g){var h=a.attr(g);return void 0===h||(h=isNaN(h)?h:+h,c=b.checkRule(d,g,a,e,h))?void 0:!1}),c!==!1&&b.rules[d]&&$.each(b.rules[d],function(f,g){return g=isNaN(g)?g:+g,c=b.checkRule(d,f,a,e,g),c?void 0:!1})},checkRule:function(a,b,c,d,e){var f;return"function"==typeof e?f=e.call(this,c,d):g[b]&&(f=g[b].call(this,c,d,e)),f||this.addError(c,this.getMessage(a,b,e)),f},getMessage:function(a,b,c){var d;return this.messages[a]&&(d=this.messages[a][b]),d||(d=h[b]),d?this.formatMessage(d,c):""},formatMessage:function(a,b){return a.replace(/\{0\}/g,b)},focusError:function(){this.errorElements.length&&this.errorElements.eq(0).focus()},addError:function(a,b){var c=a.data("wrap"),d=a.data("help");c||(c=a.closest(".form-group"),a.data("wrap",c)),d||(d=c.find(".help-block"),0===d.length&&(d=$('<div class="help-block"/>').appendTo(c)),a.data("help",d)),c.addClass("has-error"),d.text(b),this.errorElements=this.errorElements.add(a)},removeError:function(a){var c,d=a.data("wrap"),e=a.data("help");d||(d=a.closest(".form-group"),a.data("wrap",d)),e||(e=d.find(".help-block"),0===e.length&&(e=$('<div class="help-block"/>').appendTo(d)),a.data("help",e)),d.removeClass("has-error"),c=e.data("placeholder"),c?e.html(b.htmldecode(c)):e.empty(),this.errorElements=this.errorElements.not(a)},isValid:function(){return 0===this.pending&&0===this.errorElements.length}});return i.addRule=function(a){$.extend(!0,g,a)},i});