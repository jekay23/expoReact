import React from 'react';
import Link from './Components/link';

export default function Home() {
    return (
        <div className={'d-flex justify-content-evenly mt-5'}>
            <Link href={'/admin/compilations'} name={'Подборки'} style={'button'} />
            <Link href={'/admin/profiles'} name={'Профили'} style={'button'} />
            <Link href={'/admin/photos'} name={'Фото'} style={'button'} />
        </div>
    )
}