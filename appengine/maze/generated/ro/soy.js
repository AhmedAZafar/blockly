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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">merge \u00EEnainte</span><span id="Maze_turnLeft">\u00EEntoarce la st\u00E2nga</span><span id="Maze_turnRight">\u00EEntoarce la dreapta</span><span id="Maze_doCode">execut\u0103</span><span id="Maze_elseCode">altfel</span><span id="Maze_helpIfElse">Blocurile \u201Edac\u0103-altfel\u201D vor efectua fie o anumit\u0103 ac\u021Biune, fie pe cealalt\u0103.</span><span id="Maze_pathAhead">dac\u0103 o cale \u00EEnainte</span><span id="Maze_pathLeft">dac\u0103 o cale spre st\u00E2nga</span><span id="Maze_pathRight">dac\u0103 o cale spre dreapta</span><span id="Maze_repeatUntil">repet\u0103 p\u00E2n\u0103 c\u00E2nd</span><span id="Maze_moveForwardTooltip">Mut\u0103 juc\u0103torul \u00EEnainte cu un singur spa\u021Biu.</span><span id="Maze_turnTooltip">Rote\u0219te personajul la st\u00E2nga sau la dreapta cu \\n90 de grade. </span><span id="Maze_ifTooltip">Dac\u0103 exist\u0103 o cale liber\u0103 \u00EEn direc\u021Bia aleas\u0103, \\natunci execut\u0103 c\u00E2teva ac\u021Biuni. </span><span id="Maze_ifelseTooltip">Dac\u0103 exist\u0103 o cale \u00EEn direc\u021Bia specificat\u0103, \\natunci execut\u0103 primul bloc de ac\u021Biuni. \\n\u00CEn caz contrar, execut\u0103 al doilea bloc de \\nac\u021Biuni. </span><span id="Maze_whileTooltip">Repet\u0103 comenzile incluse p\u00E2n\u0103 c\u00E2nd atinge \\npunctul de final. </span><span id="Maze_capacity0">Mai ai %0 blocuri r\u0103mase.</span><span id="Maze_capacity1">Mai ai %1 bloc r\u0103mas.</span><span id="Maze_capacity2">Mai ai %2 (de) blocuri r\u0103mase.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Labirint', levelLinkSuffix: 'skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Face ca personajul s\u0103 execute comenzile blocurilor."><img src="common/1x1.gif" class="run icon21"> Ruleaz\u0103 programul</button><button id="resetButton" class="primary" style="display: none" title="Trimite personajul la punctul de \u00EEnceput al \\nlabirintului. "><img src="common/1x1.gif" class="stop icon21"> Reseteaz\u0103</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Alipe\u0219te mai multe blocuri de \u201Emerge \u00EEnainte\u201D pentru a m\u0103 ajuta s\u0103-mi ating obiectivul.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>La acest nivel trebuie s\u0103 alipe\u0219ti toate blocurile \u00EEn spa\u021Biul de lucru alb.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Ruleaz\u0103-\u021Bi programul pentru a vedea ce se \u00EEnt\u00E2mpl\u0103.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Programul t\u0103u nu a rezolvat labirintul. Apas\u0103 \u201EReseteaz\u0103\u201D \u0219i mai \u00EEncearc\u0103 o dat\u0103.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Mergi p\u00E2n\u0103 la sf\u00E2r\u0219itul acestui drum, utiliz\u00E2nd doar dou\u0103 blocuri. Pentru a rula un bloc de mai multe ori folose\u0219te comanda \u201Erepet\u0103\u201D.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Ai folosit toate blocurile pentru acest nivel. Pentru a crea un nou bloc, trebuie mai \u00EEnt\u00E2i s\u0103 \u0219tergi un bloc existent.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Po\u021Bi include mai mult de un bloc \u00EEn interiorul unui bloc \u201Erepet\u0103 p\u00E2n\u0103 c\u00E2nd\u201D.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Alege-\u021Bi personajul favorit din acest meniu.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Un bloc \'dac\u0103\' face ceva numai dac\u0103 condi\u021Bia este adev\u0103rat\u0103. \u00CEncearc\u0103 s\u0103 cote\u0219ti la st\u00E2nga dac\u0103 exist\u0103 o cale la st\u00E2nga.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">D\u0103 click pe %1 \u00EEn blocul \'dac\u0103\' pentru a-i schimba condi\u021Bia.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Blocurile \u201Edac\u0103-altfel\u201D vor efectua fie o anumit\u0103 ac\u021Biune, fie pe cealalt\u0103.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Po\u021Bi s\u0103 rezolvi labirintul acesta complicat? \u00CEncearc\u0103 s\u0103 urm\u0103re\u0219ti zidul dinspre m\u00E2na st\u00E2ng\u0103. Numai pentru programatori avansa\u021Bi!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
