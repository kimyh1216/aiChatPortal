$(document).ready(function () {
    var opts = {
        angle: 0.5, // The span of the gauge arc
        lineWidth: 0.15, // The line thickness
        radiusScale: 1, // Relative radius
        limitMax: 100,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: 'white',   // Colors
        colorStop: 'white',    // just experiment with them
        strokeColor: 'transparent',  // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true,     // High resolution support
    };
    var target = document.getElementById('guage'); // your canvas element
    var gauge = new Donut(target).setOptions(opts); // create sexy gauge!
    gauge.setTextField(document.getElementById("guage-text"));
    gauge.maxValue = 100; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    gauge.set(75); // set actual value

    var target2 = document.getElementById('guage2'); // your canvas element
    var gauge2 = new Donut(target2).setOptions(opts); // create sexy gauge!
    gauge2.setTextField(document.getElementById("guage-text2"));
    gauge2.maxValue = 100; // set max gauge value
    gauge2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge2.animationSpeed = 32; // set animation speed (32 is default value)
    gauge2.set(75); // set actual value

    $('.btn-headerGnb').on('click', function () {
        $('.mainContainer aside').toggleClass('open');
    });
});
