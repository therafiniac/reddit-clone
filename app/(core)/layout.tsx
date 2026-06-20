import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { Navbar } from '@/components/layout/Navbar';
import { getSessionUser } from '@/lib/auth';

export default async function CoreGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSessionUser();
  return (
    <>
      <Navbar />
      <div>
        <LeftSidebar showCta={!user}  />
        <div>{children}</div>
      </div>
    </>
  );
}
