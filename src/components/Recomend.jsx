import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Recomend() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
      };
    const images = [
        {
            id:1,
            url:'https://occ-0-3071-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABURBNyKLvtOiqqGV4Hvr_TCv_0vsIVwnOS6222UEJJgRUnPIlmdpi09o8WxyJv-W36uSwRWFny8QNxoD2ytNxGU9GvkRQDE47ZPSK4Mbyn4Ls32_y-YlQJ9066Z6s_OkejUI3wP6pKknrV--eDsbgqq2T7jn7ExStiFf10OG1L4nzjmkQ9J8eqTrDJsyYzKQ76aIisEkuIJ44522DmQ43BcnrCT-GRYxXIw7Wm3IxaOOYKPymsCVIjYTQZPn4M-sfam0yTo7LXzgvcSoJIhizj2c7lHwfckY0Q8qBjDsf0St454YqqU3u8Iwo4LIgSPJES7CEAbUXy-ACAwdc3felI8.webp'
        },
        {
            id:2,
            url:'https://occ-0-3071-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfLVuuVfs_wZnM9tnilDfogcMIWgPku1LeawQptCdOzIOTM_wSOkAYXABRudLsalnkll6XGY_9VqlUfjhD5RYwjCj1dLSfXQ6LW41_4sq1m4qlmbuitRLMe7akZXaKpn1DI_i0CW9ng_aY82m3wiytS2JP9odXMCaBrPhrf6nC53huY0srtAMMoJG8zSivlA-CkCDyAdVITsX_W0kMuUxyFYt-InQJvRFQXvAdSbxrg0r015BgeMqNEBCLk5UZdMk7N-xw0Kdv-OQvw-_whpqDawvDtzqTPd1L0rVuZiwJRX4mwXd2KNC1LIKM3stck4rkikAl4eqjlNwH0_V6izv_5pw77E80IRvVdgjzjb-dld9NxY8jI.webp'
        },
        {
            id:3,
            url:'https://occ-0-3071-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQzLw6izRePochB75BLdYxa4QBLPE8UQTko-XcM8tcPafQf-fYtx5_DqPsdhCetiCqWrPmz5SbN9O2uHzdwcSKz7CM9XNRAUnbA5q_10kOfWKtVmyqOQF-l1zuHnKOgY5yAe-oEmYsTUUF6CfQadrQs_W6TEgY9pP9qR-sxOuFGKkc0Sp9Lnwx72GWfd1i3mmXNtcEty1WYWjmWYn1OCxlV6c-Rx6KXocb1Lbz3sM1tDHkEenDO6qg9lJHqCMhVsvV2YJ1TYA5tI2WrCExPtCMi0_HpfORrvsE8Mz6b1nzGcqH9sae8BSFH0wCeA9KpB77m46NGgh4Z_jUPulduv150.webp'
        },
        {
            id:4,
            url:'https://occ-0-3071-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWWCLODooJEzEC-s6h-mxyoF7uULkMgzZUNqk9b0DEQF1GbeFo7StAZhvQWgstxCx8fbQAH1A2AzORtdFuHoAcNds4DBdo2DCQRUsGQBai4fXbEQcyQ15UGZ2vDSg7K7JFpd.webp'
        },
        {
            id:5,
            url:'https://occ-0-3071-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABezydfhqHPFWMt-MnEPGuF8QSkf79dk0fUkxvgt1oUg2twHmg_mYIyIIchiPUa6k6j-2B20b4fnjJPHshfn8llBCapZ-4UqwI8IfFQ1-C0AwHq6niOTJAkZMc79psR68WLczhhTFi6HI15LvjIqt2sNWx9MRS0jSJB7LPr6UOxvgCNjK3CPaRWyiPNtNq7HPMuPB9P-i6Wh7VVPDT7gqBsW0NkmtKkpqNbHETG3JspvduJTdSDdPnF1_M_l9e4--ZDk4DyTD-TtZFHJ_26rZ1dxfZteP.webp'
        },
        {
            id:6,
            url:'https://occ-0-3071-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZFgmuJHhOCLyB4EH_U-OdHNbIwWQnB1-Q30uho0Pij_GacIlvdqgeAn0Nbt8vDLXHsgj76GbHkjOZqVMvFGyx39e25xYCjXY8g.webp'
        }
    ];
  return (
    <div className='h-screen'>
        <div className=' w-3/4 m-auto'>
            <Slider {...settings}>
                {images.map((item, index)=>(
                    <div key={index}>
                        <img src={item.url} className='w-60 h-60 object-contain'/>
                    </div>
                ))}
        </Slider>
        </div>
        <div className=''>  
                <h1 className='m-auto w-3/4 pt-16 text-white text-2xl font-bold'>More Reasons to Join</h1>
               
                <div className='flex flex-wrap pt-5 gap-8 w-3/4 m-auto  pb-4'>
                    <div className='bg-gradient-to-t from-[#172049] to-[#3a0b0bfa] rounded-xl w-3/4 m-auto h-[19em] w-[14em]'>
                        <h1 className='text-white font-semibold text-xl pt-2 pb-3 m-4'>Enjoy on your TV</h1>
                        <p className='text-[#b4b3b3] pb-4 m-4'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div className='bg-gradient-to-t from-[#172049] to-[#3a0b0bfa] rounded-xl w-3/4 m-auto h-[19em] w-[14em]'>
                        <h1 className='text-white font-semibold text-xl pt-2 pb-3 m-4'>Download your shows to watch offline</h1>
                        <p className='text-[#b4b3b3] pb-4 m-4'>Save your favorites easily and always have something to watch.</p>
                    </div>
                    <div className='bg-gradient-to-t from-[#172049] to-[#3a0b0bfa] rounded-xl w-3/4 m-auto h-[19em] w-[14em]'>
                        <h1 className='text-white font-semibold text-xl pt-2 pb-3 m-4'>Watch everywhere</h1>
                        <p className='text-[#b4b3b3] pb-4 m-4'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className='bg-gradient-to-t from-[#172049] to-[#3a0b0bfa] rounded-xl w-3/4 m-auto h-[19em] w-[14em]'>
                        <h1 className='text-white font-semibold text-xl pt-2 pb-3 m-4'>Create profiles for kids</h1>
                        <p className='text-[#b4b3b3] pb-4 m-4'>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}
