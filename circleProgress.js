/*圆环进度条插件*/
var circleProgress = function(options) { var defaultOptions = { speed: 2, /*旋转速度，单位为秒*/ id: "svg1", /*SVG 唯一识别ID*/ strokeWidth: "20", /*圆形线条宽度*/ container: ".demo", /*存放SVG的容器*/ colorArray: ['#ff0000', '#00ff00', '#0000ff'], bgcolor: "#eee", maxValue: 50 };
    options.svgWidth = document.querySelector(options.container).clientWidth; /*SVG 宽度*/
    options.svgHeight = document.querySelector(options.container).clientHeight; /*SVG 高度*/
    options.r = options.svgWidth / 2 - options.strokeWidth; /*圆的半径*/
    options.percent = options.maxValue / 100; /*进度百分比*/
    options.perimeter = Math.PI * 2 * options.r; /*圆的周长*/
    options.colorNum = options.colorArray.length;
    this.options = options || defaultOptions;
    this.init(); };
circleProgress.prototype = { init: function() { var _self = this; var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", _self.options.svgWidth);
        svg.setAttribute("height", _self.options.svgHeight);
        svg.setAttribute("id", _self.options.id);
        document.querySelector(_self.options.container).appendChild(svg); var lgHtml = '<stop offset="0%" style="stop-color:' + _self.options.colorArray[0] + ';stop-opacity:1"></stop>'; for (var i = 1; i < _self.options.colorNum; i++) { var offset = (100 / (_self.options.colorNum - 1)) * i + '%';
            lgHtml += '<stop offset="' + offset + '" style="stop-color:' + _self.options.colorArray[i] + ';stop-opacity:1"></stop>'; } if (lgHtml !== undefined) { svg.innerHTML = '<defs xmlns="http://www.w3.org/2000/svg">' + '<lineargradient id="' + _self.options.id + 'lg" >' + lgHtml + '</lineargradient>' + '</defs>' + '<circle cx="' + _self.options.svgWidth / 2 + '" cy="' + _self.options.svgHeight / 2 + '" r="' + _self.options.r + '" stroke-width="' + _self.options.strokeWidth + '" stroke="' + _self.options.bgcolor + '" fill="none"></circle>' + '<circle cx="' + _self.options.svgWidth / 2 + '" cy="' + _self.options.svgHeight / 2 + '" r="' + _self.options.r + '" stroke-width="' + _self.options.strokeWidth + '" stroke="url(#' + _self.options.id + 'lg)" fill="none" id="' + _self.options.id + 'circle"' + 'transform="matrix(0,-1,1,0,0,' + _self.options.svgWidth + ')" stroke-dasharray="0 ' + _self.options.perimeter + '" style="transition:all ' + _self.options.speed + 's ease-in-out"></circle>'; }
        window.setTimeout(function() { _self.setvalue(); }, 300); }, /*设置进度值*/ setvalue: function(maxValue) { var _self = this;
        _self.options.maxValue = maxValue || _self.options.maxValue;
        _self.options.percent = _self.options.maxValue / 100;
        circle = document.querySelector('#' + _self.options.id + 'circle');
        circle.setAttribute('stroke-dasharray', _self.options.percent * _self.options.perimeter + " " + _self.options.perimeter); } };