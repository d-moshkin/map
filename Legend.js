(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Group_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F6152").s().p("AgUAyIAAgGIAOgBIAAhVIgOgBIAAgGIApAAIAAAGIgNABIAABVIANABIAAAGg");
	this.shape.setTransform(2.1,5.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0,0,4.2,10.1), null);


(lib.Group_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F6152").s().p("AgUAyIAAgGIAOgBIAAhVIgOgBIAAgGIApAAIAAAGIgOABIAABVIAOABIAAAGg");
	this.shape.setTransform(7.65,5.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F6152").s().p("AgUAyIAAgGIAOgBIAAhVIgOgBIAAgGIApAAIAAAGIgNABIAABVIANABIAAAGg");
	this.shape_1.setTransform(2.1,5.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0,0,9.8,10.1), null);


(lib.Group_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F6152").s().p("AgUAyIAAgGIAOgBIAAhVIgOgBIAAgGIApAAIAAAGIgOABIAABVIAOABIAAAGg");
	this.shape.setTransform(13.2,5.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F6152").s().p("AgUAyIAAgGIAOgBIAAhVIgOgBIAAgGIApAAIAAAGIgOABIAABVIAOABIAAAGg");
	this.shape_1.setTransform(7.65,5.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F6152").s().p("AgUAyIAAgGIAOgBIAAhVIgOgBIAAgGIApAAIAAAGIgNABIAABVIANABIAAAGg");
	this.shape_2.setTransform(2.1,5.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,15.3,10.1), null);


(lib.Group_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F6152").s().p("AgBAzIgjhdIgMgCIAAgGIApAAIAAAHIgPABIAZBIIAZhIIgOgBIAAgHIAjAAIAAAGIgNACIggBdg");
	this.shape.setTransform(9.975,5.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F6152").s().p("AgUAyIAAgGIAOgBIAAhVIgOgBIAAgGIApAAIAAAGIgNABIAABVIANABIAAAGg");
	this.shape_1.setTransform(2.1,5.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,0,14.9,10.2), null);


(lib.Group_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F6152").s().p("AgBAzIgjhdIgMgCIAAgGIApAAIAAAHIgOABIAYBIIAYhIIgNgBIAAgHIAjAAIAAAGIgNACIggBdg");
	this.shape.setTransform(4.875,5.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,9.8,10.2), null);


(lib.btn_M = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,254,247,0.008)").s().p("Ax4I/IAAx9MAjxAAAIAAR9g");
	this.shape.setTransform(114.525,57.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,229.1,115.1);


// stage content:
(lib.Legend = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.btn_M.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("map.html", "_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Кнопка
	this.btn_M = new lib.btn_M();
	this.btn_M.name = "btn_M";
	this.btn_M.setTransform(960.1,860.4,1,1,0,0,0,114.5,57.5);
	new cjs.ButtonHelper(this.btn_M, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_M).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006633").ss(2.3).p("AhXByQAKAAATABQAZAAAMgBQAagCAigKQAqgNAhgbQAegXAWgfQAZgiAQguQAMgjAJguIAEgbQABgMgLgEQgLgCgFALQgSAmgXAiQgUAegdAcQgjAggrARQgdALggAEQggADgegFQgDAAAAgEIAAhFQAAgOgNgBQgHgBgEAGIhzCJQgIAKAJAJIBxBxQAFAFACABQAHACAGgEQAGgEAAgHg");
	this.shape.setTransform(960.0258,891.4499);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A8D3AF").s().p("AhqDEQgCAAgFgFIhxhxQgJgJAIgLIBziIQAEgGAHAAQANACAAAOIAABFQAAADADABQAeAFAggEQAggDAdgLQArgSAjggQAdgbAUgeQAXgiASgmQAFgLALACQALADgBANIgEAbQgJAtgMAkQgQAugZAhQgWAggeAXQghAagqAOQgiAKgaACIglABIgdgCIAABHQAAAHgGAEQgEACgEAAIgFgBg");
	this.shape_1.setTransform(960.0258,891.4499);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006633").s().p("AgmA5IAAhxIBMAAIAAASIg0AAIAAAdIAtAAIAAAQIgtAAIAAAfIA1AAIAAATg");
	this.shape_2.setTransform(1036.925,853.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006633").s().p("AgLA5IAAhfIgiAAIAAgSIBbAAIAAASIgiAAIAABfg");
	this.shape_3.setTransform(1027.075,853.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006633").s().p("AgpA5IAAhxIAqAAQAUAAAKAKQALAJAAASQAAARgKAJQgMAKgTAAIgSAAIAAAogAgRAAIARAAQAKAAAEgFQAEgFAAgJQAAgKgEgEQgEgFgKAAIgRAAg");
	this.shape_4.setTransform(1017.725,853.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006633").s().p("AAeA5IgJgZIgsAAIgKAZIgWAAIArhxIAYAAIAsBxgAgCgbIgPApIAgAAIgOgkIgBgKIgBAAg");
	this.shape_5.setTransform(1006.875,853.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006633").s().p("AAVA5IgngxIgHAAIAAAxIgZAAIAAhxIAZAAIAAAuIAHAAIAnguIAZAAIguA0IAyA9g");
	this.shape_6.setTransform(996.75,853.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006633").s().p("AAVA5IgngxIgHAAIAAAxIgZAAIAAhxIAZAAIAAAuIAHAAIAnguIAZAAIguA0IAyA9g");
	this.shape_7.setTransform(981.9,853.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006633").s().p("AAUA5IAAgpIgRAAIgVApIgZAAIAZguQgIgDgGgGQgHgIAAgOQAAgRALgJQALgKATAAIAqAAIAABxgAgLghQgEAEAAAJQAAAJAEAFQAFAFAKAAIAQAAIAAglIgQAAQgKAAgFAFg");
	this.shape_8.setTransform(966.125,853.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006633").s().p("AghAtQgPgOAAgbIAAgGQAAgbAPgPQAOgOAVAAQAWAAAMALQANALAAASIAAACIgYAAIAAgCQAAgKgGgGQgGgGgLAAQgKAAgIAIQgHAJAAASIAAALQAAASAHAIQAHAJALAAQALAAAGgGQAFgGABgKIAAgCIAYAAIAAACQgBASgMALQgMALgWAAQgWAAgNgOg");
	this.shape_9.setTransform(955.875,853.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006633").s().p("AgpA5IAAhxIAYAAIAAApIASAAQAVAAAKAKQAKAJAAAQQAAARgKAKQgKAKgVAAgAgRAnIARAAQAJAAAFgFQAEgFAAgJQAAgHgEgGQgFgFgJAAIgRAAg");
	this.shape_10.setTransform(945.625,853.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006633").s().p("AgLA5IAAhfIgiAAIAAgSIBbAAIAAASIgiAAIAABfg");
	this.shape_11.setTransform(935.425,853.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006633").s().p("AggA5IgFgBIAAgTIAEAAIAGABQAHAAADgCQAFgDAEgHIgBAAIgphTIAZAAIAYAyIADALIAAAAIAag9IAXAAIglBSQgIATgIAHQgIAHgOAAIgIgBg");
	this.shape_12.setTransform(925.6,853.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006633").s().p("AAXA5IAAgxIgtAAIAAAxIgYAAIAAhxIAYAAIAAAuIAtAAIAAguIAYAAIAABxg");
	this.shape_13.setTransform(914.625,853.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006633").s().p("AgpA5IAAhxIAqAAQAVAAAKAKQAKAJAAASQAAARgKAJQgLAKgUAAIgSAAIAAAogAgRAAIARAAQAKAAAEgFQAEgFAAgJQAAgKgEgEQgEgFgKAAIgRAAg");
	this.shape_14.setTransform(904.125,853.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006633").s().p("AgmA5IAAhxIBMAAIAAASIg0AAIAAAdIAtAAIAAAQIgtAAIAAAfIA1AAIAAATg");
	this.shape_15.setTransform(894.325,853.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006633").s().p("AgqA5IAAhxIAqAAQATAAAKAHQALAHAAAQQAAAJgEAHQgFAGgGACQAIACAFAGQAFAGAAAMQAAAPgMAJQgLAJgSAAgAgSAoIATAAQAJAAAFgFQAEgFAAgIQAAgHgEgFQgFgEgJgBIgTAAgAgSgJIASAAQAJAAADgEQAEgEAAgHQAAgHgEgEQgEgEgIAAIgSAAg");
	this.shape_16.setTransform(884.25,853.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#008D36").ss(2.8).p("AQZI3MggxAAAQgjAAgZgZQgZgZAAgjIAAvDQAAgjAZgZQAZgZAjAAMAgxAAAQAjAAAZAZQAZAZAAAjIAAPDQAAAjgZAZQgZAZgjAAg");
	this.shape_17.setTransform(960.025,860.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCE5CE").s().p("AwYI3QgjAAgZgZQgZgZAAgjIAAvDQAAgjAZgZQAZgZAjAAMAgxAAAQAjAAAZAZQAZAZAAAjIAAPDQAAAjgZAZQgZAZgjAAg");
	this.shape_18.setTransform(960.025,860.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Легенда
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1D1B").s().p("AgKAZQAFgCADgGQADgHAAgKIAAAAQAAgKgDgGQgDgGgFgCIAAgIQAJAEAFAIQAHAHAAANIAAAAQAAAOgHAHQgFAIgJAEg");
	this.shape_19.setTransform(1380.1125,343.4486,1.8904,1.8904);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1D1B").s().p("AgEAaIAAgIIgBAAQgNAAgGgFQgGgFAAgIQAAgIAGgFQAGgFANAAIABAAIAAgHIAJAAIAAAHIABAAQANAAAGAFQAGAFAAAIQAAAIgGAFQgGAFgNAAIgBAAIAAAIgAAFALIABAAQAIAAAEgDQADgDAAgFQAAgFgDgDQgEgDgIAAIgBAAgAgQgIQgEADAAAFQAAAFAEADQACADAJAAIABAAIAAgWIgBAAQgJAAgCADg");
	this.shape_20.setTransform(1371.1805,342.1254,1.8904,1.8904);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1D1B").s().p("AgTAZIAAgxIATAAQAKAAAFAEQAFAFAAAHQAAAIgFACQgFAFgKAAIgJAAIAAASgAgJAAIAJAAQAFAAACgCQADgCAAgEQAAgEgDgCQgCgDgFAAIgJAAg");
	this.shape_21.setTransform(1360.6416,342.1254,1.8904,1.8904);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#1D1D1B").s().p("AAPASIAAgaIgCAEIgKAWIgGAAIgKgWIgBgEIgBAAIAAAaIgIAAIAAgjIANAAIAKAVIAAAEIACgEIAJgVIANAAIAAAjg");
	this.shape_22.setTransform(1346.5583,343.4014,1.8904,1.8904);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1D1B").s().p("AgOAQQgEgDAAgGQAAgFAFgDQAGgCAHAAIAHAAIAAgCQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgCgBgEgBIgEABQgBABAAAAQAAABAAAAQgBABAAAAQAAAAAAABIAAABIgJAAIAAgBQAAgEAEgEQAFgDAHAAQAHAAAFADQAEADAAAHIAAAPIABAEIABADIAAABIgKAAIgBgCIAAgDQgBADgEABQgDACgEAAQgGAAgEgDgAgFADQgDABAAADQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQABABAEABQADAAADgCQACgDAAgDIAAgEIgHAAQgDAAgCACg");
	this.shape_23.setTransform(1336.8228,343.4014,1.8904,1.8904);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1D1B").s().p("AgEASIAAgcIgMAAIAAgHIAhAAIAAAHIgMAAIAAAcg");
	this.shape_24.setTransform(1329.3086,343.4014,1.8904,1.8904);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1D1D1B").s().p("AAHASIgMgPIgDAAIAAAPIgKAAIAAgjIAKAAIAAAOIADAAIALgOIALAAIgPARIARASg");
	this.shape_25.setTransform(1322.4559,343.4014,1.8904,1.8904);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1D1B").s().p("AgMAOQgGgFAAgIIAAgBQAAgIAGgFQAGgFAGAAQAJAAAFAFQAFAFAAAIIAAACIgbAAQAAAFADACQACADAEABIAGgCIAEgEIAHAFQgCADgEACQgEACgHAAQgIAAgFgFgAgGgIQgBACgBADIARAAIAAAAQAAgEgCgCQgDgCgDgBQgEABgDADg");
	this.shape_26.setTransform(1313.9492,343.4014,1.8904,1.8904);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1D1B").s().p("AgLASIAAgcIgKAAIAAgHIAUAAIAAAMIAIAAQAIAAADADQAEADAAAFQAAAGgEADQgDADgIAAgAgBAMIAGAAQAEAAACgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgCgCgEAAIgGAAg");
	this.shape_27.setTransform(1305.2535,343.4014,1.8904,1.8904);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1D1B").s().p("AgOAWQgFgFAAgLIAAgDQAAgLAFgHQAFgGAKgCIAIgBIABgCIAJAAQgBAFgCACQgDACgJACQgIABgDADQgDADgBAHIABAAQABgEAEgCQAFgCACAAQAIAAAGAFQAEAFAAAHIAAABQAAAIgGAFQgEAFgKAAQgIAAgGgFgAgHAAQgCAEAAAEIAAABQAAAFACADQADADAEAAQAGAAACgDQACgDAAgFIAAgBQAAgEgCgEQgCgCgGAAQgEAAgDACg");
	this.shape_28.setTransform(1296.5104,341.9363,1.8904,1.8904);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1D1D1B").s().p("AgNAaIgCgBIAAgHIACABIACAAQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAQACgDABgEIAAAAIgPgiIAKAAIAIAVIAAADIABABIAAgBIAJgYIAJAAIgQAnQgCAEgDAEQgDADgFAAg");
	this.shape_29.setTransform(1288.5236,344.8192,1.8904,1.8904);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1D1B").s().p("AgMAOQgFgGgBgHIAAgBQABgHAFgGQAFgFAIAAQAIAAAFAEQAFAEgBAFIAAABIgJAAIAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAgBQgCgBgEAAQgEAAgCADQgDAEAAAEIAAABQAAAEADAEQACADAEABQAEAAACgCIACgFIAAgBIAJAAIAAABQABAFgFAEQgEAEgJAAQgIAAgFgFg");
	this.shape_30.setTransform(1280.9148,343.4014,1.8904,1.8904);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1D1D1B").s().p("AgNAOQgGgFAAgIIAAgBQAAgIAGgFQAEgFAJAAQAJAAAGAFQAFAGAAAHIAAABQAAAHgFAGQgGAFgJAAQgJAAgEgFgAgHgIQgCAEAAAEIAAABQAAAEACAEQADADAEABQAEgBADgDQADgCgBgGIAAgBQABgGgDgCQgCgDgFAAQgEAAgDADg");
	this.shape_31.setTransform(1269.0054,343.4014,1.8904,1.8904);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1D1D1B").s().p("AAHASIAAgcIgOAAIAAAcIgJAAIAAgjIAhAAIAAAjg");
	this.shape_32.setTransform(1260.4514,343.4014,1.8904,1.8904);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1D1B").s().p("AAPASIAAgjIAJAAIAAAjgAgXASIAAgjIAJAAIAAAMIAJAAQAHAAAEADQAEACAAAGQAAAGgEADQgEADgHAAgAgOAMIAIAAQAEAAABgCQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQgBgCgEAAIgIAAg");
	this.shape_33.setTransform(1247.0297,343.4014,1.8904,1.8904);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1D1D1B").s().p("AAIASIAAgPIgPAAIAAAPIgJAAIAAgjIAJAAIAAAOIAPAAIAAgOIAKAAIAAAjg");
	this.shape_34.setTransform(1237.1525,343.4014,1.8904,1.8904);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D1D1B").s().p("AgOAQQgEgDAAgGQAAgFAFgDQAGgCAHAAIAHAAIAAgCQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgCgBgEgBIgEABQgBABAAAAQAAABAAAAQgBABAAAAQAAAAAAABIAAABIgKAAIAAgBQAAgEAFgEQAFgDAHAAQAHAAAFADQAEADAAAHIAAATIACADIAAABIgKAAIgBgFQgBADgEABQgDACgEAAQgGAAgEgDgAgGADQAAAAgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQABABAEABQADAAADgCQACgDAAgDIAAgEIgHAAQgDAAgDACg");
	this.shape_35.setTransform(1228.693,343.4014,1.8904,1.8904);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1D1D1B").s().p("AANAXIAAgKIgZAAIAAAKIgJAAIAAgQIADAAIADgFIABgYIAeAAIAAAdIAGAAIAAAQgAgGACIgCAFIAOAAIAAgWIgLAAg");
	this.shape_36.setTransform(1220.2808,344.2993,1.8904,1.8904);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1D1B").s().p("AgEAZIAAgqIgRAAIAAgHIArAAIAAAHIgRAAIAAAqg");
	this.shape_37.setTransform(1208.0879,342.1254,1.8904,1.8904);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1D1D1B").s().p("AALAZIAAgqIgWAAIAAAqIgKAAIAAgxIArAAIAAAxg");
	this.shape_38.setTransform(1198.4942,342.1254,1.8904,1.8904);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1D1D1B").s().p("AgQAUQgHgHAAgLIAAgDQAAgLAHgHQAHgGAJAAQAKAAAIAGQAGAHAAALIAAADQAAALgGAHQgIAGgKAAQgJAAgHgGgAgJgOQgEAEAAAJIAAADQAAAJAEADQAEAFAFAAQAHAAADgFQAEgDAAgJIAAgDQAAgJgEgEQgEgEgGAAQgEAAgFAEg");
	this.shape_39.setTransform(1187.8608,342.1254,1.8904,1.8904);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1D1D1B").s().p("AgQAUQgHgHAAgLIAAgDQAAgLAHgHQAHgGAJAAQALAAAHAGQAGAHAAALIAAADQAAALgGAHQgHAGgLAAQgJAAgHgGgAgJgOQgEAFAAAIIAAADQAAAIAEAEQAEAFAFAAQAHAAADgFQAEgEAAgIIAAgDQAAgIgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_40.setTransform(1177.1802,342.1254,1.8904,1.8904);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1D1D1B").s().p("AgDAVQgHgHAAgOIAAAAQAAgMAHgIQAFgIAJgEIAAAIQgEACgEAGQgDAGAAAKIAAAAQAAAKADAHQAEAGAEACIAAAIQgIgDgGgJg");
	this.shape_41.setTransform(1169.4296,343.4486,1.8904,1.8904);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1D1D1B").s().p("AALAZIAAgTIgLAAIgJATIgLAAIAMgVQgDgBgDgDQgEgDAAgGQAAgHAGgEQAEgEAJAAIAUAAIAAAxgAgFgPQgCACAAAEQAAAFACACQACACAFAAIAJAAIAAgRIgJAAQgFAAgCACg");
	this.shape_42.setTransform(1374.5359,325.1119,1.8904,1.8904);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1D1D1B").s().p("AAMAZIAAglIgDAFIgTAgIgMAAIAAgxIALAAIAAAlIABgDIACgCIATggIALAAIAAAxg");
	this.shape_43.setTransform(1364.7532,325.1119,1.8904,1.8904);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1D1D1B").s().p("AAMAZIAAgWIgXAAIAAAWIgKAAIAAgxIAKAAIAAAVIAXAAIAAgVIAKAAIAAAxg");
	this.shape_44.setTransform(1354.0253,325.1119,1.8904,1.8904);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1D1D1B").s().p("AgRAZIAAgxIAjAAIAAAHIgZAAIAAAOIAWAAIAAAGIgWAAIAAAPIAZAAIAAAHg");
	this.shape_45.setTransform(1344.7624,325.1119,1.8904,1.8904);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1D1D1B").s().p("AALAZIAAgUIgDABIgIAAQgMAAgEgEQgFgDABgIIAAgPIAKAAIAAAOQAAAGACACQACACAHAAIAIgBIACAAIAAgXIAKAAIAAAxg");
	this.shape_46.setTransform(1334.9797,325.1119,1.8904,1.8904);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1D1D1B").s().p("AAPAZIgEgMIgWAAIgFAMIgJAAIAVgxIAJAAIAVAxgAgBgKIgHAQIAQAAIgHgQIgBgEIAAAAg");
	this.shape_47.setTransform(1325.1025,325.0647,1.8904,1.8904);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1D1D1B").s().p("AAMAZIAAgWIgXAAIAAAWIgKAAIAAgxIAKAAIAAAVIAXAAIAAgVIAKAAIAAAxg");
	this.shape_48.setTransform(1314.9889,325.1119,1.8904,1.8904);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1D1D1B").s().p("AgPAWQgGgEAAgJIAAAAIAKAAIAAAAQAAAFADACQAEADAEAAQAGAAADgDQADgCAAgEQAAgDgDgDQgEgCgEAAIgGAAIAAgFIAGAAQAEAAADgCQACgCAAgEQAAgDgCgCQgCgCgGAAQgFAAgCACQgDADAAAEIAAAAIgKAAIAAAAQAAgHAFgFQAGgEAJAAQALAAAEAEQAFADAAAHQAAAEgCADQgDACgEACQAEAAAEADQADADAAAEQAAAIgGAEQgFAEgKAAQgKAAgGgEg");
	this.shape_49.setTransform(1304.8754,325.1119,1.8904,1.8904);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1D1D1B").s().p("AgRAUQgGgHAAgLIAAgDQAAgLAGgHQAHgGAKAAQALAAAGAGQAHAHAAALIAAADQAAALgHAHQgGAGgLAAQgKAAgHgGgAgJgOQgEAFAAAIIAAADQAAAIAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgIIAAgDQAAgIgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_50.setTransform(1291.3592,325.1119,1.8904,1.8904);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1D1D1B").s().p("AgQAZIAAgxIAhAAIAAAHIgXAAIAAAqg");
	this.shape_51.setTransform(1282.5689,325.1119,1.8904,1.8904);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1D1D1B").s().p("AgRAUQgGgHAAgLIAAgDQAAgLAGgHQAHgGAKAAQALAAAGAGQAHAHAAALIAAADQAAALgHAHQgGAGgLAAQgKAAgHgGgAgJgOQgEAFAAAIIAAADQAAAIAEAEQAEAFAFAAQAGAAAEgFQAEgEAAgIIAAgDQAAgIgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_52.setTransform(1272.8334,325.1119,1.8904,1.8904);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1D1D1B").s().p("AAMAZIAAgWIgXAAIAAAWIgKAAIAAgxIAKAAIAAAVIAXAAIAAgVIAKAAIAAAxg");
	this.shape_53.setTransform(1262.1528,325.1119,1.8904,1.8904);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1D1D1B").s().p("AgTAZIAAgxIAKAAIAAATIAJAAQAKAAAFAEQAFADAAAHQAAAHgFAFQgFAEgKAAgAgJASIAJAAQAFAAACgDQADgCAAgEQAAgDgDgDQgCgCgFAAIgJAAg");
	this.shape_54.setTransform(1252.7009,325.1119,1.8904,1.8904);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1D1D1B").s().p("AgWAZIgCAAIAAgIIACAAIABABQAEAAACgDQABgEAAgHIACgcIAlAAIAAAwIgKAAIAAgpIgSAAIgCAXQgBAKgCAEQgDAFgIAAg");
	this.shape_55.setTransform(1241.8784,325.2065,1.8904,1.8904);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1D1D1B").s().p("AAPAZIgFgMIgUAAIgFAMIgKAAIAVgxIAJAAIAVAxgAgBgKIgHAQIAQAAIgHgQIgBgEIAAAAg");
	this.shape_56.setTransform(1232.2848,325.0647,1.8904,1.8904);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1D1D1B").s().p("AAMAZIAAgWIgXAAIAAAWIgKAAIAAgxIAKAAIAAAVIAXAAIAAgVIAKAAIAAAxg");
	this.shape_57.setTransform(1222.1712,325.1119,1.8904,1.8904);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1D1D1B").s().p("AgRAUQgGgHAAgLIAAgDQAAgLAGgHQAHgGAKAAQALAAAGAGQAHAHAAALIAAADQAAALgHAHQgGAGgLAAQgKAAgHgGgAgJgOQgEAEAAAJIAAADQAAAJAEADQAEAFAFAAQAGAAAEgFQAEgEAAgIIAAgDQAAgIgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_58.setTransform(1211.4906,325.1119,1.8904,1.8904);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1D1D1B").s().p("AAMAZIAAgiIAAgDIAAAAIgBADIgCACIgTAgIgLAAIAAgxIAKAAIAAAlIAAAAIABgDIABgCIAUggIAMAAIAAAxg");
	this.shape_59.setTransform(1200.7627,325.1119,1.8904,1.8904);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#1D1D1B").s().p("AgQAZIAAgxIAhAAIAAAHIgXAAIAAAqg");
	this.shape_60.setTransform(1191.9251,325.1119,1.8904,1.8904);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1D1D1B").s().p("AgRAZIAAgxIAjAAIAAAHIgaAAIAAAOIAXAAIAAAGIgXAAIAAAPIAbAAIAAAHg");
	this.shape_61.setTransform(1183.5602,325.1119,1.8904,1.8904);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1D1D1B").s().p("AgTAZIAAgxIATAAQALAAAEAEQAFAFAAAHQAAAIgFACQgFAFgKAAIgJAAIAAASgAgJAAIAJAAQAFAAADgCQACgCAAgEQAAgEgCgCQgCgDgGAAIgJAAg");
	this.shape_62.setTransform(1174.8172,325.1119,1.8904,1.8904);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#693C11").ss(0.3,0,1).p("AATgaIglAAIAAA1IAlAAg");
	this.shape_63.setTransform(88.3208,563.4417,1.8904,1.8904);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F39200").s().p("AgSAbIAAg0IAlAAIAAA0g");
	this.shape_64.setTransform(88.3208,563.4417,1.8904,1.8904);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#432918").ss(0.3,0,1).p("AAAgFIAAAL");
	this.shape_65.setTransform(95.5515,570.2471,1.8904,1.8904);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#432918").ss(0.3,0,1).p("AAAgFIAAAL");
	this.shape_66.setTransform(80.6175,570.2471,1.8904,1.8904);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#432918").ss(0.3,0,1).p("AAoAAQAAgBgMgCQgLgCgRAAQgPAAgMACQgLACAAABQAAAGAmAAQAoAAAAgGg");
	this.shape_67.setTransform(88.0845,568.782,1.8904,1.8904);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B2B2B2").s().p("AgmAAQAAgBALgCQALgCAQAAQARAAALACQAMACgBABQAAAGgnAAQgmAAAAgGg");
	this.shape_68.setTransform(88.0845,568.782,1.8904,1.8904);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B2B2B2").s().p("AgmAGIAAgLIBNAAIAAALg");
	this.shape_69.setTransform(88.0845,570.2471,1.8904,1.8904);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#432918").ss(0.3,0,1).p("AAoAAQAAgEgoAAQgmAAAAAEQAAAEAmAAQAoAAAAgEg");
	this.shape_70.setTransform(88.0845,571.3813,1.8904,1.8904);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B2B2B2").s().p("AgmAAQAAgDAmgBQAnABAAADQAAAEgnAAQgmAAAAgEg");
	this.shape_71.setTransform(88.0845,571.3813,1.8904,1.8904);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#693C11").ss(0.3,0,1).p("AAYALIgvAAIAAgVIAvAAg");
	this.shape_72.setTransform(88.3208,573.2244,1.8904,1.8904);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F39200").s().p("AgXALIAAgVIAvAAIAAAVg");
	this.shape_73.setTransform(88.3208,573.2244,1.8904,1.8904);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#432918").ss(0.3,0,1).p("AgtAHIAWgNIAvAAIAWANg");
	this.shape_74.setTransform(88.368,575.8237,1.8904,1.8904);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B2B2B2").s().p("AgtAHIAWgNIAuAAIAXANg");
	this.shape_75.setTransform(88.368,575.8237,1.8904,1.8904);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#432918").ss(0.3,0,1).p("AA5AHIhxAAIAAgNIBxAAg");
	this.shape_76.setTransform(88.0845,578.4702,1.8904,1.8904);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B2B2B2").s().p("Ag4AHIAAgNIBxAAIAAANg");
	this.shape_77.setTransform(88.0845,578.4702,1.8904,1.8904);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#432918").ss(0.3,1).p("AAAAMIAAgX");
	this.shape_78.setTransform(76.5059,561.6931,1.8904,1.8904);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#693C11").ss(0.3,0,1).p("AgcgKIA6AAIAAAVIg7AAg");
	this.shape_79.setTransform(88.5571,561.6931,1.8904,1.8904);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F39200").s().p("AgdALIABgVIA6AAIAAAVg");
	this.shape_80.setTransform(88.5571,561.6931,1.8904,1.8904);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#432918").ss(0.3,0,1).p("AgQgHIAhAAIgBAPIgggBg");
	this.shape_81.setTransform(79.7668,561.5986,1.8904,1.8904);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B2B2B2").s().p("AgQAHIAAgOIAhAAIgBAPg");
	this.shape_82.setTransform(79.7668,561.5986,1.8904,1.8904);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#432918").ss(0.3,0,1).p("AgJgHIATAAIgBAPIgSAAg");
	this.shape_83.setTransform(96.0713,561.8349,1.8904,1.8904);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B2B2B2").s().p("AgJAIIAAgPIATABIgBAOg");
	this.shape_84.setTransform(96.0713,561.8349,1.8904,1.8904);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgNAeIgIAAIAAgpIAIAAIAAAeIANgeIAHAAIAAApg");
	this.shape_85.setTransform(1447.5519,474.5466,1.8904,1.8904);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgHAAIAAgpIAHAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_86.setTransform(1439.8486,474.5466,1.8904,1.8904);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAIAAADAFQADAFAAAKIAAAEQAAAJgDAFQgEAFgGAAQgGAAgDgFIAAAVgAgHgSIAAAVQACAFAFAAQAEAAACgDQADgEAAgGIAAgEQAAgHgDgDQgCgEgEAAQgFAAgCAFg");
	this.shape_87.setTransform(1432.3816,476.0589,1.8904,1.8904);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#1D1D1B").s().p("AgLAQQgEgEAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAIIAAAEQAAAKgEAEQgEAGgIAAQgGAAgFgGgAgGgMQgCAFAAAGIAAADQAAAHACADQACAEAEAAQAJAAABgNIAAgEQAAgGgDgFQgCgDgFAAQgEAAgCADg");
	this.shape_88.setTransform(1424.7255,474.5938,1.8904,1.8904);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgOAAIAAAjg");
	this.shape_89.setTransform(1418.7236,474.5466,1.8904,1.8904);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgEQAAgJAEgGQADgFAHAAQAIAAADAFQAEAEAAAKIAAAEIgXAAIAAABQAAAGADAEQADADADAAIAGgBIAEgEIAEAEQgFAHgJAAQgHAAgEgFgAgFgMQgCACgBAHIAQAAIAAgBQgBgHgBgCQgBgCgFAAQgDAAgCADg");
	this.shape_90.setTransform(1412.06,474.5938,1.8904,1.8904);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#1D1D1B").s().p("AgCAVIAAgjIgMAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_91.setTransform(1405.7745,474.5466,1.8904,1.8904);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAEgDQAEgEAHAAIAGAAIAAgEQAAgDgCgDQgCgBgDAAQgDAAgBABQgCACAAAEIgHAAQAAgEACgDQABgDAEgCIAGgBQAHAAADADQADADAAAHIAAAUQAAAFACAEIAAAAIgHAAIgBgFQgEAGgFAAQgGAAgDgDgAgEADQgDACAAAEQAAADABACQACABADAAQACAAACgBIAEgDIAAgKIgEAAQgEAAgDACg");
	this.shape_92.setTransform(1399.1109,474.5938,1.8904,1.8904);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgGAAIAAgpIAGAAIAAASIAEAAIAKgSIAIAAIgNAUIAOAVg");
	this.shape_93.setTransform(1392.2582,474.5466,1.8904,1.8904);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgHAAIAAgpIAHAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_94.setTransform(1380.8687,474.5466,1.8904,1.8904);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAEgDQAFgEAHAAIAEAAIAAgEQABgEgCgCQgCgBgDAAQgCAAgCABQgCACAAAEIgHAAQAAgEACgDQACgDADgCQADgBADAAQAHAAADADQADADAAAHIAAAUQABAFABAEIAAAAIgIAAIAAgFQgEAGgFAAQgGAAgDgDgAgEADQgDACAAAEQAAADACACQABABADAAQADAAACgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAIAAgKIgDAAQgDAAgEACg");
	this.shape_95.setTransform(1369.9517,474.5938,1.8904,1.8904);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#1D1D1B").s().p("AAHAVIAAgjIgNAAIAAAjIgIAAIAAgpIAcAAIAAApg");
	this.shape_96.setTransform(1362.4847,474.5466,1.8904,1.8904);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgHAAIAAgpIAHAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_97.setTransform(1354.7342,474.5466,1.8904,1.8904);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#1D1D1B").s().p("AgCAVIAAgjIgMAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_98.setTransform(1347.6925,474.5466,1.8904,1.8904);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#1D1D1B").s().p("AgLAQQgEgEAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAIIAAAEQAAAJgEAFQgEAGgIAAQgGAAgFgGgAgGgMQgCAFAAAGIAAADQAAAHACADQACAEAEAAQAJAAABgNIAAgEQAAgGgDgFQgCgDgFAAQgEAAgCADg");
	this.shape_99.setTransform(1337.2009,474.5938,1.8904,1.8904);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1D1D1B").s().p("AgLAVIAAgpIAWAAIAAAGIgPAAIAAAjg");
	this.shape_100.setTransform(1331.1989,474.5466,1.8904,1.8904);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1D1D1B").s().p("AgLAQQgEgEAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAIIAAAEQAAAKgEAEQgFAGgHAAQgGAAgFgGgAgGgMQgCADAAAIIAAADQAAAIACACQACAEAEAAQAJAAABgNIAAgEQAAgGgDgFQgCgDgFAAQgEAAgCADg");
	this.shape_101.setTransform(1324.1573,474.5938,1.8904,1.8904);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgNAAIAAASIgIAAIAAgpIAIAAIAAASIANAAIAAgSIAHAAIAAApg");
	this.shape_102.setTransform(1316.5485,474.5466,1.8904,1.8904);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAHAAIAAApg");
	this.shape_103.setTransform(1308.7979,474.5466,1.8904,1.8904);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAFgDQAEgEAHAAIAFAAIAAgEQAAgEgCgCQgCgBgDAAIgEABIgCAGIgHAAIACgHQACgEADgBQADgBADAAQAHAAADADQAEADAAAHIAAAUIABAJIAAAAIgHAAIgBgFQgEAGgFAAQgFAAgEgDgAgEADQgDACAAAEQAAADACACQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQACAAACgBIAEgDIAAgKIgEAAQgEAAgDACg");
	this.shape_104.setTransform(1301.3782,474.5938,1.8904,1.8904);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIACAAIADgDQADgGAAgIIABgTIAXAAIAAAkIAFAAIAAASgAgCgKQAAALgGAIIAPAAIAAgdIgJAAg");
	this.shape_105.setTransform(1293.6749,475.728,1.8904,1.8904);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1D1D1B").s().p("AgOAVIAAgpIAOAAQAGAAAEADQAEADAAAFQAAAEgCACQAAACgEABQADAAACADQACACAAAEQAAAGgEADQgDADgHAAgAgHAPIAIAAQAIAAgBgGQAAgGgHAAIgIAAgAgHgCIAHAAQAHAAAAgGQAAgGgHAAIgHAAg");
	this.shape_106.setTransform(1421.0865,457.4386,1.8904,1.8904);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1D1D1B").s().p("AgLARQgEgGAAgIIAAgEQgBgJAFgGQAEgFAHAAQAIAAAEAFQAFAHgBAIIAAADQABAKgFAFQgEAFgIAAQgHAAgEgFgAgGgLQgDAEAAAGIAAADQAAAGADAEQADAEADAAQAKAAAAgNIAAgEQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_107.setTransform(1413.336,457.4386,1.8904,1.8904);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1D1D1B").s().p("AgCAVIAAgjIgMAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_108.setTransform(1406.6251,457.4386,1.8904,1.8904);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1D1D1B").s().p("AAHAVIgKgSIgFAAIAAASIgGAAIAAgpIAGAAIAAASIAEAAIAKgSIAJAAIgPAUIAPAVg");
	this.shape_109.setTransform(1400.1978,457.4386,1.8904,1.8904);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgEQAAgJAEgGQAEgFAGAAQAIAAAEAFQADAEAAAKIAAAEIgWAAIAAABQAAAGACAEQADADAEAAIAFgBQACgBACgDIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgCADAAAGIAPAAIAAgBQAAgGgCgDQgCgCgEAAQgDAAgCADg");
	this.shape_110.setTransform(1392.6836,457.4386,1.8904,1.8904);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#1D1D1B").s().p("AgIAVIAAgjIgKAAIAAgGIARAAIAAAOIAHAAQAGAAAEAEQADADAAAGQAAAHgDADQgEAEgGAAgAgBAPIAHAAQADAAACgCQACgCgBgEQABgDgCgCQgCgCgCAAIgIAAg");
	this.shape_111.setTransform(1384.9803,457.4386,1.8904,1.8904);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1D1D1B").s().p("AgLAZQgEgFAAgLIAAgDQAAgLAEgJQADgIAIgCQAEAAACgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAGAAIAAACQgCAHgGADIgFABQgEABgCAEQgDADgCAGQAGgGAFAAQAGAAAFAFQAEAEAAAJIAAABQAAAKgEAFQgFAGgHAAQgHAAgEgGgAgGAAQgCACAAAIQAAAHACAEQADAEADAAQAEAAACgEQADgEAAgIQAAgGgDgDQgCgDgEAAQgDAAgDADg");
	this.shape_112.setTransform(1377.4188,455.7845,1.8904,1.8904);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAKgEAFQgEAFgIAAQgGAAgFgFgAgGgLQgCAEAAAGIAAADQAAAGACAEQADAEADAAQAJAAABgNIAAgEQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_113.setTransform(1369.81,457.4386,1.8904,1.8904);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAJgEAGQgEAFgIAAQgGAAgFgFgAgGgLQgCAEAAAGIAAADQAAAGACAEQADAEADAAQAJAAABgNIAAgEQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_114.setTransform(1358.7512,457.4386,1.8904,1.8904);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#1D1D1B").s().p("AgOAVIAAgpIAOAAQAGAAAEADQAEADAAAFQAAAEgCACQAAACgEABQADAAACADQACACAAAEQAAAGgEADQgDADgHAAgAgIAPIAJAAQAHAAAAgGQAAgGgHAAIgJAAgAgIgCIAIAAQAHAAAAgGQAAgGgHAAIgIAAg");
	this.shape_115.setTransform(1351.3315,457.4386,1.8904,1.8904);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#1D1D1B").s().p("AgDAVIAAgjIgLAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_116.setTransform(1344.148,457.4386,1.8904,1.8904);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgLIAAgDQAAgLAEgEQAEgFAHAAQAGAAAEAEQAEAEAAAHIgGAAQAAgFgCgCQgDgCgDAAQgEAAgCADQgCACAAAIIAAAEQAAAIACADQACADAEAAQADAAADgCQACgCAAgEIAGAAQAAAGgEAEQgFAEgFAAQgHAAgEgFg");
	this.shape_117.setTransform(1337.5317,457.4386,1.8904,1.8904);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgEQAAgJAEgGQAEgFAGAAQAIAAADAFQAEAFAAAJIAAAEIgWAAIAAABQAAAHACADQACADAFAAQADAAACgBIAEgEIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgCADAAAGIAPAAIAAgBQAAgFgCgEQgCgCgEAAQgDAAgCADg");
	this.shape_118.setTransform(1330.49,457.4386,1.8904,1.8904);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#1D1D1B").s().p("AAHAVIAAgPQgDABgEAAQgGAAgEgEQgDgDAAgHIAAgNIAHAAIAAANQAAAIAGAAQAEAAADgBIAAgUIAHAAIAAApg");
	this.shape_119.setTransform(1323.1176,457.4386,1.8904,1.8904);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgOAeIgGAAIAAgpIAGAAIAAAeIAOgeIAIAAIAAApg");
	this.shape_120.setTransform(1315.7923,457.4386,1.8904,1.8904);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#1D1D1B").s().p("AAKAVIAAgjIgLAAIAAAOQgBALgCAFQgDAFgGAAIgCAAIAAgGIABAAQADgBACgDIACgfIAXAAIAAApg");
	this.shape_121.setTransform(1307.711,457.4386,1.8904,1.8904);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAKgEAFQgFAFgHAAQgGAAgFgFgAgGgLQgCADAAAHIAAADQAAAHACADQADAEADAAQAJAAAAgNIAAgEQAAgHgCgDQgDgEgEAAQgDAAgDAEg");
	this.shape_122.setTransform(1300.5275,457.4386,1.8904,1.8904);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#1D1D1B").s().p("AAHAVIgKgSIgFAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIALgSIAIAAIgPAUIAQAVg");
	this.shape_123.setTransform(1293.6749,457.4386,1.8904,1.8904);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#1D1E1B").ss(0.6,1).p("AhjhEIDICJ");
	this.shape_124.setTransform(1263.9014,443.4498,1.8904,1.8904);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#1D1D1B").ss(0.6).p("AAXAAQAAAOgHAJQgHAKgJAAQgJAAgGgKQgHgJAAgOQAAgNAHgJQAGgKAJAAQAJAAAHAKQAHAJAAANg");
	this.shape_125.setTransform(1242.6283,424.8363,1.8904,1.8904);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#1D1D1B").s().p("AgOAVIAAgpIAHAAIAAAOIAIAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAgAgHAPIAIAAQADAAACgCQABgCABgEQgBgDgBgCQgCgCgDAAIgIAAg");
	this.shape_126.setTransform(1341.1234,434.754,1.8904,1.8904);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBALgDAFQgCAFgGAAIgCAAIAAgGIABAAQAEgBAAgDQACgEAAgJIABgSIAXAAIAAApg");
	this.shape_127.setTransform(1333.1366,434.754,1.8904,1.8904);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgOAeIgHAAIAAgpIAHAAIAAAeIAOgeIAGAAIAAApg");
	this.shape_128.setTransform(1325.7168,434.754,1.8904,1.8904);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#1D1D1B").s().p("AgDAnIAAgRIgEABQgHAAgDgFQgDgGAAgKQAAgKADgGQADgHAHAAIAEABIAAgSIAGAAIAAASIAFgBQAGAAAEAHQADAHAAAKQAAAHgDAIQgEAFgGAAIgFgBIAAARgAADgOIAAAeIADABQAEAAACgEQACgEAAgHQAAgIgCgEQgCgEgEAAgAgLgKQgCADAAAKQAAAHACADQABAEAEAAIADgBIAAgeIgDAAQgEAAgBAEg");
	this.shape_129.setTransform(1317.1629,434.6123,1.8904,1.8904);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAIIAAAEQAAAKgEAFQgEAFgIAAQgGAAgFgFgAgGgLQgCAEAAAGIAAADQAAAGACAEQADAEADAAQAJAAABgNIAAgEQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_130.setTransform(1308.5616,434.754,1.8904,1.8904);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAEQAEgFAFAAQAHAAAEAFQADAEAAALIAAAEQAAAKgDAEQgEAFgGABQgFgBgEgFIAAAVgAgHgSIAAAVQACAGAFAAQAEgBACgDQACgDAAgHIAAgEQAAgHgCgDQgCgDgEgBQgFABgCAEg");
	this.shape_131.setTransform(1301.1891,436.2191,1.8904,1.8904);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#1D1D1B").s().p("AAIAVIAAgjIgPAAIAAAjIgHAAIAAgpIAdAAIAAApg");
	this.shape_132.setTransform(1293.4858,434.754,1.8904,1.8904);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#1D1E1B").ss(0.6,1).p("AhSgVIClAr");
	this.shape_133.setTransform(1267.2568,429.0356,1.8904,1.8904);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#1D1D1B").s().p("AAJAVIAAgQIgIAAIgIAQIgIAAIAJgRQgDgCgBgCIgDgHQAAgGAFgEQAEgDAFAAIAPAAIAAApgAgEgMQgCACAAADQAAADACACQABABAAAAQABAAAAAAQABABABAAQAAAAAAAAIAJAAIAAgOIgIAAQgDAAgCACg");
	this.shape_134.setTransform(1348.4014,405.8312,1.8904,1.8904);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgOAeIgGAAIAAgpIAGAAIAAAeIAOgeIAIAAIAAApg");
	this.shape_135.setTransform(1341.3125,405.8312,1.8904,1.8904);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQADgGAGAAQAHAAAEAFQACAFABAKIAAAEQAAAJgEAFQgDAFgHAAQgFAAgEgFIAAAVgAgIgSIAAAVQADAFAFAAQAEAAACgDQACgEAAgGIAAgEQAAgGgCgEQgCgEgEAAQgFAAgDAFg");
	this.shape_136.setTransform(1333.8927,407.3435,1.8904,1.8904);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#1D1D1B").s().p("AgLARQgDgFgCgJIAAgEQAAgJAFgGQAFgFAGAAQAHAAAFAFQAEAGAAAIIAAAEQAAAJgEAGQgFAFgHAAQgHAAgEgFgAgGgMQgCAFgBAGIAAADQABAHACADQADAEADAAQAJAAAAgNIAAgEQAAgGgCgFQgDgDgEAAQgDAAgDADg");
	this.shape_137.setTransform(1326.1894,405.8785,1.8904,1.8904);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgPAAIAAAjg");
	this.shape_138.setTransform(1320.1875,405.8312,1.8904,1.8904);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#1D1D1B").s().p("AgKASQgEgGAAgJIAAgEQAAgJAEgGQAEgFAGAAQAIAAADAFQAEAFAAAJIAAAEIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAEQgFAHgJAAQgHAAgEgEgAgFgMQgCAEAAAFIAPAAIAAgBQAAgGgCgDQgCgCgEAAQgDAAgCADg");
	this.shape_139.setTransform(1313.4766,405.8785,1.8904,1.8904);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#1D1D1B").s().p("AgDAVIAAgjIgLAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_140.setTransform(1307.2384,405.8312,1.8904,1.8904);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAFgDQAEgEAHAAIAFAAIAAgEQAAgEgCgCQgCgBgDAAIgEABIgCAGIgHAAIACgHQACgDADgCQADgBADAAQAHAAADADQAEADAAAHIAAAUIABAIIAAABIgHAAIgBgEQgEAFgFAAQgFAAgEgDgAgEADQgDACAAAEQAAADACACQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAQACAAACgBIAEgDIAAgKIgEAAQgEgBgDADg");
	this.shape_141.setTransform(1300.5275,405.8785,1.8904,1.8904);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#1D1D1B").s().p("AAHAVIgKgSIgFAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIALgSIAIAAIgPAUIAQAVg");
	this.shape_142.setTransform(1293.6749,405.8312,1.8904,1.8904);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#1D1E1B").ss(0.6,1).p("AhXAiICwhD");
	this.shape_143.setTransform(1265.6972,414.2434,1.8904,1.8904);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#1D1D1B").s().p("AgKARQgFgFgBgKIAAgDQABgJAEgGQAEgFAHAAQAHAAAFAFQAEAGABAJIAAADQgBAJgEAGQgEAFgIAAQgGAAgEgFgAgGgLQgDAFABAFIAAADQgBAGADAEQADAEADAAQAJAAABgNIAAgEQgBgFgCgFQgDgEgEAAQgDAAgDAEg");
	this.shape_144.setTransform(1402.1827,375.6324,1.8904,1.8904);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#1D1D1B").s().p("AgOAVIAAgpIAOAAQAHAAADADQAEACAAAHIgCAFQgBACgDABQADAAACADQACADAAADQAAAFgEAEQgDADgHAAgAgHAQIAIAAQAHAAAAgHQAAgGgHgBIgIAAgAgHgCIAHAAQAHAAAAgGQAAgGgHgBIgHAAg");
	this.shape_145.setTransform(1394.763,375.6324,1.8904,1.8904);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#1D1D1B").s().p("AgCAVIAAgkIgMAAIAAgFIAdAAIAAAFIgMAAIAAAkg");
	this.shape_146.setTransform(1387.5795,375.6324,1.8904,1.8904);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgDQAAgKAEgFQAEgFAHAAQAGAAAEAEQAEAFAAAGIgGAAQAAgEgDgDQgBgCgEAAQgDAAgDADQgCAEAAAGIAAAEQAAAJACACQACADAEAAQAEAAABgCQADgCAAgEIAGAAQAAAHgEADQgEAEgGAAQgHAAgEgFg");
	this.shape_147.setTransform(1380.9632,375.6324,1.8904,1.8904);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#1D1D1B").s().p("AgKASQgDgFgBgKIAAgDQAAgKAEgGQAEgFAHAAQAHAAAEAEQADAFAAALIAAADIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAFgEIADAFQgEAGgKAAQgGAAgFgEgAgFgMQgBACgBAHIAQAAIAAgBIgDgJQgBgCgEAAQgDAAgDADg");
	this.shape_148.setTransform(1373.8743,375.6324,1.8904,1.8904);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#1D1D1B").s().p("AAHAVIAAgPIgHABQgHAAgCgEQgEgDAAgHIAAgNIAHAAIAAANQAAAIAGAAIAHgBIAAgUIAHAAIAAApg");
	this.shape_149.setTransform(1366.5018,375.6324,1.8904,1.8904);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#1D1D1B").s().p("AAIAVIAAgdIgPAdIgGAAIAAgpIAGAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_150.setTransform(1359.1766,375.6324,1.8904,1.8904);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#1D1D1B").s().p("AAKAVIAAgjIgKAAIgBAOQAAAMgEAEQgCAGgGgBIgDAAIAAgGIACAAQAEgBABgDQABgEAAgJIABgSIAYAAIAAApg");
	this.shape_151.setTransform(1351.1425,375.6324,1.8904,1.8904);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#1D1D1B").s().p("AgLARQgDgFgBgKIAAgDQAAgJAEgGQAFgFAGAAQAHAAAFAFQAFAHAAAIIAAADQAAAJgFAGQgEAFgIAAQgHAAgEgFgAgGgLQgCAFAAAFIAAADQAAAGACAEQADAEADAAQAKAAAAgNIAAgEQgBgFgCgFQgDgEgEAAQgDAAgDAEg");
	this.shape_152.setTransform(1343.959,375.6324,1.8904,1.8904);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIAKgSIAJAAIgPAUIAQAVg");
	this.shape_153.setTransform(1337.1064,375.6324,1.8904,1.8904);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#1D1D1B").s().p("AgKASQgEgFAAgKIAAgDQAAgKAEgGQAEgFAGAAQAIAAADAEQAEAGAAAKIAAADIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgHAAgEgEgAgFgMQgCAEAAAFIAPAAIAAgBQAAgEgCgFQgCgCgEAAQgDAAgCADg");
	this.shape_154.setTransform(1326.1422,375.6324,1.8904,1.8904);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#1D1D1B").s().p("AgKASQgEgFAAgKIAAgDQAAgKAEgGQAEgFAGAAQAIAAADAEQAEAGAAAKIAAADIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgHAAgEgEgAgFgMQgCAEAAAFIAPAAIAAgBQAAgEgCgFQgCgCgEAAQgDAAgCADg");
	this.shape_155.setTransform(1319.0532,375.6324,1.8904,1.8904);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#1D1D1B").s().p("AATAcIAAgNIgrAAIAAgqIAHAAIAAAkIAMAAIAAgkIAGAAIAAAkIAMAAIAAgkIAHAAIAAAkIAFAAIAAATg");
	this.shape_156.setTransform(1310.1212,376.8139,1.8904,1.8904);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#1D1D1B").s().p("AgKAaQgFgHAAgJIAAgDQAAgNAFgIQADgHAHgDQAFAAACgCQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAGAAIgBACQAAAHgGADIgGABQgEACgDADQgDAFAAAFQAFgHAFAAQAHAAAEAFQAEAEAAAKIAAAAQAAAJgFAHQgDAFgIAAQgGAAgEgFgAgGAAQgCAEAAAGQAAAHACAEQACAEAEAAQAEAAADgEQACgDAAgJQAAgGgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_157.setTransform(1300.9528,373.931,1.8904,1.8904);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgKIAAgDQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAJgEAGQgEAFgIAAQgGAAgFgFgAgGgLQgCAEAAAGIAAADQAAAHACADQACAEAEAAQAJAAAAgNIAAgEQAAgGgCgEQgCgEgFAAQgEAAgCAEg");
	this.shape_158.setTransform(1293.4386,375.6324,1.8904,1.8904);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#1D1E1B").ss(0.6,1).p("AhzAjIDnhF");
	this.shape_159.setTransform(1259.4117,383.2412,1.8904,1.8904);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#1E71B8").s().p("AgMAJQAAgHAIgCQgHgDAAgGQAAgEAEgDQADgCAEAAQALAAAAAJQAAAGgGADIAAAAQAIACAAAGQAAAFgEAEQgEACgFAAQgMABAAgLgAgHAIQAAAIAHAAQAHAAAAgHQAAgGgHgCQgHACAAAFgAgGgJQAAAFAHACQAFgCAAgFQAAgGgGAAQgGAAAAAGg");
	this.shape_160.setTransform(1242.6204,425.1502,1.8903,1.8903);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#936037").s().p("AABATIAAggIgFADIgBgDIAHgFIAEAAIAAAlg");
	this.shape_161.setTransform(1225.0407,425.1974,1.8903,1.8903);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#936037").s().p("AABATIAAggIAAAAIgGADIgBgDIAIgFIAFAAIAAAlg");
	this.shape_162.setTransform(1219.4171,425.1974,1.8903,1.8903);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#006633").s().p("AgMAAQAAgSAMAAQANAAAAASQAAATgNAAQgMAAAAgTgAgHAAQAAAQAHAAQAHAAAAgQQAAgPgHAAQgHAAAAAPg");
	this.shape_163.setTransform(1205.3817,425.1974,1.8903,1.8903);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#006633").s().p("AgLATIAAgDIAEgEQANgMAAgHQAAgHgGAAQgFAAgDADIgCgEQAFgDAFAAQALAAAAAKQAAAIgMAMIgDADIAAAAIAQAAIAAAEg");
	this.shape_164.setTransform(1199.6636,425.1502,1.8903,1.8903);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#B14E97").s().p("AABATIAAggIgFAEIgBgFIAHgEIAEAAIAAAlg");
	this.shape_165.setTransform(1183.6434,425.1502,1.8903,1.8903);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#B14E97").s().p("AgJATIAQghIgSAAIAAgEIAXAAIAAADIgQAig");
	this.shape_166.setTransform(1178.5396,425.1502,1.8903,1.8903);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#B14E97").s().p("AgpAxQgHAAAAgHIAAhTQAAgDACgDQACgBADgBIBTAAQAHAAAAAIIAABTQAAAHgHAAgAgmAoIBNAAIAAhPIhNAAg");
	this.shape_167.setTransform(1181.375,425.0557,1.8903,1.8903);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FCD3B3").s().p("AgpAxQgHAAAAgHIAAhTQAAgDACgDQACgBADgBIBTAAQAHAAAAAIIAABTQAAAHgHAAg");
	this.shape_168.setTransform(1181.375,425.0557,1.8903,1.8903);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#B14E97").s().p("AABATIAAggIgFAEIgBgFIAHgEIAEAAIAAAlg");
	this.shape_169.setTransform(1180.9025,404.735,1.8903,1.8903);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#0D8F38").s().p("AABATIAAggIgFADIgBgDIAHgFIAEAAIAAAlg");
	this.shape_170.setTransform(1180.9025,384.2254,1.8903,1.8903);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#1D1D1B").s().p("AgOAXIABgGQAEADAHABQALAAAAgMQAAgKgNAAIgHAAIADgZIAWAAIAAAGIgRAAIgCANIAEAAQAGAAADADQAHAEAAAIQAAAIgFAGQgFAEgHAAQgGABgGgEg");
	this.shape_171.setTransform(1229.7664,392.3537,1.8903,1.8903);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#1D1D1B").s().p("AAFAaIAAgPIgWAAIAAgEIAVggIAHAAIAAAfIAHAAIAAAFIgHAAIAAAPgAABgLIgLARIAPAAIABgYIgBAAg");
	this.shape_172.setTransform(1222.6306,392.2591,1.8903,1.8903);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#1D1D1B").s().p("AACAaIAAgsIgIAEIgBgFIAKgGIAFAAIAAAzg");
	this.shape_173.setTransform(1214.8332,392.2591,1.8903,1.8903);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#1E71B8").s().p("AgLARIACgEQADACAFAAQAIAAAAgIQAAgIgKAAIgFABIACgSIARAAIAAAEIgNAAIgCAKIADAAQAFAAACACQAGACAAAGQAAAGgEAEQgEADgFAAQgGAAgEgCg");
	this.shape_174.setTransform(1222.0163,445.7543,1.8903,1.8903);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#1E71B8").s().p("AgIAUIAAgFIAEAAQAEAAADgDQAEgFABgFQgEADgEAAQgMAAAAgKQAAgGAEgDQAEgEAEgBQANAAAAAQQAAALgHAGQgEAFgGABgAgGgFQAAAGAGABQAFAAACgEIABgBQAAgLgIAAIAAAAQgGgBAAAKg");
	this.shape_175.setTransform(1201.6011,445.6598,1.8903,1.8903);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#B14E97").s().p("AgMAKQAAgHAIgDIAAAAQgGgCAAgGQAAgLAKAAQALAAAAAKQAAAGgGACIAAABQAIABAAAIQAAAEgEADQgEAEgFAAQgMgBAAgJgAgHAJQAAAHAHAAQAHAAAAgHQAAgFgHgDQgHACAAAGgAgGgIQAAAEAHACQAFgCAAgEQAAgHgGABIAAAAQgGgBAAAHg");
	this.shape_176.setTransform(1184.116,445.6598,1.8903,1.8903);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#B14E97").s().p("AABATIAAggIgFADIgBgEIAHgEIAEAAIAAAlg");
	this.shape_177.setTransform(1177.9725,445.7071,1.8903,1.8903);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#0B943A").s().p("AgpAyQgHAAAAgIIAAhUQAAgCACgCQACgCADAAIBTAAQAHAAAAAGIAABUQAAAIgHAAgAgmAnIBNAAIAAhNIhNAAg");
	this.shape_178.setTransform(1181.375,384.3199,1.8903,1.8903);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#B0DBD6").s().p("AgpAyQgHAAAAgIIAAhUQAAgCACgCQACgCADAAIBTAAQAHAAAAAGIAABUQAAAIgHAAg");
	this.shape_179.setTransform(1181.375,384.3199,1.8903,1.8903);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#B14E97").s().p("AgpAxQgHAAAAgHIAAhTQAAgHAHAAIBTAAQAHAAAAAHIAABTQAAAHgHAAgAgmAnIBNAAIAAhNIhNAAg");
	this.shape_180.setTransform(1181.7531,404.6878,1.8903,1.8903);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FAF08F").s().p("AgpAxQgHAAAAgHIAAhTQAAgHAHAAIBTAAQAHAAAAAHIAABTQAAAHgHAAg");
	this.shape_181.setTransform(1181.7531,404.6878,1.8903,1.8903);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#0086CD").s().p("AgpAxQgHAAAAgHIAAhTQAAgDACgCQACgCADAAIBTAAQAHAAAAAHIAABTQAAAHgHAAgAgmAnIBNAAIAAhNIhNAAg");
	this.shape_182.setTransform(1243.1875,425.0084,1.8903,1.8903);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FCD3B3").s().p("AgpAxQgHAAAAgHIAAhTQAAgDACgCQACgCADAAIBTAAQAHAAAAAHIAABTQAAAHgHAAg");
	this.shape_183.setTransform(1243.1875,425.0084,1.8903,1.8903);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#B06916").s().p("AgpAxQgHAAgBgHIAAhTQABgHAHAAIBTAAQAIAAgBAHIAABTQABAHgIAAgAgnAnIBPAAIAAhNIhPAAg");
	this.shape_184.setTransform(1222.7251,425.0084,1.8903,1.8903);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FCD3B3").s().p("AgpAxQgHAAgBgHIAAhTQABgHAHAAIBTAAQAIAAgBAHIAABTQABAHgIAAg");
	this.shape_185.setTransform(1222.7251,425.0084,1.8903,1.8903);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#0B943A").s().p("AgpAxQgHAAAAgHIAAhTQAAgHAHAAIBTAAQAHAAAAAHIAABTQAAAHgHAAgAgmAnIBNAAIAAhNIhNAAg");
	this.shape_186.setTransform(1202.1682,425.0084,1.8903,1.8903);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FCD3B3").s().p("AgpAxQgHAAAAgHIAAhTQAAgHAHAAIBTAAQAHAAAAAHIAABTQAAAHgHAAg");
	this.shape_187.setTransform(1202.1682,425.0084,1.8903,1.8903);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#0086CD").s().p("AgpAxQgHAAAAgHIAAhTQAAgHAHAAIBTAAQAHAAAAAHIAABTQAAAHgHAAgAgmAnIBNAAIAAhNIhNAAg");
	this.shape_188.setTransform(1222.3943,445.4235,1.8903,1.8903);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#EDB6D5").s().p("AgpAxQgHAAAAgHIAAhTQAAgHAHAAIBTAAQAHAAAAAHIAABTQAAAHgHAAg");
	this.shape_189.setTransform(1222.3943,445.4235,1.8903,1.8903);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#36A9E1").s().p("AgpAxQgHAAAAgHIAAhTQAAgHAHAAIBTAAQAHAAABAHIAABTQgBAHgHAAgAgmAnIBOAAIAAhNIhOAAg");
	this.shape_190.setTransform(1201.9319,445.4235,1.8903,1.8903);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#EDB6D5").s().p("AgpAxQgHAAAAgHIAAhTQAAgHAHAAIBTAAQAHAAABAHIAABTQgBAHgHAAg");
	this.shape_191.setTransform(1201.9319,445.4235,1.8903,1.8903);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#B14E97").s().p("AgpAxQgHAAAAgHIAAhTQAAgHAHAAIBTAAQAHAAAAAHIAABTQAAAHgHAAgAgmAnIBNAAIAAhNIhNAAg");
	this.shape_192.setTransform(1181.375,445.4235,1.8903,1.8903);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#EDB6D5").s().p("AgpAxQgHAAAAgHIAAhTQAAgHAHAAIBTAAQAHAAAAAHIAABTQAAAHgHAAg");
	this.shape_193.setTransform(1181.375,445.4235,1.8903,1.8903);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#432918").ss(0.3).p("ADeDsIm7AAQgGAAgEgEQgEgEAAgGIAAm7QAAgGAEgEQAEgEAGAAIG7AAQAGAAAEAEQAEAEAAAGIAAG7QAAAGgEAEQgEAEgGAAg");
	this.shape_194.setTransform(1212.4358,414.3379,1.8904,1.8904);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFEF7").s().p("AjdDsQgGAAgEgEQgEgEAAgGIAAm7QAAgGAEgEQAEgEAGAAIG7AAQAGAAAEAEQAEAEAAAGIAAG7QAAAGgEAEQgEAEgGAAg");
	this.shape_195.setTransform(1212.4358,414.3379,1.8904,1.8904);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#D70465").ss(0.4).p("Ag9AMQAGgWABgGQADgPANgGQAOgHAFACQADABADgCQAKgEADAEQACACACAEQABACACgBQAngDALANQAHAIAAAKQAAAHgDANIgBAEQAAACABAOQAAANgBAAQgaACgBgDQgCgZgCAAIgTgCQAAAAgBAAQgBAAAAABQABAagCAAQgVADgBgDQgCgKAAgDQAAgRgGgFQgKgJgJAGQgLAJAAAIQAAAHAFgEQADgBgBgCQgBAAAAgBQAAgBACgBQAKAAAAABQgBADgCAAQgBAAAAADQgBADgDACQgHAFgGgDQgHgEAAgGg");
	this.shape_196.setTransform(87.656,519.1595,1.8904,1.8904);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#DF8290").s().p("AAhAsQgCgZgCAAIgTgCIgBAAIgBABQABAagCAAQgVADgBgDIgCgNQAAgRgGgFQgKgJgJAGQgLAJAAAIQAAAHAFgEQABAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIACgCQAKAAAAABQAAABgBABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQgBADgDACQgHAFgGgDQgHgEAAgGIACgMIAHgcQADgPANgGQAOgHAFACQADABADgCQAKgEADAEIAEAGQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAngDALANQAHAIAAAKQAAAHgDANIgBAEIABAQQAAANgBAAIgPABQgLAAgBgCg");
	this.shape_197.setTransform(87.6591,519.1595,1.8904,1.8904);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#D70465").ss(0.3).p("AAegZIgLAYQgSAWgggCIgJAAQgBAAAAACQAAABACAAQAKAFAUgBQAdgCALgYIAJgYg");
	this.shape_198.setTransform(75.727,516.5617,1.8904,1.8904);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#DF8290").s().p("AgmAWQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIABgCIAJAAQAgACASgWIALgYIAKABIgJAYQgLAYgdACIgJAAQgNAAgIgEg");
	this.shape_199.setTransform(75.5607,516.593,1.8904,1.8904);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#432918").ss(0.4).p("AAKAPIgTAAIAAgYQAAgDAGgCQAIgBADADQACABAAABg");
	this.shape_200.setTransform(93.1413,473.8579,1.8904,1.8904);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFED00").s().p("AgJAPIAAgYQAAgDAGgCQAIgBADADQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAIAAAZg");
	this.shape_201.setTransform(93.1413,473.8579,1.8904,1.8904);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#432918").ss(0.4,0,1).p("AAAgKIAAAV");
	this.shape_202.setTransform(88.7461,470.3877,1.8904,1.8904);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#432918").ss(0.4,0,1).p("AAAgKIAAAV");
	this.shape_203.setTransform(82.4133,470.3877,1.8904,1.8904);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#432918").ss(0.4).p("AAAgXQAEAFAPAMQAGAEACAEQAGALgIAJQgBACgDAAIgqAAIgCgBQgFgFAAgHQAAgGAEgFQADgEAHgFQAKgHAEgHg");
	this.shape_204.setTransform(93.1722,463.8659,1.8904,1.8904);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFED00").s().p("AgVAYIgCgBQgFgFAAgHQAAgGAEgFQADgEAHgFQAKgHAEgHQAEAFAPAMQAGAEACAEQAGALgIAJQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_205.setTransform(93.1722,463.8659,1.8904,1.8904);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#432918").ss(0.4).p("AAAgXQADADAQAOQAFADADAFQAGALgIAJQgCACgCAAIgqAAIgCgBQgFgFAAgHQAAgGAEgFQAEgFAGgEQAKgHAEgHg");
	this.shape_206.setTransform(78.025,463.8659,1.8904,1.8904);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFED00").s().p("AgVAYIgCgBQgFgFAAgHQAAgGAEgFQAEgFAGgEQAKgHAEgHIATARQAFADADAFQAGALgIAJQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_207.setTransform(78.025,463.8659,1.8904,1.8904);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#432918").ss(0.4).p("AAKAPIgTAAIAAgYQAAgDAGgCQAIgBADADQACABAAABg");
	this.shape_208.setTransform(78.4908,473.8579,1.8904,1.8904);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFED00").s().p("AgJAPIAAgYQAAgDAGgCQAIgBADADIACACIAAAZg");
	this.shape_209.setTransform(78.4908,473.8579,1.8904,1.8904);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#693C11").ss(0.4).p("AAAgNQADADAMAIQADACACADQAEAHgGAGIgiAAIgBgBQgIgHAIgIQABgBAIgFg");
	this.shape_210.setTransform(85.6643,456.3819,1.8904,1.8904);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFED00").s().p("AgQAPIgBgBQgIgGAIgIIAJgGIAIgIIAPALQADADACACQAEAHgGAGg");
	this.shape_211.setTransform(85.6643,456.5407,1.8904,1.8904);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#432918").ss(0.5,0,1).p("Ag/A0IB/AAIAAg4IgwAAIAAgvIggAAIAAAvIgvAAg");
	this.shape_212.setTransform(85.5797,469.159,1.8904,1.8904);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#B8C5CC").s().p("Ag/A0IAAg4IAvAAIAAgvIAgAAIAAAvIAwAAIAAA4g");
	this.shape_213.setTransform(85.5797,469.159,1.8904,1.8904);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#432918").ss(0.4,0,1).p("AAMAAIgXAA");
	this.shape_214.setTransform(85.6742,450.8695,1.8904,1.8904);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#432918").ss(0.4,0,1).p("AAAANIAAgZ");
	this.shape_215.setTransform(85.7215,451.1531,1.8904,1.8904);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#432918").ss(0.4,0,1).p("AAMAAIgXAA");
	this.shape_216.setTransform(93.1413,456.9188,1.8904,1.8904);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#432918").ss(0.4,0,1).p("AAAANIAAgZ");
	this.shape_217.setTransform(93.1885,457.2023,1.8904,1.8904);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#432918").ss(0.4,0,1).p("AAMAAIgXAA");
	this.shape_218.setTransform(78.0182,456.9188,1.8904,1.8904);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#432918").ss(0.4,0,1).p("AAAANIAAgZ");
	this.shape_219.setTransform(77.9709,457.2023,1.8904,1.8904);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#432918").ss(0.4,0,1).p("AAPgSIAAA1IgdAAIAAg1QAAgEACgEQAEgIAIAAIAHACQAHADABALg");
	this.shape_220.setTransform(76.8367,438.8628,1.8904,1.8904);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#BAC8CF").s().p("AgOAjIAAg1QAAgEACgEQAEgIAIAAIAHACQAHADABALIAAA1g");
	this.shape_221.setTransform(76.8367,438.8628,1.8904,1.8904);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#432918").ss(0.4,0,1).p("AAPgSIAAA1IgdAAIAAg1QAAgEACgEQAEgIAIAAIAHACQAHADABALg");
	this.shape_222.setTransform(93.3303,438.8628,1.8904,1.8904);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#BAC8CF").s().p("AgOAjIAAg1QAAgEACgEQAEgIAIAAIAHACQAHADABALIAAA1g");
	this.shape_223.setTransform(93.3303,438.8628,1.8904,1.8904);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#432918").ss(0.4,0,1).p("AAPgSIAAA1IgdAAIAAg1QAAgEACgEQAEgIAIAAIAHACQAHADABALg");
	this.shape_224.setTransform(98.9542,438.8628,1.8904,1.8904);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#BAC8CF").s().p("AgOAjIAAg1QAAgEACgEQAEgIAIAAIAHACQAHADABALIAAA1g");
	this.shape_225.setTransform(98.9542,438.8628,1.8904,1.8904);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#432918").ss(0.4,0,1).p("AAPgLIAAAXIgdAAIAAgXg");
	this.shape_226.setTransform(85.0599,433.5725,1.8904,1.8904);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#BAC8CE").s().p("AgOAMIAAgXIAdAAIAAAXg");
	this.shape_227.setTransform(85.0599,433.5725,1.8904,1.8904);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#7D4E24").ss(0.4).p("AAPAWIgdAAQgLgRAGgHQADgEAJgHIAHgGIAIAGQAIAFADAEQADADAAABQACAIgJAOg");
	this.shape_228.setTransform(85.0401,427.2159,1.8904,1.8904);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFED00").s().p("AgOAVQgLgRAGgHQADgEAJgHIAHgGIAIAGQAIAFADAEIADAFQACAHgJAOg");
	this.shape_229.setTransform(85.0401,427.3343,1.8904,1.8904);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#432918").ss(0.5,0,1).p("AgKAAIAUAA");
	this.shape_230.setTransform(84.8708,420.1508,1.8904,1.8904);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#432918").ss(0.5,0,1).p("AAAAQIAAgf");
	this.shape_231.setTransform(84.8655,420.8498,1.8903,1.8903);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#432918").ss(0.4,0,1).p("AAdAZIAAgyIg5AAIAAAyIANAAIAAgQQAAgGAFgDQAEgEAGAAQAHAAAEAEQAFADAAAGIAAAQg");
	this.shape_232.setTransform(85.1071,440.6615,1.8904,1.8904);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#BAC8CE").s().p("AAQAZIAAgQQAAgGgFgDQgEgDgHAAQgGAAgEADQgFADAAAGIAAAQIgNAAIAAgyIA5AAIAAAyg");
	this.shape_233.setTransform(85.1071,440.6615,1.8904,1.8904);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#432918").ss(0.3,0,1).p("AAIgJIAAAbIgPAAIAAgbQAAgCABgCQACgEAEABIAEAAQAEACAAAFg");
	this.shape_234.setTransform(84.4455,391.9789,1.8904,1.8904);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FEE3BA").s().p("AgHASIAAgbIABgEQACgEAEABIAEAAQAEACAAAFIAAAbg");
	this.shape_235.setTransform(84.4455,391.9789,1.8904,1.8904);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#432918").ss(0.3,0,1).p("AAIgGIAAATIgPAAIAAgTQAAgCABgBQACgDAEAAIADABQAEACABADg");
	this.shape_236.setTransform(97.2528,371.2845,1.8904,1.8904);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FEE3BA").s().p("AgHANIAAgTIABgDQACgDAEAAIADABQAEACABADIAAATg");
	this.shape_237.setTransform(97.2528,371.2845,1.8904,1.8904);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#432918").ss(0.3,0,1).p("AAIgGIAAATIgPAAIAAgTQAAgBABgCQACgDAEAAIADABQAEACABADg");
	this.shape_238.setTransform(97.2528,379.2714,1.8904,1.8904);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FEE3BA").s().p("AgHANIAAgTIABgDQACgDAEAAIADABQAEACABADIAAATg");
	this.shape_239.setTransform(97.2528,379.2714,1.8904,1.8904);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#432918").ss(0.3,0,1).p("AAIgGIAAATIgPAAIAAgTQAAgBACgCQABgDAEABIAEAAQADACABADg");
	this.shape_240.setTransform(89.7858,391.0322,1.8904,1.8904);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FEE3BA").s().p("AgHANIAAgTIABgDQACgDAEABIADAAQAEACABADIAAATg");
	this.shape_241.setTransform(89.7858,391.0322,1.8904,1.8904);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#432918").ss(0.3,0,1).p("AAIgGIAAATIgPAAIAAgTQAAgBACgCQABgDAEABIAEAAQADACABADg");
	this.shape_242.setTransform(79.1052,391.0322,1.8904,1.8904);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FEE3BA").s().p("AgHANIAAgTIACgDQABgDAEABIAEAAQADACAAADIAAATg");
	this.shape_243.setTransform(79.1052,391.0322,1.8904,1.8904);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#432918").ss(0.4,0,1).p("Ag0gWIAAAtIAtAAIAAgdQAAgBABgCQACgDAEABIADAAQAEACABADIAAAdIAtAAIAAgtgAgVAKIgOAAIAAgPQAAgBABgCQACgCAEAAIADABQAEABAAADgAAjAKIgOAAIAAgPQAAgBABgBQACgDAEAAIADABQADABABADg");
	this.shape_244.setTransform(84.54,391.039,1.8904,1.8904);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#E07C48").s().p("AAIAXIAAgcQgBgEgEgCIgDAAQgEAAgCACIgBAEIAAAcIgtAAIAAgsIBpAAIAAAsgAAWgHIgBACIAAAQIAOAAIAAgQQgBgDgDgBIgDgBQgEAAgCADgAgigHIgBACIAAAPIAOAAIAAgPQAAgDgEgBIgDgBIgBAAQgEAAgBADg");
	this.shape_245.setTransform(84.54,391.039,1.8904,1.8904);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#432918").ss(0.4,0,1).p("AA4AHIhvAAIAAgFIAegIIAyAAIAfAIg");
	this.shape_246.setTransform(84.54,385.4151,1.8904,1.8904);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#E07C48").s().p("Ag3AHIAAgFIAegIIAyAAIAfAIIAAAFg");
	this.shape_247.setTransform(84.54,385.4151,1.8904,1.8904);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#432918").ss(0.4,0,1).p("AAHAKIgNAAIAAgSQAAgBABgBQACgDADAAIAEAAQADACAAADgAgPgUIAAAjIgCAGIAjAAIgCgGIAAgjg");
	this.shape_248.setTransform(97.2056,371.7098,1.8904,1.8904);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#E07C48").s().p("AgRAVIACgGIAAgjIAfAAIAAAjIACAGgAgFgKIgBACIAAASIANAAIAAgSQAAgDgDgCIgEAAQgDAAgCADg");
	this.shape_249.setTransform(97.2056,371.7098,1.8904,1.8904);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#432918").ss(0.4,0,1).p("AAQADQAAgFgFgEQgEgEgHAAQgFAAgFAEQgFAEAAAFIABAEQABAEANAAQAOAAABgEg");
	this.shape_250.setTransform(97.2056,366.8894,1.8904,1.8904);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#E07C48").s().p("AgOAHIgBgEQAAgFAFgEQAFgEAFAAQAHAAAEAEQAFAEAAAFIgBAEQgBAEgOAAQgNAAgBgEg");
	this.shape_251.setTransform(97.2056,366.8894,1.8904,1.8904);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#432918").ss(0.4,0,1).p("AgUgSIAAAlIApAAIAAglgAAHAMIgNAAIAAgSQAAgBABgBQACgDADAAIAEABQADABAAADg");
	this.shape_252.setTransform(97.2056,379.3186,1.8904,1.8904);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#E07C48").s().p("AgUATIAAglIApAAIAAAlgAgFgIIgBACIAAASIANAAIAAgSQAAgEgDgBIgEAAQgDAAgCADg");
	this.shape_253.setTransform(97.2056,379.3186,1.8904,1.8904);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#432918").ss(0.4,0,1).p("AgJgKIgWAVIA/AAIgWgVg");
	this.shape_254.setTransform(84.54,377.6645,1.8904,1.8904);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#E07C48").s().p("AgfALIAWgVIATAAIAWAVg");
	this.shape_255.setTransform(84.54,377.6645,1.8904,1.8904);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#432918").ss(0.4,0,1).p("AAZgKIgxAAIAAAVIAxAAg");
	this.shape_256.setTransform(84.4455,381.9179,1.8904,1.8904);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#E07C48").s().p("AgYALIAAgVIAxAAIAAAVg");
	this.shape_257.setTransform(84.4455,381.9179,1.8904,1.8904);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#432918").ss(0.4,0,1).p("AggAFIBBAAIAAgJIhBAAg");
	this.shape_258.setTransform(97.2528,383.9028,1.8904,1.8904);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#E07C48").s().p("AggAFIAAgJIBBAAIAAAJg");
	this.shape_259.setTransform(97.2528,383.9028,1.8904,1.8904);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#432918").ss(0.4,0,1).p("AgcASIA4AAIAAgjIg4AAg");
	this.shape_260.setTransform(97.2528,388.2034,1.8904,1.8904);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#E07C48").s().p("AgbASIAAgiIA3AAIAAAig");
	this.shape_261.setTransform(97.2528,388.2034,1.8904,1.8904);

	this.instance = new lib.Group_11();
	this.instance.setTransform(1580.05,617.85,1.8904,1.8904,0,0,0,5,5.2);
	this.instance.alpha = 0.6992;

	this.instance_1 = new lib.Group_12();
	this.instance_1.setTransform(1585.6,586.6,1.8904,1.8904,0,0,0,7.5,5.2);
	this.instance_1.alpha = 0.6992;

	this.instance_2 = new lib.Group_13();
	this.instance_2.setTransform(1586.15,552.8,1.8904,1.8904,0,0,0,7.8,5.2);
	this.instance_2.alpha = 0.6992;

	this.instance_3 = new lib.Group_14();
	this.instance_3.setTransform(1580.85,521.4,1.8904,1.8904,0,0,0,5,5.2);
	this.instance_3.alpha = 0.6992;

	this.instance_4 = new lib.Group_15();
	this.instance_4.setTransform(1575.55,487.05,1.8904,1.8904,0,0,0,2.2,5.2);
	this.instance_4.alpha = 0.6992;

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#1D1D1B").s().p("AgNAVIAAgpIAHAAIAAAPIAHAAQAGgBAEAEQADADAAAGQAAAGgDAEQgDAEgHAAgAgGAPIAHAAIAFgCQABgBAAgFQAAgDgBgCQgCgCgDAAIgHAAg");
	this.shape_262.setTransform(1752.7539,617.3176,1.8904,1.8904);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#1D1D1B").s().p("AgCAVIAAgjIgMAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_263.setTransform(1745.7122,617.3176,1.8904,1.8904);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgFQAAgIAEgGQAFgFAGAAQAHAAADAFQAEADAAAIIgGAAQAAgFgDgDQgBgCgEAAQgDAAgDADQgCADAAAHIAAAFQAAAHACADQACADAEAAQAEAAABgCQADgDAAgDIAGAAQAAAGgEAEQgEAEgGAAQgHAAgEgFg");
	this.shape_264.setTransform(1739.0959,617.3176,1.8904,1.8904);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#1D1D1B").s().p("AgLATQgDgDAAgGQAAgGAFgEQAFgDAGgBIAFAAIAAgEQAAgDgCgCQgCgCgDAAQgCAAgCACQgBAAAAABQgBABAAAAQAAABAAAAQAAABAAAAIgHAAIACgFQACgEADgBQADgCADAAQAHAAADADQAEAEAAAGIAAAUIABAJIAAAAIgHAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQgEAGgFAAQgFAAgEgDgAgEADQgDADAAADQAAADACACQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAIAEgBIAEgDIAAgKIgEAAIgHACg");
	this.shape_265.setTransform(1731.9124,617.3176,1.8904,1.8904);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#1D1D1B").s().p("AAKAVIAAgjIgLAAIAAAOQgBALgCAFQgDAFgGAAIgCAAIAAgGIABgBQADAAACgDIACgfIAXAAIAAApg");
	this.shape_266.setTransform(1724.0673,617.3176,1.8904,1.8904);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#1D1D1B").s().p("AgLAZQgEgGAAgJIAAgEQAAgLAEgJQAFgIAGgBIAGgDQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAFAAIAAACQgBAIgGACIgFABQgEABgCAEQgDADgBAGQAFgGAFAAQAHAAAEAFQAEAFAAAJIAAAAQAAAJgEAGQgFAGgHAAQgGAAgFgGgAgFAAQgDACAAAIQAAAIADADQACAEADAAQAEAAACgEQADgEAAgIQAAgGgDgDQgCgDgEAAQgDAAgCADg");
	this.shape_267.setTransform(1717.0257,615.6635,1.8904,1.8904);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgFQAFgGAGAAQAHAAAFAGQAEAFAAAIIAAAEQAAAKgEAEQgEAGgIAAQgGAAgFgFgAgGgLQgCAEAAAGIAAADQAAAHACAEQACADAEAAQAJAAABgNIAAgEQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_268.setTransform(1709.4169,617.3176,1.8904,1.8904);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#1D1D1B").s().p("AAJAVIAAgQIgJAAIgHAQIgHAAIAJgRQgDgCgDgCQgBgDAAgEQAAgGADgDQAEgEAFAAIAPAAIAAApgAgDgMQgCACAAADIACAFQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAIAJAAIAAgOIgJAAQgCAAgBACg");
	this.shape_269.setTransform(1698.1219,617.3176,1.8904,1.8904);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#1D1D1B").s().p("AgKATQgEgDAAgGQAAgGAFgEQAFgDAGgBIAFAAIAAgEQAAgDgCgCQgCgCgDAAQgCAAgCACQgBAAAAABQAAABgBAAQAAABAAAAQAAABAAAAIgHAAIACgFQACgEADgBQADgCADAAQAHAAADADQAEAEAAAGIAAAUIABAJIAAAAIgHAAIgBgFQgEAGgFAAQgFAAgDgDgAgEADQgDADAAADQAAADACACQABACAEgBIADgBIAEgDIAAgKIgEAAQgFABgCABg");
	this.shape_270.setTransform(1691.2692,617.3176,1.8904,1.8904);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgDAAIAAASIgIAAIAAgpIAIAAIAAASIADAAIALgSIAHAAIgNAUIAPAVg");
	this.shape_271.setTransform(1684.4166,617.3176,1.8904,1.8904);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgFQAAgIAEgGQAFgFAGAAQAHAAADAFQADACABAJIgGAAQgBgGgCgCQgBgCgEAAQgEAAgCADQgCACAAAIIAAAFQAAAHACADQACADAEAAQADAAACgCQACgCABgEIAGAAQgBAHgDADQgEAEgGAAQgHAAgEgFg");
	this.shape_272.setTransform(1676.9969,617.3176,1.8904,1.8904);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQADgGABgIIABgSIAWAAIAAAjIAFAAIAAASgAgCgJQgBAKgEAIIAOAAIAAgdIgJAAg");
	this.shape_273.setTransform(1669.2936,618.4991,1.8904,1.8904);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#1D1D1B").s().p("AgKARQgEgFgCgJIAAgEQAAgJAFgFQAFgGAGAAQAHAAAFAGQAEAFAAAIIAAAEQAAAKgEAEQgFAGgHAAQgGAAgEgFgAgGgLQgCAEgBAGIAAADQABAHACAEQADADADAAQAJAAAAgNIAAgEQABgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_274.setTransform(1662.0156,617.3176,1.8904,1.8904);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQADgGAGAAQAHAAADAFQADAFABAKIAAAEQAAAJgEAFQgDAFgHAAQgFAAgEgFIAAAVgAgIgRIAAAVQADAEAFAAQAEAAACgDQACgEAAgFIAAgFQAAgGgCgEQgCgDgEAAQgFAAgDAFg");
	this.shape_275.setTransform(1654.6904,618.7826,1.8904,1.8904);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#1D1D1B").s().p("AgLARQgEgHgBgHIAAgEQABgJAEgFQAEgGAHAAQAHAAAEAGQAFAFABAIIAAAEQAAAKgFAEQgFAGgHAAQgHAAgEgFgAgGgLQgDAEABAGIAAADQgBAHADAEQADADADAAQAJAAABgNIAAgEQgBgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_276.setTransform(1646.9871,617.3176,1.8904,1.8904);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#1D1D1B").s().p("AgLAVIAAgpIAXAAIAAAGIgPAAIAAAjg");
	this.shape_277.setTransform(1640.9378,617.3176,1.8904,1.8904);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#1D1D1B").s().p("AgOAVIAAgpIAOAAQAGAAAEADQAEADAAAFQAAAEgCACQgBACgDABQADAAACADQACADAAADQAAAGgEADQgDADgHAAgAgHAPIAIAAQAHAAAAgGQAAgGgHAAIgIAAgAgHgCIAHAAQAHAAAAgGQAAgGgHAAIgHAAg");
	this.shape_278.setTransform(1634.0852,617.3176,1.8904,1.8904);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgFQAEgGAHAAQAHAAAFAGQAEAFAAAIIAAAEQAAAKgEAEQgFAGgHAAQgGAAgFgFgAgGgLQgDAEAAAGIAAADQAAAHADAEQACADAEAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_279.setTransform(1626.3346,617.3176,1.8904,1.8904);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#1D1D1B").s().p("AALAcIAAgaIgWAAIAAAaIgHAAIAAg3IAHAAIAAAYIAWAAIAAgYIAIAAIAAA3g");
	this.shape_280.setTransform(1617.8279,615.947,1.8904,1.8904);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#1D1D1B").s().p("AgNAVIAAgpIAHAAIAAAPIAHAAQAFAAAFADQADACAAAHQAAAHgDAEQgEADgGAAgAgGAPIAHAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAABgBQACgCAAgEQAAgDgCgCQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgHAAg");
	this.shape_281.setTransform(1731.1563,585.1811,1.8904,1.8904);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#1D1D1B").s().p("AgCAVIAAgjIgMAAIAAgGIAdAAIAAAGIgLAAIAAAjg");
	this.shape_282.setTransform(1724.1146,585.1811,1.8904,1.8904);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgFQAAgIAEgGQAFgFAGAAQAGAAAEAFQADACABAJIgGAAQgBgGgCgCQgCgCgDAAQgEAAgCADQgCACAAAIIAAAFQAAAHACADQACADAEAAQADAAACgCQACgCABgEIAGAAQgBAGgDAEQgEAEgGAAQgHAAgEgFg");
	this.shape_283.setTransform(1717.5455,585.1811,1.8904,1.8904);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAEgDQAFgEAGAAIAFAAIAAgEQAAgDgBgDQgCgBgDAAQgDAAgBACQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAABIgHAAQAAgEACgCQABgDAEgCQACgCAEAAQAHAAADAEQADADAAAGIAAAUQAAAFACAEIAAAAIgHAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQgEAGgFAAQgGAAgDgDgAgEADQgDADAAADQAAADABACQACABADAAIAEgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIAAgKIgDAAIgHACg");
	this.shape_284.setTransform(1710.3621,585.1811,1.8904,1.8904);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBAMgDAEQgCAFgGAAIgCAAIAAgGIABgBQADABABgEQACgDAAgKIABgSIAXAAIAAApg");
	this.shape_285.setTransform(1702.517,585.1811,1.8904,1.8904);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#1D1D1B").s().p("AgLAZQgEgFAAgKIAAgEQAAgMAEgIQAEgIAHgBIAGgDQABAAAAgBQAAAAAAAAQABgBAAgBQAAAAAAgBIAGAAIAAACQgBAIgHACIgFABQgDABgEAEQgDAFAAAEQAFgGAFAAQAHAAAEAFQAEAEAAAKIAAAAQAAAJgEAGQgFAGgHAAQgGAAgFgGgAgGAAQgCADAAAHQAAAHACAEQACAEAEAAQAEAAADgEQACgEAAgIQAAgGgCgDQgDgDgEAAQgEAAgCADg");
	this.shape_286.setTransform(1695.4281,583.527,1.8904,1.8904);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgFQAFgGAGAAQAHAAAFAGQAEAFAAAIIAAAEQAAAKgEAEQgFAGgHAAQgGAAgFgFgAgGgLQgCADAAAHIAAADQAAAIACACQACAEAEAAQAJAAAAgNIAAgEQAAgHgCgDQgDgEgEAAQgDAAgDAEg");
	this.shape_287.setTransform(1687.8665,585.1811,1.8904,1.8904);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#1D1D1B").s().p("AAJAVIAAgQIgIAAIgIAQIgIAAIAJgSQgDgCgCgBQgCgCAAgFQAAgFAFgEQADgEAGAAIAOAAIAAApgAgEgMQgCACAAADQABADABACIAEACIAJAAIAAgOIgIAAQgDAAgCACg");
	this.shape_288.setTransform(1676.5715,585.1811,1.8904,1.8904);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAFgDQAEgEAGAAIAGAAIAAgEQAAgDgCgDQgCgBgDAAQgDAAgBACQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAABIgHAAQAAgEACgCIAFgFQADgCADAAQAHAAADAEQADADAAAGIAAAUQAAAFACAEIAAAAIgHAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQgEAGgFAAQgFAAgEgDgAgEADQgDACAAAEIABAFQACABADAAIAEgBIAEgDIAAgKIgEAAIgHACg");
	this.shape_289.setTransform(1669.7189,585.1811,1.8904,1.8904);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIAKgSIAJAAIgPAUIAQAVg");
	this.shape_290.setTransform(1662.8663,585.1811,1.8904,1.8904);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgFQAAgJAEgFQAEgFAHAAQAGAAAEAFQAEADAAAIIgHAAQAAgFgCgDQgCgCgDAAQgDAAgDADQgCACgBAIIAAAFQAAAGADAEQADADADAAQADAAACgCQACgCAAgEIAHAAQAAAGgEAEQgFAEgFAAQgIAAgDgFg");
	this.shape_291.setTransform(1655.3993,585.1811,1.8904,1.8904);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#1D1D1B").s().p("AgOAVIAAgpIAOAAQAHAAADADQAEADAAAGQAAADgCACQgBACgDABQADAAACADQACADAAADQAAAGgEADQgDADgHAAgAgHAPIAIAAQAHABAAgHQAAgGgHAAIgIAAgAgHgCIAHAAQAHAAAAgGQAAgGgHAAIgHAAg");
	this.shape_292.setTransform(1648.1685,585.1811,1.8904,1.8904);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgFQAFgGAGAAQAHAAAFAGQAEAFAAAIIAAAEQAAAKgEAEQgFAGgHAAQgGAAgFgFgAgGgLQgCADAAAHIAAADQAAAIACACQACAEAEAAQAJAAAAgNIAAgEQAAgHgCgDQgDgEgEAAQgDAAgDAEg");
	this.shape_293.setTransform(1640.418,585.1811,1.8904,1.8904);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgHAAIAAgpIAHAAIAAASIADAAIAMgSIAIAAIgOAUIAPAVg");
	this.shape_294.setTransform(1633.5654,585.1811,1.8904,1.8904);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgFQAAgJAEgFQAEgFAHAAQAGAAAEAFQADACABAJIgHAAQAAgFgCgDQgCgCgDAAQgEAAgCADQgCACAAAIIAAAFQAAAHACADQACADAEAAQADAAACgCQACgCAAgEIAHAAQgBAGgDAEQgFAEgFAAQgIAAgDgFg");
	this.shape_295.setTransform(1626.1456,585.1811,1.8904,1.8904);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#1D1D1B").s().p("AALAcIAAgxIgVAAIAAAxIgHAAIAAg3IAjAAIAAA3g");
	this.shape_296.setTransform(1617.8279,583.8106,1.8904,1.8904);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#1D1D1B").s().p("AgNAVIAAgpIAHAAIAAAOIAHAAQAGABAEADQADADAAAGQAAAGgDAFQgEADgGAAgAgGAPIAHAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQACgCAAgDQAAgFgCgBQAAgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgHAAg");
	this.shape_297.setTransform(1760.4099,553.0446,1.8904,1.8904);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#1D1D1B").s().p("AgDAVIAAgjIgLAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_298.setTransform(1753.3682,553.0446,1.8904,1.8904);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgEQAAgIAEgGQAFgFAGAAQAHAAADAFQAEADAAAHIgGAAQgBgFgCgCQgBgCgEAAQgEAAgCADQgCAEAAAGIAAAEQAAAIACADQACADAEAAQAEAAABgCQADgDAAgDIAGAAQAAAHgEADQgEAEgGAAQgHAAgEgFg");
	this.shape_299.setTransform(1746.7519,553.0446,1.8904,1.8904);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAFgDQAEgEAHAAIAFAAIAAgEQAAgEgCgCQgCgBgDAAQgCAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAABIgHAAQAAgEACgCIAFgFQADgCADAAQAHAAADAEQADADAAAGIAAAUIACAIIAAABIgHAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgEAFgFAAQgFAAgEgDgAgEADQgDADAAADQAAADACACQAAAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAEgBIAEgDIAAgKIgEAAIgHACg");
	this.shape_300.setTransform(1739.5685,553.0446,1.8904,1.8904);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBAMgDAEQgCAFgGAAIgCAAIAAgGIABgBQADABABgEIACgNIABgSIAXAAIAAApg");
	this.shape_301.setTransform(1731.7234,553.0446,1.8904,1.8904);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#1D1D1B").s().p("AgLAZQgEgGAAgJIAAgEQAAgMAEgIQAEgIAHgBIAGgDQABAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBIAGAAIAAACQgBAIgHACIgFABQgEABgCAEQgEAEAAAFQAFgGAFAAQAHAAAEAFQAEAEAAAKIAAAAQAAAKgEAFQgFAGgHAAQgGAAgFgGgAgGAAQgCACAAAIQAAAHACAEQADAEADAAQAFAAACgEQACgEAAgIQAAgGgCgDQgCgDgFAAQgDAAgDADg");
	this.shape_302.setTransform(1724.6345,551.3905,1.8904,1.8904);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgKIAAgDQAAgJAEgFQAFgGAGAAQAHAAAFAGQAEAFAAAIIAAAEQAAAJgEAGQgEAFgIAAQgGAAgFgFgAgGgLQgCADAAAHIAAADQAAAIACACQACAEAEAAQAJAAABgNIAAgEQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_303.setTransform(1717.0729,553.0446,1.8904,1.8904);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#1D1D1B").s().p("AAIAVIAAgQIgIAAIgHAQIgHAAIAJgSQgEgBgCgCQgBgEAAgDQAAgFADgEQAEgEAFAAIAPAAIAAApgAgDgMQgCACAAADQAAADACACQAAABABAAQAAAAABAAQAAABABAAQAAAAAAAAIAIAAIAAgOIgIAAQgCAAgBACg");
	this.shape_304.setTransform(1705.7779,553.0446,1.8904,1.8904);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAFgDQAFgEAGAAIAFAAIAAgEQAAgDgCgDQgCgBgDAAQgCAAgCACQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAABIgHAAIACgGQACgEADgBQADgCADAAQAHAAADAEQAEADAAAGIAAAUIABAIIAAABIgHAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgEAFgFAAQgFAAgEgDgAgEADQgDADAAADQAAADACACQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAIAEgBIAEgDIAAgKIgEAAQgFAAgCACg");
	this.shape_305.setTransform(1698.9253,553.0446,1.8904,1.8904);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgDAAIAAASIgIAAIAAgpIAIAAIAAASIADAAIALgSIAHAAIgNAUIAPAVg");
	this.shape_306.setTransform(1692.0726,553.0446,1.8904,1.8904);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgEQAAgIAEgGQAFgFAGAAQAGAAAEAFQADACABAIIgGAAQgBgFgCgCQgCgCgDAAQgEAAgCADQgCACAAAIIAAAEQAAAIACADQACADAEAAQADAAACgCQACgCABgEIAGAAQgBAHgDADQgEAEgGAAQgHAAgEgFg");
	this.shape_307.setTransform(1684.6529,553.0446,1.8904,1.8904);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQADgGABgIIABgSIAWAAIAAAjIAFAAIAAASgAgCgJQgBAKgFAIIAPAAIAAgdIgJAAg");
	this.shape_308.setTransform(1676.9496,554.2261,1.8904,1.8904);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAFgDQAEgEAHAAIAFAAIAAgEQAAgEgCgCQgCgBgDAAQgCAAgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAABIgHAAIACgGIAFgFQADgCADAAQAHAAADAEQADADAAAGIAAAUIACAIIAAABIgHAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgEAFgFAAQgFAAgEgDgAgEADQgDADAAADQAAADACACQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAIAEgBIAEgDIAAgKIgEAAIgHACg");
	this.shape_309.setTransform(1669.3408,553.0446,1.8904,1.8904);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIABAFQADgGAGAAQAGAAAEAFQADAFAAAKIAAAEQAAAKgDAEQgEAFgGAAQgGAAgDgFIAAAVgAgHgRIAAAVQADAEAEAAQAEAAACgDQADgEAAgFIAAgFQAAgGgDgEQgCgDgEAAQgEAAgDAFg");
	this.shape_310.setTransform(1662.0628,554.5097,1.8904,1.8904);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgOAAIAAAjg");
	this.shape_311.setTransform(1655.8246,553.0446,1.8904,1.8904);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgNAAIAAASIgHAAIAAgpIAHAAIAAASIANAAIAAgSIAHAAIAAApg");
	this.shape_312.setTransform(1648.7829,553.0446,1.8904,1.8904);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#1D1D1B").s().p("AAIAVIAAgdIgPAdIgHAAIAAgpIAHAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_313.setTransform(1641.0796,553.0446,1.8904,1.8904);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAGAAIAAApg");
	this.shape_314.setTransform(1633.3763,553.0446,1.8904,1.8904);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#1D1D1B").s().p("AgKASQgEgGAAgJIAAgDQAAgKAEgFQAEgGAGAAQAIAAAEAFQADAEAAAKIAAAEIgWAAIAAABQAAAGACAEQADADAEAAIAFgBIAEgEIAEAEQgFAHgJAAQgHAAgEgEgAgFgMQgCADAAAGIAPAAIAAgBQAAgEgCgFQgCgCgEAAQgDAAgCADg");
	this.shape_315.setTransform(1626.0511,553.0446,1.8904,1.8904);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#1D1D1B").s().p("AANAcIAAgxIgPAAIgBAXQAAAIgCAIQgCAFgCADQgCACgGAAIgCAAIAAgGIABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQACgDABgDIACgNIAAgcIAdAAIAAA3g");
	this.shape_316.setTransform(1617.4026,551.6741,1.8904,1.8904);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#1D1D1B").s().p("AAIAVIAAgQIgHAAIgIAQIgHAAIAJgSQgEgCgCgBQgCgCAAgFQAAgGAEgDQAEgEAGAAIAOAAIAAApgAgEgMQgBABAAAEQAAADABACIAEACIAIAAIAAgOIgHAAQgDAAgCACg");
	this.shape_317.setTransform(1739.1431,520.9081,1.8904,1.8904);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#1D1D1B").s().p("AAIAVIAAgdIgPAdIgHAAIAAgpIAHAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_318.setTransform(1732.0069,520.9081,1.8904,1.8904);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBAMgDAEQgCAFgGAAIgCAAIAAgGIABgBQADAAABgDIACgNIABgSIAXAAIAAApg");
	this.shape_319.setTransform(1723.9728,520.9081,1.8904,1.8904);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#1D1D1B").s().p("AgKASQgEgGAAgJIAAgDQAAgKAEgGQAEgFAGAAQAIAAAEAFQADAGAAAJIAAADIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgHAAgEgEgAgFgMQgCADAAAGIAPAAIAAgBQAAgEgCgFQgCgCgEAAQgDAAgCADg");
	this.shape_320.setTransform(1716.9784,520.9081,1.8904,1.8904);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAHAAAEAFQADAGAAAJIAAAEQAAAJgDAFQgEAFgHAAQgFAAgDgFIAAAVgAgHgRIAAAVQACAEAFAAQAEAAACgDQACgDAAgGIAAgFQAAgHgCgDQgCgDgEAAQgFAAgCAFg");
	this.shape_321.setTransform(1709.795,522.3732,1.8904,1.8904);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAFgDQAEgEAGAAIAGAAIAAgEQAAgEgCgCQgCgBgDAAQgDAAgBACQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAABIgHAAQAAgEACgDIAFgEQADgCADAAQAHAAADAEQADADAAAGIAAAUQAAAFACADIAAABIgHAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgEAFgFAAQgFAAgEgDgAgEADQgDACAAAEIABAFQACACADAAIAEgCIAEgDIAAgKIgEAAIgHACg");
	this.shape_322.setTransform(1702.328,520.9081,1.8904,1.8904);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#1D1D1B").s().p("AAKAcIgQgZIgFAAIAAAZIgHAAIAAg3IAHAAIAAAZIAEAAIAQgZIAIAAIgRAbIATAcg");
	this.shape_323.setTransform(1695.0027,519.5376,1.8904,1.8904);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAFgDQAEgEAHAAIAFAAIAAgEQAAgEgCgCQgCgBgDAAQgCAAgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAABIgHAAQAAgEACgDIAFgEQADgCADAAQAHAAADAEQADADAAAGIAAAUQAAAFACADIAAABIgHAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgEAFgFAAQgFAAgEgDgAgEADQgDADAAADQAAAEACABQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAIAEgCIAEgDIAAgKIgEAAIgHACg");
	this.shape_324.setTransform(1683.1406,520.9081,1.8904,1.8904);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgHAAIAAgpIAHAAIAAASIADAAIALgSIAJAAIgPAUIAQAVg");
	this.shape_325.setTransform(1676.288,520.9081,1.8904,1.8904);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#1D1D1B").s().p("AAIAVIAAgdIgOAdIgHAAIAAgpIAHAAIAAAeIAOgeIAHAAIAAApg");
	this.shape_326.setTransform(1668.3484,520.9081,1.8904,1.8904);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBAMgCAEQgDAFgGAAIgDAAIAAgGIADgBQADAAABgDQABgEAAgJIABgSIAYAAIAAApg");
	this.shape_327.setTransform(1660.3142,520.9081,1.8904,1.8904);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#1D1D1B").s().p("AgLAZQgEgGAAgJIAAgEQAAgLAEgJQAFgIAHgBIAFgDQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAFAAIAAACQABAHgIADIgEABQgEABgDAEQgDAFgBAEQAEgGAHAAQAGAAAEAFQAEAEAAAKIAAAAQAAAJgEAGQgFAGgHAAQgGAAgFgGgAgFAAQgDADAAAHQAAAHADAEQACAEADAAQAEAAADgEQACgEAAgIQAAgHgCgCQgDgDgEAAQgDAAgCADg");
	this.shape_328.setTransform(1653.2253,519.2541,1.8904,1.8904);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#1D1D1B").s().p("AgMAdIAAgGIACAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQACgBABgEIABgFIgMgpIAHAAIAHAeIAIgeIAHAAIgOAvQgBAGgCADQgDADgDAAg");
	this.shape_329.setTransform(1646.3254,522.5622,1.8904,1.8904);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#1D1D1B").s().p("AAIAVIAAgjIgOAAIAAAjIgIAAIAAgpIAcAAIAAApg");
	this.shape_330.setTransform(1639.331,520.9081,1.8904,1.8904);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgDQAAgJAEgGQAFgFAGAAQAHAAADAFQADADABAHIgGAAQgBgFgCgCQgBgCgEAAQgEAAgCADQgCACAAAIIAAAEQAAAJACACQACADAEAAQADAAACgCQACgBABgFIAGAAQgBAHgDADQgEAEgGAAQgHAAgEgFg");
	this.shape_331.setTransform(1632.1003,520.9081,1.8904,1.8904);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#1D1D1B").s().p("AgKASQgEgGAAgJIAAgDQAAgKAEgGQAEgFAHAAQAHAAAEAFQADAEAAALIAAADIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAFQgEAGgKAAQgGAAgFgEgAgFgMQgBACgBAHIAPAAIAAgBQAAgGgCgDQgBgCgEAAQgDAAgDADg");
	this.shape_332.setTransform(1625.0114,520.9081,1.8904,1.8904);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#1D1D1B").s().p("AgRAcIAAg3IARAAQAJAAAEAEQAEAGABAHQgBAJgDADQgFAEgIAAIgKAAIAAAWgAgJAAIAJAAQAGAAACgCQADgDgBgFQABgFgDgDQgDgDgEAAIgKAAg");
	this.shape_333.setTransform(1617.5916,519.5376,1.8904,1.8904);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#1D1D1B").s().p("AgNAVIAAgpIAHAAIAAAOIAIAAQAFABAEADQADACAAAHQAAAHgDAEQgDADgGAAgAgGAQIAHAAQADAAACgDQABgCAAgDQAAgEgBgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgIAAg");
	this.shape_334.setTransform(1742.3568,488.7717,1.8904,1.8904);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#1D1D1B").s().p("AgCAVIAAgjIgMAAIAAgGIAdAAIAAAGIgLAAIAAAjg");
	this.shape_335.setTransform(1735.3624,488.7717,1.8904,1.8904);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgLIAAgDQAAgKAEgFQAEgFAHAAQAHAAADAEQAEAFAAAGIgGAAQAAgDgCgEQgDgCgDAAQgDAAgDADQgCAEAAAGIAAAEQAAAIACADQADADADAAQAEAAACgCQACgDAAgDIAGAAQAAAGgEAEQgFAEgFAAQgHAAgEgFg");
	this.shape_336.setTransform(1728.6988,488.7717,1.8904,1.8904);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#1D1D1B").s().p("AgKATQgEgEAAgFQAAgGAFgEQAFgDAGgBIAFAAIAAgEQAAgDgCgDQgCgBgDAAQgCAAgCACQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAABIgHAAIACgHQACgDADgBQADgCADAAQAHAAADAEQAEADAAAGIAAAUIABAIIAAABIgHAAIgBgEQgEAFgEAAQgGAAgDgDgAgEADQgDACAAAEQAAAEACABQABACAEAAIADgBIAEgEIAAgLIgEAAQgFACgCABg");
	this.shape_337.setTransform(1721.5153,488.7717,1.8904,1.8904);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgJAAIgBAOQAAAKgEAGQgDAFgFAAIgDAAIAAgGIACAAQADAAACgEIABgfIAZAAIAAApg");
	this.shape_338.setTransform(1713.7175,488.7717,1.8904,1.8904);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#1D1D1B").s().p("AgLAZQgEgGAAgJIAAgEQAAgLAEgJQAFgIAGgBIAGgDQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAGAAIAAACQgCAIgGACIgEABQgEABgDAEQgDADgBAGQAEgGAHAAQAGAAAEAFQAEAFAAAJIAAAAQAAAJgEAGQgFAGgHAAQgGAAgFgGgAgFAAQgDADAAAHQAAAHADAEQACAEADAAQAEAAACgEQADgEAAgIQAAgGgDgDQgCgDgEAAQgDAAgCADg");
	this.shape_339.setTransform(1706.6286,487.1176,1.8904,1.8904);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#1D1D1B").s().p("AgKARQgFgFgBgKIAAgDQABgJAEgGQAEgFAHAAQAHAAAFAFQAEAGABAJIAAADQgBAJgEAGQgFAFgHAAQgHAAgDgFgAgGgLQgDAEABAGIAAADQgBAGADAEQADAEADAAQAJAAABgNIAAgEQgBgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_340.setTransform(1699.0671,488.7717,1.8904,1.8904);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#1D1D1B").s().p("AAJAVIAAgQIgJAAIgHAQIgIAAIAJgSQgDAAgCgDQgCgDAAgEQAAgGAEgEQADgDAGAAIAQAAIAAApgAgEgMQgBABgBAEQABADABACQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAIAJAAIAAgOIgJAAQgCAAgCACg");
	this.shape_341.setTransform(1687.8193,488.7717,1.8904,1.8904);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#1D1D1B").s().p("AgLATQgDgFAAgEQAAgGAEgEQAFgDAGgBIAFAAIAAgEQAAgDgBgDQgCgBgDAAQgCAAgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAABIgHAAQAAgEACgDQACgCADgCQACgCAEAAQAHAAADAEQADADABAGIAAAUQgBAFACADIAAABIgIAAIgBgEQgDAFgEAAQgGAAgEgDgAgEADQgDACAAAEQAAAEACABQABACADAAIAFgBQAAgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgLIgDAAQgFACgCABg");
	this.shape_342.setTransform(1680.9194,488.7717,1.8904,1.8904);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIAKgSIAJAAIgPAUIAQAVg");
	this.shape_343.setTransform(1674.0668,488.7717,1.8904,1.8904);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgDQAAgKAEgFQAFgFAGAAQAHAAADAEQAEAFAAAGIgGAAQAAgEgDgDQgBgCgEAAQgDAAgDADQgCAEAAAGIAAAEQAAAHACAEQACADAEAAQAEAAABgCQADgCAAgEIAGAAQAAAHgEADQgEAEgGAAQgHAAgEgFg");
	this.shape_344.setTransform(1666.5998,488.7717,1.8904,1.8904);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgNAAIAAASIgHAAIAAgpIAHAAIAAATIANAAIAAgTIAHAAIAAApg");
	this.shape_345.setTransform(1659.18,488.7717,1.8904,1.8904);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgGAEgEQAFgDAGgBIAFAAIAAgEQAAgDgBgDQgCgBgDAAQgDAAgBACQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAABIgHAAQAAgEACgDQABgCAEgCQACgCAEAAQAHAAADAEQADADAAAGIAAAUQAAAFACADIAAABIgHAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgEAFgFAAQgGAAgDgDgAgEADQgDACAAAEQAAAEABABQACACADAAIAEgBQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIAAgLIgDAAIgHADg");
	this.shape_346.setTransform(1651.7603,488.7717,1.8904,1.8904);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#1D1D1B").s().p("AANAVIAAgcIgKAcIgFAAIgKgcIAAAcIgHAAIAAgpIAJAAIAKAfIAMgfIAIAAIAAApg");
	this.shape_347.setTransform(1643.2063,488.7717,1.8904,1.8904);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAHAAAEAFQADAGAAAJIAAAEQAAAJgDAFQgEAFgHAAQgFAAgDgFIAAAVgAgHgRIAAAVQACAEAFAAQAEAAACgDQACgDAAgGIAAgFQAAgHgCgDQgCgDgEAAQgFAAgCAFg");
	this.shape_348.setTransform(1634.7468,490.2367,1.8904,1.8904);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#1D1D1B").s().p("AgMAdIAAgGIABAAQABAAABAAQABAAAAAAQABAAAAgBQABAAAAAAIADgFIABgFIgMgpIAIAAIAGAeIAIgeIAHAAIgNAvQgCAGgCADQgDADgEAAg");
	this.shape_349.setTransform(1627.7052,490.4258,1.8904,1.8904);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#1D1D1B").s().p("AARAcIAAgrIgOArIgFAAIgPgrIABArIgHAAIAAg3IAKAAIANAtIAPgtIAJAAIAAA3g");
	this.shape_350.setTransform(1618.8204,487.4011,1.8904,1.8904);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#1D1D1B").s().p("AgEAUQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAEgCQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBABIgEgCgAgEgLQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIACgFIAEgCQABAAAAABQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAABgBAAQgCgBgCgCg");
	this.shape_351.setTransform(1803.038,456.7297,1.8904,1.8904);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#1D1D1B").s().p("AAPAVIAAgpIAKAAIAAApgAgYAVIAAgpIAKAAIAAAOIAJAAQAHAAAEAEQAEACAAAHQAAAGgEAEQgDADgIABgAgOANIAIAAQAEAAACgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIAAgFQgCgBgEAAIgIAAg");
	this.shape_352.setTransform(1794.8621,456.7297,1.8904,1.8904);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#1D1D1B").s().p("AAIAVIAAgRIgPAAIAAARIgKAAIAAgpIAKAAIAAARIAPAAIAAgRIAKAAIAAApg");
	this.shape_353.setTransform(1784.7013,456.7297,1.8904,1.8904);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#1D1D1B").s().p("AgNAQQgFgHAAgIIAAgBQAAgJAFgGQAHgGAHAAQAJAAAEAGQAFAFAAAKIAAACIgbAAQABAGACACQACAEAFAAIAGgCIAEgEIAHAFQgCAEgFACQgFADgFAAQgJAAgGgGgAgFgKQgCADAAAEIAQAAIAAgBQAAgEgCgDQgCgCgEAAQgEAAgCADg");
	this.shape_354.setTransform(1776.1473,456.777,1.8904,1.8904);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#1D1D1B").s().p("AAHAVIAAgQIgBAAIgIABQgHAAgEgDQgEgDAAgHIAAgNIAKAAIAAAMQAAAEACABQACACADAAIAGAAIABAAIAAgTIALAAIAAApg");
	this.shape_355.setTransform(1767.6406,456.7297,1.8904,1.8904);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#1D1D1B").s().p("AgOASQgEgDAAgGQAAgHAFgDQAFgDAIAAIAHAAIAAgCIgBgGQgCgBgEgBQgDABgBABQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIAAABIgKAAIAAgBQAAgFAFgEQAFgDAHgBQAIABAEADQAFADAAAIIAAASIAAAEIABAEIAAABIgKAAIgBgCIAAgEQgBACgEADQgCACgFAAQgGgBgEgDgAgGADQgCACAAADQAAABAAAAQAAABAAABQAAAAABABQAAAAABAAQACACADAAQACABAEgDQACgDAAgDIAAgEIgHAAQgDgBgDACg");
	this.shape_356.setTransform(1759.1339,456.7297,1.8904,1.8904);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#1D1D1B").s().p("AAIAVIAAgRIgPAAIAAARIgKAAIAAgpIAKAAIAAARIAPAAIAAgRIAKAAIAAApg");
	this.shape_357.setTransform(1750.4854,456.7297,1.8904,1.8904);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#1D1D1B").s().p("AgNARQgFgDAAgHIAKAAQAAADACACQACACAEAAQAEAAACgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBIgFgBIgGAAIAAgGIAFAAQADAAACgBQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBgCgEAAQgCAAgDACQgCADAAADIgKAAQAAgGAFgFQAFgEAIAAQAIAAAEADQAEADAAAGQAAAEgCACQgCADgEAAIAHACQADAEAAADQAAAGgFADQgFAEgJAAQgJAAgEgFg");
	this.shape_358.setTransform(1741.9314,456.777,1.8904,1.8904);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#1D1D1B").s().p("AgOAQQgGgGAAgJIAAgBQAAgJAGgGQAGgGAIAAQAJAAAGAGQAFAFABAKIAAABQgBAKgFAFQgFAGgKAAQgIAAgGgGgAgGgKQgDAEAAAGIAAABQAAAGADADQADAEADAAQAFAAACgEQAEgDAAgGIAAgBQAAgGgEgEQgCgDgFAAQgDAAgDADg");
	this.shape_359.setTransform(1733.3775,456.777,1.8904,1.8904);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#1D1D1B").s().p("AgOAZQgFgFgBgNIAAgEQABgMAEgIQAFgHAMgCIAHgCIABgCIAKAAQgBAGgDACQgDADgJABQgJACgDADQgDAEgBAHIABAAQACgEAEgCQADgCAFAAQAIAAAEAGQAFAEABAJIAAABQAAAJgGAGQgHAGgIAAQgIAAgGgGgAgGAAQgEADAAAGIAAABQAAAGAEADQABAEAFAAQAFAAACgEQADgDAAgGIAAgBQAAgFgDgEQgCgCgFAAQgFAAgBACg");
	this.shape_360.setTransform(1724.4927,455.0756,1.8904,1.8904);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#1D1D1B").s().p("AgOAQQgGgFAAgKIAAgBQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJIAAABQAAAJgGAGQgGAGgJAAQgIAAgGgGgAgGgKQgDAEAAAGIAAABQAAAGADADQACAEAEAAQAFAAADgEQACgDAAgGIAAgBQAAgGgCgEQgEgDgEAAQgEAAgCADg");
	this.shape_361.setTransform(1715.4661,456.777,1.8904,1.8904);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#1D1D1B").s().p("AgNAQQgFgHAAgIIAAgBQAAgJAFgGQAHgGAHAAQAJAAAEAGQAFAFAAAKIAAACIgbAAQABAGACACQACAEAFAAIAGgCIAEgEIAHAFQgDAEgEACQgFADgFAAQgJAAgGgGgAgGgKQgBADAAAEIAQAAIAAgBQAAgEgCgDQgCgCgEAAQgEAAgDADg");
	this.shape_362.setTransform(1703.1786,456.777,1.8904,1.8904);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#1D1D1B").s().p("AgEAVIAAghIgMAAIAAgIIAiAAIAAAIIgNAAIAAAhg");
	this.shape_363.setTransform(1695.4753,456.7297,1.8904,1.8904);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#1D1D1B").s().p("AgSAdIAAg4IAJAAIAAAFIABAAQAAgCAEgCQAEgCACAAQAIAAAFAGQAEAGABAJIAAABQgBAIgEAGQgGAGgGAAQgEAAgDgCQgDgBgBgCIAAAUgAgFgSIgDAEIAAAOIADAEQADACACAAQAFAAACgDQACgDAAgGIAAgCQAAgGgCgDQgCgDgFAAQgDAAgCACg");
	this.shape_364.setTransform(1687.6302,458.1948,1.8904,1.8904);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#1D1D1B").s().p("AgOASQgEgDAAgGQAAgHAFgDQAFgDAIAAIAHAAIAAgCIgBgGQgCgBgEgBQgDABgBABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAABIgKAAIAAgBQAAgGAFgDQAEgDAIgBQAIABAEADQAEADAAAIIAAASIABAEIABAEIAAABIgKAAIgBgCIAAgEQgCADgDACQgDACgEAAQgHgBgDgDgAgGADQgCACAAADQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAQADACADAAQACABAEgDQACgEAAgCIAAgEIgHAAQgDgBgDACg");
	this.shape_365.setTransform(1678.6037,456.7297,1.8904,1.8904);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#1D1D1B").s().p("AAIAVIgNgRIgDAAIAAARIgKAAIAAgpIAKAAIAAARIADAAIAMgRIALAAIgQAUIARAVg");
	this.shape_366.setTransform(1670.8059,456.7297,1.8904,1.8904);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#1D1D1B").s().p("AgOASQgEgDAAgGQAAgHAFgDQAFgDAIAAIAIAAIAAgCQAAgDgCgDQgCgBgEgBQgDABgBABQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIAAABIgKAAIAAgBQAAgFAFgEQAFgDAHgBQAIABAEADQAFADAAAIIAAASIAAAEIABAEIAAABIgKAAIgBgCIAAgEQgBADgEACQgCACgFAAQgGgBgEgDgAgGADQgCACAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQACACADAAQACABAEgDQADgDAAgDIAAgEIgIAAQgDgBgDACg");
	this.shape_367.setTransform(1658.093,456.7297,1.8904,1.8904);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#1D1D1B").s().p("AAIAVIAAgRIgPAAIAAARIgKAAIAAgpIAKAAIAAARIAPAAIAAgRIAKAAIAAApg");
	this.shape_368.setTransform(1649.4446,456.7297,1.8904,1.8904);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#1D1D1B").s().p("AAIAVIAAgbIAAAAIgBACIgOAZIgLAAIAAgpIAKAAIAAAbIABAAIADgFIAMgWIAKAAIAAApg");
	this.shape_369.setTransform(1636.8735,456.7297,1.8904,1.8904);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#1D1D1B").s().p("AAPAVIAAgcIAAgDIAAAAIgBAGIgLAZIgGAAIgKgZIgCgGIAAAAIAAAfIgJAAIAAgpIAOAAIAJAYIABAFIAAAAIAAgCIAMgbIANAAIAAApg");
	this.shape_370.setTransform(1626.6655,456.7297,1.8904,1.8904);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#1D1D1B").s().p("AgOASQgEgDAAgGQAAgHAFgDQAFgDAIAAIAHAAIAAgCIgBgGQgCgBgEgBQgDABgBABQgBABAAAAQAAABgBAAQAAABAAAAQAAAAAAABIAAABIgKAAIAAgBQAAgFAFgEQAFgDAHgBQAIABAEADQAFADAAAIIAAASIAAAEIABAEIAAABIgKAAIgBgCIAAgEQgCADgDACQgCACgFAAQgHgBgDgDgAgGADQgCACAAADQAAABAAAAQAAABAAABQAAAAABABQAAAAABAAQACACADAAQACABAEgDQACgEAAgCIAAgEIgHAAQgDgBgDACg");
	this.shape_371.setTransform(1616.5992,456.7297,1.8904,1.8904);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#1D1D1B").s().p("AgSAdIAAg4IAJAAIAAAFIABAAIAEgEQAEgCACAAQAIAAAFAGQAEAGAAAJIAAABQAAAIgEAGQgEAGgJAAQgCAAgEgCIgEgDIAAAUgAgFgSIgDAEIAAAOIADAEIAFACQAFAAACgDQACgDAAgGIAAgCQAAgFgCgEQgCgDgFAAQgDAAgCACg");
	this.shape_372.setTransform(1608.0452,458.1948,1.8904,1.8904);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#1D1D1B").s().p("AgEAmIAAgPQgLgBgGgFQgGgGAAgJIAAgBQAAgJAGgFQAGgHALAAIAAgRIAJAAIAAARQAMAAAFAHQAGAEAAAKIAAABQAAAJgGAGQgFAFgMABIAAAPgAAFAPQAGAAAEgDQADgEAAgGIAAgBQAAgFgDgEQgDgDgHgBgAgNgIQgDAEAAAFIAAABQAAAGADAEQADADAGAAIAAgbQgHABgCADg");
	this.shape_373.setTransform(1597.5063,456.5407,1.8904,1.8904);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#1D1D1B").s().p("AAJAVIAAgbIgBAAIgBACIgOAZIgKAAIAAgpIAKAAIAAAbIAAAAIACgFIANgWIALAAIAAApg");
	this.shape_374.setTransform(1587.251,456.7297,1.8904,1.8904);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#1D1D1B").s().p("AAQAiIAAgLIgpAAIAAg4IAKAAIAAAvIAYAAIAAgvIAKAAIAAAvIAHAAIAAAUg");
	this.shape_375.setTransform(1577.6573,456.3516,1.8904,1.8904);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#432918").ss(0.3).p("AALgKQgFgDgGAAQgFAAgCACQgGAFAAAKQABAIAIACQAEABAEgBQAJAAABgIQAAgFgBgFQAAgFgCgBg");
	this.shape_376.setTransform(892.41,582.4873,1.8904,1.8904);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#13A638").s().p("AgEAOQgIgCgBgIQAAgKAGgFQACgCAFAAQAGAAAFADQACABAAAFIABAKQgBAIgJAAIgEAAIgEAAg");
	this.shape_377.setTransform(892.41,582.4873,1.8904,1.8904);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#6FBC85").s().p("AgKABIAEgCQAFgEADAAQAGgBADABQABABAAAAQABABgBAAQAAABgBAAQAAABgBAAQgPAIgEAAQgEAAADgGg");
	this.shape_378.setTransform(885.3163,572.651,1.8904,1.8904);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#6FBC85").s().p("AgNABQALgHAMADQAIABgDACQgEACgQADIgGAAQgGAAAEgEg");
	this.shape_379.setTransform(885.1369,576.6654,1.8904,1.8904);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#6FBC85").s().p("AgQAJQgDgBADgEQAIgLALgBQAHgBAFACQABAAABABQABAAAAABQABAAgBAAQAAABAAAAQgDADgLAEQgLAGgFAAIgCAAIgCAAg");
	this.shape_380.setTransform(884.236,581.5067,1.8904,1.8904);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#432918").ss(0.3).p("AgZACIABgFQADgFAKgBQASAAAEAAQALABADAGQADAHgFADQgGADgRgBQgRgBgBgBQgCAAgFgGg");
	this.shape_381.setTransform(887.2152,573.0354,1.8904,1.8904);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#13A638").s().p("AAAAKIgSgCQgCAAgFgGIABgFQADgFAKgBIAWAAQALABADAGQADAHgFADQgEACgLAAIgIAAg");
	this.shape_382.setTransform(887.2075,573.0354,1.8904,1.8904);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#432918").ss(0.3).p("AglgHIAIgDQAKgCANABQAeADAOAIQAJAFgGAFQgJAFgigFQgigGgGgEQgCgDAHgEg");
	this.shape_383.setTransform(887.7724,577.5172,1.8904,1.8904);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#13A638").s().p("AgCAKQgigGgGgEQgCgDAHgEIAIgDQAKgCANABQAeADAOAIQAJAFgGAFQgFACgKAAQgLAAgRgCg");
	this.shape_384.setTransform(887.7724,577.5172,1.8904,1.8904);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#432918").ss(0.3).p("AAUgLQgKgEgKAAQgKAAgEACQgFADgCACQgEAFABAIQAAAIAQACQAIABAHgBQAQAAACgJQABgGgCgFQgCgFgCgBg");
	this.shape_385.setTransform(884.9349,582.251,1.8904,1.8904);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#13A638").s().p("AgIAPQgQgCAAgIQgBgIAEgFIAHgEQAEgCAKAAQAKgBAKAEQACABACAGQACAFgBAFQgCAJgQAAIgHABIgIgBg");
	this.shape_386.setTransform(884.9349,582.251,1.8904,1.8904);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#432918").ss(0.6).p("AA/AAQAAAagTASQgSATgaAAQgZAAgSgTQgTgSAAgaQAAgZATgSQASgTAZAAQAaAAASATQATASAAAZg");
	this.shape_387.setTransform(887.6211,578.6593,1.8904,1.8904);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZgBQAaABASASQASASAAAZQAAAagSASQgSASgaAAQgZAAgSgSg");
	this.shape_388.setTransform(887.6211,578.6593,1.8904,1.8904);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#432918").ss(0.3).p("AALgKQgFgDgGAAQgFAAgCABQgGAGAAAKQABAIAIABQAEABAEgBQAJAAABgHQAAgGgBgEQAAgFgCgBg");
	this.shape_389.setTransform(892.41,613.2532,1.8904,1.8904);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#36A9E1").s().p("AgEANQgIgBgBgIQAAgKAGgGQACgBAFAAQAGAAAFADQACABAAAFQABAEAAAGQgBAHgJAAIgEABIgEgBg");
	this.shape_390.setTransform(892.41,613.2532,1.8904,1.8904);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#96C0E8").s().p("AgKABIAEgCQAEgEAEAAQAGgBADACQABAAAAABQAAAAAAABQAAAAgBABQAAAAgCABIgOAFIgEABQgEAAADgFg");
	this.shape_391.setTransform(885.354,603.335,1.8904,1.8904);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#96C0E8").s().p("AgLAFQgGgBAEgDQAKgHANACQARAEggAFIgDAAIgDAAg");
	this.shape_392.setTransform(885.1333,607.4261,1.8904,1.8904);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#96C0E8").s().p("AgQAJQgDgBADgEQAIgLALgBQAHAAAFABQABAAABAAQABABAAAAQABABgBAAQAAABAAAAQgDADgLAFQgLAFgFAAIgEAAg");
	this.shape_393.setTransform(884.236,612.2923,1.8904,1.8904);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#432918").ss(0.3).p("AgZACIABgFQADgFAKAAQASgBAEABQALABADAFQADAHgFADQgGADgRgBQgQgBgCAAQgCgBgFgGg");
	this.shape_394.setTransform(887.2152,603.8013,1.8904,1.8904);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#36A9E1").s().p("AAAAJIgSAAIgHgIIABgEQADgFAKAAIAWAAQALAAADAHQADAFgFAEQgEACgLAAIgIgBg");
	this.shape_395.setTransform(887.2075,603.8013,1.8904,1.8904);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#432918").ss(0.3).p("AglgIIAIgCQAKgCANABQAfACANAJQAKAFgHAFQgJAFgigGQgjgGgFgEQgCgCAHgFg");
	this.shape_396.setTransform(887.7954,608.3191,1.8904,1.8904);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#36A9E1").s().p("AgCAJQgjgGgFgEQgCgCAHgFIAIgCQAKgCANABQAfACANAJQAKAFgHAFQgEACgLAAQgLAAgRgDg");
	this.shape_397.setTransform(887.7954,608.3191,1.8904,1.8904);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#432918").ss(0.3).p("AAUgLQgKgDgKgBQgLAAgDACQgGAEgBACQgEAEABAIQAAAIAQACQAIABAHgBQAQAAACgJQABgFgCgGQgCgFgCgBg");
	this.shape_398.setTransform(884.9349,612.9697,1.8904,1.8904);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#36A9E1").s().p("AgIAPQgQgBAAgJQgBgIAEgEIAHgGQADgCALAAQAKABAKADQACABACAFQACAGgBAGQgCAIgQAAIgHAAIgIAAg");
	this.shape_399.setTransform(884.9349,612.9697,1.8904,1.8904);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#432918").ss(0.6).p("AA/AAQAAAagTASQgSATgaAAQgZAAgSgTQgTgSAAgaQAAgZATgSQASgTAZAAQAaAAASATQATASAAAZg");
	this.shape_400.setTransform(887.6211,609.378,1.8904,1.8904);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAASASQASASAAAZQAAAagSASQgSATgaAAQgZAAgSgTg");
	this.shape_401.setTransform(887.6211,609.378,1.8904,1.8904);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#432918").ss(0.3).p("AALgKQgFgDgGAAQgFAAgCACQgGAFAAAKQABAMAQgCQAJAAABgIQAAgGgBgEQAAgFgCgBg");
	this.shape_402.setTransform(892.41,644.0127,1.8904,1.8904);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#9D9D9C").s().p("AgNAEQAAgKAGgFQACgCAFAAQAGAAAFADQACABAAAFQABAEAAAGQgBAIgJAAIgEAAQgMAAgBgKg");
	this.shape_403.setTransform(892.41,644.0127,1.8904,1.8904);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#C6C6C6").s().p("AgKABIAEgDQAFgDADgBQAGAAADABQABABAAAAQABABgBAAQAAABgBAAQAAABgBAAQgPAIgEAAQgEAAADgGg");
	this.shape_404.setTransform(885.3163,634.1473,1.8904,1.8904);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#C6C6C6").s().p("AgMAFQgGgBAEgDQALgHANACQASAEghAFIgEAAIgDAAg");
	this.shape_405.setTransform(885.1974,638.1448,1.8904,1.8904);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#C6C6C6").s().p("AgMAJIgEAAQgDgBADgEQAIgKALgCQAHAAAFABQABAAABABQABAAAAABQABAAgBABQAAAAAAABQgDADgLAEQgKAFgFAAIgBAAg");
	this.shape_406.setTransform(884.236,643.0186,1.8904,1.8904);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#432918").ss(0.3).p("AgZABIABgEQADgFAKgBQASAAAEAAQALABADAGQAGAOgegCQgRgBgCgBQgCgBgFgGg");
	this.shape_407.setTransform(887.2168,634.5666,1.8904,1.8904);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#9D9D9C").s().p("AABAKIgTgCIgHgHIABgEQADgFAKgBIAWAAQALABADAGQAFAMgWAAIgHAAg");
	this.shape_408.setTransform(887.2091,634.5666,1.8904,1.8904);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#432918").ss(0.3).p("AglgIIAHgCQALgCANABQAfADANAIQAJAFgGAFQgJAFgigGQgjgFgFgFQgDgCAIgFg");
	this.shape_409.setTransform(887.8369,639.0378,1.8904,1.8904);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#9D9D9C").s().p("AgCAJQgjgFgFgFQgDgCAIgFIAHgCQALgCANABQAfADANAIQAJAFgGAFQgEACgLAAQgLAAgRgDg");
	this.shape_410.setTransform(887.8369,639.0378,1.8904,1.8904);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#432918").ss(0.3).p("AAUgLQgKgDgKAAQgLgBgEADQgFADgCACQgDAEABAIQAAANAfgDQAQAAABgJQACgGgCgFQgCgFgCgBg");
	this.shape_411.setTransform(884.9813,643.7793,1.8904,1.8904);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#9D9D9C").s().p("AgYAFQgBgIADgEIAHgFQAEgDALABQAKAAAKADQACABACAFQACAFgCAGQgBAJgQAAIgJABQgWAAAAgLg");
	this.shape_412.setTransform(884.9813,643.7793,1.8904,1.8904);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#432918").ss(0.6).p("AA/AAQAAAagTASQgSASgaAAQgZAAgSgSQgTgSAAgaQAAgZATgSQASgSAZAAQAaAAASASQATASAAAZg");
	this.shape_413.setTransform(887.6211,640.1439,1.8904,1.8904);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAASASQASASAAAZQAAAagSASQgSASgaAAQgZAAgSgSg");
	this.shape_414.setTransform(887.6211,640.1439,1.8904,1.8904);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgIIAAgFQAAgKAEgEQAEgGAGAAQAIAAADAFQADAEABAKIAAAEIgXAAIAAABQAAAHADADQADADADAAIAGgBIAEgEIAEAEQgFAHgJAAQgHAAgEgFgAgFgMQgCACgBAHIAQAAIAAgBQgBgHgBgCQgCgCgEAAQgDAAgCADg");
	this.shape_415.setTransform(1008.9363,641.1364,1.8904,1.8904);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgNAeIgHAAIAAgpIAHAAIAAAeIANgeIAIAAIAAApg");
	this.shape_416.setTransform(1001.422,641.1364,1.8904,1.8904);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgDAAIAAASIgHAAIAAgpIAHAAIAAARIADAAIAKgRIAIAAIgNAUIAOAVg");
	this.shape_417.setTransform(994.3331,641.1364,1.8904,1.8904);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#1D1D1B").s().p("AgKARQgEgGAAgJIAAgEQAAgIAEgGQAEgFAHAAQAGAAAEAEQAEAFAAAHIgGAAQAAgFgDgDQgBgCgEAAQgDAAgDADQgCADAAAHIAAAFQAAAHACADQACADAEAAQADAAACgCQADgDAAgEIAGAAQAAAHgEAEQgEAEgGAAQgGAAgFgFg");
	this.shape_418.setTransform(986.9133,641.1364,1.8904,1.8904);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#1D1D1B").s().p("AgKARQgDgDgBgKIAAgFQAAgJAEgFQAEgGAHAAQAHAAAEAFQADAEAAAKIAAAEIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAFgEIADAEQgFAHgJAAQgGAAgFgFgAgFgMQgBACgBAHIAQAAIAAgBQgBgHgCgCQgBgCgEAAQgDAAgDADg");
	this.shape_419.setTransform(979.8244,641.1364,1.8904,1.8904);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#1D1D1B").s().p("AAHAVIAAgPIgHABQgGAAgDgEQgEgDAAgHIAAgNIAHAAIAAANQAAAIAGAAIAHgBIAAgUIAHAAIAAApg");
	this.shape_420.setTransform(972.4519,641.0891,1.8904,1.8904);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgHAAIAAgpIAHAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_421.setTransform(965.1267,641.1364,1.8904,1.8904);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgPAAIAAAjg");
	this.shape_422.setTransform(958.9357,641.1364,1.8904,1.8904);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#1D1D1B").s().p("AgLAQQgEgFgBgIIAAgEQAAgJAFgFQAFgGAGAAQAIAAAEAFQAEAGAAAIIAAAEQAAAKgEAEQgFAGgHAAQgGAAgFgGgAgGgMQgCAEgBAHIAAADQABAGACAEQADAEADAAQAJAAAAgNIAAgEQAAgHgCgEQgDgDgEAAQgDAAgDADg");
	this.shape_423.setTransform(951.894,641.1364,1.8904,1.8904);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBALgDAFQgCAFgGAAIgCAAIAAgHIABAAQADAAABgDIACgNIABgSIAXAAIAAApg");
	this.shape_424.setTransform(943.9072,641.1364,1.8904,1.8904);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#1D1D1B").s().p("AgLAQQgEgFAAgIIAAgEQAAgJAEgFQAFgGAGAAQAHAAAFAFQAEAGAAAIIAAAEQAAAKgEAEQgFAGgHAAQgGAAgFgGgAgGgMQgDAEAAAHIAAADQAAAHADADQADAEADAAQAJAAAAgNIAAgEQAAgIgCgDQgCgDgFAAQgEAAgCADg");
	this.shape_425.setTransform(936.7237,641.1364,1.8904,1.8904);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgJIAAgFQAAgJAEgFQAEgGAGAAQAIAAADAFQAEAFAAAJIAAAEIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAEQgFAHgJAAQgHAAgEgFgAgFgMQgCADAAAGIAPAAIAAgBQAAgGgCgDQgCgCgEAAQgDAAgCADg");
	this.shape_426.setTransform(929.4457,641.1364,1.8904,1.8904);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgOAAIAAAjg");
	this.shape_427.setTransform(923.5856,641.1364,1.8904,1.8904);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#1D1D1B").s().p("AgKARQgDgDgBgLIAAgEQAAgJAEgFQAEgGAHAAQAHAAAEAFQADAEAAALIAAADIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgGAAgFgFgAgFgMQgBACgBAHIAQAAIAAgBQgBgHgCgCQgBgCgEAAQgDAAgDADg");
	this.shape_428.setTransform(1025.1935,609.378,1.8904,1.8904);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgNAeIgHAAIAAgpIAHAAIAAAeIANgeIAHAAIAAApg");
	this.shape_429.setTransform(1017.7738,609.378,1.8904,1.8904);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgDAAIAAASIgIAAIAAgpIAIAAIAAARIADAAIALgRIAHAAIgNAUIAPAVg");
	this.shape_430.setTransform(1010.6849,609.378,1.8904,1.8904);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#1D1D1B").s().p("AgKARQgEgGAAgJIAAgDQAAgJAEgGQAEgFAHAAQAGAAAEAEQAEAEAAAHIgGAAQgBgFgCgCQgBgCgEAAQgEAAgCADQgCACAAAIIAAAEQAAAJACACQACADAEAAQACAAADgCQACgBABgFIAGAAQAAAGgEAEQgEAEgGAAQgGAAgFgFg");
	this.shape_431.setTransform(1003.2651,609.378,1.8904,1.8904);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgEQAAgJAEgFQAEgGAHAAQAHAAAEAFQADAEAAALIAAADIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgGAAgFgFgAgFgMQgBACgBAHIAPAAIAAgBQAAgHgCgCQgBgCgEAAQgDAAgDADg");
	this.shape_432.setTransform(996.1762,609.378,1.8904,1.8904);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#1D1D1B").s().p("AAHAVIAAgPIgHABQgGAAgEgEQgDgDAAgHIAAgNIAHAAIAAANQAAAIAGAAIAHgBIAAgUIAHAAIAAApg");
	this.shape_433.setTransform(988.8037,609.3307,1.8904,1.8904);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgGAAIAAgpIAGAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_434.setTransform(981.4785,609.378,1.8904,1.8904);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#1D1D1B").s().p("AgLAVIAAgpIAXAAIAAAGIgPAAIAAAjg");
	this.shape_435.setTransform(975.2402,609.378,1.8904,1.8904);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#1D1D1B").s().p("AgLARQgEgGAAgJIAAgDQAAgJAEgFQAFgGAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAKgEAFQgEAFgIAAQgGAAgFgFgAgGgMQgCAFAAAGIAAADQAAAGACAEQADAEADAAQAJAAABgOIAAgDQAAgGgDgFQgDgDgEAAQgEAAgCADg");
	this.shape_436.setTransform(968.1986,609.378,1.8904,1.8904);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBALgDAFQgCAFgGAAIgCAAIAAgHIABAAQADAAABgEQACgCAAgKIABgSIAXAAIAAApg");
	this.shape_437.setTransform(960.259,609.378,1.8904,1.8904);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#1D1D1B").s().p("AgKARQgFgGgBgJIAAgDQABgJAEgFQAEgGAHAAQAHAAAFAFQAEAGABAJIAAADQgBAJgEAGQgFAFgHAAQgGAAgEgFgAgGgMQgDAFABAGIAAADQgBAGADAEQADAEADAAQAJAAAAgOIAAgDQAAgGgCgFQgDgDgEAAQgDAAgDADg");
	this.shape_438.setTransform(953.0282,609.378,1.8904,1.8904);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQADgGAGAAQAHAAADAFQADAEABALIAAAEQAAAJgEAFQgDAFgHAAQgFAAgEgFIAAAVgAgIgSIAAAVQADAFAFAAQAEAAACgDQACgEAAgGIAAgEQAAgGgCgEQgCgEgEAAQgEAAgEAFg");
	this.shape_439.setTransform(945.703,610.843,1.8904,1.8904);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQADgGABgIIABgSIAWAAIAAAjIAFAAIAAASgAgCgJQgBAKgEAIIAOAAIAAgdIgJAAg");
	this.shape_440.setTransform(937.7162,610.5595,1.8904,1.8904);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgHAAIAAgpIAHAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_441.setTransform(929.8238,609.378,1.8904,1.8904);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgOAAIAAAjg");
	this.shape_442.setTransform(923.5856,609.378,1.8904,1.8904);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#1D1D1B").s().p("AgKARQgDgEgBgJIAAgFQAAgJAEgGQAEgFAHAAQAHAAAEAEQADAGAAAKIAAADIgWAAIAAABQAAAGACAEQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgGAAgFgFgAgFgMQgBACgBAHIAQAAIAAgBQgBgHgCgBQgBgDgEAAQgDAAgDADg");
	this.shape_443.setTransform(1003.9268,577.6196,1.8904,1.8904);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgNAeIgHAAIAAgpIAHAAIAAAdIANgdIAHAAIAAApg");
	this.shape_444.setTransform(996.507,577.6196,1.8904,1.8904);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgDAAIAAASIgIAAIAAgpIAIAAIAAASIADAAIALgSIAHAAIgNAUIAPAVg");
	this.shape_445.setTransform(989.4181,577.6196,1.8904,1.8904);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgDQAAgKAEgFQAEgFAHAAQAGAAAEAEQAEAEAAAHIgGAAQgBgEgCgCQgBgDgEAAQgEAAgCADQgCACAAAIIAAAEQAAAJACACQACADAEAAQACAAADgCQACgCABgFIAGAAQAAAHgEAEQgEAEgGAAQgGAAgFgFg");
	this.shape_446.setTransform(981.9983,577.6196,1.8904,1.8904);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgIIAAgFQAAgJAEgGQAEgFAHAAQAHAAAEAEQADAGAAAKIAAADIgWAAIAAABQAAAGACAEQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgGAAgFgFgAgFgMQgBACgBAHIAPAAIAAgBQAAgGgCgCQgBgDgEAAQgDAAgDADg");
	this.shape_447.setTransform(974.9094,577.6196,1.8904,1.8904);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#1D1D1B").s().p("AAHAVIAAgPIgHABQgGAAgEgEQgDgDAAgHIAAgNIAHAAIAAANQAAAIAGAAIAHgBIAAgUIAHAAIAAApg");
	this.shape_448.setTransform(967.5369,577.5723,1.8904,1.8904);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgGAAIAAgpIAGAAIAAAdIAPgdIAHAAIAAApg");
	this.shape_449.setTransform(960.2117,577.6196,1.8904,1.8904);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgOAAIAAASIgGAAIAAgpIAGAAIAAASIAOAAIAAgSIAIAAIAAApg");
	this.shape_450.setTransform(952.5557,577.6196,1.8904,1.8904);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#1D1D1B").s().p("AgLASQgDgCAAgHQAAgGAEgDQAFgDAGAAIAFAAIAAgFQAAgEgBgBQgCgCgDAAQgCAAgCACQgBAAAAABQgBABAAAAQAAABAAAAQgBABAAAAIgGAAIACgGIAFgEQADgCADAAQAGAAAEADQADAFABAEIAAAVQgBAFACADIAAABIgIAAIgBgFQgEAGgDAAQgGAAgEgEgAgEACQgDADAAADQAAAEACACQABABADABQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAIADgEIAAgKIgDAAQgDAAgEACg");
	this.shape_451.setTransform(945.0886,577.6196,1.8904,1.8904);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#1D1D1B").s().p("AgCAVIAAgkIgMAAIAAgFIAdAAIAAAFIgMAAIAAAkg");
	this.shape_452.setTransform(938.3305,577.6196,1.8904,1.8904);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#1D1D1B").s().p("AgKAQQgFgEgBgKIAAgDQAAgJAFgGQAFgFAGAAQAHAAAFAFQAEAFAAAKIAAADQAAAKgEAEQgFAGgHAAQgGAAgEgGgAgGgLQgCAEgBAGIAAADQABAGACAEQADAEADAAQAJAAAAgOIAAgDQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_453.setTransform(931.4779,577.6196,1.8904,1.8904);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#1D1D1B").s().p("AgKAZQgFgFAAgKIAAgEQAAgMAFgIQADgHAHgDQAFAAACgCQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIAFAAIAAACQAAAIgGABIgGACQgEABgDAEQgDAFAAAEQAFgGAFAAQAHAAAEAFQAEAEAAAJIAAABQAAAKgFAFQgDAGgIAAQgGAAgEgGgAgGAAQgCADAAAHQAAAHACAEQADAEADAAQAEAAADgEQACgEAAgIQAAgGgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_454.setTransform(924.1054,575.9655,1.8904,1.8904);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#432918").ss(0.3,0,1).p("AgKAGIADAJIAGgJIAFALIAHgFIgMgcg");
	this.shape_455.setTransform(884.1239,411.5023,1.8904,1.8904);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#EDE7F4").s().p("AAAAGIgHAJIgDgJIAKgWIALAcIgHAFg");
	this.shape_456.setTransform(884.1239,411.5023,1.8904,1.8904);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#432918").ss(0.3,0,1).p("AgMAFIAGALIAGgKIAEAOIAJgJIgNgeg");
	this.shape_457.setTransform(891.2128,409.0921,1.8904,1.8904);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#EDE7F4").s().p("AAAAGIgGAKIgGgLIAMgZIAMAgIgIAJg");
	this.shape_458.setTransform(891.2128,409.0921,1.8904,1.8904);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#432918").ss(0.3,0,1).p("AAuAkIhbAAIAYg5IAPAkIAVgyg");
	this.shape_459.setTransform(888.0464,412.0222,1.8904,1.8904);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#3AAA35").s().p("AgtAkIAYg5IAPAkIAVgyIAfBHg");
	this.shape_460.setTransform(888.0464,412.0222,1.8904,1.8904);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#432918").ss(0.6).p("AA/AAQAAAagTASQgSASgaAAQgZAAgSgSQgTgSAAgaQAAgZATgSQASgSAZAAQAaAAASASQATASAAAZg");
	this.shape_461.setTransform(887.9991,413.1092,1.8904,1.8904);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAASASQASASABAZQgBAagSASQgSASgaAAQgZAAgSgSg");
	this.shape_462.setTransform(887.9991,413.1092,1.8904,1.8904);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#432918").ss(0.3,0,1).p("AgMAGIAGAKIAGgKIAEAOIAJgIIgNgfg");
	this.shape_463.setTransform(891.2128,376.6248,1.8904,1.8904);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#EDE7F4").s().p("AAAAGIgGAKIgGgKIAMgZIAMAfIgIAIg");
	this.shape_464.setTransform(891.2128,376.6248,1.8904,1.8904);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#432918").ss(0.3,0,1).p("AgKAGIADAJIAGgJIAFALIAHgFIgMgcg");
	this.shape_465.setTransform(884.1239,378.7988,1.8904,1.8904);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#EDE7F4").s().p("AAAAGIgHAJIgDgJIAKgWIALAcIgHAFg");
	this.shape_466.setTransform(884.1239,378.7988,1.8904,1.8904);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#432918").ss(0.3,0,1).p("AAuAkIhbAAIAYg4IAPAjIAVgyg");
	this.shape_467.setTransform(888.0464,379.5549,1.8904,1.8904);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#7D4E24").s().p("AgtAkIAYg4IAPAjIAVgyIAfBHg");
	this.shape_468.setTransform(888.0464,379.5549,1.8904,1.8904);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#432918").ss(0.6).p("AA/AAQAAAagTASQgSATgaAAQgZAAgSgTQgTgSAAgaQAAgZATgSQASgTAZAAQAaAAASATQATASAAAZg");
	this.shape_469.setTransform(887.9991,380.6419,1.8904,1.8904);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZgBQAaABASASQASASABAZQgBAagSASQgSASgaAAQgZAAgSgSg");
	this.shape_470.setTransform(887.9991,380.6419,1.8904,1.8904);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#432918").ss(0.3,0,1).p("AgKAGIADAJIAGgJIAFALIAHgFIgMgcg");
	this.shape_471.setTransform(884.1533,382.8685,1.8904,1.8904);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#EDE7F4").s().p("AAAAGIgHAJIgDgJIAKgWIALAcIgHAFg");
	this.shape_472.setTransform(884.1533,382.8685,1.8904,1.8904);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#432918").ss(0.3,0,1).p("AgMAGIAGALIAGgLIAFAPIAIgJIgNgfg");
	this.shape_473.setTransform(891.1183,447.1833,1.8904,1.8904);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#EDE7F4").s().p("AAAAGIgGAKIgFgLIALgZIAMAgIgHAJg");
	this.shape_474.setTransform(891.1183,447.1833,1.8904,1.8904);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#432918").ss(0.3,0,1).p("AgKAGIADAJIAHgJIAEALIAHgFIgLgcg");
	this.shape_475.setTransform(884.0766,449.4045,1.8904,1.8904);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#EDE7F4").s().p("AAAAGIgHAJIgDgJIAKgWIALAcIgHAFg");
	this.shape_476.setTransform(884.0766,449.4045,1.8904,1.8904);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#432918").ss(0.3,0,1).p("AAuAkIhbAAIAYg4IAQAjIAVgyg");
	this.shape_477.setTransform(887.9519,450.1134,1.8904,1.8904);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#F193BD").s().p("AgtAkIAYg4IAQAjIAVgyIAeBHg");
	this.shape_478.setTransform(887.9519,450.1134,1.8904,1.8904);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#432918").ss(0.6).p("AA+AAQAAAagSASQgSASgaAAQgZAAgSgSQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAASASQASASAAAZg");
	this.shape_479.setTransform(887.9519,451.2003,1.8904,1.8904);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAASASQASASAAAZQAAAagSASQgSASgaAAQgZAAgSgSg");
	this.shape_480.setTransform(887.9519,451.2003,1.8904,1.8904);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#432918").ss(0.3,0,1).p("AgMAGIAGAKIAGgKIAFAOIAIgIIgNgfg");
	this.shape_481.setTransform(891.1183,487.0231,1.8904,1.8904);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#EDE7F4").s().p("AAAAGIgGAKIgFgKIALgZIAMAfIgHAIg");
	this.shape_482.setTransform(891.1183,487.0231,1.8904,1.8904);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#432918").ss(0.3,0,1).p("AgKAGIADAJIAHgJIAEALIAHgFIgLgcg");
	this.shape_483.setTransform(884.0766,489.197,1.8904,1.8904);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#EDE7F4").s().p("AAAAGIgHAJIgDgJIAKgWIALAcIgHAFg");
	this.shape_484.setTransform(884.0766,489.197,1.8904,1.8904);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#432918").ss(0.3,0,1).p("AAuAkIhbAAIAYg5IAQAkIAVgyg");
	this.shape_485.setTransform(887.9519,490.0004,1.8904,1.8904);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#F9B233").s().p("AgtAkIAYg4IAQAjIAVgyIAeBHg");
	this.shape_486.setTransform(887.9519,490.0004,1.8904,1.8904);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#432918").ss(0.6).p("AA+AAQAAAagSASQgSATgaAAQgZAAgSgTQgSgSAAgaQAAgZASgSQASgTAZAAQAaAAASATQASASAAAZg");
	this.shape_487.setTransform(887.9519,491.0401,1.8904,1.8904);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZgBQAaABASASQASASAAAZQAAAagSASQgSASgaAAQgZAAgSgSg");
	this.shape_488.setTransform(887.9519,491.0401,1.8904,1.8904);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgDQAAgLAEgFQAEgFAGAAQAIAAADAFQAEAFAAAKIAAADIgXAAIAAABQAAAHADADQADADADAAIAGgBIAEgEIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgCADAAAGIAPAAIAAgBIgCgJQgCgCgEAAQgDAAgCADg");
	this.shape_489.setTransform(622.9205,716.7516,1.8904,1.8904);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAOIAJAAQAFABADADQAEACAAAHQAAAHgEAEQgDADgFAAgAgNAQIAJAAQADAAABgDQABgCAAgDQAAgFgBgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgJAAg");
	this.shape_490.setTransform(614.0357,716.7516,1.8904,1.8904);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAHAAIAAApg");
	this.shape_491.setTransform(605.1509,716.7516,1.8904,1.8904);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgDQAAgKAEgFQAEgFAHAAQAGAAAEAEQAEAFAAAGIgGAAQAAgDgCgEQgDgCgDAAQgDAAgDADQgCAEAAAGIAAAEQAAAIACADQADADADAAQAEAAACgCQACgDAAgDIAGAAQAAAGgEAEQgFAEgFAAQgHAAgEgFg");
	this.shape_492.setTransform(597.8729,716.7516,1.8904,1.8904);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#1D1D1B").s().p("AAHAVIgKgSIgFAAIAAASIgGAAIAAgpIAGAAIAAASIAEAAIAKgSIAJAAIgPAUIAPAVg");
	this.shape_493.setTransform(591.2094,716.7516,1.8904,1.8904);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgDQAAgKAEgGQAEgFAGAAQAIAAAEAFQADAEAAALIAAADIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgCAEAAAFIAPAAIAAgBQAAgEgCgFQgCgCgEAAQgDAAgCADg");
	this.shape_494.setTransform(583.6951,716.7516,1.8904,1.8904);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIgBAOQAAAMgCAEQgEAFgFAAIgDAAIAAgGIADAAQACgBABgEQACgCAAgKIABgSIAXAAIAAApg");
	this.shape_495.setTransform(575.8973,716.7516,1.8904,1.8904);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#1D1D1B").s().p("AAIAVIAAgjIgPAAIAAAjIgHAAIAAgpIAdAAIAAApg");
	this.shape_496.setTransform(568.5248,716.7516,1.8904,1.8904);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#1D1D1B").s().p("AANAVIAAgcIgLAcIgDAAIgMgcIAAAcIgGAAIAAgpIAJAAIAKAfIALgfIAJAAIAAApg");
	this.shape_497.setTransform(559.829,716.7516,1.8904,1.8904);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgKIAAgDQAAgJAEgGQAFgFAGAAQAHAAAEAFQAFAFABAKIAAADQAAAJgFAGQgFAFgHAAQgGAAgFgFgAgGgLQgCAEAAAGIAAADQAAAGACAEQADAEADAAQAJAAABgNIAAgEQgBgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_498.setTransform(551.1333,716.7516,1.8904,1.8904);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#1D1D1B").s().p("AAHAVIgKgSIgFAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIALgSIAIAAIgPAUIAQAVg");
	this.shape_499.setTransform(544.2334,716.7516,1.8904,1.8904);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#1D1D1B").s().p("AgKARQgDgEgBgJIAAgFQAAgJAEgGQAEgFAHAAQAHAAAEAFQADAEAAAKIAAAEIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAFgEIADAEQgEAHgKAAQgGAAgFgFgAgFgMQgBACgBAHIAQAAIAAgBIgDgIQgBgDgEAAQgDAAgDADg");
	this.shape_500.setTransform(645.0379,684.9932,1.8904,1.8904);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgHAAIAAgpIAHAAIAAAdIAPgdIAHAAIAAApg");
	this.shape_501.setTransform(637.6182,684.9932,1.8904,1.8904);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#1D1D1B").s().p("AAHAVIgKgSIgFAAIAAASIgGAAIAAgpIAGAAIAAASIAEAAIAKgSIAIAAIgOAUIAPAVg");
	this.shape_502.setTransform(630.5293,684.9932,1.8904,1.8904);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#1D1D1B").s().p("AgKARQgEgGAAgIIAAgFQAAgJAEgFQAFgFAGAAQAGAAAEAEQAEAFAAAHIgGAAQgBgGgCgBQgBgDgEAAQgEAAgCADQgCAEAAAGIAAAFQAAAHACADQACADAEAAQAEAAABgCQADgDAAgDIAGAAQAAAHgEADQgEAEgGAAQgHAAgEgFg");
	this.shape_503.setTransform(623.1095,684.9932,1.8904,1.8904);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgIIAAgFQAAgJAEgGQAEgFAHAAQAHAAAEAFQADAEAAAKIAAAEIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAEQgEAHgKAAQgGAAgFgFgAgFgMQgBACgBAHIAPAAIAAgBQAAgGgCgCQgBgDgEAAQgDAAgDADg");
	this.shape_504.setTransform(616.0206,684.9932,1.8904,1.8904);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#1D1D1B").s().p("AAHAVIAAgPIgHABQgGAAgEgEQgDgDAAgIIAAgMIAHAAIAAANQAAAIAGAAIAHgBIAAgUIAHAAIAAApg");
	this.shape_505.setTransform(608.6481,684.9932,1.8904,1.8904);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgOAeIgIAAIAAgpIAIAAIAAAdIAOgdIAGAAIAAApg");
	this.shape_506.setTransform(601.3229,684.9932,1.8904,1.8904);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgOAAIAAAjg");
	this.shape_507.setTransform(595.0846,684.9932,1.8904,1.8904);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#1D1D1B").s().p("AgLAQQgEgEgBgJIAAgEQABgJAEgGQAEgFAHAAQAHAAAEAFQAFAFABAJIAAAEQgBAKgEAEQgFAGgHAAQgHAAgEgGgAgGgLQgDAEABAGIAAADQgBAGADAFQADADADAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_508.setTransform(588.0902,684.9932,1.8904,1.8904);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBAMgDAEQgCAFgGAAIgCAAIAAgGIABAAQADAAABgFQACgDAAgJIABgSIAXAAIAAApg");
	this.shape_509.setTransform(580.1034,684.9932,1.8904,1.8904);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#1D1D1B").s().p("AgLAQQgEgEAAgJIAAgEQAAgJAEgGQAEgFAHAAQAHAAAFAFQAEAGAAAIIAAAEQAAAKgEAEQgFAGgHAAQgGAAgFgGgAgGgLQgDAEAAAGIAAADQAAAGADAFQADADADAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_510.setTransform(572.9199,684.9932,1.8904,1.8904);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQADgGAGAAQAHAAAEAFQACAEABALIAAAEQAAAJgEAFQgDAFgHAAQgFAAgEgFIAAAVgAgIgSIAAAVQADAFAFAAQAEAAACgDQACgEAAgFIAAgFQAAgGgCgEQgCgEgEAAQgEAAgEAFg");
	this.shape_511.setTransform(565.5474,686.4582,1.8904,1.8904);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQAEgGgBgIIABgSIAXAAIAAAjIAFAAIAAASgAgDgJQAAAKgEAIIAOAAIAAgdIgJAAg");
	this.shape_512.setTransform(557.5606,686.1747,1.8904,1.8904);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgOAeIgGAAIAAgpIAGAAIAAAdIAOgdIAHAAIAAApg");
	this.shape_513.setTransform(549.7155,684.9932,1.8904,1.8904);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgOAAIAAAjg");
	this.shape_514.setTransform(543.43,684.9932,1.8904,1.8904);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgEQAAgKAEgEQAEgGAGAAQAIAAADAFQADAEABAKIAAAEIgXAAIAAABQAAAGADAEQADADADAAIAGgBIAEgEIAEAEQgFAHgJAAQgHAAgEgFgAgFgMQgCACgBAHIAQAAIAAgBIgCgJQgCgCgEAAQgDAAgCADg");
	this.shape_515.setTransform(631.1436,653.2348,1.8904,1.8904);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#1D1D1B").s().p("AAIAVIAAgdIgPAdIgHAAIAAgpIAHAAIAAAeIAPgeIAGAAIAAApg");
	this.shape_516.setTransform(623.6294,653.2348,1.8904,1.8904);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#1D1D1B").s().p("AAHAVIgKgSIgFAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIALgSIAIAAIgPAUIAQAVg");
	this.shape_517.setTransform(616.5405,653.2348,1.8904,1.8904);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgFQAAgIAEgGQAFgFAGAAQAGAAAEAEQAEAFAAAHIgGAAQAAgFgDgDQgBgCgEAAQgDAAgDADQgCADAAAHIAAAFQAAAHACADQACADAEAAQAEAAABgCQADgDAAgDIAGAAQAAAGgEAEQgEAEgGAAQgHAAgEgFg");
	this.shape_518.setTransform(609.1207,653.2348,1.8904,1.8904);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#1D1D1B").s().p("AgKARQgDgDgBgLIAAgEQAAgJAEgFQAEgGAHAAQAHAAAEAFQADAEAAAKIAAAEIgWAAIAAABQAAAGACAEQADADAEAAIAFgBIAFgEIADAEQgEAHgKAAQgGAAgFgFgAgFgMQgBACgBAHIAQAAIAAgBIgDgJQgBgCgEAAQgDAAgDADg");
	this.shape_519.setTransform(602.0318,653.2348,1.8904,1.8904);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#1D1D1B").s().p("AAHAVIAAgPIgHABQgHAAgCgEQgEgDAAgHIAAgNIAHAAIAAANQAAAIAGAAIAHgBIAAgUIAHAAIAAApg");
	this.shape_520.setTransform(594.6593,653.2348,1.8904,1.8904);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#1D1D1B").s().p("AAIAVIAAgdIgOAdIgHAAIAAgpIAHAAIAAAeIAOgeIAGAAIAAApg");
	this.shape_521.setTransform(587.3341,653.2348,1.8904,1.8904);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgPAAIAAAjg");
	this.shape_522.setTransform(581.1431,653.2348,1.8904,1.8904);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#1D1D1B").s().p("AgLAQQgEgFAAgIIAAgEQAAgJAEgFQAFgGAGAAQAIAAAEAGQAEAGABAHIAAAEQAAAKgFAEQgFAGgHAAQgGAAgFgGgAgGgLQgCAEAAAGIAAADQAAAHACADQADAEADAAQAJAAABgNIAAgEQgBgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_523.setTransform(574.1014,653.2348,1.8904,1.8904);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBAMgDAEQgCAFgGAAIgCAAIAAgGIABgBQADAAABgDIACgNIABgSIAXAAIAAApg");
	this.shape_524.setTransform(566.1145,653.2348,1.8904,1.8904);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#1D1D1B").s().p("AgLAQQgEgEAAgJIAAgEQAAgJAEgFQAFgGAGAAQAHAAAFAGQAEAFAAAIIAAAEQAAAKgEAEQgFAGgHAAQgGAAgFgGgAgGgLQgDAEAAAGIAAADQAAAHADADQACAEAEAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_525.setTransform(558.9311,653.2348,1.8904,1.8904);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#1D1D1B").s().p("AAIAVIAAgdIgPAdIgHAAIAAgpIAHAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_526.setTransform(551.2751,653.2348,1.8904,1.8904);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#1D1D1B").s().p("AgLAZQgEgGAAgJIAAgEQAAgLAEgJQAFgIAHgBIAFgDQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAGAAIAAACQAAAHgIADIgEABQgFABgCAEQgDAFgBAEQAEgGAHAAQAGAAAEAFQAEAEAAAKIAAAAQAAAJgEAGQgFAGgHAAQgGAAgFgGgAgFAAQgDADAAAHQAAAHADAEQACAEADAAQAEAAADgEQACgEAAgIQAAgHgCgCQgDgDgEAAQgDAAgCADg");
	this.shape_527.setTransform(543.9498,651.5807,1.8904,1.8904);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#432918").ss(0.3,0,1).p("AAegpIABACIAGAcIABAJIgCASIgCAGIgFAJQgFAFgEABQgEACgCAAIgDAAIgFgBIgFgCQgBAAgCgEIAJgLIANgVIAEgNIABgBIgBAAIAAACIgFAJQgDAEgFAIQgHAIgFAGQgGAGgIAEIgLAHIgGACQgEABgBgDQgBgCADgBIAFgBIAEgBQAFgBADgDIAJgFIAAAAIgCgBIgGgCQgFgFgCgEQgCgEAAgCIgBgGIACgFQAEgHADgEQAGgGAFgDIAXgJQAFgCAFgDQABAAADgEg");
	this.shape_528.setTransform(507.4891,715.7828,1.8904,1.8904);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#F9B233").s().p("AglAoQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIAFgBIAEgBQAFgBADgDIAJgFIAAAAIgCgBIgGgCQgFgFgCgEIgCgGIgBgGIACgFIAHgLQAGgGAFgDIAXgJQAFgCAFgDIAEgEIAAAAIABACIAGAcIABAJIgCASIgCAGIgFAJQgFAFgEABIgGACIgDAAIgFgBIgFgCIgDgEIAJgLIANgVIAEgNIABgBIgBAAIAAACIgFAJQgDAEgFAIIgMAOQgGAGgIAEIgLAHIgGACIgCAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAgBgBg");
	this.shape_529.setTransform(507.4891,715.7828,1.8904,1.8904);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#432918").ss(0.6).p("AA/AAQAAAagTASQgSASgaAAQgZAAgSgSQgTgSAAgaQAAgZATgSQASgSAZAAQAaAAASASQATASAAAZg");
	this.shape_530.setTransform(507.4655,715.7591,1.8904,1.8904);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("AgrAsQgTgSAAgaQAAgZATgSQASgSAZAAQAaAAASASQATASgBAZQABAagTASQgSASgaAAQgZAAgSgSg");
	this.shape_531.setTransform(507.4655,715.7591,1.8904,1.8904);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#432918").ss(0.3,0,1).p("AAegpIABACIAGAYIABANIgBAMIgDAMIgFAIQgFAFgEACIgGACIgDAAIgFgBIgFgCQgBgBgCgDIAAgBQAEgEAFgGIANgVIAEgOIABgBIgBAAIAAACIgFAKQgDAEgFAIQgHAIgFAGQgEADgKAHIgLAHIgGACQgEABgBgDQgBgDADAAIAFgBIAEgBIAIgEIAJgFIAAgBIgCAAIgGgDQgFgDgCgFQgCgEAAgCIgBgGIACgGQADgFAEgFQAEgFAHgEIAXgJQAIgEACgBIAEgEg");
	this.shape_532.setTransform(507.4891,685.0615,1.8904,1.8904);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#009FE3").s().p("AglAoQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAFgBIAEgBIAIgEIAJgFIAAgBIgCAAIgGgDQgFgDgCgFIgCgGIgBgGIACgGIAHgKQAEgFAHgEIAXgJIAKgFIAEgEIAAAAIABACIAGAYIABANIgBAMIgDAMIgFAIQgFAFgEACIgGACIgDAAIgFgBIgFgCQgBgBgCgDIAAgBIAJgKIANgVIAEgOIABgBIgBAAIAAACIgFAKIgIAMIgMAOIgOAKIgLAHIgGACIgCAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAg");
	this.shape_533.setTransform(507.4891,685.0615,1.8904,1.8904);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#432918").ss(0.6).p("AA/AAQAAAagTASQgSASgaAAQgZAAgSgSQgTgSAAgaQAAgZATgSQASgSAZAAQAaAAASASQATASAAAZg");
	this.shape_534.setTransform(507.4655,685.0405,1.8904,1.8904);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AgrAsQgTgSAAgaQAAgZATgSQASgSAZAAQAaAAASASQATASgBAZQABAagTASQgSASgaAAQgZAAgSgSg");
	this.shape_535.setTransform(507.4655,685.0405,1.8904,1.8904);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#432918").ss(0.3,0,1).p("AAegqIADAKIAEAUIABAKIgCARIgCAHIgFAIQgEAEgFAEQgDABgDAAIgDAAIgFgBIgFgCQgBgBgCgDIAJgLIANgVIAEgOIABgBIgBAAIAAADIgFAIQgCAEgGAIQgIAKgEAFQgGAFgIAFIgLAHIgGADQgEAAgBgDQgBgCADgBIAFgBIAEgBIAIgDIAJgGIAAgBIgCAAIgGgCQgFgFgCgFQgCgDAAgCIgBgGIACgGIAHgLQAGgFAFgEIAIgDIAPgFIAKgFQABAAADgEg");
	this.shape_536.setTransform(507.4891,654.2745,1.8904,1.8904);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#3AAA35").s().p("AglAoQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAFgBIAEgBIAIgEIAJgFIAAAAIgCgBIgGgDQgFgEgCgFQgCgDAAgCIgBgGIACgGIAHgLQAGgFAFgEIAIgDIAPgFIAKgFIAEgEIAAgBIADAKIAEAUIABAKIgCARIgCAHIgFAIQgEAEgFAEIgGABIgDAAIgFgBIgFgCIgDgEIAJgLIANgVIAEgOIABgBIgBAAIAAACIgFAJQgCAFgGAIQgIAJgEAEQgGAHgIAEIgLAHIgGACQgEAAgBgCg");
	this.shape_537.setTransform(507.4891,654.2745,1.8904,1.8904);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#432918").ss(0.6).p("AA/AAQAAAagTASQgSATgaAAQgZAAgSgTQgTgSAAgaQAAgZATgSQASgTAZAAQAaAAASATQATASAAAZg");
	this.shape_538.setTransform(507.4655,654.2745,1.8904,1.8904);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("AgrAsQgTgSAAgaQAAgZATgSQASgSAZAAQAaAAASASQATASgBAZQABAagTASQgSASgaABQgZgBgSgSg");
	this.shape_539.setTransform(507.4655,654.2745,1.8904,1.8904);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#432918").ss(0.3,0,1).p("AgOAgIAUAAQgDgDgBgFQgCgKAFgIQAGgHAGgEQAFgDAAgBQAAgCgJAFQgKAFgCADQgBADAAgQQAAgTAAAAQAAgDgDAKQgCAJAAAHQAAAEgFgGQgGgIgDgCQgEgBAGAJQAHALAAABQAAADABAJQgBAKgEAJg");
	this.shape_540.setTransform(509.396,581.871,1.8904,1.8904);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#F9B233").s().p("AgOAgQAEgJABgKIgBgMQAAgBgHgLQgGgJAEABQADACAGAIQAFAGAAgEQAAgHACgJQADgKAAADIAAATQAAAQABgDQACgDAKgFQAJgFAAACIgFAEQgGAEgGAHQgFAIACAKQABAFADADg");
	this.shape_541.setTransform(509.396,581.871,1.8904,1.8904);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#432918").ss(0.4).p("AgWAaQgJgFgBgBQgEgEgBgCIgCgFQgCgCAAgDQAAgDAAgCQACgGAEgEQAEgCACgBIACAAIABgBQAAgDAEgEQAEgEAEgBQACgBAEAAQAEAAADACQAFACACAEQABAAAAgBIACgDQAEgDAFABQADABACAEQABABAAAEIgBACIAAAAQAFABACACQAFACADAEQACACABADIABAHIgCAIQgBAEgEAEIgFAEIgFABQgGABgDAAIgGgCQgZABgHgCg");
	this.shape_542.setTransform(509.1549,577.4935,1.8904,1.8904);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#F9B233").s().p("AAQAdIgGgCQgZABgHgCIgKgGIgFgGIgCgFQgCgCAAgDIAAgFQACgGAEgEIAGgDIACAAIABgBQAAgDAEgEQAEgEAEgBIAGgBQAEAAADACQAFACACAEQABAAAAgBIACgDQAEgDAFABQADABACAEIABAFIgBACIAAAAIAHADQAFACADAEQACACABADIABAHIgCAIQgBAEgEAEIgFAEIgFABIgHABIgCAAg");
	this.shape_543.setTransform(509.1432,577.4935,1.8904,1.8904);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#432918").ss(0.6).p("AA/AAQAAAagTASQgSATgaAAQgZAAgSgTQgTgSAAgaQAAgZATgSQASgTAZAAQAaAAASATQATASAAAZg");
	this.shape_544.setTransform(508.8833,579.9825,1.8904,1.8904);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AgrAsQgSgSgBgaQABgZASgSQASgTAZAAQAaAAASATQASASAAAZQAAAagSASQgSATgagBQgZABgSgTg");
	this.shape_545.setTransform(508.8833,579.9825,1.8904,1.8904);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#432918").ss(0.3,0,1).p("AgOAgIAUAAQgDgDgBgFQgCgKAFgIQAGgHAGgEQAFgDAAgBQAAgCgJAFQgKAFgCACQgBADAAgPQAAgTAAgBQAAgCgDAKQgCAKAAAGQAAAEgFgGQgGgIgDgCQgEgBAGAJQAHALAAABQAAADABAJQgBAKgEAJg");
	this.shape_546.setTransform(509.396,551.107,1.8904,1.8904);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#95C11F").s().p("AgOAgQAEgJABgKIgBgMQAAgBgHgLQgGgJAEABQADACAGAIQAFAGAAgEIACgQQADgKAAACIAAAUQAAAPABgDQACgCAKgFQAJgFAAACIgFAEQgGAEgGAHQgFAIACAKQABAFADADg");
	this.shape_547.setTransform(509.396,551.107,1.8904,1.8904);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#432918").ss(0.4).p("AgWAaIgKgFQgBgBgEgGQgBgDgBgCQgCgCAAgEQgBgCABgCQACgGAEgEIAGgDIACgBIABAAQAAgDAEgEQADgEAFgBIAGgBQAEAAADABQAEACADAEQABABAAgBIACgDQAEgDAFABQADABACAEQABABAAAEIgBACIAAABIAHABQAEACAEAFIADAFIABAIIgCAIQgBAEgEADQgBABgEADIgFABQgEABgFgBQgEAAgCAAQgZAAgHgCg");
	this.shape_548.setTransform(509.1312,546.7118,1.8904,1.8904);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#95C11F").s().p("AAQAdIgGgBQgZABgHgEIgKgEIgFgHIgCgEIgCgGQgBgDABgCQACgFAEgFIAGgDIACAAIABgBQAAgEAEgDQADgDAFgCIAGgBQAEAAADABQAEADADADIABAAIACgDQAEgCAFAAQADABACAEIABAFIgBACIAAABIAHABQAEACAEAFIADAFIABAHIgCAIQgBAFgEADIgFADIgFADIgEAAIgFAAg");
	this.shape_549.setTransform(509.1196,546.7118,1.8904,1.8904);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#432918").ss(0.6).p("AA/AAQAAAagTASQgSASgaAAQgZAAgSgSQgTgSAAgaQAAgZATgSQASgSAZAAQAaAAASASQATASAAAZg");
	this.shape_550.setTransform(508.8833,549.2166,1.8904,1.8904);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AgrAsQgSgSgBgaQABgZASgSQASgSAZAAQAaAAASASQASASAAAZQAAAagSASQgSASgaAAQgZAAgSgSg");
	this.shape_551.setTransform(508.8833,549.2166,1.8904,1.8904);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#432918").ss(0.3,0,1).p("AgOAgIAUAAQgDgDgBgFQgCgKAFgIQAGgHAGgEQAFgDAAgBQAAgDgJAGQgKAFgCACQgBADAAgPQAAgTAAgBQAAgCgDAKQgCAJAAAHQAAAEgFgGQgGgJgDgBQgEgBAGAJQAHALAAABQAAACABAJQgBALgEAJg");
	this.shape_552.setTransform(509.396,520.3883,1.8904,1.8904);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#13A638").s().p("AgOAgQAEgJABgLIgBgLIgHgMQgGgJAEABQADABAGAJQAFAGAAgEQAAgHACgJQADgKAAACIAAAUQAAAPABgDQACgCAKgFQAJgGAAADIgFAEQgGAEgGAHQgFAIACAKQABAFADADg");
	this.shape_553.setTransform(509.396,520.3883,1.8904,1.8904);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#432918").ss(0.4).p("AgWAaQgJgFgBgBQgEgEgBgCQgBgDgBgCQgCgCAAgDQgBgDABgBQACgHAEgEQAEgCACgBIACAAIABgBQAAgDAEgEQADgDAFgCIAGgBQAEAAADACQAEACADAEQABAAAAAAIACgEQAEgDAFABQADACACADQABABAAAEIgBACIAAABQADAAAEACQAFACADAEQACADABACQABADAAAFIgCAHQgBAFgEADIgFAEIgFABQgEACgFgBIgGgBQgZABgHgDg");
	this.shape_554.setTransform(509.1196,515.9837,1.8904,1.8904);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#13A638").s().p("AAQAdIgGgBQgZABgHgDIgKgGIgFgGIgCgFQgCgCAAgDQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAAAAAAAQACgHAEgEIAGgDIACAAIABgBQAAgDAEgEQADgDAFgCIAGgBQAEAAADACQAEACADAEIABAAIACgEQAEgDAFABQADACACADIABAFIgBACIAAABQADAAAEACQAFACADAEQACADABACQABADAAAFIgCAHQgBAFgEADIgFAEIgFABIgFABIgEAAg");
	this.shape_555.setTransform(509.1196,515.9837,1.8904,1.8904);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#432918").ss(0.6).p("AA/AAQAAAagTASQgSASgaAAQgZAAgSgSQgTgSAAgaQAAgZATgSQASgSAZAAQAaAAASASQATASAAAZg");
	this.shape_556.setTransform(508.8833,518.4979,1.8904,1.8904);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("AgrAsQgSgSgBgaQABgZASgSQASgSAZAAQAaAAASASQASASAAAZQAAAagSASQgSASgaAAQgZAAgSgSg");
	this.shape_557.setTransform(508.8833,518.4979,1.8904,1.8904);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#1D1D1B").s().p("AAGAYIAAgBIAEgCIABgBIAAgcIgWAVIAAAHIABABIAFACIAAABIgXAAIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIAXAAIAAACIgFABIgBABIAAAbIAWgVIAAgGIgBgBIgEgBIAAgCIALABIAMgBIAAACIgFABIgBABIAAAnIABABIAFACIAAABg");
	this.shape_558.setTransform(818.0078,400.6799,1.8904,1.8904);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#1D1D1B").s().p("AAGAYIAAgBIAFgCIABgBIAAgcIgWAVIAAAHIABABIAEACIAAABIgXAAIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIAMABIALgBIAAACIgEABIgBABIAAAbIAWgVIAAgGIgBgBIgFgBIAAgCIAMABIALgBIAAACIgFABIgBABIAAAnIABABIAFACIAAABg");
	this.shape_559.setTransform(805.6258,400.6799,1.8904,1.8904);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#1D1D1B").s().p("AgVAYIAAgBIAFgCIABgBIAAgDIAAghIAAgDIgBgBIgFgBIAAgCIAKABIAMgBQALAAAFADQAFAEAAAGQAAAHgFADQgFAFgLAAIgFgBIAAANIABADIABABIAEACIAAABgAgEAAIAEABQAFAAACgCQADgCAAgGQAAgGgCgCQgDgDgFABIgEAAg");
	this.shape_560.setTransform(795.1342,400.6799,1.8904,1.8904);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#1D1D1B").s().p("AgVASQgGgGAAgMQgBgKAIgHQAJgHAMAAQAOAAAGAGQAIAHAAALQAAALgJAHQgHAHgNAAQgMAAgJgHgAgLgQQgEAGAAAKQAAALAEAFQAFAGAHAAQAHAAAEgFQADgFAAgMQAAgLgEgEQgDgGgIAAQgIAAgDAFg");
	this.shape_561.setTransform(784.2172,400.7272,1.8904,1.8904);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#1D1D1B").s().p("AgMAYIAAgBIAGgCIABgBIAAgnIgLAAIgDAJIgCAAIgCgMIABgBIAuAAIAAABIgDAMIgCAAIgCgJIgLAAIAAAnIABABIAFACIAAABg");
	this.shape_562.setTransform(772.875,400.6799,1.8904,1.8904);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#1D1D1B").s().p("AAGAYIAAgBIAFgCIABgBIAAgcIgXAVIAAAHIABABIAFACIAAABIgXAAIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIAMABIALgBIAAACIgFABIgBABIAAAbIAXgVIAAgGIgBgBIgFgBIAAgCIAXAAIAAACIgFABIgBABIAAAnIABABIAFACIAAABg");
	this.shape_563.setTransform(762.9977,400.6799,1.8904,1.8904);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#1D1D1B").s().p("AgVAYIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIAKABIAMgBQALAAAFADQAFAEAAAGQAAAHgFADQgFAFgLAAIgFgBIAAAQIABABIAFACIAAABgAgEAAIAEABQAFAAACgCQADgCAAgGQAAgGgDgCQgCgDgFABIgEAAg");
	this.shape_564.setTransform(752.5061,400.6799,1.8904,1.8904);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#1D1D1B").s().p("AgVAYIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIAKABIAMgBQALAAAFADQAFAEAAAGQAAAHgFADQgGAFgKAAIgFgBIAAAQIABABIAFACIAAABgAgEAAIAEABQAEAAADgCQADgDAAgFQAAgGgDgCQgCgDgFABIgEAAg");
	this.shape_565.setTransform(743.0542,400.6799,1.8904,1.8904);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#1D1D1B").s().p("AgTAYIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIAKABIAcgBIAAABIgCALIgCAAIgDgIIgNAAIAAASIAIAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIABgFIADAAIgBAHIABAHIgDAAIgBgFIgBgBIgIAAIAAATIAOAAIAEgJIADAAIgBANg");
	this.shape_566.setTransform(733.7441,400.6799,1.8904,1.8904);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#1D1D1B").s().p("AgMAYIAAgBIAGgCIABgBIAAgnIgLAAIgEAJIgBAAIgBgMIAAgBIAtAAIABABIgDAMIgCAAIgDgJIgKAAIAAAnIABABIAGACIAAABg");
	this.shape_567.setTransform(723.9141,400.6799,1.8904,1.8904);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#1D1D1B").s().p("AgTAYIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIAKABIAcgBIAAABIgCALIgCAAIgDgIIgNAAIAAASIAIAAIABgBIABgFIADAAIgBAHIABAHIgDAAIgBgFIgBgBIgIAAIAAATIAOAAIAEgJIADAAIgBANg");
	this.shape_568.setTransform(712.4773,400.6799,1.8904,1.8904);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#1D1D1B").s().p("AALAYIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIAYAAIAAACIgGABIAAABIAAAnQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIAFACIAAABgAghAYIAAgBIAEgCIACgBIAAgDIAAghIAAgDIgBgBIgFgBIAAgCIAYAAIAAACIgGACIgBAAIAAARIAIgBQAJAAAEADQAFADAAAFQAAAIgHAEQgEAEgMAAgAgQAUIAEABQAFAAACgDQADgDAAgFQAAgFgCgDQgDgCgFAAIgEAAg");
	this.shape_569.setTransform(700.8514,400.6799,1.8904,1.8904);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#1D1D1B").s().p("AAGAYIAAgBIAEgCIABgBIAAgUIgVAAIAAAUIABABIAEACIAAABIgXAAIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIALABIAMgBIAAACIgEABIgBABIAAARIAVAAIAAgRIgBgBIgEgBIAAgCIALABIALgBIABACIgFABIgBABIgBAGIABAhIABABIAFACIAAABg");
	this.shape_570.setTransform(687.6188,400.6799,1.8904,1.8904);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#1D1D1B").s().p("AATAQIglAAIgDAPIgDABIgDgTIAHAAIAEgGIAEgGIAEgOIACgNIgBgBIgHgCIAAgCIAJABIAUAAIAKgBIAAACIgFABIgBABIAAAnIABABIAIAAIgDASIgDABgAgFgGIgDAJQgCAEgEAGIAWAAIAAgoIgKAAg");
	this.shape_571.setTransform(675.9457,402.0977,1.8904,1.8904);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#1D1D1B").s().p("AgUASQgIgGAAgMQAAgLAIgGQAIgHANAAQAOAAAGAGQAIAHAAALQAAALgIAHQgIAHgNAAQgNAAgHgHgAgLgQQgEAFAAALQAAAKAEAGQAFAGAGAAQAJAAADgFQAEgFAAgMQAAgKgEgFQgEgGgIAAQgIAAgDAFg");
	this.shape_572.setTransform(665.3595,400.7272,1.8904,1.8904);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#1D1D1B").s().p("AgVAYIAAgBIAFgCIABgBIAAgDIAAghIAAgDIgBgBIgFgBIAAgCIAKABIAMgBQALAAAFADQAFAEAAAGQAAAHgFADQgFAFgLAAIgFgBIAAANIABADIABABIAEACIAAABgAgEAAIAEABQAFAAACgCQADgCAAgGQAAgGgCgCQgDgDgFABIgEAAg");
	this.shape_573.setTransform(654.5844,400.6799,1.8904,1.8904);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#1D1D1B").s().p("AAGAYIAAgBIAEgCIABgBIABgcIgXAVIAAAHIABABIAFACIAAABIgXAAIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIALABIAMgBIAAACIgFABIgBABIAAAbIAXgVIgBgGIgBgBIgEgBIAAgCIAXAAIAAACIgFABIgBABIAAAGIAAAhIABABIAFACIAAABg");
	this.shape_574.setTransform(643.6202,400.6799,1.8904,1.8904);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#1D1D1B").s().p("AgVAYIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIAKABIAMgBQALAAAFADQAFAEAAAGQAAAHgFADQgFAFgLAAIgFgBIAAAQIABABIAFACIAAABgAgEAAIAEABQAEAAADgCQADgDAAgFQAAgGgDgCQgCgDgFABIgEAAg");
	this.shape_575.setTransform(633.1285,400.6799,1.8904,1.8904);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#1D1D1B").s().p("AAFAYIAAgBIAFgCIABgBIAAgnIgVAAIAAAnIABABIAFACIAAABIgXAAIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIAKABIAjAAIAKgBIAAACIgFABIgBABIAAAnIABABIAFACIAAABg");
	this.shape_576.setTransform(622.2589,400.6799,1.8904,1.8904);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#1D1D1B").s().p("AgTAYIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIAKABIAcgBIAAABIgCALIgDAAIgCgIIgNAAIAAASIAIAAIABgBIACgFIACAAIgBAHIABAHIgCAAIgCgFIgBgBIgIAAIAAATIAOAAIAFgJIACAAIgBANg");
	this.shape_577.setTransform(608.3173,400.6799,1.8904,1.8904);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#1D1D1B").s().p("AALAYIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIAXAAIAAACIgEABIgBABIAAAnQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIAEACIAAABgAghAYIAAgBIAEgCIABgBIABgDIAAghIgBgDIAAgBIgFgBIAAgCIAXAAIAAACIgFACIgBAAIAAARIAHgBQAKAAAEADQAFADAAAFQAAAIgGAEQgFAEgMAAgAgQAUIAEABQAEAAAEgDQADgDgBgFQABgFgDgDQgDgCgFAAIgEAAg");
	this.shape_578.setTransform(596.6915,400.6799,1.8904,1.8904);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#1D1D1B").s().p("AgWgOIAAAiIABABIAFABIAAACIgQAAIAAgCIAFgBIABgBIAAgnIgBgBIgFgBIAAgCIAJAAIAIAAIAPAhIAPghIAJAAIAJAAIAAACIgFABIAAABIgBAGIABAhIABABIAEABIAAACIgWAAIAAgCIADgBIABgBIABgHIAAgcIgRAnIgEAAg");
	this.shape_579.setTransform(582.6081,400.7272,1.8904,1.8904);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#1D1D1B").s().p("AgTAYIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIAKABIAcgBIAAABIgCALIgCAAIgDgIIgNAAIAAASIAIAAIABgBIABgFIADAAIAAAOIgDAAIgBgFIgBgBIgIAAIAAATIAOAAIAFgJIACAAIgBANg");
	this.shape_580.setTransform(571.2658,400.6799,1.8904,1.8904);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#1D1D1B").s().p("AgYAYIgBgCIADgBIABAAIACgBIADgEIAJgOQgLgDAAgIQAAgHAGgEQAGgDAJAAIAMAAIALAAIAAACIgGABIAAABIAAAnIABABIAFABIAAACIgXAAIAAgCIAEgBIABgBIAAgRIgEAAIgBAAIgBACIgIAOIgCADIgFACgAgDgSQgCADgBAFQABAGACACQADACAEAAIAEAAIAAgUIgEAAQgFAAgCACg");
	this.shape_581.setTransform(561.3413,400.7272,1.8904,1.8904);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#1D1D1B").s().p("AAGAYIAAgBIAEgCIACgBIAAgUIgWAAIAAAUIABABIAFACIAAABIgYAAIAAgBIAGgCIABgBIAAgnIgBgBIgGgBIAAgCIAMABIALgBIABACIgFABIgBABIAAARIAWAAIAAgRIgCgBIgEgBIAAgCIALABIAMgBIAAACIgFABIgBABIAAAnIABABIAFACIAAABg");
	this.shape_582.setTransform(550.3771,400.6799,1.8904,1.8904);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#1D1D1B").s().p("AADAYIAAgBIAFgBIABgBIAAgDIgCgCIgDgHIgOAAIgEAKIgBABIABABIABABIAEABIAAABIgRAAIAAgBIADgBIACgCIACgCIATgpIADAAIARAoIABADIACACIAFABIAAABgAgIAGIALAAIgDgMIgCgEg");
	this.shape_583.setTransform(539.2239,400.6327,1.8904,1.8904);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#1D1D1B").s().p("AgVAYIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIAKABIAMgBQALAAAFADQAFAEAAAGQAAAHgFADQgFAFgLAAIgFgBIAAANIABADIAAABIAFACIAAABgAgEAAIAEABQAFAAACgCQADgCAAgGQAAgGgDgCQgCgDgFABIgEAAg");
	this.shape_584.setTransform(530.8589,400.6799,1.8904,1.8904);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#1D1D1B").s().p("AACAYIAAgBIAEgBIABgBIAAgBIgBgCIgIgNIgKANIgBACIAAABIABABIADABIAAABIgSAAIAAgBIAEgBIADgCIACgDIANgQIgNgSIgCgCIgDgBIgEgBIAAgCIAaAAIAAACIgEABIgBAAIAAABIADAEIAFAJIAGgHIACgEIABgCQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgDgBIAAgCIAJABIAJgBIAAACIgEABIgDABIgMARIAQAWIADACIADABIAAABg");
	this.shape_585.setTransform(521.0762,400.6799,1.8904,1.8904);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#1D1D1B").s().p("AgUASQgIgGAAgMQAAgKAIgHQAIgHANAAQAOAAAGAGQAIAHAAALQAAALgIAHQgIAHgNAAQgNAAgHgHgAgLgQQgEAFAAALQAAAKAEAGQAFAGAGAAQAJAAADgFQAEgFAAgMQAAgKgEgFQgEgGgIAAQgIAAgDAFg");
	this.shape_586.setTransform(510.4428,400.7272,1.8904,1.8904);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#1D1D1B").s().p("AgUASQgIgGABgMQAAgKAHgHQAJgHALAAQAOAAAHAGQAHAHAAALQABALgJAHQgHAHgNAAQgMAAgIgHgAgLgQQgEAGAAAKQAAAKAEAGQAFAGAGAAQAJAAADgFQADgFABgMQAAgLgFgEQgDgGgIAAQgIAAgDAFg");
	this.shape_587.setTransform(494.7054,400.7272,1.8904,1.8904);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#1D1D1B").s().p("AgWAYIAAgBIAFgCIABgBIAAgnIgBgBIgFgBIAAgCIAKABIAegBIAAABIgDAMIgCAAIgCgJIgPAAIAAARIAHAAQAKAAAFACQAFACAAAHQAAAHgGAEQgHAEgKAAgAgEAUIAEABQAFAAADgDQACgDAAgFQAAgFgCgDQgCgCgGAAIgEAAg");
	this.shape_588.setTransform(483.6939,400.6799,1.8904,1.8904);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#1D1D1B").s().p("AgVASQgGgGgBgMQAAgKAIgHQAIgHANAAQAOAAAGAGQAIAHAAALQgBALgHAHQgIAHgNAAQgMAAgJgHgAgMgQQgDAGAAAKQAAAKAEAGQAEAGAIAAQAHAAAEgFQAEgFgBgMQAAgLgDgEQgEgGgIAAQgIAAgEAFg");
	this.shape_589.setTransform(472.6825,400.7272,1.8904,1.8904);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#1D1D1B").s().p("AgOASQgHgGgBgLQABgLAIgHQAIgHANAAQAHAAAHACIAAAAIgCAMIgDAAIgDgKIgGgBQgIAAgEAGQgFAGAAAJQAAAIAGAHQAEAFAKAAQAFAAAGgCIAAACQgHAFgKAAQgMAAgHgHg");
	this.shape_590.setTransform(462.2854,400.7272,1.8904,1.8904);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#1D1D1B").s().p("AgUASQgIgGAAgMQAAgKAIgHQAIgHANAAQAOAAAGAGQAIAHAAALQAAALgIAHQgIAHgNAAQgNAAgHgHgAgLgQQgEAFAAALQAAAKAEAGQAFAGAGAAQAJAAADgFQAEgFAAgMQAAgKgEgFQgEgGgIAAQgIAAgDAFg");
	this.shape_591.setTransform(451.1794,400.7272,1.8904,1.8904);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#006633").ss(0.3).p("AADAxIgFAAIAAgUIgaAJIAQgeIgJADIAOgbIgEACIALgbIAMAbIgEgCIAOAbIgJgDIAQAeIgagJg");
	this.shape_592.setTransform(519.2331,354.0724,1.8904,1.8904);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#3AAA35").s().p("AgCAtIAAgUIgaAJIAQgeIgJADIAOgbIgEACIALgbIAMAbIgEgCIAOAbIgJgDIAQAeIgagJIAAAUg");
	this.shape_593.setTransform(519.2331,354.7437,1.8904,1.8904);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#432918").ss(0.3,0,1).p("AAggJIAGARIgVgdIgVA4IgBAAIAFgpIAAAAIgVAdIAKgXIgbAjIAAgZIgBAAIgUAgIgLAFIgBAAIgFABIAAAAIAlgyIACABQADADAEABQAEACAFgDIAkgxIAWAdIABABQAHgCAEAFIAFAHIADAEIAUAZIAAACIAAALIgcggIgDgDIgBAAQAEAKAJANIgBAAIgZggg");
	this.shape_594.setTransform(507.7963,355.3108,1.8904,1.8904);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#F3EFF8").s().p("AhMAwIAlgyIACABQADADAEABQAEABAFgCIAkgxIAWAdIABAAQAHgBAEAFIAFAHIADAEIAUAZIAAACIAAAKIgcgfIgDgDIgBAAQAEAJAJAOIgBAAIgZggIAAAAIAGARIgVgdIgVA3IgBAAIAFgnIAAAAIgVAcIAKgXIgbAjIAAgZIgBAAIgUAgIgLAFIgBAAIgFABg");
	this.shape_595.setTransform(507.7963,355.3108,1.8904,1.8904);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#936037").s().p("Ag8ANIALgLQAHgFAOgBQAFAAAFgFIAIgKQAFgGAKgFQANgGAGABQAJADAoApIAFANIAAALIhMgDQgOgBgcADIglAEg");
	this.shape_596.setTransform(507.9853,357.5981,1.8904,1.8904);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("#403C90").ss(0.3,1,1).p("ABPgQIAAAOIgCgBIgEAAIgZgCQgCgBgGAAIgLAAIgGAAQgGABgEADIgCACQgCADAAADQAAADACACQACACAFACQACABgCACQgCABgFAAIgVAAQgCAAgBgBQgEgEAAgBQgDgDAAgEQAAgFADgCQADgEAGgCIAMgEIAHAAQAEgBAAgBQgBgBgFAAIgUABIgOACIgGACQgHACgDACQgEACgDADQgDAEAAAFQAAAEADACIAEAEIgMAAQgCABgFgCQgFgCgEgDQgDgBgCgEQgCgEACgDQACgDAGgEQAEgDAHgDQAKgDABAAIAKgCIBUgBIAFAAQAGAAADABQAHAAADAAIAHABg");
	this.shape_597.setTransform(507.4418,367.844,1.8904,1.8904);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#0BBBEF").s().p("Ag/ASQgFgCgEgDQgDgBgCgEQgCgEACgDQACgDAGgEIALgGIALgDIAKgCIBUgBIAFAAIAJABIAKAAIAHABIABAAIAAAOIgCgBIgEAAIgZgCIgIgBIgLAAIgGAAQgGABgEADIgCACIgCAGQAAADACACIAHAEQAAAAAAABQABAAAAAAQAAABAAAAQAAAAgBABQgCABgFAAIgVAAIgDgBIgEgFQgDgDAAgEQAAgFADgCQADgEAGgCIAMgEIAHAAQABAAABgBQABAAAAAAQAAAAABAAQAAgBAAAAQgBgBgFAAIgUABIgOACIgGACQgHACgDACQgEACgDADQgDAEAAAFQAAAEADACIAEAEIgMAAIgBAAIgGgBg");
	this.shape_598.setTransform(507.4418,367.844,1.8904,1.8904);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#1D1D1B").s().p("AgOAVIAAgpIAOAAQAHAAADADQAEADAAAGQAAADgCACQgCADgCAAQACAAADADIACAGQAAAGgEADQgDADgHAAgAgHAPIAIAAQAHAAAAgGQAAgGgHAAIgIAAgAgHgCIAHAAQAHAAAAgGQAAgGgHAAIgHAAg");
	this.shape_599.setTransform(1113.0962,352.2389,1.8904,1.8904);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgKAEgEQAEgGAHAAQAHAAAFAFQAEAGAAAJIAAADQAAAKgEAFQgFAFgHAAQgGAAgFgFgAgGgLQgDAEAAAGIAAADQAAAGADAEQADAEADAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_600.setTransform(1105.4402,352.2389,1.8904,1.8904);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIAKgSIAJAAIgPAUIAQAVg");
	this.shape_601.setTransform(1098.6348,352.2389,1.8904,1.8904);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#1D1D1B").s().p("AgOAdIAAg5IAGAAIAAAFQAEgGAFABQAHgBAEAFQADAFAAAKIAAAEQAAAKgDAEQgEAFgHAAQgFAAgDgFIAAAUgAgHgSIAAAVQACAGAFgBQAEAAACgDQACgDAAgHIAAgEQAAgHgCgDQgCgEgEAAQgFABgCAEg");
	this.shape_602.setTransform(1091.0733,353.704,1.8904,1.8904);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#1D1D1B").s().p("AgLATQgDgDAAgGQAAgHAEgDQAEgDAHAAIAGAAIAAgFQAAgDgCgCQgCgCgDAAQgDAAgBACQgCACAAADIgHAAQAAgEACgDQABgCAEgCIAGgCQAHAAADADQADAEAAAGIAAAUQAAAFACAEIAAAAIgHAAIgBgEQgEAFgFAAQgGAAgDgDgAgEADQgDACAAAEIABAFQACACADAAQACAAACgCIAEgDIAAgKIgEAAQgFAAgCACg");
	this.shape_603.setTransform(1083.7008,352.2389,1.8904,1.8904);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#1D1D1B").s().p("AAHAVIAAgjIgNAAIAAAjIgHAAIAAgpIAbAAIAAApg");
	this.shape_604.setTransform(1076.2811,352.2389,1.8904,1.8904);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#1D1D1B").s().p("AAIAVIgIgQIgGAQIgIAAIALgVIgLgUIAIAAIAGAPIAHgPIAIAAIgMAUIAMAVg");
	this.shape_605.setTransform(1065.7895,352.2389,1.8904,1.8904);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAPIAJAAQAFAAADADQAEADAAAGQAAAHgEADQgEAEgEAAgAgNAPIAIAAQAEAAABgCQABgCAAgEQAAgDgBgCQgBgCgDAAIgJAAg");
	this.shape_606.setTransform(1057.2828,352.2389,1.8904,1.8904);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAHAAIAAApg");
	this.shape_607.setTransform(1048.4925,352.2389,1.8904,1.8904);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#1D1D1B").s().p("AgOAVIAAgpIAHAAIAAAPIAIAAQAGAAAEADQADAEAAAFQAAAGgDAEQgEAEgGAAgAgHAPIAIAAQADAAACgCQACgCAAgEQAAgDgCgCQgCgCgDAAIgIAAg");
	this.shape_608.setTransform(1041.309,352.2389,1.8904,1.8904);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgJAAIgBAOQAAAJgDAHQgEAFgFAAIgDAAIAAgGIADAAQACgBABgDQACgEAAgJIAAgSIAYAAIAAApg");
	this.shape_609.setTransform(1033.3694,352.2389,1.8904,1.8904);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#1D1D1B").s().p("AgLATQgDgDAAgGQAAgHAFgDQADgDAIAAIAFAAIAAgFQAAgEgCgBQgCgCgDAAIgEACQgCACAAADIgHAAIACgHIAFgEIAGgCQAHAAADADQADAEABAGIAAAUIABAJIAAAAIgHAAIgBgEQgEAFgFAAQgFAAgEgDgAgEADQgDACAAAEQAAADACACQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAQACAAACgCIAEgDIAAgKIgEAAQgFAAgCACg");
	this.shape_610.setTransform(1026.3278,352.2389,1.8904,1.8904);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgGAAIAAgpIAGAAIAAASIAPAAIAAgSIAHAAIAAApg");
	this.shape_611.setTransform(1018.908,352.2389,1.8904,1.8904);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#1D1D1B").s().p("AgLARQgEgHAAgHIAAgEQAAgJAEgFQAEgGAHAAQAIAAADAFQAFAGABAJIAAADQAAAKgFAFQgFAFgHAAQgGAAgFgFgAgGgLQgCAEAAAGIAAADQAAAGACAEQADAEADAAQAJAAABgNIAAgEQgBgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_612.setTransform(1011.3465,352.2389,1.8904,1.8904);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgOAeIgGAAIAAgpIAGAAIAAAeIAOgeIAIAAIAAApg");
	this.shape_613.setTransform(1003.785,352.2389,1.8904,1.8904);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#1D1D1B").s().p("AAKAbIAAgMIgaAAIAAgqIAHAAIAAAkIAOAAIAAgkIAHAAIAAAkIAFAAIgBASg");
	this.shape_614.setTransform(996.3652,353.4204,1.8904,1.8904);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#1D1D1B").s().p("AgKATQgEgDAAgGQAAgHAFgDQAEgDAHAAIAFAAIAAgFQAAgEgCgBQgCgCgDAAIgEACIgCAFIgHAAQAAgEACgDQACgDADgBQADgCADAAQAHAAADADQAEAFAAAFIAAAUIABAJIAAAAIgHAAIgBgEQgEAFgEAAQgGAAgDgDgAgEADQgDACAAAEQAAADACACQABACAEAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBIAEgDIAAgKIgEAAQgFAAgCACg");
	this.shape_615.setTransform(988.5201,352.2389,1.8904,1.8904);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAHAAIAAApg");
	this.shape_616.setTransform(981.1004,352.2389,1.8904,1.8904);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAPIAJAAQAFAAAEADQADADAAAGQAAAHgDADQgFAEgEAAgAgNAPIAJAAQADAAABgCQABgCAAgEQAAgDgBgCQgBgCgDAAIgJAAg");
	this.shape_617.setTransform(968.7184,352.2389,1.8904,1.8904);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#1D1D1B").s().p("AAKAbIAAgMIgaAAIAAgqIAHAAIAAAkIAPAAIAAgkIAGAAIAAAkIAFAAIgBASg");
	this.shape_618.setTransform(960.0699,353.4204,1.8904,1.8904);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgOAeIgGAAIAAgpIAGAAIAAAeIAOgeIAHAAIAAApg");
	this.shape_619.setTransform(952.0831,352.2389,1.8904,1.8904);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgNAAIAAASIgHAAIAAgpIAHAAIAAASIANAAIAAgSIAHAAIAAApg");
	this.shape_620.setTransform(944.427,352.2389,1.8904,1.8904);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#1D1D1B").s().p("AgKATQgEgEAAgFQAAgHAFgDQAEgDAGAAIAGAAIAAgFQgBgEgBgBQgBgCgEAAQgDAAgBACQgCACAAADIgHAAQAAgEACgDQACgCADgCQADgCADAAQAHAAADADQAEAEAAAGIAAAUQAAAFABAEIAAAAIgHAAIgBgEQgEAFgEAAQgHAAgCgDgAgEADQgDACAAAEQAAADABACQACACAEAAQABAAACgCQABAAABgBQAAAAABAAQAAgBAAAAQAAgBABAAIAAgKIgEAAQgFAAgCACg");
	this.shape_621.setTransform(937.0545,352.2389,1.8904,1.8904);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#1D1D1B").s().p("AgOAdIAAg5IAGAAIAAAFQAEgGAFABQAHgBAEAFQADAGAAAJIAAAEQAAAJgDAFQgEAFgHAAQgFAAgDgFIAAAUgAgHgSIAAAVQACAGAFgBQAEAAACgDQACgDAAgHIAAgEQAAgHgCgDQgCgEgEAAQgFABgCAEg");
	this.shape_622.setTransform(929.9183,353.704,1.8904,1.8904);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#1D1D1B").s().p("AgLAVIAAgpIAWAAIAAAGIgPAAIAAAjg");
	this.shape_623.setTransform(923.7273,352.2389,1.8904,1.8904);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#E94E1B").s().p("AgNAEIAAgHIAbAAIAAAHg");
	this.shape_624.setTransform(898.635,352.6103,1.8903,1.8903);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#E94E1B").s().p("AgcAEIAAgHIA5AAIAAAHg");
	this.shape_625.setTransform(887.7186,352.6103,1.8903,1.8903);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#E94E1B").s().p("AgNAEIAAgHIAbAAIAAAHg");
	this.shape_626.setTransform(876.7549,352.6103,1.8903,1.8903);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#1D1D1B").s().p("AgOAVIAAgpIAOAAQAGAAAEADQAEADAAAFQAAAEgBACQgCADgDAAQADAAACADQACACAAAEQAAAGgDADQgEADgHAAgAgIAPIAJAAQAHAAAAgGQAAgGgHAAIgJAAgAgIgCIAIAAQAHAAAAgGQAAgGgHAAIgIAAg");
	this.shape_627.setTransform(681.5696,487.1176,1.8904,1.8904);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAKgEAFQgFAFgHAAQgGAAgFgFgAgGgLQgCADAAAHIAAADQAAAHACADQADAEADAAQAJAAAAgNIAAgEQAAgHgCgDQgCgEgFAAQgEAAgCAEg");
	this.shape_628.setTransform(673.8663,487.1176,1.8904,1.8904);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgGAAIAAgpIAGAAIAAASIAEAAIAKgSIAJAAIgPAUIAPAVg");
	this.shape_629.setTransform(667.1081,487.1176,1.8904,1.8904);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgOAeIgGAAIAAgpIAGAAIAAAeIAOgeIAIAAIAAApg");
	this.shape_630.setTransform(659.2631,487.1176,1.8904,1.8904);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgGAAIAAgpIAGAAIAAASIAPAAIAAgSIAHAAIAAApg");
	this.shape_631.setTransform(651.607,487.1176,1.8904,1.8904);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQADgFABgJIAAgTIAXAAIAAAkIAFAAIAAASgAgCgJQgBAMgFAGIAPAAIAAgcIgJAAg");
	this.shape_632.setTransform(643.7619,488.2991,1.8904,1.8904);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#1D1D1B").s().p("AgKARQgDgDgBgLIAAgEQAAgJAEgGQAEgFAHAAQAHAAAEAFQADAEAAALIAAADIgWAAIAAABQAAAGACAEQADADAEAAQADAAACgBQACgBACgDIAEAFQgEAGgKAAQgGAAgFgFgAgFgMQgBACgBAHIAQAAIAAgBQgBgHgCgBQgBgDgEAAQgDAAgDADg");
	this.shape_633.setTransform(636.3422,487.1176,1.8904,1.8904);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#1D1D1B").s().p("AgOAVIAAgpIAOAAQAHAAADADQAEADAAAFQAAAEgBACQgCADgDAAQADAAACADQACACAAAEQAAAGgDADQgEADgHAAgAgHAPIAIAAQAHAAAAgGQAAgGgHAAIgIAAgAgHgCIAHAAQAHAAAAgGQAAgGgHAAIgHAAg");
	this.shape_634.setTransform(629.1587,487.1176,1.8904,1.8904);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAKgEAFQgFAFgHAAQgGAAgFgFgAgGgLQgCADAAAHIAAADQAAAHACADQADAEADAAQAJAAAAgNIAAgEQAAgHgCgDQgCgEgFAAQgEAAgCAEg");
	this.shape_635.setTransform(621.5027,487.1176,1.8904,1.8904);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#1D1D1B").s().p("AAIAVIAAgjIgOAAIAAAjIgIAAIAAgpIAcAAIAAApg");
	this.shape_636.setTransform(613.8939,487.1176,1.8904,1.8904);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#1D1D1B").s().p("AgLATQgDgDAAgGQAAgHAFgDQADgDAIAAIAFAAIAAgFQAAgEgCgBQgCgCgDAAIgEACQgCACAAADIgHAAQAAgEACgDIAFgEIAGgCQAHAAADADQADADAAAHIAAAUQAAAFACAEIAAAAIgHAAIgBgEQgEAFgFAAQgFAAgEgDgAgEADQgDACAAAEQAAADACACQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAQACAAACgCIAEgDIAAgKIgEAAQgFAAgCACg");
	this.shape_637.setTransform(606.5687,487.1176,1.8904,1.8904);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#1D1D1B").s().p("AgJASQgEgEAAgFIAHAAQAAADACACQACACACAAQAEAAABgCQACgCAAgDQAAgDgBgCQgCgBgDAAIgGAAIAAgFIAGAAQAGgBAAgGQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAIgEACQgCACAAADIgHAAQAAgFAEgEQAEgEAFAAQAHAAADADQADADAAAGIgBAGQgCADgCAAQAGACAAAHQAAAGgEAEQgDADgHAAQgFAAgEgEg");
	this.shape_638.setTransform(599.5743,487.1176,1.8904,1.8904);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAOIAJAAQAFAAAEAEQADAEAAAFQAAAGgEAEQgDAEgFAAgAgNAPIAJAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQABgCAAgEQAAgDgBgCQgCgCgCAAIgJAAg");
	this.shape_639.setTransform(587.6649,487.1176,1.8904,1.8904);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#1D1D1B").s().p("AAKAbIAAgMIgaAAIAAgqIAHAAIAAAkIAOAAIAAgkIAHAAIAAAkIAFAAIgBASg");
	this.shape_640.setTransform(579.0637,488.2991,1.8904,1.8904);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgOAeIgHAAIAAgpIAHAAIAAAeIAOgeIAGAAIAAApg");
	this.shape_641.setTransform(570.9823,487.1176,1.8904,1.8904);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAHAAIAAApg");
	this.shape_642.setTransform(563.4208,487.1176,1.8904,1.8904);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#1D1D1B").s().p("AgKATQgEgDAAgGQAAgHAFgDQAEgDAHAAIAFAAIAAgFQAAgEgCgBQgCgCgDAAIgEACIgCAFIgHAAQAAgEACgDQACgDADgBQADgCADAAQAHAAADADQAEAEAAAGIAAAUIABAJIAAAAIgHAAIgBgEQgEAFgEAAQgGAAgDgDgAgEADQgDACAAAEQAAADACACQABACAEAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBIAEgDIAAgKIgEAAQgEAAgDACg");
	this.shape_643.setTransform(556.001,487.1176,1.8904,1.8904);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#1D1D1B").s().p("AgOAdIAAg5IAGAAIAAAFQADgGAGABQAHgBADAFQADAEABALIAAAEQAAAJgEAGQgDAEgHAAQgFAAgEgEIAAATgAgIgRIAAAUQAEAGAEAAQADgBADgDQACgEAAgGIAAgDQAAgIgCgDQgCgDgEgBQgFAAgDAGg");
	this.shape_644.setTransform(548.9121,488.5826,1.8904,1.8904);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgOAAIAAAjg");
	this.shape_645.setTransform(542.6738,487.1176,1.8904,1.8904);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#E94E1B").ss(0.9).p("AhHAAICPAA");
	this.shape_646.setTransform(508.9005,486.701,1.8904,1.8904);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#C9E5D8").s().p("AgwAyIAAhjIBiAAIAABjg");
	this.shape_647.setTransform(1173.958,638.5035,1.8904,1.8904);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FCD3B3").s().p("AgwAyIAAhjIBiAAIAABjg");
	this.shape_648.setTransform(1173.958,576.9224,1.8904,1.8904);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FAF08F").s().p("AgwAyIAAhjIBiAAIAABjg");
	this.shape_649.setTransform(1173.958,603.4358,1.8904,1.8904);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#EDB6D5").s().p("AgwAyIAAhjIBiAAIAABjg");
	this.shape_650.setTransform(1173.958,543.6033,1.8904,1.8904);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f().s("#706F6F").p("AgxAyIAAhjIBiAAIAABjg");
	this.shape_651.setTransform(1399.2987,656.2737,1.8904,1.8904);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#0B943A").p("AgxAyIAAhjIBiAAIAABjg");
	this.shape_652.setTransform(1399.2987,583.6807,1.8904,1.8904);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f().s("#B14E97").p("AgxAyIAAhjIBiAAIAABjg");
	this.shape_653.setTransform(1399.2987,631.9815,1.8904,1.8904);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#F39200").p("AgxAyIAAhjIBiAAIAABjg");
	this.shape_654.setTransform(1399.2987,535.3799,1.8904,1.8904);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f().s("#36A9E1").p("AgxAyIAAhjIBiAAIAABjg");
	this.shape_655.setTransform(1399.2987,559.5776,1.8904,1.8904);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("#81B73E").p("AgxAyIAAhjIBiAAIAABjg");
	this.shape_656.setTransform(1399.2987,607.7838,1.8904,1.8904);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f().s("#B06916").p("AgxAyIAAhjIBiAAIAABjg");
	this.shape_657.setTransform(1399.2987,706.4649,1.8904,1.8904);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("#0086CD").p("AgxAyIAAhjIBiAAIAABjg");
	this.shape_658.setTransform(1399.2987,680.8494,1.8904,1.8904);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgEQAAgKAEgFQAEgFAGAAQAIAAAEAFQADAEAAAKIAAAEIgXAAIAAABQAAAGADAEQADADADAAIAGgBQACgBACgDIAEAFQgEAGgKAAQgHAAgEgFgAgFgMQgCACgBAHIAQAAIAAgBQAAgGgCgCQgBgDgFAAQgDAAgCADg");
	this.shape_659.setTransform(1508.2331,708.1031,1.8904,1.8904);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgGAAIAAgpIAGAAIAAAeIAPgeIAGAAIAAApg");
	this.shape_660.setTransform(1500.8134,708.1031,1.8904,1.8904);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#1D1D1B").s().p("AAHAVIgKgSIgFAAIAAASIgGAAIAAgpIAGAAIAAASIAEAAIAKgSIAJAAIgPAUIAPAVg");
	this.shape_661.setTransform(1493.7717,708.1031,1.8904,1.8904);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgDQAAgKAEgFQAFgFAGAAQAGAAAEAEQAEAEAAAHIgGAAQAAgFgCgCQgDgCgDAAQgEAAgCADQgCADAAAHIAAAEQAAAIACADQACADAEAAQADAAADgCQACgCAAgEIAGAAQAAAGgEAEQgEAEgGAAQgGAAgFgFg");
	this.shape_662.setTransform(1486.3992,708.1031,1.8904,1.8904);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgEQAAgJAEgGQAEgFAHAAQAHAAADAFQAEAEAAAKIAAAEIgWAAIAAABQAAAHACADQADADADAAIAGgBIAEgEIAEAFQgEAGgKAAQgHAAgEgFgAgFgMQgCAEAAAFIAQAAIAAgBQgBgHgCgBQgCgDgDAAQgDAAgDADg");
	this.shape_663.setTransform(1479.4048,708.1031,1.8904,1.8904);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#1D1D1B").s().p("AAHAVIAAgPIgHABQgGAAgDgEQgEgEAAgGIAAgNIAHAAIAAANQAAAIAGAAIAHgBIAAgUIAHAAIAAApg");
	this.shape_664.setTransform(1472.0796,708.1031,1.8904,1.8904);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgOAeIgGAAIAAgpIAGAAIAAAeIAOgeIAIAAIAAApg");
	this.shape_665.setTransform(1464.8489,708.1031,1.8904,1.8904);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgPAAIAAAjg");
	this.shape_666.setTransform(1458.6579,708.1031,1.8904,1.8904);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAJgEAGQgFAFgHAAQgGAAgFgFgAgGgLQgCADAAAHIAAADQAAAHACADQACAEAEAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_667.setTransform(1451.6635,708.1031,1.8904,1.8904);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBALgCAFQgEAFgFAAIgCAAIAAgGIACAAQADgBABgDIACgfIAXAAIAAApg");
	this.shape_668.setTransform(1443.7239,708.1031,1.8904,1.8904);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgGQAEgFAHAAQAIAAADAFQAEAFABAKIAAADQAAAJgEAGQgFAFgHAAQgGAAgFgFgAgGgLQgDAEAAAGIAAADQAAAGADAEQADAEADAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_669.setTransform(1436.6349,708.1031,1.8904,1.8904);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgEQAAgKAEgFQADgFAIAAQAHAAADAFQAEAEAAAKIAAAEIgXAAIAAABQABAGACAEQADADADAAIAGgBQACgBACgDIAEAFQgFAGgJAAQgGAAgFgFgAgFgMQgBACgCAHIAQAAIAAgBQAAgGgCgCQgCgDgDAAQgDAAgDADg");
	this.shape_670.setTransform(1429.4042,708.1031,1.8904,1.8904);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgOAAIAAAjg");
	this.shape_671.setTransform(1423.5913,708.1031,1.8904,1.8904);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgEQAAgJAEgGQAEgFAGAAQAIAAADAFQAEAFAAAJIAAAEIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgCADAAAGIAPAAIAAgBQAAgFgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_672.setTransform(1524.4431,683.3391,1.8904,1.8904);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgHAAIAAgpIAHAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_673.setTransform(1517.0234,683.3391,1.8904,1.8904);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgDAAIAAASIgIAAIAAgpIAIAAIAAASIADAAIAKgSIAIAAIgNAUIAPAVg");
	this.shape_674.setTransform(1510.029,683.3391,1.8904,1.8904);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgLIAAgDQAAgLAEgEQADgFAIAAQAGAAAEAEQAEAEAAAHIgHAAQAAgEgCgDQgBgCgEAAQgDAAgDADQgCAEAAAGIAAAEQAAAHACAEQADADADAAQAEAAABgCQACgDAAgDIAHAAQAAAGgEAEQgEAEgGAAQgIAAgDgFg");
	this.shape_675.setTransform(1502.6565,683.3391,1.8904,1.8904);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#1D1D1B").s().p("AgKARQgDgDgBgLIAAgEQAAgJAEgGQAEgFAGAAQAIAAADAFQAEAFAAAJIAAAEIgWAAIAAABQAAAGACAEQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgGAAgFgFgAgFgMQgBACgBAHIAPAAIAAgBQAAgFgCgDQgCgDgEAAQgCAAgDADg");
	this.shape_676.setTransform(1495.6148,683.3391,1.8904,1.8904);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#1D1D1B").s().p("AAHAVIAAgPIgHABQgFAAgEgEQgEgDAAgHIAAgNIAGAAIAAANQACAIAFAAIAHgBIAAgUIAHAAIAAApg");
	this.shape_677.setTransform(1488.2896,683.3391,1.8904,1.8904);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgOAeIgGAAIAAgpIAGAAIAAAeIAOgeIAIAAIAAApg");
	this.shape_678.setTransform(1481.0116,683.3391,1.8904,1.8904);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgOAAIAAAjg");
	this.shape_679.setTransform(1474.8206,683.3391,1.8904,1.8904);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#1D1D1B").s().p("AgKARQgFgFAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAEAFQAFAGAAAJIAAADQAAAIgEAHQgEAFgIAAQgGAAgEgFgAgGgLQgCAEgBAGIAAADQABAGACAEQADAEADAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_680.setTransform(1467.8735,683.3391,1.8904,1.8904);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBALgDAFQgCAFgGAAIgCAAIAAgGIABAAQADgBABgDQACgEAAgJIABgSIAXAAIAAApg");
	this.shape_681.setTransform(1459.9811,683.3391,1.8904,1.8904);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAJgEAGQgFAFgHAAQgGAAgFgFgAgGgLQgCAEAAAGIAAADQAAAGACAEQACAEAEAAQAJAAAAgNIAAgEQAAgHgCgDQgDgEgEAAQgDAAgDAEg");
	this.shape_682.setTransform(1452.7977,683.3391,1.8904,1.8904);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#1D1D1B").s().p("AgOAdIAAg5IAGAAIAAAEQAEgEAGAAQAGAAAEAEQADAFAAAJIAAAFQAAAKgDAEQgEAFgGAAQgFAAgFgFIAAAUgAgIgSIAAAWQAEAEAEAAQAEAAACgDQACgEAAgFIAAgFQAAgGgCgEQgCgDgEAAQgFAAgDAEg");
	this.shape_683.setTransform(1445.4725,684.8042,1.8904,1.8904);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQAEgGAAgIIAAgSIAXAAIAAAjIAFAAIAAASgAgCgJQgBALgEAHIAOAAIAAgdIgJAAg");
	this.shape_684.setTransform(1437.5801,684.4733,1.8904,1.8904);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgOAeIgGAAIAAgpIAGAAIAAAeIAOgeIAIAAIAAApg");
	this.shape_685.setTransform(1429.7823,683.3391,1.8904,1.8904);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgOAAIAAAjg");
	this.shape_686.setTransform(1423.5913,683.3391,1.8904,1.8904);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgEQAAgKAEgFQAEgFAGAAQAIAAADAFQAEAEAAAKIAAAEIgXAAIAAABQABAGACAEQADADADAAIAGgBQACgBACgDIAEAFQgEAGgKAAQgGAAgFgFgAgFgMQgBACgCAHIAQAAIAAgBQAAgGgCgCQgCgDgEAAQgCAAgDADg");
	this.shape_687.setTransform(1505.303,658.5751,1.8904,1.8904);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAOIAJAAQAFAAAEAEQADAEAAAFQAAAGgDAEQgEAEgFAAgAgNAPIAJAAIAEgCQABgCAAgEQAAgDgBgCQgBgCgDAAIgJAAg");
	this.shape_688.setTransform(1496.5127,658.5751,1.8904,1.8904);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgOAAIAAASIgHAAIAAgpIAHAAIAAASIAOAAIAAgSIAGAAIAAApg");
	this.shape_689.setTransform(1487.6752,658.5751,1.8904,1.8904);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#1D1D1B").s().p("AgCAVIAAgjIgMAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_690.setTransform(1480.6808,658.5751,1.8904,1.8904);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#1D1D1B").s().p("AgCAmIAAgQIgFABQgGAAgEgGQgDgFAAgLQAAgJADgGQAEgGAGAAIAFABIAAgSIAFAAIAAASIAFgBQAHAAACAGQAEAGAAAKQAAAKgEAFQgCAGgHAAIgFgBIAAAQgAADgNIAAAdIADAAQAFAAABgDQACgEABgIQgBgGgCgFQgBgFgFAAgAgLgKQgCAEAAAIQAAAIACADQACADAEAAIADAAIAAgeIgDgBQgEAAgCAFg");
	this.shape_691.setTransform(1473.3556,658.4333,1.8904,1.8904);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAFgDQAEgEAGAAIAGAAIAAgEQAAgDgCgCQgCgCgDAAIgEACQgCACAAADIgHAAIACgHIAFgEIAGgCQAHAAADADQADADAAAHIAAAUQAAAFACADIAAABIgHAAIgBgFQgEAGgFAAQgFAAgEgDgAgEADQgDACAAAEQAAADACACQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQACAAACgCIAEgDIAAgKIgEAAQgFAAgCACg");
	this.shape_692.setTransform(1465.0852,658.5751,1.8904,1.8904);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#1D1D1B").s().p("AgVAVIAAgpIAHAAIAAAjIAMAAIAAgjIAGAAIAAAjIAMAAIAAgjIAGAAIAAApg");
	this.shape_693.setTransform(1456.1531,658.5751,1.8904,1.8904);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQAEgGAAgIIAAgSIAXAAIAAAjIAFAAIAAASgAgCgJQgBALgEAHIAOAAIAAgdIgJAAg");
	this.shape_694.setTransform(1446.843,659.7094,1.8904,1.8904);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgNAAIAAASIgIAAIAAgpIAIAAIAAASIANAAIAAgSIAHAAIAAApg");
	this.shape_695.setTransform(1439.0452,658.5751,1.8904,1.8904);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#1D1D1B").s().p("AgKATQgEgFAAgEQAAgHAFgDQAFgEAGAAIAFAAIAAgEQAAgEgCgBQgCgCgDAAIgEACIgCAFIgHAAQAAgEACgDQACgCADgCQADgCADAAQAHAAADADQADADABAHIAAAUIABAIIAAABIgHAAIgBgFQgEAGgEAAQgGAAgDgDgAgEADQgDACAAAEQAAADACACQABACAEAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBIAEgDIAAgKIgEAAQgEAAgDACg");
	this.shape_696.setTransform(1431.6254,658.5751,1.8904,1.8904);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBAMgDAEQgCAFgGAAIgCAAIAAgGIACAAQACgBACgDIACgfIAXAAIAAApg");
	this.shape_697.setTransform(1423.8749,658.5751,1.8904,1.8904);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgIIAAgFQAAgJAEgGQAEgFAGAAQAHAAAEAFQAEAFAAAKIAAADIgWAAIAAABQAAAGACAEQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgCADAAAHIAPAAIAAgBQAAgGgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_698.setTransform(1502.4202,633.7639,1.8904,1.8904);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAOIAJAAQAEAAAEAEQAEADAAAGQAAAHgEADQgEAEgEAAgAgNAPIAJAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQABgDAAgDQAAgDgBgCQgBgCgDAAIgJAAg");
	this.shape_699.setTransform(1493.6299,633.8111,1.8904,1.8904);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgNAAIAAASIgHAAIAAgpIAHAAIAAASIANAAIAAgSIAHAAIAAApg");
	this.shape_700.setTransform(1484.7924,633.8111,1.8904,1.8904);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgDQAAgJAEgGQAFgFAGAAQAGAAAEAEQAEAFAAAGIgHAAQAAgEgCgCQgCgDgDAAQgDAAgDADQgCACAAAIIAAAEQAAAJACACQADADADAAQAEAAABgCQACgCAAgEIAHAAQAAAGgEAEQgFAEgFAAQgHAAgEgFg");
	this.shape_701.setTransform(1477.6089,633.7639,1.8904,1.8904);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#1D1D1B").s().p("AAHAVIgKgSIgFAAIAAASIgGAAIAAgpIAGAAIAAASIAEAAIAKgSIAIAAIgOAUIAPAVg");
	this.shape_702.setTransform(1470.9926,633.8111,1.8904,1.8904);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgIIAAgFQAAgJAEgGQAEgFAHAAQAGAAAFAFQADAEAAALIAAADIgWAAIAAABQAAAIADACQACADAEAAIAFgBIAFgEIADAFQgFAGgJAAQgGAAgFgFgAgFgMQgCAEAAAGIAPAAIAAgBQgBgIgBgBQgBgDgEAAQgEAAgCADg");
	this.shape_703.setTransform(1463.5256,633.7639,1.8904,1.8904);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBAMgDAEQgCAEgGABIgCAAIAAgGIABAAQADgBABgDQACgEAAgJIABgSIAXAAIAAApg");
	this.shape_704.setTransform(1455.8223,633.8111,1.8904,1.8904);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#1D1D1B").s().p("AAIAVIAAgjIgPAAIAAAjIgGAAIAAgpIAcAAIAAApg");
	this.shape_705.setTransform(1448.4971,633.8111,1.8904,1.8904);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#1D1D1B").s().p("AANAVIAAgcIgLAcIgDAAIgLgdIAAAdIgHAAIAAgpIAJAAIAKAfIALgfIAJAAIAAApg");
	this.shape_706.setTransform(1439.8013,633.8111,1.8904,1.8904);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgGQAEgFAHAAQAHAAAFAFQAEAGAAAJIAAADQAAAKgEAEQgEAGgIAAQgGAAgFgFgAgGgLQgDAEAAAGIAAADQAAAGADAFQADADADAAQAJAAABgNIAAgEQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_707.setTransform(1431.2001,633.7639,1.8904,1.8904);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgDAAIAAASIgHAAIAAgpIAHAAIAAASIADAAIAKgSIAIAAIgNAUIAOAVg");
	this.shape_708.setTransform(1424.3947,633.8111,1.8904,1.8904);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#1D1D1B").s().p("AgKASQgEgGAAgIIAAgFQAAgKAEgEQAEgGAGAAQAHAAAFAFQADAEAAAKIAAAEIgXAAIAAABQAAAGADAEQADADAEAAIAFgBIAEgDIADADQgEAHgJAAQgHAAgEgEgAgFgMQgBADgCAGIAQAAIAAgBQAAgGgCgDQgCgCgEAAQgDAAgCADg");
	this.shape_709.setTransform(1533.9423,608.9999,1.8904,1.8904);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgGAAIAAgpIAGAAIAAAeIAPgeIAGAAIAAApg");
	this.shape_710.setTransform(1526.5225,609.0471,1.8904,1.8904);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#1D1D1B").s().p("AAHAVIgKgSIgFAAIAAASIgGAAIAAgpIAGAAIAAASIAEAAIAKgSIAJAAIgPAUIAPAVg");
	this.shape_711.setTransform(1519.4809,609.0471,1.8904,1.8904);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgEQAAgJAEgGQAFgFAGAAQAGAAAEAFQAEADAAAIIgGAAQAAgFgCgDQgDgCgDAAQgEAAgCADQgCACAAAIIAAAFQAAAHACADQACADAEAAQAEAAACgCQACgCAAgEIAGAAQAAAGgEAEQgFAEgFAAQgGAAgFgFg");
	this.shape_712.setTransform(1512.1084,608.9999,1.8904,1.8904);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#1D1D1B").s().p("AgKASQgEgGAAgIIAAgFQAAgJAEgFQAEgGAGAAQAIAAADAFQAEAEAAAKIAAAEIgWAAIAAABQAAAHACADQADADADAAIAGgBIAEgDIAEADQgFAHgJAAQgGAAgFgEgAgFgMQgCAEAAAFIAQAAIAAgBQgCgGgBgDQgCgCgEAAQgCAAgDADg");
	this.shape_713.setTransform(1505.114,608.9999,1.8904,1.8904);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#1D1D1B").s().p("AAHAVIAAgPIgHABQgHAAgCgEQgEgDAAgHIAAgNIAHAAIAAANQAAAIAGAAIAHgBIAAgUIAHAAIAAApg");
	this.shape_714.setTransform(1497.7888,609.0471,1.8904,1.8904);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgGAAIAAgpIAGAAIAAAeIAPgeIAGAAIAAApg");
	this.shape_715.setTransform(1490.5108,609.0471,1.8904,1.8904);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgPAAIAAAjg");
	this.shape_716.setTransform(1484.367,609.0471,1.8904,1.8904);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgFQAFgGAGAAQAHAAAFAGQAEAFAAAIIAAAEQAAAKgEAEQgEAGgIAAQgGAAgFgFgAgGgLQgCADAAAHIAAADQAAAIACACQACAEAEAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_717.setTransform(1477.3726,608.9999,1.8904,1.8904);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBALgCAFQgDAEgGABIgCAAIAAgGIACAAQACgBACgDIACgfIAXAAIAAApg");
	this.shape_718.setTransform(1469.433,609.0471,1.8904,1.8904);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgFQAEgGAHAAQAHAAAFAGQAEAFAAAIIAAAEQAAAKgEAEQgEAGgIAAQgGAAgFgFgAgGgLQgCAEgBAGIAAADQABAHACADQADAEADAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_719.setTransform(1462.2969,608.9999,1.8904,1.8904);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAHAAAEAFQADAGAAAJIAAAEQAAAJgDAFQgEAFgHAAQgFAAgDgEIAAAUgAgHgRIAAAVQACAEAFAAQAEAAACgDQACgDAAgGIAAgFQAAgHgCgDQgCgDgEAAQgFAAgCAFg");
	this.shape_720.setTransform(1454.9716,610.4649,1.8904,1.8904);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQAEgGAAgIIABgSIAWAAIAAAjIAFAAIAAASgAgCgJQAAAKgFAIIAOAAIAAgdIgJAAg");
	this.shape_721.setTransform(1447.032,610.1814,1.8904,1.8904);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgGAAIAAgpIAGAAIAAASIAPAAIAAgSIAGAAIAAApg");
	this.shape_722.setTransform(1439.2815,609.0471,1.8904,1.8904);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#1D1D1B").s().p("AgKASQgEgFAAgJIAAgFQAAgJAEgFQAEgGAGAAQAIAAADAFQAEAFAAAJIAAAEIgWAAIAAABQAAAGACAEQADADAEAAIAFgBIAEgDIAEADQgFAHgJAAQgGAAgFgEgAgFgMQgCAEAAAFIAPAAIAAgBQAAgFgCgEQgCgCgEAAQgCAAgDADg");
	this.shape_723.setTransform(1432.0035,608.9999,1.8904,1.8904);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQAEgGAAgIIABgSIAWAAIAAAjIAFAAIAAASgAgCgJQAAAKgFAIIAOAAIAAgdIgJAAg");
	this.shape_724.setTransform(1424.3475,610.1814,1.8904,1.8904);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgDQAAgKAEgGQAFgFAFAAQAHAAAFAFQADAEAAALIAAADIgWAAIAAABQAAAHADADQACADAEAAIAFgBIAFgEIADAFQgFAGgJAAQgHAAgEgFgAgFgMQgCAEAAAGIAPAAIAAgBQAAgIgCgBQgCgDgEAAQgDAAgCADg");
	this.shape_725.setTransform(1503.3181,584.2359,1.8904,1.8904);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgHAAIAAgpIAHAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_726.setTransform(1495.9456,584.2832,1.8904,1.8904);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgHAAIAAgpIAHAAIAAASIADAAIALgSIAJAAIgOAUIAPAVg");
	this.shape_727.setTransform(1488.9512,584.2832,1.8904,1.8904);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgDQAAgKAEgFQAFgFAGAAQAHAAADAEQADAEABAHIgGAAQgBgFgCgBQgBgDgEAAQgDAAgDADQgCADAAAHIAAAEQAAAJACACQACADAEAAQADAAACgCQACgBABgFIAGAAQgBAGgDAEQgEAEgGAAQgHAAgEgFg");
	this.shape_728.setTransform(1481.5315,584.2359,1.8904,1.8904);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgDQAAgKAEgGQAEgFAGAAQAHAAAEAFQAEAFAAAKIAAADIgWAAIAAABQAAAGACAEQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgCADAAAHIAPAAIAAgBQAAgGgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_729.setTransform(1474.5371,584.2359,1.8904,1.8904);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#1D1D1B").s().p("AAHAVIAAgPIgHABQgGAAgDgEQgDgDgBgHIAAgNIAHAAIAAANQAAAIAGAAIAHgBIAAgUIAHAAIAAApg");
	this.shape_730.setTransform(1467.1646,584.2832,1.8904,1.8904);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgNAeIgHAAIAAgpIAHAAIAAAeIANgeIAIAAIAAApg");
	this.shape_731.setTransform(1459.9339,584.2832,1.8904,1.8904);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgNAAIAAASIgHAAIAAgpIAHAAIAAASIANAAIAAgSIAIAAIAAApg");
	this.shape_732.setTransform(1452.2778,584.2832,1.8904,1.8904);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#1D1D1B").s().p("AgKATQgDgEgBgGQABgGAEgDQAFgDAFAAIAGAAIAAgFQgBgEgBgBQgBgCgEAAQgCAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAIgHAAQAAgDACgDQACgCADgCQAEgCACAAQAFAAAFADQAEAEAAAGIAAAUIABAIIAAABIgHAAIgBgEQgFAFgDAAQgHAAgCgDgAgEADQgDACAAAEQAAAEABABQACACAEAAQAAAAAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAEgEIAAgKIgFAAQgEAAgCACg");
	this.shape_733.setTransform(1444.9053,584.2359,1.8904,1.8904);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#1D1D1B").s().p("AgDAVIAAgjIgLAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_734.setTransform(1438.2418,584.2832,1.8904,1.8904);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAJgEAGQgEAFgIAAQgGAAgFgFgAgGgLQgCADAAAHIAAADQAAAHACADQACAEAEAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_735.setTransform(1431.4364,584.2359,1.8904,1.8904);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#1D1D1B").s().p("AgKAZQgFgGAAgJIAAgEQAAgLAFgJQAEgIAGgBIAHgDQAAAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAFAAIAAACQAAAIgHACIgFABQgDABgEAEQgCADgBAGQAEgGAGAAQAHAAAEAFQAEAFAAAJIAAAAQAAAJgFAGQgEAGgHAAQgGAAgEgGgAgGAAQgCADAAAHQAAAGACAFQACAEAEAAQAEAAADgEQACgEAAgIQAAgFgCgEQgDgDgEAAQgEAAgCADg");
	this.shape_736.setTransform(1424.1112,582.5818,1.8904,1.8904);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#1D1D1B").s().p("AgKARQgDgEgBgJIAAgFQAAgJAEgFQAEgGAGAAQAIAAADAFQAEAFAAAJIAAAEIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgDIAEADQgFAHgJAAQgGAAgFgFgAgFgMQgBADgBAGIAPAAIAAAAQAAgFgCgFQgCgCgEAAQgCAAgDADg");
	this.shape_737.setTransform(1510.5488,559.4719,1.8904,1.8904);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgOAeIgGAAIAAgpIAGAAIAAAeIAOgeIAIAAIAAApg");
	this.shape_738.setTransform(1503.1291,559.5192,1.8904,1.8904);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#1D1D1B").s().p("AAHAVIgKgSIgFAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIALgSIAIAAIgPAUIAQAVg");
	this.shape_739.setTransform(1496.1347,559.5192,1.8904,1.8904);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgFQAAgKAEgEQAEgFAHAAQAGAAAEAFQAEADAAAIIgGAAQAAgFgCgDQgDgCgDAAQgDAAgDADQgCACAAAIIAAAFQAAAHACADQADADADAAQADAAADgCQACgDAAgDIAGAAQAAAGgEAEQgFAEgFAAQgIAAgDgFg");
	this.shape_740.setTransform(1488.7622,559.4719,1.8904,1.8904);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgIIAAgFQAAgKAEgEQAEgGAHAAQAGAAAEAFQAEAEAAAKIAAAEIgWAAIAAABQgBAHADADQADADAEAAIAFgBIAEgDIADADQgDAHgKAAQgHAAgEgFgAgFgMQgCADAAAGIAPAAIAAAAQAAgHgCgDQgCgCgDAAQgEAAgCADg");
	this.shape_741.setTransform(1481.7678,559.4719,1.8904,1.8904);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#1D1D1B").s().p("AAHAVIAAgPIgHABQgGAAgEgEQgDgEAAgGIAAgNIAHAAIAAANQAAAIAGAAQAEAAADgBIAAgUIAHAAIAAApg");
	this.shape_742.setTransform(1474.4425,559.5192,1.8904,1.8904);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgOAeIgIAAIAAgpIAIAAIAAAeIAOgeIAGAAIAAApg");
	this.shape_743.setTransform(1467.1173,559.5192,1.8904,1.8904);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgOAAIAAAjg");
	this.shape_744.setTransform(1460.9263,559.5192,1.8904,1.8904);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgFQAFgGAGAAQAHAAAFAGQAEAGAAAHIAAAEQAAAKgEAEQgFAGgHAAQgGAAgFgFgAgGgLQgCADAAAHIAAADQAAAIACADQACADAEAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_745.setTransform(1454.0264,559.4719,1.8904,1.8904);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBAMgDAEQgCAEgGABIgCAAIAAgGIABgBQADAAABgDIACgNIABgSIAXAAIAAApg");
	this.shape_746.setTransform(1446.0868,559.5192,1.8904,1.8904);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#1D1D1B").s().p("AgKARQgEgFgBgJIAAgEQAAgJAEgFQAFgGAGAAQAHAAAFAGQAEAFAAAIIAAAEQAAAKgEAEQgEAGgIAAQgHAAgDgFgAgGgLQgCAEAAAGIAAADQAAAHACAEQADADADAAQAJAAABgNIAAgEQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_747.setTransform(1438.9034,559.4719,1.8904,1.8904);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgGAAIAAgpIAGAAIAAAeIAPgeIAGAAIAAApg");
	this.shape_748.setTransform(1431.3419,559.5192,1.8904,1.8904);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#1D1D1B").s().p("AgKAZQgFgGAAgJIAAgEQAAgLAFgJQAEgIAGgBIAHgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAFAAIAAACQAAAIgHACIgFABQgDABgEAEQgCADgBAGQAEgGAGAAQAHAAAEAFQAEAFAAAJIAAAAQAAAJgFAGQgEAGgHAAQgGAAgEgGgAgGAAQgCADAAAHQAAAGACAFQACAEAEAAQAEAAADgEQACgEAAgIQAAgFgCgEQgDgDgEAAQgEAAgCADg");
	this.shape_749.setTransform(1424.1112,557.8178,1.8904,1.8904);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#1D1D1B").s().p("AgKASQgEgGAAgJIAAgDQAAgKAEgGQAEgFAGAAQAHAAAEAFQAEAEAAALIAAADIgWAAIAAABQAAAHACADQADADADAAIAGgBIAEgEIAEAFQgFAGgJAAQgGAAgFgEgAgFgMQgCAEAAAFIAQAAIAAgBQgCgGgBgDQgCgCgEAAQgCAAgDADg");
	this.shape_750.setTransform(1494.9059,534.7079,1.8904,1.8904);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAOIAJAAQAEAAAEAFQAEABAAAIQAAAGgEAEQgDADgFAAgAgNAQIAJAAQAAAAABgBQABAAAAAAQABAAAAgBQABAAAAgBQABgCAAgDQAAgEgBgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgJAAg");
	this.shape_751.setTransform(1486.1629,534.7079,1.8904,1.8904);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgNAAIAAASIgIAAIAAgpIAIAAIAAATIANAAIAAgTIAHAAIAAApg");
	this.shape_752.setTransform(1477.3254,534.7079,1.8904,1.8904);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAHAAAEAFQADAFAAAKIAAAEQAAAKgDAEQgEAFgHAAQgFAAgEgFIAAAVgAgIgRIAAAVQAEAEAEAAQAEAAACgDQACgDAAgGIAAgFQAAgHgCgDQgCgDgEAAQgEAAgEAFg");
	this.shape_753.setTransform(1469.9529,536.173,1.8904,1.8904);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#1D1D1B").s().p("AgKASQgEgGAAgJIAAgDQAAgLAEgFQAEgFAHAAQAGAAAFAFQADAFAAAKIAAADIgWAAIAAABQAAAGACAEQADADAEAAIAFgBIAEgEIADAFQgEAGgJAAQgGAAgFgEgAgFgMQgBACgBAHIAPAAIAAgBQAAgGgCgDQgBgCgEAAQgEAAgCADg");
	this.shape_754.setTransform(1462.6749,534.7079,1.8904,1.8904);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#1D1D1B").s().p("AgDAmIAAgQQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgHAAgCgGQgEgFAAgKQAAgKAEgGQACgGAHAAIAEABIAAgSIAGAAIAAASIAFgBQAGAAAEAGQADAGAAAKQAAAKgDAFQgDAGgHAAIgFgBIAAAQgAADgOIAAAeIADABQAEAAACgEQACgDAAgIQAAgIgCgEQgCgEgEAAgAgLgKQgCAEAAAIQAAAIABADQADAEAEAAIACgBIAAgeIgCAAQgEAAgCAEg");
	this.shape_755.setTransform(1454.3573,534.5661,1.8904,1.8904);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgDQAAgKAEgFQAFgFAGAAQAGAAAEAEQADAEABAHIgGAAQgBgFgCgCQgCgCgDAAQgEAAgCADQgCAEAAAGIAAAEQAAAJACACQACADAEAAQADAAACgCQACgBABgFIAGAAQgBAHgDADQgEAEgGAAQgHAAgEgFg");
	this.shape_756.setTransform(1446.2759,534.7079,1.8904,1.8904);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#1D1D1B").s().p("AgKARQgEgFgBgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAJgEAGQgEAFgIAAQgHAAgDgFgAgGgLQgCAEAAAGIAAADQAAAGACAEQADAEADAAQAJAAABgNIAAgEQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_757.setTransform(1438.9034,534.7079,1.8904,1.8904);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#1D1D1B").s().p("AAIAVIAAgdIgPAdIgGAAIAAgpIAGAAIAAAeIAPgeIAGAAIAAApg");
	this.shape_758.setTransform(1431.3419,534.7079,1.8904,1.8904);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#1D1D1B").s().p("AgKAZQgFgGAAgJIAAgEQAAgLAFgJQAEgIAGgBIAHgDQAAAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAFAAIAAACQAAAIgHACIgFABQgDABgEAEQgCADgBAGQAEgGAGAAQAHAAAEAFQAEAFAAAJIAAAAQAAAJgFAGQgEAGgHAAQgGAAgEgGgAgGAAQgCADAAAHQAAAHACAEQACAEAEAAQAEAAADgEQACgEAAgIQAAgFgCgEQgDgDgEAAQgEAAgCADg");
	this.shape_759.setTransform(1424.1112,533.0538,1.8904,1.8904);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#1D1D1B").s().p("AgFAcIAAguIgNAAIAAgJIAlAAIAAAJIgNAAIAAAug");
	this.shape_760.setTransform(1478.0815,508.5261,1.8904,1.8904);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#1D1D1B").s().p("AAIAcIAAguIgQAAIAAAuIgLAAIAAg3IAnAAIAAA3g");
	this.shape_761.setTransform(1469.2913,508.5261,1.8904,1.8904);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#1D1D1B").s().p("AgOAXQgFgHgBgKIAAgJQABgNAFgGQAGgGAIAAQAJAAAGAGQAFAHABAMIAAAIQgBAMgFAGQgFAHgKgBQgJABgFgHgAgGgPQgCADAAAIIAAAJQAAAIACAEQACADAEAAQAEAAACgDQADgEAAgHIAAgJQAAgIgDgEQgBgDgFAAQgEAAgCADg");
	this.shape_762.setTransform(1460.1229,508.5261,1.8904,1.8904);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#1D1D1B").s().p("AgOAXQgGgHAAgKIAAgJQAAgMAGgHQAFgGAJAAQAJAAAGAGQAFAHABAMIAAAIQgBANgFAFQgFAHgKgBQgIABgGgHgAgFgPQgDAEAAAHIAAAJQAAAIADAEQACADADAAQAEAAADgDQACgEAAgHIAAgJQAAgJgCgDQgCgDgFAAQgDAAgCADg");
	this.shape_763.setTransform(1450.9546,508.5261,1.8904,1.8904);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgJAZIgLAAIAAgpIALAAIAAAZIAJgZIALAAIAAApg");
	this.shape_764.setTransform(1439.1397,509.8967,1.8904,1.8904);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#1D1D1B").s().p("AAGAVIAAggIgGAAIAAAMQgBALgDAEQgDAFgGAAIgDAAIAAgJIABAAQABAAAAAAQABgBAAAAQABgBAAAAQAAgBAAAAIACgJIAAgUIAbAAIAAApg");
	this.shape_765.setTransform(1431.3419,509.8967,1.8904,1.8904);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgIAZIgMAAIAAgpIAMAAIAAAZIAIgZIALAAIAAApg");
	this.shape_766.setTransform(1424.0166,509.8967,1.8904,1.8904);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#1D1D1B").s().p("AgFAmIAAgQIgEABQgFAAgEgGQgEgFAAgLQAAgKAEgFQAEgGAGAAIADAAIAAgRIAKAAIAAARIAEAAQAHAAADAGQAEAFAAALQAAAKgEAFQgEAGgFAAIgFgBIAAAQgAAFANIACABQAAAAABAAQABgBAAAAQABAAAAgBQAAgBAAAAQACgDAAgHQAAgGgCgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAIgCAAgAgLAAIAAACQAAAGACADQAAAAAAABQABABAAAAQABAAAAABQABAAAAAAIABAAIAAgZIgBAAQgEAAgBALg");
	this.shape_767.setTransform(1415.4627,509.8022,1.8904,1.8904);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#1D1D1B").s().p("AgMAQQgEgFAAgJIAAgDQAAgJAEgFQAFgGAHAAQAJAAADAGQAFAFAAAJIAAADQAAAJgFAFQgEAGgIAAQgHAAgFgGgAgEgJQgBADAAAFIAAADQAAALAFAAQAFAAABgJIAAgFQAAgFgCgDQgBgDgDAAQgCAAgCADg");
	this.shape_768.setTransform(1406.9087,509.9439,1.8904,1.8904);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#1D1D1B").s().p("AgPAeIAAg6IAKAAIAAAEQADgFAFAAQAHAAADAFQAEAGgBAJIAAAEQABAJgEAFQgEAFgGAAQgEAAgDgEIAAAUgAgEgRIAAATQABADADAAQAEAAAAgDQABgCAAgFIAAgDQAAgGgBgDQgBgDgDAAQgDAAgBADg");
	this.shape_769.setTransform(1399.5362,511.409,1.8904,1.8904);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#1D1D1B").s().p("AAIAcIAAguIgQAAIAAAuIgLAAIAAg3IAnAAIAAA3g");
	this.shape_770.setTransform(1391.0295,508.5261,1.8904,1.8904);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAOIAJAAQAEAAAEAEQAEACAAAHQAAAHgEADQgDADgFABgAgNAPIAIAAQADAAACgCQABgCAAgEQAAgDgBgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAIgJAAg");
	this.shape_771.setTransform(1307.6164,647.2328,1.8904,1.8904);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQADgEABgKIAAgSIAXAAIAAAjIAFAAIAAASgAgCgJQgBALgEAHIAOAAIAAgdIgJAAg");
	this.shape_772.setTransform(1298.5426,648.3671,1.8904,1.8904);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgGQAAgFAFgEQAEgDAGAAIAFAAIAAgFQAAgEgBgBQgCgCgDAAIgEACQgBAAAAABQAAABgBAAQAAABAAAAQAAABAAAAIgHAAIACgGIAFgEIAGgCQAGAAAEAEQADACAAAHIAAAUQAAAFACADIAAABIgHAAIgBgEQgEAFgFAAQgFAAgEgDgAgEADQgDACAAAEQAAAEACABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAQACAAACgBQABgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIAAgKIgDAAQgFAAgCACg");
	this.shape_773.setTransform(1290.9811,647.1856,1.8904,1.8904);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgDQAAgJAEgGQAFgFAGAAQAGAAAEAEQADAEABAHIgGAAQgBgFgCgBQgCgDgDAAQgEAAgCADQgCAEAAAGIAAAEQAAAJACACQACADAEAAQADAAACgCQACgBABgFIAGAAQgBAGgDAEQgEAEgGAAQgHAAgEgFg");
	this.shape_774.setTransform(1283.9867,647.1856,1.8904,1.8904);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgDQAAgLAEgFQAEgFAHAAQAGAAAEAFQAEAEAAALIAAADIgWAAIAAABQgBAGADAEQADADADAAIAGgBIAEgEIAEAFQgEAGgKAAQgHAAgEgFgAgFgMQgBACgBAIIAPAAIAAgBQAAgHgCgCQgCgDgDAAQgDAAgDADg");
	this.shape_775.setTransform(1273.5423,647.1856,1.8904,1.8904);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgGAAIAAgpIAGAAIAAAeIAPgeIAGAAIAAApg");
	this.shape_776.setTransform(1266.1226,647.2328,1.8904,1.8904);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgGAAIAAgpIAGAAIAAASIAEAAIAKgSIAIAAIgOAUIAPAVg");
	this.shape_777.setTransform(1259.1282,647.2328,1.8904,1.8904);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgDQAAgJAEgGQAFgFAGAAQAHAAADAEQAEAEAAAHIgHAAQAAgEgCgCQgCgDgDAAQgDAAgDADQgCADAAAHIAAAEQAAAJACACQADADADAAQADAAACgCQACgCAAgEIAHAAQAAAGgEAEQgFAEgFAAQgGAAgFgFg");
	this.shape_778.setTransform(1251.7084,647.1856,1.8904,1.8904);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgDQAAgKAEgGQAFgFAFAAQAHAAAFAFQADAEAAALIAAADIgWAAIAAABQAAAHADADQACADAEAAIAFgBIAFgEIADAFQgFAGgIAAQgHAAgFgFgAgFgMQgCAEAAAGIAPAAIAAgBQgBgIgBgBQgCgDgEAAQgDAAgCADg");
	this.shape_779.setTransform(1244.714,647.1856,1.8904,1.8904);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#1D1D1B").s().p("AAHAVIAAgPIgHABQgHAAgCgEQgEgDAAgHIAAgNIAHAAIAAANQAAAIAGAAIAHgBIAAgUIAHAAIAAApg");
	this.shape_780.setTransform(1237.3888,647.2328,1.8904,1.8904);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgHAAIAAgpIAHAAIAAAeIAPgeIAGAAIAAApg");
	this.shape_781.setTransform(1230.1581,647.2328,1.8904,1.8904);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgOAAIAAASIgIAAIAAgpIAIAAIAAASIAOAAIAAgSIAGAAIAAApg");
	this.shape_782.setTransform(1222.502,647.2328,1.8904,1.8904);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#1D1D1B").s().p("AgKATQgEgEAAgGQAAgFAFgEQAFgDAGAAIAFAAIAAgFQAAgEgCgBQgCgCgDAAIgEACIgCAEIgHAAQAAgDACgDQACgDADgBQAEgCACAAQAGAAAEAEQADACABAHIAAAUQAAAGABACIAAABIgHAAIgBgEQgEAFgEAAQgGAAgDgDgAgEADQgDACAAAEQAAAEACABQACACADAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAEgEIAAgKIgEAAQgFAAgCACg");
	this.shape_783.setTransform(1215.0823,647.1856,1.8904,1.8904);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#1D1D1B").s().p("AgCAVIAAgjIgMAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_784.setTransform(1208.4187,647.2328,1.8904,1.8904);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgGQAEgFAHAAQAHAAAEAFQAFAGAAAJIAAADQAAAJgEAGQgEAFgIAAQgGAAgFgFgAgGgLQgDAEAAAGIAAADQAAAGADAEQADAEADAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_785.setTransform(1201.6606,647.1856,1.8904,1.8904);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#1D1D1B").s().p("AgLAZQgEgGAAgJIAAgEQAAgLAEgJQAFgIAGgBIAHgDQAAAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAGAAIAAACQgBAIgHACIgFABQgDABgDAEQgDADgBAGQAFgGAFAAQAHAAAEAFQAEAFAAAJIAAAAQAAAJgEAGQgFAGgHAAQgGAAgFgGgAgFAAQgDADAAAHQAAAGADAFQABAEAEAAQAEAAADgEQACgEAAgIQAAgFgCgEQgDgDgEAAQgEAAgBADg");
	this.shape_786.setTransform(1194.3354,645.5315,1.8904,1.8904);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#1D1D1B").s().p("AAHAVIAAgdIgNAdIgHAAIAAgpIAHAAIAAAeIANgeIAHAAIAAApg");
	this.shape_787.setTransform(1357.1917,631.968,1.8904,1.8904);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#1D1D1B").s().p("AAHAVIAAgdIgNAdIgHAAIAAgpIAHAAIAAAeIANgeIAHAAIAAApg");
	this.shape_788.setTransform(1346.1329,631.968,1.8904,1.8904);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgGAAIAAgpIAGAAIAAASIAEAAIAKgSIAIAAIgOAUIAPAVg");
	this.shape_789.setTransform(1339.1385,631.968,1.8904,1.8904);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIABAFQADgGAFAAQAHAAAEAFQADAGAAAJIAAAEQAAAJgDAFQgEAFgGAAQgGAAgDgFIAAAVgAgHgSIAAAVQACAFAFAAQAEAAACgDQACgDAAgGIAAgFQAAgHgCgDQgCgEgEAAQgFAAgCAFg");
	this.shape_790.setTransform(1331.5298,633.4331,1.8904,1.8904);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAFgDQAEgEAGAAIAFAAIAAgEQAAgEgBgCQgCgBgDAAQgDAAgBACQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAABIgHAAIACgGIAFgFQADgCADAAQAHAAADAEQADACAAAHIAAAUQAAAFACAEIAAAAIgIAAIAAgFQgEAGgFAAQgFAAgEgDgAgEADQgDACAAAEIABAFQACABADAAQACAAACgBQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIAAgKIgDAAQgEAAgDACg");
	this.shape_791.setTransform(1324.1573,631.968,1.8904,1.8904);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#1D1D1B").s().p("AAIAVIAAgjIgPAAIAAAjIgGAAIAAgpIAbAAIAAApg");
	this.shape_792.setTransform(1316.6903,631.968,1.8904,1.8904);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgEQAAgJAEgFQAEgGAGAAQAIAAADAFQADAEABAKIAAAEIgWAAIAAABQAAAHACADQADADADAAIAGgBIAEgEIAEAEQgFAHgJAAQgHAAgEgFgAgFgMQgCADAAAGIAPAAIAAgBQAAgFgCgEQgCgCgEAAQgDAAgCADg");
	this.shape_793.setTransform(1306.0096,631.968,1.8904,1.8904);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#1D1D1B").s().p("AAIAVIAAgdIgPAdIgHAAIAAgpIAHAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_794.setTransform(1298.5899,631.968,1.8904,1.8904);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgHAAIAAgpIAHAAIAAASIADAAIALgSIAJAAIgPAUIAQAVg");
	this.shape_795.setTransform(1291.5955,631.968,1.8904,1.8904);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgFQAAgJAEgFQAEgFAHAAQAGAAAEAEQAEAFAAAHIgGAAQAAgFgDgDQgBgCgEAAQgDAAgDADQgCADAAAHIAAAFQAAAGACAEQADADADAAQAEAAABgCQADgDAAgDIAGAAQAAAGgEAEQgFAEgFAAQgIAAgDgFg");
	this.shape_796.setTransform(1284.223,631.968,1.8904,1.8904);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#1D1D1B").s().p("AgKARQgDgDgBgLIAAgEQAAgJAEgFQAEgGAGAAQAIAAADAFQAEAFAAAJIAAAEIgWAAIAAABQAAAGACAEQADADAEAAIAFgBIAEgEIAEAEQgFAHgJAAQgGAAgFgFgAgFgMQgBACgBAHIAPAAIAAgBQAAgFgCgEQgCgCgEAAQgCAAgDADg");
	this.shape_797.setTransform(1277.1813,631.968,1.8904,1.8904);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#1D1D1B").s().p("AAHAVIAAgPIgHABQgFAAgEgEQgEgDAAgHIAAgNIAGAAIAAANQACAIAFAAIAHgBIAAgUIAHAAIAAApg");
	this.shape_798.setTransform(1269.8561,631.968,1.8904,1.8904);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#1D1D1B").s().p("AAHAVIAAgdIgNAdIgHAAIAAgpIAHAAIAAAeIANgeIAHAAIAAApg");
	this.shape_799.setTransform(1262.5781,631.968,1.8904,1.8904);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgOAAIAAAjg");
	this.shape_800.setTransform(1256.3871,631.968,1.8904,1.8904);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#1D1D1B").s().p("AgKAQQgFgEAAgJIAAgEQAAgKAEgEQAFgGAGAAQAHAAAEAGQAFAFAAAIIAAAEQAAAJgEAFQgFAGgHAAQgGAAgEgGgAgGgLQgCAEgBAGIAAADQABAHACADQADAEADAAQAJAAAAgNIAAgEQABgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_801.setTransform(1249.44,631.968,1.8904,1.8904);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIgBAOQAAAMgDAEQgCAFgGAAIgCAAIAAgGIABgBQADAAABgDQACgDAAgKIABgSIAXAAIAAApg");
	this.shape_802.setTransform(1241.5476,631.968,1.8904,1.8904);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#1D1D1B").s().p("AgLAQQgEgEAAgJIAAgEQAAgJAEgFQAFgGAGAAQAHAAAFAGQAEAFAAAIIAAAEQAAAKgEAEQgFAGgHAAQgGAAgFgGgAgGgLQgCAEAAAGIAAADQAAAHACADQACAEAEAAQAJAAAAgNIAAgEQAAgHgCgDQgDgEgEAAQgDAAgDAEg");
	this.shape_803.setTransform(1234.3642,631.968,1.8904,1.8904);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIABAFQACgGAHAAQAHAAADAFQADAEAAALIAAAEQAAAJgDAFQgEAFgGAAQgGAAgDgFIAAAVgAgHgSIAAAVQADAFAEAAQAEAAACgDQACgEAAgFIAAgFQAAgGgCgEQgDgEgDAAQgEAAgDAFg");
	this.shape_804.setTransform(1227.039,633.4331,1.8904,1.8904);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQAEgGAAgIIAAgSIAXAAIAAAjIAFAAIAAASgAgCgJQgBALgEAHIAOAAIAAgdIgJAAg");
	this.shape_805.setTransform(1219.1466,633.1495,1.8904,1.8904);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgOAAIAAASIgGAAIAAgpIAGAAIAAASIAOAAIAAgSIAIAAIAAApg");
	this.shape_806.setTransform(1211.3488,631.968,1.8904,1.8904);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgEQAAgJAEgFQAEgGAHAAQAHAAAEAFQADAEAAAKIAAAEIgWAAIAAABQAAAHADADQACADAEAAIAFgBIAFgEIADAEQgFAHgJAAQgGAAgFgFgAgFgMQgCAEAAAFIAPAAIAAgBIgCgJQgBgCgEAAQgEAAgCADg");
	this.shape_807.setTransform(1204.0708,631.968,1.8904,1.8904);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#1D1D1B").s().p("AARAjIAAgOIghAAIAAAOIgHAAIAAgUIAEAAQADgDACgHQACgIAAgHIABgYIAcAAIAAAxIAHAAIAAAUgAgFgKIgCAPQgCAGgCAEIAVAAIAAgrIgOAAg");
	this.shape_808.setTransform(1195.5169,631.9208,1.8904,1.8904);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgOAeIgGAAIAAgpIAGAAIAAAdIAOgdIAIAAIAAApg");
	this.shape_809.setTransform(1298.9679,605.3136,1.8904,1.8904);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIAKgSIAJAAIgPAUIAQAVg");
	this.shape_810.setTransform(1291.9735,605.3136,1.8904,1.8904);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAHAAAEAFQADAGAAAJIAAAEQAAAIgDAGQgEAFgHAAQgFAAgDgFIAAAVgAgHgSIAAAVQACAFAFAAQAEAAACgDQACgDAAgHIAAgEQAAgHgCgDQgCgEgEAAQgFAAgCAFg");
	this.shape_811.setTransform(1284.3648,606.7787,1.8904,1.8904);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#1D1D1B").s().p("AgLASQgDgDAAgGQAAgFAEgEQAFgDAGgBIAFAAIAAgEQAAgEgBgCQgCgBgDAAQgDAAgBACQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAABIgHAAQAAgEACgDIAFgEQADgCADAAQAHAAADADQADAEAAAGIAAAUQAAAFACADIAAABIgIAAIgBgEQgDAFgFAAQgGAAgDgEgAgEACQgDADAAAEQAAADABACQACACADAAQACAAACgCQABAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBIAAgJIgDAAQgDgBgEACg");
	this.shape_812.setTransform(1276.9923,605.3136,1.8904,1.8904);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#1D1D1B").s().p("AAIAVIAAgjIgPAAIAAAjIgHAAIAAgpIAdAAIAAApg");
	this.shape_813.setTransform(1269.478,605.3136,1.8904,1.8904);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgEQAAgJAEgGQAFgFAFAAQAIAAADAEQAEAFAAALIAAADIgWAAIAAABQAAAHADADQACADADAAIAGgBIAEgEIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgCAEAAAFIAPAAIAAgBQgBgHgBgCQgBgCgFAAQgDAAgCADg");
	this.shape_814.setTransform(1258.7974,605.3136,1.8904,1.8904);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAOIAJAAQAFABADADQAEACAAAHQAAAHgEADQgEAEgEAAgAgNAPIAJAAQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAgBQABgCAAgDQAAgEgBgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgJAAg");
	this.shape_815.setTransform(1250.0543,605.3136,1.8904,1.8904);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAGAAIAAApg");
	this.shape_816.setTransform(1241.2168,605.3136,1.8904,1.8904);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQAEgGAAgIIABgSIAWAAIAAAjIAFAAIAAASgAgCgJQgBALgEAHIAOAAIAAgdIgJAAg");
	this.shape_817.setTransform(1233.3245,606.4951,1.8904,1.8904);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#1D1D1B").s().p("AgLARQgEgGAAgJIAAgDQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAJgEAGQgFAFgHAAQgGAAgFgFgAgGgLQgCADAAAHIAAADQAAAHACADQADAEADAAQAJAAAAgOIAAgDQAAgGgCgEQgDgEgEAAQgEAAgCAEg");
	this.shape_818.setTransform(1226.141,605.3136,1.8904,1.8904);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIABAFQADgGAFAAQAHAAAEAFQADAGAAAJIAAAEQAAAJgDAFQgEAFgGAAQgFAAgEgFIAAAVgAgHgSIAAAVQACAFAFAAQAEAAACgDQACgDAAgHIAAgEQAAgHgCgDQgCgEgEAAQgFAAgCAFg");
	this.shape_819.setTransform(1218.7685,606.7787,1.8904,1.8904);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgGAAIAAgpIAGAAIAAAdIAPgdIAGAAIAAApg");
	this.shape_820.setTransform(1211.1125,605.3136,1.8904,1.8904);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAHAAAEAFQADAGAAAJIAAAEQAAAIgDAGQgEAFgHAAQgFAAgDgFIAAAVgAgHgSIAAAVQACAFAFAAQAEAAACgDQACgDAAgHIAAgEQAAgHgCgDQgCgEgEAAQgFAAgCAFg");
	this.shape_821.setTransform(1203.74,606.7787,1.8904,1.8904);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#1D1D1B").s().p("AALAdIAAgyIgVAAIAAAyIgHAAIAAg5IAjAAIAAA5g");
	this.shape_822.setTransform(1195.2333,603.8959,1.8904,1.8904);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAGAAIAAApgAgTAVIAAgpIAGAAIAAAPIAJAAQAFAAAEADQADADAAAGQAAAGgDAEQgFAEgEAAgAgNAPIAJAAQADAAABgCQABgCAAgDQAAgEgBgCQgBgCgDAAIgJAAg");
	this.shape_823.setTransform(1314.091,578.612,1.8904,1.8904);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#1D1D1B").s().p("AAMAcIAAgNIgXAAIAAANIgHAAIABgTIACAAIACgDQADgEABgKIABgSIAWAAIAAAjIAFAAIAAATgAgCgJQgBAMgEAGIAOAAIAAgcIgJAAg");
	this.shape_824.setTransform(1305.0172,579.7935,1.8904,1.8904);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#1D1D1B").s().p("AgLARQgEgGAAgIIAAgEQAAgJAEgFQAEgGAHAAQAHAAAFAFQAEAGAAAJIAAADQAAAKgEAFQgFAFgHAAQgGAAgFgFgAgGgLQgCAEAAAGIAAADQAAAGACAEQADAEADAAQAJAAABgNIAAgEQAAgGgDgEQgCgEgFAAQgDAAgDAEg");
	this.shape_825.setTransform(1297.7865,578.612,1.8904,1.8904);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAHABADAFQADADABALIAAAEQAAAJgEAGQgDAEgHAAQgFAAgDgEIAAAUgAgHgRIAAAVQACAEAFABQADAAADgEQACgEAAgGIAAgDQAAgHgCgEQgCgDgEAAQgFgBgCAGg");
	this.shape_826.setTransform(1290.5085,580.0771,1.8904,1.8904);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgOAeIgGAAIAAgpIAGAAIAAAeIAOgeIAIAAIAAApg");
	this.shape_827.setTransform(1282.8052,578.612,1.8904,1.8904);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAIABACAFQAEADAAALIAAAEQAAAJgEAGQgDAEgHAAQgEAAgFgEIAAAUgAgIgRIAAAVQAEAEAEABQADAAADgEQACgEABgGIAAgDQgBgIgCgDQgCgDgEAAQgFgBgDAGg");
	this.shape_828.setTransform(1275.4327,580.0771,1.8904,1.8904);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#1D1D1B").s().p("AAIAVIAAgjIgPAAIAAAjIgHAAIAAgpIAdAAIAAApg");
	this.shape_829.setTransform(1267.7767,578.612,1.8904,1.8904);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgHAAIAAgpIAHAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_830.setTransform(1256.7179,578.612,1.8904,1.8904);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgDAAIAAASIgIAAIAAgpIAIAAIAAASIACAAIALgSIAIAAIgNAUIAPAVg");
	this.shape_831.setTransform(1249.7235,578.612,1.8904,1.8904);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgOAeIgIAAIAAgpIAIAAIAAAeIAOgeIAGAAIAAApg");
	this.shape_832.setTransform(1241.8784,578.612,1.8904,1.8904);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgOAAIAAASIgIAAIAAgpIAIAAIAAASIAOAAIAAgSIAGAAIAAApg");
	this.shape_833.setTransform(1234.2224,578.612,1.8904,1.8904);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#1D1D1B").s().p("AgCAVIAAgjIgMAAIAAgGIAdAAIAAAGIgLAAIAAAjg");
	this.shape_834.setTransform(1227.1807,578.612,1.8904,1.8904);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#1D1D1B").s().p("AAIAVIAAgQIgIAAIgHAQIgHAAIAJgRQgEgCgCgCQgBgDAAgEQAAgGADgEQAFgDAEAAIAPAAIAAApgAgDgMQgCACAAADQAAADABACQAAAAABABQABAAAAAAQABAAAAABQABAAAAAAIAIAAIAAgOIgIAAQgCAAgBACg");
	this.shape_835.setTransform(1220.0445,578.612,1.8904,1.8904);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#1D1D1B").s().p("AANAVIAAgcIgKAcIgEAAIgLgdIAAAdIgHAAIAAgpIAJAAIAKAgIAMggIAIAAIAAApg");
	this.shape_836.setTransform(1211.9159,578.612,1.8904,1.8904);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#1D1D1B").s().p("AgLATQgDgDAAgGQAAgHAEgDQAEgDAHAAIAFAAIAAgFQAAgEgBgBQgCgCgDAAQgDAAgBACQgCACAAADIgHAAQAAgEACgDIAFgEIAGgCQAHAAADADQADAEAAAGIAAAUQAAAFACAEIAAAAIgIAAIAAgEQgEAFgFAAQgGAAgDgDgAgEADQgDACAAAEQAAAEABABQACACADAAQACAAACgCQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAIAAgKIgDAAQgFAAgCACg");
	this.shape_837.setTransform(1203.551,578.612,1.8904,1.8904);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#1D1D1B").s().p("AALAcIAAgyIgVAAIAAAyIgHAAIAAg3IAjAAIAAA3g");
	this.shape_838.setTransform(1195.2333,577.2415,1.8904,1.8904);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgNAeIgIAAIAAgpIAIAAIAAAeIANgeIAHAAIAAApg");
	this.shape_839.setTransform(1251.8975,551.9576,1.8904,1.8904);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgGAAIAAgpIAGAAIAAASIAEAAIAKgSIAIAAIgOAUIAPAVg");
	this.shape_840.setTransform(1244.8558,551.9576,1.8904,1.8904);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgGAAIAAgpIAGAAIAAAeIAPgeIAGAAIAAApg");
	this.shape_841.setTransform(1237.0107,551.9576,1.8904,1.8904);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgNAAIAAASIgHAAIAAgpIAHAAIAAASIANAAIAAgSIAHAAIAAApg");
	this.shape_842.setTransform(1229.4019,551.9576,1.8904,1.8904);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#1D1D1B").s().p("AgJASQgEgDAAgGIAGAAIADAFQACACACAAQADAAACgCQACgCAAgDQAAgDgBgCQgCgBgEAAIgFAAIAAgFIAGAAQAFgBABgGQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgEACIgCAFIgGAAQAAgHADgCQAEgEAFAAQAGAAADADQAEADAAAGQAAAEgCACQAAACgEABQAHACAAAHQAAAGgEAEQgEADgGAAQgGAAgDgEg");
	this.shape_843.setTransform(1222.2185,551.9576,1.8904,1.8904);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#1D1D1B").s().p("AgKATQgEgEAAgFQAAgHAFgDQAEgDAHgBIAFAAIAAgEQAAgEgCgBQgCgCgDAAIgEACIgCAFIgHAAQAAgEACgDQACgCADgCQADgCADAAQAHAAADADQADADABAHIAAAUIABAIIAAABIgHAAIgBgEQgEAFgEAAQgGAAgDgDgAgEADQgDACAAAEQAAADACACQABACAEAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBIAEgDIAAgKIgEAAQgEAAgDACg");
	this.shape_844.setTransform(1215.2713,551.9576,1.8904,1.8904);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#1D1D1B").s().p("AAGAVIgKgSIgDAAIAAASIgHAAIAAgpIAHAAIAAASIADAAIAKgSIAIAAIgNAUIAOAVg");
	this.shape_845.setTransform(1208.5132,551.9576,1.8904,1.8904);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#1D1D1B").s().p("AgKATQgEgDAAgGQAAgHAFgDQAEgDAHgBIAFAAIAAgEQAAgEgCgBQgCgCgDAAIgEACQgCADAAACIgHAAQAAgEACgDQACgDADgBQADgCADAAQAHAAADADQADADAAAHIAAAUQAAAFACADIAAABIgHAAIgBgEQgEAFgFAAQgFAAgDgDgAgEADQgDACAAAEQAAADACACQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAQACAAACgCIAEgDIAAgKIgEAAQgFAAgCACg");
	this.shape_846.setTransform(1200.9044,551.9576,1.8904,1.8904);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#1D1D1B").s().p("AgJASQgEgEAAgFIAHAAQAAADACACQACACADAAIAEgCIACgFQAAgDgBgCQgCgBgDAAIgFAAIAAgFIAGAAQAEgBAAgGQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgFACQgBACAAADIgHAAQAAgGADgDQAEgEAGAAQAGAAADADQADADAAAGQAAAEgBACQgCACgCABQAGACAAAHQAAAGgDAEQgEADgGAAQgGAAgEgEg");
	this.shape_847.setTransform(1193.8628,551.9576,1.8904,1.8904);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#1D1D1B").s().p("AgKASQgEgGAAgIIAAgFQAAgKAEgEQAEgGAHAAQAHAAADAFQAEAEAAAKIAAAEIgXAAIAAABQABAGACAEQADADADAAIAGgBIAEgDIAEADQgEAHgKAAQgGAAgFgEgAgFgMQgBACgCAHIAQAAIAAgBQAAgGgCgDQgCgCgDAAQgDAAgDADg");
	this.shape_848.setTransform(1369.8572,536.6928,1.8904,1.8904);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgTAVIAAgpIAGAAIAAAPIAJAAQAEAAAFADQADADAAAGQAAAGgDAFQgEADgFAAgAgNAPIAJAAIAEgCQABgBAAgFQAAgDgBgCQAAgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgJAAg");
	this.shape_849.setTransform(1361.067,536.6928,1.8904,1.8904);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgOAAIAAASIgHAAIAAgpIAHAAIAAASIAOAAIAAgSIAGAAIAAApg");
	this.shape_850.setTransform(1352.2294,536.6928,1.8904,1.8904);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQADgEABgKIAAgSIAXAAIAAAjIAFAAIAAASgAgCgJQgBALgEAHIAOAAIAAgdIgJAAg");
	this.shape_851.setTransform(1344.3843,537.8743,1.8904,1.8904);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#1D1D1B").s().p("AgKARQgEgFgBgJIAAgEQAAgJAEgFQAFgGAGAAQAHAAAFAGQAEAFAAAIIAAAEQAAAJgEAFQgEAGgIAAQgHAAgDgFgAgGgLQgCAEAAAGIAAADQAAAHACADQADAEADAAQAJAAABgNIAAgEQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_852.setTransform(1337.1064,536.6928,1.8904,1.8904);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAHAAAEAFQADAGAAAJIAAAEQAAAJgEAFQgDAFgHAAQgFAAgDgFIAAAVgAgHgRIAAAVQACAEAFAAQAEAAACgDQACgFAAgEIAAgFQAAgHgCgDQgCgDgEAAQgFAAgCAFg");
	this.shape_853.setTransform(1329.8284,538.1579,1.8904,1.8904);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#1D1D1B").s().p("AAIAVIAAgdIgOAdIgHAAIAAgpIAHAAIAAAeIAOgeIAGAAIAAApg");
	this.shape_854.setTransform(1322.1251,536.6928,1.8904,1.8904);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAHAAADAFQADAFABAKIAAAEQAAAJgEAFQgDAFgHAAQgFAAgDgFIAAAVgAgHgRIAAAVQACAEAFAAQAEAAACgDQACgEAAgFIAAgFQAAgFgCgFQgCgDgEAAQgFAAgCAFg");
	this.shape_855.setTransform(1314.7999,538.1579,1.8904,1.8904);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#1D1D1B").s().p("AAIAVIAAgjIgPAAIAAAjIgHAAIAAgpIAdAAIAAApg");
	this.shape_856.setTransform(1307.0966,536.6928,1.8904,1.8904);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#1D1D1B").s().p("AgKASQgEgGAAgIIAAgFQAAgKAEgEQAEgGAGAAQAHAAAFAFQADAEAAAKIAAAEIgXAAIAAABQAAAGADAEQADADADAAIAGgBIAEgDIAEADQgEAHgKAAQgHAAgEgEgAgFgMQgCACgBAHIAQAAIAAgBQAAgGgCgDQgBgCgFAAQgDAAgCADg");
	this.shape_857.setTransform(1296.4159,536.6928,1.8904,1.8904);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAPIAJAAQAFAAADADQAEADAAAGQAAAGgEAFQgDADgFAAgAgNAPIAIAAQADAAACgCQABgBAAgFQAAgDgBgCQAAgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgJAAg");
	this.shape_858.setTransform(1287.6257,536.6928,1.8904,1.8904);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAHAAIAAApg");
	this.shape_859.setTransform(1278.8354,536.6928,1.8904,1.8904);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAHAAIAAApg");
	this.shape_860.setTransform(1271.1793,536.6928,1.8904,1.8904);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#1D1D1B").s().p("AgKASQgEgFAAgJIAAgFQAAgJAEgFQAFgGAFAAQAIAAADAFQAEAEAAAKIAAAEIgWAAIAAABQAAAHADADQACADADAAIAGgBIAEgDIAEADQgEAHgKAAQgGAAgFgEgAgFgMQgCAEAAAFIAPAAIAAgBQgBgGgBgDQgBgCgFAAQgDAAgCADg");
	this.shape_861.setTransform(1263.9014,536.6928,1.8904,1.8904);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#1D1D1B").s().p("AgOAVIAAgpIAOAAQAGAAAEADQAEADAAAGQAAADgCACQAAACgEABQADAAACADQACACAAAFQAAAFgEADQgDADgHAAgAgHAPIAIAAQAHABAAgHQAAgGgHAAIgIAAgAgHgCIAHAAQAHAAAAgGQAAgGgHAAIgHAAg");
	this.shape_862.setTransform(1256.7179,536.6928,1.8904,1.8904);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#1D1D1B").s().p("AgCAVIAAgjIgMAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_863.setTransform(1249.5817,536.6928,1.8904,1.8904);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgFQAAgIAEgGQAFgFAGAAQAGAAAEAFQAEADAAAIIgHAAQAAgFgCgDQgCgCgDAAQgEAAgCADQgCACAAAIIAAAFQAAAHACADQACADAEAAQADAAACgCQACgCAAgEIAHAAQAAAGgEAEQgFAEgFAAQgHAAgEgFg");
	this.shape_864.setTransform(1243.0127,536.6928,1.8904,1.8904);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIABAFQADgGAFAAQAHAAAEAFQADAFAAAKIAAAEQAAAKgDAEQgEAFgGAAQgGAAgDgFIAAAVgAgHgRIAAAVQADAEAEAAQAEAAACgDQACgDAAgGIAAgFQAAgHgCgDQgCgDgEAAQgEAAgDAFg");
	this.shape_865.setTransform(1235.9237,538.1579,1.8904,1.8904);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAFgDQAFgEAGAAIAFAAIAAgEQAAgDgCgCQgCgCgDAAIgEACQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAABIgHAAIACgGIAFgFIAGgCQAGAAAEAEQADADAAAGIAAAUQAAAFACAEIAAAAIgHAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQgEAGgFAAQgFAAgEgDgAgEADQgDADAAADQAAADACACQAAAAABABQAAAAABAAQAAAAABAAQABAAAAAAIAEgBIAEgDIAAgKIgEAAIgHACg");
	this.shape_866.setTransform(1228.504,536.6928,1.8904,1.8904);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQADgEABgKIAAgSIAXAAIAAAjIAFAAIAAASgAgCgJQgBAMgFAGIAPAAIAAgdIgJAAg");
	this.shape_867.setTransform(1220.848,537.8743,1.8904,1.8904);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#1D1D1B").s().p("AgMAdIAAgGIABAAQAEAAACgBQABgCABgDIABgFIgMgpIAIAAIAGAeIAIgeIAHAAIgNAvQgCAGgCADQgDADgEAAg");
	this.shape_868.setTransform(1214.0898,538.3469,1.8904,1.8904);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgFQAAgIAEgGQAEgFAHAAQAHAAADAFQADACABAJIgGAAQgBgGgCgCQgBgCgEAAQgDAAgDADQgCADAAAHIAAAFQAAAGACAEQACADAEAAQAEAAABgCQADgDAAgDIAGAAQgBAHgDADQgEAEgGAAQgHAAgEgFg");
	this.shape_869.setTransform(1207.6153,536.6928,1.8904,1.8904);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgFQAEgGAHAAQAHAAAEAGQAFAFAAAIIAAAEQAAAKgEAEQgFAGgHAAQgGAAgFgFgAgGgLQgDAEAAAGIAAADQAAAHADADQADAEADAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_870.setTransform(1200.3373,536.6928,1.8904,1.8904);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#1D1D1B").s().p("AgOAcIAAg3IAdAAIAAAGIgVAAIAAAxg");
	this.shape_871.setTransform(1194.5717,535.3223,1.8904,1.8904);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#1D1D1B").s().p("AgFAdIAAgvIgOAAIAAgKIAnAAIAAAKIgPAAIAAAvg");
	this.shape_872.setTransform(1265.9335,508.6207,1.8904,1.8904);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#1D1D1B").s().p("AAIAdIAAgvIgPAAIAAAvIgMAAIAAg5IAnAAIAAA5g");
	this.shape_873.setTransform(1257.1433,508.6207,1.8904,1.8904);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#1D1D1B").s().p("AgOAXQgFgHgBgLIAAgJQABgLAFgHQAFgHAJAAQAKAAAFAHQAGAHAAALIAAAJQAAAMgGAGQgFAGgKABQgJgBgFgGgAgGgPQgCAFAAAGIAAAJQAAAIACADQACAEAEAAQAEAAADgEQACgEAAgHIAAgJQAAgGgCgFQgDgEgEAAQgEAAgCAEg");
	this.shape_874.setTransform(1247.9277,508.6207,1.8904,1.8904);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#1D1D1B").s().p("AgNAXQgGgFgBgNIAAgJQABgLAFgHQAHgHAHAAQAKAAAFAHQAGAGAAAMIAAAJQgBAMgFAGQgFAGgKABQgIgBgFgGgAgFgPQgDAEAAAHIAAAJQAAAHADAEQACAEADAAQAEAAADgEQACgDAAgIIAAgJQAAgHgCgEQgDgEgEAAQgDAAgCAEg");
	this.shape_875.setTransform(1238.7593,508.6207,1.8904,1.8904);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgJAZIgLAAIAAgpIALAAIAAAZIAJgZIALAAIAAApg");
	this.shape_876.setTransform(1226.9444,509.9912,1.8904,1.8904);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgJAZIgLAAIAAgpIALAAIAAAZIAJgZIALAAIAAApg");
	this.shape_877.setTransform(1219.3829,509.9912,1.8904,1.8904);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#1D1D1B").s().p("AgQAeIAAg6IALAAIABAEQADgFAEAAQAHAAADAFQADAFAAAKIAAADQAAAKgDAFQgDAFgHAAQgDAAgEgEIAAAUgAgEgRIAAATQABADADAAQADAAACgDIABgIIAAgCQgBgGgBgDQgBgDgDAAQgCAAgCADg");
	this.shape_878.setTransform(1212.0104,511.5035,1.8904,1.8904);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#1D1D1B").s().p("AgMARQgEgGAAgKIAAgBQAAgKAEgGQAEgFAIAAQAIAAAFAFQAEAGAAAKIAAABQAAAKgEAGQgFAFgIAAQgHAAgFgFgAgEgJQgBADAAAGIAAABQAAAMAFAAQAGAAAAgKIAAgDQAAgGgCgDQgBgDgDAAQgBAAgDADg");
	this.shape_879.setTransform(1204.4016,510.0385,1.8904,1.8904);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#1D1D1B").s().p("AgLAVIAAgpIAXAAIAAAJIgMAAIAAAgg");
	this.shape_880.setTransform(1198.2579,509.9912,1.8904,1.8904);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#1D1D1B").s().p("AgKARQgFgGgBgJIAAgCQAAgKAFgGQAFgFAGAAQAJAAAEAFQADAEAAALIAAAEIgUAAQAAAGACABQABADADAAQAHAAACgEIAFAHQgDADgDABQgEACgEAAQgIAAgEgFgAgCgKQgCACAAAFIAKAAIAAgBQAAgEgBgCQgBgBAAAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAABg");
	this.shape_881.setTransform(1191.5943,510.0385,1.8904,1.8904);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#1D1D1B").s().p("AgEAVIAAggIgMAAIAAgJIAgAAIAAAJIgKAAIAAAgg");
	this.shape_882.setTransform(1184.978,509.9912,1.8904,1.8904);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#1D1D1B").s().p("AgMASQgDgEAAgFQAAgGAEgDQAEgEAHAAIAEAAIAAgEIgBgDIgDgCQgDABAAAEIgLAAQAAgFAEgEQAEgEAGAAQAHAAAEAEQAEADAAAHIAAATQAAAFABADIAAABIgLAAIgBgDQgDAEgEAAQgFAAgEgEgAgCADIgCAGQAAAEAEAAIACgBIACgCIAAgIIgDAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_883.setTransform(1178.1253,510.0385,1.8904,1.8904);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#1D1D1B").s().p("AAHAdIgKgYIgFAAIAAAYIgLAAIAAg5IALAAIAAAXIAEAAIAJgXIAOAAIgOAbIAPAeg");
	this.shape_884.setTransform(1170.7529,508.6207,1.8904,1.8904);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#1D1D1B").s().p("AANAVIAAgpIALAAIAAApgAgXAVIAAgpIALAAIAAAMIAGAAQAGAAAEAEQAFAEAAAGQAAAHgFAEQgEAEgHAAgAgMAMIAGAAQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAgBQAAAAAAAAQABgBAAgBQAAAAAAgBQAAgGgGAAIgFAAg");
	this.shape_885.setTransform(989.8434,545.4358,1.8904,1.8904);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#1D1D1B").s().p("AAKAbIAAgMIgTAAIAAAMIgLAAIAAgVIADAAIAEgGIACgIIAAgSIAaAAIAAAgIAGAAIAAAVgAAAgNQAAAMgEAHIAIAAIAAgXIgEAAg");
	this.shape_886.setTransform(980.108,546.6173,1.8904,1.8904);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#1D1D1B").s().p("AgLAQQgFgFAAgKIAAgBQAAgKAFgGQAEgFAHAAQAIAAAEAFQAFAGAAAKIAAABQAAAKgFAFQgDAGgJAAQgHAAgEgGgAgEgJQgBADAAAGIAAABQAAAMAFAAQAGAAAAgKIAAgDQAAgGgCgDQgBgDgDAAQgCAAgCADg");
	this.shape_887.setTransform(972.5937,545.4358,1.8904,1.8904);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#1D1D1B").s().p("AgPAeIAAg6IAKAAIAAAEQAEgFAEAAQAGAAAEAFQADAFAAALIAAADQAAAJgDAFQgDAFgHAAQgFAAgDgEIAAAUgAgFgQIAAASQACADADAAQAEAAAAgDQACgCgBgFIAAgDQABgGgCgDQgCgDgCAAQgDAAgCAEg");
	this.shape_888.setTransform(965.2212,546.9009,1.8904,1.8904);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgJAZIgLAAIAAgpIALAAIAAAZIAJgZIALAAIAAApg");
	this.shape_889.setTransform(957.5652,545.4358,1.8904,1.8904);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#1D1D1B").s().p("AgQAeIAAg6IALAAIAAAEQADgFAFAAQAGAAAEAFQADAGAAAKIAAADQAAAJgDAFQgDAFgHAAQgEAAgDgEIAAAUgAgEgQIAAASQABADADAAQADAAABgDQABgCABgFIAAgDQgBgGgBgDQgCgDgCAAQgDAAgBAEg");
	this.shape_890.setTransform(950.1927,546.9009,1.8904,1.8904);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#1D1D1B").s().p("AAFAVIAAggIgJAAIAAAgIgLAAIAAgpIAfAAIAAApg");
	this.shape_891.setTransform(942.5366,545.4358,1.8904,1.8904);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgJAZIgLAAIAAgpIALAAIAAAZIAJgZIALAAIAAApg");
	this.shape_892.setTransform(931.4779,545.4358,1.8904,1.8904);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#1D1D1B").s().p("AADAVIgFgPIgEAAIAAAPIgLAAIAAgpIALAAIAAAQIAEAAIAEgQIAPAAIgLATIAMAWg");
	this.shape_893.setTransform(924.2945,545.4358,1.8904,1.8904);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgJAZIgLAAIAAgpIALAAIAAAZIAJgZIALAAIAAApg");
	this.shape_894.setTransform(916.3549,545.4358,1.8904,1.8904);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#1D1D1B").s().p("AAEAVIAAgQIgIAAIAAAQIgLAAIAAgpIALAAIAAARIAIAAIAAgRIAMAAIAAApg");
	this.shape_895.setTransform(908.7933,545.4358,1.8904,1.8904);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#1D1D1B").s().p("AgFAVIAAggIgKAAIAAgJIAfAAIAAAJIgLAAIAAAgg");
	this.shape_896.setTransform(901.5626,545.4358,1.8904,1.8904);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#1D1D1B").s().p("AAGAVIAAgPIgFAAIgFAPIgMAAIAIgRQgDgCgBgCQgCgCAAgEQAAgHAEgDQAFgEAGAAIAPAAIAAApgAgCgKIgBAEIABAEQAAABABAAQAAAAABAAQAAABAAAAQAAAAAAAAIAGAAIAAgLIgGAAQAAAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_897.setTransform(894.0484,545.4358,1.8904,1.8904);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#1D1D1B").s().p("AALAVIAAgWIgHAWIgHAAIgHgVIAAAVIgLAAIAAgpIAOAAIAHAcIAIgcIAOAAIAAApg");
	this.shape_898.setTransform(885.5889,545.4358,1.8904,1.8904);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#1D1D1B").s().p("AgMASQgDgEAAgFQAAgGAEgDQAFgEAGAAIAEAAIAAgDIgBgEIgDgBQgDAAAAAEIgLAAQAAgFAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGIAAATQAAAFABADIAAABIgLAAIgBgDQgDAEgEAAQgFAAgEgEgAgCAEQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAAFAEAAIACgBIACgBIAAgJIgDAAQgBAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAABg");
	this.shape_899.setTransform(877.0822,545.4358,1.8904,1.8904);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#1D1D1B").s().p("AAIAcIAAguIgPAAIAAAuIgMAAIAAg3IAnAAIAAA3g");
	this.shape_900.setTransform(868.859,544.0653,1.8904,1.8904);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgJAZIgLAAIAAgpIALAAIAAAZIAJgZIALAAIAAApg");
	this.shape_901.setTransform(757.4683,625.8715,1.8904,1.8904);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#1D1D1B").s().p("AADAVIgFgPIgDAAIAAAPIgMAAIAAgpIAMAAIAAAQIADAAIAFgQIAOAAIgLATIALAWg");
	this.shape_902.setTransform(750.2849,625.8715,1.8904,1.8904);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgJAZIgLAAIAAgpIALAAIAAAZIAJgZIALAAIAAApg");
	this.shape_903.setTransform(742.3453,625.8715,1.8904,1.8904);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#1D1D1B").s().p("AAFAVIAAgQIgJAAIAAAQIgLAAIAAgpIALAAIAAARIAJAAIAAgRIALAAIAAApg");
	this.shape_904.setTransform(734.7838,625.8715,1.8904,1.8904);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#1D1D1B").s().p("AgKASQgEgDgBgGIALAAQAAAAABABQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQABAAAAAAQABAAAAAAQAAAAAAAAIADgBIABgEQAAgFgEAAIgEAAIAAgGIAEAAQAEAAAAgFQAAgEgEAAIgBABQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIgLAAQAAgFAEgEQAEgEAGAAQAGAAAFADQAEAEAAAGQAAADgCACQgCADgBAAQAFACABAHQAAAGgFAEQgEADgHAAQgHAAgDgEg");
	this.shape_905.setTransform(727.6003,625.8715,1.8904,1.8904);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#1D1D1B").s().p("AgMASQgDgDAAgGQAAgGAEgDQAFgEAGAAIAEAAIAAgDIgBgEIgDgBQgDAAAAAFIgLAAQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGIAAATQAAAFABAEIAAAAIgLAAIgBgDQgCAEgFAAQgFAAgEgEgAgDAEIgBAFQAAAEAEAAIACAAIACgCIAAgJIgDAAIgEACg");
	this.shape_906.setTransform(720.6532,625.8715,1.8904,1.8904);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#1D1D1B").s().p("AADAVIgGgPIgCAAIAAAPIgLAAIAAgpIALAAIAAAQIACAAIAGgQIAOAAIgMATIANAWg");
	this.shape_907.setTransform(713.6115,625.8715,1.8904,1.8904);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#1D1D1B").s().p("AgMASQgDgDAAgGQAAgGAEgDQAEgEAHAAIAEAAIAAgDIgBgEIgDgBQgDAAAAAFIgLAAQAAgFAEgFQAEgEAGAAQAHAAAEAEQAEAEAAAGIAAATQAAAFABAEIAAAAIgLAAIgBgDQgCAEgFAAQgFAAgEgEgAgDAEIgBAFQAAAEAEAAIACAAIACgCIAAgJIgDAAIgEACg");
	this.shape_908.setTransform(705.9082,625.8715,1.8904,1.8904);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#1D1D1B").s().p("AgKASQgEgDAAgGIALAAIABADIACABIADgBIABgEQAAgFgEAAIgEAAIAAgGIAEAAQAEAAAAgFQAAgEgEAAIgCABIgBADIgLAAQAAgGAEgDQAEgEAGAAQAHAAAEADQAEAEAAAGQAAADgCACQgCADgCAAQAGACAAAHQAAAGgEAEQgEADgHAAQgGAAgEgEg");
	this.shape_909.setTransform(698.9138,625.8715,1.8904,1.8904);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#1D1D1B").s().p("AgLARQgEgFgBgKIAAgCQAAgKAFgFQAEgGAHAAQAIAAAEAFQAEAGABAJIAAAFIgWAAQAAAFADACQABACADAAQAGAAADgEIAFAHQgCADgEABIgJACQgHAAgFgFgAgDgKQgCADAAAEIALAAIAAgBQAAgDgCgDQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAg");
	this.shape_910.setTransform(688.4694,625.8715,1.8904,1.8904);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#1D1D1B").s().p("AANAVIAAgpIALAAIAAApgAgXAVIAAgpIALAAIAAAMIAFAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgHAAgAgMAMIAFAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIABgFQAAgGgFAAIgFAAg");
	this.shape_911.setTransform(679.1593,625.8715,1.8904,1.8904);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#1D1D1B").s().p("AAFAVIAAgQIgJAAIAAAQIgLAAIAAgpIALAAIAAARIAJAAIAAgRIALAAIAAApg");
	this.shape_912.setTransform(669.8492,625.8715,1.8904,1.8904);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#1D1D1B").s().p("AAKAcIAAgNIgTAAIAAANIgLAAIAAgWIADAAQADgDABgDQABgDAAgFIAAgSIAbAAIAAAgIAGAAIAAAWgAgBgNQAAAMgDAHIAJAAIAAgXIgGAAg");
	this.shape_913.setTransform(662.0041,627.053,1.8904,1.8904);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#1D1D1B").s().p("AgLARQgFgGAAgKIAAgBQAAgKAFgFQAEgGAHAAQAJAAADAGQAFAFAAAKIAAABQAAAKgFAGQgEAFgIAAQgHAAgEgFgAgEgJQgBADAAAGIAAABQAAAMAFAAQAGAAAAgKIAAgDQAAgGgCgDQgBgDgDAAQgCAAgCADg");
	this.shape_914.setTransform(654.4426,625.8715,1.8904,1.8904);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#1D1D1B").s().p("AgPAeIAAg6IAKAAIABAEQACgEAFgBQAHAAADAGQADAEAAAKIAAAEQAAAJgDAFQgDAFgHAAQgEAAgDgEIAAAUgAgEgRIAAAUQABACADAAQADAAABgCIABgIIAAgDIgBgJQgBgCgDgBQgCAAgCADg");
	this.shape_915.setTransform(647.0701,627.3366,1.8904,1.8904);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgJAZIgLAAIAAgpIALAAIAAAZIAJgZIALAAIAAApg");
	this.shape_916.setTransform(639.4141,625.8715,1.8904,1.8904);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#1D1D1B").s().p("AgQAeIAAg6IALAAIAAAEQAEgEAEgBQAHAAADAGQADAEAAAKIAAAEQAAAJgDAFQgDAFgHAAQgEAAgDgEIAAAUgAgEgRIAAAUQABACADAAQADAAACgCIABgIIAAgDQgBgGgBgDQgBgCgDgBQgDAAgBADg");
	this.shape_917.setTransform(632.0416,627.3366,1.8904,1.8904);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#1D1D1B").s().p("AAFAVIAAggIgJAAIAAAgIgLAAIAAgpIAfAAIAAApg");
	this.shape_918.setTransform(624.3855,625.8715,1.8904,1.8904);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#1D1D1B").s().p("AgLARQgEgFgBgKIAAgCQABgKAEgFQAEgGAHAAQAIAAAEAFQAFAGAAAJIAAAFIgWAAQAAAEADADQABACADAAQAGAAADgEIAFAHQgCADgEABQgEACgFAAQgHAAgFgFgAgDgKQgCADAAAEIALAAIAAgBIgCgGQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAg");
	this.shape_919.setTransform(613.6104,625.8715,1.8904,1.8904);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#1D1D1B").s().p("AANAVIAAgpIALAAIAAApgAgXAVIAAgpIALAAIAAAMIAGAAQAGAAAEAEQAFAEAAAGQAAAHgFAEQgEAEgHAAgAgMAMIAGAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgGgGAAIgFAAg");
	this.shape_920.setTransform(604.3002,625.8715,1.8904,1.8904);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#1D1D1B").s().p("AAFAVIAAgQIgJAAIAAAQIgLAAIAAgpIALAAIAAARIAJAAIAAgRIALAAIAAApg");
	this.shape_921.setTransform(595.0846,625.8715,1.8904,1.8904);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#1D1D1B").s().p("AAFAVIAAgQIgJAAIAAAQIgLAAIAAgpIALAAIAAARIAJAAIAAgRIALAAIAAApg");
	this.shape_922.setTransform(587.5231,625.8715,1.8904,1.8904);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#1D1D1B").s().p("AgLARQgFgFAAgKIAAgCQAAgKAFgFQAEgGAHAAQAJAAADAFQAEAFABAKIAAAFIgVAAQAAAFACACQABACADAAQAGAAAEgEIAEAHQgDADgDABQgEACgEAAQgIAAgFgFgAgDgKQgBADAAAEIAKAAIAAgBQAAgDgCgDQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAQAAAAAAAAQgBAAgBABQAAAAAAAAQgBABAAAAg");
	this.shape_923.setTransform(580.1979,625.8715,1.8904,1.8904);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#1D1D1B").s().p("AgPAVIAAgpIAPAAQAHAAAEADQAEADAAAGIgCAFQgCACgDABQAEAAACADQACACAAAEQAAAMgPAAgAgEAMIAFAAIADgBIABgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgCgBIgGAAgAgEgDIAEAAIADgBIAAgDQAAgEgDAAIgEAAg");
	this.shape_924.setTransform(572.9199,625.8715,1.8904,1.8904);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#1D1D1B").s().p("AgFAVIAAggIgKAAIAAgJIAfAAIAAAJIgLAAIAAAgg");
	this.shape_925.setTransform(565.5474,625.8715,1.8904,1.8904);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#1D1D1B").s().p("AgKARQgFgFAAgKIAAgCQAAgKAEgGQAFgFAGAAQAIAAADAEQAFAFAAAIIgKAAIgBgGQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgCADAAAFIABALIABADIACABQAGAAAAgGIAKAAQAAAGgFAFQgDAEgHAAQgIAAgDgFg");
	this.shape_926.setTransform(558.6948,625.8715,1.8904,1.8904);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#1D1D1B").s().p("AgQAeIAAg6IALAAIAAAEQAEgEAEgBQAHAAADAGQADAEABAKIAAAEQgBAJgDAFQgDAFgHAAQgEAAgEgEIAAAUgAgFgRIAAAUQACACADAAQADAAABgCIACgIIAAgDQAAgGgCgDQgBgCgDgBQgCAAgDADg");
	this.shape_927.setTransform(551.5114,627.3366,1.8904,1.8904);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#1D1D1B").s().p("AgMASQgDgDAAgGQAAgGAEgDQAFgEAHAAIACAAIAAgDIAAgEIgDgBQgDAAgBAFIgKAAQAAgGAEgEQAEgEAGAAQAIAAADAEQAEADgBAHIAAATQABAFABAEIAAAAIgLAAIgBgDQgDAEgEAAQgGAAgDgEgAgDAEIgBAFQAAAEADAAIADAAIABgCIAAgJIgCAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_928.setTransform(544.1389,625.8715,1.8904,1.8904);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#1D1D1B").s().p("AAKAcIAAgNIgTAAIAAANIgLAAIAAgWIADAAQADgDABgDQACgDgBgFIABgSIAaAAIAAAgIAGAAIAAAWgAgBgNQAAAMgDAHIAIAAIAAgXIgFAAg");
	this.shape_929.setTransform(536.2938,627.053,1.8904,1.8904);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#1D1D1B").s().p("AgMAdIAAgJIABAAIAEgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIABgDIgMgqIAMAAIAEAYIAFgYIAMAAIgOAwQgDALgIAAg");
	this.shape_930.setTransform(529.0631,627.4784,1.8904,1.8904);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgKIAAgCQAAgKAEgGQAEgFAIAAQAHAAAEAEQAEAFAAAIIgLAAQAAgFgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAQAAABgBAAIgBAIIABALQAAAAAAABQAAAAAAABQABAAAAAAQAAABAAAAIADABQAFAAgBgGIALAAQAAAGgEAFQgEAEgHAAQgHAAgFgFg");
	this.shape_931.setTransform(522.2104,625.8715,1.8904,1.8904);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#1D1D1B").s().p("AgLARQgFgGAAgKIAAgBQAAgKAFgFQAEgGAHAAQAJAAADAGQAFAFAAAKIAAABQAAAKgFAGQgEAFgIAAQgHAAgEgFgAgEgJQgBADAAAGIAAABQAAAMAFAAQAGAAAAgKIAAgDQAAgGgCgDQgBgDgDAAQgCAAgCADg");
	this.shape_932.setTransform(514.9325,625.8715,1.8904,1.8904);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#1D1D1B").s().p("AgPAdIAAg4IAfAAIAAAJIgTAAIAAAvg");
	this.shape_933.setTransform(508.836,624.501,1.8904,1.8904);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#1D1D1B").s().p("AgVATQgGgIAAgKQAAgLAIgHQAGgHAOAAQANAAAHAGQAIAHgBALQAAALgHAHQgIAHgNAAQgNAAgIgGgAgLgPQgDAEgBALQAAALAFAFQADAGAIAAQAHAAAEgFQAEgGAAgLQAAgJgEgGQgEgGgIAAQgHAAgEAGg");
	this.shape_934.setTransform(385.4414,325.2537,1.8904,1.8904);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#1D1D1B").s().p("AANAYIgEgCIgCgEIgIgOIgCgCIgBAAIgEAAIAAASIABABIAFABIAAACIgXAAIgBgCIAGgBIABgBIAAgnIgBgBIgFgCIgBgBIAYAAIAAABIgFACIgBABIAAASIAFAAIADAAIABgBIACgCIABgEIADgJIABgDIABgCIACgBIACAAIACAAIAKAAIABACQgEAAgDACQgDABgCAFIgEAGIgFAFIAQAVIACACIAEABIAAACIgJAAg");
	this.shape_935.setTransform(374.9025,325.301,1.8904,1.8904);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#1D1D1B").s().p("AgNATQgJgHABgLQAAgLAIgHQAJgHAMAAIAOABIAAABIgCAMIgDAAIgDgJIgGgCQgIAAgEAGQgFAGAAAJQAAAJAGAFQAFAHAJgBIALgBIABABQgIAFgKAAQgMAAgGgGg");
	this.shape_936.setTransform(364.4582,325.2537,1.8904,1.8904);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#1D1D1B").s().p("AgTAYIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAmAAIgCALIgCABIgDgIIgNAAIAAASIAIAAIABgCIABgEIADAAIAAAHIAAAHIgDAAIgBgFIgBgBIgIAAIAAATIAOAAIAFgJIACAAIgBAMIAAABg");
	this.shape_937.setTransform(355.3371,325.2537,1.8904,1.8904);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#1D1D1B").s().p("AAGAYIAAgCIAEgBIABgBIAAgTIgVAAIAAATIABABIAEABIAAACIgWAAIgBgCIAFgBIABgBIAAghIAAgGIgBgBIgFgCIAAgBIAXAAIAAABIgEACIgBABIAAAQIAVAAIAAgQIgBgBIgEgCIAAgBIAXAAIAAABIgFACIgBABIAAAnIABABIAFABIAAACg");
	this.shape_938.setTransform(344.7982,325.2537,1.8904,1.8904);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#1D1D1B").s().p("AgGATQgGgHAAgLIgKAAIAAATIACABIADABIABACIgYAAIAAgCIAFgBIABgBIABghIgBgGIAAgBIgGgCIAAgBIAXAAIABABIgEACIgCABIAAARIAKAAQAAgKAIgGQAHgGAMAAQAMAAAHAGQAGAHAAALQABALgIAHQgHAHgOAAQgMAAgGgGgAACgQQgCAGAAAKQAAAKADAGQAEAGAHAAQAGAAAFgFQADgGAAgLQgBgKgDgFQgEgGgHAAQgIAAgDAFg");
	this.shape_939.setTransform(330.3368,325.2537,1.8904,1.8904);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#1D1D1B").s().p("AgZAYIAAgCIAEgBIABgBIABgBIADgCIAJgPQgLgDAAgIQAAgHAGgDQAHgFAIAAIAXABIAAABIgFACIgBABIAAAnIABABIAFABIAAACIgXAAIAAgCIAEgBQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgRIgDAAIgBABIgBAAIgBABIAAABIgIAOQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgBABIgFACgAgDgRQgCABAAAHQAAAFACADQACABAGAAIADAAIAAgUIgEAAQgFAAgCADg");
	this.shape_940.setTransform(312.9925,325.2537,1.8904,1.8904);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#1D1D1B").s().p("AAGAYIAAgCIAFgBIABgBIAAgcIgXAUIABAIIABABIAEABIAAACIgXAAIAAgCIAFgBIABgBIAAghIAAgGIgBgBIgFgCIAAgBIAXAAIAAABIgEACIgBABIgBAFIAAAVIAXgVIAAgFIgBgBIgFgCIAAgBIAXAAIAAABIgFACIgBABIAAAnIABABIAFABIAAACg");
	this.shape_941.setTransform(302.0283,325.2537,1.8904,1.8904);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#1D1D1B").s().p("AATAQIglAAIgEAPIgCABIgCgTIAAAAIAGAAIAEgGIAGgNIADgOIAAgHIAAgBIgHgBIAAgBIAnAAIAAABIgFABIgBABIAAAmIABACIAHAAIAAAAIgCASIgDABgAgFgHIgDAKIgGAKIAWAAIAAgoIgJAAg");
	this.shape_942.setTransform(290.3552,326.6715,1.8904,1.8904);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#1D1D1B").s().p("AgTAYIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAmAAIgCALIgDABIgCgIIgOAAIAAASIAIAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAgBIACgEIACAAIgBAHIABAHIgCAAIgCgFIgCgBIgIAAIAAATIAPAAIAFgJIACAAIgBAMIAAABg");
	this.shape_943.setTransform(280.6198,325.2537,1.8904,1.8904);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#1D1D1B").s().p("AgbAYIAAgCIAHgCIADgCIAEgGIADgGIADgGIADgTIgCgBIgFgCIAAgBIAmAAIAAABIgEACIgBABIAAAnIABABIAEABIAAACIgWAAIgBgCIAFgBIABgBIAAgoIgKAAIAAALIgCAJIgDAKQgCAFgDAFIAAACIgCABIgDABIgDAAg");
	this.shape_944.setTransform(270.3172,325.301,1.8904,1.8904);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#1D1D1B").s().p("AgOATQgHgHAAgLQAAgLAIgHQAJgHAMAAQAHAAAHABIAAABIgCAMIgDAAIgDgJIgGgCQgIAAgEAGQgFAGAAAJQAAAIAGAGQAEAHAKgBIALgBIABABQgIAFgKAAQgMAAgHgGg");
	this.shape_945.setTransform(260.4872,325.2537,1.8904,1.8904);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#1D1D1B").s().p("AADAZIAAgCIAFgBIABgBIAAgBIgBgFIgEgGIgOAAIgDAGIgBADIgBADIABAAIABABIAEABIAAACIgRAAIAAgCIADgBIACgBIAVgsIADAAIARAoIABAEIACABIAFABIAAACgAgIAGIALAAIgDgMIgCgEg");
	this.shape_946.setTransform(250.8463,325.1592,1.8904,1.8904);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#1D1D1B").s().p("AAFAYIAAgCIAFgBIABgBIAAgTIgVAAIAAATIABABIAEABIAAACIgXAAIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAXAAIAAABIgEACIgBABIAAAQIAVAAIAAgQIgBgBIgFgCIAAgBIAYAAIAAABIgGACIgBABIAAAnIABABIAGABIAAACg");
	this.shape_947.setTransform(239.9766,325.2537,1.8904,1.8904);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#1D1D1B").s().p("AgUATQgIgIABgKQAAgLAHgHQAIgHANAAQANAAAHAGQAIAHgBALQAAALgHAHQgJAHgMAAQgOAAgGgGgAgLgPQgEAFAAAKQAAAKAFAGQAEAGAGAAQAIAAAEgFQADgGABgLQgBgKgDgFQgEgGgIAAQgIAAgDAGg");
	this.shape_948.setTransform(224.1919,325.2537,1.8904,1.8904);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#1D1D1B").s().p("AgSAYIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAlAAIgCAOIgCAAIgDgKIgNAAIAAAmIABABIAFACIAAACg");
	this.shape_949.setTransform(214.8818,325.2537,1.8904,1.8904);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#1D1D1B").s().p("AgUATQgIgHAAgLQAAgLAIgHQAHgHAOAAQAOAAAGAGQAIAHAAALQAAAKgIAIQgIAHgNAAQgOAAgGgGgAgLgPQgEAEAAALQAAAKAEAGQAFAGAGAAQAIAAAEgFQAEgGAAgLQAAgJgEgGQgEgGgIAAQgHAAgEAGg");
	this.shape_950.setTransform(204.4847,325.2537,1.8904,1.8904);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#1D1D1B").s().p("AAGAYIAAgCIAEgBIACgBIAAgTIgXAAIABATIAAABIAFABIABACIgYAAIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAXAAIABABIgGACIAAABIgBAQIAXAAIAAgQIgCgBIgEgCIAAgBIAXAAIAAABIgFACIgBABIAAAnIABABIAFABIAAACg");
	this.shape_951.setTransform(192.2445,325.2537,1.8904,1.8904);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#1D1D1B").s().p("AgVAYIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAWAAQALAAAFADQAFADAAAHQAAAHgFADQgGAEgKAAIgFgBIAAAQIABABIAFACIAAACgAgEgTIAAAUIAEAAQAFAAACgCQADgCAAgGQAAgGgDgCQgCgDgFAAg");
	this.shape_952.setTransform(181.8001,325.2537,1.8904,1.8904);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#1D1D1B").s().p("AAGAYIAAgCIAEgBIABgBIAAgcIgWAUIAAAIIABABIAFABIAAACIgXAAIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAXAAIAAABIgFACIgBABIAAAaIAWgVIAAgFIgBgBIgEgCIAAgBIAXAAIAAABIgFACIgBABIAAAnIABABIAFABIAAACg");
	this.shape_953.setTransform(170.8359,325.2537,1.8904,1.8904);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#1D1D1B").s().p("AALAYIgBgCIAFgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIAAgiIgQAnIgEAAIgSgmIABAhQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIAEABIAAACIgRAAIAAgCIAGgBIABgBIAAgnIgBgBIgGgCIAAgBIATAAIANAdIABAEIAPghIATAAIAAABIgGACIAAABIAAAnIAAABIAGABIAAACg");
	this.shape_954.setTransform(157.6505,325.2537,1.8904,1.8904);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#1D1D1B").s().p("AgTAYIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAmAAIgCALIgDABIgCgIIgNAAIAAASIAIAAIABgCIACgEIACAAIgBAHIABAHIgCAAIgCgFIgBgBIgIAAIAAATIAOAAIAFgJIACAAIgBAMIAAABg");
	this.shape_955.setTransform(146.4027,325.2537,1.8904,1.8904);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#1D1D1B").s().p("AgOATQgIgIAAgKQAAgLAJgHQAIgHANAAIAOABIAAABIgDAMIgCAAIgDgJIgGgCQgIAAgEAGQgFAGAAAJQAAAIAGAGQAEAHAKgBIALgBIABABQgIAFgKAAQgMAAgHgGg");
	this.shape_956.setTransform(137.1871,325.2537,1.8904,1.8904);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#1D1D1B").s().p("AgVAYIgBgCIAFgBIABgBIABgDIAAghIgBgDIAAgBIgGgBIAAgCIAXAAQAKAAAEADQAFADAAAFQAAAIgLADQAHABADACQAEAEAAAEQAAAGgHAEQgGAEgKAAgAgEAVIAEAAQAFAAACgDQADgCAAgFQAAgFgDgDQgDgDgFAAIgDAAgAgEgTIAAARIAEAAQAEAAACgCQACgCAAgFQAAgEgCgDQgCgCgEAAIgCAAg");
	this.shape_957.setTransform(127.3571,325.2065,1.8904,1.8904);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#1D1D1B").s().p("AALAYIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAXAAIABABIgGACIgBABIAAAnQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAIAEABIABACgAghAYIgBgCIAGgBIABgBIAAgnIgBgBIgFgCIgBgBIAYAAIABABIgGACIgBABIAAAQIAHAAQAJAAAFADQAFACAAAHQAAAHgHAEQgFAEgLAAgAgQAAIAAAUIAEABQAFAAADgDQACgCAAgGQAAgFgCgDQgCgCgGAAg");
	this.shape_958.setTransform(111.7615,325.2537,1.8904,1.8904);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#1D1D1B").s().p("AgMAYIAAgCIAGgCIABgBIAAgGIAAggIgLAAIgDAJIgDAAIgBgNIAvAAIgDANIgCAAIgDgJIgLAAIAAAgIABAGIABABIAGACIAAACg");
	this.shape_959.setTransform(99.1905,325.2537,1.8904,1.8904);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#1D1D1B").s().p("AANAYIgEgCIgKgSIgCgCIgBAAIgEAAIAAASIABABIAFABIAAACIgXAAIgBgCIAGgBIABgBIAAgnIgBgBIgFgCIgBgBIAXAAIABABIgFACIgBABIAAASIAFAAIADAAIABgBIACgCIABgEIADgJIABgDIABgCQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAIACAAIACAAIAKAAIABACQgEAAgDACQgDABgCAFIgEAGIgFAFIAKAOIAGAHIACACIAEABIAAACIgJAAg");
	this.shape_960.setTransform(90.3057,325.301,1.8904,1.8904);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#1D1D1B").s().p("AgTAYIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAmAAIgCALIgCABIgDgIIgNAAIAAASIAIAAIABgCIABgEIADAAIAAAOIgDAAIgBgFIgBgBIgIAAIAAATIAOAAIAFgJIACAAIgBAMIAAABg");
	this.shape_961.setTransform(80.1921,325.2537,1.8904,1.8904);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#1D1D1B").s().p("AgQAYIAAgCIAFgBIABgCIAAgmIgLAAIgDAJIgCAAIgBgNIAiAAIAAABIgFACIgBABIAAAQIAHAAQALAAAEADQAFACAAAHQAAAHgGAEQgHAEgLAAgAABAAIAAAUIAEABQAFAAADgDQADgCAAgGQAAgFgDgDQgDgCgFAAg");
	this.shape_962.setTransform(69.9841,325.2537,1.8904,1.8904);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#1D1D1B").s().p("AgVAYIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAnAAIgDANIgCAAIgCgJIgPAAIAAAQIAHAAQAKAAAFADQAEACABAHQAAAHgHAEQgGAEgKAAgAgEAAIAAAUIAEABQAGAAABgDQADgCAAgGQAAgFgCgDQgCgCgGAAg");
	this.shape_963.setTransform(59.9178,325.2537,1.8904,1.8904);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#1D1D1B").s().p("AgUATQgIgIABgKQgBgLAJgHQAGgHAOAAQANAAAHAGQAIAHgBALQAAALgHAHQgJAHgMAAQgOAAgGgGgAgLgPQgEAEAAALQAAALAFAFQAEAGAGAAQAIAAAEgFQAEgGAAgLQAAgJgEgGQgEgGgIAAQgHAAgEAGg");
	this.shape_964.setTransform(48.9536,325.2537,1.8904,1.8904);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#1D1D1B").s().p("AgUATQgIgHAAgLQAAgMAIgGQAIgHANAAQANAAAHAGQAIAHAAALQAAAKgIAIQgIAHgNAAQgOAAgGgGgAgLgQQgEAGAAAKQAAAKAEAGQAEAGAHAAQAJAAADgFQAEgFAAgMQAAgJgEgGQgEgGgIAAQgIAAgDAFg");
	this.shape_965.setTransform(803.9245,325.3955,1.8904,1.8904);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#1D1D1B").s().p("AANAXQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgDgDIgIgOIgBgCIgBAAIgEAAIAAARQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIAEABIAAACIgXAAIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAXAAIAAABIgEACIgBABIAAASIAFAAIACAAIACgBIABgCIACgEIAEgMIABgCIABgBIACAAIANAAIAAACQgFAAgCACQgDACgCAEIgEAGQgCAEgCABIAPAVIADACIADABIABACIgJAAg");
	this.shape_966.setTransform(793.4328,325.49,1.8904,1.8904);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#1D1D1B").s().p("AgOASQgHgGgBgMQAAgKAJgHQAJgHALAAQAIAAAHABIAAABIgDAMIgCAAIgDgJIgHgBQgHgBgEAGQgFAGAAAJQAAAIAGAHQAEAFAKAAIALgCIAAACQgHAFgKAAQgLAAgIgHg");
	this.shape_967.setTransform(782.9885,325.4428,1.8904,1.8904);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#1D1D1B").s().p("AgTAYIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAmAAIgCAMIgDAAIgBgIIgPAAIAAASIAIAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIACgFIACAAIAAAOIgCAAIgCgFIgBgBIgJAAIAAATIAPAAIAFgJIACAAIgBANIAAAAg");
	this.shape_968.setTransform(773.8201,325.4428,1.8904,1.8904);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#1D1D1B").s().p("AAGAYIAAgCIAFgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAgBIAAgTIgWAAIAAATQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIAFABIAAACIgYAAIAAgCIAGgBIABgBIAAgnIgBgBIgGgCIAAgBIAYAAIAAABIgFACIgBABIAAARIAWAAIAAgRIgBgBIgFgCIAAgBIAXAAIAAABIgFACIgBABIAAAnIABABIAFABIAAACg");
	this.shape_969.setTransform(763.234,325.4428,1.8904,1.8904);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#1D1D1B").s().p("AgFATQgHgHAAgLIgJAAIAAATQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIAFABIAAACIgXAAIAAgCIAFgBIABgBIAAgnIgBgBIgFgBIAAgCIAWAAIABACIgFABIAAABIAAARIAJAAQACgLAHgFQAFgGAMAAQAMAAAIAGQAGAHABALQAAAKgIAIQgIAHgMAAQgNAAgFgGgAADgQQgDAGAAAKQAAALADAFQAEAGAHAAQAHAAADgFQAEgGAAgLQAAgIgEgHQgDgGgIAAQgHAAgDAFg");
	this.shape_970.setTransform(748.7726,325.3955,1.8904,1.8904);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#1D1D1B").s().p("AgYAYIgBgCIADgBIACgBIAEgDIAJgQQgLgDAAgHQAAgHAGgDQAHgFAIAAIAGABIARAAIAAABIgGACIAAABIAAAmIABACIAFABIAAACIgXAAIAAgCIAEgBIABgCIAAgCIABgEIAAgLIgEAAIgBABIgBAAIgBABIAAABIgIAOIgCADIgDACIgCAAIgCAAIgDABgAgDgRQgCACgBAGQABAEACAEQACABAFAAIAFAAIAAgUIgFAAQgFAAgCADg");
	this.shape_971.setTransform(731.4756,325.4428,1.8904,1.8904);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#1D1D1B").s().p("AAGAYIAAgCIAFgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgbIgWAUIAAAHQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAABAAIAEABIAAACIgXAAIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAXAAIAAABIgEACIgBABIAAAaIAWgVIAAgFIgBgBIgFgCIAAgBIAXAAIAAABIgFACIgBABIAAAnIABABIAFABIAAACg");
	this.shape_972.setTransform(720.4641,325.4428,1.8904,1.8904);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#1D1D1B").s().p("AATAQIglAAIgDAPIgDABIgDgTIABAAIAGAAIAEgGIAEgHIAEgNIACgOIgBgBIgGgBIAAgBIAmAAIAAABIgFABIgBABIAAAnIABABIAHAAIAAAAIgCASIgCABgAgEgHIgFAKIgFAKIAVAAIAAgoIgJAAg");
	this.shape_973.setTransform(708.791,326.8605,1.8904,1.8904);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#1D1D1B").s().p("AgTAYIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAmAAIgCAMIgCAAIgCgIIgOAAIAAASIAIAAIABgBIABgFIADAAIAAAOIgDAAIgBgFIgBgBIgIAAIAAATIAOAAIAFgJIACAAIgBANIAAAAg");
	this.shape_974.setTransform(699.0556,325.4428,1.8904,1.8904);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#1D1D1B").s().p("AgbAXIAAgBIAFgBIABgBIACgBIACgBIAEgGIADgGIADgGIABgHIACgMIgBgBIgHgCIAAgBIAnAAIABABIgFACQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIAAAnIACABIAEABIABACIgYAAIAAgCIAFgBIABgCIAAgnIgKAAIgCAUIgDAKIgEAKIgCACIgBABIgGABg");
	this.shape_975.setTransform(688.8003,325.49,1.8904,1.8904);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#1D1D1B").s().p("AgOASQgHgGgBgMQAAgKAJgHQAIgHANAAIAOABIAAABIgCAMIgCAAIgEgJIgGgBQgIgBgEAGQgFAGABAJQgBAJAGAGQAEAFAKAAIALgCIAAACQgHAFgKAAQgKAAgJgHg");
	this.shape_976.setTransform(678.923,325.4428,1.8904,1.8904);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#1D1D1B").s().p("AAEAYIAAgBIADgBIABgBIABgBIgEgLIgPAAIgCAGIgCAFIAAABIAFACIAAABIgJAAIgIAAIgBgBIAFgBIACgBIAUgsIAEAAIASAsIAFACIAAABgAgIAGIAMAAIgFgQg");
	this.shape_977.setTransform(669.2821,325.3482,1.8904,1.8904);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#1D1D1B").s().p("AAGAYIAAgCIAEgBIACgCIAAgTIgXAAIAAATQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAFABIAAACIgXAAIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAXAAIAAABIgFACIgBABIAAARIAXAAIAAgRIgCgBIgEgCIAAgBIAXAAIAAABIgFACIgBABIAAAFIAAAiIABABIAFABIAAACg");
	this.shape_978.setTransform(658.4124,325.4428,1.8904,1.8904);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#1D1D1B").s().p("AgVATQgGgHgBgLQABgMAHgGQAJgHAMAAQAMAAAJAGQAGAHABALQAAALgIAHQgIAHgNAAQgNAAgIgGgAgLgQQgEAGABAKQAAALADAFQAEAGAIAAQAHAAAEgFQAEgGAAgLQAAgJgEgGQgEgGgIAAQgHAAgEAFg");
	this.shape_979.setTransform(642.6277,325.3955,1.8904,1.8904);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#1D1D1B").s().p("AgSAYIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAlAAIgCAOIgCAAIgDgKIgNAAIAAAgIABAGIAAABIAFACIAAACg");
	this.shape_980.setTransform(633.3176,325.4428,1.8904,1.8904);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#1D1D1B").s().p("AgUATQgIgHABgLQAAgLAHgHQAJgHAMAAQAMAAAIAGQAHAHAAALQABALgJAHQgHAHgNAAQgOAAgGgGgAgLgQQgEAHAAAJQAAAKAEAGQAEAGAIAAQAIAAADgFQAEgFAAgMQAAgKgFgFQgEgGgHAAQgIAAgDAFg");
	this.shape_981.setTransform(622.9677,325.3955,1.8904,1.8904);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#1D1D1B").s().p("AAGAYIAAgCIAFgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgTIgVAAIAAATQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIAEABIAAACIgWAAIgBgCIAFgBIABgBIAAgnIgBgBIgEgCIgBgBIAXAAIAAABIgEACIgBABIAAARIAVAAIAAgRIAAgBIgFgCIAAgBIAXAAIAAABIgFACIgBABIAAAnIABABIAFABIAAACg");
	this.shape_982.setTransform(610.6803,325.4428,1.8904,1.8904);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#1D1D1B").s().p("AgVAYIAAgCIAFgBIABgBIAAgnIgBgBIgFgBIAAgCIAXAAQAJAAAGADQAFADAAAHQAAAHgFADQgGAEgKAAIgEAAIAAAQIABABIAEABIAAACgAgDgTIAAAUIADAAQAFAAACgCQADgDAAgFQAAgFgCgDQgEgDgEAAg");
	this.shape_983.setTransform(600.2359,325.3955,1.8904,1.8904);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#1D1D1B").s().p("AAGAYIAAgCIAFgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgbIgXAUIAAAHQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAIAFABIAAACIgXAAIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAXAAIAAABIgFACIgBABIAAAaIAXgVIAAgFIgBgBIgFgCIAAgBIAXAAIAAABIgFACIgBABIAAAnIABABIAFABIAAACg");
	this.shape_984.setTransform(589.2717,325.4428,1.8904,1.8904);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#1D1D1B").s().p("AALAYIAAgCIAEgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIAAgiIgRAnIgDAAIgRgmIAAAhQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAIAEABIAAACIgIAAIgIAAIgBgCIAGgBIABgBIAAgnIgBgBIgFgCIgBgBIATAAIAOAgIAPggIASAAIABABIgGACIgBABIAAAnIABABIAFABIABACg");
	this.shape_985.setTransform(576.1336,325.4428,1.8904,1.8904);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#1D1D1B").s().p("AgTAYIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAmAAIgCAMIgCAAIgCgIIgPAAIAAASIAJAAIABgBIABgFIADAAIAAAOIgDAAIgBgFIgBgBIgJAAIAAATIAPAAIAEgJIADAAIgBANIAAAAg");
	this.shape_986.setTransform(564.8385,325.4428,1.8904,1.8904);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#1D1D1B").s().p("AgOASQgHgGAAgMQAAgKAIgHQAJgHAMAAQAHAAAHABIAAABIgCAMIgDAAIgDgJIgHgBQgHgBgEAGQgFAGAAAJQAAAIAGAHQAEAFAKAAIALgCIABACQgIAFgKAAQgLAAgIgHg");
	this.shape_987.setTransform(555.6702,325.4428,1.8904,1.8904);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#1D1D1B").s().p("AgLAYIgLAAIAAgCIAGgBIABgBIAAgnIgBgBIgGgBIAAgCIAXAAQAJAAAFADQAFADAAAFQAAAIgKADQAGABADACQADADAAAFQABAHgHADQgGAEgKAAgAgEAVIAEAAQAEAAADgDQADgCAAgGQAAgFgDgCQgCgDgGAAIgDAAgAgEgCIADAAQAFAAACgCQACgCAAgFQAAgFgDgCQgBgCgFAAIgDAAg");
	this.shape_988.setTransform(545.8402,325.3955,1.8904,1.8904);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#1D1D1B").s().p("AAKAYIAAgCIAGgBIABgBIAAgDIAAghIAAgDIgBgBIgGgCIAAgBIAYAAIABABIgGACIgBABIAAADIAAAhIAAACIABACIAGABIAAACgAgYAYIgKAAIAAgCIAGgBIABgBIAAgnIgBgBIgGgCIAAgBIAZAAIAAABIgGACIgBABIAAAQIAHAAQAJAAAFADQAEACAAAHQABAHgHAEQgFAEgLAAgAgQAAIAAAUIAEABQAFAAACgDQADgDAAgFQAAgGgDgDQgCgBgFAAg");
	this.shape_989.setTransform(530.2446,325.4428,1.8904,1.8904);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#1D1D1B").s().p("AgMAYIAAgCIAGgCIABgBIAAgmIgLAAIgDAJIgCAAIgCgNIAvAAIgDANIgCAAIgCgJIgLAAIAAAmIABABIAFACIAAACg");
	this.shape_990.setTransform(517.6735,325.4428,1.8904,1.8904);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#1D1D1B").s().p("AANAXIgEgCIgDgDIgDgEIgCgFIgDgFIgBgCIgBAAIgEAAIAAARQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIAEABIAAACIgXAAIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAXAAIAAABIgEACIgBABIAAASIAFAAIACAAIABgBIACgCIACgEIAEgMIABgCIABgBIACAAIANAAIAAACQgFAAgCACQgDACgCAEIgEAGIgEAFIAPAVIADACIADABIABACIgJAAg");
	this.shape_991.setTransform(508.836,325.49,1.8904,1.8904);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#1D1D1B").s().p("AgTAYIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAmAAIgDAMIgCAAIgCgIIgOAAIAAASIAIAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIABgFIADAAIAAAHIAAAHIgDAAIgBgFIgCgBIgIAAIAAATIAPAAIAEgJIADAAIgBANIgBAAg");
	this.shape_992.setTransform(498.6752,325.4428,1.8904,1.8904);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#1D1D1B").s().p("AgFAYIgLAAIAAgCIAFgCIABgBIABgCIAAgkIgLAAIgEAJIgCAAIgBgNIAiAAIAAABIgFACIgBABIAAAQIAHAAQALAAAEADQAFACAAAHQAAAGgGAFQgHAEgKAAgAABAAIAAAUIAEABQAFAAADgDQADgEAAgEQAAgGgDgDQgCgBgGAAg");
	this.shape_993.setTransform(488.4199,325.4428,1.8904,1.8904);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#1D1D1B").s().p("AgLAYIgLAAIAAgCIAFgBIABgBIAAgnIgBgBIgFgCIAAgBIAoAAIgCANIgDAAIgCgJIgPAAIAAARIAGgBQAMAAAEADQAFACgBAHQAAAHgFAEQgHAEgKAAgAgEAAIAAAUIAEABQAFAAADgDQADgDgBgFQABgFgDgDQgDgCgFAAg");
	this.shape_994.setTransform(478.3536,325.4428,1.8904,1.8904);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#1D1D1B").s().p("AgUATQgIgHAAgLQAAgMAIgGQAIgHANAAQANAAAHAGQAIAHAAALQAAALgIAHQgIAHgNAAQgOAAgGgGgAgLgQQgEAGAAAKQAAAKAEAGQAEAGAHAAQAJAAADgFQAEgFAAgMQAAgJgEgGQgEgGgIAAQgIAAgDAFg");
	this.shape_995.setTransform(467.3421,325.3955,1.8904,1.8904);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#1D1D1B").s().p("AAMAcIAAgVIgLAAIgMAVIgMAAIAOgXQgEgBgEgEQgDgDAAgHQAAgIAFgEQAHgGAJAAIAXAAIAAA4gAgHgRQgCADAAAEQAAAEACAEQAEACAFAAIAKAAIAAgUIgKAAQgGAAgDADg");
	this.shape_996.setTransform(1316.454,297.087,1.8904,1.8904);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#1D1D1B").s().p("AAOAcIAAgpIgCACIgBADIgYAkIgMAAIAAg4IAMAAIAAAoIgBADIABAAIAagrIANAAIAAA4g");
	this.shape_997.setTransform(1305.2062,297.087,1.8904,1.8904);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#1D1D1B").s().p("AAVAiIAAgLIgqAAIAAALIgKAAIAAgTIAGAAIADgGIABgMIACgeIArAAIAAAwIAIAAIAAATgAgMAJIgCAGIAaAAIAAgoIgVAAg");
	this.shape_998.setTransform(1292.7297,298.174,1.8904,1.8904);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#1D1D1B").s().p("AgUAcIAAg4IAoAAIAAAJIgcAAIAAAQIAZAAIAAAHIgZAAIAAARIAdAAIAAAHg");
	this.shape_999.setTransform(1282.049,297.087,1.8904,1.8904);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#1D1D1B").s().p("AgcAcIAAgIIACAAIACAAQAEAAACgDQACgEAAgIIACghIArAAIAAA4IgMAAIAAgwIgVAAIgCAbQAAALgEAFQgDAGgKAAg");
	this.shape_1000.setTransform(1269.9979,297.2288,1.8904,1.8904);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#1D1D1B").s().p("AgSAWQgHgHAAgNIAAgDQAAgNAHgIQAIgHALAAQALAAAIAGQAHAGAAAIIAAABIgMAAIAAgBQAAgFgEgDQgDgDgHAAQgGAAgEAEQgEAEgBAKIAAAFQAAAIAFAFQAEAFAGAAQAHAAADgDQAEgDAAgFIAAgBIAMAAIAAABQgCAJgFAFQgHAGgMAAQgLAAgIgIg");
	this.shape_1001.setTransform(1258.8919,297.1343,1.8904,1.8904);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#1D1D1B").s().p("AARAcIgFgNIgZAAIgFANIgLAAIAYg4IALAAIAYA4gAgBgOIgJAVIATAAIgJgVIAAgDIAAAAg");
	this.shape_1002.setTransform(1247.4551,297.087,1.8904,1.8904);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#1D1D1B").s().p("AAOAcIAAgYIgbAAIAAAYIgLAAIAAg4IALAAIAAAYIAbAAIAAgYIALAAIAAA4g");
	this.shape_1003.setTransform(1235.7347,297.087,1.8904,1.8904);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#1D1D1B").s().p("AgTAWQgIgGAAgOIAAgDQAAgNAIgIQAIgHALAAQAMAAAIAHQAIAIAAANIAAADQAAAOgIAGQgIAIgMAAQgLAAgIgIgAgLgQQgEAGAAAIIAAAEQAAAJAEAFQAFAFAGAAQAHAAAFgFQAEgEAAgKIAAgEQAAgIgEgGQgFgEgHAAQgGAAgFAEg");
	this.shape_1004.setTransform(1219.3357,297.1343,1.8904,1.8904);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#1D1D1B").s().p("AgTAcIAAg4IAnAAIAAAJIgcAAIAAAvg");
	this.shape_1005.setTransform(1209.2694,297.087,1.8904,1.8904);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#1D1D1B").s().p("AgTAWQgIgGAAgOIAAgDQAAgNAIgIQAIgHALAAQALAAAJAHQAIAIAAANIAAADQAAANgIAHQgIAIgMAAQgLAAgIgIgAgKgQQgFAGAAAIIAAAEQAAAKAFAEQADAFAHAAQAHAAAEgFQAFgEAAgKIAAgEQAAgIgFgGQgEgEgHAAQgGAAgEAEg");
	this.shape_1006.setTransform(1198.0216,297.1343,1.8904,1.8904);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#1D1D1B").s().p("AAOAcIAAgYIgbAAIAAAYIgLAAIAAg4IALAAIAAAYIAbAAIAAgYIAMAAIAAA4g");
	this.shape_1007.setTransform(1185.7341,297.087,1.8904,1.8904);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#1D1D1B").s().p("AAVAiIAAgLIgpAAIAAALIgLAAIAAgTIAGAAIACgGIACgMIACgeIArAAIAAAwIAIAAIAAATgAgKgDIgCAMIgCAGIAbAAIAAgoIgWAAg");
	this.shape_1008.setTransform(1173.3049,298.174,1.8904,1.8904);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#1D1D1B").s().p("AgTAWQgIgHAAgNIAAgDQAAgNAIgIQAIgHALAAQAMAAAIAHQAIAIAAANIAAADQAAAOgIAGQgIAIgMAAQgLAAgIgIgAgKgQQgFAGAAAIIAAAEQAAAKAFAEQAEAFAGAAQAIAAADgFQAFgEAAgKIAAgEQAAgIgFgGQgDgEgIAAQgGAAgEAEg");
	this.shape_1009.setTransform(1160.9701,297.1343,1.8904,1.8904);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#1D1D1B").s().p("AgWAcIAAg4IAWAAQALAAAGAGQAGAEAAAIQAAAKgGADQgGAFgLAAIgKAAIAAAUgAgKAAIAKAAQAGAAADgCQACgEAAgEQAAgDgCgEQgDgCgGAAIgKAAg");
	this.shape_1010.setTransform(1150.1477,297.087,1.8904,1.8904);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#1D1D1B").s().p("AAOAcIAAgpIgCACIgBADIgYAkIgMAAIAAg4IAMAAIAAAoIgBADIABAAIAagrIANAAIAAA4g");
	this.shape_1011.setTransform(1138.2856,297.087,1.8904,1.8904);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#1D1D1B").s().p("AgWAcIAAg4IAWAAQAKAAAHAGQAGAEAAAIQAAAKgGADQgHAFgKAAIgKAAIAAAUgAgKAAIAKAAQAGAAACgCQADgDAAgFQAAgDgDgEQgCgCgGAAIgKAAg");
	this.shape_1012.setTransform(1127.3686,297.087,1.8904,1.8904);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#1D1D1B").s().p("AANAcIAAgvIgaAAIAAAvIgLAAIAAg4IAxAAIAAA4g");
	this.shape_1013.setTransform(1115.6483,297.087,1.8904,1.8904);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#1D1D1B").s().p("AAUAcIAAg4IAMAAIAAA4gAgfAcIAAg4IAMAAIAAAWIALAAQALAAAFAFQAGAEAAAHQAAAJgGAFQgFAEgLAAgAgTAVIAKAAQAGAAADgDQACgCAAgGQAAgEgCgCQgDgDgGAAIgKAAg");
	this.shape_1014.setTransform(1098.0677,297.087,1.8904,1.8904);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#1D1D1B").s().p("AgFAcIAAgvIgTAAIAAgJIAxAAIAAAJIgTAAIAAAvg");
	this.shape_1015.setTransform(1085.6857,297.087,1.8904,1.8904);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#1D1D1B").s().p("AAMAcIgVgYIgFAAIAAAYIgMAAIAAg4IAMAAIAAAYIAEAAIAWgYIANAAIgZAbIAbAdg");
	this.shape_1016.setTransform(1075.9503,297.087,1.8904,1.8904);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#1D1D1B").s().p("AgUAcIAAg4IApAAIAAAJIgeAAIAAAQIAaAAIAAAHIgaAAIAAARIAeAAIAAAHg");
	this.shape_1017.setTransform(1065.0333,297.087,1.8904,1.8904);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#1D1D1B").s().p("AgQAcIAAgvIgMAAIAAgJIAZAAIAAAWIAKAAQAMAAAFAFQAGAEgBAHQABAJgGAFQgFAEgMAAgAgDAVIAJAAQAGAAADgDQADgDgBgFQAAgDgCgDQgDgDgGAAIgJAAg");
	this.shape_1018.setTransform(1053.7855,297.087,1.8904,1.8904);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#1D1D1B").s().p("AgWAcIAAg4IApAAIAAAJIgdAAIAAAOIALAAQALAAAFAFQAGADAAAJQAAAHgGAFQgFAFgLgBgAgKAVIAKAAQAGAAADgDQADgCAAgEQAAgEgDgDQgCgDgHAAIgKAAg");
	this.shape_1019.setTransform(1043.2467,297.087,1.8904,1.8904);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#1D1D1B").s().p("AgTAWQgIgGAAgOIAAgDQAAgNAIgIQAIgHALAAQAMAAAIAHQAIAIAAANIAAADQAAAOgIAGQgIAIgMAAQgLAAgIgIgAgKgQQgFAGAAAIIAAAEQAAAKAFAEQAEAFAGAAQAHAAAEgFQAFgEAAgKIAAgEQAAgIgFgGQgEgEgHAAQgGAAgEAEg");
	this.shape_1020.setTransform(1031.4791,297.1343,1.8904,1.8904);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#1D1D1B").s().p("AgMASQgEgCAAgHQAAgFAFgEQAGgDAGAAIAGAAIAAgFQAAgEgBgBQgDgCgDAAQgDAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAIgIAAIACgFQADgEADgBQADgCAEAAQAIAAADADQAEADAAAGIAAAVQAAAFABAEIAAAAIgIAAIgBgFQgEAGgFAAQgHAAgDgEgAgFADQgDADAAADQAAADABACQACABAEAAQACAAADgBQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAgBIAAgKIgEAAQgEAAgEADg");
	this.shape_1021.setTransform(816.4482,359.1861,1.8904,1.8904);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgQAAIAAAjIgIAAIAAgpIAfAAIAAApg");
	this.shape_1022.setTransform(808.2723,359.1861,1.8904,1.8904);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#1D1D1B").s().p("AAJAVIAAgeIgQAeIgIAAIAAgpIAIAAIAAAdIAQgdIAHAAIAAApg");
	this.shape_1023.setTransform(799.9547,359.1861,1.8904,1.8904);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#1D1D1B").s().p("AgDAVIAAgjIgMAAIAAgGIAfAAIAAAGIgMAAIAAAjg");
	this.shape_1024.setTransform(792.3459,359.1861,1.8904,1.8904);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#1D1D1B").s().p("AgMAQQgFgFAAgIIAAgEQAAgJAFgGQAFgFAHAAQAIAAAFAFQAFAFAAAJIAAAEQAAAKgFAEQgEAGgJAAQgHAAgFgGgAgHgLQgCADAAAHIAAADQAAAHACAEQADADAEAAQAKAAABgNIAAgEQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_1025.setTransform(781.1454,359.1861,1.8904,1.8904);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#1D1D1B").s().p("AgMAVIAAgpIAYAAIAAAGIgQAAIAAAjg");
	this.shape_1026.setTransform(774.6708,359.1861,1.8904,1.8904);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#1D1D1B").s().p("AgMAQQgEgEgBgJIAAgEQAAgIAFgHQAFgFAHAAQAIAAAFAFQAFAFAAAJIAAAEQAAAKgFAEQgEAGgJAAQgHAAgFgGgAgGgLQgDAEAAAGIAAADQAAAHADAEQACADAEAAQALAAAAgNIAAgEQAAgGgDgEQgDgEgFAAQgEAAgCAEg");
	this.shape_1027.setTransform(767.062,359.1861,1.8904,1.8904);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgQAAIAAASIgHAAIAAgpIAHAAIAAASIAQAAIAAgSIAIAAIAAApg");
	this.shape_1028.setTransform(758.8389,359.1861,1.8904,1.8904);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgQAAIAAASIgHAAIAAgpIAHAAIAAASIAQAAIAAgSIAIAAIAAApg");
	this.shape_1029.setTransform(750.5212,359.1861,1.8904,1.8904);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#1D1D1B").s().p("AgMASQgEgCAAgHQABgGAFgDQAFgDAGAAIAHAAIAAgFQgBgEgBgBQgCgCgEAAQgDAAgCACQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAIgIAAQAAgCADgDQACgEADgBQADgCAEAAQAHAAAEADQAEADAAAGIAAAVQAAAFABAEIAAAAIgIAAIAAgFQgEAGgGAAQgHAAgDgEgAgEADQgEACAAAEQAAADACACQABABAEAAQACAAADgBQACAAACgEIAAgKIgFAAQgEAAgDADg");
	this.shape_1030.setTransform(742.4398,359.1861,1.8904,1.8904);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#1D1D1B").s().p("AgYAVIAAgpIAIAAIAAAjIANAAIAAgjIAHAAIAAAjIANAAIAAgjIAIAAIAAApg");
	this.shape_1031.setTransform(732.6571,359.1861,1.8904,1.8904);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#1D1D1B").s().p("AgMARQgEgFAAgIIAAgFQAAgJAEgGQAFgFAIAAQAIAAADAFQAFAEAAAKIAAAEIgZAAIAAABQAAAHACADQAEADADAAIAHgBIAEgEIAFAEQgGAHgKAAQgHAAgGgFgAgGgMQgCACAAAHIARAAIAAgBQAAgFgCgDQgCgDgEAAQgEAAgDADg");
	this.shape_1032.setTransform(723.1579,359.1861,1.8904,1.8904);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#1D1D1B").s().p("AAPAVIAAgcIgMAcIgFAAIgLgdIAAAdIgIAAIAAgpIAJAAIAMAgIANggIAKAAIAAApg");
	this.shape_1033.setTransform(713.8951,359.1861,1.8904,1.8904);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#1D1D1B").s().p("AgMARQgEgFAAgJIAAgFQAAgJAEgFQAGgFAHAAQAHAAAEAEQAFAEAAAIIgHAAQAAgFgDgCQgDgDgDAAQgEAAgCADQgCACgBAIIAAAFQAAAGACAEQADADAEAAQAEAAACgCQADgDAAgDIAHAAQAAAFgFAFQgFAEgGAAQgIAAgFgFg");
	this.shape_1034.setTransform(704.9158,359.1861,1.8904,1.8904);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#1D1D1B").s().p("AAPAVIAAgpIAIAAIAAApgAgWAVIAAgpIAHAAIAAAPIAKAAQAGAAAEADQAEADAAAGQAAAGgEAEQgEAEgGAAgAgPAPIAKAAQADAAACgCQABgCAAgEQAAgCgBgEQgCgBgDAAIgKAAg");
	this.shape_1035.setTransform(691.7304,359.1861,1.8904,1.8904);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#1D1D1B").s().p("AgLARQgFgFAAgJIAAgFQAAgJAFgFQAFgFAHAAQAHAAAEAEQAFAEAAAIIgHAAQgBgGgBgBQgDgDgEAAQgEAAgDADQgCAEAAAGIAAAFQAAAHACADQADADAEAAQAFAAACgCQABgCABgEIAHAAQAAAFgFAFQgFAEgGAAQgIAAgEgFg");
	this.shape_1036.setTransform(682.5147,359.1861,1.8904,1.8904);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#1D1D1B").s().p("AAIAVIgMgSIgEAAIAAASIgIAAIAAgpIAIAAIAAASIADAAIAMgSIAKAAIgQAUIARAVg");
	this.shape_1037.setTransform(675.3313,359.1861,1.8904,1.8904);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#1D1D1B").s().p("AgLARQgFgFAAgIIAAgFQAAgJAFgGQAEgFAIAAQAIAAAEAFQAEAFAAAJIAAAEIgZAAIAAABQAAAHACADQADADAFAAIAGgBIAEgEIAFAEQgFAHgLAAQgIAAgEgFgAgGgMQgCAEAAAFIARAAIAAgBIgCgIQgDgDgDAAQgEAAgDADg");
	this.shape_1038.setTransform(667.2027,359.1861,1.8904,1.8904);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#1D1D1B").s().p("AALAVIAAgjIgMAAIgBAOQAAALgDAFQgDAFgHAAIgCAAIAAgGIACAAQADAAABgFIACgMIABgSIAaAAIAAApg");
	this.shape_1039.setTransform(658.7432,359.1861,1.8904,1.8904);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#1D1D1B").s().p("AAIAVIAAgjIgQAAIAAAjIgHAAIAAgpIAfAAIAAApg");
	this.shape_1040.setTransform(650.8036,359.1861,1.8904,1.8904);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#1D1D1B").s().p("AAOAVIAAgcIgLAcIgFAAIgMgdIAAAdIgIAAIAAgpIAKAAIAMAgIAMggIAKAAIAAApg");
	this.shape_1041.setTransform(641.3044,359.1861,1.8904,1.8904);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#1D1D1B").s().p("AgMAQQgFgEAAgJIAAgEQAAgJAFgGQAEgFAIAAQAIAAAFAFQAEAFABAJIAAAEQAAAJgFAFQgFAGgIAAQgIAAgEgGgAgHgLQgDAEAAAGIAAADQAAAHADAEQADADAEAAQAKAAAAgNIAAgEQAAgGgDgEQgCgEgFAAQgEAAgDAEg");
	this.shape_1042.setTransform(631.8998,359.1861,1.8904,1.8904);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#1D1D1B").s().p("AAIAVIgNgSIgDAAIAAASIgIAAIAAgpIAIAAIAAASIADAAIAMgSIAJAAIgPAUIARAVg");
	this.shape_1043.setTransform(624.4801,359.1861,1.8904,1.8904);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#1D1D1B").s().p("AgLARQgFgFAAgIIAAgFQAAgJAFgGQAEgFAHAAQAJAAADAFQAFAEAAAKIAAAEIgZAAIAAABQAAAHACADQADADAEAAIAHgBIAEgEIAFAEQgGAHgKAAQgIAAgEgFgAgGgMQgBACgBAHIARAAIAAgBQAAgFgCgDQgCgDgFAAQgDAAgDADg");
	this.shape_1044.setTransform(612.7597,359.1861,1.8904,1.8904);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#1D1D1B").s().p("AAQAVIAAgpIAHAAIAAApgAgWAVIAAgpIAIAAIAAAPIAJAAQAGAAAEADQAEADAAAGQAAAHgEADQgEAEgGAAgAgOAPIAJAAQAEAAABgCQABgCAAgEQAAgDgBgDQgBgBgEAAIgJAAg");
	this.shape_1045.setTransform(603.0715,359.1861,1.8904,1.8904);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#1D1D1B").s().p("AAJAVIAAgSIgQAAIAAASIgIAAIAAgpIAIAAIAAASIAQAAIAAgSIAHAAIAAApg");
	this.shape_1046.setTransform(593.4305,359.1861,1.8904,1.8904);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#1D1D1B").s().p("AANAbIAAgMIgZAAIAAAMIgIAAIAAgSIADAAIACgDQAEgFABgJIAAgSIAaAAIAAAjIAFAAIAAASgAgDgJQgBAMgEAGIAQAAIAAgdIgKAAg");
	this.shape_1047.setTransform(584.8293,360.3675,1.8904,1.8904);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#1D1D1B").s().p("AgMAQQgFgEAAgJIAAgEQAAgJAFgGQAEgFAIAAQAIAAAFAFQAFAGAAAIIAAAEQAAAJgFAFQgFAGgIAAQgHAAgFgGgAgHgLQgDAEAAAGIAAADQAAAHADAEQADADAEAAQAKAAAAgNIAAgEQAAgGgCgEQgDgEgFAAQgEAAgDAEg");
	this.shape_1048.setTransform(576.9842,359.1861,1.8904,1.8904);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#1D1D1B").s().p("AgQAeIAAg6IAHAAIAAAFQAEgGAHAAQAHAAAEAFQAEAFAAAKIAAAEQAAAJgEAFQgFAFgGAAQgHAAgDgFIAAAVgAgIgSIAAAVQADAFAFAAQAFAAABgDQADgDAAgGIAAgFQAAgHgCgDQgEgEgDAAQgFAAgDAFg");
	this.shape_1049.setTransform(568.9974,360.6511,1.8904,1.8904);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgQAeIgHAAIAAgpIAHAAIAAAdIAQgdIAIAAIAAApg");
	this.shape_1050.setTransform(560.6324,359.1861,1.8904,1.8904);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#1D1D1B").s().p("AgQAeIAAg6IAHAAIABAFQAEgGAFAAQAJAAADAFQAEAFAAAKIAAAEQAAAKgEAEQgDAFgJAAQgFAAgEgFIAAAVgAgIgSIAAAVQACAFAGAAQAFAAACgDQACgEAAgFIAAgFQAAgGgCgEQgCgEgFAAQgFAAgDAFg");
	this.shape_1051.setTransform(552.5511,360.6511,1.8904,1.8904);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#1D1D1B").s().p("AAMAcIAAgxIgYAAIAAAxIgIAAIAAg3IApAAIAAA3g");
	this.shape_1052.setTransform(543.2882,357.8155,1.8904,1.8904);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#1D1D1B").s().p("AgKAZQgDgEgBgIIAGAAQAAAEADAEQACACADAAQADAAADgDQACgEAAgGQAAgFgCgEQgDgDgDAAQgCAAgDACIgCABIgGgBIADgcIAYAAIAAAHIgSAAIgCAPQAEgCADAAQAGAAAEAFQAEAFAAAIQAAAJgEAFQgEAFgHAAQgGAAgEgEg");
	this.shape_1053.setTransform(1848.3599,382.5795,1.8904,1.8904);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#1D1D1B").s().p("AACAdIAAgwIgKAGIAAgHIARgIIABAAIAAA5g");
	this.shape_1054.setTransform(1839.9004,382.485,1.8904,1.8904);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAKgEAFQgFAFgHAAQgGAAgFgFgAgGgLQgCADAAAHIAAADQAAAHACADQADAEADAAQAJAAAAgNIAAgEQAAgHgCgDQgDgEgEAAQgDAAgDAEg");
	this.shape_1055.setTransform(1829.6451,383.9028,1.8904,1.8904);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#1D1D1B").s().p("AAMAcIAAgNIgXAAIAAANIgHAAIAAgTIADAAIACgDQADgGABgIIAAgTIAXAAIAAAkIAFAAIAAATgAgCgKQgBAMgFAHIAPAAIAAgdIgJAAg");
	this.shape_1056.setTransform(1821.7528,385.0843,1.8904,1.8904);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#1D1D1B").s().p("AgKAXQgEgGAAgMIAAgJQAAgMADgGQAEgHAHAAQAIAAADAHQAEAFAAAMIAAAJQAAANgDAGQgEAGgIABQgGAAgEgHgAgFgTQgCAFAAAJIAAAKQAAAKACAEQACAEADAAQAEAAACgEQACgEAAgJIAAgLQAAgJgCgFQgBgDgFAAQgDAAgCADg");
	this.shape_1057.setTransform(1810.5523,382.5323,1.8904,1.8904);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#1D1D1B").s().p("AACAdIAAgwIgKAGIAAgHIAQgIIABAAIAAA5g");
	this.shape_1058.setTransform(1802.3291,382.485,1.8904,1.8904);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#1D1D1B").s().p("AgDAVIAAgjIgLAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_1059.setTransform(1792.6882,383.9028,1.8904,1.8904);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#1D1D1B").s().p("AgLARQgEgGgBgIIAAgEQABgJAEgGQAEgFAHAAQAIAAADAFQAGAGAAAJIAAADQgBAKgEAFQgFAFgHAAQgHAAgEgFgAgGgLQgDAEABAGIAAADQgBAGADAEQADAEADAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1060.setTransform(1785.8355,383.9028,1.8904,1.8904);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#1D1D1B").s().p("AgKAYQgDgFgBgOIAAgIQAAgNAEgGQAEgHAGAAQAIAAAEAHQADAFAAAMIAAAJQAAANgDAGQgEAHgIAAQgGgBgEgFgAgFgTQgCAHAAAHIAAAKQAAAIACAGQACAEADABQAFgBABgEQACgEAAgJIAAgLQAAgJgBgFQgDgDgEAAQgDAAgCADg");
	this.shape_1061.setTransform(1848.0763,356.8231,1.8904,1.8904);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#1D1D1B").s().p("AgKAZQgEgFAAgGIAHAAQAAAFACACQACACADABQADgBADgCQACgCAAgGQAAgLgJAAIgEAAIAAgFIAFAAQADAAACgCQADgDAAgEQAAgLgIABQgDgBgCADQgCAEAAADIgHAAQAAgHAEgEQAFgEAFgBQAGAAAFAFQAEAEAAAIQAAADgDAEQgBADgEACQAIACAAALQAAAHgEAEQgEAFgHABQgGAAgEgFg");
	this.shape_1062.setTransform(1840.5148,356.8231,1.8904,1.8904);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAKgEAFQgFAFgHAAQgGAAgFgFgAgGgLQgCADAAAHIAAADQAAAHACADQADAEADAAQAJAAAAgNIAAgEQAAgHgCgDQgDgEgEAAQgDAAgDAEg");
	this.shape_1063.setTransform(1829.6451,358.1936,1.8904,1.8904);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQADgFABgJIAAgTIAXAAIAAAkIAFAAIAAASgAgCgKQgBAMgFAHIAPAAIAAgdIgJAAg");
	this.shape_1064.setTransform(1821.7528,359.3751,1.8904,1.8904);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#1D1D1B").s().p("AgJAZQgEgEgBgIIAGAAIADAIQADACACAAQAEAAACgDQADgEAAgGQAAgFgDgEQgDgDgDAAQgDAAgCACIgCABIgFgBIACgcIAYAAIAAAHIgSAAIgBAPQADgCADAAQAHAAAEAFQADADAAAKQAAAKgEAEQgEAFgHAAQgFAAgEgEg");
	this.shape_1065.setTransform(1810.7413,356.8703,1.8904,1.8904);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#1D1D1B").s().p("AACAdIAAgwIgKAGIAAgHIAQgIIABAAIAAA5g");
	this.shape_1066.setTransform(1802.3291,356.7758,1.8904,1.8904);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#1D1D1B").s().p("AgDAVIAAgjIgLAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_1067.setTransform(1792.6882,358.1936,1.8904,1.8904);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#1D1D1B").s().p("AgLARQgEgGgBgIIAAgEQABgJAEgGQAEgFAHAAQAIAAADAFQAGAGAAAJIAAADQgBAKgEAFQgFAFgHAAQgHAAgEgFgAgGgLQgDAEABAGIAAADQgBAGADAEQADAEADAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1068.setTransform(1785.8355,358.1936,1.8904,1.8904);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#B5D9B9").s().p("AhiAyIAAhjIDFAAIAABjg");
	this.shape_1069.setTransform(1744.4461,383.1993,1.8904,1.8904);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#9BCEA4").s().p("AhiAyIAAhjIDFAAIAABjg");
	this.shape_1070.setTransform(1744.4461,357.7729,1.8904,1.8904);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgEQAAgJAEgFQAEgGAGAAQAIAAADAFQAEAFAAAJIAAAEIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAEQgFAHgJAAQgHAAgEgFgAgFgMQgCADAAAGIAPAAIAAgBQAAgGgCgDQgCgCgEAAQgDAAgCADg");
	this.shape_1071.setTransform(1003.1706,493.3086,1.8904,1.8904);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAPIAIAAQAGAAADADQAEADAAAGQAAAFgEAFQgDAEgGAAgAgNAPIAIAAQADAAACgCQABgCAAgEQAAgDgBgCQgCgCgDAAIgIAAg");
	this.shape_1072.setTransform(994.3331,493.3086,1.8904,1.8904);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgNAAIAAASIgHAAIAAgpIAHAAIAAASIANAAIAAgSIAHAAIAAApg");
	this.shape_1073.setTransform(985.4483,493.3086,1.8904,1.8904);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgEQAAgJAEgFQADgFAIAAQAGAAAEAEQADADABAJIgHAAQAAgFgCgDQgCgCgDAAQgEAAgCADQgCACAAAIIAAAFQAAAHACADQACADAEAAQACAAADgCQACgCAAgFIAHAAQAAAHgEAEQgFAEgFAAQgHAAgEgFg");
	this.shape_1074.setTransform(978.2176,493.3086,1.8904,1.8904);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgHAAIAAgpIAHAAIAAARIAEAAIAKgRIAJAAIgPAUIAQAVg");
	this.shape_1075.setTransform(971.5067,493.3086,1.8904,1.8904);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgEQAAgKAEgEQAEgGAGAAQAIAAAEAFQADAFAAAJIAAAEIgXAAIAAABQAAAGADAEQADADAEAAIAFgBIAFgEIADAEQgFAHgJAAQgHAAgEgFgAgFgMQgBACgCAHIAQAAIAAgBQAAgHgCgCQgCgCgEAAQgDAAgCADg");
	this.shape_1076.setTransform(963.9925,493.3086,1.8904,1.8904);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIAAAOQgBALgDAFQgCAFgGAAIgCAAIAAgHIABAAQADAAABgDIACgNIABgSIAXAAIAAApg");
	this.shape_1077.setTransform(956.1946,493.3086,1.8904,1.8904);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#1D1D1B").s().p("AAIAVIAAgjIgPAAIAAAjIgHAAIAAgpIAdAAIAAApg");
	this.shape_1078.setTransform(948.7749,493.3086,1.8904,1.8904);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#1D1D1B").s().p("AANAVIAAgcIgLAcIgDAAIgLgdIAAAdIgHAAIAAgpIAJAAIAKAgIALggIAJAAIAAApg");
	this.shape_1079.setTransform(940.0791,493.3086,1.8904,1.8904);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#1D1D1B").s().p("AgLAQQgDgEgBgJIAAgEQAAgJAEgFQAFgGAGAAQAHAAAFAFQAFAGAAAIIAAAEQAAAKgFAEQgFAGgHAAQgGAAgFgGgAgGgMQgCAFAAAGIAAADQAAAGACAEQADAEADAAQAKAAAAgNIAAgEQgBgGgCgFQgDgDgEAAQgDAAgDADg");
	this.shape_1080.setTransform(931.3834,493.3086,1.8904,1.8904);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#1D1D1B").s().p("AAGAVIgKgSIgEAAIAAASIgHAAIAAgpIAHAAIAAARIADAAIALgRIAIAAIgNAUIAOAVg");
	this.shape_1081.setTransform(924.578,493.3086,1.8904,1.8904);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgEQAAgJAEgGQAEgFAGAAQAIAAADAEQAEAGAAAKIAAADIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgCAEAAAFIAPAAIAAgBQAAgGgCgDQgCgCgEAAQgDAAgCADg");
	this.shape_1082.setTransform(1016.5923,461.5502,1.8904,1.8904);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAOIAIAAQAGABADADQAEADAAAGQAAAGgEAEQgDAEgGAAgAgNAPIAIAAQADAAACgCQABgCAAgDQAAgEgBgDQgCgBgDAAIgIAAg");
	this.shape_1083.setTransform(1007.7548,461.5502,1.8904,1.8904);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgNAAIAAASIgHAAIAAgpIAHAAIAAASIANAAIAAgSIAHAAIAAApg");
	this.shape_1084.setTransform(998.87,461.5502,1.8904,1.8904);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAGAAIAAApg");
	this.shape_1085.setTransform(991.1194,461.5502,1.8904,1.8904);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#1D1D1B").s().p("AgLARQgEgGAAgJIAAgDQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAFAAAKIAAADQAAAJgEAGQgFAFgHAAQgGAAgFgFgAgGgLQgCADAAAHIAAADQAAAHACADQADAEADAAQAJAAAAgOIAAgDQAAgHgCgDQgCgEgFAAQgEAAgCAEg");
	this.shape_1086.setTransform(983.5106,461.5502,1.8904,1.8904);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgHAAIAAgpIAHAAIAAAdIAPgdIAHAAIAAApg");
	this.shape_1087.setTransform(975.8546,461.5502,1.8904,1.8904);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#1D1D1B").s().p("AAKAbIAAgMIgaAAIAAgpIAHAAIAAAjIAOAAIAAgjIAHAAIAAAjIAFAAIgBASg");
	this.shape_1088.setTransform(968.3876,462.7317,1.8904,1.8904);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#1D1D1B").s().p("AgKATQgEgEAAgGQAAgFAFgEQAEgDAGgBIAGAAIAAgEQAAgEgCgCQgBgBgEAAQgDAAgCACQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABIgGAAIABgHIAGgEQADgCADAAQAHAAADADQAEAEgBAGIAAAUQAAAFACADIAAABIgHAAIgBgEQgFAFgDAAQgHAAgCgDgAgEADQgDACAAAEQAAADABACQACACAEAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBIAAgJIgFAAQgCAAgEACg");
	this.shape_1089.setTransform(960.4953,461.5502,1.8904,1.8904);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgEQAAgJAEgGQAEgFAGAAQAIAAAEAEQADAFAAALIAAADIgWAAIAAABQAAAGACAEQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgCAEAAAFIAPAAIAAgBQAAgGgCgDQgCgCgEAAQgDAAgCADg");
	this.shape_1090.setTransform(953.3591,461.5502,1.8904,1.8904);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAHAAAEAFQADAGAAAJIAAAEQAAAJgDAFQgEAFgHAAQgFAAgDgFIAAAVgAgHgSIAAAVQACAFAFAAQAEAAACgDQACgDAAgHIAAgEQAAgHgCgDQgCgEgEAAQgFAAgCAFg");
	this.shape_1091.setTransform(946.1756,463.0152,1.8904,1.8904);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIAKgSIAJAAIgPAUIAQAVg");
	this.shape_1092.setTransform(939.0867,461.5502,1.8904,1.8904);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgEQAAgKAEgFQAEgFAHAAQAHAAADAEQAEAFAAALIAAADIgWAAIAAABQgBAGADAEQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgBACgBAHIAQAAIAAgBQgBgHgCgCQgCgCgDAAQgDAAgDADg");
	this.shape_1093.setTransform(931.5724,461.5502,1.8904,1.8904);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAIAAADAFQADAEAAALIAAAEQAAAJgDAFQgEAFgGAAQgFAAgEgFIAAAVgAgHgSIAAAVQACAFAFAAQAEAAACgDQADgEAAgGIAAgEQAAgGgDgEQgCgEgEAAQgFAAgCAFg");
	this.shape_1094.setTransform(924.3417,463.0152,1.8904,1.8904);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgEQAAgJAEgGQAEgFAGAAQAIAAADAEQAEAGAAAKIAAADIgWAAIAAABQAAAHACADQADADADAAIAGgBIAEgEIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgCAEAAAFIAPAAIAAgBQAAgGgCgDQgCgCgEAAQgDAAgCADg");
	this.shape_1095.setTransform(1068.4833,444.5368,1.8904,1.8904);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgOAeIgHAAIAAgpIAHAAIAAAeIAOgeIAHAAIAAApg");
	this.shape_1096.setTransform(1060.969,444.5368,1.8904,1.8904);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgGAAIAAgpIAGAAIAAASIAEAAIAKgSIAJAAIgPAUIAPAVg");
	this.shape_1097.setTransform(1053.9746,444.5368,1.8904,1.8904);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgDQAAgKAEgFQAEgFAHAAQAGAAAEAEQAEAFAAAGIgGAAQAAgDgCgEQgCgCgEAAQgDAAgDADQgCAEAAAGIAAAEQAAAIACADQADADADAAQADAAADgCQACgDAAgDIAGAAQAAAFgEAFQgFAEgFAAQgHAAgEgFg");
	this.shape_1098.setTransform(1046.4603,444.5368,1.8904,1.8904);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgEQAAgJAEgGQAEgFAGAAQAIAAADAEQAEAGAAAKIAAADIgWAAIAAABQAAAHACADQADADADAAIAGgBIAEgEIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgCAEAAAFIAPAAIAAgBQAAgGgCgDQgCgCgEAAQgDAAgCADg");
	this.shape_1099.setTransform(1039.4659,444.5368,1.8904,1.8904);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#1D1D1B").s().p("AAIAVIAAgPIgIABQgFAAgEgEQgDgDgBgHIAAgNIAHAAIAAANQABAIAFAAIAIgBIAAgUIAGAAIAAApg");
	this.shape_1100.setTransform(1031.9989,444.4895,1.8904,1.8904);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgHAAIAAgpIAHAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_1101.setTransform(1024.7209,444.5368,1.8904,1.8904);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIABAFQADgGAFAAQAIAAADAFQADAEAAALIAAAEQAAAJgDAFQgEAFgGAAQgFAAgEgFIAAAVgAgHgSIAAAVQACAFAFAAQAEAAACgDQADgEAAgGIAAgEQAAgGgDgEQgCgEgEAAQgEAAgDAFg");
	this.shape_1102.setTransform(1017.2539,446.0018,1.8904,1.8904);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#1D1D1B").s().p("AgLARQgEgGAAgJIAAgDQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAFAAAKIAAADQAAAJgEAGQgEAFgIAAQgGAAgFgFgAgGgLQgCAEAAAGIAAADQAAAGACAEQADAEADAAQAJAAABgOIAAgDQAAgGgDgEQgCgEgFAAQgEAAgCAEg");
	this.shape_1103.setTransform(1009.5979,444.5368,1.8904,1.8904);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#1D1D1B").s().p("AgCAVIAAgkIgMAAIAAgFIAdAAIAAAFIgLAAIAAAkg");
	this.shape_1104.setTransform(1002.9343,444.5368,1.8904,1.8904);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgDQAAgLAEgEQADgFAIAAQAGAAAEAEQAEAFAAAGIgHAAQAAgDgCgEQgCgCgDAAQgEAAgCADQgDAEAAAGIAAAEQAAAIADADQACADAEAAQACAAADgCQACgCAAgEIAHAAQAAAFgEAFQgFAEgFAAQgHAAgEgFg");
	this.shape_1105.setTransform(996.318,444.5368,1.8904,1.8904);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgOAeIgHAAIAAgpIAHAAIAAAeIAOgeIAGAAIAAApg");
	this.shape_1106.setTransform(988.851,444.5368,1.8904,1.8904);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#1D1D1B").s().p("AgHADIAAgFIAPAAIAAAFg");
	this.shape_1107.setTransform(983.1798,443.9696,1.8904,1.8904);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#1D1D1B").s().p("AgLARQgEgGAAgJIAAgDQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAFAAAKIAAADQAAAJgEAGQgEAFgIAAQgGAAgFgFgAgGgLQgCAEAAAGIAAADQAAAGACAEQADAEADAAQAJAAABgOIAAgDQAAgGgDgEQgCgEgFAAQgEAAgCAEg");
	this.shape_1108.setTransform(977.4614,444.5368,1.8904,1.8904);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAGAAIAAApg");
	this.shape_1109.setTransform(969.8526,444.5368,1.8904,1.8904);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQADgGAAgIIABgSIAXAAIAAAjIAFAAIAAASgAgCgJQAAAKgGAIIAPAAIAAgdIgJAAg");
	this.shape_1110.setTransform(961.913,445.7182,1.8904,1.8904);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#1D1D1B").s().p("AgLARQgEgGAAgJIAAgDQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAFAAAKIAAADQAAAKgEAFQgEAFgIAAQgGAAgFgFgAgGgLQgCAEAAAGIAAADQAAAGACAEQADAEADAAQAJAAABgOIAAgDQAAgGgDgEQgDgEgEAAQgEAAgCAEg");
	this.shape_1111.setTransform(954.5878,444.5368,1.8904,1.8904);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAHAAAEAFQADAEAAALIAAAEQAAAJgDAFQgEAFgGAAQgFAAgEgFIAAAVgAgHgSIAAAVQACAFAFAAQAEAAACgDQACgDAAgHIAAgEQAAgHgCgDQgCgEgEAAQgFAAgCAFg");
	this.shape_1112.setTransform(947.2153,446.0018,1.8904,1.8904);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgNAeIgHAAIAAgpIAHAAIAAAeIANgeIAHAAIAAApg");
	this.shape_1113.setTransform(939.512,444.5368,1.8904,1.8904);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAHAAAEAFQADAGAAAJIAAAEQAAAIgDAGQgEAFgHAAQgFAAgDgFIAAAVgAgHgSIAAAVQACAFAFAAQAEAAACgDQACgDAAgHIAAgEQAAgHgCgDQgCgEgEAAQgFAAgCAFg");
	this.shape_1114.setTransform(932.0923,446.0018,1.8904,1.8904);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#1D1D1B").s().p("AAIAVIAAgjIgPAAIAAAjIgHAAIAAgpIAdAAIAAApg");
	this.shape_1115.setTransform(924.3417,444.5368,1.8904,1.8904);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgIIAAgFQAAgJAEgGQAEgFAGAAQAIAAADAEQAEAGAAAKIAAADIgWAAIAAABQAAAIACACQADADAEAAIAFgBIAEgEIAEAEQgFAHgJAAQgHAAgEgFgAgFgMQgCAEAAAFIAPAAIAAgBQAAgFgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_1116.setTransform(987.575,412.7784,1.8904,1.8904);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAPIAIAAQAGAAAEADQADAEAAAFQAAAFgDAFQgFAEgFAAgAgNAPIAIAAQAEAAABgCQABgCAAgEQAAgDgBgDQgBgBgEAAIgIAAg");
	this.shape_1117.setTransform(978.7374,412.7784,1.8904,1.8904);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAGAAIAAApg");
	this.shape_1118.setTransform(969.8526,412.7784,1.8904,1.8904);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQADgGAAgIIABgSIAXAAIAAAjIAFAAIAAASgAgCgJQAAAKgGAIIAPAAIAAgdIgJAAg");
	this.shape_1119.setTransform(961.913,413.9598,1.8904,1.8904);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#1D1D1B").s().p("AgLAQQgEgFAAgIIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAFAAAKIAAADQAAAKgEAEQgEAGgIAAQgGAAgFgGgAgGgLQgCADAAAHIAAADQAAAGACAEQADAEADAAQAJAAABgNIAAgEQAAgHgDgDQgDgEgEAAQgEAAgCAEg");
	this.shape_1120.setTransform(954.5878,412.7784,1.8904,1.8904);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAHAAAEAFQADAEAAALIAAAEQAAAJgDAFQgEAFgGAAQgFAAgEgFIAAAVgAgHgSIAAAVQACAFAFAAQAEAAACgDQACgDAAgHIAAgEQAAgHgCgDQgCgEgEAAQgFAAgCAFg");
	this.shape_1121.setTransform(947.2153,414.2434,1.8904,1.8904);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgNAeIgHAAIAAgpIAHAAIAAAdIANgdIAHAAIAAApg");
	this.shape_1122.setTransform(939.512,412.7784,1.8904,1.8904);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAHAAAEAFQADAGAAAJIAAAEQAAAIgDAGQgEAFgHAAQgFAAgDgFIAAAVgAgHgSIAAAVQACAFAFAAQAEAAACgDQACgDAAgHIAAgEQAAgHgCgDQgCgEgEAAQgFAAgCAFg");
	this.shape_1123.setTransform(932.0923,414.2434,1.8904,1.8904);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#1D1D1B").s().p("AAIAVIAAgjIgPAAIAAAjIgHAAIAAgpIAdAAIAAApg");
	this.shape_1124.setTransform(924.3417,412.7784,1.8904,1.8904);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgEQAAgJAEgFQAEgGAGAAQAIAAADAFQAEAFAAAJIAAAEIgXAAIAAABQAAAHADADQADADADAAIAGgBIAEgEIAEAEQgFAHgJAAQgHAAgEgFgAgFgMQgCAEAAAFIAPAAIAAgBIgCgJQgCgCgEAAQgDAAgCADg");
	this.shape_1125.setTransform(1006.1007,381.02,1.8904,1.8904);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAPIAJAAQAFAAADADQAEACAAAHQAAAGgEAEQgEAEgEAAgAgNAPIAJAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQABgCAAgEQAAgEgBgBQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgJAAg");
	this.shape_1126.setTransform(997.2159,381.02,1.8904,1.8904);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAHAAIAAApg");
	this.shape_1127.setTransform(988.3311,381.02,1.8904,1.8904);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#1D1D1B").s().p("AgCAVIAAgjIgMAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_1128.setTransform(981.2894,381.02,1.8904,1.8904);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#1D1D1B").s().p("AgDAmIAAgQIgEABQgGAAgEgGQgDgHAAgJQAAgIADgHQAEgGAGAAIAEABIAAgSIAGAAIAAASIAFgBQAHAAADAGQADAFAAALQAAAKgDAFQgDAGgHAAIgFgBIAAAQgAADgOIAAAeIADABQAEAAACgEQACgEAAgIQAAgHgCgEQgCgEgEAAgAgLgKQgCAEAAAIQAAAIACADQACAEAEAAIACgBIAAgeIgCAAQgEAAgCAEg");
	this.shape_1129.setTransform(973.8697,380.8782,1.8904,1.8904);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAFgDQAEgEAHAAIAFAAIAAgEQAAgEgCgBQgCgCgDAAQgCAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAABIgHAAQAAgEACgCIAFgGIAGgBQAHAAADADQADAEAAAGIAAAUQAAAFACAEIAAAAIgHAAIgBgFQgEAGgFAAQgFAAgEgDgAgEADQgDACAAAEIABAFQACABADAAQACAAACgBIAEgDIAAgKIgEAAQgEAAgDACg");
	this.shape_1130.setTransform(965.552,381.02,1.8904,1.8904);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#1D1D1B").s().p("AgVAVIAAgpIAHAAIAAAjIAMAAIAAgjIAFAAIAAAjIAMAAIAAgjIAHAAIAAApg");
	this.shape_1131.setTransform(956.5727,381.02,1.8904,1.8904);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQADgFABgJIAAgSIAXAAIAAAjIAFAAIAAASgAgDgJQAAAKgEAIIAOAAIAAgdIgJAAg");
	this.shape_1132.setTransform(947.1681,382.2014,1.8904,1.8904);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgNAAIAAASIgHAAIAAgpIAHAAIAAASIANAAIAAgSIAHAAIAAApg");
	this.shape_1133.setTransform(939.323,381.02,1.8904,1.8904);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAEgDQAGgEAGAAIAEAAIAAgEQABgEgCgBQgCgCgDAAQgCAAgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAABIgHAAQAAgEACgCIAFgGQADgBADAAQAHAAADADQADADAAAHIAAAUQABAFABAEIAAAAIgIAAIgBgFQgCAGgGAAQgGAAgDgDgAgEADQgDACAAAEQAAAEACABQABABADAAIAFgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAAAIAAgKIgDAAQgEAAgDACg");
	this.shape_1134.setTransform(931.856,381.02,1.8904,1.8904);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgKAAIgBAOQAAALgCAFQgDAFgGAAIgCAAIAAgHIACAAQACAAABgDQACgDAAgKIABgSIAXAAIAAApg");
	this.shape_1135.setTransform(924.0109,381.02,1.8904,1.8904);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgJAZIgLAAIAAgpIALAAIAAAZIAJgZIALAAIAAApg");
	this.shape_1136.setTransform(771.8825,460.0851,1.8904,1.8904);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#1D1D1B").s().p("AADAVIgGgPIgCAAIAAAPIgLAAIAAgpIALAAIAAAQIACAAIAGgQIAOAAIgMATIAMAWg");
	this.shape_1137.setTransform(764.6991,460.0851,1.8904,1.8904);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgJAZIgLAAIAAgpIALAAIAAAZIAJgZIALAAIAAApg");
	this.shape_1138.setTransform(756.7122,460.0851,1.8904,1.8904);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#1D1D1B").s().p("AAFAVIAAgQIgJAAIAAAQIgLAAIAAgpIALAAIAAARIAJAAIAAgRIALAAIAAApg");
	this.shape_1139.setTransform(749.1507,460.0851,1.8904,1.8904);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#1D1D1B").s().p("AAKAbIAAgMIgTAAIAAAMIgLAAIAAgVIADAAIAEgGIACgJIAAgSIAaAAIAAAhIAGAAIAAAVgAAAgNQAAAMgEAHIAIAAIAAgXIgEAAg");
	this.shape_1140.setTransform(741.2583,461.2666,1.8904,1.8904);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#1D1D1B").s().p("AgLARQgFgFABgKIAAgCQgBgKAFgGQAEgFAHAAQAIAAAFAFQADAFAAAKIAAAFIgUAAQAAAEABADQACACADAAQAGAAAEgEIADAHIgFAEQgDACgFAAQgIAAgFgFgAgDgKQgCADABAEIAJAAIAAgBIAAgGQgBAAAAgBQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_1141.setTransform(733.4605,460.0851,1.8904,1.8904);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#1D1D1B").s().p("AgPAVIAAgpIAPAAQAHAAADADQAEADAAAGQAAADgCACQgCADgCAAIAGADQACACAAAEQAAAMgPAAgAgEAMIAFAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAIABgDIgBgDIgDgBIgFAAgAgEgDIAEAAQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAIABgDQAAgDgDgBIgEAAg");
	this.shape_1142.setTransform(726.2298,460.0851,1.8904,1.8904);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#1D1D1B").s().p("AgLAQQgFgFAAgKIAAgBQAAgKAFgGQAEgFAHAAQAIAAAEAFQAFAGAAAKIAAABQAAAKgFAFQgEAGgIAAQgIAAgDgGgAgDgJQgCADAAAGIAAABQAAAMAFAAQAGAAAAgKIAAgDQAAgGgBgDQgCgDgDAAQgCAAgBADg");
	this.shape_1143.setTransform(718.432,460.0851,1.8904,1.8904);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#1D1D1B").s().p("AAFAVIAAggIgJAAIAAAgIgLAAIAAgpIAfAAIAAApg");
	this.shape_1144.setTransform(710.9177,460.0851,1.8904,1.8904);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#1D1D1B").s().p("AgMASQgDgDAAgGQAAgGAEgDQAFgEAGAAIADAAIAAgDIAAgEIgDgBQgDAAAAAEIgMAAQAAgFAFgEQAEgEAGAAQAHAAAEAEQAEAEAAAGIAAATQAAAFABADIAAABIgLAAIgBgDQgDAEgEAAQgFAAgEgEgAgDAEQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAAFADAAIADgBIABgBIAAgJIgCAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_1145.setTransform(703.6398,460.0851,1.8904,1.8904);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#1D1D1B").s().p("AgKASQgEgDgBgGIALAAQAAAAABABQAAAAAAABQAAAAAAAAQABABAAAAIADABQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIABgEQAAgFgDAAIgFAAIAAgGIAFAAQADAAAAgFQAAgEgDAAIgDABQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABIgLAAQAAgFAFgEQADgEAGAAQAHAAAEADQAEADAAAGIgCAGIgDADQAFACAAAHQABAGgFADQgDAEgIAAQgGAAgEgEg");
	this.shape_1146.setTransform(696.5981,460.0851,1.8904,1.8904);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#1D1D1B").s().p("AgKARQgGgGAAgJIAAgCQABgKAEgGQAFgFAGAAQAJAAADAFQAFAEAAALIAAAFIgWAAQACAFABACQABACADAAQAHAAACgEIAFAHIgGAEQgEACgEAAQgIAAgEgFgAgCgKQgCADAAAEIAKAAIAAgBQAAgEgBgCQgBAAAAgBQAAAAgBAAQAAAAgBgBQgBAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAg");
	this.shape_1147.setTransform(686.1065,460.0851,1.8904,1.8904);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#1D1D1B").s().p("AANAVIAAgpIALAAIAAApgAgXAVIAAgpIALAAIAAAMIAFAAQAHAAAEAEQAEAEAAAGQAAAHgEAEQgEAEgHAAgAgMAMIAFAAQABAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgGgFAAIgFAAg");
	this.shape_1148.setTransform(676.8909,460.0851,1.8904,1.8904);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#1D1D1B").s().p("AAFAVIAAgQIgJAAIAAAQIgLAAIAAgpIALAAIAAARIAJAAIAAgRIALAAIAAApg");
	this.shape_1149.setTransform(667.5807,460.0851,1.8904,1.8904);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#1D1D1B").s().p("AAJAbIAAgMIgSAAIAAAMIgLAAIAAgVIADAAIAEgGIACgJIAAgSIAaAAIAAAhIAGAAIAAAVgAAAgNQAAAMgFAHIAJAAIAAgXIgEAAg");
	this.shape_1150.setTransform(659.7357,461.2666,1.8904,1.8904);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#1D1D1B").s().p("AgMAQQgEgFAAgKIAAgBQAAgKAEgGQAFgFAHAAQAIAAAFAFQAEAGAAAKIAAABQAAAKgEAFQgEAGgJAAQgHAAgFgGgAgEgJQgBADAAAGIAAABQAAAMAFAAQAGAAAAgKIAAgDQAAgGgCgDQgBgDgDAAQgCAAgCADg");
	this.shape_1151.setTransform(652.1741,460.0851,1.8904,1.8904);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#1D1D1B").s().p("AgQAdIAAg5IALAAIAAAEQAEgFAEABQAHgBADAFQADAFAAALIAAACQAAAKgDAFQgDAFgHAAQgEAAgDgEIAAATgAgEgRIAAATQABADADAAQADAAABgDQABgCABgGIAAgCQgBgGgBgDQgBgCgDAAQgDAAgBACg");
	this.shape_1152.setTransform(644.8016,461.5502,1.8904,1.8904);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgJAZIgLAAIAAgpIALAAIAAAZIAJgZIALAAIAAApg");
	this.shape_1153.setTransform(637.1456,460.0851,1.8904,1.8904);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#1D1D1B").s().p("AgQAdIAAg5IALAAIAAAEQAEgFAEABQAGgBAEAFQADAGABAKIAAACQgBAKgDAFQgDAFgHAAQgEAAgEgEIAAATgAgFgRIAAATQACADADAAQADAAABgDQACgCAAgGIAAgCQAAgGgCgDQgBgCgDAAQgDAAgCACg");
	this.shape_1154.setTransform(629.7731,461.5502,1.8904,1.8904);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#1D1D1B").s().p("AAFAVIAAggIgJAAIAAAgIgLAAIAAgpIAfAAIAAApg");
	this.shape_1155.setTransform(622.1171,460.0851,1.8904,1.8904);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#1D1D1B").s().p("AgLARQgFgFABgKIAAgCQAAgJADgHQAFgFAIAAQAHAAAEAFQAEAFAAAKIAAAFIgUAAQgBAFACACQACACADAAQAGAAAEgEIADAHIgFAEIgIACQgIAAgFgFgAgDgKQgBADAAAEIAJAAIAAgBIgBgGQAAAAAAgBQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_1156.setTransform(611.3419,460.0851,1.8904,1.8904);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#1D1D1B").s().p("AANAVIAAgpIALAAIAAApgAgXAVIAAgpIALAAIAAAMIAFAAQAHAAAEAEQAEAEAAAGQAAAHgEAEQgEAEgHAAgAgMAMIAGAAQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgEQAAgGgFAAIgFAAg");
	this.shape_1157.setTransform(602.0318,460.0851,1.8904,1.8904);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#1D1D1B").s().p("AAFAVIAAgQIgJAAIAAAQIgLAAIAAgpIALAAIAAARIAJAAIAAgRIALAAIAAApg");
	this.shape_1158.setTransform(592.7689,460.0851,1.8904,1.8904);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#1D1D1B").s().p("AAFAVIAAgQIgJAAIAAAQIgLAAIAAgpIALAAIAAARIAJAAIAAgRIALAAIAAApg");
	this.shape_1159.setTransform(585.2074,460.0851,1.8904,1.8904);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#1D1D1B").s().p("AgKARQgGgFAAgKIAAgCQABgKAEgGQAEgFAHAAQAJAAADAFQAFAFAAAKIAAAFIgWAAIADAHQACACACAAQAGAAADgEIAFAHIgGAEQgEACgFAAQgHAAgEgFgAgCgKIgDAHIALAAIAAgBQAAgEgCgCQAAAAAAgBQAAAAgBAAQAAAAgBgBQgBAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAg");
	this.shape_1160.setTransform(577.8822,460.0851,1.8904,1.8904);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#1D1D1B").s().p("AgPAVIAAgpIAPAAQAHAAADADQAEACAAAHQAAADgBACQgCACgDABIAGADQACACAAAEQAAAMgPAAgAgEAMIAFAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAIABgDIgBgDIgCgBIgGAAgAgEgDIAEAAQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAIABgDQAAgEgDAAIgEAAg");
	this.shape_1161.setTransform(570.6515,460.0851,1.8904,1.8904);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#1D1D1B").s().p("AgFAVIAAggIgLAAIAAgJIAhAAIAAAJIgMAAIAAAgg");
	this.shape_1162.setTransform(563.2317,460.0851,1.8904,1.8904);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#1D1D1B").s().p("AgLARQgEgGAAgJIAAgDQAAgJAEgGQAFgFAHAAQAHAAAEAEQAEAEAAAIIgKAAQAAgDgCgCQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQAAABgBAAQgBAAAAAAQAAABAAAAQgCADAAAFIABALIABADIADABQAFAAAAgHIAKAAQAAAIgEAEQgFAEgGAAQgHAAgFgFg");
	this.shape_1163.setTransform(556.3791,460.0851,1.8904,1.8904);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#1D1D1B").s().p("AgPAdIAAg5IAKAAIAAAEQAEgFAEABQAGgBAEAFQADAFAAALIAAACQAAAKgDAFQgDAFgHAAQgFAAgCgEIAAATgAgEgRIAAATQABADADAAQADAAABgDQACgCgBgGIAAgCQABgGgCgDQgBgCgDAAQgDAAgBACg");
	this.shape_1164.setTransform(549.2429,461.5502,1.8904,1.8904);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#1D1D1B").s().p("AgMASQgDgEAAgFQAAgGAEgDQAGgEAFAAIAEAAIAAgDIgBgEIgDgBQgDAAAAAEIgLAAQAAgFAEgEQAEgEAGAAQAHAAAEAEQAEADAAAHIAAATQAAAFABADIAAABIgLAAIgBgDQgDAEgEAAQgFAAgEgEgAgCAEQgBAAAAABQAAAAAAABQgBAAAAABQAAABAAAAQAAAFAEAAIACgBIACgBIAAgJIgDAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAABg");
	this.shape_1165.setTransform(541.8232,460.0851,1.8904,1.8904);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#1D1D1B").s().p("AAKAbIAAgMIgTAAIAAAMIgLAAIAAgVIADAAIAEgGIACgJIAAgSIAaAAIAAAhIAGAAIAAAVgAAAgNQAAAMgEAHIAIAAIAAgXIgEAAg");
	this.shape_1166.setTransform(534.0253,461.2666,1.8904,1.8904);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#1D1D1B").s().p("AgMAdIAAgJIABAAIAEgBIACgDIABgDIgMgqIAMAAIAEAYIAFgYIAMAAIgNAwQgEALgIAAg");
	this.shape_1167.setTransform(526.7474,461.692,1.8904,1.8904);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgKIAAgDQAAgJAEgGQAEgFAIAAQAHAAAEAEQAEAFAAAHIgKAAIgBgFQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgBADAAAFIABALIABADIACABQAGAAAAgHIAKAAQAAAHgEAFQgFAEgGAAQgHAAgFgFg");
	this.shape_1168.setTransform(519.942,460.0851,1.8904,1.8904);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#1D1D1B").s().p("AgMAQQgEgFAAgKIAAgBQAAgKAEgGQAFgFAHAAQAIAAAEAFQAFAGAAAKIAAABQAAAKgFAFQgDAGgJAAQgHAAgFgGgAgEgJQgBADAAAGIAAABQAAAMAFAAQAGAAAAgKIAAgDQAAgGgCgDQgBgDgDAAQgCAAgCADg");
	this.shape_1169.setTransform(512.664,460.0851,1.8904,1.8904);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#1D1D1B").s().p("AgPAcIAAg4IAfAAIAAAKIgUAAIAAAug");
	this.shape_1170.setTransform(506.5203,458.7146,1.8904,1.8904);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgJAZIgLAAIAAgpIALAAIAAAZIAJgZIALAAIAAApg");
	this.shape_1171.setTransform(996.318,326.1989,1.8904,1.8904);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#1D1D1B").s().p("AADAVIgFgQIgEAAIAAAQIgLAAIAAgpIALAAIAAAQIAEAAIAEgQIAOAAIgKATIALAWg");
	this.shape_1172.setTransform(989.1345,326.1989,1.8904,1.8904);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#1D1D1B").s().p("AgQAeIAAg6IALAAIAAAEQADgFAFAAQAHAAADAFQADAEABALIAAADQgBAKgDAFQgDAFgHAAQgEAAgDgEIAAAUgAgEgRIAAATQAAADAEAAQADAAACgDIABgHIAAgDIgBgJQgCgDgDAAQgCAAgCADg");
	this.shape_1173.setTransform(981.2894,327.664,1.8904,1.8904);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#1D1D1B").s().p("AgMASQgDgDAAgGQAAgHAEgCQAEgDAHgBIADAAIAAgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgEAAAAAEIgLAAQAAgFAFgEQAFgEAFAAQAHAAAEADQADAEAAAHIAAATQAAAFACAEIAAAAIgLAAIgBgDQgDAEgEAAQgFAAgEgEgAgDAEIgBAEQAAAFADAAIACAAIACgCIAAgJIgCAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_1174.setTransform(973.9642,326.1989,1.8904,1.8904);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#1D1D1B").s().p("AAFAVIAAggIgJAAIAAAgIgLAAIAAgpIAfAAIAAApg");
	this.shape_1175.setTransform(966.5445,326.1989,1.8904,1.8904);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#1D1D1B").s().p("AgLAQQgEgEgBgKIAAgCQABgKAEgFQAEgGAHAAQAIAAAEAFQAFAFAAAKIAAAFIgWAAQAAAEADADQABACADAAQAGgBADgDIAFAGQgCADgEACQgFACgEAAQgGAAgGgGgAgDgKQgCADAAAEIALAAIAAgBIgBgGQgBAAAAgBQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAg");
	this.shape_1176.setTransform(955.7693,326.1989,1.8904,1.8904);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#1D1D1B").s().p("AANAVIAAgpIALAAIAAApgAgXAVIAAgpIALAAIAAAMIAFAAQAHAAAEAEQAEAEAAAGQAAAHgEAEQgEAEgHAAgAgMAMIAGAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgGgFAAIgFAAg");
	this.shape_1177.setTransform(946.4592,326.1989,1.8904,1.8904);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#1D1D1B").s().p("AAFAVIAAgQIgJAAIAAAQIgLAAIAAgpIALAAIAAARIAJAAIAAgRIALAAIAAApg");
	this.shape_1178.setTransform(937.1963,326.1989,1.8904,1.8904);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#1D1D1B").s().p("AgPAVIAAgpIALAAIAAAMIAEAAQAHAAAFAEQAFAEgBAGQABAGgFAFQgFAEgHAAgAgEAMIAEAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgGgFAAIgEAAg");
	this.shape_1179.setTransform(929.9656,326.1989,1.8904,1.8904);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#1D1D1B").s().p("AAHAVIAAggIgHAAIAAAMQgBALgCAEQgEAFgFAAIgEAAIgBgJIACAAQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBQABgDABgFIAAgUIAbAAIAAApg");
	this.shape_1180.setTransform(921.9315,326.1989,1.8904,1.8904);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#1D1D1B").s().p("AgMASQgDgDAAgGQAAgGAEgDQADgDAIgBIAEAAIAAgDIgBgEIgDgBQgDAAAAAEIgLAAQAAgFAEgEQAFgEAFAAQAHAAAEADQAEAFAAAGIAAATQAAAFABAEIAAAAIgLAAIgBgDQgDAEgEAAQgEAAgFgEgAgDAEIgBAEQAAAFAEAAIACAAIACgCIAAgJIgDAAIgEACg");
	this.shape_1181.setTransform(914.8898,326.1989,1.8904,1.8904);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#1D1D1B").s().p("AAFAVIAAgQIgJAAIAAAQIgLAAIAAgpIALAAIAAARIAJAAIAAgRIALAAIAAApg");
	this.shape_1182.setTransform(907.5173,326.1989,1.8904,1.8904);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#1D1D1B").s().p("AgMAQQgEgFAAgKIAAgCQAAgKAFgEQAEgGAHAAQAIAAAFAGQAEAFAAAJIAAADQAAAJgEAFQgFAGgIAAQgHAAgFgGgAgDgJQgCADAAAFIAAADQAAAKAFABQAGAAAAgKIAAgEQAAgFgBgDQgCgDgDAAQgCAAgBADg");
	this.shape_1183.setTransform(899.9558,326.1989,1.8904,1.8904);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgJAZIgLAAIAAgpIALAAIAAAZIAJgZIALAAIAAApg");
	this.shape_1184.setTransform(892.4415,326.1989,1.8904,1.8904);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#1D1D1B").s().p("AAIAbIAAgMIgaAAIAAgpIALAAIAAAgIAJAAIAAggIALAAIAAAgIAGAAIgBAVg");
	this.shape_1185.setTransform(884.7855,327.3804,1.8904,1.8904);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#1D1D1B").s().p("AgMASQgDgDAAgGQAAgGAEgDQAEgDAHgBIADAAIAAgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgEAAAAAEIgLAAQAAgFAFgEQAFgEAFAAQAHAAAEADQADAEAAAHIAAATIACAJIAAAAIgLAAIgBgDQgDAEgEAAQgFAAgEgEgAgDAEIgBAEQAAAFADAAIADAAIABgCIAAgJIgCAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_1186.setTransform(876.9877,326.1989,1.8904,1.8904);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#1D1D1B").s().p("AAIAcIAAgYIgQAAIAAAYIgLAAIAAg3IALAAIAAAWIAQAAIAAgWIAMAAIAAA3g");
	this.shape_1187.setTransform(868.7173,324.7811,1.8904,1.8904);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#1D1D1B").s().p("AAKAZIAAgTIgJAAIgJATIgKAAIALgVIgGgEQgCgCAAgHQAAgHAEgEQAEgEAIAAIASAAIAAAxgAgFgPQgBACAAAEQAAAEABADQADACAEAAIAIAAIAAgRIgIAAQgEAAgDACg");
	this.shape_1188.setTransform(723.8196,430.3116,1.8904,1.8904);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#1D1D1B").s().p("AALAZIAAglIgUAlIgKAAIAAgxIAJAAIAAAkIABgCIABgCIASggIAKAAIAAAxg");
	this.shape_1189.setTransform(715.0293,430.3116,1.8904,1.8904);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#1D1D1B").s().p("AALAZIAAgWIgVAAIAAAWIgJAAIAAgxIAJAAIAAAVIAVAAIAAgVIAJAAIAAAxg");
	this.shape_1190.setTransform(705.3884,430.3116,1.8904,1.8904);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#1D1D1B").s().p("AgQAZIAAgxIAgAAIAAAHIgXAAIAAAOIAUAAIAAAGIgUAAIAAAPIAYAAIAAAHg");
	this.shape_1191.setTransform(696.9762,430.3116,1.8904,1.8904);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#1D1D1B").s().p("AALAZIAAgUIgLABQgKAAgEgEQgFgDABgIIAAgPIAJAAIAAAOQAAAGADACQACACAFAAIAKgBIAAgXIAJAAIAAAxg");
	this.shape_1192.setTransform(688.0914,430.3116,1.8904,1.8904);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#1D1D1B").s().p("AAOAZIgEgLIgUAAIgEALIgIAAIASgxIAJAAIASAxgAAAgMIgBACIgGARIAOAAIgGgRIgBgCIAAgDg");
	this.shape_1193.setTransform(679.2066,430.2644,1.8904,1.8904);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#1D1D1B").s().p("AALAZIAAgWIgVAAIAAAWIgJAAIAAgxIAJAAIAAAVIAVAAIAAgVIAJAAIAAAxg");
	this.shape_1194.setTransform(670.0382,430.3116,1.8904,1.8904);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#1D1D1B").s().p("AgNAWQgGgEAAgJIAAAAIAKAAIAAAAQAAAFACADQAEACADAAQAFAAADgCQADgDAAgEQAAgDgDgCQgCgDgFAAIgGAAIAAgFIAGAAQADAAADgCQACgCAAgDQAAgDgCgDQgCgCgFAAQgEAAgCACQgDADAAAEIAAAAIgJAAIAAAAQAAgHAFgEQAFgFAIAAQAIAAAGAEQAEAEAAAGQAAAFgCACQgCACgEACQAEAAADADQADADAAAEQAAAIgFAEQgGAEgIAAQgJAAgFgEg");
	this.shape_1195.setTransform(660.9171,430.2644,1.8904,1.8904);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#1D1D1B").s().p("AgPAUQgGgHAAgMIAAgBQAAgNAGgFQAHgHAIAAQAIAAAIAHQAGAFAAANIAAABQAAAMgGAHQgHAGgJAAQgIAAgHgGgAgIgOQgEAFABAIIAAADQgBAJAEAEQADAEAFAAQAGAAADgEQADgEAAgJIAAgDQAAgIgDgFQgDgEgGAAQgFAAgDAEg");
	this.shape_1196.setTransform(648.6769,430.2644,1.8904,1.8904);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#1D1D1B").s().p("AgOAZIAAgxIAdAAIAAAHIgUAAIAAAqg");
	this.shape_1197.setTransform(640.7373,430.3116,1.8904,1.8904);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#1D1D1B").s().p("AgPAUQgGgHAAgMIAAgBQAAgNAGgFQAHgHAIAAQAIAAAIAHQAGAFAAANIAAABQAAAMgGAHQgGAGgKAAQgJAAgGgGgAgIgOQgEAFAAAIIAAADQAAAJAEAEQADAEAFAAQAGAAADgEQADgEAAgJIAAgDQAAgIgDgFQgDgEgGAAQgFAAgDAEg");
	this.shape_1198.setTransform(631.9471,430.2644,1.8904,1.8904);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#1D1D1B").s().p("AALAZIAAgWIgVAAIAAAWIgJAAIAAgxIAJAAIAAAVIAVAAIAAgVIAJAAIAAAxg");
	this.shape_1199.setTransform(622.3061,430.3116,1.8904,1.8904);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#1D1D1B").s().p("AgRAZIAAgxIAJAAIAAASIAIAAQAJAAAFAFQAEADAAAHQAAAIgEADQgFAFgJAAgAgIASIAIAAQAEAAADgDQABgCAAgEQAAgEgBgCQgDgCgEAAIgIAAg");
	this.shape_1200.setTransform(613.7994,430.3116,1.8904,1.8904);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#1D1D1B").s().p("AgTAZIgDAAIAAgIIACAAIACABQADAAABgDIACgLIACgcIAgAAIAAAwIgJAAIAAgpIgQAAIgBAXQgBAKgCAEQgEAFgGAAg");
	this.shape_1201.setTransform(604.0639,430.4062,1.8904,1.8904);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#1D1D1B").s().p("AAOAZIgEgLIgUAAIgEALIgJAAIATgxIAIAAIATAxgAAAgMIgBACIgGARIAOAAIgGgRIgBgCIAAgDg");
	this.shape_1202.setTransform(595.3682,430.2644,1.8904,1.8904);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#1D1D1B").s().p("AgRAZIAAgxIARAAQAJAAAEAEQAFAEAAAIQAAAIgFACQgEAFgJAAIgIAAIAAASgAgIAAIAIAAQAFAAABgCQACgCAAgEQAAgFgCgCQgBgCgFAAIgIAAg");
	this.shape_1203.setTransform(587.3341,430.3116,1.8904,1.8904);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#1D1D1B").s().p("AgQAZIAAgxIAgAAIAAAHIgWAAIAAAOIATAAIAAAGIgTAAIAAAPIAXAAIAAAHg");
	this.shape_1204.setTransform(579.3472,430.3116,1.8904,1.8904);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#1D1D1B").s().p("AARAeIAAgKIghAAIAAAKIgIAAIAAgRIAEAAIACgGQACgDAAgHIABgaIAiAAIAAAqIAGAAIAAARgAgJAIIgCAFIAVAAIAAgjIgRAAg");
	this.shape_1205.setTransform(570.2734,431.2568,1.8904,1.8904);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#1D1D1B").s().p("AgQAZIAAgxIAgAAIAAAHIgXAAIAAAOIAUAAIAAAGIgUAAIAAAPIAYAAIAAAHg");
	this.shape_1206.setTransform(561.9084,430.3116,1.8904,1.8904);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#1D1D1B").s().p("AgDAaIAAgIIgBAAQgMAAgFgEQgGgGAAgIQAAgIAGgFQAFgFAMAAIABAAIAAgHIAIAAIAAAHIAAAAQAMAAAFAFQAGAFAAAIQAAAIgGAGQgFAEgMAAIAAAAIAAAIgAAFALIAAAAQAIAAADgDQADgCAAgGQAAgFgDgDQgDgDgIAAIAAAAgAgPgIQgDADAAAFQAAAFADADQADADAIAAIABAAIAAgWIgBAAQgIAAgDADg");
	this.shape_1207.setTransform(551.8894,430.2644,1.8904,1.8904);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#1D1D1B").s().p("AgKASQgEgGAAgJIAAgEQAAgKAEgEQAEgGAGAAQAHAAAEAFQAEAFAAAJIAAAEIgXAAIAAABQAAAHADADQADADADAAIAGgBIAEgDIAEADQgFAHgJAAQgHAAgEgEgAgFgMQgCADAAAGIAPAAIAAgBQgBgGgBgDQgCgCgEAAQgDAAgCADg");
	this.shape_1208.setTransform(622.1643,580.9277,1.8904,1.8904);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAOIAJAAQAEAAAEAEQAEACAAAHQAAAHgEADQgDADgFABgAgNAPIAJAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQABgDAAgDQAAgEgBgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgJAAg");
	this.shape_1209.setTransform(613.2795,580.975,1.8904,1.8904);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAHAAIAAApg");
	this.shape_1210.setTransform(604.3948,580.975,1.8904,1.8904);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgFQAAgIAEgGQAEgFAHAAQAHAAADAFQAEADAAAIIgGAAQAAgEgCgEQgDgCgDAAQgDAAgDADQgCADAAAHIAAAFQAAAGACAEQADADADAAQAEAAACgCQACgDAAgDIAGAAQAAAGgEAEQgFAEgFAAQgHAAgEgFg");
	this.shape_1211.setTransform(597.1168,580.9277,1.8904,1.8904);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgDAAIAAASIgIAAIAAgpIAIAAIAAASIADAAIALgSIAHAAIgNAUIAPAVg");
	this.shape_1212.setTransform(590.4532,580.975,1.8904,1.8904);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#1D1D1B").s().p("AgKASQgEgGAAgJIAAgEQAAgJAEgFQAEgGAGAAQAIAAAEAFQADAEAAAKIAAAEIgWAAIAAABQAAAGACAEQADADAEAAIAFgBIAEgDIAEADQgFAHgJAAQgHAAgEgEgAgFgMQgCAEAAAFIAPAAIAAgBQAAgFgCgEQgCgCgEAAQgDAAgCADg");
	this.shape_1213.setTransform(582.9389,580.9277,1.8904,1.8904);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#1D1D1B").s().p("AAKAVIAAgjIgKAAIgBAOQgBALgDAFQgCAFgGAAIgCAAIAAgGIABgBQADAAACgDQABgEAAgJIABgSIAYAAIAAApg");
	this.shape_1214.setTransform(575.1411,580.975,1.8904,1.8904);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#1D1D1B").s().p("AAHAVIAAgjIgNAAIAAAjIgHAAIAAgpIAbAAIAAApg");
	this.shape_1215.setTransform(567.7686,580.975,1.8904,1.8904);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#1D1D1B").s().p("AANAVIAAgcIgKAcIgFAAIgKgdIAAAdIgHAAIAAgpIAIAAIALAfIALgfIAJAAIAAApg");
	this.shape_1216.setTransform(559.0729,580.975,1.8904,1.8904);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#1D1D1B").s().p("AgLARQgFgFAAgJIAAgEQAAgJAFgFQAFgGAGAAQAHAAAFAGQAEAFAAAIIAAAEQAAAKgEAEQgEAGgIAAQgGAAgFgFgAgGgLQgCAEgBAGIAAADQABAHACADQADAEADAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1217.setTransform(550.3771,580.9277,1.8904,1.8904);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgDAAIAAASIgIAAIAAgpIAIAAIAAASIADAAIAKgSIAIAAIgNAUIAOAVg");
	this.shape_1218.setTransform(543.4772,580.975,1.8904,1.8904);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#1D1D1B").s().p("AgKASQgDgFgBgKIAAgDQAAgKAEgGQAEgFAHAAQAHAAAEAFQADAEAAALIAAADIgWAAIAAABQAAAGACAEQADADAEAAIAFgBIAFgEIADAFQgEAGgKAAQgGAAgFgEgAgFgMQgBACgBAIIAQAAIAAgCQgBgGgCgDQgBgCgEAAQgDAAgDADg");
	this.shape_1219.setTransform(623.015,549.1693,1.8904,1.8904);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgNAeIgIAAIAAgpIAIAAIAAAeIANgeIAHAAIAAApg");
	this.shape_1220.setTransform(615.5953,549.2166,1.8904,1.8904);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIALgSIAIAAIgPAUIAQAVg");
	this.shape_1221.setTransform(608.5063,549.2166,1.8904,1.8904);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgDQAAgKAEgFQAFgFAGAAQAHAAADAFQAEAEAAAGIgGAAQgBgFgCgCQgBgCgEAAQgEAAgCADQgCAEAAAGIAAAEQAAAJACACQACADAEAAQAEAAABgCQADgCAAgEIAGAAQAAAHgEADQgEAEgGAAQgHAAgEgFg");
	this.shape_1222.setTransform(601.0866,549.1693,1.8904,1.8904);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#1D1D1B").s().p("AgKASQgEgFAAgKIAAgDQAAgKAEgGQAEgFAHAAQAHAAAEAFQADAEAAALIAAADIgWAAIAAABQAAAGACAEQADADAEAAIAFgBIAEgEIAEAFQgEAGgKAAQgGAAgFgEgAgFgMQgBACgBAIIAPAAIAAgCQAAgGgCgDQgBgCgEAAQgDAAgDADg");
	this.shape_1223.setTransform(593.9977,549.1693,1.8904,1.8904);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#1D1D1B").s().p("AAHAVIAAgPIgHABQgGAAgEgEQgDgEAAgGIAAgNIAHAAIAAANQAAAIAGAAIAHgBIAAgUIAHAAIAAApg");
	this.shape_1224.setTransform(586.6252,549.2166,1.8904,1.8904);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#1D1D1B").s().p("AAHAVIAAgeIgOAeIgGAAIAAgpIAGAAIAAAeIAOgeIAIAAIAAApg");
	this.shape_1225.setTransform(579.3,549.2166,1.8904,1.8904);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgOAAIAAASIgGAAIAAgpIAGAAIAAASIAOAAIAAgSIAIAAIAAApg");
	this.shape_1226.setTransform(571.6439,549.2166,1.8904,1.8904);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgGQAAgFAEgEQAGgDAGgBIAEAAIAAgEQABgEgCgBQgCgCgDAAQgBAAgDACQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAABIgHAAQAAgEACgDQACgCADgCQAEgCACAAQAGAAAEAEQADADABAGIAAAUQgBAFACADIAAABIgIAAIgBgEQgCAFgGAAQgFAAgEgDgAgEADQgDACAAAEQAAAEACABQACACACAAQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgKIgDAAQgEAAgDACg");
	this.shape_1227.setTransform(564.1769,549.1693,1.8904,1.8904);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#1D1D1B").s().p("AgCAVIAAgjIgMAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_1228.setTransform(557.4188,549.2166,1.8904,1.8904);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#1D1D1B").s().p("AgLARQgDgFgBgJIAAgEQgBgJAFgGQAEgFAHAAQAHAAAFAFQAFAGgBAJIAAADQABAJgFAGQgEAFgIAAQgGAAgFgFgAgGgLQgDAEAAAGIAAADQAAAGADAEQADAEADAAQAKAAgBgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1229.setTransform(550.5662,549.1693,1.8904,1.8904);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#1D1D1B").s().p("AgKAZQgFgGAAgJIAAgEQAAgLAFgJQAEgIAGgBIAHgDQAAAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBIAGAAIAAACQgBAHgGADIgGABQgCABgFAEQgDAFAAAEQAFgGAFAAQAIAAADAFQAEAEAAAKIAAAAQAAAJgFAGQgEAGgHAAQgGAAgEgGgAgGAAQgCADAAAHQAAAGACAFQACAEAEAAQAEAAADgEQACgEAAgIQAAgGgCgDQgDgDgEAAQgEAAgCADg");
	this.shape_1230.setTransform(543.1937,547.5153,1.8904,1.8904);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgIIAAgFQAAgJAEgGQAEgFAGAAQAHAAAEAFQAEAFAAAJIAAAEIgWAAIAAABQAAAIACACQADADADAAIAGgBIAEgDIAEAEQgFAGgJAAQgHAAgEgFgAgFgMQgCAEAAAGIAPAAIAAgBQAAgGgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_1231.setTransform(614.6028,517.4109,1.8904,1.8904);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAOIAJAAQAFAAADAEQAEACAAAHQAAAGgEAEQgDADgFABgAgNAPIAJAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQABgCAAgEQAAgEgBgCQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAIgJAAg");
	this.shape_1232.setTransform(605.718,517.4582,1.8904,1.8904);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAHAAIAAApg");
	this.shape_1233.setTransform(596.8332,517.4582,1.8904,1.8904);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIABAFQADgGAGAAQAGAAAEAFQADAFAAAKIAAAEQAAAKgDAEQgEAFgGAAQgGAAgDgFIAAAVgAgHgRIAAAVQADAEAEAAQAEAAACgDQADgEAAgFIAAgFQAAgGgDgEQgCgDgEAAQgEAAgDAFg");
	this.shape_1234.setTransform(589.3662,518.876,1.8904,1.8904);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgIIAAgFQAAgJAEgGQAEgFAGAAQAHAAAEAFQAEAFAAAJIAAAEIgWAAIAAABQAAAIACACQADADADAAIAGgBIAEgDIAEAEQgFAGgJAAQgHAAgEgFgAgFgMQgCAEAAAGIAPAAIAAgBQAAgGgCgDQgCgDgEAAQgDAAgCADg");
	this.shape_1235.setTransform(582.0883,517.4109,1.8904,1.8904);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#1D1D1B").s().p("AgDAmIAAgQIgEAAQgGABgEgGQgDgGAAgJQAAgJADgHQAEgHAGAAIAEABIAAgRIAGAAIAAASIAFgCQAHAAADAHQADAGAAAKQAAAKgDAFQgDAGgHgBIgFgBIAAARgAADgOIAAAeIADABQAEAAACgEQACgEAAgHQAAgIgCgEQgCgEgEgBgAgLgKQgCAEAAAIQAAAHACAEQACAEAEAAIACAAIAAgfIgCgBQgEABgCAEg");
	this.shape_1236.setTransform(573.6761,517.3164,1.8904,1.8904);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgJIAAgFQAAgJAEgFQAFgFAGAAQAHAAADAEQAEAFAAAHIgGAAQgBgGgCgBQgBgDgEAAQgEAAgCADQgCAEAAAGIAAAFQAAAHACADQACADAEAAQADAAACgCQADgDAAgDIAGAAQAAAHgEADQgEAEgGAAQgHAAgEgFg");
	this.shape_1237.setTransform(565.5474,517.4109,1.8904,1.8904);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAIIAAAEQAAAKgEAEQgEAGgIAAQgGAAgFgFgAgGgLQgDAEAAAGIAAADQAAAHADAEQACADAEAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1238.setTransform(558.1749,517.4109,1.8904,1.8904);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgPAeIgHAAIAAgpIAHAAIAAAeIAPgeIAHAAIAAApg");
	this.shape_1239.setTransform(550.5189,517.4582,1.8904,1.8904);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#1D1D1B").s().p("AgKAZQgFgGAAgJIAAgEQAAgLAFgJQAEgIAGgBIAHgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAGAAIAAACQgBAHgGADIgGABQgCABgFAEQgDAFAAAEQAFgGAFAAQAIAAADAFQAEAEAAAKIAAAAQAAAJgFAGQgEAGgHAAQgGAAgEgGgAgGAAQgCADAAAHQAAAGACAFQACAEAEAAQAEAAADgEQACgEAAgIQAAgGgCgDQgDgDgEAAQgEAAgCADg");
	this.shape_1240.setTransform(543.1937,515.7569,1.8904,1.8904);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#1D1D1B").s().p("AADAdIAAgwIgLAFIAAgGIARgIIABAAIAAA5g");
	this.shape_1241.setTransform(1674.6811,408.9503,1.8904,1.8904);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#1D1D1B").s().p("AgKASQgEgGAAgJIAAgDQAAgKAEgGQAEgFAGAAQAIAAADAFQAEAFAAAKIAAADIgWAAIAAABQAAAHACADQADADADAAIAGgBIAEgEIAEAFQgFAGgJAAQgHAAgEgEgAgFgMQgCAEAAAFIAPAAIAAgBQAAgFgCgEQgCgCgEAAQgDAAgCADg");
	this.shape_1242.setTransform(1664.8039,410.3209,1.8904,1.8904);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#1D1D1B").s().p("AgKASQgEgGAAgJIAAgDQAAgKAEgGQAEgFAGAAQAIAAADAFQAEAFAAAKIAAADIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgHAAgEgEgAgFgMQgCAEAAAFIAPAAIAAgBQAAgFgCgEQgCgCgEAAQgDAAgCADg");
	this.shape_1243.setTransform(1657.715,410.3209,1.8904,1.8904);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgOAAIAAASIgIAAIAAgpIAIAAIAAASIAOAAIAAgSIAGAAIAAApg");
	this.shape_1244.setTransform(1650.2007,410.3681,1.8904,1.8904);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#1D1D1B").s().p("AgKASQgEgGAAgJIAAgDQAAgLAEgFQAEgFAGAAQAIAAADAFQADAEABALIAAADIgXAAIAAABQAAAHADADQADADADAAIAGgBIAEgEIAEAFQgFAGgJAAQgHAAgEgEgAgFgMQgCACgBAHIAQAAIAAgBIgCgJQgCgCgEAAQgDAAgCADg");
	this.shape_1245.setTransform(1642.97,410.3209,1.8904,1.8904);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#1D1D1B").s().p("AANAVIAAgcIgLAcIgDAAIgLgdIAAAdIgHAAIAAgpIAJAAIAKAfIALgfIAJAAIAAApg");
	this.shape_1246.setTransform(1634.416,410.3681,1.8904,1.8904);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#1D1D1B").s().p("AgJAZQgEgEgBgIIAGAAQABAFACACQACADADAAQAEAAACgEQADgDAAgGQAAgFgDgEQgDgDgDABQgDAAgCABIgCABIgFgBIACgcIAYAAIAAAGIgSAAIgBAQQACgCAEAAQAHAAAEAFQADAEAAAJQAAAJgEAFQgDAFgIAAQgFAAgEgEg");
	this.shape_1247.setTransform(1680.8721,383.2884,1.8904,1.8904);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgFQAEgGAHAAQAHAAAFAFQAEAGAAAIIAAAEQAAAJgEAGQgEAFgIAAQgGAAgFgFgAgGgMQgDAFAAAGIAAADQAAAHADADQADAEADAAQAJAAAAgNIAAgEQAAgGgCgFQgCgDgFAAQgDAAgDADg");
	this.shape_1248.setTransform(1669.7189,384.6117,1.8904,1.8904);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#1D1D1B").s().p("AAMAcIAAgNIgXAAIAAANIgHAAIAAgTIACAAIADgDQADgGABgIIAAgTIAXAAIAAAkIAFAAIAAATgAgCgJQgBAKgFAIIAPAAIAAgdIgJAAg");
	this.shape_1249.setTransform(1661.8266,385.7932,1.8904,1.8904);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#1D1D1B").s().p("AADAdIAAgwIgMAGIAAgHIARgIIACAAIAAA5g");
	this.shape_1250.setTransform(1649.8226,383.1939,1.8904,1.8904);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#1D1D1B").s().p("AgDAVIAAgkIgLAAIAAgGIAdAAIAAAGIgMAAIAAAkg");
	this.shape_1251.setTransform(1640.1817,384.6117,1.8904,1.8904);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgFQAEgGAHAAQAHAAAFAFQAEAGAAAIIAAAEQAAAJgEAGQgEAFgIAAQgGAAgFgFgAgGgMQgCAEAAAHIAAADQAAAIACACQACAEAEAAQAJAAAAgNIAAgEQAAgHgCgEQgCgDgFAAQgEAAgCADg");
	this.shape_1252.setTransform(1633.3291,384.6117,1.8904,1.8904);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#1D1D1B").s().p("AgKAYQgEgHAAgLIAAgJQAAgNADgGQAEgGAHgBQAIAAADAHQAEAGAAAMIAAAJQAAAMgDAHQgEAFgIABQgGgBgEgFgAgFgSQgCADAAAKIAAALQAAAJACAEQACAEADABQAEAAACgFQACgDAAgKIAAgKQAAgKgCgEQgBgFgFABQgDgBgCAFg");
	this.shape_1253.setTransform(1688.1501,357.4847,1.8904,1.8904);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#1D1D1B").s().p("AACAdIAAgwIgKAGIAAgHIAQgIIABAAIAAA5g");
	this.shape_1254.setTransform(1679.9269,357.4375,1.8904,1.8904);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgFQAEgGAHAAQAHAAAFAFQAEAGAAAIIAAAEQAAAKgEAEQgFAGgHAAQgGAAgFgFgAgGgMQgDAFAAAGIAAADQAAAHADAEQADADADAAQAJAAAAgNIAAgEQAAgGgCgFQgCgDgFAAQgDAAgDADg");
	this.shape_1255.setTransform(1669.7189,358.9025,1.8904,1.8904);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#1D1D1B").s().p("AAMAcIAAgNIgXAAIAAANIgHAAIAAgTIACAAIADgDQADgGABgIIAAgTIAXAAIAAAkIAFAAIAAATgAgCgJQgBAKgFAIIAPAAIAAgdIgJAAg");
	this.shape_1256.setTransform(1661.8266,360.084,1.8904,1.8904);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#1D1D1B").s().p("AgKAZQgDgFgBgHIAGAAQABAFACACQACADADAAQAEAAACgDQACgEAAgGQAAgGgCgDQgCgCgEAAQgDAAgCABIgCABIgGgBIADgcIAYAAIAAAGIgSAAIgCAQQADgCAEAAQAHAAADAFQAEAEAAAJQAAAJgEAFQgEAFgHAAQgFAAgFgEg");
	this.shape_1257.setTransform(1650.8151,357.5792,1.8904,1.8904);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#1D1D1B").s().p("AgDAVIAAgjIgLAAIAAgGIAdAAIAAAGIgMAAIAAAjg");
	this.shape_1258.setTransform(1640.1817,358.8552,1.8904,1.8904);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgJIAAgEQAAgJAEgFQAEgGAHAAQAHAAAFAFQAEAGAAAIIAAAEQAAAKgEAEQgFAGgHAAQgGAAgFgFgAgGgMQgCADAAAIIAAADQAAAIACADQACADAEAAQAJAAAAgNIAAgEQAAgIgCgDQgCgDgFAAQgEAAgCADg");
	this.shape_1259.setTransform(1633.3291,358.9025,1.8904,1.8904);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#1D1D1B").s().p("AgTAaIAhg3IAHADIgiA4gAAMAaQgEgDAAgGIAAgGQAAgHAEgDQACgCAHAAQAHAAADACQADADAAAHIAAAGQAAAGgDADQgEAEgGAAQgGAAgDgEgAASAHQgBAAAAAAQAAABgBAAQAAABAAABQAAAAAAABIAAAGIACAEQAAABAAAAQAAAAABABQAAAAABAAQAAAAABAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAAgGQAAgBgBAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAABgAgeAAQgDgEAAgFIAAgHQAAgFADgEQADgEAHABQAHgBADAEQADAEABAFIAAAHQgBAFgDAEQgDADgHgBQgHABgDgDgAgYgUIgBAEIAAAHIABAEQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQABAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQABgBAAAAIAAgHQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBABAAAAQgBAAAAABg");
	this.shape_1260.setTransform(1895.005,326.4825,1.8904,1.8904);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#1D1D1B").s().p("AgRAVIAAgpIATAAQAGAAAFADQAEADAAAFQAAAEgCACQgCACgEABQAFAAACACQACAEAAADQAAAFgEAEQgDADgIAAgAgHAOIAIAAQAEAAACgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgBgEAAIgIAAgAgHgDIAHAAQAEAAABgBQABgBAAAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQgBgBgEAAIgHAAg");
	this.shape_1261.setTransform(1880.2128,328.042,1.8904,1.8904);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#1D1D1B").s().p("AgGAIIADgGIABgFIAAgIIAJAAIAAAIIgCAIIgFAHg");
	this.shape_1262.setTransform(1869.5321,332.1064,1.8904,1.8904);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#1D1D1B").s().p("AgOATQgEgEAAgGQAAgHAFgCQAFgEAIAAIAHAAIAAgCQAAgEgBgBQgCgCgEAAQgDAAgBABQgBABAAAAQAAAAAAABQgBAAAAABQAAABAAAAIAAABIgKAAIAAgBQAAgFAFgEQAFgEAHAAQAHAAAFAEQAFAEAAAHIAAASIAAAFIABAEIAAAAIgKAAIgBgCIAAgDQgBACgEACQgDACgEAAQgGAAgEgDgAgGADQgCACAAADQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQABACAEAAQACAAAEgDQACgCAAgEIAAgEIgHAAQgDAAgDABg");
	this.shape_1263.setTransform(1863.1994,327.9475,1.8904,1.8904);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#1D1D1B").s().p("AgEAVIAAghIgMAAIAAgIIAiAAIAAAIIgNAAIAAAhg");
	this.shape_1264.setTransform(1855.4016,328.042,1.8904,1.8904);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#1D1D1B").s().p("AAIAVIgNgSIgDAAIAAASIgKAAIAAgpIAKAAIAAARIACAAIAMgRIAMAAIgQAUIASAVg");
	this.shape_1265.setTransform(1848.4071,328.042,1.8904,1.8904);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#1D1D1B").s().p("AgNAQQgFgGAAgJIAAgBQAAgJAFgGQAGgGAIAAQAIAAAFAFQAFAGAAAKIAAACIgbAAQAAAFACADQADAEAEABQAEgBACgCQADgBACgCIAHAEQgDAFgEABQgFADgFAAQgJAAgGgGgAgGgJQgCACAAAEIARAAIAAgBQAAgEgCgCQgCgDgEAAQgFAAgCAEg");
	this.shape_1266.setTransform(1839.5696,327.9948,1.8904,1.8904);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#1D1D1B").s().p("AgLAVIAAghIgLAAIAAgIIAUAAIAAAOIAJAAQAHAAAEAEQAFADAAAGQAAAHgFADQgEAEgHAAgAgCANIAIAAQADAAACgBQACgCAAgDIgCgFQgCgCgDAAIgIAAg");
	this.shape_1267.setTransform(1830.6376,328.042,1.8904,1.8904);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#1D1D1B").s().p("AgOAZQgGgGAAgMIAAgEQAAgNAFgHQAGgIAKgBIAIgCIABgCIAJAAQAAAFgDADQgEADgIABQgIABgEAEQgDAFAAAGIAGgGQAEgCAEAAQAIAAAFAGQAFAFAAAIIAAABQAAAJgGAGQgGAGgJAAQgIAAgGgGgAgHAAQgCAEAAAFIAAABQAAAGACAEQADADAEAAQAFAAADgDQACgEAAgGIAAgBQAAgFgCgEQgDgCgFAAQgFAAgCACg");
	this.shape_1268.setTransform(1821.611,326.3407,1.8904,1.8904);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#1D1D1B").s().p("AgOAdIgCAAIAAgIIACAAIACAAQADAAADgBQACgEABgEIgQgoIAKAAIAJAcIABABIAAAAIABgEIAJgZIAJAAIgRAtQgCAGgDADQgDADgGAAg");
	this.shape_1269.setTransform(1813.3406,329.6489,1.8904,1.8904);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#1D1D1B").s().p("AgNAQQgFgGAAgJIAAgBQAAgJAFgGQAGgGAIAAQAJAAAEAEQAFAFAAAGIAAAAIgKAAQAAgCgCgDQgCgCgEAAQgEAAgCAEQgDADAAAGIAAABQAAAGACADQADAEAEABQAEAAACgDQACgCAAgDIAAAAIAKAAIAAAAQAAAGgFAFQgEAEgJAAQgIAAgGgGg");
	this.shape_1270.setTransform(1805.5428,327.9948,1.8904,1.8904);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#1D1D1B").s().p("AAIAVIAAgbIAAAAIgBACIgOAZIgKAAIAAgpIAKAAIAAAYIgBADIABAAIAPgbIAKAAIAAApg");
	this.shape_1271.setTransform(1793.1608,328.042,1.8904,1.8904);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#1D1D1B").s().p("AAOAaIAAgKIgaAAIAAAKIgKAAIAAgSIAEAAIACgGIACgbIAfAAIAAAhIAGAAIAAASgAgGACIgCAGIAOAAIAAgaIgLAAg");
	this.shape_1272.setTransform(1784.2287,329.0345,1.8904,1.8904);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#1D1D1B").s().p("AgOATQgEgEAAgGQAAgGAFgDQAFgEAIAAIAIAAIAAgCQAAgEgCgBQgCgCgEAAQgDAAgBABQgBABAAAAQAAAAAAABQgBAAAAABQAAABAAAAIAAABIgKAAIAAgBQAAgFAFgEQAFgEAHAAQAHAAAFAEQAFAEAAAHIAAASIAAAFIABAEIAAAAIgKAAIgBgFQgBACgEACQgDACgEAAQgGAAgEgDgAgGADQgCACAAADQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQABACAEAAQADAAADgDQADgDAAgDIAAgEIgHAAQgEAAgDABg");
	this.shape_1273.setTransform(1775.3912,327.9475,1.8904,1.8904);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#1D1D1B").s().p("AAWAaIAAgKIg1AAIAAgpIAKAAIAAAhIAOAAIAAghIAJAAIAAAhIANAAIAAghIALAAIAAAhIAGAAIAAASg");
	this.shape_1274.setTransform(1765.0413,329.0345,1.8904,1.8904);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#1D1D1B").s().p("AgOAQQgGgFAAgKIAAgBQAAgJAGgGQAGgGAIAAQAKAAAFAGQAGAGAAAJIAAABQAAAKgGAFQgFAGgKAAQgIAAgGgGgAgGgJQgDAEAAAFIAAABQAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAgBQAAgFgCgEQgEgEgEAAQgEAAgCAEg");
	this.shape_1275.setTransform(1753.5573,327.9948,1.8904,1.8904);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#1D1D1B").s().p("AgTAUIAAgIIABABIABAAQABAAABAAQABgBAAAAQABAAAAgBQAAgBAAAAIACgKIABgUIAeAAIAAAoIgKAAIAAghIgMAAIAAAOQgBALgCAEQgDAFgHAAg");
	this.shape_1276.setTransform(1744.2944,328.1366,1.8904,1.8904);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#1D1D1B").s().p("AAHAVIAAghIgNAAIAAAhIgLAAIAAgpIAjAAIAAApg");
	this.shape_1277.setTransform(1735.9295,328.042,1.8904,1.8904);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#1D1D1B").s().p("AAIAfIAAgcIAAAAIgBACIgOAaIgKAAIAAgpIAKAAIAAAYIgBADIABAAIAPgbIAKAAIAAApgAgIgTQgDgCgCgFIAHgEIACAGIAEABQADAAACgBIADgGIAGAEQgCAFgDACQgFADgEAAQgEAAgEgDg");
	this.shape_1278.setTransform(1723.4057,326.1517,1.8904,1.8904);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#1D1D1B").s().p("AgNAQQgFgGAAgJIAAgBQAAgJAFgGQAGgGAIAAQAIAAAFAFQAFAGAAAKIAAACIgbAAQAAAFACADQADAEAEABQAEgBACgCQADgBACgCIAHAEQgDAFgEABQgFADgFAAQgJAAgGgGgAgGgJQgCACAAAEIARAAIAAgBQAAgEgCgCQgCgDgEAAQgFAAgCAEg");
	this.shape_1279.setTransform(1714.8045,327.9948,1.8904,1.8904);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#1D1D1B").s().p("AAWAaIAAgKIg1AAIAAgpIAKAAIAAAhIAOAAIAAghIAJAAIAAAhIANAAIAAghIAKAAIAAAhIAHAAIAAASg");
	this.shape_1280.setTransform(1704.4546,329.0345,1.8904,1.8904);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#1D1D1B").s().p("AgOAZQgGgGAAgMIAAgEQAAgMAFgIQAGgIAKgBIAIgCIABgCIAJAAQAAAFgDADQgEADgIABQgIABgDAEQgDADgBAIIAAAAQACgDAEgDQAEgCAEAAQAIAAAFAGQAFAEAAAJIAAABQAAAJgGAGQgGAGgJAAQgIAAgGgGgAgHAAQgCAEAAAFIAAABQAAAGACAEQADADAEAAQAFAAADgDQACgEAAgGIAAgBQAAgFgCgEQgDgCgFAAQgEAAgDACg");
	this.shape_1281.setTransform(1692.9706,326.3407,1.8904,1.8904);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#1D1D1B").s().p("AgOAQQgGgFAAgKIAAgBQAAgJAGgGQAGgGAIAAQAKAAAFAGQAGAGAAAJIAAABQAAAKgGAFQgFAGgKAAQgIAAgGgGgAgHgJQgCAEAAAFIAAABQAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAgBQAAgFgCgEQgEgEgEAAQgDAAgEAEg");
	this.shape_1282.setTransform(1683.9913,327.9948,1.8904,1.8904);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#1D1D1B").s().p("AgEAVIAAghIgMAAIAAgIIAiAAIAAAIIgNAAIAAAhg");
	this.shape_1283.setTransform(1672.3182,328.042,1.8904,1.8904);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#1D1D1B").s().p("AgOAQQgFgGgBgJIAAgBQABgJAFgGQAGgGAIAAQAJAAAGAGQAFAGABAJIAAABQgBAJgFAGQgGAGgJAAQgIAAgGgGgAgGgJQgDADAAAGIAAABQAAAHADACQACAEAEAAQAFAAACgEQADgCAAgHIAAgBQAAgGgDgDQgCgEgFAAQgEAAgCAEg");
	this.shape_1284.setTransform(1664.284,327.9948,1.8904,1.8904);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#1D1D1B").s().p("AgEAdIAAgwIgSAAIAAgJIAtAAIAAAJIgSAAIAAAwg");
	this.shape_1285.setTransform(1651.6658,326.5297,1.8904,1.8904);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#1D1D1B").s().p("AAMAdIAAgwIgXAAIAAAwIgKAAIAAg5IAsAAIAAA5g");
	this.shape_1286.setTransform(1641.7885,326.5297,1.8904,1.8904);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#1D1D1B").s().p("AgRAXQgHgIAAgNIAAgDQAAgNAHgIQAHgHAKAAQALAAAHAHQAHAIAAANIAAADQAAANgHAIQgHAHgLAAQgKAAgHgHgAgJgQQgFAGAAAIIAAAEQAAAJAFAGQAEAEAFAAQAHAAADgEQAEgGAAgJIAAgEQAAgIgEgGQgDgFgHAAQgFAAgEAFg");
	this.shape_1287.setTransform(1630.8243,326.5297,1.8904,1.8904);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#1D1D1B").s().p("AgRAXQgHgHAAgOIAAgDQAAgOAHgHQAHgHAKAAQAKAAAIAHQAHAIAAANIAAADQAAANgHAIQgIAHgKAAQgKAAgHgHgAgKgQQgDAGAAAIIAAAEQAAAJADAGQAEAEAGAAQAGAAAEgEQAEgFAAgKIAAgEQAAgJgEgFQgEgFgGAAQgGAAgEAFg");
	this.shape_1288.setTransform(1619.8601,326.5297,1.8904,1.8904);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#1D1D1B").s().p("AAIAVIAAgPIgHAAIgIAPIgLAAIALgQIgFgDQgFgCAAgGQAAgGAFgEQAEgEAHAAIAUAAIAAApgAgEgLIgCAFQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQABACADAAIAIAAIAAgNIgIAAQgDAAgBACg");
	this.shape_1289.setTransform(1606.0603,328.042,1.8904,1.8904);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#1D1D1B").s().p("AgTAUIAAgIIABABIACAAQACAAACgDIABgKIABgUIAeAAIAAAoIgKAAIAAghIgLAAIgBAOQAAALgDAEQgCAFgHAAg");
	this.shape_1290.setTransform(1597.1283,328.1366,1.8904,1.8904);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#1D1D1B").s().p("AgOAQQgGgFAAgKIAAgBQAAgJAGgGQAGgGAIAAQAKAAAFAGQAGAGAAAJIAAABQAAAKgGAFQgFAGgKAAQgIAAgGgGgAgGgJQgDAEAAAFIAAABQAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAgBQAAgFgCgEQgEgEgEAAQgEAAgCAEg");
	this.shape_1291.setTransform(1588.7161,327.9948,1.8904,1.8904);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#1D1D1B").s().p("AATAjIAAgMIglAAIAAAMIgKAAIAAgVIAGAAIACgFIADgqIAnAAIAAAvIAHAAIAAAVgAgKgDQAAAHgBAFIgBAFIAXAAIAAgnIgTAAg");
	this.shape_1292.setTransform(1578.6498,327.6167,1.8904,1.8904);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#E1EFE3").s().p("AhiAyIAAhjIDFAAIAABjg");
	this.shape_1293.setTransform(1591.9347,382.4432,1.8904,1.8904);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#FEEAD3").s().p("AhiAyIAAhjIDFAAIAABjg");
	this.shape_1294.setTransform(1591.9347,407.8696,1.8904,1.8904);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#C8E2CA").s().p("AhiAyIAAhjIDFAAIAABjg");
	this.shape_1295.setTransform(1591.9347,357.0167,1.8904,1.8904);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#1D1D1B").s().p("AAxADIAAgFIArAAIAAAFgAgUADIAAgFIApAAIAAAFgAhbADIAAgFIAqAAIAAAFg");
	this.shape_1296.setTransform(1585.3606,736.2225,1.8904,1.8904);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#1D1D1B").s().p("AA6AFIAAgJIAqAAIAAAJgAAjAFIAAgJIAJAAIAAAJgAgUAFIAAgJIApAAIAAAJgAgrAFIAAgJIAIAAIAAAJgAhjAFIAAgJIAqAAIAAAJg");
	this.shape_1297.setTransform(1586.9675,686.0329,1.8904,1.8904);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#F192B0").s().p("AhlAVIAAgpIDLAAIAAApg");
	this.shape_1298.setTransform(1587.251,682.2049,1.8904,1.8904);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#F7BED2").s().p("AhlArIAAhVIDLAAIAABVg");
	this.shape_1299.setTransform(1587.251,678.4714,1.8904,1.8904);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#1D1D1B").s().p("ABBADIAAgFIAoAAIAAAFgAgUADIAAgFIAyAAIAAAFgAhpADIAAgFIA0AAIAAAFg");
	this.shape_1300.setTransform(1587.251,710.5133,1.8904,1.8904);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f().s("#F192B0").ss(2.8).p("AhpAAIDSAA");
	this.shape_1301.setTransform(1587.3031,707.9772,1.8904,1.8904);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#1D1D1B").s().p("AgOAVIAAgpIAOAAQAGAAAEADQAEADAAAFQAAAEgBABQgCADgDABQAEABABACQACACAAAEQAAAGgEADQgDADgHAAgAgIAPIAJAAQAHAAAAgGQAAgGgHAAIgJAAgAgIgCIAIAAQAHAAAAgGQAAgFgHgBIgIAAg");
	this.shape_1302.setTransform(1686.6851,736.4116,1.8904,1.8904);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#1D1D1B").s().p("AgLAQQgEgEAAgJIAAgEQAAgJAEgFQAFgGAGAAQAHAAAFAGQAEAFAAAIIAAAEQAAAJgEAFQgEAGgIAAQgGAAgFgGgAgGgLQgCAEAAAGIAAADQAAAHACAEQACADAEAAQAJAAABgNIAAgEQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1303.setTransform(1678.8872,736.4116,1.8904,1.8904);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#1D1D1B").s().p("AgCAVIAAgjIgMAAIAAgGIAdAAIAAAGIgLAAIAAAjg");
	this.shape_1304.setTransform(1672.2236,736.4116,1.8904,1.8904);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgGAAIAAgpIAGAAIAAASIAEAAIAKgSIAIAAIgOAUIAPAVg");
	this.shape_1305.setTransform(1665.7964,736.4116,1.8904,1.8904);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgJIAAgFQAAgJAEgFQAEgGAGAAQAIAAADAFQAEAFAAAJIAAAEIgWAAIAAABQAAAIACACQADADAEAAIAFgBIAEgEIAEAEQgFAHgJAAQgHAAgEgFgAgFgMQgCAEAAAFIAPAAIAAgBQAAgFgCgEQgCgCgEAAQgDAAgCADg");
	this.shape_1306.setTransform(1658.2821,736.4116,1.8904,1.8904);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#1D1D1B").s().p("AgIAVIAAgjIgKAAIAAgGIARAAIAAAPIAHAAQAHgBADAEQADADAAAGQAAAFgDAFQgEAEgGAAgAgBAPIAHAAQABAAAAAAQABAAABAAQAAgBABAAQAAgBAAAAQACgCAAgEQAAgDgBgCQgCgCgDAAIgHAAg");
	this.shape_1307.setTransform(1650.5788,736.4116,1.8904,1.8904);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#1D1D1B").s().p("AgLAZQgEgFAAgKIAAgEQAAgNAEgHQAEgIAHgBIAGgDQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAGAAIAAACQgBAIgHACIgFABQgEABgDAEQgDAFAAAEQAFgGAFAAQAHAAAEAFQAEAEAAAJIAAABQAAAJgEAGQgFAGgHAAQgGAAgFgGgAgGAAQgCADAAAHQAAAHACAEQADAEADAAQAEAAADgEQACgEAAgIQAAgGgCgDQgDgDgEAAQgDAAgDADg");
	this.shape_1308.setTransform(1642.97,734.7575,1.8904,1.8904);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#1D1D1B").s().p("AgMAdIAAgGIABABQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQABgBACgEIABgFIgMgoIAHAAIAHAdIAIgdIAHAAIgOAuQgBAGgCADQgDADgEgBg");
	this.shape_1309.setTransform(1636.0701,738.0184,1.8904,1.8904);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#1D1D1B").s().p("AgNAXQgEgHAAgLIAAgJQAAgMAEgGQAFgGAJAAQAIAAAEAFQAEAEACAKIgIAAQAAgHgCgDQgDgDgFAAQgFAAgDAEQgEAGAAAIIAAAJQAAAJAEAEQADAFAEAAQAGAAACgDQADgDAAgHIAIAAQgCAKgEAEQgEAFgJAAQgHAAgGgGg");
	this.shape_1310.setTransform(1628.7449,735.041,1.8904,1.8904);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#1D1D1B").s().p("AgOAVIAAgpIAOAAQAHAAADADQAEADAAAGQAAACgCACIgEAEQADAAACADQACACAAAEQAAAGgDADQgEADgHAAgAgHAQIAIAAQAHAAAAgHQAAgGgHgBIgIAAgAgHgCIAHAAQAHAAAAgGQAAgGgHgBIgHAAg");
	this.shape_1311.setTransform(1760.0791,708.0558,1.8904,1.8904);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#1D1D1B").s().p("AgLARQgEgFAAgKIAAgDQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAJgEAGQgFAFgHAAQgGAAgFgFgAgGgLQgCADAAAHIAAADQAAAHACADQACAEAEAAQAJAAAAgNIAAgEQAAgHgCgDQgDgEgEAAQgDAAgDAEg");
	this.shape_1312.setTransform(1752.3285,708.0558,1.8904,1.8904);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#1D1D1B").s().p("AgKAVIAAgpIAVAAIAAAGIgOAAIAAAjg");
	this.shape_1313.setTransform(1746.2793,708.0558,1.8904,1.8904);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#1D1D1B").s().p("AgMAdIAAgGIABABQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQABgBACgEIABgEIgMgpIAHAAIAHAdIAIgdIAHAAIgOAuQgBAGgCADQgDADgEAAg");
	this.shape_1314.setTransform(1739.9465,709.6627,1.8904,1.8904);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIABAFQADgGAFAAQAIAAADAFQADAEAAALIAAAEQAAAJgDAFQgEAFgGAAQgGAAgDgFIAAAVgAgHgSIAAAVQACAFAFAAQAEAAACgDQADgEAAgFIAAgFQAAgGgDgEQgCgEgEAAQgEAAgDAFg");
	this.shape_1315.setTransform(1733.2357,709.5209,1.8904,1.8904);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgEAAIAAASIgGAAIAAgpIAGAAIAAASIAEAAIAKgSIAIAAIgOAUIAPAVg");
	this.shape_1316.setTransform(1726.194,708.0558,1.8904,1.8904);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#1D1D1B").s().p("AgLARQgFgGAAgJIAAgDQAAgJAFgGQAFgFAGAAQAHAAAFAFQAEAFAAAKIAAADQAAAJgEAGQgFAFgHAAQgGAAgFgFgAgGgLQgCAEgBAGIAAADQABAGACAEQADAEADAAQAJAAAAgNIAAgEQAAgGgCgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1317.setTransform(1718.3489,708.0558,1.8904,1.8904);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#1D1D1B").s().p("AAIAVIgIgQIgHAQIgIAAIANgVIgMgUIAIAAIAGAPIAHgPIAIAAIgMAUIANAVg");
	this.shape_1318.setTransform(1707.7628,708.0558,1.8904,1.8904);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAOIAJAAQAFABADADQAEADAAAGQAAAGgEAFQgDADgFAAgAgNAPIAJAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQABgCAAgDQAAgEgBgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgJAAg");
	this.shape_1319.setTransform(1699.2088,708.0558,1.8904,1.8904);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgGAAIAAgpIAGAAIAAASIAPAAIAAgSIAHAAIAAApg");
	this.shape_1320.setTransform(1690.2768,708.0558,1.8904,1.8904);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#1D1D1B").s().p("AgOAVIAAgpIAHAAIAAAOIAIAAQAGABADADQAFADAAAGQAAAGgFAFQgDADgGAAgAgHAPIAIAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQACgBAAgEQAAgFgCgCQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgIAAg");
	this.shape_1321.setTransform(1683.0933,708.0558,1.8904,1.8904);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#1D1D1B").s().p("AAKAVIAAgjIgKAAIgBAOQgBAKgDAGQgDAFgFAAIgCAAIAAgGIABgBQADAAACgEQABgFAAgHIABgSIAYAAIAAApg");
	this.shape_1322.setTransform(1675.0592,708.0558,1.8904,1.8904);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#1D1D1B").s().p("AgLATQgDgEAAgFQAAgHAFgDQAFgEAGAAIAFAAIAAgEQAAgEgCgCQgCgBgDAAQgCAAgCACQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAABIgHAAIACgHQACgDADgBQADgCADAAQAHAAADAEQAEADAAAGIAAAUIABAIIAAABIgHAAIgBgEQgEAFgFAAQgFAAgEgDgAgEADQgDACAAAEQAAAEACABQABACAEAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAgBIAAgJIgEAAQgEgBgDADg");
	this.shape_1323.setTransform(1667.923,708.0558,1.8904,1.8904);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQADgGAGAAQAHAAAEAFQACAEABALIAAAEQAAAJgEAFQgDAFgHAAQgFAAgEgFIAAAVgAgIgSIAAAVQADAFAFAAQAEAAACgDQACgEAAgFIAAgFQAAgGgCgEQgCgEgEAAQgEAAgEAFg");
	this.shape_1324.setTransform(1660.7396,709.5209,1.8904,1.8904);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgDQAAgKAEgGQAEgFAGAAQAIAAADAFQAEAFAAAKIAAADIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgCADAAAGIAPAAIAAgBQAAgFgCgEQgCgCgEAAQgDAAgCADg");
	this.shape_1325.setTransform(1653.3671,708.0558,1.8904,1.8904);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQADgGABgIIAAgSIAXAAIAAAjIAFAAIAAASgAgCgJQgBAKgFAIIAPAAIAAgdIgJAAg");
	this.shape_1326.setTransform(1645.6638,709.2373,1.8904,1.8904);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#1D1D1B").s().p("AgKARQgEgEAAgKIAAgDQAAgKAEgGQAEgFAHAAQAHAAAEAFQADAEAAALIAAADIgWAAIAAABQAAAHACADQADADAEAAIAFgBIAEgEIAEAFQgEAGgKAAQgGAAgFgFgAgFgMQgBACgBAHIAPAAIAAgBQAAgGgCgDQgBgCgEAAQgDAAgDADg");
	this.shape_1327.setTransform(1638.1495,708.0558,1.8904,1.8904);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#1D1D1B").s().p("AgCAfIAAgIIgBAAQgGAAgEgDQgEgCgDgGQgDgGAAgGQAAgFADgGQACgEAFgEQAEgDAGAAIABAAIAAgIIAGAAIAAAIIABAAQAFAAAEADQAFAEACAEQADAFAAAGQAAAHgDAFQgCAFgFADQgEADgFAAIgBAAIAAAIgAAEARIABAAQAFAAAEgEQADgFAAgIQAAgHgDgEQgDgFgGAAIgBAAgAgMgLQgEAEAAAHQAAAJAEAEQADAEAGAAIABAAIAAghIgBAAQgGAAgDAFg");
	this.shape_1328.setTransform(1629.4538,706.6853,1.8904,1.8904);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgIIAAgFQAAgJAEgGQAEgFAGAAQAIAAAEAFQADAFAAAKIAAADIgWAAIAAABQAAAGACAEQADADAEAAIAFgBQACgBACgDIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgCADAAAGIAPAAIAAgBQAAgEgCgEQgCgDgEAAQgDAAgCADg");
	this.shape_1329.setTransform(1730.9672,679.7001,1.8904,1.8904);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#1D1D1B").s().p("AAOAVIAAgpIAHAAIAAApgAgUAVIAAgpIAHAAIAAAOIAJAAQAFAAAEAEQADAEAAAFQAAAGgDAEQgEAEgFAAgAgNAPIAJAAQACAAACgCQABgCAAgEQAAgDgBgDQgCgBgCAAIgJAAg");
	this.shape_1330.setTransform(1722.1297,679.7001,1.8904,1.8904);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#1D1D1B").s().p("AAHAVIAAgSIgOAAIAAASIgGAAIAAgpIAGAAIAAASIAOAAIAAgSIAIAAIAAApg");
	this.shape_1331.setTransform(1713.2449,679.7001,1.8904,1.8904);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgPAAIAAASIgHAAIAAgpIAHAAIAAASIAPAAIAAgSIAHAAIAAApg");
	this.shape_1332.setTransform(1705.5416,679.7001,1.8904,1.8904);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgIIAAgFQAAgKAEgFQAEgFAGAAQAIAAADAFQADAEABALIAAADIgXAAIAAABQAAAHADADQADADADAAIAGgBIAEgEIAEAFQgFAGgJAAQgHAAgEgFgAgFgMQgCACgBAHIAQAAIAAgBIgCgIQgCgDgEAAQgDAAgCADg");
	this.shape_1333.setTransform(1698.2636,679.7001,1.8904,1.8904);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#1D1D1B").s().p("AgOAVIAAgpIAOAAQAGAAAEADQAEADAAAFQAAAEgCACQgBACgDABQADAAACADQACADAAADQAAAGgEADQgDADgHAAgAgHAQIAIAAQAHgBAAgGQAAgHgHAAIgIAAgAgHgCIAHAAQAHAAAAgGQAAgFgHgCIgHAAg");
	this.shape_1334.setTransform(1690.9857,679.7001,1.8904,1.8904);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#1D1D1B").s().p("AgDAVIAAgkIgLAAIAAgFIAdAAIAAAFIgMAAIAAAkg");
	this.shape_1335.setTransform(1683.8022,679.7001,1.8904,1.8904);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#1D1D1B").s().p("AgKARQgEgGAAgJIAAgDQAAgKAEgFQAEgFAHAAQAGAAAEAEQAEAEAAAHIgGAAQgBgFgCgBQgBgDgEAAQgEAAgCADQgCACAAAIIAAAEQAAAJACACQACADAEAAQADAAACgCQACgCABgEIAGAAQgBAGgDAEQgEAEgGAAQgHAAgEgFg");
	this.shape_1336.setTransform(1677.1859,679.7001,1.8904,1.8904);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#1D1D1B").s().p("AgOAeIAAg6IAGAAIAAAFQAEgGAFAAQAHAAAEAFQADAGAAAJIAAAEQAAAJgDAFQgEAFgHAAQgFAAgDgFIAAAVgAgHgSIAAAVQACAFAFAAQAEAAACgDQACgDAAgGIAAgFQAAgHgCgDQgCgEgEAAQgFAAgCAFg");
	this.shape_1337.setTransform(1670.0024,681.1652,1.8904,1.8904);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#1D1D1B").s().p("AgLASQgDgCAAgHQAAgGAFgDQAEgDAHAAIAFAAIAAgFQAAgEgCgBQgCgCgDAAQgCAAgCACQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIgHAAIACgGIAFgEQADgCADAAQAHAAADADQADAEAAAFIAAAVIACAIIAAABIgHAAIgBgFQgEAGgFAAQgFAAgEgEgAgEADQgDABAAAFQAAADACACQAAAAAAABQABAAAAAAQABAAABAAQAAABABAAQACgBACgBIAEgEIAAgKIgEAAQgEABgDACg");
	this.shape_1338.setTransform(1662.5354,679.7001,1.8904,1.8904);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#1D1D1B").s().p("AAMAbIAAgMIgXAAIAAAMIgHAAIAAgSIADAAIACgDQAEgFAAgJIAAgSIAXAAIAAAjIAFAAIAAASgAgCgJQgBALgEAHIAOAAIAAgdIgJAAg");
	this.shape_1339.setTransform(1654.7849,680.8816,1.8904,1.8904);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#1D1D1B").s().p("AgMAdIAAgGIACAAQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAIADgFIABgFIgMgpIAHAAIAHAeIAIgeIAHAAIgOAwQgBAFgCADQgDACgDABg");
	this.shape_1340.setTransform(1648.0268,681.307,1.8904,1.8904);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#1D1D1B").s().p("AgKARQgEgFAAgKIAAgDQAAgKAEgFQAEgFAHAAQAGAAAEAEQAEAFAAAGIgGAAQAAgEgCgCQgDgDgDAAQgDAAgDADQgCADAAAHIAAAEQAAAIACADQADADADAAQAEAAACgCQACgDAAgDIAGAAQAAAFgEAFQgFAEgFAAQgHAAgEgFg");
	this.shape_1341.setTransform(1641.4577,679.7001,1.8904,1.8904);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#1D1D1B").s().p("AgLAQQgEgEAAgKIAAgDQAAgJAEgGQAFgFAGAAQAHAAAFAFQAEAGAAAJIAAADQAAAKgEAEQgEAGgIAAQgGAAgFgGgAgGgLQgCAEAAAGIAAADQAAAGACAFQACADAEAAQAJAAABgNIAAgEQAAgGgDgEQgDgEgEAAQgDAAgDAEg");
	this.shape_1342.setTransform(1634.0852,679.7001,1.8904,1.8904);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#1D1D1B").s().p("AgOAcIAAg3IAdAAIAAAGIgVAAIAAAxg");
	this.shape_1343.setTransform(1628.3195,678.3296,1.8904,1.8904);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#1D1D1B").s().p("AARAVIAAgpIALAAIAAApgAgbAVIAAgpIALAAIAAAOIAKAAQAIAAAFAEQAFADAAAGQAAAGgFAEQgFAEgIAAgAgQANIAJAAQAFAAABgBQABgCAAgDQAAgDgBgCQgBgCgFAAIgJAAg");
	this.shape_1344.setTransform(1689.0953,653.8492,1.8904,1.8904);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#1D1D1B").s().p("AANAaIAAgKIgjAAIAAgpIALAAIAAAhIAQAAIAAghIALAAIAAAhIAHAAIAAASg");
	this.shape_1345.setTransform(1678.1311,654.8416,1.8904,1.8904);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#1D1D1B").s().p("AAJAVIAAgbIAAAAIgBACIgCADIgOAWIgLAAIAAgpIALAAIAAAYIAAADIAAAAIARgbIALAAIAAApg");
	this.shape_1346.setTransform(1667.5922,653.8492,1.8904,1.8904);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#1D1D1B").s().p("AAJAVIAAgSIgRAAIAAASIgLAAIAAgpIALAAIAAARIARAAIAAgRIALAAIAAApg");
	this.shape_1347.setTransform(1657.715,653.8492,1.8904,1.8904);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#1D1D1B").s().p("AgQASQgEgDgBgGQAAgHAHgCQAEgEAKAAIAIAAIAAgDQAAgCgCgCQgBgDgFAAQgDAAgCACIgCAEIAAABIgLAAIAAgBQAAgFAGgEQAEgDAJAAQAKAAAEADQAEAEABAGIAAASIAAAGIACADIAAABIgLAAIgCgDIAAgCQgCACgDABQgEACgEAAQgIAAgEgDgAgGADQgDACAAADQAAABAAAAQAAABABABQAAAAAAABQABAAAAAAQABACAFABQADAAADgDQADgDAAgDIAAgFIgIAAQgDABgDABg");
	this.shape_1348.setTransform(1647.9323,653.8019,1.8904,1.8904);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#1D1D1B").s().p("AgVAdIAAg4IALAAIAAAEIAAAAIAFgDIAHgCQAJAAAGAFQAFAGAAAKIAAABQAAAIgFAGQgGAGgIgBIgHgBQgDAAgDgDIAAAUgAgGgSIgEADIAAAPIAEAEQADABADAAQAGAAACgDQACgCAAgGIAAgCQAAgFgCgEQgDgEgFAAQgDABgDACg");
	this.shape_1349.setTransform(1638.4331,655.3142,1.8904,1.8904);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#1D1D1B").s().p("AgTAdIAAg5IAnAAIAAAIIgbAAIAAAxg");
	this.shape_1350.setTransform(1629.2175,652.3841,1.8904,1.8904);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#1D1D1B").s().p("AAMAcIAAgVIgLAAIgLAVIgNAAIAOgXQgEgBgDgEQgEgDAAgHQgBgIAHgEQAGgGAJAAIAXAAIAAA4gAgGgRQgCACgBAFQABAFACADQACACAGAAIAKAAIAAgUIgKAAQgFAAgDADg");
	this.shape_1351.setTransform(362.3787,297.087,1.8904,1.8904);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#1D1D1B").s().p("AAOAcIAAgmIABgDIgBAAIgaApIgNAAIAAg4IAMAAIAAArIAbgrIAMAAIAAA4g");
	this.shape_1352.setTransform(351.131,297.087,1.8904,1.8904);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#1D1D1B").s().p("AAVAiIAAgLIgqAAIAAALIgKAAIAAgTIAGAAIACgGQACgFAAgHIACgeIAsAAIAAAwIAHAAIAAATgAgMAJIgCAGIAaAAIAAgoIgVAAg");
	this.shape_1353.setTransform(338.6545,298.174,1.8904,1.8904);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#1D1D1B").s().p("AgUAcIAAg4IAoAAIAAAJIgcAAIAAAQIAZAAIAAAHIgZAAIAAARIAdAAIAAAHg");
	this.shape_1354.setTransform(327.9738,297.087,1.8904,1.8904);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#1D1D1B").s().p("AgcAcIAAgIIACAAIACAAQAEAAACgDQACgEAAgIIACghIArAAIAAA4IgMAAIAAgwIgVAAIgCAbQAAALgEAFQgDAGgKAAg");
	this.shape_1355.setTransform(315.9226,297.2288,1.8904,1.8904);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#1D1D1B").s().p("AgRAWQgJgHAAgNIAAgDQAAgOAJgGQAHgIALAAQAMAAAHAGQAGAGABAIIAAABIgMAAIAAgBQAAgFgEgDQgDgDgHAAQgFAAgFAEQgFAEAAAKIAAAFQAAAJAFAEQAEAFAGAAQAHAAADgDQADgDABgFIAAgBIAMAAIAAABQgBAJgHAFQgGAGgMAAQgLAAgHgIg");
	this.shape_1356.setTransform(304.8167,297.1343,1.8904,1.8904);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#1D1D1B").s().p("AASAcIgGgNIgZAAIgFANIgLAAIAYg4IALAAIAYA4gAgBgOIgJAVIATAAIgJgVIAAgDIAAAAg");
	this.shape_1357.setTransform(293.4271,297.087,1.8904,1.8904);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#1D1D1B").s().p("AAOAcIAAgYIgbAAIAAAYIgMAAIAAg4IAMAAIAAAYIAbAAIAAgYIAMAAIAAA4g");
	this.shape_1358.setTransform(281.6595,297.087,1.8904,1.8904);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#1D1D1B").s().p("AgTAWQgIgGAAgOIAAgDQAAgOAIgGQAIgIALAAQAMAAAIAIQAIAHAAANIAAADQAAANgIAHQgIAIgMAAQgLAAgIgIgAgLgQQgEAGAAAIIAAAEQAAAJAEAFQAFAFAGAAQAHAAAEgFQAFgEAAgKIAAgEQAAgIgFgGQgEgEgHAAQgGAAgFAEg");
	this.shape_1359.setTransform(265.3077,297.1343,1.8904,1.8904);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#1D1D1B").s().p("AgTAcIAAg4IAnAAIAAAJIgcAAIAAAvg");
	this.shape_1360.setTransform(255.1942,297.087,1.8904,1.8904);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#1D1D1B").s().p("AgTAWQgIgGAAgOIAAgDQAAgOAIgGQAIgIALAAQAMAAAIAIQAIAGAAAOIAAADQAAAOgIAGQgIAIgMAAQgLAAgIgIgAgKgQQgFAGAAAIIAAAEQAAAKAFAEQADAFAHAAQAHAAAEgFQAFgEAAgKIAAgEQAAgIgFgGQgEgEgHAAQgHAAgDAEg");
	this.shape_1361.setTransform(243.9464,297.1343,1.8904,1.8904);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#1D1D1B").s().p("AAOAcIAAgYIgbAAIAAAYIgMAAIAAg4IAMAAIAAAYIAbAAIAAgYIAMAAIAAA4g");
	this.shape_1362.setTransform(231.6589,297.087,1.8904,1.8904);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#1D1D1B").s().p("AgWAcIAAg4IAWAAQALAAAGAGQAGAEAAAIQAAAKgGADQgFAFgMAAIgKAAIAAAUgAgKAAIAKAAQAHAAABgCQADgDAAgFQAAgEgDgDQgBgCgHAAIgKAAg");
	this.shape_1363.setTransform(220.7892,297.087,1.8904,1.8904);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#1D1D1B").s().p("AgUAcIAAgJIAFABQAFAAABgBQAEgCACgEIgYgpIAMAAIAPAdIABACIAAAAIAPgfIALAAIgUAoQgFAKgDAEQgFADgHAAg");
	this.shape_1364.setTransform(209.9195,297.2288,1.8904,1.8904);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#1D1D1B").s().p("AgFAcIAAgvIgTAAIAAgJIAxAAIAAAJIgTAAIAAAvg");
	this.shape_1365.setTransform(199.6642,297.087,1.8904,1.8904);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#1D1D1B").s().p("AgWAcIAAg4IAMAAIAAAWIAKAAQAMAAAGAFQAFAEAAAHQAAAJgFAFQgGAEgMAAgAgKAVIAKAAQAFAAAEgDQACgDAAgFQAAgDgCgDQgEgDgFAAIgKAAg");
	this.shape_1366.setTransform(189.976,297.087,1.8904,1.8904);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#1D1D1B").s().p("AgcAcIAAgIIACAAIACAAQAEAAACgDIACgMIACghIArAAIAAA4IgMAAIAAgwIgVAAIgCAbQAAALgEAFQgDAGgJAAg");
	this.shape_1367.setTransform(177.5468,297.2288,1.8904,1.8904);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#1D1D1B").s().p("AgUAcIAAgJIAFABQAEAAADgBQACgBACgFIgWgpIALAAIAPAaIABAFIABAAIAPgfIALAAIgVAoQgEAKgEAEQgGADgGAAg");
	this.shape_1368.setTransform(166.8188,297.2288,1.8904,1.8904);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#1D1D1B").s().p("AAMAcIgWgYIgEAAIAAAYIgMAAIAAg4IAMAAIAAAYIAEAAIAWgYIANAAIgZAbIAbAdg");
	this.shape_1369.setTransform(156.7526,297.087,1.8904,1.8904);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#1D1D1B").s().p("AAVAcIAAg4IALAAIAAA4gAgfAcIAAg4IALAAIAAAWIAMAAQALAAAFAFQAFADABAIQgBAKgFAEQgFAEgLAAgAgUAVIALAAQAGAAADgDQACgDAAgFQAAgDgCgDQgDgDgGAAIgLAAg");
	this.shape_1370.setTransform(138.8412,297.087,1.8904,1.8904);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#1D1D1B").s().p("AgFAcIAAgvIgTAAIAAgJIAxAAIAAAJIgTAAIAAAvg");
	this.shape_1371.setTransform(126.5065,297.087,1.8904,1.8904);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#1D1D1B").s().p("AAMAcIgWgYIgEAAIAAAYIgMAAIAAg4IAMAAIAAAYIAEAAIAWgYIANAAIgZAbIAbAdg");
	this.shape_1372.setTransform(116.771,297.087,1.8904,1.8904);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#1D1D1B").s().p("AgUAcIAAg4IApAAIAAAJIgeAAIAAAQIAZAAIAAAHIgZAAIAAARIAeAAIAAAHg");
	this.shape_1373.setTransform(105.8541,297.087,1.8904,1.8904);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#1D1D1B").s().p("AgPAcIAAgvIgNAAIAAgJIAYAAIAAAWIALAAQAMAAAFAFQAFADAAAIQAAAKgFAEQgFAEgMAAgAgEAVIAKAAQAGAAADgDQADgDAAgFQAAgDgDgDQgDgDgGAAIgKAAg");
	this.shape_1374.setTransform(94.559,297.087,1.8904,1.8904);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#1D1D1B").s().p("AgWAcIAAg4IAoAAIAAAJIgcAAIAAAOIALAAQALAAAFAFQAGADAAAJQAAAHgGAFQgGAFgKgBgAgKAVIAKAAQAGAAADgDQACgCAAgEQAAgFgCgCQgCgDgHAAIgKAAg");
	this.shape_1375.setTransform(84.0674,297.087,1.8904,1.8904);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#1D1D1B").s().p("AgTAWQgIgGAAgOIAAgDQAAgNAIgHQAIgIALAAQAMAAAIAIQAIAHAAANIAAADQAAANgIAHQgIAIgMAAQgLAAgIgIgAgLgQQgEAGAAAIIAAAEQAAAJAEAFQAFAFAGAAQAHAAAFgFQAEgEAAgKIAAgEQAAgIgEgGQgFgEgHAAQgGAAgFAEg");
	this.shape_1376.setTransform(72.2998,297.1343,1.8904,1.8904);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#1D1D1B").s().p("AARAnIAAgdIgQAAIgQAdIgRAAIAUggQgGgCgEgEQgHgGABgJQgBgLAJgHQAHgGAOAAIAgAAIAABNgAgJgXQgEAEABAFQgBAFAEAEQAEAEAHABIAPAAIAAgbIgPAAQgHAAgEAEg");
	this.shape_1377.setTransform(1127.794,260.4137,1.8904,1.8904);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#1D1D1B").s().p("AAUAnIAAg6IgBAAIgkA6IgRAAIAAhNIAPAAIAAA1IAAAFIAAAAIAlg6IASAAIAABNg");
	this.shape_1378.setTransform(1112.3874,260.4137,1.8904,1.8904);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#1D1D1B").s().p("AATAnIAAgjIglAAIAAAjIgQAAIAAhNIAQAAIAAAgIAlAAIAAggIAQAAIAABNg");
	this.shape_1379.setTransform(1095.3739,260.4137,1.8904,1.8904);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#1D1D1B").s().p("AgcAnIAAhNIA4AAIAAALIgoAAIAAAVIAjAAIAAAKIgjAAIAAAYIApAAIAAALg");
	this.shape_1380.setTransform(1080.7235,260.4137,1.8904,1.8904);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#1D1D1B").s().p("AASAnIAAgfIgSABQgTAAgHgGQgHgGAAgMIAAgXIAQAAIAAAWQAAAJAEADQAFADAJAAIANgBIAEAAIAAgkIAQAAIAABNg");
	this.shape_1381.setTransform(1065.1278,260.4137,1.8904,1.8904);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#1D1D1B").s().p("AAZAnIgIgSIgjAAIgIASIgOAAIAghNIAQAAIAiBNgAgBgUIgNAeIAbAAIgNgeIAAgDIAAAAg");
	this.shape_1382.setTransform(1049.5322,260.3664,1.8904,1.8904);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#1D1D1B").s().p("AATAnIAAgjIglAAIAAAjIgQAAIAAhNIAQAAIAAAgIAlAAIAAggIAQAAIAABNg");
	this.shape_1383.setTransform(1033.464,260.4137,1.8904,1.8904);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#1D1D1B").s().p("AgYAjQgKgHAAgNIAAgBIARAAIAAABQAAAHAEAEQAGAEAIAAQAIAAAFgEQAEgDABgHQAAgGgFgDQgEgDgIAAIgLAAIAAgKIAKAAQAIAAADgDQAEgCAAgGQAAgFgEgDQgEgDgIAAQgIAAgEADQgEADAAAHIAAABIgRAAIAAAAQAAgMAJgHQAIgHARAAQAOAAAIAGQAJAGAAAKQAAAGgEAFQgFAEgFACQAIABADAFQAFAFABAHQgBALgIAHQgJAGgQAAQgQAAgJgGg");
	this.shape_1384.setTransform(1017.4902,260.3664,1.8904,1.8904);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#1D1D1B").s().p("AgbAfQgKgKAAgSIAAgEQAAgTAKgKQAMgKAPAAQARAAALAKQAKAKAAATIAAAEQAAASgKAKQgKAKgSAAQgQAAgLgKgAgPgWQgGAHAAANIAAAGQAAANAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgNIAAgGQAAgNgGgHQgGgGgKAAQgIAAgHAGg");
	this.shape_1385.setTransform(1001.6583,260.3664,1.8904,1.8904);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#1D1D1B").s().p("AgfAnIAAhNIA5AAIAAALIgpAAIAAAUIARAAQAOAAAHAGQAJAGgBAKQABALgJAGQgGAHgPAAgAgPAcIAQAAQAIAAADgEQAEgDAAgGQAAgFgEgEQgDgDgIAAIgQAAg");
	this.shape_1386.setTransform(986.677,260.4137,1.8904,1.8904);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#1D1D1B").s().p("AgbAfQgKgKAAgSIAAgEQAAgTAKgKQAMgKAPAAQAQAAAMAKQAKAKAAATIAAAEQAAASgKAKQgLAKgRAAQgQAAgLgKgAgPgWQgGAHAAANIAAAGQAAANAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgNIAAgGQAAgNgGgHQgHgGgJAAQgIAAgHAGg");
	this.shape_1387.setTransform(970.467,260.3664,1.8904,1.8904);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#1D1D1B").s().p("AgcAnIAAhNIA4AAIAAALIgoAAIAAAVIAjAAIAAAKIgjAAIAAAYIApAAIAAALg");
	this.shape_1388.setTransform(950.1454,260.4137,1.8904,1.8904);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#1D1D1B").s().p("AAcAnIAAhNIAQAAIAABNgAgrAnIAAhNIAQAAIAAAdIAPAAQAQAAAHAGQAIAHAAAKQAAAMgIAGQgHAHgQAAgAgbAcIAOAAQAKAAADgEQACgDABgHQgBgGgCgEQgDgDgKAAIgOAAg");
	this.shape_1389.setTransform(932.7067,260.4137,1.8904,1.8904);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#1D1D1B").s().p("AATAnIAAgjIglAAIAAAjIgQAAIAAhNIAQAAIAAAgIAlAAIAAggIAQAAIAABNg");
	this.shape_1390.setTransform(914.0864,260.4137,1.8904,1.8904);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#1D1D1B").s().p("AgfAnIAAhNIAfAAQAOAAAHAFQAJAFgBALQABAGgEAEQgCAEgGACQAGABAEAEQAEAGAAAHQAAAKgIAGQgIAGgPAAgAgPAdIAQAAQAIgBADgDQAEgDAAgGQAAgGgEgDQgDgDgIgBIgQAAgAgPgGIAPAAQAHABADgDQADgEAAgEQAAgHgDgBQgDgDgHAAIgPAAg");
	this.shape_1391.setTransform(898.5853,260.4137,1.8904,1.8904);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#1D1D1B").s().p("AgbAfQgLgKAAgSIAAgEQAAgTALgKQAMgKAPAAQARAAAKAKQAMAKAAATIAAAEQAAARgMALQgJAKgSAAQgQAAgLgKgAgPgWQgGAHAAANIAAAGQAAANAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgNIAAgGQAAgNgGgHQgGgGgKAAQgIAAgHAGg");
	this.shape_1392.setTransform(882.328,260.3664,1.8904,1.8904);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#1D1D1B").s().p("AgjAoIgDgBIAAgMIACABIACAAQAHAAACgFQADgFAAgLIADguIA6AAIAABNIgPAAIAAhCIgeAAIgCAlQgBAPgFAIQgFAIgMAAg");
	this.shape_1393.setTransform(864.5584,260.5554,1.8904,1.8904);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#1D1D1B").s().p("AgZAfQgLgKAAgSIAAgEQAAgTAMgKQAKgKAQAAQAPAAAKAIQAKAIAAAMIAAABIgQAAIAAgCQgBgHgEgEQgFgEgJAAQgJAAgGAGQgGAHAAANIAAAGQAAANAGAGQAGAHAJAAQAIAAAFgFQAFgEABgHIAAgBIAQAAIAAABQgBAMgJAHQgJAIgQAAQgRAAgKgKg");
	this.shape_1394.setTransform(849.3409,260.3664,1.8904,1.8904);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#1D1D1B").s().p("AgYAoIgEgBIAAgMIAHABQAGAAADgCQAEgDADgFIggg5IARAAIATAkIADAIIAAAAIAUgsIAQAAIgcA4QgHAOgFAEQgGAFgKAAg");
	this.shape_1395.setTransform(834.0288,260.5554,1.8904,1.8904);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#1D1D1B").s().p("AAQAVIAAgpIAHAAIAAApgAgWAVIAAgpIAHAAIAAAOIAKAAQAGAAAEAEQAEADAAAGQAAAHgEADQgEAEgGAAgAgPAPIAKAAQADAAACgCQABgCAAgEQAAgEgBgBQgBgCgEAAIgKAAg");
	this.shape_1396.setTransform(346.5468,570.4834,1.8904,1.8904);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#1D1D1B").s().p("AgDAVIAAgjIgNAAIAAgGIAhAAIAAAGIgNAAIAAAjg");
	this.shape_1397.setTransform(337.3785,570.4834,1.8904,1.8904);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#1D1D1B").s().p("AAIAVIgMgSIgFAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIAMgSIAJAAIgQAUIARAVg");
	this.shape_1398.setTransform(330.195,570.4834,1.8904,1.8904);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgQAAIAAASIgHAAIAAgpIAHAAIAAASIAQAAIAAgSIAIAAIAAApg");
	this.shape_1399.setTransform(321.4047,570.4834,1.8904,1.8904);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#1D1D1B").s().p("AgOAdIAAgGIACAAQAEAAABgBQADgCAAgDIACgFIgOgpIAIAAIAIAeIAJgeIAIAAIgPAwQgCAFgCADQgEADgEAAg");
	this.shape_1400.setTransform(313.5597,572.0902,1.8904,1.8904);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#1D1D1B").s().p("AAIAVIAAgjIgPAAIAAAjIgIAAIAAgpIAfAAIAAApg");
	this.shape_1401.setTransform(305.7618,570.4834,1.8904,1.8904);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#1D1D1B").s().p("AgLASQgFgFAAgKIAAgDQAAgKAFgGQAEgFAHAAQAJAAADAFQAFAEAAALIAAADIgZAAIAAABQAAAHACADQADADAEAAIAHgBIAEgEIAFAFQgGAGgKAAQgHAAgFgEgAgGgMQgBACgBAIIARAAIAAgCQAAgGgCgCQgCgDgFAAQgDAAgDADg");
	this.shape_1402.setTransform(293.7579,570.4361,1.8904,1.8904);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#1D1D1B").s().p("AAJAVIAAgeIgQAeIgIAAIAAgpIAIAAIAAAeIAQgeIAHAAIAAApg");
	this.shape_1403.setTransform(285.393,570.4834,1.8904,1.8904);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#1D1D1B").s().p("AAIAVIgMgSIgFAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIAMgSIAJAAIgQAUIARAVg");
	this.shape_1404.setTransform(277.5479,570.4834,1.8904,1.8904);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#1D1D1B").s().p("AgLARQgFgEAAgLIAAgDQAAgKAFgFQAFgFAHAAQAIAAAEAFQAEAEAAAGIgHAAQgBgFgCgCQgCgCgEAAQgEAAgCADQgDAEAAAGIAAAEQAAAJADACQACADAEAAQAEAAACgCQACgBABgFIAHAAQAAAHgEADQgFAEgHAAQgIAAgEgFg");
	this.shape_1405.setTransform(269.183,570.4361,1.8904,1.8904);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#1D1D1B").s().p("AgLASQgFgFAAgKIAAgDQAAgKAEgGQAFgFAHAAQAIAAAFAFQAEAFAAAKIAAADIgaAAIAAABQAAAHAEADQADADAEAAIAGgBIAFgEIADAFQgEAGgKAAQgJAAgEgEgAgFgMQgDADAAAHIARAAIAAgCQgBgGgBgCQgCgDgFAAQgDAAgCADg");
	this.shape_1406.setTransform(261.3379,570.4361,1.8904,1.8904);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#1D1D1B").s().p("AAIAVIAAgPIgIABQgHAAgEgEQgEgDAAgHIAAgNIAHAAIAAANQABAIAHAAIAIgBIAAgUIAIAAIAAApg");
	this.shape_1407.setTransform(253.1147,570.4834,1.8904,1.8904);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgQAeIgHAAIAAgpIAHAAIAAAeIAQgeIAIAAIAAApg");
	this.shape_1408.setTransform(244.9388,570.4834,1.8904,1.8904);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#1D1D1B").s().p("AgKASQgFgDAAgGIAIAAQAAACACADQADACACAAQAEAAACgCQACgCAAgDQAAgDgCgCQgBgBgEAAIgGAAIAAgGIAGAAQAGAAAAgGQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgCgCgEAAQgBAAgDACQgCACAAADIgIAAQAAgGAEgDQAEgEAGAAQAIAAADADQAEADAAAGQAAADgCADQgBACgDABQAHACAAAHQAAAGgEADQgEAEgIAAQgGAAgEgEg");
	this.shape_1409.setTransform(236.8102,570.4834,1.8904,1.8904);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#1D1D1B").s().p("AgLASQgFgHAAgIIAAgDQAAgLAFgFQAEgFAIAAQAHAAAFAFQAEAFAAAKIAAADIgZAAIAAABQAAAGADAEQADADAEAAIAGgBIAFgEIAEAFQgFAGgKAAQgJAAgEgEgAgFgMQgDADAAAHIASAAIAAgCQgCgGgBgCQgCgDgEAAQgEAAgCADg");
	this.shape_1410.setTransform(229.2014,570.4361,1.8904,1.8904);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#1D1D1B").s().p("AANAbIAAgMIgaAAIAAAMIgHAAIAAgSIADAAIACgDQAFgFAAgJIABgSIAZAAIAAAjIAFAAIAAASgAgCgJQgBALgFAHIAQAAIAAgdIgKAAg");
	this.shape_1411.setTransform(220.6002,571.6176,1.8904,1.8904);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#1D1D1B").s().p("AgMARQgFgGAAgIIAAgEQAAgJAFgGQAFgFAHAAQAIAAAFAFQAFAHAAAIIAAADQAAAJgFAGQgFAFgIAAQgHAAgFgFgAgHgLQgDAEAAAGIAAADQAAAHADADQADAEAEAAQAKAAAAgNIAAgEQAAgHgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_1412.setTransform(212.5188,570.4361,1.8904,1.8904);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#1D1D1B").s().p("AgLASQgFgFAAgKIAAgDQAAgKAFgGQAEgFAHAAQAJAAADAFQAFAEAAALIAAADIgZAAIAAABQAAAHACADQADADAEAAIAHgBIAEgEIAFAFQgGAGgKAAQgHAAgFgEgAgGgMQgBACgBAIIARAAIAAgCQAAgGgCgCQgCgDgFAAQgDAAgDADg");
	this.shape_1413.setTransform(204.4374,570.4361,1.8904,1.8904);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#1D1D1B").s().p("AgMAVIAAgpIAZAAIAAAGIgRAAIAAAjg");
	this.shape_1414.setTransform(197.8684,570.4834,1.8904,1.8904);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#1D1D1B").s().p("AgIADIAAgFIARAAIAAAFg");
	this.shape_1415.setTransform(192.15,569.869,1.8904,1.8904);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#1D1D1B").s().p("AgMARQgFgGAAgIIAAgEQAAgJAFgGQAFgFAHAAQAIAAAFAFQAFAHAAAIIAAADQAAAJgFAGQgFAFgIAAQgHAAgFgFgAgHgLQgDAEAAAGIAAADQAAAHADADQADAEAEAAQAKAAAAgNIAAgEQAAgHgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_1416.setTransform(185.8644,570.4361,1.8904,1.8904);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#1D1D1B").s().p("AAOAVIAAgcIgMAcIgDAAIgNgdIAAAdIgIAAIAAgpIAKAAIAMAfIAMgfIAKAAIAAApg");
	this.shape_1417.setTransform(176.1762,570.4834,1.8904,1.8904);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#1D1D1B").s().p("AgMARQgFgGAAgIIAAgEQAAgJAFgGQAFgFAHAAQAIAAAFAFQAFAHAAAIIAAADQAAAJgFAGQgFAFgIAAQgHAAgFgFgAgHgLQgDAEAAAGIAAADQAAAHADADQADAEAEAAQAKAAABgNIAAgEQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_1418.setTransform(166.488,570.4361,1.8904,1.8904);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgQAAIAAASIgHAAIAAgpIAHAAIAAASIAQAAIAAgSIAIAAIAAApg");
	this.shape_1419.setTransform(157.9813,570.4834,1.8904,1.8904);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#1D1D1B").s().p("AgMARQgFgFAAgJIAAgEQAAgJAFgGQAEgFAIAAQAIAAAFAFQAEAFABAKIAAADQAAAIgFAHQgFAFgIAAQgIAAgEgFgAgHgLQgDAEAAAGIAAADQAAAHADADQACAEAFAAQAKAAAAgNIAAgEQAAgGgDgEQgDgEgEAAQgEAAgDAEg");
	this.shape_1420.setTransform(149.4746,570.4361,1.8904,1.8904);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#1D1D1B").s().p("AgQAeIAAg6IAHAAIAAAFQAFgGAFAAQAIAAAEAFQAEAGAAAJIAAAEQAAAJgEAFQgEAFgIAAQgFAAgFgEIAAAUgAgJgRIAAAVQADAEAGAAQAEAAADgDQACgCAAgHIAAgFQAAgGgCgEQgDgDgEAAQgGAAgDAFg");
	this.shape_1421.setTransform(141.2042,571.9012,1.8904,1.8904);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#1D1D1B").s().p("AgDAVIAAgjIgNAAIAAgGIAhAAIAAAGIgNAAIAAAjg");
	this.shape_1422.setTransform(133.3118,570.4834,1.8904,1.8904);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#1D1D1B").s().p("AgLARQgFgEAAgLIAAgDQAAgJAFgGQAFgFAHAAQAHAAAFAFQAEAEAAAGIgHAAQgBgFgCgCQgCgCgEAAQgEAAgCADQgDAEAAAGIAAAEQAAAJADACQACADAEAAQAEAAACgCQACgBABgFIAHAAQAAAHgFADQgFAEgGAAQgIAAgEgFg");
	this.shape_1423.setTransform(125.8921,570.4361,1.8904,1.8904);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#1D1D1B").s().p("AAQAcIgFgOIgVAAIgFAOIgIAAIAVg3IAFAAIAVA3gAgIAHIARAAIgJgZg");
	this.shape_1424.setTransform(117.0546,569.1129,1.8904,1.8904);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#1D1D1B").s().p("AgRAVIAAgpIAMAAIAAAMIAGAAQAIAAAFAEQAEAEAAAGQAAAHgEAEQgFAEgIAAgAgFAMIAGAAQAAAAABAAQAAAAABgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAAgGgGAAIgFAAg");
	this.shape_1425.setTransform(326.4143,545.9084,1.8904,1.8904);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#1D1D1B").s().p("AgFAVIAAggIgMAAIAAgJIAjAAIAAAJIgMAAIAAAgg");
	this.shape_1426.setTransform(318.1911,545.9084,1.8904,1.8904);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#1D1D1B").s().p("AgMARQgFgFAAgKIAAgDQAAgJAFgFQAEgGAJAAQAIAAAEAFQAFAEAAAIIgMAAQAAgEgBgCQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgDAAgBACQgCADAAAFIAAAEIABAHIACADIADABQAFAAAAgHIAMAAQAAAHgFAFQgFAEgHAAQgIAAgFgFg");
	this.shape_1427.setTransform(310.5351,545.8612,1.8904,1.8904);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#1D1D1B").s().p("AgNAQQgFgFAAgJIAAgCQAAgKAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAKIAAACQAAAJgFAFQgEAGgKAAQgIAAgFgGgAgEgJQgCADABAGIAAACQAAALAFAAQAGAAABgJIAAgEQAAgFgCgEQgCgCgDgBQgBABgDACg");
	this.shape_1428.setTransform(302.3592,545.8612,1.8904,1.8904);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#1D1D1B").s().p("AAFAVIAAgQIgKAAIAAAQIgMAAIAAgpIAMAAIAAARIAKAAIAAgRIANAAIAAApg");
	this.shape_1429.setTransform(293.9942,545.9084,1.8904,1.8904);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#1D1D1B").s().p("AAFAVIAAgQIgKAAIAAAQIgMAAIAAgpIAMAAIAAARIAKAAIAAgRIANAAIAAApg");
	this.shape_1430.setTransform(285.582,545.9084,1.8904,1.8904);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#1D1D1B").s().p("AgMARQgGgGABgIIAAgDQAAgKAEgFQAFgGAJAAQAJAAAEAGQAEAFABAJIAAAFIgYAAQAAAFACACQADACACAAQAHAAADgEIAGAHIgHAFQgFABgFAAQgIAAgFgFgAgEgKQgBADAAAEIALAAIAAgBIgBgGQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAQgDAAgCACg");
	this.shape_1431.setTransform(277.4061,545.8612,1.8904,1.8904);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#1D1D1B").s().p("AAJAcIAAgNIgdAAIAAgpIAMAAIAAAfIAKAAIAAgfIANAAIAAAgIAGAAIgBAWg");
	this.shape_1432.setTransform(268.9467,547.0899,1.8904,1.8904);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#1D1D1B").s().p("AgEARQgFgFgBgIIgEAAIAAASIgMAAIAAgqIAMAAIAAAQIAEAAQABgGAFgGQAFgFAHAAQAJAAAFAGQAFAHAAAJQAAAJgFAGQgFAGgJAAQgIAAgEgFgAABgBIAAACQAAAMAHAAQAGAAABgKIAAgDQAAgGgCgDQgCgDgDAAQgGAAgBALg");
	this.shape_1433.setTransform(254.5798,545.8612,1.8904,1.8904);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#1D1D1B").s().p("AgOAdIAAgJIACAAIAEgBIACgDIABgDIgNgqIANAAIAFAYIAGgYIANAAIgQAwQgDALgJAAg");
	this.shape_1434.setTransform(244.6553,547.5153,1.8904,1.8904);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#1D1D1B").s().p("AAGAVIAAgQIgKAAIAAAQIgNAAIAAgpIANAAIAAARIAKAAIAAgRIAMAAIAAApg");
	this.shape_1435.setTransform(236.6212,545.9084,1.8904,1.8904);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#1D1D1B").s().p("AAFAVIAAgNIgEAAQgIAAgFgEQgFgEAAgHIAAgNIAMAAIAAANQAAAEACACQABABADAAIAEAAIAAgUIANAAIAAApg");
	this.shape_1436.setTransform(228.3035,545.9084,1.8904,1.8904);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#1D1D1B").s().p("AgOAdIAAgJIACAAIAEgBIACgDIABgDIgNgqIANAAIAFAYIAGgYIANAAIgQAwQgCALgJAAg");
	this.shape_1437.setTransform(220.4111,547.5153,1.8904,1.8904);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#1D1D1B").s().p("AgNATQgEgEAAgFQAAgHAFgDQAFgDAHgBIAEAAIAAgDIgBgEIgDgBQgEAAAAAFIgMAAQAAgGAEgEQAGgEAGAAQAHAAAFAEQAFAEgBAGIAAATQABAGABADIAAABIgMAAIgBgEQgEAEgEAAQgGAAgEgDgAgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAAGADgBIADAAIACgCIAAgJIgDAAQgCAAgCACg");
	this.shape_1438.setTransform(212.8496,545.8612,1.8904,1.8904);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#1D1D1B").s().p("AAGAVIAAgQIgKAAIAAAQIgNAAIAAgpIANAAIAAARIAKAAIAAgRIAMAAIAAApg");
	this.shape_1439.setTransform(204.5792,545.9084,1.8904,1.8904);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#1D1D1B").s().p("AgMARQgFgFAAgJIAAgDQAAgKAEgFQAGgGAHAAQAJAAAFAGQAEAEAAAKIAAAFIgXAAQABAGABABQADACACAAQAHAAAEgEIAFAHIgHAFQgEABgFAAQgJAAgFgFgAgDgKIgCAHIALAAIAAgBQAAgEgBgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_1440.setTransform(192.5753,545.8612,1.8904,1.8904);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgKAZIgMAAIAAgpIAMAAIAAAZIAKgZIANAAIAAApg");
	this.shape_1441.setTransform(184.2576,545.9084,1.8904,1.8904);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#1D1D1B").s().p("AAUAcIAAgNIgzAAIAAgpIANAAIAAAfIAIAAIAAgfIAMAAIAAAfIAJAAIAAgfIAMAAIAAAgIAJAAIgBAWg");
	this.shape_1442.setTransform(173.3879,547.0899,1.8904,1.8904);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#1D1D1B").s().p("AgEARQgFgFgBgIIgEAAIAAASIgMAAIAAgqIAMAAIAAAQIAEAAQABgGAFgGQAFgFAHAAQAJAAAFAGQAFAHAAAJQAAAJgFAGQgFAGgJAAQgIAAgEgFgAABgBIAAACQAAAMAHAAQAGAAABgKIAAgDQAAgGgCgDQgCgDgDAAQgGAAgBALg");
	this.shape_1443.setTransform(160.9114,545.8612,1.8904,1.8904);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#1D1D1B").s().p("AAHAVIAAgPIgFAAIgHAPIgNAAIAKgRQgDgBgDgDQgCgCAAgEQAAgHAFgDQAFgEAHAAIARAAIAAApgAgCgKIgBAEQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQAAABAAAAQAAAAAAAAIAHAAIAAgLIgHAAQAAAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_1444.setTransform(150.1835,545.9084,1.8904,1.8904);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#1D1D1B").s().p("AAHAVIAAggIgHAAIAAAMQAAAKgEAFQgDAEgHABIgEAAIAAgJIABAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBIABgIIABgUIAeAAIAAApg");
	this.shape_1445.setTransform(141.9131,545.9084,1.8904,1.8904);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#1D1D1B").s().p("AgRAVIAAgpIARAAQAHAAAEADQAFADAAAGQAAADgCACQgCADgEAAQAFAAADADQACACAAAEQAAAMgRAAgAgFAMIAGAAIAEgBIABgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAAAQgBAAgBAAIgGAAgAgFgDIAFAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAAAAAIABgDQAAgEgDAAIgFAAg");
	this.shape_1446.setTransform(134.0207,545.9084,1.8904,1.8904);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#1D1D1B").s().p("AgNATQgEgFAAgEQAAgIAFgCQAFgDAHgBIAEAAIAAgDIgBgEIgDgBQgEAAAAAFIgMAAQAAgHAFgDQAFgEAGAAQAHAAAFAEQAEAEAAAGIAAATQAAAGACADIAAABIgMAAIgBgEQgEAEgEAAQgHAAgDgDgAgDAEQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAQAAAGAEgBIADAAIACgCIAAgJIgDAAQgBAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBABg");
	this.shape_1447.setTransform(125.6558,545.8612,1.8904,1.8904);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#1D1D1B").s().p("AgFAVIAAggIgMAAIAAgJIAjAAIAAAJIgMAAIAAAgg");
	this.shape_1448.setTransform(117.9052,545.9084,1.8904,1.8904);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#1D1D1B").s().p("AgMARQgFgGAAgJIAAgDQAAgJAFgFQAFgGAIAAQAIAAAEAFQAFAEAAAIIgMAAQAAgEgBgCQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAgBgBAAQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQgBADAAAFIAAALIACADIADABQAFAAAAgHIAMAAQAAAIgFAEQgFAEgHAAQgIAAgFgFg");
	this.shape_1449.setTransform(110.2492,545.8612,1.8904,1.8904);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#1D1D1B").s().p("AALAcIAAgNIgVAAIAAANIgMAAIAAgXIADAAIAFgFQABgDAAgFIABgSIAdAAIAAAfIAGAAIAAAXgAgBgNQABAMgFAGIAKAAIAAgWIgGAAg");
	this.shape_1450.setTransform(101.6007,547.0899,1.8904,1.8904);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#1D1D1B").s().p("AgMARQgFgFAAgJIAAgDQAAgKAEgFQAGgGAHAAQAJAAAFAGQAEAEAAAKIAAAFIgXAAQABAGABABQADACACAAQAHAAAEgEIAFAHIgHAFQgEABgFAAQgJAAgFgFgAgDgKIgCAHIALAAIAAgBQAAgEgBgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_1451.setTransform(92.8577,545.8612,1.8904,1.8904);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#1D1D1B").s().p("AgRAeIAAg6IALAAIAAAEQAEgFAFAAQAHAAAFAFQADAGAAAJIAAAEQAAAIgDAGQgEAFgIAAQgEAAgEgEIAAAUgAgFgQIAAASQACADADAAQADAAACgDIABgHIAAgDQAAgGgBgDQgCgCgDAAQgDAAgCADg");
	this.shape_1452.setTransform(84.6818,547.3262,1.8904,1.8904);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#1D1D1B").s().p("AAJAdIAAgvIgRAAIAAAvIgNAAIAAg4IArAAIAAA4g");
	this.shape_1453.setTransform(75.1826,544.5379,1.8904,1.8904);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#1D1D1B").s().p("AAQAVIAAgpIAHAAIAAApgAgWAVIAAgpIAHAAIAAAOIAKAAQAGAAAEAEQAEADAAAGQAAAGgEAEQgEAEgGAAgAgPAPIAKAAQACAAADgCQABgDAAgDQAAgDgBgCQgBgCgEAAIgKAAg");
	this.shape_1454.setTransform(193.804,521.3335,1.8904,1.8904);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#1D1D1B").s().p("AgDAmIAAgQIgFABQgHgBgEgFQgEgGAAgJQAAgJAEgHQAEgGAHgBIAFABIAAgRIAHAAIAAASQACgBADgBQAHABAEAGQAEAGAAALQAAAKgEAEQgEAFgHABIgFgBIAAAQgAAEgNIAAAdIADAAQAFABACgEQACgEAAgHQAAgHgCgFQgCgFgFABgAgNgKQgCADAAAKQAAAGACAEQACAEAFgBIADAAIAAgeIgDAAQgEgBgDAFg");
	this.shape_1455.setTransform(182.8398,521.1917,1.8904,1.8904);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgQAeIgHAAIAAgpIAHAAIAAAeIAQgeIAIAAIAAApg");
	this.shape_1456.setTransform(173.2934,521.3335,1.8904,1.8904);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#1D1D1B").s().p("AAKAVIAAgjIgLAAIgBAOQgBAMgCAEQgDAFgHAAIgCAAIAAgGIACAAQADgBABgDIACgNIABgSIAaAAIAAApg");
	this.shape_1457.setTransform(164.3141,521.3335,1.8904,1.8904);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#1D1D1B").s().p("AgLAVIAAgpIAYAAIAAAGIgRAAIAAAjg");
	this.shape_1458.setTransform(158.0286,521.3335,1.8904,1.8904);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#1D1D1B").s().p("AgMARQgFgFAAgJIAAgEQAAgJAFgGQAEgFAIAAQAIAAAFAFQAEAFABAKIAAADQAAAIgFAHQgFAFgIAAQgIAAgEgFgAgHgLQgDAEAAAGIAAADQAAAHADADQADAEAEAAQAKAAAAgNIAAgEQAAgGgDgEQgCgEgFAAQgEAAgDAEg");
	this.shape_1459.setTransform(150.2308,521.2862,1.8904,1.8904);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#1D1D1B").s().p("AgQAeIAAg6IAHAAIABAFQADgGAHAAQAHAAAEAFQAEAGAAAJIAAAEQAAAJgEAFQgEAFgHAAQgHAAgDgEIAAAUgAgIgRIAAAVQADAEAFAAQAEAAADgDQACgEABgFIAAgFQgBgGgCgEQgCgDgFAAQgFAAgDAFg");
	this.shape_1460.setTransform(141.9603,522.7513,1.8904,1.8904);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#1D1D1B").s().p("AgDAVIAAgjIgNAAIAAgGIAhAAIAAAGIgNAAIAAAjg");
	this.shape_1461.setTransform(134.068,521.3335,1.8904,1.8904);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#1D1D1B").s().p("AgLASQgEgFgBgKIAAgDQAAgJAFgHQAEgFAIAAQAIAAAEAFQAEAEAAALIAAADIgZAAIAAABQAAAHADADQADADAEAAIAGgBIAFgEIAEAFQgFAGgKAAQgJAAgEgEgAgGgMQgCADAAAHIASAAIAAgBQgBgHgCgCQgCgDgEAAQgEAAgDADg");
	this.shape_1462.setTransform(126.6483,521.2862,1.8904,1.8904);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#1D1D1B").s().p("AAMAcIAAgxIgYAAIAAAxIgHAAIAAg4IAnAAIAAA4g");
	this.shape_1463.setTransform(117.4326,519.963,1.8904,1.8904);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#1D1D1B").s().p("AAPAVIAAgpIAMAAIAAApgAgaAVIAAgpIAMAAIAAAMIAGAAQAIAAAFAEQAEAEAAAGQAAAHgEAEQgFAEgIAAgAgOAMIAHAAQAAAAABAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAAgGgGAAIgGAAg");
	this.shape_1464.setTransform(253.162,496.7585,1.8904,1.8904);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#1D1D1B").s().p("AgFAVIAAggIgMAAIAAgJIAjAAIAAAJIgMAAIAAAgg");
	this.shape_1465.setTransform(243.143,496.7585,1.8904,1.8904);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#1D1D1B").s().p("AADAVIgGgPIgDAAIAAAPIgMAAIAAgpIAMAAIAAAQIADAAIAGgQIAQAAIgNATIAOAWg");
	this.shape_1466.setTransform(235.5342,496.7585,1.8904,1.8904);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#1D1D1B").s().p("AgMARQgFgFgBgJIAAgDQAAgKAGgFQAEgGAIAAQAJAAAFAGQAEAFAAAJIAAAFIgXAAQAAAFACACQADACACAAQAGAAAFgEIAEAHIgGAFQgEABgGAAQgIAAgFgFgAgDgKQgCADAAAEIALAAIAAgBIgBgGQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQgCAAgBACg");
	this.shape_1467.setTransform(226.933,496.7113,1.8904,1.8904);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#1D1D1B").s().p("AgMAVIAAggIgLAAIAAgJIAXAAIAAAMIAGAAQAJAAAEAEQAFAEAAAGQAAAHgFAEQgFAEgIAAgAAAAMIAGAAQAAAAABAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAAgGgFAAIgGAAg");
	this.shape_1468.setTransform(218.0009,496.7585,1.8904,1.8904);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#1D1D1B").s().p("AgNAZQgFgGAAgKIAAgCQAAgNAEgIQAFgIAJgDIAEgCIABgDIAKAAQABAGgEADQgDAEgIABQgDABgDADQgCACgBAGQAEgFAHAAQAHAAAEAFQAFAFAAAJIAAABQAAAJgGAFQgDAGgKAAQgIAAgFgGgAgFAJIAAACQgBAFACADQACADACAAQAHAAgBgLIAAgBQABgKgHAAQgFAAAAAJg");
	this.shape_1469.setTransform(208.9743,495.0572,1.8904,1.8904);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#1D1D1B").s().p("AgNAQQgFgGAAgIIAAgCQAAgJAFgGQAFgGAIAAQAJAAAFAGQAFAGAAAJIAAACQAAAIgFAGQgFAGgJAAQgIAAgFgGgAgEgJQgCADAAAGIAAACQAAALAGAAQAGAAABgKIAAgDQAAgGgCgDQgCgCgDgBQgCABgCACg");
	this.shape_1470.setTransform(200.4204,496.7113,1.8904,1.8904);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#1D1D1B").s().p("AgMARQgFgFAAgJIAAgDQAAgKAEgFQAGgGAHAAQAJAAAFAGQAEAEAAAKIAAAFIgXAAQAAAEACADQACACADAAQAHAAAEgEIAFAHIgHAFQgEABgFAAQgJAAgFgFgAgDgKIgCAHIALAAIAAgBQAAgEgBgCQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_1471.setTransform(188.4164,496.7113,1.8904,1.8904);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgKAZIgMAAIAAgpIAMAAIAAAZIAKgZIANAAIAAApg");
	this.shape_1472.setTransform(180.0515,496.7585,1.8904,1.8904);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#1D1D1B").s().p("AADAVIgGgPIgDAAIAAAPIgNAAIAAgpIANAAIAAAQIADAAIAGgQIAPAAIgMATIAOAWg");
	this.shape_1473.setTransform(172.0174,496.7585,1.8904,1.8904);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#1D1D1B").s().p("AgMARQgEgFgBgKIAAgDQAAgIAFgGQAFgGAIAAQAIAAAEAFQAEADABAIIgMAAIgBgFQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgCADABAFIAAALIACADIADABQAFAAAAgHIAMAAQAAAIgFAEQgFAEgHAAQgIAAgFgFg");
	this.shape_1474.setTransform(163.5107,496.7113,1.8904,1.8904);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#1D1D1B").s().p("AgMARQgGgFAAgJIAAgDQAAgKAGgFQAEgGAIAAQAJAAAFAGQADAEABAKIAAAFIgXAAQABAFABACQADACADAAQAFAAAFgEIAEAHIgGAFQgEABgGAAQgIAAgFgFgAgDgKQgCADAAAEIALAAIAAgBQAAgEgBgCQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQAAAAAAABQgBAAgBAAQAAAAgBABQAAAAAAAAg");
	this.shape_1475.setTransform(155.6656,496.7113,1.8904,1.8904);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#1D1D1B").s().p("AAFAVIAAgNIgEAAQgIAAgFgEQgFgEAAgHIAAgNIANAAIAAANQAAAEABACQACABACAAIAEAAIAAgUIANAAIAAApg");
	this.shape_1476.setTransform(147.3007,496.7585,1.8904,1.8904);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgJAZIgNAAIAAgpIANAAIAAAZIAJgZIANAAIAAApg");
	this.shape_1477.setTransform(139.0302,496.7585,1.8904,1.8904);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#1D1D1B").s().p("AgNAVIAAgpIAbAAIAAAJIgOAAIAAAgg");
	this.shape_1478.setTransform(131.9886,496.7585,1.8904,1.8904);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#1D1D1B").s().p("AgNAQQgFgEAAgKIAAgCQAAgKAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAKIAAACQAAAKgFAEQgFAGgJAAQgJAAgEgGgAgEgJQgCADAAAGIAAACQAAALAGAAQAGAAAAgKIAAgDQABgGgCgDQgDgCgCgBQgCABgCACg");
	this.shape_1479.setTransform(124.3798,496.7113,1.8904,1.8904);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#1D1D1B").s().p("AAHAVIAAggIgHAAIAAAMQAAAKgEAFQgDAEgHABIgEAAIAAgJIABAAQABgBABAAQAAAAABgBQAAAAAAgBQABAAAAgBQABgDAAgFIABgUIAeAAIAAApg");
	this.shape_1480.setTransform(115.6368,496.7585,1.8904,1.8904);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#1D1D1B").s().p("AgNAQQgFgEAAgKIAAgCQAAgKAFgFQAFgGAIAAQAIAAAGAGQAFAFAAAKIAAACQAAAKgFAEQgFAGgJAAQgIAAgFgGgAgEgJQgCADAAAGIAAACQAAALAGAAQAGAAABgKIAAgDQAAgFgCgEQgBgCgEgBQgDABgBACg");
	this.shape_1481.setTransform(107.6499,496.7113,1.8904,1.8904);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#1D1D1B").s().p("AgMARQgFgFgBgJIAAgDQAAgKAGgFQAEgGAIAAQAKAAAEAGQAFAEgBAKIAAAFIgXAAQAAAEACADQADACADAAQAFAAAFgEIAEAHIgGAFQgEABgGAAQgIAAgFgFgAgDgKQgCADAAAEIALAAIAAgBIgBgGQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQgCAAgBACg");
	this.shape_1482.setTransform(99.5213,496.7113,1.8904,1.8904);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#1D1D1B").s().p("AAFAVIgFgNIgFANIgNAAIALgVIgKgUIAMAAIAFAMIAFgMIAOAAIgLAUIALAVg");
	this.shape_1483.setTransform(91.7707,496.7585,1.8904,1.8904);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#1D1D1B").s().p("AgSAeIAAg6IAMAAIAAAEQAFgFAEAAQAHAAAFAFQACAFABAKIAAAEQAAAIgDAGQgEAFgIAAQgFAAgDgEIAAAUgAgFgQIAAASQACADADAAQADAAACgDQABgCAAgFIAAgDQAAgGgBgDQgCgCgDAAQgDAAgCADg");
	this.shape_1484.setTransform(84.0202,498.1763,1.8904,1.8904);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#1D1D1B").s().p("AAMAcIgEgLIgQAAIgDALIgOAAIAUg3IALAAIAUA3gAgFAHIALAAIgGgTg");
	this.shape_1485.setTransform(75.0881,495.388,1.8904,1.8904);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#1D1D1B").s().p("AAPAVIAAgpIAIAAIAAApgAgWAVIAAgpIAHAAIAAAOIAKAAQAGAAAEAEQAEADAAAGQAAAGgEAEQgFAEgFAAgAgPAPIAKAAQACAAADgCQABgDAAgDQAAgDgBgCQgCgCgDAAIgKAAg");
	this.shape_1486.setTransform(260.818,470.2932,1.8904,1.8904);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#1D1D1B").s().p("AgLARQgFgEAAgLIAAgDQAAgJAFgGQAFgFAHAAQAIAAADAEQAFAEAAAHIgHAAQAAgEgDgCQgCgDgEAAQgEAAgDADQgCADAAAHIAAAEQAAAIACADQADADAEAAQAEAAACgCQADgCAAgEIAHAAQAAAGgFAEQgFAEgGAAQgIAAgEgFg");
	this.shape_1487.setTransform(251.3661,470.2459,1.8904,1.8904);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#1D1D1B").s().p("AAIAVIgMgSIgFAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIAMgSIAJAAIgPAUIAQAVg");
	this.shape_1488.setTransform(243.8991,470.2932,1.8904,1.8904);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#1D1D1B").s().p("AgLASQgFgFAAgKIAAgDQAAgKAEgGQAFgFAIAAQAHAAAFAFQAEAFAAAKIAAADIgZAAIAAABQAAAHACADQAEADAEAAIAGgBIAEgEIAFAFQgFAGgKAAQgJAAgEgEgAgGgMQgCADAAAHIASAAIAAgBQgBgIgCgBQgCgDgEAAQgEAAgDADg");
	this.shape_1489.setTransform(235.5342,470.2459,1.8904,1.8904);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#1D1D1B").s().p("AALAVIAAgjIgMAAIAAAOQgBALgDAFQgCAEgIABIgCAAIAAgGIACAAQADgBABgDIACgNIABgSIAaAAIAAApg");
	this.shape_1490.setTransform(226.7912,470.2932,1.8904,1.8904);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("#1D1D1B").s().p("AAJAVIAAgjIgQAAIAAAjIgIAAIAAgpIAfAAIAAApg");
	this.shape_1491.setTransform(218.568,470.2932,1.8904,1.8904);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#1D1D1B").s().p("AAPAVIAAgcIgMAcIgEAAIgNgdIAAAdIgHAAIAAgpIAKAAIALAfIANgfIAJAAIAAApg");
	this.shape_1492.setTransform(208.8326,470.2932,1.8904,1.8904);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#1D1D1B").s().p("AgMARQgFgFAAgJIAAgEQAAgJAFgGQAEgFAIAAQAIAAAFAFQAFAHAAAIIAAADQAAAIgFAHQgFAFgIAAQgHAAgFgFgAgHgLQgDAEAAAGIAAADQAAAHADADQADAEAEAAQAKAAAAgNIAAgEQAAgGgCgEQgDgEgFAAQgEAAgDAEg");
	this.shape_1493.setTransform(199.1916,470.2459,1.8904,1.8904);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#1D1D1B").s().p("AAIAVIgMgSIgFAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIAMgSIAJAAIgQAUIARAVg");
	this.shape_1494.setTransform(191.5356,470.2932,1.8904,1.8904);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#1D1D1B").s().p("AgLASQgFgFAAgKIAAgDQAAgKAFgGQAEgFAHAAQAIAAAFAFQAEAEAAALIAAADIgaAAIAAABQAAAHADADQAEADADAAIAGgBIAGgEIAEAFQgFAGgLAAQgHAAgFgEgAgGgMQgBACgCAIIASAAIAAgBQAAgGgCgDQgCgDgFAAQgDAAgDADg");
	this.shape_1495.setTransform(179.2954,470.2459,1.8904,1.8904);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#1D1D1B").s().p("AAPAVIAAgpIAIAAIAAApgAgWAVIAAgpIAHAAIAAAOIAKAAQAGAAAEAEQAEADAAAGQAAAGgEAEQgEAEgGAAgAgPAPIAKAAQACAAADgCQABgDAAgDQAAgDgBgCQgCgCgDAAIgKAAg");
	this.shape_1496.setTransform(169.4181,470.2932,1.8904,1.8904);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgQAAIAAASIgHAAIAAgpIAHAAIAAASIAQAAIAAgSIAIAAIAAApg");
	this.shape_1497.setTransform(159.4936,470.2932,1.8904,1.8904);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#1D1D1B").s().p("AgQAeIAAg6IAGAAIABAFQAEgGAGAAQAIAAAEAFQADAFABAKIAAAEQAAAJgEAFQgEAFgIAAQgGAAgEgEIAAAUgAgJgRIAAAVQADAEAGAAQAFAAACgDQACgDAAgGIAAgFQAAgHgCgDQgCgDgFAAQgGAAgDAFg");
	this.shape_1498.setTransform(151.2232,471.711,1.8904,1.8904);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#1D1D1B").s().p("AgMARQgFgFAAgJIAAgEQAAgJAFgGQAEgFAIAAQAIAAAFAFQAEAFABAKIAAADQAAAIgFAHQgFAFgIAAQgIAAgEgFgAgHgLQgDAEAAAGIAAADQAAAHADADQADAEAEAAQAKAAAAgNIAAgEQAAgGgDgEQgCgEgFAAQgEAAgDAEg");
	this.shape_1499.setTransform(142.6692,470.2459,1.8904,1.8904);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#1D1D1B").s().p("AgMAZQgFgGAAgJIAAgEQAAgLAFgJQAFgIAHgBQAFgBACgCQAAAAABgBQAAAAAAAAQABgBAAgBQAAAAAAgBIAGAAIAAACQAAAHgIADIgGABQgDABgEAEQgEAEAAAFQAFgGAGAAQAIAAAEAFQAFAFAAAJIAAAAQAAAKgFAFQgFAGgIAAQgHAAgFgGgAgGAAQgDADAAAHQAAAHADAEQACAEAEAAQAEAAADgEQADgDAAgJQAAgGgDgDQgDgDgEAAQgEAAgCADg");
	this.shape_1500.setTransform(134.4461,468.5919,1.8904,1.8904);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#1D1D1B").s().p("AgMARQgFgFAAgJIAAgEQAAgJAFgGQAFgFAHAAQAIAAAFAFQAFAGAAAJIAAADQAAAJgFAGQgEAFgJAAQgHAAgFgFgAgGgLQgDAEAAAGIAAADQAAAHADADQACAEAEAAQAKAAAAgNIAAgEQAAgGgCgEQgEgEgEAAQgEAAgCAEg");
	this.shape_1501.setTransform(125.9866,470.2459,1.8904,1.8904);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#1D1D1B").s().p("AgOAXQgGgHAAgLIAAgJQAAgLAGgHQAHgGAIAAQAJAAAFAFQAFAFABAJIgJAAQAAgHgCgDQgEgDgFAAQgFAAgEAFQgDAEgBAJIAAAJQAAAJAEAFQAEAEAEAAQAHAAACgDQACgCABgIIAJAAQgBAKgFAEQgFAFgKAAQgIAAgGgGg");
	this.shape_1502.setTransform(117.1018,468.8754,1.8904,1.8904);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("#1D1D1B").s().p("AAQAVIAAgpIAHAAIAAApgAgWAVIAAgpIAHAAIAAAOIAKAAQAGAAAEAEQAEADAAAGQAAAHgEADQgEAEgGAAgAgPAPIAKAAQADAAACgCQABgCAAgEQAAgEgBgBQgBgCgEAAIgKAAg");
	this.shape_1503.setTransform(294.8449,440.0471,1.8904,1.8904);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#1D1D1B").s().p("AgLARQgFgFAAgJIAAgEQAAgKAFgFQAEgFAIAAQAHAAAEAEQAFAFAAAHIgIAAQABgFgDgCQgDgDgDAAQgEAAgDADQgCACAAAIIAAAFQAAAGACAEQADADAEAAQAEAAACgCQADgDgBgDIAIAAQAAAGgFAEQgFAEgGAAQgIAAgEgFg");
	this.shape_1504.setTransform(285.4402,439.9998,1.8904,1.8904);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("#1D1D1B").s().p("AAIAVIgMgSIgFAAIAAASIgIAAIAAgpIAIAAIAAASIAEAAIAMgSIAJAAIgQAUIARAVg");
	this.shape_1505.setTransform(277.9732,440.0471,1.8904,1.8904);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#1D1D1B").s().p("AgLARQgEgFgBgIIAAgFQAAgJAFgGQAEgFAIAAQAIAAAEAFQAEAEAAAKIAAAEIgZAAIAAABQAAAHACADQADADAFAAIAGgBIAFgDIAEADQgFAHgKAAQgJAAgEgFgAgGgMQgCAEAAAGIASAAIAAgBQgBgGgCgDQgCgDgEAAQgEAAgDADg");
	this.shape_1506.setTransform(269.561,439.9998,1.8904,1.8904);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("#1D1D1B").s().p("AAKAVIAAgjIgLAAIgBAOQgBAMgCAEQgDAFgHAAIgCAAIAAgGIACAAQADgBABgDQACgEAAgJIABgSIAaAAIAAApg");
	this.shape_1507.setTransform(260.9126,440.0471,1.8904,1.8904);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("#1D1D1B").s().p("AAIAVIAAgjIgQAAIAAAjIgHAAIAAgpIAfAAIAAApg");
	this.shape_1508.setTransform(252.6894,440.0471,1.8904,1.8904);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("#1D1D1B").s().p("AAPAVIAAgcIgMAcIgEAAIgNgdIAAAdIgHAAIAAgpIAKAAIALAfIANgfIAKAAIAAApg");
	this.shape_1509.setTransform(242.9067,440.0471,1.8904,1.8904);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("#1D1D1B").s().p("AgMARQgFgGAAgIIAAgEQAAgIAFgHQAFgFAHAAQAIAAAFAFQAFAFAAAJIAAAEQAAAKgFAEQgEAGgJAAQgHAAgFgFgAgHgLQgCAEAAAGIAAADQAAAGACAFQADADAEAAQAKAAABgNIAAgEQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_1510.setTransform(233.2185,439.9998,1.8904,1.8904);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("#1D1D1B").s().p("AAHAVIgLgSIgFAAIAAASIgIAAIAAgpIAIAAIAAASIAEAAIAMgSIAJAAIgQAUIARAVg");
	this.shape_1511.setTransform(225.6097,440.0471,1.8904,1.8904);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("#1D1D1B").s().p("AgLARQgFgGAAgHIAAgFQAAgJAFgGQAFgFAGAAQAIAAAFAFQAEAFAAAJIAAAEIgZAAIAAABQAAAIACACQADADAFAAIAGgBIAFgDIADADQgEAHgLAAQgHAAgFgFgAgGgMQgCAEAAAGIARAAIAAgBQAAgIgCgBQgCgDgFAAQgDAAgDADg");
	this.shape_1512.setTransform(213.3222,439.9998,1.8904,1.8904);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgQAeIgHAAIAAgpIAHAAIAAAeIAQgeIAIAAIAAApg");
	this.shape_1513.setTransform(205.0518,440.0471,1.8904,1.8904);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("#1D1D1B").s().p("AAIAVIgMgSIgFAAIAAASIgHAAIAAgpIAHAAIAAASIAEAAIAMgSIAJAAIgPAUIAQAVg");
	this.shape_1514.setTransform(197.1122,440.0471,1.8904,1.8904);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("#1D1D1B").s().p("AgLARQgFgFAAgJIAAgEQAAgKAFgFQAEgFAIAAQAHAAAFAEQADAEABAIIgIAAQAAgFgCgCQgDgDgDAAQgEAAgDADQgCAEgBAGIAAAFQABAGACAEQADADAEAAQAEAAACgCQACgDAAgDIAIAAQgBAHgEADQgFAEgGAAQgIAAgEgFg");
	this.shape_1515.setTransform(188.8418,439.9998,1.8904,1.8904);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("#1D1D1B").s().p("AgQAeIAAg6IAHAAIAAAFQAFgGAFAAQAIAAAEAFQAEAGAAAJIAAAEQAAAJgEAFQgDAFgJAAQgFAAgFgEIAAAUgAgJgRIAAAVQADAEAGAAQAFAAACgDQADgEgBgFIAAgFQABgGgDgEQgCgDgFAAQgGAAgDAFg");
	this.shape_1516.setTransform(180.8077,441.4649,1.8904,1.8904);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("#1D1D1B").s().p("AAQAVIAAgpIAHAAIAAApgAgWAVIAAgpIAHAAIAAAOIAKAAQAGAAAEAEQAEADAAAGQAAAHgEADQgEAEgGAAgAgPAPIAKAAQADAAACgCQABgCAAgEQAAgEgBgBQgBgCgEAAIgKAAg");
	this.shape_1517.setTransform(170.6469,440.0471,1.8904,1.8904);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f("#1D1D1B").s().p("AgDAVIAAgjIgNAAIAAgGIAgAAIAAAGIgMAAIAAAjg");
	this.shape_1518.setTransform(161.4313,440.0471,1.8904,1.8904);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("#1D1D1B").s().p("AgMARQgEgFAAgJIAAgEQAAgKAEgFQAGgFAHAAQAHAAAEAEQAFAFAAAHIgHAAQgBgFgCgCQgCgDgEAAQgEAAgDADQgCADAAAHIAAAFQAAAHACADQADADAEAAQAEAAACgCQACgCABgEIAHAAQAAAGgFAEQgFAEgGAAQgHAAgGgFg");
	this.shape_1519.setTransform(154.0588,439.9998,1.8904,1.8904);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f("#1D1D1B").s().p("AgMATQgEgEABgFQAAgGAEgEQAGgDAHAAIAFAAIAAgFQAAgDgCgCQgBgCgEAAQgCAAgDACQgCACAAACIgHAAQAAgDABgCQADgEAEgBQADgCAEAAQAGAAAFADQADADAAAHIAAAUIABAJIAAABIgHAAIgCgGQgDAGgGAAQgGAAgEgDgAgFADQgCADAAADQAAADABACQACACADAAIAFgBIADgEIAAgKIgEAAQgFAAgDACg");
	this.shape_1520.setTransform(146.0247,439.9998,1.8904,1.8904);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("#1D1D1B").s().p("AAJAVIAAgSIgQAAIAAASIgIAAIAAgpIAIAAIAAASIAQAAIAAgSIAHAAIAAApg");
	this.shape_1521.setTransform(137.6597,440.0471,1.8904,1.8904);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("#1D1D1B").s().p("AgMARQgFgGAAgIIAAgEQAAgIAFgHQAFgFAHAAQAIAAAFAFQAFAFAAAJIAAAEQAAAKgFAEQgEAGgJAAQgHAAgFgFgAgHgLQgCAEAAAGIAAADQAAAGACAFQADADAEAAQAKAAABgNIAAgEQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_1522.setTransform(129.153,439.9998,1.8904,1.8904);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f("#1D1D1B").s().p("AATAdIABgsIgRAsIgFAAIgRgsIABAsIgIAAIAAg5IAKAAIAQAuIARguIAKAAIAAA5g");
	this.shape_1523.setTransform(118.5669,438.6766,1.8904,1.8904);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f("#1D1D1B").s().p("AAGAVIAAgPIgFAAIgGAPIgMAAIAJgRQgEgBgCgDQgCgCAAgEQAAgGAFgEQAFgEAHAAIARAAIAAApgAgCgKIgCAEQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAQAAAAABAAIAFAAIAAgLIgFAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAAAg");
	this.shape_1524.setTransform(249.523,409.801,1.8904,1.8904);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgKAZIgMAAIAAgpIAMAAIAAAZIAKgZIANAAIAAApg");
	this.shape_1525.setTransform(241.4889,409.801,1.8904,1.8904);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f("#1D1D1B").s().p("AAGAVIAAgQIgKAAIAAAQIgNAAIAAgpIANAAIAAARIAKAAIAAgRIAMAAIAAApg");
	this.shape_1526.setTransform(233.0294,409.801,1.8904,1.8904);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f("#1D1D1B").s().p("AgMARQgFgFAAgJIAAgDQAAgKAFgFQAEgGAJAAQAIAAAFAGQAEAEAAAKIAAAFIgXAAQABAGABABQADACADAAQAGAAAEgEIAFAHIgHAFQgEABgFAAQgJAAgFgFgAgDgKQgCADAAAEIALAAIAAgBQAAgEgBgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_1527.setTransform(224.9008,409.7537,1.8904,1.8904);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f("#1D1D1B").s().p("AARAVIgHgQIgEAAIAAAQIgLAAIAAgQIgEAAIgHAQIgPAAIAMgWIgMgTIAPAAIAIAQIADAAIAAgQIALAAIAAAQIAEAAIAHgQIAOAAIgLATIALAWg");
	this.shape_1528.setTransform(214.6455,409.801,1.8904,1.8904);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f("#1D1D1B").s().p("AgOAdIAAgJIACAAIAEgBIACgDIABgDIgNgqIANAAIAFAYIAGgYIANAAIgPAwQgEALgJAAg");
	this.shape_1529.setTransform(204.4847,411.4078,1.8904,1.8904);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f("#1D1D1B").s().p("AgRAeIAAg6IALAAIAAAEQAFgFAEAAQAHAAAFAFQADAGAAAJIAAAEQAAAIgDAGQgEAFgIAAQgFAAgDgEIAAAUgAgFgQIAAASQACADADAAQADAAABgDQACgCAAgFIAAgDQAAgGgCgDQgBgCgDAAQgDAAgCADg");
	this.shape_1530.setTransform(196.7814,411.2188,1.8904,1.8904);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f("#1D1D1B").s().p("AgNAQQgFgFAAgJIAAgCQAAgJAFgGQAFgGAIAAQAJAAAFAGQAFAGAAAJIAAACQAAAIgFAGQgFAGgJAAQgJAAgEgGgAgEgJQgCACAAAHIAAACQAAALAGAAQAGAAABgJIAAgEQAAgGgCgDQgCgCgDgBQgCABgCACg");
	this.shape_1531.setTransform(188.2274,409.7537,1.8904,1.8904);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f("#1D1D1B").s().p("AgNAQQgFgFAAgJIAAgCQAAgKAFgFQAFgGAIAAQAJAAAFAGQAFAFAAAKIAAACQAAAJgFAFQgFAGgJAAQgJAAgEgGgAgEgJQgCAEAAAFIAAACQAAALAGAAQAGAAAAgJIAAgEQABgGgCgDQgDgCgCgBQgCABgCACg");
	this.shape_1532.setTransform(179.8625,409.7537,1.8904,1.8904);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f("#1D1D1B").s().p("AgMARQgEgFgBgKIAAgDQAAgIAFgGQAFgGAIAAQAHAAAFAFQAEADABAJIgMAAIgBgGQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBADAAAFIAAALIACADIACABQAGAAAAgHIAMAAQAAAIgFAEQgFAEgHAAQgIAAgFgFg");
	this.shape_1533.setTransform(171.8284,409.7537,1.8904,1.8904);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f("#1D1D1B").s().p("AgMARQgFgFAAgJIAAgDQAAgKAEgFQAGgGAHAAQAJAAAFAGQAEAEAAAKIAAAFIgXAAQABAGABABQADACACAAQAHAAAEgEIAFAHIgHAFQgEABgFAAQgJAAgFgFgAgDgKIgCAHIALAAIAAgBQAAgEgBgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_1534.setTransform(160.0607,409.7537,1.8904,1.8904);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f("#1D1D1B").s().p("AAPAVIAAgpIAMAAIAAApgAgaAVIAAgpIAMAAIAAAMIAGAAQAIAAAFAEQAEAEAAAGQAAAHgEAEQgFAEgIAAgAgOAMIAGAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAgBQAAAAAAgBQAAgGgGAAIgGAAg");
	this.shape_1535.setTransform(149.7109,409.801,1.8904,1.8904);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f("#1D1D1B").s().p("AAFAVIAAgQIgJAAIAAAQIgNAAIAAgpIANAAIAAARIAJAAIAAgRIANAAIAAApg");
	this.shape_1536.setTransform(139.3611,409.801,1.8904,1.8904);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f("#1D1D1B").s().p("AgLASQgFgEAAgFIAMAAQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAIACABQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBQAAgFgEAAIgFAAIAAgGIAEAAQAEAAAAgFQAAgEgEAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIgMAAQAAgFAEgEQAEgEAHAAQAIAAAEADQAFADAAAGIgCAGIgEADQAGACAAAHQAAAGgEADQgFAEgIAAQgHAAgEgEg");
	this.shape_1537.setTransform(131.3269,409.801,1.8904,1.8904);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f("#1D1D1B").s().p("AgNAQQgFgFAAgJIAAgCQAAgJAFgGQAFgGAIAAQAJAAAFAGQAFAGAAAJIAAACQAAAIgFAGQgFAGgJAAQgJAAgEgGgAgEgJQgCACAAAHIAAACQAAALAGAAQAHAAAAgJIAAgEQAAgGgCgDQgCgCgDgBQgCABgCACg");
	this.shape_1538.setTransform(123.2928,409.7537,1.8904,1.8904);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f("#1D1D1B").s().p("AAGAVIAAgZIgKAZIgNAAIAAgpIANAAIAAAZIAKgZIAMAAIAAApg");
	this.shape_1539.setTransform(114.8806,409.801,1.8904,1.8904);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f("#1D1D1B").s().p("AgNAVIAAgpIAbAAIAAAJIgOAAIAAAgg");
	this.shape_1540.setTransform(107.8862,409.801,1.8904,1.8904);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgKAZIgMAAIAAgpIAMAAIAAAZIAKgZIANAAIAAApg");
	this.shape_1541.setTransform(100.2302,409.801,1.8904,1.8904);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f("#1D1D1B").s().p("AAHAVIAAggIgHAAIAAAMQgBALgDAEQgDAEgHABIgEAAIAAgJIABAAQACgBACgDIABgIIABgUIAeAAIAAApg");
	this.shape_1542.setTransform(91.5344,409.801,1.8904,1.8904);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f("#1D1D1B").s().p("AgMARQgFgFAAgJIAAgDQAAgKAEgFQAFgGAIAAQAJAAAEAGQAFAEAAAKIAAAFIgXAAQAAAFACACQADACACAAQAHAAADgEIAGAHIgHAFQgFABgFAAQgIAAgFgFgAgEgKQgBADAAAEIALAAIAAgBIgBgGQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQgCAAgCACg");
	this.shape_1543.setTransform(83.6421,409.7537,1.8904,1.8904);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f("#1D1D1B").s().p("AgUAdIAAg4IAVAAQAKAAAFAEQAFAFAAAJQAAAJgFADQgGAFgJABIgIAAIAAAUgAgHAAIAIAAQADgBACgCQACgCAAgDQAAgGgCgBQgCgDgDAAIgIAAg");
	this.shape_1544.setTransform(74.9463,408.4305,1.8904,1.8904);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f("#1D1D1B").s().p("AgQAVIAAgpIAQAAQAHAAAEADQAFACAAAGQgBAEgBACIgFADQAEAAACADQACACAAAEQAAAGgEADQgEADgIAAgAgIAPIAJAAQAJAAgBgGQABgHgJAAIgJAAgAgIgCIAIAAQAIAAAAgGQAAgGgIAAIgIAAg");
	this.shape_1545.setTransform(323.7205,383.3357,1.8904,1.8904);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f("#1D1D1B").s().p("AgMARQgFgGAAgIIAAgEQAAgIAFgHQAFgFAHAAQAIAAAFAFQAFAFAAAKIAAADQAAAJgFAGQgEAFgJAAQgHAAgFgFgAgHgLQgCAEAAAGIAAADQAAAGACAEQADAEAEAAQAKAAABgNIAAgEQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_1546.setTransform(315.072,383.2884,1.8904,1.8904);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f("#1D1D1B").s().p("AANAbIAAgMIgZAAIAAAMIgIAAIAAgSIADAAIACgDQAEgFABgJIAAgSIAaAAIAAAjIAFAAIAAASgAgDgJQAAALgFAHIAQAAIAAgdIgKAAg");
	this.shape_1547.setTransform(306.2817,384.4699,1.8904,1.8904);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f("#1D1D1B").s().p("AgMARQgFgGAAgIIAAgEQAAgJAFgGQAFgFAHAAQAIAAAFAFQAFAFAAAKIAAADQAAAJgFAGQgEAFgJAAQgHAAgFgFgAgHgLQgCADAAAHIAAADQAAAHACADQADAEAEAAQAKAAABgNIAAgEQAAgGgDgEQgDgEgFAAQgEAAgDAEg");
	this.shape_1548.setTransform(298.1531,383.2884,1.8904,1.8904);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f("#1D1D1B").s().p("AgQAeIAAg6IAHAAIAAAFQAEgGAGAAQAHAAAGAFQADAFAAAKIAAAEQAAAKgEAEQgEAFgHAAQgGAAgEgEIAAAUgAgIgRIAAAVQADAEAFAAQAFAAACgDQADgEgBgFIAAgFQABgHgDgDQgCgDgFAAQgFAAgDAFg");
	this.shape_1549.setTransform(289.8826,384.7535,1.8904,1.8904);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f("#1D1D1B").s().p("AgMARQgEgFgBgJIAAgEQAAgIAFgHQAFgFAHAAQAJAAAEAFQAFAFAAAKIAAADQAAAJgEAGQgFAFgJAAQgHAAgFgFgAgGgLQgDAEAAAGIAAADQAAAHADADQACAEAEAAQALAAAAgNIAAgEQAAgGgDgEQgDgEgFAAQgEAAgCAEg");
	this.shape_1550.setTransform(281.3287,383.2884,1.8904,1.8904);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f("#1D1D1B").s().p("AgMAVIAAgpIAZAAIAAAGIgRAAIAAAjg");
	this.shape_1551.setTransform(274.6178,383.3357,1.8904,1.8904);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f("#1D1D1B").s().p("AAQAVIAAgpIAHAAIAAApgAgWAVIAAgpIAIAAIAAAOIAJAAQAFAAAFAEQAEADAAAGQAAAGgEAEQgFAEgFAAgAgOAPIAJAAQADAAACgCQABgCAAgEQAAgEgBgBQgCgCgDAAIgJAAg");
	this.shape_1552.setTransform(261.2906,383.3357,1.8904,1.8904);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f("#1D1D1B").s().p("AgQAeIAAg6IAHAAIABAFQADgGAHAAQAHAAAEAFQAEAGAAAJIAAAEQAAAJgEAFQgEAFgHAAQgHAAgDgEIAAAUgAgIgRIAAAVQADAEAFAAQAEAAADgDQACgEABgFIAAgFQgBgGgCgEQgCgDgFAAQgFAAgDAFg");
	this.shape_1553.setTransform(251.6969,384.7535,1.8904,1.8904);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f("#1D1D1B").s().p("AgDAVIAAgjIgNAAIAAgGIAhAAIAAAGIgNAAIAAAjg");
	this.shape_1554.setTransform(243.8046,383.3357,1.8904,1.8904);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f("#1D1D1B").s().p("AAIAVIAAgSIgQAAIAAASIgHAAIAAgpIAHAAIAAASIAQAAIAAgSIAIAAIAAApg");
	this.shape_1555.setTransform(235.9595,383.3357,1.8904,1.8904);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f("#1D1D1B").s().p("AgLASQgFgFAAgKIAAgDQAAgKAFgGQAEgFAHAAQAIAAAFAFQAEAEAAALIAAADIgaAAIAAABQAAAHADADQAEADADAAIAHgBIAFgEIADAFQgEAGgLAAQgHAAgFgEgAgGgMQgBACgCAIIASAAIAAgCQAAgFgCgDQgCgDgFAAQgDAAgDADg");
	this.shape_1556.setTransform(227.7836,383.2884,1.8904,1.8904);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f("#1D1D1B").s().p("AALAbIAAgMIgdAAIAAgqIAIAAIAAAkIAQAAIAAgkIAIAAIAAAkIAFAAIgBASg");
	this.shape_1557.setTransform(219.6077,384.5172,1.8904,1.8904);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f("#1D1D1B").s().p("AgLASQgFgFAAgKIAAgDQAAgKAFgGQAEgFAHAAQAJAAADAFQAFAEAAALIAAADIgZAAIAAABQAAAHACADQAEADADAAIAHgBIAEgEIAFAFQgGAGgKAAQgHAAgFgEgAgGgMQgBACgBAIIARAAIAAgCQAAgGgCgCQgCgDgFAAQgDAAgDADg");
	this.shape_1558.setTransform(207.1785,383.2884,1.8904,1.8904);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f("#1D1D1B").s().p("AAJAVIAAgeIgRAeIgHAAIAAgpIAHAAIAAAeIARgeIAHAAIAAApg");
	this.shape_1559.setTransform(198.8135,383.3357,1.8904,1.8904);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f("#1D1D1B").s().p("AAIAVIgMgSIgFAAIAAASIgHAAIAAgpIAHAAIAAASIAFAAIALgSIAJAAIgPAUIAQAVg");
	this.shape_1560.setTransform(190.9212,383.3357,1.8904,1.8904);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f("#1D1D1B").s().p("AgLARQgFgEAAgLIAAgDQAAgKAFgFQAFgFAHAAQAHAAAEAEQAFAFAAAGIgHAAQgBgFgCgCQgCgCgEAAQgEAAgCADQgDAEAAAGIAAAEQAAAJADACQACADAEAAQAEAAACgCQACgBABgFIAHAAQAAAHgFADQgFAEgGAAQgHAAgFgFg");
	this.shape_1561.setTransform(182.6035,383.2884,1.8904,1.8904);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f("#1D1D1B").s().p("AgLASQgFgFAAgKIAAgDQAAgKAEgGQAFgFAIAAQAHAAAFAFQAEAFAAAKIAAADIgaAAIAAABQABAHADADQADADAEAAIAFgBIAGgEIADAFQgEAGgKAAQgJAAgEgEgAgFgMQgDADgBAHIATAAIAAgCQgCgGgBgCQgCgDgEAAQgEAAgCADg");
	this.shape_1562.setTransform(174.7584,383.2884,1.8904,1.8904);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f("#1D1D1B").s().p("AAIAVIAAgPIgIABQgHAAgEgEQgEgDAAgHIAAgNIAIAAIAAANQABAIAGAAIAIgBIAAgUIAIAAIAAApg");
	this.shape_1563.setTransform(166.488,383.3357,1.8904,1.8904);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f("#1D1D1B").s().p("AAIAVIAAgeIgQAeIgHAAIAAgpIAHAAIAAAeIAQgeIAIAAIAAApg");
	this.shape_1564.setTransform(158.3594,383.3357,1.8904,1.8904);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f("#1D1D1B").s().p("AgQAeIAAg6IAHAAIABAFQAEgGAFAAQAIAAAEAFQAEAFAAAKIAAAEQAAAKgEAEQgEAFgHAAQgGAAgEgEIAAAUgAgIgRIAAAVQADAEAFAAQAFAAACgDQACgEAAgFIAAgFQAAgHgCgDQgCgDgFAAQgFAAgDAFg");
	this.shape_1565.setTransform(149.9945,384.7535,1.8904,1.8904);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f("#1D1D1B").s().p("AgMARQgEgFgBgJIAAgEQAAgIAFgHQAFgFAHAAQAJAAAEAFQAFAFAAAKIAAADQAAAJgEAGQgFAFgJAAQgHAAgFgFgAgGgLQgDAEAAAGIAAADQAAAHADADQACAEAEAAQALAAAAgNIAAgEQAAgGgDgEQgDgEgFAAQgEAAgCAEg");
	this.shape_1566.setTransform(141.4405,383.2884,1.8904,1.8904);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f("#1D1D1B").s().p("AgDAVIAAgjIgNAAIAAgGIAhAAIAAAGIgOAAIAAAjg");
	this.shape_1567.setTransform(134.0207,383.3357,1.8904,1.8904);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f("#1D1D1B").s().p("AgMARQgEgEAAgLIAAgDQAAgJAEgGQAGgFAHAAQAHAAAEAEQAEAEABAHIgHAAQgBgEgCgDQgCgCgEAAQgEAAgDADQgCADAAAHIAAAEQAAAIACADQADADAEAAQAEAAACgCQACgCABgEIAHAAQgBAHgEADQgFAEgGAAQgIAAgFgFg");
	this.shape_1568.setTransform(126.6483,383.2884,1.8904,1.8904);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f("#1D1D1B").s().p("AANAcIAAgrIgYArIgJAAIAAg3IAJAAIAAAqIAYgqIAIAAIAAA3g");
	this.shape_1569.setTransform(117.3854,381.9651,1.8904,1.8904);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f("#1D1D1B").s().p("AAPAVIAAgpIAMAAIAAApgAgaAVIAAgpIAMAAIAAAMIAGAAQAIAAAFAEQAEAEAAAGQAAAHgEAEQgFAEgIAAgAgOAMIAGAAQABAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgGgGAAIgGAAg");
	this.shape_1570.setTransform(341.9626,354.98,1.8904,1.8904);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f("#1D1D1B").s().p("AgMARQgFgGAAgJIAAgDQAAgJAFgGQAFgFAIAAQAIAAAEAEQAFAFAAAIIgMAAIgBgGQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgBADAAAFIAAALIACADIADABQAFAAAAgHIAMAAQAAAHgFAFQgFAEgHAAQgIAAgFgFg");
	this.shape_1571.setTransform(331.9909,354.9327,1.8904,1.8904);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f("#1D1D1B").s().p("AADAVIgGgPIgDAAIAAAPIgMAAIAAgpIAMAAIAAAQIADAAIAGgQIAPAAIgMATIANAWg");
	this.shape_1572.setTransform(324.3821,354.98,1.8904,1.8904);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f("#1D1D1B").s().p("AgMARQgGgGAAgIIAAgDQABgKAFgGQAEgFAIAAQAJAAAFAFQAEAGAAAJIAAAFIgXAAQAAAFACACQADACADAAQAFAAAFgEIAEAHIgGAFQgEABgFAAQgJAAgFgFgAgDgKQgCADAAAEIALAAIAAgBIgBgGQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQgCAAgBABg");
	this.shape_1573.setTransform(315.7809,354.9327,1.8904,1.8904);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f("#1D1D1B").s().p("AAHAVIAAggIgHAAIAAAMQAAAKgEAFQgDAEgHABIgEAAIAAgJIABAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBQABgDAAgFIABgUIAeAAIAAApg");
	this.shape_1574.setTransform(307.1324,354.98,1.8904,1.8904);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f("#1D1D1B").s().p("AAFAVIAAggIgKAAIAAAgIgMAAIAAgpIAjAAIAAApg");
	this.shape_1575.setTransform(299.0037,354.98,1.8904,1.8904);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f("#1D1D1B").s().p("AAMAVIAAgWIgIAWIgIAAIgHgVIAAAVIgMAAIAAgpIAPAAIAIAcIAJgcIAPAAIAAApg");
	this.shape_1576.setTransform(289.1265,354.98,1.8904,1.8904);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f("#1D1D1B").s().p("AgNAQQgFgFAAgKIAAgBQAAgJAFgHQAFgFAIAAQAJAAAFAFQAFAHAAAJIAAABQAAAKgFAFQgFAGgJAAQgJAAgEgGgAgEgJQgCACAAAHIAAABQAAAMAGAAQAHAAAAgJIAAgEQAAgGgCgDQgCgDgDABQgCgBgCADg");
	this.shape_1577.setTransform(279.3438,354.9327,1.8904,1.8904);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f("#1D1D1B").s().p("AADAVIgGgPIgDAAIAAAPIgMAAIAAgpIAMAAIAAAQIADAAIAGgQIAPAAIgMATIANAWg");
	this.shape_1578.setTransform(271.8295,354.98,1.8904,1.8904);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f("#1D1D1B").s().p("AAGAVIAAgZIgKAZIgNAAIAAgpIANAAIAAAZIAKgZIAMAAIAAApg");
	this.shape_1579.setTransform(259.0222,354.98,1.8904,1.8904);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgKAZIgMAAIAAgpIAMAAIAAAZIAKgZIANAAIAAApg");
	this.shape_1580.setTransform(246.7347,354.98,1.8904,1.8904);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f("#1D1D1B").s().p("AADAVIgGgPIgDAAIAAAPIgMAAIAAgpIAMAAIAAAQIADAAIAGgQIAPAAIgLATIAMAWg");
	this.shape_1581.setTransform(238.6533,354.98,1.8904,1.8904);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgKAZIgMAAIAAgpIAMAAIAAAZIAKgZIANAAIAAApg");
	this.shape_1582.setTransform(229.7685,354.98,1.8904,1.8904);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f("#1D1D1B").s().p("AAGAVIAAgQIgKAAIAAAQIgNAAIAAgpIANAAIAAARIAKAAIAAgRIAMAAIAAApg");
	this.shape_1583.setTransform(221.3091,354.98,1.8904,1.8904);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f("#1D1D1B").s().p("AgFAVIAAggIgMAAIAAgJIAjAAIAAAJIgMAAIAAAgg");
	this.shape_1584.setTransform(213.275,354.98,1.8904,1.8904);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f("#1D1D1B").s().p("AAGAVIAAgPIgFAAIgGAPIgNAAIAJgRQgDgBgCgDQgDgDAAgDQABgGAFgEQAFgEAGAAIASAAIAAApgAgCgKIgCAEQAAABAAAAQAAABAAABQABAAAAAAQAAABABAAQAAABAAAAQABAAAAAAQABABAAAAQAAAAAAAAIAGAAIAAgLIgGAAQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAAAAAg");
	this.shape_1585.setTransform(205.0045,354.98,1.8904,1.8904);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f("#1D1D1B").s().p("AAMAVIAAgWIgIAWIgHAAIgIgVIAAAVIgMAAIAAgpIAPAAIAIAcIAJgcIAPAAIAAApg");
	this.shape_1586.setTransform(195.5054,354.98,1.8904,1.8904);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f("#1D1D1B").s().p("AgNASQgEgDAAgGQAAgGAEgDQAHgEAHABIADAAIAAgEIgBgEIgDgBQgEAAAAAEIgMAAQAAgFAFgEQAFgEAGAAQAIAAAEAEQAFAEgBAGIAAATQAAAGACADIAAABIgMAAIgCgEQgCAEgGAAQgFAAgEgEgAgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABgBAAQABAGADAAIADgBIACgCIAAgJIgDAAQgCAAgCACg");
	this.shape_1587.setTransform(186.0062,354.9327,1.8904,1.8904);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f("#1D1D1B").s().p("AAGAVIAAggIgKAAIAAAgIgNAAIAAgpIAjAAIAAApg");
	this.shape_1588.setTransform(177.7831,354.98,1.8904,1.8904);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f("#1D1D1B").s().p("AgMARQgFgFAAgJIAAgDQAAgKAFgGQAEgFAJAAQAIAAAFAFQAEAFAAAKIAAAFIgXAAQABAGABABQADACADAAQAGAAAEgEIAFAHIgHAFQgEABgFAAQgJAAgFgFgAgDgKQgCADAAAEIALAAIAAgBQAAgEgBgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_1589.setTransform(165.7319,354.9327,1.8904,1.8904);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgKAZIgMAAIAAgpIAMAAIAAAZIAKgZIANAAIAAApg");
	this.shape_1590.setTransform(157.4142,354.98,1.8904,1.8904);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f("#1D1D1B").s().p("AADAVIgGgPIgDAAIAAAPIgMAAIAAgpIAMAAIAAAQIADAAIAGgQIAPAAIgMATIANAWg");
	this.shape_1591.setTransform(149.3801,354.98,1.8904,1.8904);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f("#1D1D1B").s().p("AgMARQgFgFAAgKIAAgDQAAgJAFgGQAFgFAIAAQAIAAAEAEQAFAFAAAIIgMAAQAAgEgBgCQgBAAAAAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgDAAgBABIgBAIIAAALIACADIADABQAFAAAAgHIAMAAQAAAHgFAFQgFAEgHAAQgIAAgFgFg");
	this.shape_1592.setTransform(140.8734,354.9327,1.8904,1.8904);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f("#1D1D1B").s().p("AgMARQgFgGAAgIIAAgDQAAgKAEgGQAFgFAJAAQAJAAAEAFQAEAFAAAKIAAAFIgXAAQAAAEACADQADACACAAQAGAAAFgEIAFAHIgHAFQgFABgFAAQgIAAgFgFgAgEgKQgBADAAAEIAMAAIAAgBIgCgGQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgDAAgCABg");
	this.shape_1593.setTransform(132.981,354.9327,1.8904,1.8904);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f("#1D1D1B").s().p("AAGAVIAAgNIgFAAQgIAAgFgEQgEgEgBgHIAAgNIAMAAIAAANQAAAEACACQABABADAAIAFAAIAAgUIALAAIAAApg");
	this.shape_1594.setTransform(124.6634,354.98,1.8904,1.8904);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f("#1D1D1B").s().p("AAFAVIAAgZIgKAZIgMAAIAAgpIAMAAIAAAZIAKgZIANAAIAAApg");
	this.shape_1595.setTransform(116.3929,354.98,1.8904,1.8904);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f("#1D1D1B").s().p("AgRAeIAAg6IALAAIAAAEQAEgFAFAAQAHAAAEAFQAFAGAAAJIAAAEQAAAIgFAGQgDAFgIAAQgEAAgEgEIAAAUgAgFgQIAAASQABADAEAAQADAAABgDQACgCAAgFIAAgDQAAgGgCgDQgBgCgDAAQgEAAgBADg");
	this.shape_1596.setTransform(108.1225,356.3977,1.8904,1.8904);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f("#1D1D1B").s().p("AgNAQQgFgEAAgLIAAgBQAAgKAFgGQAFgFAIAAQAIAAAGAFQAFAGAAAKIAAABQAAALgFAEQgFAGgJAAQgJAAgEgGgAgEgJQgCACAAAHIAAABQAAAMAGAAQAHAAAAgJIAAgEQAAgGgCgDQgCgDgDABQgCgBgCADg");
	this.shape_1597.setTransform(99.6158,354.9327,1.8904,1.8904);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f("#1D1D1B").s().p("AgFAVIAAggIgMAAIAAgJIAjAAIAAAJIgMAAIAAAgg");
	this.shape_1598.setTransform(91.818,354.98,1.8904,1.8904);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f("#1D1D1B").s().p("AgMARQgFgFAAgKIAAgDQAAgJAFgGQAFgFAIAAQAIAAAEAEQAFAFAAAIIgMAAQAAgEgBgCQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBADAAAFIAAALIACADIADABQAFAAAAgHIAMAAQAAAHgFAFQgFAEgHAAQgIAAgFgFg");
	this.shape_1599.setTransform(84.1619,354.9327,1.8904,1.8904);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f("#1D1D1B").s().p("AAJAdIAAgmIgRAmIgNAAIAAg5IANAAIAAAlIARglIANAAIAAA5g");
	this.shape_1600.setTransform(75.0881,353.6094,1.8904,1.8904);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1600},{t:this.shape_1599},{t:this.shape_1598},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1594},{t:this.shape_1593},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1590},{t:this.shape_1589},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583},{t:this.shape_1582},{t:this.shape_1581},{t:this.shape_1580},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577},{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572},{t:this.shape_1571},{t:this.shape_1570},{t:this.shape_1569},{t:this.shape_1568},{t:this.shape_1567},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563},{t:this.shape_1562},{t:this.shape_1561},{t:this.shape_1560},{t:this.shape_1559},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556},{t:this.shape_1555},{t:this.shape_1554},{t:this.shape_1553},{t:this.shape_1552},{t:this.shape_1551},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// Фон_легенды
	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f().s("#F39200").ss(1.4).p("Au7TTId4AAQAjAAAZgZQAZgZAAgjMAAAgj7QAAgjgZgZQgZgZgjAAI94AAQgkAAgZAZQgZAZAAAjMAAAAj7QAAAjAZAZQAaAZAjAAg");
	this.shape_1601.setTransform(205.5791,516.4755,1.8904,1.8904);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f("#FFFEF7").s().p("Au7TTQgjAAgZgZQgZgZAAgkMAAAgj6QAAgjAZgZQAZgZAjAAId4AAQAjAAAZAZQAYAZAAAjMAAAAj6QAAAkgYAZQgaAZgiAAg");
	this.shape_1602.setTransform(205.5791,516.4755,1.8904,1.8904);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f().s("#008D36").ss(1.4).p("EA8AATTMh3/AAAQgjAAgZgZQgZgZAAgjMAAAgj7QAAgjAZgZQAZgZAjAAMB3/AAAQAjAAAZAZQAZAZAAAjMAAAAj7QAAAjgZAZQgZAZgjAAg");
	this.shape_1603.setTransform(1169.0901,516.4755,1.8904,1.8904);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f("#FFFEF7").s().p("Eg7/ATTQgjAAgZgZQgZgZAAgkMAAAgj6QAAgjAZgZQAZgZAjAAMB3/AAAQAjAAAZAZQAZAZAAAjMAAAAj6QAAAkgZAZQgZAZgjAAg");
	this.shape_1604.setTransform(1169.0901,516.4755,1.8904,1.8904);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1604},{t:this.shape_1603},{t:this.shape_1602},{t:this.shape_1601}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(967.7,792.7,944.3999999999999,132.89999999999998);
// library properties:
lib.properties = {
	id: 'E8B0636FB6DC5C4D9BC675427E88DD40',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E8B0636FB6DC5C4D9BC675427E88DD40'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;