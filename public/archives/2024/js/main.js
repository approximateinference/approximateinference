﻿// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-53150914-2', 'auto');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');

// MathJax
init_mathjax = function() {
  if (window.MathJax) {
    // MathJax loaded
    MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [ ['$','$'], ["\\(","\\)"] ],
        displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
      },
      displayAlign: 'left', // Change this to 'center' to center equations.
      "HTML-CSS": {
        styles: {'.MathJax_Display': {"margin": 0}}
      }
    });
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
  }
}
init_mathjax();

// Show more/less text
$('.show-more').click(function(){
  var $this = $(this);
  $this.toggleClass('show-more');
  if($this.hasClass('show-more')){
    $this.text('show more');
  } else {
    $this.text('show less');
  }
});
