
// LV 1. 유연 근무
function solution(schedules, timelogs, startday) {
    let worklogs = []
    
    const checkTime = (time, timeIndex) =>{
        
        const getTime = (t) =>{
            const h = Math.floor(t/100);
            const m = t%100;
            const totalTime = h*60+m
            return totalTime;
        }
        
        if(getTime(time)<=getTime(schedules[timeIndex])+10){
            return true;
        }else{
            return false
        }
    }
    
  worklogs = timelogs.map((personal, timeIndex) => {
        return personal.filter((time, index) => {
            const day = (startday + index - 1) % 7 + 1;
            if (day === 6 || day === 7) return false;
            return checkTime(time, timeIndex);
        });
    });
    
    return worklogs.filter(log=>log.length===5).length;
}
