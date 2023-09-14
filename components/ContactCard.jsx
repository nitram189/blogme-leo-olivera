import Image from "next/image";
import Link from "next/link";


export default function ContactCard({ netImage, netName, username, netLink }) {
  return (
    <div className="p-5 rounded-xl bg-white/70 hover:bg-white/90 ease-in duration-100">
            
      <div className="flex gap-5 items-center">
        <Image
          src={ netImage }
          alt={`Foto de perfil de la red social ${ netName }`}
          width={80}
          height={80}
          className="rounded-full " />

        <div className="text-black font-semibold">
          <p className="text-sm">{ netName }</p>
          <Link
            href={ netLink }
            target="_blank"
            className="font-semibold text-lg">
              { username }
        </Link>
        </div>
      </div>
    </div>
  )
}
