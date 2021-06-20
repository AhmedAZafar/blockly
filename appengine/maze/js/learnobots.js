/**
 * @fileoverview Update for MazeBlcoks Game for Learnobots
 * @author fraser@google.com (Neil Fraser)
 */

'use strict';

goog.provide('Maze.Blocks')

goog.require('Blockly');
goog.require('Blockly.JavaScript');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldImage');
goog.require('BlocklyGames');

Blockly.Blocks['go_east'] = {
    init: function() {
      this.jsonInit ({
        "type": "go_east",
        "lastDummyAlign0": "CENTRE",
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_label_serializable",
            "name": "go-east-text",
            "text": "E"
          },
          {
            "type": "field_image",
            "src": "data:image/png;base64,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",
            "width": 15,
            "height": 15,
            "alt": "*",
            "flipRtl": false
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "",
        "helpUrl": ""
      });
    }
  }
  
  Blockly.JavaScript['go_east'] = function(block) {
    var argument = block.getFieldValue('DIR') +
    '(\'block_id_' + block.id + '\')';
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    var code = 'if (' + argument + ') {\n' + branch + '}\n';
    return code;
  };
  
  Blockly.Blocks['go_south'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField(new Blockly.FieldLabelSerializable("S"), "go-south-text")
          .appendField(new Blockly.FieldImage("data:image/png;base64,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", 15, 15, { alt: "*", flipRtl: "FALSE" }));
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['go_south'] = function(block) {
    var argument = block.getFieldValue('DIR') +
    '(\'block_id_' + block.id + '\')';
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    var code = 'if (' + argument + ') {\n' + branch + '}\n';
    return code;
  };
  
  Blockly.Blocks['go_west'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField(new Blockly.FieldLabelSerializable("W"), "go-west-text")
          .appendField(new Blockly.FieldImage("data:image/png;base64,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", 15, 15, { alt: "*", flipRtl: "FALSE" }));
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['go_west'] = function(block) {
    var argument = block.getFieldValue('DIR') +
    '(\'block_id_' + block.id + '\')';
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    var code = 'if (' + argument + ') {\n' + branch + '}\n';
    return code;
  };
  
  Blockly.Blocks['go_north'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField(new Blockly.FieldLabelSerializable("N"), "go-north-text")
          .appendField(new Blockly.FieldImage("https://toppng.com/uploads/preview/curved-white-arrow-png-white-up-arrow-icon-115628934127okaaohywg.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.JavaScript['go_north'] = function(block) {
    var argument = block.getFieldValue('DIR') +
    '(\'block_id_' + block.id + '\')';
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    var code = 'if (' + argument + ') {\n' + branch + '}\n';
    return code;
  };