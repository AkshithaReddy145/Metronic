
import {useEffect} from 'react'
import {Outlet, Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import { accountTyppDetails } from '../../../_metronic/partials/layout/header-menus/SiderbarData'
import clsx from 'clsx'
const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100'>
      {/* begin::Body */}
    
     
      <div
        className='d-flex flex-lg-row-fluid w-lg-200px bgi-size-cover bgi-position-center'
        style={{backgroundImage: `url(${toAbsoluteUrl('/media/misc/auth-bg.png')})`}}
      >
        {/* begin::Content */}
        <div className='d-flex flex-column flex-center py-15 px-5 px-md-15 w-100'>
          {/* begin::Logo */}
          <div className='flex-center'>
          <Link to='/' className='mb-12'>
            <img alt='Logo' src={toAbsoluteUrl('/media/logos/custom-1.png')} className='h-75px' />
          </Link>
          </div>
          {/* end::Logo */}

          {/* begin::Image */}
          <div className='card-body py-20'>
        {/*begin::Item*/}
        {accountTyppDetails.map((bs, index) => (
          <div
            key={`bs-${index}`}
            className={clsx('d-flex flex-nowrap align-items-center', {
              'mb-7': accountTyppDetails.length - 1 > index,
            })}
          >
            {/*begin::Image*/}
            <div className='symbol symbol-40px symbol-2by3 me-4'>
            { bs.number === 2 ? 
             (<a href="#" className="btn btn-success mw-100">{bs.number}</a>) 
             : ( <a href="#" className="btn btn-primary mw-100">{bs.number}</a>)
              }
              {/* <img src={toAbsoluteUrl(`/media/${bs.number}`)} alt='' className='mw-100' /> */}
            </div>
    
            <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3'>
              <a href='#' className='text-white fw-bold text-hover-primary fs-6'>
                {bs.title}
              </a>
              <span className='sidebar-text-muted fw-bold fs-7 my-1'>{bs.desc}</span>
            </div>
          </div>
        ))}

      </div>
      <div className='d-flex flex-column-fluid flex-center flex-wrap py-20'>
          {/* begin::Links */}
          <div className='d-flex fw-semibold text-primary fs-base'>
            <a href='#' className='px-5' target='_blank'>
              Terms
            </a>

            <a href='#' className='px-5' target='_blank'>
              Plans
            </a>

            <a href='#' className='px-5' target='_blank'>
              Contact Us
            </a>
          </div>
          {/* end::Links */}
        </div>
          
        </div>
      </div>

    
        <div className='d-flex flex-row  w-lg-50 order-1 order-lg-2'>
          <div className='w-lg-800px p-20 flex-center'>
            <Outlet />
          </div>
        </div>
        {/* end::Form */}

        {/* begin::Footer */}
        {/* end::Footer */}
  
      {/* end::Body */}

      {/* begin::Aside */}
      {/* end::Aside */}
    </div>
  )
}
export {AuthLayout}
