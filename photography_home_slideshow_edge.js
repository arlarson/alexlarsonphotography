/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Background',
            type:'rect',
            rect:['-43px','-11px','2001px','1124px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'_DSC2214',
            type:'image',
            rect:['-48px','-157px','2000px','1335px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"_DSC2214.jpg",'0px','0px']
         },
         {
            id:'_DSC01222',
            type:'image',
            rect:['-20px','0px','2276px','1080px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"_DSC01222.jpg",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1920px'],
            ["style", "height", '1080px'],
            ["style", "overflow", 'hidden']
         ],
         "${__DSC01222}": [
            ["style", "top", '0px'],
            ["style", "-webkit-transform-origin", [33,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [33,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [33,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [33,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [33,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '1080px'],
            ["style", "opacity", '0'],
            ["style", "left", '-20px'],
            ["style", "width", '2276px']
         ],
         "${_Background}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${__DSC2214}": [
            ["style", "top", '-157px'],
            ["transform", "scaleY", '1.04'],
            ["transform", "scaleX", '1.04'],
            ["style", "height", '1335px'],
            ["style", "opacity", '1'],
            ["style", "left", '-48px'],
            ["style", "width", '2000px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 16000,
         autoPlay: true,
         timeline: [
            { id: "eid7", tween: [ "transform", "${__DSC2214}", "scaleX", '0.96', { fromValue: '1.04'}], position: 0, duration: 8000 },
            { id: "eid28", tween: [ "color", "${_Background}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 7500, duration: 0 },
            { id: "eid18", tween: [ "style", "${__DSC01222}", "-webkit-transform-origin", [33,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [33,50]}], position: 9750, duration: 0 },
            { id: "eid37", tween: [ "style", "${__DSC01222}", "-moz-transform-origin", [33,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [33,50]}], position: 9750, duration: 0 },
            { id: "eid38", tween: [ "style", "${__DSC01222}", "-ms-transform-origin", [33,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [33,50]}], position: 9750, duration: 0 },
            { id: "eid39", tween: [ "style", "${__DSC01222}", "msTransformOrigin", [33,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [33,50]}], position: 9750, duration: 0 },
            { id: "eid40", tween: [ "style", "${__DSC01222}", "-o-transform-origin", [33,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [33,50]}], position: 9750, duration: 0 },
            { id: "eid8", tween: [ "transform", "${__DSC2214}", "scaleY", '0.96', { fromValue: '1.04'}], position: 0, duration: 8000 },
            { id: "eid15", tween: [ "transform", "${__DSC01222}", "scaleY", '1.11', { fromValue: '1'}], position: 7000, duration: 9000 },
            { id: "eid10", tween: [ "style", "${__DSC01222}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 1000 },
            { id: "eid12", tween: [ "style", "${__DSC01222}", "opacity", '0', { fromValue: '1'}], position: 15000, duration: 1000 },
            { id: "eid1", tween: [ "style", "${__DSC2214}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${__DSC2214}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 1000 },
            { id: "eid16", tween: [ "transform", "${__DSC01222}", "scaleX", '1.11', { fromValue: '1'}], position: 7000, duration: 9000 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-9311498");
