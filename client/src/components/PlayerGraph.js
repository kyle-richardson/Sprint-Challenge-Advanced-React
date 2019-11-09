import React from "react"
import { Doughnut } from 'react-chartjs-2';

const PlayerGraph = ({countryList}) => {
    const options = {
        maintainAspectRatio: false,
        responsive: false,
        legend: {
          position: 'bottom'
        }
      }
    const randomColor = ()=> {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
    const data = {
        labels: countryList.map(ele=> ele.country),
        datasets: [{
            data: countryList.map(ele=>ele.players),
            backgroundColor: countryList.map(()=>randomColor()),
            hoverBackgroundColor: []
        }]
    };
    return (
        <div className="graph-container">
            <h2>Representation by country</h2>
            <Doughnut 
                data={data}
                width={450}
                height={450}
                options={options} 
            />
        </div>
    )
}

export default PlayerGraph