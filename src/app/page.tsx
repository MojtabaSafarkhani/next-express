"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Tab from "./components/tab";
import Radar from "./components/radar";
import Habib from "./components/habib";
import Detector from "./components/detector";
import Channel from "./components/channel";
import Bite from "./components/bite";
import Connnection from "./components/connnection";
import Setting from "./components/setting";
import Standby from "./components/standby";
import Intercept from "./components/intercept";
import Targeting from "./components/targetting";
import Jamming from "./components/jamming";
import GetPattern from "./components/getPattern";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Tab></Tab>

      <div className="grid grid-cols-12 gap-1 h-screen">
        <div className="bg-black col-span-3">
        <Intercept></Intercept>
          {/* <Bite></Bite>
          <Connnection></Connnection>
          <Setting></Setting> */}
          <Standby></Standby>
          <Targeting></Targeting>
          <Jamming></Jamming>
          <GetPattern></GetPattern>
        </div>
        <div className="bg-black col-span-6">
          <Radar></Radar>
        </div>
        <div className="bg-black col-span-3">
          <Habib></Habib>
          <Detector></Detector>
          <Channel></Channel>
        </div>
      </div>
    </>
  );
}
