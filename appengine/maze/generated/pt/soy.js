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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">Mover para a frente</span><span id="Maze_turnLeft">gire para a esquerda</span><span id="Maze_turnRight">gire para a direita</span><span id="Maze_doCode">fa\u00E7a</span><span id="Maze_elseCode">sen\u00E3o</span><span id="Maze_helpIfElse">O comando \'Se-sen\u00E3o\' faz uma coisa ou outra.</span><span id="Maze_pathAhead">se existe um caminho em frente</span><span id="Maze_pathLeft">se existe um caminho para a esquerda</span><span id="Maze_pathRight">se existe um caminho para a direita</span><span id="Maze_repeatUntil">repetir at\u00E9</span><span id="Maze_moveForwardTooltip">Move o Pegman um quadro para frente.</span><span id="Maze_turnTooltip">Gire o Pegman 90 graus para esquerda ou para a \\ndireita. </span><span id="Maze_ifTooltip">Se existe um caminho na dire\u00E7\u00E3o especificada, \\nentao executa algumas a\u00E7\u00F5es. </span><span id="Maze_ifelseTooltip">Se n\u00E3o existe um caminho na dire\u00E7\u00E3o \\nespecificada, ent\u00E3o execute o primeiro \\nbloco de a\u00E7\u00F5es. Sen\u00E3o, execute o \\nsegundo bloco de a\u00E7\u00F5es. </span><span id="Maze_whileTooltip">Repita as a\u00E7\u00F5es seguintes at\u00E9 que o ponto final \\nseja alcan\u00E7ado. </span><span id="Maze_capacity0">Voc\u00EA tem mais %0 blocos.</span><span id="Maze_capacity1">Resta-lhe %1 bloco.</span><span id="Maze_capacity2">Voc\u00EA tem mais %2 blocos.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '' + Maze.soy.messages(null, null, opt_ijData) + BlocklyGames.soy.headerBar({appName: 'Labirinto', levelLinkSuffix: 'skin=' + soy.$$escapeHtml(opt_ijData.skin), hasLinkButton: true, hasHelpButton: false, farLeftHtml: '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>'}, null, opt_ijData) + '<div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Fa\u00E7a o jogador executar o que os blocos dizem."><img src="common/1x1.gif" class="run icon21"> Executar o programa</button><button id="resetButton" class="primary" style="display: none" title="Colocar o jogador novamente no in\u00EDcio do labirinto."><img src="common/1x1.gif" class="stop icon21"> Reiniciar</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Empilhe alguns blocos \'Mover para a frente\' para ajudar-me a chegar ao destino.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Neste n\u00EDvel, voc\u00EA precisa empilhar todos os blocos nos espa\u00E7os em branco.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Execute o seu programa para ver o que acontece.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>O programa n\u00E3o resolve o labirinto. Pressione \'Reiniciar\' e tente novamente.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Os computadores t\u00EAm uma memoria limitada. Chegue ao destino usando apenas dois blocos. Utilize o comando \'repita\' para executar um bloco v\u00E1rias vezes.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Usou todos os blocos para este n\u00EDvel. Para criar um novo bloco, deve primeiro eliminar um bloco existente.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Pode p\u00F4r mais de um bloco dentro de um bloco \'repetir\'.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Escolha o seu jogador favorito a partir deste menu.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>A condi\u00E7\u00E3o \'se\' executa algo apenas se a condi\u00E7\u00E3o for verdadeira. Tente girar \u00E0 esquerda se existe um caminho \u00E0 esquerda</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Clique em %1 no bloco \'se\' para mudar a sua condi\u00E7\u00E3o.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>O comando \'Se-sen\u00E3o\' faz uma coisa ou outra.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Voc\u00EA consegue resolver este quebra cabe\u00E7as complexo. Tente seguir o muro do lado esquerdo. Para programadores avan\u00E7ados apenas!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
