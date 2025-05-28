import { Button } from "@/components/ui/button"

export default function Seccion2() {
    return (
        <section>
            <div className="text-center mt-[130px]">
                <h1 className="text-[48px] py-20">Quick solutions, less stress</h1>
                <div className="grid grid-cols-3 gap-3 w-[960px]">
                    <div className="text-start">
                        <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" fill="#09090B" />
                            <rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" stroke="#27272A" />
                            <path d="M26 18.5352H30" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28 30.5352L31 27.5352" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28 38.5352C32.4183 38.5352 36 34.9534 36 30.5352C36 26.1169 32.4183 22.5352 28 22.5352C23.5817 22.5352 20 26.1169 20 30.5352C20 34.9534 23.5817 38.5352 28 38.5352Z" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h3 className="text-[24px] text-[#D9D9D9] fw-bold">Fix emergencies fast</h3>
                        <p className="text-[#D9D9D9] text-[14px]">Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks</p>
                    </div>
                    <div className="text-start">
                        <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" fill="#09090B" />
                            <rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" stroke="#27272A" />
                            <path d="M37 32.5352L33 36.5352L29 32.5352" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M33 36.5352V20.5352" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19 24.5352L23 20.5352L27 24.5352" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M23 20.5352V36.5352" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <h3 className="text-[24px] text-[#D9D9D9] fw-bold">Universally compatible</h3>
                        <p className="text-[#D9D9D9] text-[14px]">Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system</p>
                    </div>
                    <div className="text-start">
                        <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" fill="#09090B" />
                            <rect x="0.5" y="1.03516" width="55" height="55" rx="5.5" stroke="#27272A" />
                            <path d="M25 19.5352H21C19.8954 19.5352 19 20.4306 19 21.5352V25.5352C19 26.6397 19.8954 27.5352 21 27.5352H25C26.1046 27.5352 27 26.6397 27 25.5352V21.5352C27 20.4306 26.1046 19.5352 25 19.5352Z" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M23 27.5352V31.5352C23 32.0656 23.2107 32.5743 23.5858 32.9494C23.9609 33.3244 24.4696 33.5352 25 33.5352H29" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M35 29.5352H31C29.8954 29.5352 29 30.4306 29 31.5352V35.5352C29 36.6397 29.8954 37.5352 31 37.5352H35C36.1046 37.5352 37 36.6397 37 35.5352V31.5352C37 30.4306 36.1046 29.5352 35 29.5352Z" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>


                        <h3 className="text-[24px] text-[#D9D9D9] fw-bold">Secure for your org</h3>
                        <p className="text-[#D9D9D9] text-[14px]">We keep your data safe by taking top security measures</p>
                    </div>
                </div>
                <div className="w-[672px]">
                    <h1 className="text-[48px] text-[#FAFAFA]">Instant setup, no custom code</h1>
                    <h3 className="text-[#D9D9D9] text-[18px]">Invite the bot, pick a channel, and youre set—no custom code needed, and no vendor lock-in.</h3>
                    <img className="w-[672px] rounded-[4px]" src="/capturaImagen.png" alt="Imagen de una captura" />
                </div>
            </div>
            <div className="w-[672px]">
                <h1 className="text-[48px] text-[#FAFAFA]">Get in touch</h1>
                <h3 className="text-[#D9D9D9] text-[18px]">Request a demo, or hop on a call.</h3>
                <Button className="bg-[#FAFAFA] text-black my-[40px]">Get started <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L5 5L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </Button>
            </div>
        </section>
    )
}