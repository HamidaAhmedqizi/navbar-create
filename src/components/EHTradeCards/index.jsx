import React from 'react'
import EhCardsData from "../EhCardsData"
import './style.css'

const EhTradeCards = () => {
    return (
        <section className='EhTradeCards'>
            <div className="EhTradeCrds_container">
                <div className="ehtrade_top_container">
                    <h2 className='ehtrade_h2'>Niyə Biz ?</h2>
                </div>
                <div className="ehtrade_bottom_container">
                    {
                        EhCardsData.map((item, idx) => {
                            return (
                                <div className="ehtrade_card" key={idx}>
                                    <div className="ehtrade_icon">
                                        <div className="ehtrade-icon_a">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="ehtrade_text_cont">
                                        <h4 className='ehtrade_title_h4'>{item.title}</h4>
                                        <p className='ehtrade_desc_p'>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default EhTradeCards