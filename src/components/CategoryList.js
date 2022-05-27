import React from 'react';
import Category from './Category';

const CategoryList = ({productCollection}) => {
  return (
                <div className='home_row'>
                <Category
                    id='nO5a1GExsyejdq3GJs8p'
                    title="Home"
                    image='https://s7ap1.scene7.com/is/image/bigw/W2487_NewSeason_CT_QuiltCovers_220224?$cms-max-image-threshold$&fmt=webp-alpha&wid=352&fit=hfit%2C1&qlt=88'
                    items={productCollection.Home}
                />
                <Category
                    id='fwcZLzIQxobEefZOgnk1'
                    title="Electrical"
                    image="https://s7ap1.scene7.com/is/image/bigw/Gaming%20CT-1?$cms-max-image-threshold$&fmt=webp-alpha&wid=352&fit=hfit%2C1&qlt=88"
                    items={productCollection.Electrical}
                />
                <Category
                    id='laPfdHI3CZzeJoj5mVki'
                    title="Beauty"
                    image="https://s7ap1.scene7.com/is/image/bigw/Beauty_CT_make-up_210701?$cms-max-image-threshold$&fmt=webp-alpha&wid=352&fit=hfit%2C1&qlt=88"
                    items={productCollection.Beauty}
                />
                <Category
                    id='Byrbn49hFzcoMxBHbDpH'
                    title="Pets"
                    image="https://s7ap1.scene7.com/is/image/bigw/7406_CT_Pets_201214-new?$cms-max-image-threshold$&fmt=webp-alpha&wid=352&fit=hfit%2C1&qlt=88"
                    items={productCollection.Pets}
                />
                <Category
                    id='laPfdHI3CZzeJoj5mVki'
                    title="Toy"
                    image="https://s7ap1.scene7.com/is/image/bigw/Home_CT_lego-conductor_210513?$cms-max-image-threshold$&fmt=webp-alpha&wid=352&fit=hfit%2C1&qlt=88"
                    items={productCollection.Toy}
                />
                <Category
                    id='LXFKK8pDe3sL1m8GHRQj'
                    title="Gift"
                    image="https://s7ap1.scene7.com/is/image/bigw/Gifting%20CT?$cms-max-image-threshold$&fmt=webp-alpha&wid=352&fit=hfit%2C1&qlt=88"
                    items={productCollection.Gift}
                />                
            </div>
  )
}

export default CategoryList;