import React from "react";
import classNames from "classnames";

import styles from "./Spacing.module.scss";

export const Spacing = {
  nil: 0,
  xxs: 4,
  xs: 6,
  s: 10,
  m: 16,
  l: 26,
  xl: 42,
  xxl: 67
};

export function Box(props) {
  const spacing = props.spacing || "s";
  const clsName = classNames([styles.Box, styles[`Box-${spacing}`]]);
  return <div className={clsName}>{props.children}</div>;
}

export function Inline(props) {
  const spacing = props.spacing || "m";
  const margin = Spacing[spacing];
  return (
    <div className={styles.Inline}>
      {React.Children.map(props.children, (c, i) => (
        <div style={{ display: "flex", marginLeft: i > 0 ? margin : 0 }}>
          {c}
        </div>
      ))}
    </div>
  );
}

export function Stack(props) {
  const spacing = props.spacing || "m";
  const margin = Spacing[spacing];
  return (
    <div className={styles.Stack}>
      {React.Children.map(props.children, (c, i) => (
        <div style={{ marginTop: i > 0 ? margin : 0 }}>{c}</div>
      ))}
    </div>
  );
}

export function Empty(props) {
  const spacing = props.spacing || "nil";
  const height = Spacing[spacing];
  return <div style={{ height }}></div>;
}
