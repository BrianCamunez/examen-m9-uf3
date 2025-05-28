import { Button } from "@/components/ui/button"

export default function Seccion1() {
    return (
        <section className="flex-col flex justify-center-safe mt-[50px]">
            <div className="w-[672px] text-center">
                <h1 className="text-[48px] fw-bold">Information you need during on-call emergencies</h1>
                <h4 className="text-[#D9D9D9]">Quickly link new on-call tickets to similar past incidents and their solutions. All directly in Slack the moment an incident happens.</h4>
                    <Button className="bg-[#FAFAFA] text-black my-[40px]">Get started <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L5 5L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </Button>
            </div>
            <img className="w-[1024px] h-[632px]" src="/capturaImagen.png" alt="Imagen de una captura" />
        </section>
    )
}