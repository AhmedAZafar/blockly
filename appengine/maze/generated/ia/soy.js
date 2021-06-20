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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">avantiar</span><span id="Maze_turnLeft">girar a sinistra</span><span id="Maze_turnRight">girar a dextra</span><span id="Maze_doCode">face</span><span id="Maze_elseCode">si non</span><span id="Maze_helpIfElse">Un bloco "si/si non" face un cosa o le altere.</span><span id="Maze_pathAhead">si ha cammino avante</span><span id="Maze_pathLeft">si ha cammino a sinistra</span><span id="Maze_pathRight">si ha cammino a dextra</span><span id="Maze_repeatUntil">repeter usque a</span><span id="Maze_moveForwardTooltip">Face le jocator avantiar un spatio.</span><span id="Maze_turnTooltip">Gira le jocator a sinistra o a dextra de 90 grados.</span><span id="Maze_ifTooltip">Si existe un cammino in le direction \\nspecificate, alora face certe actiones. </span><span id="Maze_ifelseTooltip">Si existe un cammino in le direction \\nspecificate, alora face le prime bloco \\nde actiones. Si non, face le secunde \\nbloco de actiones. </span><span id="Maze_whileTooltip">Repeter le actiones continite usque al puncto de \\nfin. </span><span id="Maze_capacity0">Te resta %0 blocos.</span><span id="Maze_capacity1">Te resta %1 bloco.</span><span id="Maze_capacity2">Te resta %2 blocos.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Labyrintho', levelLinkSuffix: 'skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Face le jocator facer lo que le blocos dice."><img src="common/1x1.gif" class="run icon21"> Executar programma</button><button id="resetButton" class="primary" style="display: none" title="Remitter le jocator al initio del labyrintho."><img src="common/1x1.gif" class="stop icon21"> Reinitialisar</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Impila un par de blocos \'avantiar\' pro adjutar me a attinger le fin.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>In iste nivello, tu debe impilar tote le blocos in le spatio de travalio blanc.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Executa tu programma pro vider lo que eveni.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Tu programma non ha solvite le labyrintho. Preme \'Reinitialisar\' e proba de novo.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Attinge le fin de iste cammino con solmente duo blocos. Usa \'repeter\' pro executar un bloco plus de un vice.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Tu ha usate tote le blocos pro iste nivello. Pro crear un nove bloco, tu debe primo deler un bloco existente.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Tu pote mitter plus de un bloco intra un bloco \'repeter\'.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Selige tu jocator favorite de iste menu.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Un bloco \'si\' face qualcosa solmente si le condition es satisfacite. Essaya girar a sinistra si existe un cammino a sinistra.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Clicca sur %1 in le bloco \'si\' pro cambiar su condition.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Un bloco "si/si non" face un cosa o le altere.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Pote tu solver iste labyrintho complexe? Essaya a sequer le muro sinistre. Programmatores experte solmente!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
