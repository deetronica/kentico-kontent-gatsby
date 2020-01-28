import React from "react";

export default ({ domNode }) => <img {...domNode?.children?.[0].attribs} />;
