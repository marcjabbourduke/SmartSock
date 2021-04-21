import React from 'react'
import styles from './pressure-view.module.css'


function PressureView(props){
  return (
    <div className={styles.imgdiv}>
        <img src="/playground_assets/feet-1100h.png" className={styles.image} />
        <span className={appropriateColor(1, props.allReadings)}> Sensor 1 </span>
        <span className={appropriateColor(2, props.allReadings)}> Sensor 2 </span>
        <span className={appropriateColor(3, props.allReadings)}> Sensor 3 </span>
        <span className={appropriateColor(4, props.allReadings)}> Sensor 4 </span>
        <span className={appropriateColor(5, props.allReadings)}> Sensor 5 </span>
        <span className={appropriateColor(6, props.allReadings)}> Sensor 6 </span>
        <span className={appropriateColor(7, props.allReadings)}> Sensor 7 </span>
    </div>
  )
}


function appropriateColor(sensorNum, allReadings){
    console.log(allReadings)
    var colors = ['pressure-view_yellow__37YoH', 'pressure-view_orange__1yIMX', 'pressure-view_darkorange__2VtOP', 'pressure-view_red__2q_Yp'];
    var className = ['pressure-view_s1__1ElJo', 'pressure-view_s2__1Yehm', 'pressure-view_s3__5ou7E',
        'pressure-view_s4__3Vg9Y', 'pressure-view_s5__2LB2O', 'pressure-view_s6__3e6MF', 'pressure-view_s7__3Kvx7'];
    var sensorIndex = sensorNum - 1;
    var sensorReading = allReadings[sensorIndex];
    if(sensorReading < 50){
      return className[sensorIndex] + ' ' + colors[0];
    }
    else if(sensorReading < 100){
      return className[sensorIndex] + ' ' + colors[1];
    }
    else if(sensorReading < 150){
      return className[sensorIndex] + ' ' + colors[2];
    }
    else {
      return className[sensorIndex] + ' ' + colors[3];
    }
}

export default PressureView