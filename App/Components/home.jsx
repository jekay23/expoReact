import React from 'react';

export default function Home(props) {
    return (
        <div className={'d-flex justify-content-evenly mt-5'}>
            <a href={'/admin/compilations'}><button className={'mmd-button'} type={'button'}>Подборки</button></a>
            <a href={'/admin/profiles'}><button className={'mmd-button'} type={'button'}>Профили</button></a>
            <a href={'/admin/photos'}><button className={'mmd-button'} type={'button'}>Фото</button></a>
        </div>
    )
}