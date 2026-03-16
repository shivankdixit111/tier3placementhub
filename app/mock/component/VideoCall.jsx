"use client";

import { useEffect } from "react";

export default function VideoCall() {

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://meet.jit.si/external_api.js";
    script.async = true;

    script.onload = () => {

      const domain = "meet.jit.si";

      new window.JitsiMeetExternalAPI(domain, {
        roomName: "AI-Mock-Interview",
        width: "100%",
        height: 400,
        parentNode: document.querySelector("#video-container"),
      });

    };

    document.body.appendChild(script);

  }, []);

  return (
    <div className="mb-8">
      <div id="video-container"></div>
    </div>
  );
}