// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">\u584A\u72C0\u904A\u6232</span><span id="Games_puzzle">\u96E3\u984C</span><span id="Games_maze">\u8FF7\u5BAB</span><span id="Games_bird">\u9CE5</span><span id="Games_turtle">\u6D77\u9F9C</span><span id="Games_movie">\u96FB\u5F71</span><span id="Games_music">\u97F3\u6A02</span><span id="Games_pondTutor">\u6C60\u5858\u5C0E\u5E2B</span><span id="Games_pond">\u6C60\u5858</span><span id="Games_genetics">\u907A\u50B3\u5B78</span><span id="Games_linesOfCode1">\u60A8\u75281\u884CJavaScript\u89E3\u6C7A\u4E86\u6B64\u7D1A\u5225\uFF1A</span><span id="Games_linesOfCode2">\u60A8\u7528%1\u884CJavaScript\u89E3\u6C7A\u4E86\u6B64\u7D1A\u5225\uFF1A</span><span id="Games_nextLevel">\u4F60\u662F\u5426\u6E96\u5099\u597D\u53C3\u52A0%1\u7D1A\uFF1F</span><span id="Games_finalLevel">\u4F60\u6E96\u5099\u597D\u8FCE\u63A5\u4E0B\u4E00\u500B\u6311\u6230\u4E86\u55CE\uFF1F</span><span id="Games_submitTitle">\u6A19\u984C:</span><span id="Games_linkTooltip">\u4FDD\u5B58\u4E26\u9023\u7D50\u5230\u584A\u3002</span><span id="Games_runTooltip">\u904B\u884C\u4F60\u7DE8\u5BEB\u5605\u7A0B\u5E8F\u3002</span><span id="Games_runProgram">\u904B\u884C\u8A08\u5283</span><span id="Games_resetTooltip">\u505C\u6B62\u7A0B\u5E8F\u4E26\u91CD\u7F6E\u7D1A\u5225\u3002</span><span id="Games_resetProgram">\u91CD\u8A2D</span><span id="Games_help">\u5E6B\u624B</span><span id="Games_dialogOk">\u4EF2\u53EF\u4EE5</span><span id="Games_dialogCancel">\u53D6\u6D88</span><span id="Games_catLogic">\u908F\u8F2F</span><span id="Games_catLoops">\u5FAA\u74B0</span><span id="Games_catMath">\u6578\u5B78</span><span id="Games_catText">\u767C\u77ED\u4FE1</span><span id="Games_catLists">\u4E00\u89BD</span><span id="Games_catColour">\u984F\u8272</span><span id="Games_catVariables">\u8B8A\u6578</span><span id="Games_catProcedures">\u529F\u80FD</span><span id="Games_httpRequestError">\u8ACB\u6C42\u6709\u554F\u984C\u3002</span><span id="Games_linkAlert">\u900F\u904E\u6B64\u9023\u7D50\u5171\u4EAB\u60A8\u7684\u584A\uFF1A\n\n%1</span><span id="Games_hashError">\u62B1\u6B49\uFF0C"%1"\u8207\u4EFB\u4F55\u4FDD\u5B58\u5605\u7A0B\u5E8F\u5514\u5C0D\u61C9\u3002</span><span id="Games_xmlError">\u7121\u6CD5\u52A0\u8F09\u5DF2\u4FDD\u5B58\u5605\u6587\u4EF6\u3002 \u6216\u8005\u4F62\u4FC2\u7528\u4E0D\u540C\u7248\u672C\u5605\u584A\u72C0\u5275\u5EFA\u5605\uFF1F</span><span id="Games_submitted">\u611F\u8B1D\u60A8\u70BA\u5462\u500B\u7A0B\u5E8F\uFF01  \u5982\u679C\u6211\u54CB\u8A13\u7DF4\u6709\u7D20\u7684\u7334\u5B50\u5605\u5DE5\u4F5C\u4EBA\u54E1\u559C\u6B61\u5B83\uFF0C\u4F62\u54CB\u5C07\u55BA\u5E7E\u65E5\u5167\u5C07\u4F62\u767C\u4F48\u5230\u756B\u5ECA\u3002</span><span id="Games_listVariable">\u5217\u8868</span><span id="Games_textVariable">\u767C\u77ED\u4FE1</span><span id="Games_breakLink">\u4E00\u65E6\u958B\u59CB\u7DE8\u8F2FJavaScript\uFF0C\u4F60\u5C31\u7121\u6CD5\u8FD4\u62B5\u7DE8\u8F2F\u584A\u3002 \u53EF\u5514\u53EF\u4EE5?</span><span id="Games_blocks">\u5C01\u9396</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.headerBar = function(opt_data, opt_ignored, opt_ijData) {
  return '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan(opt_data, null, opt_ijData) + ((opt_ijData.level) ? BlocklyGames.soy.levelLinks({suffix: '' + ((opt_data.levelLinkSuffix) ? soy.$$escapeHtml(opt_data.levelLinkSuffix) : '')}, null, opt_ijData) : '') + '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>' + ((opt_data.hasLinkButton) ? '&nbsp;<button id="linkButton" title="\u4FDD\u5B58\u4E26\u9023\u7D50\u5230\u584A\u3002"><img src="common/1x1.gif" class="link icon21"></button>' : '') + ((opt_data.hasHelpButton) ? '&nbsp;<button id="helpButton">\u5E6B\u624B</button>' : '') + ((opt_data.farLeftHtml) ? '&nbsp;' + soy.$$filterNoAutoescape(opt_data.farLeftHtml) : '') + '</td></tr></table>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.headerBar.soyTemplateName = 'BlocklyGames.soy.headerBar';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + '\u584A\u72C0\u904A\u6232</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.titleSpan.soyTemplateName = 'BlocklyGames.soy.titleSpan';
}


