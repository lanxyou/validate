/*! validate-0.0.1 2014-01-27 23:19:46 */
define("crossjs/validate/0.0.1/config",[],function(){var a={elements:["select","option",":checkbox",":radio","textarea",":text",":password",":file"],attributes:["required","minlength","maxlength","min","max","digits","number","url","equalto","minto","maxto","remote"],rules:{required:function(a,b){var c;return/radio|checkbox/.test(a.prop("type"))?(c=a.prop("name"),c?!!$(a.prop("form")).find('[name="'+c+'"]:checked').length:a.is(":checked")):/\S/.test(b)},minlength:function(a,b,c){return b.length?b.length>=c:!0},maxlength:function(a,b,c){return b.length?b.length<=c:!0},min:function(a,b,c){return parseInt(b,10)>=c},max:function(a,b,c){return parseInt(b,10)<=c},equalto:function(a,b,c){return b===$(a.prop("form")).find('[name="'+c+'"]').val()},minto:function(a,b,c){return parseInt(b,10)>=parseInt($(a.prop("form")).find('[name="'+c+'"]').val(),10)},maxto:function(a,b,c){return parseInt(b,10)<=parseInt($(a.prop("form")).find('[name="'+c+'"]').val(),10)},digits:function(a,b){return!/\D/.test(b)},number:function(a,b){return!isNaN(b)},url:function(a,b){return/^http:\/\/((?:[\w\d][\w\d\-]*)(?:\.[\w\d][\w\d\-]*)*(?:\.\w{2,})+)(?:\/\S*)?$/i.test(b)}},messages:{required:"\u6b64\u9879\u5fc5\u586b",equalto:"\u4e24\u6b21\u8f93\u5165\u7684\u5185\u5bb9\u4e0d\u4e00\u81f4\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",minto:"\u4e0d\u80fd\u5c0f\u4e8e{0}",maxto:"\u4e0d\u80fd\u5927\u4e8e{0}",minlength:"\u8bf7\u8f93\u5165\u81f3\u5c11{0}\u4e2a\u5b57\u7b26",maxlength:"\u6700\u591a\u8f93\u5165{0}\u4e2a\u5b57\u7b26",password:"\u5bc6\u7801\u53ea\u80fd\u5305\u542bASCII\u5b57\u7b26",url:"\u8bf7\u8f93\u5165URL\u5730\u5740",digits:"\u8bf7\u8f93\u5165\u6570\u5b57",number:"\u8bf7\u8f93\u5165\u6570\u5b57",max:"\u4e0d\u80fd\u5927\u4e8e{0}",min:"\u4e0d\u80fd\u5c0f\u4e8e{0}"}};return a});