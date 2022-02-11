import React, { useState } from "react";
import DatGui, { DatFolder, DatNumber } from "react-dat-gui";

export default function DebugUi() {
  const [opts, setOpts] = useState({});

  return <DatGui data={opts} onUpdate={setOpts}></DatGui>;
}
