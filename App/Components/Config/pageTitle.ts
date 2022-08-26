const pageTitles = {
    'compilations': 'Подборки',
    'profiles': 'Профили',
    'photos': 'Фото',
    'compilation': 'Подборка'
};

export default function setPageTitle(pageType: keyof typeof pageTitles)
{
    document.title = pageTitles[pageType] + ' | Expo admin';
}