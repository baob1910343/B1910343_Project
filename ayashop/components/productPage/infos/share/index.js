import React from "react";
import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";

export default function Share() {
  return (
    <div className=" m-2">
      <FacebookShareButton url={window?.location.href}>
        <FacebookIcon size={38} className="rounded" />
      </FacebookShareButton>
    </div>
  );
}
