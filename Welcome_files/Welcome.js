// Created by iWeb 2.0.4 local-build-20081202

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,79),url:'Welcome_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Welcome_files/stroke_1.png'},{rect:new IWRect(1,-1,408,2),url:'Welcome_files/stroke_2.png'},{rect:new IWRect(409,-1,2,2),url:'Welcome_files/stroke_3.png'},{rect:new IWRect(409,1,2,79),url:'Welcome_files/stroke_4.png'},{rect:new IWRect(409,80,2,3),url:'Welcome_files/stroke_5.png'},{rect:new IWRect(1,80,408,3),url:'Welcome_files/stroke_6.png'},{rect:new IWRect(-1,80,2,3),url:'Welcome_files/stroke_7.png'}],new IWSize(410,81)),shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupIECSS3Opacity('id1');fixupIECSS3Opacity('id2');applyEffects()}
function onPageUnload()
{Widget.onunload();}
