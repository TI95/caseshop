import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-Us",{
    style: "currency",
    currency: 'USD'
  })


  return formatter.format(price)
}


export function constructMetadata({
  title = 'CaseShop custom high-quality phone case' ,
  description = 'Create custom high-quality phone cases in 10 seconds',
  image ='/thumbnail.png',
  icons = "/favicon.ico",

}:{
  title?: string,
  description?: string,
  image?: string,
  icons?: string,
}={}): Metadata {
  return {
    title,
    description,
    openGraph:{
      title,
      description,
      images: [{ url: image }]
    },
    twitter:{
      card:"summary_large_image",
      title,
      description,
      images:[image],
    
    },
    icons,
    metadataBase: new URL("https://caseshop.vercel.app/"),
   
  }
  
}
