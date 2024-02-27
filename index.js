function CountFunction(){
    
    let WireTurnsNumber = document.getElementById("WireTurnsNumber").value; //N
    let CoilCurrent= document.getElementById("CoilCurrent").value; //I
    let Radius= document.getElementById("Radius").value; //R

    //все единицы измерения в  СИ
    let x = [];
    let y = [];
    let m = 4 * Math.PI * Math.pow(10, -7); //магнитная постоянная

    
    for(let i = -6*Radius; i < 7*Radius; i+=0.01)
    {
        x.push(i);
        y.push(CoilCurrent * WireTurnsNumber * Radius * Radius * m / 2 * (1/Math.pow(Radius*Radius + i*i, 1.5) + 1/Math.pow(Radius*Radius + (i - Radius) * (i - Radius), 1.5)));
    }

    let layout = {
        title: 'График B(x)',
        xaxis: {
            title: 'Координата х от центра 1ого кольца, м'
        },
        yaxis: {
            title: 'B(x), Тл'
        }
    };
    
    Plotly.newPlot(
        "myDiv", 
        [{
        mode: 'lines',
        type: 'scatter',
        x: x,
        y: y,
        }],
        layout
    );
    
    return false;
}
