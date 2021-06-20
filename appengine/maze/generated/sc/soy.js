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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">movi ananti</span><span id="Maze_turnLeft">furria a manu manca</span><span id="Maze_turnRight">furria a manu dereta</span><span id="Maze_doCode">fai</span><span id="Maze_elseCode">sinuncas</span><span id="Maze_helpIfElse">Su brocu si-sinuncas fait una cosa o s\'\u00E0tera.</span><span id="Maze_pathAhead">si tenis caminu ananti</span><span id="Maze_pathLeft">si tenis caminu a manu manca</span><span id="Maze_pathRight">si tenis caminu a manu dereta</span><span id="Maze_repeatUntil">repiti fintzas</span><span id="Maze_moveForwardTooltip">Movi su giogadori ananti de unu.</span><span id="Maze_turnTooltip">Furria su giogadori a manu manca o dereta de 90 \\ngradus. </span><span id="Maze_ifTooltip">Si ddu est unu caminu anca as nau, \\ninsaras fai su de fai. </span><span id="Maze_ifelseTooltip">Si tenis caminu in d-una andada, \\nfai su primu brocu de atzionis. \\nSinuncas, fai su segundu brocu de \\natzionis. </span><span id="Maze_whileTooltip">Repiti s\'atzioni sceberada fintzas a lompi.</span><span id="Maze_capacity0">Abarrant %0 brocus.</span><span id="Maze_capacity1">Abarrant %1 brocus.</span><span id="Maze_capacity2">Abarrant %2 brocus.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Labirintu', levelLinkSuffix: 'skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Lassa fai a su giogadori su chi nant is brocus."><img src="common/1x1.gif" class="run icon21"> Arr\u00F2llia su Programa</button><button id="resetButton" class="primary" style="display: none" title="Torra a ponni su giogadori a su comintzu de su \\nlabirintu. "><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Apilla pariga de brocus \'movi ananti\' po m\'agiudai a fai su chi depu.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>In custu livellu, depis apillai a pari totu is brocus in s\'area bianca.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Arr\u00F2llia su programa po biri ita fait.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Su programa no arr\u00E8solvit su labirintu. Craca \'Reset\' e torra a provai.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Arriba a sa fini de custu caminu cun duus brocus sceti. Impera \'repit\' po fai arrolliai unu brocu prus de una borta.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>As imperau totu is brocus po custu livellu. Po tenni unu brocu nou, ndi depis bogai unu innantis.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Podis ponni prus de unu brocu aintru de su brocu\'repiti\'.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Scebera de custu menu su giogadori chi preferis.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Su brocu \'si\' fait calincuna cosa sceti si sa cunditzioni est bera. Prova a furriai a manu manca si nci est unu caminu a manu manca.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Craca in %1 in su brocu \'si\' po mudai sa cunditzioni.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Su brocu si-sinuncas fait una cosa o s\'\u00E0tera.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Si dda fais a arr\u00E8solvi custu labirintu introbeddau? Prova sighendi su muru a manu manca. Po programadoris espertus sceti!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
