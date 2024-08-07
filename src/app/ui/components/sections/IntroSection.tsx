import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import styles from "../../css/components/IntroSection.module.scss";

export type IntroSectionProps = {
  titleSection: string;
  descriptionSection: string;
  linkHrefSection?: string;
}

export function IntroSection({ titleSection, descriptionSection, linkHrefSection }: IntroSectionProps) {
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

