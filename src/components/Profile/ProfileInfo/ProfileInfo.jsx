import React from 'react';
import s from './ProfileInfo.module.css';
import banner from '../../../images/nature-wallpapers.jpg';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.mainImg}>
                {/*<img src="https://media.price.ua/wp-content/uploads/2020/02/DC_films.jpg" alt=""/>*/}
                <img src={banner} alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;
