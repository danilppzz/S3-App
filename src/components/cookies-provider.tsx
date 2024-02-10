"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import "./css/globals.css";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "./ui/button";

export function CookiesProvider() {
  const [showAlert, setShowAlert] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookies_accepted");
    const booleanoConvertido = cookiesAccepted ? !!JSON.parse(cookiesAccepted) : null;
    if (booleanoConvertido === null) {
      localStorage.setItem("cookies_accepted", "false");
      setShowAlert(true);
    } else if (booleanoConvertido == false) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookies_accepted", "true");
    setShowAlert(false);
  };

  return showAlert === undefined ? (
    <></>
  ) : showAlert ? (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 w-[570px] fade-in">
      <Alert>
        <Cookie className="h-4 w-4" />
        <AlertTitle>Cookies</AlertTitle>
        <AlertDescription>
          I use cookies on this site to bring you a better experience.
          {" "}
          <a
            onClick={() => handleAcceptCookies()}
            className=" text-cyan-600 hover:underline hover:cursor-pointer"
          >
            ACCEPT
          </a>
        </AlertDescription>
      </Alert>
    </div>
  ) : (
    <></>
  );
}
