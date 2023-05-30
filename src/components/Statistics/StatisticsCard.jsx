import PropTypes from "prop-types";
import cssStatistics from "./Statistics.module.css";

export function StatisticsCard({ label, percentage }) {
  return (
    <li
      className={cssStatistics.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={cssStatistics.label}>{label}</span>
      <span className={cssStatistics.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsCard.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
