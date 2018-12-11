jQuery(document).ready(function(){
    $('#centimetersconverter').on('submit', function(evt){
       evt.preventDefault();
       var $intocm = $('#intocm');
       var intocm = $intocm.val();
       var data1 = $("#cm-inch").val();
       axios.get('http://statenweb.mockable.io/conversions/').then(function(result){
          inchesfunction = result.data[data1];
           var total = (intocm) * ( inchesfunction);
           $("#convertedcm").html(total);
       });
    }); 
       $('#inchesconverter').on('submit', function(evt){
           evt.preventDefault();
           var $cmtoin = $('#cmtoin');
           var cmtoin = $cmtoin.val();
           var data2 = $("#in-cm").val();
           axios.get('http://statenweb.mockable.io/conversions/').then(function(result){
             centimetersfunction = result.data[data2];
               var total = (cmtoin) * (centimetersfunction);
               $("#convertedin").html(total);
           });
       });
    });


   