import { HandCoins, Package, ShieldCheck } from 'lucide-react'
import React from 'react'

const Features = () => {
  return (
    <div className="flex md:flex-row flex-col gap-5 items-center justify-center px-4 py-16">
      <div className="flex flex-col gap-2 bg-white p-4 rounded items-center justify-center w-80 h-40">
        <Package className="size-12 text-amber-950" />
        <h2 className="mt-2 text-amber-950 text-lg font-semibold">Free Shipping</h2>
        <p>Free shipping on all orders</p>
      </div>
      <div className="flex flex-col gap-2 bg-white p-4 rounded items-center justify-center w-80 h-40">
        <ShieldCheck className="size-12 text-amber-950" />
        <h2 className="mt-2 text-amber-950 text-lg font-semibold">Secure Checkout</h2>
        <p>We make sure everything is safe for you</p>
      </div>
      <div className="flex flex-col gap-2 bg-white p-4 rounded items-center justify-center w-80 h-40">
        <HandCoins className="size-12 text-amber-950" />
        <h2 className="mt-2 text-amber-950 text-lg font-semibold">Money Back Guarantee</h2>
        <p>Not satisfied? Just return it to us</p>
      </div>
    </div>
  )
}

export default Features