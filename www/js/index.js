/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric&appid=APIKEY',function (data) {
          var cityName = data.name;
          var temp = data.main.temp;
          var humid = data.main.humidity;
          $('.weatherResponse').append('City : ' + cityName + ' ' );
          $('.weatherResponse').append('Temperature : ' + temp + ' ' );
          $('.weatherResponse').append('Humidity : ' + humid + ' ' );
});



//blocklyyyyyyyyy workspace

var demoWorkspace = Blockly.inject('blocklyDiv',
    {media: '../../media/',
     toolbox: document.getElementById('toolbox')});

$("#show").click(function() {
   //Generate JavaScript code and display it.
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
  alert(code);
});

$("#run").click(function() {
  // Generate JavaScript code and run it.


  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP =
      'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
  var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    eval(code);
  } catch (e) {
    alert(e);
  }
});

//blocklyyyyy workspace

//get values

var temp= null; //Global scope
var humid = null;
$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric&appid=APIKEY',function (data) {
         temp = data.main.temp;
         humid = data.main.humidity;
});


//get values

//temperature block

Blockly.Blocks['cust'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("temperature");

    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("http://api.openweathermap.org");
  }
};

Blockly.JavaScript['cust'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = temp;
// TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//temperature blockk


//Humidity block
Blockly.Blocks['gethumid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("humidity");

    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("http://api.openweathermap.org");
  }
};

Blockly.JavaScript['gethumid'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = humid;
// TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//Humidity block



//flipswitch block
function dothis() {
  return $("#snd-switch").val("on").flipswitch("refresh");
}

Blockly.Blocks['logic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("switch");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("http://api.openweathermap.org");
  }
};

Blockly.JavaScript['logic'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'dothis()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//flipswitch block



    },



    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },


};

app.initialize();
