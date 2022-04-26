// Create the buildChart function.
function buildCharts(sample) {
    // Use d3.json to load the samples.json file 
    d3.json("samples.json").then((data) => {
      console.log(data);
  
      // Create a variable that holds the samples array. 
  
      // Create a variable that filters the samples for the object with the desired sample number.
  
      // 1. Create a variable that filters the metadata array for the object with the desired sample number.
      var metadata = data.metadata;
      var metadataArray = metadata.filter(sampleObject => sampleObject.id == sample);
      
  
      // Create a variable that holds the first sample in the array.
      // 2. Create a variable that holds the first sample in the metadata array.
      var results = metadataArray[0];
  
      // Create variables that hold the otu_ids, otu_labels, and sample_values.
      // 3. Create a variable that holds the washing frequency.
      var washFreq =  parseFloat(results.wfreq); 
     
      // Create the yticks for the bar chart.
  
      // Use Plotly to plot the bar data and layout.
      // Plotly.newPlot();
      
      // Use Plotly to plot the bubble data and layout.
      // Plotly.newPlot();
     
      
      // 4. Create the trace for the gauge chart.
      var gaugeData = [{
          domain: {x: [0,1], y:[0,1]},
          type: "indicator",
          mode: "gauge+number+delta",
          value: washFreq,
          title: { text: "<b>Belly Washing Frequency</b> <br> Scrubs per Week", font: { size: 24 } },
          gauge: {
            axis: { range: [0, 10], tickwidth: 2, tickcolor: "black" },
            bar: { color: "black" },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "gray",
            steps: [
              { range: [0, 2], color: "red" },
              { range: [2, 4], color: "orange"},
              { range: [4, 6], color: "yellow"},
              { range: [6, 8], color: "yellowgreen"},
              {range: [8, 10], color: "green"}
            ]   
          }
        }
      ];
      
      // 5. Create the layout for the gauge chart.
      var gaugeLayout = { 
          width: 500,
          height: 400,
          margin: { t: 25, r: 25, l: 25, b: 25 },
          paper_bgcolor: "white",
          font: { color: "black", family: "Arial" }
        };
  
      // 6. Use Plotly to plot the gauge data and layout.
      Plotly.newPlot("gauge", gaugeData, gaugeLayout);
    });
  }