import React from "react";
import Star from "./Star";
import "./stars.css";

function Stars({ count }) {
  const isCount = count > 0 && count <= 5 && Number.isFinite(count);
  return (
    isCount && (
      <ul class="card-body-stars u-clearfix">
        {new Array(count).fill(<Star />)}
      </ul>
    )
  );
}
export default Stars;
