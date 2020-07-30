import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.mainImg}>
                <img src="https://media.price.ua/wp-content/uploads/2020/02/DC_films.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlok}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
