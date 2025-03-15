// Interactive Visualizations
function updateConvolutionPlot() {
  const kernelSize = parseInt(document.getElementById('kernelSize').value);
  document.getElementById('kernelSizeValue').textContent = kernelSize;

  // Generate data for the heatmap
  const data = [
    {
      z: Array.from({ length: 10 }, (_, i) =>
        Array.from({ length: 10 }, (_, j) => Math.sin((i * j) / (kernelSize * kernelSize)))
      ),
      type: 'heatmap',
      colorscale: 'Viridis',
    },
  ];

  const layout = {
    title: 'Convolution Operation',
    xaxis: { title: 'X-Axis' },
    yaxis: { title: 'Y-Axis' },
  };

  Plotly.newPlot('convolutionPlot', data, layout);
}

function updateFeatureMapPlot() {
  const featureLevel = parseInt(document.getElementById('featureLevel').value);
  document.getElementById('featureLevelValue').textContent = featureLevel;

  // Generate data for the heatmap
  const data = [
    {
      z: Array.from({ length: 10 }, (_, i) =>
        Array.from({ length: 10 }, (_, j) => Math.sin((i + j) / featureLevel))
      ),
      type: 'heatmap',
      colorscale: 'Plasma',
    },
  ];

  const layout = {
    title: 'Feature Map Visualization',
    xaxis: { title: 'X-Axis' },
    yaxis: { title: 'Y-Axis' },
  };

  Plotly.newPlot('featureMapPlot', data, layout);
}

// Initialize plots on page load
document.addEventListener('DOMContentLoaded', () => {
  updateConvolutionPlot();
  updateFeatureMapPlot();
});

// Quiz Feedback
function checkAnswer(questionNumber, selectedAnswer) {
  const correctAnswers = { 1: 'a', 2: 'b', 3: 'b' };
  const feedbackElement = document.getElementById(`feedback${questionNumber}`);

  if (selectedAnswer === correctAnswers[questionNumber]) {
    feedbackElement.innerHTML = '😊 Correct!';
  } else {
    feedbackElement.innerHTML = '😢 Incorrect. Try again!';
  }
}