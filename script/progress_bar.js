$(function () {
    var htmlBar = new ProgressBar.Line(html, {strokeWidth: 4,easing: 'easeInOut',duration: 1400,color: '#FFEA82',trailColor: '#eee',trailWidth: 1,svgStyle: {width: '100%',height: '100%'},from: {color: '#FFEA82'},to: {color: '#ED6A5A'},step: (state, bar) => {bar.path.setAttribute('stroke', state.color);}});

    htmlBar.animate(0.8); // Number from 0.0 to 1.0
    
    var cssBar = new ProgressBar.Line(css, {strokeWidth: 4,easing: 'easeInOut',duration: 1400,color: '#FFEA82',trailColor: '#eee',trailWidth: 1,svgStyle: {width: '100%',height: '100%'},from: {color: '#FFEA82'},to: {color: '#ED6A5A'},step: (state, bar) => {bar.path.setAttribute('stroke', state.color);}});

    cssBar.animate(0.7); // Number from 0.0 to 1.0
    
    var jsBar = new ProgressBar.Line(javascript, {strokeWidth: 4,easing: 'easeInOut',duration: 1400,color: '#FFEA82',trailColor: '#eee',trailWidth: 1,svgStyle: {width: '100%',height: '100%'},from: {color: '#FFEA82'},to: {color: '#ED6A5A'},step: (state, bar) => {bar.path.setAttribute('stroke', state.color);}});

    jsBar.animate(0.65); // Number from 0.0 to 1.0
    
    var jQBar = new ProgressBar.Line(jquery, {strokeWidth: 4,easing: 'easeInOut',duration: 1400,color: '#FFEA82',trailColor: '#eee',trailWidth: 1,svgStyle: {width: '100%',height: '100%'},from: {color: '#FFEA82'},to: {color: '#ED6A5A'},step: (state, bar) => {bar.path.setAttribute('stroke', state.color);}});

    jQBar.animate(0.75); // Number from 0.0 to 1.0
    
    var javaBar = new ProgressBar.Line(java, {strokeWidth: 4,easing: 'easeInOut',duration: 1400,color: '#FFEA82',trailColor: '#eee',trailWidth: 1,svgStyle: {width: '100%',height: '100%'},from: {color: '#FFEA82'},to: {color: '#ED6A5A'},step: (state, bar) => {bar.path.setAttribute('stroke', state.color);}});

    javaBar.animate(0.2); // Number from 0.0 to 1.0
    
    var phpBar = new ProgressBar.Line(php, {strokeWidth: 4,easing: 'easeInOut',duration: 1400,color: '#FFEA82',trailColor: '#eee',trailWidth: 1,svgStyle: {width: '100%',height: '100%'},from: {color: '#FFEA82'},to: {color: '#ED6A5A'},step: (state, bar) => {bar.path.setAttribute('stroke', state.color);}});

    phpBar.animate(0.1); // Number from 0.0 to 1.0
});
