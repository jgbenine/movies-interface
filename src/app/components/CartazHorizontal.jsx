import React from "react";
import styles from "../css/components/CartazHorizontal.module.scss";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

function CartazHorizontal({ infoSerie, ImageHorizontal, altItem, topFilme }) {
  return (
    <div className={styles.cartazHorizontal}>
      <div className={styles.horizontalImg}>
        <Image src={ImageHorizontal} alt={altItem} width={0} height={0} sizes="100vw" priority />
        <span className={`${styles.filter} slide-top`}>
          <PlusCircle color="#f3f3f3a5" size={30} />
          <p className={styles.topFilme}>{topFilme}</p>
        </span>
      </div>
      <p className={styles.horizontalInfo}>{infoSerie}</p>
    </div>
  );
}

export default CartazHorizontal;
