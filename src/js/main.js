// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// Import some data
import { regions, timestamps } from "./stats.json";

// Import some utils of Chart.js
import {
  CategoryScale,
  Chart,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const ctx = document.getElementById("line-chart");

const lineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "2022",
        data: timestamps,
      },
    ],
  },
});

const select = document.getElementById("floatingSelect");
const findBtn = document.getElementById("findBtn");
const fatal = document.getElementById("fatalPlaceHolder");
const infected = document.getElementById("infectedPlaceHolder");
const recovered = document.getElementById("recoveredPlaceHolder");
const regionPlaceHolder = document.getElementById("regionPlaceHolder");
const containerCardNews = document.getElementById("containerCardNews");

regions.forEach((region) => {
  select.innerHTML += `<option value="${region.name}">${region.name}</option>`;
});

const filteredDefaultValueNumbers = regions.filter(
  (region) => region.name === "Bali"
);

fatal.innerHTML = filteredDefaultValueNumbers[0].numbers.fatal;
infected.innerHTML = filteredDefaultValueNumbers[0].numbers.infected;
recovered.innerHTML = filteredDefaultValueNumbers[0].numbers.recovered;
regionPlaceHolder.innerHTML = filteredDefaultValueNumbers[0].name;

findBtn.addEventListener("click", () => {
  const filteredRegion = regions.filter(
    (region) => region.name === select.value
  );

  fatal.innerHTML = filteredRegion[0].numbers.fatal;
  infected.innerHTML = filteredRegion[0].numbers.infected;
  recovered.innerHTML = filteredRegion[0].numbers.recovered;
  regionPlaceHolder.innerHTML = filteredRegion[0].name;
});
