import { Noto_Sans } from 'next/font/google';
import './globals.css';
import { AppSidebar } from '@/components/app-sidebar';
import { CiSearch } from 'react-icons/ci';
import { Input } from '@/components/ui/input';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { LuMessageSquareMore } from 'react-icons/lu';
import { VscSettings } from 'react-icons/vsc';
import { IoMdNotificationsOutline } from 'react-icons/io';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import ProfileImage from '@/public/profile-img.png';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Dashboard',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} antialiased`}
        suppressHydrationWarning
      >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-[48px] my-4 shrink-0 items-center">
                <SidebarTrigger className="ml-2" />
                <div className="flex items-center justify-between gap-2 px-4 w-full">
                  {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
                  <div className="relative w-[50%] mr-5">
                    <Input
                      type="course"
                      placeholder="Search your course"
                      className="pl-10 border-none bg-white h-[48px]"
                    />
                    <CiSearch
                      className="absolute top-[15px] left-3"
                      size={18}
                    />
                  </div>

                  <div className="w-[30%] flex px-2 justify-evenly">
                    <span>
                      <IoIosHelpCircleOutline
                        size={22}
                        className="text-[#808281]"
                      />
                    </span>
                    <span>
                      <LuMessageSquareMore
                        size={22}
                        className="text-[#808281]"
                      />
                    </span>
                    <span>
                      <VscSettings size={22} className="text-[#808281]" />
                    </span>
                    <span>
                      <IoMdNotificationsOutline
                        size={22}
                        className="text-[#808281]"
                      />
                    </span>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="profile w-[48px] h-[48px] border bg-[#FFCD66] rounded-md">
                      <Image
                        src={ProfileImage}
                        width={100}
                        height={100}
                        alt="profile image"
                      />
                    </div>
                    <h4 className="font-semibold text-[18px] text-[#05162E]">
                      Adeline H. Dancy
                    </h4>
                  </div>
                </div>
              </header>
              <div className="flex flex-1 flex-col gap-4 px-4">
                <div className="bg-white w-full h-full p-4">{children}</div>
              </div>
            </SidebarInset>
          </SidebarProvider>
      </body>
    </html>
  );
}
