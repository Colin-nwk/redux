import { parseISO, formatDistanceToNow } from "date-fns";

import React from "react";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <>
      <span className="badge badge-primary badge-outline badge-sm p-2">
        {timeAgo}
      </span>
    </>
  );
};

export default TimeAgo;
