
    // $(function() {
    //   $("#fade").hide()
    // });
    // console.log("faded");

M.AutoInit();

  // var options = [
  //   // {selector: '#built', offset: 200, callback: customCallbackFunc },
  //     {selector: '#fade', offset: 100, callback: function(el) {
  //        console.log($(el));
  //        Materialize.fadeInImage($(el));
  //        // $(el).fadeIn(6000);
  //     } }, 

  //     {selector: '#fade2', offset: 100, callback: function(el) {
  //        console.log($(el));
  //        Materialize.fadeInImage($(el));
  //        // $(el).fadeIn(6000);
  //     } },

  //           {selector: '#fade3', offset: 100, callback: function(el) {
  //        console.log($(el));
  //        Materialize.fadeInImage($(el));
  //        // $(el).fadeIn(6000);
  //     } }
  //   // {selector: '#built', offset: 200, callback: function() {
  //   //   customCallbackFunc();
  //   // } },
  // ];
  // Materialize.scrollFire(options);

  $(document).ready(function(){
    $('.parallax').parallax();
});

  // Or with jQuery

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
