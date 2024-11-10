import type { Dispatch, SetStateAction } from "react"
import { Dialog, DialogHeader } from "./ui/dialog"
import { DialogContent, DialogDescription } from "@radix-ui/react-dialog"
import Image from "next/image"
import { DialogTitle } from "@headlessui/react"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs"
import { buttonVariants } from "./ui/button"



const LoginModal = ({ isOpen, setIsOpen }: {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
    return <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <DialogContent className="absolute z-[9999999]">
            <DialogHeader>
                <div className="relative mx-auto w-24 h-24 mb-2">
                    <Image src="/snake.png" alt="snake iamge" className=" object-contain" fill />
                    <DialogTitle className="text-3xl text-center font-bold tracking-tight text-gray-900">
                        Log in to continue
                    </DialogTitle>
                    <DialogDescription className="text-base text-center py-2">
                        <span className="font-medium text-zinc-900">
                            Your configuration was saved!
                        </span>{" "}
                        Please login or create account to complete you purchase.
                    </DialogDescription>
                </div>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
                <LoginLink className={buttonVariants({ variant: "outline" })}>Login</LoginLink>
                <RegisterLink className={buttonVariants({ variant: "default" })}>Sign up</RegisterLink>
            </div> cla
        </DialogContent>
    </Dialog>

}

export default LoginModal