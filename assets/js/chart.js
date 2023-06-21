var ctx = document.getElementById('myChart').getContext('2d');

var Rungkut =19842,
 Sukolilo = 20832,
 Gubeng = 21600,
 Tambaksari = 40960;



var labels = ['Rungkut', 'Sukolilo', 'Gubeng', 'Tambaksari']
var data = [ Rungkut, Sukolilo, Gubeng, Tambaksari];

var totdata = data.reduce(function(a, b) {
  return a + b;
}, 0);
var prtdata = data.map(function(value) {
  return ((value / totdata) * 100).toFixed(2);
});

var color = ['#F25022', '#FFB900', '#7FBA00', '#00A4EF'];
var sortedData = prtdata.slice().sort(function(a, b) {
  return b - a; // Pengurutan descending
});
var sortedLabel = data.slice().sort(function(a, b) {
  return b - a; // Pengurutan descending label
}).map(function(value){
  var index1 = data.indexOf(value);
  return labels[index1];
});

var sortedColors = sortedData.map(function(value) {
  var index = sortedData.indexOf(value);
  return color[index]; // Mengurutkan warna sesuai dengan data persentase yang diurutkan
});

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: sortedLabel,
    datasets: [{
      data: sortedData,
      backgroundColor: sortedColors,
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    plugins: {
        datalabels: {
            color: 'white',
            anchor: 'center',
            formatter: function(data){
                return data + '%';
            },
            font: {
              family: 'Segoe UI',
              weight: 500
            }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              var label = context.label || '';
              if (label) {
                label += ': ';
              }
              label += context.parsed.toFixed(2) + '%';
              return label;
            }
          }
        },
        legend: {
            labels:{
                usePointStyle: true,
                pointStyle: 'rectRounded',
                font: {
                  family: 'Segoe UI',
                  size: 14}
            },
            position: 'right',
            },
        },
    },
    plugins: [ChartDataLabels]
});