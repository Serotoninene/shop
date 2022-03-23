import React, { useState } from "react";
import DatGui from "react-dat-gui";

export default function DebugUi() {
  const [opts, setOpts] = useState({});

  return <DatGui data={opts} onUpdate={setOpts}></DatGui>;
}
