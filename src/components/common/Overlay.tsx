/**
 * @author Andrew Perera
 * Copyright (C) 2021
 */

import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "../../styles/components/common/Overlay.module.scss";

const Overlay: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => <div className={styles.overlay} {...props}></div>;

export default Overlay;
