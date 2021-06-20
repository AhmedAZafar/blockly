// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Maze.soy.
 */

goog.provide('Maze.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Maze.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">mugi aurrera</span><span id="Maze_turnLeft">biratu ezker</span><span id="Maze_turnRight">biratu eskuin</span><span id="Maze_doCode">egin</span><span id="Maze_elseCode">bestela</span><span id="Maze_helpIfElse">If-else blokeek gauza bat edo bestea egingo dute.</span><span id="Maze_pathAhead">bidea badago aurrera</span><span id="Maze_pathLeft">bidea badago ezkerrera</span><span id="Maze_pathRight">bidea badago eskuinera</span><span id="Maze_repeatUntil">arte errepikatu</span><span id="Maze_moveForwardTooltip">Pegman aurreruntz tarte bat mugitzen du.</span><span id="Maze_turnTooltip">Pegman ezkerrerantz edo eskuinerantz 90 gradu \\nbiratzen du. </span><span id="Maze_ifTooltip">Esandako norantzan bidea badago, \\nekintza batzu burutu. </span><span id="Maze_ifelseTooltip">Esandako norantzan bidea badago, \\nekintzen lehenengo blokea burutu. \\nBestela, ekintzen bigarren blokea \\nburutu. </span><span id="Maze_whileTooltip">Errepikatu barruko ekintzak bukaera punturaino \\niritsi arte. </span><span id="Maze_capacity0">%0 bloke geratzen dira.</span><span id="Maze_capacity1">Bloke %1 geratzen da.</span><span id="Maze_capacity2">%2 bloke geratzen dira.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Labirintoa', levelLinkSuffix: 'skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Jokalariari eginaraziko dio blokeek diotena."><img src="common/1x1.gif" class="run icon21"> Programa exekutatu</button><button id="resetButton" class="primary" style="display: none" title="Jarri berriz jokalaria labirintoaren hasieran."><img src="common/1x1.gif" class="stop icon21"> Berriz hasi</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Elkartu \'mugi aurrera\' bloke pare bat helmugara iritsi ahal izateko.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Maila honetan, bloke guztiak lan-eremu txurian pilatu behar dituzu.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Zure programa exekutatu ikusteko zer gertatzen den.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Zure programak ez du labirintoa ebatzi. Sakatu \'Reset\' eta saiatu berriz.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Ordenagailuek memoria-kantitate mugatua dute. Saia zaitez bide honen bukaerara iristen soilik bi bloke erabiliz. Bloke bat behin baino gehiagotan erabiltzeko, erabili \'errepikatu\'.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Maila honetarako existitzen diren bloke guztiak erabili dituzu. Bloke berria eratzeko, lehenengo existitzen den blokea ezabatu beharko duzu.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\'errepikatu\' bloke baten barruan bloke bat baino gehiago erabili dezakezu.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Hauta ezazu zure jokalaririk gogokoena menu honetatik.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\'if\' bloke batek zeozer egingo du bakarrik baldintza betetzen bada. Saiatu ezkerrera biratzen ezkerrera bidea baldin badago.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Click on %1 in the \'if\' block to change its condition.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>If-else blokeek gauza bat edo bestea egingo dute.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Labirinto zail honi irtenbidea aurkitu diezaiokezu? Saia zaitez ezker-pareta jarraitzen.' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
};
if (goog.DEBUG) {
  Maze.soy.start.soyTemplateName = 'Maze.soy.start';
}


Maze.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};
if (goog.DEBUG) {
  Maze.soy.toolbox.soyTemplateName = 'Maze.soy.toolbox';
}
