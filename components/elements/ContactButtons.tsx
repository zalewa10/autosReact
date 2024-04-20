"use client";

import React from "react";
import { EnvelopeOpenIcon, MobileIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

interface ContactButtonsProps {}

interface ContactButtonsState {
  phoneNumber: string;
}

class ContactButtons extends React.Component<
  ContactButtonsProps,
  ContactButtonsState
> {
  constructor(props: ContactButtonsProps) {
    super(props);
    this.state = {
      phoneNumber: "509 211 676",
    };
    this.callPhoneNumber = this.callPhoneNumber.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  callPhoneNumber() {
    if (this.isMobile()) {
      window.location.href = "tel:" + this.state.phoneNumber;
    } else {
      alert("Numer telefonu: " + this.state.phoneNumber);
    }
  }

  sendEmail() {
    window.location.href = "mailto:kontakt@auto-s.pl";
  }

  isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }

  render() {
    return (
      <div className="flex justify-center max-w-xl mx-auto">
        <Button
          type="button"
          className="bg-firma lg:text-lg mr-5 mt-20"
          onClick={this.callPhoneNumber}
        >
          <MobileIcon className="mr-2 h-4 w-4" /> Zadzwoń
        </Button>
        <Button
          type="button"
          className=" lg:text-lg mt-20"
          onClick={this.sendEmail}
        >
          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Napisz maila
        </Button>
      </div>
    );
  }
}

export default ContactButtons;
