﻿KindEditor.lang['code'] = "插入程序代码或脚本";
KindEditor.plugin('code', function(K) {
	var self = this, name = 'code';
	self.clickToolbar(name, function() {
		var lang = self.lang(name + '.'),
			html = ['<div style="padding:10px 20px;">',
				'<div class="ke-dialog-row">',
				"<select class='ke-code-type'> <option value=''>[请选择编程语言]</option> <option value='html'>HTML</option> <option value='css'>CSS</option> <option value='php'>PHP</option> <option value='javascript'>JavaScript</option> <option value='java'>Java</option> <option value='c'>C</option> <option value='cpp'>C++</option> <option value='sql'>SQL</option> <option value='xml'>XML</option> </select>",
				'</div>',
				'<textarea class="ke-textarea" style="width:408px;height:260px;"></textarea>',
				'</div>'].join(''),
			dialog = self.createDialog({
				name : name,
				width : 450,
				title : self.lang(name),
				body : html,
				yesBtn : {
					name : self.lang('yes'),
					click : function(e) {
						var type = K('.ke-code-type', dialog.div).val(),
							code = textarea.val(),
							cls = type === '' ? '' :  ' lang-' + type,
							html = '<pre class="sh_' + type + '">\n' + K.escape(code) + '</pre>';
						self.insertHtml(html).hideDialog().focus();
					}
				}
			}),
			textarea = K('textarea', dialog.div);
			textarea[0].focus();
	});
});