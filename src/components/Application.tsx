import { Box } from "@/components/Box";
import { SignUpButton } from "@/components/SignUpButton";
import { Title } from "@/components/Title";
import Tent from "@/icons/tent.svg";
import Message from "@/logos/message.svg";

export function Application() {
  return (
    <div className="mt-[26px] laptop:mt-[52px]">
      <div className="flex flex-row items-center justify-between tablet:ml-[58px]">
        <Title text="JELENTKEZÉS" icon={<Tent />} />
      </div>
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-[71px] mt-[40px] tablet:mt-[70px]">
        <div className="flex flex-col space-y-[50px]">
          <Box shadow="right">
            <div className="text-3xl font-display space-y-2">
              <p><strong>SUPER EARLY BIRD</strong> JEGYEK A KÉSZLET EREJÉIG!<br /></p>
              <p><strong>JEGYÁR: 25.000 Ft-tól</strong></p>
            </div>
          </Box>
          <div className="shadow-box-right"><SignUpButton /></div>
        </div>
        <div className="relative mt-[200px] laptop:mt-0">
          <div className="z-10">
            <div className="absolute -top-[250px] right-[67px] z-0">
              <Message className="w-[436px] h-[382px]" />
            </div>
            <div className="relative">
              <Box shadow="left">
                <p>Kattints a “Jelentkezem” gombra, ha Te is részt szeretnél venni a 2024-es <strong>Nyári Szakkollégiumi Találkozón!</strong></p><br />
                <p>A kattintás után az oldal átnavigál téged a jegy- és bérletértékesítő felületre, ahol <strong>Te magad állíthatod össze saját NYATA-csomagod</strong>: beállíthatod, hány napra jönnél, szeretnél-e tábori étkezést, milyen merch cuccokat kérsz.</p><br />
                <p>Azt javasoljuk, <strong>szerezd be minél előbb bérleted</strong>, hiszen a Super Early Bird és Early Bird jegyek csak limitált számban állnak rendelkezésünkre.</p>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}