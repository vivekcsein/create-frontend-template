"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/libs/redux/store";
import Dashboard_main from "@/components/context/dashboard/Dashboard_main";

export default function DashboardPage() {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const Iuser = useSelector((state: RootState) => state.auth.user);

  if (!isAuthenticated) {
    return <>You dont have access to this route</>;
  }

  if (isAuthenticated && Iuser) {
    return (
      <main className="p-8">
        <Dashboard_main />
      </main>
    );
  } else {
    router.push("/");
  }
}
