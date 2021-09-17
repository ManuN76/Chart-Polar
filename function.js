// Biblio graph
// https://www.chartjs.org/

window.function = function (title, label, background, data) {
  // Title
  title = title.value ?? "";
  let titleDisplay = "true";
  if (title == "") titleDisplay = "false";

  // label
  label = label.value ?? "";

  // background
  background = background.value ?? "";

  // data
  data = data.value ?? "";

  let width = 100;
  let height = 80;

  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Glide Yes-Code</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.min.js">
    </script>
  </head>
  <body>
    <div class="chart-container" style="position: relative; height:${height}vh; width:${width}vw; left:50%; transform: translatex(-50%)">
      <canvas id="gr1"></canvas>
    </div>
    <script>
    let config = {
      type: 'polarArea',
      data: {
        labels: [${label}],
        datasets: [
          {
            label: 'tret',
            data: [${data}],
            backgroundColor: [${background}]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: ${titleDisplay},
            text: '${title}'
          }
        }
      },
    };

    var canv = document.getElementById('gr1');
    var ctx = canv.getContext('2d');
    let graph1 = new Chart(ctx, config);
    </script>
  </body>
</html>`;

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`;
  return uri;
};
