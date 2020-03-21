import React from "react";
import { View } from "react-native-web";
import { useMediaLayout } from "use-media";

import styles from "./Layout.module.css";

const layoutWidth = {
  small: 480,
  medium: 760,
  large: 980
};

export function useMediaQuery() {
  const small = useMediaLayout({ minWidth: layoutWidth.small });
  const medium = useMediaLayout({ minWidth: layoutWidth.medium });
  const large = useMediaLayout({ minWidth: layoutWidth.large });
  const mq = { large, medium, small };
  return mq;
}

export function FullWidth(props) {
  return (
    <div className={styles.FullWidth}>
      <View>{props.children}</View>
    </div>
  );
}

export function Wide(props) {
  return (
    <div className={styles.Wide}>
      <View>{props.children}</View>
    </div>
  );
}

export function Standard(props) {
  return (
    <div className={styles.Standard}>
      <View>{props.children}</View>
    </div>
  );
}