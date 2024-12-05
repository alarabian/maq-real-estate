import AgentProfile from "@/components/agent-profile/AgentProfile";
import PageCover from "@/components/common/page-cover/PageCover";
import React from "react";

const page = () => {
  return (
    <>
      <PageCover title={"Agent Profile"} />
      <AgentProfile />
    </>
  );
};

export default page;
