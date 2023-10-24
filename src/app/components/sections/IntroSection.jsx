import React from "react";
import Link from "next/link";
import styles from "../../css/components/IntroSection.module.scss"
import { Plus } from "lucide-react";

function IntroSection({ titleSection, descriptionSection, linkHrefSection }) {
  return (
    <div className={styles.introSection}>
      <span className="w-full">
        <h2 className="title-main">{titleSection}</h2>
        <p className="description">{descriptionSection}</p>
      </span>
      {linkHrefSection ? (
        <Link href={linkHrefSection} className={styles.linkSection}>
          <Plus size={25} color="white" />
        </Link>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default IntroSection;
