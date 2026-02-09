import React from "react";
import ProfileCard from "./ProfileCard.jsx";

export default function TeamGrid({ team }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {team.map((member) => (
        <ProfileCard
          key={member.name}
          name={member.name}
          title={member.role}
          avatarUrl={"/Team/" + member.name + "-removebg-preview.png"}
          miniAvatarUrl={"/Team/" + member.name + "-removebg-preview.png"}
          handle={member.socials?.github ? member.socials.github.split("/").pop() : "tinkerhub"}
          showUserInfo={true}
          contactText="Connect"
          onContactClick={() => {
            if (member.socials?.linkedin) window.open(member.socials.linkedin, "_blank");
            else if (member.socials?.github) window.open(member.socials.github, "_blank");
          }}
        />
      ))}
    </div>
  );
}
