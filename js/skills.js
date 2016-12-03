var centerx = 100;
var centery = 70;
var startA = 2 * Math.PI;
var c=document.getElementById('ui-skill-canvas');
var ctx=c.getContext('2d');
ctx.lineWidth = 8;
ctx.strokeStyle = "#00FFFF";
ctx.beginPath();
ctx.arc(centerx,centery,50,0*Math.PI,1.8*Math.PI);
ctx.stroke();

var c=document.getElementById('full-stack-skill-canvas');
var ctx=c.getContext('2d');
ctx.lineWidth = 8;
ctx.strokeStyle = "#00FFFF";
ctx.beginPath();
ctx.arc(centerx,centery,50,0*Math.PI,1.5*Math.PI);
ctx.stroke();

var c=document.getElementById('soft-skill-canvas');
var ctx=c.getContext('2d');
ctx.lineWidth = 8;
ctx.strokeStyle = "#00FFFF";
ctx.beginPath();
ctx.arc(centerx,centery,50,0*Math.PI,1.8*Math.PI);
ctx.stroke();

var c=document.getElementById('android-skill-canvas');
var ctx=c.getContext('2d');
ctx.lineWidth = 8;
ctx.strokeStyle = "#00FFFF";
ctx.beginPath();
ctx.arc(centerx,centery,50,0*Math.PI,1.2*Math.PI);
ctx.stroke();