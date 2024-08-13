import React from 'react'
import { useDispatch } from 'react-redux'
import { setDecreaseQTY, setIncreaseQTY, setRemoveItem } from '../../app/CartSlice';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

const CartItem = ({ item: { id, title, text, img, color, shadow, price, cartQuantity } }) => {
  
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(setRemoveItem({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  const onIncreaseQTY = () => {
    dispatch(setIncreaseQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }
  const onDecreaseQTY = () => {
    dispatch(setDecreaseQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  return (
    <>
      {/* Whole Container */}
      <div className='flex items-center justify-between w-full px-5'>
        <div className='flex items-center gap-5'>

          {/* Image */}
          <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
              <img src={img} alt='img/cart/item'
                className='w-36 h-auto object-fill lg:w-28'
              />
              <div className='absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded'>
                ${price}
              </div>
          </div>

          {/* Name and quantity */}
          <div className='grid items-center gap-4'>
            {/* Product */}
            <div className='grid items-center leading-none'>
              <h1 className='font-medium text-lg text-sky-900 lg:text-sm'>{title}</h1>
              <p className='text-sm text-slate-800 lg:text-xs'>{text}</p>
            </div>

            {/* Quantity buttons and value */}
            <div className='flex items-center justify-around w-full'>
              <button type='button' onClick={onDecreaseQTY}
              className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90'>
                <MinusIcon className='w-5 h-5 lg:w-4 lg:h-4 text-slate-100 stroke-[2]'/>
              </button>

              <div className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 text-slate-100 flex items-center justify-center active:scale-90'>
                {cartQuantity}
              </div>

              <button type='button' onClick={onIncreaseQTY}
              className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90'>
                <PlusIcon className='w-5 h-5 lg:w-4 lg:h-4 text-slate-100 stroke-[2]'/>
              </button>
            </div>
          </div>
        </div>

        {/* Total QTY price and remove product */}
        <div className='grid items-center gap-5'>
          <div className='grid items-center justify-center'>
            <h1 className='text-lg lg:text-base text-slate-900 font-medium'>${price * cartQuantity}</h1>
          </div>
          <div className=''>
            <button type='button' onClick={onRemoveItem}
            className='bg-theme-cart rounded text-slate-100 p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer active:scale-90'>
                <TrashIcon className='w-5 h-5'/>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem