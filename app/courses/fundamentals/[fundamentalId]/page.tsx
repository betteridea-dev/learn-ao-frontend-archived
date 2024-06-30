"use client";

import { CodeCell } from "@betteridea/codecell";

const Fundamentals = () => {
  return (
    <div>
      Fundamentals
      <CodeCell
        nowallet
        cellId="1"
        appName="BetterIDEa-Code-Cell"
        code="print('Portable code cell ftw!')"
        onAOProcess={(pid) => console.log("using process: ", pid)}
        onNewMessage={(msgs) => console.log("new messages: ", msgs)}
        onInbox={(inbox) => console.log("got inbox: ", inbox)}
      />
    </div>
  );
};

export default Fundamentals;
