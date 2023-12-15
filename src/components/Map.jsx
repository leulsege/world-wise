import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("form")} className={styles.mapContainer}>
      <h2>Map</h2>
    </div>
  );
}
