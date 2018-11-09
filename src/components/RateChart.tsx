import * as React from "react";
import * as Chart from "chart.js";

import { Rate } from "../type/Rate";

interface Props {
  rates: Array<Rate>;
}

const VISIBLE_POINTS = 24;

function formatDate(date: Date): string {
  const m = date.getMinutes();
  const s = date.getSeconds();
  return `${m}:${s}`;
}

export default class RateChart extends React.Component<Props> {
  el: HTMLCanvasElement | null = null;

  componentWillReceiveProps(props: Props) {
    const visibleRates = props.rates.slice(-VISIBLE_POINTS);

    const data: Array<number> = Array.from({ length: VISIBLE_POINTS }).map(
      _ => 0
    );
    const labels: Array<string> = Array.from({ length: VISIBLE_POINTS }).map(
      _ => ""
    );
    visibleRates.forEach(rate => {
      data.push(rate.rate);
      labels.push(formatDate(rate.time));
    });
    if (this.el) {
      const ctx = this.el.getContext("2d");
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: "line",
          data: {
            labels,
            datasets: [
              {
                label: "ETH2USD",
                data,
                lineTension: 0,
                fill: false,
                borderColor: "#3490dc",
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 0
            }
          }
        });
      }
    }
  }

  render() {
    const style = {
      height: "50vh"
    };
    return (
      <div className="app-chart relative px-10" style={style}>
        <canvas ref={el => (this.el = el)} />
      </div>
    );
  }
}
