import { Box } from "@/components/Box";
import { SignUpButton } from "@/components/SignUpButton";
import { Title } from "@/components/Title";
import Tent from "@/icons/tent.svg";
import Message from "@/logos/message.svg";

export function Application() {
  return (
    <div className="mt-[52px]">
      <div className="flex flex-row items-center justify-between">
        <Title text="JELENTKEZÉS" icon={<Tent />} />
      </div>
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-[71px] mt-[70px]">
        <div className="flex flex-col space-y-[50px]">
          <Box shadow="left">
            <div className="text-3xl font-display">
              <strong>SUPER EARLY BIRD</strong> JEGYEK ÁPRILIS XY-IG!<br />
              <strong>JEGYÁR:</strong> XX XXX Ft
            </div>
          </Box>
          <SignUpButton />
        </div>
        <div className="relative">
          <div className="z-10">
            <div className="absolute -top-[250px] right-[67px] z-0">
              <Message className="w-[436px] h-[382px]" />
            </div>
            <div className="relative">
              <Box shadow="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis cursus turpis quis molestie. Sed sagittis vehicula erat ac venenatis. Phasellus quis tellus eget ex pellentesque ornare. Suspendisse mattis condimentum nisi quis hendrerit. Vestibulum ut feugiat nisi. Nullam a condimentum justo. Nam a maximus turpis. Suspendisse pharetra, massa id tincidunt ultricies, est nulla fringilla mi, pharetra vulputate justo ex non mi. Vestibulum quis metus hendrerit arcu sagittis facilisis id at tellus.
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}