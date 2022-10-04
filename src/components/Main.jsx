import React from 'react'
import coke from '../assets/can-pepsi.png'
import cerotres from '../assets/0.3.png'
import cerotrestres from '../assets/0.33.png'
import cerocinco from '../assets/0.5.png'
import uno from '../assets/1.png'
import unocinco from '../assets/1.5.png'
import dos from "../assets/2.png";

const Main = () => {
    return (
        <div className='main'>
            <div className='arrow_left'>
                <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div className='info'>
                <h1 className='h1_main'>Pepsi Classic</h1>
                <p className='p_main'>Carbonate Water, High Fructose, Corn Syrup, Caramel Color, Sugar, Phosporic Acid, Caffeine, Citric Acid, Natural Flavor</p>
                <h3 className='h3_main'>NUTRICION FACTS</h3>
                <div className='container_main'>
                    <div className='container-nutrition'>
                        <div className="info_nutrition">
                            <div>Amount <br /> per serving</div>
                            <h3>150 cl</h3>
                            <div className='colornew'>7.5%</div>
                        </div>
                        <div className="info_nutrition">
                            <div>Total Fast</div>
                            <h3>0g</h3>
                            <div className='colornew'>0%</div>
                        </div>
                        <div className="info_nutrition">
                            <div>Sodium</div>
                            <h3>30mg</h3>
                            <div className='colornew'>1%</div>
                        </div>
                        <div className="info_nutrition">
                            <div>Total Carbohydrate</div>
                            <h3>41g</h3>
                            <div className='colornew'>14%</div>
                        </div>
                        <div className="info_nutrition">
                            <div>Protein</div>
                            <h3>0g</h3>
                            <div className='colornew'>0%</div>
                        </div>
                    </div>
                    <p>Not a significant source of theird nutrients</p>
                    <p>*Percent Daily Values are based on a 200 calorie diet</p>
                </div>
                <div className='buy_now'>BUY NOW</div>
                <div className='img_container_bottle'>
                    <img className='bottle_img' src={cerotres} alt="" />
                    <img className='bottle_img' src={cerotrestres} alt="" />
                    <img className='bottle_img' src={cerocinco} alt="" />
                    <img className='bottle_img' src={uno} alt="" />
                    <img className='bottle_img' src={unocinco} alt="" />
                    <img className='bottle_img' src={dos} alt="" />
                </div>
            </div>
            <div className='image'>
                <img src={coke} alt="pepsi" className='pepsi_main' />
            </div>
            <div className='arrow_rigth'>
                <span className='font_main'>
                    ZERO SUGAR<i class="fa-solid fa-arrow-right"></i>
                </span>
            </div>
        </div>
    )
}

export default Main