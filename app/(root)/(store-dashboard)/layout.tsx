import DashboardHeader from "@/components/DashboardHeader";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex">
      {/* <DashbordSidebar /> */}
      <div className="w-full">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}
