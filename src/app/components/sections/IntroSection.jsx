import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

function IntroSection({ titleSection, descriptionSection, linkHrefSection }) {
  return (
    <div className=" flex items-center justify-between gap-10">
      <span className="w-full">
        <h2 className="title-main">{titleSection}</h2>
        <p className="description">{descriptionSection}</p>
      </span>
      {linkHrefSection ? (
        <Link href={linkHrefSection}>
          <Plus size={25} color="white" />
        </Link>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default IntroSection;
