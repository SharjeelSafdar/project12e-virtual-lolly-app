import React, { FC } from "react";
import { Link } from "gatsby";

import Lolly from "../lolly";
import { Lolly as LollyType } from "../../types";

interface DisplayLollyProps {
  lolly: LollyType;
}

const DisplayLolly: FC<DisplayLollyProps> = ({ lolly }) => {
  return (
    <div className="lolly">
      <div className="giftLolly">
        <Lolly
          topColor={lolly.topColor}
          middleColor={lolly.middleColor}
          bottomColor={lolly.bottomColor}
        />
      </div>
      <div className="info">
        <p className="share">
          Your lolly is freezing. Share it with this link:{" "}
        </p>
        <pre>https://virtual-lolly-p12e.netlify.app/lolly/{lolly.id}</pre>
        <p></p>
        <div className="details">
          <p id="recipient" className="recipient">
            {lolly.recipientName}
          </p>
          <div id="message" className="message">
            {lolly.message}
          </div>
          <p id="from" className="from">
            — {lolly.sendersName}
          </p>
        </div>
        <p className="bytheway">
          {lolly.sendersName} made this virtual lollipop for you. You can{" "}
          <Link to="/create-new">make your own</Link> to send to a friend who
          deserves some sugary treat which won't rot their teeth...
        </p>
      </div>
    </div>
  );
};

export default DisplayLolly;
