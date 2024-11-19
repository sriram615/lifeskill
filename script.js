// Skills Chart
const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['Python', 'SQL', 'Tableau', 'Power BI', 'Machine Learning'],
    datasets: [{
      label: 'Proficiency',
      data: [90, 85, 75, 80, 70],
      backgroundColor: 'rgba(26, 42, 108, 0.2)',
      borderColor: '#1a2a6c',
      borderWidth: 2,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      r: {
        beginAtZero: true,
      }
    }
  }
});
