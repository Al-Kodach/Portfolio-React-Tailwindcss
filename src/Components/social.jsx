import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

export default function SocialLinks() {
    return (
        <div className="bg-slate-900 text-gray-100">
            <div className="container">
                <div className='flex justify-between items-center'>
                    <a className='socail text md:inline-flex items-center ' href='https://www.linkedin.com/in/alidu-ali-31078a258/' target='_blank'>
                       LinkedIn
                       <Icon icon="fa-brands:linkedin" width="50" className='mt-3 md:ml-2' />
                    </a>
                    
                    <a className='socail text md:inline-flex items-center' href='https://github.com/Al-Kodach' target='_blank'>
                       Github 
                       <Icon icon="fa6-brands:github" width="50" className='mt-3 md:ml-2' />
                    </a>  
                    <a className='socail text md:inline-flex items-center ' href='https://twitter.com/AliAlidu2' target='_blank'>
                       Twitter 
                       <Icon icon="fa6-brands:square-twitter" width='50' className='mt-3 md:ml-2'/>
                    </a>
                </div>
            </div>
            <small className='font-mono'>©2023® by Alidu Ali B.</small>
        </div>
    )
}
 