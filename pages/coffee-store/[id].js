import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      CoffeeStore {router.query.id}
      <Link href="/">
        <a href="">Back Home</a>
      </Link>
      <Link href="/coffee-store/dynamic">
        <a href="">Go back to Dynamic page</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