BlocklyGames.soy.levelLinks = function(opt_data, opt_ignored, opt_ijData) {
  var output = ' &nbsp; ';
  var iLimit215 = opt_ijData.maxLevel + 1;
  for (var i215 = 1; i215 < iLimit215; i215++) {
    var url__soy216 = '?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i215) + ((opt_data.suffix) ? '&' + soy.$$escapeHtml(opt_data.suffix) : '');
    output += ' ' + ((i215 == opt_ijData.level) ? '<span class="level_number level_done" id="level' + soy.$$escapeHtml(i215) + '">' + soy.$$escapeHtml(i215) + '</span>' : (i215 == opt_ijData.maxLevel) ? '<a class="level_number" id="level' + soy.$$escapeHtml(i215) + '" href="' + soy.$$escapeHtml(url__soy216) + '">' + soy.$$escapeHtml(i215) + '</a>' : '<a class="level_dot" id="level' + soy.$$escapeHtml(i215) + '" href="' + soy.$$escapeHtml(url__soy216) + '"></a>');
  }
  return output;
};
if (goog.DEBUG) {
  BlocklyGames.soy.levelLinks.soyTemplateName = 'BlocklyGames.soy.levelLinks';
}


BlocklyGames.soy.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.dialog.soyTemplateName = 'BlocklyGames.soy.dialog';
}


BlocklyGames.soy.doneDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u795D\u8CC0\uFF01</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">\u53D6\u6D88</button><button id="doneOk" class="secondary">\u4EF2\u53EF\u4EE5</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">\u5462\u500B\u7D1A\u5225\u4FC2\u6975\u5176\u56F0\u96E3\u5605\u3002 \u4F60\u60F3\u98DB\u5B83\uFF0C\u9032\u5165\u4E0B\u4E00\u5834\u6BD4\u8CFD\u55CE\uFF1F \u4F60\u7E3D\u662F\u53EF\u4EE5\u9072\u5572\u8FD4\u569F\u3002<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">\u53D6\u6D88</button><button id="abortOk" class="secondary">\u4EF2\u53EF\u4EE5</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.abortDialog.soyTemplateName = 'BlocklyGames.soy.abortDialog';
}


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.storageDialog.soyTemplateName = 'BlocklyGames.soy.storageDialog';
}


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u4EF2\u53EF\u4EE5</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
