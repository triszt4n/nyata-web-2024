import { Box } from "@/components/Box";
import { SignUpButton } from "@/components/SignUpButton";
import { Title } from "@/components/Title";
import Wave from "@/icons/wave.svg"

export function Hero() {
  return (
    <div className="space-y-[35px]">
      <div className="space-y-[11px]">

        <Title text="Mi az a NYATA?" icon={<Wave className="w-[70px] h-[70px]" />} />
        <Box shadow="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis cursus turpis quis molestie. Sed sagittis vehicula erat ac venenatis. Phasellus quis tellus eget ex pellentesque ornare. Suspendisse mattis condimentum nisi quis hendrerit. Vestibulum ut feugiat nisi. Nullam a condimentum justo. Nam a maximus turpis. Suspendisse pharetra, massa id tincidunt ultricies, est nulla fringilla mi, pharetra vulputate justo ex non mi. Vestibulum quis metus hendrerit arcu sagittis facilisis id at tellus.
        </Box>
      </div>
      <SignUpButton />
    </div>
  )
}