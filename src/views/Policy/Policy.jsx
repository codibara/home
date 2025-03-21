import '../../index.css'
import logo from '/assets/codibara-sample-logo.png';
import PolicyData from '../../data/privacyPolicy.json';

import Header from '../../shared/Header/Header';

export default function Policy() {
    return(
        <>
            <Header />
            <div className='max-w-[1440px] min-h-[calc(100svh-380px)] px-5 md:px-24 mx-auto'>
                <div className='font-noto text-body mb-11 mt-12'>
                    Your privacy is our top priority. 
                We understand the importance of protecting your personal information and ensuring the safety of your data. This Privacy Policy outlines how CODIBARA collects, uses, and safeguards your information in compliance with Apple's App Store and Google Play Store guidelines for privacy details.</div>
                {PolicyData.map((data)=> (
                    <div className='flex flex-col lg:flex-row justify-start gap-3 mb-6' key={data.id}>
                        <div className='lg:w-1/4 font-noto font-semibold text-secondary'>
                            {data.id}. {data.subtitle}:
                        </div>
                        <div className='lg:w-3/4 font-noto text-body'>
                            {data.content}
                        </div>
                    </div>
                ))}   
                <p className='font-noto font-light text-secondary text-xs text-right italic mb-5'>This policy is effective as of 01/01/2025.</p>
            </div>

        </>
    )
}