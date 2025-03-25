"use client";

import { useEffect } from "react";
import emailjs from '@emailjs/browser';

export function EmailProvider() {
  useEffect(() => {
    emailjs.init('wsTgZkbAmeKDWFHM6'); // Your public key
  }, []);

  return null;
}