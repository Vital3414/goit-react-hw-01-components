import PropTypes from "prop-types";
import { StatisticsCard } from "../Statistics/StatisticsCard";
import cssStatistics from "./Statistics.module.css";

export function StatisticsList({ title, data }) {
  return (
    <>
      {title && <h2>{title}</h2>}

      <ul className={cssStatistics.list}>
        {data.map(({ id, label, percentage }) => {
          return (
            <StatisticsCard
              key={id}
              id={id}
              label={label}
              percentage={percentage}
            />
          );
        })}
      </ul>
    </>
  );
}

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number })),
};
