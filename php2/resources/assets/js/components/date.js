export function formatDate (data,fmt){
        var minutes=data/60;
        if(minutes<10){
          var Seconds=data%60;
          var minutes=(data-Seconds)/60;
            if(Seconds<10){
                Seconds='0'+Seconds;
            }
            var fmt='0'+minutes+':'+Seconds;
            return fmt;
        }else if(minutes<60){
            var Seconds=data%60;
            var minutes=(data-Seconds)/60;
            if(Seconds<10){
                Seconds='0'+Seconds;
            }
            var fmt=minutes+':'+Seconds;
            return fmt;
        }else{
            var Seconds=data%60;
            var minutes=(data-Seconds)/60;
            var minute=minutes%60;
            var hours=(minutes-minute)/60;
            if(Seconds<10){
                Seconds='0'+Seconds;
            }
            var fmt=hours+':'+minute+':'+Seconds;
            return fmt;

        }

}
