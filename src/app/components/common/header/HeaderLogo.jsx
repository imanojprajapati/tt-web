"use client";
import Image from "next/image";
import Link from "next/link";
function HeaderLogo() {
  return (
    <div className="brand-logo">
      <Link href="/">
        <Image
          src="/images/logo/logosq-hor2.png"
          width={400}
          height={100}
          alt="Logo"
        />
      </Link>
    </div>
  );
}

export default HeaderLogo;
